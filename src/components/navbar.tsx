import HoverDiv from "./hoverdiv";

export default function Navbar(){
    return (<div className="h-32"><div style={{
        "boxShadow": "6px 4px 0px 1px white"
    }} className="absolute w-[95%] top-8 h-20 border-2 left-1/2 transform -translate-x-1/2">
        <div className="flex top-20 h-full items-center justify-between p-4">
            <div style={{
                fontWeight: "600"
            }} className="text-3xl"  >
                Jaimin Khunt
            </div>
            <div style={{
                fontFamily:`"Open Sans", sans-serif`,
                fontWeight:"300"
            }} className="grid grid-cols-2 gap-2 pr-8">
                <HoverDiv></HoverDiv>
                {/* <div>Profiles</div> */}
                <div className="flex items-center justify-center">Contact</div>
            </div>
        </div>
      </div>
      </div>)
}