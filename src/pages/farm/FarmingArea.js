import {Box, Container, Typography} from "@mui/material";

const FarmingAreaSx = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "32px",
    gap: "10px",
    padding: "0px 24px"
}

const FarmingArea = (props) => {
    return (
        <Box sx={FarmingAreaSx}>
            <FarmingRow/>
            <FarmingRow/>
            <FarmingRow/>
        </Box>
    )
}

const FarmingRowBoxSx = {
    display: "block",
    width: "100%",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    border: "2px solid #E4F2EC",
    borderRadius: "24px",
    padding: "24px 32px"
}

const FarmingRow = () => {
    return (
        <Box sx={FarmingRowBoxSx}>
            <Box sx={{display: "flex", alignItems: "center", flexDirection: "row"}}>
                <Box>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <img style={{width: "32px", height: "32px"}} src={"/token/cookie_token.svg"}/>
                        <img style={{width: "32px", height: "32px", marginLeft: "-10px"}} src={"/token/stx_token.svg"}/>
                    </Box>
                </Box>
                <Typography sx={{marginLeft: "12px", color: "#2E2E2E", fontSize: "16px", fontWeight: "700"}}>
                    COOKIE-STX
                </Typography>
                <Box sx={{display: "flex", flexDirection: "column", marginLeft: "20%"}}>
                    <Typography sx={{color: "#ABABAB", fontWeight: "400", fontSize: "12px"}}>Liquidity</Typography>
                    <Typography
                        sx={{color: "#2E2E2E", fontWeight: "400", fontSize: "16px"}}>$192,493,817,817,817</Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", marginLeft: "15%"}}>
                    <Typography sx={{color: "#ABABAB", fontWeight: "400", fontSize: "12px"}}>Staked</Typography>
                    <Typography sx={{color: "#2E2E2E", fontWeight: "400", fontSize: "16px"}}>$0</Typography>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", marginLeft: "15%"}}>
                    <Typography sx={{color: "#ABABAB", fontWeight: "400", fontSize: "12px"}}>APR</Typography>
                    <Typography sx={{color: "#2E2E2E", fontWeight: "400", fontSize: "16px"}}>43.89%</Typography>
                </Box>
                <Box sx={{display: "flex", justifyContent: "center", marginLeft: "auto"}}>
                    <img style={{width: "24px", height: "24px"}} src="/asset/bottom_arrow.svg"/>
                </Box>
            </Box>
        </Box>
    )
}


export default FarmingArea