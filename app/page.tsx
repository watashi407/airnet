"use client";
import {useEffect, useState } from "react";
// import {fetchApi} from "./lib/actions/data"

export default  function Home() {

  let [knowledges , setKnowledge] = useState([])

  // useEffect(()=>{
  //   fetchApi().then((data) => setKnowledge(data))
  // },[])

  return (

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div> Knowledgebase </div>
      {/* {
        knowledges.map((knowledge : any) => {
          <div key={knowledge?.id}>

          </div>


        })
      } */}
    </main>


  );
}
