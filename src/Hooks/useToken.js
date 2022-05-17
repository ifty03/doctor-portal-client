import { useState, useEffect } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;
  console.log(email);
  useEffect(() => {
    if (email) {
      fetch(`https://doctors-prortal.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("access-token", data?.token);
          setToken(accessToken);
        });
    }
  }, [user, email]);
  return [token, setToken];
};
export default useToken;
