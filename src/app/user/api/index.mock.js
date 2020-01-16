import MockAdapter from 'axios-mock-adapter';

class AxiosMock {
  constructor(axios) {
    this.mock = new MockAdapter(axios);
  }

  registerUrls() {
    this.mock.onGet('/v1/bookmarks?offset=0&limit=10').reply(200, {
      meta: {
        count: 4,
        offset: 1,
        limit: 10,
        total: 4,
      },
      data: [
        {
          id: '6e7a223e-1ff3-405c-803f-ecc0963f32cd',
          url: 'https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html',
          title: 'Behind the Scenes: Improving the Repository Infrastructure',
          user: {
            id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
            name: 'John Doe',
            email: 'john.doe@example.com',
            is_admin: false,
          },
        },
        {
          id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
          url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
          title: 'Introducing the React RFC Process',
          user: {
            id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
            name: 'John Doe',
            email: 'john.doe@example.com',
            is_admin: false,
          },
        },
        {
          id: 'b9b3b470-d41c-4e7c-bf1b-8e584734582a',
          url: 'https://reactjs.org/blog/2017/09/08/dom-attributes-in-react-16.html',
          title: 'DOM Attributes in React 16',
          user: {
            id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
            name: 'John Doe',
            email: 'john.doe@example.com',
            is_admin: false,
          },
        },
        {
          id: 'ddd8ffd1-fe0b-488e-af3c-8c773e9c9500',
          url: 'https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html',
          title: 'Error Handling in React 16',
          user: {
            id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
            name: 'John Doe',
            email: 'john.doe@example.com',
            is_admin: false,
          },
        },
      ],
    });

    this.mock.onPost('/v1/bookmarks').reply(201);

    this.mock.onPut(/\/v1\/bookmarks\/\d+/).reply(204);

    this.mock.onDelete(/\/v1\/bookmarks\/\d+/).reply(204);
  }
}

export default AxiosMock;
