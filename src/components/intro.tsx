import { useState } from "react"
import ToggleSwitch from "./switch"
export default function Intro(){
    let [on,setOn] = useState(false);
    
    return (<>
        <div style={{fontFamily:"Carme"}} className="flex flex-col w-full justify-evenly">
          
            <div
             className="h-[220px] flex w-full justify-between px-16 pr-20 items-center text-[200px]">
                <div >Myself</div>
                <div> <ToggleSwitch setOn={setOn} ></ToggleSwitch> </div>
            </div>
            <div style={{
                transitionDuration: '0.3s',
                color:"transparent",
                WebkitTextStroke:on?"3px white":"3px gray",
                textShadow:on?"0 0 20px aqua":"none"
            }} className="h-[220px] flex items-left pl-16 items-center text-[200px]">
                Jaimin Khunt 
            </div>
            
        </div>
        <div id="and" style={{color:"whitesmoke",fontFamily:"Carme"}} className="h-[100px] px-16 text-[90px] flex items-center justify-center">
            <div>Web Devloper</div>
            <div id="cen" className="w-[300px] flex justify-center duration-1000 items-end"><div id="circle" style={{backgroundColor:"#18d456",boxShadow:"0px 0 10px 0px black inset"}} className=" font-bold w-[100px] h-[100px] rounded-full flex items-center text-[50px] justify-center">&</div></div>
            <div>Programmer</div>
        </div>
        <style jsx>{`
                #and:hover #cen{
                    width:160px;
                }
                #and:hover>#cen>#circle{
                 background-color:red !important;
                 }
            `}</style>
    </>)
}