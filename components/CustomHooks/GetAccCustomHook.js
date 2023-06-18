import { useState, useEffect } from 'react';
import app from './firebase';
import {ref , getDatabase , onValue} from "firebase/database"

const GetAccCustomHook = () => {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const db = getDatabase(app)
    const dbRef = ref(db,"accessories")
    onValue(dbRef , (snapshot)=>{
      let data = snapshot.val()
      setAccessories(data)
    })
  }, []);


  return [accessories];
  
};

export default GetAccCustomHook;
