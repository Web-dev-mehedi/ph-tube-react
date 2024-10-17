
export default function Card({singleCard}){
    // console.log(singleCard.authors[0].profile_name)
    const {thumbnail, title, description} = singleCard
    const {profile_picture, profile_name, verified} = singleCard.authors[0]
    const {views, posted_date} = singleCard.others
     return (
        <div className="w-full " style={{textAlign:'left',border:'1px solid #ededed',borderRadius:'12px'}}>
           
           <div style={{padding:'16px',position:'relative'}}>
            <img src={thumbnail} alt="" className="w-full" style={{objectFit:'cover',borderRadius:'8px',height:'160px'}}/>
                <span style={{background:"#eeeeee",padding:'5px',borderRadius:'4px',position:'absolute',right:'20px',top:"160px"}}>{posted_date}</span>
                <h2>{title}</h2>
                <div className="flex">
                <img src={profile_picture} alt=""  className="w-8"/>
                <span style={{background:"#eeeeee",padding:'5px',borderRadius:'4px'}}>Authors : {profile_name}</span>
                </div>
                <div className="flex" style={{marginTop:"10px"}}>
                <span style={{background:"#e6ffe6",padding:'5px',borderRadius:'4px'}}>Views : {views}</span>
                <span>{verified}</span>
                </div>
           </div>

        </div>
     )
}