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
<!--
<h2 class="palette-name"></h2>
-->
<div class="nav-buttons">more stuff will go here</div>

<div class="main-body">

  <div class="flow">
    <h1>Welcome to Alan's (prototype) Color Picker</h1>

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

  <div class="sidebar flow"> 
    <div class="base-wrapper">
      <div class="view-light-dark-wrapper">
        <div class="view-mode-buttons"></div>
      </div>
      <fieldset class="background-fieldset">
        <legend class="interface-text">Background</legend>
        <div class="base-sliders"></div>
        <div class="background-checkboxes">
          <div class="background-isolate-wrapper background-checkbox-wrapper">
            <label for="background-isolate-checkbox" class="interface-text ui-font-size-small">
              Isolate:
            </label>
            <input type="checkbox" class="background-isolate-checkbox" name="background-isolate-checkbox">
          </div>
          <div class="background-focus-wrapper background-checkbox-wrapper">
            <label for="background-focus-checkbox" class="interface-text ui-font-size-small">
              Focus:
            </label>
            <input type="checkbox" class="background-focus-checkbox" name="background-focus-checkbox">
          </div>
        </div>
      </fieldset>
    </div>

    <div class="colors-wrapper">
      <fieldset class="colors-fieldset">
        <legend class="interface-text">Colors</legend>
        <div class="colors-content-wrapper flow"></div>
      </fieldset>
    </div>

    <details class="advanced-settings-wrapper flow">
      <summary class="interface-text">Advanced Settings</summary>
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
    </details>
    <details class="todo-wrapper flow">
      <summary class="interface-text">TODO List</summary>
      <ul>
        <li><input type="checkbox" disabled /> Set min light level for each color</li>
        <li><input type="checkbox" disabled /> Contrast calculations</li>
        <li><input type="checkbox" disabled /> Undo/Redo</li>
        <li><input type="checkbox" disabled /> Show/Hide content to focus on base color</li>
        <li><input type="checkbox" disabled /> Faded alternatives</li>
        <li><input type="checkbox" disabled /> Include/Remove black an white variables</li>
        <li><input type="checkbox" disabled /> Optional utility classes</li>
        <li><input type="checkbox" disabled /> Change CSS variable names</li>
        <li><input type="checkbox" disabled /> Chnage mode names</li>
        <li><input type="checkbox" disabled /> Copy button for CSS</li>
        <li><input type="checkbox" disabled /> Edit CSS</li>
        <li><input type="checkbox" disabled /> Edit HTML</li>
        <li><input type="checkbox" disabled /> Save/Load</li>
        <li><input type="checkbox" disabled /> Shareable URLs</li>
        <li><input type="checkbox" disabled /> Implementation example</li>
        <li><input type="checkbox" disabled /> Web component for mode switching</li>
        <li><input type="checkbox" disabled /> Randomizer</li>
        <li><input type="checkbox" disabled /> Switch between 45 and 60 degrees</li>
        <li><input type="checkbox" disabled /> Add/subtract modes</li>
        <li><input type="checkbox" disabled /> Issoldated color view to look at them one at a time</li>
      </ul>
    </details>
</div>

<div class="footer">
  <div class="debug flow"></div>
</div>

`;

const colorElementInternalTemplate = `
<div class="color-name">Color Name</div>
<div class="hue-set-wrapper">
  <div>
    <div class="color-hue-set"></div>
    <div class="color-hue-chroma-slider-wrapper slider-wrapper chroma-slider-wrapper">
      <label class="color-hue-chroma-slider-label">c:</label>
      <input type="range" class="color-hue-chroma-slider picker-slider" />
    </div>
    <div class="color-hue-buttons">
      <div class="color-isolate-checkbox-wrapper">
        <label class="interface-text ui-font-size-small">Isolate:</label>
        <input type="checkbox" class="color-isolate-checkbox">
      </div>
    </div>
    <div class="color-hue-faded-wrapper"></div>
  </div>
