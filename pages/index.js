import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teckation App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
      <div>
        <p className="font-bold text-xl mt-3 text-center">Teckation Main page coming up soon ...</p>
      </div>
      <section className="flex min-h-screen justify-center items-center">
        <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
          <img
            className="w-full"
            src="https://tailwindcss.com/img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Techies + Vacation ❤️</div>
            <p className="text-grey-darker text-base">
              Techies and Vacation are a match made in heaven, check out this article on how
              you can combine these two to enjoy your 2022 season.
            </p>
          </div>
        </div>
      </section>
    </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}