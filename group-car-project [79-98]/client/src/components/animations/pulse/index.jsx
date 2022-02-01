import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% { transform: scale(1); }
  70% { transform: scale(1.25); color: rgba(255, 255, 255, 1)}
  100% { transform: scale(1);}
`;

export default pulse;
