import { useEffect, useState } from "react"
import Card from "./card";
import Btn from "./button";
import Item from "./Item";
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
    const [cateBtnData, setCateBtn] = useState([]);

    useEffect(()=>{
         
        const fatchData1 = async(url1)=>{

                try{
                    const res=  await fetch(url1)
                    const data = await res.json();
                    setCateBtn(data.categories)
                }catch(error){
                    console.log('there has been a problem with fatching data')
                }
        }
        fatchData1('https://openapi.programming-hero.com/api/phero-tube/categories')
    },[])
       

                 
        //    for category video fetching
           const [cateVideoData, setCateVideo] = useState([]);
           const [id, setCateVideo1] = useState(0);
           console.log(cateVideoData)
         
           
           useEffect(()=>{
                  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
                  .then(res => res.json())
                  .then(data => setCateVideo(data.category))
                
                  .catch((error)=> console.error('error happend :' , error)); 
       
           },[id])
       
                       
        const handleEx = (qq) =>{
           setTimeout(() => {
            setCateVideo1(qq)
           }, 2000);

        }
                         

    return(
     <>
       
         
        <div className="flex items-center justify-between gap-6 flex-wrap sm:flex-nowrap" style={{marginBottom:"70px"}}>
        <button  className="text-slate-500 text-xl bg-[#ffc7c7] rounded-lg border- px-0 py-5  sm:w-1/4 mx-auto font-medium"> All </button>
        { 
         cateBtnData.map( item => <Btn key={item.id} item = {item} handleEx={handleEx} ></Btn>)
      
        }
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {
               cardData.map( item => <Card key={item.id} singleCard = {item}></Card>) 
               
            }
             
           
             {
               cateVideoData.map( item => <Card key={item.id} singleCard = {item} > </Card>) 
               
            }


        </div>

    
     </>
    )
}