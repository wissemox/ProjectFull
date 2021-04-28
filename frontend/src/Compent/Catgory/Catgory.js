import React,{useEffect} from 'react'
import Navbar from '../Home/Navbar'
import {Link} from 'react-router-dom'
import './Catfory.css'
import Aos from 'aos'
import "aos/dist/aos.css"
const Catgory = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, [])
    return (
        <div>
            <Navbar/>


            <div data-Aos="fade" className="CatGoryText">
            <h2 data-Aos="fade-up">Pourquoi essayer le troc de Binpact ? </h2>
            <p>Si vous ne trouvez pas votre place on vous en offre une !</p>
            </div>
            <div className="Lmage4">
                <div>
                    <div data-Aos="fade-left" className="Catgory03">
                    <h2>1</h2>
                        <div className="Text05">
                        <h1>Economisez de l'argent.</h1>
                            <div className="Text0d6">
                                <p>Voud n"allez pas touche a votre portefeuille ni a votre carte bancaire.
                                vous faites des éconmoies tous les mous nous calculons pour vous le prévalue
                                </p>
                            </div>
                        </div>
                        
                        <div className="Image4">
                            <img src="7849.jpg"/>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                {/* Imge */}
                <div>

                </div>
            </div>
            <div className="Catgory03">
            <div className="Image58">
            <img src="Online shop managers asking clients for feedback.jpg"/>
            
            </div>
         
                 <h2>2</h2>
                        <div data-Aos="fade-left" className="Text05">
                        <h4>Troquez avec toute confiance</h4>
                            <div className="Text0d6">
                                <p>Voud n"allez pas touche a votre portefeuille ni a votre carte bancaire.
                                vous faites des éconmoies tous les mous nous calculons pour vous le prévalue
                                </p>
                            </div>
                        </div>
                        </div>      
                        <div data-Aos="fade-right" className="Catgory03">
                    <h2>1</h2>
                        <div className="Text05">
                        <h1>Economisez de l'argent.</h1>
                            <div className="Text0d6">
                                <p>Voud n"allez pas touche a votre portefeuille ni a votre carte bancaire.
                                vous faites des éconmoies tous les mous nous calculons pour vous le prévalue
                                </p>
                            </div>
                        </div>
                        
                        <div className="Image4">
                            <img src="5867.jpg"/>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="Flasha">
                    <Link to="/"> <img src="Flash.png"/> </Link>
                    </div>
                    <div className="Baackground">
                    <p>We believe that Perople with values deliver quality products and need quality service</p>
                    </div>
                    </div>
 
    )
}

export default Catgory
