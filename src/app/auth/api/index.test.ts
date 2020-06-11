import sinon from 'sinon';
import ApiClient from 'client';
import { users } from 'fixtures';
import { requestLogin, requestRegistration, requestGetCurrentUser } from '.';

describe('auth requests', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should call requestLogin', async () => {
    // Arrange
    const payload = {
      auth: {
        email: 'admin@example.com',
        password: '1234',
      }
    };
    const response = {
      data: {
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhOTA3NTRiMy04NjdjLTRiNjQtODk2MS1kNjJhZGE2OTkxODciLCJpYXQiOjE1OTA5MzE1NjMsImV4cCI6MTU5MDkzNTE2M30.oEvybQBuSwwf2XLHlSaqwAQGRq9jZOLP5oJMj219ePQ',
      },
      status: 201,
      statusText: 'Created',
    };

    sandbox.stub(ApiClient.prototype, 'post').returns(Promise.resolve(response));

    // Act
    const result = await requestLogin(payload);

    // Assert
    expect(result).toEqual(response.data);
  });

  it('should call requestRegistration', async () => {
    // Arrange
    const payload = {
      name: 'Justin Thomas',
      email: 'justin.thomas@example.com',
      password: '1234',
    };
    const response = {
      data: {
        id: 'da20ff85-e58f-499c-8572-48479af0d10a',
        name: 'Justin Thomas',
        email: 'justin.thomas@example.com',
        isAdmin: false,
        createdAt: '2020-02-05T22:29:33.031Z',
        updatedAt: '2020-02-05T22:29:33.031Z',
      },
      status: 201,
      statusText: 'Created',
    };

    sandbox.stub(ApiClient.prototype, 'post').returns(Promise.resolve(response));

    // Act
    const result = await requestRegistration(payload);

    // Assert
    expect(result).toEqual(response.data);
  });

  it('should call requestGetCurrentUser', async () => {
    // Arrange
    const response = {
      data: users[0],
      status: 200,
      statusText: 'OK',
    };

    sandbox.stub(ApiClient.prototype, 'get').returns(Promise.resolve(response));

    // Act
    const result = await requestGetCurrentUser();

    // Assert
    expect(result).toEqual(response.data);
  });
});
