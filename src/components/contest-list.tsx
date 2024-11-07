
import React, { useState, useEffect } from 'react';

import Header from './header';
import ContestPreview from './contest-preview';
import { fetchContestList } from '../api-client';

const ContestList = ({ initialContents, onContestPreviewClicked }) => {  // Destructure and set a default empty array
    const [contents, setContents] = useState(initialContents ?? []);  // State to hold contest list

    useEffect(() => {
        // debugger;
        // Fetch contests data from the API server and rendering to the 
        // Javascript( But what happen if there's no Javascript): I fixed by doing server side rendering

        // if there is no initialContents, do fetching here unless I don't need fetching b/c there'll be server side render
        if (!initialContents) {
            fetchContestList().then((contests) => {
                setContents(contests);  // Update state with fetched contests
            })
        }

    }, [initialContents]);  // Empty dependency array ensures this runs only once on component mount

    return (
        <>
            <Header headerMessage="Naming Contests" />
            <div className="contest-list">
                {
                    contents.map(contest => {
                        return (
                            <ContestPreview
                                key={contest.id}
                                contest={contest}
                                onClick={onContestPreviewClicked} />
                        )
                    })
                }
            </div>
        </>
    );
};

export default ContestList;
