import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(pageContext) {
    const initialProps = await Document.getInitialProps(pageContext)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito&family=Overpass+Mono&family=Rosario&family=Prompt&display=swap'
            rel='stylesheet'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <body className='bg-synthgreen-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
