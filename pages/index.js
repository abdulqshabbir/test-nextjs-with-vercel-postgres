import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = process.env.NODE_ENV === "development" ? "http://localhost:8080" : process.env.NEXT_PUBLIC_SITE_URL

export default function Home() {
  fetch(baseUrl + "/api/hello", { method: "GET" })
    .then(response => response.json())
    .then(dataFromHelloEndpoint => console.log(dataFromHelloEndpoint))

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Fonts in next js */}
      <main className={`${styles.main} ${inter.className}`}>
        {/* Images in next js */}
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </main>
    </>
  )
}
