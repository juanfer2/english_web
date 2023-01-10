import { SearchInputStyled } from './SearchInput.styles';
import { Input, Button } from '@chakra-ui/react';
import { IoSearchOutline } from 'react-icons/io5';

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

export interface Props {
  value?: string;
  onChange?: any;
  onClick?: () => void;
}

function SearchInput({ value, onChange, onClick }: Props) {
  return (
    <SearchInputStyled>
      <IoSearchOutline className="icon" size={22} />
      <Input
        className="input"
        variant="unstyled"
        placeholder="Search a topic"
        value={value ? value : ''}
        onChange={({ target: { value } }: InputChangeEvent) => onChange(value)}
      />

      <Button onClick={onClick ? onClick : () => {}}>Search...</Button>
    </SearchInputStyled>
  );
}

export default SearchInput;
