import ReactDOMServer from 'react-dom/server'

import { fetchContest, fetchContestList } from '../api-client'
import App from '../components/app'

const ServerSideRendering = async (req) => {

    const { contestId } = req.params;

    // make different initioalData based on if there is a contestId or not 
    const initionalData = contestId
        ? { currentContest: await fetchContest(contestId) }
        : { contests: await fetchContestList() }

    const initionalMarkup = ReactDOMServer.renderToString(<App initialData={initionalData} />)
    return { initionalMarkup, initionalData }
}

export default ServerSideRendering
