import React,{useState} from 'react'
import {Container , Box , Typography , IconButton , AppBar ,Button } from '@material-ui/core'

const RegisterStep4 = () => {
    const [CatforyMap, setCatgory] = useState([
        {Catgory:"HightTech"},
        {Catgory:"HightTech"},
        {Catgory:"HightTech"},
        {Catgory:"HightTech"},
        {Catgory:"HightTech"},
        {Catgory:"HightTech"},
        {Catgory:"HightTech"},
        {Catgory:"HightTech"},
        {Catgory:"HightTech"},
        {Catgory:"HightTech"}
    ])
    return (
        <Box className="w-15 h-720 BackgroundImageurl03 placeholder-blue-500">
            <Container >
                <Box className="pt-10">
                    <Typography variant="p" className="pl-20  pt-20 pb-20 h-25  colorBplue font-medium text-3xl	">CATEGORIES</Typography>
                 {console.log(CatforyMap)}
               
                </Box>
                <Box className="mt-10">
                    {CatforyMap.map((el)=>
                    <Box className="inline-flex ml-20 w-150 border-light-blue-500 mb-10" >
                    <p>{el.Catgory}</p>
                    </Box>
                    )}
                </Box>
            </Container>
        </Box>
    )
}

export default RegisterStep4
