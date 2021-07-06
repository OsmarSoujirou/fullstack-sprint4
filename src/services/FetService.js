const FetService = async (url) => {

  let response;
  let json;
 
  try {    
    response = await fetch(url);
    json = await response.json();
  } catch (error) {
    return error;
  } finally {
 
    return json;
  }
};

export { FetService };
