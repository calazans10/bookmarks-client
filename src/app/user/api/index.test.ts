import sinon from 'sinon';
import {
  requestGetMyBookmarks,
  requestCreateBookmark,
  requestUpdateBookmark,
  requestDeleteBookmark,
} from './index';
import ApiClient from '../../../client';

describe('user requests', () => {
  const sandbox = sinon.createSandbox();

  afterEach(() => {
    sandbox.restore();
  });

  it('should call requestGetMyBookmarks', async () => {
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
    const result = await requestGetMyBookmarks(offset, limit);

    // Assert
    expect(result).toEqual(response.data);
  });

  it('should call requestCreateBookmark', async () => {
    // Arrange
    const payload = {
      url: 'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
      title: 'Introducing the React RFC Process',
    };

    const response = {
      data: {},
      status: 201,
      statusText: 'Created',
    };

    sandbox.stub(ApiClient.prototype, 'post').returns(Promise.resolve(response));

    // Act
    const result = await requestCreateBookmark(payload);

    // Assert
    expect(result).toEqual(response.data);
  });

  it('should call requestUpdateBookmark', async () => {
    // Arrange
    const bookmarkId = '9b2bfb9a-3776-48ca-835a-2c17ccef44c6';

    const payload = {
      url: 'https://github.com/reactjs/rfcs',
      title: 'RFCs for changes to React',
    };

    const response = {
      data: '',
      status: 204,
      statusText: 'No Content',
    };

    sandbox.stub(ApiClient.prototype, 'put').returns(Promise.resolve(response));

    // Act
    const result = await requestUpdateBookmark(bookmarkId, payload);

    // Assert
    expect(result).toEqual(response.data);
  });

  it('should call requestDeleteBookmark', async () => {
    // Arrange
    const bookmarkId = '9b2bfb9a-3776-48ca-835a-2c17ccef44c6';

    const response = {
      data: '',
      status: 204,
      statusText: 'No Content',
    };

    sandbox.stub(ApiClient.prototype, 'delete').returns(Promise.resolve(response));

    // Act
    const result = await requestDeleteBookmark(bookmarkId);

    // Assert
    expect(result).toEqual(response.data);
  });
});
