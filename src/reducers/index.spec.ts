import reducer from './index';
import { doSuccessLogout } from '../app/auth/actions';

describe('root reducer', () => {
  const expectedState = {
    admin: {
      bookmarks: {
        data: [],
        meta: {
          count: 0,
          limit: 10,
          offset: 1,
          total: 0,
        },
      },
      users: {
        meta: {
          count: 0,
          offset: 1,
          limit: 10,
          total: 0,
        },
        data: [],
      },
    },
    auth: {
      token: '',
      user: {},
    },
    router: {
      action: 'POP',
      location: {
        hash: '',
        pathname: '/',
        query: {},
        search: '',
        state: undefined,
      },
    },
    ui: {
      alert: {
        message: '',
        isVisible: false,
      },
      loading: {
        isVisible: false,
      },
      confirm: {
        isVisible: false,
      },
    },
    user: {
      bookmarks: {
        data: [],
        meta: {
          count: 0,
          limit: 10,
          offset: 1,
          total: 0,
        },
      },
      selectedBookmark: {},
    },
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle LOGOUT_SUCCESS', () => {
    const action = doSuccessLogout();
    const initialState = {
      ...expectedState,
      auth: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        user: {
          email: 'john.doe@example.com',
          is_admin: false,
          name: 'John Doe',
        },
      },
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
