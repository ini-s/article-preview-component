import Head from 'next/head'
import { Manrope } from 'next/font/google'
import ImageBox from './ImageBox'
import Information from './Information'

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Article Preview Component Using Next js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className={manrope.className}>
        <ImageBox />
        <Information/>
      </main>
    </>
  )
}
