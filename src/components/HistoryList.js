function HistoryList({
  formDataHistory,
  handleChangeHistory,
  handleAddItemHistory,
  handleDeleteItemHistory,
  selectedButton,
}) {
  return (
    <>
      <div className="border flex-grow"></div>
      <table className="">
        <thead>
          <tr>
            <th className="width60px">年</th>
            <th className="width60px">月</th>
            <th>{selectedButton}</th>
            <th className="width60px">
              <button
                onClick={() => {
                  handleAddItemHistory(selectedButton);
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
              histroryItem.category === selectedButton &&
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
                          handleDeleteItemHistory(histroryItem.category, index)
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
  );
}
export default HistoryList;
