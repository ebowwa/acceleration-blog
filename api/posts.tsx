// api/posts.ts

import fs from 'fs';
import path from 'path';

export default (req, res) => {
  // Define the path to your _posts directory
  const postsDirectory = path.join(process.cwd(), '_posts');

  // Read all the markdown files in the _posts directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Read the content of each markdown file and include it in the JSON response
  const postsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return {
      fileName: fileName.replace('.md', ''), // Include the file name without the .md extension
      content: fileContents, // Include the raw content of the markdown file
    };
  });

  // Respond with the JSON data
  res.status(200).json(postsData);
};
