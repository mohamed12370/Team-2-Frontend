import baseUrl from '../base_url/base_url';

export const useDeleteData = async (url) => {
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const { data } = await baseUrl.delete(url, config);
  return data;
};
