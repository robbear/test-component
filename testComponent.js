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

  attachedCallback() {
    this.timeStamp('Entering attachedCallback');
    this.log('attachedCallback');

    if (super.attachedCallback) {
      super.attachedCallback();
    }
  }

  detachedCallback() {
    this.timeStamp('Entering detachedCallback');
    this.log('detachedCallback');

    if (super.detachedCallback) {
      super.detachedCallback();
    }
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.timeStamp('Entering attributeChangedCallback');
    this.log(`attributeChangedCallback: name=${name} oldVal=${oldVal} newVal=${newVal}`);

    if (super.attributChangedCallback) {
      super.attributeChangedCallback(name, oldVal, newVal);
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
