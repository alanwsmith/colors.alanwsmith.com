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

let data = {}

let debug = true

let p = {}

// Append Object To Target
function a(child, parent) {
  if (typeof parent === 'string') {
    const el = document.querySelector(`.${parent}`)
    el.appendChild(child)
  } else {
    parent.appendChild(child)
  }
}

// Add classes to Object
function ac(data, obj) {
  if (typeof data === 'string') {
    obj.classList.add(data)
  } else {
    data.forEach((c) => {
      obj.classList.add(c)
    })
  }
}

// Add Key Value Data To Dataset
function ad(key, value, obj) {
  obj.dataset[key] = value
}

// Debug
function dbg(value) {
  if (debug === true) {
    console.log(value)
  }
}

// Document Create
function dc(name) {
  return document.createElement(name)
}

// TODO: Deprecate in favor of elV2
// Get Element By Class Name
function el(className) {
  return document.querySelector(`.${className}`)
}

// TODO: Rename to `el()` when transition
// is complete.
// Get Element By Selector
function elV2(selector) {
  return document.querySelector(selector)
}

// Get Elements By Class Name
function els(selector) {
  return document.querySelectorAll(selector)
}

// Focus (print to console regardless of debug
function fx(value) {
  console.log(value)
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
  return obj.dataset[key]
}

// Get an element from an object
function getEl(selector, obj) {
  return obj.querySelector(selector)
}

// Get elements from an object
function getEls(selector, obj) {
  return obj.querySelectorAll(selector)
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
  obj.innerHTML = str
}

// Returns a CSS class
function makeClass(name, key, value) {
  return `${name} { ${key}: ${value}; }`
}

// Returns a CSS variable string
function makeVar(name, value) {
  return `${name}: ${value};`
}

// Remove classes from Object
function rc(data, obj) {
  if (typeof data === 'string') {
    obj.classList.remove(data)
  } else {
    data.forEach((c) => {
      obj.classList.remove(c)
    })
  }
}

// Set Attribute
function sa(key, value, obj) {
  obj.setAttribute(key, value)
}

// Set Value
function sv(value, obj) {
  obj.value = value
}

// Make CSS strings lower case for consistency
// and scrub them some. Note that this
// won't catch everything. A full
// CSS parser is outside the scope of
// this tool.
function scrubStyle(input) {
  return input
    .replace(' ', '-')
    .replace(':', '-')
    .replace('{', '-')
    .replace('}', '-')
    .replace(';', '-')
    .replace('(', '-')
    .replace(')', '-')
    .toLowerCase()
}

function sortVars(a, b) {
  const x = a.split(':')[0];
  const y = b.split(':')[0];
  if (x > y) {
    return 1;
  } else if (x < y) {
    return -1;
  } else {
    return 0;
  }
}

const defaultPalette = {
  _tests: {
    passed: 0,
    failed: 0,
    failureDetails: [],
  },
  _debugging: {},
  activeMode: 0,
  activeColor: 0,
  alignments: ['left', 'right', 'start', 'end', 'justify', 'center'],
  aspectOrder: ['l', 'c', 'h'],
  aspects: {
    l: { name: 'lightness', max: 100 },
    c: { name: 'chroma', max: 0.3 },
    h: { name: 'hue', max: 360 },
  },
  backgroundColorName: 'background',
  blackAndWhiteNames: ['black', 'white', 'matched', 'reversed'],
  borderRadiiDirections: [
    ['', false],
    ['block', true],
    ['block-end', true],
    ['block-start', true],
    ['block-bottom', true],
    ['end-end', true],
    ['end-start', true],
    ['inline', true],
    ['inline-end', true],
    ['inline-start', true],
    ['left', true],
    ['right', true],
    ['start-end', true],
    ['start-start', true],
    ['top', true],
    ['top-left', true],
    ['top-right', true],
  ],
  borderRadii: [
    '1.2rem',
    '1.0rem',
    '0.8rem',
    '0.6rem',
    '0.5rem',
    '0.4rem',
    '0.3rem',
    '0.2rem',
    '0.1rem',
  ],
  colorNames: [
    'content',
    'link',
    'heading',
    'accent',
    'info',
    'warning',
    'extra',
    'bonus',
  ],
  directions: [
      ['block', true],
      ['bottom', true],
      ['', false],
      ['inline', true],
      ['left', true],
      ['right', true],
      ['top', true],
  ],
  fadedNames: ['faded', 'faded2'],
  // i've got back and forth between
  // 45 and 60 here. going with 45 for
  // now since it offers more colors. The
  // way to switch between them is
  // no in production. I removed it
  // because it felt like it was adding
  // significant complexity without much
  // utility.
  flows: [
    '6.5em',
    '4.3em',
    '2.9em',
    '1.8em',
    '1em',
    '0.7em',
    '0.5em',
    '0.3em',
    '0.2em',
  ],
  focused: false,
  fontSizes: [  
    'clamp(2.8rem, calc(2rem + 1.25vw), 3.1rem)',
    'clamp(1.84rem, calc(1.77rem + 0.87vw), 2.14rem)',
    'clamp(1.32rem, calc(1.5rem + 0.58vw), 1.65rem)',
    'clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)',
    'clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)',
    'clamp(0.94rem, calc(0.92rem + 0.11vw), 1rem)',
    'clamp(0.78rem, calc(0.77rem + 0.03vw), 0.8rem)',
    'clamp(0.68rem, calc(0.67rem + 0.03vw), 0.7rem)',
    'clamp(0.58rem, calc(0.57rem + 0.03vw), 0.6rem)',
  ],
  hueOffsets: [45, 60],
  isolatedColor: -2,
  lightLevels: 6,
  maxNumberOfColors: 8,
  maxNumberOfFaded: 2,
  maxLightValue: 100,
  modes: [
    {
      base: { l: 86.94, c: 0.03081, h: 94.86 },
      blackAndWhiteFaded: [0.4, 0.1],
      blackAndWhiteValues: [0, 100, 100, 0],
      colors: [
        // 0-0
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 0,
              c: 0.28017,
              h: 2,
            },
            {
              l: 1,
              c: 0.15879,
              h: 1,
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
              l: 2,
              c: 0.18363,
              h: 0,
            },
            {
              l: 0,
              c: 0.3,
              h: 7,
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
              l: 1,
              c: 0.10434,
              h: 1,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 1,
              c: 0.0534,
              h: 3,
            },
            {
              l: 2,
              c: 0.118,
              h: 0,
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
              l: 2,
              c: 0.09171,
              h: 3,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
      ],
      name: 'Light',
    },
    {
      base: { l: 94.92, c: 0.06066, h: 270},
      blackAndWhiteFaded: [0.4, 0.1],
      blackAndWhiteValues: [0, 100, 100, 0],
      colors: [
        // 1-0
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 0,
              c: 0.118,
              h: 5,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 1-1
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 2,
              c: 0.24567,
              h: 7,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 1-2
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 1,
              c: 0.118,
              h: 3,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 1-3
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 1,
              c: 0.03885,
              h: 6,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 1-4
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 1,
              c: 0.06066,
              h: 4,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 1-5
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 1-6
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 1-7
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
      ],
      name: 'High-Contrast Light',
    },
    {
      base: { l: 25.71, c: 0.05262, h: 78.336},
      blackAndWhiteFaded: [0.4, 0.1],
      blackAndWhiteValues: [0, 100, 0, 100],
      colors: [
        // 2-0
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 2,
              c: 0.27672,
              h: 3,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 3,
              c: 0.22386,
              h: 3,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 3,
              c: 0.06066,
              h: 5,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 3,
              c: 0.03654,
              h: 3,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
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
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
      ],
      name: 'Dark',
    },
    {
      base: { l: 0, c: 0.22155, h: 214.848 },
      blackAndWhiteFaded: [0.4, 0.1],
      blackAndWhiteValues: [0, 100, 0, 100],
      colors: [
        // 3-0
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 5,
              c: 0.19398,
              h: 5,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 3-1
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 2,
              c: 0.24684,
              h: 4,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 3-2
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 3,
              c: 0.23304,
              h: 5,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 3-3
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 4,
              c: 0.25602,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 3-4
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 5,
              c: 0.09053,
              h: 3,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 3-5
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 3-6
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
        // 3-7
        {
          fadedValues: [40, 80],
          hueOffsetIndex: 0,
          hueOffsetValues: [
            {
              l: 3,
              c: 0.118,
              h: 2,
            },
            {
              l: 4,
              c: 0.2,
              h: 3,
            },
          ],
          minLightLevel: 20,
        },
      ],
      name: 'High-Contrast Dark',
    },
  ],
  margins: [
    '2.4rem',
    '1.9rem',
    '1.3rem',
    '0.5rem',
    '0.8rem',
    '0.4rem',
    '0.3rem',
    '0.2rem',
    '0.1rem',
  ],
  name: 'Color Palette',
  numberOfColors: 4,
  numberOfFaded: 2,
  paddings: [
    '2.4rem',
    '1.9rem',
    '1.3rem',
    '0.5rem',
    '0.8rem',
    '0.4rem',
    '0.3rem',
    '0.2rem',
    '0.1rem',
  ],
  preferredMode: 0,
  previousIsolatedColor: -2,
  sizeNames: [
    'xxxlarge',
    'xxlarge',
    'xlarge',
    'large',
    'default',
    'small',
    'xsmall',
    'xxsmall',
    'xxxsmall',
  ],
  widths: [
    'calc(100vw - 1.4rem)',
    'min(100vw - 1.4rem, 64rem)',
    'min(100vw - 1.4rem, 56rem)',
    'min(100vw - 1.4rem, 48rem)',
    'min(100vw - 1.4rem, 42rem)',
    'min(100vw - 1.4rem, 36rem)',
    'min(100vw - 1.4rem, 33rem)',
    'min(100vw - 1.4rem, 16rem)',
    'min(100vw - 1.4rem, 7rem)',
    'min(100vw - 1.4rem, 3rem)'
  ]
}

