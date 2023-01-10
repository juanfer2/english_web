import { Sisben } from '@/models/sisben.type';
import { Button } from '@chakra-ui/react';
import { CitizenItemStyled } from './CitizenItem.styles';

export interface Props {
  name: string;
  typeDocument: string;
  idDocument: string;
  urlImage?: string;
  sisbenLevel?: Sisben;
}

function CitizenItem({ name, typeDocument, idDocument, urlImage, sisbenLevel }: Props) {
  const image = urlImage ? urlImage : 'https://avatars.dicebear.com/api/micah/john.svg';

  return (
    <CitizenItemStyled>
      <div className="name">
        <img src={image} alt="name" />
        {name}
      </div>

      <div className="document">
        <h3>{idDocument}</h3>
        <span>{typeDocument}</span>
      </div>

      <div className="id-document">
        <Button>Click!</Button>
      </div>
    </CitizenItemStyled>
  );
}

CitizenItem.defaultProps = {
  urlImage: ''
};

export default CitizenItem;
