
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {UpdateProduct} from '../../src/js/actions/authActions'
import {useDispatch , useSelector} from 'react-redux'
const ModalExample02 = ({el}) => {
 
  const dispatch = useDispatch()
  const [modal, setModal] = useState(false);
  const[file , setFile]=useState()
  const Producteerors = useSelector(state => state.Prodctadd)
  const[name , setnAME]=useState()
  const[prix , setPrix]=useState()
  const[prix_en_euros , setprix_en_euros]=useState()
  const[categorie , setcategorie]=useState()
  const[pernome , setPrenmone]=useState({Name:"wissem"})
  const[marque , setmarque]=useState()
  const[version , setversion]=useState()
  const[modele , setmodele]=useState()
  const[critere , setcritere]=useState()
  const[sous_categorie , setsous_categorie]=useState()
  const[fonctionnel ,setfonctionnel]=useState()
  const[description ,setdescription]=useState()
  const toggle = () => setModal(!modal);
    const UpdateProduc01=()=>{
        dispatch(UpdateProduct(el.slug,{nom:name ,modele:modele, prix_en_euros:prix_en_euros , categorie:1,marque:marque,version:version,
            critere:"A",sous_categorie:1, fonctionnel:"Yes" , description:description}))
    }
   

  
  // formData.append('file' , file)
 
  
  
  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
  
  return (
    <div>
      <Button color="danger" onClick={toggle}>Update</Button>
      <Modal isOpen={modal} toggle={toggle}  external={externalCloseBtn}>
        
        <ModalHeader><p>{Producteerors&&Producteerors.categorie}</p> 
        <p>{Producteerors&&Producteerors.sous_categorie}</p> 
        <p>{Producteerors&&Producteerors.nom}</p> 
        </ModalHeader>
        <ModalBody>
            <p>Name</p>
         <input value={name} onChange={(e)=>setnAME(e.target.value)}/>
         <p>Prixonbinz</p>
         
         <input value={prix_en_euros} type="number" onChange={(e)=>setprix_en_euros(e.target.value)}/>
        <p>categorie</p>
        <input type="number" value={categorie} onChange={(e)=>setcategorie(e.target.value)} />
        <p>marque</p>
        <input value={marque} onChange={(e)=>setmarque(e.target.value)}/>
        <p>modele</p>
        <input value={modele} onChange={(e)=>setmodele(e.target.value)}/>
      <p>  versio</p>
       <input value={version} onChange={(e)=>setversion(e.target.value)}/>
       <p>  critere</p>
       <input value={sous_categorie} onChange={(e)=>setsous_categorie(e.target.value)}/>
       {console.log(version)}
       <p>  sous_categorie</p>
       <input type="number" value={critere} onChange={(e)=>setcritere(e.target.value)}/>
       <p>  fonctionnel</p>
       <input  value={fonctionnel} onChange={(e)=>setfonctionnel(e.target.value)}/>
       <p>  description</p>
       <input  value={description} onChange={(e)=>setdescription(e.target.value)}/>
         <input  onChange={e=>setFile(e.target.files[0])} type="file"/>
         {console.log(marque)}
         typeof 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={UpdateProduc01}  >Update</Button>{' '}
          <Button color="secondary" >Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample02;