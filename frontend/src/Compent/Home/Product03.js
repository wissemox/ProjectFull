import React,{useState , useEffect} from 'react'
import Catgory from '../Catgory/Catgory'
import Product03Map  from './Product03Map'
import './product02.css'
import Sponsur from './Sponsur'
import Sponsur05 from './Sponsur05'
import Aos from 'aos'
import RecharcheMap from './ResercheMap'
const Producdt = () => {
    useEffect(() => {
        Aos.init({duration: 3000});
      }, [])
    var aValue = localStorage.getItem('Catgory')
    var aValue01 =JSON.parse( localStorage.getItem('Catgory01'))
    const[togel ,setTogel]=useState(false)
    const[Inputd ,setInputd]=useState("")
    
    const [Product , setProduct ]=useState([{
        Rate:4,
        name:"Samsung",
        Catgory:"Smartphone", 
        Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
    
    },
    {
        Rate:2,
        name:"Samsung",
        Catgory:"Smartphone", 
        Image:"https://www.presse-citron.net/app/uploads/2019/09/iphone-11-apple.jpg"
    
    },
    {
        Rate:4,
        name:"Samsung",
        Catgory:"Smartphone", 
        Image:"Samsung-Galaxy-S21-Ultra-Spen-XDA-234235.jpg"
    
    },
    {
        Rate:3,
        name:"Samsung",
        Catgory:"Smartphone", 
        Image:"Samsung-Galaxy-S21-Ultra-Spen-XDA-234235.jpg"
    
    },
    {
        Rate:4,
        name:"Samsung",
        Catgory:"Smartphone", 
        Image:"Samsung-Galaxy-S21-Ultra-Spen-XDA-234235.jpg"
    
    },
    
    {   Rate:2,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza dazdadzad zadazdzd zadazfazdzadfazd dza" ,
        Catgory:"Voitere", 
        Image:"https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
    },
    {   Rate:3,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza dazdadzad zadazdzd zadazfazdzadfazd dza"  ,
        name:"MSI Ge66",
        Catgory:"Ordinater", 
        Image:"vpavic_4291_20201113_0366-0.jpg"
    },
      { 
        Rate:4,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza dazdadzad zadazdzd zadazfazdzadfazd dza" ,
        name:"MSI Ge66",
        prix:50,
        Catgory:"Ordinater", 
        Image:"unnamed.jpg"
    },
    {   
        Rate:4,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza dazdadzad zadazdzd zadazfazdzadfazd dza" ,
        name:"MSI Ge66",
        prix:80,
        Catgory:"Ordinater", 
        Image:"vpavic_4291_20201113_0366-0.jpg"
    },
    {   
        Rate:5,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza dazdadzad zadazdzd zadazfazdzadfazd dza" ,
        name:"MSI Ge66",
        prix:50,
        Catgory:"Ordinater", 
        Image:"vpavic_4291_20201113_0366-0.jpg"
    },
    {   
        Rate:5,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza dazdadzad zadazdzd zadazfazdzadfazd dza " ,
        name:"Pc hp Omen" ,
        prix:40,
        Catgory:"Ordinater", 
        Image:"unnamed.jpg"
    }
    ])
    const[Recharche , setRecharche]=useState([{
        ProductFilter:"Ordinater"
    } , 
    {
        ProductFilter:"Smartphone"
    }, 
{
    ProductFilter:"pc Ordinateur"
}])
    const FilterSamrtphone =()=>{
        localStorage.setItem("Catgory", "Smartphone");
        window.location.reload(false);
        localStorage.removeItem("Catgory01")
    }
    const FilterHightTech =()=>{
        localStorage.setItem("Catgory", "Ordinater");
        window.location.reload(false);
        localStorage.removeItem("Catgory01")
    }
    return (
        <div data-Aos="fade-up" >
            <div data-Aos="fade-up" className="NavItem">
                <img src="binpact002.png"/>
            </div>
            <div data-Aos="fade-up" className="BackImageUr">
            {console.log(aValue01)}
            <p  className="Padn">dza</p>
            {console.log(togel)}
            <div data-Aos="fade-up" className="Input05"> 
            {/* Corbel */}
        
            <div data-Aos="fade-up" className="FlexBox5">
               <div data-Aos="fade-up" className="FlexBox00">
                   {togel ? <div data-Aos="fade-up" className="Fadwa">
                        <input value={Inputd} onChange={(e)=>setInputd(e.target.value)} data-Aos="fade-up"/> 
                        {console.log(Inputd)}
                       </div> :<div  className="Fada"> <p data-Aos="fade-up" onClick={FilterHightTech}>Hight-tech</p>
                <p onClick={FilterSamrtphone} data-Aos="fade-up">Smartphone</p> 
                   <p data-Aos="fade-up">Ville</p>
                   <p data-Aos="fade-up">Prix en binz</p>
                   <p data-Aos="fade-up">Rating user</p>
                   <p  data-Aos="fade-up"> Caracretstique</p>
                   </div> }

               
                   <img data-Aos="fade-right" onClick={()=>setTogel(!togel)} src="Reserche.png" />
               </div>
          
               </div>
            
            </div>
            {Inputd &&  <div data-Aos="fade-up"  className="Dazda">
                   <p>dazd</p>
                   {Recharche.filter((el)=>el.ProductFilter.toLocaleLowerCase().includes(Inputd.toLocaleLowerCase().trim())).map((el)=><RecharcheMap el={el}/>)}
               </div>}
               <div className="Image59">
                      <img src="Product04.png"/>
                      <h3>TROQUEZ   <br/> en quelquez clics!</h3>
                      
                  </div>
            <div data-Aos="fade-up" className="ProductFilter">
          {Product.filter(word => word.Catgory===aValue ).map((el , i )=><Product03Map el={el} i={i}/>)}
          {Product.filter(word => word.Catgory===aValue01 ).map((el)=><Product03Map el={el}/>)}
          </div>
          </div>
          <div className="FlexNumber">

          
<p>1</p>
<p>2</p>
<p>3</p>
<p>4</p>
<p>5</p>
</div>
       
          {/* Sponsur */}  
          
            <div className="FlexsdNumber">


<p>1</p>
<p>2</p>          
<p>3</p>
<p>4</p>
<p>5</p>
</div>
          <div>
        
          <div className="Sponsur02">
            
            <div className="Sponsir03">
            <div className="TextSponnsurall">
            <div className="H1">
                
            <h1 id="Liens"> Liens </h1>
       
        <h1>Catégories</h1>
        <h1>Contact</h1>
            </div>
          
            <div className="TextSponsur">
                <div className="TextSponsour01">
                    <p>Qui some nous</p>
                    <p>Comment ca marche ? </p>
                    <p>La charte du bon troqueur</p>
                </div>
                <div className="FlexBox07">
                    <div className="FlexBoxTsext06">
                    <p>Multimédia</p>
                   <p>pour Maison</p>
                   <p id="Buerau">Bureau</p>
                    </div>
                    <div className="FlexBoxTsext06">
                    <p>Immoblier</p>
                   <p id="PourVous">pour vous</p>
                   <p id="Loisir">Loisirs</p>
                    </div>
                    <div className="FlexBoxTsext06">
                    <p>Auto-Moto</p>
                   <p>Pour enfant </p>
                   <p id="Bircolagge">Bircolage</p>
                    </div>
                  
                </div>
                <div className="Dazd">
                    <p>Address :</p>
                    <p>Num Tel:</p>
                    <p>Social media</p>
                </div>
            </div>
            </div>
            <div className="InscrivesVous">
            <p>INSCRIVEZ-VOUS</p>
            </div>
            <div className="InputInscrevie">
            <input placeholder="E-mail"/>
           
            </div>
            <div className="Flash8">
            <img src="Flash03.png"/>
            </div>
            </div>
        </div>
          </div>
          {/* BackGround0 */}
          <Sponsur05/>
        </div>
        
    )
}

export default Producdt
