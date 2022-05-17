import { useEffect, useState } from "react";
const useIsAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/admin/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const isAdmin = data?.admin;
        setAdmin(isAdmin);
        setIsLoading(false);
      });
  }, [user]);
  return [admin, isLoading];
};
export default useIsAdmin;
