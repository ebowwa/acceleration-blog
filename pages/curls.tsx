import React from 'react';

const CurlPage: React.FC = () => {
  return (
    <div>
      <h1>Curl Commands</h1>
      <pre>
        {`# Search Posts
curl -X GET 'https://acceleration-e14gqajju-ebowwa.vercel.app/api/posts/search/searchPosts?keywords[]=JavaScript&keywords[]=API'

# Get All Posts
curl https://acceleration-iofvxqzaf-ebowwa.vercel.app/api/posts/all

# Sort Posts by Title (Ascending)
curl -X GET 'https://acceleration-e14gqajju-ebowwa.vercel.app/api/posts/sorting/sortPosts?sortBy=title&order=asc'`}
      </pre>
    </div>
  );
};

export default CurlPage;
