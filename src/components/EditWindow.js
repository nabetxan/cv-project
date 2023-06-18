import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import TextAreas from "./TextAreas";
import HistoryList from "./HistoryList";
import GeneralInfo from "./GeneralInfo";
import Draggable from "react-draggable";

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
  handlePhotoDelete,
}) {
  return (
    <Draggable
      handle=".edit-window"
      defaultPosition={{ x: 70, y: -900 }}
      position={null}
      scale={1}
    >
      <div id="edit-window" className="edit-window">
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
        <div className="font-xLarge bold">{selectedButton}</div>

        {selectedButton === "基本情報" ? (
          <GeneralInfo
            calculateAge={calculateAge}
            handleChangeGeneralInfo={handleChangeGeneralInfo}
            formDataGeneralInfo={formDataGeneralInfo}
            handlePhotoUpload={handlePhotoUpload}
            handlePhotoDelete={handlePhotoDelete}
          />
        ) : null}

        {selectedButton === "学歴" ||
        selectedButton === "職歴" ||
        selectedButton === "免許・資格" ? (
          <HistoryList
            formDataHistory={formDataHistory}
            handleChangeHistory={handleChangeHistory}
            handleAddItemHistory={handleAddItemHistory}
            handleDeleteItemHistory={handleDeleteItemHistory}
            selectedButton={selectedButton}
          />
        ) : null}
        {selectedButton === "志望動機" || selectedButton === "本人希望欄" ? (
          <TextAreas
            appealText={appealText}
            kibouText={kibouText}
            handleChangeTextArea={handleChangeTextArea}
            selectedButton={selectedButton}
          />
        ) : null}
      </div>
    </Draggable>
  );
}

export default EditWindow;
