import Image from 'next/image'
import Shop from './page/shop/page'
import Brands from './page/brands/page'
import Nav from './components/Navbar/page'
import Homegrown from './page/homegrown/page'
import Footer from './components/Footer/page'
import Sidebar from './components/Sidebar/page'
import MoreInfo from './page/moreInfo/page'
export default function Home() {
  return (
    <div id='home' className='w-full min-h-screen bg-gradient-to-r from-[#5F0A87] to-[#A4508B] text-white font-serif overflow-hidden'>
      <Sidebar/>
      <Nav/>
      <Shop/>
      <Brands/>
      <Homegrown/>
      <MoreInfo/>
      <Footer/>
    </div>
  )
}
