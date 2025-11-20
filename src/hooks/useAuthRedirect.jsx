import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuthRedirect = (redirectTo = "/") => { // default redirect is home
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
      if (!loggedUser) {
        navigate(redirectTo); // redirect to home or custom path
      }
    };

    // Initial check when component mounts
    checkUser();

    // Listen for logout events in this tab or other tabs
    const handleStorage = (e) => {
      if (e.key === "logout") {
        checkUser();
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [navigate, redirectTo]);
};

export default useAuthRedirect;
