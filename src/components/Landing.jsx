import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CocktailList from './CocktailList';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchValue = 'margarita';
  const result = await axios.get(`${cocktailSearchUrl}${searchValue}`);
  console.log(result);
  return { drinks: result.data.drinks, searchValue };
};

function Landing() {
  const { drinks, searchValue } = useLoaderData();
  console.log(drinks, searchValue);
  return <CocktailList drinks={drinks} />;
}

export default Landing;
