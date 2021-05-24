import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MapComunte from './MapComunte'
import {useSelector} from 'react-redux'
const ModalComunite = ({BackGroundChange,setCommunte ,Communte}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const ComunteAll = useSelector(state => state.ComunteReducer)
  const testChnage =(Text)=>{
    setCommunte(Text)
  }
  return (
    <div>
      <h5 className="Member01" onClick={toggle}> Member </h5>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} >
            {console.log(BackGroundChange)}
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
            <div className="FlexBox05"> 
            {console.log(Communte)}
                {console.log(ComunteAll)}
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