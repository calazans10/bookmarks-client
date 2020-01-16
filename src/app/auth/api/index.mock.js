import MockAdapter from 'axios-mock-adapter';

class AxiosMock {
  constructor(axios) {
    this.mock = new MockAdapter(axios);
  }

  registerUrls() {
    this.mock.onPost('/v1/session').reply(201, {
      jwt:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    });

    this.mock.onPost('/v1/registration').reply(201);

    this.mock.onGet('/v1/me').reply(200, {
      id: '7edecc5a-77ae-4718-9473-8620190375a1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      is_admin: false,
    });
  }
}

export default AxiosMock;
