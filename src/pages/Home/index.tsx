import PeopleImage from '@/assets/images/persons.svg';
import { Banner } from '@/organisms';
import { SearchInput, Word } from '@/components';
import { useWordDictionary } from './useHome';
import { useState } from 'react';
import { Meaning } from '@/models/wordDictionary.type';

function Home() {
  const [word, setWord] = useState('');
  const { callsService, loading, error, wordInfo } = useWordDictionary();

  const onChange = (e: any) => {
    setWord(e);
  };

  const onClick = () => {
    if (word !== '') {
      callsService(word).catch((err) => {
        console.log(err);
      });
    }
  };

  console.log(
    wordInfo.meanings?.flatMap((meaing: Meaning) =>
      meaing.definitions.map((definition) => definition.definition)
    )
  );

  return (
    <div>
      <Banner title="Home" imageUrl={PeopleImage} />
      <br />
      <br />
      <SearchInput value={word} onChange={onChange} onClick={onClick} />

      {loading && <>Loading...</>}
      {error && <>error</>}

      {!loading && error === null && wordInfo.word !== '' && (
        <Word
          title={wordInfo.word || ''}
          subtitle={wordInfo.meanings
            ?.flatMap((meaing: Meaning) =>
              meaing.definitions.map((definition) => definition.definition)
            )
            .join('\n ->')}
          imageUrl={wordInfo.imageUrl}
          audioSourceUrl={wordInfo.phonetics ? wordInfo.phonetics[0].audio : ''}
        />
      )}

      {/* <pre>{JSON.stringify(wordInfo, null, 2)}</pre> */}
    </div>
  );
}

export default Home;
