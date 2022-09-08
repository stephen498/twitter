import React,{useState} from "react";

const Confirmation = ({ prevStep, nextStep, values,names }) => {
  // const [state,setState]=useState(0);
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
      nextStep();
    }
    };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
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
