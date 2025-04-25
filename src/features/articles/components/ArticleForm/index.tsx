"use client";
import * as Yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, Formik, FormikProps, FormikValues } from "formik";
import dynamic from "next/dynamic";
import { FormInput } from "@/ui/FormInput";
import { ImageInput } from "@/ui/ImageInput";
import { Routes } from "@/consts/routes";
import { uploadImage } from "@/features/images/lib/uploadImage";
import removeMd from "remove-markdown";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const ArticleFormSchema = Yup.object().shape({
  title: Yup.string().required("Articles title cannot be empty string"),
  content: Yup.string().required("Content cannot be empty"),
});

interface ArticleFormProps {
  type: "edit" | "create";
  innerRef?: React.Ref<FormikProps<FormikValues>>;
}

export const ArticleForm: React.FC<ArticleFormProps> = (props) => {
  const [image, setImage] = useState<File>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string>("");
  const router = useRouter();

  return (
    <>
      <Formik
        innerRef={props.innerRef}
        initialValues={{ title: "", image: "", content: "" }}
        validationSchema={ArticleFormSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setError("");
          setSubmitting(true);
          try {
            if (!image) {
              setError("Image cannot be empty");
              setSubmitting(false);
              return;
            }

            const uploadedImageId = (await uploadImage(image))[0].imageId;
            const perex = removeMd(values.content)
              .replace(/\n+/g, " ")
              .trim()
              .slice(0, 312)
              .trim();
            // const purifiedContent =
            const res = await fetch("/api/articles", {
              method: "POST",
              body: JSON.stringify({
                title: values.title,
                content: values.content,
                perex: perex,
                imageId: uploadedImageId,
              }),
            });

            if (!res.ok) {
              throw new Error(res.statusText);
            }

            router.push(Routes.DASHBOARD);
          } catch (err) {
            console.error("Im in error!!!");
            setError(String(err));
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <FormInput
              name={"title"}
              type={"text"}
              placeholder={"Article Title"}
              label={"Title"}
            />
            <ImageInput
              name={"image"}
              label={"Featured Image"}
              setFieldValue={setFieldValue}
              setImage={setImage}
            />

            <div>
              <label>Content (Markdown)</label>
              <MDEditor
                value={values.content}
                onChange={(value) => setFieldValue("content", value)}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
