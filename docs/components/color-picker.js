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

// TODO: Deprecate in favor of elV2
// Get Element By Class Name
function el(className) {
  return document.querySelector(`.${className}`);
}

// TODO: Rename to `el()` when transition
// is complete. 
// Get Element By Selector
function elV2(selector) {
  return document.querySelector(selector);
}

// Get Elements By Class Name
function els(selector) {
  return document.querySelectorAll(selector);
}

// Focus (print to console regardless of debug 
function fx(value) {
  console.log(value);
}

// Get Float from DataSet Key From Event
// TODO: put event last
function gdf(event, key) {
  return parseFloat(event.target.dataset[key])
}

// DEPRECATE in favor ov gdiV2
// Get Int from DataSet Key From Event
function gdi(key, event) {
  return parseInt(event.target.dataset[key], 10)
}

function gdiV2(key, obj) {
  return parseInt(obj.dataset[key], 10)
}

// TODO: Deprecate in favor of V2
// Get String from DataSet Key From Event
// TODO: put event last
function gds(event, key) {
  return event.target.dataset[key]
}

function gdsV2(key, obj) {
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
function gvf(event) {
  return parseFloat(event.target.value)
}
function gvfV2(obj) {
  return parseFloat(obj.value)
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
<div class="main-body two-columns">

  <div class="content-area base-flow focus-toggle-watcher">
    <h1>Alan's (prototype) Color Picker</h1>

<!--
    <p>Hi there! Glad you made. Just one thing you 
need to know. This is still a work in progress. 
The picking functionality is mostly in place. Getting
the stylesheets out is a work in progress. Check
back if a few days.<p>
-->

    <p>
I need to write up an intro here with some
details about how this thing came to be. Or, something
like that. Right now, <a href="">there just needs</a> to be
some text here to test with. To wit, what you're
reading now.
    </p>

<p>
This space isn't completley wated though. We
can use it for some basic instructions. 
</p>

    <h3>Instructions</h3>
<p>
  This picker is designed to reduce as much 
  friction as possible when it comes to creating
  a color palette. The steps are:
</p>

<ol>
  <li>Move the &quot;l&quot;, &quot;c&quot;, and &quot;h&quot; 
sliders in the upper right to choose a background color. 
  </li>
  <li>
    Click/tap the various &quot;set&quot; colors 
to switch things up. 
  </li>
  <li>
    Fiddle around with the &quot;c&quot; slidders
    below the blocks of &quot;set&quot; colors to 
change things around. 
</li>
</ol>


<h3>Random Filler Content</h3>
<p>
  Everything below is standin text to give
you something to look at. No real information
to be found in it.
<p>
      
      Dip the pail once and let it settle.
      Draw <a href="">the chart with heavy</a> black lines.
    </p>
    <p>
      Drop the ashes on the worn old rug.
      Fasten two pins on each side.
    </p>
    <p>
      Fly by night, and you waste little time.
      Glue the sheet to the dark blue background.
      Go now and come here later.
    </p>
    <p>
      Greet the new guests and leave quickly.
      Guess the results from the first scores.
      Hang tinsel from both branches.
      Heave the line over the port side.
    </p>
  </div>

  <div class="sidebar base-flow"> 
    <div class="base-wrapper">
      <div class="view-light-dark-wrapper">
        <div class="view-mode-buttons"></div>
      </div>
      <div class="background-fieldset ui-font-size-small base-flow">
        <div class="interface-text ui-font-size-small reversed-bw-bottom-border-80 small-full-padding">Background</div>
        <div class="base-sliders small-inline-padding xxsmall-flow"></div>
        <div class="background-checkboxes">
          <div class="background-isolate-wrapper background-checkbox-wrapper small-inline-padding">
            <label for="background-isolate-checkbox" class="interface-text ui-font-size-small">
              Isolate:
            </label>
            <input type="checkbox" class="background-isolate-checkbox" name="background-isolate-checkbox">
          </div>
        </div>
      </div>
    </div>

    <div class="colors-wrapper">
      <div class="colors-fieldset">
        <div class="interface-text small-full-padding">Colors</div>
        <div class="colors-content-wrapper"></div>
      </div>
    </div>

    <details class="advanced-settings-wrapper flow ui-font-size-small">
      <summary class="interface-text">Advanced Settings</summary>
      <div class="number-of-colors-wrapper ui-font-size-small">
        <label for="number-of-colors-selector-label" class="interface-text">
          Number of Colors:
        </label>
        <select 
          name="number-of-colors-selector" 
          class="number-of-colors-selector"
          data-kind="number-of-colors-selector"
        ></select>
      </div>
    </details>
    <details class="todo-wrapper flow interface-text ui-font-size-small">
      <summary class="interface-text">TODO List</summary>
    </details>
</div>

<div class="footer">
  <div class="debug flow"></div>
</div>

`;

const colorElementInternalTemplate = `
<div class="color-name"></div>
<div class="hue-set-wrapper">
  <div>
    <div class="color-hue-set"></div>
  </div>
</div>
<div class="hide-during-focus color-hue-chroma-slider-wrapper slider-wrapper chroma-slider-wrapper small-inline-padding">
  <label class="color-hue-chroma-slider-label">c:</label>
  <input type="range" class="color-hue-chroma-slider picker-slider" />
</div>
<div class="color-hue-buttons small-inline-padding">
  <div class="color-isolate-checkbox-wrapper">
    <label class="interface-text ui-font-size-small">
      Isolate:
    </label>
    <input type="checkbox" class="color-isolate-checkbox">
  </div>
</div>
<div class="color-hue-faded-wrapper"></div>
`;

const defaultPalette = {
  "activeMode": 0,
  "activeColor": 0,
  "aspectOrder": ["l", "c", "h"],
  "aspects": {
    "l": { "name": "lightness", "max": 100 },
    "c": { "name": "chroma", "max": 0.3 },
    "h": { "name": "hue", "max": 360 }
  },
  "backgroundColorName": "background",
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
  "bwNames": ["matched-bw", "reversed-bw"],
  "colorNames": [
    "content",
    "links",
    "title",
    "headings",
    "accents",
    "warning",
    "info",
    "extra"
  ],
  "fadedNames": ["faded", "faded2"],
  // i've got back and forth between 
  // 45 and 60 here. going with 45 for
  // now since it offers more colors. The
  // way to switch between them is
  // no in production. I removed it
  // because it felt like it was adding
  // significant complexity without much
  // utility. 
  "focused": false,
  "hueOffsets": [45, 60],
  "isolatedColor": -2,
  "lightLevels": 6,
  "maxNumberOfColors": 8,
  "maxNumberOfFaded": 2,
  "maxLightValue": 100,
  "modes": [

    {
      "base": { "l": 85.74, "c": 0.07833, "h": 269.46},
      "bwValues": [100, 0],
      "category": 3,
      "colors": [
        // 0-0
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 1,
              "c": 0.2034,
              "h": 7
            },
            {
              "l": 1,
              "c": 0.15879,
              "h": 1
            }
          ], 
          "minLightLevel": 20,
        },
        // 0-1
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 2,
              "c": 0.05352,
              "h": 4
            },
            {
              "l": 0,
              "c": 0.3,
              "h": 7
            }
          ], 
          "minLightLevel": 20,
        },
        // 0-2
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.1023,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 0-3
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 0
            },
            {
              "l": 2,
              "c": 0.118,
              "h": 0
            }
          ], 
          "minLightLevel": 20,
        },
        // 0-4
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.1023,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 0-5
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 0-6
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 0-7
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
      ],
      "name": "Light",
    },

    {
      "base": { "l": 100, "c": 0.0492, "h": 101.484 },
      "bwValues": [100, 0],
      "category": 2,
      "colors": [
        // 1-0
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 1-1
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 1-2
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 1-3
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 1-4
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 1-5
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 1-6
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 1-7
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
      ],
      "name": "High-Contrast Light",
    },

    { 
      "base": { "l": 25.71, "c": 0.07395, "h": 58.896 },
      "bwValues": [0, 100],
      "category": 0,
      "colors": [
        // 2-0
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 2-1
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 2-2
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 2-3
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 2-4
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 2-5
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 2-6
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 2-7
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
      ],
      "name": "Dark",
    },

    { 
      "base": { "l": 5.21, "c": 0.28248, "h": 74.808 },
      "bwValues": [0, 100],
      "category": 1,
      "colors": [
        // 3-0
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 3-1
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 3-2
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 3-3
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 3-4
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 3-5
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 3-6
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
        // 3-7
        {
          "fadedValues": [40, 80],
          "hueOffsetIndex": 0,
          "hueOffsetValues": [
            {
              "l": 3,
              "c": 0.118,
              "h": 2
            },
            {
              "l": 4,
              "c": 0.2,
              "h": 3
            }
          ], 
          "minLightLevel": 20,
        },
      ],
      "name": "High-Contrast Dark",
    }
  ],
  "name": "Color Palette",
  "numberOfColors": 5,
  "numberOfFaded": 1,
  "preferredMode": 0,
  "previousIsolatedColor": -2,
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
    this.addBorderRadiusExamples();
    this.addBwBackgroundExamples();
    this.addBwBorderExamples();
    this.addBwColorExamples();
    this.addSpacingAlignmentExamples();
    this.addSpacingFlowExamples();
    this.addSpacingMarginExamples();
    this.addSpacingPaddingExamples();
    this.addSpacingWidthExamples();
    this.addSpacingWrapperExamples();
    this.addFontSizeExamples();
    this.initControls();
    this.updateUiVarsStyleSheet();
    this.updateUiClassesStyleSheet();
    this.updateProdVarsStyleSheet();
    this.requestUpdate = this.updateUiView.bind(this);
    this.addListeners();

    // // TODO: Deprecate or Redo
    // this.requestRender = this.renderPage.bind(this);
    // this.styleSheets = {};
    // this.initStyleSheets();
    // this.initTemplate();
    // this.renderPage();

    // TODO: Refactor to put everything below here
  }

  addBorderRadiusExamples() {
    const wrapper = el('border-radius-examples-wrapper');
    this.getSizes().forEach((size) => {
      const example = dc('div');
      const token = `${size}-radius`;
      ac(`matched-text`, example);
      ac(`reversed-background`, example);
      ac(`xlarge-full-padding`, example);
      ac(`large-inline-margin`, example);
      ac(token, example);
      html(`.${token}`, example)
      a(example, wrapper);
    });
  }

  addBwBackgroundExamples() {
    const wrapper = el('bw-background-examples-wrapper');
    const kinds = ['match', 'reverse'];
    this.getBwKinds().forEach((kind) => {
      const kindEl = dc('div');
      this.getFadedValues().forEach((value) => {
        const token = `${kind[0]}${value}-background`;
        const color = `${kind[1]}-text`;
        const exampleEl = dc('div');
        html(`.${token}`, exampleEl);
        ac(`${token}`, exampleEl);
        ac(`small-full-padding`, exampleEl);
        ac(`small-full-margin`, exampleEl);
        ac(color, exampleEl);
        a(exampleEl, kindEl);
      });
      a(kindEl, wrapper);
    });
  }

  addBwBorderExamples() {
    const wrapper = el('bw-border-examples-wrapper');
    const kinds = ['match', 'reverse'];
    this.getBwKinds().forEach((kind) => {
      const kindEl = dc('div');
      this.getDirections().forEach((data) => {
        this.getFadedValues().forEach((bwValue) => {
          const className = `${kind[0]}${bwValue}-${data[0]}-border`;
          const background = `${kind[1]}-background`;
          const color = `${kind[0]}-text`;
          const cell = dc('div');
          ac('default-inline-padding', cell);
          ac('large-block-padding', cell);
          ac(background, cell);
          ac(color, cell);
          const span = dc('span');
          html(`.${className}`, span);
          ac(className, span);
          ac(`xxsmall-full-padding`, span);
          a(span, cell);
          a(cell, kindEl);
        })
      })
      a(kindEl, wrapper);
    })
  }

  addBwColorExamples() {
    const wrapper = el('bw-color-examples-wrapper');
    this.getBwKinds().forEach((kind) => {
      const kindEl = dc('div');
      this.getFadedValues().forEach((bwValue) => {
        const token = `${kind[0]}${bwValue}-text`;
        const background = `${kind[1]}-background`;
        const exampleEl = dc('div');
        html(`.${token}`, exampleEl);
        ac(`${token}`, exampleEl);
        ac(`${background}`, exampleEl);
        ac(`small-full-padding`, exampleEl);
        a(exampleEl, kindEl);
      });
      a(kindEl, wrapper);
    });
  }

  addFontSizeExamples() {
    const wrapper = el('font-size-examples-wrapper');
    this.getSizes().forEach((size) => {
      const token = `${size}-font`;
      const example = dc('div');
      ac(`reversed-background`, example);
      ac(`matched-text`, example);
      ac(`large-inline-margin`, example);
      ac(`default-inline-padding`, example);
      ac(token, example);
      html(`.${token}`, example);
      a(example, wrapper);
    });
  }

  // TODO: Update to V2
  addListeners() {
    this.addEventListener('click', (event) => {
      this.requestUpdate.call(this, event);
    })
    this.addEventListener('change', (event) => {
      this.requestUpdate.call(this, event);
    })
    this.addEventListener('input', (event) => {
      this.requestUpdate.call(this, event);
    })

    // DEPRECATED
    // this.addEventListener('change', (event) => {
    //   this.updateData.call(this, event);
    //  })
    // this.addEventListener('click', (event) => {
    //   this.updateData.call(this, event);
    //  })
    // this.addEventListener('input', (event) => {
    //   this.updateData.call(this, event);
    // })
    // el('focus-toggle-watcher').addEventListener('click', (event) => {
    //   this.setFocus();
    // });

  }

  addSpacingAlignmentExamples() {
    const wrapper = el('alignment-examples-wrapper');
    this.getAlignments().forEach((alignment) => {
      const example = dc('div');
      ac(`large-inline-margin`, example);
      ac(`reversed-background`, example);
      ac(`matched-text`, example);
      ac(`default-full-padding`, example);
      const token = `align-${alignment}`;
      html(`this is an example of text that will be positioned based on how they line up via .${token}`, example);
      ac(token, example);
      a(example, wrapper);
    });
  }

  addSpacingFlowExamples() {
    const wrapper = el('flow-examples-wrapper');
    this.getSizes().forEach((size) => {
      const example = dc('div');
      ac(`matched-text`, example);
      ac(`reversed-background`, example);
      ac(`large-full-margin`, example);
      const token = `${size}-flow`;
      ac(token, example);
      const name = dc(`div`);
      html(`.${token}`, name);
      a(name, example);
      for (let p = 0; p < 4; p ++) {
        const p = dc('p');
        html("item", p)
        a(p, example);
      }
      a(example, wrapper);
    });
  }

  addSpacingMarginExamples() {
    const wrapper = el('margin-examples-wrapper');
    this.getSizes().forEach((size) => {
      this.getDirections().forEach((dir) => {
        const token = `${size}-${dir[0]}-margin`;
        const example = dc('div');
        ac('reversed-faded-background', example);
        ac('large-inline-margin', example);
        const name = dc('div');
        ac(`matched-text`, name);
        ac(`small-full-padding`, name);
        html(`.${token}`, name);
        a(name, example);
        const line1 = dc('div');
        ac('matched-text', line1);
        ac('reversed-background', line1);
        html("&nbsp;", line1);
        a(line1, example);
        const line2 = dc('div');
        ac('matched-background', line2);
        ac('reversed-text', line2);
        ac(token, line2);
        html("&nbsp;", line2);
        a(line2, example);
        const line3 = dc('div');
        ac('matched-text', line3);
        ac('reversed-background', line3);
        html("&nbsp;", line3);
        a(line3, example);
        a(example, wrapper);
      });
    });
  }

  addSpacingPaddingExamples() {
    const wrapper = el('padding-examples-wrapper');
    this.getSizes().forEach((size) => {
      this.getDirections().forEach((dir) => {
        const token = `${size}-${dir[0]}-padding`;
        const example = dc('div');
        ac('reversed-background', example);
        ac('large-inline-margin', example);
        ac(token, example);
        const inside = dc('div');
        ac('matched-background', inside);
        html(`.${token}`, inside);
        a(inside, example);
        a(example, wrapper);
      });
    });
  }

  addSpacingWidthExamples() {
    const wrapper = el('width-examples-wrapper');
    this.getSizesWithFull().forEach((size) => {
      const token = `${size}-width`;
      const example = dc('div');
      const name = dc('div');
      html(`.${token}`, name);
      a(name, example);
      ac('reversed-background', example);
      ac('matched-text', example);
      ac('large-inline-margin', example);
      const item = dc('div');
      ac('matched-background', item);
      ac(token, item);
      html(`&nbsp;`, item);
      a(item, example);
      a(example, wrapper);
    });
  }

  addSpacingWrapperExamples() {
    const wrapper = el('wrapper-examples-wrapper');
    this.getSizesWithFull().forEach((size) => {
      const token = `${size}-wrapper`;
      const example = dc('div');
      const name = dc('div');
      html(`.${token}`, name);
      a(name, example);
      ac('reversed-background', example);
      ac('matched-text', example);
      ac('large-inline-margin', example);
      const item = dc('div');
      ac('matched-background', item);
      ac(token, item);
      html(`&nbsp;`, item);
      a(item, example);
      a(example, wrapper);
    });
  }

  finishUpdate() {
    this.updateUiVarsStyleSheet();
    this.updateProdVarsStyleSheet();
    this.updateUiClassesStyleSheet();
  }

  getActiveBackgroundValueAspect(aspect) {
    if (aspect === "l") {
      return this.getActiveBackgroundValueL() 
    } else if (aspect === "c") {
      return this.getActiveBackgroundValueC() 
    } else if (aspect === "h") {
      return this.getActiveBackgroundValueH() 
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

  getActiveColorIndexC() {
    return this.getColorIndexC(p.activeMode, p.activeColor);
  }

  getActiveColorIndexH() {
    return this.getColorIndexH(p.activeMode, p.activeColor);
  }

  getActiveColorIndexL() {
    return this.getColorIndexL(p.activeMode, p.activeColor);
  }

  getActiveColors() {
    return p.colorNames.filter((name, index) => {
      return index < p.numberOfColors;
    })
  }

  getActiveColorValueC() {
    return this.getColorValueC(p.activeMode, p.activeColor);
  }

  getActiveColorValueH() {
    return this.getColorValueH(p.activeMode, p.activeColor);
  }

  getActiveColorValueL() {
    return this.getColorValueL(p.activeMode, p.activeColor);
  }

  getActiveModeScrubbedName() {
    return scrubStyle(
      p.modes[p.activeMode].name
    );
  }

  
  getAlignments() {
    return ['start', 'center', 'end', 'justify']
  }

  getAspectMax(aspect) {
    return p.aspects[aspect].max;
  }

  getAspectStep(aspect) {
    const value = p.aspects[aspect].max / 10000;
    return value.toFixed(7);
  }

  getBackgroundValueC(mode) {
    return p.modes[mode].base.c
  }

  getBackgroundValueH(mode) {
    return p.modes[mode].base.h
  }

  getBackgroundValueL(mode) {
    return p.modes[mode].base.l
  }

  getBwKinds() {
    return [
      ['black', 'white'],
      ['white', 'black'],
      ['match', 'reverse'],
      ['reverse', 'match']
    ]
  }

  getColorIndexC(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].c;
  }

  getColorIndexH(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].h;
  }

  getColorHueValues(mode, color) {
    const values = [];
    const h = this.getColorIndexH(mode, color);
    const hueOffsetAmount = this.getHueOffsetAmount(mode, color);
    for (let value = 0; value < 360; value += hueOffsetAmount) {
      values.push(value + p.modes[mode].base.h);
    }
    return values;
  }

  getColorHueRowValues(mode, color) {
    return [23, 34, 45, 234, 23, 12, 32, 51];
  }

  getColorIndexL(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l;
  }

  getColorValueC(mode, color) {
    return this.getColorIndexC(mode, color).toFixed(5);
  }

  getColorValueH(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    const h = this.getColorIndexH(mode, color);
    return this.getColorHueValues(mode, color)[h];
  }

  getColorValueL(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    const l = p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l;
    return this.getLightnessValues(mode, color)[l];
  }

  getColorMinLightValue(mode, color) {
    return p.modes[mode].colors[color].minLightLevel;
  }

  getDirections() {
    return [
      ["full", false],
      ["top", true],
      ["bottom", true],
      ["left", true],
      ["right", true],
      ["block", true],
      ["inline", true],
    ]
  }

  getFadedValues() {
    return [
      '', '-faded', '-faded2'
    ]
  }

  getLightnessValues(mode, color) {
    const levels = [];
    const minLightLevel = this.getColorMinLightValue(mode, color);
    const adder = ((p.maxLightValue - minLightLevel) / (p.lightLevels - 1));
    for (let level = minLightLevel; level <= p.maxLightValue; level += adder) {
      levels.push(level.toFixed(5));
    }
    return levels;
  }

  getHueOffsetIndex(mode, color) {
    return p.modes[mode].colors[color].hueOffsetIndex;
  }

  getHueOffsetAmount(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.hueOffsets[hueOffsetIndex];
  }

  getHueRowCount(mode, color) {
    return Math.round(360 / this.getHueOffsetAmount(mode, color));
  } 

  getSizes() {
    return [
      'xxxlarge',
      'xxlarge',
      'xlarge',
      'large',
      'default',
      'small',
      'xsmall',
      'xxsmall',
      'xxxsmall', 
    ]
  }

  getSizesWithFull() {
    return ['full', ...this.getSizes()];
  }

  // TODO: Update
  hideUiIfNecessary() {
    if (p.isolatedColor === -1) {
      el('colors-wrapper').hidden = true;
      el('advanced-settings-wrapper').hidden = true;
      el('todo-wrapper').hidden = true;
    } else {
      el('colors-wrapper').hidden = false;
      el('advanced-settings-wrapper').hidden = false;
      el('todo-wrapper').hidden = false;
    }
  }

  // TODO: Deprecate or Redo
  initBaseSliders() {
    for (let key in p.aspects) {
      const token = `base-slider`;
      const connector = `${token}-${key}`;
      const div = dc('div');
      ac('slider-wrapper', div);
      ac([
        `${token}-wrapper`, 
        `${token}-wrapper-${key}`
      ], div);
      const label = dc('label');
      ac([
        `${token}-label`, 
        `${token}-label-${key}`
      ], label);
      ac('interface-text', label);
      sa('for', connector, label);
      html(`${key}: `, label);
      const slider = dc('input');
      ac([
        `${token}`, 
        `${token}-${key}`
      ], slider);
      sa('name', connector, slider);
      sa('type', 'range', slider);
      sa('min', 0, slider);
      sa('max', this.getAspectMax(key), slider);
      sa('step', this.getAspectStep(key), slider);
      slider.value = p.modes[p.activeMode].base[key]
      ad('kind', 'base', slider);
      ad('aspect', key, slider);
      a(label, div);
      a(slider, div);
      a(div, 'base-sliders');
    }
  }

  // TODO: Deprecate or Redo
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

  initBackgroundCheckboxes() {
    const sidebars = els('.sidebar-controls');
    sidebars.forEach((sidebar, sidebarIndex) => {
      const tab = gdsV2("tab", sidebar);
      const wrapper = getEl('.background-box-isolate-wrapper', sidebar);
      const connector = `background-box-isolate-checkbox-${tab}`;
      const label = getEl('label', wrapper);
      sa("for", connector, label);
      const checkbox = getEl('input', wrapper);
      sa("name", connector, checkbox);
      ad("kind", "background-box-isolate-checkbox", checkbox);
      ad("tab", tab, checkbox);
    });
  }

  initBackgroundSliders() {
    const sidebars = els('.sidebar-controls');
    sidebars.forEach((sidebar, sidebarIndex) => {
      const tab = gdsV2("tab", sidebar);
      const wrappers = getEls('.background-box-slider-wrapper', sidebar);
      wrappers.forEach((wrapper) => {
        const aspect = gdsV2("aspect", wrapper);
        const connector = `background-box-slider-${tab}-${aspect}`;
        const label = getEl("label", wrapper);
        label.innerHTML = `${aspect}:`;
        sa("for", connector, label);
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

  // TODO: Deprecate or Redo
  initColors() {
    // Grab the wrapper
    const wrapper = el('colors-content-wrapper');  
    html(``, wrapper);
    // Create the tab-group
    const tabGroup = dc('tab-group');
    a(tabGroup, wrapper);
    // Create the tab-list
    const tabList = dc('tab-list');
    for (let color  = 0; color < p.numberOfColors; color ++) {
      const tabButton = dc('button');
      html(Array.from(p.colorNames[color])[0], tabButton);
      sa("role", "tab", tabButton);
      if (color === p.activeColor) {
        sa("aria-selected", "true", tabButton);
      }
      ac(`ui-${p.colorNames[color]}`, tabButton);
      ad("kind", "color-selector", tabButton);
      ad("color", color, tabButton);
      a(tabButton, tabList);
      ac(`hide-during-focus`, tabButton);
    }
    a(tabList, tabGroup);
    // Loop through the colors
    for (let color = 0; color < p.numberOfColors; color ++) {
      // Make a `tabpanel` div
      const colorEl = dc('div'); 
      const colorData = p.modes[p.activeMode].colors[color];
      sa(`role`, `tabpanel`, colorEl);
      ac(['color-wrapper', `color-wrapper-${color}`], colorEl);
      // ac('small-inline-padding', slider);
      html(colorElementInternalTemplate, colorEl);
      a(colorEl, tabGroup);
      // Update the color name
      const colorNameEl = colorEl.querySelector('.color-name');
      // ac([`color-name-${color}`], colorNameEl);
      // ac([`color-name-${scrubStyle(p.colorNames[color])}`], colorNameEl);
      ac('bold', colorNameEl);
      // ac(p.colorNames[color], colorNameEl);
      html(p.colorNames[color], colorNameEl);
      // Update the chroma slider
      const slider = colorEl.querySelector('.color-hue-chroma-slider');
      sa('type', 'range', slider);
      sa('min', 0, slider);
      sa('max', this.getAspectMax('c'), slider);
      sa('step', this.getAspectStep('c'), slider);
      slider.value = colorData.hueOffsetValues[colorData.hueOffsetIndex].c;
      ad('kind', 'color-chroma-slider', slider);
      ad('mode', p.activeMode, slider);
      ad('color', color, slider);
      ad('hueoffsetindex', colorData.hueOffsetIndex, slider);
      // Update the slider label
      const sliderLabel = colorEl.querySelector('.color-hue-chroma-slider-label');
      ac('interface-text', sliderLabel);
      // Make the lightness/hue `set` buttons
      const hueOffsetIndexEl = colorEl.querySelector('.color-hue-set');
      const hueCount = Math.round(360 / p.hueOffsets [
        colorData.hueOffsetIndex
      ]);
      for (let hueOffsetIndexcolor = 0; hueOffsetIndexcolor < hueCount; hueOffsetIndexcolor ++ ) {
        const hueOffsetIndexWrapper = dc('div');
        ac('color-hue-set-line', hueOffsetIndexWrapper);
        this.getLightnessValues(p.activeMode, color).forEach((level, levelcolor) => {
          const button = dc('button'); 
          ad('kind', 'color-hue-lightness-button', button);
          ad('mode', p.activeMode, button);
          ad('color', color, button);
          ad('degreeset', colorData.hueOffsetIndex, button);
          ad('degreesetindex', hueOffsetIndexcolor, button);
          ad('lightness', levelcolor, button);
          ac('color-light-level', button);
          ac(`color-lightness-hue-selector--mode-${p.activeMode}--color-${color}--lightness-${levelcolor}--hue-${hueOffsetIndexcolor}`, button);
          html('set', button);
          a(button, hueOffsetIndexWrapper);
        });
        a(hueOffsetIndexWrapper, hueOffsetIndexEl);
      }
      // Wire up the isolate checkbox 
      const isolateCheckbox = colorEl.querySelector(".color-isolate-checkbox");
      ac(`color-isolate-checkbox--mode-${p.activeMode}--color-${color}`, isolateCheckbox);
      ad(`kind`, `isolate-checkbox`, isolateCheckbox);
      ad(`color`, color, isolateCheckbox);
      if (p.isolatedColor >= 0) {
        isolateCheckbox.checked = true;
      }
    }
    a(tabGroup, wrapper);
    this.initIsolateBackgroundCheckbox();
    this.hideUiIfNecessary();
    this.underlineActiveHueLightnessButton();
  }

  // V2
  initColorsChromaSliders() {
    const sidebars = els('.sidebar-controls');
    sidebars.forEach((sidebar) => {
      const tab = gdsV2("tab", sidebar);
      const connector  = `colors-box-chroma-slider-${tab}`;
      const wrapper = getEl('.colors-box-chroma-slider-wrapper', sidebar);
      const label = getEl('label', wrapper);
      sa("for", connector, label);
      const slider = getEl('input', wrapper);
      sa("name", connector, slider);
      sa("min", "0", slider);
      sa("max", this.getAspectMax('c'), slider);
      sa("step", this.getAspectStep('c'), slider);
      ad("tab", tab, slider);
      this.updateUiColorsChromaSlider(tab);
    });
  }

  // V2
  initColorTabs() {
    const sidebars = els('.sidebar-controls');
    sidebars.forEach((sidebar) => {
      const tabKey = gdsV2("tab", sidebar);
      const wrapper = getEl('.colors-box-tabs-wrapper', sidebar);
      html("", wrapper);
      const tabGroup = dc('tab-group');
      const tabList = dc('div');
      sa("role", "tablist", tabList);
      for (let nameIndex = 0; nameIndex < p.numberOfColors; nameIndex ++) {
        const tabButton = dc('button');
        sa("role", "tab", tabButton);
        if (nameIndex === p.activeColor) {
          sa("aria-selected", "true", tabButton);
        }
        html(Array.from(p.colorNames[nameIndex])[0], tabButton);
        ad("kind", "color-selector-button", tabButton);
        ad("color", nameIndex, tabButton);
        a(tabButton, tabList);
      }
      a(tabList, tabGroup);
      for (let nameIndex = 0; nameIndex < p.numberOfColors; nameIndex ++) {
        const tab = dc('div');
        sa("role", "tabpanel", tab);
        const tabName = dc('div');
        html(p.colorNames[nameIndex], tabName);
        a(tabName, tab);
        const tabGrid = dc('div');
        this.getColorHueValues(p.activeMode, p.activeColor).forEach((hueData, hue) => {
          const row = dc('div');
          this.getLightnessValues(p.activeMode, p.activeColor).forEach((lightnessData, lightness) => {
            const button = dc('button');
            html("set", button);
            ad("kind", "color-box-set-button", button);
            ad("mode", p.activeMode, button);
            ad("color", nameIndex, button);
            ad("lightness", lightness, button);
            ad("hue", hue, button);
            ac(`ui__set-grid__lightness-${lightness}__hue-${hue}`, button);
            a(button, row);
          });
          a(row, tabGrid);
        });
        a(tabGrid, tab);
        a(tab, tabGroup);
      }
      a(tabGroup, wrapper);
    })

  }


  // V2
  initControls() {
    const sidebars = els('.sidebar-controls');
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
    // this.refreshColorGrid()
    // this.initColorsChromaSliders();
  }

  // TODO: Deprecate or Redo
  initIsolateBackgroundCheckbox() {
    const checkbox = el('background-isolate-checkbox');  
    ad("kind", "isolate-checkbox", checkbox);
    ad("color", -1, checkbox);
    if (p.isolatedColor === -1) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  }

  // TODO: Deprecate in favor of V2
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

  // V2
  initModeButtonsV2() {
    const sidebars = els('.sidebar-controls');
    sidebars.forEach((sidebar) => {
      const tab = gdsV2("tab", sidebar);
      const wrapper = getEl('.mode-buttons-wrapper', sidebar);
      ad("tab", tab, wrapper);
      html("", wrapper);
      p.modes.forEach((modeData, modeIndex) => {
        const button = dc('button');
        html(modeData.name, button);
        ac(`ui__mode-${modeIndex}__text`, button);
        ac(`ui__mode-${modeIndex}__background`, button);
        ad("tab", tab, button);
        ad("mode", modeIndex, button);
        ad("kind", "mode-button", button);
        a(button, wrapper);
      });
    });
  }

  // TODO: Deprecate or Redo
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


  // TODO: Deprecate
  initStaticAlanClasses() {
    this.styleSheets['staticAlanClasses'].innerHTML = ``;
  }

  // TODO: Deprecate
  initStaticAlanVars() {
  this.styleSheets['staticAlanVars'].innerHTML = ``;

  }

  // TODO: Deprecate or Redo
  initStyleSheets() {
    const sheetNames = [
      'staticBwVars',
      'staticBwUtilityClasses',
      'staticAlanClasses',
      'staticAlanVars',
      'dynamicBwVars',
      'dynamicColorSwitches',
      'dynamicColorVars',
      'dynamicPickerStyles', 
      'dynamicUtilityClasses', 
      'dynamicUiClasses', 
      'dynamicUiVars', 
    ];
    sheetNames.forEach((name) => {
      this.styleSheets[name] = document.createElement('style');
      document.body.appendChild(this.styleSheets[name]);
    });
    this.initStaticAlanVars();
    this.initStaticAlanClasses();
    this.initStaticBwVars();
    this.initStaticBwClasses();
  }

  // TODO: Deprecate
  initTemplate() {
    const templateEl = this.ownerDocument.createElement('template')
    templateEl.innerHTML = template;
    const content = templateEl.content.cloneNode(true);
    this.append(content);
    this.initBaseSliders();
    this.initModeButtons();
    this.initNumberOfColors();
    this.initColors();
    this.updateModeButtonStyles();
  }

  // TODO: Deprecate or Redo
  initStaticBwClasses() {
    const lines = [];
    for (let amount = 0; amount < 100; amount += 10) {
      let amountString = `-${amount}`;
      if (amount === 0) {
        amountString = '';
      } 
      lines.push(`.${p.bwNames[0]}${amountString} { color: var(--${p.bwNames[0]}${amountString}); }`);
      lines.push(`.${p.bwNames[1]}${amountString} { color: var(--${p.bwNames[1]}${amountString}); }`);
      lines.push(`.${p.bwNames[0]}-${p.backgroundColorName}${amountString} { background-color: var(--${p.bwNames[0]}${amountString}); }`);
      lines.push(`.${p.bwNames[1]}-${p.backgroundColorName}${amountString} { background-color: var(--${p.bwNames[1]}${amountString}); }`);
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

  // TODO: Verify
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

  // TODO: Verify
  loadDefaults() {
    data = {
      "palettes": [defaultPalette],
      "schemaVersion": [1,0,0]
    };
    dbg("Loaded default colors");
  }

  // V2
  refreshColorGrid() {
    const sidebars = els('.sidebar-controls');
    sidebars.forEach((sidebar) => {
      const tabKey = gdsV2("tab", sidebar);
      const wrapper = getEl('.colors-box-grid-wrapper', sidebar);
      this.getColorHueValues(p.activeMode, p.activeColor).forEach((hueData, hue) => {
        const row = dc('div');
        this.getLightnessValues(p.activeMode, p.activeColor).forEach((lightnessData, lightness) => {
          const button = dc('button');
          html("set", button);
          ad("kind", "color-box-set-button", button);
          ad("mode", p.activeMode, button);
          ad("color", p.activeColor, button);
          ad("lightness", lightness, button);
          ad("hue", hue, button);
          ac(`ui__set-grid__lightness-${lightness}__hue-${hue}`, button);
          a(button, row);
        });
        a(row, wrapper);
      });
    });
  }

  // TODO: Deprecate or Redo
  renderDebuggingInfo() {
    if (debug === true) {
      const colorStyles = [];
      p.modes.forEach((_, mode) => {
        for (let color = 0; color < p.maxNumberOfColors; color ++) {
          const hueOffsetIndex = p.modes[mode].colors[color].hueOffsetIndex;
          const l = p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l;
          const c = p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].c;
          const h = p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].h;
          colorStyles.push(`mode: ${mode} color: ${color} l: ${l} c: ${c} h: ${h})`);
        }
      })
      const sheets = [];
      for (let sheetName in this.styleSheets) {
        sheets.push(`<h4>${sheetName}</h4>`);
        sheets.push(`<pre class="debug-stylesheet">${this.styleSheets[sheetName].innerHTML}</pre>`);
      };
      el('debug').innerHTML = `
<details class="flow" open>
  <summary>Debugging</summary>
<h2>Here Be Dragons</h2>
<p>
  This is a prototype. The data below is
  normally behind the scenes. It's 
  visible now to help me finish the
  build out. It can safely be ignored. 
</p>
<h3>Notes</h3>

${colorStyles.join("<br />")}

<h3>Palette</h3>
<pre>${JSON.stringify(p, null, 2)}</pre>
<h3>Config</h3>
<pre>${JSON.stringify(config, null, 2)}</pre>
<h3>Style Sheets</h3>
${sheets.join("\n")}

</details>
`;
    }
  }

  // TODO: Deprecate or Redo
  renderPage() {
    this.reloadStyleSheets();
    this.renderPaletteName();
    this.renderDebuggingInfo();
  }

  // TODO: Deprecate or Redo
  renderPaletteName() {
    //el('palette-name').innerHTML = p.name;
  }

  // TODO: Deprecate or Redo
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

  // TODO: Deprecate or Redo
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

  // TODO: Deprecate or Redo
  reloadDynamicColorVars() {
    const lines = [];
    p.modes.forEach((data, mode) => {
      const category = data.category;
      const modeName = scrubStyle(data.name);
      const lBase = data.base.l;
      const cBase = data.base.c;
      const hBase = data.base.h;
      lines.push(`--${modeName}-${p.baseColorName}: oklch(${lBase.toFixed(5)}% ${cBase.toFixed(5)} ${hBase.toFixed(5)});`);
      for (let index = 0; index < p.numberOfColors; index ++) {
        const colorName = p.colorNames[index];
        let l = 0;
        let c = 0;
        let h = 0;
        if (p.isolatedColor === -2) {
          l = this.getColorValueL(mode, index);
          c = this.getColorValueC(mode, index);
          h = this.getColorValueH(mode, index);
        } else if (p.isolatedColor === -1){
          l = p.modes[p.activeMode].base.l;
          c = p.modes[p.activeMode].base.c;
          h = p.modes[p.activeMode].base.h;
        } else {
          if (p.isolatedColor === index) {
            l = this.getColorValueL(mode, index);
            c = this.getColorValueC(mode, index);
            h = this.getColorValueH(mode, index);
          } else {
            l = p.modes[p.activeMode].base.l;
            c = p.modes[p.activeMode].base.c;
            h = p.modes[p.activeMode].base.h;
          }
        }
        lines.push(`--${modeName}-${colorName}: oklch(${l}% ${c} ${h});`);
      }
    });
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['dynamicColorVars'].innerHTML = out;
  }

  // TODO: Deprecate or Redo
  reloadDynamicPickerStyles() {
    let out = ``;
    // TODO: may `--base-color` dynamic
    out = out.replaceAll("BACKGROUND", `base-color`);
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
    this.styleSheets['dynamicPickerStyles'].innerHTML = out;
  }

  // TODO: Deprecate or Redo
  reloadDynamicUiClasses() {
    const lines = [];
    for (let color = 0; color < p.numberOfColors; color ++) {
      const lUi = this.getColorValueL(p.activeMode, color);
      const cUi = this.getColorValueC(p.activeMode, color);
      const hUi = this.getColorValueH(p.activeMode, color);
      const lineString = `.ui-${scrubStyle(p.colorNames[color])} { color: oklch(${lUi}% ${cUi} ${hUi}); }`;
      lines.push(lineString);
      for (let mode = 0; mode < p.modes.length; mode ++) {
        const colorData = p.modes[mode].colors[color];
        const hueCount = Math.round(360 / p.hueOffsets[colorData.hueOffsetIndex]);
        for (let hueIndex = 0; hueIndex < hueCount; hueIndex ++) {
          this.getLightnessValues(p.activeMode, color).forEach((lightLevel, lightIndex) => {
            const className = `.color-lightness-hue-selector--mode-${mode}--color-${color}--lightness-${lightIndex}--hue-${hueIndex}`;
            const c = this.getColorValueC(mode, color);
            const hueMultiplier = p.hueOffsets[colorData.hueOffsetIndex];
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
    this.styleSheets['dynamicUiClasses'].innerHTML = out;
  }

  // TODO: Deprecate or Redo
  reloadDynamicUiVars() {
    const lines = [];
    if (p.focused === true) {
      lines.push(`--ui-border: var(--base-color);`);
    } else {
      lines.push(`--ui-border: var(--reversed-bw-80);`);
    }
    lines.push(`--ui-active-color: var(--${p.colorNames[p.activeColor]});`);
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['dynamicUiVars'].innerHTML = out;
  }

  // TODO: Deprecate or Redo
  reloadDynamicUtilityClasses() {
    const lines = [];
    lines.push(`.${p.baseColorName} { color: var(--${p.baseColorName}); }`);
    lines.push(`.${p.baseColorName}-${p.backgroundColorName} { background-color: var(--${p.baseColorName}); }`);
    for (let index = 0; index < p.numberOfColors; index ++) {
      const colorName = p.colorNames[index];
      lines.push(`.${colorName} { color: var(--${colorName}); }`);
      lines.push(`.${colorName}-${p.backgroundColorName} { background-color: var(--${colorName}); }`);
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

  // TODO: Deprecate or Redo
  setFocus() {
    if (p.focused === true) {
      rc('one-column', el('main-body'));
      ac('two-columns', el('main-body'));
      el('sidebar').hidden = false;
      p.focused = false;
    } else {
      el('sidebar').hidden = true;
      ac('one-column', el('main-body'));
      rc('two-columns', el('main-body'));
      p.focused = true;
    }
  }

  setColorAspect(mode, color, aspect, value) {
    const hueOffsetIndex = p.modes[mode].colors[color].hueOffsetIndex;
    p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex][aspect] = value;
  }

  // TODO: Deprecate or Redo
  updateData(event) {
    let triggerRefresh = false;
    if (event.target.dataset.kind === "base") {
      const aspect = gds(event, 'aspect');
      p.modes[p.activeMode].base[aspect] = gvf(event);
      triggerRefresh = true;
    } else if (event.target.dataset.kind === "isolate-checkbox" && event.type === "change") {
      if (event.target.checked === true) {
        p.previousIsolatedColor = p.isolatedColor;
        p.isolatedColor = gdi("color", event);
      } else {
        if (p.isolatedColor === -1) {
         p.isolatedColor = p.previousIsolatedColor;
        } else {
          p.isolatedColor = -2;
        }
      }
      this.initColors();
      triggerRefresh = true;
    } else if (event.target.dataset.kind === "color-selector") {
      const color = gdi("color", event);
      p.activeColor = color;
      if (p.isolatedColor >= 0) {
        p.isolatedColor = color;
      } 
      this.initColors();
      triggerRefresh = true;
    } else if (event.target.dataset.kind === "color-hue-set-selector" 
        && event.type === "change") {
      const mode = gdi("mode", event);
      const color = gdi("color", event);
      const value = gvi(event);
      p.modes[mode].colors[color].hueOffsetIndex = value;
      this.initColors();
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
      const hueOffsetIndex = gdi("degreeset", event);
      const offsetIndex = gdi("degreesetindex", event);
      const lightnessIndex = gdi("lightness", event);
      p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].h = offsetIndex ;
      p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l = lightnessIndex;
      this.initColors();
      triggerRefresh = true;
    } else if (event.target.dataset.kind === "color-chroma-slider") {
      const mode = gdi("mode", event);
      const color = gdi("color", event);
      const hueOffsetIndex = gdi("hueoffsetindex", event);
      p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].c = gvf(event);
      triggerRefresh = true;
    }  
    if (triggerRefresh === true) {
      window.requestAnimationFrame(this.requestRender);
    }
  }

  // TODO: Deprecate or Redo
  underlineActiveHueLightnessButton() {
    const button = el(`color-lightness-hue-selector--mode-${p.activeMode}--color-${p.activeColor}--lightness-${this.getActiveColorIndexL()}--hue-${this.getActiveColorIndexH()}`);
    ac("underline", button);
  }

  // V2
  updateActiveColor(obj) {
    const color = gdiV2("color", obj);
    p.activeColor = color;
  }

  // V2
  updateBackgroundColor(obj) {
    const mode = p.activeMode;
    const color = gdiV2("color", obj);
    const aspect = gdsV2("aspect", obj);
    p.modes[mode].base[aspect] = gvfV2(obj);
    this.finishUpdate();
  }

  // TODO: Deprecate or Redo
  updateBaseSliders() {
    for (let key in p.aspects) {
      const slider = el(`base-slider-${key}`);
      slider.value = p.modes[p.activeMode].base[key];
    }
  }

  // V2
  updateLightnessHue(obj) {
    const mode = gdiV2("mode", obj);
    const color = gdiV2("color", obj);
    const lightness = gdiV2("lightness", obj);
    const hue = gdiV2("hue", obj);
    this.setColorAspect(mode, color, "l", lightness);
    this.setColorAspect(mode, color, "h", hue);
    this.finishUpdate();
  }

  // V2
  updateProdVarsStyleSheet() {
    if (this.colorVarsStyleSheet === undefined) {
      this.colorVarsStyleSheet = dc('style');
      document.head.appendChild(this.colorVarsStyleSheet);
      ad("editable", "no", this.colorVarsStyleSheet);
      ad("deployable", "yes", this.colorVarsStyleSheet);
      ad("key", "color-variables", this.colorVarsStyleSheet);
      ad("name", "Color Variables", this.colorVarsStyleSheet);
    }
    const lines = [`:root {`];
    p.modes.forEach((modeData, modeIndex) => {
      const modeName = scrubStyle(modeData.name);
      const backgroundL = this.getBackgroundValueL(modeIndex);
      const backgroundC = this.getBackgroundValueC(modeIndex);
      const backgroundH = this.getBackgroundValueH(modeIndex);
      const backgroundName = `--${modeName}__${p.backgroundColorName}`
      const backgroundValue = `oklch(${backgroundL}% ${backgroundC} ${backgroundH})`;
      lines.push(`${backgroundName}: ${backgroundValue};`);
      this.getActiveColors().forEach((colorName, colorIndex) => {
        const l = this.getColorValueL(modeIndex, colorIndex);
        const c = this.getColorValueC(modeIndex, colorIndex);
        const h = this.getColorValueH(modeIndex, colorIndex);
        const textName = `--${modeName}__${colorName}`;
        const textValue = `oklch(${l}% ${c} ${h})`;
        lines.push(`${textName}: ${textValue};`);
        p.fadedNames.forEach((fadedName, fadedIndex) => {
          const fade = .5;
          const fadedClassName = `--${modeName}__${colorName}-${fadedName}`;
          const fadedValue = `oklch(${l}% ${c} ${h}) / ${fade})`;
          lines.push(`${fadedClassName}: ${fadedValue};`);
        });
      });
    });
    lines.push(`}`);
    const out = lines.join("\n");
    this.colorVarsStyleSheet.innerHTML = out;
  }

  // V2
  updateMode(obj) {
    const newMode = gdiV2("mode", obj);
    if (newMode !== p.activeMode) {
      p.activeMode = newMode;
    }
    this.initColorTabs();
    this.updateBackgroundSliders('instructions');
    this.updateBackgroundSliders('picker');
    this.finishUpdate();
  }

  // TODO: Deprecate or Redo
  updateModeButtonStyles() {
    p.modes.forEach((data, index) => {
      const button = el(`mode-button-${index}`);
      if (index === p.activeMode) {
        ac('active-mode-button', button);
        rc('inactive-mode-button', button);
      } else {
        rc('active-mode-button', button);
        ac('inactive-mode-button', button);
      }
    });
  }

  // V2 
  // TODO? 
  updateBackgroundCheckbox(tab) {
    // const sliders = els(`input[data-tab=${tab}]`);
    // sliders.forEach((slider) => {
    //   const aspect = gdsV2("aspect", slider);
    //   slider.value = this.getActiveBackgroundValueAspect(aspect);
    // });
  }

  // V2 
  updateBackgroundSliders(tab) {
    const sidebar = elV2(`.sidebar-controls[data-tab="${tab}"]`);
    const wrapper = getEl(`.background-box-sliders`, sidebar);
    const sliders = getEls(`input`, wrapper);
    sliders.forEach((slider) => {
      const aspect = gdsV2("aspect", slider);
      slider.value = this.getActiveBackgroundValueAspect(aspect);
    });
  }

  // V2
  updateUiClassesStyleSheet() {
    if (this.uiClassesStyleSheet === undefined) {
      this.uiClassesStyleSheet = dc('style');
      document.head.appendChild(this.uiClassesStyleSheet);
    }
    const lines = [];
    this.getColorHueValues(p.activeMode, p.activeColor).forEach((hueValue, hueIndex) => {
      this.getLightnessValues(p.activeMode, p.activeColor).forEach((lightnessValue, lightnessIndex) => {
        const cValue = this.getColorValueC(p.activeMode, p.activeColor);
        const name = `.ui__set-grid__lightness-${lightnessIndex}__hue-${hueIndex}`;
        const value = `var(--ui__lightness-${lightnessIndex}__hue-${hueIndex})`;
        lines.push(`${name} { color: ${value}; }`);
      });
    });
    p.modes.forEach((modeData, modeIndex) => {
      const name = `.ui__mode-${modeIndex}__text`;
      const value = `var(--ui__mode-${modeIndex}__text)`;
      lines.push(`${name} { color: ${value}; }`);
      const backgroundName = `.ui__mode-${modeIndex}__background`;
      const backgroundValue = `var(--ui__mode-${modeIndex}__background)`;
      lines.push(`${backgroundName} { background-color: ${backgroundValue}; }`);
    });
    const out = lines.sort().join("\n");
    this.uiClassesStyleSheet.innerHTML = out;
  }

  // V2
  updateUiColorsChromaSlider(tab) {
    const sidebar = elV2(`.sidebar-controls[data-tab="${tab}"]`);
    const wrapper = getEl(`.colors-box-chroma-slider-wrapper`, sidebar);
    const slider = getEl(`input[type="range"]`, wrapper);
    slider.value = this.getActiveColorValueC();
  }

  // V2
  // REMINDER: This is the internal one that 
  // matches the active mode. The one that's 
  // exported is the responsibility of 
  // another function that lets you pick
  // the primary mode. 
  updateUiVarsStyleSheet() {
    if (this.uiColorVarsStyleSheet === undefined) {
      this.uiColorVarsStyleSheet = dc('style');
      document.head.appendChild(this.uiColorVarsStyleSheet);
    }
    const lines = [`:root {`];
    // Background
    lines.push(`--background: var(--${this.getActiveModeScrubbedName()}__${p.backgroundColorName});`);
    //
    this.getActiveColors().forEach((colorName, colorIndex) => {
      const value = `${this.getActiveModeScrubbedName()}__${colorName}`;
      lines.push(`--${colorName}: var(--${value});`);
      p.fadedNames.forEach((fadedName) => {
        const name = `${colorName}-${fadedName}`;
        const fadedValue = `${this.getActiveModeScrubbedName()}__${name}`;
        lines.push(`--${name}: var(--${fadedValue});`);
      });
    });
    //
    this.getColorHueValues(p.activeMode, p.activeColor).forEach((hueValue, hueIndex) => {
      this.getLightnessValues(p.activeMode, p.activeColor).forEach((lightnessValue, lightnessIndex) => {
        const cValue = this.getColorValueC(p.activeMode, p.activeColor);
        const name = `--ui__lightness-${lightnessIndex}__hue-${hueIndex}`;
        const value = `oklch(${lightnessValue}% ${cValue} ${hueValue})`;
        lines.push(`${name}: ${value};`);
      });
    });
    //
    p.modes.forEach((modeData, modeIndex) => {
      if (modeIndex === p.activeMode) {
        let name = `--ui__mode-${modeIndex}__text`;
        let value = "red";
        lines.push(`${name}: ${value};`);
        name = `--ui__mode-${modeIndex}__background`;
        value = "yellow";
        lines.push(`${name}: ${value};`);
      } else {
        let name = `--ui__mode-${modeIndex}__text`;
        let value = "green";
        lines.push(`${name}: ${value};`);
        name = `--ui__mode-${modeIndex}__background`;
        value = "blue";
        lines.push(`${name}: ${value};`);
      }
    });
    lines.push(`}`);
    const out = lines.join("\n");
    this.uiColorVarsStyleSheet.innerHTML = out;
  }

  updateUiView(event) {
    if (event.target.dataset) {
      const kind = event.target.dataset.kind;
      if (event.type === "click") { 
        if (kind === "mode-button") {
          this.updateMode(event.target);
        } else if (kind === "color-box-set-button") {
          this.updateLightnessHue(event.target)
        } else if (kind === "color-selector-button") {
          this.updateActiveColor(event.target)
        }
      } else if (event.type === "change") {
        if (kind === "background-box-slider") {
          this.updateBackgroundColor(event.target);
        }
      } else if (event.type === "input") {
        if (kind === "background-box-slider") {
          this.updateBackgroundColor(event.target);
        }
      }
    }
  }

  // TODO: Deprecate or Redo
  reloadStyleSheets() {
    this.reloadDynamicUiVars();
    this.reloadDynamicUiClasses();
    this.reloadDynamicPickerStyles();
    this.reloadDynamicColorVars();
    this.reloadDynamicColorSwitches();
    this.reloadDynamicBwVars();
    this.reloadDynamicUtilityClasses();
  }

}

class TabGroup extends HTMLElement {
  get tabs() {
    return [...this.querySelectorAll('[role=tab]')];
  }

  get panels() {
    return [...this.querySelectorAll('[role=tabpanel]')];
  }

  get selected() {
    return this.querySelector('[role=tab][aria-selected=true]');
  }

  set selected(element) {
    this.selected?.setAttribute('aria-selected', 'false');
    element?.setAttribute('aria-selected', 'true');
    element?.focus();
    this.updateSelection();
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
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', tab.id);
    });
  }

  updateSelection() {
    this.tabs.forEach((tab, index) => {
      const panel = this.panels[index];
      const isSelected = tab.getAttribute('aria-selected') === 'true';
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      tab.setAttribute('tabindex', isSelected ? '0' : '-1');
      panel.setAttribute('tabindex', isSelected ? '0' : '-1');
      panel.hidden = !isSelected;
    });
  }

  setupEvents() {
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', () => this.selected = tab);
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          this.selected = tab.previousElementSibling ?? this.tabs.at(-1);
        } else if (e.key === 'ArrowRight') {
          this.selected = tab.nextElementSibling ?? this.tabs.at(0);
        }
      });
    });
  }
}

customElements.define('tab-group', TabGroup);
customElements.define('color-picker', Picker);

