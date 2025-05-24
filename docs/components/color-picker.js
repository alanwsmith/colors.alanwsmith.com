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
  blackAndWhiteNamesReversed: ["matched", "reversed"],
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
    ["block", true],
    ["block-end", true],
    ["block-start", true],
    ["block-bottom", true],
    ["end-end", true],
    ["end-start", true],
    ["inline", true],
    ["inline-end", true],
    ["inline-start", true],
    ["left", true],
    ["right", true],
    ["start-end", true],
    ["start-start", true],
    ["top", true],
    ["top-left", true],
    ["top-right", true],
  ],
  colorNames: [
    "content",
    "link",
    "heading",
    "accent",
    "info",
    "warning",
    "extra",
    "bonus",
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
      blackAndWhiteReversedValues: [100, 0],
      blackAndWhiteReversedFaded: [0.4, 0.1],
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
      blackAndWhiteReversedFaded: [0.4, 0.1],
      blackAndWhiteReversedValues: [0, 100],
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
  numberOfColors: 4,
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
  widths: [
    "calc(100vw - 1.4rem)",
    "min(100vw - 1.4rem, 64rem)",
    "min(100vw - 1.4rem, 56rem)",
    "min(100vw - 1.4rem, 48rem)",
    "min(100vw - 1.4rem, 42rem)",
    "min(100vw - 1.4rem, 36rem)",
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

  addExampleForBorderRadius() {
    dbg("addExampleForBorderRadius");
    const wrapper = el("border-radius-examples-wrapper");
    this.getSizes().forEach((size) => {
      const example = dc("div");
      const token = `${size}-radius`;
      ac(`matched-text`, example);
      ac(`reversed-background`, example);
      ac(`xlarge-full-padding`, example);
      ac(`large-inline-margin`, example);
      ac(token, example);
      html(`.${token}`, example);
      a(example, wrapper);
    });
  }

  // addExampleForBwBackground() {
  // 	const wrapper = el("bw-background-examples-wrapper");
  // 	this.getBwKinds().forEach((kind) => {
  // 		const kindEl = dc("div");
  // 		this.getFadedValues().forEach((value) => {
  // 			const token = `${kind[0]}${value}-background`;
  // 			const color = `${kind[1]}-text`;
  // 			const exampleEl = dc("div");
  // 			html(`.${token}`, exampleEl);
  // 			ac(`${token}`, exampleEl);
  // 			ac(`small-full-padding`, exampleEl);
  // 			ac(`small-full-margin`, exampleEl);
  // 			ac(color, exampleEl);
  // 			a(exampleEl, kindEl);
  // 		});
  // 		a(kindEl, wrapper);
  // 	});
  // }

  // addExampleForBwBorder() {
  // 	const wrapper = el("bw-border-examples-wrapper");
  // 	this.getBwKinds().forEach((kind) => {
  // 		const kindEl = dc("div");
  // 		this.getDirections().forEach((data) => {
  // 			this.getFadedValues().forEach((bwValue) => {
  // 				const className = `${kind[0]}${bwValue}-${data[0]}-border`;
  // 				const background = `${kind[1]}-background`;
  // 				const color = `${kind[0]}-text`;
  // 				const cell = dc("div");
  // 				ac("default-inline-padding", cell);
  // 				ac("large-block-padding", cell);
  // 				ac(background, cell);
  // 				ac(color, cell);
  // 				const span = dc("span");
  // 				html(`.${className}`, span);
  // 				ac(className, span);
  // 				ac(`xxsmall-full-padding`, span);
  // 				a(span, cell);
  // 				a(cell, kindEl);
  // 			});
  // 		});
  // 		a(kindEl, wrapper);
  // 	});
  // }

  // addExampleForBwColor() {
  // 	const wrapper = el("bw-color-examples-wrapper");
  // 	this.getBwKinds().forEach((kind) => {
  // 		const kindEl = dc("div");
  // 		this.getFadedValues().forEach((bwValue) => {
  // 			const token = `${kind[0]}${bwValue}-text`;
  // 			const background = `${kind[1]}-background`;
  // 			const exampleEl = dc("div");
  // 			html(`.${token}`, exampleEl);
  // 			ac(`${token}`, exampleEl);
  // 			ac(`${background}`, exampleEl);
  // 			ac(`small-full-padding`, exampleEl);
  // 			a(exampleEl, kindEl);
  // 		});
  // 		a(kindEl, wrapper);
  // 	});
  // }

  addExampleForFontSize() {
    const wrapper = el("font-size-examples-wrapper");
    this.getSizes().forEach((size) => {
      const token = `${size}-font`;
      const example = dc("div");
      ac(`reversed-background`, example);
      ac(`matched-text`, example);
      ac(`large-inline-margin`, example);
      ac(`default-inline-padding`, example);
      ac(token, example);
      html(`.${token}`, example);
      a(example, wrapper);
    });
  }

  addExampleForSpacingAlignment() {
    const wrapper = el("alignment-examples-wrapper");
    this.getAlignments().forEach((alignment) => {
      const example = dc("div");
      ac(`large-inline-margin`, example);
      ac(`reversed-background`, example);
      ac(`matched-text`, example);
      ac(`default-full-padding`, example);
      const token = `align-${alignment}`;
      html(
        `this is an example of text that will be positioned based on how they line up via .${token}`,
        example,
      );
      ac(token, example);
      a(example, wrapper);
    });
  }

  addExampleForSpacingFlow() {
    const wrapper = el("flow-examples-wrapper");
    this.getSizes().forEach((size) => {
      const example = dc("div");
      ac(`matched-text`, example);
      ac(`reversed-background`, example);
      ac(`large-full-margin`, example);
      const token = `${size}-flow`;
      ac(token, example);
      const name = dc(`div`);
      html(`.${token}`, name);
      a(name, example);
      for (let p = 0; p < 4; p++) {
        const p = dc("p");
        html("item", p);
        a(p, example);
      }
      a(example, wrapper);
    });
  }

  addExampleForSpacingMargin() {
    const wrapper = el("margin-examples-wrapper");
    this.getSizes().forEach((size) => {
      this.getDirections().forEach((dir) => {
        const token = `${size}-${dir[0]}-margin`;
        const example = dc("div");
        ac("reversed-faded-background", example);
        ac("large-inline-margin", example);
        const name = dc("div");
        ac(`matched-text`, name);
        ac(`small-full-padding`, name);
        html(`.${token}`, name);
        a(name, example);
        const line1 = dc("div");
        ac("matched-text", line1);
        ac("reversed-background", line1);
        html("&nbsp;", line1);
        a(line1, example);
        const line2 = dc("div");
        ac("matched-background", line2);
        ac("reversed-text", line2);
        ac(token, line2);
        html("&nbsp;", line2);
        a(line2, example);
        const line3 = dc("div");
        ac("matched-text", line3);
        ac("reversed-background", line3);
        html("&nbsp;", line3);
        a(line3, example);
        a(example, wrapper);
      });
    });
  }

  addExampleForSpacingPadding() {
    const wrapper = el("paddExampleForing--wrapper");
    this.getSizes().forEach((size) => {
      this.getDirections().forEach((dir) => {
        const token = `${size}-${dir[0]}-padding`;
        const example = dc("div");
        ac("reversed-background", example);
        ac("large-inline-margin", example);
        ac(token, example);
        const inside = dc("div");
        ac("matched-background", inside);
        html(`.${token}`, inside);
        a(inside, example);
        a(example, wrapper);
      });
    });
  }

  addExampleForSpacingWidth() {
    const wrapper = el("width-examples-wrapper");
    this.getSizesWithFull().forEach((size) => {
      const token = `${size}-width`;
      const example = dc("div");
      const name = dc("div");
      html(`.${token}`, name);
      a(name, example);
      ac("reversed-background", example);
      ac("matched-text", example);
      ac("large-inline-margin", example);
      const item = dc("div");
      ac("matched-background", item);
      ac(token, item);
      html(`&nbsp;`, item);
      a(item, example);
      a(example, wrapper);
    });
  }

  addExampleForSpacingWrapper() {
    const wrapper = el("wrapper-examples-wrapper");
    this.getSizesWithFull().forEach((size) => {
      const token = `${size}-wrapper`;
      const example = dc("div");
      const name = dc("div");
      html(`.${token}`, name);
      a(name, example);
      ac("reversed-background", example);
      ac("matched-text", example);
      ac("large-inline-margin", example);
      const item = dc("div");
      ac("matched-background", item);
      ac(token, item);
      html(`&nbsp;`, item);
      a(item, example);
      a(example, wrapper);
    });
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
    /*
    this.addExampleForBorderRadius();
    this.addExampleForBwBackground();
    this.addExampleForBwBorder();
    this.addExampleForBwColor();
    this.addExampleForSpacingAlignment();
    this.addExampleForSpacingFlow();
    this.addExampleForSpacingMargin();
    this.addExampleForSpacingPadding();
    this.addExampleForSpacingWidth();
    this.addExampleForSpacingWrapper();
    this.addExampleForFontSize();
    */

    this.initControls();
    this.initUtilityClasses();
    this.updateVarsStyleSheet();
    this.queryUiVarsStyleSheet();
    this.updateUiClassesStyleSheet();
    this.requestUpdate = this.updateUiView.bind(this);
    this.addListeners();
    //    this.updateExportPage();
    this.updateDebuggingTab();
    this.outputColorClasses();
    this.outputUtilityClasses();
  }

  finishUpdate() {
    dbg("finishUpdate");
    this.updateVarsStyleSheet();
    this.queryUiVarsStyleSheet();
    // TODO: move the classes things so it only has
    // to fire once
    this.updateUiClassesStyleSheet();
    //    this.updateExportPage();
    this.updateDebuggingTab();
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
    return [`/* Background Color Classes */`, ...lines];
  }

  generateBlackAndWhiteNormalBackgroundClasses() {
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
    return [`/* Black And White Background Classes */`, ...lines];
  }

  generateBlackAndWhiteNormalBorderClasses() {
    const lines = [];
    this.getBlackAndWhiteNames().forEach((bwName) => {
      this.getBorderDirectionNames().forEach((directionName) => {
        let name = `.${bwName}${directionName}-border`;
        const key = `border${directionName}`;
        let value = `var(--${bwName}-border-style)`;
        lines.push(makeClass(name, key, value));
        this.getScrubbedFadedNames().forEach((fadedName) => {
          name = `.${bwName}${directionName}-border-${fadedName}`;
          let value = `var(--${bwName}-border-style-${fadedName})`;
          lines.push(makeClass(name, key, value));
        });
      });
    });
    lines.sort();
    return [`/* Black And White Border Classes */`, ...lines];
  }

  generateBlackAndWhiteNormalTextClasses() {
    const lines = [];
    this.getBlackAndWhiteNames().forEach((bwName) => {
      lines.push(makeClass(`.${bwName}-text`, `color`, `var(--${bwName})`));
      this.getScrubbedFadedNames().forEach((fadedName) => {
        lines.push(
          makeClass(
            `.${bwName}-text-${fadedName}`,
            `color`,
            `var(--${bwName}-${fadedName})`,
          ),
        );
      });
    });
    lines.sort();
    return [`/* Black And White Text Classes */`, ...lines];
  }

  generateBlackAndWhiteReversedBackgroundClasses() {
    const lines = [];
    this.getBlackAndWhiteNamesReversed().forEach((bwName) => {
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
    return [`/* Black And White Background Classes */`, ...lines];
  }

  generateBlackAndWhiteReversedBorderClasses() {
    const lines = [];
    this.getBlackAndWhiteNamesReversed().forEach((bwName) => {
      this.getBorderDirectionNames().forEach((directionName) => {
        let name = `.${bwName}${directionName}-border`;
        const key = `border${directionName}`;
        let value = `var(--${bwName}-border-style)`;
        lines.push(makeClass(name, key, value));
        this.getScrubbedFadedNames().forEach((fadedName) => {
          name = `.${bwName}${directionName}-border-${fadedName}`;
          let value = `var(--${bwName}-border-style-${fadedName})`;
          lines.push(makeClass(name, key, value));
        });
      });
    });
    lines.sort();
    return [`/* Black And White Border Classes */`, ...lines];
  }

  generateBlackAndWhiteReversedTextClasses() {
    const lines = [];
    this.getBlackAndWhiteNames().forEach((bwName) => {
      lines.push(makeClass(`.${bwName}-text`, `color`, `var(--${bwName})`));
      this.getScrubbedFadedNames().forEach((fadedName) => {
        lines.push(
          makeClass(
            `.${bwName}-text-${fadedName}`,
            `color`,
            `var(--${bwName}-${fadedName})`,
          ),
        );
      });
    });
    lines.sort();
    return [`/* Black And White Text Classes */`, ...lines];
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
    });
    lines.sort();
    return [`/* Border Radii Classes */`, ...lines];
  }

  generateColorBorderClasses() {
    const lines = [];
    this.getColorActives().forEach((colorName) => {
      this.getBorderDirectionNames().forEach((directionName) => {
        let name = `.${colorName}${directionName}-border`;
        const key = `border${directionName}`;
        let value = `var(--${colorName}-border-style)`;
        lines.push(makeClass(name, key, value));
        this.getScrubbedFadedNames().forEach((fadedName) => {
          name = `.${colorName}${directionName}-border-${fadedName}`;
          let value = `var(--${colorName}-border-style-${fadedName})`;
          lines.push(makeClass(name, key, value));
        });
      });
    });
    lines.sort();
    return [`/* Border Style Color Classes */`, ...lines];
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
    return [`/* Flow Classes */`, ...lines];
  }

  generateFontSizeClasses() {
    const lines = [];
    this.getSizes().forEach((sizeName) => {
      const name = `.${sizeName}-font-size`;
      const key = `font-size`;
      const value = `var(--${sizeName}-font-size)`;
      lines.push(makeClass(name, key, value));
    });
    lines.sort();
    return [`/* Font Size Classes */`, ...lines];
  }

  generateMarginClasses() {
    const lines = [];
    this.getSizes().forEach((sizeName) => {
      this.getDirections().forEach((direction) => {
        let ext = `-${direction[0]}`;
        if (direction[1] === false) {
          ext = "";
        }
        const name = `.${sizeName}-${direction[0]}-margin`;
        const key = `margin${ext}`;
        const value = `var(--${sizeName}-margin)`;
        lines.push(makeClass(name, key, value));
      });
    });
    lines.sort();
    return [`/* Margin Classes */`, ...lines];
  }

  generatePaddingClasses() {
    const lines = [];
    this.getSizes().forEach((sizeName) => {
      this.getDirections().forEach((direction) => {
        let ext = `-${direction[0]}`;
        if (direction[1] === false) {
          ext = "";
        }
        const name = `.${sizeName}-${direction[0]}-padding`;
        const key = `padding${ext}`;
        const value = `var(--${sizeName}-padding)`;
        lines.push(makeClass(name, key, value));
      });
    });
    lines.sort();
    return [`/* Padding Classes */`, ...lines];
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
    return [`/* Text Alignment Classes */`, ...lines];
  }

  generateColorTextClasses() {
    const lines = [];
    this.getColorActives().forEach((colorName) => {
      this.getFadedValues().forEach((fade) => {
        lines.push(
          makeClass(
            `.${colorName}-text${fade}`,
            `color`,
            `var(--${colorName}${fade})`,
          ),
        );
      });
    });
    lines.sort();
    return [`/* Text Color Classes */`, ...lines];
  }

  generateWidthClasses() {
    const lines = [];
    this.getSizesWithFull().forEach((sizeName) => {
      const name = `.${sizeName}-width`;
      const key = `width`;
      const value = `var(--${sizeName}-width)`;
      lines.push(makeClass(name, key, value));
    });
    lines.sort();
    return [`/* Width Classes */`, ...lines];
  }

  generateWrapperClasses() {
    const lines = [];
    this.getSizesWithFull().forEach((sizeName) => {
      const name = `.${sizeName}-wrapper`;
      const values = `width: var(--${sizeName}-width); margin-inline: auto;`;
      lines.push(`${name} { ${values} }`);
    });
    lines.sort();
    return [`/* Wrapper Classes */`, ...lines];
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

  getBlackAndWhiteModeReversedFadedValue(mode, index) {
    return p.modes[mode].blackAndWhiteReversedFaded[index];
  }

  getBlackAndWhiteModeReversedValue(mode, index) {
    return p.modes[mode].blackAndWhiteReversedValues[index];
  }

  getBlackAndWhiteNames() {
    return p.blackAndWhiteNames;
  }

  getBlackAndWhiteNamesReversed() {
    return p.blackAndWhiteNamesReversed;
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
          // ac(`reversed`, tabButton);
          ac(
            `ui__mode-${p.activeMode}__color-${nameIndex}-background`,
            tabButton,
          );
          ac(`${this.getColorActiveScrubbedName()}-bottom-border`, tabButton);
        } else {
          ac(`reversed-bottom-border`, tabButton);
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
    ad("editable", "no", this.utilityClassesStyleSheet);
    ad("deployable", "yes", this.utilityClassesStyleSheet);
    ad("name", "Utility Classes", this.utilityClassesStyleSheet);
    const lines = [];
    lines.push("");
    lines.push(this.generateColorTextClasses().join("\n"));
    lines.push("");
    lines.push(this.generateColorBackgroundClasses().join("\n"));
    lines.push("");
    lines.push(this.generateColorBorderClasses().join("\n"));
    lines.push("");
    lines.push(this.generateBlackAndWhiteNormalTextClasses().join("\n"));
    lines.push("");
    lines.push(this.generateBlackAndWhiteNormalBackgroundClasses().join("\n"));
    lines.push("");
    lines.push(this.generateBlackAndWhiteNormalBorderClasses().join("\n"));
    lines.push("");
    lines.push(this.generateBorderRadiiClasses().join("\n"));
    lines.push("");
    lines.push(this.generateFlowClasses().join("\n"));
    lines.push("");
    lines.push(this.generateFontSizeClasses().join("\n"));
    lines.push("");
    lines.push(this.generateMarginClasses().join("\n"));
    lines.push("");
    lines.push(this.generatePaddingClasses().join("\n"));
    lines.push("");
    lines.push(this.generateTextAlignmentClasses().join("\n"));
    lines.push("");
    lines.push(this.generateWidthClasses().join("\n"));
    lines.push("");
    lines.push(this.generateWrapperClasses().join("\n"));
    const out = lines.join("\n");
    this.utilityClassesStyleSheet.innerHTML = out;
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
    out.push(":root {");
    out.push(this.queryColorThemeVars().join("\n"));
    out.push("\n");
    const defaultThemeKind = elV2(`input[name="default-mode"]:checked`).value;
    if (defaultThemeKind === "light") {
      out.push(this.queryColorPreferredVars(0).join("\n"));
      out.push("}");
      out.push("\n");
      out.push(`@media (prefers-color-scheme: dark) {`);
      out.push(this.queryColorPreferredVars(1).join("\n"));
    } else {
      out.push(this.queryColorPreferredVars(1).join("\n"));
      out.push("}");
      out.push("\n");
      out.push(`@media (prefers-color-scheme: light) {`);
      out.push(this.queryColorPreferredVars(0).join("\n"));
    }
    out.push("}");
    el("basic-css-output").innerHTML = out.join("\n");
  }

  outputUtilityClasses() {
    const defaultThemeKind = elV2(`input[name="default-mode"]:checked`).value;
    const out = [];
    // B&W Base and Mode Variables
    out.push(":root {");
    out.push(
      this
        .queryBlackAndWhiteBaseVars().join("\n"),
    );
    out.push("\n");
    if (defaultThemeKind === "light") {
      out.push(this.queryBlackAndWhiteModeVars(0).join("\n"));
      out.push("}\n");
      out.push(`@media (prefers-color-scheme: dark) {`);
      out.push(this.queryBlackAndWhiteModeVars(1).join("\n"));
    } else {
      out.push(this.queryBlackAndWhiteModeVars(1).join("\n"));
      out.push("}\n");
      out.push(`@media (prefers-color-scheme: light) {`);
      out.push(this.queryBlackAndWhiteModeVars(0).join("\n"));
    }
    out.push("}\n");
    // Reversed Base and Mode Variables
    out.push(":root {");
    out.push(
      this
        .queryReversedBaseVars().join("\n"),
    );
    out.push("\n");
    if (defaultThemeKind === "light") {
      out.push(this.queryReversedModeVars(0).join("\n"));
      out.push("}\n");
      out.push(`@media (prefers-color-scheme: dark) {`);
      out.push(this.queryReversedModeVars(1).join("\n"));
    } else {
      out.push(this.queryReversedModeVars(1).join("\n"));
      out.push("}\n");
      out.push(`@media (prefers-color-scheme: light) {`);
      out.push(this.queryReversedModeVars(0).join("\n"));
    }
    out.push("}\n");
    // Font Size Variables
    out.push(":root {");
    out.push(this.queryFontSizeVars().join("\n"));
    out.push("}\n");
    // Margin Variables
    out.push(":root {");
    out.push(this.queryMarginVars().join("\n"));
    out.push("}\n");
    // Padding Variables
    out.push(":root {");
    out.push(this.queryPaddingVars().join("\n"));
    out.push("}\n");
    // Width Variables
    out.push(":root {");
    out.push(this.queryWidthVars().join("\n"));
    out.push("}\n");
    // Text Alignment Variables
    out.push(":root {");
    out.push(
      this.queryTextAlignmentVars().join(
        "\n",
      ),
    );
    out.push("}\n");
    // Flow Variables
    out.push(":root {");
    out.push(this.queryFlowVars().join("\n"));
    out.push("}\n");
    // Border Variables
    out.push(":root {");
    out.push(
      this.queryColorBorderStyleVars()
        .join("\n"),
    );
    out.push("}\n");
    out.push(":root {");
    out.push(
      this
        .queryBlackAndWhiteBorderVars().join("\n"),
    );
    out.push("}\n");
    out.push(":root {");
    out.push(
      this
        .queryReversedBorderVars().join("\n"),
    );
    out.push("}\n");
    // Border Radii Variables
    out.push(":root {");
    out.push(this.queryBorderRadiiVars().join("\n"));
    out.push("}\n");

    out.push(el("reset-styles-input").innerHTML);

    /*



    out.push(
      this.generateColorTextClasses().join(
        "\n",
      ),
    );
    out.push(
      this
        .generateColorBackgroundClasses().join("\n"),
    );
    out.push(
      this.generateColorBorderClasses().join(
        "\n",
      ),
    );
    out.push(
      this
        .generateBlackAndWhiteNormalTextClasses().join("\n"),
    );
    out.push(
      this
        .generateBlackAndWhiteNormalBackgroundClasses().join(
          "\n",
        ),
    );
    out.push(
      this
        .generateBlackAndWhiteNormalBorderClasses().join("\n"),
    );
    out.push(
      this
        .generateBlackAndWhiteReversedTextClasses().join("\n"),
    );
    out.push(
      this
        .generateBlackAndWhiteReversedBackgroundClasses().join(
          "\n",
        ),
    );
    out.push(
      this
        .generateBlackAndWhiteReversedBorderClasses().join("\n"),
    );
    out.push(
      this.queryBorderRadiiVars().join(
        "\n",
      ),
    );
    out.push(this.generateFlowClasses().join("\n"));
    out.push(this.generateFontSizeClasses().join("\n"));
    out.push(this.generateMarginClasses().join("\n"));
    out.push(this.generatePaddingClasses().join("\n"));
    out.push(
      this.generateTextAlignmentClasses()
        .join("\n"),
    );
    out.push(this.generateWidthClasses().join("\n"));
    out.push(this.generateWrapperClasses().join("\n"));
    */

    html(out.join("\n"), ".utility-styles");
  }

  queryReversedModeVars(modeIndex) {
    const lines = [];
    const modeName = this.getModeNames()[modeIndex];
    const scrubbedModeName = scrubStyle(modeName);
    this.getBlackAndWhiteNamesReversed().forEach((bwName) => {
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
    return [`  /* ${modeName} Mode Reversed Variables */`, ...lines];
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
    return [`  /* ${baseModeName} Mode B&W Variables */`, ...lines];
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
    return [`  /* Base B&W Variables */`, ...lines];
  }

  queryReversedBorderVars() {
    const lines = [];
    this.getBlackAndWhiteNamesReversed().forEach((bwName) => {
      this.getFadedValues().forEach((fadedName) => {
        const name = `  --${bwName}-border${fadedName}`;
        const value = `1px solid var(--${bwName}${fadedName})`;
        lines.push(makeVar(name, value));
      });
    });
    lines.sort(sortVars);
    return [`  /* Reversed Border Variables */`, ...lines];
  }

  queryReversedBaseVars() {
    const lines = [];
    this.getScrubbedModeNames().forEach((modeName, modeIndex) => {
      this.getBlackAndWhiteNamesReversed().forEach((bwName, bwIndex) => {
        const lightnessValue = this.getBlackAndWhiteModeReversedValue(
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
          const fadedValue = this.getBlackAndWhiteModeReversedFadedValue(
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
    return [`  /* Base Reversed Variables */`, ...lines];
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
    return [`  /* ${modeBaseName} Mode Color Variables */`, ...lines];
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

  queryColorThemeVars() {
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
    return [`  /* Base Color Variables */`, ...lines];
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
      const name = `  --${sizeName}-font-size`;
      const value = `${p.fontSizes[sizeIndex]}`;
      lines.push(makeVar(name, value));
    });
    lines.sort(sortVars);
    return [`  /* Font Size Variables */`, ...lines];
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
    return [`  /* Text Alignment Variables */`, ...lines];
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

  // NOTE: This is a stub for when I figure
  // out how I want to test after the
  // design finalizes.
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
        this.generateBlackAndWhiteNormalBackgroundClasses()[1],
        ".black-background { background-color: var(--black); }",
        "generateBlackAndWhiteNormalBackgroundStyles",
      ],
      [
        this.generateBlackAndWhiteNormalBackgroundClasses()[2],
        ".black-background-faded { background-color: var(--black-faded); }",
        "generateBlackAndWhiteNormalBackgroundStyles",
      ],
      [
        this.generateBlackAndWhiteNormalBackgroundClasses()[3],
        ".black-background-faded2 { background-color: var(--black-faded2); }",
        "generateBlackAndWhiteNormalBackgroundStyles",
      ],
      [
        this.generateBlackAndWhiteNormalBorderClasses()[4],
        ".black-border { border: var(--black-border-style); }",
        "generateBlackAndWhiteNormalBorderStyles",
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
        ".accent-block-border-faded { border-block: var(--accent-border-style-faded); }",
        "generateColorBorderStyles",
      ],
      [
        this.generateColorBorderClasses()[4],
        ".accent-border { border: var(--accent-border-style); }",
        "generateColorBorderStyles",
      ],
      [
        this.generateFlowClasses()[4],
        ".xlarge-flow > :where(:not(:first-child)) { margin-top: var(--flow-space, var(--xlarge-flow)); }",
        "generateFlowStyles",
      ],
      [
        this.queryColorThemeVars()[1].trim(),
        "--dark-mode__accent: oklch(68.00000% 0.06066 303.33600);",
        "queryColorThemeVars",
      ],
      [
        this.queryBlackAndWhiteModeVars(0)[1].trim(),
        "--black: var(--light-mode__black);",
        "queryBlackAndWhiteModeVars",
      ],
      [
        this.queryReversedModeVars(0)[1].trim(),
        "--matched: var(--light-mode__matched);",
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

  // This isn't necessary until custom themes are added.
  // updateThemeExportPickers() {
  //   const lightPicker = elV2("#light-mode-picker");
  //   this.getModeNames().forEach((name, index) => {
  //     const opt = dc("option");
  //     opt.innerHTML = name;
  //     opt.value = index;
  //     if (index === 0) {
  //       opt.selected = true;
  //     }
  //     a(opt, lightPicker);
  //   });
  //   const darkPicker = elV2("#dark-mode-picker");
  //   this.getModeNames().forEach((name, index) => {
  //     const opt = dc("option");
  //     opt.innerHTML = name;
  //     opt.value = index;
  //     if (index === 2) {
  //       opt.selected = true;
  //     }
  //     a(opt, darkPicker);
  //   });
  // }

  updateExportPage() {
    // Variables
    el("color-mode-vars").innerHTML = this.queryColorThemeVars().join("\n");
    el("color-active-vars").innerHTML = this.queryColorActiveVars().join("\n");
    el("color-border-style-vars").innerHTML = this.queryColorBorderStyleVars()
      .join("\n");
    el("bw-normal-mode-vars").innerHTML = this
      .queryBlackAndWhiteBaseVars().join("\n");
    el("bw-normal-active-vars").innerHTML = this
      .queryBlackAndWhiteModeVars(0).join("\n");
    el("bw-normal-border-style-vars").innerHTML = this
      .queryBlackAndWhiteBorderVars().join("\n");
    el("bw-reversed-mode-vars").innerHTML = this
      .queryReversedBaseVars().join("\n");
    el("bw-reversed-active-vars").innerHTML = this
      .queryReversedModeVars(0).join("\n");
    el("bw-reversed-border-style-vars").innerHTML = this
      .queryReversedBorderVars().join("\n");
    el("border-radii-vars").innerHTML = this.queryBorderRadiiVars().join("\n");
    el("font-size-vars").innerHTML = this.queryFontSizeVars().join("\n");
    el("margin-vars").innerHTML = this.queryMarginVars().join("\n");
    el("padding-vars").innerHTML = this.queryPaddingVars().join("\n");
    el("width-vars").innerHTML = this.queryWidthVars().join("\n");
    el("flow-vars").innerHTML = this.queryFlowVars().join("\n");
    el("text-alignment-vars").innerHTML = this.queryTextAlignmentVars().join(
      "\n",
    );
    // Classes aka Styles
    el("reset-styles").innerHTML = el("reset-styles-input").innerHTML;
    el("color-text-styles").innerHTML = this.generateColorTextClasses().join(
      "\n",
    );
    el("color-background-styles").innerHTML = this
      .generateColorBackgroundClasses().join("\n");
    el("color-border-styles").innerHTML = this.generateColorBorderClasses()
      .join(
        "\n",
      );
    el("bw-normal-text-styles").innerHTML = this
      .generateBlackAndWhiteNormalTextClasses().join("\n");
    el("bw-normal-background-styles").innerHTML = this
      .generateBlackAndWhiteNormalBackgroundClasses().join(
        "\n",
      );
    el("bw-normal-border-styles").innerHTML = this
      .generateBlackAndWhiteNormalBorderClasses().join("\n");
    el("bw-reversed-text-styles").innerHTML = this
      .generateBlackAndWhiteReversedTextClasses().join("\n");
    el("bw-reversed-background-styles").innerHTML = this
      .generateBlackAndWhiteReversedBackgroundClasses().join(
        "\n",
      );
    el("bw-reversed-border-styles").innerHTML = this
      .generateBlackAndWhiteReversedBorderClasses().join("\n");
    el("border-radii-styles").innerHTML = this.queryBorderRadiiVars().join(
      "\n",
    );
    el("flow-styles").innerHTML = this.generateFlowClasses().join("\n");
    el("font-size-styles").innerHTML = this.generateFontSizeClasses().join(
      "\n",
    );
    el("margin-styles").innerHTML = this.generateMarginClasses().join("\n");
    el("padding-styles").innerHTML = this.generatePaddingClasses().join("\n");
    el("text-alignment-styles").innerHTML = this.generateTextAlignmentClasses()
      .join("\n");
    el("width-styles").innerHTML = this.generateWidthClasses().join("\n");
    el("wrapper-styles").innerHTML = this.generateWrapperClasses().join("\n");

    // TODO: Deprecate this stuff below.
    // it was the initial stubs

    const outputEl = elV2(".export-content");
    const sheets = els("style[data-name]");
    let payloads = [];
    sheets.forEach((sheet) => {
      payloads.push({
        content: sheet.innerHTML,
        name: sheet.dataset.name,
      });
    });
    outputEl.innerHTML = payloads
      .map((item) => {
        let open = "";
        if (item.name === "Variables" || item.name === "Utility Classes") {
          open = " open";
        }
        return `
<details${open}>
<summary>${item.name}</summary>
<pre class="xsmall-font-size">${item.content}</pre>
</details>
`;
      })
      .join("\n\n");
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
        }
      } else if (event.type === "input") {
        if (kind === "background-box-slider") {
          this.updateBackgroundColors(event.target);
        } else if (kind === "color-chroma-slider") {
          this.updateColorChroma(event.target);
        }
      }
    }
  }

  // Reminder: this is the live style sheet.
  // Exports and handled elsewhere.
  updateVarsStyleSheet() {
    if (this.varsStyleSheet === undefined) {
      this.varsStyleSheet = dc("style");
      document.head.appendChild(this.varsStyleSheet);
    }
    const lines = [];
    lines.push(`:root {`);
    lines.push(this.queryColorThemeVars().join("\n"));
    lines.push("");
    lines.push(this.queryColorActiveVars().join("\n"));
    lines.push("");
    lines.push(this.queryColorBorderStyleVars().join("\n"));
    lines.push("");
    lines.push(this.queryBlackAndWhiteBaseVars().join("\n"));
    lines.push("");
    lines.push(this.queryBlackAndWhiteModeVars(0).join("\n"));
    lines.push("");
    lines.push(this.queryBlackAndWhiteBorderVars().join("\n"));
    lines.push("");
    lines.push(this.queryReversedBaseVars().join("\n"));
    lines.push("");
    lines.push(this.queryReversedModeVars(0).join("\n"));
    lines.push("");
    lines.push(this.queryBorderRadiiVars().join("\n"));
    lines.push("");
    lines.push(this.queryFlowVars().join("\n"));
    lines.push("");
    lines.push(this.queryFontSizeVars().join("\n"));
    lines.push("");
    lines.push(this.queryMarginVars().join("\n"));
    lines.push("");
    lines.push(this.queryPaddingVars().join("\n"));
    lines.push("");
    lines.push(this.queryTextAlignmentVars().join("\n"));
    lines.push("");
    lines.push(this.queryWidthVars().join("\n"));
    lines.push(`}`);
    const out = lines.join("\n");
    this.varsStyleSheet.innerHTML = out;
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
