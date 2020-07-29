//import Head from 'next/head'
import Link from "next/link";
import Button from "@material-ui/core/Button";

export default function Home() {

  const num = Math.floor(Math.random() * 100);
  return (
    <div className="container">
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="/todo/static-page">Next.js!</a>
          {num}
        </h1>
      </main> */}
      <Button variant="contained">
        <Link href="/users">
          <a>Go to users's page</a>
        </Link>
      </Button>
    </div>
  )
}
