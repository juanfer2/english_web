import { Button } from '@chakra-ui/react';
import { IoVolumeHighOutline } from 'react-icons/io5';
import { PlayerAudioStyled } from './PlayerAudio.styles';
// import ReactAudioPlayer from 'react-audio-player';

export interface Props {
  source: string;
  options?: any;
}

function PlayerAudio({ source }: Props) {
  const audioElement = new Audio(source);

  const playAution = () => {
    audioElement.play().catch((err) => {
      console.log(err);
    });
  };

  return (
    <PlayerAudioStyled>
      {
        <Button
          onClick={() => {
            playAution();
          }}>
          <IoVolumeHighOutline size={30}/>
        </Button>
      }
      {/*<audio controls>
        <source src={source} type="audio/mpeg" />
      </audio> */}
    </PlayerAudioStyled>
  );
}

export default PlayerAudio;
