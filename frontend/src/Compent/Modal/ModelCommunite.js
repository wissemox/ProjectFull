import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useSelector} from 'react-redux'
import MapComunte from '../Register/MapCommunte.jsx'
const ModalComunite = ({BackGroundChange,setCommunte ,Communte}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const ComunteAll = useSelector(state => state.ComunteReducer)
  const testChnage =(Text)=>{
    setCommunte(Text)
  }
  return (
    <div>
      <h5 className="text-sm	" onClick={toggle}> Member </h5>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} >
           {console.log(ComunteAll)}
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <div className="FlexBox05"> 
            {/* MapComunte */}
            {ComunteAll&&ComunteAll.Comunte.map((el)=><MapComunte toggle={toggle}  testChnage={testChnage} el={el}/>)} 
            </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComunite;