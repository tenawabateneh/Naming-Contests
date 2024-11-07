import { useState, useEffect } from "react"

import ContestList from "./contest-list";
import ContestPreview from "./contest-preview";
import Contest from "./contest";

const App = ({ initialData }) => {
    // make these are the accepted values for typescript: "contest" | "contestList"
    const [page, setPage] = useState<"contest" | "contestList">(initialData.currentContest ? "contest" : "contestList")
    const [currentContest, setCurrentContest] = useState<string | undefined>(initialData.currentContest)

    const [counter, setCounter] = useState(0);

    // back and forward click handler for history record
    useEffect(() => {
        // when the URL change, need to make the application aware of it by using event handler hook
        // which is onPonState, so we can keep aware of it during the url go forward or backward.
        window.onpopstate = (historyEvent) => {
            // let me decide which page is gonna render based on the state record value
            const newPage = historyEvent.state?.contestId ? "contest" : "contestList"
            setPage(newPage)
            setCurrentContest({ id: historyEvent.state?.contestId })
        }
    }, [])

    const navigateToContestPreview = (contestId) => {
        // pushing the history data
        window.history.pushState({ contestId }, "", `/contest/${contestId}`)

        setPage("contest")
        setCurrentContest({ id: contestId })
    }

    const navigateToContestList = (contestId) => {
        // pushing the history data
        window.history.pushState({}, "", `/`)

        setPage("contestList")
        setCurrentContest(undefined)
    }

    const pageContent = () => {
        switch (page) {
            case "contestList":
                return (
                    // passing down props known as props drilling
                    // insted of this use the useContext hook is recommended
                    <ContestList initialContents={initialData.contests} onContestPreviewClicked={navigateToContestPreview} />
                )
            case "contest":
                return <Contest initialContent={currentContest} onContestListClick={navigateToContestList} />;
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
