import React from "react";
import styled from "styled-components";
import Accordion from "../../components/Accordion/Accordion";

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1023px;
  margin: 0 auto 80px auto;

  @media screen and (max-width: 480px) {
    margin: 20px auto 40px auto;
  }
`;

const accordionWidth = 90;

const accordionData = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Responsabilité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

// Composant AccordionList pour afficher une liste d'accordéons
function AccordionList() {
  // Rendu du composant AccordionList
  return (
    <AccordionContainer>
      {accordionData.map(({ title, content }, index) => (
        // Pour chaque élément de accordionData, on crée un composant Accordion
        <Accordion key={index} title={title} width={accordionWidth}>
          {/* Le contenu de l'accordéon est défini par la propriété content */}
          <p>{content}</p>
        </Accordion>
      ))}
    </AccordionContainer>
  );
}


export default AccordionList;
