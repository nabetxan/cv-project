import { CATEGORY } from "./App";

function HistoryList({
  formDataHistory,
  handleChangeHistory,
  handleAddItemHistory,
  handleDeleteItemHistory,
  selectedButton,
}) {
  return (
    <>
      {selectedButton === CATEGORY.GAKUREKI ? (
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
                      handleAddItemHistory(CATEGORY.GAKUREKI);
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
                  histroryItem.category === CATEGORY.GAKUREKI &&
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

      {selectedButton === CATEGORY.SHOKUREKI ? (
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
                      handleAddItemHistory(CATEGORY.SHOKUREKI);
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
                  histroryItem.category === CATEGORY.SHOKUREKI &&
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

      {selectedButton === CATEGORY.MENKYOSHIKAKU ? (
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
                      handleAddItemHistory(CATEGORY.MENKYOSHIKAKU);
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
                  histroryItem.category === CATEGORY.MENKYOSHIKAKU &&
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
