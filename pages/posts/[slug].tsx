import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import type PostType from '../../interfaces/post';
import { MDXRemote } from 'next-mdx-remote';

// Import custom components for MDX
import Greeting from '../../components/greetings';

const components = { Greeting }; // Add more custom components as needed

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  source: any; // Added for MDX source
}

export default function Post({ post, morePosts, preview, source }: Props) {
  const router = useRouter();
  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                tags={post.tags}
              />
              {/* Render MDX content directly without PostBody wrapper */}
              <div className="max-w-2xl mx-auto">
                <MDXRemote {...source} components={components} />
              </div>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'tags',
    'content',
    'ogImage',
    'coverImage',
  ]);

  // Use the updated markdownToHtml function for MDX content processing
  const mdxSource = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content: post.content,
      },
      source: mdxSource, // Pass the MDX source for rendering
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
