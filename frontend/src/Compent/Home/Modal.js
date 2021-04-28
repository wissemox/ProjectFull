/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Modale = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div >
      <Button color="danger"  onClick={toggle}><span>Catégories</span></Button>
    
      <div isOpen={modal} toggle={toggle} >
      
        <Modal>
            <p>daz</p>
        </Modal>
   
         
       
      </div>
    </div>
  );
}

export default Modale;