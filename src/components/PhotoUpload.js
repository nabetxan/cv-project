function PhotoUpload({ handlePhotoUpload, formDataGeneralInfo }) {
  return (
    <div>
      {/* upload foto */}
      <div className="photo-part marginTop30">
        <div id="photo-image" className="text-horizontally-center margin5">
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="uploadBtn"
          />
          {formDataGeneralInfo.photo && (
            <img
              src={URL.createObjectURL(formDataGeneralInfo.photo)}
              alt="Uploaded"
              className="uploaded-image"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PhotoUpload;
