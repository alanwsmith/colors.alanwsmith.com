let debug = true;

function a(child, parent) {
  if (typeof parent === "string") {
    const el = document.querySelector(`.${parent}`);
    el.appendChild(child);
  } else {
    parent.appendChild(child);
  }
}

function ac(classOrClasses, obj) {
  if (typeof classOrClasses === "array") {
    obj.classList.add(...classOrClasses);
  } else {
    obj.classList.add(classOrClasses);
  }
}

function addDefaultStyles() {
  const style = document.createElement("style");
  style.innerHTML = `
    sticky-sidebar {
        top: 0;
        position: sticky;
        max-height: 100vh;
        display: grid;
        overflow: hidden;
    }
  `;
  document.head.appendChild(style);
}

function dbg(content) {
  if (debug !== undefined && debug === true) {
    console.log(content);
  }
}

function dc(kind) {
  return document.createElement(kind);
}

function html(content, parent) {
  if (typeof parent === "string") {
    const el = document.querySelector(parent);
    el.innerHTML = content;
  } else {
    parent.innerHTML = content;
  }
}

function f(content) {
  console.log(content);
}

addDefaultStyles();

class StickySidebar extends HTMLElement {
  #content = null;

  #downArrow = null;
  #downRow = null;
  #upArrow = null;
  #upRow = null;

  // TODO: Deprecate rules
  #downRule = null;
  #upRule = null;

  // addDownArrow() {
  //   this.content().insertAdjacentElement("afterEnd", this.downArrow());
  // }

  addDownRow() {
    this.content().insertAdjacentElement("afterEnd", this.downRow());
  }

  addListeners() {
    this.content().addEventListener("scroll", () => {
      this.updateArrows();
    });
  }

  addStyles() {
    const style = document.createElement("style");
    style.innerHTML = `
      .${this.contentClass()} {
        overscroll-behavior-y: contain;
        overflow-y: scroll;
      }
      .${this.downArrowClass()} {
        color: var(${this.downArrowVar()});
        position: relative;
        font-size: 0.7em;
        line-height: 1em;
        text-align: center;
        color: rgb(255 255 255 / 0.4);
      }
      .${this.downRowClass()} {
        display: grid;
        grid-template-columns: 1fr 2ch 1fr;
      }
      .${this.cssBaseClass()}-downRowLine {
        border-top: 3px double rgb(255 255 255 / 0.4);
      }
      .${this.headerClass()} {
        position: sticky;
        top: 0;
      }
      .${this.upArrowClass()} {
        position: relative;
        font-size: 0.7em;
        line-height: 1em;
        text-align: center;
        color: rgb(255 255 255 / 0.4);
      }
      .${this.upRowClass()} {
        display: grid;
        grid-template-columns: 1fr 2ch 1fr;
      }
      .${this.cssBaseClass()}-upRowLine {
        border-bottom: 3px double rgb(255 255 255 / 0.4);
      }
    `;
    document.head.appendChild(style);
  }

  addUpArrow() {
    this.content().insertAdjacentElement("beforeBegin", this.upArrow());
  }

  addUpRow() {
    this.content().insertAdjacentElement("beforeBegin", this.upRow());
  }

  // TODO: Deprecate
  addUpRule() {
    this.content().insertAdjacentElement("beforeBegin", this.upRule());
  }

  constructor() {
    super();
  }

  connectedCallback() {
    f("connected");
    this.uuid = self.crypto.randomUUID();
    this.addStyles();
    // this.makeHeaderSticky();
    this.makeContentScroll();
    // this.addDownRow();
    //    this.addUpRow();
    //  this.updateArrows();
    // this.addListeners();
  }

  contentClass() {
    return `${this.cssBaseClass()}-content`;
  }

  content() {
    if (this.#content === null) {
      this.#content = this.children[0];
    }
    return this.#content;
  }

  cssBaseClass() {
    return `sticky-sidebar-${this.uuit}`;
  }

  downArrow() {
    if (this.#downArrow === null) {
      this.#downArrow = dc("div");
      html("v", this.#downArrow);
      ac(this.downArrowClass(), this.#downArrow);
    }
    return this.#downArrow;
  }

  downArrowClass() {
    return `${this.cssBaseClass()}-downArrow`;
  }

  downArrowVar() {
    return `--${this.downArrowClass()}`;
  }

  downRow() {
    if (this.#downRow === null) {
      this.#downRow = dc("div");
      const leftDiv = dc("div");
      ac(`${this.cssBaseClass()}-downRowLine`, leftDiv);
      const rightDiv = dc("div");
      ac(`${this.cssBaseClass()}-downRowLine`, rightDiv);
      this.#downRow.append(leftDiv, this.downArrow(), rightDiv);
      ac(this.downRowClass(), this.#downRow);
    }
    return this.#downRow;
  }

  downRowClass() {
    return `${this.cssBaseClass()}-downRow`;
  }

  footer() {
    return this.children[2];
  }

  headerClass() {
    return `${this.cssBaseClass()}-header`;
  }

  header() {
    return this.children[0];
  }

  makeContentScroll() {
    ac(this.contentClass(), this.content());
  }

  makeHeaderSticky() {
    ac(this.headerClass(), this.header());
  }

  upArrow() {
    if (this.#upArrow === null) {
      this.#upArrow = dc("div");
      html("^", this.#upArrow);
      // const hr = dc("hr");
      //a(hr, this.#upArrow);
      //html("^", this.#upArrow);
      ac(this.upArrowClass(), this.#upArrow);
    }
    return this.#upArrow;
  }

  upArrowClass() {
    return `${this.cssBaseClass()}-upArrow`;
  }

  //upRule() {
  //  if (this.#upRule === null) {
  //    this.#upRule = dc("div");
  //    //ac(this.upRuleClass(), this.#upRule);
  //  }
  //  return this.#upRule;
  //}

  // upRuleClass() {
  //   return `${this.cssBaseClass()}-upRule`;
  // }

  upArrowVar() {
    return `--${this.upArrowClass()}`;
  }

  upRow() {
    if (this.#upRow === null) {
      this.#upRow = dc("div");
      const leftDiv = dc("div");
      ac(`${this.cssBaseClass()}-upRowLine`, leftDiv);
      const rightDiv = dc("div");
      ac(`${this.cssBaseClass()}-upRowLine`, rightDiv);
      this.#upRow.append(leftDiv, this.upArrow(), rightDiv);
      ac(this.upRowClass(), this.#upRow);
    }
    return this.#upRow;
  }

  upRowClass() {
    return `${this.cssBaseClass()}-upRow`;
  }

  updateArrows() {
    if (this.content().scrollTop === 0) {
      html("◉", this.upArrow());
    } else {
      html("▲", this.upArrow());
    }
    if (
      Math.abs(
        this.content().scrollHeight - this.content().clientHeight -
          this.content().scrollTop,
      ) <= 1
    ) {
      html("◉", this.downArrow());
    } else {
      html("▼", this.downArrow());
    }
  }
}

customElements.define("sticky-sidebar", StickySidebar);
