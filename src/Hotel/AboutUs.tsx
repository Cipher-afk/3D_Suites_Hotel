
import aboutUsImage from "../assets/hotel_images/event_center.png"
import { motion } from "motion/react";
import { TransparentButton } from "./HotelHeader";
import type { IconType } from "react-icons";
import { BiBed } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { LuPartyPopper } from "react-icons/lu";

interface BenefitsProp{
    icon: IconType
    mainText: string
    subText: string
}

function AboutUsText(){
    return(
        <div className="flex flex-col gap-4">
            <p className="text-gold uppercase font-medium font-inter">About us</p>
            <p className="text-mainText uppercase font-cinzel text-2xl font-medium">Hospitality that <br /> feels like home</p>
            <p className="font-bold text-subText">At Grand Solace, we blend modern luxury with heartfelt <br /> hospitality. Every detail is thoughtfully curated to ensure <br /> you relax, recharge and create lasting memories</p>
            <TransparentButton text="Discover more"/>
        </div>
    )
}

function Benefits({icon:Icon,mainText,subText}:BenefitsProp){
    return(
        <div className="flex flex-row items-start gap-3.5 w-[70%]">
            <Icon className="lg:size-8 size-10 text-gold"/>
            <div className="flex flex-col gap-1">
                <p className="uppercase text-gold font-inter font-medium text-[17px]">{mainText}</p>
                <p className="font-inter text-subText font-medium">{subText}</p>
            </div>
        </div>
    )
}

function AboutUsBenefits(){
    return(
        <div className="flex flex-col gap-10">
            <Benefits icon={BiBed} mainText="Premium comfort" subText="Elegant rooms designed for ultimate relaxation and peace."/>
            <Benefits icon={FaHandshake} mainText="world class service" subText="A dedicated team commited to exceeding your expectations."/>
            <Benefits icon={LuPartyPopper} mainText="Memorable Experiences" subText="From the dining to curated activities we make every moment special"/>
        </div>
    )
}

export default function AboutUsSection(){
    return(
        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:0}} viewport={{once:true}} transition={{duration: 0.8}} className="flex flex-col lg:p-10 pb-4.5  lg:flex-row gap-12 lg:gap-30 border-b border-[#ffffff7e] items-start">
            <motion.img src={aboutUsImage} className="lg:w-120 lg:h-80 w-full" initial={{scale:1}} whileHover={{scale:1.1, cursor:'pointer'}} exit={{scale:1}} transition={{duration:1}}/>
            <AboutUsText />
            <AboutUsBenefits />
        </motion.div>
    )
}