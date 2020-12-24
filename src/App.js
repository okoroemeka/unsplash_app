import React, { useEffect, useState, useCallback } from 'react';
import Modal from './components/Modal';
import ImageCard from './components/ImageCard';
import Header from './components/Header';
import useDebounce from './components/hooks/Debounce';
import axios from './utils/axios';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessge, setErrorMessage] = useState('');

  const debouncedSearchTerm = useDebounce(searchKeyWord, 500);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleSelectedImage = (image) => {
    setSelectedImage(image);
    toggleModal();
  };

  const handleSearch = useCallback(async () => {
    try {
      setLoading(true);
      setErrorMessage('');
      const newPhotos = await axios.get(`?query=${debouncedSearchTerm}`);
      setPhotos(newPhotos.data);
    } catch (error) {
      console.log('error :>> ', error);
      setErrorMessage('an error occured');
    }
    setLoading(false);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch();
    }
  }, [debouncedSearchTerm, handleSearch]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  return (
    <>
      <div className='app'>
        <Header handleSearch={setSearchKeyWord} />
        <div className='images__container'>
          <div className='images__wrapper'>
            {photos.map((image) => (
              <ImageCard
                key={image.urls.regular}
                image={image.urls.regular}
                name={image.user.name}
                location={image.user.location}
                handleClick={() => handleSelectedImage(image)}
              />
            ))}
          </div>
        </div>
      </div>
      {showModal ? (
        <Modal>
          <span className='cancel__button' onClick={toggleModal}>
            &times;
          </span>
          <ImageCard
            image={selectedImage.urls.regular}
            name={selectedImage.user.name}
            location={selectedImage.user.location}
            detailClassName='modal__card__details'
            nameClassName='name__modal'
            locationClassName='location__modal'
          />
        </Modal>
      ) : null}
    </>
  );
}

export default App;
