function Preview({ appealText, kibouText, formDataHistory }) {
  return (
    <>
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
                  <td className="flex-grow">{item.contents}</td>
                </tr>
              ))
          )}
        </tbody>
      </table>
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
                  <td className="flex-grow">{item.contents}</td>
                </tr>
              ))
          )}
        </tbody>
      </table>

      {/* certificate */}
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
                  <td className="flex-grow">{item.contents}</td>
                </tr>
              ))
          )}
        </tbody>
      </table>

      {/* shiboudouki */}
      <div className="marginTop5">
        <div className="label-length100">志望動機:</div>
        <div className="border flex-grow">{appealText}</div>
      </div>

      {/* honnin kibou */}

      <div className="marginTop5">
        <div className="label-length100">本人希望欄:</div>
        <div className="border flex-grow">{kibouText}</div>
      </div>
    </>
  );
}

export default Preview;
