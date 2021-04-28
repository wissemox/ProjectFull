import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import Carousel from 'react-elastic-carousel'
import Card from './Card'
import MapCarousel from './MapCarousel'

const Main02 = ({BackgroundImage}) => {
    useEffect(() => {
        Aos.init({duration: 3000});
      }, [])
      const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
        { width: 1600, itemsToShow: 5 },
       
     
       
  
        
      ];

      const Array=[{
        Image:"dzadzzd"
      },{
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },
      {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },  {
        Image:"dzadzzd"
      },]
      
    return (
      <>
        <div className="Carousel" >
        {BackgroundImage &&  <div >

</div> } 
            <p>Les nouveautés</p>
         
            <Carousel data-Aos="fade" className="Da" breakPoints={breakPoints}>
              
        {Array.map((el)=><MapCarousel Card={Card} el={el}/>)}
             
        

            </Carousel>
       
            {/* <div data-Aos="fade" >
          
           
            <Carousel  breakPoints={breakPoints}  >
          <div data-Aos="fade"  className="FlexBoxazd">
         <Card>
         {Array.map((el)=><MapCarousel el={el}/>)}
           </Card>
          </div>
          
            </Carousel>
            </div> */}
        </div>
        </>
    )
}

export default Main02
