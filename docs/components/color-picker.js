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

// Append Child
function a(target, obj) {
  if (typeof target === "string") {
    const el = document.querySelector(`.${target}`)
    el.appendChild(obj);
  } else {
    target.appendChild(obj);
  }
}

// Add Class
function ac(obj, classList) {
  classList.forEach((c) => {
    obj.classList.add(c);
  });
}

// Add Data
function ad(obj, key, value) {
  obj.dataset[key] = value;
}

// Debug
function db(value) {
  if (debug === true) {
    console.log(value);
  }
}

// Document Create
function dc(name) {
  return document.createElement(name);
}

// Get Element By Class Name
function el(className) {
  return document.querySelector(`.${className}`);
}

// Get Float From DataSet Key From Event
function gf(key, event) {
  return parseFloat(event.target.dataset[key])
}

// Get Int From DataSet Key From Event
function gi(key, event) {
  return parseInt(event.target.dataset[key], 10)
}

// Get String From DataSet Key From Event
function gs(key, event) {
  return event.target.dataset[key]
}

// Get Value From an Event
function gv(event) {
  return parseFloat(event.target.value)
}

// Get Integer from Value of an Event
function giv(event) {
  return parseInt(event.target.value, 10)
}

// Set InnerHTML
function html(obj, str) {
  obj.innerHTML = str;
}

// Set Attribute
function sa(obj, key, value) {
  obj.setAttribute(key, value);
}

const template = `
<h2 class="palette-name"></h2>
<fieldset class="base-wrapper">
  <legend>Base</legend>
  <div class="base-sliders"></div>
</fieldset>
<fieldset class="settings-wrapper">
  <legend>Settings</legend>
  <div class="number-of-colors-wrapper">
    <label for="number-of-colors-selector-label">
      Number of Colors:
    </label>
    <select 
      name="number-of-colors-selector" 
      class="number-of-colors-selector"
      data-kind="number-of-colors-selector"
    ></select>
  </div>
</fieldset>
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
      "base": { "l": 50, "c": 0.0, "h": 0 },
      "colors": [],
      "key": "light",
    },
    { 
      "base": { "l": 20, "c": 0.0, "h": 0 },
      "colors": [],
      "key": "dark",
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
    this.loadData();
    this.requestRender = this.renderPage.bind(this);
    this.styleSheets = {};
    this.initStyleSheets();
    this.updateStyleSheets();
    this.initTemplate();
    this.addListeners();
    this.renderPage();
  }

  addListeners() {
    this.addEventListener('click', (event) => {
      this.updateData.call(this, event);
     })
    this.addEventListener('input', (event) => {
      this.updateData.call(this, event);
    })
  }

  getAspectIndex(key) {
    return config
      .aspects
      .findIndex((aspect) => {
        return aspect.key === key
      });
  }

  getAspectMax(key) {
    const index = this.getAspectIndex(key);
    return config.aspects[index].max;
  }

  getAspectStep(key) {
    const index = this.getAspectIndex(key);
    return config.aspects[index].max / 10000;
  }

  initBaseSliders() {
    for (let index in config.aspects) {
      const key = config.aspects[index].key;
      const token = `base-slider`;
      const connector = `${token}-${index}`;
      const div = dc('div');
      ac(div, [
        `${token}-wrapper`, 
        `${token}-wrapper-${index}`
      ]);
      const label = dc('label');
      ac(label, [
        `${token}-label`, 
        `${token}-label-${index}`
      ]);
      sa(label, 'for', connector);
      html(label, config.aspects[index].name)
      const slider = dc('input');
      ac(slider, [
        `${token}`, 
        `${token}-${index}`
      ]);
      sa(slider, 'name', connector);
      sa(slider, 'type', 'range');
      sa(slider, 'min', 0);
      sa(slider, 'max', this.getAspectMax(key));
      sa(slider, 'step', this.getAspectStep(key).toFixed(5));
      slider.value = p.modes[p.activeMode].base[key]
      ad(slider, 'kind', 'base');
      ad(slider, 'mode', p.activeMode);
      ad(slider, 'aspect', key);
      a(div, label);
      a(div, slider);
      a('base-sliders', div);
    }
  }

  initBwVars() {
    // using local modes here since there
    // are really only these two. (it would
    // be overly complicated to figure out what
    // would need to happen for others. 
    const localModes = ['light', 'dark'];
    //const out = [":root {"];
    const lines = [];
    localModes.forEach((mode) => {
      for (let amount = 10; amount < 100; amount += 10) {
        let num1 = 100;
        let num2 = 0;
        if (mode === 'dark') {
          num1 = 0;
          num2 = 100;
        }
        lines.push(`--${mode}-color-bw-match-${amount}: oklch(${num1}% 0 0 / ${amount}%);`);
        lines.push(`--${mode}-color-bw-reverse-${amount}: oklch(${num2}% 0 0 / ${amount}%);`);
      }
    })
    const out = `:root {
${lines.sort().join("\n")}
}`;
    this.styleSheets['bwVars'].innerHTML = out;
  }

  initNumberOfColors() {
    for (let index = 0; index < config.maxNumberOfColors; index ++) {
     const opt = dc('option');
      html(opt, index + 1);
      if (index + 1 === p.numberOfColors) {
        opt.selected = true;
      } 
      a(el('number-of-colors-selector'), opt);
    }
  }


  initPickerStyles() {
    this.styleSheets['pickerStyles'].innerHTML = `
