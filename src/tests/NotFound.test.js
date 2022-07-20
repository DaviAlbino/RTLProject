import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utilities/renderWithRouter';
import { NotFound } from '../pages';

describe('Testando a Página Não Encontrada', () => {
  test('Testando o título da página', () => {
    renderWithRouter(<NotFound />);

    const notFoundText = screen.getByRole('heading', {
      name: /Page requested not found /i,
      level: 2,
    });

    expect(notFoundText).toBeInTheDocument();
  });

  test('Verifica se About contém a imagem correta', () => {
    renderWithRouter(<NotFound />);
    const notFoundPageImage = screen.getAllByRole('img');

    expect(notFoundPageImage[1]).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
