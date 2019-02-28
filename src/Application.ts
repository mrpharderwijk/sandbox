import FlattenFind from './FlattenFind/FlattenFind';
import FlattenUnique from './FlattenUnique/FlattenUnique';

class Application {
  constructor() {
    const output = [FlattenUnique.retrieveValue()];
    this.showOutput(output);
  }

  showOutput(output: any) {
    output.forEach(output => {
      document.getElementById('output').innerHTML = `${JSON.stringify(output, undefined, 2)}<br/><br/><hr>`;
    });
  }
}

export default new Application();
