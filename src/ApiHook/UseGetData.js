import baseUrl from '../base_url/base_url';

export const useGetData = async (url) => {
  const config = {
    headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
  };

  const res = await baseUrl.get(url, config);
  return res;
};
