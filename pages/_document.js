import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito&family=Overpass+Mono&family=Rosario&family=Prompt&display=swap" rel="stylesheet" />
        </Head>
        <body className='container bg-yellow-50 w-auto'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument