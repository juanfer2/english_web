import Card from '../Card';
import PlayerAudio from '../PlayerAudio';
import { WordStyled } from './Word.styles';

export interface Props {
  title: string;
  subtitle?: any;
  imageUrl?: string;
  audioSourceUrl?: string[];
}

function Word({ title, subtitle, imageUrl, audioSourceUrl }: Props) {
  return (
    <Card>
      <WordStyled>
        <div className="image">{imageUrl && <img src={imageUrl} alt={'image_' + title} />}</div>
        <div className="info">
          <h1>{title}</h1>
          {subtitle && <h2 className="subtitle">{subtitle}</h2>}
          <div className="audios">
            {audioSourceUrl?.map((audio: string) => (
              <PlayerAudio key={audio} source={audio} />
            ))}
          </div>
        </div>
      </WordStyled>
    </Card>
  );
}

export default Word;
