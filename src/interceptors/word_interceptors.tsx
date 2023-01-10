import {
  WordDictionary,
  WordDictionaryRequest,
  Meaning,
  Phonetic
} from '@/models/wordDictionary.type';

const meaningsInterceptor = (wordRequest: WordDictionaryRequest[]) => {
  const meanings: Meaning[] = [];

  wordRequest.map((word: WordDictionaryRequest) =>
    word.meanings?.map((meaning: Meaning) => meanings.push(meaning))
  );

  return meanings;
};

const phoneticsInterceptor = (wordRequest: WordDictionaryRequest[]) => {
  const phonetics: Phonetic[] = [];

  wordRequest.map((word: WordDictionaryRequest) =>
    word.phonetics?.map((phonetic: Phonetic) => phonetics.push(phonetic))
  );

  return phonetics;
};

export const WordInterceptor = (wordRequest: WordDictionaryRequest[]): WordDictionary => {
  return {
    word: wordRequest[0].word,
    imageUrl: '',
    meanings: meaningsInterceptor(wordRequest),
    phonetics: phoneticsInterceptor(wordRequest)
  };
};
