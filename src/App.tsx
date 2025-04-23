import Header from "./components/Header";
import Card from "./components/Card";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Daskom from "/Daskom.png"
import DSD from "/DSD.png"
import Proglan from "/Proglan.png"
import SSF from "/SSF.png"
import PSD from "/PSD.png"
import IoT from "/IoT.png"
import Testimonial from "./components/Testimonial";

export default function App() {
  return (
    <div className="flex flex-col bg-white dark:bg-black">
      <Navbar />
      <Header />
      <div className="flex justify-center text-4xl font-mono font-bold pb-5 text-black dark:text-white">
        Our Labs
      </div>
      <div id="labs" className="mx-auto max-w-screen-xl space-y-4 pb-16 sm:pb-24 lg:pb-32 px-2">
        <Card 
          title="Advanced Programming" 
          subtitle="Covers advanced programming concepts and techniques to enhance your coding skills." 
          author="Digilab FTUI" 
          date="2024-10-01" 
          duration="29 hours" 
          img={Proglan}
        />
        <Card 
          title="Basic Programming" 
          subtitle="Introduces the fundamentals of programming, including syntax, logic, and problem-solving." 
          author="Digilab FTUI" 
          date="2024-10-08" 
          duration="30 hours" 
          img={Daskom}
        />
        <Card 
          title="Fundamentals of Digital System" 
          subtitle="Explores the basics of digital systems, including logic gates, circuits, and design principles." 
          author="Digilab FTUI" 
          date="2024-10-15" 
          duration="41 hours" 
          img={DSD}
        />
        <Card 
          title="Digital System Design" 
          subtitle="Focuses on designing and implementing digital systems with an emphasis on scalability and efficiency." 
          author="Digilab FTUI" 
          date="2024-10-15" 
          duration="41 hours" 
          img={PSD}
        />
        <Card 
          title="Internet of Things" 
          subtitle="Covers IoT concepts, including device connectivity, data exchange, and real-world applications." 
          author="Digilab FTUI" 
          date="2024-10-15" 
          duration="41 hours" 
          img={IoT}
        />
        <Card 
          title="Embedded System" 
          subtitle="Delves into embedded systems, focusing on hardware-software integration and real-time processing." 
          author="Digilab FTUI" 
          date="2024-10-15" 
          duration="41 hours" 
          img={SSF}
        />
      </div>
      <div className="flex justify-center text-4xl font-mono font-bold pb-5 pt-10 text-black dark:text-white">
        FAQs
      </div>
      <div className="mx-auto max-w-screen-lg">
        <Faq />
      </div>
      <Testimonial />
      <Footer />
    </div>
  )
}