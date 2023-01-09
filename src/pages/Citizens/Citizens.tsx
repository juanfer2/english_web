import { CitizenItem } from '@/components';
import { ListStyled } from '@/styles/layout';
import { CitizensStyled } from './Citizens.styles';

function Citizens() {
  return (
    <CitizensStyled>
      <h1>Citizens</h1>

      <ListStyled>
        {/* <FileItem title="Xd File" date="2020-03-03" size="3.5mb"/> */}
        <CitizenItem idDocument="12355" name="Julio melgar" typeDocument="Cédula" />
        <CitizenItem idDocument="12355" name="Julio melgar" typeDocument="Cédula" />
        <CitizenItem idDocument="12355" name="Julio melgar" typeDocument="Cédula" />
      </ListStyled>
    </CitizensStyled>
  );
}

export default Citizens;
