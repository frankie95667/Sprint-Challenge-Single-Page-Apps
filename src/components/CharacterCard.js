import React from "react";
import styled from 'styled-components';

export default function CharacterCard({character}) {
  return (
        <Card>
          <img src={character.image} />
          <h2>{character.name}</h2>
        </Card>
  );
}

const Card = styled.div`
  width: 30%;
  text-align: center;
  padding: 10px;

  img {
    width: 100%;
    margin: 0;
  }
  
  h2 {
    background-color: #a9d3e9;
    color: white;
    margin: 0;
    padding: 10px 0;
  }
`;
