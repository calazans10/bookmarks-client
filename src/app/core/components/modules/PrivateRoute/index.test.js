import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { PrivateRoute } from './index';

const PrivateComponent = () => <div>Test</div>;

describe('PrivateRoute', () => {
  describe('when user is logged in', () => {
    describe('and is an allowed path', () => {
      it('renders the component', () => {
        const props = {
          isLoggedIn: true,
          allowedPaths: ['/privateComponent'],
          path: '/privateComponent',
        };

        const privateRoute = mount(
          <MemoryRouter initialEntries={['/privateComponent']}>
            <PrivateRoute {...props}>
              <PrivateComponent />
            </PrivateRoute>
          </MemoryRouter>
        );

        expect(privateRoute.find('PrivateComponent').length).toEqual(1);
      });
    });

    describe('and is not an allowed path', () => {
      it('redirects to "not-found"', () => {
        const props = {
          isLoggedIn: true,
          allowedPaths: ['/othePrivateComponent'],
          path: '/privateComponent',
        };

        const privateRoute = mount(
          <MemoryRouter initialEntries={['/privateComponent']}>
            <PrivateRoute {...props}>
              <PrivateComponent />
            </PrivateRoute>
          </MemoryRouter>
        );

        expect(privateRoute.find('PrivateComponent').length).toEqual(0);
        expect(privateRoute.find('Router').prop('history').location.pathname).toEqual('/not-found');
      });
    });
  });

  describe('when user is not logged in', () => {
    it('redirects to "/"', () => {
      const props = {
        isLoggedIn: false,
        allowedPaths: [],
        path: '/privateComponent',
        children: PrivateComponent,
      };

      const privateRoute = mount(
        <MemoryRouter initialEntries={['/privateComponent']}>
          <PrivateRoute {...props}>
            <PrivateComponent />
          </PrivateRoute>
        </MemoryRouter>
      );

      expect(privateRoute.find('PrivateComponent').length).toEqual(0);
      expect(privateRoute.find('Router').prop('history').location.pathname).toEqual('/');
    });
  });
});