</div>
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
    const hueOffsetIndex = p.modes[mode].colors[color].hueOffsetIndex;
    const c = p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].c;
    return c.toFixed(5);
  }

  getColorH(mode, color) {
    const hueOffsetIndex = p.modes[mode].colors[color].hueOffsetIndex;
    const h = p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].h;
    let value = this.getHueValues(hueOffsetIndex)[h] + p.modes[mode].base.h;
    if (value > 360) {
      value -= 360;
    }
    return value.toFixed(5);
  }

  getColorL(mode, color) {
    const hueOffsetIndex = p.modes[mode].colors[color].hueOffsetIndex;
    const l = p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l;
    return this.getLightLevelValues(mode, color)[l];
  }

  getLightLevelValues(mode, color) {
    const levels = [];
    const minLightLevel = p.modes[mode].colors[color].minLightLevel;
    const adder = ((p.maxLightValue - minLightLevel) / p.lightLevels);
    for (let level = minLightLevel; level <= p.maxLightValue; level += adder) {
      levels.push(level.toFixed(5));
    }
    return levels;
  }

  getHueValues(hueOffsetIndex) {
    const values = [];
    const adder = p.hueOffsets[hueOffsetIndex];
    for (let value = 0; value <= 360; value += adder) {
      values.push(value);
    }
    return values;
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

  initIsolateBackgroundCheckbox() {
    const checkbox = el('background-isolate-checkbox');  
    ad("kind", "isolate-checkbox", checkbox);
    ad("color", -1, checkbox);
    if (p.isolatedColor === -1) {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
    focus(checkbox);
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
    }
    a(tabList, tabGroup);
    // Loop through the colors
    for (let color = 0; color < p.numberOfColors; color ++) {
      // Make a `tabpanel` div
      const colorEl = dc('div'); 
      const colorData = p.modes[p.activeMode].colors[color];
      sa(`role`, `tabpanel`, colorEl);
      ac(['color-wrapper', `color-wrapper-${color}`], colorEl);
      html(colorElementInternalTemplate, colorEl);
      a(colorEl, tabGroup);
      // Update the color name
      const colorNameEl = colorEl.querySelector('.color-name');
      ac([`color-name-${color}`], colorNameEl);
      ac([`color-name-${scrubStyle(p.colorNames[color])}`], colorNameEl);
      ac('bold', colorNameEl);
      ac(p.colorNames[color], colorNameEl);
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
      const hueCount = Math.round(360 / p.hueOffsets[
        colorData.hueOffsetIndex
      ]);
      for (let hueOffsetIndexcolor = 0; hueOffsetIndexcolor < hueCount; hueOffsetIndexcolor ++ ) {
        const hueOffsetIndexWrapper = dc('div');
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
      'dynamicUiClasses', 
      'dynamicUiVars', 
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
          l = this.getColorL(mode, index);
          c = this.getColorC(mode, index);
          h = this.getColorH(mode, index);
        } else if (p.isolatedColor === -1){
          l = p.modes[p.activeMode].base.l;
          c = p.modes[p.activeMode].base.c;
          h = p.modes[p.activeMode].base.h;
        } else {
          if (p.isolatedColor === index) {
            l = this.getColorL(mode, index);
            c = this.getColorC(mode, index);
            h = this.getColorH(mode, index);
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
    let out = `
*, 
*::before, 
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
a {
  text-decoration: none;
  color: var(--COLOR2);
}
.active-mode-button {
  outline: 1px solid var(--BWREVERSE-40);
  background-color: var(--BWMATCH-20);
}
.background-checkbox-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
}
.background-checkboxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 0.7rem;
  border-top: 1px solid var(--BWREVERSE-20);
  padding-top: 0.7rem;
}
.background-fieldset {
  border: 1px solid var(--BWREVERSE-20);
  border-radius: 0.3rem;
  padding-bottom: 0.8rem;
  & legend {
  }
}
.base-slider, .picker-slider {
  accent-color: var(--BWREVERSE-90);
  height: 1px;
}
body { 
  font-family: system-ui;
  background-color: var(--BASECOLOR); 
  color: var(--COLOR1);
  line-height: 1.3;
}
.bold {
  font-weight: bold;
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
.chroma-slider-wrapper {
  padding-top: 0.5rem;
  margin-top: 0.8rem;
  border-top : 1px solid var(--BWREVERSE-20);
}
.color-hue-buttons {
  padding-top: 0.5rem;
  margin-top: 0.5rem;
  border-top : 1px solid var(--BWREVERSE-20);
}
.color-isolate-checkbox-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.3rem;
}
.color-light-level {
  font-size: 0.9rem;
  padding: 0.14rem;
}
.colors-fieldset {
  border: 1px solid var(--BWREVERSE-20);
  border-radius: 0.3rem;
  padding-inline: 0;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  & legend {
    margin-left: 0.6rem;
  }
}
.color-name {
  border-bottom: 1px solid var(--ui-active-color);
  padding-inline: 0.4rem;
  padding-bottom: 0.2rem;
}
.content-wrapper {
  margin-inline: auto;
  width: min(100vw - 1.4rem, 50rem);
}
.flow > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 1em);
}
h1 {
  color: var(--COLOR3);
  border-bottom: 1px solid var(--COLOR5);
}
h2, h3 {
  color: var(--COLOR4);
  border-bottom: 1px solid var(--COLOR5);
}
header {
  margin-top: 1.3rem;
}
.hue-set-wrapper {
  padding: 0.3rem;
}
.inactive-mode-button {
  outline: 1px solid var(--BWREVERSE-40);
  background-color: var(--BWREVERSE-10);
}
.interface-text {
  color: var(--BWREVERSE-50);
}
.main-body {
  display: grid;
  grid-template-columns: 1fr 13rem;
  gap: 1.5rem;
}
.made-by {  
  text-align: right;
}
.mode-button {
  font-size: 0.8rem;
  margin: 0.2rem;
  color: var(--BWREVERSE-50);
  padding-inline: 0.2rem;
  border-radius: 0.1rem;
}
.nav-buttons {
  margin-top: 0.8rem;
  border-bottom: 1px solid var(--BWREVERSE-30);
  margin-bottom: 2.1rem;
}
ol > :where(:not(:first-child)) {
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
.slider-wrapper {
  display: grid;
  grid-template-columns: 2.2ch 1fr;
  align-items: center;
}
.ui-font-size-small {
  font-size: 0.9rem;
}
ul > :where(:not(:first-child)) {
  margin-top: var(--flow-space, 1em);
}
.view-mode-buttons{
  margin-bottom: 0.8rem;
}
/* tab stuff */
[role="tab"] {
  background: none;
  cursor: pointer;
  outline: inherit;
  padding-inline: 7px;
  font-weight: bold;
  &[aria-selected='true'] {
    border-bottom: 2px solid var(--ui-active-color);
    padding-block: 0 0;
  }
}
[role="tablist"] {
}
[role="tabpanel"] {
  margin: 0;
  padding-block: 0;
  padding-top: 0.2rem;
  padding-bottom: 0.5rem;
  border-top: 1px solid var(--ui-active-color);
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
    this.styleSheets['dynamicPickerStyles'].innerHTML = out;
  }

  reloadDynamicUiClasses() {
    const lines = [];
    for (let color = 0; color < p.numberOfColors; color ++) {
      const lUi = this.getColorL(p.activeMode, color);
      const cUi = this.getColorC(p.activeMode, color);
      const hUi = this.getColorH(p.activeMode, color);
      const lineString = `.ui-${scrubStyle(p.colorNames[color])} { color: oklch(${lUi}% ${cUi} ${hUi}); }`;
      lines.push(lineString);
      for (let mode = 0; mode < p.modes.length; mode ++) {
        const colorData = p.modes[mode].colors[color];
        const hueCount = Math.round(360 / p.hueOffsets[colorData.hueOffsetIndex]);
        for (let hueIndex = 0; hueIndex < hueCount; hueIndex ++) {
          this.getLightLevelValues(p.activeMode, color).forEach((lightLevel, lightIndex) => {
            const className = `.color-lightness-hue-selector--mode-${mode}--color-${color}--lightness-${lightIndex}--hue-${hueIndex}`;
            const c = this.getColorC(mode, color);
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
    lines.push(`--ui-active-color: var(--${p.colorNames[p.activeColor]});`);
    p.colorNames.forEach((name, color) => {
      const lineString = `--ui-${scrubStyle(name)}: oklch(40% 0.1 300);`;
      lines.push(lineString);
    });
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

  updateData(event) {
    let triggerRefresh = false;
    if (event.target.dataset.kind === "base") {
      const aspect = gds(event, 'aspect');
      p.modes[p.activeMode].base[aspect] = gvf(event);
      triggerRefresh = true;
    } else if (event.target.dataset.kind === "isolate-checkbox" && event.type === "change") {
      focus(`legacy: ${p.previousIsolatedColor} | ${p.isolatedColor}`);
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
      focus(`new: ${p.previousIsolatedColor} | ${p.isolatedColor}`);
      this.initColors();
      triggerRefresh = true;
    } else if (event.target.dataset.kind === "color-selector") {
      const color = gdi("color", event);
      p.activeColor = color;
      if (p.isolatedColor >= 0) {
        p.isolatedColor = color;
      } 
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

customElements.define('color-picker', Picker);


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

