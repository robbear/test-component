import ElementBase from 'core-component-mixins/src/ElementBase';

export default class TestComponent extends ElementBase.compose() {

  get template() {
    return `
      <style>
      :host {
      }
      #contentContainer {
        background-color: lightblue;
      }
      </style>
      <div id="contentContainer">
        <p>This is test-component's content</p>
      </div>
    `;
  }

  createdCallback() {
    this.timeStamp('Entering createdCallback');
    this.log('createdCallback');

    if (super.createdCallback) {
      super.createdCallback();
    }
  }

  timeStamp(label) {
    if (!console.timeStamp) {
      return;
    }

    console.timeStamp(label);
  }
}

document.registerElement('test-component', TestComponent);
