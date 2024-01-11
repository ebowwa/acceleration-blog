import React from 'react';
import styled from 'styled-components';

// Styled components for various parts of the page
const PageContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const CurlCommands = styled.pre`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  font-size: 16px;
  white-space: pre-wrap;
  text-align: left;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;

const GptContainer = styled.div`
  margin-top: 20px;
`;

const GptLink = styled.a`
  color: #0070f3;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`;

const GptImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

// React functional component for the CurlPage
const CurlPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>Curl Commands</Title>
      <CurlCommands>
        {`# Search Posts
curl -X GET 'https://acceleration-e14gqajju-ebowwa.vercel.app/api/posts/search/searchPosts?keywords[]=JavaScript&keywords[]=API'

# Get All Posts
curl https://acceleration-iofvxqzaf-ebowwa.vercel.app/api/posts/all

# Sort Posts by Title (Ascending)
curl -X GET 'https://acceleration-e14gqajju-ebowwa.vercel.app/api/posts/sorting/sortPosts?sortBy=title&order=asc'`}
      </CurlCommands>
      <Description>
        Add these endpoints to your GPT, software, or model trainings.
      </Description>
      <GptContainer>
        <GptLink href="https://chat.openai.com/g/g-kddwKMo02-acceleration-blog">
          Explore the acceleration blog GPT
        </GptLink>
        <GptImage 
          src="https://chat.openai.com/g/g-kddwKMo02-acceleration-blog" 
          alt="Acceleration Blog GPT" 
        />
      </GptContainer>
    </PageContainer>
  );
};

export default CurlPage;
