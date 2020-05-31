import sinon from 'sinon';
import { requestLogin, requestRegistration, requestGetCurrentUser } from './index';
import ApiClient from '../../../client';

describe('auth requests', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should call requestLogin', async () => {
    // Arrange
    const payload = {
      auth: {
        email: 'john.doe@example.com',
        password: '1234',
      }
    };
    const response = {
      data: {
        jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhOTA3NTRiMy04NjdjLTRiNjQtODk2MS1kNjJhZGE2OTkxODciLCJpYXQiOjE1OTA5MjA1MzgsImV4cCI6MTU5MDkyNDEzOH0.4i_L4WntK16486UEIriaCCpYkTGs8vcHdQeeWIhnV1k',
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
      name: "Justin Thomas",
      email: "justin.thomas@example.com",
      password: '1234',
    };
    const response = {
      data: {
        id: "da20ff85-e58f-499c-8572-48479af0d10a",
        name: "Justin Thomas",
        email: "justin.thomas@example.com",
        is_admin: false,
        created_at: "2020-02-05T22:29:33.031Z",
        updated_at: "2020-02-05T22:29:33.031Z",
        bookmarks_count: 0,
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
      data: {
        id: "da20ff85-e58f-499c-8572-48479af0d10a",
        name: "Justin Thomas",
        email: "justin.thomas@example.com",
        is_admin: false,
        created_at: "2020-02-05T22:29:33.031Z",
        updated_at: "2020-02-05T22:29:33.031Z",
        bookmarks_count: 0,
      },
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
