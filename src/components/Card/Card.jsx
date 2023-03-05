// Importation de React et styled-components
import React from "react";
import styled from "styled-components";

// Création d'un composant StyledCard qui est un div stylisé avec plusieurs propriétés CSS
const StyledCard = styled.div`
  height: 320px;
  flex-grow: 1;
  margin-bottom: 20px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

// Création d'un composant Cover qui est une image stylisée avec plusieurs propriétés CSS
const Cover = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  // Utilisation de l'interpolation de chaînes pour appliquer un effet de zoom sur l'image lorsqu'on survole la carte
  ${StyledCard}:hover & {
    transform: scale(1.05);
  }
`;

// Création d'un composant Overlay qui est un div stylisé pour créer un effet de dégradé sombre sur l'image
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`;

// Création d'un composant Title qui est un div stylisé pour afficher le titre de la carte
const Title = styled.div`
  position: absolute;
  left: 5.88%;
  right: 5.88%;
  top: 78.82%;
  bottom: 5.88%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 540;
  font-size: 18px;
  line-height: 142.6%;
  /* or 26px */
  display: flex;
  align-items: flex-end;
  color: #ffffff;
`;

// Création du composant Card qui prend en paramètre une propriété listing
function Card({ listing }) {
  // On extrait le titre, l'image de couverture et les autres images de l'hébergement de la propriété listing
  const { title, cover, pictures } = listing;

  // On retourne un composant StyledCard avec les composants Cover, Overlay et Title à l'intérieur, ainsi que les autres images de l'hébergement
  return (
    <StyledCard>
      <Cover src={cover} alt={title} />
      <Overlay />
      <Title>{title}</Title>
      {/* La méthode "slice(1)" exclut la première image de l'array "pictures". La méthode "map" itère sur chaque élément de l'array résultant et crée un élément "img" pour chaque image. */}
      {pictures.slice(1).map((picture, index) => (
        // La source de chaque élément "img" est égale à l'élément actuel de l'array "pictures", et une clé unique est assignée à chaque élément "img" pour faciliter la mise à jour dynamique de l'interface utilisateur.
        <img key={index} src={picture} />
      ))}
    </StyledCard>
  );
}

// Exportation du composant Card pour pouvoir l'utiliser dans d'autres fichiers
export default Card;
