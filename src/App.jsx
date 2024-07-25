import "./styles/reset.css"
import "./styles/App.css"
import React from "react";
//import { Loading } from "./components/Loading/Loading";
import { Navbar } from "./components/Navbar/Navbar"
import { Loading } from "./components/Loading/Loading";


export class App extends React.Component {
    render(){
        return(
            <> 
                {/* <Navbar /> */}
                <Loading />
            </>
        )
    }
}