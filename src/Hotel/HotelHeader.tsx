import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"
import firstImage from "../assets/hotel_images/hotel_entrance.png"
import secondImage from "../assets/hotel_images/hotel_entance_2.png"
import eventCenter from "../assets/hotel_images/event_center.png"
import { FiChevronRight } from "react-icons/fi"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

interface ButtonProp{
    text: string
}

interface MobileNavBarProp{
    showNav: boolean
}

interface NavigationProp{
    showNav: boolean
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileNavBar({showNav}:MobileNavBarProp){
    const navItems = ['Home','About','Rooms','Amenities','Gallery','Testimonials','Contact']
    const editedNavItems = navItems.map((item)=><li><a href={"#"+item.toLowerCase()} className="hover:cursor hover:text-gold-hover">{item}</a></li>)
    return(
        <motion.div initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} exit={{opacity:0,x:-50}} className={`${showNav ? 'block':'hidden'} lg:hidden md:hidden absolute`} transition={{duration:0.5,ease:'easeInOut'}}>
            <ul className="flex order-1 transform-[translate(-19px,-16px)] backdrop-blur-[3px] p-2.5 flex-col gap-4.75 bg-[#00000026] font-inter tracking-[1px] text-gold font-medium">
                {editedNavItems}
            </ul>
        </motion.div>
    )
}


function NavBar(){
    const navItems = ['Home','About','Rooms','Amenities','Gallery','Testimonials','Contact']
    const editedNavItems = navItems.map((item)=><li><a href={"#"+item.toLowerCase()} className="hover:cursor hover:text-gold-hover">{item}</a></li>)
    return(
        <div className="hidden lg:block md:block order-2">
            <ul className="flex  flex-row font-inter gap-9 tracking-[1px] text-subText font-medium">
                {editedNavItems}
            </ul>
        </div>
    )
}

export function TransparentButton({text}:ButtonProp){
    return(
        <button className="uppercase order-3 w-fit font-inter text-gold border-gold py-1 px-4 font-medium bg-transparent border-2">{text}</button>
    )
}

function Navigation({showNav,setShowNav}:NavigationProp){
    return(
        <div className="relative gap-6 z-50 flex justify-between items-start lg:items-center lg:gap-0 lg:order-1" onClick={(e)=>{e.stopPropagation();setShowNav(false)}}>
            <p className={"font-cinzel order-2 font-bold text-gold lg:text-3xl md:text-3xl -z-1 text-[24px] " + `${showNav ? 'translate-x-24':''}`}>3D Suites N Lounge</p>
            <GiHamburgerMenu className={"size-8 lg:hidden md:hidden text-gold hover:cursor-pointer hover:text-gold-hover " + `${showNav ? 'hidden':'block'}`} onClick={(e)=>{e.stopPropagation();setShowNav(true)}}/>
            <MobileNavBar showNav={showNav}/>
            <NavBar />
            <button className="uppercase order-3 hidden lg:block md:block w-fit font-inter text-gold border-gold py-1 px-4 font-medium bg-transparent border-2">Book A Stay</button>
        </div>
    )
}

function HeroText(){
    return(
        <div className="lg:mt-12 mt-5 gap-5 relative lg:z-50 z-1 w-full lg:w-[50%] flex flex-col lg:gap-6 items-start">
            <p className="text-gold uppercase font-medium text-[16px] lg:text-[17px] md:text-[17px] font-inter">A sanctuary of luxury and comfort</p>
            <p className="font-cinzel text-[3rem] lg:text-[4rem] md:text-[4rem] font-medium leading-13.25 lg:leading-17 md:leading-17 text-mainText">Experience <br /> Timeless elegance</p>
            <p className="font-inter text-[15px] lg:text-[16px] md:text-[16px] text-subText font-bold">Discover a refined escape where exceptional service. <br /> breathtaking views, and unmatched comfort come together <br /> for an unforgettable stay</p>
            <div className="bg-gold items-center flex flex-row gap-2 py-1 px-4 text-black uppercase w-fit font-medium tracking-[2px]">
                <p>Book a stay</p>
                <FiChevronRight className="size-4"/>
            </div>
            <div className="flex flex-row gap-1 items-center">
                <p className="border-3 text-subText border-gold rounded-2xl px-1 m-0">?</p>
                <p className="uppercase text-subText font-medium">Scroll to discover</p>
            </div>
        </div>
    )
}

export default function HotelHeader(){
    const images = [firstImage,secondImage,eventCenter]
    const [currentImage,setCurrentImage] = useState(firstImage)
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentImage(prevImage => images[(images.indexOf(prevImage) + 1) 
                % (images.length)])
        },5000)
        return ()=>{
            clearInterval(interval)
        }
    },[currentImage])
    const [showNav,setShowNav] = useState(false)
    return(
        <div className="relative h-137.5 min-h-125 overflow-hidden p-4" onClick={(e)=>{e.stopPropagation;setShowNav(false)}}>
            <AnimatePresence mode="sync">
                <motion.img src={currentImage} alt="Luxury Hotel" 
                key={currentImage}
                initial={{opacity:0}} 
                animate={{opacity:1}} exit={{opacity:0}} 
                transition={{duration:1}} className="absolute inset-0 w-full h-full object-cover object-left -z-10"/>
            </AnimatePresence>
            <div className="inset-0 bg-black/50 absolute"></div>
            <Navigation showNav={showNav} setShowNav={setShowNav}/>
            <HeroText />
        </div>
    )
}