import DOMPurify from "isomorphic-dompurify";

interface Props {
  htmlString: string;
}

export const HtmlRenderer = ({ htmlString }: Props) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlString);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};
