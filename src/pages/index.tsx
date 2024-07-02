import Circles from "@/components/circles";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Navbar from "@/components/navbar";
import Work from "@/components/work";
import { Inter } from "next/font/google";
import Showcase from "@/components/showcase";


export default function Home() {

  return (
    <main style={{height:"100vh"}}>
      <Circles></Circles>
      <Navbar></Navbar> 
      <Intro></Intro>
      <Work></Work>
      <Showcase></Showcase>
      <Contact></Contact>
      
    </main>
  );
}
