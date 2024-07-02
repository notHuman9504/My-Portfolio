export default function Contact(){
    return (<div style={{cursor:"none"}}>
        <div style={{fontFamily:"Bebas Neue"}} className="h-[250px] p-0 m-0 text-[250px] px-20 font-bold">
            Intrested?
        </div>
        <div style={{fontFamily:"Abel",display:"inline-block"}} className="con relative m-0 p-0 border-bottom ml-20 text-[100px]">
            Contact Now
            
            <div className="absolute duration-300 border-b-2 h-[80%] top-0 w-0">
                
            </div>
        </div>
        <style jsx>{`
            @import url('https://fonts.googleapis.com/css2?family=Abel&family=Bebas+Neue&display=swap');
           .con:hover div{
                width:100%;
           }
        `}</style>
    </div>)
}