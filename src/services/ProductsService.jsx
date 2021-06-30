const ProductsService = async (url) => {
  let response;
  let json;

  response = await fetch(url);
  json = await response.json();
  return json;
};

export { ProductsService };
