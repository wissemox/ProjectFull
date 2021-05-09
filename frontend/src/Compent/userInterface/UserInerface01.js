import React , {useState,useEffect} from 'react'
import './Userinterface.css'
import UserinterfaceMap from './UserinterfaceMap'
import Aos from 'aos'
import "aos/dist/aos.css"
const UserInerface01 = () => 
{
    const[Product , setProduct]=useState([{
        Img:"https://i.pinimg.com/474x/3f/f8/63/3ff863751482581c75c28c1dae9b1a61.jpg", 
        Name:"Samsung"
    },
    {
        Img:"data:image/jpeg;base64,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", 
        Name:"Samsung"
    },
    {
        Img:"https://s.alicdn.com/@sc01/kf/H54c28dfb9cc04e719597b63d1c752e49V.jpg", 
        Name:"Samsung"
    },
    {
        Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFc7VtW9P0MdQJGphv7-PO5tMR1J6mS_2I0NvtU2qpvhxc9qqClFUlc2gP6KNWMGPZaR4&usqp=CAU", 
        Name:"Samsung"
    },
    {
        Img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTic2erXsWpqn0xXPfn8lRKr3Q7kkLZ6ksYuw&usqp=CAU", 
        Name:"Samsung"
    }])
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div data-Aos="fade-up" className="UserInterface5">
            <div data-Aos="fade-up" className="UserInterfacea">
                <div data-Aos="fade-up"  className="UserInerface">
              <b> <p>You are a member of Communtiy name guild
                    Welcome User(wissem) </p></b> 
                    <img src="Pc.png"/>
            </div>
            <div data-Aos="fade-up"className="ProductInterface">
                <div data-Aos="fade-up" className="ProductInterface01">
                {Product.map((el)=><UserinterfaceMap el={el}/>)}
              
                </div>
                <div data-Aos="fade-up" className="ButtonFilter">
                <button>See more</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default UserInerface01
