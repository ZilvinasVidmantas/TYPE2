const set = (name, value) => {
  window.localStorage.setItem(name, JSON.stringify(value));
};

const get = (name) => JSON.parse(window.localStorage.getItem(name));

const clear = (name) => window.localStorage.removeItem(name);

const SessionService = {
  set,
  get,
  clear,
};

export default SessionService;
