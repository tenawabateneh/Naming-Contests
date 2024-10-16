import { useState, useEffect } from "react"

import Header from './header'
import ContestList from "./contest-list";

const App = ({ initialContent }) => {
    const [counter, setCounter] = useState(0);
    const [content, setContent] = useState([initialContent]);



    console.log("MyContent:", initialContent)
    useEffect(() => {
        //     const intervalID = setInterval(() => {
        //         setCounter(counter + 1)
        //     }, 1000)
        //     return () => {
        //         clearInterval(intervalID)
        //     }
    }, [initialContent]);

    return (
        <div className="container" >
            <div>Hello React</div>
            <Header headerMessage={"Naming Contests"} />

            <ContestList contests={initialContent.contests} />

            <button onClick={() => {
                setCounter(counter + 1);
            }}
            >
                {counter}
            </button>
        </div>
    );
};

export default App
