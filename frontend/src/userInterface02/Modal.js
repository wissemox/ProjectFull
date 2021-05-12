
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const[file , setFile]=useState()
  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  return (
    <div>
      <Button color="danger" onClick={toggle}>Add</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
            <p>Name</p>
         <input/>
         <p>Prix</p>
         <input/>
         <p>Descraption</p>
         <input/>
         <p>Descraption</p>
         {console.log(file)}
         <input  onChange={e=>setFile(e.target.files[0])} type="file"/>
        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;