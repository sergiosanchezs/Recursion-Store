import styled from 'styled-components';

interface OptionsProps {
  selected: boolean;
}

export const Container = styled.div`
  width: 80%;

  ul {
    padding: 8px;
    list-style: none;
  }
`;

export const Options = styled.ul<OptionsProps>`
  display: ${props => (props.selected ? 'block' : 'none')};

  padding: 8px;
  list-style: none;

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;
