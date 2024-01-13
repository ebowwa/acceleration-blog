// components/post-preview.tsx
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import styles from '../styles/Tags.module.css'; // Ensure the styles are imported

type PostPreviewProps = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[]; // Add tags to the props
};

const PostPreview = ({ title, coverImage, date, slug, excerpt, tags }: PostPreviewProps) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {/* Tag bubbles */}
      <div className={styles.tagContainer}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tagBubble}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default PostPreview;
