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

// Focus (print to console regardless of debug 
function focus(value) {
  console.log(value);
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
        <div class="interface-text ui-font-size-small reverse-bw-bottom-border-80 small-full-padding">Background</div>
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
    "text",
    "links",
    "headline",
    "sub-headings",
    "accents",
    "warning",
    "info",
    "extra"
  ],
  "fadedNames": ["faded", "faded-2"],
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
    this.requestRender = this.renderPage.bind(this);
    this.styleSheets = {};
    this.initStyleSheets();
    this.initTemplate();
    this.addListeners();
    this.renderPage();

    // TODO: Refactor to put everything below here
    this.addBwColorExamples();
    this.addBwBackgroundExamples();
    this.addBwBorderExamples();
  }

  addBwBackgroundExamples() {
    const wrapper = el('bw-background-examples-wrapper');
    const kinds = ['match', 'reverse'];
    this.getBwKinds().forEach((kind) => {
      const kindEl = dc('div');
      this.getBwValues().forEach((value) => {
        const token = `${kind[0]}${value}-background`;
        const color = `${kind[1]}-color`;
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
        this.getBwValues().forEach((bwValue) => {
          const className = `${kind[0]}${bwValue}-${data[0]}-border`;
          const background = `${kind[1]}-background`;
          const color = `${kind[0]}-color`;
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
      this.getBwValues().forEach((bwValue) => {
        const token = `${kind[0]}${bwValue}-color`;
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
    el('focus-toggle-watcher').addEventListener('click', (event) => {
      this.setFocus();
    });
  }

  getActiveBaseValueC() {
    return p.modes[p.activeMode].base.c;
  }

  getActiveBaseValueH() {
    return p.modes[p.activeMode].base.h;
  }

  getActiveBaseValueL() {
    return p.modes[p.activeMode].base.l;
  }

  getActiveColorC() {
    return this.getColorC(p.activeMode, p.activeColor);
  }

  getActiveColorH() {
    return this.getColorH(p.activeMode, p.activeColor);
  }

  getActiveColorL() {
    return this.getColorL(p.activeMode, p.activeColor);
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

  getAspectMax(key) {
    return p.aspects[key].max;
  }

  getAspectStep(key) {
    return p.aspects[key].max / 10000;
  }

  getBwKinds() {
    return [
      ['black', 'white'],
      ['white', 'black'],
      ['match', 'reverse'],
      ['reverse', 'match']
    ]
  }

  getBwValues() {
    return [
      '', '-faded', '-faded2'
    ]
  }

  getColorC(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].c;
  }

  getColorH(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].h;
  }

  getColorHueValues(mode, color) {
    const values = [];
    const h = this.getColorH(mode, color);
    const hueOffsetAmount = this.getHueOffsetAmount(mode, color);
    for (let value = 0; value <= 360; value += hueOffsetAmount) {
      values.push(value + p.modes[mode].base.h);
    }
    return values;
  }

  getColorL(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l;
  }

  getColorValueC(mode, color) {
    return this.getColorC(mode, color).toFixed(5);
  }

  getColorValueH(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    const h = this.getColorH(mode, color);
    return this.getColorHueValues(mode, color)[h];
  }

  getColorValueL(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color);
    const l = p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l;
    return this.getLightLevelValues(mode, color)[l];
  }

  getColorMinLightLevel(mode, color) {
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

  getLightLevelValues(mode, color) {
    const levels = [];
    const minLightLevel = this.getColorMinLightLevel(mode, color);
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
      sa('step', this.getAspectStep('c').toFixed(5), slider);
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
        this.getLightLevelValues(p.activeMode, color).forEach((level, levelcolor) => {
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


  initStaticAlanClasses() {
    this.styleSheets['staticAlanClasses'].innerHTML = `

.xxxsmall-font-size { font-size: var(--xxxsmall-font-size); }
.xxsmall-font-size { font-size: var(--xxsmall-font-size); }
.xsmall-font-size { font-size: var(--xsmall-font-size); }
.small-font-size { font-size: var(--small-font-size); }
.base-font-size { font-size: var(--base-font-size); }
.large-font-size { font-size: var(--large-font-size); }
.xlarge-font-size { font-size: var(--xlarge-font-size); }
.xxlarge-font-size { font-size: var(--xxlarge-font-size); }
.xxxlarge-font-size { font-size: var(--xxxlarge-font-size); }
.xxxsmall-border-radius { border-radius: var(--xxxsmall-border-radius); }
.xxsmall-border-radius { border-radius: var(--xxsmall-border-radius); }
.xsmall-border-radius { border-radius: var(--xsmall-border-radius); }
.small-border-radius { border-radius: var(--small-border-radius); }
.base-border-radius { border-radius: var(--base-border-radius); }
.large-border-radius { border-radius: var(--large-border-radius); }
.xlarge-border-radius { border-radius: var(--xlarge-border-radius); }
.xxlarge-border-radius { border-radius: var(--xxlarge-border-radius); }
.xxxlarge-border-radius { border-radius: var(--xxxlarge-border-radius); }
.xxxsmall-width { width: var(--xxxsmall-width); }
.xxsmall-width { width: var(--xxsmall-width); }
.xsmall-width { width: var(--xsmall-width); }
.small-width { width: var(--small-width); }
.base-width { width: var(--base-width); }
.large-width { width: var(--large-width); }
.xlarge-width { width: var(--xlarge-width); }
.xxlarge-width { width: var(--xxlarge-width); }
.xxxlarge-width { width: var(--xxxlarge-width); }
.xxxsmall-flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 0.1em);
}
.xxsmall-flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 0.3em);
}
.xsmall-flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 0.5em);
}
.small-flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 0.7em);
}
.base-flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 1em);
}
.large-flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 1.2em);
}
.xlarge-flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 1.4em);
}
.xxlarge-flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 1.8em);
}
.xxxlarge-flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 2.2em);
}

`;
  }

  initStaticAlanVars() {
  this.styleSheets['staticAlanVars'].innerHTML = `

:root {
--xxxsmall-padding: 0.1rem;
--xxxsmall-margin: 0.1rem;
--xxsmall-padding: 0.2rem;
--xxsmall-margin: 0.2rem;
--xsmall-padding: 0.3rem;
--xsmall-margin: 0.3rem;
--small-padding: 0.4rem;
--small-margin: 0.4rem;
--base-padding: 0.5rem;
--base-margin: 0.5rem;
--large-padding: 0.8rem;
--large-margin: 0.8rem;
--xlarge-padding: 1.3rem;
--xlarge-margin: 1.3rem;
--xxlarge-padding: 1.9rem;
--xxlarge-margin: 1.9rem;
--xxxlarge-padding: 2.4rem;
--xxxlarge-margin: 2.4rem;
}

`;

  }

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
    dbg("Loaded default colors");
  }

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
          this.getLightLevelValues(p.activeMode, color).forEach((lightLevel, lightIndex) => {
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

  reloadDynamicUiVars() {
    const lines = [];
    if (p.focused === true) {
      lines.push(`--ui-border: var(--base-color);`);
    } else {
      lines.push(`--ui-border: var(--reverse-bw-80);`);
    }
    lines.push(`--ui-active-color: var(--${p.colorNames[p.activeColor]});`);
    const out = `:root {\n${lines.sort().join("\n")}\n}`;
    this.styleSheets['dynamicUiVars'].innerHTML = out;
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

  underlineActiveHueLightnessButton() {
    const button = el(`color-lightness-hue-selector--mode-${p.activeMode}--color-${p.activeColor}--lightness-${this.getActiveColorL()}--hue-${this.getActiveColorH()}`);
    ac("underline", button);
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
        rc('inactive-mode-button', button);
      } else {
        rc('active-mode-button', button);
        ac('inactive-mode-button', button);
      }
    });
  }

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

