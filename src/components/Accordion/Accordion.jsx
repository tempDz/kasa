import React, { useState } from "react";
import styled from "styled-components";
import arrowImage from "../../assets/fleche.png";

const AccordionContainer = styled.div`
  max-width: 1023px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;
  width: 90%;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
  padding: 0 20px;
  border-radius: 5px;
  background-color: #ff6060;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 142.6%;
`;

const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 142.6%;
  color: #FF6060;
`;


const AccordionContent = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: #f7f7f7;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionWrapper>
        <AccordionHeader isOpen={isOpen} onClick={toggleAccordion}>
          <Title>{title}</Title>
          <img src={arrowImage} alt="flèche" style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(-180deg)', transition: 'transform 0.2s ease-in-out' }} />
        </AccordionHeader>
        <AccordionContent isOpen={isOpen}>
          <Text>{children}</Text>
        </AccordionContent>
      </AccordionWrapper>
    </AccordionContainer>
  );
}

export default Accordion;
