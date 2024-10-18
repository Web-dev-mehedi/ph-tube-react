import { useEffect, useState } from "react"
import Card from "./card";
import Btn from "./button";



export default function Cards(){
    
        // for video fetching 

    const [cardData, setCard] = useState([]);
    useEffect(()=>{
        
        const fatchData = async(url)=>{

                try{
                    const res=  await fetch(url)
                    const data = await res.json();
                    setCard(data.videos)
                    // console.log(data.videos)
                }catch(error){
                    console.log('there has been a problem with fatching data')
                }
        }
        fatchData('https://openapi.programming-hero.com/api/phero-tube/videos')
    },[])


    // for category btn fetching
    const [cateData, setCateBtn] = useState([]);

    useEffect(()=>{
         
        const fatchData1 = async(url1)=>{

                try{
                    const res=  await fetch(url1)
                    const data = await res.json();
                    setCateBtn(data.categories)
                    console.log(data)
                }catch(error){
                    console.log('there has been a problem with fatching data')
                }
        }
        fatchData1('https://openapi.programming-hero.com/api/phero-tube/categories')
    },[])


    return(
     <>

        <div className="flex " style={{marginBottom:"70px"}}>
        {  cateData.map( item => <Btn item = {item}></Btn>)
        }
        </div>

        <div className="grid grid-cols-4 gap ">
            {
               cardData.map( item => <Card singleCard = {item}></Card>) 
            }
          
        </div>

       
     </>
    )
}