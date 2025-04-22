import { useState, useRef, useEffect } from "react";

const Popover = ({ imageSrc, imageAlt, imageClass, children }) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      <img
        src={imageSrc}
        alt={imageAlt || "popover trigger"}
        className={imageClass || "w-10 h-10 rounded-md  cursor-pointer mx-3"}
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="absolute z-10 mt-2 w-auto flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#ffffff] via-[#fefdff] to-[#86c1e9] border rounded shadow-lg right-0">
          {children}
        </div>
      )}
    </div>
  );
};

export default Popover;
