import React, {useState} from 'react';
import Preview from './components/previews'
import firebase from 'firebase'
import 'firebase/firestore'
import './App.css';

function App() {
	
	    const [offers, setOffers] = useState([])

    !firebase.apps.length && firebase.initializeApp({
        apiKey: 'AIzaSyAfRfz7bsAVJ0gNzfVLSu9nByh34-lW1ls',
        authDomain: 'https://console.firebase.google.com/project/alonzoaustin-8314b/firestore/',
        projectId: 'alonzoaustin-8314b'
      });

    var db = firebase.firestore();
    offers && offers.length === 0 && db.collection("offers").onSnapshot(data => {
        setOffers(
            data.docs.map(doc => doc.data())
            )
        })

    console.log(offers)	
	
  return (
        <>
        {offers.map((project, index) => 
        <Preview
             email={project.email}
             message={project.message}
        />)}
        </>
  );
}

export default App;
