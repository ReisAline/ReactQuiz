import styled from 'styled-components';

const Loading = styled.div`
  border: 16px solid #f3f3f3; 
  border-radius: 50%;
  border-top: 16px solid #6d1b7b;
  border-right: 16px solid #9c27b0;
  border-bottom: 16px solid #af52bf;
  border-left: 16px solid #9500ae;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default Loading;