import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextAreas from "./TextAreas";

function EditWindow({
  handleisEditWindowOpen,
  selectedButton,
  appealText,
  kibouText,
  handleChangeTextArea,
}) {
  return (
    <div id="edit-window">
      <IconButton
        aria-label="close"
        onClick={() => {
          handleisEditWindowOpen(selectedButton);
        }}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "var(--color-white)",
        }}
      >
        <CloseIcon />
      </IconButton>
      {selectedButton}
      <TextAreas
        appealText={appealText}
        kibouText={kibouText}
        handleChangeTextArea={handleChangeTextArea}
      />
    </div>
  );
}

export default EditWindow;
