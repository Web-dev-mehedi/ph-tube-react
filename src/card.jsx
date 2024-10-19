
export default function Card({singleCard}){

    const {thumbnail, title} = singleCard
    const {profile_picture, profile_name, verified} = singleCard.authors[0]
    const {views, posted_date} = singleCard.others
     return (
        <div className="w-full mx-auto" style={{textAlign:'left',border:'1px solid #ededed',borderRadius:'12px'}}>
           
           <div className="p-4 relative space-y-4">
            <img src={thumbnail} alt="" className="w-full" style={{objectFit:'cover',borderRadius:'8px',height:'160px'}}/>
                <span style={{background:"#eeeeee",padding:'5px',borderRadius:'4px',}} className="absolute right-5 top-36">{posted_date}</span>
                <h2 className="text-black text-lg font-medium">{title}</h2>
                <div className="flex justify-between items-start gap-10">
                <img src={profile_picture} alt=""  className="w-8 h-8 rounded-full"/>
                <span className="text-sm px-2 py-1 bg-[#eeeeee] rounded-md">Authors : {profile_name}</span>
                </div>
                <div className="flex justify-between items-start gap-10" style={{marginTop:"10px"}}>
                <span style={{background:"#e6ffe6",padding:'5px',borderRadius:'4px'}}>Views : {views}</span>
                <span>{verified}</span>
                </div>
           </div>

        </div>
     )
}