import "./styles/reset.css"
import "./styles/App.css"
import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar/Navbar"
import { About } from "./components/About/About";
import { Professional } from "./components/Professional/Professional";
import { Loading } from "./components/Loading/Loading";

export function App() {

    const [loader, setLoader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3500);
        return clearTimeout(loader);
    }, []);
    return (
        <div>
            {loader ? (
                <Loading />
            ) : (  
                <div id="teste">
                    <Navbar />
                    <About />
                    <Professional />
                </div>
            )}
        </div>
    );
}