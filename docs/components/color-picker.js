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

// Add Key Value Data To Dataset
function ad(key, value, obj) {
  obj.dataset[key] = value;
}

// Debug
function dbg(value) {
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
// TODO: put event last
function gdf(event, key) {
  return parseFloat(event.target.dataset[key])
}

// Get Int from DataSet Key From Event
function gdi(key, event) {
  return parseInt(event.target.dataset[key], 10)
}

// Get String from DataSet Key From Event
// TODO: put event last
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
function html(str, obj) {
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
function sa(key, value, obj) {
  obj.setAttribute(key, value);
}

// Set Value 
function sv(value, obj) {
  obj.value = value;
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
<fieldset class="base-wrapper settings-fieldset flow">
  <div class="view-light-dark-wrapper">
    <span class="view-mode-buttons-text">Mode:</span>
    <div class="view-mode-buttons"></div>
  </div>
  <div class="base-sliders"></div>
  <details class="flow">
    <summary>Advanced Settings</summary>
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
  <h4>TODO List</h4>
    <ul>
      <li><input type="checkbox" disabled /> Contrast calculations</li>
      <li><input type="checkbox" disabled /> Undo/Redo</li>
      <li><input type="checkbox" disabled /> Show/Hide content to focus on base color</li>
      <li><input type="checkbox" disabled /> Faded alternatives</li>
      <li><input type="checkbox" disabled /> Include/Remove black an white variables</li>
      <li><input type="checkbox" disabled /> Optional utility classes</li>
      <li><input type="checkbox" disabled /> Change CSS variable names</li>
      <li><input type="checkbox" disabled /> Copy button for CSS</li>
      <li><input type="checkbox" disabled /> Edit CSS</li>
      <li><input type="checkbox" disabled /> Edit HTML</li>
      <li><input type="checkbox" disabled /> Save/Load</li>
      <li><input type="checkbox" disabled /> Shareable URLs</li>
      <li><input type="checkbox" disabled /> Implementation example</li>
      <li><input type="checkbox" disabled /> Web component</li>
      <li><input type="checkbox" disabled /> Randomizer</li>
      <li><input type="checkbox" disabled /> Ability to switch between 45 and 60 degrees</li>
    </ul>
  </details>
</fieldset>
<div class="main-content">
  <details class="example-content flow" open>
    <summary>Example Conent</summary>
    <h2>Welcome to the Color Picker</h2>
    <p>This is some content</p>
  </details>
    <div class="colors-content-wrapper flow">
  </div>
</div>
<div class="debug flow"></div>
`;

const colorElementInternalTemplate = `
<details class="flow" open>
<summary class="color-name">Color Name</summary>
<div class="hue-set-wrapper">
  <!--
  TODO: Add advanced setting to turn this on
  <label class="color-hue-set-selector-label">Hue Set:</label>
  <select class="color-hue-set-selector"></select>
  -->
  <div class="color-hue-set"></div>
</div>
</details>
`;

const defaultColors = [
  {
    "fadedValues": [40, 80],
    // TODO: DEPRECATE lightlevel to inside degree set stuff
    "lightLevel": 0,
    "degreeOffsetIndex": 0,
    "degreeOffsetValues": [
      {
        "l": 2,
        "c": 0.1,
        "h": 0
      },
      {
        "l": 4,
        "c": 0.2,
        "h": 3
      }
    ]
  },
  {
    "fadedValues": [10, 20],
    "lightLevel": 1,
    "degreeOffsetIndex": 0,
    "degreeOffsetValues": [
      {
        "l": 2,
        "c": 0.1,
        "h": 0
      },
      {
        "l": 4,
        "c": 0.2,
        "h": 3
      }
    ]
  },
  {
    "fadedValues": [40, 80],
    "lightLevel": 4,
    "degreeOffsetIndex": 0,
    "degreeOffsetValues": [
      {
        "l": 2,
        "c": 0.1,
        "h": 0
      },
      {
        "l": 4,
        "c": 0.2,
        "h": 3
      }
    ]
  },
  {
    "fadedValues": [10, 20],
    "lightLevel": 5,
    "degreeOffsetIndex": 0,
    "degreeOffsetValues": [
      {
        "l": 2,
        "c": 0.1,
        "h": 0
      },
      {
        "l": 4,
        "c": 0.2,
        "h": 3
      }
    ]
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
  "backgroundStyleName": "background",
  "baseColorName": "base-color",
  "borderStylePrefix": "border",
  "borderTypes": [
    ["full", false],
    ["top", true],
    ["bottom", true],
    ["left", true],
    ["right", true],
    ["inline", true],
    ["block", true],
  ],
  "bwNames": ["match-bw", "reverse-bw"],
  "colorNames": [
    "primary-color",
    "secondary-color",
    "accent-color",
    "highlight-color",
    "info-color",
    "warning-color",
    "extra-color",
    "bonus-color"
  ],
  "fadedNames": ["faded", "faded-2"],
  "degreeOffsets": [45, 60],
  "lightLevels": 6,
  "maxNumberOfColors": 8,
  "maxNumberOfFaded": 2,
  "modes": [
    {
      "base": { "l": 67.67, "c": 0.0504, "h": 73.872 },
      "bwValues": [100, 0],
      "category": 3,
      "colors": [],
      "name": "Light",
    },
    {
      "base": { "l": 100, "c": 0.0492, "h": 101.484 },
      "bwValues": [100, 0],
      "category": 2,
      "colors": [],
      "name": "High-Contrast Light",
    },
    { 
      "base": { "l": 24.68, "c": 0.05523, "h": 354.348 },
      "bwValues": [0, 100],
      "category": 0,
      "colors": [],
      "name": "Dark",
    },
    { 
      "base": { "l": 5.89, "c": 0.21735, "h": 360 },
      "bwValues": [0, 100],
      "category": 1,
      "colors": [],
      "name": "High-Contrast Dark",
    }
  ],
  "name": "Color Palette",
  "numberOfColors": 4,
  "numberOfFaded": 1,
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
    this.addEventListener('change', (event) => {
      this.updateData.call(this, event);
     })
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

  getColorC(mode, color) {
    const degreeOffsetIndex = p.modes[mode].colors[color].degreeOffsetIndex;
    const c = p.modes[mode].colors[color].degreeOffsetValues[degreeOffsetIndex].c;
    return c;
  }

  getColorH(mode, color) {
    const degreeOffsetIndex = p.modes[mode].colors[color].degreeOffsetIndex;
    const h = p.modes[mode].colors[color].degreeOffsetValues[degreeOffsetIndex].h;
    let value = this.getHueValues(degreeOffsetIndex)[h] + p.modes[mode].base.h;
    if (value > 360) {
      value -= 360;
    }
    return value;
  }

  getColorL(mode, color) {
    const degreeOffsetIndex = p.modes[mode].colors[color].degreeOffsetIndex;
    const l = p.modes[mode].colors[color].degreeOffsetValues[degreeOffsetIndex].l;
    return this.getLightLevelValues()[l];
  }

  getLightLevelValues() {
    const lightLevelValues = [];
    for (let level = 0; level <= 100; level += Math.floor(100 / (p.lightLevels - 1))) {
      lightLevelValues.push(level);
    }
    return lightLevelValues;
  }

  getHueValues(degreeOffsetIndex) {
    const values = [];
    const adder = p.degreeOffsets[degreeOffsetIndex];
    for (let value = 0; value <= 360; value += adder) {
      values.push(value);
    }
    return values;
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
      sa('for', connector, label);
      html(p.aspects[key].name, label);
      const slider = dc('input');
      ac([
        `${token}`, 
        `${token}-${key}`
      ], slider);
      sa('name', connector, slider);
      sa('type', 'range', slider);
      sa('min', 0, slider);
      sa('max', this.getAspectMax(key), slider);
      sa('step', this.getAspectStep(key).toFixed(5), slider);
      slider.value = p.modes[p.activeMode].base[key]
      ad('kind', 'base', slider);
      ad('aspect', key, slider);
      a(label, div);
      a(slider, div);
      a(div, 'base-sliders');
    }
  }

  initStaticBwVars() {
    const lines = [];
    p.modes.forEach((data, mode) => {
      lines.push(`--${p.bwNames[0]}--${scrubStyle(data.name)}: oklch(${data.bwValues[0]}% 0 0);`);
      lines.push(`--${p.bwNames[1]}--${scrubStyle(data.name)}: oklch(${data.bwValues[1]}% 0 0);`);
      for (let amount = 10; amount < 100; amount += 10) {
        lines.push(`--${p.bwNames[0]}-${amount}--${scrubStyle(data.name)}: oklch(${data.bwValues[0]}% 0 0 / ${amount}%);`);
        lines.push(`--${p.bwNames[1]}-${amount}--${scrubStyle(data.name)}: oklch(${data.bwValues[1]}% 0 0 / ${amount}%);`);
      }
    })
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['staticBwVars'].innerHTML = out;
  }

  initColors() {
    // Clear it first so this can be used if the
    // number of colors changes, or the names
    // of the colors change.
    const wrapper = el('colors-content-wrapper');  
    html("", wrapper);
    for (let index = 0; index < p.numberOfColors; index ++) {
      const colorData = p.modes[p.activeMode].colors[index];
      const colorEl = dc('div'); 
      ac(['color-wrapper', `color-wrapper-${index}`], colorEl);
      html(colorElementInternalTemplate, colorEl);
      a(colorEl, wrapper);
      const colorNameEl = colorEl.querySelector('.color-name');
      ac([`color-name-${index}`], colorNameEl);
      ac([`color-name-${scrubStyle(p.colorNames[index])}`], colorNameEl);
      html(p.colorNames[index], colorNameEl);

      /*
       * This is off for now. Add advance function to turn 
       * it back on if folks want it, but it adds
       * some complication to the interface that's
       * better avoided for the default case. 
      const selector = colorEl.querySelector('.color-hue-set-selector');
      ac([`color-hue-set-selector-${index}`], selector);
      ad("kind", "color-hue-set-selector", selector);
      ad("mode", p.activeMode, selector);
      sa("name", `color-hue-set-selector-${index}`, selector);
      ad("color", index, selector);
      p.degreeOffsets.forEach((hs, hsIndex) => {
        const opt = dc('option');
        sv(hsIndex, opt);
        html(`${hs}°`, opt);
        if (hsIndex === p.modes[p.activeMode].colors[index].degreeOffsetIndex) {
          opt.selected = true;
        }
        a(opt, selector);
      });

*/

      const degreeOffsetIndexEl = colorEl.querySelector('.color-hue-set');
      const hueCount = Math.round(360 / p.degreeOffsets[
        colorData.degreeOffsetIndex
      ]);
      for (let degreeOffsetIndexIndex = 0; degreeOffsetIndexIndex < hueCount; degreeOffsetIndexIndex ++ ) {
        const degreeOffsetIndexWrapper = dc('div');
        this.getLightLevelValues().forEach((level, levelIndex) => {
          const button = dc('button'); 
          ad('kind', 'color-hue-lightness-button', button);
          ad('mode', p.activeMode, button);
          ad('color', index, button);
          ad('degreeset', colorData.degreeOffsetIndex, button);
          ad('degreesetindex', degreeOffsetIndexIndex, button);
          ad('lightness', levelIndex, button);
          //ad('color', index, button);
          ac('color-light-level', button);
          ac(`color-lightness-hue-selector--mode-${p.activeMode}--color-${index}--lightness-${levelIndex}--hue-${degreeOffsetIndexIndex}`, button);
          //html(level.toString().padStart(3, '0'), button);
          html('set', button);
          a(button, degreeOffsetIndexWrapper);
        });
        a(degreeOffsetIndexWrapper, degreeOffsetIndexEl);
      }
    }
  }

  initModeButtons() {
    // TODO: Figure out what the proper
    // aria label is to add to indicate 
    // the active button.
    p.modes.forEach((data, mode) => {
      const button = dc('button');
      html(data.name, button);
      ac('mode-button', button);
      ac(`mode-button-${mode}`, button);
      ad('kind', 'mode-button', button);
      ad('mode', mode, button);
      a(button, el('view-mode-buttons'));
    })
  }

  initNumberOfColors() {
    for (let index = 0; index < p.maxNumberOfColors; index ++) {
     const opt = dc('option');
      html(index + 1, opt);
      if (index + 1 === p.numberOfColors) {
        opt.selected = true;
      } 
      a(opt, el('number-of-colors-selector'));
    }
  }

  initStyleSheets() {
    const sheetNames = [
      'staticBwVars',
      'staticBwUtilityClasses',
      'dynamicBwVars',
      'dynamicColorSwitches',
      'dynamicColorVars',
      'dynamicPickerStyles', 
      'dynamicUtilityClasses', 
      'dynamicInterfaceClasses', 
    ];
    sheetNames.forEach((name) => {
      this.styleSheets[name] = document.createElement('style');
      document.body.appendChild(this.styleSheets[name]);
    });
    this.initStaticBwVars();
    this.initStaticBwClasses();
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

  initStaticBwClasses() {
    const lines = [];
    for (let amount = 0; amount < 100; amount += 10) {
      let amountString = `-${amount}`;
      if (amount === 0) {
        amountString = '';
      } 
      lines.push(`.${p.bwNames[0]}${amountString} { color: var(--${p.bwNames[0]}${amountString}); }`);
      lines.push(`.${p.bwNames[1]}${amountString} { color: var(--${p.bwNames[1]}${amountString}); }`);
      lines.push(`.${p.bwNames[0]}-${p.backgroundStyleName}${amountString} { background-color: var(--${p.bwNames[0]}${amountString}); }`);
      lines.push(`.${p.bwNames[1]}-${p.backgroundStyleName}${amountString} { background-color: var(--${p.bwNames[1]}${amountString}); }`);
      p.borderTypes.forEach((data) => {
        if (data[1] === true) {
          lines.push(`.${p.bwNames[0]}-${data[0]}-${p.borderStylePrefix}${amountString} { border-${data[0]}: 1px solid var(--${p.bwNames[0]}${amountString}); }`);
          lines.push(`.${p.bwNames[1]}-${data[0]}-${p.borderStylePrefix}${amountString} { border-${data[0]}: 1px solid var(--${p.bwNames[1]}${amountString}); }`);
        } else {
          lines.push(`.${p.bwNames[0]}-${p.borderStylePrefix}${amountString} { border: 1px solid var(--${p.bwNames[0]}${amountString}); }`);
          lines.push(`.${p.bwNames[1]}-${p.borderStylePrefix}${amountString} { border: 1px solid var(--${p.bwNames[1]}${amountString}); }`);
        }
      });
    }
    const out = lines.sort().join("\n");
    this.styleSheets['staticBwUtilityClasses'].innerHTML = out;
  }

  loadData() {
    const checkData = localStorage.getItem(
      config.storageName
    );
    if (checkData && checkData.version[0] === 1) {
      dbg(`Loaded colors from storage`);
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
        modeData.colors.push(JSON.parse(JSON.stringify(defaultColors[mode])));
      }
    });
    dbg("Loaded default colors");
  }

  renderDebuggingInfo() {
    if (debug === true) {
      const sheets = [];
      for (let sheetName in this.styleSheets) {
        sheets.push(`<h4>${sheetName}</h4>`);
        sheets.push(`<pre class="debug-stylesheet">${this.styleSheets[sheetName].innerHTML}</pre>`);
      };
      el('debug').innerHTML = `
<h2>Debugging - Here Be Dragons</h2>
<p>
  This is a prototype. The data below is
  normally behind the scenes. It's 
  visible now to help me finish the
  build out. It can safely be ignored. 
</p>

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
    lines.push(`--${p.bwNames[0]}: var(--${p.bwNames[0]}-${scrubStyle(data.name)});`);
    lines.push(`--${p.bwNames[1]}: var(--${p.bwNames[1]}-${scrubStyle(data.name)});`);
    for (let amount = 10; amount < 100; amount += 10) {
      lines.push(`--${p.bwNames[0]}-${amount}: var(--${p.bwNames[0]}-${amount}--${scrubStyle(data.name)});`);
      lines.push(`--${p.bwNames[1]}-${amount}: var(--${p.bwNames[1]}-${amount}--${scrubStyle(data.name)});`);
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
        const h = this.getColorH(mode, index);
        lines.push(`--${modeName}-${colorName}: oklch(${l}% ${c} ${h});`);
      }
    });
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['dynamicColorVars'].innerHTML = out;
  }

  reloadDynamicInterfaceClasses() {
    const lines = [];
    for (let mode = 0; mode < p.modes.length; mode ++) {
      for (let color = 0; color < p.numberOfColors; color ++) {
        const colorData = p.modes[mode].colors[color];
        const hueCount = Math.round(360 / p.degreeOffsets[colorData.degreeOffsetIndex]);
        for (let hueIndex = 0; hueIndex < hueCount; hueIndex ++) {
          this.getLightLevelValues().forEach((lightLevel, lightIndex) => {
            const className = `.color-lightness-hue-selector--mode-${mode}--color-${color}--lightness-${lightIndex}--hue-${hueIndex}`;
            //const c = p.modes[mode].colors[color].chroma;
            const c = this.getColorC(mode, color);
            const hueMultiplier = p.degreeOffsets[colorData.degreeOffsetIndex];
            const h = (hueMultiplier * hueIndex) + p.modes[mode].base.h ;
            const style = `oklch(${lightLevel}% ${c} ${h})`;
            lines.push(
              `${className} { color: ${style};}`
            );
          });
        }
      }
    }
    const out = lines.sort().join("\n");
    this.styleSheets['dynamicInterfaceClasses'].innerHTML = out;
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
  accent-color: var(--BWREVERSE-90);
  height: 1px;
}
body { 
  font-family: system-ui;
  background-color: var(--BASECOLOR); 
  color: var(--COLOR1);
}
button{
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  outline: inherit;
  padding: 0;
}
.color-light-level {
  padding: 0.14rem;
}
.content-wrapper {
  margin-inline: auto;
  width: min(100vw - 1.4rem, 54rem);
}
.flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 1em);
}
.main-content {
  display: grid;
  grid-template-columns: 1fr 12rem;
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

  reloadDynamicUtilityClasses() {
    const lines = [];
    lines.push(`.${p.baseColorName} { color: var(--${p.baseColorName}); }`);
    lines.push(`.${p.baseColorName}-${p.backgroundStyleName} { background-color: var(--${p.baseColorName}); }`);
    for (let index = 0; index < p.numberOfColors; index ++) {
      const colorName = p.colorNames[index];
      lines.push(`.${colorName} { color: var(--${colorName}); }`);
      lines.push(`.${colorName}-${p.backgroundStyleName} { background-color: var(--${colorName}); }`);
      p.borderTypes.forEach((data) => {
        if (data[1] === true) {
          lines.push(`.${colorName}-${p.borderStylePrefix}-${data[0]} { border-${data[0]}: 1px solid var(--${colorName}); }`);
        } else {
          lines.push(`.${colorName}-${p.borderStylePrefix} { border: 1px solid var(--${colorName}); }`);
        }
      });
    }
    const out = lines.sort().join("\n");
    this.styleSheets['dynamicUtilityClasses'].innerHTML = out;
  }

  updateData(event) {
    let triggerRefresh = false;
    if (event.target.dataset.kind === "color-hue-set-selector" && event.type === "change") {
      const mode = gdi("mode", event);
      const color = gdi("color", event);
      const value = gvi(event);
      p.modes[mode].colors[color].degreeOffsetIndex = value;
      this.initColors();
      triggerRefresh = true;
    } else if (event.target.dataset.kind === "base") {
      const aspect = gds(event, 'aspect');
      p.modes[p.activeMode].base[aspect] = gvf(event);
      triggerRefresh = true;
    } else if (event.target.dataset.kind === "number-of-colors-selector") {
      const checkNum = gvi(event);
      if (p.numberOfColors !== checkNum) {
        p.numberOfColors = checkNum;
        this.initColors();
        triggerRefresh = true;
      }
    } else if (event.target.dataset.kind === "mode-button") {
      p.activeMode = gdi("mode", event);
      this.updateModeButtonStyles();
      this.updateBaseSliders();
      this.initColors();
      triggerRefresh = true;
    } else if (event.target.dataset.kind === "color-hue-lightness-button") {
      const mode = gdi("mode", event);
      const color = gdi("color", event);
      const degreeOffsetIndex = gdi("degreeset", event);
      const offsetIndex = gdi("degreesetindex", event);
      const lightnessIndex = gdi("lightness", event);
      p.modes[mode].colors[color].degreeOffsetValues[degreeOffsetIndex].h = offsetIndex ;
      p.modes[mode].colors[color].degreeOffsetValues[degreeOffsetIndex].l = lightnessIndex;
      //dbg(`${this.getColorL(mode, color)} - ${this.getColorC(mode, color)} - ${this.getColorH(mode, color)}`);
      triggerRefresh = true;
    }  
    if (triggerRefresh === true) {
      window.requestAnimationFrame(this.requestRender);
    }
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
    this.reloadDynamicInterfaceClasses();
    this.reloadDynamicPickerStyles();
    this.reloadDynamicColorSwitches();
    this.reloadDynamicColorVars();
    this.reloadDynamicBwVars();
    this.reloadDynamicUtilityClasses();
  }

}

customElements.define('color-picker', Picker);

