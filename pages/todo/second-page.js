// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  // const res = await fetch(`https://.../data`)
  // const data = await res.json()

  // Pass data to the page via props
  return { 
    props: { 
      serverSide: (new Date()).toISOString(), 
    } 
  }
}

export default function SecondPost() {
  return (
    <div>
      <h1>Second Page!!! Hi there!!!!!!!!!</h1>
      {props.serverSide}
    </div>
  );
}