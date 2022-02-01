const set = (name, value) => {
  window.sessionStorage.setItem(name, JSON.stringify(value));
};

const get = (name) => JSON.parse(window.sessionStorage.getItem(name));

const clear = (name) => window.sessionStorage.removeItem(name);

const SessionService = {
  set,
  get,
  clear,
};

export default SessionService;
