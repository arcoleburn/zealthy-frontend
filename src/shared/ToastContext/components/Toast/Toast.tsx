import React, { useEffect } from "react";
import { useToast } from "../../ToastContext";

const Toast: React.FC = () => {
  const { toasts, removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        removeToast(toasts[0].id);
      }
    }, 3000); // Toast will disappear after 5 seconds

    return () => clearTimeout(timer);
  }, [toasts, removeToast]);

  return (
    <div className="fixed top-15 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 space-y-2 z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-3 rounded shadow-md w-80 text-white ${
            toast.type === "success"
              ? "bg-green-500"
              : toast.type === "error"
              ? "bg-red-500"
              : "bg-blue-500"
          }`}
        >
          <p>{toast.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Toast;
