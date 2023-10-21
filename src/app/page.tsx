import { SectionOne, SectionThree, SectionTwo } from '../pages/homePage'
import Image from 'next/image'
import Head from 'next/head'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0">
      <Head>
        <title>Consumer Rights Test</title>
        <meta name="description" content="Consumer Rights Test." />
        <meta property="og:title" content="Consumer Rights Test" />
        <meta property="og:description" content="Consumer Rights Test." />
        <link rel="icon" href="./app/favicon.ico" />
      </Head>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  )
}
