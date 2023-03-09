import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import data from '../../Data/Data';

const GalleryContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1240px;
  margin: 50px auto;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 40px;
  background: #F7F7F7;
  border-radius: 25px;
`;

function Gallery() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    setListings(data);
  }, []);

  return (
    <GalleryContainer>
      {listings.map((listing, index) => (
        <Card
          key={listing.id}
          listing={listing}
          delay={(index * 100) + 500}
        />
      ))}
    </GalleryContainer>
  );
}

export default Gallery;
