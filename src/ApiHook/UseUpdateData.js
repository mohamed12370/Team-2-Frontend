import baseUrl from '../base_url/base_url';

export const useUpdateDataWithImage = async (url, data) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const res = await baseUrl.put(url, data, config);
  return res;
};

export const useUpdateData = async (url, data) => {
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
  const res = await baseUrl.put(url, data, config);
  return res;
};
