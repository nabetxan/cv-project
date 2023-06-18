import { useRef, useEffect } from "react";

function TextAreas({
  appealText,
  kibouText,
  handleChangeTextArea,
  selectedButton,
}) {
  const textareaAppealRef = useRef(null);
  const textareaKibouRef = useRef(null);
  useEffect(() => {
    adjustTextareaHeight(textareaAppealRef);
  }, [appealText]);

  useEffect(() => {
    adjustTextareaHeight(textareaKibouRef);
  }, [kibouText]);

  const adjustTextareaHeight = (ref) => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  };

  return (
    <>
      {selectedButton === "志望動機" ? (
        <>
          <div className="border flex-grow"></div>
          {/* shiboudouki */}
          <div className="marginTop5 flex">
            <label htmlFor="appeal" className="label-length100">
              志望動機:
            </label>
            <textarea
              ref={textareaAppealRef}
              id="appeal"
              name="appeal"
              value={appealText}
              onChange={handleChangeTextArea}
              className="flex-grow padding-side"
            />
          </div>
        </>
      ) : null}

      {selectedButton === "本人希望欄" ? (
        <>
          <div className="border flex-grow"></div>
          {/* honnin kibou */}
          <div className="marginTop5 flex">
            <label htmlFor="kibou" className="label-length100">
              本人希望欄:
            </label>
            <textarea
              ref={textareaKibouRef}
              id="kibou"
              name="kibou"
              value={kibouText}
              onChange={handleChangeTextArea}
              className="flex-grow  padding-side"
            />
          </div>
        </>
      ) : null}
    </>
  );
}
export default TextAreas;
