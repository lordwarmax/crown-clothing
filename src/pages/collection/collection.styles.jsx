import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleContainer = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
`;