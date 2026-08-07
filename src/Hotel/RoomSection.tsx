
import { easeIn, motion } from "motion/react";
import StandardRoom from "../assets/hotel_images/first_room.png"
import DeluxeRoom from "../assets/hotel_images/deluxe_room.png"
import PremiumRoom from "../assets/hotel_images/premium_room.png"
import { div } from "motion/react-client";


interface RoomProp{
    image: string
    title: string
    description:string
    price:string
    
}

interface FeaturesHeadingProp{
    title: string
    description: string
}

export function FeaturesHeading({title,description}:FeaturesHeadingProp){
    return(
        <div className="flex flex-col gap-0.5 mb-2.5">
            <p className="text-gold uppercase font-inter font-medium">{title}</p>
            <p className="text-mainText font-cinzel text-4xl font-medium">{description}</p>
        </div>
    )
}

function Rooms({image,title,description,price}:RoomProp){
    const editedPrice = "\u20A6"+price
    return(
        <motion.div whileInView={{opacity:1,y:0}} initial={{scale:1,opacity:0,y:40}} viewport={{once:true}} transition={{duration:0.6, ease:easeIn}} whileHover={{scale:1.02, boxShadow:'1px 4px 7px grey', cursor:'pointer'}} exit={{scale:1, boxShadow:"0px 0px 0px black"}} className="border border-[#ffffff6c] bg-surface h-fit w-full lg:w-fit">
            <img src={image} alt={title} className="h-60 w-full shrink-0 snap-center"/>
            <div className="flex flex-row justify-between px-7 pb-7">
                <div className="flex mt-3 flex-col gap-4">
                    <p className="font-cinzel text-gold font-bold text-[23px]">{title}</p>
                    <p className="font-inter text-subText font-bold">{description}</p>
                    <div className="flex flex-row items-center justify-between">
                        <p className="uppercase font-bold font-inter text-gold items-center">From {editedPrice} / night</p>
                        <button className="border-2 border-gold uppercase text-gold font-medium font-inter w-fit py-1.5 px-3 m-0">Book now</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export function RoomSection(){
    return(
        <div className=" mt-7 border-b border-[#ffffff7e] pb-6">
            <FeaturesHeading title="our rooms & suites" description="find your perfect stay"/>
            <div className="lg:grid lg:grid-cols-3 lg:gap-6 flex flex-col gap-7.5">
                <Rooms image={StandardRoom} title="Standard Room" description="A perfect blend of comfort and style with modern anemities and cozy ambience" price="80,000"/>
                <Rooms image={DeluxeRoom} title="Deluxe Room" description="A perfect blend of comfort and style with modern anemities and cozy ambience" price="100,000"/>
                <Rooms image={PremiumRoom} title="Premium Room" description="A perfect blend of comfort and style with modern anemities and cozy ambience" price="120,000"/>
            </div>
        </div>
    )
}