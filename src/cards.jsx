import { useEffect, useState } from "react"
import Card from "./card";



export default function Cards(){
    
    // 
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


    return(
        <div className="grid grid-cols-4 gap ">
            {
               cardData.map( item => <Card singleCard = {item}></Card>) 
            }
        </div>
    )
}