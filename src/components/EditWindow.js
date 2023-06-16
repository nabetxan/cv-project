import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextAreas from "./TextAreas";
import HistoryList from "./HistoryList";
import GeneralInfo from "./GeneralInfo";

function EditWindow({
  handleisEditWindowOpen,
  selectedButton,
  appealText,
  kibouText,
  handleChangeTextArea,
  formDataHistory,
  handleChangeHistory,
  handleAddItemHistory,
  handleDeleteItemHistory,
  calculateAge,
  handleChangeGeneralInfo,
  formDataGeneralInfo,
  handlePhotoUpload,
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
      <div className="font-large">{selectedButton}</div>

      <GeneralInfo
        calculateAge={calculateAge}
        handleChangeGeneralInfo={handleChangeGeneralInfo}
        formDataGeneralInfo={formDataGeneralInfo}
        handlePhotoUpload={handlePhotoUpload}
      />

      <HistoryList
        formDataHistory={formDataHistory}
        handleChangeHistory={handleChangeHistory}
        handleAddItemHistory={handleAddItemHistory}
        handleDeleteItemHistory={handleDeleteItemHistory}
      />
      <TextAreas
        appealText={appealText}
        kibouText={kibouText}
        handleChangeTextArea={handleChangeTextArea}
      />
    </div>
  );
}

export default EditWindow;
