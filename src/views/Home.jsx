import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../index.css'

function Home() {
  return (
    <>
    <Navbar nav="Home" />
    <Hero />
    <Footer />
    </>
  )
}

export default Home
