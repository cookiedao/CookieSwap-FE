import {Container, Typography} from "@mui/material";
import FarmingArea from "./FarmingArea";
import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './FarmPage.css';
import closeSrc from '../../static/images/icon_close.svg';
import InputLabel from '@mui/material/InputLabel';
import TextField, {TextFieldProps} from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const FarmPage = () => {

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '425px',
        bgcolor: '#FFFFFF',
        border: '3px solid #E4F2EC',
        boxShadow: 'inset 0px -11px 0px #E4F2EC',
        borderRadius: '32px'
    };

    const modalInputStyle = {
        width: '100%',
        height: '64px',
        background: '#EBEBEB',
        border: '1px solid #CCCCCC',
        boxShadow: 'inset 0px 5px 0px #E3E3E3',
        borderRadius: '32px'
    }


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container maxWidth={"xl"}>
            <Typography sx={{marginTop: "88px", marginLeft: "40px", fontWeight: "700", fontSize: "30px"}}>
                Farms
            </Typography>
            <Typography sx={{marginTop: "6px", marginLeft: "40px", fontWeight: "400", fontSize: "18px", color: "#6D9A99"}}>
                Stake LP token to earn
            </Typography>
            <FarmingArea/>
                <div onClick={handleOpen}>Open modal</div>
                <Modal open={open}
                       onClose={handleClose}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description">
                    <Box sx={modalStyle}>
                        <div className="farm_modal_title_wrapper">
                            <div className="farm_modal_header">
                                <div className="farm_modal_title">Stake</div>
                                <div className="farm_modal_close"><img src={closeSrc}/></div>
                            </div>
                            <div className="farm_modal_subtitle">Amount to Stake</div>
                            <div className="farm_modal_input">
                                <TextField style={modalInputStyle}/>
                            </div>
                        </div>
                    </Box>
                </Modal>
        </Container>

    )
}


export default FarmPage
