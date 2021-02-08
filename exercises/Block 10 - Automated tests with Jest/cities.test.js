const {
  getCities,
  removeCity,
  retrieveCitiesFromCache,
  requestCities,
  isCity,
  resetCities,
} = require('./cities');

describe('Retrieving cities from cache', () => {
  beforeEach(() => {
    retrieveCitiesFromCache();
  });

  afterEach(() => {
    resetCities();
  });

  it('Should have only 1 city after remove BH', () => {
      removeCity('Belo Horizonte');
      expect(getCities().length).toBe(1);
  });

  it('Should have all cities after retrieving from cache', () => {
      expect(getCities().length).toBe(2);
  });
});

describe('Requesting cities from API' , () => {
    beforeEach(() => {
        return requestCities();
    });

    afterEach(() => {
        resetCities();
    });

    it('Should have 8 cities after requesting from API', () => {
        expect(getCities().length).toBe(8);
    });

    it('Should have the city of Sao Paulo', () => {
        expect(isCity('Sao Paulo')).toBeTruthy();
    });

    it('Should have the city of Belo Horizonte', () => {
        expect(isCity('Belo Horizonte')).toBeTruthy();
    });
});