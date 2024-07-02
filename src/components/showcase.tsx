import { useState } from "react";
import ParallaxBar from './parallaxbar'
import { title } from "process";
export default function Showcase(){
    const [upper,setUpper] = useState(-2);
    const [lower,setLower] = useState(2);
    const logos = [
        // Array of logo image URLs
        'https://static-00.iconduck.com/assets.00/react-icon-2048x1822-j20tyq26.png',
        'data:image/png;base64,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',
        'https://i.ibb.co/XZpVSTj/js.png',
        "https://i.ibb.co/2PgnJ11/mongo.png",
        "https://umangsoftware.com/wp-content/uploads/2020/06/cpp-1.png",
        "https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png",
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsMjGv1FnFCZh_0mayzMeAu0f-LbicOoufA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-KRmEBF2ieEO1eu_VHVqiGd2CwmEHlsicA&s'
        // Add more logos as needed
      ];
      const Profiles = [
        {
            title:"Codeforces",
            img:"https://i.ibb.co/fX2yZ2J/cf.png",
            redirect:"https://codeforces.com/profile/notHuman9504"
        },
        {
            title:"CodeChef",
            img:"https://i.ibb.co/syv0Ywn/cc.png",
            redirect:"https://www.codechef.com/users/nothuman9504"
        },
        {
            title:"LinkdIn",
            img:"https://i.ibb.co/cF2JzcK/slazzer-edit-image.png",
            redirect:"https://www.linkedin.com/in/jaimin-khunt-a77aa8269/"
        },
        {
            title:"LeetCode",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KJ34dO3Vp7rp1UHEo4eO8VAFNoHKLI9mrw&s",
            redirect:"https://leetcode.com/nothuman9504/"
        },
        {
            title:"GitHub",
            img:"https://i.ibb.co/bXgmHmX/121112.png",
            redirect:"https://github.com/notHuman9504"
        }
      ]
    return(<>
        <div>
            <h2 style={{fontFamily:"Saira Condensed"}} className="text-[60px] ml-16">Skills & Profiles</h2>
            
            <div className="mb-8 mt-6" onMouseEnter={()=>{setUpper(0)}} onMouseLeave={()=>{setUpper(-2)}}> 
                <ParallaxBar baseVelocity={upper}>
                    <div className="flex">
                        {logos.map((logo, index) => (
                        <div className="w-[200px] flex justify-center" key={index}>
                            <img className='h-16' src={logo} alt={`Logo ${index + 1}`} />
                        </div>
                        ))}
                    </div>
                
                </ParallaxBar>
            </div  >
            <div onMouseEnter={()=>{setLower(0)}} onMouseLeave={()=>{setLower(2)}} className="mt-8" >
                <ParallaxBar  baseVelocity={lower}>
                    <div className="flex">
                        {Profiles.map((profile)=>{
                            return (<div  className="inline-block text-2xl mx-20 ">
                                <div onClick={()=>{
                                        window.location.href=profile.redirect;
                                    }}
                                     className="flex w-[150px] flex-col items-center">

                                    <img className="h-24" src={profile.img} alt="" />
                                    <div style={{letterSpacing:"1px"}} >
                                        {profile.title}
                                    </div>
                                </div>
                                 </div>)
                        })}
                    </div>
                </ParallaxBar>
            </div>
           
          
        </div>
    </>)
}