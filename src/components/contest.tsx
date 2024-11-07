import React, { useEffect, useState } from 'react'

import { fetchContest } from '../api-client'
import Header from './header'

const Contest = ({ initialContent, onContestListClick }) => {

    const [contest, setContest] = useState(initialContent)

    useEffect(() => {
        if (!contest.name) {
            fetchContest(contest.id).then((contest) => {
                setContest(contest)
            })
        }

    }, [contest.id, contest.name])

    const handleContestListClick = (event) => {
        event.preventDefault()          // This is very important

        onContestListClick()
    }


    return (
        <>
            <Header headerMessage={contest.id} />
            <div className="contest">
                <div className="title">
                    Contest Description
                </div>
                <div className="description">
                    {contest.description}
                </div>
                <a href="/" className="link" onClick={handleContestListClick}
                >Back To Contest List
                </a>
            </div>
        </>
    )
}

export default Contest
