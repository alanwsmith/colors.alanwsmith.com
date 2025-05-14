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

// Add ClassList to Object
function ac(classList, obj) {
  if (typeof classList === "string") {
    obj.classList.add(classList);
  } else {
    classList.forEach((c) => {
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
function gfd(key, event) {
  return parseFloat(event.target.dataset[key])
}

// Get Int from DataSet Key From Event
function gid(key, event) {
  return parseInt(event.target.dataset[key], 10)
}

// Get String from DataSet Key From Event
function gsd(key, event) {
  return event.target.dataset[key]
}

// Get Float Value from an Event
function gfv(event) {
  return parseFloat(event.target.value)
}

// Get Integer Value from an Event
function giv(event) {
  return parseInt(event.target.value, 10)
}

// Get String Value from an Event
function gsv(event) {
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
<div class="main-content">
  <div class="example-content">
    <h1>Welcome To Alan's Color Picker</h1>
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

const defaultColors = {
  "dark": {
    "chroma": 0.0,
    "fadedValues": [40, 80],
    "lightLevel": 1,
    "hueRotationsIndex": 3,
    "hueRotationCount": 0
  },
  "light": {
    "chroma": 0.0,
    "fadedValues": [40, 80],
    "lightLevel": 1,
    "hueRotationsIndex": 3,
    "hueRotationCount": 0
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
  "fadedNames": ["faded", "faded-2"],
  "hueRotations": [30, 45, 60, 90],
  "lightLevels": [0, 20, 40, 60, 80, 100],
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
    this.reloadStyleSheets();
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
    for (let index in config.aspects) {
      const key = config.aspects[index].key;
      const token = `base-slider`;
      const connector = `${token}-${index}`;
      const div = dc('div');
      ac([
        `${token}-wrapper`, 
        `${token}-wrapper-${index}`
      ], div);
      const label = dc('label');
      ac([
        `${token}-label`, 
        `${token}-label-${index}`
      ], label);
      sa(label, 'for', connector);
      html(label, config.aspects[index].name)
      const slider = dc('input');
      ac([
        `${token}`, 
        `${token}-${index}`
      ], slider);
      sa(slider, 'name', connector);
      sa(slider, 'type', 'range');
      sa(slider, 'min', 0);
      sa(slider, 'max', this.getAspectMax(key));
      sa(slider, 'step', this.getAspectStep(key).toFixed(5));
      slider.value = p.modes[p.activeMode].base[key]
      ad(slider, 'kind', 'base');
      ad(slider, 'mode', p.activeMode);
      ad(slider, 'aspect', key);
      a(label, div);
      a(slider, div);
      a(div, 'base-sliders');
    }
  }

  initStaticBwVars() {
    // using local modes here since there
    // are really only these two. (it would
    // be overly complicated to figure out what
    // would need to happen for others. 
    const localModes = ['light', 'dark'];
    //const out = [":root {"];
    const lines = [];
    localModes.forEach((mode) => {
      let num1 = 100;
      let num2 = 0;
      if (mode === 'dark') {
        num1 = 0;
        num2 = 100;
      }
      lines.push(`--${mode}-color-bw-match: oklch(${num1}% 0 0);`);
      lines.push(`--${mode}-color-bw-reverse: oklch(${num2}% 0 0);`);
      for (let amount = 10; amount < 100; amount += 10) {
        lines.push(`--${mode}-color-bw-match-${amount}: oklch(${num1}% 0 0 / ${amount}%);`);
        lines.push(`--${mode}-color-bw-reverse-${amount}: oklch(${num2}% 0 0 / ${amount}%);`);
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
      

     // db(colorEl.querySelector('.color-name'));



    //   const color = dc("div");
    //   ac(color, [`color-wrapper`]);
    //   const name = dc('div');
    //   html(name, p.colorNames[index]);
    //   const rotationDiv = dc('div')
    //   a(name, color);
    }

  }

  initNumberOfColors() {
    for (let index = 0; index < config.maxNumberOfColors; index ++) {
     const opt = dc('option');
      html(opt, index + 1);
      if (index + 1 === p.numberOfColors) {
        opt.selected = true;
      } 
      a(opt, el('number-of-colors-selector'));
    }
  }


  initStaticPickerStyles() {
    this.styleSheets['staticPickerStyles'].innerHTML = `
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
.color-name-primary { color: var(--color-primary); }
  `;
  }

  initStyleSheets() {
    const sheetNames = [
      'dynamicBwVars',
      'dynamicColorSwitches',
      'dynamicColorVars',
      'staticBwVars',
      'staticPickerStyles', 
    ];
    sheetNames.forEach((name) => {
      this.styleSheets[name] = document.createElement('style');
      document.body.appendChild(this.styleSheets[name]);
    });
    this.initStaticBwVars();
    this.initStaticPickerStyles();
  }

  initTemplate() {
    const templateEl = this.ownerDocument.createElement('template')
    templateEl.innerHTML = template;
    const content = templateEl.content.cloneNode(true);
    this.append(content);
    this.initBaseSliders();
    this.initNumberOfColors();
    this.initColors();
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
    data.palettes[0].modes.forEach((modeData) => {
      for (let index = 0; index < config.maxNumberOfColors; index ++) {
        modeData.colors.push(defaultColors[modeData.key]);
      }
    });
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

  reloadDynamicBwVars() {
    const lines = [];
    const mode = p.modes[p.activeMode].key;
    lines.push(`--color-bw-match: var(--${mode}-color-bw-match;`);
    lines.push(`--color-bw-reverse: var(--${mode}-color-bw-reverse;`);
    for (let amount = 10; amount < 100; amount += 10) {
      lines.push(`--color-bw-match-${amount}: var(--${mode}-color-bw-match-${amount};`);
      lines.push(`--color-bw-reverse-${amount}: var(--${mode}-color-bw-reverse-${amount};`);
    }
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['dynamicBwVars'].innerHTML = out;
  }

  reloadDynamicColorSwitches() {
    const lines = [
      "--color-base: var(--light-color-base);",
    ];
    this.styleSheets['dynamicColorSwitches'].innerHTML =
      `:root {\n${lines.sort().join("\n")}\n}`;
  }

  reloadDynamicColorVars() {
    const lines = [];
    p.modes.forEach((modeData, modeIndex) => {
      const mode = modeData.key;
      const lBase = modeData.base.l;
      const cBase = modeData.base.c;
      const hBase = modeData.base.h;
      lines.push(`--${mode}-color-base: oklch(${lBase}% ${cBase} ${hBase});`);
      for (let index = 0; index < p.numberOfColors; index ++) {
        const name = p.colorNames[index];
        const l = p.lightLevels[p.modes[modeIndex].colors[index].lightLevel];
        const c = p.lightLevels[p.modes[modeIndex].colors[index].chroma];
        const h = this.getHueForColor(modeIndex, index);
        lines.push(`--${mode}-color-${name}: oklch(${l}% ${c} ${h});`);
      }
    });
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['dynamicColorVars'].innerHTML = out;
  }

  updateData(event) {
    if (event.target.dataset.kind === "base") {
      const mode = gid('mode', event);
      const aspect = gsd('aspect', event);
      p.modes[mode].base[aspect] = gfv(event);
    }
    else if (event.target.dataset.kind === "number-of-colors-selector") {
      const checkNum = giv(event);
      if (p.numberOfColors !== checkNum) {
        p.numberOfColors = checkNum;
        this.initColors();
      }
    }
    this.reloadStyleSheets();
    window.requestAnimationFrame(this.requestRender);
  }

  reloadStyleSheets() {
    this.reloadDynamicColorSwitches();
    this.reloadDynamicColorVars();
    this.reloadDynamicBwVars();
  }

}

customElements.define('color-picker', Picker);

