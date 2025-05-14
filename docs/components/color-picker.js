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

// Append Object To Target
function a(child, parent) {
  if (typeof parent === "string") {
    const el = document.querySelector(`.${parent}`)
    el.appendChild(child);
  } else {
    parent.appendChild(child);
  }
}

// Add classes to Object
function ac(data, obj) {
  if (typeof data === "string") {
    obj.classList.add(data);
  } else {
    data.forEach((c) => {
      obj.classList.add(c);
    });
  }
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

// Get Float from DataSet Key From Event
function gdf(event, key) {
  return parseFloat(event.target.dataset[key])
}

// Get Int from DataSet Key From Event
function gdi(event, key) {
  return parseInt(event.target.dataset[key], 10)
}

// Get String from DataSet Key From Event
function gds(event, key) {
  return event.target.dataset[key]
}

// Get Float Value from an Event
function gvf(event) {
  return parseFloat(event.target.value)
}

// Get Integer Value from an Event
function gvi(event) {
  return parseInt(event.target.value, 10)
}

// Get String Value from an Event
function gvs(event) {
  return parseInt(event.target.value, 10)
}

// Set InnerHTML
function html(obj, str) {
  obj.innerHTML = str;
}

// Remove classes from Object
function rc(data, obj) {
  if (typeof data === "string") {
    obj.classList.remove(data);
  } else {
    data.forEach((c) => {
      obj.classList.remove(c);
    });
  }
}

// Set Attribute
function sa(obj, key, value) {
  obj.setAttribute(key, value);
}

// Make CSS strings lower case for consistency
// and scrub them some. Note that this
// won't catch everything. A full 
// CSS parser is outside the scope of
// this tool. 
function scrubStyle(input) {
  return input
    .replace(" ", "-")
    .replace(":", "-")
    .replace("{", "-")
    .replace("}", "-")
    .replace(";", "-")
    .replace("(", "-")
    .replace(")", "-")
    .toLowerCase()
}

const template = `
<!--
<h2 class="palette-name"></h2>
-->
<fieldset class="base-wrapper settings-fieldset">
  <legend>Base</legend>
  <div class="base-sliders"></div>
</fieldset>
<fieldset class="settings-wrapper settings-fieldset">
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
  <div class="view-light-dark-wrapper">
    <span class="view-mode-buttons-text">Mode:</span>
    <div class="view-mode-buttons"></div>
  </div>
</fieldset>
<div class="main-content">
  <div class="example-content">
    <h1></h1>
  </div>
  <div class="colors-content-wrapper">
  </div>
</div>
<div class="debug"></div>
`;

const colorElementTemplate = `
<div class="color-name">Color Name</div>
<select class="color-rotation-selector"></select>
<div>Hue Groups Go Here</div>
`;

const defaultColors = [
  {
    "chroma": 0,
    "fadedValues": [40, 80],
    "lightLevel": 0,
    "hueRotationsIndex": 3,
    "hueRotationCount": 0
  },
  {
    "chroma": 0,
    "fadedValues": [10, 20],
    "lightLevel": 1,
    "hueRotationsIndex": 3,
    "hueRotationCount": 0
  },
  {
    "chroma": 0,
    "fadedValues": [40, 80],
    "lightLevel": 4,
    "hueRotationsIndex": 3,
    "hueRotationCount": 0
  },
  {
    "chroma": 0,
    "fadedValues": [10, 20],
    "lightLevel": 5,
    "hueRotationsIndex": 3,
    "hueRotationCount": 0
  }
];

const defaultPalette = {
  "activeMode": 0,
  "aspectOrder": ["l", "c", "h"],
  "aspects": {
    "l": { "name": "lightness", "max": 100 },
    "c": { "name": "chroma", "max": 0.3 },
    "h": { "name": "hue", "max": 360 }
  },
  "baseColorName": "color-base",
  "bwNames": ["bw-match", "bw-reverse"],
  "colorNames": [
    "color-primary",
    "color-secondary",
    "color-accent",
    "color-highlight",
    "color-info",
    "color-warning",
    "color-extra",
    "color-bonus"
  ],
  "fadedNames": ["faded", "faded-2"],
  "hueRotations": [45, 60],
  "lightLevels": 6,
  "maxNumberOfColors": 8,
  "maxNumberOfFaded": 2,
  "modes": [
    {
      "base": { "l": 60, "c": 0.0, "h": 0 },
      "bwValues": [100, 0],
      "category": 3,
      "colors": [],
      "name": "Light",
    },
    {
      "base": { "l": 100, "c": 0.0, "h": 0 },
      "bwValues": [100, 0],
      "category": 2,
      "colors": [],
      "name": "High-Contrast Light",
    },
    { 
      "base": { "l": 20, "c": 0.0, "h": 0 },
      "bwValues": [0, 100],
      "category": 0,
      "colors": [],
      "name": "Dark",
    },
    { 
      "base": { "l": 0, "c": 0.0, "h": 0 },
      "bwValues": [0, 100],
      "category": 1,
      "colors": [],
      "name": "High-Contrast Dark",
    }
  ],
  "name": "Color Palette",
  "numberOfColors": 5,
  "numberOfFaded": 2,
  "preferredMode": 0,
}

const config = {
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

  getAspectMax(key) {
    return p.aspects[key].max;
  }

  getAspectStep(key) {
    return p.aspects[key].max / 10000;
  }

  getColorL(mode, color) {
    return this.getLightLevelValues()[p.modes[mode].colors[color].lightLevel];
  }

  getColorC(mode, color) {
    return p.modes[mode].colors[color].chroma;
  }

  getLightLevelValues() {
    const lightLevelValues = [];
    for (let level = 0; level <= 100; level += Math.floor(100 / (p.lightLevels - 1))) {
      lightLevelValues.push(level);
    }
    return lightLevelValues;
  }

  // TODO: Rename to getColorH
  getHueForColor(mode, color) {
    const baseHue = p.modes[mode].base.h;
    const rotationMultiplier = p.hueRotations[p.modes[mode].colors[color].hueRotationsIndex];
    const rotationCount = p.modes[mode].colors[color].hueRotationCount;
    const rotationAdjustment = rotationMultiplier * rotationCount;
    let colorHue = baseHue + rotationAdjustment;
    if (colorHue > 360) {
      colorHue -= 360
    }
    return colorHue;
  }

  initBaseSliders() {
    for (let key in p.aspects) {
      const token = `base-slider`;
      const connector = `${token}-${key}`;
      const div = dc('div');
      ac([
        `${token}-wrapper`, 
        `${token}-wrapper-${key}`
      ], div);
      const label = dc('label');
      ac([
        `${token}-label`, 
        `${token}-label-${key}`
      ], label);
      sa(label, 'for', connector);
      html(label, p.aspects[key].name)
      const slider = dc('input');
      ac([
        `${token}`, 
        `${token}-${key}`
      ], slider);
      sa(slider, 'name', connector);
      sa(slider, 'type', 'range');
      sa(slider, 'min', 0);
      sa(slider, 'max', this.getAspectMax(key));
      sa(slider, 'step', this.getAspectStep(key).toFixed(5));
      slider.value = p.modes[p.activeMode].base[key]
      ad(slider, 'kind', 'base');
      ad(slider, 'aspect', key);
      a(label, div);
      a(slider, div);
      a(div, 'base-sliders');
    }
  }

  initStaticBwVars() {
    const lines = [];
    p.modes.forEach((data, mode) => {
      lines.push(`--${scrubStyle(data.name)}-${p.bwNames[0]}: oklch(${data.bwValues[0]}% 0 0);`);
      lines.push(`--${scrubStyle(data.name)}-${p.bwNames[1]}: oklch(${data.bwValues[1]}% 0 0);`);
      for (let amount = 10; amount < 100; amount += 10) {
        lines.push(`--${scrubStyle(data.name)}-${p.bwNames[0]}-${amount}: oklch(${data.bwValues[0]}% 0 0 / ${amount}%);`);
        lines.push(`--${scrubStyle(data.name)}-${p.bwNames[1]}-${amount}: oklch(${data.bwValues[1]}% 0 0 / ${amount}%);`);
      }
    })
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['staticBwVars'].innerHTML = out;
  }

  initColors() {
    // Clear it first so this can be used if the
    // number of colors changes. 
    const wrapper = el('colors-content-wrapper');  
    html(wrapper, "");
    for (let index = 0; index < p.numberOfColors; index ++) {
      const colorEl = dc('div'); 
      ac(['color-wrapper', `color-wrapper-${index}`], colorEl);
      html(colorEl, colorElementTemplate);
      a(colorEl, wrapper);
      const colorNameEl = colorEl.querySelector('.color-name');
      ac([`color-name-${index}`], colorNameEl);
      ac([`color-name-${p.colorNames[index]}`], colorNameEl);
    }
  }

  initModeButtons() {
    // TODO: Figure out what the proper
    // aria label is to add to indicate 
    // the active button.
    p.modes.forEach((data, mode) => {
      const button = dc('button');
      html(button, data.name);
      ac('mode-button', button);
      ac(`mode-button-${mode}`, button);
      ad(button, 'kind', 'mode-button');
      ad(button, 'mode', mode);
      a(button, el('view-mode-buttons'));
    })
  }

  initNumberOfColors() {
    for (let index = 0; index < p.maxNumberOfColors; index ++) {
     const opt = dc('option');
      html(opt, index + 1);
      if (index + 1 === p.numberOfColors) {
        opt.selected = true;
      } 
      a(opt, el('number-of-colors-selector'));
    }
  }

  initStyleSheets() {
    const sheetNames = [
      'staticBwVars',
      'dynamicBwVars',
      'dynamicColorSwitches',
      'dynamicColorVars',
      'dynamicPickerStyles', 
    ];
    sheetNames.forEach((name) => {
      this.styleSheets[name] = document.createElement('style');
      document.body.appendChild(this.styleSheets[name]);
    });
    this.initStaticBwVars();
  }

  initTemplate() {
    const templateEl = this.ownerDocument.createElement('template')
    templateEl.innerHTML = template;
    const content = templateEl.content.cloneNode(true);
    this.append(content);
    this.initBaseSliders();
    this.initModeButtons();
    this.initNumberOfColors();
    this.initColors();
    this.updateModeButtonStyles()
  }

  loadData() {
    const checkData = localStorage.getItem(
      config.storageName
    );
    if (checkData && checkData.version[0] === 1) {
      db(`Loaded colors from storage`);
      p = checkData;
    } else {
      this.loadDefaults();
    }
    p = data.palettes[0];
  }

  loadDefaults() {
    data = {
      "palettes": [defaultPalette],
      "schemaVersion": [1,0,0]
    };
    data.palettes[0].modes.forEach((modeData, mode) => {
      for (let index = 0; index < data.palettes[0].maxNumberOfColors; index ++) {
        modeData.colors.push(defaultColors[mode]);
      }
    });
    db("Loaded default colors");
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
    this.reloadStyleSheets();
    this.renderPaletteName();
    this.renderDebuggingInfo();
  }

  renderPaletteName() {
    //el('palette-name').innerHTML = p.name;
  }

  reloadDynamicBwVars() {
    const lines = [];
    const data = p.modes[p.activeMode];
    lines.push(`--${p.bwNames[0]}: var(--${scrubStyle(data.name)}-${p.bwNames[0]});`);
    lines.push(`--${p.bwNames[1]}: var(--${scrubStyle(data.name)}-${p.bwNames[1]});`);
    for (let amount = 10; amount < 100; amount += 10) {
      lines.push(`--${p.bwNames[0]}-${amount}: var(--${scrubStyle(data.name)}-${p.bwNames[0]}-${amount});`);
      lines.push(`--${p.bwNames[1]}-${amount}: var(--${scrubStyle(data.name)}-${p.bwNames[1]}-${amount});`);
    }
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['dynamicBwVars'].innerHTML = out;
  }

  reloadDynamicColorSwitches() {
    const lines = [];
    const activeModeKey = scrubStyle(p.modes[p.activeMode].name);
    for (let index = 0; index < p.numberOfColors; index ++) {
      const name = p.colorNames[index];
      lines.push(`--${name}: var(--${activeModeKey}-${name});`);
    }
    lines.push(`--${p.baseColorName}: var(--${activeModeKey}-${p.baseColorName});`);
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['dynamicColorSwitches'].innerHTML = out;
  }

  reloadDynamicColorVars() {
    const lines = [];
    p.modes.forEach((data, mode) => {
      const category = data.category;
      const modeName = scrubStyle(data.name);
      const lBase = data.base.l;
      const cBase = data.base.c;
      const hBase = data.base.h;
      lines.push(`--${modeName}-${p.baseColorName}: oklch(${lBase}% ${cBase} ${hBase});`);
      for (let index = 0; index < p.numberOfColors; index ++) {
        const colorName = p.colorNames[index];
        const l = this.getColorL(mode, index);
        const c = this.getColorC(mode, index);
        const h = 200;
        //const h = this.getHueForColor(mode, index);
        lines.push(`--${modeName}-${colorName}: oklch(${l}% ${c} ${h});`);
      }
    });
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['dynamicColorVars'].innerHTML = out;
  }

  reloadDynamicPickerStyles() {
    const templateList = p.colorNames.map((name, index) => {
      if (index < p.numberOfColors) {
        return `* COLOR${index + 1} = ${p.colorNames[index]}`; 
      }
    }).join("\n").trim();
    let out = `
/*
* TODO: Move this to external insturctions
* Color Picker Style Template Colors:
COLORS
*/

*, 
*::before, 
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
.active-mode-button {
  outline: 1px solid var(--MODE-COLOR3);
  border-radius: 0.3rem;
}
.base-slider {
  accent-color: var(--BWREVERSE-40);
  height: 1px;
}
body { 
  font-family: system-ui;
  background-color: var(--BASECOLOR); 
  color: var(--COLOR1);
}
.content-wrapper {
  margin-inline: auto;
  width: min(100vw - 1.4rem, 39rem);
}
.flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 1em);
}
pre{
  font-size: 0.7rem;
  white-space: pre-wrap; 
  overflow-wrap: anywhere;
  overflow-x: auto;
  overscroll-behavior-x: auto;
}
.settings-fieldset {
  border: 1px solid var(--BWREVERSE-20);
  border-radius: 0.3rem;
}
`;
    out = out.replaceAll("MODE", scrubStyle(p.modes[p.activeMode].name));
    out = out.replaceAll("BWMATCH", scrubStyle(p.bwNames[0]));
    out = out.replaceAll("BWREVERSE", scrubStyle(p.bwNames[1]));
    out = out.replaceAll("BASECOLOR", scrubStyle(p.baseColorName));
    for (let index = 0; index < p.maxNumberOfColors; index ++) {
      if (index < p.numberOfColors) {
        out = out.replaceAll(`COLOR${index+1}`, p.colorNames[index]);
      } else {
        out = out.replaceAll(`COLOR${index+1}`, `UNKNOWN-COLOR${index+1}`);
      }
    }
    out = out.replaceAll("COLORS", templateList);
    this.styleSheets['dynamicPickerStyles'].innerHTML = out;
  }

  updateData(event) {
    if (event.target.dataset.kind === "base") {
      const aspect = gds(event, 'aspect');
      p.modes[p.activeMode].base[aspect] = gvf(event);
    } else if (event.target.dataset.kind === "number-of-colors-selector") {
      const checkNum = gvi(event);
      if (p.numberOfColors !== checkNum) {
        p.numberOfColors = checkNum;
        this.initColors();
      }
    } else if (event.target.dataset.kind === "mode-button") {
      p.activeMode = gdi(event, "mode");
      this.updateModeButtonStyles()
      this.updateBaseSliders();
    }
    window.requestAnimationFrame(this.requestRender);
  }

  updateBaseSliders() {
    for (let key in p.aspects) {
      const slider = el(`base-slider-${key}`);
      slider.value = p.modes[p.activeMode].base[key];
    }
  }

  updateModeButtonStyles() {
    p.modes.forEach((data, index) => {
      const button = el(`mode-button-${index}`);
      if (index === p.activeMode) {
        ac('active-mode-button', button);
      } else {
        rc('active-mode-button', button);
      }
    });
  }

  reloadStyleSheets() {
    this.reloadDynamicPickerStyles();
    this.reloadDynamicColorSwitches();
    this.reloadDynamicColorVars();
    this.reloadDynamicBwVars();
  }

}

customElements.define('color-picker', Picker);

