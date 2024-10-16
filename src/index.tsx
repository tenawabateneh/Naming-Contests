import { createRoot } from "react-dom/client"
import axios from "axios";

import App from "./components/app";
import { API_SERVER_URL } from "./public-config";

const container = document.getElementById("app")
const root = createRoot(container)

// request to a server which is(API server host) 
axios.get(`${API_SERVER_URL}/contests`).then((response) => {
    console.log(response.data)

    root.render(<App initialContent={{ contests: response.data.contests }} />);
})

