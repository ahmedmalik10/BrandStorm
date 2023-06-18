import { useState, useEffect } from 'react';
import app from './firebase';
import {ref , getDatabase , onValue} from "firebase/database"

//console.log(books);

const GetApiCustomHook = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const db = getDatabase(app)
    const dbRef = ref(db,"shoes")
    onValue(dbRef , (snapshot)=>{
      let data = snapshot.val()
      setShoes(data)
    })
  }, []);


  return [shoes];
  
};

export default GetApiCustomHook;
