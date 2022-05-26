import axios from "axios"
import { apiCallBegan } from "../actionCreator/api"
const api=store=>next=>action=>{
    if(action.type!==apiCallBegan.type) next(action)
    const {url,method,onSucces}=action.payload
    try {
        axios({
            baseURL:'http://localhost:9000',
            url,
            method,
        })
    } catch (error) {
        
    }
}
export default api