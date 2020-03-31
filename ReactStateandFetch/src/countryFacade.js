//Add imports here

const countryFacade = () => {

  const getLabels = () => {
    //TODO: Get Labels from server
    return fetch("http://localhost:3333/labels").then(handleHttpErrors);
  }

  const getCountries = () => {
    //TODO: Get Countries from server
    return fetch("http://localhost:3333/countries").then(handleHttpErrors);
  }
  return {
    getLabels,
    getCountries
  }
}

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

export default  countryFacade();