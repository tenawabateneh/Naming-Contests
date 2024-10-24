import axios from "axios";

import { API_SERVER_URL } from "../src/public-config";

export const fetchContestList = async () => {
    // Fetch contests from the API server
    const response = await axios.get(`${API_SERVER_URL}/contests`);
    return response.data.contests;
}

export const fetchContest = async (contestId) => {
    // Fetch a single contest by ID from the API server
    const response = await axios.get(`${API_SERVER_URL}/contest/${contestId}`);
    return response.data.contest;
}