const config = {
  validSchemeVersions: [[1, 0, 0]],
  storageName: 'colorPickerData',
}

class Picker extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    dbg('Connected Color Picker')
    // Reminder: Default data needs to be loaded for tests
    p = JSON.parse(JSON.stringify(defaultPalette));
    this.runTests()
    this.loadData()
    /*
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
    */

    this.initControls()
    this.populateUtilityClasses()
    this.updateVarsStyleSheet()
    this.updateUiVarsStyleSheet()
    this.updateUiClassesStyleSheet()
    this.requestUpdate = this.updateUiView.bind(this)
    this.addListeners()
    this.updateExportPage()
    this.updateDebuggingTab()
  }

  addBorderRadiusExamples() {
    dbg('addBorderRadiusExamples')
    const wrapper = el('border-radius-examples-wrapper')
    this.getSizes().forEach((size) => {
      const example = dc('div')
      const token = `${size}-radius`
      ac(`matched-text`, example)
      ac(`reversed-background`, example)
      ac(`xlarge-full-padding`, example)
      ac(`large-inline-margin`, example)
      ac(token, example)
      html(`.${token}`, example)
      a(example, wrapper)
    })
  }

  addBwBackgroundExamples() {
    const wrapper = el('bw-background-examples-wrapper')
    const kinds = ['match', 'reverse']
    this.getBwKinds().forEach((kind) => {
      const kindEl = dc('div')
      this.getFadedValues().forEach((value) => {
        const token = `${kind[0]}${value}-background`
        const color = `${kind[1]}-text`
        const exampleEl = dc('div')
        html(`.${token}`, exampleEl)
        ac(`${token}`, exampleEl)
        ac(`small-full-padding`, exampleEl)
        ac(`small-full-margin`, exampleEl)
        ac(color, exampleEl)
        a(exampleEl, kindEl)
      })
      a(kindEl, wrapper)
    })
  }

  addBwBorderExamples() {
    const wrapper = el('bw-border-examples-wrapper')
    const kinds = ['match', 'reverse']
    this.getBwKinds().forEach((kind) => {
      const kindEl = dc('div')
      this.getDirections().forEach((data) => {
        this.getFadedValues().forEach((bwValue) => {
          const className = `${kind[0]}${bwValue}-${data[0]}-border`
          const background = `${kind[1]}-background`
          const color = `${kind[0]}-text`
          const cell = dc('div')
          ac('default-inline-padding', cell)
          ac('large-block-padding', cell)
          ac(background, cell)
          ac(color, cell)
          const span = dc('span')
          html(`.${className}`, span)
          ac(className, span)
          ac(`xxsmall-full-padding`, span)
          a(span, cell)
          a(cell, kindEl)
        })
      })
      a(kindEl, wrapper)
    })
  }

  addBwColorExamples() {
    const wrapper = el('bw-color-examples-wrapper')
    this.getBwKinds().forEach((kind) => {
      const kindEl = dc('div')
      this.getFadedValues().forEach((bwValue) => {
        const token = `${kind[0]}${bwValue}-text`
        const background = `${kind[1]}-background`
        const exampleEl = dc('div')
        html(`.${token}`, exampleEl)
        ac(`${token}`, exampleEl)
        ac(`${background}`, exampleEl)
        ac(`small-full-padding`, exampleEl)
        a(exampleEl, kindEl)
      })
      a(kindEl, wrapper)
    })
  }

  addFontSizeExamples() {
    const wrapper = el('font-size-examples-wrapper')
    this.getSizes().forEach((size) => {
      const token = `${size}-font`
      const example = dc('div')
      ac(`reversed-background`, example)
      ac(`matched-text`, example)
      ac(`large-inline-margin`, example)
      ac(`default-inline-padding`, example)
      ac(token, example)
      html(`.${token}`, example)
      a(example, wrapper)
    })
  }

  addListeners() {
    dbg('addListeners')
    this.addEventListener('click', (event) => {
      this.requestUpdate.call(this, event)
    })
    this.addEventListener('change', (event) => {
      this.requestUpdate.call(this, event)
    })
    this.addEventListener('input', (event) => {
      this.requestUpdate.call(this, event)
    })
  }

  addSpacingAlignmentExamples() {
    const wrapper = el('alignment-examples-wrapper')
    this.getAlignments().forEach((alignment) => {
      const example = dc('div')
      ac(`large-inline-margin`, example)
      ac(`reversed-background`, example)
      ac(`matched-text`, example)
      ac(`default-full-padding`, example)
      const token = `align-${alignment}`
      html(
        `this is an example of text that will be positioned based on how they line up via .${token}`,
        example
      )
      ac(token, example)
      a(example, wrapper)
    })
  }

  addSpacingFlowExamples() {
    const wrapper = el('flow-examples-wrapper')
    this.getSizes().forEach((size) => {
      const example = dc('div')
      ac(`matched-text`, example)
      ac(`reversed-background`, example)
      ac(`large-full-margin`, example)
      const token = `${size}-flow`
      ac(token, example)
      const name = dc(`div`)
      html(`.${token}`, name)
      a(name, example)
      for (let p = 0; p < 4; p++) {
        const p = dc('p')
        html('item', p)
        a(p, example)
      }
      a(example, wrapper)
    })
  }

  addSpacingMarginExamples() {
    const wrapper = el('margin-examples-wrapper')
    this.getSizes().forEach((size) => {
      this.getDirections().forEach((dir) => {
        const token = `${size}-${dir[0]}-margin`
        const example = dc('div')
        ac('reversed-faded-background', example)
        ac('large-inline-margin', example)
        const name = dc('div')
        ac(`matched-text`, name)
        ac(`small-full-padding`, name)
        html(`.${token}`, name)
        a(name, example)
        const line1 = dc('div')
        ac('matched-text', line1)
        ac('reversed-background', line1)
        html('&nbsp;', line1)
        a(line1, example)
        const line2 = dc('div')
        ac('matched-background', line2)
        ac('reversed-text', line2)
        ac(token, line2)
        html('&nbsp;', line2)
        a(line2, example)
        const line3 = dc('div')
        ac('matched-text', line3)
        ac('reversed-background', line3)
        html('&nbsp;', line3)
        a(line3, example)
        a(example, wrapper)
      })
    })
  }

  addSpacingPaddingExamples() {
    const wrapper = el('padding-examples-wrapper')
    this.getSizes().forEach((size) => {
      this.getDirections().forEach((dir) => {
        const token = `${size}-${dir[0]}-padding`
        const example = dc('div')
        ac('reversed-background', example)
        ac('large-inline-margin', example)
        ac(token, example)
        const inside = dc('div')
        ac('matched-background', inside)
        html(`.${token}`, inside)
        a(inside, example)
        a(example, wrapper)
      })
    })
  }

  addSpacingWidthExamples() {
    const wrapper = el('width-examples-wrapper')
    this.getSizesWithFull().forEach((size) => {
      const token = `${size}-width`
      const example = dc('div')
      const name = dc('div')
      html(`.${token}`, name)
      a(name, example)
      ac('reversed-background', example)
      ac('matched-text', example)
      ac('large-inline-margin', example)
      const item = dc('div')
      ac('matched-background', item)
      ac(token, item)
      html(`&nbsp;`, item)
      a(item, example)
      a(example, wrapper)
    })
  }

  addSpacingWrapperExamples() {
    const wrapper = el('wrapper-examples-wrapper')
    this.getSizesWithFull().forEach((size) => {
      const token = `${size}-wrapper`
      const example = dc('div')
      const name = dc('div')
      html(`.${token}`, name)
      a(name, example)
      ac('reversed-background', example)
      ac('matched-text', example)
      ac('large-inline-margin', example)
      const item = dc('div')
      ac('matched-background', item)
      ac(token, item)
      html(`&nbsp;`, item)
      a(item, example)
      a(example, wrapper)
    })
  }

  finishUpdate() {
    dbg("finishUpdate");
    this.updateVarsStyleSheet()
    this.updateUiVarsStyleSheet()
    // TODO: move the classes things so it only has
    // to fire once
    this.updateUiClassesStyleSheet()
    this.updateExportPage()
    this.updateDebuggingTab()
    this.toggleIsolation()
  }

  populateUtilityClasses() {
    this.utilityClassesStyleSheet = dc('style')
    document.head.appendChild(this.utilityClassesStyleSheet)
    ad('editable', 'no', this.utilityClassesStyleSheet)
    ad('deployable', 'yes', this.utilityClassesStyleSheet)
    ad('name', 'Utility Classes', this.utilityClassesStyleSheet)
    const lines = []
    lines.push('')
    lines.push(this.generateBackgroundColorsClasses().join('\n'))
    lines.push('')
    lines.push(this.generateBlackAndWhiteBackgroundClasses().join('\n'))
    lines.push('')
    lines.push(this.generateBlackAndWhiteBorderClasses().join('\n'))
    lines.push('')
    lines.push(this.generateBlackAndWhiteTextClasses().join('\n'))
    lines.push('')
    lines.push(this.generateBorderRadiiClasses().join('\n'))
    lines.push('')
    lines.push(this.generateColorBorderClasses().join('\n'))
    lines.push('')
    lines.push(this.generateFlowClasses().join('\n'))
    lines.push('')
    lines.push(this.generateFontSizeClasses().join('\n'))
    lines.push('')
    lines.push(this.generateMarginClasses().join('\n'))
    lines.push('')
    lines.push(this.generatePaddingClasses().join('\n'))
    lines.push('')
    lines.push(this.generateTextAlignmentClasses().join('\n'))
    lines.push('')
    lines.push(this.generateTextColorClasses().join('\n'))
    lines.push('')
    lines.push(this.generateWidthClasses().join('\n'))
    lines.push('')
    lines.push(this.generateWrapperClasses().join('\n'))
    const out = lines.join('\n')
    this.utilityClassesStyleSheet.innerHTML = out
  }

  updateVarsStyleSheet() {
    if (this.varsStyleSheet === undefined) {
      this.varsStyleSheet = dc('style')
      document.head.appendChild(this.varsStyleSheet)
      ad('editable', 'no', this.varsStyleSheet)
      ad('deployable', 'yes', this.varsStyleSheet)
      ad('name', 'Variables', this.varsStyleSheet)
    }
    const lines = []
    lines.push(`:root {`);
    lines.push(this.updateActiveBlackAndWhiteVars().join('\n'))
    lines.push('')
    lines.push(this.updateActiveColorVars().join('\n'))
    lines.push('')
    lines.push(this.updateBlackAndWhiteVars().join('\n'))
    lines.push('')
    lines.push(this.updateBlackAndWhiteBorderStyleVars().join('\n'))
    lines.push('')
    lines.push(this.updateBorderRadiiVars().join('\n'))
    lines.push('')
    lines.push(this.updateColorBorderStyleVars().join('\n'))
    lines.push('')
    lines.push(this.updateColorThemeVars().join('\n'))
    lines.push('')
    lines.push(this.updateFlowVars().join('\n'))
    lines.push('')
    lines.push(this.updateFontSizeVars().join('\n'))
    lines.push('')
    lines.push(this.updateMarginVars().join('\n'))
    lines.push('')
    lines.push(this.updatePaddingVars().join('\n'))
    lines.push('')
    lines.push(this.updateTextAlignmentVars().join('\n'))
    lines.push('')
    lines.push(this.updateWidthVars().join('\n'))
    lines.push(`}`);
    const out = lines.join('\n');
    this.varsStyleSheet.innerHTML = out
  }

  generateBackgroundColorsClasses() {
    const lines = []
    this.getActiveColors().forEach((colorName, colorIndex) => {
      this.getFadedValues().forEach((fade) => {
        lines.push(
          makeClass(
            `.${colorName}-background${fade}`,
            `background-color`,
            `var(--${colorName}${fade})`
          )
        )
      })
    })
    lines.sort()
    return [`/* Background Color Classes */`, ...lines]
  }

  generateBlackAndWhiteBackgroundClasses() {
    const lines = []
    this.getBlackAndWhiteNames().forEach((bwName, bwIndex) => {
      lines.push(
        makeClass(
          `.${bwName}-background`,
          `background-color`,
          `var(--${bwName})`
        )
      )
      this.getScrubbedFadedNames().forEach((fadedName, fadedIndex) => {
        lines.push(
          makeClass(
            `.${bwName}-background-${fadedName}`,
            `background-color`,
            `var(--${bwName}-${fadedName})`
          )
        )
      })
    })
    lines.sort()
    return [`/* Black And White Background Classes */`, ...lines]
  }

  generateBlackAndWhiteBorderClasses() {
    const lines = []
    this.getBlackAndWhiteNames().forEach((bwName, bwIndex) => {
      this.getBorderDirectionNames().forEach((directionName, directionIndex) => {
        let name = `.${bwName}${directionName}-border`;
        const key = `border${directionName}`;
        let value = `var(--${bwName}-border-style)`;
        lines.push(makeClass(name, key, value));
        this.getScrubbedFadedNames().forEach((fadedName, fadedIndex) => {
          name = `.${bwName}${directionName}-border-${fadedName}`;
          let value = `var(--${bwName}-border-style-${fadedName})`;
          lines.push(makeClass(name, key, value));
        });
      });
    })
    lines.sort()
    return [`/* Black And White Border Classes */`, ...lines]
  }

  updateBlackAndWhiteBorderStyleVars() {
    const lines = []
    this.getBlackAndWhiteNames().forEach((bwName, bwIndex) => {
      this.getFadedValues().forEach((fadedName, fadedIndex) => {
        const name = `  --${bwName}-border-style${fadedName}`;
        const value = `1px solid var(--${bwName}${fadedName})`;
        lines.push(
          makeVar(name, value)
        );
      });
    });
    lines.sort(sortVars)
    return [`  /* Black and White Border Style Variables */`, ...lines]
  }

  generateBlackAndWhiteTextClasses() {
    const lines = []
    this.getBlackAndWhiteNames().forEach((bwName, bwIndex) => {
      lines.push(makeClass(`.${bwName}-text`, `color`, `var(--${bwName})`))
      this.getScrubbedFadedNames().forEach((fadedName, fadedIndex) => {
        lines.push(
          makeClass(
            `.${bwName}-text-${fadedName}`,
            `color`,
            `var(--${bwName}-${fadedName})`
          )
        )
      })
    })
    lines.sort()
    return [`/* Black And White Text Classes */`, ...lines]
  }

  updateBlackAndWhiteVars() {
    const lines = []
    this.getModeScrubbedNames().forEach((modeName, modeIndex) => {
      this.getBlackAndWhiteNames().forEach((bwName, bwIndex) => {
        const lightnessValue = this.getBlackAndWhiteModeValue(
          modeIndex,
          bwIndex
        )
        lines.push(
          makeVar(`  --${modeName}__${bwName}`, `oklch(${lightnessValue}% 0 0)`)
        )
        this.getScrubbedFadedNames().forEach((fadedName, fadedIndex) => {
          const fadedValue = this.getBlackAndWhiteModeFadedValue(
            modeIndex,
            fadedIndex
          )
          lines.push(
            makeVar(
              `  --${modeName}__${bwName}-${fadedName}`,
              `oklch(${lightnessValue}% 0 0 / ${fadedValue})`
            )
          )
        })
      })
    })
    lines.sort(sortVars);
    return [`  /* Black And White Theme Variables */`, ...lines]
  }

  generateBorderRadiiClasses() {
    const lines = []
    this.getSizes().forEach((sizeName, sizeIndex) => {
      this.getBorderRadiiDirectionNames().forEach((directionName, index) => {
        const ext = this.getBorderRadiiDirectionExtensions()[index];
        const name = `.${sizeName}${directionName}-radius`;
        const key = `border${ext}-radius`;
        const value = `var(--${sizeName}-radius)`;
        lines.push(
          makeClass(name, key, value)
        );
      });
    });
    lines.sort()
    return [`/* Border Radii Classes */`, ...lines]
  }

  updateBorderRadiiVars() {
    const lines = []
    this.getSizes().forEach((sizeName, sizeIndex) => {
        const name = `  --${sizeName}-radius`;
        const value = `${p.borderRadii[sizeIndex]}`;
        lines.push(
          makeVar(name, value)
        );
    });
    lines.sort(sortVars)
    return [`  /* Border Radii Variables */`, ...lines]
  }

  generateColorBorderClasses() {
    const lines = []
    this.getActiveColors().forEach((colorName, colorIndex) => {
      this.getBorderDirectionNames().forEach((directionName, directionIndex) => {
        let name = `.${colorName}${directionName}-border`;
        const key = `border${directionName}`;
        let value = `var(--${colorName}-border-style)`;
        lines.push(makeClass(name, key, value));
        this.getScrubbedFadedNames().forEach((fadedName, fadedIndex) => {
          name = `.${colorName}${directionName}-border-${fadedName}`;
          let value = `var(--${colorName}-border-style-${fadedName})`;
          lines.push(makeClass(name, key, value));
        });
      });
    });
    lines.sort()
    return [`/* Color Border Classes */`, ...lines]
  }

  updateColorBorderStyleVars() {
    const lines = []
    this.getActiveColors().forEach((colorName, colorIndex) => {
      this.getFadedValues().forEach((fadedName, fadedIndex) => {
        const name = `  --${colorName}-border-style${fadedName}`;
        const value = `1px solid var(--${colorName}${fadedName})`;
        lines.push(
          makeVar(name, value)
        );
      });
    });
    lines.sort(sortVars)
    return [`  /* Color Border Style Variables */`, ...lines]
  }

  generateFlowClasses() {
    const lines = []
    this.getSizes().forEach((sizeName, sizeIndex) => {
      const name = `.${sizeName}-flow > :where(:not(:first-child))`;
      const key = `margin-top`;
      const value = `var(--flow-space, var(--${sizeName}-flow))`;
      lines.push(
        makeClass(name, key, value)
      );
    });
    lines.sort()
    return [`/* Flow Classes */`, ...lines]
  }

  updateFlowVars() {
    const lines = []
    this.getSizes().forEach((sizeName, sizeIndex) => {
        const name = `  --${sizeName}-flow`;
        const value = `${p.flows[sizeIndex]}`;
        lines.push(
          makeVar(name, value)
        );
    });
    lines.sort(sortVars)
    return [`  /* Flow Variables */`, ...lines]
  }

  generateFontSizeClasses() {
    const lines = []
    this.getSizes().forEach((sizeName, sizeIndex) => {
      const name = `.${sizeName}-font-size`;
      const key = `font-size`;
      const value = `var(--${sizeName}-font-size)`;
      lines.push(
        makeClass(name, key, value)
      );
    });
    lines.sort()
    return [`/* Font Size Classes */`, ...lines]
  }

  updateFontSizeVars() {
    const lines = []
    this.getSizes().forEach((sizeName, sizeIndex) => {
        const name = `  --${sizeName}-font-size`;
        const value = `${p.fontSizes[sizeIndex]}`;
        lines.push(
          makeVar(name, value)
        );
    });
    lines.sort(sortVars)
    return [`  /* Font Size Variables */`, ...lines]
  }

  generateMarginClasses() {
    const lines = []
    this.getSizes().forEach((sizeName, sizeIndex) => {
      this.getDirections().forEach((direction) => {
         let ext = `-${direction[0]}`;
         if (direction[1] === false) {
           ext = '';
         }
        const name = `.${sizeName}-${direction[0]}-margin`;
        const key = `margin${ext}`;
        const value = `var(--${sizeName}-margin)`;
        lines.push(
          makeClass(name, key, value)
        );
      });
    });
    lines.sort()
    return [`/* Margin Classes */`, ...lines]
  }

  updateMarginVars() {
    const lines = []
    this.getSizes().forEach((sizeName, sizeIndex) => {
        const name = `  --${sizeName}-margin`;
        const value = `${p.margins[sizeIndex]}`;
        lines.push(
          makeVar(name, value)
        );
    });
    lines.sort(sortVars)
    return [`  /* Margin Variables */`, ...lines]
  }

  generatePaddingClasses() {
    const lines = []
    this.getSizes().forEach((sizeName, sizeIndex) => {
      this.getDirections().forEach((direction) => {
         let ext = `-${direction[0]}`;
         if (direction[1] === false) {
           ext = '';
         }
        const name = `.${sizeName}-${direction[0]}-padding`;
        const key = `padding${ext}`;
        const value = `var(--${sizeName}-padding)`;
        lines.push(
          makeClass(name, key, value)
        );
      });
    });
    lines.sort()
    return [`/* Padding Classes */`, ...lines]
  }

  updatePaddingVars() {
    const lines = []
    const alignments = ['left', 'right', 'start', 'end', 'justify', 'center'];
    this.getSizes().forEach((sizeName, sizeIndex) => {
        const name = `  --${sizeName}-padding`;
        const value = `${p.paddings[sizeIndex]}`;
        lines.push(
          makeVar(name, value)
        );
    });
    lines.sort(sortVars)
    return [`  /* Padding Variables */`, ...lines]
  }

  generateTextAlignmentClasses() {
    const lines = []
    this.getAlignments().forEach((alignment) => {
      const name = `.align-${alignment}`;
      const key = `text-align`;
      const value = `var(--align-${alignment})`;
      lines.push(
        makeClass(name, key, value)
      );
    });
    lines.sort()
    return [`/* Text Alignment Classes */`, ...lines]
  }

  updateTextAlignmentVars() {
    const lines = []
    this.getAlignments().forEach((alignment) => {
        const name = `  --align-${alignment}`;
        const value = `${alignment}`;
        lines.push(
          makeVar(name, value)
        );
    });
    lines.sort(sortVars)
    return [`  /* Text Alignment Variables */`, ...lines]
  }

  generateTextColorClasses() {
    const lines = []
    this.getActiveColors().forEach((colorName, colorIndex) => {
      this.getFadedValues().forEach((fade) => {
        lines.push(
          makeClass(
            `.${colorName}-text${fade}`,
            `color`,
            `var(--${colorName}${fade})`
          )
        )
      })
    })
    lines.sort()
    return [`/* Text Color Classes */`, ...lines]
  }

  generateWidthClasses() {
    const lines = []
    this.getSizesWithFull().forEach((sizeName, sizeIndex) => {
      const name = `.${sizeName}-width`;
      const key = `width`;
      const value = `var(--${sizeName}-width)`;
      lines.push(
        makeClass(name, key, value)
      );
    });
    lines.sort()
    return [`/* Width Classes */`, ...lines]
  }

  updateWidthVars() {
    const lines = []
    this.getSizesWithFull().forEach((sizeName, sizeIndex) => {
        const name = `  --${sizeName}-width`;
        const value = `${p.widths[sizeIndex]}`;
        lines.push(
          makeVar(name, value)
        );
    });
    lines.sort(sortVars)
    return [`  /* Width Variables */`, ...lines]
  }

  generateWrapperClasses() {
    const lines = []
    this.getSizesWithFull().forEach((sizeName, sizeIndex) => {
      const name = `.${sizeName}-wrapper`;
      const values = `width: var(--${sizeName}-width); margin-inline: auto;`;
      lines.push(
        `${name} { ${values} }`
      );
    });
    lines.sort()
    return [`/* Wrapper Classes */`, ...lines]
  }

  updateColorThemeVars() {
    const lines = []
    p.modes.forEach((modeData, modeIndex) => {
      const modeName = scrubStyle(modeData.name)
      const backgroundL = this.getBackgroundValueL(modeIndex)
      const backgroundC = this.getBackgroundValueC(modeIndex)
      const backgroundH = this.getBackgroundValueH(modeIndex)

      const backgroundName = `  --${modeName}__${p.backgroundColorName}`
      const backgroundValue = `oklch(${backgroundL}% ${backgroundC} ${backgroundH})`
      lines.push(`${backgroundName}: ${backgroundValue};`)
      this.getActiveColors().forEach((colorName, colorIndex) => {
        const l = this.getColorValueL(modeIndex, colorIndex)
        const c = this.getColorValueC(modeIndex, colorIndex)
        const h = this.getColorValueH(modeIndex, colorIndex)
        const textName = `  --${modeName}__${colorName}`
        const textValue = `oklch(${l}% ${c} ${h})`
        lines.push(`${textName}: ${textValue};`)
        p.fadedNames.forEach((fadedName, fadedIndex) => {
          const fade = 0.5
          const fadedClassName = `  --${modeName}__${colorName}-${fadedName}`
          const fadedValue = `oklch(${l}% ${c} ${h} / ${fade})`
          lines.push(`${fadedClassName}: ${fadedValue};`)
        })
      })
    })
    lines.sort(sortVars);
    return [`  /* Color Theme Variables */`, ...lines]
  }

  updateMode(obj) {
    const newMode = gdiV2('mode', obj)
    if (newMode !== p.activeMode) {
      p.activeMode = newMode
    }
    this.initColorTabs()
    this.updateBackgroundSliders('instructions')
    // this.updateBackgroundSliders('picker');
    this.finishUpdate()
  }

  getActiveBackgroundValueAspect(aspect) {
    if (aspect === 'l') {
      return this.getActiveBackgroundValueL()
    } else if (aspect === 'c') {
      return this.getActiveBackgroundValueC()
    } else if (aspect === 'h') {
      return this.getActiveBackgroundValueH()
    }
  }

  getActiveBackgroundValueC() {
    return p.modes[p.activeMode].base.c
  }

  getActiveBackgroundValueH() {
    return p.modes[p.activeMode].base.h
  }

  getActiveBackgroundValueL() {
    return p.modes[p.activeMode].base.l
  }

  getActiveColorIndexC() {
    return this.getColorIndexC(p.activeMode, p.activeColor)
  }

  getActiveColorIndexH() {
    return this.getColorIndexH(p.activeMode, p.activeColor)
  }

  getActiveColorIndexL() {
    return this.getColorIndexL(p.activeMode, p.activeColor)
  }

  getActiveColorScrubbedName() {
    return scrubStyle(p.colorNames[p.activeColor])
  }

  getActiveColors() {
    return p.colorNames.filter((name, index) => {
      return index < p.numberOfColors
    })
  }

  getActiveColorValueC() {
    return this.getColorValueC(p.activeMode, p.activeColor)
  }

  getActiveColorValueH() {
    return this.getColorValueH(p.activeMode, p.activeColor)
  }

  getActiveColorValueL() {
    return this.getColorValueL(p.activeMode, p.activeColor)
  }

  getActiveModeScrubbedName() {
    return scrubStyle(p.modes[p.activeMode].name)
  }

  getAlignments() {
    return p.alignments;
  }

  getAspectMax(aspect) {
    return p.aspects[aspect].max
  }

  getAspectStep(aspect) {
    const value = p.aspects[aspect].max / 10000
    return value.toFixed(7)
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

  getBlackAndWhiteModeValue(mode, index) {
    return p.modes[mode].blackAndWhiteValues[index]
  }

  getBlackAndWhiteModeFadedValue(mode, index) {
    return p.modes[mode].blackAndWhiteFaded[index]
  }

  getBlackAndWhiteNames() {
    return p.blackAndWhiteNames
  }

  getBorderDirectionExtensions() {
    return p.directions.map((direction) => {
      if (direction[1] === true) {
        return `-${direction[0]}`;
      } else {
        return '';
      };
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
        return '';
      };
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

  // TODO: Deprecate this to getBlackAndWhiteNames
  getBwKinds() {
    return [
      ['black', 'white'],
      ['white', 'black'],
      ['match', 'reverse'],
      ['reverse', 'match'],
    ]
  }

  getColorFadedValue(mode, color, index) {
    return p.modes[mode].colors[color].fadedValues[index]
  }

  getColorIndexC(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color)
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].c
  }

  getColorIndexH(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color)
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].h
  }

  getColorHueValues(mode, color) {
    const values = []
    const h = this.getColorIndexH(mode, color)
    const hueOffsetAmount = this.getHueOffsetAmount(mode, color)
    for (let value = 0; value < 360; value += hueOffsetAmount) {
      values.push(value + p.modes[mode].base.h)
    }
    return values
  }

  getColorHueRowValues(mode, color) {
    return [23, 34, 45, 234, 23, 12, 32, 51]
  }

  getColorIndexL(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color)
    return p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l
  }

  getColorValueC(mode, color) {
    return this.getColorIndexC(mode, color).toFixed(5)
  }

  getColorValueH(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color)
    const h = this.getColorIndexH(mode, color)
    return this.getColorHueValues(mode, color)[h].toFixed(5)
  }

  getColorValueL(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color)
    const l = p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex].l
    return this.getLightnessValues(mode, color)[l]
  }

  getColorMinLightValue(mode, color) {
    return p.modes[mode].colors[color].minLightLevel
  }

  // TODO: Deprecate and put in data object
  getDirections() {
    return p.directions
  }

  getScrubbedActiveModeName() {
    return scrubStyle(p.modes[p.activeMode].name)
  }

  getScrubbedFadedNames() {
    return p.fadedNames.map((name) => {
      return scrubStyle(name)
    })
  }

  // TODO: Deprecate and put in data object
  getFadedValues() {
    return ['', '-faded', '-faded2']
  }

  getLightnessValues(mode, color) {
    const levels = []
    const minLightLevel = this.getColorMinLightValue(mode, color)
    const adder = (p.maxLightValue - minLightLevel) / (p.lightLevels - 1)
    for (let level = minLightLevel; level <= p.maxLightValue; level += adder) {
      levels.push(level.toFixed(5))
    }
    return levels
  }

  getHueOffsetIndex(mode, color) {
    return p.modes[mode].colors[color].hueOffsetIndex
  }

  getHueOffsetAmount(mode, color) {
    const hueOffsetIndex = this.getHueOffsetIndex(mode, color)
    return p.hueOffsets[hueOffsetIndex]
  }

  getHueRowCount(mode, color) {
    return Math.round(360 / this.getHueOffsetAmount(mode, color))
  }

  getModeNames() {
    return p.modes.map((mode) => {
      return mode.name
    })
  }

  getModeScrubbedNames() {
    return p.modes.map((mode) => {
      return scrubStyle(mode.name)
    })
  }

  getActiveScrubbedColorNames() {
    return this.getActiveColors().map((colorName) => {
      return scrubStyle(colorName)
    })
  }

  getSizes() {
    return p.sizeNames;
  }

  getSizesWithFull() {
    return ['full', ...this.getSizes()]
  }

  initBackgroundCheckboxes() {
    dbg('initBackgroundCheckboxes()')
    const sidebars = els('.sidebar-controls')
    sidebars.forEach((sidebar, sidebarIndex) => {
      const tab = gdsV2('tab', sidebar)
      const wrapper = getEl('.background-box-isolate-wrapper', sidebar)
      const connector = `background-box-isolate-checkbox-${tab}`
      const label = getEl('label', wrapper)
      sa('for', connector, label)
      ac('picker-text', label)
      const checkbox = getEl('input', wrapper)
      sa('id', connector, checkbox)
      sa('name', connector, checkbox)
      ad('kind', 'background-box-isolate-checkbox', checkbox)
      ad('tab', tab, checkbox)
    })
  }

  initBackgroundSliders() {
    dbg('initBackgroundSlider()')
    const sidebars = els('.sidebar-controls')
    sidebars.forEach((sidebar, sidebarIndex) => {
      const tab = gdsV2('tab', sidebar)
      const wrappers = getEls('.background-box-slider-wrapper', sidebar)
      wrappers.forEach((wrapper) => {
        const aspect = gdsV2('aspect', wrapper)
        const connector = `background-box-slider-${tab}-${aspect}`
        const label = getEl('label', wrapper)
        label.innerHTML = `${aspect}:`
        sa('for', connector, label)
        ac('picker-text', label)
        const slider = getEl('input', wrapper)
        sa('name', connector, slider)
        sa('min', '0', slider)
        sa('max', this.getAspectMax(aspect), slider)
        sa('step', this.getAspectStep(aspect), slider)
        ad('aspect', aspect, slider)
        ad('tab', tab, slider)
      })
      this.updateBackgroundSliders(tab)
    })
  }

  initColorTabs() {
    dbg('initColorTabs')
    const sidebars = els('.sidebar-controls')
    sidebars.forEach((sidebar) => {
      const tabKey = gdsV2('tab', sidebar)
      const wrapper = getEl('.colors-box-tabs-wrapper', sidebar)
      html('', wrapper)
      const tabGroup = dc('tab-group')
      const tabList = dc('div')
      sa('role', 'tablist', tabList)
      ac('colors-box-tab-list', tabList)
      for (let nameIndex = 0; nameIndex < p.numberOfColors; nameIndex++) {
        const tabButton = dc('button')
        sa('role', 'tab', tabButton)
        ac('color-selector-button', tabButton)
        if (nameIndex === p.activeColor) {
          sa('aria-selected', 'true', tabButton)
         ac(`ui__background-text`, tabButton)
          // ac(`ui__mode-${p.activeMode}__color-${nameIndex}-background`, tabButton);
          // ac(`reversed`, tabButton);
          ac(
            `ui__mode-${p.activeMode}__color-${nameIndex}-background`,
            tabButton
          )
          ac(`${this.getActiveColorScrubbedName()}-bottom-border`, tabButton)
        } else {
          ac(`reversed-bottom-border`, tabButton)
          ac(`ui__background-text`, tabButton)
          // ac(`background-text`, tabButton);
          //ac(`ui__mode-${p.activeMode}__color-${nameIndex}-text`, tabButton);
          // ac(`ui__mode-${p.activeMode}__color-${nameIndex}-text`, tabButton);
          ac(
            `ui__mode-${p.activeMode}__color-${nameIndex}-background`,
            tabButton
          )
        }
        html(Array.from(p.colorNames[nameIndex])[0], tabButton)
        ad('kind', 'color-selector-button', tabButton)
        ad('color', nameIndex, tabButton)
        if (nameIndex === p.numberOfColors - 1) {
          ac(`round-upper-right-corner`, tabButton)
        }
        a(tabButton, tabList)
      }
      a(tabList, tabGroup)
      for (let nameIndex = 0; nameIndex < p.numberOfColors; nameIndex++) {
        const panel = dc('div')
        sa('role', 'tabpanel', panel)
        ac(`color-tab-panel`, panel)
        if (nameIndex !== p.activeColor) {
          panel.hidden = true
        }
        const tabName = dc('div')
        html(p.colorNames[nameIndex], tabName)
        ac(`ui__mode-${p.activeMode}__color-${nameIndex}-background`, tabName)
        ac(`ui__background-text`, tabName)
        ac(`color-selector-tab-name`, tabName)
        a(tabName, panel)
        const tabGrid = dc('div')
        ac('color-grid-wrapper', tabGrid)
        this.getColorHueValues(p.activeMode, p.activeColor).forEach(
          (hueData, hue) => {
            const row = dc('div')
            this.getLightnessValues(p.activeMode, p.activeColor).forEach(
              (lightnessData, lightness) => {
                const button = dc('button')
                html('set', button)
                ad('kind', 'color-box-set-button', button)
                ad('mode', p.activeMode, button)
                ad('color', nameIndex, button)
                ad('lightness', lightness, button)
                ad('hue', hue, button)
                ac(`ui__set-grid__lightness-${lightness}__hue-${hue}`, button)
                ac(
                  `ui__set-grid__lightness-${lightness}__hue-${hue}__decoration`,
                  button
                )
                ac(`color-box-set-button`, button)
                a(button, row)
              }
            )
            a(row, tabGrid)
          }
        )
        a(tabGrid, panel)
        const chromaWrapper = dc('div')
        ac('colors-box-chroma-slider-wrapper', chromaWrapper)
        const connector = `colors-box-chroma-slider-${tabKey}`
        const label = dc('label')
        ac('colors-box-chroma-slider-label', label)
        sa('for', connector, label)
        html('c:', label)
        a(label, chromaWrapper)
        const slider = dc('input')
        sa('type', 'range', slider)
        sa('name', connector, slider)
        sa('min', '0', slider)
        sa('max', this.getAspectMax('c'), slider)
        sa('step', this.getAspectStep('c'), slider)
        ad('kind', 'color-chroma-slider', slider)
        ad('color', nameIndex, slider)
        slider.value = this.getColorValueC(p.activeMode, nameIndex)
        a(slider, chromaWrapper)
        a(chromaWrapper, panel)
        const checkboxWrapper = dc('div')
        ac('colors-box-chroma-checkbox-wrapper', checkboxWrapper)
        const checkboxConnector = `colors-box-chroma-checkbox-${tabKey}`
        const checkboxLabel = dc('label')
        ac('colors-box-chroma-checkbox-label', checkboxLabel)
        sa('for', checkboxConnector, checkboxLabel)
        html('Isolate: ', checkboxLabel)
        const checkbox = dc('input')
        sa('id', checkboxConnector, checkbox)
        sa('name', checkboxConnector, checkbox)
        sa('type', 'checkbox', checkbox)
        ad('kind', 'color-isolate-checkbox', checkbox)
        ad('color', nameIndex, checkbox)
        if (p.isolatedColor >= 0) {
          checkbox.checked = true
        }
        a(checkboxLabel, checkboxWrapper)
        a(checkbox, checkboxWrapper)
        a(checkboxWrapper, panel)
        a(panel, tabGroup)
      }
      a(tabGroup, wrapper)
    })
  }

  initControls() {
    const sidebars = els('.sidebar-controls')
    const template = elV2('#picker-controls-template')
    sidebars.forEach((sidebar) => {
      html('', sidebar)
      const clone = template.content.cloneNode(true)
      a(clone, sidebar)
    })
    this.initModeButtonsV2()
    this.initBackgroundSliders()
    this.initBackgroundCheckboxes()
    this.initColorTabs()
  }

  initModeButtonsV2() {
    const sidebars = els('.sidebar-controls')
    sidebars.forEach((sidebar) => {
      const tab = gdsV2('tab', sidebar)
      const wrapper = getEl('.mode-buttons', sidebar)
      ad('tab', tab, wrapper)
      html('', wrapper)
      p.modes.forEach((modeData, modeIndex) => {
        const button = dc('button')
        html(modeData.name, button)
        ac(`mode-${modeIndex}-selector-button`, button)
        ad('tab', tab, button)
        ad('mode', modeIndex, button)
        ad('kind', 'mode-button', button)
        a(button, wrapper)
      })
    })
  }

  // TODO: Verify
  loadData() {
    const checkData = localStorage.getItem(config.storageName)
    if (checkData && checkData.version[0] === 1) {
      dbg(`Loaded colors from storage`)
      p = checkData
    } else {
      this.loadDefaults()
    }
    p = data.palettes[0]
  }

  // TODO: Verify
  loadDefaults() {
    data = {
      palettes: [defaultPalette],
      schemaVersion: [1, 0, 0],
    }
    dbg('Loaded default colors')
  }

  refreshColorGrid() {
    const sidebars = els('.sidebar-controls')
    sidebars.forEach((sidebar) => {
      const tabKey = gdsV2('tab', sidebar)
      const wrapper = getEl('.colors-box-grid-wrapper', sidebar)
      this.getColorHueValues(p.activeMode, p.activeColor).forEach(
        (hueData, hue) => {
          const row = dc('div')
          this.getLightnessValues(p.activeMode, p.activeColor).forEach(
            (lightnessData, lightness) => {
              const button = dc('button')
              html('set', button)
              ad('kind', 'color-box-set-button', button)
              ad('mode', p.activeMode, button)
              ad('color', p.activeColor, button)
              ad('lightness', lightness, button)
              ad('hue', hue, button)
              ac(`ui__set-grid__lightness-${lightness}__hue-${hue}`, button)
              ac(
                `ui__set-grid__lightness-${lightness}__hue-${hue}__decoration`,
                button
              )
              a(button, row)
            }
          )
          a(row, wrapper)
        }
      )
    })
  }

  runTest(payload) {
    if (payload[0] === payload[1]) {
      return { status: "pass", expected: payload[1], got: payload[0], details: payload[2] };
    } else {
      return { status: "fail", expected: payload[1], got: payload[0], details: payload[2] };
    }
  }

  // NOTE: This is a stub for when I figure
  // out how I want to test after the
  // design finalizes.
  runTests() {
    this.testResults = [];
    const tests = [
      [
        this.generateBackgroundColorsClasses()[1], 
        '.accent-background { background-color: var(--accent); }',
        'generateBackgroundColorsClasses'
      ],
      [
        this.generateBackgroundColorsClasses()[2], 
        '.accent-background-faded { background-color: var(--accent-faded); }',
        'generateBackgroundColorsClasses'
      ],
      [
        this.generateBackgroundColorsClasses()[3], 
        '.accent-background-faded2 { background-color: var(--accent-faded2); }',
        'generateBackgroundColorsClasses',
      ], 
      [
        this.generateBlackAndWhiteBackgroundClasses()[1], 
        '.black-background { background-color: var(--black); }',
        'generateBlackAndWhiteBackgroundClasses',
      ],
      [
        this.generateBlackAndWhiteBackgroundClasses()[2], 
        '.black-background-faded { background-color: var(--black-faded); }',
        'generateBlackAndWhiteBackgroundClasses',
      ],
      [
        this.generateBlackAndWhiteBackgroundClasses()[3], 
        '.black-background-faded2 { background-color: var(--black-faded2); }',
        'generateBlackAndWhiteBackgroundClasses',
      ],
      [
        this.generateBlackAndWhiteBorderClasses()[4], 
        '.black-border { border: var(--black-border-style); }',
        'generateBlackAndWhiteBorderClasses',
      ],
      [
        this.generateBorderRadiiClasses()[1],
        '.default-block-bottom-radius { border-block-bottom-radius: var(--default-radius); }',
        'generateBorderRadiiClasses',
      ],
      [
        this.generateBorderRadiiClasses()[11],
        '.default-radius { border-radius: var(--default-radius); }',
        'generateBorderRadiiClasses',
      ],
      [ 
        this.generateColorBorderClasses()[2],
        '.accent-block-border-faded { border-block: var(--accent-border-style-faded); }',
        'generateColorBorderClasses',
      ],
      [ 
        this.generateColorBorderClasses()[4],
        '.accent-border { border: var(--accent-border-style); }',
        'generateColorBorderClasses',
      ],
      [ 
        this.generateFlowClasses()[4],
        '.xlarge-flow > :where(:not(:first-child)) { margin-top: var(--flow-space, var(--xlarge-flow)); }',
        'generateFlowClasses'
      ]
    ];
    tests.forEach((test) => {
      this.testResults.push(this.runTest(test));
    });
  }

  setColorAspect(mode, color, aspect, value) {
    const hueOffsetIndex = p.modes[mode].colors[color].hueOffsetIndex
    p.modes[mode].colors[color].hueOffsetValues[hueOffsetIndex][aspect] = value
  }

  switchTopLevelTabs() {
    this.initColorTabs()
    this.initBackgroundSliders()
    this.finishUpdate()
  }

  toggleIsolateBackground(obj) {
    if (obj.checked === true) {
      dbg('Isolating background')
      p.previousIsolatedColor = p.isolatedColor
      p.isolatedColor = -1
    } else {
      dbg('Returning from isolated background')
      p.isolatedColor = p.previousIsolatedColor
    }
    this.finishUpdate()
  }

  toggleIsolateColor(obj) {
    if (obj.checked === true) {
      const color = gdiV2('color', obj)
      p.previousIsolatedColor = -2
      p.isolatedColor = color
    } else {
      p.isolatedColor = -2
    }
    this.finishUpdate()
  }

  toggleIsolation() {
    if (this.uiIsolationStyleSheet === undefined) {
      this.uiIsolationStyleSheet = dc('style')
      ad('name', 'Isolation Vars', this.uiIsolationStyleSheet)
      document.head.appendChild(this.uiIsolationStyleSheet)
    }
    const lines = []
    if (p.isolatedColor === -1) {
      this.getActiveColors().forEach((colorName, colorIndex) => {
        lines.push(`--${colorName}: var(--background);`)
        p.fadedNames.forEach((fadedName) => {
          const name = `${colorName}-${fadedName}`
          lines.push(`--${name}: var(--background);`)
        })
      })
      els('.mode-buttons-wrapper').forEach((wrapper) => {
        wrapper.classList.add('invisible')
      })
      els('.nav-tab-list').forEach((wrapper) => {
        wrapper.classList.add('invisible')
      })
      els('.colors-box-wrapper').forEach((wrapper) => {
        wrapper.classList.add('invisible')
      })
      els('.content-body').forEach((e) => {
        e.classList.add('invisible')
      })
    } else if (p.isolatedColor >= 0) {
      this.getActiveColors().forEach((colorName, colorIndex) => {
        if (colorIndex !== p.isolatedColor) {
          lines.push(`--${colorName}: var(--background);`)
          p.fadedNames.forEach((fadedName) => {
            const name = `${colorName}-${fadedName}`
            lines.push(`--${name}: var(--background);`)
          })
        }
      })
      els('.content-body').forEach((e) => {
        e.classList.remove('invisible')
      })
      els('.mode-buttons-wrapper').forEach((wrapper) => {
        wrapper.classList.remove('invisible')
      })
      els('.nav-tab-list').forEach((wrapper) => {
        wrapper.classList.add('invisible')
      })
      els('.colors-box-wrapper').forEach((wrapper) => {
        wrapper.classList.remove('invisible')
      })
    } else {
      els('.content-body').forEach((e) => {
        e.classList.remove('invisible')
      })
      els('.mode-buttons-wrapper').forEach((wrapper) => {
        wrapper.classList.remove('invisible')
      })
      els('.nav-tab-list').forEach((wrapper) => {
        wrapper.classList.remove('invisible')
      })
      els('.colors-box-wrapper').forEach((wrapper) => {
        wrapper.classList.remove('invisible')
      })
    }
    const out = `:root { ${lines.join('\n')} }`
    this.uiIsolationStyleSheet.innerHTML = out
  }

  updateActiveColor(obj) {
    const color = gdiV2('color', obj)
    dbg(`updateActiveColor: ${color}`)
    p.activeColor = color
    if (p.isolatedColor >= 0) {
      p.isolatedColor = color
    }
    this.initColorTabs()
    this.finishUpdate()
  }

  updateActiveBlackAndWhiteVars() {
    const lines = []
    const modeName = this.getScrubbedActiveModeName()
    this.getBlackAndWhiteNames().forEach((bwName, bwIndex) => {
      lines.push(makeVar(`  --${bwName}`, `var(--${modeName}__${bwName})`))
      this.getScrubbedFadedNames().forEach((fadedName, fadedIndex) => {
        lines.push(
          makeVar(
            `  --${bwName}-${fadedName}`,
            `var(--${modeName}__${bwName}-${fadedName})`
          )
        )
      })
    })
    lines.sort(sortVars)
    return [`  /* Active Black and White Variables */`, ...lines]
  }

  updateActiveColorVars() {
    const lines = []
    this.getActiveScrubbedColorNames().forEach((colorName, colorIndex) => {
      const modeName = this.getActiveModeScrubbedName(p.activeMode)
      lines.push(
        makeVar(`  --${colorName}`, `var(--${modeName}__${colorName})`)
      )
      this.getScrubbedFadedNames().forEach((fadedName, fadedIndex) => {
        lines.push(
          makeVar(
            `  --${colorName}-${fadedName}`,
            `var(--${modeName}__${colorName}-${fadedName})`
          )
        )
      })
    })
    lines.sort(sortVars)
    return [`  /* Active Color Variables */`, ...lines]
  }

  updateBackgroundColors(obj) {
    const mode = p.activeMode
    const color = gdiV2('color', obj)
    const aspect = gdsV2('aspect', obj)
    p.modes[mode].base[aspect] = gvfV2(obj)
    this.finishUpdate()
  }

  updateColorChroma(obj) {
    const value = gvfV2(obj)
    this.setColorAspect(p.activeMode, p.activeColor, 'c', value)
    this.finishUpdate()
  }

  updateLightnessHue(obj) {
    const mode = gdiV2('mode', obj)
    const color = gdiV2('color', obj)
    const lightness = gdiV2('lightness', obj)
    const hue = gdiV2('hue', obj)
    this.setColorAspect(mode, color, 'l', lightness)
    this.setColorAspect(mode, color, 'h', hue)
    this.finishUpdate()
  }

  updateBackgroundSliders(tab) {
    const sidebar = elV2(`.sidebar-controls[data-tab="${tab}"]`)
    const wrapper = getEl(`.background-box-sliders`, sidebar)
    const sliders = getEls(`input`, wrapper)
    sliders.forEach((slider) => {
      const aspect = gdsV2('aspect', slider)
      slider.value = this.getActiveBackgroundValueAspect(aspect)
    })
  }

  updateDebuggingTab() {
    const outputEl = elV2('.debugging-content')
    let pass = 0;
    let fail = 0;
    let failDetails = [];
    this.testResults.forEach((result) => {
      if (result.status === 'pass') {
        pass ++;
      } else {
        fail ++;
        failDetails.push(result);
      }
    });
    p["_tests"] = {
      pass: pass,
      fail: fail,
      failureDetails: failDetails,
    };
    p["_debugging"] = {
      base: {
        l: this.getBackgroundValueL(p.activeMode),
        c: this.getBackgroundValueC(p.activeMode),
        h: this.getBackgroundValueH(p.activeMode),
      },
      colors: []
    };
    p.modes.forEach((modeData, modeIndex) => {
      modeData.colors.forEach((colorData, colorIndex) => {
        const l = this.getColorIndexL(modeIndex, colorIndex);
        const c = this.getColorIndexC(modeIndex, colorIndex);
        const h = this.getColorIndexH(modeIndex, colorIndex);
        p["_debugging"].colors.push(
          `mode: ${modeIndex} - color: ${colorIndex} - l: ${l} c: ${c} h: ${h}`
        );
      })
    });
    el('debugging-content').innerHTML = JSON.stringify(p, null, 2); 
  }


  updateExportPage() {
    const outputEl = elV2('.export-content')
    const sheets = els('style[data-name]')
    let payloads = []
    sheets.forEach((sheet) => {
      payloads.push({
        name: sheet.dataset.name,
        content: sheet.innerHTML,
      })
    })
    outputEl.innerHTML = payloads
      .map((item) => {
        let open = ''
        if (
          item.name === 'Variables' ||
          item.name === 'Utility Classes' 
        ) {
          open = ' open'
        }
        return `
<details${open}>
<summary>${item.name}</summary>
<pre class="xsmall-font-size">${item.content}</pre>
</details>
`
      })
      .join('\n\n')
  }

  updateUiClassesStyleSheet() {
    if (this.uiClassesStyleSheet === undefined) {
      this.uiClassesStyleSheet = dc('style')
      ad('name', 'UI Classes', this.uiClassesStyleSheet)
      document.head.appendChild(this.uiClassesStyleSheet)
    }
    const lines = []
    lines.push(`.picker-text { color: var(--ui__picker); }`)
    lines.push(`.picker-text { color: var(--ui__picker); }`)
    this.getColorHueValues(p.activeMode, p.activeColor).forEach(
      (hueValue, hueIndex) => {
        this.getLightnessValues(p.activeMode, p.activeColor).forEach(
          (lightnessValue, lightnessIndex) => {
            lines.push(
              makeClass(
                `.ui__set-grid__lightness-${lightnessIndex}__hue-${hueIndex}`,
                `color`,
                `var(--ui__lightness-${lightnessIndex}__hue-${hueIndex})`
              )
            )
            lines.push(
              makeClass(
                `.ui__set-grid__lightness-${lightnessIndex}__hue-${hueIndex}__decoration`,
                `text-decoration`,
                `var(--ui__lightness-${lightnessIndex}__hue-${hueIndex}__decoration)`
              )
            )
          }
        )
      }
    )
    // Mode buttons
    p.modes.forEach((modeData, modeIndex) => {
      lines.push(
        makeClass(
          `.mode-${modeIndex}-selector-button`,
          `color`,
          `var(--mode-${modeIndex}-selector-button-color)`
        )
      )
      lines.push(
        makeClass(
          `.mode-${modeIndex}-selector-button`,
          `background-color`,
          `var(--mode-${modeIndex}-selector-button-background-color)`
        )
      )
      lines.push(
        makeClass(
          `.mode-${modeIndex}-selector-button`,
          `border`,
          `1px solid var(--mode-${modeIndex}-selector-button-color)`
        )
      )
    })
    p.modes.forEach((modeData, modeIndex) => {
      const name = `.ui__mode-${modeIndex}__text`
      const value = `var(--ui__mode-${modeIndex}__text)`
      lines.push(`${name} { color: ${value}; }`)
      const backgroundName = `.ui__mode-${modeIndex}__background`
      const backgroundValue = `var(--ui__mode-${modeIndex}__background)`
      lines.push(`${backgroundName} { background-color: ${backgroundValue}; }`)
      this.getActiveColors().forEach((colorName, colorIndex) => {
        const l = this.getColorValueL(modeIndex, colorIndex)
        const c = this.getColorValueC(modeIndex, colorIndex)
        const h = this.getColorValueH(modeIndex, colorIndex)
        let textName = `.ui__mode-${modeIndex}__color-${colorIndex}-text`
        let textValue = `var(--ui__mode-${modeIndex}__color-${colorIndex})`
        lines.push(`${textName} { color: ${textValue} ; }`)
        textName = `.ui__mode-${modeIndex}__color-${colorIndex}-background`
        textValue = `var(--ui__mode-${modeIndex}__color-${colorIndex})`
        lines.push(`${textName} { background-color: ${textValue} ;} `)
        p.fadedNames.forEach((fadedName, fadedIndex) => {
          let fadedClassName = `.ui__mode-${modeIndex}__color-${colorIndex}-${fadedName}-text`
          let fadedValue = `var(--ui__mode-${modeIndex}__color-${colorIndex}-${fadedName})`
          lines.push(`${fadedClassName} { color: ${fadedValue};}`)
          fadedClassName = `.ui__mode-${modeIndex}__color-${colorIndex}-${fadedName}-text`
          fadedValue = `var(--ui__mode-${modeIndex}__color-${colorIndex}-${fadedName})`
          lines.push(`${fadedClassName} { background-color: ${fadedValue};}`)
        })
      })
    })
    const modeIndex = p.activeMode
    const backgroundName = `.ui__${p.backgroundColorName}`
    const backgroundValue = `var(--ui__${p.backgroundColorName})`
    lines.push(`${backgroundName}-text { color: ${backgroundValue}; }`)
    lines.push(
      `${backgroundName}-background { background-color: ${backgroundValue}; }`
    )
    this.getActiveColors().forEach((colorName, colorIndex) => {
      let textName = `.ui__${colorName}`
      let textValue = `var(--ui__${colorName})`
      lines.push(`${textName}-text { color: ${textValue}; }`)
      lines.push(`${textName}-background { background-color: ${textValue}; }`)
      p.fadedNames.forEach((fadedName, fadedIndex) => {
        const textName = `.ui__${colorName}-${fadedName}`
        const textValue = `var(--ui__${colorName}-${fadedName})`
        lines.push(`${textName}-text { color: ${textValue}; }`)
        lines.push(`${textName}-background { background-color: ${textValue}; }`)
      })
    })
    const out = lines.sort().join('\n')
    this.uiClassesStyleSheet.innerHTML = out
  }

  // REMINDER: This is the internal one that
  // matches the active mode. The one that's
  // exported is the responsibility of
  // another function that lets you pick
  // the primary mode.
  updateUiVarsStyleSheet() {
    if (this.uiColorVarsStyleSheet === undefined) {
      this.uiColorVarsStyleSheet = dc('style')
      ad('name', 'UI Vars', this.uiColorVarsStyleSheet)
      document.head.appendChild(this.uiColorVarsStyleSheet)
    }
    const lines = []
    // Background
    lines.push(
      `--${p.backgroundColorName}: var(--${this.getActiveModeScrubbedName()}__${
        p.backgroundColorName
      });`
    )
    // UI Color
    if (this.getBackgroundValueL(p.activeMode) > 40) {
      lines.push(`--ui__picker: oklch(0% 0 0);`)
      lines.push(`--ui__picker-faded: oklch(0% 0 0 / .7);`)
      lines.push(`--ui__picker-faded2: oklch(0% 0 0 / .7);`)
    } else {
      lines.push(`--ui__picker: oklch(100% 0 0);`)
      lines.push(`--ui__picker-faded: oklch(100% 0 0 / .4);`)
      lines.push(`--ui__picker-faded2: oklch(100% 0 0 / .4);`)
    }
    // color-box-set-button-underlines
    this.getColorHueValues(p.activeMode, p.activeColor).forEach(
      (hueData, hueIndex) => {
        this.getLightnessValues(p.activeMode, p.activeColor).forEach(
          (lightnessData, lightnessIndex) => {
            if (
              this.getActiveColorIndexH() === hueIndex &&
              this.getActiveColorIndexL() === lightnessIndex
            ) {
              lines.push(
                makeVar(
                  `--ui__lightness-${lightnessIndex}__hue-${hueIndex}__decoration`,
                  `underline`
                )
              )
            }
          }
        )
      }
    )

    // color mode selector buttons
    p.modes.forEach((modeData, modeIndex) => {
      if (modeIndex === p.activeMode) {
        lines.push(
          makeVar(
            `  --mode-${modeIndex}-selector-button-color`,
            `var(--content)`
          )
        )
        lines.push(
          makeVar(
            `  --mode-${modeIndex}-selector-button-background-color`,
            `var(--white)`
          )
        )
      } else {
        lines.push(
          makeVar(`  --mode-${modeIndex}-selector-button-color`, `var(--black)`)
        )
        lines.push(
          makeVar(
            `  --mode-${modeIndex}-selector-button-background-color`,
            `var(--white-faded)`
          )
        )
      }
    })
    p.modes.forEach((modeData, modeIndex) => {
      const modeName = scrubStyle(modeData.name)
      const backgroundL = this.getBackgroundValueL(modeIndex)
      const backgroundC = this.getBackgroundValueC(modeIndex)
      const backgroundH = this.getBackgroundValueH(modeIndex)
      let backgroundName = `--ui__${modeName}__${p.backgroundColorName}`
      let backgroundValue = `oklch(${backgroundL}% ${backgroundC} ${backgroundH})`
      lines.push(`${backgroundName}: ${backgroundValue};`)
      backgroundName = `--ui__mode-${modeIndex}__background`
      backgroundValue = `oklch(${backgroundL}% ${backgroundC} ${backgroundH})`
      lines.push(`${backgroundName}: ${backgroundValue};`)
      this.getActiveColors().forEach((colorName, colorIndex) => {
        const l = this.getColorValueL(modeIndex, colorIndex)
        const c = this.getColorValueC(modeIndex, colorIndex)
        const h = this.getColorValueH(modeIndex, colorIndex)
        let textName = `--ui__${modeName}__${colorName}`
        let textValue = `oklch(${l}% ${c} ${h})`
        lines.push(`${textName}: ${textValue};`)
        textName = `--ui__mode-${modeIndex}__color-${colorIndex}`
        textValue = `oklch(${l}% ${c} ${h})`
        lines.push(`${textName}: ${textValue};`)
        p.fadedNames.forEach((fadedName, fadedIndex) => {
          const fade = 0.5
          let fadedClassName = `--ui__${modeName}__${colorName}-${fadedName}`
          let fadedValue = `oklch(${l}% ${c} ${h}) / ${fade})`
          lines.push(`${fadedClassName}: ${fadedValue};`)
          fadedClassName = `--ui__mode-${modeIndex}__color-${colorIndex}-${fadedName}`
          fadedValue = `oklch(${l}% ${c} ${h}) / ${fade})`
          lines.push(`${fadedClassName}: ${fadedValue};`)
        })
      })
    })
    const modeIndex = p.activeMode
    const backgroundL = this.getBackgroundValueL(modeIndex)
    const backgroundC = this.getBackgroundValueC(modeIndex)
    const backgroundH = this.getBackgroundValueH(modeIndex)
    const backgroundName = `--ui__${p.backgroundColorName}`
    const backgroundValue = `oklch(${backgroundL}% ${backgroundC} ${backgroundH})`
    lines.push(`${backgroundName}: ${backgroundValue};`)
    this.getActiveColors().forEach((colorName, colorIndex) => {
      const l = this.getColorValueL(modeIndex, colorIndex)
      const c = this.getColorValueC(modeIndex, colorIndex)
      const h = this.getColorValueH(modeIndex, colorIndex)
      const textName = `--ui__${colorName}`
      const textValue = `oklch(${l}% ${c} ${h})`
      lines.push(`${textName}: ${textValue};`)
      p.fadedNames.forEach((fadedName, fadedIndex) => {
        const fade = 0.5
        const fadedClassName = `--ui__${colorName}-${fadedName}`
        const fadedValue = `oklch(${l}% ${c} ${h}) / ${fade})`
        lines.push(`${fadedClassName}: ${fadedValue};`)
      })
    })
    this.getActiveColors().forEach((colorName, colorIndex) => {
      const value = `${this.getActiveModeScrubbedName()}__${colorName}`
      lines.push(`--${colorName}: var(--${value});`)
      p.fadedNames.forEach((fadedName) => {
        const name = `${colorName}-${fadedName}`
        const fadedValue = `${this.getActiveModeScrubbedName()}__${name}`
        lines.push(`--${name}: var(--${fadedValue});`)
      })
    })
    //
    this.getColorHueValues(p.activeMode, p.activeColor).forEach(
      (hueValue, hueIndex) => {
        this.getLightnessValues(p.activeMode, p.activeColor).forEach(
          (lightnessValue, lightnessIndex) => {
            const cValue = this.getColorValueC(p.activeMode, p.activeColor)
            const name = `--ui__lightness-${lightnessIndex}__hue-${hueIndex}`
            const value = `oklch(${lightnessValue}% ${cValue} ${hueValue})`
            lines.push(`${name}: ${value};`)
          }
        )
      }
    )
    const out = `:root { ${lines.join('\n')} }`
    this.uiColorVarsStyleSheet.innerHTML = out
  }

  updateUiView(event) {
    if (event.target.dataset) {
      const kind = event.target.dataset.kind
      if (event.type === 'click') {
        if (kind === 'mode-button') {
          this.updateMode(event.target)
        } else if (kind === 'color-box-set-button') {
          this.updateLightnessHue(event.target)
        } else if (kind === 'color-selector-button') {
          this.updateActiveColor(event.target)
        } else if (kind === 'top-nav-button') {
          this.switchTopLevelTabs()
        } else if (kind === 'background-box-isolate-checkbox') {
          this.toggleIsolateBackground(event.target)
        } else if (kind === 'color-isolate-checkbox') {
          this.toggleIsolateColor(event.target)
        }
      } else if (event.type === 'change') {
        if (kind === 'background-box-slider') {
          this.updateBackgroundColors(event.target)
        }
      } else if (event.type === 'input') {
        if (kind === 'background-box-slider') {
          this.updateBackgroundColors(event.target)
        } else if (kind === 'color-chroma-slider') {
          this.updateColorChroma(event.target)
        }
      }
    }
  }
}

