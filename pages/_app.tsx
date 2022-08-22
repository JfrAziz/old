import '@styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Jafar Aziz</title>
      <link rel="icon" href="/logo.png" />
      <meta
        name="description"
        content="I am a student at PS STIS, Jakarta. I am interested
          in Backend Dev and Data Science, sometimes Full Stack. My
          preferred programming languages are Javascript (Node), Java,
          Python, and PHP."
      />
    </Head>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
      colorScheme: 'dark',
    }}>
      <Component {...pageProps} />
    </MantineProvider>
  </>
}

export default MyApp
