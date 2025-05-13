/* *************************************************
 *
 * MIT License (with Alan's Note)
 * https://www.alanwsmith.com/
 * 
 * Copyright (c) 2025 Alan W. Smith
 * 
 * Hello! Welcome to Color Picker. This code is
 * licensed with the MIT License (details below). 
 * There's no requirement that you keep the link 
 * to my site at the bottom of the component. 
 * But, I worked really hard on this and would 
 * appreciate it if you did.
 * 
 * Thanks, and enjoy your colors!
 * 
 * -a
 * 
 * Permission is hereby granted, free of charge, to 
 * any person obtaining a copy of this software and 
 * associated documentation files (the "Software"), 
 * to deal in the Software without restriction, 
 * including without limitation the rights to use, 
 * copy, modify, merge, publish, distribute, 
 * sublicense, and/or sell copies of the Software, 
 * and to permit persons to whom the Software is 
 * furnished to do so, subject to the following 
 * conditions:
 * 
 * The above copyright notice and this permission 
 * notice shall be included in all copies or 
 * substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY 
 * OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
 * LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, 
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
 * SOFTWARE.
 * 
 * ****************************************************/

function dc(name) {
  return document.createElement(name);
}






class Picker extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.styleSheets = {};
    this.attachStyleSheets();
    this.updatePickerStyles();
    this.updateMainStyleSheets();
  }

  attachStyleSheets() {
    const sheetNames = [
      'baseColors',
      'pickerStyles', 
    ];
    sheetNames.forEach((name) => {
      this.styleSheets[name] = document.createElement('style');
      document.body.appendChild(this.styleSheets[name]);
    });
  }

  updatePickerStyles() {
    this.styleSheets['pickerStyles'].innerHTML = `
    body { background-color: var(--color-base); };
  `;
  }

  updateMainStyleSheets() {
    this.updateBaseColorsStyleSheet();
  }

  updateBaseColorsStyleSheet() {
    console.log("ping");
    this.styleSheets['baseColors'].innerHTML = `
:root {
--color-base: oklch(20% 0 0); 
}
    `;
  }


}


customElements.define('color-picker', Picker);

