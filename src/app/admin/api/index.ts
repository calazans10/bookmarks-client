import ApiClient from 'client';

const client = new ApiClient();

export const requestGetBookmarks = async (offset: number, limit: number) => {
  const response = await client.get(`/v1/admin/bookmarks?offset=${offset}&limit=${limit}`);
  return response.data;
};

export const requestGetUsers = async (offset: number, limit: number) => {
  const response = await client.get(`/v1/admin/users?offset=${offset}&limit=${limit}`);
  return response.data;
};
