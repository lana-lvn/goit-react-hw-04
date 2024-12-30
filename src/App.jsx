
import { useEffect, useState } from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import Loader from './components/Loader/Loader'
import SearchBar from './components/SearchBar/SearchBar'
import axios from 'axios'
import { fetchPictures } from './services/api'


function App() {

  const [pictures, setPictures] = useState([]); 

  useEffect(() => {
    const getPictures = async () => {
      try {
        const { results } = await fetchPictures('nature');
        setPictures(results);
      } catch (error) {
        console.log(error);
        
      }
    };


    getPictures();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
  }
 

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery pictures={pictures} />
      <Loader />
      <ErrorMessage />
      <ImageModal/>
    </>
  )
}

export default App
