import Link from 'next/link';
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";

export async function getServerSideProps() {
  const response = await fetch("http://www.json-generator.com/api/json/get/cgcEEPXOJK?indent=2")
  const users = await response.json()

  return { props: {users}}
}

export default function Users({users}) {

  return (
    <div>
      <Button variant="contained" color="secondary">
        <Link href="/">Return to the homepage</Link>
      </Button>
      <Button onClick={users} variant="contained" color="primary">
        Download user data
      </Button>
      <main>
        {
          props.users.map(user => {
            return(
              <div key={user._id}>
                <p>{user.name} has {user.eyeColor}</p>
              </div>
            )
          })
        }
      </main>
    </div>
  );
}


