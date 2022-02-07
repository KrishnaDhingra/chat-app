import { deleteUser } from "firebase/auth";
import { authentication } from "../firebase";

export const deleteUserFunc = () => {
    const user = authentication.currentUser
    deleteUser(user).then(() => {
        console.log("Deleted User Successfully")
    }).catch((error) => {
        console.log(error)
    })
}