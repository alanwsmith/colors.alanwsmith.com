// updateExportPage() {
//   // Variables
//   el("color-mode-vars").innerHTML = this.queryColorModeVars().join("\n");
//   el("color-active-vars").innerHTML = this.queryColorActiveVars().join("\n");
//   el("color-border-style-vars").innerHTML = this.queryColorBorderStyleVars()
//     .join("\n");
//   el("bw-normal-mode-vars").innerHTML = this
//     .queryBlackAndWhiteBaseVars().join("\n");
//   el("bw-normal-active-vars").innerHTML = this
//     .queryBlackAndWhiteModeVars(0).join("\n");
//   el("bw-normal-border-style-vars").innerHTML = this
//     .queryBlackAndWhiteBorderVars().join("\n");
//   el("bw-reverse-mode-vars").innerHTML = this
//     .queryReverseBaseVars().join("\n");
//   el("bw-reverse-active-vars").innerHTML = this
//     .queryReverseModeVars(0).join("\n");
//   el("bw-reverse-border-style-vars").innerHTML = this
//     .queryReverseBorderVars().join("\n");
//   el("border-radii-vars").innerHTML = this.queryBorderRadiiVars().join("\n");
//   el("font-size-vars").innerHTML = this.queryFontSizeVars().join("\n");
//   el("margin-vars").innerHTML = this.queryMarginVars().join("\n");
//   el("padding-vars").innerHTML = this.queryPaddingVars().join("\n");
//   el("width-vars").innerHTML = this.queryWidthVars().join("\n");
//   el("flow-vars").innerHTML = this.queryFlowVars().join("\n");
//   el("text-alignment-vars").innerHTML = this.queryTextAlignmentVars().join(
//     "\n",
//   );
//   // Classes
//   el("reset-styles").innerHTML = el("reset-styles").innerHTML;
//   el("color-text-styles").innerHTML = this.generateColorTextClasses().join(
//     "\n",
//   );
//   el("color-background-styles").innerHTML = this
//     .generateColorBackgroundClasses().join("\n");
//   el("color-border-styles").innerHTML = this.generateColorBorderClasses()
//     .join(
//       "\n",
//     );
//   el("bw-normal-text-styles").innerHTML = this
//     .generateBlackAndWhiteTextClasses().join("\n");
//   el("bw-normal-background-styles").innerHTML = this
//     .generateBlackAndWhiteBackgroundClasses().join(
//       "\n",
//     );
//   el("bw-normal-border-styles").innerHTML = this
//     .generateBlackAndWhiteBorderClasses().join("\n");
//   el("bw-reverse-text-styles").innerHTML = this
//     .generatereverseTextClasses().join("\n");
//   el("bw-reverse-background-styles").innerHTML = this
//     .generatereverseBackgroundClasses().join(
//       "\n",
//     );
//   el("bw-reverse-border-styles").innerHTML = this
//     .generatereverseBorderClasses().join("\n");
//   el("border-radii-styles").innerHTML = this.queryBorderRadiiVars().join(
//     "\n",
//   );
//   el("flow-styles").innerHTML = this.generateFlowClasses().join("\n");
//   el("font-size-styles").innerHTML = this.generateFontSizeClasses().join(
//     "\n",
//   );
//   el("margin-styles").innerHTML = this.generateMarginClasses().join("\n");
//   el("padding-styles").innerHTML = this.generatePaddingClasses().join("\n");
//   el("text-alignment-styles").innerHTML = this.generateTextAlignmentClasses()
//     .join("\n");
//   el("width-styles").innerHTML = this.generateWidthClasses().join("\n");
//   el("wrapper-styles").innerHTML = this.generateWrapperClasses().join("\n");
//   // TODO: Deprecate this stuff below.
//   // it was the initial stubs
//   const outputEl = elV2(".export-content");
//   const sheets = els("style[data-name]");
//   let payloads = [];
//   sheets.forEach((sheet) => {
//     payloads.push({
//       content: sheet.innerHTML,
//       name: sheet.dataset.name,
//     });
//   });
//   outputEl.innerHTML = payloads
//     .map((item) => {
//       let open = "";
//       if (item.name === "Variables" || item.name === "Utility Classes") {
//         open = " open";
//       }
//       return `
// <details${open}>
// <summary>${item.name}</summary>
// <pre class="xsmall-font-size">${item.content}</pre>
// </details>
// `;
//     })
//     .join("\n\n");
// }

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
