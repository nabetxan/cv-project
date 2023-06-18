import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function PhotoUpload({
  handlePhotoUpload,
  handlePhotoDelete,
  formDataGeneralInfo,
}) {
  return (
    <div>
      {/* upload foto */}
      <div className="photo-part marginTop30">
        <div id="photo-image" className="margin5">
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="uploadBtn"
          />
          {formDataGeneralInfo.photo ? (
            <>
              <img
                src={URL.createObjectURL(formDataGeneralInfo.photo)}
                alt="Uploaded"
                className="uploaded-image"
              />
              <IconButton aria-label="delete" onClick={handlePhotoDelete}>
                <DeleteIcon />
              </IconButton>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotoUpload;
