import MockAdapter from 'axios-mock-adapter';

class AxiosMock {
  constructor(axios) {
    this.mock = new MockAdapter(axios);
  }

  registerUrls() {
    this.mock.onGet('/v1/bookmarks?offset=1&limit=10').reply(200, {
      meta: {
        count: 4,
        offset: 1,
        limit: 10,
        total: 4,
      },
      data: [
        {
          id: '4c19a53e-f6fc-46de-be4d-a06e3f366678',
          title: 'Django Rest Framework',
          url: 'http://www.django-rest-framework.org/',
          user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
          created_at: '2017-03-10T15:04:05.862Z',
          updated_at: '2017-03-12T17:26:06.892Z',
        },
        {
          id: 'a9e20274-dae0-4bd2-bb5e-b0de4795fdee',
          title: 'Django Rest Framework - an Introduction',
          url: 'https://realpython.com/blog/python/django-rest-framework-quick-start/',
          user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
          created_at: '2017-03-05T15:04:05.862Z',
          updated_at: '2017-03-20T17:26:06.892Z',
        },
        {
          id: '6e7a223e-1ff3-405c-803f-ecc0963f32cd',
          title: 'Behind the Scenes: Improving the Repository Infrastructure',
          url: 'https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html',
          user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
          created_at: '2017-02-10T15:04:05.862Z',
          updated_at: '2017-02-12T17:26:06.892Z',
        },
        {
          id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
          title: 'Introducing the React RFC Process',
          url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
          user_id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
          created_at: '2017-01-19T15:04:05.862Z',
          updated_at: '2017-01-20T17:26:06.892Z',
        },
      ],
    });

    this.mock.onPost('/v1/bookmarks').reply(201);

    this.mock.onPut(/\/v1\/bookmarks\/\d+/).reply(204);

    this.mock.onDelete(/\/v1\/bookmarks\/\d+/).reply(204);
  }
}

export default AxiosMock;
