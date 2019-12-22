class localStorageMock {
  store: object;

  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key:string) {
    return this.store[key] || null;
  }

  setItem(key:string, value:any) {
    this.store[key] = value.toString();
  }

  removeItem(key:string) {
    delete this.store[key];
  }
};

export default localStorageMock