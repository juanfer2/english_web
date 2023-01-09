import PeopleImage from '@/assets/images/persons.svg';
import { Banner } from '@/organisms';
import { SearchInput, Word } from '@/components';
import { useImageByWord, useWordDictionary } from './useHome';
import { useState } from 'react';

function Home() {
  const [word, setWord] = useState('');
  const { callsService, loading, error, wordInfo } = useWordDictionary();
  const { callImageByWord, image, error: errorImage, loading: LoadingImage } = useImageByWord();

  const onChange = (e: any) => {
    setWord(e);
  };

  const onClick = () => {
    callsService(word).catch((err) => console.log(err));
    callImageByWord(word).catch((err) => console.log(err));
  };

  if (loading) return <>Loading...</>;
  if (error) return <>error</>;

  return (
    <div>
      <SearchInput value={word} onChange={onChange} onClick={onClick} />

      {wordInfo.word && wordInfo.word !== '' && (
        <Word
          title={wordInfo.word || ''}
          subtitle={
            wordInfo.word &&
            wordInfo.meanings &&
            wordInfo.meanings[0].definitions &&
            wordInfo.meanings[0].definitions[0].definition
              ? wordInfo.meanings[0].definitions[0].definition
              : ''
          }
          imageUrl={image?.urls?.raw ? image.urls.raw : ''}
          audioSourceUrl={
            wordInfo.word && wordInfo.phonetics && wordInfo.phonetics[0].audio
              ? wordInfo.phonetics[0].audio
              : ''
          }
        />
      )}

      {/* <pre>{JSON.stringify(wordInfo, null, 2)}</pre> */}

      <Banner title="Home" imageUrl={PeopleImage} />
    </div>
  );
}

export default Home;
