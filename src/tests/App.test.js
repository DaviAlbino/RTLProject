import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utilities/renderWithRouter';

describe('Testando o App', () => {
  test('Verifica se App contém os links de navegação', () => {
    renderWithRouter(<App />);
    const homeText = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });
    expect(homeText).toBeInTheDocument();

    const homeLink = screen.getByRole('link', {
      name: /home/i,
    });
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', {
      name: /about/i,
    });

    expect(aboutLink).toBeInTheDocument();

    const favoriteLink = screen.getByRole('link', {
      name: /Favorite Pokémons/i,
    });
    expect(favoriteLink).toBeInTheDocument();
  });

  test('Verificar se ao clicar em Home, a página é redirecionada corretamente', () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole('link', {
      name: /home/i,
    });

    userEvent.click(homeLink);

    const homeText = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });
    expect(homeText).toBeInTheDocument();
  });

  test('Verificar se ao clicar em About, a página é redirecionada corretamente', () => {
    renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', {
      name: /about/i,
    });

    userEvent.click(aboutLink);

    const aboutText = screen.getByRole('heading', {
      name: /About Pokédex/i,
      level: 2,
    });
    expect(aboutText).toBeInTheDocument();
  });

  test('Se clicar em Favorite Pokémons, a página é redirecionada corretamente', () => {
    renderWithRouter(<App />);

    const favoriteLink = screen.getByRole('link', {
      name: /Favorite Pokémons/i,
    });

    userEvent.click(favoriteLink);

    const aboutText = screen.getByRole('heading', {
      name: /Favorite Pokémons/i,
      level: 2,
    });
    expect(aboutText).toBeInTheDocument();
  });

  test('Se a URL for desconhecida, a página é redirecionada para Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/rota-que-nao-existe');

    const notFoundText = screen.getByRole('heading', {
      name: /Page requested not found /i,
      level: 2,
    });
    expect(notFoundText).toBeInTheDocument();
  });
});
