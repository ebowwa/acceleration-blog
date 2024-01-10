import Footer from './footer'
import Meta from './meta'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Alert } from './alert' // Import your custom component

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const renderers = {
  image: () => <Footer/>,
  // Map the custom component to the corresponding Markdown element
  customComponentIMade: () => <CustomComponentIMade/>
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>
          {/* Pass the renderers to the ReactMarkdown component */}
          <ReactMarkdown source={children} renderers={renderers} />
        </main>
        {/* <Alert /> */}
      </div>
      <Footer />
    </>
  )
}

export default Layout
