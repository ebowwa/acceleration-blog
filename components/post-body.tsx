import ReactMarkdown from 'react-markdown';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ReactMarkdown className={markdownStyles['markdown']} children={content} />
    </div>
  )
}

export default PostBody;