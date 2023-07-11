import ContactCard from "./components/ContactMe/ContactMe"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import Skillsets from "./components/Skillsets/Skillsets"


const App = () => {
  return (
    <div className="bg-[#130b0f] font-body text-[#f0e5ea]">
      <NavBar/>
      <Skillsets/>
      <ContactCard twitterUrl="https://twitter.com/NmesomaHenry" portfolioUrl='https://github.com/IamHenryOkeke' phone='tel:+2347080194374' linkedInUrl='http://www.linkedin.com/in/henry-okeke-3176481a9' emailAddress="iamhenryokeke@gmail.com"/> 
      <Footer/>
    </div>
  )
}

export default App

