// pages/api/posts.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Read posts data from _posts directory
  const postsDirectory = './_posts';
  const filenames = fs.readdirSync(postsDirectory);

  // Read content of each post and create an array of posts
  const posts = filenames.map((filename) => {
    const fullPath = `${postsDirectory}/${filename}`;
    const content = fs.readFileSync(fullPath, 'utf8');
    return {
      filename,
      content,
    };
  });

  // Respond with the list of posts as JSON
  res.status(200).json({ posts });
};
