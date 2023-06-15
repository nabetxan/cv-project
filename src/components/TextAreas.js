import { useRef, useEffect } from "react";
function TextAreas({ appealText, kibouText, handleChangeTextArea }) {
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
      {/* shiboudouki */}
      <div className="flex-start text-vertically-center marginTop5">
        <label htmlFor="appeal" className="label-length100">
          志望動機:
        </label>
        <textarea
          ref={textareaAppealRef}
          id="appeal"
          name="appeal"
          value={appealText}
          onChange={handleChangeTextArea}
          className="flex-grow"
        />
      </div>
      <div className="border flex-grow"></div>
      {/* honnin kibou */}
      <div className="flex-start text-vertically-center marginTop5">
        <label htmlFor="kibou" className="label-length100">
          本人希望欄:
        </label>
        <textarea
          ref={textareaKibouRef}
          id="kibou"
          name="kibou"
          value={kibouText}
          onChange={handleChangeTextArea}
          className="flex-grow"
        />
      </div>
    </>
  );
}
export default TextAreas;