class TabGroup extends HTMLElement {
  get tabs() {
    return [...this.querySelectorAll(':scope > div > [role=tab]')]
  }

  get panels() {
    return [...this.querySelectorAll(':scope > [role=tabpanel]')]
  }

  get selected() {
    return this.querySelector(':scope > div > [role=tab][aria-selected=true]')
  }

  set selected(element) {
    this.selected?.setAttribute('aria-selected', 'false')
    element?.setAttribute('aria-selected', 'true')
    element?.focus()
    this.updateSelection()
  }

  connectedCallback() {
    this.generateIds()
    this.updateSelection()
    this.setupEvents()
  }

  generateIds() {
    const prefix = Math.floor(Date.now()).toString(36)
    this.tabs.forEach((tab, index) => {
      const panel = this.panels[index]
      tab.id ||= `${prefix}-tab-${index}`
      panel.id ||= `${prefix}-panel-${index}`
      tab.setAttribute('aria-controls', panel.id)
      panel.setAttribute('aria-labelledby', tab.id)
    })
  }

  updateSelection() {
    this.tabs.forEach((tab, index) => {
      const panel = this.panels[index]
      const isSelected = tab.getAttribute('aria-selected') === 'true'
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false')
      tab.setAttribute('tabindex', isSelected ? '0' : '-1')
      panel.setAttribute('tabindex', isSelected ? '0' : '-1')
      panel.hidden = !isSelected
    })
  }

  setupEvents() {
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', () => (this.selected = tab))
      tab.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          this.selected = tab.previousElementSibling ?? this.tabs.at(-1)
        } else if (e.key === 'ArrowRight') {
          this.selected = tab.nextElementSibling ?? this.tabs.at(0)
        }
      })
    })
  }
}

customElements.define('tab-group', TabGroup)
customElements.define('color-picker', Picker)
