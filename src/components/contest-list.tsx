import React, { useState } from 'react'
import ContestPreview from './contest-preview'


const ContestList = ({ contests }) => {

    const [content, setContent] = useState([]);
    return (
        <div className="contest-list">
            {contests.map(contest => {
                return <ContestPreview key={contest.id} contest={contest} />
            }
            )}
        </div>
    )
}

export default ContestList
