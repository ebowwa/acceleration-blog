import ReactMarkdown from 'react-markdown';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <ReactMarkdown 
        className={markdownStyles['markdown']} 
        children={content} 
        components={{
          h1: ({node, ...props}) => <h1 className="text-4xl mt-12 mb-6 leading-tight" {...props} />,
          h2: ({node, ...props}) => <h2 className="text-3xl mt-12 mb-4 leading-snug" {...props} />,
          // Add similar components for h3, h4, etc. if needed
        }}
      />
    </div>
  )
}

export default PostBody;