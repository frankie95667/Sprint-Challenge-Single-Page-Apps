import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';
import {Pagination} from 'semantic-ui-react';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`${query}?page=${activePage}`)
    .then(res => {
      setCharacters(res.data.results);
      setTotalPages(res.data.info.pages);
    })
    .catch(err => console.log(err));
  }, [activePage]);

  const updateSearch = (str) => {
    setSearch(str);
  }

  const handlePageChange = (e, { activePage }) => {
    setActivePage(activePage);
  }

  return (
    <section className="character-list">
      <SearchForm updateSearch={updateSearch} />
      <ListWRapper>
      {characters.length > 0 ? characters.filter(character => character.name.toLowerCase().includes(search.toLowerCase())).map(character => {
        return <CharacterCard key={character.id} character={character} />
      }) : null}
      </ListWRapper>
      <Pagination totalPages={totalPages} activePage={activePage} onPageChange={handlePageChange} />
    </section>
  );
}

const ListWRapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;