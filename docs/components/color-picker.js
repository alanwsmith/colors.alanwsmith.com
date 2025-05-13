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

let p = {};

function a(target, obj) {
  if (typeof target === "string") {
    const el = document.querySelector(`.${target}`)
    el.appendChild(obj);
  } else {
    target.appendChild(obj);
  }
}

function ac(obj, classList) {
  classList.forEach((c) => {
    obj.classList.add(c);
  });
}

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

function html(obj, str) {
  obj.innerHTML = str;
}

function sa(obj, key, value) {
  obj.setAttribute(key, value);
}

const template = `
<h2 class="palette-name"></h2>
<div class="base-wrapper">
  <fieldset>
    <legend>Base</legend>
    <div class="base-sliders"></div>
  </fieldset>
</div>
<div class="debug"></div>
`;

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
  "activeMode": 0,
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
  "fadedNames": ["fader", "fader-2"],
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
    this.initTemplate();
    this.updateData();
    this.renderPage();
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

  initBaseSliders() {
    for (let index in config.aspects) {
      const key = `base-slider`;
      const connector = `${key}-${index}`;

      const div = dc('div');
      ac(div, [`${key}-wrapper`, `${key}-wrapper-${index}`]);

      const label = dc('label');
      ac(label, [`${key}-label`, `${key}-label-${index}`]);
      sa(label, 'for', connector);
      html(label, config.aspects[index].name)

      const slider = dc('input');
      ac(slider, [`${key}`, `${key}-${index}`]);
      sa(slider, 'name', connector);
      sa(slider, 'min', 0);
      sa(slider, 'type', 'range');

      //sa(slider, 'max', s.configV2.aspects[aspect].max);
      //slider.setAttribute('step', s.getStep(aspect));

      // const connector = `background-${aspect}`;
      // const label = dc('label');
      // label.setAttribute('for', connector);
      // label.classList.add('color-primary');
      // label.innerHTML = s.configV2.aspects[aspect].name;
      // this.el('sliders').appendChild(label);

      // const slider = dc('input');
      // slider.setAttribute('name', connector);
      // slider.setAttribute('type', 'range');
      // slider.setAttribute('min', 0);
      // slider.setAttribute('max', s.configV2.aspects[aspect].max);
      // slider.setAttribute('step', s.getStep(aspect));
      // slider.value = s.getBackgroundValue(aspect, s.visibleModeIndex());
      // slider.dataset.kind = 'background';
      // slider.dataset.aspect = aspect;
      // slider.dataset.mode = s.visibleModeIndex();
      // slider.style.accentColor = `var(--color-bw-match-80)`;
      // this.el('sliders').appendChild(slider);

      a(div, label);
      a(div, slider);
      a('base-sliders', div);
    }
  }

  initTemplate() {
    const templateEl = this.ownerDocument.createElement('template')
    templateEl.innerHTML = template;
    const content = templateEl.content.cloneNode(true);
    this.append(content);
    this.initBaseSliders();
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
    p = data.palettes[0];
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
<h2>Debugging</h2>
<h3>Palette</h3>
<pre>${JSON.stringify(p, null, 2)}</pre>
<h3>Config</h3>
<pre>${JSON.stringify(config, null, 2)}</pre>
`;
    }
  }

  renderPage() {
    this.renderPaletteName();
    this.renderDebuggingInfo();
  }

  renderPaletteName() {
    el('palette-name').innerHTML = p.name;
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

