import styled from '@emotion/styled';

const Button = styled.button`
  display: inline-block;
  cursor: pointer;
  padding: 6px 12px;
  min-width: 100px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  text-align: center;
  border: none;
  background: #f4f4f4;
  box-shadow:  2px 2px 4px rgba(0, 0, 0, 0.15),
    -2px -2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  color: #000;

  &:active{
    box-shadow:  inset 2px 2px 4px rgba(0, 0, 0, 0.15),
    inset -2px -2px 4px rgba(0, 0, 0, 0.15);

  }
`;

const ButtonsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding-left: 0;
`;

export { Button, ButtonsList };