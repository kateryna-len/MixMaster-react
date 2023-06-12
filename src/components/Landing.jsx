import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from './CocktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchValue = '';
  const result = await axios.get(`${cocktailSearchUrl}${searchValue}`);
  return { drinks: result.data.drinks, searchValue };
};

function Landing() {
  const { drinks, searchValue } = useLoaderData();

  return <CocktailList drinks={drinks} />;
}

export default Landing;
