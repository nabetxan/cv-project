import { useState } from "react";
import "../styles/App.css";

function App() {
  const [formDataGeneralInfo, setFormData] = useState({
    lastUpdate: {
      modifiedvalue: {
        lastUpdateYear: "2023",
        lastUpdateMonth: "6",
        lastUpdateDay: "24",
      },
    },
    nameFurigana: "",
    name: "",
    birthday: {
      birthdayYear: "1984",
      birthdayMonth: "1",
      birthdayDay: "9",
      Age: "",
    },
    homeaddress: "",
    phone: "",
    email: "",
    photo: null,
  });

  const [formDataEducational, setFormDataEducational] = useState({
    items: [
      {
        year: "2020",
        month: "6",
        contents: "XXXX",
      },

      {
        year: "2023",
        month: "6",
        contents: "XXXX",
      },
    ],
  });

  const [formDataJobExp, setFormDataJobExp] = useState({
    items: [
      {
        year: "2020",
        month: "6",
        contents: "XXXX",
      },

      {
        year: "2023",
        month: "6",
        contents: "XXXX",
      },
    ],
  });

  const [formDataCertificate, setFormDataCertificate] = useState({
    items: [
      {
        year: "2020",
        month: "6",
        contents: "XXXX",
      },

      {
        year: "2023",
        month: "6",
        contents: "XXXX",
      },
    ],
  });

  const calculateAge = () => {
    const currentYear = parseInt(
      formDataGeneralInfo.lastUpdate.modifiedvalue.lastUpdateYear
    );
    const currentMonth = parseInt(
      formDataGeneralInfo.lastUpdate.modifiedvalue.lastUpdateMonth
    );
    const currentDay = parseInt(
      formDataGeneralInfo.lastUpdate.modifiedvalue.lastUpdateDay
    );
    const birthYear = parseInt(formDataGeneralInfo.birthday.birthdayYear);
    const birthMonth = parseInt(formDataGeneralInfo.birthday.birthdayMonth);
    const birthDay = parseInt(formDataGeneralInfo.birthday.birthdayDay);

    let age = currentYear - birthYear;

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age -= 1;
    }

    return age;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      name === "lastUpdateYear" ||
      name === "lastUpdateMonth" ||
      name === "lastUpdateDay"
    ) {
      setFormData((prevData) => ({
        ...prevData,
        lastUpdate: {
          ...prevData.lastUpdate,
          modifiedvalue: {
            ...prevData.lastUpdate.modifiedvalue,
            [name]: value,
          },
        },
      }));
    } else if (
      name === "birthdayYear" ||
      name === "birthdayMonth" ||
      name === "birthdayDay"
    ) {
      setFormData((prevData) => ({
        ...prevData,
        birthday: {
          ...prevData.birthday,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    console.log(formDataGeneralInfo);
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleChangeEducational = (e, index) => {
    const { name, value } = e.target;
    setFormDataEducational((prevData) => {
      const updatedItems = [...prevData.items];
      updatedItems[index][name] = value;
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleAddItemEducational = () => {
    setFormDataEducational((prevData) => {
      const newItem = {
        year: "",
        month: "",
        contents: "",
      };
      const updatedItems = [...prevData.items, newItem];
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleDeleteItemEducational = (index) => {
    setFormDataEducational((prevData) => {
      const updatedItems = [...prevData.items];
      updatedItems.splice(index, 1);
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleChangeJobExp = (e, index) => {
    const { name, value } = e.target;
    setFormDataJobExp((prevData) => {
      const updatedItems = [...prevData.items];
      updatedItems[index][name] = value;
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleAddItemJobExp = () => {
    setFormDataJobExp((prevData) => {
      const newItem = {
        year: "",
        month: "",
        contents: "",
      };
      const updatedItems = [...prevData.items, newItem];
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleDeleteItemJobExp = (index) => {
    setFormDataJobExp((prevData) => {
      const updatedItems = [...prevData.items];
      updatedItems.splice(index, 1);
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleChangeCertificate = (e, index) => {
    const { name, value } = e.target;
    setFormDataCertificate((prevData) => {
      const updatedItems = [...prevData.items];
      updatedItems[index][name] = value;
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleAddItemCertificate = () => {
    setFormDataCertificate((prevData) => {
      const newItem = {
        year: "",
        month: "",
        contents: "",
      };
      const updatedItems = [...prevData.items, newItem];
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };

  const handleDeleteItemCertificate = (index) => {
    setFormDataCertificate((prevData) => {
      const updatedItems = [...prevData.items];
      updatedItems.splice(index, 1);
      return {
        ...prevData,
        items: updatedItems,
      };
    });
  };
  return (
    <>
      <div id="title">履歴書</div>
      <div id="contents" className="flex-center">
        <div id="main">
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
                          onChange={handleChange}
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
                          onChange={handleChange}
                        />
                        <label htmlFor="lastUpdateMonth">月</label>
                        <input
                          type="number"
                          id="lastUpdateDay"
                          name="lastUpdateDay"
                          value={
                            formDataGeneralInfo.lastUpdate.modifiedvalue
                              .lastUpdateDay
                          }
                          onChange={handleChange}
                        />
                        <label htmlFor="lastUpdateDay">日　現在</label>
                      </div>
                    </div>
                    <div className="border"></div>
                    <div className="flex-start text-vertically-center marginTop5">
                      <label htmlFor="nameFurigana" className="label-length100">
                        ふりがな:
                      </label>
                      <input
                        type="text"
                        id="nameFurigana"
                        name="nameFurigana"
                        value={formDataGeneralInfo.nameFurigana}
                        onChange={handleChange}
                        className="flex-grow"
                      />
                    </div>

                    <div className="flex-start text-vertically-center">
                      <label htmlFor="name" className="label-length100">
                        氏名:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formDataGeneralInfo.name}
                        onChange={handleChange}
                        className="flex-grow"
                      />
                    </div>

                    <div className="flex-start text-vertically-center marginTop5">
                      <label htmlFor="homeaddress" className="label-length100">
                        住所:
                      </label>
                      <input
                        type="text"
                        id="homeaddress"
                        name="homeaddress"
                        value={formDataGeneralInfo.homeaddress}
                        onChange={handleChange}
                        className="flex-grow marginTop5"
                      />
                    </div>
                  </div>

                  {/* upload foto */}
                  <div className="photo-part marginTop30">
                    <div id="photo-image" className="text-horizontally-center">
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
              </div>{" "}
              <div className="space-between marginTop5">
                <div className="flex-start text-vertically-center">
                  <label htmlFor="phone" className="label-length100">
                    電話:
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formDataGeneralInfo.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex-start text-vertically-center">
                  <label htmlFor="email" className="label-length80">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formDataGeneralInfo.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex-shrink text-vertically-center flex-center">
                  <input
                    type="number"
                    id="birthdayYear"
                    name="birthdayYear"
                    value={formDataGeneralInfo.birthday.birthdayYear}
                    onChange={handleChange}
                    className="text-center"
                  />
                  <label htmlFor="birthdayYear">年</label>
                  <input
                    type="number"
                    id="birthdayMonth"
                    name="birthdayMonth"
                    value={formDataGeneralInfo.birthday.birthdayMonth}
                    onChange={handleChange}
                    className="text-center"
                  />
                  <label htmlFor="birthdayMonth">月</label>
                  <input
                    type="number"
                    id="birthdayDay"
                    name="birthdayDay"
                    value={formDataGeneralInfo.birthday.birthdayDay}
                    onChange={handleChange}
                    className="text-center"
                  />
                  <label htmlFor="birthdayDay">日生</label>
                  <div id="age">({calculateAge()}歳)</div>
                </div>
              </div>
            </form>
          </div>
          <div className="border flex-grow"></div>
          {/* input educational experience */}
          <table className="">
            <thead>
              <tr>
                <th className="width60px">年</th>
                <th className="width60px">月</th>
                <th>学歴</th>
                <th className="width60px">
                  <button onClick={handleAddItemEducational}>追加</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {formDataEducational.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="year"
                      value={item.year}
                      onChange={(e) => handleChangeEducational(e, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="month"
                      value={item.month}
                      onChange={(e) => handleChangeEducational(e, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="contents"
                      value={item.contents}
                      onChange={(e) => handleChangeEducational(e, index)}
                      className="flex-grow"
                    />
                  </td>
                  <td>
                    {index > 0 && (
                      <button
                        onClick={() => handleDeleteItemEducational(index)}
                      >
                        削除
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border flex-grow"></div>
          {/* input job experience */}
          <table className="">
            <thead>
              <tr>
                <th className="width60px">年</th>
                <th className="width60px">月</th>
                <th>職歴</th>
                <th className="width60px">
                  <button onClick={handleAddItemJobExp}>追加</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {formDataJobExp.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="year"
                      value={item.year}
                      onChange={(e) => handleChangeJobExp(e, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="month"
                      value={item.month}
                      onChange={(e) => handleChangeJobExp(e, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="contents"
                      value={item.contents}
                      onChange={(e) => handleChangeJobExp(e, index)}
                      className="flex-grow"
                    />
                  </td>
                  <td>
                    {index > 0 && (
                      <button onClick={() => handleDeleteItemJobExp(index)}>
                        削除
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="border flex-grow"></div>
          {/* input certificate */}
          <table className="">
            <thead>
              <tr>
                <th className="width60px">年</th>
                <th className="width60px">月</th>
                <th>免許・資格</th>
                <th className="width60px">
                  <button onClick={handleAddItemCertificate}>追加</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {formDataCertificate.items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="year"
                      value={item.year}
                      onChange={(e) => handleChangeCertificate(e, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="month"
                      value={item.month}
                      onChange={(e) => handleChangeCertificate(e, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="contents"
                      value={item.contents}
                      onChange={(e) => handleChangeCertificate(e, index)}
                      className="flex-grow"
                    />
                  </td>
                  <td>
                    {index > 0 && (
                      <button
                        onClick={() => handleDeleteItemCertificate(index)}
                      >
                        削除
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div id="side-bar"></div>
      </div>

      {/* shiboudouki */}
      {/* honnin kibou */}

      {/* display whole rirekisho PDF*/}
    </>
  );
}

export default App;
