import { WordInterceptor } from '@/interceptors/word_interceptors';
import { WordDictionary } from '@/models/wordDictionary.type';
import axios, { AxiosResponse } from 'axios';
import { getImageByWord } from './unplash.service';
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

export const getWord = async (word: string): Promise<WordDictionary> => {
  const imageResponse = await getImageByWord(word);
  console.log(imageResponse);
  const response = await fetchDictionary({ url: 'entries/' + LANG + '/' + word, method: 'GET' });
  const wordInfo = WordInterceptor(response.data);

  return { ...wordInfo, imageUrl: imageResponse.results[0].urls.regular };
};
