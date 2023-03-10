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

const accordionWidths = [90];

function AccordionList() {
  return (
    <AccordionContainer>
      <Accordion title="Fiabilité" width={accordionWidths[0]}>
        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
      </Accordion>
      <Accordion title="Respect" width={accordionWidths[0]}>
        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
      </Accordion>
      <Accordion title="Service" width={accordionWidths[0]}>
        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
      </Accordion>
      <Accordion title="Responsabilité" width={accordionWidths[0]}>
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
      </Accordion>
    </AccordionContainer>
  );
}

export default AccordionList;
