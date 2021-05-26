import React from 'react';
import {useDispatch} from 'react-redux'
import {DeleteProduct} from '../js/actions/authActions'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './CardMap.css'
import ModalExample02 from './ModalUpdate'
const Card01 = ({el,Numberpage,GetProductLIst}) => {
    const dispatch=useDispatch()
    // DeleteProduct

    const DelteProductt=()=>{
    
        dispatch(DeleteProduct(el.slug))
    }
  return (
    <div >
        {console.log(Numberpage)}
      <Card className="WITHCARD">
      {el.images&&el.images.map((el)=><><p>{el.image}</p>
        <img src={require(`../../../backend${el.image}`).default}/>
        </>
        )}
        <CardBody>
          <CardTitle tag="h5">{el.nom}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{el.prix_en_bins}</CardSubtitle>
          <CardText>{el.description}</CardText>
          <Button onClick={DelteProductt}>Delete</Button>
          <ModalExample02 el={el}/>
          {/* ModalExample02 */}
       {console.log(el.images)}
       
        </CardBody>
      </Card>
    </div>
  );
};

export default Card01;