// api/posts.ts

import fs from 'fs';
import path from 'path';

export default (req, res) => {
  // Define the path to your _posts directory
  const postsDirectory = path.join(process.cwd(), '_posts');

  // Read all the markdown files in the _posts directory
  const fileNames = fs.readdirSync(postsDirectory);

  // Read the content of each markdown file and convert it to JSON
  const postsData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // You can parse the markdown content into JSON here if needed
    // For simplicity, let's assume the content is already in JSON format
    const jsonData = JSON.parse(fileContents);

    return jsonData;
  });

  // Respond with the JSON data
  res.status(200).json(postsData);
};
