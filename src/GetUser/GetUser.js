import { useQuery } from "react-query";

const fetchApi = async () => {
  return await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
};

export const useUser = () => {
  return useQuery("user", fetchApi);
};
