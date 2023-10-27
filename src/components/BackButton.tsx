import Button from "@mui/material/Button";

interface BackButtonProps {
  onClick: () => void;
  buttonText: String;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick, buttonText }) => (
  <Button
    variant="outlined"
    color="primary"
    size="small"
    sx={{
      color: "#ff7b00",
      borderColor: "#ff7b00",
      width: "80px",
      height: "30px",
      marginLeft: "4rem",
      marginTop: "2.5rem",
      "&:hover": {
        backgroundColor: "#ff7b00",
        color: "#222222",
      },
    }}
    onClick={onClick}
  >
    {buttonText}
  </Button>
);

export default BackButton;
