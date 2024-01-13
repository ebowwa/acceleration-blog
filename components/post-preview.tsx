// components/post-preview.tsx
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import styles from '../styles/Tags.module.css'; // Import the CSS module for tags

type PostPreviewProps = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[]; // Add a new tags prop
};

const PostPreview = ({ title, coverImage, date, slug, excerpt, tags }: PostPreviewProps) => {
  return (
    <div>
      <CoverImage title={title} src={coverImage} slug={slug} />
      <h3 className="text-4xl leading-tight">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </h3>
      <div className="text-lg">
        <DateFormatter dateString={date} />
        <p>{excerpt}</p>
        {/* Render the tags as styled bubbles */}
        <div className={styles.tagContainer}>
          {tags.map(tag => (
            <span key={tag} className={styles.tagBubble}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
