import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Preview from './components/previews'
import firebase from 'firebase'
import 'firebase/firestore'

export default function Portfolio() {

    const [projects, setProjects] = useState([])
    const [projectIdList, setProjectIdList] = useState([])

    !firebase.apps.length && firebase.initializeApp({
        apiKey: 'AIzaSyAfRfz7bsAVJ0gNzfVLSu9nByh34-lW1ls',
        authDomain: 'https://console.firebase.google.com/project/alonzoaustin-8314b/firestore/',
        projectId: 'alonzoaustin-8314b'
      });

    var db = firebase.firestore();

 /*    db.collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach(doc => 
                setProjects(doc.data())
            )
    }); */
    projects && projects.length === 0 && db.collection("projects").onSnapshot(data => {
        setProjects(
            data.docs.map(doc => doc.data())
            )
        setProjectIdList(
            data.docs.map(doc => doc.id)
        )
        })

    console.log(projects)

    return (
        <>
        {projects.map((project, index) => 
        <Preview
             id= {projectIdList[index]}
             title={project.title}
             description={project.description}
             showcaseImage={project.showcaseImage}
        />)}
        </>
    )
}