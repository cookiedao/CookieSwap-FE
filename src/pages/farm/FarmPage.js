import {Container, Typography} from "@mui/material";
import FarmingArea from "./FarmingArea";

const FarmPage = () => {
    return (
        <Container maxWidth={"xl"}>
            <Typography sx={{marginTop: "88px", marginLeft: "40px", fontWeight: "700", fontSize: "30px"}}>
                Farms
            </Typography>
            <Typography sx={{marginTop: "6px", marginLeft: "40px", fontWeight: "400", fontSize: "18px", color: "#6D9A99"}}>
                Stake LP token to earn
            </Typography>
            <FarmingArea/>
        </Container>
    )
}


export default FarmPage