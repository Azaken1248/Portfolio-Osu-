//import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

import "../styles/LandingPage.css";
import StatsButton from "../assets/Stats.png";
import PlaysButton from "../assets/Plays.png";

const LandingPage = () => {
  return (
    <section className="backdrop">
      <div className="options">
        <div className="options-content">
          <h1>Azaken</h1>
          <Typography variant="h5" sx={{ color: "white" }}>
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
          >
            <button className="stats-button">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "Center",
                }}
                className="button-icon-container"
              >
                <img
                  src={StatsButton}
                  alt="Stats Icon"
                  className="button-icon"
                />
                <Typography
                  sx={{
                    color: "rgba(255, 89, 0, 1)",
                    marginBottom: "20px",
                    fontSize: "1.3em",
                    fontFamily: "cursive",
                  }}
                  className="button-text"
                >
                  Stats
                </Typography>
              </Box>
            </button>
            <button className="stats-button">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "Center",
                }}
                className="button-icon-container"
              >
                <img
                  src={PlaysButton}
                  alt="Stats Icon"
                  className="button-icon"
                />
                <Typography
                  sx={{
                    color: "rgba(255, 89, 0, 1)",
                    marginBottom: "20px",
                    fontSize: "1.3em",
                    fontFamily: "cursive",
                  }}
                  className="button-text"
                >
                  Plays
                </Typography>
              </Box>
            </button>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
