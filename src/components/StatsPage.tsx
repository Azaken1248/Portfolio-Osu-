import { Box, Typography, lighten } from "@mui/material";

import "../styles/StatsPage.css";
import BackButton from "./BackButton";

interface StatsPageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}
const StatsPage: React.FC<StatsPageProps> = ({ setCurrentPage }) => {
  return (
    <Box className="base">
      <Box className="button-container">
        <BackButton
          onClick={() => setCurrentPage("landing-page")}
          buttonText={"Back"}
        />
        <Typography
          variant="h2"
          sx={{
            color: "#ff7b00",
            marginTop: "1.4rem",
            display: "flex",
            justifyContent: "center",
            marginLeft: "27%",
            "&:hover": {
              textDecorationLine: "underline",
              textDecorationColor: "#ffb700",
              textDecorationThickness: "3px",
              textDecorationSkip: "edges",
              textDecorationSkipInk: "auto",
              textDecorationStyle: "solid",
              transform: "inherit",
            },
          }}
        >
          Stats For Azaken
        </Typography>
      </Box>
    </Box>
  );
};

export default StatsPage;
