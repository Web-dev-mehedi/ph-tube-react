

 const Btn =({item,handleEx})=>{
   const{category}= item
    return(
           <> 
              <button onClick={()=>handleEx(item.category_id)}  className="text-slate-500 text-xl bg-[#ffc7c7] rounded-lg border- px-0 py-5 sm:w-1/4 mx-auto font-medium">{category}</button>
           </>
           
      
    )
}

export default Btn ;