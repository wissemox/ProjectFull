import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalChangeUsername = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const[ChnageMail,setChangemail]=useState()

  const toggle =()=>{
    localStorage.setItem('user', JSON.stringify(ChnageMail));
    setModal(!modal)
  }
  return (
    <div>
      <Button color="danger" onClick={toggle}>Change Mail</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} charCode="Y">Modal title</ModalHeader>
        <ModalBody>
        <p>user</p>
        <input value={ChnageMail} onChange={(e)=>setChangemail(e.target.value)}/>
        
        {console.log(ChnageMail)}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalChangeUsername;