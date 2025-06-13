import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import { NOTIFICATIONS } from "../langConstants";

const NotificationPopover = ({ notifications = [NOTIFICATIONS] }) => {
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
    <div className="relative inline-block ml-7 md:ml-auto" ref={popoverRef}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full ml-4 bg-white shadow hover:bg-gray-200 transition">
        <Bell className="w-6 h-6 text-gray-700" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        )}
      </button>

      {open && (
        <div className="md:absolute fixed right-0 mt-2 w-72 max-h-96 bg-white border border-gray-200 rounded-md shadow-lg z-20 overflow-y-scroll scrollbar-hide">
          <div className="p-3 border-b text-sm font-medium text-gray-800">
            <p className="text-[16px] -mb-3">Notifications</p> <br /> <hr />
            <span className="text-gray-500">
              For a smoother experience on Cinestream, we recommend using the{" "}
              <b>Brave browser</b>. It blocks ads and auto-redirects, making
              your streaming faster and safer. <br />{" "}
              <b>BRAVE is a GOOGLE like browser.</b>{" "}
            </span>
          </div>
          {notifications.length === 0 ? (
            <div className="p-4 text-gray-500 text-sm">
              No new notifications
            </div>
          ) : (
            <ul className="divide-y divide-gray-100 mx-3">
              {NOTIFICATIONS.map((notif, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-50 text-sm text-gray-800 animated-text">
                  {notif
                    .split(".")
                    .filter((sentence) => sentence.trim().length > 0)
                    .map((sentence, i) => (
                      <p key={i}>{sentence.trim()}.</p>
                    ))}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationPopover;
