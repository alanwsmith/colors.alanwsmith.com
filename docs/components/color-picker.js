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

const templates = {
  "colorName": `<label></label><div></div>`,
};

// Append Object To Target
function a(child, parent) {
  if (typeof parent === "string") {
    const el = document.querySelector(`.${parent}`);
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

// TODO: Deprecate in favor of elV2
// Get Element By Class Name
function el(className) {
  return document.querySelector(`.${className}`);
}

// Get Elements By Class Name
function els(selector) {
  return document.querySelectorAll(selector);
}

// TODO: Rename to `el()` when transition
// is complete.
// Get Element By Selector
function elV2(selector) {
  return document.querySelector(selector);
}

// Focus (print to console regardless of debug
function fx(value) {
  console.log(value);
}

// Get Int from DataSet Key From Event
function gdi(key, obj) {
  return parseInt(obj.dataset[key], 10);
}

// Get data attr as a string
function gds(key, obj) {
  return obj.dataset[key];
}

// Get an element from an object
function getEl(selector, obj) {
  return obj.querySelector(selector);
}

// Get elements from an object
function getEls(selector, obj) {
  return obj.querySelectorAll(selector);
}

// Get a template
function getTemplate(selector) {
  const template = document.querySelector(selector);
  return template.content.cloneNode(true);
}

function gvi(obj) {
  return parseInt(obj.value, 10);
}

// TODO: Deprecate in favor of V2
// Get Float Value from an Event

function gvf(obj) {
  return parseFloat(obj.value);
}

// Set InnerHTML
function html(str, parent) {
  if (typeof parent === "string") {
    const el = document.querySelector(parent);
    el.innerHTML = str;
  } else {
    parent.innerHTML = str;
  }
}

// Returns a CSS class
function makeClass(name, key, value) {
  return `${name} { ${key}: ${value}; }`;
}

// Returns a CSS variable string
function makeVar(name, value) {
  return `${name}: ${value};`;
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
    .toLowerCase();
}

function shiftReset(input) {
  return (input.replaceAll("      ", ""));
}
function sortVars(a, b) {
  const x = a.split(":")[0];
  const y = b.split(":")[0];
  if (x > y) {
    return 1;
  } else if (x < y) {
    return -1;
  } else {
    return 0;
  }
}

function wrapInRoot(input) {
  return `:root {\n${input}\n}`;
}

const defaultPalette = {
  _debugging: {},
  _tests: {
    failed: 0,
    failureDetails: [],
    passed: 0,
  },
  activeColor: 0,
  activeMode: 0,
  alignments: ["left", "right", "start", "end", "justify", "center"],
  aspectOrder: ["l", "c", "h"],
  aspects: {
    c: { max: 0.3, name: "chroma" },
    h: { max: 360, name: "hue" },
    l: { max: 100, name: "lightness" },
  },
  backgroundColorName: "background",
  blackAndWhiteNames: ["black", "white"],
  blackAndWhiteNamesreverse: ["match", "reverse"],
  borderRadii: [
    "1.2rem",
    "1.0rem",
    "0.8rem",
    "0.6rem",
    "0.5rem",
    "0.4rem",
    "0.3rem",
    "0.2rem",
    "0.1rem",
  ],
  borderRadiiDirections: [
    ["", false],
    ["top-left-and-bottom-right", true],
    ["top-right-and-bottom-left", true],
    ["top-left", true],
    ["top-right", true],
    ["bottom-left", true],
    ["bottom-right", true],
  ],
  borderRadiiDirectionHelpers: [
    ["top", "top-left", "top-right"],
    ["bottom", "bottom-left", "bottom-right"],
    ["left", "top-left", "bottom-left"],
    ["right", "top-right", "bottom-right"],
  ],
  colorNames: [
    "default",
    "heading",
    "link",
    "accent",
    "alternate",
    "warning",
    "info",
    "extra",
  ],
  directions: [
    ["block", true],
    ["bottom", true],
    ["", false],
    ["inline", true],
    ["left", true],
    ["right", true],
    ["top", true],
  ],
  fadedNames: ["faded", "faded2"],
  // i've got back and forth between
  // 45 and 60 here. going with 45 for
  // now since it offers more colors. The
  // way to switch between them is
  // no in production. I removed it
  // because it felt like it was adding
  // significant complexity without much
  // utility.
  flows: [
    "6.5em",
    "4.3em",
    "2.9em",
    "1.8em",
    "1em",
    "0.7em",
    "0.5em",
    "0.3em",
    "0.2em",
  ],
  focused: false,
  fontSizes: [
    "clamp(2.8rem, calc(2rem + 1.25vw), 3.1rem)",
    "clamp(1.84rem, calc(1.77rem + 0.87vw), 2.14rem)",
    "clamp(1.32rem, calc(1.5rem + 0.58vw), 1.65rem)",
    "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)",
    "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
    "clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem)",
    "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem)",
    "clamp(0.68rem, calc(0.67rem + 0.03vw), 0.7rem)",
    "clamp(0.58rem, calc(0.57rem + 0.03vw), 0.6rem)",
  ],
  hueOffsets: [45, 60],
  isolatedColor: -2,
  lightLevels: 6,
  lineHeights: [
    1.9,
    1.8,
    1.7,
    1.6,
    1.5,
    1.4,
    1.3,
    1.2,
    1.1,
  ],
  margins: [
    "2.4rem",
    "1.9rem",
    "1.3rem",
    "0.5rem",
    "0.8rem",
    "0.4rem",
    "0.3rem",
    "0.2rem",
    "0.1rem",
  ],
  maxLightValue: 100,
  maxNumberOfColors: 8,
  maxNumberOfFaded: 2,
  modes: [
    {
      base: { c: 0.03081, h: 94.86, l: 86.94 },
      blackAndWhiteFaded: [0.4, 0.1],
      blackAndWhiteValues: [0, 100],
      blackAndWhitereverseValues: [100, 0],
      blackAndWhitereverseFaded: [0.4, 0.1],
      colors: [
        // 0-0
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.28017,
              h: 2,
              l: 0,
            },
            {
              c: 0.15879,
              h: 1,
              l: 1,
            },
          ],
          minLightLevel: 20,
        },
        // 0-1
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.18363,
              h: 0,
              l: 2,
            },
            {
              c: 0.3,
              h: 7,
              l: 0,
            },
          ],
          minLightLevel: 20,
        },
        // 0-2
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.10434,
              h: 1,
              l: 1,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 0-3
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.0534,
              h: 3,
              l: 1,
            },
            {
              c: 0.118,
              h: 0,
              l: 2,
            },
          ],
          minLightLevel: 20,
        },
        // 0-4
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.09171,
              h: 3,
              l: 2,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 0-5
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.118,
              h: 2,
              l: 3,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 0-6
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.118,
              h: 2,
              l: 3,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 0-7
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.118,
              h: 2,
              l: 3,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
      ],
      name: "Light",
    },

    {
      base: { c: 0.05262, h: 78.336, l: 25.71 },
      blackAndWhiteFaded: [0.4, 0.1],
      blackAndWhiteValues: [0, 100],
      blackAndWhitereverseFaded: [0.4, 0.1],
      blackAndWhitereverseValues: [0, 100],
      colors: [
        // 2-0
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.27672,
              h: 3,
              l: 2,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 2-1
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.118,
              h: 2,
              l: 3,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 2-2
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.22386,
              h: 3,
              l: 3,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 2-3
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.06066,
              h: 5,
              l: 3,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 2-4
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.03654,
              h: 3,
              l: 3,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 2-5
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.118,
              h: 2,
              l: 3,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 2-6
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.118,
              h: 2,
              l: 3,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
        // 2-7
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              c: 0.118,
              h: 2,
              l: 3,
            },
            {
              c: 0.2,
              h: 3,
              l: 4,
            },
          ],
          minLightLevel: 20,
        },
      ],
      name: "Dark",
    },
  ],
  name: "Color Palette",
  numberOfColors: 5,
  numberOfFaded: 2,
  paddings: [
    "2.4rem",
    "1.9rem",
    "1.3rem",
    "0.5rem",
    "0.8rem",
    "0.4rem",
    "0.3rem",
    "0.2rem",
    "0.1rem",
  ],
  preferredMode: 0,
  previousIsolatedColor: -2,
  sizeNames: [
    "xxxlarge",
    "xxlarge",
    "xlarge",
    "large",
    "default",
    "small",
    "xsmall",
    "xxsmall",
    "xxxsmall",
  ],
  weights: [
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
  ],
  widths: [
    "calc(100vw - 1.4rem)",
    "min(100vw - 1.4rem, 64rem)",
    "min(100vw - 1.4rem, 58rem)",
    "min(100vw - 1.4rem, 54rem)",
    "min(100vw - 1.4rem, 50rem)",
    "min(100vw - 1.4rem, 42rem)",
    "min(100vw - 1.4rem, 33rem)",
    "min(100vw - 1.4rem, 16rem)",
    "min(100vw - 1.4rem, 7rem)",
    "min(100vw - 1.4rem, 3rem)",
  ],
};

const config = {
  storageName: "colorPickerData",
  validSchemeVersions: [[1, 0, 0]],
};

class Picker extends HTMLElement {
  constructor() {
    super();
  }
  addListeners() {
    dbg("addListeners");
    this.addEventListener("click", (event) => {
      this.requestUpdate.call(this, event);
    });
    this.addEventListener("change", (event) => {
      this.requestUpdate.call(this, event);
    });
    this.addEventListener("input", (event) => {
      this.requestUpdate.call(this, event);
    });
  }

  connectedCallback() {
    fx("Connected Color Picker");
    // Reminder: Default data needs to be loaded for tests
    p = JSON.parse(JSON.stringify(defaultPalette));
    this.runTests();
    this.loadData();
    this.initControls();
    this.initUtilityClasses();
    this.updateVarsStyleSheet();
    this.queryUiVarsStyleSheet();
    this.updateUiClassesStyleSheet();
    this.requestUpdate = this.updateUiView.bind(this);
    this.addListeners();
    this.updateDebuggingTab();
    this.updateCustomizeTab();
    this.outputColorClasses();
    this.outputUtilityClasses();
  }

  finishUpdate() {
    dbg("finishUpdate");
    this.initUtilityClasses();
    this.updateVarsStyleSheet();
    this.queryUiVarsStyleSheet();
    this.updateUiClassesStyleSheet();
    this.updateDebuggingTab();
    this.updateCustomizeTab();
    this.toggleIsolation();
    this.outputColorClasses();
    this.outputUtilityClasses();
  }

