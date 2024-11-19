// import useSWR from "swr";
//
// const authURL: string = "http://localhost:8000/auth";
//
// interface AuthPath {
//   login: "login";
//   register: "register";
// }
//
// const fetcher = (url: string) =>
//   fetch(url).then(async (res) => {
//     return res.json();
//   });
//
// export function useUser(path: AuthPath) {
//   const { data, error, isLoading } = useSWR(`${authURL}/${path}`, fetcher);
//
//   return {
//     data,
//     isLoading,
//     error
//   };
// }
