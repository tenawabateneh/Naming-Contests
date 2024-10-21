import ReactDOMServer from 'react-dom/server'

import fetchContests from '../api-client'
import App from '../components/app'

const ServerSideRendering = async () => {

    const contests = await fetchContests()

    const initionalMarkup = ReactDOMServer.renderToString(<App initialContents={{ contests }} />)
    return { initionalMarkup, initionalData: { contests } }
}

export default ServerSideRendering