  generateColorBackgroundClasses() {
    const lines = [];
    this.getColorActives().forEach((colorName) => {
      this.getFadedValues().forEach((fade) => {
        lines.push(
          makeClass(
            `.${colorName}-background${fade}`,
            `background-color`,
            `var(--${colorName}${fade})`,
          ),
        );
      });
    });
    lines.sort();
    return [`/* Color Backgrounds */`, ...lines];
  }

  generateBlackAndWhiteBackgroundClasses() {
    const lines = [];
    this.getBlackAndWhiteNames().forEach((bwName) => {
      lines.push(
        makeClass(
          `.${bwName}-background`,
          `background-color`,
          `var(--${bwName})`,
        ),
      );
      this.getScrubbedFadedNames().forEach((fadedName) => {
        lines.push(
          makeClass(
            `.${bwName}-background-${fadedName}`,
            `background-color`,
            `var(--${bwName}-${fadedName})`,
          ),
        );
      });
    });
    lines.sort();
    return [`/* B&W Backgrounds */`, ...lines];
  }

  generateBlackAndWhiteBorderClasses() {
    const lines = [];
    this.getBlackAndWhiteNames().forEach((bwName) => {
      this.getBorderDirectionNames().forEach((directionName) => {
        let name = `.${bwName}${directionName}-border`;
        const key = `border${directionName}`;
        let value = `var(--${bwName}-border)`;
        lines.push(makeClass(name, key, value));
        this.getScrubbedFadedNames().forEach((fadedName) => {
          name = `.${bwName}${directionName}-border-${fadedName}`;
          let value = `var(--${bwName}-border-${fadedName})`;
          lines.push(makeClass(name, key, value));
        });
      });
    });
    lines.sort();
    return [`/* B&W Borders */`, ...lines];
  }

  generateBlackAndWhiteTextClasses() {
    const lines = [];
    this.getBlackAndWhiteNames().forEach((bwName) => {
      lines.push(makeClass(`.${bwName}`, `color`, `var(--${bwName})`));
      this.getScrubbedFadedNames().forEach((fadedName) => {
        lines.push(
          makeClass(
            `.${bwName}-${fadedName}`,
            `color`,
            `var(--${bwName}-${fadedName})`,
          ),
        );
      });
    });
    lines.sort();
    return [`/* B&W Text */`, ...lines];
  }

  generatereverseBackgroundClasses() {
    const lines = [];
    this.getreverseNames().forEach((bwName) => {
      lines.push(
        makeClass(
          `.${bwName}-background`,
          `background-color`,
          `var(--${bwName})`,
        ),
      );
      this.getScrubbedFadedNames().forEach((fadedName) => {
        lines.push(
          makeClass(
            `.${bwName}-background-${fadedName}`,
            `background-color`,
            `var(--${bwName}-${fadedName})`,
          ),
        );
      });
    });
    lines.sort();
    return [`/* reverse Background */`, ...lines];
  }

  generatereverseBorderClasses() {
    const lines = [];
    this.getreverseNames().forEach((bwName) => {
      this.getBorderDirectionNames().forEach((directionName) => {
        let name = `.${bwName}${directionName}-border`;
        const key = `border${directionName}`;
        let value = `var(--${bwName}-border)`;
        lines.push(makeClass(name, key, value));
        this.getScrubbedFadedNames().forEach((fadedName) => {
          name = `.${bwName}${directionName}-border-${fadedName}`;
          let value = `var(--${bwName}-border-${fadedName})`;
          lines.push(makeClass(name, key, value));
        });
      });
    });
    lines.sort();
    return [`/* reverse Border */`, ...lines];
  }

  generatereverseTextClasses() {
    const lines = [];
    this.getreverseNames().forEach((bwName) => {
      lines.push(makeClass(`.${bwName}`, `color`, `var(--${bwName})`));
      this.getScrubbedFadedNames().forEach((fadedName) => {
        lines.push(
          makeClass(
            `.${bwName}-${fadedName}`,
            `color`,
            `var(--${bwName}-${fadedName})`,
          ),
        );
      });
    });
    lines.sort();
    return [`/* reverse Text */`, ...lines];
  }

  generateBorderRadiiClasses() {
    const lines = [];
    this.getSizes().forEach((sizeName) => {
      this.getBorderRadiiDirectionNames().forEach((directionName, index) => {
        const ext = this.getBorderRadiiDirectionExtensions()[index];
        const name = `.${sizeName}${directionName}-radius`;
        const key = `border${ext}-radius`;
        const value = `var(--${sizeName}-radius)`;
        lines.push(makeClass(name, key, value));
      });
      p.borderRadiiDirectionHelpers.forEach((helper) => {
        let help = `.${sizeName}-${helper[0]}-radius {
  border-${helper[1]}-radius: var(--${sizeName}-radius);
  border-${helper[2]}-radius: var(--${sizeName}-radius);
}`;
        lines.push(help);
      });
    });
    lines.sort();
    return [`/* Border Radii */`, ...lines];
  }

  generateColorBorderClasses() {
    const lines = [];
    this.getColorActives().forEach((colorName) => {
      this.getBorderDirectionNames().forEach((directionName) => {
        let name = `.${colorName}${directionName}-border`;
        const key = `border${directionName}`;
        let value = `var(--${colorName}-border)`;
        lines.push(makeClass(name, key, value));
        this.getScrubbedFadedNames().forEach((fadedName) => {
          name = `.${colorName}${directionName}-border-${fadedName}`;
          let value = `var(--${colorName}-border-${fadedName})`;
          lines.push(makeClass(name, key, value));
        });
      });
    });
    lines.sort();
    return [`/* Color Borders */`, ...lines];
  }

  generateFlowClasses() {
    const lines = [];
    this.getSizes().forEach((sizeName) => {
      const name = `.${sizeName}-flow > :where(:not(:first-child))`;
      const key = `margin-top`;
      const value = `var(--flow-space, var(--${sizeName}-flow))`;
      lines.push(makeClass(name, key, value));
    });
    lines.sort();
    return [`/* Flows */`, ...lines];
  }

  generateFontSizeClasses() {
    const lines = [];
    this.getSizes().forEach((sizeName) => {
      const name = `.${sizeName}-font`;
      const key = `font-size`;
      const value = `var(--${sizeName}-font)`;
      lines.push(makeClass(name, key, value));
    });
    lines.sort();
    return [`/* Font Sizes */`, ...lines];
  }

  generateLineHeightClasses() {
    const lines = [];
    this.getSizes().forEach((sizeName) => {
      const name = `.${sizeName}-line-height`;
      const key = `line-height`;
      const value = `var(--${sizeName}-line-height)`;
      lines.push(makeClass(name, key, value));
    });
    lines.sort();
    return [`/* Line Heights */`, ...lines];
  }

  generateMarginClasses() {
    const lines = [];
    this.getSizes().forEach((sizeName) => {
      this.getDirections().forEach((direction) => {
        let ext = `-${direction[0]}`;
        if (direction[1] === false) {
          ext = "";
        }
        const name = `.${sizeName}${ext}-margin`;
        const key = `margin${ext}`;
        const value = `var(--${sizeName}-margin)`;
        lines.push(makeClass(name, key, value));
      });
    });
    const name = `.auto-inline-margin`;
    const key = `margin-inline`;
    const value = `auto`;
    lines.push(makeClass(name, key, value));
    lines.sort();
    return [`/* Margins */`, ...lines];
  }

  generatePaddingClasses() {
    const lines = [];
    this.getSizes().forEach((sizeName) => {
      this.getDirections().forEach((direction) => {
        let ext = `-${direction[0]}`;
        if (direction[1] === false) {
          ext = "";
        }
        const name = `.${sizeName}${ext}-padding`;
        const key = `padding${ext}`;
        const value = `var(--${sizeName}-padding)`;
        lines.push(makeClass(name, key, value));
      });
    });
    lines.sort();
    return [`/* Paddings */`, ...lines];
  }

  generateTextAlignmentClasses() {
    const lines = [];
    this.getAlignments().forEach((alignment) => {
      const name = `.align-${alignment}`;
      const key = `text-align`;
      const value = `var(--align-${alignment})`;
      lines.push(makeClass(name, key, value));
    });
    lines.sort();
    return [`/* Alignments */`, ...lines];
  }

  generateColorTextClasses() {
    const lines = [];
    this.getColorActives().forEach((colorName) => {
      this.getFadedValues().forEach((fade) => {
        lines.push(
          makeClass(
            `.${colorName}${fade}`,
            `color`,
            `var(--${colorName}${fade})`,
          ),
        );
      });
    });
    lines.sort();
    return [`/* Color Text */`, ...lines];
  }

  generateWeightClasses() {
    const lines = [];
    this.getWeights().forEach((weight) => {
      const name = `.weight-${weight}`;
      const key = `font-weight`;
      const value = `var(--weight-${weight})`;
      lines.push(makeClass(name, key, value));
    });
    lines.sort();
    return [`/* Weights */`, ...lines];
  }

  generateWidthClasses() {
    const lines = [];
    this.getSizesWithFull().forEach((sizeName) => {
      let name = `.${sizeName}-width`;
      let key = `width`;
      let value = `var(--${sizeName}-width)`;
      lines.push(makeClass(name, key, value));
      name = `.${sizeName}-max-width`;
      key = `max-width`;
      value = `var(--${sizeName}-width)`;
      lines.push(makeClass(name, key, value));
      name = `.${sizeName}-min-width`;
      key = `min-width`;
      value = `var(--${sizeName}-width)`;
      lines.push(makeClass(name, key, value));
    });
    lines.sort();
    // TODO: Split out Max/Min Widths to their own thing
    return [`/* Widths and Max/Min Widths */`, ...lines];
  }

  generateWrapperClasses() {
    const lines = [];
    this.getSizesWithFull().forEach((sizeName) => {
      const name = `.${sizeName}-wrapper`;
      const values =
        `width: var(--${sizeName}-width); margin-inline: auto; & > :where(:not(:first-child)) { margin-top: var(--flow-space, var(--default-flow)); } `;
      lines.push(`${name} { ${values} }`);
    });
    lines.sort();
    return [`/* Wrappers */`, ...lines];
  }

  getActiveBackgroundValueAspect(aspect) {
    if (aspect === "l") {
      return this.getActiveBackgroundValueL();
    } else if (aspect === "c") {
      return this.getActiveBackgroundValueC();
    } else if (aspect === "h") {
      return this.getActiveBackgroundValueH();
    }
  }

  getActiveBackgroundValueC() {
    return p.modes[p.activeMode].base.c;
  }

  getActiveBackgroundValueH() {
    return p.modes[p.activeMode].base.h;
  }

  getActiveBackgroundValueL() {
    return p.modes[p.activeMode].base.l;
  }

