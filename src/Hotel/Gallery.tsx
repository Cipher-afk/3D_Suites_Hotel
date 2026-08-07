import { FeaturesHeading } from "./RoomSection"
import firstImage from "../assets/hotel_images/hotel_entrance.png"
import secondImage from "../assets/hotel_images/hotel_entance_2.png"
import eventCenter from "../assets/hotel_images/event_center.png"
import StandardRoom from "../assets/hotel_images/first_room.png"
import DeluxeRoom from "../assets/hotel_images/deluxe_room.png"
import PremiumRoom from "../assets/hotel_images/premium_room.png"
import PoolTable from "../assets/hotel_images/pool_game.png"
import PoolTable2 from "../assets/hotel_images/pool_game_2.png"
import { easeIn, motion } from "motion/react"

export default function GallerySection(){
    const images = [firstImage,secondImage,eventCenter,StandardRoom,DeluxeRoom,PremiumRoom,PoolTable,PoolTable2] 
    const gallery = [...images,...images]
    const editedImages = gallery.map((image)=><img className="w-75 h-55 hover:scale-[1.05] hover:cursor-pointer transition-[scale]" src={image}/>)
    console.log(editedImages)
    return(
        <div className="mt-7 overflow-hidden " id="gallery">
            <FeaturesHeading title="Gallery" description="A glimpse of grand solace"/>
            <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.4, ease:easeIn}} className={`flex p-10 gap-5 w-max animate-scroll hover:animation-paused`}>
                {editedImages}
            </motion.div>
        </div>
    )
}