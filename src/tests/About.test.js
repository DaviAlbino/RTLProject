import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utilities/renderWithRouter';
import { About } from '../pages';

describe('Testando o App', () => {
  test('Verifica se About contém informações sobre pokédex', () => {
    renderWithRouter(<About />);
    const aboutTextDescription = screen
      .getByText(/This application simulates a Pokédex/i);

    expect(aboutTextDescription).toBeInTheDocument();
  });

  test('Verifica se About contém a tag h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading', {
      name: /About Pokédex/i,
      level: 2,
    });

    expect(aboutTitle).toBeInTheDocument();
  });

  test('Verifica se About contém a imagem correta', () => {
    renderWithRouter(<About />);
    const aboutImage = screen.getByRole('img');

    expect(aboutImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
