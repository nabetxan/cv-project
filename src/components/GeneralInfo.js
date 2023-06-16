import PhotoUpload from "./PhotoUpload";

function GeneralInfo({
  calculateAge,
  handleChangeGeneralInfo,
  formDataGeneralInfo,
  handlePhotoUpload,
}) {
  return (
    <div id="general">
      <form>
        <div className="">
          <div className="flex-center">
            <div className="col flex-grow">
              <div className="space-between text-vertically-center">
                <div className="font-large margin5 bold">履歴書</div>

                <div className="flex-shrink text-vertically-center">
                  <input
                    type="number"
                    id="lastUpdateYear"
                    name="lastUpdateYear"
                    value={
                      formDataGeneralInfo.lastUpdate.modifiedvalue
                        .lastUpdateYear
                    }
                    onChange={handleChangeGeneralInfo}
                  />
                  <label htmlFor="lastUpdateYear">年</label>
                  <input
                    type="number"
                    id="lastUpdateMonth"
                    name="lastUpdateMonth"
                    value={
                      formDataGeneralInfo.lastUpdate.modifiedvalue
                        .lastUpdateMonth
                    }
                    onChange={handleChangeGeneralInfo}
                  />
                  <label htmlFor="lastUpdateMonth">月</label>
                  <input
                    type="number"
                    id="lastUpdateDay"
                    name="lastUpdateDay"
                    value={
                      formDataGeneralInfo.lastUpdate.modifiedvalue.lastUpdateDay
                    }
                    onChange={handleChangeGeneralInfo}
                  />
                  <label htmlFor="lastUpdateDay">日　現在</label>
                </div>
              </div>
              <div className="border"></div>
              <div className="flex-start text-vertically-center marginTop5">
                <label htmlFor="nameFurigana" className="label-length75">
                  ふりがな:
                </label>
                <input
                  type="text"
                  id="nameFurigana"
                  name="nameFurigana"
                  value={formDataGeneralInfo.nameFurigana}
                  onChange={handleChangeGeneralInfo}
                  className="flex-grow"
                />
              </div>

              <div className="flex-start text-vertically-center">
                <label htmlFor="name" className="label-length75">
                  氏名:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formDataGeneralInfo.name}
                  onChange={handleChangeGeneralInfo}
                  className="flex-grow"
                />
              </div>

              <div className="flex-start text-vertically-center marginTop5">
                <label htmlFor="homeaddress" className="label-length75">
                  住所:
                </label>
                <input
                  type="text"
                  id="homeaddress"
                  name="homeaddress"
                  value={formDataGeneralInfo.homeaddress}
                  onChange={handleChangeGeneralInfo}
                  className="flex-grow marginTop5"
                />
              </div>
            </div>
            <PhotoUpload
              handlePhotoUpload={handlePhotoUpload}
              formDataGeneralInfo={formDataGeneralInfo}
            />
          </div>
        </div>{" "}
        <div className="space-between marginTop5">
          <div className="flex-start text-vertically-center">
            <label htmlFor="phone" className="phone-label">
              電話:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formDataGeneralInfo.phone}
              onChange={handleChangeGeneralInfo}
            />
          </div>
          <div className="flex-start text-vertically-center">
            <label htmlFor="email" className="email-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formDataGeneralInfo.email}
              onChange={handleChangeGeneralInfo}
            />
          </div>

          <div className="flex-shrink text-vertically-center flex-center">
            <input
              type="number"
              id="birthdayYear"
              name="birthdayYear"
              value={formDataGeneralInfo.birthday.birthdayYear}
              onChange={handleChangeGeneralInfo}
              className="text-center"
            />
            <label htmlFor="birthdayYear">年</label>
            <input
              type="number"
              id="birthdayMonth"
              name="birthdayMonth"
              value={formDataGeneralInfo.birthday.birthdayMonth}
              onChange={handleChangeGeneralInfo}
              className="text-center"
            />
            <label htmlFor="birthdayMonth">月</label>
            <input
              type="number"
              id="birthdayDay"
              name="birthdayDay"
              value={formDataGeneralInfo.birthday.birthdayDay}
              onChange={handleChangeGeneralInfo}
              className="text-center"
            />
            <label htmlFor="birthdayDay">日生</label>
            <div id="age　flex-grow">({calculateAge()}歳)</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default GeneralInfo;
