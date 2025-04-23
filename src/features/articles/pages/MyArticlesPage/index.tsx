import { withAuth } from "@/features/auth/hoc/withAuth";
import { Header } from "@/components/Header";
import { Heading } from "@/ui/Heading";
import { Button } from "@/ui/Button";
import Link from "next/link";
import { Routes } from "@/consts/routes";
import React from "react";
import { DefaultScreenWrapper } from "@/ui/DefaultScreenWrapper";
import styles from "./styles.module.scss";
import { getArticlesWithComments } from "@/features/articles/lib/getArticlesWithComments";

async function Page() {
  const articlesWithComments = await getArticlesWithComments();

  /*TODO*/
  return (
    <>
      <Header />
      <main>
        <DefaultScreenWrapper>
          <div className={styles.headingWrapper}>
            <Heading headingLevelStyle={1} headingLevel={1}>
              My articles - still lot things to do
            </Heading>
            <Link href={Routes.CREATE_ARTICLE}>
              <Button color={"primary"} useSpan={true}>
                Create new article
              </Button>
            </Link>
          </div>

          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.checkBox}>
                  <input type="checkbox" />
                </th>
                <th className={styles.title}>Article title</th>
                <th className={styles.perex}>Perex</th>
                <th className={styles.author}>Author</th>
                <th className={styles.comments}># of comments</th>
                <th className={styles.actions}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {articlesWithComments.map((article, index) => (
                <tr key={index}>
                  <td className={styles.checkBox}>
                    <input type="checkbox" />
                  </td>
                  <td className={styles.title}>
                    <span>{article.title}</span>
                  </td>
                  <td className={styles.perex}>
                    <span>{article.perex}</span>
                  </td>
                  <td className={styles.author}>
                    <span>Elisabeth Strain</span>
                  </td>
                  <td className={styles.comments}>
                    <span>{article.comments.length}</span>
                  </td>
                  <td className={styles.actions}>
                    <a
                      href={Routes.EDIT_ARTICLE(article.articleId)}
                      className={styles.iconButton}
                    >
                      ✏️️
                    </a>
                    <button className={styles.iconButton}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </DefaultScreenWrapper>
      </main>
    </>
  );
}

export const MyArticlesPage = withAuth(Page);
