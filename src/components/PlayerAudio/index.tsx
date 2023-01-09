import { PlayerAudioStyled } from './PlayerAudio.styles';
import ReactAudioPlayer from 'react-audio-player';

export interface Props {
  source: any;
  options?: any;
}

function PlayerAudio({ source }: Props) {
  return (
    <PlayerAudioStyled>
      <ReactAudioPlayer src={source} autoPlay controls />
    </PlayerAudioStyled>
  );
}

export default PlayerAudio;