  getColorActiveIndexC() {
    return this.getColorIndexC(p.activeMode, p.activeColor);
  }

  getColorActiveIndexH() {
    return this.getColorIndexH(p.activeMode, p.activeColor);
  }

  getColorActiveIndexL() {
    return this.getColorIndexL(p.activeMode, p.activeColor);
  }

  getColorActives() {
    return p.colorNames.filter((name, index) => {
      return index < p.numberOfColors;
    });
  }

  getColorActiveScrubbedName() {
    return scrubStyle(p.colorNames[p.activeColor]);
  }

  getColorActiveValueC() {
    return this.getColorValueC(p.activeMode, p.activeColor);
  }

  getColorActiveValueH() {
    return this.getColorValueH(p.activeMode, p.activeColor);
  }

  getColorActiveValueL() {
    return this.getColorValueL(p.activeMode, p.activeColor);
  }

  getActiveModeScrubbedName() {
    return scrubStyle(p.modes[p.activeMode].name);
  }

  getActiveScrubbedColorNames() {
    return this.getColorActives().map((colorName) => {
      return scrubStyle(colorName);
    });
  }

  getAlignments() {
    return p.alignments;
  }

  getAspectMax(aspect) {
    return p.aspects[aspect].max;
  }

  getAspectStep(aspect) {
    const value = p.aspects[aspect].max / 10000;
    return value.toFixed(7);
  }

  getBackgroundValueC(mode) {
    return p.modes[mode].base.c;
  }

  getBackgroundValueH(mode) {
    return p.modes[mode].base.h;
  }

  getBackgroundValueL(mode) {
    return p.modes[mode].base.l;
  }

  getBlackAndWhiteModeFadedValue(mode, index) {
    return p.modes[mode].blackAndWhiteFaded[index];
  }

  getBlackAndWhiteModeValue(mode, index) {
    return p.modes[mode].blackAndWhiteValues[index];
  }

  getreverseVadedValue(mode, index) {
    return p.modes[mode].blackAndWhitereverseFaded[index];
  }

  getreverseValue(mode, index) {
    return p.modes[mode].blackAndWhitereverseValues[index];
  }

  getBlackAndWhiteNames() {
    return p.blackAndWhiteNames;
  }

  getreverseNames() {
    return p.blackAndWhiteNamesreverse;
  }

  getBorderDirectionExtensions() {
    return p.directions.map((direction) => {
      if (direction[1] === true) {
        return `-${direction[0]}`;
      } else {
        return "";
      }
    });
  }

  getBorderDirectionNames() {
    return p.directions.map((direction) => {
      if (direction[1] === true) {
        return `-${direction[0]}`;
      } else {
        return `${direction[0]}`;
      }
    });
  }

  getBorderRadiiDirectionExtensions() {
    return p.borderRadiiDirections.map((direction) => {
      if (direction[1] === true) {
        return `-${direction[0]}`;
      } else {
        return "";
      }
    });
  }

  getBorderRadiiDirectionNames() {
    return p.borderRadiiDirections.map((direction) => {
      if (direction[1] === true) {
        return `-${direction[0]}`;
      } else {
        return `${direction[0]}`;
      }
    });
  }

  getColorFadedValue(mode, color, index) {
    return p.modes[mode].colors[color].fadedValues[index];
  }

  getColorHueValues(mode, color) {
    const values = [];
    const hueOffsetAmount = this.getHueOffsetAmount(mode, color);
    for (let value = 0; value < 360; value += hueOffsetAmount) {
      values.push(value + p.modes[mode].base.h);
    }
    return values;
  }

