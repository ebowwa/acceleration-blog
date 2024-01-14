A statically generated blog using Next.js, Markdown, and TypeScript

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

# Curls
```
- curl -X GET 'https://a-cell.vercel.app/api/posts/search/searchPosts?keywords[]=JavaScript&keywords[]=API'
- curl https://a-cell.vercel.app/api/posts/all
- curl -X GET 'https://a-cell.vercel.app/api/posts/sorting/sortPosts?sortBy=title&order=asc'
```

To BE ADDED: 
```
personal gpt's for pay/usage
calendar
games
blog search - indexed blogs
gpt to blogs
`.mdx` support
```