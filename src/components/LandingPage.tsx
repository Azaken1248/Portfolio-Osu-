//import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import "../styles/LandingPage.css";
import StatsButton from "../assets/Stats.png";
import PlaysButton from "../assets/Plays.png";
import MainButton from "./MainButton";

interface LandingPageProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}
const LandingPage: React.FC<LandingPageProps> = ({ setCurrentPage }) => {
  return (
    <section className="backdrop">
      <div className="options">
        <div className="options-content">
          <h1>Azaken</h1>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: "Bold",
              fontFamily: "sans-serif",
            }}
          >
            Future Rank 1 India
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10%",
              padding: "0px",
              margin: "0px",
            }}
            className="button-group"
          >
            <MainButton
              buttonImg={StatsButton}
              buttonText={"Stats"}
              onClick={() => setCurrentPage("stats-page")}
            />
            <MainButton
              buttonImg={PlaysButton}
              buttonText={"Plays"}
              onClick={() => setCurrentPage("plays-page")}
            />
          </Box>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
