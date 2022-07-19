import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utilities/renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Testando Favorirte Pokémons', () => {
  test('Testando o título da página', () => {
    renderWithRouter(<FavoritePokemons />);

    const favoriteTitle = screen.getByRole('heading', {
      nome: /Favorite pokémons/i,
      level: 2,
    });

    expect(favoriteTitle).toBeInTheDocument();
  });

  test('Testando se aparece mensagem correspondente sem favoritos', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavoriteFound = screen.getByText(/No favorite pokemon found/i);

    expect(noFavoriteFound).toBeInTheDocument();
  });
});
