import styled from '@emotion/styled';

const StatList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
`;

const StatItem = styled.li`
    display: flex;
    align-items: left;
    font-size: 1.5rem;
    padding: 0.5rem;
`
const Label = styled.span`

    font-weight: bold;
    color: #ffc737;`


export { StatList, StatItem, Label };