// components/hero-post.tsx
import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import styles from '../styles/Tags.module.css'; // Import the CSS module for tags

type HeroPostProps = {
  title: string;
  coverImage: string;
  date: string;
  slug: string;
  excerpt: string;
  tags: string[]; // Include tags in the props
};

const HeroPost = ({ title, coverImage, date, slug, excerpt, tags }: HeroPostProps) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]" className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          {/* Render the tags as styled bubbles */}
          <div className={styles.tagContainer}>
            {tags.map(tag => (
              <span key={tag} className={styles.tagBubble}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
