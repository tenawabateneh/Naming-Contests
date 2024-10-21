import { useState, useEffect } from "react"

import Header from './header'
import ContestList from "./contest-list";

const App = ({ initialContents }) => {
    const [counter, setCounter] = useState(0);

    return (
        <div className="container" >
            <Header headerMessage={"Naming Contests"} />

            <ContestList initialContents={initialContents.contests} />

            <button onClick={() => {
                setCounter(counter + 1);
            }}
            >
                Let' s Add Something {counter}
            </button>
        </div>
    );
};

export default App
