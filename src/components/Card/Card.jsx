import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledCard = styled.div`
  height: 340px;
  width: 340px
  flex-grow: 1;
  margin-bottom: 20px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  opacity: 0;
  transform: translateY(30px);
  animation: appear 0.5s ease-in-out forwards;

  &:hover {
    cursor: pointer;
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 480px) {
    height: 255px;
    width: 335px;
    justify-items: center;
    margin: 0 auto;
  }
`;

const Cover = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  ${StyledCard}:hover & {
    transform: scale(1.05);
  }
`;

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
  display: flex;
  align-items: flex-end;
  color: #ffffff;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;


function Card({ listing, delay }) {
  const { title, cover, pictures, id } = listing;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/fiche-logement?id=${id}`);
  };

  return (
    <StyledCard style={{ animationDelay: `${delay}ms` }} onClick={handleCardClick}>
      <Cover src={cover} alt={title} />
      <Overlay />
      <Title>{title}</Title>
      {pictures.slice(1).map((picture, index) => (
        <img key={index} src={picture} alt={title} />
      ))}
    </StyledCard>
  );
}

export default Card;
