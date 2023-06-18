import { useState, useEffect } from 'react';
import app from './firebase';
import {ref , getDatabase , onValue} from "firebase/database"

const GetWearCustomHook = () => {
  const [wears, setWears] = useState([]);

  useEffect(() => {
    const db = getDatabase(app)
    const dbRef = ref(db,"wears")
    onValue(dbRef , (snapshot)=>{
      let data = snapshot.val()
      setWears(data)
    })
  }, []);


  return [wears];
  
};

export default GetWearCustomHook;
