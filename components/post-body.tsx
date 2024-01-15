import { useEffect, useState } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

type Props = {
  content: string;
}

const PostBody = ({ content }: Props) => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkHtml)
      .process(content)
      .then(file => {
        setHtmlContent(String(file));
      })
      .catch(error => console.error('Error processing markdown:', error));
  }, [content]);

  return (
    <div className="max-w-2xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default PostBody;
