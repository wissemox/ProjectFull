import React,{useState} from 'react'
import { Label } from 'reactstrap'
import { Progress } from 'reactstrap';
import RegisterCheckMap from './RegisterCheckMap'
import RegisterCheck02 from './RegisterCheck02'
const RegisterCheck1 = ({Step2d , Step2 ,Step3d ,Step3 , LederFunction,Test08}) => {
    const [Communite , setCommunite]=useState('')
    const [Communite01 , setCommunite01]=useState('')
    const [LederName , setLederName]=useState('')
    const [TakeName , setTakeName]=useState('')
    const [Truefalse , setTruefalse]=useState(false)
    const [ComuniteAll , setComuniteAll]=useState([{
        Name:"Ornage"
    }, {
        Name:"Telecome"
    },
    {
        Name:"Test2"
    }])
    const [Sex , SetSex]=useState('')
    
    const [Date , setData]=useState('')
    if(Step2){
        localStorage.setItem("Communite", JSON.stringify(TakeName));
        localStorage.setItem("LederName", JSON.stringify(LederName));
       
        localStorage.setItem("Date", JSON.stringify(Date));
        localStorage.setItem("Sex", JSON.stringify(Sex));
  
    }
    const Homme = ()=>{
        SetSex('homme')
    }
    const femme = ()=>{
        SetSex('femme')
    }
    if(Test08 ){
        localStorage.setItem("Communite", JSON.stringify(Communite01));
    }
    
    LederFunction(LederName)
    return (
        <div>
              
            {Step2 ?<RegisterCheck02 Step3={Step3} Step3d={Step3d}/>:<> <div  data-Aos="fade-up" className="Input06">
            <div className="text-center">50%</div>
      <Progress data-Aos="fade-left" value="50" />
      {console.log(TakeName)}
        {console.log(Test08)}
      {Communite&&LederName&&Date&&Sex ? null : <p>Enter all filed</p> }
                        <div> 
                            <input  value={LederName} onChange={(e)=>setLederName(e.target.value)}   placeholder="role"/>
                            </div>
                           
                        {console.log(Communite)}
                        <h3>{TakeName}</h3>
                        {Test08 && <input placeholder="CommuniteName" value={Communite01} onChange={(e)=>setCommunite01(e.target.value)}/>  }
                        {Test08===false}
                        {Truefalse ? null :
                        
                        <div> 
                          
                            {Test08 ===false ? <input value={Communite} onChange={(e)=>setCommunite(e.target.value)} placeholder={TakeName}/> : null  } 
                        {Communite&& <div className="BackGroundImaged"> 
                            {ComuniteAll.filter((el)=>el.Name.toLocaleLowerCase().includes(Communite.toLocaleLowerCase().trim())).map((el)=><RegisterCheckMap setTruefalse={setTruefalse} setTakeName={setTakeName} el={el}/>)}
                            </div>}
                        </div> 
                        
                        }
                        {/* <input value={Communite} onChange={(e)=>setCommunite(e.target.value)} placeholder={TakeName}/>
                        {Communite&& <div className="BackGroundImaged"> 
                            {ComuniteAll.filter((el)=>el.Name.toLocaleLowerCase().includes(Communite.toLocaleLowerCase().trim())).map((el)=><RegisterCheckMap setTakeName={setTakeName} el={el}/>)}
                            </div>}
                       
                          */}
                    </div>
           
                    <div  data-Aos="fade-up" className="Input06">
                        <img src="UserName.png"/>
                       
                    </div>
                    <div  data-Aos="fade-up" className="Input06">
                        <img src="UserName.png"/>
                      
                        <input  value={Date} onChange={(e)=>setData(e.target.value)}  type="date"  />
                    </div>
                    <div>
                     
                    </div>
                    <div className="Radio">

                    <label>femme</label>
                    <input onClick={femme} type="radio" id="dewey" name="drone" value="dewey"/>
               
                   <label>homme</label>
                   <input onClick={Homme} type="radio" id="dewey" name="drone" value="dewey"/>
                   </div>
                    <div data-Aos="fade-up" className="Button">
                   
                
                        <button onClick={()=>Step2d(Communite,LederName,Date,Sex)} >next</button>
                    </div>
                   
                    </> }
           
            
                    
                  
        </div>
    )
}

export default RegisterCheck1
