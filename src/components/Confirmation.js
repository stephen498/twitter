import React,{useEffect, useState} from "react";
import {
  provider,
  auth,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged
} from "../config";
const Confirmation = ({ prevStep, nextStep, values,names }) => {
    const[signedIn, setSignedIn]=useState(false);
    const [user, setUser] = useState(null);
  // const a=state;
  const Continue = (e) => {
    e.preventDefault();
   
    let a=0;
    for(let key of names){
      if(key.name===`${values.firstName} ${values.lastName}`){
            // setState((state)=>state+1);
            a+=1;
      }
    }    
    if(a>0){
    console.log(a);
    signInWithRedirect(auth, provider);
    // nextStep();
    }
    };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

useEffect(()=>{
  getRedirectResult(auth)
  .then((result) => {
      setSignedIn(true);
      nextStep();
  }).catch((error) => {
        console.log(error)
  });
},[])
useEffect(() => {
   onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const{displayName,email, name}= user;
    setUser({ displayName, email, name });
    // ...
  } else {
    // User is signed out
    // ...
    setUser(null);
  }
});
}, []);
  return ( 
    <div component="main" maxWidth="xs">
      <div>
        {/* <div>
            <ListItem>
                <ListItemText primary='Email' secondary={email}/>
            </ListItem>
            <ListItem>
                <ListItemText primary='Username' secondary={username}/>
            </ListItem>
            <ListItem>
                <ListItemText primary='First Name' secondary={firstname}/>
            </ListItem>
            <ListItem>
                <ListItemText primary='Lastname' secondary={lastname}/>
            </ListItem>
            <ListItem>
                <ListItemText primary='Country of Residence' secondary={country}/>
            </ListItem>
            <ListItem>
                <ListItemText primary='Level of Education' secondary={levelOfEducation}/>
            </ListItem>
        </div> */}

            <button
              onClick={Previous}
              type="submit"
              fullWidth
              variant="contained"
            >
              Previous
            </button>
            <button
              onClick={Continue}
              type="submit"
              fullWidth
              variant="contained"
            >
              Confirm & Continue
            </button>
          </div>
        </div>
  );
};

export default Confirmation;
