// Initialize Firebase
var config = {
    apiKey: "AIzaSyB5VX2tKDYBqIBzp01ICNm94_SATMsgDc4",
    authDomain: "firestoretrial-9b65a.firebaseapp.com",
    databaseURL: "https://firestoretrial-9b65a.firebaseio.com",
    projectId: "firestoretrial-9b65a",
    storageBucket: "firestoretrial-9b65a.appspot.com",
    messagingSenderId: "965339995114"
};
firebase.initializeApp(config);

// firebase.auth().languageCode = 'it';

// document.addEventListener("DOMContentLoaded", event => {
//     const app = firebase.app();
    
//     const db = firebase.firestore();
//     const nameRef = db.collection('testing');
//     nameRef.onSnapshot(names =>{
//         names.forEach(user => {
//             const person = user.data();
//             document.write(person.name + ` ` + person.age + `<br/>`)
//             document.write(person.dateCreated + `</br>`)
            
//         })
//     })

// });

// function googleLogin() {
//     const provider = new firebase.auth.GoogleAuthProvider();
    
//     firebase.auth().signInWithPopup(provider)
        
//             .then(result => {
//                 const user = result.user;      
//                 document.write(`YO! ${user.displayName}`);  
//                 console.log(user)
//             })
//             .catch(console.log);  
// };

function uploadFile(files) {
    const storageRef = firebase.storage().ref();
    const imgRef = storageRef.child('horse.jpg');
    console.log("imgRef",imgRef)
    const file = files.item(0);

    const task = imgRef.put(file)

    // successful upload
    task.then(snapshot => {
        const url = snapshot.downloadURL
        console.log("URL", url)
        document.querySelector("#imgUpload").setAttribute("src", url)
    })

    // monitor progress
    task.on('state_changed', snapshot => {
        console.log("snapshot",snapshot)

    })
}


//   const db = firebase.firestore();

//   const productsRef = db.collection('testing');

//   productsRef.onSnapshot(products => {

//     products.forEach(doc => {
//         const data = doc.data();
//         console.log("data", data);
//     })

//   });

