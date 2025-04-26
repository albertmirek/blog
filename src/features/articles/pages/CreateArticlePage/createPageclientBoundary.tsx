"use client";

import { Heading } from "@/ui/Heading";
import { ArticleForm } from "@/features/articles/components/ArticleForm";
import { useRef } from "react";
import { FormikProps, FormikValues } from "formik";
import { Button } from "@/ui/Button";

export const CreateArticlePageClientBoundary = () => {
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
        Create new article
      </Heading>
      <ArticleForm type={"create"} innerRef={formRef} />
    </>
  );
};
