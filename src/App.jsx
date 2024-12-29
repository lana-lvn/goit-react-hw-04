
import './App.css'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import Loader from './components/Loader/Loader'
import SearchBar from './components/SearchBar/SearchBar'


function App() {
 

  return (
    <>
      <SearchBar />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <ImageModal/>
    </>
  )
}

export default App
