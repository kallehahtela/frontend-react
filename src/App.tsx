import './index.css'
import SearchBar from './components/SearchBar'
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import InfiniteScroll from './components/InfiniteScroll'
import Services from './components/Services'



function App() {
  return (
    <>
      <div
        className='flex flex-col items-center overflow-x-hidden overflow-y-auto min-h-screen bg-gray-100'>
        <SearchBar placeholder={`Don't be lazy, get productive...`}/>
        <Carousel />
        <Hero 
          title={`Let's Make <br /> Difference on<br /> Your Web <br /> Presence Today`} 
        />
        <InfiniteScroll />
        <Services />
      </div>
    </>
  )
}

export default App
