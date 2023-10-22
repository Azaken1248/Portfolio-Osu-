import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import "../styles/MainButton.css";

interface MainButtonProps {
  buttonImg: string;
  buttonText: string;
  onClick: () => void;
}
const MainButton: React.FC<MainButtonProps> = ({
  buttonImg,
  buttonText,
  onClick,
}) => {
  return (
    <button className="main-button" onClick={onClick}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "Center",
        }}
        className="button-icon-container"
      >
        <img src={buttonImg} alt="Stats Icon" className="button-icon" />
        <Typography
          sx={{
            color: "rgba(255, 89, 0, 1)",
            marginBottom: "20px",
            fontSize: "1.3em",
            fontFamily: "cursive",
          }}
          className="button-text"
        >
          {buttonText}
        </Typography>
      </Box>
    </button>
  );
};

export default MainButton;
