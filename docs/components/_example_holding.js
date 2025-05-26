// addExampleForBorderRadius() {
//   dbg("addExampleForBorderRadius");
//   const wrapper = el("border-radius-examples-wrapper");
//   this.getSizes().forEach((size) => {
//     const example = dc("div");
//     const token = `${size}-radius`;
//     ac(`match-text`, example);
//     ac(`reverse-background`, example);
//     ac(`xlarge-full-padding`, example);
//     ac(`large-inline-margin`, example);
//     ac(token, example);
//     html(`.${token}`, example);
//     a(example, wrapper);
//   });
// }
//

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

// addExampleForFontSize() {
//   const wrapper = el("font-size-examples-wrapper");
//   this.getSizes().forEach((size) => {
//     const token = `${size}-font`;
//     const example = dc("div");
//     ac(`reverse-background`, example);
//     ac(`match-text`, example);
//     ac(`large-inline-margin`, example);
//     ac(`default-inline-padding`, example);
//     ac(token, example);
//     html(`.${token}`, example);
//     a(example, wrapper);
//   });
// }

// addExampleForSpacingAlignment() {
//   const wrapper = el("alignment-examples-wrapper");
//   this.getAlignments().forEach((alignment) => {
//     const example = dc("div");
//     ac(`large-inline-margin`, example);
//     ac(`reverse-background`, example);
//     ac(`match-text`, example);
//     ac(`default-full-padding`, example);
//     const token = `align-${alignment}`;
//     html(
//       `this is an example of text that will be positioned based on how they line up via .${token}`,
//       example,
//     );
//     ac(token, example);
//     a(example, wrapper);
//   });
// }

// addExampleForSpacingFlow() {
//   const wrapper = el("flow-examples-wrapper");
//   this.getSizes().forEach((size) => {
//     const example = dc("div");
//     ac(`match-text`, example);
//     ac(`reverse-background`, example);
//     ac(`large-full-margin`, example);
//     const token = `${size}-flow`;
//     ac(token, example);
//     const name = dc(`div`);
//     html(`.${token}`, name);
//     a(name, example);
//     for (let p = 0; p < 4; p++) {
//       const p = dc("p");
//       html("item", p);
//       a(p, example);
//     }
//     a(example, wrapper);
//   });
// }

// addExampleForSpacingMargin() {
//   const wrapper = el("margin-examples-wrapper");
//   this.getSizes().forEach((size) => {
//     this.getDirections().forEach((dir) => {
//       const token = `${size}-${dir[0]}-margin`;
//       const example = dc("div");
//       ac("reverse-faded-background", example);
//       ac("large-inline-margin", example);
//       const name = dc("div");
//       ac(`match-text`, name);
//       ac(`small-full-padding`, name);
//       html(`.${token}`, name);
//       a(name, example);
//       const line1 = dc("div");
//       ac("match-text", line1);
//       ac("reverse-background", line1);
//       html("&nbsp;", line1);
//       a(line1, example);
//       const line2 = dc("div");
//       ac("match-background", line2);
//       ac("reverse-text", line2);
//       ac(token, line2);
//       html("&nbsp;", line2);
//       a(line2, example);
//       const line3 = dc("div");
//       ac("match-text", line3);
//       ac("reverse-background", line3);
//       html("&nbsp;", line3);
//       a(line3, example);
//       a(example, wrapper);
//     });
//   });
// }

// addExampleForSpacingPadding() {
//   const wrapper = el("paddExampleForing--wrapper");
//   this.getSizes().forEach((size) => {
//     this.getDirections().forEach((dir) => {
//       const token = `${size}-${dir[0]}-padding`;
//       const example = dc("div");
//       ac("reverse-background", example);
//       ac("large-inline-margin", example);
//       ac(token, example);
//       const inside = dc("div");
//       ac("match-background", inside);
//       html(`.${token}`, inside);
//       a(inside, example);
//       a(example, wrapper);
//     });
//   });
// }

// addExampleForSpacingWidth() {
//   const wrapper = el("width-examples-wrapper");
//   this.getSizesWithFull().forEach((size) => {
//     const token = `${size}-width`;
//     const example = dc("div");
//     const name = dc("div");
//     html(`.${token}`, name);
//     a(name, example);
//     ac("reverse-background", example);
//     ac("match-text", example);
//     ac("large-inline-margin", example);
//     const item = dc("div");
//     ac("match-background", item);
//     ac(token, item);
//     html(`&nbsp;`, item);
//     a(item, example);
//     a(example, wrapper);
//   });
// }

// addExampleForSpacingWrapper() {
//   const wrapper = el("wrapper-examples-wrapper");
//   this.getSizesWithFull().forEach((size) => {
//     const token = `${size}-wrapper`;
//     const example = dc("div");
//     const name = dc("div");
//     html(`.${token}`, name);
//     a(name, example);
//     ac("reverse-background", example);
//     ac("match-text", example);
//     ac("large-inline-margin", example);
//     const item = dc("div");
//     ac("match-background", item);
//     ac(token, item);
//     html(`&nbsp;`, item);
//     a(item, example);
//     a(example, wrapper);
//   });
// }
