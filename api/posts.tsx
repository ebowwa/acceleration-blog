// api/posts.tsx

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default (req, res) => {
  // Define the directory where your Markdown files are located
  const postsDirectory = path.join(process.cwd(), '_posts');

  // Read the filenames of all Markdown files in the directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Iterate through the file names and read the content of each Markdown file
  const postsData = fileNames.map((fileName) => {
    // Construct the full path to the Markdown file
    const fullPath = path.join(postsDirectory, fileName);

    // Read the content of the Markdown file
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Parse the front matter and content using gray-matter
    const { data, content } = matter(fileContents);

    // Return the metadata and content as an object
    return {
      metadata: data,
      content,
    };
  });

  // Return the list of posts as JSON
  res.status(200).json(postsData);
};
