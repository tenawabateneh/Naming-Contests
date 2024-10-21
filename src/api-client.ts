import axios from "axios";

import { API_SERVER_URL } from "../src/public-config";

const fetchContests = async () => {
    // Fetch contests from the API server
    const response = await axios.get(`${API_SERVER_URL}/contests`);
    return response.data.contests;
}

export default fetchContests;