* {
  margin: 0;
}
.base-slider {
  accent-color: var(--light-color-bw-match-20);
  height: 1px;
}
body { 
  font-family: system-ui;
  background-color: var(--color-base); 
  color: var(--color-primary);
}
  `;
  }

  initStyleSheets() {
    const sheetNames = [
      'bwVars',
      'baseColors',
      'pickerStyles', 
    ];
    sheetNames.forEach((name) => {
      this.styleSheets[name] = document.createElement('style');
      document.body.appendChild(this.styleSheets[name]);
    });
    this.initBwVars();
    this.initPickerStyles();
  }

  initTemplate() {
    const templateEl = this.ownerDocument.createElement('template')
    templateEl.innerHTML = template;
    const content = templateEl.content.cloneNode(true);
    this.append(content);
    this.initBaseSliders();
    this.initNumberOfColors();
  }

  loadData() {
    db("Loading data");
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
    db("Loading defaults");
    data = {
      "palettes": [defaultPalette],
      "schemaVersion": [1,0,0]
    };
  }

  renderDebuggingInfo() {
    if (debug === true) {
      const sheets = [];
      for (let sheetName in this.styleSheets) {
        sheets.push(`<h4>${sheetName}</h4>`);
        sheets.push(`<pre class="debug-stylesheet">${this.styleSheets[sheetName].innerHTML}</pre>`);
      };
      el('debug').innerHTML = `
<h2>Debugging</h2>
<h3>Palette</h3>
<pre>${JSON.stringify(p, null, 2)}</pre>
<h3>Config</h3>
<pre>${JSON.stringify(config, null, 2)}</pre>
<h3>Style Sheets</h3>
${sheets.join("\n")}
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

  updateColorVarsStyleSheet() {
    const lines = [
      "--color-base: var(--light-color-base);",
      "--color-primary: #333;"
    ];
    p.modes.forEach((modeData) => {
      const mode = modeData.key;
      const l = modeData.base.l;
      const c = modeData.base.c;
      const h = modeData.base.h;
      lines.push(`--${mode}-color-base: oklch(${l}% ${c} ${h});`);
      //db(modeData);
    });
    this.styleSheets['baseColors'].innerHTML = `
:root {
${lines.sort().join("\n")}
}`;
  }

  updateData(event) {
    if (event.target.dataset.kind === "base") {
      const mode = gi('mode', event);
      const aspect = gs('aspect', event);
      p.modes[mode].base[aspect] = gv(event);
    }
    else if (event.target.dataset.kind === "number-of-colors-selector") {
      const checkNum = giv(event);
      if (p.numberOfColors !== checkNum) {
        p.numberOfColors = checkNum;
      }
    }
    this.updateStyleSheets();
    window.requestAnimationFrame(this.requestRender);
  }

  updateStyleSheets() {
    this.updateColorVarsStyleSheet();
  }

}

customElements.define('color-picker', Picker);

