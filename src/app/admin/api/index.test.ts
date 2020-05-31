import sinon from 'sinon';
import { requestGetBookmarks, requestGetUsers } from './index';
import ApiClient from '../../../client';

describe('admin requests', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should call requestGetBookmarks', async () => {
    // Arrange
    const offset = 1;
    const limit = 10;

    const response = {
      data: {
        meta: {
          count: 1,
          limit: 10,
          offset: 1,
          total: 1,
        },
        data: [
          {
            id: '9b2bfb9a-3776-48ca-835a-2c17ccef44c6',
            url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
            title: 'Introducing the React RFC Process',
            user_id: 'da20ff85-e58f-499c-8572-48479af0d10a',
            created_at: '2020-01-21T01:31:19.489Z',
            updated_at: '2020-01-21T01:31:19.489Z',
          },
        ],
      },
      status: 200,
      statusText: 'OK',
    };

    sandbox.stub(ApiClient.prototype, 'get').returns(Promise.resolve(response));

    // Act
    const result = await requestGetBookmarks(offset, limit);

    // Assert
    expect(result).toEqual(response.data);
  });

  it('should call requestGetUsers', async () => {
    // Arrange
    const offset = 1;
    const limit = 10;

    const response = {
      data: {
        meta: {
          count: 1,
          limit: 10,
          offset: 1,
          total: 1,
        },
        data: [
          {
            id: "da20ff85-e58f-499c-8572-48479af0d10a",
            name: "Justin Thomas",
            email: "justin.thomas@example.com",
            is_admin: false,
            created_at: "2020-02-05T22:29:33.031Z",
            updated_at: "2020-02-05T22:29:33.031Z",
            bookmarks_count: 1,
          },
        ],
      },
      status: 200,
      statusText: 'OK',
    };

    sandbox.stub(ApiClient.prototype, 'get').returns(Promise.resolve(response));

    // Act
    const result = await requestGetUsers(offset, limit);

    // Assert
    expect(result).toEqual(response.data);
  });
});
