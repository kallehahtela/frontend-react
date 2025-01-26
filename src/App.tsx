import './index.css'
import SearchBar from './components/SearchBar'
import Carousel from './components/Carousel'
import Hero from './components/Hero'

function App() {

  return (
    <>
      <div className='flex flex-col items-center overflow-y-auto min-h-screen bg-gray-100'>
        <SearchBar />
        <Carousel />
        <Hero title='We Build Future for Web Development' />
      </div>
    </>
  )
}

export default App
