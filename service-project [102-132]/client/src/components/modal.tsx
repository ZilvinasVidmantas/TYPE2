import React from 'react';
import {
  Paper,
  Modal as MuiModal,
  ModalProps as MuiModalProps,
  styled,
} from '@mui/material';

const ModalCard = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: theme.spacing(2),
}));

export type ModalProps = MuiModalProps;

const Modal: React.FC<ModalProps> = ({ children, ...props }) => (
  <MuiModal {...props}>
    <ModalCard elevation={6}>
      {children}
    </ModalCard>
  </MuiModal>
);

export default Modal;
