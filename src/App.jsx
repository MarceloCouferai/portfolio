import { useEffect } from "react";
import "./styles/reset.css"
import "./styles/App.css"
import React from "react";
import { Navbar } from "./components/Navbar/Navbar"
import { Loading } from "./components/Loading/Loading";


export function App() {
   return(
       <> 
            <Loading />
            <Navbar />
       </>
   )

    }