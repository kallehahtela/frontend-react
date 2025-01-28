import './index.css'
import SearchBar from './components/SearchBar'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import InfiniteScroll from './components/InfiniteScroll'
import Services from './components/Services'
import TextBoxDark from './ui/TextBoxDark'



function App() {
  return (
    <>
      {/* FOR Iphone 12 PRO ONLY FOR DEBUGGING */}
      {/* WEB FOR LATER */}
      <div
        className='flex flex-col items-center overflow-x-hidden overflow-y-auto min-h-screen bg-gray-100'>
        <SearchBar placeholder={`Don't be lazy, get productive...`}/>
        <Carousel />
        <Hero
          title={`Let's Make <br /> Difference on<br /> Your Web <br /> Presence Today`} 
        />
        <InfiniteScroll />
        <Services />
        <TextBoxDark 
            title='Choose us for your web journey!' 
            text={`We provide the most developer <br /> like environment for non-code web <br /> development. Now you have a great <br /> change to get evolved in the change <br /> of website and web application <br /> development. There is none previous <br /> experience in coding & design <br /> required in order to make beautiful <br /> and well structured websites or web <br /> applications. There is an easy to <br /> follow along documentation to get <br /> started. Also there is some tutorials <br /> for how to add a certain feature in.`}
          />
      </div>
    </>
  )
}

export default App
