import axios, { AxiosResponse } from 'axios';

const TOKEN = 'OrzT10iOExjzJxlnwj_wzVggWl1RMKsIRRXGGqhVxbw';
const BASE_URL = 'https://api.unsplash.com';

export const fetchUnplash = async ({
  url,
  method,
  data,
  token,
  customHeaders
}: {
  url: string;
  method: any;
  data?: any;
  token?: string;
  customHeaders?: any;
}) => {
  const optionalHeaders = customHeaders ?? {};

  const headers = {
    Authorization: `Client-ID ${TOKEN}`,
    ...optionalHeaders
  };

  const response: AxiosResponse = await axios({
    method,
    url: `${BASE_URL}/${url}`,
    data,
    headers
  });

  return response;
};

export const getImageByWord = async (query: string) => {
  const response = await fetchUnplash({ url: 'search/photos?query=' + query, method: 'GET' });

  return response.data;
};
