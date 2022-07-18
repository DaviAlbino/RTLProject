import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

function renderWithRouter(component) {
  const customHistory = createMemoryHistory();

  const renderToSpread = render(
    <Router history={ customHistory }>
      {component}
    </Router>,
  );

  return {
    ...renderToSpread,
    history: customHistory,
  };
}

export default renderWithRouter;
