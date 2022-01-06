const set = (name, value) => {
  window.sessionStorage.setItem(name, JSON.stringify(value));
};

const get = (name) => JSON.parse(window.sessionStorage.getItem(name));

const SessionService = { set, get };

export default SessionService;
