import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { PrivateRoute } from './index';

const PrivateComponent = () => <div />;

describe('PrivateRoute', () => {
  describe('when user is logged in', () => {
    it('renders the component', () => {
      const props = {
        isLoggedIn: true,
        allowedPaths: ['/privateComponent'],
        path: '/privateComponent',
        component: PrivateComponent,
      };

      const privateRoute = mount(
        <MemoryRouter initialEntries={['/privateComponent']}>
          <PrivateRoute {...props} />
        </MemoryRouter>
      );

      expect(privateRoute.find('PrivateComponent').length).toEqual(1);
    });
  });

  describe('when user is not logged in', () => {
    it('renders a redirect', () => {
      const props = {
        isLoggedIn: false,
        allowedPaths: [],
        path: '/privateComponent',
        component: PrivateComponent,
      };

      const privateRoute = mount(
        <MemoryRouter initialEntries={['/privateComponent']}>
          <PrivateRoute {...props} />
        </MemoryRouter>
      );

      expect(privateRoute.find('PrivateComponent').length).toEqual(0);
      expect(privateRoute.find('Router').prop('history').location.pathname).toEqual('/');
    });
  });
});
