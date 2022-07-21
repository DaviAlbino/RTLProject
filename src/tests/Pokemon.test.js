import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utilities/renderWithRouter';
import App from '../App';

describe('Testando o componente Pokemon', () => {
  test('Verifica o card renderizado com as informações corretas', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent(/Pikachu/i);

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent(/Electric/i);

    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent(/Average weight: 6.0 kg/i);

    const pokemonImage = screen.getByRole('img');
    expect(pokemonImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(pokemonImage).toHaveAttribute('alt', 'Pikachu sprite');
  });

  test('Verificar o funcionamento do link de navegação do card Pokémon', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', {
      name: /More Details/i,
    });
    expect(detailsLink).toHaveAttribute('href', '/pokemons/25');
  });

  test('Verificar se o pokémon é favoritado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
    const pickFavorite = screen.getByRole('checkbox');
    expect(pickFavorite).toBeInTheDocument();

    userEvent.click(pickFavorite);
    const starIcon = screen.getAllByRole('img');
    expect(starIcon[1]).toHaveAttribute('src', '/star-icon.svg');
    expect(starIcon[1]).toHaveAttribute('alt', 'Pikachu is marked as favorite');
  });
});
