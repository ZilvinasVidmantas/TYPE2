
const set = (name: string, value: NonNullable<any>): void => {
  window.localStorage.setItem(name, JSON.stringify(value));
};

const get = (name: string): ReturnType<typeof JSON.parse> => {
  const data = window.localStorage.getItem(name);
  if (typeof data === 'string') {
    return JSON.parse(data);
  }

  return null;
};

const clear = (name: string): void => window.localStorage.removeItem(name);

const SessionService = {
  set,
  get,
  clear,
};

export default SessionService;
