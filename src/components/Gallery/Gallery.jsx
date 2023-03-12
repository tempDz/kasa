import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import data from '../../Data/Data';

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1240px;
  margin: 50px auto;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 60px;
  background: #F7F7F7;
  border-radius: 25px;

  @media screen and (max-width: 480px) {
    padding: 3%;
    grid-gap: 10px;
    min-width: 355px;
    background: transparent;
  }
`;


function Gallery() {
  const [listings, setListings] = useState([]);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    setListings(data);
    setShowCards(true);
  }, []);

  return (
    <GalleryContainer>
      {listings.map((listing, index) => (
        <Card
          key={listing.id}
          listing={listing}
          show={showCards}
          delay={index * 100}
        />
      ))}
    </GalleryContainer>
  );
}

export default Gallery;
