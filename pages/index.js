import Head from 'next/head'
import Image from 'next/image'
import Gallery from '../components/Gallery'
import Hero from '../components/Hero'
import Insta from '../components/Insta'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
               <Hero heading='Capture Photography' message='I capture moments in nature and keep them alive.'/>
               <Gallery/>
               <Insta/>
          </div>
  )
}
