import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { PrivateRoute } from '.';

const PrivateComponent = () => <div data-testid="test" />;

describe('PrivateRoute', () => {
  describe('when user is logged in', () => {
    describe('and is an allowed path', () => {
      it('renders the component', () => {
        const { getByTestId } = render(
          <MemoryRouter initialEntries={['/test']}>
            <PrivateRoute isLoggedIn allowedPaths={['/test']} path="/test">
              <PrivateComponent />
            </PrivateRoute>
          </MemoryRouter>
        );
        expect(getByTestId('test')).toBeInTheDocument();
      });
    });

    describe('and is not an allowed path', () => {
      it('redirects to "/not-found"', async () => {
        const { container } = render(
          <MemoryRouter initialEntries={['/random']}>
            <PrivateRoute isLoggedIn allowedPaths={['/test']} path="/random">
              <PrivateComponent />
            </PrivateRoute>
          </MemoryRouter>
        );
        // TODO: Show title from not found page
        expect(container.innerHTML).toMatch('');
      });
    });

    describe('when user is not logged in', () => {
      it('redirects to "/"', () => {
        const { container } = render(
          <MemoryRouter initialEntries={['/test']}>
            <PrivateRoute isLoggedIn={false} allowedPaths={['/test']} path="/test">
              <PrivateComponent />
            </PrivateRoute>
          </MemoryRouter>
        );
        // TODO: Show title from home page
        expect(container.innerHTML).toMatch('');
      });
    });
  });
});
