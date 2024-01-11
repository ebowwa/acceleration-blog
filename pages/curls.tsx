import React from 'react';
import styled from 'styled-components';

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
`;

const GPTInfoContainer = styled.div`
  margin-top: 30px;
`;

const GPTImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;

const GPTInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

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
      <GPTInfoContainer>
        <GPTInfo>
          <GPTImage src="https://your-gpt-image-url-here" alt="GPT Image" />
          <div>
            <p>Acceleration Blog GPT</p>
            <p>
              Connect to the blog via actions. Learn more about it{' '}
              <a href="https://chat.openai.com/g/g-kddwKMo02-acceleration-blog" target="_blank" rel="noopener noreferrer">
                here
              </a>
              .
            </p>
          </div>
        </GPTInfo>
      </GPTInfoContainer>
    </PageContainer>
  );
};

export default CurlPage;
