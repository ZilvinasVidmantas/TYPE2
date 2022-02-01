const serverURL = 'http://localhost:3000';

class API {
  static getFurniture = (success, failure) => {
    setTimeout(() => {
      fetch(`${serverURL}/furniture`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
    }, 1000);
  }

  static deleteFurniture = (id, success, failure) => {
    fetch(`${serverURL}/furniture/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }
}

// API.getFurniture(
//   (duomenys) => console.log('gavau duomenis', duomenys), // success
//   (klaida) => console.error('klaida!!!!', klaida) // failure
// )


// API.deleteFurniture(
//   '1', // id
//   (duomenys) => console.log('gavau duomenis', duomenys), // success
//   (klaida) => console.error('klaida!!!!', klaida) // failure
// )
