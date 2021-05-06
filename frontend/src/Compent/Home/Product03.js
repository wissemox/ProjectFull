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
        Image:"https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/navigation/a-series/a53s/A53s-navigation-blue-v2.png"
    
    },
    {
        Rate:3,
        name:"Samsung",
        Catgory:"Smartphone", 
        Image:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
    
    },
    {
        Rate:4,
        name:"Samsung",
        Catgory:"Smartphone", 
        Image:"https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/navigation/a-series/a53s/A53s-navigation-blue-v2.png"
    
    },
    
    {   Rate:2,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza" ,
        Catgory:"Voitere", 
        Image:"https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
    },
    {   Rate:3,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza" ,
        name:"MSI Ge66",
        Catgory:"Ordinater", 
        Image:"https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/None_50ea1bc0-2936-4296-864f-4a7b06686855-thumb.jpg"
    },
      { 
        Rate:4,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza" ,
        name:"MSI Ge66",
        prix:50,
        Catgory:"Ordinater", 
        Image:"https://m.media-amazon.com/images/I/41hPGuef6PL._AC._SR360,460.jpg"
    },
    {   
        Rate:4,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza" ,
        name:"MSI Ge66",
        prix:80,
        Catgory:"Ordinater", 
        Image:"https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/HP_OMEN_15_2020_Ryzen4800H_RTX2060_3.jpg"
    },
    {   
        Rate:5,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza" ,
        name:"MSI Ge66",
        prix:50,
        Catgory:"Ordinater", 
        Image:"https://www.savanna.tn/53807-home_default/msi-pc-portable-ge66-raider-10sf-i7-10eme-gen-16go-1-to-ssd.jpg"
    },
    {   
        Rate:5,
        descraption:"dazdadzad zadazdzd zadazfazdzadfazd dza" ,
        name:"Pc hp Omen" ,
        prix:40,
        Catgory:"Ordinater", 
        Image:"https://www.tunisianet.com.tn/103464-large/pc-portable-hp-15-da0001nk-i3-7e-gen-4-go-blanc-sim-orange-offerte-30-go.jpg"
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
               <div data-Aos="fade-up" className="FlexBox">
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
          {Product.filter(word => word.Catgory===aValue ).map((el)=><Product03Map el={el}/>)}
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
          <Sponsur/>
          {/* BackGround0 */}
          <Sponsur05/>
        </div>
        
    )
}

export default Producdt
