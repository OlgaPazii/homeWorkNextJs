import Link from 'next/link';

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  //const res = await fetch('https://.../posts')
  //const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      num: Math.floor(Math.random() * 100),
      date: (new Date()).toISOString(),
    },
  }
}

//export default Blog

export default function StaticPage(props) {
 
  return (
    <div>
      <h1>First Post</h1>
      <Link href="/todo/second-page"><a>second page!</a></Link>
      {props.num}
      {props.date}
  </div>
  );
}
