import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

const adminToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODEwMjE4MjUsInN1YiI6IjdlZGVjYzVhLTc3YWUtNDcxOC05NDczLTg2MjAxOTAzNzVhMSJ9.RtgU90x-v3vWwpqkhEo18gWiWRJxuQ1k7dsm_WAl7IM';
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODEwMjA4OTgsInN1YiI6IjdlZGVjYzVhLTc3YWUtNDcxOC05NDczLTg2MjAxOTAzNzVhMSJ9.PYt94X2TTxMmzRRa_8R0wWCETlyuPf2CEDKJutu-P3M';

class AxiosMock {
  mock: MockAdapter;

  constructor(axios: AxiosInstance) {
    this.mock = new MockAdapter(axios);
  }

  registerUrls() {
    this.mock.onPost('/v1/session').reply(config => {
      const data = JSON.parse(config.data);
      return [201, { jwt: data.auth.email === 'admin@example.com' ? adminToken : userToken }];
    });

    this.mock.onPost('/v1/registration').reply(201, {
      id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
      name: 'John Doe',
      email: 'john.doe@example.com',
      is_admin: false,
      created_at: '2020-02-05T20:29:06.031Z',
      updated_at: '2020-02-05T20:29:06.031Z',
      bookmarks_count: 4,
    });

    this.mock.onGet('/v1/me').reply(config => {
      return [
        200,
        {
          id: 'e4f262c4-8dd3-4db4-85c8-83e03b8ecad4',
          name: 'John Doe',
          email: 'john.doe@example.com',
          is_admin: config.headers.Authorization.includes(adminToken),
          created_at: '2020-02-05T20:29:06.031Z',
          updated_at: '2020-02-05T20:29:06.031Z',
          bookmarks_count: config.headers.Authorization.includes(adminToken) ? 0 : 4,
        },
      ];
    });
  }
}

export default AxiosMock;
