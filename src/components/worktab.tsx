export default function WorkTab(){
    return (<div>
        <div id="bar" className="flex w-full border-2 p-3 text-l font-bold justify-between" style={{
            boxShadow:"4px 4px 0px -1px white"
        }}>My Cofee App
        <div style={{boxShadow:"3px 3px 0 0px white"}} className="mr-1 w-8 h-8 border-2 border-white duration-100 hover:border-amber-500">
            <img src="https://i.ibb.co/bXgmHmX/121112.png" alt="" />
        </div>
        
        <div id="box" style={{
           
        }} className="absolute w-96 h-0 bg-black duration-200 right-32">
            <img className="w-full h-full" src="https://i.ibb.co/Qb5tskD/coffee.png" alt="" />
        </div>
        
        </div>
        <style jsx>{`
            #bar:hover #box{
                height:200px;
                
            }
        `}</style>
    </div>)
}