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

let data = {};

let debug = true;

function d(value) {
  if (debug === true) {
    console.log(value);
  }
}

function dc(name) {
  return document.createElement(name);
}

function el(className) {
  return document.querySelector(`.${className}`);
}

const template = `
<div class="debug"></div>
`;

const activeMode = 0;

const defaultColors = {
  "dark": {
    "chroma": 0.0,
    "fadedValues": [40, 80],
    "lightLevel": 1,
    "hueRotations": 3,
    "hueRotation": 0
  },
  "light": {
    "chroma": 0.0,
    "fadedValues": [40, 80],
    "lightLevel": 1,
    "hueRotations": 3,
    "hueRotation": 0
  }
};

const defaultPalette = {
  "fadedNames": ["fader", "fader-2"],
  "colorNames": [
    "primary",
    "secondary",
    "accent",
    "highlight",
    "info",
    "warning",
    "extra",
    "bonus"
  ],
  "modes": [
    {
      "base": { "l": 90, "c": 0.0, "h": 0 },
      "colors": [],
      "key": "light",
      "name": "Light",
    },
    { 
      "base": { "l": 20, "c": 0.0, "h": 0 },
      "colors": [],
      "key": "dark",
      "name": "Dark",
    }
  ],
  "name": "Color Palette",
  "numberOfColors": 5,
  "numberOfFaded": 2,
  "preferredMode": 0,
}

const config = {
  "aspects": [
    { "key": "l", "name": "lightness", "max": 100 },
    { "key": "c", "name": "chroma", "max": 0.3 },
    { "key": "h", "name": "hue", "max": 360 }
  ],
  "fadedKeys": ["f1", "f2"],
  "hueRotations": [30, 45, 60, 90],
  "lightLevels": [0, 20, 40, 60, 80, 100],
  "maxNumberOfColors": 8,
  "validSchemeVersions": [[1,0,0]],
  "storageName": "colorPickerData"
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
    this.loadData();
    this.renderTemplate();
    this.updateData();
    this.updatePage();
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

  loadData() {
    d("Loading data");
    const checkData = localStorage.getItem(
      config.storageName
    );
    if (checkData && checkData.version[0] === 1) {

    } else {
      this.loadDefaults();
    }
  }

  loadDefaults() {
    d("Loading defaults");
    data = {
      "palettes": [defaultPalette],
      "schemaVersion": [1,0,0]
    };
  }

  renderDebuggingInfo() {
    if (debug === true) {
      el('debug').innerHTML = `
<h2>Debuggin</h2>
<h3>Data</h3>
<pre>${JSON.stringify(data, null, 2)}</pre>
<h3>Config</h3>
<pre>${JSON.stringify(config, null, 2)}</pre>
`;
    }
  }

  renderTemplate() {
    const templateEl = this.ownerDocument.createElement('template')
    templateEl.innerHTML = template;
    const content = templateEl.content.cloneNode(true);
    this.append(content);
  }

  updateBaseColorsStyleSheet() {
    d("ping");
    this.styleSheets['baseColors'].innerHTML = `
:root {
--color-base: oklch(20% 0 0); 
--color-primary: oklch(90% 0 0 );
}
    `;
  }

  updateData() {
  }

  updateMainStyleSheets() {
    this.updateBaseColorsStyleSheet();
  }

  updatePage() {
    this.renderDebuggingInfo();
  }

  updatePickerStyles() {
    this.styleSheets['pickerStyles'].innerHTML = `
* {
  margin: 0;
}

body { 
  font-family: system-ui;
  background-color: var(--color-base); 
  color: var(--color-primary);
};
  `;
  }

}


customElements.define('color-picker', Picker);

