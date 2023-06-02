import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Store } from "../utilites/Store"

const Protected=({children})=>{
    const {state}=useContext(Store)
    const {UserInfo}=state
    return  UserInfo ?  children : <Navigate to='/'/>
}
export default Protected