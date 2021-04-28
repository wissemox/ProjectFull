import React,{useState,useEffect} from 'react'
import './Catgory.css'
import ModalCatgory from'./CatgoryModal'  
import Aos from 'aos'
import "aos/dist/aos.css"
import {Link} from 'react-router-dom'
import CatgoryFilterMap from './CatgoryFilterMap'
const Catgor = ({FilterRecharche ,Filter}) => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    const[Bollen , setBollen]=useState(false)
    const[Recharche , setRecharche]=useState([{
        ProductFilter:"Ordinater"
    } , 
    {
        ProductFilter:"Smartphone"
    }, 
{
    ProductFilter:"pc Ordinateur"
}])
    const[Bollen01 , setBollen02]=useState(false)
    const[Bollen02 , setBollen03]=useState(false)
    const[Value , setValues]=useState("")
    {console.log(Value.length)}
    FilterRecharche(Value)
    console.log(Filter)
    return (
        <div>
            {Bollen01 ? 
            <>
            <div data-Aos="fade"  className="NavBa55"> 
            <div  data-Aos="fade"  className="Catgory4">
                <div className="Input055">
                    {console.log(Value)}
             <input value={Value}  onChange={(e)=>setValues(e.target.value)} />
             <img data-Aos="fade-left"  onClick={()=>setBollen02(!Bollen01)} src="Reserche.png"/>
             </div>
                </div>
                 
            </div>
            <div> 
              {Filter &&
              <div data-Aos="fade" className="BackGroundFilter">
      
                  {Recharche.filter((el)=>el.ProductFilter.toLocaleLowerCase().includes(Value.toLocaleLowerCase().trim())).map((el)=><CatgoryFilterMap el={el}/>)}
                  </div>
                  
             }
              </div>
              </>
            :<>  <div data-Aos="fade"  className="NavBa55">
                
                <div data-Aos="fade"  className="Catgory4">
                
                    <div data-Aos="fade"  className="Catgory5">
                        <p id="Catégorie" onClick={()=>setBollen(!Bollen)}>Catégorie</p>
                    </div>
                    <div>
                       <p id="sousCatgory"> Sus Catégorie</p> 
                  
                    </div>
                    <div data-Aos="fade" >
                       <p> Ville</p> 
                    </div>
                    <div data-Aos="fade" >
                       <p> Prix en binz</p> 
                    </div >
                    <div data-Aos="fade" >
                       <p> Rating user</p> 
                    </div>
                    <div data-Aos="fade" >
                       <p> Caractéristique</p> 
                    </div>;
                    <div className="Reserche">
                        <img onClick={()=>setBollen02(!Bollen01)} src="Reserche.png"/>
                    </div>
                </div>
                
            </div>
            {console.log(Bollen)}
            {Bollen ?  <div data-Aos="fade"  className="Modal">
                {/* 1 */}
               

                <div data-Aos="fade"   className="Modal1">
               <Link to="/product01"> <p onClick={()=> localStorage.setItem('Catgory', 'Ordinater')}>pc Ordinateur</p></Link>
              <Link to="/product01">  <p onClick={()=> localStorage.setItem('Catgory', 'Smartphone')}>Smartphones</p> </Link>
              <Link to="/product01"><p>Accessoire oridnater</p></Link>  
              <Link to="/product01"> <p>Stockage</p> </Link>
              <Link to="/product01">  <p>Impression</p></Link>
               <Link to="/product01"><p>Tablette et phone</p></Link> 
               <Link to="/product01">   <p>Image et son</p></Link>
               <Link to="/product01"> <p>Gaming</p></Link>
                </div>
            </div> :null}
          </>}
          
            
        </div>
    )
}

export default Catgor
