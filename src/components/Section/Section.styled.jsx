import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 32px;
    gap: 2em;
   width: fit-content;
    height: 40vh;
    margin: auto;
    color: #010101;`
    
const Title = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.35;
  text-align: center;
  margin-bottom: 0.6em;
`;

const Text = styled.span`
  position: relative;
  ::after {
    content: '';
    position: absolute;
    left: -1em;
    right: -1em;
    bottom: -0.3em;
    height: 1px;
    background-color: currentColor;
  }
`;
 
export {Container, Title, Text}