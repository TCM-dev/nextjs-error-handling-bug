export const error404Api = async () => {
  return fetch("https://jsonplaceholder.typicode.com/404");
};

export const get404 = async () => {
  const res = await error404Api();
  console.log(res.ok);
  console.log(res.status)
};
