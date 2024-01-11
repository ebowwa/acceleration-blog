import React, { useState, useEffect } from 'react';

const CurlResultsPage: React.FC = () => {
  const [searchResults, setSearchResults] = useState<string>('');
  const [allResults, setAllResults] = useState<string>('');
  const [sortResults, setSortResults] = useState<string>('');

  useEffect(() => {
    // Perform the first curl command
    fetch('https://acceleration-e14gqajju-ebowwa.vercel.app/api/posts/search/searchPosts?keywords[]=JavaScript&keywords[]=API')
      .then((response) => response.text())
      .then((data) => setSearchResults(data))
      .catch((error) => console.error(error));

    // Perform the second curl command
    fetch('https://acceleration-iofvxqzaf-ebowwa.vercel.app/api/posts/all')
      .then((response) => response.text())
      .then((data) => setAllResults(data))
      .catch((error) => console.error(error));

    // Perform the third curl command
    fetch('https://acceleration-e14gqajju-ebowwa.vercel.app/api/posts/sorting/sortPosts?sortBy=title&order=asc')
      .then((response) => response.text())
      .then((data) => setSortResults(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Curl Results Page</h1>
      
      <h2>Search Results:</h2>
      <pre>{searchResults}</pre>

      <h2>All Results:</h2>
      <pre>{allResults}</pre>

      <h2>Sort Results:</h2>
      <pre>{sortResults}</pre>
    </div>
  );
};

export default CurlResultsPage;
