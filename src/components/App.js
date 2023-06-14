import { useState } from "react";
import "../styles/App.css";

function App() {
  const [formData, setFormData] = useState({
    nameFurigana: "",
    name: "",
    birthday: "",
    homeaddress: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(formData);
  };

  return (
    <>
      <div id="title">履歴書</div>
      <div id="contents" className="flex-center">
        <div id="main">
          <div id="general">
            <form>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <label htmlFor="nameFurigana">ふりがな:</label>
              <input
                type="text"
                id="nameFurigana"
                name="nameFurigana"
                value={formData.nameFurigana}
                onChange={handleChange}
              />

              <label htmlFor="name">氏名:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
              />

              <label htmlFor="homeaddress">住所:</label>
              <input
                type="text"
                id="homeaddress"
                name="homeaddress"
                value={formData.homeaddress}
                onChange={handleChange}
              />

              <label htmlFor="phone">電話:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>

        <div id="side-bar">side</div>

        {/* upload foto */}
        {/* input educational experience */}
        {/* input job experience */}
        {/* input certificate */}
        {/* shiboudouki */}
        {/* honnin kibou */}
      </div>

      {/* display whole rirekisho PDF*/}
    </>
  );
}

export default App;
