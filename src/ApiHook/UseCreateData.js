import baseUrl from '../base_url/base_url';

export const useCreateDataWithImage = async (url, data) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  const res = await baseUrl.post(url, data, config);
  return res;
};

export const useCreateData = async (url, data) => {
  const config = {
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };

  const res = await baseUrl.post(url, data, config);
  return res;
};
