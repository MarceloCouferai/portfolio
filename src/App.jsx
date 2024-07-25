import React from "react";
import "./styles/App.css"
import "./styles/reset.css"
import { Navbar } from "./components/Navbar/Navbar"


export class App extends React.Component {
    render(){
        return(
            <> 
                <Navbar />
            </>
            
        )
    }
}