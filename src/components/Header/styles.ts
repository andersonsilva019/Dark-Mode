import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  align-items:center;
  height: 60px;
  background: ${props => props.theme.colors.primary};
  padding: 0 30px;
  color: #FFF;
`;

export const Content = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;
