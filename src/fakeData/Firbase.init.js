import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/Firebase.config";


const firbaseAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default firbaseAuthentication ; 