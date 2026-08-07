import { FiArrowRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi"
import { FeaturesHeading } from "./RoomSection"
import type { IconType } from "react-icons"
import { easeIn, motion } from "motion/react"

interface ContactProps{
    icon: IconType
    title: string
    value: string
}

function Contact({icon:Icon,title,value}:ContactProps){
    return(
        <div className="flex gap-2" id="contact">
            <Icon className="text-gold size-7"/>
            <div className="flex flex-col gap-1.5">
                <p className="text-mainText font-bold">{title}</p>
                <p className="text-subText font-medium">{value}</p>
            </div>
        </div>
    )
}


function ContactSection(){
    return(
        <div className="h-fit flex lg:flex-row flex-col p-5 bg-background gap-8">
            <Contact icon={FiPhone} title="Phone" value="+234 801 234 5678"/>
            <Contact icon={FiMail} title="Email" value="info@grandsolace.com"/>
            <Contact icon={FiMapPin} title="Location" value="Ogbogoro, Rivers State"/> 
        </div>
    )
}



export default function ContactUs(){
    return(
        <motion.div initial={{opacity:0 ,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.6, ease:easeIn}} viewport={{once:true}} className="flex mt-7 p-10 lg:flex-row flex-col bg-surface items-center justify-between">
            <div className="flex flex-col">
                <FeaturesHeading title="Contact us" description="Let's Plan Your Perfect Stay"/>
                <div className="flex flex-col gap-2 -translate-y-3">
                    <p className="font-inter text-subText font-medium">Have questions or special requests? We're here to help</p>
                    <div className="flex gap-1.5 flex-row items-center border-2 border-gold uppercase text-gold font-medium font-inter w-fit py-1.5 px-3 m-0">
                        <p>Get in touch</p>
                        <FiArrowRight className="size-5"/>
                    </div>
                </div>
            </div>
            <ContactSection />
        </motion.div>
    )
}