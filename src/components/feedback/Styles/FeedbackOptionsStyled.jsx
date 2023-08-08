import styled from 'styled-components';

export const FeddbackCont = styled.div`
  margin-top: 20px;
`;
export const FeddbackButton = styled.button`
  padding: 2px 6px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;

  &::first-letter {
    text-transform: uppercase;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
`;
