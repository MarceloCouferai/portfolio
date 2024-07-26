import "./styles/reset.css"
import "./styles/App.css"
import React from "react";
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./components/About/About";
//import { Loading } from "./components/Loading/Loading";


export function App() {
   return(
       <> 
            {/* <Loading /> */}
            <Navbar />
            <About />
       </>
   )

    }