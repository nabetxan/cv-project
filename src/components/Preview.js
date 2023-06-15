function Preview({ appealText, kibouText }) {
  return (
    <>
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
