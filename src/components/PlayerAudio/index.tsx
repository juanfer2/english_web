import { PlayerAudioStyled } from './PlayerAudio.styles';
// import ReactAudioPlayer from 'react-audio-player';


export interface Props {
  source: string;
  options?: any;
}

function PlayerAudio({ source }: Props) {
  return (
    <PlayerAudioStyled>
    </PlayerAudioStyled>
  );
}

export default PlayerAudio;
