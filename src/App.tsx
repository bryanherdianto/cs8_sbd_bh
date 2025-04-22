import Header from "./components/Header";
import Card from "./components/Card";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import DMJLogo from '/DMJLogo.svg';
import OSLogo from '/OSLogo.svg';
import SBDLogo from '/SBDLogo.svg';

export default function App() {
  return (
    <div className="flex flex-col bg-white dark:bg-black">
      <Navbar />
      <Header />
      <div className="flex justify-center text-4xl font-bold pb-5 text-black dark:text-white">
        Our Labs
      </div>
      <div className="mx-auto max-w-screen-xl space-y-4 pb-16 sm:pb-24 lg:pb-32">
        <Card 
          title="Sistem Basis Data" 
          subtitle="Covers the fundamentals of relational and non-relational databases through practical implementation in web apps." 
          author="netleb" 
          date="2024-10-01" 
          duration="29 hours" 
          img={SBDLogo}
        />
        <Card 
          title="Desain Manajemen Jaringan" 
          subtitle="Learn how to design a network with the large scale by considering aspects of scalability and reliability." 
          author="netleb" 
          date="2024-10-08" 
          duration="30 hours" 
          img={DMJLogo}
        />
        <Card 
          title="Sistem Operasi" 
          subtitle="This section contains lab resources for the Operating System class, covering topics such as process management, memory management, file systems, and more." 
          author="netleb" 
          date="2024-10-15" 
          duration="41 hours" 
          img={OSLogo}
        />
      </div>
      <div className="flex justify-center text-4xl font-bold pb-5 text-black dark:text-white">
        FAQs
      </div>
      <div className="mx-auto max-w-screen-lg">
        <Faq />
      </div>
      <Footer />
    </div>
  )
}