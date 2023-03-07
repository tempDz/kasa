import React, { useState } from "react";
import styled from "styled-components";
import arrowImage from "../../assets/fleche.png";

const AccordionContainer = styled.div`
  max-width: 1023px;
  margin: 0 auto;
`;

const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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
  justify-content: flex-end;
  cursor: pointer;

  &:before {
    content: url(${arrowImage});
    display: inline-block;
    margin-left: 10px; /* Modification de margin-right à margin-left */
    transform: ${props => props.isOpen ? 'rotate(0deg)' : 'rotate(-180deg)'};
    transition: transform 0.3s ease-in-out;
  }
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
          {title}
        </AccordionHeader>
        <AccordionContent isOpen={isOpen}>
          {children}
        </AccordionContent>
      </AccordionWrapper>
    </AccordionContainer>
  );
}

export default Accordion;