  getColorIndexC(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].c;
  }

  getColorIndexH(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].h;
  }

  getColorIndexL(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l;
  }

  getColorMinLightValue(mode, color) {
    return p.modes[mode].colors[color].minLightLevel;
  }

  getColorNames() {
    return p.colorNames.filter((name, index) => {
      if (index < p.numberOfColors) {
        return name;
      }
    });
  }

  getColorValueC(mode, color) {
    return this.getColorIndexC(mode, color).toFixed(5);
  }

  getColorValueH(mode, color) {
    const h = this.getColorIndexH(mode, color);
    return this.getColorHueValues(mode, color)[h].toFixed(5);
  }

  getColorValueL(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    const l = p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l;
    return this.getLightnessValues(mode, color)[l];
  }

  // TODO: Deprecate and put in data object
  getDirections() {
    return p.directions;
  }

  // TODO: Deprecate and put in data object
  getFadedValues() {
    return ["", "-faded", "-faded2"];
  }

  getHueOffsetAmount(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.hueOffsets[hueOffsetIndex];
  }

  getHueOffsetIndex(mode, color) {
    return p.modes[mode].colors[color].hueOffsetIndex;
  }

  getHueRowCount(mode, color) {
    return Math.round(360 / this.getHueOffsetAmount(mode, color));
  }

  getLightnessValues(mode, color) {
    const levels = [];
    const minLightLevel = this.getColorMinLightValue(mode, color);
    const adder = (p.maxLightValue - minLightLevel) / (p.lightLevels - 1);
    for (let level = minLightLevel; level <= p.maxLightValue; level += adder) {
      levels.push(level.toFixed(5));
    }
    return levels;
  }

  getModeNames() {
    return p.modes.map((mode) => {
      return mode.name;
    });
  }

  getScrubbedModeNames() {
    return p.modes.map((mode) => {
      return scrubStyle(mode.name);
    });
  }

  getScrubbedActiveModeName() {
    return scrubStyle(p.modes[p.activeMode].name);
  }

  getScrubbedFadedNames() {
    return p.fadedNames.map((name) => {
      return scrubStyle(name);
    });
  }

  getSizes() {
    return p.sizeNames;
  }

  getSizesWithFull() {
    return ["full", ...this.getSizes()];
  }

  getSpecificModeName(modeIndex) {
    return this.getModeNames()[modeIndex];
  }

  getSpecificModeScrubbedName(modeIndex) {
    return this.getScrubbedModeNames()[modeIndex];
  }

  getUtilityClasses() {
    const out = [];
    const defaultThemeKind = elV2(`input[name="default-mode"]:checked`).value;
    // Alignment Classes
    out.push(
      this.generateTextAlignmentClasses()
        .join("\n"),
    );
    out.push("\n");
    // B&W Background Classes
    out.push(
      this
        .generateBlackAndWhiteBackgroundClasses().join(
          "\n",
        ),
    );
    out.push("\n");
    // B&W Border Classes
    out.push(
      this
        .generateBlackAndWhiteBorderClasses().join("\n"),
    );
    out.push("\n");
    // B&W Text Classes
    out.push(
      this
        .generateBlackAndWhiteTextClasses().join("\n"),
    );
    out.push("\n");
    // Border Radii Classes
    out.push(
      this.generateBorderRadiiClasses().join(
        "\n",
      ),
    );
    out.push("\n");
    // Color Background Classes
    out.push(
      this
        .generateColorBackgroundClasses().join("\n"),
    );
    out.push("\n");
    // Color Border Classes
    out.push(
      this.generateColorBorderClasses().join(
        "\n",
      ),
    );
    out.push("\n");
    // Color Text Classes
    out.push(
      this.generateColorTextClasses().join(
        "\n",
      ),
    );
    out.push("\n");
    // Flow Classes
    out.push(this.generateFlowClasses().join("\n"));
    out.push("\n");
    // Font Size Classes
    out.push(this.generateFontSizeClasses().join("\n"));
    out.push("\n");
    // Line Height Classes
    out.push(this.generateLineHeightClasses().join("\n"));
    out.push("\n");
    // Margin Classes
    out.push(this.generateMarginClasses().join("\n"));
    out.push("\n");
    // Padding Classes
    out.push(this.generatePaddingClasses().join("\n"));
    out.push("\n");
    out.push("\n");
    // reverse Background Classes
    out.push(
      this
        .generatereverseBackgroundClasses().join(
          "\n",
        ),
    );
    out.push("\n");
    // reverse Border Classes
    out.push(
      this
        .generatereverseBorderClasses().join("\n"),
    );
    out.push("\n");
    // reverse Text Classes
    out.push(
      this
        .generatereverseTextClasses().join("\n"),
    );
    out.push("\n");
    // Weight Classes
    out.push(this.generateWeightClasses().join("\n"));
    out.push("\n");
    // Width Classes
    out.push(this.generateWidthClasses().join("\n"));
    out.push("\n");
    // Wrapper Classes
    out.push(this.generateWrapperClasses().join("\n"));
    out.push("\n");
    return out.join("\n");
  }

  getUtilityVars() {
    const out = [];
    const defaultThemeKind = elV2(`input[name="default-mode"]:checked`).value;
    // Alignment Variables
    out.push(":root {");
    out.push(
      this.queryTextAlignmentVars().join(
        "\n",
      ),
    );
    out.push("}\n");
    // B&W Base and Mode Variables
    out.push(":root {");
    out.push(
      this
        .queryBlackAndWhiteBaseVars().join("\n"),
    );
    out.push("}\n");
    if (defaultThemeKind === "light") {
      out.push(":root {");
      out.push(this.queryBlackAndWhiteModeVars(0).join("\n"));
      out.push("}\n");
      out.push(`@media (prefers-color-scheme: dark) {`);
      out.push("  :root {");
      out.push(this.queryBlackAndWhiteModeVars(1).join("\n"));
      out.push("  }");
      out.push("}");
    } else {
      out.push(":root {");
      out.push(this.queryBlackAndWhiteModeVars(1).join("\n"));
      out.push("}\n");
      out.push(`@media (prefers-color-scheme: light) {`);
      out.push("  :root {");
      out.push(this.queryBlackAndWhiteModeVars(0).join("\n"));
      out.push("  }");
      out.push("}");
    }
    out.push("\n");
    // B&W Border Variables
    out.push(":root {");
    out.push(
      this
        .queryBlackAndWhiteBorderVars().join("\n"),
    );
    out.push("}\n");
    // Border Radii Variables
    out.push(":root {");
    out.push(this.queryBorderRadiiVars().join("\n"));
    out.push("}\n");
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    // Color payload: TODO: Move this to a function and
    // use it here and for the basic output
    const defaultThemeKindForColors =
      elV2(`input[name="default-mode"]:checked`).value;
    out.push(":root {");
    out.push(this.queryColorModeVars().join("\n"));
    out.push("}\n");
    if (defaultThemeKindForColors === "light") {
      out.push(":root {");
      out.push(this.queryColorPreferredVars(0).join("\n"));
      out.push("}\n");
      out.push(`@media (prefers-color-scheme: dark) {`);
      out.push(":root {");
      out.push(this.queryColorPreferredVars(1).join("\n"));
      out.push("}");
      out.push("}");
    } else {
      out.push(":root {");
      out.push(this.queryColorPreferredVars(1).join("\n"));
      out.push("}\n");
      out.push(`@media (prefers-color-scheme: light) {`);
      out.push(":root {");
      out.push(this.queryColorPreferredVars(0).join("\n"));
      out.push("}");
      out.push("}");
    }
    out.push("\n");
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    // Color Border Variables
    out.push(":root {");
    out.push(
      this.queryColorBorderStyleVars()
        .join("\n"),
    );
    out.push("}\n");
    // Flow Variables
    out.push(":root {");
    out.push(this.queryFlowVars().join("\n"));
    out.push("}\n");
    // Font Size Variables
    out.push(":root {");
    out.push(this.queryFontSizeVars().join("\n"));
    out.push("}\n");
    // Line Height Variables
    out.push(":root {");
    out.push(this.queryLineHeightVars().join("\n"));
    out.push("}\n");
    // Margin Variables
    out.push(":root {");
    out.push(this.queryMarginVars().join("\n"));
    out.push("}\n");
    // Padding Variables
    out.push(":root {");
    out.push(this.queryPaddingVars().join("\n"));
    out.push("}\n");
    // Reverse Base and Mode Variables
    out.push(":root {");
    out.push(
      this
        .queryReverseBaseVars().join("\n"),
    );
    out.push("}\n");
    if (defaultThemeKind === "light") {
      out.push(":root {");
      out.push(this.queryReverseModeVars(0).join("\n"));
      out.push("}\n");
      out.push(`@media (prefers-color-scheme: dark) {`);
      out.push(":root {");
      out.push(this.queryReverseModeVars(1).join("\n"));
      out.push("}");
      out.push("}\n");
    } else {
      out.push(":root {");
      out.push(this.queryReverseModeVars(1).join("\n"));
      out.push("}\n");
      out.push(":root {");
      out.push(`@media (prefers-color-scheme: light) {`);
      out.push("}");
      out.push(this.queryReverseModeVars(0).join("\n"));
      out.push("}");
      out.push("}\n");
    }
    // Reverse Border Variables
    out.push(":root {");
    out.push(
      this
        .queryReverseBorderVars().join("\n"),
    );
    out.push("}\n");
    // Weight Variables
    out.push(":root {");
    out.push(this.queryWeightVars().join("\n"));
    out.push("}\n");
    // Width Variables
    out.push(":root {");
    out.push(this.queryWidthVars().join("\n"));
    out.push("}\n");
    return out.join("\n");
  }

  getWeights() {
    return p.weights;
  }

  initBackgroundCheckboxes() {
    dbg("initBackgroundCheckboxes()");
    const sidebars = els(".sidebar-controls");
    sidebars.forEach((sidebar) => {
      const tab = gds("tab", sidebar);
      const wrapper = getEl(".background-box-isolate-wrapper", sidebar);
      const connector = `background-box-isolate-checkbox-${tab}`;
      const label = getEl("label", wrapper);
      sa("for", connector, label);
      ac("picker-text", label);
      const checkbox = getEl("input", wrapper);
      sa("id", connector, checkbox);
      sa("name", connector, checkbox);
      ad("kind", "background-box-isolate-checkbox", checkbox);
      ad("tab", tab, checkbox);
    });
  }

  initBackgroundSliders() {
    dbg("initBackgroundSlider()");
    const sidebars = els(".sidebar-controls");
    sidebars.forEach((sidebar) => {
      const tab = gds("tab", sidebar);
      const wrappers = getEls(".background-box-slider-wrapper", sidebar);
      wrappers.forEach((wrapper) => {
        const aspect = gds("aspect", wrapper);
        const connector = `background-box-slider-${tab}-${aspect}`;
        const label = getEl("label", wrapper);
        label.innerHTML = `${aspect}:`;
        sa("for", connector, label);
        ac("picker-text", label);
        const slider = getEl("input", wrapper);
        sa("name", connector, slider);
        sa("min", "0", slider);
        sa("max", this.getAspectMax(aspect), slider);
        sa("step", this.getAspectStep(aspect), slider);
        ad("aspect", aspect, slider);
        ad("tab", tab, slider);
      });
      this.updateBackgroundSliders(tab);
    });
  }

  initColorTabs() {
    dbg("initColorTabs");
    const sidebars = els(".sidebar-controls");
    sidebars.forEach((sidebar) => {
      const tabKey = gds("tab", sidebar);
      const wrapper = getEl(".colors-box-tabs-wrapper", sidebar);
      html("", wrapper);
      const tabGroup = dc("tab-group");
      const tabList = dc("div");
      sa("role", "tablist", tabList);
      ac("colors-box-tab-list", tabList);
      for (let nameIndex = 0; nameIndex < p.numberOfColors; nameIndex++) {
        const tabButton = dc("button");
        sa("role", "tab", tabButton);
        ac("color-selector-button", tabButton);
        if (nameIndex === p.activeColor) {
          sa("aria-selected", "true", tabButton);
          ac(`ui__background-text`, tabButton);
          // ac(`ui__mode-${p.activeMode}__color-${nameIndex}-background`, tabButton);
          // ac(`reverse`, tabButton);
          ac(
            `ui__mode-${p.activeMode}__color-${nameIndex}-background`,
            tabButton,
          );
          ac(`${this.getColorActiveScrubbedName()}-bottom-border`, tabButton);
        } else {
          ac(`reverse-bottom-border`, tabButton);
          ac(`ui__background-text`, tabButton);
          // ac(`background-text`, tabButton);
          //ac(`ui__mode-${p.activeMode}__color-${nameIndex}-text`, tabButton);
          // ac(`ui__mode-${p.activeMode}__color-${nameIndex}-text`, tabButton);
          ac(
            `ui__mode-${p.activeMode}__color-${nameIndex}-background`,
            tabButton,
          );
        }
        html(Array.from(p.colorNames[nameIndex])[0], tabButton);
        ad("kind", "color-selector-button", tabButton);
        ad("color", nameIndex, tabButton);
        if (nameIndex === p.numberOfColors - 1) {
          ac(`round-upper-right-corner`, tabButton);
        }
        a(tabButton, tabList);
      }
      a(tabList, tabGroup);
      for (let nameIndex = 0; nameIndex < p.numberOfColors; nameIndex++) {
        const panel = dc("div");
        sa("role", "tabpanel", panel);
        ac(`color-tab-panel`, panel);
        if (nameIndex !== p.activeColor) {
          panel.hidden = true;
        }
        const tabName = dc("div");
        html(p.colorNames[nameIndex], tabName);
        ac(`ui__mode-${p.activeMode}__color-${nameIndex}-background`, tabName);
        ac(`ui__background-text`, tabName);
        ac(`color-selector-tab-name`, tabName);
        a(tabName, panel);
        const tabGrid = dc("div");
        ac("color-grid-wrapper", tabGrid);
        this.getColorHueValues(p.activeMode, p.activeColor).forEach(
          (hueData, hue) => {
            const row = dc("div");
            this.getLightnessValues(p.activeMode, p.activeColor).forEach(
              (lightnessData, lightness) => {
                const button = dc("button");
                html("set", button);
                ad("kind", "color-box-set-button", button);
                ad("mode", p.activeMode, button);
                ad("color", nameIndex, button);
                ad("lightness", lightness, button);
                ad("hue", hue, button);
                ac(`ui__set-grid__lightness-${lightness}__hue-${hue}`, button);
                ac(
                  `ui__set-grid__lightness-${lightness}__hue-${hue}__decoration`,
                  button,
                );
                ac(`color-box-set-button`, button);
                // a(button, row);
                a(button, tabGrid);
              },
            );
            //    a(row, tabGrid);
          },
        );
        a(tabGrid, panel);

        const chromaWrapper = dc("div");
        ac("colors-box-chroma-slider-wrapper", chromaWrapper);
        const connector = `colors-box-chroma-slider-${tabKey}`;
        const label = dc("label");
        ac("colors-box-chroma-slider-label", label);
        sa("for", connector, label);
        html("c:", label);
        a(label, chromaWrapper);
        const sliderWrapper = dc("div");
        ac("slider-wrapper", sliderWrapper);
        const slider = dc("input");
        sa("type", "range", slider);
        sa("name", connector, slider);
        sa("min", "0", slider);
        sa("max", this.getAspectMax("c"), slider);
        sa("step", this.getAspectStep("c"), slider);
        ad("kind", "color-chroma-slider", slider);
        ad("color", nameIndex, slider);
        slider.value = this.getColorValueC(p.activeMode, nameIndex);
        a(slider, sliderWrapper);
        a(sliderWrapper, chromaWrapper);
        a(chromaWrapper, panel);
        const checkboxWrapper = dc("div");
        ac("colors-box-chroma-checkbox-wrapper", checkboxWrapper);
        const checkboxConnector = `colors-box-chroma-checkbox-${tabKey}`;
        const checkboxLabel = dc("label");
        ac("colors-box-chroma-checkbox-label", checkboxLabel);
        sa("for", checkboxConnector, checkboxLabel);
        html("Isolate: ", checkboxLabel);
        const checkbox = dc("input");
        sa("id", checkboxConnector, checkbox);
        sa("name", checkboxConnector, checkbox);
        sa("type", "checkbox", checkbox);
        ad("kind", "color-isolate-checkbox", checkbox);
        ad("color", nameIndex, checkbox);
        if (p.isolatedColor >= 0) {
          checkbox.checked = true;
        }
        a(checkboxLabel, checkboxWrapper);
        a(checkbox, checkboxWrapper);
        a(checkboxWrapper, panel);
        a(panel, tabGroup);
      }
      a(tabGroup, wrapper);
    });
  }

  initControls() {
    const sidebars = els(".sidebar-controls");
    const template = elV2("#picker-controls-template");
    sidebars.forEach((sidebar) => {
      html("", sidebar);
      const clone = template.content.cloneNode(true);
      a(clone, sidebar);
    });
    this.initModeButtonsV2();
    this.initBackgroundSliders();
    this.initBackgroundCheckboxes();
    this.initColorTabs();
  }

  initModeButtonsV2() {
    const sidebars = els(".sidebar-controls");
    sidebars.forEach((sidebar) => {
      const tab = gds("tab", sidebar);
      const modeWrapper = getEl(".mode-buttons", sidebar);
      ad("tab", tab, modeWrapper);
      html("", modeWrapper);
      this.getModeNames().forEach((modeName, modeIndex) => {
        const modeDiv = dc("div");
        ac(`mode-button-wrapper`, modeDiv);
        const scrubbedName = scrubStyle(modeName);
        const inputWrapper = dc("div");
        const input = dc("input");
        sa("type", "radio", input);
        if (modeIndex === p.activeMode) {
          input.checked = true;
        }
        ac(`mode-${modeIndex}-selector-button`, input);
        ad("tab", tab, input);
        ad("mode", modeIndex, input);
        ad("kind", "mode-button", input);
        sa("name", "mode-selector-button", input);
        input.id = `mode-${scrubbedName}-selector-button`;
        a(input, inputWrapper);
        a(inputWrapper, modeDiv);
        a(modeDiv, modeWrapper);
        const label = dc("label");
        label.innerHTML = modeName;
        sa("for", `mode-${scrubbedName}-selector-button`, label);
        a(label, modeDiv);
      });
    });
  }

  initUtilityClasses() {
    this.utilityClassesStyleSheet = dc("style");
    document.head.appendChild(this.utilityClassesStyleSheet);
    this.utilityClassesStyleSheet.innerHTML = this.getUtilityClasses();
  }

  // TODO: Verify
  loadData() {
    const checkData = localStorage.getItem(config.storageName);
    if (checkData && checkData.version[0] === 1) {
      dbg(`Loaded colors from storage`);
      p = checkData;
    } else {
      this.loadDefaults();
    }
    p = data.palettes[0];
  }

  // TODO: Verify
  loadDefaults() {
    data = {
      palettes: [defaultPalette],
      schemaVersion: [1, 0, 0],
    };
    dbg("Loaded default colors");
  }

  outputColorClasses() {
    const out = [];
    const defaultThemeKind = elV2(`input[name="default-mode"]:checked`).value;
    out.push(":root {");
    out.push("  /* Color Scheme Signal */");
    out.push("  color-scheme: light dark;");
    out.push("}\n");
    out.push(":root {");
    out.push(this.queryColorModeVars().join("\n"));
    out.push("}\n");
    if (defaultThemeKind === "light") {
      out.push(":root {");
      out.push(this.queryColorPreferredVars(0).join("\n"));
      out.push("}\n\n");
      out.push(`@media (prefers-color-scheme: dark) {`);
      out.push(":root {");
      out.push(this.queryColorPreferredVars(1).join("\n"));
      out.push("}");
    } else {
      out.push(":root {");
      out.push(this.queryColorPreferredVars(1).join("\n"));
      out.push("}\n\n");
      out.push(`@media (prefers-color-scheme: light) {`);
      out.push(":root {");
      out.push(this.queryColorPreferredVars(0).join("\n"));
      out.push("}");
    }
    el("basic-css-output").innerHTML = out.join("\n");
  }

  outputUtilityClasses() {
    const defaultThemeKind = elV2(`input[name="default-mode"]:checked`).value;
    const out = [];
    out.push("/*");
    out.push(
      "TODO: add font-family (use --default-family and .default-family",
    );
    out.push(
      "thinking the color names? probably they just need to be custom names)",
    );
    out.push(
      "TODO: heights or min heights?",
    );
    out.push("TODO: add flexes and maybe grids?");
    out.push(
      "TODO: add italic (and italics), underline (and underlined), etc...",
    );
    out.push("TODO: add grids (if there are reasonsable defaults)");
    out.push("TODO: add tabs?");
    out.push("TODO: vertical aligns?");
    out.push("TODO: classes for wrapping and no wrapping pre blocks?");
    out.push(
      "TODO: large-border? where you can set the number of pixels vai a var?",
    );
    out.push("*/");
    out.push("\n");
    // Color Scheme Signal
    out.push(":root {");
    out.push("  /* Color Scheme Signal */");
    out.push("  color-scheme: light dark;");
    out.push("}\n");
    // Vars
    out.push(this.getUtilityVars());
    // Reset Styles
    out.push(shiftReset(el("reset-styles").innerHTML));
    // Classes
    out.push(this.getUtilityClasses());
    // Layout Styles
    out.push(shiftReset(el("layout-styles").innerHTML));
    html(out.join("\n"), ".utility-styles");
  }

  queryReverseModeVars(modeIndex) {
    const lines = [];
    const modeName = this.getModeNames()[modeIndex];
    const scrubbedModeName = scrubStyle(modeName);
    this.getreverseNames().forEach((bwName) => {
      lines.push(
        makeVar(`  --${bwName}`, `var(--${scrubbedModeName}-mode__${bwName})`),
      );
      this.getScrubbedFadedNames().forEach((fadedName) => {
        lines.push(
          makeVar(
            `  --${bwName}-${fadedName}`,
            `var(--${scrubbedModeName}-mode__${bwName}-${fadedName})`,
          ),
        );
      });
    });
    lines.sort(sortVars);
    return [`  /* reverse ${modeName} Mode Variables */`, ...lines];
  }

  queryBlackAndWhiteModeVars(modeIndex) {
    const lines = [];
    const baseModeName = this.getModeNames()[modeIndex];
    const scrubbedModeName = scrubStyle(baseModeName);
    this.getBlackAndWhiteNames().forEach((bwName) => {
      lines.push(
        makeVar(`  --${bwName}`, `var(--${scrubbedModeName}-mode__${bwName})`),
      );
      this.getScrubbedFadedNames().forEach((fadedName) => {
        lines.push(
          makeVar(
            `  --${bwName}-${fadedName}`,
            `var(--${scrubbedModeName}-mode__${bwName}-${fadedName})`,
          ),
        );
      });
    });
    lines.sort(sortVars);
    return [`  /* B&W ${baseModeName} Mode Variables */`, ...lines];
  }

  queryBlackAndWhiteBorderVars() {
    const lines = [];
    this.getBlackAndWhiteNames().forEach((bwName) => {
      this.getFadedValues().forEach((fadedName) => {
        const name = `  --${bwName}-border${fadedName}`;
        const value = `1px solid var(--${bwName}${fadedName})`;
        lines.push(makeVar(name, value));
      });
    });
    lines.sort(sortVars);
    return [`  /* B&W Border Variables */`, ...lines];
  }

  queryBlackAndWhiteBaseVars() {
    const lines = [];
    this.getScrubbedModeNames().forEach((modeName, modeIndex) => {
      this.getBlackAndWhiteNames().forEach((bwName, bwIndex) => {
        const lightnessValue = this.getBlackAndWhiteModeValue(
          modeIndex,
          bwIndex,
        );
        lines.push(
          makeVar(
            `  --${modeName}-mode__${bwName}`,
            `oklch(${lightnessValue}% 0 0)`,
          ),
        );
        this.getScrubbedFadedNames().forEach((fadedName, fadedIndex) => {
          const fadedValue = this.getBlackAndWhiteModeFadedValue(
            modeIndex,
            fadedIndex,
          );
          lines.push(
            makeVar(
              `  --${modeName}-mode__${bwName}-${fadedName}`,
              `oklch(${lightnessValue}% 0 0 / ${fadedValue})`,
            ),
          );
        });
      });
    });
    lines.sort(sortVars);
    return [`  /* B&W Base Variables */`, ...lines];
  }

  queryReverseBorderVars() {
    const lines = [];
    this.getreverseNames().forEach((bwName) => {
      this.getFadedValues().forEach((fadedName) => {
        const name = `  --${bwName}-border${fadedName}`;
        const value = `1px solid var(--${bwName}${fadedName})`;
        lines.push(makeVar(name, value));
      });
    });
    lines.sort(sortVars);
    return [`  /* reverse Border Variables */`, ...lines];
  }

  queryReverseBaseVars() {
    const lines = [];
    this.getScrubbedModeNames().forEach((modeName, modeIndex) => {
      this.getreverseNames().forEach((bwName, bwIndex) => {
        const lightnessValue = this.getreverseValue(
          modeIndex,
          bwIndex,
        );
        lines.push(
          makeVar(
            `  --${modeName}-mode__${bwName}`,
            `oklch(${lightnessValue}% 0 0)`,
          ),
        );
        this.getScrubbedFadedNames().forEach((fadedName, fadedIndex) => {
          const fadedValue = this.getreverseVadedValue(
            modeIndex,
            fadedIndex,
          );
          lines.push(
            makeVar(
              `  --${modeName}-mode__${bwName}-${fadedName}`,
              `oklch(${lightnessValue}% 0 0 / ${fadedValue})`,
            ),
          );
        });
      });
    });
    lines.sort(sortVars);
    return [`  /* reverse Base Variables */`, ...lines];
  }

  queryBorderRadiiVars() {
    const lines = [];
    this.getSizes().forEach((sizeName, sizeIndex) => {
      const name = `  --${sizeName}-radius`;
      const value = `${p.borderRadii[sizeIndex]}`;
      lines.push(makeVar(name, value));
    });
    lines.sort(sortVars);
    return [`  /* Border Radii Variables */`, ...lines];
  }

  queryColorPreferredVars(modeIndex) {
    const lines = [];
    const modeBaseName = this.getSpecificModeName(modeIndex);
    const modeScrubbedName = scrubStyle(modeBaseName);
    lines.push(
      makeVar(
        `  --background`,
        `var(--${modeScrubbedName}-mode__background)`,
      ),
    );
    this.getActiveScrubbedColorNames().forEach((colorName) => {
      lines.push(
        makeVar(
          `  --${scrubStyle(colorName)}`,
          `var(--${modeScrubbedName}-mode__${scrubStyle(colorName)})`,
        ),
      );
      this.getScrubbedFadedNames().forEach((fadedName) => {
        lines.push(
          makeVar(
            `  --${scrubStyle(colorName)}-${fadedName}`,
            `var(--${modeScrubbedName}-mode__${
              scrubStyle(colorName)
            }-${fadedName})`,
          ),
        );
      });
    });
    lines.sort(sortVars);
    return [`  /* Color ${modeBaseName} Mode Variables */`, ...lines];
  }

  // TODO: Deprecate in favor of mode indexed version
  queryColorActiveVars() {
    const lines = [];
    this.getActiveScrubbedColorNames().forEach((colorName) => {
      const modeName = this.getActiveModeScrubbedName(p.activeMode);
      lines.push(
        makeVar(
          `  --${scrubStyle(colorName)}`,
          `var(--${modeName}-mode__${scrubStyle(colorName)})`,
        ),
      );
      this.getScrubbedFadedNames().forEach((fadedName) => {
        lines.push(
          makeVar(
            `  --${scrubStyle(colorName)}-${fadedName}`,
            `var(--${modeName}-mode__${scrubStyle(colorName)}-${fadedName})`,
          ),
        );
      });
    });
    lines.sort(sortVars);
    return [`  /* Active Color Variables */`, ...lines];
  }

  queryColorBorderStyleVars() {
    const lines = [];
    this.getColorActives().forEach((colorName) => {
      this.getFadedValues().forEach((fadedName) => {
        const name = `  --${colorName}-border${fadedName}`;
        const value = `1px solid var(--${colorName}${fadedName})`;
        lines.push(makeVar(name, value));
      });
    });
    lines.sort(sortVars);
    return [`  /* Color Border Variables */`, ...lines];
  }

  queryColorModeVars() {
    const lines = [];
    p.modes.forEach((modeData, modeIndex) => {
      const modeName = scrubStyle(modeData.name);
      const backgroundL = this.getBackgroundValueL(modeIndex);
      const backgroundC = this.getBackgroundValueC(modeIndex);
      const backgroundH = this.getBackgroundValueH(modeIndex);

      const backgroundName = `  --${modeName}-mode__${p.backgroundColorName}`;
      const backgroundValue =
        `oklch(${backgroundL}% ${backgroundC} ${backgroundH})`;
      lines.push(`${backgroundName}: ${backgroundValue};`);
      this.getColorActives().forEach((colorName, colorIndex) => {
        const l = this.getColorValueL(modeIndex, colorIndex);
        const c = this.getColorValueC(modeIndex, colorIndex);
        const h = this.getColorValueH(modeIndex, colorIndex);
        const textName = `  --${modeName}-mode__${colorName}`;
        const textValue = `oklch(${l}% ${c} ${h})`;
        lines.push(`${textName}: ${textValue};`);
        p.fadedNames.forEach((fadedName) => {
          const fade = 0.5;
          const fadedClassName = `  --${scrubStyle(modeName)}-mode__${
            scrubStyle(colorName)
          }-${fadedName}`;
          const fadedValue = `oklch(${l}% ${c} ${h} / ${fade})`;
          lines.push(`${fadedClassName}: ${fadedValue};`);
        });
      });
    });
    lines.sort(sortVars);
    return [`  /* Color Base Variables */`, ...lines];
  }

  queryFlowVars() {
    const lines = [];
    this.getSizes().forEach((sizeName, sizeIndex) => {
      const name = `  --${sizeName}-flow`;
      const value = `${p.flows[sizeIndex]}`;
      lines.push(makeVar(name, value));
    });
    lines.sort(sortVars);
    return [`  /* Flow Variables */`, ...lines];
  }

  queryFontSizeVars() {
    const lines = [];
    this.getSizes().forEach((sizeName, sizeIndex) => {
      const name = `  --${sizeName}-font`;
      const value = `${p.fontSizes[sizeIndex]}`;
      lines.push(makeVar(name, value));
    });
    lines.sort(sortVars);
    return [`  /* Font Size Variables */`, ...lines];
  }

  queryLineHeightVars() {
    const lines = [];
    this.getSizes().forEach((sizeName, sizeIndex) => {
      const name = `  --${sizeName}-line-height`;
      const value = `${p.lineHeights[sizeIndex]}`;
      lines.push(makeVar(name, value));
    });
    lines.sort(sortVars);
    return [`  /* Line Height Variables */`, ...lines];
  }

  queryMarginVars() {
    const lines = [];
    this.getSizes().forEach((sizeName, sizeIndex) => {
      const name = `  --${sizeName}-margin`;
      const value = `${p.margins[sizeIndex]}`;
      lines.push(makeVar(name, value));
    });
    lines.sort(sortVars);
    return [`  /* Margin Variables */`, ...lines];
  }

  queryPaddingVars() {
    const lines = [];
    this.getSizes().forEach((sizeName, sizeIndex) => {
      const name = `  --${sizeName}-padding`;
      const value = `${p.paddings[sizeIndex]}`;
      lines.push(makeVar(name, value));
    });
    lines.sort(sortVars);
    return [`  /* Padding Variables */`, ...lines];
  }

  queryTextAlignmentVars() {
    const lines = [];
    this.getAlignments().forEach((alignment) => {
      const name = `  --align-${alignment}`;
      const value = `${alignment}`;
      lines.push(makeVar(name, value));
    });
    lines.sort(sortVars);
    return [`  /* Alignment Variables */`, ...lines];
  }

  queryUiVarsStyleSheet() {
    if (this.uiColorVarsStyleSheet === undefined) {
      this.uiColorVarsStyleSheet = dc("style");
      ad("name", "UI Vars", this.uiColorVarsStyleSheet);
      document.head.appendChild(this.uiColorVarsStyleSheet);
    }
    const lines = [];
    // Background
    lines.push(
      `--${p.backgroundColorName}: var(--${this.getActiveModeScrubbedName()}-mode__${p.backgroundColorName});`,
    );

    lines.push(this.queryColorPreferredVars(p.activeMode).join("\n"));
    lines.push(this.queryBlackAndWhiteModeVars(p.activeMode).join("\n"));
    lines.push(this.queryReverseModeVars(p.activeMode).join("\n"));

    // UI Color
    if (this.getBackgroundValueL(p.activeMode) > 40) {
      lines.push(`--ui__picker: oklch(0% 0 0);`);
      lines.push(`--ui__picker-faded: oklch(0% 0 0 / .7);`);
      lines.push(`--ui__picker-faded2: oklch(0% 0 0 / .7);`);
    } else {
      lines.push(`--ui__picker: oklch(100% 0 0);`);
      lines.push(`--ui__picker-faded: oklch(100% 0 0 / .4);`);
      lines.push(`--ui__picker-faded2: oklch(100% 0 0 / .4);`);
    }
    // color-box-set-button-underlines
    this.getColorHueValues(p.activeMode, p.activeColor).forEach(
      (hueData, hueIndex) => {
        this.getLightnessValues(p.activeMode, p.activeColor).forEach(
          (lightnessData, lightnessIndex) => {
            if (
              this.getColorActiveIndexH() === hueIndex &&
              this.getColorActiveIndexL() === lightnessIndex
            ) {
              lines.push(
                makeVar(
                  `--ui__lightness-${lightnessIndex}__hue-${hueIndex}__decoration`,
                  `underline`,
                ),
              );
            }
          },
        );
      },
    );

    // color mode selector buttons
    p.modes.forEach((modeData, modeIndex) => {
      if (modeIndex === p.activeMode) {
        lines.push(
          makeVar(
            `  --mode-${modeIndex}-selector-button-color`,
            `var(--content)`,
          ),
        );
        lines.push(
          makeVar(
            `  --mode-${modeIndex}-selector-button-background-color`,
            `var(--white)`,
          ),
        );
      } else {
        lines.push(
          makeVar(
            `  --mode-${modeIndex}-selector-button-color`,
            `var(--black)`,
          ),
        );
        lines.push(
          makeVar(
            `  --mode-${modeIndex}-selector-button-background-color`,
            `var(--white-faded)`,
          ),
        );
      }
    });
    p.modes.forEach((modeData, modeIndex) => {
      const modeName = scrubStyle(modeData.name);
      const backgroundL = this.getBackgroundValueL(modeIndex);
      const backgroundC = this.getBackgroundValueC(modeIndex);
      const backgroundH = this.getBackgroundValueH(modeIndex);
      let backgroundName = `--ui__${modeName}-mode__${p.backgroundColorName}`;
      let backgroundValue =
        `oklch(${backgroundL}% ${backgroundC} ${backgroundH})`;
      lines.push(`${backgroundName}: ${backgroundValue};`);
      backgroundName = `--ui__mode-${modeIndex}__background`;
      backgroundValue = `oklch(${backgroundL}% ${backgroundC} ${backgroundH})`;
      lines.push(`${backgroundName}: ${backgroundValue};`);
      this.getColorActives().forEach((colorName, colorIndex) => {
        const l = this.getColorValueL(modeIndex, colorIndex);
        const c = this.getColorValueC(modeIndex, colorIndex);
        const h = this.getColorValueH(modeIndex, colorIndex);
        let textName = `--ui__${modeName}-mode__${scrubStyle(colorName)}`;
        let textValue = `oklch(${l}% ${c} ${h})`;
        lines.push(makeVar(textName, textValue));
        textName = `--ui__mode-${modeIndex}__color-${colorIndex}`;
        textValue = `oklch(${l}% ${c} ${h})`;
        lines.push(`${textName}: ${textValue};`);
        p.fadedNames.forEach((fadedName) => {
          const fade = 0.5;
          let fadedClassName =
            `--ui__${modeName}-mode__${colorName}-${fadedName}`;
          let fadedValue = `oklch(${l}% ${c} ${h} / ${fade})`;
          lines.push(`${fadedClassName}: ${fadedValue};`);
          fadedClassName =
            `--ui__mode-${modeIndex}__color-${colorIndex}-${fadedName}`;
          fadedValue = `oklch(${l}% ${c} ${h} / ${fade})`;
          lines.push(`${fadedClassName}: ${fadedValue};`);
        });
      });
    });
    const modeIndex = p.activeMode;
    const backgroundL = this.getBackgroundValueL(modeIndex);
    const backgroundC = this.getBackgroundValueC(modeIndex);
    const backgroundH = this.getBackgroundValueH(modeIndex);
    const backgroundName = `--ui__${p.backgroundColorName}`;
    const backgroundValue =
      `oklch(${backgroundL}% ${backgroundC} ${backgroundH})`;
    lines.push(`${backgroundName}: ${backgroundValue};`);
    this.getColorActives().forEach((colorName, colorIndex) => {
      const l = this.getColorValueL(modeIndex, colorIndex);
      const c = this.getColorValueC(modeIndex, colorIndex);
      const h = this.getColorValueH(modeIndex, colorIndex);
      const textName = `--ui__${colorName}`;
      const textValue = `oklch(${l}% ${c} ${h})`;
      lines.push(`${textName}: ${textValue};`);
      p.fadedNames.forEach((fadedName) => {
        const fade = 0.5;
        const fadedClassName = `--ui__${colorName}-${fadedName}`;
        const fadedValue = `oklch(${l}% ${c} ${h} / ${fade})`;
        lines.push(`${fadedClassName}: ${fadedValue};`);
      });
    });
    this.getColorHueValues(p.activeMode, p.activeColor).forEach(
      (hueValue, hueIndex) => {
        this.getLightnessValues(p.activeMode, p.activeColor).forEach(
          (lightnessValue, lightnessIndex) => {
            const cValue = this.getColorValueC(p.activeMode, p.activeColor);
            const name = `--ui__lightness-${lightnessIndex}__hue-${hueIndex}`;
            const value = `oklch(${lightnessValue}% ${cValue} ${hueValue})`;
            lines.push(`${name}: ${value};`);
          },
        );
      },
    );
    const out = `:root { ${lines.join("\n")} }`;
    this.uiColorVarsStyleSheet.innerHTML = out;
  }

  queryWeightVars() {
    const lines = [];
    this.getWeights().forEach((weight) => {
      const name = `  --weight-${weight}`;
      const value = weight;
      lines.push(makeVar(name, value));
    });
    lines.sort(sortVars);
    return [`  /* Weight Variables */`, ...lines];
  }

  queryWidthVars() {
    const lines = [];
    this.getSizesWithFull().forEach((sizeName, sizeIndex) => {
      const name = `  --${sizeName}-width`;
      const value = `${p.widths[sizeIndex]}`;
      lines.push(makeVar(name, value));
    });
    lines.sort(sortVars);
    return [`  /* Width Variables */`, ...lines];
  }

  refreshColorGrid() {
    const sidebars = els(".sidebar-controls");
    sidebars.forEach((sidebar) => {
      const wrapper = getEl(".colors-box-grid-wrapper", sidebar);
      this.getColorHueValues(p.activeMode, p.activeColor).forEach(
        (hueData, hue) => {
          const row = dc("div");
          this.getLightnessValues(p.activeMode, p.activeColor).forEach(
            (lightnessData, lightness) => {
              const button = dc("button");
              html("set", button);
              ad("kind", "color-box-set-button", button);
              ad("mode", p.activeMode, button);
              ad("color", p.activeColor, button);
              ad("lightness", lightness, button);
              ad("hue", hue, button);
              ac(`ui__set-grid__lightness-${lightness}__hue-${hue}`, button);
              ac(
                `ui__set-grid__lightness-${lightness}__hue-${hue}__decoration`,
                button,
              );
              a(button, row);
            },
          );
          a(row, wrapper);
        },
      );
    });
  }

  runTest(payload) {
    if (payload[0] === payload[1]) {
      return {
        details: payload[2],
        expected: payload[1],
        got: payload[0],
        status: "pass",
      };
    } else {
      return {
        details: payload[2],
        expected: payload[1],
        got: payload[0],
        status: "fail",
      };
    }
  }

  runTests() {
    this.testResults = [];
    const tests = [
      [
        this.generateColorBackgroundClasses()[1],
        ".accent-background { background-color: var(--accent); }",
        "generateColorBackgroundStyles",
      ],
      [
        this.generateColorBackgroundClasses()[2],
        ".accent-background-faded { background-color: var(--accent-faded); }",
        "generateColorBackgroundStyles",
      ],
      [
        this.generateColorBackgroundClasses()[3],
        ".accent-background-faded2 { background-color: var(--accent-faded2); }",
        "generateColorBackgroundStyles",
      ],
      [
        this.generateBlackAndWhiteBackgroundClasses()[1],
        ".black-background { background-color: var(--black); }",
        "generateBlackAndWhiteBackgroundStyles",
      ],
      [
        this.generateBlackAndWhiteBackgroundClasses()[2],
        ".black-background-faded { background-color: var(--black-faded); }",
        "generateBlackAndWhiteBackgroundStyles",
      ],
      [
        this.generateBlackAndWhiteBackgroundClasses()[3],
        ".black-background-faded2 { background-color: var(--black-faded2); }",
        "generateBlackAndWhiteBackgroundStyles",
      ],
      [
        this.generateBlackAndWhiteBorderClasses()[4],
        ".black-border { border: var(--black-border); }",
        "generateBlackAndWhiteBorderStyles",
      ],
      [
        this.generateBorderRadiiClasses()[1],
        ".default-block-bottom-radius { border-block-bottom-radius: var(--default-radius); }",
        "generateBorderRadiiStyles",
      ],
      [
        this.generateBorderRadiiClasses()[11],
        ".default-radius { border-radius: var(--default-radius); }",
        "generateBorderRadiiStyles",
      ],
      [
        this.generateColorBorderClasses()[2],
        ".accent-block-border-faded { border-block: var(--accent-border-faded); }",
        "generateColorBorderStyles",
      ],
      [
        this.generateColorBorderClasses()[4],
        ".accent-border { border: var(--accent-border); }",
        "generateColorBorderStyles",
      ],
      [
        this.generateFlowClasses()[4],
        ".xlarge-flow > :where(:not(:first-child)) { margin-top: var(--flow-space, var(--xlarge-flow)); }",
        "generateFlowStyles",
      ],
      [
        this.queryColorModeVars()[1].trim(),
        "--dark-mode__accent: oklch(68.00000% 0.06066 303.33600);",
        "queryColorModeVars",
      ],
      [
        this.queryBlackAndWhiteModeVars(0)[1].trim(),
        "--black: var(--light-mode__black);",
        "queryBlackAndWhiteModeVars",
      ],
      [
        this.queryReverseModeVars(0)[1].trim(),
        "--match: var(--light-mode__match);",
        "queryBlackAndWhiteModeVars",
      ],
      [
        this.queryColorActiveVars()[1].trim(),
        "--accent: var(--light-mode__accent);",
        "queryColorActiveVars",
      ],
      [
        this.queryBlackAndWhiteBaseVars()[1].trim(),
        "--dark-mode__black: oklch(0% 0 0);",
        "queryBlackAndWhiteBaseVars",
      ],
    ];
    tests.forEach((test) => {
      this.testResults.push(this.runTest(test));
    });
  }

  setColorAspect(mode, color, aspect, value) {
    const hueOffsetIndex = p.modes[mode].colors[color].hueOffsetIndex;
    p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex][aspect] = value;
  }

  setNumberOfColors(obj) {
    p.numberOfColors = gvi(obj);
    this.finishUpdate();
  }

  switchTopLevelTabs() {
    this.initColorTabs();
    this.initBackgroundSliders();
    this.finishUpdate();
  }

  toggleIsolateBackground(obj) {
    if (obj.checked === true) {
      dbg("Isolating background");
      p.previousIsolatedColor = p.isolatedColor;
      p.isolatedColor = -1;
    } else {
      dbg("Returning from isolated background");
      p.isolatedColor = p.previousIsolatedColor;
    }
    this.finishUpdate();
  }

  toggleIsolateColor(obj) {
    if (obj.checked === true) {
      const color = gdi("color", obj);
      p.previousIsolatedColor = -2;
      p.isolatedColor = color;
    } else {
      p.isolatedColor = -2;
    }
    this.finishUpdate();
  }

  toggleIsolation() {
    if (this.uiIsolationStyleSheet === undefined) {
      this.uiIsolationStyleSheet = dc("style");
      ad("name", "Isolation Vars", this.uiIsolationStyleSheet);
      document.head.appendChild(this.uiIsolationStyleSheet);
    }
    const lines = [];
    if (p.isolatedColor === -1) {
      this.getColorActives().forEach((colorName) => {
        lines.push(`--${colorName}: var(--background);`);
        p.fadedNames.forEach((fadedName) => {
          const name = `${colorName}-${fadedName}`;
          lines.push(`--${name}: var(--background);`);
        });
      });
      els(".mode-buttons-wrapper").forEach((wrapper) => {
        wrapper.classList.add("invisible");
      });
      els(".nav-tab-list").forEach((wrapper) => {
        wrapper.classList.add("invisible");
      });
      els(".colors-box-wrapper").forEach((wrapper) => {
        wrapper.classList.add("invisible");
      });
      els(".content-body").forEach((e) => {
        e.classList.add("invisible");
      });
      els(".scroll-wrapper").forEach((e) => {
        e.classList.add("invisible");
      });
    } else if (p.isolatedColor >= 0) {
      this.getColorActives().forEach((colorName, colorIndex) => {
        if (colorIndex !== p.isolatedColor) {
          lines.push(`--${colorName}: var(--background);`);
          p.fadedNames.forEach((fadedName) => {
            const name = `${colorName}-${fadedName}`;
            lines.push(`--${name}: var(--background);`);
          });
        }
      });
      els(".content-body").forEach((e) => {
        rc("invisible", e);
      });
      els(".mode-buttons-wrapper").forEach((wrapper) => {
        rc("invisible", wrapper);
      });
      els(".nav-tab-list").forEach((wrapper) => {
        rc("invisible", wrapper);
      });
      els(".colors-box-wrapper").forEach((wrapper) => {
        rc("invisible", wrapper);
      });
    } else {
      els(".content-body").forEach((e) => {
        rc("invisible", e);
      });
      els(".mode-buttons-wrapper").forEach((wrapper) => {
        rc("invisible", wrapper);
      });
      els(".nav-tab-list").forEach((wrapper) => {
        rc("invisible", wrapper);
      });
      els(".colors-box-wrapper").forEach((wrapper) => {
        rc("invisible", wrapper);
      });
      els(".scroll-wrapper").forEach((wrapper) => {
        rc("invisible", wrapper);
      });
    }
    const out = `:root { ${lines.join("\n")} }`;
    this.uiIsolationStyleSheet.innerHTML = out;
  }

  updateColorActive(obj) {
    const color = gdi("color", obj);
    dbg(`updateColorActive: ${color}`);
    p.activeColor = color;
    if (p.isolatedColor >= 0) {
      p.isolatedColor = color;
    }
    this.initColorTabs();
    this.finishUpdate();
  }

  updateBackgroundColors(obj) {
    const mode = p.activeMode;
    const aspect = gds("aspect", obj);
    p.modes[mode].base[aspect] = gvf(obj);
    this.finishUpdate();
  }

  updateBackgroundSliders(tab) {
    const sidebar = elV2(`.sidebar-controls[data-tab="${tab}"]`);
    const wrapper = getEl(`.background-box-sliders`, sidebar);
    const sliders = getEls(`input`, wrapper);
    sliders.forEach((slider) => {
      const aspect = gds("aspect", slider);
      slider.value = this.getActiveBackgroundValueAspect(aspect);
    });
  }

  updateColorChroma(obj) {
    const value = gvf(obj);
    this.setColorAspect(p.activeMode, p.activeColor, "c", value);
    this.finishUpdate();
  }

  updateColorName(obj) {
    const color = gdi("color", obj);
    p.colorNames[color] = obj.value;
  }

  updateCustomizeTab() {
    const selector = el("number-of-colors-selector");
    html("", selector);
    ad("kind", "number-of-colors-selector", selector);
    for (let num = 0; num < p.maxNumberOfColors; num++) {
      const opt = dc("option");
      opt.value = num + 1;
      opt.innerHTML = num + 1;
      if (num + 1 === p.numberOfColors) {
        opt.selected = true;
      }
      a(opt, selector);
    }
    this.updateColorNamesCustomizer();
  }

  updateColorNamesCustomizer() {
    const colorNamesWrapper = el("color-names-wrapper");
    html("", colorNamesWrapper);
    this.getColorNames().forEach((colorName, colorIndex) => {
      const connector = `customize-color-name-${colorIndex}`;
      const nameEls = getTemplate("#customize-color-name");
      const label = getEl("label", nameEls);
      html(`Color ${colorIndex + 1}:`, label);
      ac(scrubStyle(colorName), label);
      sa("for", connector, label);
      a(label, colorNamesWrapper);
      const input = getEl("input", nameEls);
      ad("kind", "customize-color-name", input);
      ad("color", colorIndex, input);
      input.id = connector;
      input.value = colorName;
      a(input, colorNamesWrapper);
    });
  }

  updateDebuggingTab() {
    let pass = 0;
    let fail = 0;
    let failDetails = [];
    this.testResults.forEach((result) => {
      if (result.status === "pass") {
        pass++;
      } else {
        fail++;
        failDetails.push(result);
      }
    });
    p["_tests"] = {
      fail: fail,
      failureDetails: failDetails,
      pass: pass,
    };
    p["_debugging"] = {
      base: {
        c: this.getBackgroundValueC(p.activeMode),
        h: this.getBackgroundValueH(p.activeMode),
        l: this.getBackgroundValueL(p.activeMode),
      },
      colors: [],
    };
    p.modes.forEach((modeData, modeIndex) => {
      modeData.colors.forEach((colorData, colorIndex) => {
        const l = this.getColorIndexL(modeIndex, colorIndex);
        const c = this.getColorIndexC(modeIndex, colorIndex);
        const h = this.getColorIndexH(modeIndex, colorIndex);
        p["_debugging"].colors.push(
          `mode: ${modeIndex} - color: ${colorIndex} - l: ${l} c: ${c} h: ${h}`,
        );
      });
    });
    el("debugging-content").innerHTML = JSON.stringify(p, null, 2);
  }

  updateLightnessHue(obj) {
    const mode = gdi("mode", obj);
    const color = gdi("color", obj);
    const lightness = gdi("lightness", obj);
    const hue = gdi("hue", obj);
    this.setColorAspect(mode, color, "l", lightness);
    this.setColorAspect(mode, color, "h", hue);
    this.finishUpdate();
  }

  updateMode(obj) {
    const newMode = gdi("mode", obj);
    if (newMode !== p.activeMode) {
      p.activeMode = newMode;
    }
    this.initColorTabs();
    this.updateBackgroundSliders("instructions");
    // this.updateBackgroundSliders('picker');
    this.finishUpdate();
  }

  updateUiClassesStyleSheet() {
    if (this.uiClassesStyleSheet === undefined) {
      this.uiClassesStyleSheet = dc("style");
      ad("name", "UI Classes", this.uiClassesStyleSheet);
      document.head.appendChild(this.uiClassesStyleSheet);
    }
    const lines = [];
    lines.push(`.picker-text { color: var(--ui__picker); }`);
    lines.push(`.picker-text { color: var(--ui__picker); }`);
    this.getColorHueValues(p.activeMode, p.activeColor).forEach(
      (hueValue, hueIndex) => {
        this.getLightnessValues(p.activeMode, p.activeColor).forEach(
          (lightnessValue, lightnessIndex) => {
            lines.push(
              makeClass(
                `.ui__set-grid__lightness-${lightnessIndex}__hue-${hueIndex}`,
                `color`,
                `var(--ui__lightness-${lightnessIndex}__hue-${hueIndex})`,
              ),
            );
            lines.push(
              makeClass(
                `.ui__set-grid__lightness-${lightnessIndex}__hue-${hueIndex}__decoration`,
                `text-decoration`,
                `var(--ui__lightness-${lightnessIndex}__hue-${hueIndex}__decoration)`,
              ),
            );
          },
        );
      },
    );
    // Mode buttons
    p.modes.forEach((modeData, modeIndex) => {
      lines.push(
        makeClass(
          `.mode-${modeIndex}-selector-button`,
          `color`,
          `var(--mode-${modeIndex}-selector-button-color)`,
        ),
      );
      lines.push(
        makeClass(
          `.mode-${modeIndex}-selector-button`,
          `background-color`,
          `var(--mode-${modeIndex}-selector-button-background-color)`,
        ),
      );
      lines.push(
        makeClass(
          `.mode-${modeIndex}-selector-button`,
          `border`,
          `1px solid var(--mode-${modeIndex}-selector-button-color)`,
        ),
      );
    });
    p.modes.forEach((modeData, modeIndex) => {
      const name = `.ui__mode-${modeIndex}__text`;
      const value = `var(--ui__mode-${modeIndex}__text)`;
      lines.push(`${name} { color: ${value}; }`);
      const backgroundName = `.ui__mode-${modeIndex}__background`;
      const backgroundValue = `var(--ui__mode-${modeIndex}__background)`;
      lines.push(`${backgroundName} { background-color: ${backgroundValue}; }`);
      this.getColorActives().forEach((colorName, colorIndex) => {
        let textName = `.ui__mode-${modeIndex}__color-${colorIndex}-text`;
        let textValue = `var(--ui__mode-${modeIndex}__color-${colorIndex})`;
        lines.push(`${textName} { color: ${textValue} ; }`);
        textName = `.ui__mode-${modeIndex}__color-${colorIndex}-background`;
        textValue = `var(--ui__mode-${modeIndex}__color-${colorIndex})`;
        lines.push(`${textName} { background-color: ${textValue} ;} `);
        p.fadedNames.forEach((fadedName) => {
          let fadedClassName =
            `.ui__mode-${modeIndex}__color-${colorIndex}-${fadedName}-text`;
          let fadedValue =
            `var(--ui__mode-${modeIndex}__color-${colorIndex}-${fadedName})`;
          lines.push(`${fadedClassName} { color: ${fadedValue};}`);
          fadedClassName =
            `.ui__mode-${modeIndex}__color-${colorIndex}-${fadedName}-text`;
          fadedValue =
            `var(--ui__mode-${modeIndex}__color-${colorIndex}-${fadedName})`;
          lines.push(`${fadedClassName} { background-color: ${fadedValue};}`);
        });
      });
    });
    const backgroundName = `.ui__${p.backgroundColorName}`;
    const backgroundValue = `var(--ui__${p.backgroundColorName})`;
    lines.push(`${backgroundName}-text { color: ${backgroundValue}; }`);
    lines.push(
      `${backgroundName}-background { background-color: ${backgroundValue}; }`,
    );
    this.getColorActives().forEach((colorName) => {
      let textName = `.ui__${colorName}`;
      let textValue = `var(--ui__${colorName})`;
      lines.push(`${textName}-text { color: ${textValue}; }`);
      lines.push(`${textName}-background { background-color: ${textValue}; }`);
      p.fadedNames.forEach((fadedName) => {
        const textName = `.ui__${colorName}-${fadedName}`;
        const textValue = `var(--ui__${colorName}-${fadedName})`;
        lines.push(`${textName}-text { color: ${textValue}; }`);
        lines.push(
          `${textName}-background { background-color: ${textValue}; }`,
        );
      });
    });
    const out = lines.sort().join("\n");
    this.uiClassesStyleSheet.innerHTML = out;
  }

  updateUiView(event) {
    if (event.target.dataset) {
      const kind = event.target.dataset.kind;
      if (event.type === "click") {
        if (kind === "mode-button") {
          this.updateMode(event.target);
        } else if (kind === "color-box-set-button") {
          this.updateLightnessHue(event.target);
        } else if (kind === "color-selector-button") {
          this.updateColorActive(event.target);
        } else if (kind === "top-nav-button") {
          this.switchTopLevelTabs();
        } else if (kind === "background-box-isolate-checkbox") {
          this.toggleIsolateBackground(event.target);
        } else if (kind === "color-isolate-checkbox") {
          this.toggleIsolateColor(event.target);
        }
      } else if (event.type === "change") {
        if (kind === "background-box-slider") {
          this.updateBackgroundColors(event.target);
        } else if (kind === "default-mode-radio-button") {
          this.outputColorClasses();
          this.outputUtilityClasses();
        } else if (kind === "number-of-colors-selector") {
          this.setNumberOfColors(event.target);
        }
      } else if (event.type === "input") {
        if (kind === "background-box-slider") {
          this.updateBackgroundColors(event.target);
        } else if (kind === "color-chroma-slider") {
          this.updateColorChroma(event.target);
        } else if (kind === "customize-color-name") {
          this.updateColorName(event.target);
        }
      }
    }
  }

  updateVarsStyleSheet() {
    if (this.varsStyleSheet === undefined) {
      this.varsStyleSheet = dc("style");
      document.head.appendChild(this.varsStyleSheet);
    }
    this.varsStyleSheet.innerHTML = this.getUtilityVars();
  }
}

