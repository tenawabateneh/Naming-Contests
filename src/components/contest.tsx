import React, { useEffect, useState } from 'react'

import { fetchContest } from '../api-client'
import Header from './header'

const Contest = ({ id }) => {

    const [contest, setContest] = useState({})

    useEffect(() => {
        fetchContest(id).then((contest) => {
            setContest(contest)
        })
    }, [id])
    return (
        <>
            <Header headerMessage={contest.id}/>
            <div className="contest">
                <div className="title">
                    Contest Description
                </div>
                <div className="description">
                    {contest.description}
                </div>
            </div>
        </>
    )
}

export default Contest
