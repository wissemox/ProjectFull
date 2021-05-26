import React,{useState,useEffect} from 'react'
import {ProductList} from '../js/actions/authActions'
import {useDispatch ,useSelector} from 'react-redux'
import Card01 from './CardMap'
const ProfileUpdate = () => {
    const [Numberpage,setNumberpage]=useState(1)
    const dispatch =useDispatch()
    const resualt = useSelector(state => state.Produclist.results)
    useEffect(()=>{
        dispatch(ProductList(Numberpage))
    },[])
    const Number=()=>{
        dispatch(ProductList(Numberpage))
        if(resualt){
            setNumberpage(Numberpage+1)
        }
        
    }
    const GetProductLIst=()=>{
        dispatch(ProductList(Numberpage))
    }
    
    return (
        <div>
            <p>dazda</p>
            <button onClick={Number}>Next</button>
            <div>
                {console.log(resualt)}
                <div className="DisplaydFlex">
                {resualt&&resualt.map((el)=>  <Card01 GetProductLIst={GetProductLIst}  Numberpage={Numberpage} el={el}/>)}
                </div>
            </div>
           
        </div>
    )
}

export default ProfileUpdate
