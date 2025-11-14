import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [OnlineStatus, setOnlineStatus] = useState(true);

  //check if online
  useEffect(() => {
    addEventListener("offline", (event) => {
        setOnlineStatus(false)
    });
     addEventListener("online", (event) => {
        setOnlineStatus(true)
    });
  }, []);

  return OnlineStatus;
};

export default useOnlineStatus;