import styled from 'styled-components';

export const StoryDiv = styled.div`
  background: #404e4d;

  border-radius: 3px;
  width: 90%;
  margin: 10px;
  padding: 10px;
  a {
    text-decoration: none;
  }
`;

export const TitleP = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #5ad2f4;
  :hover {
    color: #fff;
  }
`;

export const StoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #646881;
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
  a {
    text-decoration: none;
  }
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin: 10px;
  padding: 10px;
`;

export const LoadingSpinner = styled.div`
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 2s linear infinite;
    margin: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        }
`;