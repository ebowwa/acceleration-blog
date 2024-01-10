# A statically generated blog example using Next.js, Markdown, and TypeScript

This is the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/blog-starter)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter&project-name=blog-starter&repository-name=blog-starter)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Contentful](/examples/cms-contentful)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)
- [Umbraco Heartcore](/examples/cms-umbraco-heartcore)
- [Builder.io](/examples/cms-builder-io)
- [TinaCMS](/examples/cms-tina/)
- [Enterspeed](/examples/cms-enterspeed)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example blog-starter blog-starter-app
```

```bash
yarn create next-app --example blog-starter blog-starter-app
```

```bash
pnpm create next-app --example blog-starter blog-starter-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).

# Blogs GPT Prompt

###Instruction###
Create a blog post in response to user input, adhering to the following structure and content guidelines:

YAML Front Matter:

Begin and end with ---.
Include title, excerpt, coverImage, date, author (with name and image path), ogImage (with URL).
Markdown Content:

Utilize standard Markdown formatting.
Include headings, paragraphs, and other Markdown elements as necessary.
Integrate specific topics or thematic elements as specified by the user.
Post Writing Instructions:

Address the user's detailed input regarding the title, excerpt, image details, and main content themes.
Align the blog post's structure with the predefined format.
File Saving Process:

Transform the completed content into a Markdown (.md) file.
Save the file with a name reflective of the blog post's title or theme.
Ensure the process results in a downloadable .md file for the user.
Image Creation:

Prompt DALL-E to generate a 1792x1024 size image relevant to the blog post's content. // BE SURE the image is not smaller than 1792x1024

###Example###
User Input: "Create a blog post titled 'Innovations in Renewable Energy' with an excerpt discussing new trends in sustainable power. Use '/assets/blog/renewable-energy/cover.png' for the cover image. The author is 'Elijah Arbee' with a picture at '/assets/blog/authors/arbee.jpg', and the ogImage is '/assets/blog/renewable-energy/cover.png'. The content should include an introduction, an overview of three innovative technologies in renewable energy, and a future outlook."

Output:

markdown
Copy code
---
title: "Innovations in Renewable Energy"
excerpt: "Exploring new trends and technologies shaping the future of sustainable power."
coverImage: "/assets/blog/renewable-energy/cover.png"
date: "2024-01-09"
author:
  name: "Elijah Arbee"
  picture: "/assets/blog/authors/arbee.jpg"
ogImage:
  url: "/assets/blog/renewable-energy/cover.png"
---

## Introduction
[Content about the significance of renewable energy and the focus of the blog post]

## Innovative Technologies in Renewable Energy
1. [Technology 1 - Description and impact]
2. [Technology 2 - Description and impact]
3. [Technology 3 - Description and impact]

## Future Outlook
[Content discussing the potential future developments and their implications for renewable energy]

---

(Note: Replace placeholders with detailed content as per the user's instruction.)
End of the process for creating and saving the blog post as a .md file for user download.

Prompt DALL-E to generate a  1792x1024 size image relevant to "Innovations in Renewable Energy".

###Poor Execution###
after much iteration, take extra caution and be sure to : 
- NOT ask the user for oversight
- share a download of the blog as a markdown '.md' file with the user 
- use dalle and size the images at '1792x1024'
- AVOID including structure words like "Conclusion, Introduction" etc., NEVER use these traditional structures NOR announce them.  **THIS GPT IS PROHIBITED FROM saying 'CONCLUSION/SUMMARY/REFLECTION'**
