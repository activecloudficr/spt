import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Diagnostico from '../../../../assets/imgs/Diagnostico.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal({open, setOpen,}) {

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography textAlign="center" id="keep-mounted-modal-title" variant="h6" component="h2">
            Diagnóstico
          </Typography>
          <img style={{width: "350px"}} src={Diagnostico} alt="Diagnostico" />
        </Box>
      </Modal>
    </div>
  );
}