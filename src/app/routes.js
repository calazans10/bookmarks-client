import { lazy } from 'react';

const routes = [
  {
    id: 1,
    path: '/admin/bookmarks',
    exact: true,
    private: true,
    component: lazy(() => import('./admin/components/pages/BookmarkList')),
  },
  {
    id: 2,
    path: '/admin/users',
    exact: true,
    private: true,
    component: lazy(() => import('./admin/components/pages/UserList')),
  },
  {
    id: 3,
    path: '/sign_in',
    exact: true,
    private: false,
    component: lazy(() => import('./auth/components/pages/SignIn')),
  },
  {
    id: 4,
    path: '/sign_up',
    exact: true,
    private: false,
    component: lazy(() => import('./auth/components/pages/SignUp')),
  },
  {
    id: 5,
    path: '/',
    exact: true,
    private: false,
    component: lazy(() => import('./core/components/pages/Home')),
  },
  {
    id: 6,
    path: '/bookmarks',
    exact: true,
    private: true,
    component: lazy(() => import('./user/components/pages/BookmarkList')),
  },
  {
    id: 7,
    path: '/bookmarks/new',
    exact: true,
    private: true,
    component: lazy(() => import('./user/components/pages/BookmarkCreate')),
  },
  {
    id: 8,
    path: '/bookmarks/:id/edit',
    exact: true,
    private: true,
    component: lazy(() => import('./user/components/pages/BookmarkUpdate')),
  },
  {
    id: 9,
    path: '*',
    exact: false,
    private: false,
    component: lazy(() => import('./core/components/pages/NotFound')),
  },
];

export default routes;
