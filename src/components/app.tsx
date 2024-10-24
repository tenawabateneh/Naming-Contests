import { useState, useEffect } from "react"

import ContestList from "./contest-list";
import ContestPreview from "./contest-preview";
import Contest from "./contest";

const App = ({ initialContents }) => {
    // make these are the accepted values for typescript: "contest" | "contestList"
    const [page, setPage] = useState<"contest" | "contestList">("contestList")
    const [currentContestId, setCurrentContestId] = useState<string | undefined>()

    const [counter, setCounter] = useState(0);

    const navigateToContestPreview = (contestId) => {
        setPage("contest")
        setCurrentContestId(contestId)
        console.log(contestId)
    }

    const pageContent = () => {
        switch (page) {
            case "contestList":
                return (
                    // passing down props known as props drilling
                    // insted of this use the useContext hook is recommended
                    <ContestList initialContents={initialContents.contests} onContestPreviewClicked={navigateToContestPreview} />
                )
            case "contest":
                return <Contest id={currentContestId} />;
        }
    }

    return (
        <div className="container" >
            {pageContent()}

            <div className="link">
                <button className="link" onClick={() => {
                    setCounter(counter + 1);
                }}
                >
                    Let' s Add Something {counter}
                </button>
            </div>

        </div>
    );
};

export default App
