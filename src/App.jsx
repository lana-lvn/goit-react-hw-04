
import { useEffect, useState } from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import Loader from './components/Loader/Loader'
import SearchBar from './components/SearchBar/SearchBar'
import { fetchPictures } from './services/api'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn'
import toast from 'react-hot-toast'


function App() {

  const [pictures, setPictures] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getPictures = async () => {
      if (!query.trim()) {
        return;
      }

      try {
        setIsLoading(true);
        setIsError(false);
        const { results } = await fetchPictures(query, page);
        setPictures(prev => [...prev, ...results]);
      } catch (error) {
       
        console.log(error);
        setIsError(true);
        
      } finally {
        setIsLoading(false);
      }
    };


    getPictures();
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    if (newQuery === query) {
      return;
    }
    setQuery(newQuery);
    setPictures([]);
    setPage(1);
  }

  const handleChangePage = () => {
    setPage(prev => prev + 1)
  };

  return (

    <> 
      <SearchBar onSearch={handleChangeQuery} />
      {pictures.length > 0 && <ImageGallery pictures={pictures} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageModal/>
      {pictures.length > 0 && <LoadMoreBtn onClick={handleChangePage} />}
    </>
  )
}

export default App
