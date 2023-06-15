import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

function EditWindow({ handleisEditWindowOpen, selectedButton }) {
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
    </div>
  );
}

export default EditWindow;
