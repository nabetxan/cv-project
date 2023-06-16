function Preview({
  formDataGeneralInfo,
  appealText,
  kibouText,
  formDataHistory,
  calculateAge,
}) {
  return (
    <>
      {/* General Info */}
      <div className="flex-center">
        <div className="col flex-grow">
          <div className="space-between text-vertically-center">
            <div className="font-large margin5 bold">履歴書</div>

            <div className="flex-shrink text-vertically-center flex-center">
              {formDataGeneralInfo.lastUpdate.modifiedvalue.lastUpdateYear}

              <div>年</div>
              {formDataGeneralInfo.lastUpdate.modifiedvalue.lastUpdateMonth}
              <div>月</div>
              {formDataGeneralInfo.lastUpdate.modifiedvalue.lastUpdateDay}
              <div>日　現在</div>
            </div>
          </div>

          <div className="border col"></div>
          <div className="flex-center">
            <div className="flex-grow">
              <div className="flex-start text-vertically-center marginTop5 furigana-border">
                <div className="label-length75">ふりがな:</div>
                <div className="flex-grow">
                  <div className="padding-side">
                    {formDataGeneralInfo.nameFurigana}
                  </div>
                </div>
              </div>

              <div className="flex-start text-vertically-center name-border height70">
                <div className="label-length75">氏名:</div>
                <div className="flex-grow">
                  <div className="padding-side font-xLarge">
                    {formDataGeneralInfo.name}
                  </div>
                </div>
              </div>

              <div className="flex-start text-vertically-center marginTop5 border height50">
                <div className="label-length75">住所:</div>

                <div className="flex-grow marginTop5">
                  <div className="padding-side font-large">
                    {formDataGeneralInfo.homeaddress}
                  </div>
                </div>
              </div>
            </div>
            <div id="photo-image" className="text-horizontally-center margin5">
              {formDataGeneralInfo.photo && (
                <img
                  src={URL.createObjectURL(formDataGeneralInfo.photo)}
                  alt="Uploaded"
                  className="uploaded-image"
                ></img>
              )}
            </div>
          </div>
          <div className="flex-center height50">
            <div className="flex-start text-vertically-center border flex-grow">
              <div className="label-length75">電話:</div>

              <div className="flex-grow font-large">
                {formDataGeneralInfo.phone}
              </div>
            </div>

            <div className="flex-start text-vertically-center border  flex-grow email">
              <div className="label-length75">Email:</div>

              <div className="flex-grow font-larg">
                {formDataGeneralInfo.email}
              </div>
            </div>

            <div className="flex-shrink text-vertically-center flex-center text-center border  flex-grow">
              {formDataGeneralInfo.birthday.birthdayYear}
              <div>年</div>
              {formDataGeneralInfo.birthday.birthdayMonth}
              <div>月</div>
              {formDataGeneralInfo.birthday.birthdayDay}
              <div>日生</div>

              <div id="age flex-grow">({calculateAge()}歳)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="marginTop30">
        {/* educational experience */}
        <table className="">
          <thead>
            <tr>
              <th className="width60px">年</th>
              <th className="width60px">月</th>
              <th>学歴</th>
            </tr>
          </thead>
          <tbody>
            {formDataHistory.items.map(
              (category) =>
                category.data &&
                category.category === "Educational" &&
                category.data.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">{item.year}</td>
                    <td className="text-center">{item.month}</td>
                    <td className="flex-grow">
                      <div className="padding-side">{item.contents}</div>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
      <div className="marginTop30">
        {/* Job Experience */}
        <table className="">
          <thead>
            <tr>
              <th className="width60px">年</th>
              <th className="width60px">月</th>
              <th>職歴</th>
            </tr>
          </thead>
          <tbody>
            {formDataHistory.items.map(
              (category) =>
                category.data &&
                category.category === "Jobs" &&
                category.data.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">{item.year}</td>
                    <td className="text-center">{item.month}</td>
                    <td className="flex-grow">
                      <div className="padding-side">{item.contents}</div>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
      {/* certificate */}
      <div className="marginTop30">
        <table className="">
          <thead>
            <tr>
              <th className="width60px">年</th>
              <th className="width60px">月</th>
              <th>免許・資格</th>
            </tr>
          </thead>
          <tbody>
            {formDataHistory.items.map(
              (category) =>
                category.data &&
                category.category === "Certificate" &&
                category.data.map((item, index) => (
                  <tr key={index}>
                    <td className="text-center">{item.year}</td>
                    <td className="text-center">{item.month}</td>
                    <td className="flex-grow">
                      <div className="padding-side">{item.contents}</div>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
      {/* shiboudouki */}
      <div className="marginTop30">
        <div className="label-length100">志望動機:</div>
        <div className="border flex-grow height70">
          <div className="padding-side">{appealText}</div>
        </div>
      </div>

      {/* honnin kibou */}

      <div className="marginTop30">
        <div className="label-length100">本人希望欄:</div>
        <div className="border flex-grow height70">
          <div className="padding-side">{kibouText}</div>
        </div>
      </div>
    </>
  );
}

export default Preview;
