import Button from "@mui/material/Button";
import * as React from "react";
import axios from 'axios';


export default function CreateRecordButton({ createButtonProp }) {
  function create() {
    // alert(createButtonProp);//fetch api yapılacak
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      //this.setState({ persons });
      console.log({persons});
    })
  }


 


  return (
    <Button
      variant="outlined"
      onClick={() => {
        create();
      }}
    >
      Create
    </Button>
  );
}
