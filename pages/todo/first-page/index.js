import Link from 'next/link';

export default function FirstPost() {
 
  return (
    <div>
      <h1>First Post</h1>
      <Link href="/todo/second-page"><a>second page!</a></Link>
   
  </div>
  );
}
