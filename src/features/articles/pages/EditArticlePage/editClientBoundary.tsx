"use client";

import { Heading } from "@/ui/Heading";
import { ArticleForm } from "@/features/articles/components/ArticleForm";
import { useRef } from "react";
import { FormikProps, FormikValues } from "formik";
import { Button } from "@/ui/Button";
import { Article } from "@/features/articles/lib/server/getArticles.server";

interface Props {
  article: Article;
}

export const EditArticlePageClientBoundary = (props: Props) => {
  const formRef = useRef<FormikProps<FormikValues> | null>(null);

  const PublishArticleButton = (
    <Button
      color={"primary"}
      type={"submit"}
      onClick={(e) => {
        e.preventDefault();
        formRef.current?.submitForm();
      }}
    >
      Publish Article
    </Button>
  );
  return (
    <>
      <Heading
        headingLevelStyle={1}
        headingLevel={1}
        elementToRight={PublishArticleButton}
      >
        Edit article
      </Heading>
      <ArticleForm
        type={"edit"}
        innerRef={formRef}
        intialArticleToEdit={props.article}
      />
    </>
  );
};
