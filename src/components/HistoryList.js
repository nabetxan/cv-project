function HistoryList({
  formDataHistory,
  handleChangeHistory,
  handleAddItemHistory,
  handleDeleteItemHistory,
  selectedButton,
}) {
  return (
    <>
      {selectedButton === "学歴" ? (
        <>
          <div className="border flex-grow"></div>
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
                (histroryItem) =>
                  histroryItem.data &&
                  histroryItem.category === "Educational" &&
                  histroryItem.data.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          name="year"
                          value={data.year}
                          onChange={(e) =>
                            handleChangeHistory(e, histroryItem.category, index)
                          }
                          className="text-center"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="month"
                          value={data.month}
                          onChange={(e) =>
                            handleChangeHistory(e, histroryItem.category, index)
                          }
                          className="text-center"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="contents"
                          value={data.contents}
                          onChange={(e) =>
                            handleChangeHistory(e, histroryItem.category, index)
                          }
                          className="flex-grow padding-side"
                        />
                      </td>
                      <td>
                        {
                          <button
                            onClick={() =>
                              handleDeleteItemHistory(
                                histroryItem.category,
                                index
                              )
                            }
                          >
                            削除
                          </button>
                        }
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </>
      ) : null}

      {selectedButton === "職歴" ? (
        <>
          <div className="border flex-grow"></div>
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
                (histroryItem) =>
                  histroryItem.data &&
                  histroryItem.category === "Jobs" &&
                  histroryItem.data.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          name="year"
                          value={data.year}
                          onChange={(e) =>
                            handleChangeHistory(e, histroryItem.category, index)
                          }
                          className="text-center"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="month"
                          value={data.month}
                          onChange={(e) =>
                            handleChangeHistory(e, histroryItem.category, index)
                          }
                          className="text-center"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="contents"
                          value={data.contents}
                          onChange={(e) =>
                            handleChangeHistory(e, histroryItem.category, index)
                          }
                          className="flex-grow padding-side"
                        />
                      </td>
                      <td>
                        {
                          <button
                            onClick={() =>
                              handleDeleteItemHistory(
                                histroryItem.category,
                                index
                              )
                            }
                          >
                            削除
                          </button>
                        }
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </>
      ) : null}

      {selectedButton === "免許・資格" ? (
        <>
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
                (histroryItem) =>
                  histroryItem.data &&
                  histroryItem.category === "Certificate" &&
                  histroryItem.data.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          name="year"
                          value={data.year}
                          onChange={(e) =>
                            handleChangeHistory(e, histroryItem.category, index)
                          }
                          className="text-center"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="month"
                          value={data.month}
                          onChange={(e) =>
                            handleChangeHistory(e, histroryItem.category, index)
                          }
                          className="text-center"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="contents"
                          value={data.contents}
                          onChange={(e) =>
                            handleChangeHistory(e, histroryItem.category, index)
                          }
                          className="flex-grow padding-side"
                        />
                      </td>
                      <td>
                        {
                          <button
                            onClick={() =>
                              handleDeleteItemHistory(
                                histroryItem.category,
                                index
                              )
                            }
                          >
                            削除
                          </button>
                        }
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </>
      ) : null}
    </>
  );
}
export default HistoryList;
