import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Schickler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Hi, my name is
        </p>
        <Header title="Zach Schickler." />
        <br></br>
        <Header title="I make games." />
        <p className="description">
          I make games.
        </p>
      </main>

      <Footer />
    </div>
  )
}
