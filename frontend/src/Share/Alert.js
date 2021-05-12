import React,{useEffect} from 'react';
import { Alert } from 'reactstrap';
import Aos from 'aos'
import "aos/dist/aos.css"
const Example = ({Errore}) => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    
    <div>
    
      <Alert data-Aos="fade-up"  color="danger">
    
      {console.log(Errore)}
      {Errore&&Errore.email}
      {Errore&&Errore.role}
      {Errore&&Errore.username}
      </Alert>
  
   
   
    </div>
  );
};

export default Example;
