import reducer from '.';

describe('app reducer', () => {
  it('should return the initial state', () => {
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
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
});
