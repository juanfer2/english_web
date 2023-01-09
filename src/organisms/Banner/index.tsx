import Card from '../../components/Card';
import { BannerStyled } from './Banner.styles';

export interface Props {
  title: string;
  imageUrl: string;
}

function Banner({ title, imageUrl }: Props) {
  return (
    <Card color="primary">
      <BannerStyled>
        <img src={imageUrl} alt={'banner' + title} />
        <div className="info">
          <h2>{title}</h2>
        </div>
      </BannerStyled>
    </Card>
  );
}

export default Banner;
