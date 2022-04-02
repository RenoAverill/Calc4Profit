import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { collection, addDoc,getDocs } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRprDlSRQPQEOruY3w8zz3Cz7TzJbv4-k",
    authDomain: "calcs4profit.firebaseapp.com",
    projectId: "calcs4profit",
    storageBucket: "calcs4profit.appspot.com",
    messagingSenderId: "619178158149",
    appId: "1:619178158149:web:d761b93e7cf659d198db2c",
    measurementId: "G-2DH8SK7LJK"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function addUsers(db) {
    let uuid =
    async getUsers(db).then((res)=>{

        uuid = (1 + res)
        try {
            const docRef = await addDoc(collection(db, "Users2"), {
                first: "Alan",
                last: "Turing",
                email: "theRock@gmail.com",
                password: "think",
                id : uuid

            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    console.log(uuid)} );
    console.log(uuid);
    try {
        const docRef = await addDoc(collection(db, "Users2"), {
            first: "Alan",
            last: "Turing",
            email: "theRock@gmail.com",
            password: "think",
            id : uuid

        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}
async function getUsers(db) {
    const querySnapshot = await getDocs(collection(db, "Users2"));
    let length = Object.keys(querySnapshot).length
  //  console.log(length)
    return length;
        //console.log(querySnapshot.size())
        // querySnapshot.forEach((doc) => {
        //     console.log(`${doc.id} => ${doc.data()}`);
        // });
}

export default function addUsersCall(){
    getUsers(db).then((res)=>{console.log(res)});
    addUsers(db).then((res)=>{console.log(res)});
}