class TabGroup extends HTMLElement {
  get panels() {
    return [...this.querySelectorAll(":scope > [role=tabpanel]")];
  }

  get selected() {
    return this.querySelector(":scope > div > [role=tab][aria-selected=true]");
  }

  set selected(element) {
    this.selected?.setAttribute("aria-selected", "false");
    element?.setAttribute("aria-selected", "true");
    element?.focus();
    this.updateSelection();
  }

  get tabs() {
    return [...this.querySelectorAll(":scope > div > [role=tab]")];
  }

  connectedCallback() {
    this.generateIds();
    this.updateSelection();
    this.setupEvents();
  }

  generateIds() {
    const prefix = Math.floor(Date.now()).toString(36);
    this.tabs.forEach((tab, index) => {
      const panel = this.panels[index];
      tab.id ||= `${prefix}-tab-${index}`;
      panel.id ||= `${prefix}-panel-${index}`;
      tab.setAttribute("aria-controls", panel.id);
      panel.setAttribute("aria-labelledby", tab.id);
    });
  }

  setupEvents() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", () => (this.selected = tab));
      tab.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          this.selected = tab.previousElementSibling ?? this.tabs.at(-1);
        } else if (e.key === "ArrowRight") {
          this.selected = tab.nextElementSibling ?? this.tabs.at(0);
        }
      });
    });
  }

  updateSelection() {
    this.tabs.forEach((tab, index) => {
      const panel = this.panels[index];
      const isSelected = tab.getAttribute("aria-selected") === "true";
      tab.setAttribute("aria-selected", isSelected ? "true" : "false");
      tab.setAttribute("tabindex", isSelected ? "0" : "-1");
      panel.setAttribute("tabindex", isSelected ? "0" : "-1");
      panel.hidden = !isSelected;
    });
  }
}

customElements.define("tab-group", TabGroup);
customElements.define("color-picker", Picker);
