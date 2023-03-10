import { WordDictionary } from '@/models/wordDictionary.type';
import { getWord } from '@/services/dictionary.service';
import { useState } from 'react';

interface UseWordDictionary {
  wordInfo: WordDictionary;
  loading: boolean;
  error: any;
}

const emptyWordInfo = { word: '', imageUrl: '' };

export const useWordDictionary = () => {
  const [data, setData] = useState<UseWordDictionary>({
    wordInfo: emptyWordInfo,
    error: null,
    loading: false
  });

  const callsService = async (word: string) => {
    try {
      setData({ wordInfo: emptyWordInfo, error: null, loading: true });
      const wordResponse = await getWord(word);

      setData({ wordInfo: wordResponse, error: null, loading: false });
    } catch (error) {
      setData({ wordInfo: emptyWordInfo, error, loading: false });
    }
  };

  return { ...data, callsService };
};
/*
interface UseImageByWord {
  image: any;
  loading: boolean;
  error: any;
}


export const useImageByWord = () => {
  const [data, setData] = useState<UseImageByWord>({
    image: {},
    error: null,
    loading: false
  });

  const callImageByWord = async (word: string) => {
    try {
      setData({ image: { word: '' }, error: null, loading: true });
      const image = await getImageByWord(word);

      setData({ image: image.results[0], error: null, loading: false });
    } catch (error) {
      setData({ image: {}, error, loading: false });
    }
  };

  // useEffect(() => {
  //   getImageBy(word).catch(err=>console.log(err))
  // }, []);

  return { ...data, callImageByWord };
};
*/
