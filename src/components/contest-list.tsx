
import React, { useState, useEffect } from 'react';

import Header from './header';
import ContestPreview from './contest-preview';
import { fetchContestList } from '../api-client';

const ContestList = ({ initialContents = [], onContestPreviewClicked }) => {  // Destructure and set a default empty array
    const [contents, setContents] = useState(initialContents);  // State to hold contest list

    useEffect(() => {
        // debugger;
        // // Fetch contests data from the API server and rendering to the Javascript( But what happen if there's no Javascript)
        // fetchContestList().then((contests) => {
        //     console.log(contests);

        //     // Ensure that response data is an array before setting it to state
        //     if (Array.isArray(contests)) {
        //         setContents(contests);  // Update state with fetched contests
        //     } else {
        //         console.error('Unexpected response data format:', contests);
        //     }
        // })
        //     .catch((error) => {
        //         console.error('Error fetching contests:', error);
        //     });
    }, []);  // Empty dependency array ensures this runs only once on component mount

    return (
        <>
            <Header headerMessage={"Naming Contests"} />
            <div className="contest-list">
                {contents.length > 0 ? (
                    contents.map(contest => (
                        <ContestPreview key={contest.id} contest={contest} onContestPreviewClicked onClick={onContestPreviewClicked} />
                    ))
                ) : (
                    <p>No contests available</p>  // Handle case where there are no contests
                )}
            </div>
        </>
    );
};

export default ContestList;
