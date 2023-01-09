import { StyleTheme } from '@/models/styles.type';
import styled from '@emotion/styled';

const SearchInputStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  background-color: #f4f4fd;
  border-radius: 25px;
  padding: 15px 20px 15px 20px;
  margin-bottom: 50px;
  color: ${({ theme }: { theme: StyleTheme }) => theme.colors.primaryLight};
`;

export { SearchInputStyled };
