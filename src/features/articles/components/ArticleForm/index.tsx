"use client";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import dynamic from "next/dynamic";
import { FormInput } from "@/ui/FormInput";
import { ImageInput } from "@/ui/ImageInput";
import { Routes } from "@/consts/routes";
import { uploadImage } from "@/features/images/lib/uploadImage";
import removeMd from "remove-markdown";
import { Article } from "@/features/articles/lib/server/getArticles.server";
import { updateArticle } from "@/features/articles/lib/client/updateArticle.client";
import { createArticle } from "@/features/articles/lib/client/createArticle.client";
import styles from "./styles.module.scss";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const ArticleFormSchema = Yup.object().shape({
  title: Yup.string().required("Articles title cannot be empty string"),
  content: Yup.string().required("Content cannot be empty"),
});

interface CreateArticleFormProps extends CommonProps {
  type: "create";
  intialArticleToEdit?: undefined;
}

interface EditArticleFormProps extends CommonProps {
  type: "edit";
  intialArticleToEdit: Pick<
    Article,
    "articleId" | "title" | "imageId" | "content"
  >;
}

interface CommonProps {
  innerRef: React.Ref<FormikProps<FormikValues>>;
}

type ArticleFormProps = CreateArticleFormProps | EditArticleFormProps;

const getPerex = (content: string) => {
  return removeMd(content).replace(/\n+/g, " ").trim().slice(0, 312).trim();
};

export const ArticleForm: React.FC<ArticleFormProps> = (props) => {
  const [image, setImage] = useState<File>();
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const isEditVariant = !!(props.type === "edit" && props.intialArticleToEdit);

  useEffect(() => {
    if (error && error !== "") {
      alert(error);
    }
  }, [error]);

  const handleCreate = async (values: FormikValues) => {
    if (!image) {
      setError("Image cannot be empty");
      return;
    }

    const uploadedImageId = (await uploadImage(image))[0].imageId;
    const perex = getPerex(values.content);
    await createArticle({
      title: values.title,
      content: values.content,
      perex: perex,
      imageId: uploadedImageId,
    });

    alert("Article published");
    router.push(Routes.MY_ARTICLES);
  };

  const handleUpdate = async (values: FormikValues) => {
    let imageIdToUpdate: string | undefined = undefined;

    if (image) {
      imageIdToUpdate = (await uploadImage(image))[0].imageId;
    }

    if (
      values.title !== props.intialArticleToEdit!.title ||
      values.content !== props.intialArticleToEdit!.content ||
      !!imageIdToUpdate
    ) {
      const perex = getPerex(values.content);
      await updateArticle({
        articleId: props.intialArticleToEdit!.articleId,
        title: values.title,
        content: values.content,
        perex: perex,
        imageId: imageIdToUpdate,
      });

      alert("Article published");
      router.push(Routes.ARTICLE_DETAIL(props.intialArticleToEdit!.articleId));
    } else {
      alert("Nothing to update");
    }
  };

  return (
    <div className={styles.container}>
      <Formik
        innerRef={props.innerRef}
        initialValues={
          isEditVariant
            ? {
                title: props.intialArticleToEdit!.title,
                content: props.intialArticleToEdit!.content,
              }
            : { title: "", content: "" }
        }
        validationSchema={ArticleFormSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setError("");
          setSubmitting(true);
          try {
            if (props.type === "create") {
              await handleCreate(values);
            } else if (props.type === "edit") {
              await handleUpdate(values);
            }
          } catch (err) {
            setError(String(err));
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {}
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <FormInput
              name={"title"}
              type={"text"}
              placeholder={"My First Article"}
              label={"Article Title"}
              disabled={isSubmitting}
              className={styles.title}
            />
            <ImageInput
              name={"image"}
              label={"Featured image"}
              setImage={setImage}
              existingImageId={props.intialArticleToEdit?.imageId}
              disabled={isSubmitting}
            />

            <div className={styles.markdownWrapper}>
              <label>Content</label>
              <MDEditor
                aria-disabled={isSubmitting}
                value={values.content}
                hideToolbar
                onChange={(value) => setFieldValue("content", value)}
                height={500}
                maxHeight={986}
                data-color-mode={"light"}
                textareaProps={{
                  placeholder: "Supports markdown. Yay!",
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
