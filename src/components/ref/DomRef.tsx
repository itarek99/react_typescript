import { useEffect, useRef } from "react";

const DomRef = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input className="px-3 py-3 rounded-md outline-none" type="text" ref={inputRef} />
    </div>
  );
};
export default DomRef;
