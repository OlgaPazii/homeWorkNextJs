import Link from 'next/link';
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";

export default function Users({users}) {
  // const [data, setData] = useState([]);

  // const getData = () => {
  //   const url =
  //     "http://www.json-generator.com/api/json/get/cgcEEPXOJK?indent=2";
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // };

  return (
    <div>
      <Button variant="contained" color="secondary">
        <Link href="/">Return to the homepage</Link>
      </Button>
      <Button onClick={getData} variant="contained" color="primary">
        Download user data
      </Button>
      <main>
        {
          users.map(user => {
            return(
              <div key={user._id}>
                <p>{user.name} has {user.eyeColor}</p>
              </div>
            )
          })
        }
      </main>
      {/* {data.map((data) => (
        <Card key={data._id}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Name: {data.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Color eye: {data.eyeColor}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))} */}
    </div>
  );
}

export async function getServerSideProps(props) {
  const response = await fetch("http://www.json-generator.com/api/json/get/cgcEEPXOJK?indent=2")
  const users = await response.json()

  return { props: {users}}
}
