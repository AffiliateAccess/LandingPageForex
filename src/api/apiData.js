/*eslint-disable */
import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

axios.defaults.withCredentials = true



export const getMS = async (id) => {
    try {
        const { data } = await axios.get(baseUrl + 'forex/' + id + '/', {
            headers: {
                // 'Authorization': 'Token '+process.env.REACT_APP_TOKEN,
                // 'set-cookie': "sessionid=5go4osftz5vwh9bai29lg10cftx38b89",
                'accept': "application/json"
            }
        }, { withCredentials: true })
        console.log(data)
        return data
    } catch (error) {
        throw error
    }
}