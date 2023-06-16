function HistoryList({
  formDataHistory,
  handleChangeHistory,
  handleAddItemHistory,
  handleDeleteItemHistory,
}) {
  return (
    <>
      {/* input educational experience */}
      <table className="">
        <thead>
          <tr>
            <th className="width60px">年</th>
            <th className="width60px">月</th>
            <th>学歴</th>
            <th className="width60px">
              <button
                onClick={() => {
                  handleAddItemHistory("Educational");
                }}
              >
                追加
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {formDataHistory.items.map(
            (category, categoryIndex) =>
              category.data &&
              category.category === "Educational" &&
              category.data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="year"
                      value={item.year}
                      onChange={(e) => handleChangeHistory(e, 0, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="month"
                      value={item.month}
                      onChange={(e) => handleChangeHistory(e, 0, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="contents"
                      value={item.contents}
                      onChange={(e) => handleChangeHistory(e, 0, index)}
                      className="flex-grow"
                    />
                  </td>
                  <td>
                    {index > 0 && (
                      <button onClick={() => handleDeleteItemHistory(0, index)}>
                        削除
                      </button>
                    )}
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>

      {/* Table for Job Experience */}
      <table className="">
        <thead>
          <tr>
            <th className="width60px">年</th>
            <th className="width60px">月</th>
            <th>職歴</th>
            <th className="width60px">
              <button
                onClick={() => {
                  handleAddItemHistory("Jobs");
                }}
              >
                追加
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {formDataHistory.items.map(
            (category, categoryIndex) =>
              category.data &&
              category.category === "Jobs" &&
              category.data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="year"
                      value={item.year}
                      onChange={(e) => handleChangeHistory(e, 1, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="month"
                      value={item.month}
                      onChange={(e) => handleChangeHistory(e, 1, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="contents"
                      value={item.contents}
                      onChange={(e) => handleChangeHistory(e, 1, index)}
                      className="flex-grow"
                    />
                  </td>
                  <td>
                    {index > 0 && (
                      <button onClick={() => handleDeleteItemHistory(1, index)}>
                        削除
                      </button>
                    )}
                  </td>
                </tr>
              ))
          )}
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
              <button
                onClick={() => {
                  handleAddItemHistory("Certificate");
                }}
              >
                追加
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {formDataHistory.items.map(
            (category, categoryIndex) =>
              category.data &&
              category.category === "Certificate" &&
              category.data.map((item, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      name="year"
                      value={item.year}
                      onChange={(e) => handleChangeHistory(e, 2, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="month"
                      value={item.month}
                      onChange={(e) => handleChangeHistory(e, 2, index)}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="contents"
                      value={item.contents}
                      onChange={(e) => handleChangeHistory(e, 2, index)}
                      className="flex-grow"
                    />
                  </td>
                  <td>
                    {index > 0 && (
                      <button onClick={() => handleDeleteItemHistory(2, index)}>
                        削除
                      </button>
                    )}
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </table>
    </>
  );
}
export default HistoryList;
