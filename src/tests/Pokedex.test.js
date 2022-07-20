import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utilities/renderWithRouter';
import App from '../App';
// import { PokemonButtonsPanel } from '../components';
// import { Pokedex } from '../pages';

describe('Testando Pokédex', () => {
  test('Testando o título da página', () => {
    renderWithRouter(<App />);

    const PokedexText = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });

    expect(PokedexText).toBeInTheDocument();
  });

  test('Testando a exibição do pokémon na tela', () => {
    renderWithRouter(<App />);

    const nextPokemonBtn = screen.getByRole('button', {
      name: /Próximo pokémon/i,
    });

    userEvent.click(nextPokemonBtn);
    const secondPokemon = screen.getByText(/Charmander/);
    expect(secondPokemon).toBeInTheDocument();

    userEvent.click(nextPokemonBtn);
    const thirdPokemon = screen.getByText(/Caterpie/i);
    expect(thirdPokemon).toBeInTheDocument();

    userEvent.click(nextPokemonBtn);
    const fourthPokemon = screen.getByText(/Ekans/i);
    expect(fourthPokemon).toBeInTheDocument();

    userEvent.click(nextPokemonBtn);
    const fifthPokemon = screen.getByText(/Alakazam/i);
    expect(fifthPokemon).toBeInTheDocument();

    userEvent.click(nextPokemonBtn);
    const sixthPokemon = screen.getByText(/Mew/i);
    expect(sixthPokemon).toBeInTheDocument();

    userEvent.click(nextPokemonBtn);
    const seventhPokemon = screen.getByText(/Rapidash/i);
    expect(seventhPokemon).toBeInTheDocument();

    userEvent.click(nextPokemonBtn);
    const eighthPokemon = screen.getByText(/Snorlax/i);
    expect(eighthPokemon).toBeInTheDocument();

    userEvent.click(nextPokemonBtn);
    const ninethPokemon = screen.getByText(/Dragonair/i);
    expect(ninethPokemon).toBeInTheDocument();

    userEvent.click(nextPokemonBtn);
    const firstPokemon = screen.getByText(/Pikachu/i);
    expect(firstPokemon).toBeInTheDocument();
  });

  test('Verifica se tem apenas um pokémon na tela', () => {
    renderWithRouter(<App />);
    const allPokémons = screen.getAllByTestId('pokemon-name');
    expect(allPokémons).toHaveLength(1);
  });

  test('Verifica de o botão de resetar está funcionando', () => {
    renderWithRouter(<App />);
    const allBtn = screen.getByRole('button', {
      name: /All/i,
    });

    expect(allBtn).toBeInTheDocument();
    userEvent.click(allBtn);

    const firstPokemon = screen.getByText(/Pikachu/i);
    expect(firstPokemon).toBeInTheDocument();
  });

  test('Verifica o funcionamento dos botões de filtro', () => {
    renderWithRouter(<App />);
    const seven = 7;
    const allTypeButtons = screen.getAllByTestId('pokemon-type-button');
    expect(allTypeButtons).toHaveLength(seven);

    const typeButton = screen.getByRole('button', {
      name: /Poison/i,
    });
    userEvent.click(typeButton);
    const fourthPokemon = screen.getByText(/Ekans/i);
    expect(fourthPokemon).toBeInTheDocument();

    const typeScreen = screen.getByTestId('pokemon-type');
    expect(typeButton.innerText).toStrictEqual(typeScreen.innerText);

    const allBtn = screen.getByRole('button', {
      name: /All/i,
    });

    expect(allBtn).toBeInTheDocument();
  });
});
