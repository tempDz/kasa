import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';
import data from '../../Data/Data';

// Définition du conteneur de la galerie
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
  // Définition du state "listings" qui va contenir les données de notre galerie
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Récupération des données depuis le fichier "Data.js" grâce à l'import
    setListings(data);
  }, []);

  return (
    <GalleryContainer>
      {/* Utilisation de la méthode "map" pour boucler sur le tableau "listings" */}
      {/* et afficher une carte pour chaque élément */}
      {listings.map((listing, index) => (
         <Card key={listing.id} listing={listing} />
      ))}
    </GalleryContainer>
  );
}

export default Gallery;
