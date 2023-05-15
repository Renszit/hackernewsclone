import styled from 'styled-components';

export const BasicButton = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
`;

//modern styled more button with hover effect

export const MoreButton = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 100px;
  height: 30px;
  :hover {
    background: #ccc;
  }
`;
