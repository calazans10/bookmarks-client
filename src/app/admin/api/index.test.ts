import sinon from 'sinon';
import { requestGetBookmarks, requestGetUsers } from './index';
import ApiClient from '../../../client';
import { bookmarks, users } from '../../../fixtures';

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
          count: bookmarks.length,
          offset,
          limit,
          total: bookmarks.length,
        },
        data: bookmarks,
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

    const data = users.filter(user => !user.is_admin);

    const response = {
      data: {
        meta: {
          count: data.length,
          offset,
          limit,
          total: data.length,
        },
        data,
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
