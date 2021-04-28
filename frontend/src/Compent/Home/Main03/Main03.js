import React,{useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './Main03.css'
const Main03 = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div data-Aos="fade-left" className="AllCompent" >
            <div className="Text5">
            <p>Comment ca marche ?</p>
            <span>C'est trés simple , juste quelques clics !</span>
            </div>
         <div className="h3">
             <div className="H4">
{/* TestBakGround */}
          
             <h3>1</h3>
             </div>
             <div  className="H4">

       
             <h3>2</h3>
             </div>
             <div  className="H4">

            
             <h3>3</h3>
             </div>
         </div>
         <div className="FleBoxCatgorie">
         <div className="CmpenetCatgorie">
             <h5>Qu'est ce qui vous fait plaisir ? </h5>
             <p>Vousavez besois d'unobjet pour vous vore beurea ou pour
                  votre maison Choisisez le catégorie et nous vous envoyons nos
                  meileures propositions</p>
         </div>
         <div className="CmpenetCatgorie">
             <h5>Qu'est ce qui vous fait plaisir ? </h5>
             <p>Vousavez besois d'unobjet pour vous vore beurea ou pour
                  votre maison Choisisez le catégorie et nous vous envoyons nos
                  meileures propositions</p>
         </div>
         <div className="CmpenetCatgorie">
             <h5>Qu'est ce qui vous fait plaisir ? </h5>
             <p>Vousavez besois d'unobjet pour vous vore beurea ou pour
                  votre maison Choisisez le catégorie et nous vous envoyons nos
                  meileures propositions</p>
         </div>
         

         </div>
         <div className="ImageCATFORY">
         <img src="Image-money.png"/>
         </div>
       
            {/* <div className="Image05s">
                <img src="Humaena5.png"/>
            </div>

            <div data-Aos="fade-right" className="TextFlexBox03">
                <div  data-Aos="fade-up"className="Textwis">
                <h2>Qu"est ce qui vous fait plaisir ? </h2>
                <p>Vous avez besoin d'un objt pour vous , votre bureau ou pour vote maison . 
                    Choisissez la catégorie et nous vous envoyons nos meilleures propositions</p>
                </div>

                <div  data-Aos="fade-up" className="Textwis">
                <h2>Qu"est ce qui vous fait plaisir ? </h2>
                <p>Vous avez besoin d'un objt pour vous , votre bureau ou pour vote maison . 
                    Choisissez la catégorie et nous vous envoyons nos meilleures propositions</p>
                </div>

                <div data-Aos="fade-up" className="Textwis">
                <h2>Qu"est ce qui vous fait plaisir ? </h2>
                <p>Vous avez besoin d'un objt pour vous , votre bureau ou pour vote maison . 
                    Choisissez la catégorie et nous vous envoyons nos meilleures propositions</p>
                </div>
            
            </div>
            <div>
                <div className="AllNumbre">
                <div className="Number">
                    <h1>1</h1>
                   
                </div>

                <div className="Number01">
                    <h1>2</h1>
                   
                </div>
                
                <div className="Number03">
                    <h1>3</h1>
                   
                </div>
                </div>
            </div> */}
        </div>
    )
}

export default Main03
