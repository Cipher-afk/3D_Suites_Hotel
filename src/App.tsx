import { div } from "motion/react-client";
import HotelHeader from "./Hotel/HotelHeader";
import AboutUsSection from "./Hotel/AboutUs";
import { RoomSection } from "./Hotel/RoomSection";
import AmenitiesSection from "./Hotel/Amenities";
import GallerySection from "./Hotel/Gallery";
import Testimonials from "./Hotel/Testimonials";
import { RiContactsLine } from "react-icons/ri";
import ContactUs from "./Hotel/ContactUs";
import Footer from "./Hotel/Footer";

export default function App(){
  return(
    <div className="flex flex-col">
      <HotelHeader />
      <div className="lg:p-10 p-3">
        <AboutUsSection />
        <RoomSection />
        <AmenitiesSection />
        <GallerySection />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}