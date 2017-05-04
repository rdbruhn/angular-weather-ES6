import WeatherModule from './weather'
import WeatherController from './weather.controller';
import WeatherComponent from './weather.component';
import WeatherTemplate from './weather.html';

describe('Weather', () => {
  let $rootScope, makeController, $state, $http, $componentController, Weather;

  beforeEach(window.module(WeatherModule));
  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $http = $injector.get('$http');
    $componentController = $injector.get('$componentController');
    Weather = $injector.get('Weather');
    makeController = () => {
      return new WeatherController(Weather);
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(WeatherTemplate).to.match(/\s?\Angular Weather\s?/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = WeatherComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(WeatherTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(WeatherController);
      });
  });
});
