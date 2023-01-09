import axios, { AxiosResponse } from 'axios';
const BASE_URL = 'https://api.dictionaryapi.dev/api/v2';
const LANG = 'en';

export const fetchDictionary = async ({
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
    Authorization: `token ${token as string | ''}`,
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

export const getWord = async (word: string) => {
  const response = await fetchDictionary({ url: 'entries/en/' + word, method: 'GET' });

  return response.data;
};
