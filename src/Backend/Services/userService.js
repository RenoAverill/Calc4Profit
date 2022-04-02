import {myApp, myDb} from "../Config/FirebaseConfig.js"
import { collection, addDoc,getDocs } from "firebase/firestore";

const app = myApp;
const db = myDb;

//Add a single obj to Db
async function addUsers(db,userObject) {
        try {
            const docRef = await addDoc(collection(db, "Users2"), {
                 first: userObject.firstName,
                 last: userObject.lastName,
                 email: userObject.email,
                 password: userObject.password,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
}

//getall objs from database
async function getUsers(db) {
    let userArray = []
    const querySnapshot = await getDocs(collection(db, "Users2"));
         querySnapshot.forEach((doc) => {
             console.log(doc)
             userArray.push(doc)
         });
         console.log(userArray.length)
         return userArray;
}


//TODO: terry can add function to get single user by ID from db
//TODO: terry can update user from DB

export default function addUsersCall(userObject){
    addUsers(db,userObject).then((res)=>{console.log("hi")});
}