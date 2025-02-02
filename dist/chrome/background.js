var Wa=Object.defineProperty;var Va=(e,t)=>{for(var r in t)Wa(e,r,{get:t[r],enumerable:!0})};var b={BUILD_TIME:"2023-02-07T00:31:44.718Z",VERSION:"0.2.50",PROD:"1",DEEPL_PROXY_ENDPOINT:"https://deepl.immersivetranslate.com/v2/translate",IMMERSIVE_TRANSLATE_INJECTED_CSS:`.immersive-translate-target-translation-pre-whitespace {
  white-space: pre-wrap !important;
}

.immersive-translate-pdf-target-container {
  position: absolute;
  background-color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    sans-serif;
  top: 0;
  width: 600px;
  height: 100%;
  z-index: 2;
  line-height: 1.3;
  font-size: 16px;
}
.immersive-translate-pdf-target-container
  span.immersive-translate-target-wrapper {
  color: rgb(0, 0, 0);
  white-space: normal;
  position: absolute;
}

.immersive-translate-pdf-target-container
  span.immersive-translate-target-wrapper
  span {
  color: inherit;
  white-space: inherit;
  position: unset;
}

.immersive-translate-target-translation-block-wrapper {
  margin: 8px 0 !important;
  display: block;
}

.immersive-translate-target-translation-pdf-block-wrapper {
  margin: 0 !important;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper {
}
.immersive-translate-target-translation-theme-underline-inner {
  border-bottom: 1px solid #72ece9 !important;
}

.immersive-translate-target-translation-theme-nativeUnderline-inner {
  text-decoration: underline #72ece9 !important;
}

.immersive-translate-target-translation-block-wrapper-theme-dashedBorder {
  border: 1px dashed rgb(148 163 184) !important;
  padding: 6px;
  margin-top: 2px;
  display: block;
}

.immersive-translate-target-translation-inline-wrapper-theme-dashedBorder {
  border: 1px dashed rgb(148 163 184) !important;
  padding: 2px;
}

.immersive-translate-target-translation-theme-nativeDashed-inner {
  text-decoration: dashed underline #72ece9 !important;
}

.immersive-translate-target-translation-theme-thinDashed-inner {
  border-bottom: 1px dashed #ff374f !important;
}

.immersive-translate-target-translation-theme-dotted-inner {
  background-repeat: repeat-x;
  background-image: linear-gradient(
    to right,
    currentColor 10%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 5px 1px;
  background-repeat: repeat-x;
  padding-bottom: 3px;
}
.immersive-translate-target-translation-theme-nativeDotted-inner {
  text-decoration: dotted underline #72ece9 !important;
}

.immersive-translate-target-translation-theme-wavy-inner {
  text-decoration: wavy underline #59c1bd !important;
}

.immersive-translate-target-translation-theme-dashed-inner {
  background-repeat: repeat-x !important;
  background: linear-gradient(
      to right,
      #59c1bd 0%,
      #59c1bd 50%,
      transparent 50%,
      transparent 100%
    )
    repeat-x left bottom;
  background-size: 8px 2px;
  padding-bottom: 2px;
}

.immersive-translate-target-translation-block-wrapper-theme-dividingLine::before {
  content: "";
  display: block;
  max-width: 80px;
  width: 10%;
  border-top: 1px dashed currentColor;
  padding-top: 0.5em;
}

.immersive-translate-target-translation-theme-highlight-inner {
  background: rgb(255, 255, 0);
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}
.immersive-translate-target-translation-block-wrapper-theme-marker {
  line-height: 1.5em;
}

.immersive-translate-target-translation-theme-marker-inner {
  /* TODO: add more texture */
  background: linear-gradient(
    to right,
    rgba(255, 225, 0, 0.1),
    rgba(251, 218, 65, 0.9) 3%,
    rgba(252, 210, 23, 0.9) 35%,
    rgba(251, 218, 65, 0.9) 70%,
    rgba(251, 218, 65, 0.8) 95%,
    rgba(255, 225, 0, 0.3)
  );
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

.immersive-translate-target-translation-theme-weakening {
  opacity: 0.4 !important;
}

.immersive-translate-target-translation-theme-italic {
  font-style: italic !important;
}

.immersive-translate-target-translation-theme-bold {
  font-weight: bold !important;
}

.immersive-translate-target-translation-block-wrapper-theme-paper {
  margin: 8px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 16px 32px;
  display: block;
}

.immersive-translate-target-translation-block-wrapper-theme-blockquote {
  border-left: 4px solid #cc3355 !important;
  padding-left: 12px !important;
  margin-top: 4px;
  margin-bottom: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  display: block;
}

.immersive-translate-target-translation-theme-mask-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

[data-immersive-translate-root-translation-theme="none"]
  .immersive-translate-target-translation-theme-mask-inner {
  filter: none !important;
}
[data-immersive-translate-root-translation-theme="mask"]
  .immersive-translate-target-inner {
  filter: blur(5px) !important;
  transition: filter 0.3s ease !important;
  border-radius: 10px;
}

.immersive-translate-target-translation-theme-mask-inner:hover {
  filter: none !important;
}

[data-immersive-translate-root-translation-theme="mask"]
  .immersive-translate-target-inner:hover {
  filter: none !important;
}

/* vertical css , please remain it in the last one. */
.immersive-translate-target-translation-vertical-block-wrapper {
  margin: 0px 8px !important;
}

.immersive-translate-text {
  font-size: 15px !important;
}

.immersive-translate-error {
  color: red;
}
.immersive-translate-clickable-button {
  align-items: normal;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 238);
  border-style: none;
  box-sizing: content-box;
  color: rgb(0, 0, 238);
  cursor: pointer;
  display: inline;
  font: inherit;
  height: auto;
  padding: 0;
  perspective-origin: 0 0;
  text-align: start;
  transform-origin: 0 0;
  width: auto;
  -moz-appearance: none;
  appearance: none;
  -webkit-logical-height: 1em; /* Chrome ignores auto, so we have to use this hack to set the correct height  */
  -webkit-logical-width: auto; /* Chrome ignores auto, but here for completeness */
}

.immersive-translate-loading-spinner {
  vertical-align: middle !important;
  width: 10px !important;
  height: 10px !important;
  display: inline-block !important;
  margin: 0 4px !important;
  border: 2px rgba(0, 0, 0, 0.25) solid !important;
  border-top: 2px rgba(0, 0, 0, 1) solid !important;
  border-radius: 50% !important;
  padding: 0 !important;
  -webkit-animation: immersive-translate-loading-animation 0.6s infinite linear !important;
  animation: immersive-translate-loading-animation 0.6s infinite linear !important;
}

.immersive-translate-loading-text:before {
  content: "...";
}

.immersive-translate-loading-none {
}
/* dark mode for loading */

@media only screen and (prefers-color-scheme: dark) {
  .immersive-translate-loading {
    border: 2px rgba(255, 255, 255, 0.25) solid !important;
    border-top: 2px rgba(255, 255, 255, 1) solid !important;
  }

  .immersive-translate-target-translation-theme-marker-inner {
    background: linear-gradient(
      to right,
      rgba(255, 225, 0, 0.1),
      rgba(102, 99, 78, 0.9) 3%,
      rgba(102, 99, 78, 0.8) 97%,
      rgba(255, 225, 0, 0.3)
    );
  }
}

.immersive-translate-tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dashed #000; /* little indicater to indicate it's hoverable */
}
.immersive-translate-tooltip:before {
  content: attr(data-immersive-translate-tooltip-text); /* here's the magic */
  position: absolute;
  z-index: 100000000000;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px; /* and add a small left margin */

  /* basic styles */
  width: max-content;
  max-width: 250px;
  word-wrap: break-word;
  white-space: pre-line;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;

  display: none; /* hide by default */
}
.immersive-translate-tooltip:hover:before {
  display: block;
}

@-webkit-keyframes immersive-translate-loading-animation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@keyframes immersive-translate-loading-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`,IMMERSIVE_TRANSLATE_PICO_CSS:`@charset "UTF-8";
/*!
 * Pico.css v1.5.6 (https://picocss.com)
 * Copyright 2019-2022 - Licensed under MIT
 */
/**
 * Theme: default
 */
#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 0.25rem;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 1rem;
  --typography-spacing-vertical: 1.5rem;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 0.75rem;
  --form-element-spacing-horizontal: 1rem;
  --nav-element-spacing-vertical: 1rem;
  --nav-element-spacing-horizontal: 0.5rem;
  --nav-link-spacing-vertical: 0.5rem;
  --nav-link-spacing-horizontal: 0.5rem;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(0.25rem);
}
@media (min-width: 576px) {
  #mount {
    --font-size: 17px;
  }
}
@media (min-width: 768px) {
  #mount {
    --font-size: 18px;
  }
}
@media (min-width: 992px) {
  #mount {
    --font-size: 19px;
  }
}
@media (min-width: 1200px) {
  #mount {
    --font-size: 20px;
  }
}

@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3);
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 3.5);
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer,
  section {
    --block-spacing-vertical: calc(var(--spacing) * 4);
  }
}

@media (min-width: 576px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}
@media (min-width: 992px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 1.75);
  }
}
@media (min-width: 1200px) {
  article {
    --block-spacing-horizontal: calc(var(--spacing) * 2);
  }
}

dialog > article {
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
}
@media (min-width: 576px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 2.5);
    --block-spacing-horizontal: calc(var(--spacing) * 1.25);
  }
}
@media (min-width: 768px) {
  dialog > article {
    --block-spacing-vertical: calc(var(--spacing) * 3);
    --block-spacing-horizontal: calc(var(--spacing) * 1.5);
  }
}

a {
  --text-decoration: none;
}
a.secondary,
a.contrast {
  --text-decoration: underline;
}

small {
  --font-size: 0.875em;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  --font-weight: 700;
}

h1 {
  --font-size: 2rem;
  --typography-spacing-vertical: 3rem;
}

h2 {
  --font-size: 1.75rem;
  --typography-spacing-vertical: 2.625rem;
}

h3 {
  --font-size: 1.5rem;
  --typography-spacing-vertical: 2.25rem;
}

h4 {
  --font-size: 1.25rem;
  --typography-spacing-vertical: 1.874rem;
}

h5 {
  --font-size: 1.125rem;
  --typography-spacing-vertical: 1.6875rem;
}

[type="checkbox"],
[type="radio"] {
  --border-width: 2px;
}

[type="checkbox"][role="switch"] {
  --border-width: 3px;
}

thead th,
thead td,
tfoot th,
tfoot td {
  --border-width: 3px;
}

:not(thead, tfoot) > * > td {
  --font-size: 0.875em;
}

pre,
code,
kbd,
samp {
  --font-family: "Menlo", "Consolas", "Roboto Mono", "Ubuntu Monospace",
    "Noto Mono", "Oxygen Mono", "Liberation Mono", monospace,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

kbd {
  --font-weight: bolder;
}

[data-theme="light"],
#mount:not([data-theme="dark"]) {
  --background-color: #fff;
  --color: hsl(205deg, 20%, 32%);
  --h1-color: hsl(205deg, 30%, 15%);
  --h2-color: #24333e;
  --h3-color: hsl(205deg, 25%, 23%);
  --h4-color: #374956;
  --h5-color: hsl(205deg, 20%, 32%);
  --h6-color: #4d606d;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: hsl(205deg, 20%, 94%);
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 90%, 32%);
  --primary-focus: rgba(16, 149, 193, 0.125);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 20%, 32%);
  --secondary-focus: rgba(89, 107, 120, 0.125);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 30%, 15%);
  --contrast-hover: #000;
  --contrast-focus: rgba(89, 107, 120, 0.125);
  --contrast-inverse: #fff;
  --mark-background-color: #fff2ca;
  --mark-color: #543a26;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: transparent;
  --form-element-border-color: hsl(205deg, 14%, 68%);
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: transparent;
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 18%, 86%);
  --form-element-disabled-border-color: hsl(205deg, 14%, 68%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #c62828;
  --form-element-invalid-active-border-color: #d32f2f;
  --form-element-invalid-focus-color: rgba(211, 47, 47, 0.125);
  --form-element-valid-border-color: #388e3c;
  --form-element-valid-active-border-color: #43a047;
  --form-element-valid-focus-color: rgba(67, 160, 71, 0.125);
  --switch-background-color: hsl(205deg, 16%, 77%);
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: hsl(205deg, 18%, 86%);
  --range-active-border-color: hsl(205deg, 16%, 77%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: #f6f8f9;
  --code-background-color: hsl(205deg, 20%, 94%);
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 40%, 50%);
  --code-property-color: hsl(185deg, 40%, 40%);
  --code-value-color: hsl(40deg, 20%, 50%);
  --code-comment-color: hsl(205deg, 14%, 68%);
  --accordion-border-color: var(--muted-border-color);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: var(--background-color);
  --card-border-color: var(--muted-border-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(27, 40, 50, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(27, 40, 50, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(27, 40, 50, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(27, 40, 50, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(27, 40, 50, 0.04302),
    0.5rem 1rem 6rem rgba(27, 40, 50, 0.06),
    0 0 0 0.0625rem rgba(27, 40, 50, 0.015);
  --card-sectionning-background-color: #fbfbfc;
  --dropdown-background-color: #fbfbfc;
  --dropdown-border-color: #e1e6eb;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: hsl(205deg, 20%, 94%);
  --modal-overlay-background-color: rgba(213, 220, 226, 0.7);
  --progress-background-color: hsl(205deg, 18%, 86%);
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(198, 40, 40)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(56, 142, 60)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: light;
}

@media only screen and (prefers-color-scheme: dark) {
  #mount:not([data-theme="light"]) {
    --background-color: #11191f;
    --color: hsl(205deg, 16%, 77%);
    --h1-color: hsl(205deg, 20%, 94%);
    --h2-color: #e1e6eb;
    --h3-color: hsl(205deg, 18%, 86%);
    --h4-color: #c8d1d8;
    --h5-color: hsl(205deg, 16%, 77%);
    --h6-color: #afbbc4;
    --muted-color: hsl(205deg, 10%, 50%);
    --muted-border-color: #1f2d38;
    --primary: hsl(195deg, 85%, 41%);
    --primary-hover: hsl(195deg, 80%, 50%);
    --primary-focus: rgba(16, 149, 193, 0.25);
    --primary-inverse: #fff;
    --secondary: hsl(205deg, 15%, 41%);
    --secondary-hover: hsl(205deg, 10%, 50%);
    --secondary-focus: rgba(115, 130, 140, 0.25);
    --secondary-inverse: #fff;
    --contrast: hsl(205deg, 20%, 94%);
    --contrast-hover: #fff;
    --contrast-focus: rgba(115, 130, 140, 0.25);
    --contrast-inverse: #000;
    --mark-background-color: #d1c284;
    --mark-color: #11191f;
    --ins-color: #388e3c;
    --del-color: #c62828;
    --blockquote-border-color: var(--muted-border-color);
    --blockquote-footer-color: var(--muted-color);
    --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    --form-element-background-color: #11191f;
    --form-element-border-color: #374956;
    --form-element-color: var(--color);
    --form-element-placeholder-color: var(--muted-color);
    --form-element-active-background-color: var(
      --form-element-background-color
    );
    --form-element-active-border-color: var(--primary);
    --form-element-focus-color: var(--primary-focus);
    --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
    --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
    --form-element-disabled-opacity: 0.5;
    --form-element-invalid-border-color: #b71c1c;
    --form-element-invalid-active-border-color: #c62828;
    --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
    --form-element-valid-border-color: #2e7d32;
    --form-element-valid-active-border-color: #388e3c;
    --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
    --switch-background-color: #374956;
    --switch-color: var(--primary-inverse);
    --switch-checked-background-color: var(--primary);
    --range-border-color: #24333e;
    --range-active-border-color: hsl(205deg, 25%, 23%);
    --range-thumb-border-color: var(--background-color);
    --range-thumb-color: var(--secondary);
    --range-thumb-hover-color: var(--secondary-hover);
    --range-thumb-active-color: var(--primary);
    --table-border-color: var(--muted-border-color);
    --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
    --code-background-color: #18232c;
    --code-color: var(--muted-color);
    --code-kbd-background-color: var(--contrast);
    --code-kbd-color: var(--contrast-inverse);
    --code-tag-color: hsl(330deg, 30%, 50%);
    --code-property-color: hsl(185deg, 30%, 50%);
    --code-value-color: hsl(40deg, 10%, 50%);
    --code-comment-color: #4d606d;
    --accordion-border-color: var(--muted-border-color);
    --accordion-active-summary-color: var(--primary);
    --accordion-close-summary-color: var(--color);
    --accordion-open-summary-color: var(--muted-color);
    --card-background-color: #141e26;
    --card-border-color: var(--card-background-color);
    --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
      0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
      0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
      0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
      0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
      0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
    --card-sectionning-background-color: #18232c;
    --dropdown-background-color: hsl(205deg, 30%, 15%);
    --dropdown-border-color: #24333e;
    --dropdown-box-shadow: var(--card-box-shadow);
    --dropdown-color: var(--color);
    --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
    --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
    --progress-background-color: #24333e;
    --progress-color: var(--primary);
    --loading-spinner-opacity: 0.5;
    --tooltip-background-color: var(--contrast);
    --tooltip-color: var(--contrast-inverse);
    --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
    --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
    --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
    --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
    --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
    --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
    --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
    color-scheme: dark;
  }
}
[data-theme="dark"] {
  --background-color: #11191f;
  --color: hsl(205deg, 16%, 77%);
  --h1-color: hsl(205deg, 20%, 94%);
  --h2-color: #e1e6eb;
  --h3-color: hsl(205deg, 18%, 86%);
  --h4-color: #c8d1d8;
  --h5-color: hsl(205deg, 16%, 77%);
  --h6-color: #afbbc4;
  --muted-color: hsl(205deg, 10%, 50%);
  --muted-border-color: #1f2d38;
  --primary: hsl(195deg, 85%, 41%);
  --primary-hover: hsl(195deg, 80%, 50%);
  --primary-focus: rgba(16, 149, 193, 0.25);
  --primary-inverse: #fff;
  --secondary: hsl(205deg, 15%, 41%);
  --secondary-hover: hsl(205deg, 10%, 50%);
  --secondary-focus: rgba(115, 130, 140, 0.25);
  --secondary-inverse: #fff;
  --contrast: hsl(205deg, 20%, 94%);
  --contrast-hover: #fff;
  --contrast-focus: rgba(115, 130, 140, 0.25);
  --contrast-inverse: #000;
  --mark-background-color: #d1c284;
  --mark-color: #11191f;
  --ins-color: #388e3c;
  --del-color: #c62828;
  --blockquote-border-color: var(--muted-border-color);
  --blockquote-footer-color: var(--muted-color);
  --button-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --button-hover-box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  --form-element-background-color: #11191f;
  --form-element-border-color: #374956;
  --form-element-color: var(--color);
  --form-element-placeholder-color: var(--muted-color);
  --form-element-active-background-color: var(--form-element-background-color);
  --form-element-active-border-color: var(--primary);
  --form-element-focus-color: var(--primary-focus);
  --form-element-disabled-background-color: hsl(205deg, 25%, 23%);
  --form-element-disabled-border-color: hsl(205deg, 20%, 32%);
  --form-element-disabled-opacity: 0.5;
  --form-element-invalid-border-color: #b71c1c;
  --form-element-invalid-active-border-color: #c62828;
  --form-element-invalid-focus-color: rgba(198, 40, 40, 0.25);
  --form-element-valid-border-color: #2e7d32;
  --form-element-valid-active-border-color: #388e3c;
  --form-element-valid-focus-color: rgba(56, 142, 60, 0.25);
  --switch-background-color: #374956;
  --switch-color: var(--primary-inverse);
  --switch-checked-background-color: var(--primary);
  --range-border-color: #24333e;
  --range-active-border-color: hsl(205deg, 25%, 23%);
  --range-thumb-border-color: var(--background-color);
  --range-thumb-color: var(--secondary);
  --range-thumb-hover-color: var(--secondary-hover);
  --range-thumb-active-color: var(--primary);
  --table-border-color: var(--muted-border-color);
  --table-row-stripped-background-color: rgba(115, 130, 140, 0.05);
  --code-background-color: #18232c;
  --code-color: var(--muted-color);
  --code-kbd-background-color: var(--contrast);
  --code-kbd-color: var(--contrast-inverse);
  --code-tag-color: hsl(330deg, 30%, 50%);
  --code-property-color: hsl(185deg, 30%, 50%);
  --code-value-color: hsl(40deg, 10%, 50%);
  --code-comment-color: #4d606d;
  --accordion-border-color: var(--muted-border-color);
  --accordion-active-summary-color: var(--primary);
  --accordion-close-summary-color: var(--color);
  --accordion-open-summary-color: var(--muted-color);
  --card-background-color: #141e26;
  --card-border-color: var(--card-background-color);
  --card-box-shadow: 0.0145rem 0.029rem 0.174rem rgba(0, 0, 0, 0.01698),
    0.0335rem 0.067rem 0.402rem rgba(0, 0, 0, 0.024),
    0.0625rem 0.125rem 0.75rem rgba(0, 0, 0, 0.03),
    0.1125rem 0.225rem 1.35rem rgba(0, 0, 0, 0.036),
    0.2085rem 0.417rem 2.502rem rgba(0, 0, 0, 0.04302),
    0.5rem 1rem 6rem rgba(0, 0, 0, 0.06), 0 0 0 0.0625rem rgba(0, 0, 0, 0.015);
  --card-sectionning-background-color: #18232c;
  --dropdown-background-color: hsl(205deg, 30%, 15%);
  --dropdown-border-color: #24333e;
  --dropdown-box-shadow: var(--card-box-shadow);
  --dropdown-color: var(--color);
  --dropdown-hover-background-color: rgba(36, 51, 62, 0.75);
  --modal-overlay-background-color: rgba(36, 51, 62, 0.8);
  --progress-background-color: #24333e;
  --progress-color: var(--primary);
  --loading-spinner-opacity: 0.5;
  --tooltip-background-color: var(--contrast);
  --tooltip-color: var(--contrast-inverse);
  --icon-checkbox: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-chevron-button-inverse: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-close: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(115, 130, 140)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
  --icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
  --icon-invalid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(183, 28, 28)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cline x1='12' y1='8' x2='12' y2='12'%3E%3C/line%3E%3Cline x1='12' y1='16' x2='12.01' y2='16'%3E%3C/line%3E%3C/svg%3E");
  --icon-minus: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(255, 255, 255)' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='5' y1='12' x2='19' y2='12'%3E%3C/line%3E%3C/svg%3E");
  --icon-search: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'%3E%3C/line%3E%3C/svg%3E");
  --icon-time: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(162, 175, 185)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'%3E%3C/circle%3E%3Cpolyline points='12 6 12 12 16 14'%3E%3C/polyline%3E%3C/svg%3E");
  --icon-valid: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(46, 125, 50)' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  color-scheme: dark;
}

progress,
[type="checkbox"],
[type="radio"],
[type="range"] {
  accent-color: var(--primary);
}

/**
 * Document
 * Content-box & Responsive typography
 */
*,
*::before,
*::after {
  box-sizing: border-box;
  background-repeat: no-repeat;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

:where(#mount) {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  background-color: var(--background-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  line-height: var(--line-height);
  font-family: var(--font-family);
  text-rendering: optimizeLegibility;
  overflow-wrap: break-word;
  cursor: default;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
}

/**
 * Sectioning
 * Container and responsive spacings for header, main, footer
 */
main {
  display: block;
}

#mount {
  width: 100%;
  margin: 0;
}
#mount > header,
#mount > main,
#mount > footer {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
}
@media (min-width: 576px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  #mount > header,
  #mount > main,
  #mount > footer {
    max-width: 1130px;
  }
}

/**
* Container
*/
.container,
.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: var(--spacing);
  padding-left: var(--spacing);
}

@media (min-width: 576px) {
  .container {
    max-width: 510px;
    padding-right: 0;
    padding-left: 0;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 700px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 920px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1130px;
  }
}

/**
 * Section
 * Responsive spacings for section
 */
section {
  margin-bottom: var(--block-spacing-vertical);
}

/**
* Grid
* Minimal grid system with auto-layout columns
*/
.grid {
  grid-column-gap: var(--grid-spacing-horizontal);
  grid-row-gap: var(--grid-spacing-vertical);
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
}
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(0%, 1fr));
  }
}
.grid > * {
  min-width: 0;
}

/**
 * Horizontal scroller (<figure>)
 */
figure {
  display: block;
  margin: 0;
  padding: 0;
  overflow-x: auto;
}
figure figcaption {
  padding: calc(var(--spacing) * 0.5) 0;
  color: var(--muted-color);
}

/**
 * Typography
 */
b,
strong {
  font-weight: bolder;
}

sub,
sup {
  position: relative;
  font-size: 0.75em;
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

address,
blockquote,
dl,
figure,
form,
ol,
p,
pre,
table,
ul {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}

a,
[role="link"] {
  --color: var(--primary);
  --background-color: transparent;
  outline: none;
  background-color: var(--background-color);
  color: var(--color);
  -webkit-text-decoration: var(--text-decoration);
  text-decoration: var(--text-decoration);
  transition: background-color var(--transition), color var(--transition),
    box-shadow var(--transition), -webkit-text-decoration var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition);
  transition: background-color var(--transition), color var(--transition),
    text-decoration var(--transition), box-shadow var(--transition),
    -webkit-text-decoration var(--transition);
}
a:is([aria-current], :hover, :active, :focus),
[role="link"]:is([aria-current], :hover, :active, :focus) {
  --color: var(--primary-hover);
  --text-decoration: underline;
}
a:focus,
[role="link"]:focus {
  --background-color: var(--primary-focus);
}
a.secondary,
[role="link"].secondary {
  --color: var(--secondary);
}
a.secondary:is([aria-current], :hover, :active, :focus),
[role="link"].secondary:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}
a.secondary:focus,
[role="link"].secondary:focus {
  --background-color: var(--secondary-focus);
}
a.contrast,
[role="link"].contrast {
  --color: var(--contrast);
}
a.contrast:is([aria-current], :hover, :active, :focus),
[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}
a.contrast:focus,
[role="link"].contrast:focus {
  --background-color: var(--contrast-focus);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: var(--typography-spacing-vertical);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  font-family: var(--font-family);
}

h1 {
  --color: var(--h1-color);
}

h2 {
  --color: var(--h2-color);
}

h3 {
  --color: var(--h3-color);
}

h4 {
  --color: var(--h4-color);
}

h5 {
  --color: var(--h5-color);
}

h6 {
  --color: var(--h6-color);
}

:where(address, blockquote, dl, figure, form, ol, p, pre, table, ul)
  ~ :is(h1, h2, h3, h4, h5, h6) {
  margin-top: var(--typography-spacing-vertical);
}

hgroup,
.headings {
  margin-bottom: var(--typography-spacing-vertical);
}
hgroup > *,
.headings > * {
  margin-bottom: 0;
}
hgroup > *:last-child,
.headings > *:last-child {
  --color: var(--muted-color);
  --font-weight: unset;
  font-size: 1rem;
  font-family: unset;
}

p {
  margin-bottom: var(--typography-spacing-vertical);
}

small {
  font-size: var(--font-size);
}

:where(dl, ol, ul) {
  padding-right: 0;
  padding-left: var(--spacing);
  -webkit-padding-start: var(--spacing);
  padding-inline-start: var(--spacing);
  -webkit-padding-end: 0;
  padding-inline-end: 0;
}
:where(dl, ol, ul) li {
  margin-bottom: calc(var(--typography-spacing-vertical) * 0.25);
}

:where(dl, ol, ul) :is(dl, ol, ul) {
  margin: 0;
  margin-top: calc(var(--typography-spacing-vertical) * 0.25);
}

ul li {
  list-style: square;
}

mark {
  padding: 0.125rem 0.25rem;
  background-color: var(--mark-background-color);
  color: var(--mark-color);
  vertical-align: baseline;
}

blockquote {
  display: block;
  margin: var(--typography-spacing-vertical) 0;
  padding: var(--spacing);
  border-right: none;
  border-left: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-start: 0.25rem solid var(--blockquote-border-color);
  border-inline-start: 0.25rem solid var(--blockquote-border-color);
  -webkit-border-end: none;
  border-inline-end: none;
}
blockquote footer {
  margin-top: calc(var(--typography-spacing-vertical) * 0.5);
  color: var(--blockquote-footer-color);
}

abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}

ins {
  color: var(--ins-color);
  text-decoration: none;
}

del {
  color: var(--del-color);
}

::-moz-selection {
  background-color: var(--primary-focus);
}

::selection {
  background-color: var(--primary-focus);
}

/**
 * Embedded content
 */
:where(audio, canvas, iframe, img, svg, video) {
  vertical-align: middle;
}

audio,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

:where(iframe) {
  border-style: none;
}

img {
  max-width: 100%;
  height: auto;
  border-style: none;
}

:where(svg:not([fill])) {
  fill: currentColor;
}

svg:not(#mount) {
  overflow: hidden;
}

/**
 * Button
 */
button {
  margin: 0;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button {
  display: block;
  width: 100%;
  margin-bottom: var(--spacing);
}

[role="button"] {
  display: inline-block;
  text-decoration: none;
}

button,
input[type="submit"],
input[type="button"],
input[type="reset"],
[role="button"] {
  --background-color: var(--primary);
  --border-color: var(--primary);
  --color: var(--primary-inverse);
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
button:is([aria-current], :hover, :active, :focus),
input[type="submit"]:is([aria-current], :hover, :active, :focus),
input[type="button"]:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus),
[role="button"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--primary-hover);
  --border-color: var(--primary-hover);
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  --color: var(--primary-inverse);
}
button:focus,
input[type="submit"]:focus,
input[type="button"]:focus,
input[type="reset"]:focus,
[role="button"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--primary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary,
input[type="reset"] {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  cursor: pointer;
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"]:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).secondary:focus,
input[type="reset"]:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--secondary-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast {
  --background-color: var(--contrast);
  --border-color: var(--contrast);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:is([aria-current], :hover, :active, :focus) {
  --background-color: var(--contrast-hover);
  --border-color: var(--contrast-hover);
  --color: var(--contrast-inverse);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).contrast:focus {
  --box-shadow: var(--button-hover-box-shadow, 0 0 0 rgba(0, 0, 0, 0)),
    0 0 0 var(--outline-width) var(--contrast-focus);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline,
input[type="reset"].outline {
  --background-color: transparent;
  --color: var(--primary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --background-color: transparent;
  --color: var(--primary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary,
input[type="reset"].outline {
  --color: var(--secondary);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.secondary:is([aria-current], :hover, :active, :focus),
input[type="reset"].outline:is([aria-current], :hover, :active, :focus) {
  --color: var(--secondary-hover);
}

:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast {
  --color: var(--contrast);
}
:is(
    button,
    input[type="submit"],
    input[type="button"],
    [role="button"]
  ).outline.contrast:is([aria-current], :hover, :active, :focus) {
  --color: var(--contrast-hover);
}

:where(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  )[disabled],
:where(fieldset[disabled])
  :is(
    button,
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="button"]
  ),
a[role="button"]:not([href]) {
  opacity: 0.5;
  pointer-events: none;
}

/**
 * Form elements
 */
input,
optgroup,
select,
textarea {
  margin: 0;
  font-size: 1rem;
  line-height: var(--line-height);
  font-family: inherit;
  letter-spacing: inherit;
}

input {
  overflow: visible;
}

select {
  text-transform: none;
}

legend {
  max-width: 100%;
  padding: 0;
  color: inherit;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  padding: 0;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

:-moz-focusring {
  outline: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}

::-ms-expand {
  display: none;
}

[type="file"],
[type="range"] {
  padding: 0;
  border-width: 0;
}

input:not([type="checkbox"], [type="radio"], [type="range"]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
}

fieldset {
  margin: 0;
  margin-bottom: var(--spacing);
  padding: 0;
  border: 0;
}

label,
fieldset legend {
  display: block;
  margin-bottom: calc(var(--spacing) * 0.25);
  font-weight: var(--form-label-font-weight, var(--font-weight));
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  width: 100%;
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]),
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
}

input,
select,
textarea {
  --background-color: var(--form-element-background-color);
  --border-color: var(--form-element-border-color);
  --color: var(--form-element-color);
  --box-shadow: none;
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="checkbox"],
    [type="radio"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --background-color: var(--form-element-active-background-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [role="switch"],
    [readonly]
  ):is(:active, :focus),
:where(select, textarea):is(:active, :focus) {
  --border-color: var(--form-element-active-border-color);
}

input:not(
    [type="submit"],
    [type="button"],
    [type="reset"],
    [type="range"],
    [type="file"],
    [readonly]
  ):focus,
select:focus,
textarea:focus {
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}

input:not([type="submit"], [type="button"], [type="reset"])[disabled],
select[disabled],
textarea[disabled],
:where(fieldset[disabled])
  :is(
    input:not([type="submit"], [type="button"], [type="reset"]),
    select,
    textarea
  ) {
  --background-color: var(--form-element-disabled-background-color);
  --border-color: var(--form-element-disabled-border-color);
  opacity: var(--form-element-disabled-opacity);
  pointer-events: none;
}

:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid] {
  padding-right: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal) !important;
  padding-inline-start: var(--form-element-spacing-horizontal) !important;
  -webkit-padding-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  padding-inline-end: calc(
    var(--form-element-spacing-horizontal) + 1.5rem
  ) !important;
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="false"] {
  background-image: var(--icon-valid);
}
:where(input, select, textarea):not(
    [type="checkbox"],
    [type="radio"],
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  )[aria-invalid="true"] {
  background-image: var(--icon-invalid);
}
:where(input, select, textarea)[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
:where(input, select, textarea)[aria-invalid="false"]:is(:active, :focus) {
  --border-color: var(--form-element-valid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width) var(--form-element-valid-focus-color) !important;
}
:where(input, select, textarea)[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}
:where(input, select, textarea)[aria-invalid="true"]:is(:active, :focus) {
  --border-color: var(--form-element-invalid-active-border-color) !important;
  --box-shadow: 0 0 0 var(--outline-width)
    var(--form-element-invalid-focus-color) !important;
}

[dir="rtl"]
  :where(input, select, textarea):not([type="checkbox"], [type="radio"]):is(
    [aria-invalid],
    [aria-invalid="true"],
    [aria-invalid="false"]
  ) {
  background-position: center left 0.75rem;
}

input::placeholder,
input::-webkit-input-placeholder,
textarea::placeholder,
textarea::-webkit-input-placeholder,
select:invalid {
  color: var(--form-element-placeholder-color);
  opacity: 1;
}

input:not([type="checkbox"], [type="radio"]),
select,
textarea {
  margin-bottom: var(--spacing);
}

select::-ms-expand {
  border: 0;
  background-color: transparent;
}
select:not([multiple], [size]) {
  padding-right: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-left: var(--form-element-spacing-horizontal);
  -webkit-padding-start: var(--form-element-spacing-horizontal);
  padding-inline-start: var(--form-element-spacing-horizontal);
  -webkit-padding-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  padding-inline-end: calc(var(--form-element-spacing-horizontal) + 1.5rem);
  background-image: var(--icon-chevron);
  background-position: center right 0.75rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}

[dir="rtl"] select:not([multiple], [size]) {
  background-position: center left 0.75rem;
}

:where(input, select, textarea) + small {
  display: block;
  width: 100%;
  margin-top: calc(var(--spacing) * -0.75);
  margin-bottom: var(--spacing);
  color: var(--muted-color);
}

label > :where(input, select, textarea) {
  margin-top: calc(var(--spacing) * 0.25);
}

/**
 * Form elements
 * Checkboxes & Radios
 */
[type="checkbox"],
[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1.25em;
  height: 1.25em;
  margin-top: -0.125em;
  margin-right: 0.375em;
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: 0.375em;
  margin-inline-end: 0.375em;
  border-width: var(--border-width);
  font-size: inherit;
  vertical-align: middle;
  cursor: pointer;
}
[type="checkbox"]::-ms-check,
[type="radio"]::-ms-check {
  display: none;
}
[type="checkbox"]:checked,
[type="checkbox"]:checked:active,
[type="checkbox"]:checked:focus,
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-checkbox);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}
[type="checkbox"] ~ label,
[type="radio"] ~ label {
  display: inline-block;
  margin-right: 0.375em;
  margin-bottom: 0;
  cursor: pointer;
}

[type="checkbox"]:indeterminate {
  --background-color: var(--primary);
  --border-color: var(--primary);
  background-image: var(--icon-minus);
  background-position: center;
  background-size: 0.75em auto;
  background-repeat: no-repeat;
}

[type="radio"] {
  border-radius: 50%;
}
[type="radio"]:checked,
[type="radio"]:checked:active,
[type="radio"]:checked:focus {
  --background-color: var(--primary-inverse);
  border-width: 0.35em;
  background-image: none;
}

[type="checkbox"][role="switch"] {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
  --color: var(--switch-color);
  width: 2.25em;
  height: 1.25em;
  border: var(--border-width) solid var(--border-color);
  border-radius: 1.25em;
  background-color: var(--background-color);
  line-height: 1.25em;
}
[type="checkbox"][role="switch"]:focus {
  --background-color: var(--switch-background-color);
  --border-color: var(--switch-background-color);
}
[type="checkbox"][role="switch"]:checked {
  --background-color: var(--switch-checked-background-color);
  --border-color: var(--switch-checked-background-color);
}
[type="checkbox"][role="switch"]:before {
  display: block;
  width: calc(1.25em - (var(--border-width) * 2));
  height: 100%;
  border-radius: 50%;
  background-color: var(--color);
  content: "";
  transition: margin 0.1s ease-in-out;
}
[type="checkbox"][role="switch"]:checked {
  background-image: none;
}
[type="checkbox"][role="switch"]:checked::before {
  margin-left: calc(1.125em - var(--border-width));
  -webkit-margin-start: calc(1.125em - var(--border-width));
  margin-inline-start: calc(1.125em - var(--border-width));
}

[type="checkbox"][aria-invalid="false"],
[type="checkbox"]:checked[aria-invalid="false"],
[type="radio"][aria-invalid="false"],
[type="radio"]:checked[aria-invalid="false"],
[type="checkbox"][role="switch"][aria-invalid="false"],
[type="checkbox"][role="switch"]:checked[aria-invalid="false"] {
  --border-color: var(--form-element-valid-border-color);
}
[type="checkbox"][aria-invalid="true"],
[type="checkbox"]:checked[aria-invalid="true"],
[type="radio"][aria-invalid="true"],
[type="radio"]:checked[aria-invalid="true"],
[type="checkbox"][role="switch"][aria-invalid="true"],
[type="checkbox"][role="switch"]:checked[aria-invalid="true"] {
  --border-color: var(--form-element-invalid-border-color);
}

/**
 * Form elements
 * Alternatives input types (Not Checkboxes & Radios)
 */
[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
[type="color"]::-moz-focus-inner {
  padding: 0;
}
[type="color"]::-webkit-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}
[type="color"]::-moz-color-swatch {
  border: 0;
  border-radius: calc(var(--border-radius) * 0.5);
}

input:not([type="checkbox"], [type="radio"], [type="range"], [type="file"]):is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  --icon-position: 0.75rem;
  --icon-width: 1rem;
  padding-right: calc(var(--icon-width) + var(--icon-position));
  background-image: var(--icon-date);
  background-position: center right var(--icon-position);
  background-size: var(--icon-width) auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="time"] {
  background-image: var(--icon-time);
}

[type="date"]::-webkit-calendar-picker-indicator,
[type="datetime-local"]::-webkit-calendar-picker-indicator,
[type="month"]::-webkit-calendar-picker-indicator,
[type="time"]::-webkit-calendar-picker-indicator,
[type="week"]::-webkit-calendar-picker-indicator {
  width: var(--icon-width);
  margin-right: calc(var(--icon-width) * -1);
  margin-left: var(--icon-position);
  opacity: 0;
}

[dir="rtl"]
  :is(
    [type="date"],
    [type="datetime-local"],
    [type="month"],
    [type="time"],
    [type="week"]
  ) {
  text-align: right;
}

[type="file"] {
  --color: var(--muted-color);
  padding: calc(var(--form-element-spacing-vertical) * 0.5) 0;
  border: 0;
  border-radius: 0;
  background: none;
}
[type="file"]::file-selector-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::file-selector-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-webkit-file-upload-button {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) / 2);
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-webkit-file-upload-button:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}
[type="file"]::-ms-browse {
  --background-color: var(--secondary);
  --border-color: var(--secondary);
  --color: var(--secondary-inverse);
  margin-right: calc(var(--spacing) / 2);
  margin-left: 0;
  margin-inline-start: 0;
  margin-inline-end: calc(var(--spacing) / 2);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    calc(var(--form-element-spacing-horizontal) * 0.5);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 1rem;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    border-color var(--transition), color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
[type="file"]::-ms-browse:is(:hover, :active, :focus) {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
}

[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 1.25rem;
  background: none;
}
[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -webkit-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-moz-range-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -moz-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-ms-track {
  width: 100%;
  height: 0.25rem;
  border-radius: var(--border-radius);
  background-color: var(--range-border-color);
  -ms-transition: background-color var(--transition),
    box-shadow var(--transition);
  transition: background-color var(--transition), box-shadow var(--transition);
}
[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -webkit-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -moz-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -0.5rem;
  border: 2px solid var(--range-thumb-border-color);
  border-radius: 50%;
  background-color: var(--range-thumb-color);
  cursor: pointer;
  -ms-transition: background-color var(--transition),
    transform var(--transition);
  transition: background-color var(--transition), transform var(--transition);
}
[type="range"]:hover,
[type="range"]:focus {
  --range-border-color: var(--range-active-border-color);
  --range-thumb-color: var(--range-thumb-hover-color);
}
[type="range"]:active {
  --range-thumb-color: var(--range-thumb-active-color);
}
[type="range"]:active::-webkit-slider-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-moz-range-thumb {
  transform: scale(1.25);
}
[type="range"]:active::-ms-thumb {
  transform: scale(1.25);
}

input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  -webkit-padding-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  padding-inline-start: calc(var(--form-element-spacing-horizontal) + 1.75rem);
  border-radius: 5rem;
  background-image: var(--icon-search);
  background-position: center left 1.125rem;
  background-size: 1rem auto;
  background-repeat: no-repeat;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  -webkit-padding-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  padding-inline-start: calc(
    var(--form-element-spacing-horizontal) + 1.75rem
  ) !important;
  background-position: center left 1.125rem, center right 0.75rem;
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="false"] {
  background-image: var(--icon-search), var(--icon-valid);
}
input:not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid="true"] {
  background-image: var(--icon-search), var(--icon-invalid);
}

[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  display: none;
}

[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"] {
  background-position: center right 1.125rem;
}
[dir="rtl"]
  :where(input):not(
    [type="checkbox"],
    [type="radio"],
    [type="range"],
    [type="file"]
  )[type="search"][aria-invalid] {
  background-position: center right 1.125rem, center left 0.75rem;
}

/**
 * Table
 */
:where(table) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
}

th,
td {
  padding: calc(var(--spacing) / 2) var(--spacing);
  border-bottom: var(--border-width) solid var(--table-border-color);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  text-align: left;
  text-align: start;
}

tfoot th,
tfoot td {
  border-top: var(--border-width) solid var(--table-border-color);
  border-bottom: 0;
}

table[role="grid"] tbody tr:nth-child(odd) {
  background-color: var(--table-row-stripped-background-color);
}

/**
 * Code
 */
pre,
code,
kbd,
samp {
  font-size: 0.875em;
  font-family: var(--font-family);
}

pre {
  -ms-overflow-style: scrollbar;
  overflow: auto;
}

pre,
code,
kbd {
  border-radius: var(--border-radius);
  background: var(--code-background-color);
  color: var(--code-color);
  font-weight: var(--font-weight);
  line-height: initial;
}

code,
kbd {
  display: inline-block;
  padding: 0.375rem 0.5rem;
}

pre {
  display: block;
  margin-bottom: var(--spacing);
  overflow-x: auto;
}
pre > code {
  display: block;
  padding: var(--spacing);
  background: none;
  font-size: 14px;
  line-height: var(--line-height);
}

code b {
  color: var(--code-tag-color);
  font-weight: var(--font-weight);
}
code i {
  color: var(--code-property-color);
  font-style: normal;
}
code u {
  color: var(--code-value-color);
  text-decoration: none;
}
code em {
  color: var(--code-comment-color);
  font-style: normal;
}

kbd {
  background-color: var(--code-kbd-background-color);
  color: var(--code-kbd-color);
  vertical-align: baseline;
}

/**
 * Miscs
 */
hr {
  height: 0;
  border: 0;
  border-top: 1px solid var(--muted-border-color);
  color: inherit;
}

[hidden],
template {
  display: none !important;
}

canvas {
  display: inline-block;
}

/**
 * Accordion (<details>)
 */
details {
  display: block;
  margin-bottom: var(--spacing);
  padding-bottom: var(--spacing);
  border-bottom: var(--border-width) solid var(--accordion-border-color);
}
details summary {
  line-height: 1rem;
  list-style-type: none;
  cursor: pointer;
  transition: color var(--transition);
}
details summary:not([role]) {
  color: var(--accordion-close-summary-color);
}
details summary::-webkit-details-marker {
  display: none;
}
details summary::marker {
  display: none;
}
details summary::-moz-list-bullet {
  list-style-type: none;
}
details summary::after {
  display: block;
  width: 1rem;
  height: 1rem;
  -webkit-margin-start: calc(var(--spacing, 1rem) * 0.5);
  margin-inline-start: calc(var(--spacing, 1rem) * 0.5);
  float: right;
  transform: rotate(-90deg);
  background-image: var(--icon-chevron);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
  transition: transform var(--transition);
}
details summary:focus {
  outline: none;
}
details summary:focus:not([role="button"]) {
  color: var(--accordion-active-summary-color);
}
details summary[role="button"] {
  width: 100%;
  text-align: left;
}
details summary[role="button"]::after {
  height: calc(1rem * var(--line-height, 1.5));
  background-image: var(--icon-chevron-button);
}
details summary[role="button"]:not(.outline).contrast::after {
  background-image: var(--icon-chevron-button-inverse);
}
details[open] > summary {
  margin-bottom: calc(var(--spacing));
}
details[open] > summary:not([role]):not(:focus) {
  color: var(--accordion-open-summary-color);
}
details[open] > summary::after {
  transform: rotate(0);
}

[dir="rtl"] details summary {
  text-align: right;
}
[dir="rtl"] details summary::after {
  float: left;
  background-position: left center;
}

/**
 * Card (<article>)
 */
article {
  margin: var(--block-spacing-vertical) 0;
  padding: var(--block-spacing-vertical) var(--block-spacing-horizontal);
  border-radius: var(--border-radius);
  background: var(--card-background-color);
  box-shadow: var(--card-box-shadow);
}
article > header,
article > footer {
  margin-right: calc(var(--block-spacing-horizontal) * -1);
  margin-left: calc(var(--block-spacing-horizontal) * -1);
  padding: calc(var(--block-spacing-vertical) * 0.66)
    var(--block-spacing-horizontal);
  background-color: var(--card-sectionning-background-color);
}
article > header {
  margin-top: calc(var(--block-spacing-vertical) * -1);
  margin-bottom: var(--block-spacing-vertical);
  border-bottom: var(--border-width) solid var(--card-border-color);
  border-top-right-radius: var(--border-radius);
  border-top-left-radius: var(--border-radius);
}
article > footer {
  margin-top: var(--block-spacing-vertical);
  margin-bottom: calc(var(--block-spacing-vertical) * -1);
  border-top: var(--border-width) solid var(--card-border-color);
  border-bottom-right-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

/**
 * Modal (<dialog>)
 */
#mount {
  --scrollbar-width: 0px;
}

dialog {
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: inherit;
  min-width: 100%;
  height: inherit;
  min-height: 100%;
  padding: var(--spacing);
  border: 0;
  -webkit-backdrop-filter: var(--modal-overlay-backdrop-filter);
  backdrop-filter: var(--modal-overlay-backdrop-filter);
  background-color: var(--modal-overlay-background-color);
  color: var(--color);
}
dialog article {
  max-height: calc(100vh - var(--spacing) * 2);
  overflow: auto;
}
@media (min-width: 576px) {
  dialog article {
    max-width: 510px;
  }
}
@media (min-width: 768px) {
  dialog article {
    max-width: 700px;
  }
}
dialog article > header,
dialog article > footer {
  padding: calc(var(--block-spacing-vertical) * 0.5)
    var(--block-spacing-horizontal);
}
dialog article > header .close {
  margin: 0;
  margin-left: var(--spacing);
  float: right;
}
dialog article > footer {
  text-align: right;
}
dialog article > footer [role="button"] {
  margin-bottom: 0;
}
dialog article > footer [role="button"]:not(:first-of-type) {
  margin-left: calc(var(--spacing) * 0.5);
}
dialog article p:last-of-type {
  margin: 0;
}
dialog article .close {
  display: block;
  width: 1rem;
  height: 1rem;
  margin-top: calc(var(--block-spacing-vertical) * -0.5);
  margin-bottom: var(--typography-spacing-vertical);
  margin-left: auto;
  background-image: var(--icon-close);
  background-position: center;
  background-size: auto 1rem;
  background-repeat: no-repeat;
  opacity: 0.5;
  transition: opacity var(--transition);
}
dialog article .close:is([aria-current], :hover, :active, :focus) {
  opacity: 1;
}
dialog:not([open]),
dialog[open="false"] {
  display: none;
}

.modal-is-open {
  padding-right: var(--scrollbar-width, 0px);
  overflow: hidden;
  pointer-events: none;
}
.modal-is-open dialog {
  pointer-events: auto;
}

:where(.modal-is-opening, .modal-is-closing) dialog,
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-duration: 0.2s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: both;
}
:where(.modal-is-opening, .modal-is-closing) dialog {
  animation-duration: 0.8s;
  animation-name: modal-overlay;
}
:where(.modal-is-opening, .modal-is-closing) dialog > article {
  animation-delay: 0.2s;
  animation-name: modal;
}

.modal-is-closing dialog,
.modal-is-closing dialog > article {
  animation-delay: 0s;
  animation-direction: reverse;
}

@keyframes modal-overlay {
  from {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
  }
}
@keyframes modal {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
}
/**
 * Nav
 */
:where(nav li)::before {
  float: left;
  content: "\u200B";
}

nav,
nav ul {
  display: flex;
}

nav {
  justify-content: space-between;
}
nav ol,
nav ul {
  align-items: center;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
}
nav ol:first-of-type,
nav ul:first-of-type {
  margin-left: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav ol:last-of-type,
nav ul:last-of-type {
  margin-right: calc(var(--nav-element-spacing-horizontal) * -1);
}
nav li {
  display: inline-block;
  margin: 0;
  padding: var(--nav-element-spacing-vertical)
    var(--nav-element-spacing-horizontal);
}
nav li > * {
  --spacing: 0;
}
nav :where(a, [role="link"]) {
  display: inline-block;
  margin: calc(var(--nav-link-spacing-vertical) * -1)
    calc(var(--nav-link-spacing-horizontal) * -1);
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
  border-radius: var(--border-radius);
  text-decoration: none;
}
nav :where(a, [role="link"]):is([aria-current], :hover, :active, :focus) {
  text-decoration: none;
}
nav[aria-label="breadcrumb"] {
  align-items: center;
  justify-content: start;
}
nav[aria-label="breadcrumb"] ul li:not(:first-child) {
  -webkit-margin-start: var(--nav-link-spacing-horizontal);
  margin-inline-start: var(--nav-link-spacing-horizontal);
}
nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  position: absolute;
  width: calc(var(--nav-link-spacing-horizontal) * 2);
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) / 2);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) / 2);
  content: "/";
  color: var(--muted-color);
  text-align: center;
}
nav[aria-label="breadcrumb"] a[aria-current] {
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  pointer-events: none;
}
nav [role="button"] {
  margin-right: inherit;
  margin-left: inherit;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}

aside nav,
aside ol,
aside ul,
aside li {
  display: block;
}
aside li {
  padding: calc(var(--nav-element-spacing-vertical) * 0.5)
    var(--nav-element-spacing-horizontal);
}
aside li a {
  display: block;
}
aside li [role="button"] {
  margin: inherit;
}

[dir="rtl"] nav[aria-label="breadcrumb"] ul li:not(:last-child) ::after {
  content: "\\\\";
}

/**
 * Progress
 */
progress {
  display: inline-block;
  vertical-align: baseline;
}

progress {
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  appearance: none;
  width: 100%;
  height: 0.5rem;
  margin-bottom: calc(var(--spacing) * 0.5);
  overflow: hidden;
  border: 0;
  border-radius: var(--border-radius);
  background-color: var(--progress-background-color);
  color: var(--progress-color);
}
progress::-webkit-progress-bar {
  border-radius: var(--border-radius);
  background: none;
}
progress[value]::-webkit-progress-value {
  background-color: var(--progress-color);
}
progress::-moz-progress-bar {
  background-color: var(--progress-color);
}
@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background: var(--progress-background-color)
      linear-gradient(
        to right,
        var(--progress-color) 30%,
        var(--progress-background-color) 30%
      )
      top left/150% 150% no-repeat;
    animation: progress-indeterminate 1s linear infinite;
  }
  progress:indeterminate[value]::-webkit-progress-value {
    background-color: transparent;
  }
  progress:indeterminate::-moz-progress-bar {
    background-color: transparent;
  }
}

@media (prefers-reduced-motion: no-preference) {
  [dir="rtl"] progress:indeterminate {
    animation-direction: reverse;
  }
}

@keyframes progress-indeterminate {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
/**
 * Dropdown ([role="list"])
 */
details[role="list"],
li[role="list"] {
  position: relative;
}

details[role="list"] summary + ul,
li[role="list"] > ul {
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
}
details[role="list"] summary + ul li,
li[role="list"] > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  list-style: none;
}
details[role="list"] summary + ul li:first-of-type,
li[role="list"] > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li:last-of-type,
li[role="list"] > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.5);
}
details[role="list"] summary + ul li a,
li[role="list"] > ul li a {
  display: block;
  margin: calc(var(--form-element-spacing-vertical) * -0.5)
    calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 0.5)
    var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
}
details[role="list"] summary + ul li a:hover,
li[role="list"] > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details[role="list"] summary::after,
li[role="list"] > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details[role="list"] {
  padding: 0;
  border-bottom: none;
}
details[role="list"] summary {
  margin-bottom: 0;
}
details[role="list"] summary:not([role]) {
  height: calc(
    1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 +
      var(--border-width) * 2
  );
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
}
details[role="list"] summary:not([role]):active,
details[role="list"] summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details[role="list"] summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[role="list"][open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[role="list"][open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details[role="list"] summary,
nav li[role="list"] a {
  display: flex;
  direction: ltr;
}

nav details[role="list"] summary + ul,
nav li[role="list"] > ul {
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul li a,
nav li[role="list"] > ul li a {
  border-radius: 0;
}

nav details[role="list"] summary,
nav details[role="list"] summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[role="list"][open] summary {
  border-radius: var(--border-radius);
}
nav details[role="list"] summary + ul {
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
nav details[role="list"] summary[role="link"] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details[role="list"] summary[role="link"] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

li[role="list"]:hover > ul,
li[role="list"] a:active ~ ul,
li[role="list"] a:focus ~ ul {
  display: flex;
}
li[role="list"] > ul {
  display: none;
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
  margin-inline-start: calc(
    var(--nav-element-spacing-horizontal) - var(--nav-link-spacing-horizontal)
  );
}
li[role="list"] > a::after {
  background-image: var(--icon-chevron);
}

/**
 * Loading ([aria-busy=true])
 */
[aria-busy="true"] {
  cursor: progress;
}

[aria-busy="true"]:not(input, select, textarea)::before {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 0.1875em solid currentColor;
  border-radius: 1em;
  border-right-color: transparent;
  content: "";
  vertical-align: text-bottom;
  vertical-align: -0.125em;
  animation: spinner 0.75s linear infinite;
  opacity: var(--loading-spinner-opacity);
}
[aria-busy="true"]:not(input, select, textarea):not(:empty)::before {
  margin-right: calc(var(--spacing) * 0.5);
  margin-left: 0;
  -webkit-margin-start: 0;
  margin-inline-start: 0;
  -webkit-margin-end: calc(var(--spacing) * 0.5);
  margin-inline-end: calc(var(--spacing) * 0.5);
}
[aria-busy="true"]:not(input, select, textarea):empty {
  text-align: center;
}

button[aria-busy="true"],
input[type="submit"][aria-busy="true"],
input[type="button"][aria-busy="true"],
input[type="reset"][aria-busy="true"],
a[aria-busy="true"] {
  pointer-events: none;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
/**
 * Tooltip ([data-tooltip])
 */
[data-tooltip] {
  position: relative;
}
[data-tooltip]:not(a, button, input) {
  border-bottom: 1px dotted;
  text-decoration: none;
  cursor: help;
}
[data-tooltip][data-placement="top"]::before,
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::before,
[data-tooltip]::after {
  display: block;
  z-index: 99;
  position: absolute;
  bottom: 100%;
  left: 50%;
  padding: 0.25rem 0.5rem;
  overflow: hidden;
  transform: translate(-50%, -0.25rem);
  border-radius: var(--border-radius);
  background: var(--tooltip-background-color);
  content: attr(data-tooltip);
  color: var(--tooltip-color);
  font-style: normal;
  font-weight: var(--font-weight);
  font-size: 0.875rem;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
}
[data-tooltip][data-placement="top"]::after,
[data-tooltip]::after {
  padding: 0;
  transform: translate(-50%, 0rem);
  border-top: 0.3rem solid;
  border-right: 0.3rem solid transparent;
  border-left: 0.3rem solid transparent;
  border-radius: 0;
  background-color: transparent;
  content: "";
  color: var(--tooltip-background-color);
}
[data-tooltip][data-placement="bottom"]::before,
[data-tooltip][data-placement="bottom"]::after {
  top: 100%;
  bottom: auto;
  transform: translate(-50%, 0.25rem);
}
[data-tooltip][data-placement="bottom"]:after {
  transform: translate(-50%, -0.3rem);
  border: 0.3rem solid transparent;
  border-bottom: 0.3rem solid;
}
[data-tooltip][data-placement="left"]::before,
[data-tooltip][data-placement="left"]::after {
  top: 50%;
  right: 100%;
  bottom: auto;
  left: auto;
  transform: translate(-0.25rem, -50%);
}
[data-tooltip][data-placement="left"]:after {
  transform: translate(0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-left: 0.3rem solid;
}
[data-tooltip][data-placement="right"]::before,
[data-tooltip][data-placement="right"]::after {
  top: 50%;
  right: auto;
  bottom: auto;
  left: 100%;
  transform: translate(0.25rem, -50%);
}
[data-tooltip][data-placement="right"]:after {
  transform: translate(-0.3rem, -50%);
  border: 0.3rem solid transparent;
  border-right: 0.3rem solid;
}
[data-tooltip]:focus::before,
[data-tooltip]:focus::after,
[data-tooltip]:hover::before,
[data-tooltip]:hover::after {
  opacity: 1;
}
@media (hover: hover) and (pointer: fine) {
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::before,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::before,
  [data-tooltip]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover [data-tooltip]:focus::after,
  [data-tooltip]:hover::after {
    animation-name: tooltip-caret-slide-top;
  }
  [data-tooltip][data-placement="bottom"]:focus::before,
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::before,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-bottom;
  }
  [data-tooltip][data-placement="bottom"]:focus::after,
  [data-tooltip][data-placement="bottom"]:hover::after {
    animation-name: tooltip-caret-slide-bottom;
  }
  [data-tooltip][data-placement="left"]:focus::before,
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::before,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-left;
  }
  [data-tooltip][data-placement="left"]:focus::after,
  [data-tooltip][data-placement="left"]:hover::after {
    animation-name: tooltip-caret-slide-left;
  }
  [data-tooltip][data-placement="right"]:focus::before,
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::before,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-duration: 0.2s;
    animation-name: tooltip-slide-right;
  }
  [data-tooltip][data-placement="right"]:focus::after,
  [data-tooltip][data-placement="right"]:hover::after {
    animation-name: tooltip-caret-slide-right;
  }
}
@keyframes tooltip-slide-top {
  from {
    transform: translate(-50%, 0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-top {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.25rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-bottom {
  from {
    transform: translate(-50%, -0.75rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0.25rem);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-bottom {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -0.5rem);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -0.3rem);
    opacity: 1;
  }
}
@keyframes tooltip-slide-left {
  from {
    transform: translate(0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-left {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.3rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-slide-right {
  from {
    transform: translate(-0.75rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(0.25rem, -50%);
    opacity: 1;
  }
}
@keyframes tooltip-caret-slide-right {
  from {
    opacity: 0;
  }
  50% {
    transform: translate(-0.05rem, -50%);
    opacity: 0;
  }
  to {
    transform: translate(-0.3rem, -50%);
    opacity: 1;
  }
}

/**
 * Accessibility & User interaction
 */
[aria-controls] {
  cursor: pointer;
}

[aria-disabled="true"],
[disabled] {
  cursor: not-allowed;
}

[aria-hidden="false"][hidden] {
  display: initial;
}

[aria-hidden="false"][hidden]:not(:focus) {
  clip: rect(0, 0, 0, 0);
  position: absolute;
}

a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
}

[dir="rtl"] {
  direction: rtl;
}

/**
* Reduce Motion Features
*/
@media (prefers-reduced-motion: reduce) {
  *:not([aria-busy="true"]),
  :not([aria-busy="true"])::before,
  :not([aria-busy="true"])::after {
    background-attachment: initial !important;
    animation-duration: 1ms !important;
    animation-delay: -1ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-delay: 0s !important;
    transition-duration: 0s !important;
  }
}

/*# sourceMappingURL=custom.css.map */
`,IMMERSIVE_TRANSLATE_COMMON_CSS:`#mount#mount {
  /* --primary: rgb(227, 59, 126); */
  --primary: #ea4c89;
  --primary-hover: #f082ac;
}

li.select-link.select-link:hover > ul {
  display: none;
}
li.select-link.select-link > ul {
  display: none;
}
li.select-link.select-link a:focus ~ ul {
  display: none;
}

li.select-link.select-link a:active ~ ul {
  display: none;
}
li.select-link-active.select-link-active > ul {
  display: flex;
}
li.select-link-active.select-link-active:hover > ul {
  display: flex;
}

li.select-link-active.select-link-active a:focus ~ ul {
  display: flex;
}

li.select-link-active.select-link-active a:active ~ ul {
  display: flex;
}
ul.select-link-ul.select-link-ul {
  right: 0px;
  left: auto;
}

a.select-link-selected {
  background-color: var(--primary-focus);
}
.immersive-translate-no-select {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* li[role="list"].no-arrow > a::after { */
/*   background-image: none; */
/*   width: 0; */
/*   color: var(--color); */
/* } */
li[role="list"].no-arrow {
  margin-left: 8px;
  padding-right: 0;
}
li[role="list"] > a::after {
  -webkit-margin-start: 0.2rem;
  margin-inline-start: 0.2rem;
}

li[role="list"].no-arrow > a,
li[role="list"].no-arrow > a:link,
li[role="list"].no-arrow > a:visited {
  color: var(--secondary);
}

select.min-select {
  --form-element-spacing-horizontal: 0;
  margin-bottom: 0;
  max-width: 128px;
  color: var(--primary);
  font-size: 14px;
  border: none;
  padding: 0;
  padding-right: 20px;
  background-position: center right 0;
  background-size: 16px auto;
  text-overflow: ellipsis;
  text-align: right;
  color: var(--color);
}
select.min-select-secondary {
  color: var(--color);
}
select.min-select:focus {
  outline: none;
  border: none;
  --box-shadow: none;
}
select.min-select-no-arrow {
  background-image: none;
  padding-right: 0;
}

select.min-select-left {
  padding-right: 0px;
  /* padding-left: 24px; */
  /* background-position: center left 0; */
  text-overflow: ellipsis;
  text-align: left;
}

.muted {
  color: var(--muted-color);
}

.select.button-select {
  --background-color: var(--secondary-hover);
  --border-color: var(--secondary-hover);
  --color: var(--secondary-inverse);
  cursor: pointer;
  --box-shadow: var(--button-box-shadow, 0 0 0 rgba(0, 0, 0, 0));
  padding: var(--form-element-spacing-vertical)
    var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  background-color: var(--background-color);
  box-shadow: var(--box-shadow);
  color: var(--color);
  font-weight: var(--font-weight);
  font-size: 16px;
  line-height: var(--line-height);
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition),
    color var(--transition), box-shadow var(--transition);
  -webkit-appearance: button;
  margin: 0;
  margin-bottom: 0px;
  overflow: visible;
  font-family: inherit;
  text-transform: none;
}
`,IMMERSIVE_TRANSLATE_POPUP_CSS:`html {
  font-size: 17px;
  --font-size: 17px;
}

body {
  max-width: 100%;
  padding: 0;
  margin: 0;
  min-width: 250px;
  border-radius: 10px;
}
.immersive-translate-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  touch-action: none;
}
.immersive-translate-popup-wrapper {
  background: var(--background-color);
  border-radius: 10px;
  border: 1px solid var(--muted-border-color);
}

#mount#mount {
  --font-family: system-ui, -apple-system, "Segoe UI", "Roboto", "Ubuntu",
    "Cantarell", "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  --line-height: 1.5;
  --font-weight: 400;
  --font-size: 16px;
  --border-radius: 4px;
  --border-width: 1px;
  --outline-width: 3px;
  --spacing: 16px;
  --typography-spacing-vertical: 24px;
  --block-spacing-vertical: calc(var(--spacing) * 2);
  --block-spacing-horizontal: var(--spacing);
  --grid-spacing-vertical: 0;
  --grid-spacing-horizontal: var(--spacing);
  --form-element-spacing-vertical: 12px;
  --form-element-spacing-horizontal: 16px;
  --nav-element-spacing-vertical: 16px;
  --nav-element-spacing-horizontal: 8px;
  --nav-link-spacing-vertical: 8px;
  --nav-link-spacing-horizontal: 8px;
  --form-label-font-weight: var(--font-weight);
  --transition: 0.2s ease-in-out;
  --modal-overlay-backdrop-filter: blur(4px);
}
#mount {
  min-width: 250px;
}
.main-button {
  font-size: 14px;
  vertical-align: middle;
}

.pt-4 {
  padding-top: 24px;
}
.p-2 {
  padding: 8px;
}
.pl-5 {
  padding-left: 48px;
}
.p-0 {
  padding: 0;
}
.pl-2 {
  padding-left: 8px;
}
.pl-4 {
  padding-left: 24px;
}
.pt-2 {
  padding-top: 8px;
}

.pb-2 {
  padding-bottom: 8px;
}

.pr-5 {
  padding-right: 48px;
}
.text-sm {
  font-size: 14px;
}

.flex {
  display: flex;
}
.justify-between {
  justify-content: space-between;
}

.mb-2 {
  margin-bottom: 8px;
}
.inline-block {
  display: inline-block;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.mt-2 {
  margin-top: 8px;
}
.mt-0 {
  margin-top: 0;
}

.mb-1 {
  margin-bottom: 4px;
}
.ml-4 {
  margin-left: 24px;
}
.ml-3 {
  margin-left: 16px;
}
.ml-2 {
  margin-left: 8px;
}
.mr-1 {
  margin-right: 4px;
}
.pl-3 {
  padding-left: 12px;
}
.pr-3 {
  padding-right: 12px;
}
.p-3 {
  padding: 12px;
}
.mt-4 {
  margin-top: 24px;
}
.py-0 {
  padding-top: 0;
  padding-bottom: 0;
}

.left-auto {
  left: auto !important;
}

.max-h-28 {
  max-height: 112px;
}
.max-h-30 {
  max-height: 120px;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.text-xs {
  font-size: 12px;
}

.flex-1 {
  flex: 1;
}
.flex-3 {
  flex: 3;
}
.flex-4 {
  flex: 4;
}
.flex-2 {
  flex: 2;
}
.mt-3 {
  margin-top: 16px;
}
.items-center {
  align-items: center;
}
.items-end {
  align-items: flex-end;
}
.items-baseline {
  align-items: baseline;
}

.my-5 {
  margin-top: 48px;
  margin-bottom: 48px;
}
.my-4 {
  margin-top: 24px;
  margin-bottom: 24px;
}
.my-3 {
  margin-top: 16px;
  margin-bottom: 16px;
}
.pt-3 {
  padding-top: 12px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.pt-2 {
  padding-top: 8px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.pt-1 {
  padding-top: 4px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.pb-2 {
  padding-bottom: 8px;
}
.justify-end {
  justify-content: flex-end;
}
.w-auto {
  width: auto;
}
`,IMMERSIVE_TRANSLATE_POPUP_HTML:`<style>
  html {
    font-size: 17px;
  }
  .immersive-translate-popup-container {
    position: fixed;
    padding: 0;
    z-index: 999999;
  }
  .immersive-translate-popup-btn {
    background-color: #ea4c89;
    font-size: 18px;
    opacity: 0.5;
    width: 36px;
    height: 36px;
    border-radius: 9999999px;
  }
  .immersive-translate-popup-btn > svg {
  }
  #mount#mount {
    position: absolute;
    display: none;
    min-width: 250px;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    --font-size: 17px;
    font-size: 17px;
  }
</style>

<div
  id="immersive-translate-popup-container"
  class="immersive-translate-popup-container"
>
  <button
    id="immersive-translate-popup-btn"
    class="immersive-translate-popup-btn"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M5 15v2a2 2 0 0 0 1.85 1.995L7 19h3v2H7a4 4 0 0 1-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM8 2v2h4v7H8v3H6v-3H2V4h4V2h2zm9 1a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3h3zM6 6H4v3h2V6zm4 0H8v3h2V6z"
        fill="rgba(255,255,255,1)"
      />
    </svg>
  </button>
  <div class="immersive-translate-popup-mount" id="mount"></div>
</div>
`,MOCK:"0",DEBUG:"0"};var Ka=Object.create,hn=Object.defineProperty,Ga=Object.getOwnPropertyDescriptor,bn=Object.getOwnPropertyNames,Ya=Object.getPrototypeOf,Ja=Object.prototype.hasOwnProperty,Xa=(e,t)=>function(){return t||(0,e[bn(e)[0]])((t={exports:{}}).exports,t),t.exports},Qa=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of bn(t))!Ja.call(e,o)&&o!==r&&hn(e,o,{get:()=>t[o],enumerable:!(n=Ga(t,o))||n.enumerable});return e},Za=(e,t,r)=>(r=e!=null?Ka(Ya(e)):{},Qa(t||!e||!e.__esModule?hn(r,"default",{value:e,enumerable:!0}):r,e)),ei=Xa({"esm-build-3120606719048d5175703f3b3f8812d3453a0d07-9fbf1061/node_modules/webextension-polyfill/dist/browser-polyfill.js"(e,t){(function(r,n){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],n);else if(typeof e<"u")n(t);else{var o={exports:{}};n(o),r.browser=o.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:e,function(r){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let n="The message port closed before a response was received.",o=a=>{let s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(s).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class i extends WeakMap{constructor(_,T=void 0){super(T),this.createItem=_}get(_){return this.has(_)||this.set(_,this.createItem(_)),super.get(_)}}let c=w=>w&&typeof w=="object"&&typeof w.then=="function",u=(w,_)=>(...T)=>{a.runtime.lastError?w.reject(new Error(a.runtime.lastError.message)):_.singleCallbackArg||T.length<=1&&_.singleCallbackArg!==!1?w.resolve(T[0]):w.resolve(T)},l=w=>w==1?"argument":"arguments",p=(w,_)=>function(E,...B){if(B.length<_.minArgs)throw new Error(`Expected at least ${_.minArgs} ${l(_.minArgs)} for ${w}(), got ${B.length}`);if(B.length>_.maxArgs)throw new Error(`Expected at most ${_.maxArgs} ${l(_.maxArgs)} for ${w}(), got ${B.length}`);return new Promise((J,z)=>{if(_.fallbackToNoCallback)try{E[w](...B,u({resolve:J,reject:z},_))}catch(D){console.warn(`${w} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,D),E[w](...B),_.fallbackToNoCallback=!1,_.noCallback=!0,J()}else _.noCallback?(E[w](...B),J()):E[w](...B,u({resolve:J,reject:z},_))})},m=(w,_,T)=>new Proxy(_,{apply(E,B,J){return T.call(B,w,...J)}}),f=Function.call.bind(Object.prototype.hasOwnProperty),d=(w,_={},T={})=>{let E=Object.create(null),B={has(z,D){return D in w||D in E},get(z,D,X){if(D in E)return E[D];if(!(D in w))return;let j=w[D];if(typeof j=="function")if(typeof _[D]=="function")j=m(w,w[D],_[D]);else if(f(T,D)){let me=p(D,T[D]);j=m(w,w[D],me)}else j=j.bind(w);else if(typeof j=="object"&&j!==null&&(f(_,D)||f(T,D)))j=d(j,_[D],T[D]);else if(f(T,"*"))j=d(j,_[D],T["*"]);else return Object.defineProperty(E,D,{configurable:!0,enumerable:!0,get(){return w[D]},set(me){w[D]=me}}),j;return E[D]=j,j},set(z,D,X,j){return D in E?E[D]=X:w[D]=X,!0},defineProperty(z,D,X){return Reflect.defineProperty(E,D,X)},deleteProperty(z,D){return Reflect.deleteProperty(E,D)}},J=Object.create(w);return new Proxy(J,B)},A=w=>({addListener(_,T,...E){_.addListener(w.get(T),...E)},hasListener(_,T){return _.hasListener(w.get(T))},removeListener(_,T){_.removeListener(w.get(T))}}),S=new i(w=>typeof w!="function"?w:function(T){let E=d(T,{},{getContent:{minArgs:0,maxArgs:0}});w(E)}),g=new i(w=>typeof w!="function"?w:function(T,E,B){let J=!1,z,D=new Promise(Se=>{z=function(ve){J=!0,Se(ve)}}),X;try{X=w(T,E,z)}catch(Se){X=Promise.reject(Se)}let j=X!==!0&&c(X);if(X!==!0&&!j&&!J)return!1;let me=Se=>{Se.then(ve=>{B(ve)},ve=>{let ke;ve&&(ve instanceof Error||typeof ve.message=="string")?ke=ve.message:ke="An unexpected error occurred",B({__mozWebExtensionPolyfillReject__:!0,message:ke})}).catch(ve=>{console.error("Failed to send onMessage rejected reply",ve)})};return me(j?X:D),!0}),v=({reject:w,resolve:_},T)=>{a.runtime.lastError?a.runtime.lastError.message===n?_():w(new Error(a.runtime.lastError.message)):T&&T.__mozWebExtensionPolyfillReject__?w(new Error(T.message)):_(T)},L=(w,_,T,...E)=>{if(E.length<_.minArgs)throw new Error(`Expected at least ${_.minArgs} ${l(_.minArgs)} for ${w}(), got ${E.length}`);if(E.length>_.maxArgs)throw new Error(`Expected at most ${_.maxArgs} ${l(_.maxArgs)} for ${w}(), got ${E.length}`);return new Promise((B,J)=>{let z=v.bind(null,{resolve:B,reject:J});E.push(z),T.sendMessage(...E)})},k={devtools:{network:{onRequestFinished:A(S)}},runtime:{onMessage:A(g),onMessageExternal:A(g),sendMessage:L.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:L.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},ee={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":ee},services:{"*":ee},websites:{"*":ee}},d(a,k,s)};r.exports=o(chrome)}else r.exports=globalThis.browser})}}),ti=Za(ei()),{default:mn,...ri}=ti,rr=mn!==void 0?mn:ri;globalThis.immersiveTranslateBrowserAPI=rr;var yn={lineBreakMaxTextCount:"\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF","translate-pdf":"\u70B9\u51FB\u7FFB\u8BD1 PDF","translate-firefox-local-pdf":"\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",enableLineBreak:"\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",help:"\u5E2E\u52A9",browserShortcutsNoteForFirefox:"Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",browserShortcutsNoteForChrome:"\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",enableLineBreakDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8BD1","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u5F00\u8BBE\u7F6E\u9875","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u786E\u5B9A\u8981\u91CD\u7F6E\u8BBE\u7F6E\u5417\uFF1F",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3",translationLineBreakSettingDescription:"\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C(\u66F4\u6574\u9F50)/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF0C\u66F4\u7701\u7A7A\u95F4\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u7981\u7528",changelog:"\u66F4\u65B0\u65E5\u5FD7",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u5219\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",toggleTranslationMaskWhenThreeFingersOnTheScreen:"\u591A\u6307\u540C\u65F6\u89E6\u6478\u5219\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8BBE\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6863",resetSuccess:"\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",saved:"\u4FDD\u5B58\u6210\u529F",successImportConfig:"\u6210\u529F\u5BFC\u5165\u914D\u7F6E",goAdvancedSettings:"\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u8FDB\u9636\u8BBE\u7F6E",advancedDescription:"\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",developer:"\u5F00\u53D1\u8005\u8BBE\u7F6E",donateCafe:"\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",feedback:"\u95EE\u9898\u53CD\u9988",toggleTranslatePage:"\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",translationAreaDescription:"\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F","interface language":"\u754C\u9762\u8BED\u8A00","display both the original text and the translation":"\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587","keyboard shortcuts":"\u952E\u76D8\u5FEB\u6377\u952E",modify:"\u4FEE\u6539\u5FEB\u6377\u952E",reset:"\u91CD\u7F6E",close:"\u5173\u95ED",homepage:"\u4E3B\u9875",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8",translateTheMainPage:"\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF","The local rules are up to date":"\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:","Checking for updates":"\u6B63\u5728\u68C0\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",localVersionIsTooOld:"\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u7684\u7248\u672C\u518D\u5C1D\u8BD5\u540C\u6B65",badUserscriptBrowser:"\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u53D1\u73B0\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",retry:"\u70B9\u6B64\u91CD\u8BD5",failedReason:"\u5931\u8D25\u539F\u56E0",currentRuleVersion:"\u5F53\u524D\u89C4\u5219\u7248\u672C",calculating:"\u8BA1\u7B97\u4E2D",unknownError:"\u672A\u77E5\u9519\u8BEF",canNotFetchRemoteRule:"\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",enableAlphaSuccess:"\u5DF2\u5F00\u542FAlpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u5173\u95EDAlpha\u529F\u80FD",cacheSize:"\u7F13\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7F13\u5B58",options:"\u8BBE\u7F6E",about:"\u5173\u4E8E",service:"\u7FFB\u8BD1\u670D\u52A1",needAction:"(\u53BB\u8BBE\u7F6E)",goSettings:"\u53BB\u8BBE\u7F6E",needActionForOptions:"(\u9700\u8BBE\u7F6E)",translationEngine:"\u5F15\u64CE\u9009\u9879",sourceLanguage:"\u539F\u6587\u8BED\u8A00",target:"\u76EE\u6807\u8BED\u8A00",popupSourceLanguage:"\u539F\u6587\u8BED\u8A00",popupTarget:"\u76EE\u6807\u8BED\u8A00",popupService:"\u7FFB\u8BD1\u670D\u52A1",forThisSite:"\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u603B\u662F\u7FFB\u8BD1{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8BD1{language}",alwaysTranslateSomeSite:"\u603B\u662F\u7FFB\u8BD1 {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",add:"\u6DFB\u52A0",default:"\u9ED8\u8BA4",forThisLanguage:"\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A","add url":"\u8F93\u5165URL",edit:"\u7F16\u8F91","translate other languages into specific language":"\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00","select translation service":"\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",language:"\u8BED\u8A00","show-original":"\u663E\u793A\u539F\u6587",translate:"\u7FFB\u8BD1",Translated:"\u5DF2\u7FFB\u8BD1",Translating:"\u7FFB\u8BD1\u4E2D",Error:"\u9519\u8BEF",allowCacheTranslations:"\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09","translation display":"\u8BD1\u6587\u663E\u793A\u6837\u5F0F","select diplay style":"\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8BBE\u7F6E",import_export:"\u5BFC\u5165/\u5BFC\u51FA",import_export_title:"\u5BFC\u5165/\u5BFC\u51FA\u914D\u7F6E",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65","translationTheme.none":"\u65E0","translationTheme.dashed":"\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.dotted":"\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.dashedBorder":"\u865A\u7EBF\u8FB9\u6846","translationTheme.underline":"\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7EB8\u9634\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7EBF","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u9A6C\u514B\u7B14","translationTheme.blockquote":"\u5F15\u7528\u6837\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u4F53","translationTheme.bold":"\u52A0\u7C97","translationTheme.thinDashed":"\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7EBF","translationServices.tencent":"\u817E\u8BAF\u7FFB\u8BD1\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8BD1","translationServices.bai":"\u767E\u5EA6(Alpha)","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8BD1","translationServices.aliyun":"\u963F\u91CC\u4E91\u7FFB\u8BD1","translationServices.volc":"\u706B\u5C71\u7FFB\u8BD1","translationServices.deeplx":"DeeplX(Beta)","translationServices.bing":"\u5FC5\u5E94\u7FFB\u8BD1","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8BD1","translationServices.azure":"\u5FAE\u8F6F\u7FFB\u8BD1","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9A\u9A6C\u900A\u7FFB\u8BD1","translationServices.mock":"\u6A21\u62DF\u7FFB\u8BD1","translationServices.mock2":"\u6A21\u62DF\u7FFB\u8BD12","translationServices.caiyun":"\u5F69\u4E91\u5C0F\u8BD1","translationServices.volcAlpha":"\u706B\u5C71 (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8BD1","translationServices.transmart":"\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1","translationServices.niu":"\u5C0F\u725B\u7FFB\u8BD1","translationServices.d":"D (Alpha)","translationServices.dpro":"D Pro (Canary)","translate title":"\u7FFB\u8BD1\u9875\u9762\u6807\u9898","always languages":"\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u8BED\u8A00",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/{touch}\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","always sites":"\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740","always translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740","never translate the following sites":"\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1","please refer to":"\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",currentUrl:"\u5F53\u524D\u7F51\u5740",confirm:"\u4FDD\u5B58",cancel:"\u53D6\u6D88",delete:"\u5220\u9664","languages.auto":"\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",isShowContextMenu:"\u521B\u5EFA\u53F3\u952E\u83DC\u5355",syncToCloud:"\u540C\u6B65\u5230\u4E91\u7AEF",syncToCloudDescription:"\u5F00\u542F\u540E\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668/\u6CB9\u7334\u811A\u672C\u4E4B\u95F4\u540C\u6B65\u914D\u7F6E,\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6743\u5931\u8D25",syncTitle:"\u624B\u52A8\u5907\u4EFD\u7BA1\u7406",import_hint:"\u5BFC\u5165",upload:"\u4E0A\u4F20",revokeAuth:"\u64A4\u9500\u6388\u6743",uploadFail:"\u4E0A\u4F20\u5931\u8D25",download:"\u4E0B\u8F7D",importSuccess:"\u5BFC\u5165\u6210\u529F",importFail:"\u5BFC\u5165\u5931\u8D25",deleteFail:"\u5220\u9664\u5931\u8D25",backupToCloud:"\u624B\u52A8\u7BA1\u7406\u5907\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5907\u4EFD\u8282\u70B9",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5907\u4EFD{count}\u4E2A\u4E0D\u540C\u7684\u8282\u70B9, \u8BF7\u5220\u9664\u4E0D\u9700\u8981\u7684\u8282\u70B9",backupToCloudDescription:"\u624B\u52A8\u4E0A\u4F20\u6216\u6062\u590D\u5907\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8BB83\u4E2A\u4E0D\u540C\u7684\u5907\u4EFD",successSyncConfig:"\u6210\u529F\u4E0E\u4E91\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u8D25",updatedAt:"\u66F4\u65B0\u4E8E {date}",lastSyncedAt:"\u4E0A\u6B21\u68C0\u67E5\u4E8E {date}",downloadFail:"\u4E0B\u8F7D\u5931\u8D25",clickToDownload:"\u70B9\u51FB\u4E0B\u8F7D",aboutLabel:"\u5173\u4E8E - \u53CD\u9988 - \u8D5E\u52A9","browser.openAboutPage":"\u5173\u4E8E/\u53CD\u9988/\u8D5E\u52A9",aboutIntro:"\u8BE5\u6269\u5C55\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u4EEC\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u60A6\u5730\u83B7\u53D6\u4E92\u8054\u7F51\u4E0A\u5DE8\u5927\u7684\u5916\u8BED\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8C22\u8FD9\u4E9B<1>\u8D5E\u52A9\u8005\u4EEC</1>, \u7531\u4E8E\u4ED6/\u5979\u4EEC\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8D39\u5730\u4F7F\u7528\u8FD9\u4E2A\u5DE5\u5177\u3002\u5982\u679C\u6709\u4F59\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u70B9\u51FB\u8FD9\u91CC\u8D5E\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u5173\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u9891\u9053</4>\u83B7\u53D6\u6700\u65B0\u66F4\u65B0\u3002",projectHomepage:"\u9879\u76EE\u4E3B\u9875",joinTelegramGroup:"\u52A0\u5165 Telegram \u7FA4\u53C2\u4E0E\u529F\u80FD\u8BA8\u8BBA",feedbackAndJoin:"\u95EE\u9898\u53CD\u9988/\u52A0\u7FA4",autoSync:"\u81EA\u52A8\u5B9A\u65F6\u540C\u6B65",loadingThemeTitle:"Loading \u6837\u5F0F",loadingThemeDescription:"\u8BBE\u7F6E\u7B49\u5F85\u8BD1\u6587\u52A0\u8F7D\u65F6\u7684\u6837\u5F0F","loadingTheme.spinner":"\u8F6C\u5708\u52A8\u753B Spinner","loadingTheme.text":"\u9759\u6001\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u663E\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863",successSyncButNoChange:"\u5F53\u524D\u914D\u7F6E\u4E0E\u4E91\u7AEF\u4E00\u81F4"};var xn={lineBreakMaxTextCount:"\u63DB\u884C\u5F8C\uFF0C\u6BCF\u53E5\u8A71\u5141\u8A31\u7684\u6700\u5927\u5B57\u7B26\u6578\u91CF","translate-pdf":"\u9EDE\u64CA\u7FFB\u8B6FPDF","translate-firefox-local-pdf":"\u9EDE\u64CA\u4E0A\u50B3PDF",enableLineBreak:"\u662F\u5426\u958B\u5553\u9577\u6BB5\u843D\u81EA\u52D5\u63DB\u884C",sponsorLabel:"$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",help:"\u5E6B\u52A9",browserShortcutsNoteForFirefox:"Firefox\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u6377\u9375\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762`about:addons`\uFF0C\u7136\u5F8C\u9EDE\u64CA\u300C\u8A2D\u7F6E\u300D\uFF0C\u518D\u9EDE\u64CA\u300C\u7BA1\u7406\u5FEB\u6377\u9375\u300D\u5373\u53EF\u8A2D\u7F6E",browserShortcutsNoteForChrome:"\u985EChrome\u700F\u89BD\u5668\u4FEE\u6539\u5FEB\u7D50\u75C2\u9700\u8981\u6253\u958B\u64F4\u5C55\u7BA1\u7406\u9801\u9762\uFF0C\u5728\u2019\u7BA1\u7406\u5FEB\u6377\u9375\u2018\u9762\u677F\uFF08\u2019chrome://extensions/shortcuts\u2018\uFF09\u8A2D\u7F6E\uFF0C\u9EDE\u64CA\u4E0B\u65B9\u6309\u9215\u8DF3\u8F49\u5230\u5FEB\u6377\u9375\u7BA1\u7406\u9801\u9762\u3002",browserShortcutsSucks:"\u4FEE\u6539\u5FEB\u6377\u9375\u8ACB\u624B\u52D5\u8F38\u5165\uFF0C\u683C\u5F0F\u7232\uFF1A",enableLineBreakDescription:"\u958B\u5553\u5F8C\uFF0C\u8B1B\u6703\u5728\u9577\u77ED\u843D\u4E2D\u6BCF\u53E5\u8A71\u7D50\u675F\u63D2\u5165\u63DB\u884C\u7B26\uFF0C\u4EE5\u4FBF\u65BC\u95B1\u8B80","browser.brandName":"\u6C89\u6D78\u5F0F\u7FFB\u8B6F","browser.brandDescription":"\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002","browser.toggleTranslatePage":"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheWholePage":"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.toggleTranslateToThePageEndImmediately":"\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587","browser.toggleTranslateTheMainPage":"\u7FFB\u8B6F\u9801\u9762\u4E3B\u8981\u5340\u57DF/\u986F\u793A\u539F\u6587","browser.openOptionsPage":"\u6253\u958B\u8A2D\u7F6E\u9801","browser.toggleTranslationMask":"\u663E\u793A/\u9690\u85CF\u8BD1\u6587\u6A21\u7CCA\u6548\u679C","browser.translateLocalPdfFile":"\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",confirmResetConfig:"\u4F60\u78BA\u5B9A\u8981\u91CD\u8F09\u8A2D\u7F6E\u55CE?",translationLineBreakSettingTitle:"\u8BD1\u6587\u6362\u884C\u8BBE\u7F6E",smartLineBreak:"\u667A\u80FD\u6362\u884C",alwaysLineBreak:"\u603B\u662F\u6362\u884C",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u5185\u6D4B\u7684\u7279\u6027\u3002",translationLineBreakSettingDescription:"\u5BF9\u4E8E\u8BD1\u6587\u7684\u4F4D\u7F6E\uFF1A\u603B\u662F\u6362\u884C/\u667A\u80FD\u6362\u884C\uFF08\u5F53\u6BB5\u843D\u591A\u4E8E{count}\u4E2A\u5B57\u7B26\u624D\u6362\u884C\u663E\u793A\u8BD1\u6587\uFF09",tempTranslateDomainTitle:"\u4E34\u65F6\u5F00\u542F\u7F51\u7AD9\u7FFB\u8BD1\u7684\u65F6\u957F",tempTranslateDomainDescription:"\u5F53\u624B\u52A8\u7FFB\u8BD1\u67D0\u4E2A\u7F51\u9875\u7684\u65F6\u5019\uFF0C\u4E34\u65F6\u5F00\u542F\u8BE5\u7F51\u7AD9\u4E3A\u81EA\u52A8\u7FFB\u8BD1",xMinutes:"{count} \u5206\u949F",disabled:"\u505C\u7528",changelog:"\u66F4\u65B0\u65E5\u8A8C",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"\u53EF\u4EE5\u4E3A\u57DF\u540D\uFF0C\u540C\u65F6\u652F\u6301\u901A\u914D\u7B26\uFF0C\u5982\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"\u57FA\u672C\u8A2D\u7F6E",clickToExpandConfig:"\u5C55\u5F00\u5F53\u524D\u914D\u7F6E",import:"\u4ECE\u6587\u4EF6\u5BFC\u5165\u914D\u7F6E",export:"\u5BFC\u51FA\u5230\u6587\u4EF6",toggleDebug:"\u5728\u63A7\u5236\u6AAF\u6253\u5370\u8ABF\u8A66\u65E5\u8A8C","fingers.0":"\u5173\u95ED","fingers.2":"\u53CC\u6307\u89E6\u6478","fingers.3":"\u4E09\u6307\u89E6\u6478","fingers.4":"\u56DB\u6307\u89E6\u6478","fingers.5":"\u4E94\u6307\u89E6\u6478",document:"\u6587\u6A94",resetSuccess:"\u885D\u7F6E\u6240\u6709\u8A2D\u7F6E\u6210\u529F",saved:"\u6210\u529F\u5132\u5B58",successImportConfig:"\u6210\u529F\u532F\u5165\u8A2D\u5B9A",goAdvancedSettings:"\u53BB\u9032\u968E\u8A2D\u7F6E\u9801",goAdvancedInterfaceSettings:"\u53BB\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u9875\u9762",advanced:"\u9032\u968E\u8A2D\u7F6E",advancedDescription:"\u4E00\u4E9B\u96E3\u4EE5\u7406\u89E3\u7684\u8A2D\u7F6E\u9805\uFF08\u4E00\u822C\u7121\u9700\u8A2D\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8A8D\u5373\u53EF\uFF09",developer:"\u958B\u767C\u8005\u8A2D\u7F6E",donateCafe:"\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561","translate to the bottom of the page":"\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",feedback:"\u554F\u984C\u53CD\u994B",toggleTranslatePage:"\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",translateToThePageEndImmediatelyDescription:"\u958B\u5553\u5F8C\uFF0C\u5C07\u6703\u7ACB\u5373\u7FFB\u8B6F\u7DB2\u9801\u5F9E\u9802\u90E8\u5230\u5E95\u90E8\u7684\u5167\u5BB9\uFF0C\u800C\u4E0D\u662F\u908A\u770B\u908A\u8B6F\u3002\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","translate all areas of the page":"\u662F\u5426\u7FFB\u8B6F\u7DB2\u9801\u6240\u6709\u5340\u57DF",translationAreaDescription:"\u958B\u5553\u5F8C\uFF0C\u6574\u500B\u7DB2\u9801\u7684\u5340\u57DF\u90FD\u6703\u88AB\u7FFB\u8B6F\uFF0C\u800C\u4E0D\u662F\u9ED8\u8A8D\u7684\u667A\u80FD\u8B58\u5225\u4E3B\u8981\u5340\u57DF\u53BB\u7FFB\u8B6F\uFF08\u4E0D\u63A8\u85A6\u958B\u5553\uFF09","the number of characters to be translated first":"\u524D\u591A\u5C11\u500B\u5B57\u7B26\u7121\u9700\u7B49\u5F85\u6EFE\u52D5\u5230\u53EF\u8996\u5340\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8B6F\uFF1F","interface language":"\u754C\u9762\u8A9E\u8A00","display both the original text and the translation":"\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587","keyboard shortcuts":"\u9375\u76E4\u5FEB\u6377\u9375",modify:"\u4FEE\u6539\u5FEB\u6377\u9375",reset:"\u91CD\u8A2D",close:"\u95DC\u9589",homepage:"\u4E3B\u9801",more:"\u66F4\u591A",translateTheWholePage:"\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",translateTheMainPage:"\u667A\u80FD\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF","The local rules are up to date":"\u672C\u5730\u9069\u914D\u898F\u5247\u5DF2\u662F\u6700\u65B0\uFF1A","Successfully synchronized with the latest official rules:":"\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9069\u914D\u898F\u5247\uFF1A","Checking for updates":"\u6B63\u5728\u6AA2\u67E5\u66F4\u65B0","Rules are being synchronized":"\u6B63\u5728\u540C\u6B65\u9069\u914D\u898F\u5247",localVersionIsTooOld:"\u672C\u5730\u64F4\u5C55\u7248\u672C\u904E\u820A\uFF0C\u8ACB\u5347\u7D1A\u64F4\u5C55\u5230{minVersion} \u6216\u4E4B\u5F8C\u7684\u7248\u672C\u5F8C\u518D\u5617\u8A66\u540C\u6B65",badUserscriptBrowser:"\u8BE5\u6D4F\u89C8\u5668\u672A\u6B63\u786E\u5B9E\u73B0\u6CB9\u7334\u7684\u63A5\u53E3\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6<1>\u652F\u6301\u6CB9\u7334</1>\u7684\u6D4F\u89C8\u5668\u5982(Firefox Nightly \u7248\u672C)",foundNewVersion:"\u767C\u73FE\u65B0\u7248\u672C",theLocalExtensionIsUpToUpdate:"\u7576\u524D\u64F4\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C",failToSyncRules:"\u540C\u6B65\u6700\u65B0\u9069\u914D\u898F\u5247\u5931\u6557",retry:"\u9EDE\u6B64\u885D\u8A66",failedReason:"\u5931\u6557\u539F\u56E0",currentRuleVersion:"\u7576\u524D\u898F\u5247\u7248\u672C",calculating:"\u8A08\u7B97\u4E2D",unknownError:"\u672A\u77E5\u932F\u8AA4",canNotFetchRemoteRule:"\u7121\u6CD5\u7372\u53D6\u9060\u7A0B\u898F\u5247",enableAlphaSuccess:"\u5DF2\u958B\u5553Alpha\u529F\u80FD",disableAlphaSuccess:"\u5DF2\u95DC\u9589Alpha\u529F\u80FD",cacheSize:"\u7DE9\u5B58\u5927\u5C0F\uFF1A",cleaning:"\u6E05\u7406\u4E2D",cleanCache:"\u6E05\u9664\u7DE9\u5B58",options:"\u9078\u9805",about:"\u95DC\u65BC",service:"\u7FFB\u8B6F\u670D\u52D9",needAction:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",goSettings:"\u53BB\u8A2D\u7F6E",needActionForOptions:"\uFF08\u53BB\u8A2D\u7F6E\uFF09",translationEngine:"\u5F15\u64CE\u9078\u9805",sourceLanguage:"\u539F\u6587\u8A9E\u8A00",target:"\u76EE\u6A19\u8A9E\u8A00",popupSourceLanguage:"\u539F\u6587\u8A9E\u8A00",popupTarget:"\u76EE\u6A19\u8A9E\u8A00",popupService:"\u7FFB\u8B6F\u670D\u52D9",forThisSite:"\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",alwaysTranslateSomeLanguage:"\u7E3D\u662F\u7FFB\u8B6F{language}",neverTranslateSomeLanguage:"\u6C38\u4E0D\u7FFB\u8B6F{language}",alwaysTranslateSomeSite:"\u7E3D\u662F\u7FFB\u8B6F {hostname}",neverTranslateSomeSite:"\u6C38\u4E0D\u7FFB\u8B6F {hostname}",add:"\u589E\u52A0",default:"\u9ED8\u8A8D",forThisLanguage:"\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A","add url":"\u8F38\u5165URL",edit:"\u7DE8\u8F2F","translate other languages into specific language":"\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00","select translation service":"\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",language:"\u8A9E\u8A00","show-original":"\u986F\u793A\u539F\u6587",translate:"\u7FFB\u8B6F",Translated:"\u5DF2\u7FFB\u8B6F",Translating:"\u7FFB\u8B6F\u4E2D",Error:"\u932F\u8AA4",allowCacheTranslations:"\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09","translation display":"\u8B6F\u6587\u986F\u793A\u6A23\u5F0F","select diplay style":"\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",interface:"\u754C\u9762\u8A2D\u7F6E",import_export:"\u5C0E\u5165/\u5C0E\u51FA",import_export_title:"\u5C0E\u5165/\u5C0E\u51FA",syncToGoogleDrive:"\u7ACB\u5373\u4E0E Google Drive \u540C\u6B65","translationTheme.none":"\u7121","translationTheme.dashed":"\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.dotted":"\u9EDE\u72C0\u4E0B\u5283\u7DDA","translationTheme.dashedBorder":"\u865B\u7DDA\u908A\u6846","translationTheme.underline":"\u76F4\u7DDA\u4E0B\u5283\u7DDA","translationTheme.mask":"\u6A21\u7CCA\u6548\u679C","translationTheme.paper":"\u767D\u7D19\u9670\u5F71\u6548\u679C","translationTheme.dividingLine":"\u5206\u5272\u7DDA","translationTheme.highlight":"\u9AD8\u4EAE","translationTheme.marker":"\u99AC\u514B\u7B46","translationTheme.blockquote":"\u5F15\u7528\u6A23\u5F0F","translationTheme.weakening":"\u5F31\u5316","translationTheme.italic":"\u659C\u9AD4","translationTheme.bold":"\u7C97\u9AD4","translationTheme.thinDashed":"\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA","translationTheme.nativeDashed":"\u7CFB\u7EDF\u81EA\u5E26\u865A\u7EBF\u4E0B\u5212\u7EBF","translationTheme.nativeDotted":"\u7CFB\u7EDF\u81EA\u5E26\u70B9\u72B6\u4E0B\u5212\u7EBF","translationTheme.nativeUnderline":"\u7CFB\u7EDF\u81EA\u5E26\u76F4\u7EBF\u4E0B\u5212\u7EBF","translationTheme.wavy":"\u6CE2\u6D6A\u7DDA","translationServices.tencent":"\u9A30\u8A0A\u7FFB\u8B6F\u541B","translationServices.google":"\u8C37\u6B4C\u7FFB\u8B6F","translationServices.bai":"\u767E\u5EA6\uFF08Alpha\uFF09","translationServices.baidu":"\u767E\u5EA6\u7FFB\u8B6F","translationServices.aliyun":"\u963F\u91CC\u96F2\u7FFB\u8B6F","translationServices.volc":"\u706B\u5C71\u7FFB\u8B6F","translationServices.deeplx":"DeeplX(Alpha)","translationServices.bing":"\u5FC5\u61C9\u7FFB\u8B6F","translationServices.deepl":"Deepl","translationServices.wechat":"\u5FAE\u4FE1\u7FFB\u8B6F","translationServices.azure":"\u5FAE\u8EDF\u7FFB\u8B6F","translationServices.ibm":"IBM Watson","translationServices.aws":"\u4E9E\u99AC\u905C\u7FFB\u8B6F","translationServices.mock":"\u6A21\u64EC\u7FFB\u8B6F","translationServices.mock2":"\u6A21\u64EC\u7FFB\u8B6F2","translationServices.caiyun":"\u5F69\u96F2\u5C0F\u8B6F","translationServices.volcAlpha":"\u706B\u5C71\u7FFB\u8B6F(Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"\u6709\u9053\u7FFB\u8B6F","translationServices.transmart":"\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F","translationServices.niu":"\u5C0F\u725B\u7FFB\u8B6F","translationServices.d":"Deepl(Alpha)","translate title":"\u7FFB\u8B6F\u9801\u9762\u6A19\u984C","always languages":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",neverTranslateLanguagesLabel:"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",neverTranslateTheFollowingLanguagesDescription:"\u5F53\u9875\u9762\u4E2D\u67D0\u4E00\u6BB5\u843D\u7684\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u8DF3\u8FC7\u7FFB\u8BD1\u8BE5\u6BB5\u843D",enableUserscriptPagePopup:"\u603B\u662F\u5728\u9875\u9762\u4E0A\u5C55\u793A Popup \u6D6E\u7A97",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","always sites":"\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740","always translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00","never sites":"\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740","never translate the following sites":"\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F","please refer to":"\u9700\u8981\u586B\u5BEB\u5BC6\u9470\u5F8C\u624D\u53EF\u7528\uFF0C\u8A73\u60C5\u53C3\u8003",KeyAndConfigurationTutorial:"\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",useAboveStyleForTheseSites:"\u7576\u524D\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\u70BA\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8A2D\u7F6E\u70BA\u8B93\u67D0\u4E9B\u7DB2\u7AD9\u4F7F\u7528\u8A72\u6A23\u5F0F\uFF0C\u9EDE\u64CA\u53F3\u908A\u7684\u6309\u9215\u6DFB\u52A0\u5F8C\uFF0C\u518D\u5207\u63DB\u5230\u53E6\u4E00\u7A2E\u9ED8\u8A8D\u8B6F\u6587\u6A23\u5F0F\uFF0C\u9019\u6A23\u5373\u53EF\u5BE6\u73FE\u4E0D\u540C\u7DB2\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8B6F\u6587\u6A23\u5F0F\u3002",currentUrl:"\u7576\u524D\u7DB2\u5740",confirm:"\u5132\u5B58",cancel:"\u53D6\u6D88",delete:"\u522A\u9664","languages.auto":"\u81EA\u52D5\u5075\u6E2C\u8A9E\u8A00",isShowContextMenu:"\u5275\u5EFA\u53F3\u9375\u83DC\u55AE",syncToCloud:"\u540C\u6B65\u5230\u96F2\u7AEF",syncToCloudDescription:"\u540C\u6B65\u65F6\u4F1A\u6BD4\u8F83\u672C\u5730\u548C\u4E91\u7AEF\u914D\u7F6E\u7684\u6700\u540E\u4FEE\u6539\u65F6\u95F4\uFF0C\u4EE5\u6700\u540E\u4FEE\u6539\u65F6\u95F4\u4E3A\u51C6\u3002",authFail:"\u6388\u6B0A\u5931\u6557",syncTitle:"\u8ACB\u9078\u64C7\u6587\u4EF6\u64CD\u4F5C",import_hint:"\u5C0E\u5165",upload:"\u4E0A\u50B3",revokeAuth:"\u64A4\u92B7\u6388\u6B0A",uploadFail:"\u4E0A\u50B3\u5931\u6557",download:"\u4E0B\u8F09",importSuccess:"\u5C0E\u5165\u6210\u529F",importFail:"\u5C0E\u5165\u5931\u6557",deleteFail:"\u522A\u9664\u5931\u6557",backupToCloud:"\u624B\u52D5\u7BA1\u7406\u5099\u4EFD\u6587\u4EF6",create_new_backup:"\u65B0\u589E\u5099\u4EFD\u7BC0\u9EDE",maxBackupFiles:"\u6700\u591A\u53EF\u4EE5\u5099\u4EFD{count}\u500B\u4E0D\u540C\u7684\u7BC0\u9EDE, \u8ACB\u522A\u9664\u4E0D\u9700\u8981\u7684\u7BC0\u9EDE",backupToCloudDescription:"\u624B\u52D5\u4E0A\u50B3\u6216\u6062\u5FA9\u5099\u4EFD\u6587\u4EF6\uFF0C\u6700\u591A\u5141\u8A313\u500B\u4E0D\u540C\u7684\u5099\u4EFD",successSyncConfig:"\u6210\u529F\u8207\u96F2\u7AEF\u4FDD\u6301\u540C\u6B65",syncFail:"\u540C\u6B65\u5931\u6557",updatedAt:"\u66F4\u65B0\u65BC {date}",lastSyncedAt:"\u4E0A\u6B21\u6AA2\u67E5\u65BC {date}",downloadFail:"\u4E0B\u8F09\u5931\u6557",clickToDownload:"\u9EDE\u64CA\u4E0B\u8F09",aboutLabel:"\u95DC\u65BC - \u53CD\u994B - \u8D0A\u52A9","browser.openAboutPage":"\u95DC\u65BC/\u53CD\u994B/\u8D0A\u52A9",aboutIntro:"\u8A72\u64F4\u5C55\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u5E0C\u671B\u6211\u5011\u90FD\u80FD\u66F4\u52A0\u5BB9\u6613\u4E14\u6109\u6085\u5730\u7372\u53D6\u4E92\u806F\u7DB2\u4E0A\u5DE8\u5927\u7684\u5916\u8A9E\u4FE1\u606F \u2764\uFE0F <br/><br/>\u611F\u8B1D\u9019\u4E9B<1>\u8D0A\u52A9\u8005\u5011</1>, \u7531\u65BC\u4ED6/\u5979\u5011\u7684\u652F\u6301\uFF0C\u66F4\u591A\u7684\u4EBA\u53EF\u4EE5\u5B8C\u5168\u514D\u8CBB\u5730\u4F7F\u7528\u9019\u500B\u5DE5\u5177\u3002\u5982\u679C\u6709\u9918\u529B\uFF0C\u4F60\u53EF\u4EE5<2>\u9EDE\u64CA\u9019\u88E1\u8D0A\u52A9</2> \u6211\u7684\u5DE5\u4F5C\uFF0C\u4F60\u9084\u53EF\u4EE5\u95DC\u6CE8\u6211\u7684<3>\u63A8\u7279</3>\u548C<4>Telegram \u983B\u9053</4>\u7372\u53D6\u6700\u65B0\u66F4\u65B0\u3002",projectHomepage:"\u9805\u76EE\u4E3B\u9801",joinTelegramGroup:"\u52A0\u5165 Telegram \u7FA4\u53C3\u8207\u529F\u80FD\u8A0E\u8AD6",feedbackAndJoin:"\u554F\u984C\u53CD\u994B/\u52A0\u7FA4",autoSync:"\u81EA\u52D5\u5B9A\u6642\u540C\u6B65",loadingThemeTitle:"Loading \u6A23\u5F0F",loadingThemeDescription:"\u8A2D\u7F6E\u7B49\u5F85\u8B6F\u6587\u52A0\u8F09\u6642\u7684\u6A23\u5F0F","loadingTheme.spinner":"\u8F49\u5708\u52D5\u756B Spinner","loadingTheme.text":"\u975C\u614B\u6587\u5B57 ... ","loadingTheme.none":"\u4E0D\u986F\u793A",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863"};var wn={lineBreakMaxTextCount:"Maximum number of characters allowed per sentence after line break","translate-pdf":"Click to translate PDF","translate-firefox-local-pdf":"Click to upload Pdf",enableLineBreak:"Whether to turn on automatic line wrapping for long paragraphs",sponsorLabel:"Sponsoring developers from $1 (monthly or one-time)",help:"Help",browserShortcutsNoteForFirefox:`To modify the shortcut key in Firefox browser, you need to open the extension management page 'about: addons', then click "Settings", and then click "Management shortcut key" to set it`,browserShortcutsNoteForChrome:"To modify the shortcut key in Chrome browser, you need to open the extension management page` chrome://extensions/shortcuts `) Settings, click the button below to jump to the shortcut key management page.",browserShortcutsSucks:"Please enter the shortcut key manually in the format:",enableLineBreakDescription:"After opening, a line break will be inserted at the end of each sentence in a long paragraph for easy reading","browser.brandName":"Immersive Translate","browser.brandDescription":"Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.","browser.toggleTranslatePage":"Toggle translate webpage ","browser.toggleTranslateTheWholePage":"Toggle translate the whole page","browser.toggleTranslateToThePageEndImmediately":"Toggle translate to the bottom of the page immediately","browser.toggleTranslateTheMainPage":"Toggle translate the main page","browser.openOptionsPage":"Open Settings Page","browser.toggleTranslationMask":"Toggle translation mask style","browser.translateLocalPdfFile":"Translate local PDF files",confirmResetConfig:"Are you sure you want to reset the settings?",translationLineBreakSettingTitle:"Line break setting",smartLineBreak:"Smart Wrap",alwaysLineBreak:"Always Wrap",toggleBeta:"\u5F00\u542F Beta \u6D4B\u8BD5\u7279\u6027",betaDescription:"\u5F00\u542F\u540E\u4F1A\u542F\u7528\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4EE5\u53CA\u8FD8\u5728\u6D4B\u8BD5\u4E2D\u7684\u7FFB\u8BD1\u670D\u52A1, \u53EF\u4EE5<1>\u52A0Telegram \u7FA4\u7EC4</1>\u4E86\u89E3\u66F4\u591A\u5185\u6D4B\u7684\u7279\u6027\u3002",translationLineBreakSettingDescription:"The position of the translation\uFF1AAlways wrap / smart wrap (the translation is displayed only when the paragraph is more than {count} characters)",tempTranslateDomainTitle:"Open the translation time temporarily",tempTranslateDomainDescription:"When a page is translated manually, turn it temporarily on as automatic translation",xMinutes:"{count} minutes",disabled:"Disable",changelog:"Change Log",toggleTranslatePageWhenThreeFingersOnTheScreen:"\u4E09\u6307\u540C\u65F6\u89E6\u6478\u5C4F\u5E55\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",addUrlDescription:"The domain name is available and wildcard is supported e.g.\uFF1A*.google.com, google.com/mail/*, https://www.google.com/*",general:"General",clickToExpandConfig:"Expand current configuration",import:"Import configuration from file",export:"Export to file",toggleDebug:"Print debug logs on the console","fingers.0":"Close","fingers.2":"Two-finger touch","fingers.3":"Three-finger touch","fingers.4":"Four-finger touch","fingers.5":"Five-finger touch",document:"Document",resetSuccess:"All settings reset successful",saved:"Saved successfully",successImportConfig:"Configuration imported successfully",goAdvancedSettings:"Go to Advanced Settings Page",goAdvancedInterfaceSettings:"Go to Advanced Custom Settings Page",advanced:"Advanced",advancedDescription:"Some unintelligible settings (normally set without setting to default)",developer:"Developer settings",donateCafe:"Buy Me a Coffee","translate to the bottom of the page":"Whether translate to the bottom of the page once you open the page?",feedback:"Feedback",toggleTranslatePage:"Toggle Translate",translateToThePageEndImmediatelyDescription:"When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)","translate all areas of the page":"Whether to translate all areas of the web page",translationAreaDescription:"When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)","the number of characters to be translated first":"How many characters are translated directly without waiting to scroll to the visible area for the first few characters?","interface language":"Interface language","display both the original text and the translation":"Display both the original text and the translation","keyboard shortcuts":"Keyboard shortcuts",modify:"Edit",reset:"Reset",close:"Close",homepage:"Home Page",more:"More",translateTheWholePage:"Translate the whole page area (different from only the main area)",changeToTranslateTheWholePage:"\u5207\u6362\u4E3A\u7FFB\u8BD1\u9875\u9762\u6240\u6709\u533A\u57DF",changeToTranslateTheMainPage:"\u5207\u6362\u4E3A\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",translateToThePageEndImmediately:"Immediately translate to the bottom (different from translating the current visible area)",translateTheMainPage:"Main areas of intelligent translation","The local rules are up to date":"Local  rules are up to date:","Successfully synchronized with the latest official rules:":"Successfully synced latest official rules:","Checking for updates":"Checking for update","Rules are being synchronized":"Syncing official rules",localVersionIsTooOld:"The local extension is too old. Please upgrade to {minVersion} or then try syncing again",badUserscriptBrowser:"This browser does not correctly implement the interface of Tampermonkey. Please use other < 1 > browsers that support Tampermonkey < / 1 >, such as (Firefox Nightly version)",foundNewVersion:"New version available",theLocalExtensionIsUpToUpdate:"The current extension version is up to date.",failToSyncRules:"Failed to sync latest adaptive rules",retry:"Retry",failedReason:"Failure reason",currentRuleVersion:"Current Rule Version",calculating:"Calculating",unknownError:"Unknown Error",canNotFetchRemoteRule:"Unable to fetch remote rule",enableAlphaSuccess:"Alpha enabled successfully",disableAlphaSuccess:"Alpha has been disabled",cacheSize:"Cache size:",cleaning:"Cleaning",cleanCache:"Clear cache",options:"Options",about:"About",service:"Translation Service",needAction:"(to set up)",goSettings:"to set up",needActionForOptions:"(need to set)",translationEngine:"Engine Options",sourceLanguage:"Original language",target:"Target Language",popupSourceLanguage:"Source",popupTarget:"Target",popupService:"Service",forThisSite:"For This Site:",alwaysTranslateSomeLanguage:"Always translate {language}",neverTranslateSomeLanguage:"Never translate {language}",alwaysTranslateSomeSite:"Always translate {hostname}",neverTranslateSomeSite:"Never translate {hostname}",add:"Add",default:"Default",forThisLanguage:"For This Language:","add url":"Add URL",edit:"Edit","translate other languages into specific language":"Translate other languages into the language you set","select translation service":"Select a translation service",language:"Language","show-original":"Show Original",translate:"Translate",Translated:"Translated",Translating:"Translating",Error:"Error",allowCacheTranslations:"Enable local translation caching (reduce translation requests for duplicate paragraphs)","translation display":"Translation display style","select diplay style":"Please refer to the following examples",interface:"Interface Settings",import_export:"Import/Export",import_export_title:"Import/Export Configuration",syncToGoogleDrive:"Sync Now with Google Drive","translationTheme.none":"None","translationTheme.dashed":"Dashed underline","translationTheme.dotted":"Dotted Underline","translationTheme.dashedBorder":"Dashed Border","translationTheme.underline":"Straight underline","translationTheme.mask":"Blur effect","translationTheme.paper":"White paper shadow effect","translationTheme.dividingLine":"Dividing line","translationTheme.highlight":"Highlight","translationTheme.marker":"Maker","translationTheme.blockquote":"quote style","translationTheme.weakening":"Weakening","translationTheme.italic":"Italic","translationTheme.bold":"Bold","translationTheme.thinDashed":"Thin dashed underline","translationTheme.nativeDashed":"System Dash Underline","translationTheme.nativeDotted":"System Dotted Underline","translationTheme.nativeUnderline":"System Straight Line Underline","translationTheme.wavy":"Squiggle","translationServices.tencent":"Tencent Translator","translationServices.google":"Google Translate","translationServices.bai":"Baidu (Alpha)","translationServices.baidu":"Baidu translation","translationServices.aliyun":"Aliyun Translator","translationServices.volc":"Volcano Translation","translationServices.deeplx":"DeeplX (Alpha)","translationServices.bing":"Bing translate","translationServices.deepl":"DeepL","translationServices.wechat":"Wechat translation","translationServices.azure":"Microsoft Translator","translationServices.ibm":"IBM Watson","translationServices.aws":"Amazon Translate","translationServices.mock":"Mock translation","translationServices.mock2":"Mock Translation2","translationServices.caiyun":"Caiyun Translation","translationServices.volcAlpha":"Volcano Translation (Alpha)","translationServices.openl":"OpenL","translationServices.youdao":"Youdao Translation","translationServices.transmart":"Tencent Smart Translation","translationServices.niu":"Niu Translation","translationServices.d":"DeeplX (Alpha)","translate title":"Translate page title","always languages":"Always translate the following languages",neverTranslateLanguagesLabel:"Never Translated Languages",neverTranslateTheFollowingLanguagesDescription:"Automatically skip translating the paragraph when languages are the followings",enableUserscriptPagePopup:"Always show Popup windows on the page",enableUserscriptPagePopupDescription:"\u5173\u95ED\u6D6E\u7A97\u540E\uFF0C\u53EF\u4EE5\u7528\u5FEB\u6377\u952E/\u4E09\u6307\u89E6\u5C4F\u5524\u8D77\u3002\u4E3A\u9632\u6B62\u4E0D\u614E\u5173\u95ED\u8BE5\u9009\u9879\u540E\u627E\u4E0D\u5230\u6D6E\u7A97\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u6536\u85CF\u672C\u8BBE\u7F6E\u9875","always translate the following languages":"The following languages will always be translated","always sites":"Always translate the following sites","always translate the following sites":"The following sites will always be translated","never sites":"Never translate the following sites","never translate the following sites":"The following sites will never be translated","please refer to":"It can only be used after filling in the key. For details, please refer to",KeyAndConfigurationTutorial:"Key Application and Configuration Tutorial",useAboveStyleForTheseSites:"The current default translation style is \u300C{theme}\u300D, you can also set it to let some websites use this style, click the button on the right to add it, and then switch to another default translation style, so that you can use different translation styles for different websites.",currentUrl:"Current URL",confirm:"Save",cancel:"Cancel",delete:"Delete","languages.auto":"Detect Language",isShowContextMenu:"Create right button menu",syncToCloud:"Sync to cloud",syncToCloudDescription:"When syncing it will compare the last modification time of the local and cloud configurations, whichever is the last.",authFail:"Authorization Failed",syncTitle:"Please select a file operation",import_hint:"Import",upload:"Upload",revokeAuth:"Revoke Authorization",uploadFail:"Upload Failed",download:"Download",importSuccess:"Upload Success",importFail:"Import Failed",deleteFail:"Delete Failed",backupToCloud:"Manage backup files manually",create_new_backup:"Add backup node",maxBackupFiles:"Up to{count}different nodes can be backed up. Please delete unneeded nodes",backupToCloudDescription:"Upload or restore backup files manually, up to 3 different backups",successSyncConfig:"Successfully synced with cloud",syncFail:"Synchronization failed",updatedAt:"Updated at {date}",lastSyncedAt:"Last checked at {date}",downloadFail:"Download failed",clickToDownload:"Click to download",aboutLabel:"About - Feedback - Sponsor","browser.openAboutPage":"About / Feedback/Sponsor",aboutIntro:`This extension is completely free. I hope we can get foreign information on the Internet more easily and happily. Thanks to these <1>sponsors</1>, more people can use this tool completely free of charge because of their support. 
If you have spare time, you can click here to <2>sponsor</2> my work, and you can follow my <3>Twitter</3> and <4>Telegram channels </4> for the latest updates.`,projectHomepage:"Project Homepage",joinTelegramGroup:"Join Telegram group for feature discussion",feedbackAndJoin:"Issue feedback/group",autoSync:"Auto-Time Sync",loadingThemeTitle:"Loading Style",loadingThemeDescription:"Set the style of waiting for the translation to load","loadingTheme.spinner":"Animate Spinner","loadingTheme.text":"Static Text... ","loadingTheme.none":"Disabled",developerDescription:"\u53EF\u4EE5\u70B9\u51FB<1>\u8FD9\u91CC</1>\u67E5\u770B\u9AD8\u7EA7\u81EA\u5B9A\u4E49\u76F8\u5173\u7684\u6587\u6863"};var ni=[{code:"zh-CN",messages:yn},{code:"zh-TW",messages:xn},{code:"en",messages:wn}],Ge={};for(let e of ni)Ge[e.code]=e.messages;var $e="Immersive Translate",de="immersive-translate",Lt="pdf/index.html",Z="immersiveTranslate",vn="759003177173-mfm15s5nd77vfmo6e7lanof1emnanf0e.apps.googleusercontent.com",Pt=Z+"GoogleAccessToken",Dc=Z+"AuthFlow",Mt="immersive-translate-config-latest.json",Oc=Z+"AuthState",Ic=Z+"IframeMessage",Nc=`${Z}Container`,$c=`${Z}SpecifiedContainer`,Rt="buildinConfig",ft="localConfig",nr="openOptionsPage";var or="translateLocalPdfFile",Uc=`${Z}PageTranslatedStatus`,Bc=`${Z}PageUrlChanged`,jc=`${Z}ReceiveCommand`,Fc=`${Z}PopupReceiveMessage`,Tn="immersive-translate.owenyoung.com",zc=`https://${Tn}/`,Hc=`https://${Tn}/buildin_config.json`,Wc=`${Z}Mark`;var Vc=`${Z}Root`,qc=`data-${de}-effect`,Kc=`${Z}TranslatedMark`,Gc=`${Z}ParagraphId`,Yc=`${Z}AtomicBlockMark`,Jc=`${Z}ExcludeMark`,Xc=`data-${de}-exclude-mark`,Qc=`${Z}StayOriginalMark`,Zc=`${Z}PreWhitespaceMark`,eu=`${Z}InlineMark`,tu=`${Z}BlockMark`,ru=`${Z}Left`,nu=`${Z}Right`,ou=`${Z}Width`,au=`${Z}Height`,iu=`${Z}Top`,su=`${Z}FontSize`;var lu=`${Z}GlobalStyleMark`;var cu=`${de}-target-wrapper`,uu=`${de}-pdf-target-container`,du=`${de}-target-inner`,gu=`${de}-source-wrapper`,fu=`${de}-target-translation-block-wrapper`,pu=`${de}-root-translation-theme`,mu=`${Z}RootTranslationTheme`,hu=`${de}-target-translation-vertical-block-wrapper`,bu=`${de}-target-translation-pdf-block-wrapper`,yu=`${de}-target-translation-pre-whitespace`,xu=`${de}-target-translation-inline-wrapper`;var pt=["auto","en","zh-CN","zh-TW","ja","af","am","ar","az","be","bg","bn","bs","ca","ceb","co","cs","cy","da","de","el","eo","es","et","eu","fa","fi","fil","fj","fr","fy","ga","gd","gl","gu","ha","haw","he","hi","hmn","hr","ht","hu","hy","id","ig","is","it","jw","ka","kk","km","kn","ko","ku","ky","la","lb","lo","lt","lv","mg","mi","mk","ml","mn","mr","ms","mt","mww","my","ne","nl","no","ny","otq","pa","pl","ps","pt","ro","ru","sd","si","sk","sl","sm","sn","so","sq","sr","sr-Cyrl","sr-Latn","st","su","sv","sw","ta","te","tg","th","tlh","tlh-Qaak","to","tr","ty","ug","uk","ur","uz","vi","wyw","xh","yi","yo","yua","yue","zu"];var Dt="zh-CN";function tt(e){if(typeof e!="string")return"auto";let t=e.toLowerCase();if(t==="zh"||t==="zh-hans")return"zh-CN";if(t==="zh-hant"||t==="zh-hk")return"zh-TW";if(t==="iw")return"he";if(t==="jv")return"jw";let r=pt.map(o=>o.toLowerCase()),n=r.indexOf(t);if(n===-1)if(t.indexOf("-")>=0){t=t.split("-")[0];let o=r.indexOf(t);return o===-1?"auto":pt[o]}else return"auto";else return pt[n]}function oi(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():b}var K=oi();function An(){return K.IMMERSIVE_TRANSLATE_USERSCRIPT==="1"}function Sn(){if(typeof globalThis.immersiveTranslateBrowserAPI<"u"&&globalThis.immersiveTranslateBrowserAPI.runtime&&globalThis.immersiveTranslateBrowserAPI.runtime.getManifest){let e=globalThis.immersiveTranslateBrowserAPI.runtime.getManifest();return!!(e&&e._isUserscript)}else return!1}var ar={minVersion:"0.0.20",immediateTranslationTextCount:5e3,interval:36e5,beta:!1,cache:!0,donateUrl:"https://immersive-translate.owenyoung.com/donate.html",feedbackUrl:"https://github.com/immersive-translate/immersive-translate/issues",isShowContextMenu:!0,loadingTheme:"spinner",canary:!1,translationServices:{volcAlpha:{placeholderDelimiters:["{","}"]},volc:{placeholderDelimiters:["{","}"]},tencent:{placeholderDelimiters:["{","}"]},transmart:{placeholderDelimiters:["#","#"]},baidu:{placeholderDelimiters:["#","#"]},caiyun:{placeholderDelimiters:["{","}"]},youdao:{placeholderDelimiters:["\u{1F6A0}","\u{1F6A0}"]}},shortcuts:{toggleTranslatePage:"Alt+A",toggleTranslateTheWholePage:"Alt+W",toggleTranslateToThePageEndImmediately:"Alt+S",toggleTranslationMask:"Alt+D"},tempTranslateDomainMinutes:0,immediateTranslationPattern:{matches:["www.tumblr.com","twitter.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","mail.google.com","discord.com","web.telegram.org","*.slack.com","https://old.reddit.com/","https://www.reddit.com/r/popular/","https://www.reddit.com/","https://www.reddit.com/hot/","https://www.reddit.com/new/","https://www.reddit.com/top/","https://www.reddit.com/.compact"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},translationParagraphLanguagePattern:{matches:["www.reddit.com","old.reddit.com","twitter.com","www.tumblr.com","*.twitter.com","medium.com","*.medium.com","github.com","gist.github.com","www.facebook.com","www.youtube.com","m.youtube.com","read.readwise.io","www.inoreader.com","mail.google.com","google.com","discord.com","web.telegram.org","*.slack.com"],excludeMatches:[],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],selectorExcludeMatches:[]},sourceLanguageUrlPattern:{},generalRule:{_comment:"",normalizeBody:"",languageDetectMinTextCount:50,wrapperPrefix:"smart",wrapperSuffix:"smart",isPdf:!1,isTransformPreTagNewLine:!1,urlChangeDelay:20,translationBlockStyle:"",isShowUserscriptPagePopup:!0,observeUrlChange:!0,paragraphMinTextCount:8,paragraphMinWordCount:2,shadowRootSelectors:[],blockMinTextCount:32,blockMinWordCount:5,containerMinTextCount:18,lineBreakMaxTextCount:0,globalAttributes:{},globalStyles:{".sr-only":"display:none"},selectors:[],preWhitespaceDetectedTags:["DIV","SPAN"],stayOriginalSelectors:[],additionalSelectors:["h1","section h2","section h3","section h4","main h2","main h3","main h4",".article-title",".article-subtitle",".article_title",".article_subtitle",".article__title",".articleTitle",".Article__content",".title",".abstract",".titleLink",".summary",".content",".headline",".page-content"],atomicBlockTags:[],excludeSelectors:[],additionalExcludeSelectors:[".social-share",".breadcrumbs",".post__footer",".btn",".reference-citations",".share-nav",".o-share","[data-toolbar=share]","rp","rt"],translationClasses:[],atomicBlockSelectors:[],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META","ASIDE","FOOTER","MATH"],metaTags:["META","SCRIPT","STYLE","NOSCRIPT"],additionalExcludeTags:[],stayOriginalTags:["CODE","TT","IMG","SUP","SUB"],additionalStayOriginalTags:[],inlineTags:["A","ABBR","FONT","ACRONYM","B","INS","DEL","RUBY","RP","RB","BDO","MARK","BIG","RT","NOBR","CITE","DFN","EM","I","LABEL","Q","S","SMALL","SPAN","STRONG","SUB","SUP","U","KBD","TT","VAR","IMG","CODE","SCRIPT","STYLE","LINK","TIME","META","WBR"],additionalInlineTags:[],extraInlineSelectors:[],additionalInlineSelectors:[],extraBlockSelectors:["turbo-frame","readme-toc"],allBlockTags:["HGROUP","CONTENT","ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","CANVAS","DD","DL","DT","FIELDSET","FIGCAPTION","FIGURE","FOOTER","HEADER","FORM","HR","MAIN","SUMMARY","NAV","OL","NOSCRIPT","PRE","SECTION","TABLE","TFOOT","UL","VIDEO","P","DIV","H1","H2","H3","H4","H5","H6","UL","LI","OL","BR","PICTURE","TBODY","TR","TD","TH","SOURCE","C-WIZ","BUTTON","TURBO-FRAME","README-TOC"],pdfNewParagraphLineHeight:2.4,pdfNewParagraphIndent:1.2,pdfNewParagraphIndentRightIndentPx:130,fingerCountToToggleTranslagePageWhenTouching:4,fingerCountToToggleTranslationMaskWhenTouching:0},rules:[{matches:["moz-extension://*/pdf/index.html*"],isPdf:!0,wrapperPrefix:"",wrapperSuffix:"",urlChangeDelay:0,selectors:[".textLayer"],excludeSelectors:[".annotationLayer"],globalStyles:{"div.page":"width: 98%;",".textLayer":"overflow:visible;opacity: 1;"}},{matches:["mail.jabber.org","antirez.com"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.wikipedia.org",excludeSelectors:[".mw-editsection",".mw-cite-backlink","#mw-panel-toc"],stayOriginalSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"],extraInlineSelectors:[".chemf",".mwe-math-element","[role=math]",".nowrap"]},{matches:["twitter.com","mobile.twitter.com","tweetdeck.twitter.com","https://platform.twitter.com/embed*"],selectors:['[data-testid="tweetText"]',".tweet-text",".js-quoted-tweet-text","[data-testid='card.layoutSmall.detail'] > div:nth-child(2)","[data-testid='developerBuiltCardContainer'] > div:nth-child(2)","[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"],extraInlineSelectors:['[data-testid="tweetText"] div']},{matches:["stackoverflow.com","*.stackexchange.com","superuser.com","askubuntu.com","serverfault.com"],additionalSelectors:[".comment-copy"]},{matches:"developer.apple.com/documentation/*",selectors:[".container","h3.title"]},{matches:"news.ycombinator.com",selectors:[".titleline > a",".comment > .commtext",".toptext","a.hn-item-title",".hn-comment-text",".hn-story-title"],excludeSelectors:[".reply"]},{matches:["*.quora.com","quora.com"],additionalSelectors:[".puppeteer_test_question_title",".puppeteer_test_answer_content",".q-text"],globalStyles:{".qu-truncateLines--3":"-webkit-line-clamp: unset;"}},{matches:["old.reddit.com/*/.compact","old.reddit.com/.compact","www.reddit.com/*/.compact","www.reddit.com/.compact"],selectors:[".title > a",".usertext-body"],detectParagraphLanguage:!0},{matches:"old.reddit.com",selectors:["p.title > a","[role=main] .md-container"],detectParagraphLanguage:!0},{matches:"www.reddit.com",selectors:["h1",".PostHeader__post-title-line","[data-click-id=body] h3","[data-click-id=background] h3","[data-testid=comment]","[data-adclicklocation='title']","[data-adclicklocation=media]",".PostContent",".Comment__body","faceplate-batch .md"],detectParagraphLanguage:!0},{matches:"www.reuters.com/",excludeSelectors:["header"]},{matches:"github.com",selectors:[".markdown-title",".markdown-body",".Layout-sidebar p","div > span.search-match","li.repo-list-item p","#responsive-meta-container p"],excludeSelectors:[".css-truncate","[data-test-selector='commit-tease-commit-message']","div.blob-wrapper-embedded"],detectParagraphLanguage:!0},{matches:"www.facebook.com",selectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],atomicBlockSelectors:["div[dir=auto][style]","div[dir=auto][class]","span[lang]"],insertPosition:"afterend",preWhitespaceDetectedTags:["DIV","SPAN"],extraBlockSelectors:["span.x1vvkbs"],excludeSelectors:["[role=button]"],translationClasses:["immersive-translate-text"],detectParagraphLanguage:!0},{matches:"m.youtube.com",selectors:[".comment-text"],atomicBlockSelectors:[".comment-text"],globalStyles:{".comment-text":"max-height:unset;"}},{matches:"www.youtube.com",selectors:["yt-formatted-string[slot=content].ytd-comment-renderer","yt-formatted-string.ytd-video-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title","a#video-title"],wrapperPrefix:"",wrapperSuffix:"",globalStyles:{"ytd-expander.ytd-comment-renderer":"--ytd-expander-max-lines: 1000;","h1.ytd-watch-metadata":"-webkit-line-clamp: unset;max-height: unset;","yt-formatted-string#video-title":"-webkit-line-clamp: unset;max-height: unset;","#video-title":"-webkit-line-clamp: unset;max-height: unset;"},urlChangeDelay:2e3,atomicBlockSelectors:["yt-formatted-string[slot=content].ytd-comment-renderer","h1 > yt-formatted-string.ytd-watch-metadata","yt-formatted-string#video-title","span#video-title"],excludeSelectors:["[class^='lln-']"],extraBlockSelector:[".ytd-transcript-segment-renderer"],detectParagraphLanguage:!0},{matches:"1paragraph.app",selectors:"#book"},{matches:["*.substack.com","newsletter.rootsofprogress.org"],selectors:[".post-preview-title",".post-preview-description",".post",".comment-body"],excludeSelectors:[".captioned-button-wrap",".subscription-widget-wrap",".tweet-header",".tweet-link-bottom",".expanded-link",".meta-subheader"],extraBlockSelectors:[".tweet-link-top",".tweet-link-bottom",".expanded-link"]},{matches:["seekingalpha.com/article/*","seekingalpha.com/news/*"],selectors:["[data-test-id=card-container]"],excludeSelectors:["[data-test-id=post-page-meta]","header > div:first-child"]},{matches:"hn.algolia.com",selectors:[".Story_title > a:first-child",".Story_comment > span"]},{matches:"read.readwise.io",selectors:['div[class^="_titleRow_"]','div[class^="_description_"]',"#document-text-content"],detectParagraphLanguage:!0},{matches:["www.inoreader.com","*.inoreader.com"],selectors:[".article_header_title",".article_title_link",".article_content",".article_magazine_title_link"],observeUrlChange:!1,globalStyles:{".article_title_link":"-webkit-line-clamp: unset;max-height: unset;"}},{matches:["scholar.google.com"],wrapperPrefix:`
`,selectors:["h3 a[data-clk]","div.gs_rs"],atomicBlockSelectors:[".gs_rs","h3 a[data-clk]"]},{matches:"mail.google.com",selectors:["h2[data-thread-perm-id]","span[data-thread-id]","div[data-message-id] div[class='']"],detectParagraphLanguage:!0},{matches:"www.producthunt.com",selectors:["h2","div[class^='styles_htmlText__']","[class^='styles_tagline']","a[href^='/discussions/'].fontWeight-600","button[class^='styles_textButton'] > div > span"],excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","INPUT","LABEL","IMG","SUB","SUP","BR","CODE","KBD","WBR","TT"]},{matches:"*.gitbook.io",additionalSelectors:["main"],_comment:"https://midjourney.gitbook.io/docs/user-manual"},{matches:"arxiv.org",additionalSelectors:["h1","blockquote.abstract"]},{matches:"https://discord.com/channels/*",selectors:["li[id^=chat-messages] div[id^=message-content]","h3[data-text-variant='heading-lg/semibold']","section[aria-label='Search Results'] div[id^=message-content]"],excludeSelectors:["div[class^='repliedTextContent']"],globalStyles:{"div[class^=headerText]":"max-height: unset;","h3[data-text-variant='heading-lg/semibold']":"-webkit-line-clamp: none;"},detectParagraphLanguage:!0,wrapperPrefix:"<br />",wrapperSuffix:""},{matches:"web.telegram.org/z/*",selectors:[".text-content"],detectParagraphLanguage:!0},{matches:["web.telegram.org/k/*","web.telegram.org/k/"],selectors:[".message"],detectParagraphLanguage:!0},{matches:"gist.github.com",selectors:[".markdown-body",".readme"],detectParagraphLanguage:!0},{matches:"lobste.rs",selectors:[".u-repost-of",".comment_text"]},{matches:"*.slack.com",selectors:[".p-rich_text_section"],detectParagraphLanguage:!0},{matches:"1paragraph.app",additionalSelectors:["#book"]},{matches:"www.google.*/search*",detectParagraphLanguage:!0,excludeSelectors:["a h3 + div","div#sfooter"],wrapperSuffix:"",globalStyles:{"div[data-content-feature='1'] > div":"-webkit-line-clamp: unset;max-height: unset;","div[style='-webkit-line-clamp:2']":"-webkit-line-clamp: unset;max-height: unset;"},extraBlockSelectors:[".MUFPAc"]},{matches:"lowendtalk.com",selectors:["[role=heading]","h1",".userContent"]},{matches:"www.linkedin.com/jobs/*",selectors:["#job-details > span"]},{matches:"www.linkedin.com",addtionalSelectors:["span.break-words > span > span[dir=ltr]"]},{matches:"www.indiehackers.com",selectors:[".content","h1",".feed-item__title-link"]},{matches:"libreddit.de",selectors:["h2.post_title",".comment_body > .md"]},{matches:["notion.site","www.notion.so"],selectors:["div[data-block-id]"]},{matches:"www.newyorker.com",additionalSelectors:["h1","[data-testid=SummaryItemHed]"]},{matches:"start.me",selectors:[".rss-article__title",".rss-articles-list__article-link",".rss-showcase__title",".rss-showcase__text"]},{matches:"www.scmp.com",additionalSelectors:[".info__subHeadline",".section-content h2"]},{matches:"www.lesswrong.com",extraBlockSelectors:["span.commentOnSelection"]},{matches:["mastodon.social","mastodon.online","kolektiva.social","indieweb.social","mastodon.world","infosec.exchange"],selectorMatches:["div#mastodon"],selectors:["div.status__content__text"],detectLanguage:!0},{matches:"www.cnbc.com",additionalSelectors:["div.RenderKeyPoints-list"]},{matches:"app.daily.dev",selectors:["h1",".typo-body","article h3","[class^=markdown_markdown]"],globalStyles:{".line-clamp-3":"-webkit-line-clamp: unset"}},{matches:"www.aljazeera.com",addtionalSelectors:["h1",".article__subhead"]},{matches:["*.pornhub.com","pornhub.com"],selectors:[".title >a",".title > span",".thumbnailTitle",".commentMessage > span"],detectParagraphLanguage:!0,wrapperPrefix:`

`,wrapperSuffix:`
`,globalStyles:{".title":"height: unset; max-height: unset;"}},{matches:["weibo.com"],selectors:["div[class^='detail_wbtext']"]},{matches:["medium.com","*.medium.com"],selectorMatches:["meta[property='al:ios:url'][content^='medium://']"],urlChangeDelay:2e3,selectors:["article section","h2","[aria-hidden='false'] pre","article p"],excludeSelectors:["[aria-label='Post Preview Reading Time']"],globalStyles:{h2:"-webkit-line-clamp: unset;max-height:unset;","article p":"-webkit-line-clamp: unset;max-height:unset;"}},{selectorMatches:["meta[property='og:site_name'][content='Nitter']"],selectors:[".tweet-content",".quote-text"]},{matches:"*.fandom.com",additionalSelectors:[".mcf-card-article__title"]},{matches:["www.washingtonpost.com"],additionalSelectors:["[data-qa='article-body']"]},{matches:"www.economist.com",extraInlineSelectors:"span[data-caps='initial']"},{matches:"www.healthline.com",excludeSelectors:".icon-hl-trusted-source-after"},{matches:"www.amazon.com",selectors:["h1","h2 > a > span","[data-a-expander-name='book_description_expander'] > div","[data-feature-name='editorialReviews']",'[data-a-expander-name="review_text_read_more"] > div > span','[data-feature-name="featurebullets"]','[data-feature-name="aplus"'],excludeBlockSelectors:["div.reviewText > span"],globalStyles:{".s-line-clamp-2":"-webkit-line-clamp: unset;max-height: unset;","[data-a-expander-name='review_text_read_more']":" max-height: unset;"}},{matches:"www.bloomberg.com",urlChangeDelay:2e3},{matches:"xueshu.baidu.com",globalStyles:{".abstract_wr":"height: unset; overflow: visible; max-height:unset;"}},{matches:"www.sciencedirect.com",urlChangeDelay:2e3,stayOriginalSelectors:["span.display"]},{matches:"www.thehighestofthemountains.com",extraBlockSelectors:"div"},{matches:"telegra.ph",normalizeBody:"div.ql-editor[contenteditable='false']"},{matches:["*.annas-archive.org","annas-archive.org"],selectors:["h3.text-xl.font-bold","div[class='truncate text-sm']"],globalStyles:{"div[id^='link-index-']":"height: unset; max-height: unset;"},normalizeBody:"body",extraBlockSelectors:["a.custom-a"]},{matches:["explainshell.com"],selectors:["[class='help-box']"]},{matches:["apnews.com"],urlChangeDelay:2e3},{matches:"play.google.com",additionalSelectors:["header[data-review-id] + div"]},{matches:["www.tumblr.com"],selectors:["article h1","article > header + div","[data-testid=notes-root] p","div.k31gt","p","article ul","article h2","article h3","article h4","article h5","article h6","article blockquote","article ol"],excludeSelectors:["div.fAAi8","div.wvu3V"],preWhitespaceDetectedTags:["DIV","SPAN","P"]},{matches:["mail.qq.com/cgi-bin/frame_html"],selectors:["#thisiddoesnotexists"]},{matches:"www.foxnews.com",shadowRootSelectors:["[data-spot-im-module-default-area='conversation'] > div"],excludeSelectors:[".components-MessageDetails-index__message-details-wrapper","div[class^=SlideDown__container]",".components-MessageActions-index__messageActionsWrapper","span[data-openweb-allow-amp]","div.spcv_typing-users"]},{matches:"www.afreecatv.com",globalStyles:{"a.title":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"opennet.ru",excludeTags:["TITLE","SCRIPT","STYLE","TEXTAREA","SVG","svg","NOSCRIPT","INPUT","BUTTON","BASE","LABEL","SELECT","OPTION","IMG","SUB","SUP","HR","PRE","CODE","KBD","WBR","TT","RT","RP","META"]},{matches:"getpocket.com",selectors:["h2.title","div.excerpt p","main > article"],globalStyles:{"h2.title":"max-height:unset;-webkit-line-clamp:unset;","div.excerpt p":"max-height:unset;-webkit-line-clamp:unset;"}},{matches:"huggingface.co",globalStyles:{".line-clamp-2":"-webkit-line-clamp:unset;max-height:unset;"}},{matches:"www.statista.com",globalStyles:{".itemContent__text":"height:unset;max-height:unset;",".itemContent__subline":"height:unset;max-height:unset;"}}]};var ir="DENO",Ot="CHROME",It="FIREFOX";function _n(e){let t=Ot;try{let r=navigator?.userAgent||"";/firefox/i.test(r)?t=It:/deno/i.test(r)&&(t=ir)}catch{}return e===Ot&&t===Ot||e===It&&t===It||e===ir&&t===ir}function kn(){return _n(Ot)}function Cn(){return typeof Deno<"u"}function En(){return _n(It)}var Ln={addListener:()=>{},removeListener:()=>{},hasListener:()=>{}},Pn={permissions:{contains:()=>{},request:()=>{}},runtime:{onMessage:Ln,openOptionsPage:()=>{},lastError:{message:""}},storage:{sync:{get:()=>{},set:()=>{}}},tabs:{onUpdated:Ln,query:()=>{},sendMessage:()=>{}},identity:{getRedirectURL:e=>e||"",launchWebAuthFlow:e=>Promise.resolve(e.url)}};var C;Cn()?C=Pn:C=globalThis.immersiveTranslateBrowserAPI;function sr(e){return Array.isArray(e)?e:e?[e]:[]}function Mn(e,t){let r=[],n=Object.keys(e);for(let s of n){let i=e[s];Array.isArray(i)&&r.push(s)}let o={...e};return Object.keys(t).forEach(s=>{let i=t[s];if(i!==void 0)if(!r.includes(s))o[s]=i;else if(s.startsWith("additional")){let c=sr(i);o[s]=Array.from(new Set([...o[s],...c]))}else o[s]=sr(i)}),o}function ai(){if(K.PROD==="1")return{};let e={};if(K.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID&&K.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY){let t={secretId:K.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_ID,secretKey:K.IMMERSIVE_TRANSLATE_SECRET_TENCENT_SECRET_KEY};e.translationServices={},e.translationServices.tencent=t}if(K.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID&&K.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY){let t={appid:K.IMMERSIVE_TRANSLATE_SECRET_BAIDU_APPID,key:K.IMMERSIVE_TRANSLATE_SECRET_BAIDU_KEY};e.translationServices||(e.translationServices={}),e.translationServices.baidu=t}if(K.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN){let t={token:K.IMMERSIVE_TRANSLATE_SECRET_CAIYUN_TOKEN};e.translationServices||(e.translationServices={}),e.translationServices.caiyun=t}if(K.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY){let t={apikey:K.IMMERSIVE_TRANSLATE_SECRET_OPENL_APIKEY};e.translationServices||(e.translationServices={}),e.translationServices.openl=t}if(K.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID&&K.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET){let t={appId:K.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_ID,appSecret:K.IMMERSIVE_TRANSLATE_SECRET_YOUDAO_APP_SECRET};e.translationServices||(e.translationServices={}),e.translationServices.youdao=t}if(K.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID&&K.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY){let t={accessKeyId:K.IMMERSIVE_TRANSLATE_SECRET_VOLC_ACCESS_KEY_ID,secretAccessKey:K.IMMERSIVE_TRANSLATE_SECRET_VOLC_SECRET_ACCESS_KEY};e.translationServices||(e.translationServices={}),e.translationServices.volc=t}if(K.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY){let t={authKey:K.IMMERSIVE_TRANSLATE_SECRET_DEEPL_AUTH_KEY};e.translationServices||(e.translationServices={}),e.translationServices.deepl=t}return K.IMMERSIVE_TRANSLATE_SERVICE&&(e.translationService=K.IMMERSIVE_TRANSLATE_SERVICE),K.DEBUG==="1"&&(e.debug=!0,e.cache=!1,e.alpha=!0),K.MOCK==="1"&&(e.translationService="mock"),e}async function mt(){let e=await C.storage.local.get(ft);if(e[ft]){let t=e[ft],r=t.tempTranslationUrlMatches||[],n=r.filter(s=>s.expiredAt>Date.now()),o=!1;n.length!==r.length&&(r=n,o=!0);let a={...t,tempTranslationUrlMatches:[...r]};return o&&await rt(a),a}else return{}}async function rt(e){await C.storage.local.set({[ft]:e})}async function Ye(){let e=await C.storage.local.get(Rt),t={...ar,buildinConfigUpdatedAt:K.BUILD_TIME};if(e[Rt]){let f=e[Rt];if(f&&f.buildinConfigUpdatedAt){let d=new Date(f.buildinConfigUpdatedAt),A=new Date(t.buildinConfigUpdatedAt);d>A&&(t=f)}}let r={};if(!An()&&C.commands&&C.commands.getAll){let f=await C.commands.getAll();for(let d of f)d.name&&d.shortcut&&(r[d.name]=d.shortcut)}let n=si(),o=ai(),a=await lr(),s=globalThis.IMMERSIVE_TRANSLATE_CONFIG||{},i=await mt(),c=new Date;if(i&&i.tempTranslationUrlMatches&&i.tempTranslationUrlMatches.length>0){let f=i.tempTranslationUrlMatches.filter(d=>new Date(d.expiredAt)>c);if(f.length>0){let d=a.translationUrlPattern?a.translationUrlPattern?.matches||[]:[],A=Array.isArray(d)?d:[d],S=Array.from(new Set(A.concat(f.map(g=>g.match))));a.translationUrlPattern={...a.translationUrlPattern,matches:S}}}let u=Object.assign({},s,o,a);if(!u.interfaceLanguage){let f=await ii();u.interfaceLanguage=f}let l=Object.assign(n,t),p=Object.keys(l),m=["translationUrlPattern","translationLanguagePattern","immediateTranslationPattern","translationBodyAreaPattern","translationParagraphLanguagePattern","translationThemePatterns","translationGeneralConfig","shortcuts"];for(let f of p){let d=f;if(d==="generalRule")typeof u[d]=="object"&&(l[d]=Mn(n[d],u[d]));else if(d==="translationServices"){let A=u[d]||{},S=t[d]||{},g=Object.keys(S),v=Object.keys(A),L=[...new Set([...g,...v])],k={};for(let ee of L)k[ee]={...S[ee],...A[ee]};l[d]=k}else if(typeof u[d]!="string"&&typeof u[d]!="boolean"&&typeof u[d]!="number"&&m.includes(d))u[d]&&(l[d]=Object.assign(l[d],u[d])),d==="shortcuts"&&(l[d]={...l[d],...r});else if(d==="rules"){if(Array.isArray(u[d])&&(l[d]=[...u[d],...l[d]]),K.PROD==="0"&&K.DEV_RULES){let A=JSON.parse(K.DEV_RULES);l[d]=[...A,...l[d]]}}else u[d]!==void 0&&(l[d]=u[d])}return l.donateUrl=t.donateUrl,l.minVersion=t.minVersion,l.feedbackUrl=t.feedbackUrl,l}async function lr(){return(await C.storage.sync.get("userConfig")||{}).userConfig||{}}async function Nt(e){await C.storage.sync.set({userConfig:e})}var ii=async()=>{let r=(await C.i18n.getAcceptLanguages()).map(n=>tt(n)).find(n=>Ge[n]);return r||"en"},si=()=>{let e={...ar,buildinConfigUpdatedAt:K.BUILD_TIME};return{...e,targetLanguage:Dt,interfaceLanguage:"en",debug:!1,alpha:!1,translationUrlPattern:{matches:[],excludeMatches:[]},translationLanguagePattern:{matches:[],excludeMatches:[]},translationThemePatterns:{},translationParagraphLanguagePattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationBodyAreaPattern:{matches:[],excludeMatches:[],selectorMatches:[],excludeSelectorMatches:[]},translationTheme:"none",translationService:"google",translationArea:"main",translationStartMode:"dynamic",translationServices:{},generalRule:{...e.generalRule},translationGeneralConfig:{engine:"google"},rules:[]}};function ht(){let e,t="pending",r=new Promise((n,o)=>{e={async resolve(a){await a,t="fulfilled",n(a)},reject(a){t="rejected",o(a)}}});return Object.defineProperty(r,"state",{get:()=>t}),Object.assign(r,e)}function cr(e,t={}){let{signal:r,persistent:n}=t;return r?.aborted?Promise.reject(new DOMException("Delay was aborted.","AbortError")):new Promise((o,a)=>{let s=()=>{clearTimeout(c),a(new DOMException("Delay was aborted.","AbortError"))},c=setTimeout(()=>{r?.removeEventListener("abort",s),o()},e);if(r?.addEventListener("abort",s,{once:!0}),n===!1)try{Deno.unrefTimer(c)}catch(u){if(!(u instanceof ReferenceError))throw u;console.error("`persistent` option is only available in Deno")}})}var Rn=class{#e=0;#t=[];#r=[];#n=ht();add(t){++this.#e,this.#o(t[Symbol.asyncIterator]())}async#o(t){try{let{value:r,done:n}=await t.next();n?--this.#e:this.#t.push({iterator:t,value:r})}catch(r){this.#r.push(r)}this.#n.resolve()}async*iterate(){for(;this.#e>0;){await this.#n;for(let t=0;t<this.#t.length;t++){let{iterator:r,value:n}=this.#t[t];yield n,this.#o(r)}if(this.#r.length){for(let t of this.#r)throw t;this.#r.length=0}this.#t.length=0,this.#n=ht()}}[Symbol.asyncIterator](){return this.iterate()}};var Ae={};Va(Ae,{bgBlack:()=>Oi,bgBlue:()=>Ui,bgBrightBlack:()=>zi,bgBrightBlue:()=>qi,bgBrightCyan:()=>Gi,bgBrightGreen:()=>Wi,bgBrightMagenta:()=>Ki,bgBrightRed:()=>Hi,bgBrightWhite:()=>Yi,bgBrightYellow:()=>Vi,bgCyan:()=>ji,bgGreen:()=>Ni,bgMagenta:()=>Bi,bgRed:()=>Ii,bgRgb24:()=>Zi,bgRgb8:()=>Xi,bgWhite:()=>Fi,bgYellow:()=>$i,black:()=>yi,blue:()=>Ti,bold:()=>di,brightBlack:()=>In,brightBlue:()=>Pi,brightCyan:()=>Ri,brightGreen:()=>Ei,brightMagenta:()=>Mi,brightRed:()=>Ci,brightWhite:()=>Di,brightYellow:()=>Li,cyan:()=>Si,dim:()=>gi,getColorEnabled:()=>ci,gray:()=>ki,green:()=>wi,hidden:()=>hi,inverse:()=>mi,italic:()=>fi,magenta:()=>Ai,red:()=>xi,reset:()=>ui,rgb24:()=>Qi,rgb8:()=>Ji,setColorEnabled:()=>li,strikethrough:()=>bi,stripColor:()=>ts,underline:()=>pi,white:()=>_i,yellow:()=>vi});var{Deno:Dn}=globalThis,On=typeof Dn?.noColor=="boolean"?Dn.noColor:!0,ur=!On;function li(e){On||(ur=e)}function ci(){return ur}function O(e,t){return{open:`\x1B[${e.join(";")}m`,close:`\x1B[${t}m`,regexp:new RegExp(`\\x1b\\[${t}m`,"g")}}function I(e,t){return ur?`${t.open}${e.replace(t.regexp,t.open)}${t.close}`:e}function ui(e){return I(e,O([0],0))}function di(e){return I(e,O([1],22))}function gi(e){return I(e,O([2],22))}function fi(e){return I(e,O([3],23))}function pi(e){return I(e,O([4],24))}function mi(e){return I(e,O([7],27))}function hi(e){return I(e,O([8],28))}function bi(e){return I(e,O([9],29))}function yi(e){return I(e,O([30],39))}function xi(e){return I(e,O([31],39))}function wi(e){return I(e,O([32],39))}function vi(e){return I(e,O([33],39))}function Ti(e){return I(e,O([34],39))}function Ai(e){return I(e,O([35],39))}function Si(e){return I(e,O([36],39))}function _i(e){return I(e,O([37],39))}function ki(e){return In(e)}function In(e){return I(e,O([90],39))}function Ci(e){return I(e,O([91],39))}function Ei(e){return I(e,O([92],39))}function Li(e){return I(e,O([93],39))}function Pi(e){return I(e,O([94],39))}function Mi(e){return I(e,O([95],39))}function Ri(e){return I(e,O([96],39))}function Di(e){return I(e,O([97],39))}function Oi(e){return I(e,O([40],49))}function Ii(e){return I(e,O([41],49))}function Ni(e){return I(e,O([42],49))}function $i(e){return I(e,O([43],49))}function Ui(e){return I(e,O([44],49))}function Bi(e){return I(e,O([45],49))}function ji(e){return I(e,O([46],49))}function Fi(e){return I(e,O([47],49))}function zi(e){return I(e,O([100],49))}function Hi(e){return I(e,O([101],49))}function Wi(e){return I(e,O([102],49))}function Vi(e){return I(e,O([103],49))}function qi(e){return I(e,O([104],49))}function Ki(e){return I(e,O([105],49))}function Gi(e){return I(e,O([106],49))}function Yi(e){return I(e,O([107],49))}function je(e,t=255,r=0){return Math.trunc(Math.max(Math.min(e,t),r))}function Ji(e,t){return I(e,O([38,5,je(t)],39))}function Xi(e,t){return I(e,O([48,5,je(t)],49))}function Qi(e,t){return typeof t=="number"?I(e,O([38,2,t>>16&255,t>>8&255,t&255],39)):I(e,O([38,2,je(t.r),je(t.g),je(t.b)],39))}function Zi(e,t){return typeof t=="number"?I(e,O([48,2,t>>16&255,t>>8&255,t&255],49)):I(e,O([48,2,je(t.r),je(t.g),je(t.b)],49))}var es=new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)","(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"),"g");function ts(e){return e.replace(es,"")}var dr=class extends Error{constructor(t,r){super(`Exceeded max retry count (${r})`),this.name="RetryError",this.cause=t}},rs={multiplier:2,maxTimeout:6e4,maxAttempts:5,minTimeout:1e3};async function gr(e,t){let r={...rs,...t};if(r.maxTimeout>=0&&r.minTimeout>r.maxTimeout)throw new RangeError("minTimeout is greater than maxTimeout");let n=r.minTimeout,o;for(let a=0;a<r.maxAttempts;a++)try{return await e()}catch(s){await new Promise(i=>setTimeout(i,n)),n*=r.multiplier,n=Math.max(n,r.minTimeout),r.maxTimeout>=0&&(n=Math.min(n,r.maxTimeout)),o=s}throw new dr(o,r.maxAttempts)}var Fn,H,zn,ns,bt,Nn,os,Hn={},Wn=[],as=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Fe(e,t){for(var r in t)e[r]=t[r];return e}function Vn(e){var t=e.parentNode;t&&t.removeChild(e)}function fr(e,t,r,n,o){var a={type:e,props:t,key:r,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++zn};return o==null&&H.vnode!=null&&H.vnode(a),a}function ot(e){return e.children}function $t(e,t){this.props=e,this.context=t}function nt(e,t){if(t==null)return e.__?nt(e.__,e.__.__k.indexOf(e)+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?nt(e):null}function qn(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return qn(e)}}function $n(e){(!e.__d&&(e.__d=!0)&&bt.push(e)&&!Ut.__r++||Nn!==H.debounceRendering)&&((Nn=H.debounceRendering)||setTimeout)(Ut)}function Ut(){for(var e;Ut.__r=bt.length;)e=bt.sort(function(t,r){return t.__v.__b-r.__v.__b}),bt=[],e.some(function(t){var r,n,o,a,s,i;t.__d&&(s=(a=(r=t).__v).__e,(i=r.__P)&&(n=[],(o=Fe({},a)).__v=a.__v+1,Jn(i,a,o,r.__n,i.ownerSVGElement!==void 0,a.__h!=null?[s]:null,n,s??nt(a),a.__h),ss(n,a),a.__e!=s&&qn(a)))})}function Kn(e,t,r,n,o,a,s,i,c,u){var l,p,m,f,d,A,S,g=n&&n.__k||Wn,v=g.length;for(r.__k=[],l=0;l<t.length;l++)if((f=r.__k[l]=(f=t[l])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?fr(null,f,null,null,f):Array.isArray(f)?fr(ot,{children:f},null,null,null):f.__b>0?fr(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=r,f.__b=r.__b+1,(m=g[l])===null||m&&f.key==m.key&&f.type===m.type)g[l]=void 0;else for(p=0;p<v;p++){if((m=g[p])&&f.key==m.key&&f.type===m.type){g[p]=void 0;break}m=null}Jn(e,f,m=m||Hn,o,a,s,i,c,u),d=f.__e,(p=f.ref)&&m.ref!=p&&(S||(S=[]),m.ref&&S.push(m.ref,null,f),S.push(p,f.__c||d,f)),d!=null?(A==null&&(A=d),typeof f.type=="function"&&f.__k===m.__k?f.__d=c=Gn(f,c,e):c=Yn(e,f,m,g,d,c),typeof r.type=="function"&&(r.__d=c)):c&&m.__e==c&&c.parentNode!=e&&(c=nt(m))}for(r.__e=A,l=v;l--;)g[l]!=null&&(typeof r.type=="function"&&g[l].__e!=null&&g[l].__e==r.__d&&(r.__d=nt(n,l+1)),Qn(g[l],g[l]));if(S)for(l=0;l<S.length;l++)Xn(S[l],S[++l],S[++l])}function Gn(e,t,r){for(var n,o=e.__k,a=0;o&&a<o.length;a++)(n=o[a])&&(n.__=e,t=typeof n.type=="function"?Gn(n,t,r):Yn(r,n,n,o,n.__e,t));return t}function Yn(e,t,r,n,o,a){var s,i,c;if(t.__d!==void 0)s=t.__d,t.__d=void 0;else if(r==null||o!=a||o.parentNode==null)e:if(a==null||a.parentNode!==e)e.appendChild(o),s=null;else{for(i=a,c=0;(i=i.nextSibling)&&c<n.length;c+=2)if(i==o)break e;e.insertBefore(o,a),s=a}return s!==void 0?s:o.nextSibling}function is(e,t,r,n,o){var a;for(a in r)a==="children"||a==="key"||a in t||Bt(e,a,null,r[a],n);for(a in t)o&&typeof t[a]!="function"||a==="children"||a==="key"||a==="value"||a==="checked"||r[a]===t[a]||Bt(e,a,t[a],r[a],n)}function Un(e,t,r){t[0]==="-"?e.setProperty(t,r):e[t]=r==null?"":typeof r!="number"||as.test(t)?r:r+"px"}function Bt(e,t,r,n,o){var a;e:if(t==="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof n=="string"&&(e.style.cssText=n=""),n)for(t in n)r&&t in r||Un(e.style,t,"");if(r)for(t in r)n&&r[t]===n[t]||Un(e.style,t,r[t])}else if(t[0]==="o"&&t[1]==="n")a=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+a]=r,r?n||e.addEventListener(t,a?jn:Bn,a):e.removeEventListener(t,a?jn:Bn,a);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r!=null&&(r!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,r):e.removeAttribute(t))}}function Bn(e){this.l[e.type+!1](H.event?H.event(e):e)}function jn(e){this.l[e.type+!0](H.event?H.event(e):e)}function Jn(e,t,r,n,o,a,s,i,c){var u,l,p,m,f,d,A,S,g,v,L,k,ee,w=t.type;if(t.constructor!==void 0)return null;r.__h!=null&&(c=r.__h,i=t.__e=r.__e,t.__h=null,a=[i]),(u=H.__b)&&u(t);try{e:if(typeof w=="function"){if(S=t.props,g=(u=w.contextType)&&n[u.__c],v=u?g?g.props.value:u.__:n,r.__c?A=(l=t.__c=r.__c).__=l.__E:("prototype"in w&&w.prototype.render?t.__c=l=new w(S,v):(t.__c=l=new $t(S,v),l.constructor=w,l.render=cs),g&&g.sub(l),l.props=S,l.state||(l.state={}),l.context=v,l.__n=n,p=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),w.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=Fe({},l.__s)),Fe(l.__s,w.getDerivedStateFromProps(S,l.__s))),m=l.props,f=l.state,p)w.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(w.getDerivedStateFromProps==null&&S!==m&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(S,v),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(S,l.__s,v)===!1||t.__v===r.__v){l.props=S,l.state=l.__s,t.__v!==r.__v&&(l.__d=!1),l.__v=t,t.__e=r.__e,t.__k=r.__k,t.__k.forEach(function(_){_&&(_.__=t)}),l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(S,l.__s,v),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(m,f,d)})}if(l.context=v,l.props=S,l.__v=t,l.__P=e,L=H.__r,k=0,"prototype"in w&&w.prototype.render)l.state=l.__s,l.__d=!1,L&&L(t),u=l.render(l.props,l.state,l.context);else do l.__d=!1,L&&L(t),u=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++k<25);l.state=l.__s,l.getChildContext!=null&&(n=Fe(Fe({},n),l.getChildContext())),p||l.getSnapshotBeforeUpdate==null||(d=l.getSnapshotBeforeUpdate(m,f)),ee=u!=null&&u.type===ot&&u.key==null?u.props.children:u,Kn(e,Array.isArray(ee)?ee:[ee],t,r,n,o,a,s,i,c),l.base=t.__e,t.__h=null,l.__h.length&&s.push(l),A&&(l.__E=l.__=null),l.__e=!1}else a==null&&t.__v===r.__v?(t.__k=r.__k,t.__e=r.__e):t.__e=ls(r.__e,t,r,n,o,a,s,c);(u=H.diffed)&&u(t)}catch(_){t.__v=null,(c||a!=null)&&(t.__e=i,t.__h=!!c,a[a.indexOf(i)]=null),H.__e(_,t,r)}}function ss(e,t){H.__c&&H.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(n){n.call(r)})}catch(n){H.__e(n,r.__v)}})}function ls(e,t,r,n,o,a,s,i){var c,u,l,p=r.props,m=t.props,f=t.type,d=0;if(f==="svg"&&(o=!0),a!=null){for(;d<a.length;d++)if((c=a[d])&&"setAttribute"in c==!!f&&(f?c.localName===f:c.nodeType===3)){e=c,a[d]=null;break}}if(e==null){if(f===null)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,m.is&&m),a=null,i=!1}if(f===null)p===m||i&&e.data===m||(e.data=m);else{if(a=a&&Fn.call(e.childNodes),u=(p=r.props||Hn).dangerouslySetInnerHTML,l=m.dangerouslySetInnerHTML,!i){if(a!=null)for(p={},d=0;d<e.attributes.length;d++)p[e.attributes[d].name]=e.attributes[d].value;(l||u)&&(l&&(u&&l.__html==u.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(is(e,m,p,o,i),l)t.__k=[];else if(d=t.props.children,Kn(e,Array.isArray(d)?d:[d],t,r,n,o&&f!=="foreignObject",a,s,a?a[0]:r.__k&&nt(r,0),i),a!=null)for(d=a.length;d--;)a[d]!=null&&Vn(a[d]);i||("value"in m&&(d=m.value)!==void 0&&(d!==e.value||f==="progress"&&!d||f==="option"&&d!==p.value)&&Bt(e,"value",d,p.value,!1),"checked"in m&&(d=m.checked)!==void 0&&d!==e.checked&&Bt(e,"checked",d,p.checked,!1))}return e}function Xn(e,t,r){try{typeof e=="function"?e(t):e.current=t}catch(n){H.__e(n,r)}}function Qn(e,t,r){var n,o;if(H.unmount&&H.unmount(e),(n=e.ref)&&(n.current&&n.current!==e.__e||Xn(n,null,t)),(n=e.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(a){H.__e(a,t)}n.base=n.__P=null,e.__c=void 0}if(n=e.__k)for(o=0;o<n.length;o++)n[o]&&Qn(n[o],t,typeof e.type!="function");r||e.__e==null||Vn(e.__e),e.__=e.__e=e.__d=void 0}function cs(e,t,r){return this.constructor(e,r)}Fn=Wn.slice,H={__e:function(e,t,r,n){for(var o,a,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((a=o.constructor)&&a.getDerivedStateFromError!=null&&(o.setState(a.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,n||{}),s=o.__d),s)return o.__E=o}catch(i){e=i}throw e}},zn=0,ns=function(e){return e!=null&&e.constructor===void 0},$t.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Fe({},this.state),typeof e=="function"&&(e=e(Fe({},r),this.props)),e&&Fe(r,e),e!=null&&this.__v&&(t&&this.__h.push(t),$n(this))},$t.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),$n(this))},$t.prototype.render=ot,bt=[],Ut.__r=0,os=0;var us,Re,pr,Zn;var io=[],mr=[],eo=H.__b,to=H.__r,ro=H.diffed,no=H.__c,oo=H.unmount;function ds(){for(var e;e=io.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(jt),e.__H.__h.forEach(hr),e.__H.__h=[]}catch(t){e.__H.__h=[],H.__e(t,e.__v)}}H.__b=function(e){typeof e.type!="function"||e.o||e.type===ot?e.o||(e.o=e.__&&e.__.o?e.__.o:""):e.o=(e.__&&e.__.o?e.__.o:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),Re=null,eo&&eo(e)},H.__r=function(e){to&&to(e),us=0;var t=(Re=e.__c).__H;t&&(pr===Re?(t.__h=[],Re.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.__V=mr,r.__N=r.i=void 0})):(t.__h.forEach(jt),t.__h.forEach(hr),t.__h=[])),pr=Re},H.diffed=function(e){ro&&ro(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(io.push(t)!==1&&Zn===H.requestAnimationFrame||((Zn=H.requestAnimationFrame)||gs)(ds)),t.__H.__.forEach(function(r){r.i&&(r.__H=r.i),r.__V!==mr&&(r.__=r.__V),r.i=void 0,r.__V=mr})),pr=Re=null},H.__c=function(e,t){t.some(function(r){try{r.__h.forEach(jt),r.__h=r.__h.filter(function(n){return!n.__||hr(n)})}catch(n){t.some(function(o){o.__h&&(o.__h=[])}),t=[],H.__e(n,r.__v)}}),no&&no(e,t)},H.unmount=function(e){oo&&oo(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{jt(n)}catch(o){t=o}}),r.__H=void 0,t&&H.__e(t,r.__v))};var ao=typeof requestAnimationFrame=="function";function gs(e){var t,r=function(){clearTimeout(n),ao&&cancelAnimationFrame(t),setTimeout(e)},n=setTimeout(r,100);ao&&(t=requestAnimationFrame(r))}function jt(e){var t=Re,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),Re=t}function hr(e){var t=Re;e.__c=e.__(),Re=t}var Jd=Number.isNaN||function(e){return typeof e=="number"&&e!==e};var Ft=globalThis||(typeof window<"u"?window:self),ms=Object.create,so=Object.defineProperty,hs=Object.getOwnPropertyDescriptor,bs=Object.getOwnPropertyNames,ys=Object.getPrototypeOf,xs=Object.prototype.hasOwnProperty,ws=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),vs=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of bs(t))!xs.call(e,o)&&o!==r&&so(e,o,{get:()=>t[o],enumerable:!(n=hs(t,o))||n.enumerable});return e},Ts=(e,t,r)=>(r=e!=null?ms(ys(e)):{},vs(t||!e||!e.__esModule?so(r,"default",{value:e,enumerable:!0}):r,e)),As=ws((e,t)=>{var r="Expected a function",n=NaN,o="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,l=typeof Ft=="object"&&Ft&&Ft.Object===Object&&Ft,p=typeof self=="object"&&self&&self.Object===Object&&self,m=l||p||Function("return this")(),f=Object.prototype,d=f.toString,A=Math.max,S=Math.min,g=function(){return m.Date.now()};function v(T,E,B){var J,z,D,X,j,me,Se=0,ve=!1,ke=!1,lt=!0;if(typeof T!="function")throw new TypeError(r);E=_(E)||0,k(B)&&(ve=!!B.leading,ke="maxWait"in B,D=ke?A(_(B.maxWait)||0,E):D,lt="trailing"in B?!!B.trailing:lt);function ct(F){var W=J,q=z;return J=z=void 0,Se=F,X=T.apply(q,W),X}function h(F){return Se=F,j=setTimeout(G,E),ve?ct(F):X}function U(F){var W=F-me,q=F-Se,Q=E-W;return ke?S(Q,D-q):Q}function P(F){var W=F-me,q=F-Se;return me===void 0||W>=E||W<0||ke&&q>=D}function G(){var F=g();if(P(F))return $(F);j=setTimeout(G,U(F))}function $(F){return j=void 0,lt&&J?ct(F):(J=z=void 0,X)}function oe(){j!==void 0&&clearTimeout(j),Se=0,J=me=z=j=void 0}function ce(){return j===void 0?X:$(g())}function se(){var F=g(),W=P(F);if(J=arguments,z=this,me=F,W){if(j===void 0)return h(me);if(ke)return j=setTimeout(G,E),ct(me)}return j===void 0&&(j=setTimeout(G,E)),X}return se.cancel=oe,se.flush=ce,se}function L(T,E,B){var J=!0,z=!0;if(typeof T!="function")throw new TypeError(r);return k(B)&&(J="leading"in B?!!B.leading:J,z="trailing"in B?!!B.trailing:z),v(T,E,{leading:J,maxWait:E,trailing:z})}function k(T){var E=typeof T;return!!T&&(E=="object"||E=="function")}function ee(T){return!!T&&typeof T=="object"}function w(T){return typeof T=="symbol"||ee(T)&&d.call(T)==o}function _(T){if(typeof T=="number")return T;if(w(T))return n;if(k(T)){var E=typeof T.valueOf=="function"?T.valueOf():T;T=k(E)?E+"":E}if(typeof T!="string")return T===0?T:+T;T=T.replace(a,"");var B=i.test(T);return B||c.test(T)?u(T.slice(2),B?2:8):s.test(T)?n:+T}t.exports=L}),Ss=Ts(As()),{default:cg,...ug}=Ss;var br;function kr(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function po(e,t=","){return e.map(kr).join(t)}var mo=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function zt(e){for(var t=9,r=e.length;r--;)t=Math.imul(t^e.charCodeAt(r),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function ho(e,t="@media "){return t+Ue(e).map(r=>(typeof r=="string"&&(r={min:r}),r.raw||Object.keys(r).map(n=>`(${n}-width:${r[n]})`).join(" and "))).join(",")}function Ue(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function ks(){}var ge={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function bo(e){var t;return((t=e.match(/[-=:;]/g))==null?void 0:t.length)||0}function Ar(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?+RegExp.$1/(RegExp.$2?15:1)/10:0,15)<<22|Math.min(bo(e),15)<<18}var Cs=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function Cr({n:e,i:t,v:r=[]},n,o,a){for(let i of(e&&(e=kr({n:e,i:t,v:r})),a=[...Ue(a)],r)){let c=n.theme("screens",i);for(let u of Ue(c&&ho(c)||n.v(i))){var s;a.push(u),o|=c?67108864|Ar(u):i=="dark"?1073741824:u[0]=="@"?Ar(u):(s=u,1<<~(/:([a-z-]+)/.test(s)&&~Cs.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var Er=new Map;function lo(e){if(e.d){let t=[],r=yr(e.r.reduce((n,o)=>o[0]=="@"?(t.push(o),n):o?yr(n,a=>yr(o,s=>{let i=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(s);if(i){let c=a.indexOf(i[1]);return~c?a.slice(0,c)+i[0]+a.slice(c+i[1].length):xr(a,s)}return xr(s,a)})):n,"&"),n=>xr(n,e.n?"."+mo(e.n):""));return r&&t.push(r.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((n,o)=>o+"{"+n+"}",e.d)}}function yr(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(r,n,o)=>t(n)+o)}function xr(e,t){return e.replace(/&/g,t)}var Es=new Intl.Collator("en",{numeric:!0});function Ls(e,t){for(var r=0,n=e.length;r<n;){let o=n+r>>1;0>=yo(e[o],t)?r=o+1:n=o}return n}function yo(e,t){let r=e.p&ge.o;return r==(t.p&ge.o)&&(r==ge.b||r==ge.o)?0:e.p-t.p||e.o-t.o||Es.compare(e.n,t.n)}function wr(e,t){return Math.round(parseInt(e,16)*t)}function Ps(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:r="1",opacityVariable:n}=t,o=n?`var(${n})`:r;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,s=[17,1,.062272][a-1];return`rgba(${[wr(e.substr(1,a),s),wr(e.substr(1+a,a),s),wr(e.substr(1+2*a,a),s),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function xo(e,t,r,n,o=[]){return function a(s,{n:i,p:c,r:u=[],i:l},p){let m=[],f="",d=0,A=0;for(let v in s||{}){var S,g;let L=s[v];if(v[0]=="@"){if(!L)continue;if(v[1]=="a"){m.push(...wo(i,c,Pr(""+L),p,c,u,l,!0));continue}if(v[1]=="l"){for(let k of Ue(L))m.push(...a(k,{n:i,p:(S=ge[v[7]],c&~ge.o|S),r:u,i:l},p));continue}if(v[1]=="i"){m.push(...Ue(L).map(k=>({p:-1,o:0,r:[],d:v+" "+k})));continue}if(v[1]=="k"){m.push({p:ge.d,o:0,r:[v],d:a(L,{p:ge.d},p).map(lo).join("")});continue}if(v[1]=="f"){m.push(...Ue(L).map(k=>({p:ge.d,o:0,r:[v],d:a(k,{p:ge.d},p).map(lo).join("")})));continue}}if(typeof L!="object"||Array.isArray(L))v=="label"&&L?i=L+zt(JSON.stringify([c,l,s])):(L||L===0)&&(v=v.replace(/[A-Z]/g,k=>"-"+k.toLowerCase()),A+=1,d=Math.max(d,(g=v)[0]=="-"?0:bo(g)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(g)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+Ue(L).map(k=>p.s(v,Ms(""+k,p.theme)+(l?" !important":""))).join(";"));else if(v[0]=="@"||v.includes("&")){let k=c;v[0]=="@"&&(v=v.replace(/\bscreen\(([^)]+)\)/g,(ee,w)=>{let _=p.theme("screens",w);return _?(k|=67108864,ho(_,"")):ee}),k|=Ar(v)),m.push(...a(L,{n:i,p:k,r:[...u,v],i:l},p))}else m.push(...a(L,{p:c,r:[...u,v]},p))}return m.unshift({n:i,p:c,o:Math.max(0,15-A)+1.5*Math.min(d||15,15),r:u,d:f}),m.sort(yo)}(e,Cr(t,r,n,o),r)}function Ms(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(r,n,o,a,s)=>{let i=t(o,s);return typeof i=="function"&&/color|fill|stroke/i.test(o)?Ps(i):""+i})}function Lr(e,t){let r,n=[];for(let o of e)o.d&&o.n?r?.p==o.p&&""+r.r==""+o.r?(r.c=[r.c,o.c].filter(Boolean).join(" "),r.d=r.d+";"+o.d):n.push(r={...o,n:o.n&&t}):n.push({...o,n:o.n&&t});return n}function Sr(e,t,r=ge.u,n,o){let a=[];for(let s of e)for(let i of function(c,u,l,p,m){var f;c={...c,i:c.i||m};let d=function(A,S){let g=Er.get(A.n);return g?g(A,S):S.r(A.n,A.v[0]=="dark")}(c,u);return d?typeof d=="string"?({r:p,p:l}=Cr(c,u,l,p),Lr(Sr(Pr(d),u,l,p,c.i),c.n)):Array.isArray(d)?d.map(A=>{var S,g;return{o:0,...A,r:[...Ue(p),...Ue(A.r)],p:(S=l,g=(f=A.p)!=null?f:l,S&~ge.o|g)}}):xo(d,c,u,l,p):[{c:kr(c),p:0,o:0,r:[]}]}(s,t,r,n,o))a.splice(Ls(a,i),0,i);return a}function wo(e,t,r,n,o,a,s,i){return Lr((i?r.flatMap(c=>Sr([c],n,o,a,s)):Sr(r,n,o,a,s)).map(c=>c.p&ge.o&&(c.n||t==ge.b)?{...c,p:c.p&~ge.o|t,o:0}:c),e)}function Rs(e,t,r,n){var o;return o=(a,s)=>{let{n:i,p:c,r:u,i:l}=Cr(a,s,t);return r&&wo(i,t,r,s,c,u,l,n)},Er.set(e,o),e}function vr(e,t){if(e[e.length-1]!="("){let r=[],n=!1,o=!1,a="";for(let s of e)if(!(s=="("||/[~@]$/.test(s))){if(s[0]=="!"&&(s=s.slice(1),n=!n),s.endsWith(":")){r[s=="dark:"?"unshift":"push"](s.slice(0,-1));continue}s[0]=="-"&&(s=s.slice(1),o=!o),s.endsWith("-")&&(s=s.slice(0,-1)),s&&s!="&"&&(a+=(a&&"-")+s)}a&&(o&&(a="-"+a),t[0].push({n:a,v:r.filter(Ds),i:n}))}}function Ds(e,t,r){return r.indexOf(e)==t}var co=new Map;function Pr(e){let t=co.get(e);if(!t){let r=[],n=[[]],o=0,a=0,s=null,i=0,c=(u,l=0)=>{o!=i&&(r.push(e.slice(o,i+l)),u&&vr(r,n)),o=i+1};for(;i<e.length;i++){let u=e[i];if(a)e[i-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(s)e[i-1]!="\\"&&s.test(e.slice(i))&&(s=null,o=i+RegExp.lastMatch.length);else if(u=="/"&&e[i-1]!="\\"&&(e[i+1]=="*"||e[i+1]=="/"))s=e[i+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),r.push(u);else if(u==":")e[i+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=r.lastIndexOf("(");if(u==")"){let p=r[l-1];if(/[~@]$/.test(p)){let m=n.shift();r.length=l,vr([...r,"#"],n);let{v:f}=n[0].pop();for(let d of m)d.v.splice(+(d.v[0]=="dark")-+(f[0]=="dark"),f.length);vr([...r,Rs(p.length>1?p.slice(0,-1)+zt(JSON.stringify([p,m])):p+"("+po(m)+")",ge.a,m,/@$/.test(p))],n)}l=r.lastIndexOf("(",l-1)}r.length=l+1}else/[~@]/.test(u)&&e[i+1]=="("&&n.unshift([])}c(!0),co.set(e,t=n[0])}return t}function vo(e,t,r){return t.reduce((n,o,a)=>n+r(o)+e[a+1],e[0])}function To(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?vo(e,t,r=>Tr(r).trim()):t.filter(Boolean).reduce((r,n)=>r+Tr(n),e?Tr(e):"")}function Tr(e){let t,r="";if(e&&typeof e=="object")if(Array.isArray(e))(t=To(e[0],e.slice(1)))&&(r+=" "+t);else for(let n in e)e[n]&&(r+=" "+n);else e!=null&&typeof e!="boolean"&&(r+=" "+e);return r}var bg=Ao("@"),yg=Ao("~");function Ao(e){return new Proxy(function(r,...n){return t("",r,n)},{get:(r,n)=>n in r?r[n]:function(o,...a){return t(n,o,a)}});function t(r,n,o){return po(Pr(r+e+"("+To(n,o)+")"))}}function _r(e,t){return Array.isArray(e)?uo(vo(e,t,r=>r!=null&&typeof r!="boolean"?r:"")):typeof e=="string"?uo(e):[e]}var Os=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function uo(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let r=[{}],n=[r[0]],o=[];for(;t=Os.exec(e);)t[4]&&(r.shift(),o.shift()),t[3]?(o.unshift(t[3]),r.unshift({}),n.push(o.reduce((a,s)=>({[s]:a}),r[0]))):t[4]||(r[0][t[1]]&&(r.unshift({}),n.push(o.reduce((a,s)=>({[s]:a}),r[0]))),r[0][t[1]]=t[2]);return n}function So(e,...t){var r,n;let o=_r(e,t),a=(((r=o.find(s=>s.label))==null?void 0:r.label)||"css")+zt(JSON.stringify(o));return n=(s,i)=>Lr(o.flatMap(c=>xo(c,s,i,ge.o)),a),Er.set(a,n),a}var xg=new Proxy(function(e,t){return go("animation",e,t)},{get:(e,t)=>t in e?e[t]:function(r,n){return go(t,r,n)}});function go(e,t,r){return{toString:()=>So({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+r}})}}var wg=Symbol();var _o=new Proxy(ks,{apply:(e,t,r)=>br(r[0]),get(e,t){let r=br[t];return typeof r=="function"?function(){return r.apply(br,arguments)}:r}});var vg=function e(t){return new Proxy(function(r,...n){return fo(t,"",r,n)},{get:(r,n)=>n==="bind"?e:n in r?r[n]:function(o,...a){return fo(t,n,o,a)}})}();function fo(e,t,r,n){return{toString(){let o=_r(r,n),a=mo(t+zt(JSON.stringify([t,o])));return(typeof e=="function"?e:_o)(So({[`@keyframes ${a}`]:_r(r,n)})),a}}}var Mr;function Fr(e){return[...e.v,(e.i?"!":"")+e.n].join(":")}function Oo(e,t=","){return e.map(Fr).join(t)}var Io=typeof CSS<"u"&&CSS.escape||(e=>e.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g,"\\$&").replace(/^\d/,"\\3$& "));function Wt(e){for(var t=9,r=e.length;r--;)t=Math.imul(t^e.charCodeAt(r),1597334677);return"#"+((t^t>>>9)>>>0).toString(36)}function Vt(e,t="@media "){return t+Ce(e).map(r=>(typeof r=="string"&&(r={min:r}),r.raw||Object.keys(r).map(n=>`(${n}-width:${r[n]})`).join(" and "))).join(",")}function Ce(e=[]){return Array.isArray(e)?e:e==null?[]:[e]}function Ns(){}var fe={d:0,b:134217728,c:268435456,a:671088640,u:805306368,o:939524096};function No(e){return e.match(/[-=:;]/g)?.length||0}function $r(e){return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e)?Math.max(0,29.63*(+RegExp.$1/(RegExp.$2?15:1))**.137-43):0,15)<<22|Math.min(No(e),15)<<18}var $s=["rst-c","st-ch","h-chi","y-lin","nk","sited","ecked","pty","ad-on","cus-w","ver","cus","cus-v","tive","sable","tiona","quire"];function zr({n:e,i:t,v:r=[]},n,o,a){e&&(e=Fr({n:e,i:t,v:r})),a=[...Ce(a)];for(let i of r){let c=n.theme("screens",i);for(let u of Ce(c&&Vt(c)||n.v(i))){var s;a.push(u),o|=c?67108864|$r(u):i=="dark"?1073741824:u[0]=="@"?$r(u):(s=u,1<<~(/:([a-z-]+)/.test(s)&&~$s.indexOf(RegExp.$1.slice(2,7))||-18))}}return{n:e,p:o,r:a,i:t}}var Hr=new Map;function ko(e){if(e.d){let t=[],r=Rr(e.r.reduce((n,o)=>o[0]=="@"?(t.push(o),n):o?Rr(n,a=>Rr(o,s=>{let i=/(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(s);if(i){let c=a.indexOf(i[1]);return~c?a.slice(0,c)+i[0]+a.slice(c+i[1].length):Dr(a,s)}return Dr(s,a)})):n,"&"),n=>Dr(n,e.n?"."+Io(e.n):""));return r&&t.push(r.replace(/:merge\((.+?)\)/g,"$1")),t.reduceRight((n,o)=>o+"{"+n+"}",e.d)}}function Rr(e,t){return e.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g,(r,n,o)=>t(n)+o)}function Dr(e,t){return e.replace(/&/g,t)}var Co=new Intl.Collator("en",{numeric:!0});function Us(e,t){for(var r=0,n=e.length;r<n;){let o=n+r>>1;0>=$o(e[o],t)?r=o+1:n=o}return n}function $o(e,t){let r=e.p&fe.o;return r==(t.p&fe.o)&&(r==fe.b||r==fe.o)?0:e.p-t.p||e.o-t.o||Co.compare(Eo(e.n),Eo(t.n))||Co.compare(Lo(e.n),Lo(t.n))}function Eo(e){return(e||"").split(/:/).pop().split("/").pop()||"\0"}function Lo(e){return(e||"").replace(/\W/g,t=>String.fromCharCode(127+t.charCodeAt(0)))+"\0"}function Or(e,t){return Math.round(parseInt(e,16)*t)}function ze(e,t={}){if(typeof e=="function")return e(t);let{opacityValue:r="1",opacityVariable:n}=t,o=n?`var(${n})`:r;if(e.includes("<alpha-value>"))return e.replace("<alpha-value>",o);if(e[0]=="#"&&(e.length==4||e.length==7)){let a=(e.length-1)/3,s=[17,1,.062272][a-1];return`rgba(${[Or(e.substr(1,a),s),Or(e.substr(1+a,a),s),Or(e.substr(1+2*a,a),s),o]})`}return o=="1"?e:o=="0"?"#0000":e.replace(/^(rgb|hsl)(\([^)]+)\)$/,`$1a$2,${o})`)}function Uo(e,t,r,n,o=[]){return function a(s,{n:i,p:c,r:u=[],i:l},p){let m=[],f="",d=0,A=0;for(let v in s||{}){var S,g;let L=s[v];if(v[0]=="@"){if(!L)continue;if(v[1]=="a"){m.push(...jo(i,c,Vr(""+L),p,c,u,l,!0));continue}if(v[1]=="l"){for(let k of Ce(L))m.push(...a(k,{n:i,p:(S=fe[v[7]],c&~fe.o|S),r:v[7]=="d"?[]:u,i:l},p));continue}if(v[1]=="i"){m.push(...Ce(L).map(k=>({p:-1,o:0,r:[],d:v+" "+k})));continue}if(v[1]=="k"){m.push({p:fe.d,o:0,r:[v],d:a(L,{p:fe.d},p).map(ko).join("")});continue}if(v[1]=="f"){m.push(...Ce(L).map(k=>({p:fe.d,o:0,r:[v],d:a(k,{p:fe.d},p).map(ko).join("")})));continue}}if(typeof L!="object"||Array.isArray(L))v=="label"&&L?i=L+Wt(JSON.stringify([c,l,s])):(L||L===0)&&(v=v.replace(/[A-Z]/g,k=>"-"+k.toLowerCase()),A+=1,d=Math.max(d,(g=v)[0]=="-"?0:No(g)+(/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(g)?+!!RegExp.$1||-!!RegExp.$2:0)+1),f+=(f?";":"")+Ce(L).map(k=>p.s(v,Bo(""+k,p.theme)+(l?" !important":""))).join(";"));else if(v[0]=="@"||v.includes("&")){let k=c;v[0]=="@"&&(v=v.replace(/\bscreen\(([^)]+)\)/g,(ee,w)=>{let _=p.theme("screens",w);return _?(k|=67108864,Vt(_,"")):ee}),k|=$r(v)),m.push(...a(L,{n:i,p:k,r:[...u,v],i:l},p))}else m.push(...a(L,{p:c,r:[...u,v]},p))}return m.unshift({n:i,p:c,o:Math.max(0,15-A)+1.5*Math.min(d||15,15),r:u,d:f}),m.sort($o)}(e,zr(t,r,n,o),r)}function Bo(e,t){return e.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g,(r,n,o,a,s="")=>{let i=t(o,s);return typeof i=="function"&&/color|fill|stroke/i.test(o)?ze(i):""+Ce(i).filter(c=>Object(c)!==c)})}function Wr(e,t){let r,n=[];for(let o of e)o.d&&o.n?r?.p==o.p&&""+r.r==""+o.r?(r.c=[r.c,o.c].filter(Boolean).join(" "),r.d=r.d+";"+o.d):n.push(r={...o,n:o.n&&t}):n.push({...o,n:o.n&&t});return n}function Ur(e,t,r=fe.u,n,o){let a=[];for(let s of e)for(let i of function(c,u,l,p,m){c={...c,i:c.i||m};let f=function(d,A){let S=Hr.get(d.n);return S?S(d,A):A.r(d.n,d.v[0]=="dark")}(c,u);return f?typeof f=="string"?({r:p,p:l}=zr(c,u,l,p),Wr(Ur(Vr(f),u,l,p,c.i),c.n)):Array.isArray(f)?f.map(d=>{var A,S;return{o:0,...d,r:[...Ce(p),...Ce(d.r)],p:(A=l,S=d.p??l,A&~fe.o|S)}}):Uo(f,c,u,l,p):[{c:Fr(c),p:0,o:0,r:[]}]}(s,t,r,n,o))a.splice(Us(a,i),0,i);return a}function jo(e,t,r,n,o,a,s,i){return Wr((i?r.flatMap(c=>Ur([c],n,o,a,s)):Ur(r,n,o,a,s)).map(c=>c.p&fe.o&&(c.n||t==fe.b)?{...c,p:c.p&~fe.o|t,o:0}:c),e)}function Bs(e,t,r,n){var o;return o=(a,s)=>{let{n:i,p:c,r:u,i:l}=zr(a,s,t);return r&&jo(i,t,r,s,c,u,l,n)},Hr.set(e,o),e}function Ir(e,t,r){if(e[e.length-1]!="("){let n=[],o=!1,a=!1,s="";for(let i of e)if(!(i=="("||/[~@]$/.test(i))){if(i[0]=="!"&&(i=i.slice(1),o=!o),i.endsWith(":")){n[i=="dark:"?"unshift":"push"](i.slice(0,-1));continue}i[0]=="-"&&(i=i.slice(1),a=!a),i.endsWith("-")&&(i=i.slice(0,-1)),i&&i!="&"&&(s+=(s&&"-")+i)}s&&(a&&(s="-"+s),t[0].push({n:s,v:n.filter(js),i:o}))}}function js(e,t,r){return r.indexOf(e)==t}var Po=new Map;function Vr(e){let t=Po.get(e);if(!t){let r=[],n=[[]],o=0,a=0,s=null,i=0,c=(u,l=0)=>{o!=i&&(r.push(e.slice(o,i+l)),u&&Ir(r,n)),o=i+1};for(;i<e.length;i++){let u=e[i];if(a)e[i-1]!="\\"&&(a+=+(u=="[")||-(u=="]"));else if(u=="[")a+=1;else if(s)e[i-1]!="\\"&&s.test(e.slice(i))&&(s=null,o=i+RegExp.lastMatch.length);else if(u=="/"&&e[i-1]!="\\"&&(e[i+1]=="*"||e[i+1]=="/"))s=e[i+1]=="*"?/^\*\//:/^[\r\n]/;else if(u=="(")c(),r.push(u);else if(u==":")e[i+1]!=":"&&c(!1,1);else if(/[\s,)]/.test(u)){c(!0);let l=r.lastIndexOf("(");if(u==")"){let p=r[l-1];if(/[~@]$/.test(p)){let m=n.shift();r.length=l,Ir([...r,"#"],n);let{v:f}=n[0].pop();for(let d of m)d.v.splice(+(d.v[0]=="dark")-+(f[0]=="dark"),f.length);Ir([...r,Bs(p.length>1?p.slice(0,-1)+Wt(JSON.stringify([p,m])):p+"("+Oo(m)+")",fe.a,m,/@$/.test(p))],n)}l=r.lastIndexOf("(",l-1)}r.length=l+1}else/[~@]/.test(u)&&e[i+1]=="("&&n.unshift([])}c(!0),Po.set(e,t=n[0])}return t}function Fo(e,t,r){return t.reduce((n,o,a)=>n+r(o)+e[a+1],e[0])}function zo(e,t){return Array.isArray(e)&&Array.isArray(e.raw)?Fo(e,t,r=>Nr(r).trim()):t.filter(Boolean).reduce((r,n)=>r+Nr(n),e?Nr(e):"")}function Nr(e){let t,r="";if(e&&typeof e=="object")if(Array.isArray(e))(t=zo(e[0],e.slice(1)))&&(r+=" "+t);else for(let n in e)e[n]&&(r+=" "+n);else e!=null&&typeof e!="boolean"&&(r+=" "+e);return r}var Bg=Ho("@"),jg=Ho("~");function Ho(e){return new Proxy(function(r,...n){return t("",r,n)},{get(r,n){return n in r?r[n]:function(o,...a){return t(n,o,a)}}});function t(r,n,o){return Oo(Vr(r+e+"("+zo(n,o)+")"))}}function Br(e,t){return Array.isArray(e)?Mo(Fo(e,t,r=>r!=null&&typeof r!="boolean"?r:"")):typeof e=="string"?Mo(e):[e]}var Fs=/ *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;function Mo(e){let t;e=e.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm," ");let r=[{}],n=[r[0]],o=[];for(;t=Fs.exec(e);)t[4]&&(r.shift(),o.shift()),t[3]?(o.unshift(t[3]),r.unshift({}),n.push(o.reduce((a,s)=>({[s]:a}),r[0]))):t[4]||(r[0][t[1]]&&(r.unshift({}),n.push(o.reduce((a,s)=>({[s]:a}),r[0]))),r[0][t[1]]=t[2]);return n}function Wo(e,...t){var r;let n=Br(e,t),o=(n.find(a=>a.label)?.label||"css")+Wt(JSON.stringify(n));return r=(a,s)=>Wr(n.flatMap(i=>Uo(i,a,s,fe.o)),o),Hr.set(o,r),o}var Fg=new Proxy(function(e,t){return Ro("animation",e,t)},{get(e,t){return t in e?e[t]:function(r,n){return Ro(t,r,n)}}});function Ro(e,t,r){return{toString(){return Wo({label:e,"@layer components":{...typeof t=="object"?t:{animation:t},animationName:""+r}})}}}function y(e,t,r){return[e,zs(t,r)]}function zs(e,t){return typeof e=="function"?e:typeof e=="string"&&/^[\w-]+$/.test(e)?(r,n)=>({[e]:t?t(r,n):jr(r,1)}):r=>e||{[r[1]]:jr(r,2)}}function jr(e,t,r=e.slice(t).find(Boolean)||e.$$||e.input){return e.input[0]=="-"?`calc(${r} * -1)`:r}function x(e,t,r,n){return[e,Hs(t,r,n)]}function Hs(e,t,r){let n=typeof t=="string"?(o,a)=>({[t]:r?r(o,a):o._}):t||(({1:o,_:a},s,i)=>({[o||i]:a}));return(o,a)=>{let s=Vo(e||o[1]),i=a.theme(s,o.$$)??yt(o.$$,s,a);if(i!=null)return o._=jr(o,0,i),n(o,a,s)}}function ie(e,t={},r){return[e,Ws(t,r)]}function Ws(e={},t){return(r,n)=>{let{section:o=Vo(r[0]).replace("-","")+"Color"}=e,[a,s]=Vs(r.$$);if(!a)return;let i=n.theme(o,a)||yt(a,o,n);if(!i||typeof i=="object")return;let{opacityVariable:c=`--tw-${r[0].replace(/-$/,"")}-opacity`,opacitySection:u=o.replace("Color","Opacity"),property:l=o,selector:p}=e,m=n.theme(u,s||"DEFAULT")||s&&yt(s,u,n),f=t||(({_:A})=>{let S=xt(l,A);return p?{[p]:S}:S});r._={value:ze(i,{opacityVariable:c||void 0,opacityValue:m||void 0}),color:A=>ze(i,A),opacityVariable:c||void 0,opacityValue:m||void 0};let d=f(r,n);if(!r.dark){let A=n.d(o,a,i);A&&A!==i&&(r._={value:ze(A,{opacityVariable:c||void 0,opacityValue:m||"1"}),color:S=>ze(A,S),opacityVariable:c||void 0,opacityValue:m||void 0},d={"&":d,[n.v("dark")]:f(r,n)})}return d}}function Vs(e){return(e.match(/^(\[[^\]]+]|[^/]+?)(?:\/(.+))?$/)||[]).slice(1)}function xt(e,t){let r={};return typeof t=="string"?r[e]=t:(t.opacityVariable&&t.value.includes(t.opacityVariable)&&(r[t.opacityVariable]=t.opacityValue||"1"),r[e]=t.value),r}function yt(e,t,r){if(e[0]=="["&&e.slice(-1)=="]"){if(e=Ht(Bo(e.slice(1,-1),r.theme)),!t)return e;if(!(/color|fill|stroke/i.test(t)&&!(/^color:/.test(e)||/^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e))||/image/i.test(t)&&!(/^image:/.test(e)||/^[a-z-]+\(/.test(e))||/weight/i.test(t)&&!(/^(number|any):/.test(e)||/^\d+$/.test(e))||/position/i.test(t)&&/^(length|size):/.test(e)))return e.replace(/^[a-z-]+:/,"")}}function Vo(e){return e.replace(/-./g,t=>t[1].toUpperCase())}function Ht(e){return e.includes("url(")?e.replace(/(.*?)(url\(.*?\))(.*?)/g,(t,r="",n,o="")=>Ht(r)+n+Ht(o)):e.replace(/(^|[^\\])_+/g,(t,r)=>r+" ".repeat(t.length-r.length)).replace(/\\_/g,"_").replace(/(calc|min|max|clamp)\(.+\)/g,t=>t.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g,"$1 $2 "))}var zg=Symbol();var qs=new Proxy(Ns,{apply(e,t,r){return Mr(r[0])},get(e,t){let r=Mr[t];return typeof r=="function"?function(){return r.apply(Mr,arguments)}:r}});var Hg=function e(t){return new Proxy(function(r,...n){return Do(t,"",r,n)},{get(r,n){return n==="bind"?e:n in r?r[n]:function(o,...a){return Do(t,n,o,a)}}})}();function Do(e,t,r,n){return{toString(){let o=Br(r,n),a=Io(t+Wt(JSON.stringify([t,o])));return(typeof e=="function"?e:qs)(Wo({[`@keyframes ${a}`]:Br(r,n)})),a}}}var Ks="inherit",Gs="currentColor",Ys="transparent",Js="#000",Xs="#fff",Qs={50:"#f8fafc",100:"#f1f5f9",200:"#e2e8f0",300:"#cbd5e1",400:"#94a3b8",500:"#64748b",600:"#475569",700:"#334155",800:"#1e293b",900:"#0f172a"},Zs={50:"#f9fafb",100:"#f3f4f6",200:"#e5e7eb",300:"#d1d5db",400:"#9ca3af",500:"#6b7280",600:"#4b5563",700:"#374151",800:"#1f2937",900:"#111827"},el={50:"#fafafa",100:"#f4f4f5",200:"#e4e4e7",300:"#d4d4d8",400:"#a1a1aa",500:"#71717a",600:"#52525b",700:"#3f3f46",800:"#27272a",900:"#18181b"},tl={50:"#fafafa",100:"#f5f5f5",200:"#e5e5e5",300:"#d4d4d4",400:"#a3a3a3",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717"},rl={50:"#fafaf9",100:"#f5f5f4",200:"#e7e5e4",300:"#d6d3d1",400:"#a8a29e",500:"#78716c",600:"#57534e",700:"#44403c",800:"#292524",900:"#1c1917"},nl={50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d"},ol={50:"#fff7ed",100:"#ffedd5",200:"#fed7aa",300:"#fdba74",400:"#fb923c",500:"#f97316",600:"#ea580c",700:"#c2410c",800:"#9a3412",900:"#7c2d12"},al={50:"#fffbeb",100:"#fef3c7",200:"#fde68a",300:"#fcd34d",400:"#fbbf24",500:"#f59e0b",600:"#d97706",700:"#b45309",800:"#92400e",900:"#78350f"},il={50:"#fefce8",100:"#fef9c3",200:"#fef08a",300:"#fde047",400:"#facc15",500:"#eab308",600:"#ca8a04",700:"#a16207",800:"#854d0e",900:"#713f12"},sl={50:"#f7fee7",100:"#ecfccb",200:"#d9f99d",300:"#bef264",400:"#a3e635",500:"#84cc16",600:"#65a30d",700:"#4d7c0f",800:"#3f6212",900:"#365314"},ll={50:"#f0fdf4",100:"#dcfce7",200:"#bbf7d0",300:"#86efac",400:"#4ade80",500:"#22c55e",600:"#16a34a",700:"#15803d",800:"#166534",900:"#14532d"},cl={50:"#ecfdf5",100:"#d1fae5",200:"#a7f3d0",300:"#6ee7b7",400:"#34d399",500:"#10b981",600:"#059669",700:"#047857",800:"#065f46",900:"#064e3b"},ul={50:"#f0fdfa",100:"#ccfbf1",200:"#99f6e4",300:"#5eead4",400:"#2dd4bf",500:"#14b8a6",600:"#0d9488",700:"#0f766e",800:"#115e59",900:"#134e4a"},dl={50:"#ecfeff",100:"#cffafe",200:"#a5f3fc",300:"#67e8f9",400:"#22d3ee",500:"#06b6d4",600:"#0891b2",700:"#0e7490",800:"#155e75",900:"#164e63"},gl={50:"#f0f9ff",100:"#e0f2fe",200:"#bae6fd",300:"#7dd3fc",400:"#38bdf8",500:"#0ea5e9",600:"#0284c7",700:"#0369a1",800:"#075985",900:"#0c4a6e"},fl={50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",300:"#93c5fd",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a"},pl={50:"#eef2ff",100:"#e0e7ff",200:"#c7d2fe",300:"#a5b4fc",400:"#818cf8",500:"#6366f1",600:"#4f46e5",700:"#4338ca",800:"#3730a3",900:"#312e81"},ml={50:"#f5f3ff",100:"#ede9fe",200:"#ddd6fe",300:"#c4b5fd",400:"#a78bfa",500:"#8b5cf6",600:"#7c3aed",700:"#6d28d9",800:"#5b21b6",900:"#4c1d95"},hl={50:"#faf5ff",100:"#f3e8ff",200:"#e9d5ff",300:"#d8b4fe",400:"#c084fc",500:"#a855f7",600:"#9333ea",700:"#7e22ce",800:"#6b21a8",900:"#581c87"},bl={50:"#fdf4ff",100:"#fae8ff",200:"#f5d0fe",300:"#f0abfc",400:"#e879f9",500:"#d946ef",600:"#c026d3",700:"#a21caf",800:"#86198f",900:"#701a75"},yl={50:"#fdf2f8",100:"#fce7f3",200:"#fbcfe8",300:"#f9a8d4",400:"#f472b6",500:"#ec4899",600:"#db2777",700:"#be185d",800:"#9d174d",900:"#831843"},xl={50:"#fff1f2",100:"#ffe4e6",200:"#fecdd3",300:"#fda4af",400:"#fb7185",500:"#f43f5e",600:"#e11d48",700:"#be123c",800:"#9f1239",900:"#881337"},wl={__proto__:null,inherit:Ks,current:Gs,transparent:Ys,black:Js,white:Xs,slate:Qs,gray:Zs,zinc:el,neutral:tl,stone:rl,red:nl,orange:ol,amber:al,yellow:il,lime:sl,green:ll,emerald:cl,teal:ul,cyan:dl,sky:gl,blue:fl,indigo:pl,violet:ml,purple:hl,fuchsia:bl,pink:yl,rose:xl},qo={screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},colors:wl,columns:{auto:"auto","3xs":"16rem","2xs":"18rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem"},spacing:{px:"1px",0:"0px",..._e(4,"rem",4,.5,.5),..._e(12,"rem",4,5),14:"3.5rem",..._e(64,"rem",4,16,4),72:"18rem",80:"20rem",96:"24rem"},durations:{75:"75ms",100:"100ms",150:"150ms",200:"200ms",300:"300ms",500:"500ms",700:"700ms",1e3:"1000ms"},animation:{none:"none",spin:"spin 1s linear infinite",ping:"ping 1s cubic-bezier(0,0,0.2,1) infinite",pulse:"pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",bounce:"bounce 1s infinite"},aspectRatio:{auto:"auto",square:"1/1",video:"16/9"},backdropBlur:V("blur"),backdropBrightness:V("brightness"),backdropContrast:V("contrast"),backdropGrayscale:V("grayscale"),backdropHueRotate:V("hueRotate"),backdropInvert:V("invert"),backdropOpacity:V("opacity"),backdropSaturate:V("saturate"),backdropSepia:V("sepia"),backgroundColor:V("colors"),backgroundImage:{none:"none"},backgroundOpacity:V("opacity"),backgroundSize:{auto:"auto",cover:"cover",contain:"contain"},blur:{none:"none",0:"0",sm:"4px",DEFAULT:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},brightness:{..._e(200,"",100,0,50),..._e(110,"",100,90,5),75:"0.75",125:"1.25"},borderColor:({theme:e})=>({DEFAULT:e("colors.gray.200","currentColor"),...e("colors")}),borderOpacity:V("opacity"),borderRadius:{none:"0px",sm:"0.125rem",DEFAULT:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem","1/2":"50%",full:"9999px"},borderSpacing:V("spacing"),borderWidth:{DEFAULT:"1px",...Ee(8,"px")},boxShadow:{sm:"0 1px 2px 0 rgba(0,0,0,0.05)",DEFAULT:"0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",md:"0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",lg:"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",xl:"0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)","2xl":"0 25px 50px -12px rgba(0,0,0,0.25)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.05)",none:"0 0 #0000"},boxShadowColor:V("colors"),caretColor:V("colors"),accentColor:({theme:e})=>({auto:"auto",...e("colors")}),contrast:{..._e(200,"",100,0,50),75:"0.75",125:"1.25"},content:{none:"none"},divideColor:V("borderColor"),divideOpacity:V("borderOpacity"),divideWidth:V("borderWidth"),dropShadow:{sm:"0 1px 1px rgba(0,0,0,0.05)",DEFAULT:["0 1px 2px rgba(0,0,0,0.1)","0 1px 1px rgba(0,0,0,0.06)"],md:["0 4px 3px rgba(0,0,0,0.07)","0 2px 2px rgba(0,0,0,0.06)"],lg:["0 10px 8px rgba(0,0,0,0.04)","0 4px 3px rgba(0,0,0,0.1)"],xl:["0 20px 13px rgba(0,0,0,0.03)","0 8px 5px rgba(0,0,0,0.08)"],"2xl":"0 25px 25px rgba(0,0,0,0.15)",none:"0 0 #0000"},fill:V("colors"),grayscale:{DEFAULT:"100%",0:"0"},hueRotate:{0:"0deg",15:"15deg",30:"30deg",60:"60deg",90:"90deg",180:"180deg"},invert:{DEFAULT:"100%",0:"0"},flex:{1:"1 1 0%",auto:"1 1 auto",initial:"0 1 auto",none:"none"},flexBasis:({theme:e})=>({...e("spacing"),...wt(2,6),...wt(12,12),auto:"auto",full:"100%"}),flexGrow:{DEFAULT:1,0:0},flexShrink:{DEFAULT:1,0:0},fontFamily:{sans:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),serif:'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),mono:'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")},fontSize:{xs:["0.75rem","1rem"],sm:["0.875rem","1.25rem"],base:["1rem","1.5rem"],lg:["1.125rem","1.75rem"],xl:["1.25rem","1.75rem"],"2xl":["1.5rem","2rem"],"3xl":["1.875rem","2.25rem"],"4xl":["2.25rem","2.5rem"],"5xl":["3rem","1"],"6xl":["3.75rem","1"],"7xl":["4.5rem","1"],"8xl":["6rem","1"],"9xl":["8rem","1"]},fontWeight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"},gap:V("spacing"),gradientColorStops:V("colors"),gridAutoColumns:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridAutoRows:{auto:"auto",min:"min-content",max:"max-content",fr:"minmax(0,1fr)"},gridColumn:{auto:"auto","span-full":"1 / -1"},gridRow:{auto:"auto","span-full":"1 / -1"},gridTemplateColumns:{none:"none"},gridTemplateRows:{none:"none"},height:({theme:e})=>({...e("spacing"),...wt(2,6),min:"min-content",max:"max-content",fit:"fit-content",auto:"auto",full:"100%",screen:"100vh"}),inset:({theme:e})=>({...e("spacing"),...wt(2,4),auto:"auto",full:"100%"}),keyframes:{spin:{from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},ping:{"0%":{transform:"scale(1)",opacity:"1"},"75%,100%":{transform:"scale(2)",opacity:"0"}},pulse:{"0%,100%":{opacity:"1"},"50%":{opacity:".5"}},bounce:{"0%, 100%":{transform:"translateY(-25%)",animationTimingFunction:"cubic-bezier(0.8,0,1,1)"},"50%":{transform:"none",animationTimingFunction:"cubic-bezier(0,0,0.2,1)"}}},letterSpacing:{tighter:"-0.05em",tight:"-0.025em",normal:"0em",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeight:{..._e(10,"rem",4,3),none:"1",tight:"1.25",snug:"1.375",normal:"1.5",relaxed:"1.625",loose:"2"},margin:({theme:e})=>({auto:"auto",...e("spacing")}),maxHeight:({theme:e})=>({full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh",...e("spacing")}),maxWidth:({theme:e,breakpoints:t})=>({...t(e("screens")),none:"none",0:"0rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",prose:"65ch"}),minHeight:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content",screen:"100vh"},minWidth:{0:"0px",full:"100%",min:"min-content",max:"max-content",fit:"fit-content"},opacity:{..._e(100,"",100,0,10),5:"0.05",25:"0.25",75:"0.75",95:"0.95"},order:{first:"-9999",last:"9999",none:"0"},padding:V("spacing"),placeholderColor:V("colors"),placeholderOpacity:V("opacity"),outlineColor:V("colors"),outlineOffset:Ee(8,"px"),outlineWidth:Ee(8,"px"),ringColor:({theme:e})=>({...e("colors"),DEFAULT:e("colors.blue.500","#3b82f6")}),ringOffsetColor:V("colors"),ringOffsetWidth:Ee(8,"px"),ringOpacity:({theme:e})=>({...e("opacity"),DEFAULT:"0.5"}),ringWidth:{DEFAULT:"3px",...Ee(8,"px")},rotate:{...Ee(2,"deg"),...Ee(12,"deg",3),...Ee(180,"deg",45)},saturate:_e(200,"",100,0,50),scale:{..._e(150,"",100,0,50),..._e(110,"",100,90,5),75:"0.75",125:"1.25"},scrollMargin:V("spacing"),scrollPadding:V("spacing"),sepia:{0:"0",DEFAULT:"100%"},skew:{...Ee(2,"deg"),...Ee(12,"deg",3)},space:V("spacing"),stroke:V("colors"),strokeWidth:_e(2),textColor:V("colors"),textDecorationColor:V("colors"),textDecorationThickness:{"from-font":"from-font",auto:"auto",...Ee(8,"px")},textUnderlineOffset:{auto:"auto",...Ee(8,"px")},textIndent:V("spacing"),textOpacity:V("opacity"),transitionDuration:({theme:e})=>({...e("durations"),DEFAULT:"150ms"}),transitionDelay:V("durations"),transitionProperty:{none:"none",all:"all",DEFAULT:"color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",colors:"color,background-color,border-color,text-decoration-color,fill,stroke",opacity:"opacity",shadow:"box-shadow",transform:"transform"},transitionTimingFunction:{DEFAULT:"cubic-bezier(0.4,0,0.2,1)",linear:"linear",in:"cubic-bezier(0.4,0,1,1)",out:"cubic-bezier(0,0,0.2,1)","in-out":"cubic-bezier(0.4,0,0.2,1)"},translate:({theme:e})=>({...e("spacing"),...wt(2,4),full:"100%"}),width:({theme:e})=>({min:"min-content",max:"max-content",fit:"fit-content",screen:"100vw",...e("flexBasis")}),willChange:{scroll:"scroll-position"},zIndex:{..._e(50,"",1,0,10),auto:"auto"}};function wt(e,t){let r={};do for(var n=1;n<e;n++)r[`${n}/${e}`]=Number((n/e*100).toFixed(6))+"%";while(++e<=t);return r}function Ee(e,t,r=0){let n={};for(;r<=e;r=2*r||1)n[r]=r+t;return n}function _e(e,t="",r=1,n=0,o=1,a={}){for(;n<=e;n+=o)a[n]=n/r+t;return a}function V(e){return({theme:t})=>t(e)}var qg={"*,::before,::after":{boxSizing:"border-box",borderWidth:"0",borderStyle:"solid",borderColor:"theme(borderColor.DEFAULT, currentColor)"},"::before,::after":{"--tw-content":"''"},html:{lineHeight:1.5,WebkitTextSizeAdjust:"100%",MozTabSize:"4",tabSize:4,fontFamily:`theme(fontFamily.sans, ${qo.fontFamily.sans})`},body:{margin:"0",lineHeight:"inherit"},hr:{height:"0",color:"inherit",borderTopWidth:"1px"},"abbr:where([title])":{textDecoration:"underline dotted"},"h1,h2,h3,h4,h5,h6":{fontSize:"inherit",fontWeight:"inherit"},a:{color:"inherit",textDecoration:"inherit"},"b,strong":{fontWeight:"bolder"},"code,kbd,samp,pre":{fontFamily:`theme(fontFamily.mono, ${qo.fontFamily.mono})`,fontSize:"1em"},small:{fontSize:"80%"},"sub,sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sub:{bottom:"-0.25em"},sup:{top:"-0.5em"},table:{textIndent:"0",borderColor:"inherit",borderCollapse:"collapse"},"button,input,optgroup,select,textarea":{fontFamily:"inherit",fontSize:"100%",lineHeight:"inherit",color:"inherit",margin:"0",padding:"0"},"button,select":{textTransform:"none"},"button,[type='button'],[type='reset'],[type='submit']":{WebkitAppearance:"button",backgroundColor:"transparent",backgroundImage:"none"},":-moz-focusring":{outline:"auto"},":-moz-ui-invalid":{boxShadow:"none"},progress:{verticalAlign:"baseline"},"::-webkit-inner-spin-button,::-webkit-outer-spin-button":{height:"auto"},"[type='search']":{WebkitAppearance:"textfield",outlineOffset:"-2px"},"::-webkit-search-decoration":{WebkitAppearance:"none"},"::-webkit-file-upload-button":{WebkitAppearance:"button",font:"inherit"},summary:{display:"list-item"},"blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre":{margin:"0"},fieldset:{margin:"0",padding:"0"},legend:{padding:"0"},"ol,ul,menu":{listStyle:"none",margin:"0",padding:"0"},textarea:{resize:"vertical"},"input::placeholder,textarea::placeholder":{opacity:1,color:"theme(colors.gray.400, #9ca3af)"},'button,[role="button"]':{cursor:"pointer"},":disabled":{cursor:"default"},"img,svg,video,canvas,audio,iframe,embed,object":{display:"block",verticalAlign:"middle"},"img,video":{maxWidth:"100%",height:"auto"},"[hidden]":{display:"none"}},Gg=[y("\\[([-\\w]+):(.+)]",({1:e,2:t},r)=>({"@layer overrides":{"&":{[e]:yt(`[${t}]`,e,r)}}})),y("(group|peer)(~[^-[]+)?",({input:e},{h:t})=>[{c:t(e)}]),x("aspect-","aspectRatio"),y("container",(e,{theme:t})=>{let{screens:r=t("screens"),center:n,padding:o}=t("container"),a={width:"100%",marginRight:n&&"auto",marginLeft:n&&"auto",...s("xs")};for(let i in r){let c=r[i];typeof c=="string"&&(a[Vt(c)]={"&":{maxWidth:c,...s(i)}})}return a;function s(i){let c=o&&(typeof o=="string"?o:o[i]||o.DEFAULT);if(c)return{paddingRight:c,paddingLeft:c}}}),x("content-","content",({_:e})=>({"--tw-content":e,content:"var(--tw-content)"})),y("(?:box-)?decoration-(slice|clone)","boxDecorationBreak"),y("box-(border|content)","boxSizing",({1:e})=>e+"-box"),y("hidden",{display:"none"}),y("table-(auto|fixed)","tableLayout"),y(["(block|flex|table|grid|inline|contents|flow-root|list-item)","(inline-(block|flex|table|grid))","(table-(caption|cell|column|row|(column|row|footer|header)-group))"],"display"),"(float)-(left|right|none)","(clear)-(left|right|none|both)","(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)","(isolation)-(auto)",y("isolate","isolation"),y("object-(contain|cover|fill|none|scale-down)","objectFit"),x("object-","objectPosition"),y("object-(top|bottom|center|(left|right)(-(top|bottom))?)","objectPosition",qt),y("overscroll(-[xy])?-(auto|contain|none)",({1:e="",2:t})=>({["overscroll-behavior"+e]:t})),y("(static|fixed|absolute|relative|sticky)","position"),x("-?inset(-[xy])?(?:$|-)","inset",({1:e,_:t})=>({top:e!="-x"&&t,right:e!="-y"&&t,bottom:e!="-x"&&t,left:e!="-y"&&t})),x("-?(top|bottom|left|right)(?:$|-)","inset"),y("visible","visibility"),y("invisible",{visibility:"hidden"}),x("-?z-","zIndex"),y("flex-((row|col)(-reverse)?)","flexDirection",Ko),y("flex-(wrap|wrap-reverse|nowrap)","flexWrap"),x("(flex-(?:grow|shrink))(?:$|-)"),x("(flex)-"),x("grow(?:$|-)","flexGrow"),x("shrink(?:$|-)","flexShrink"),x("basis-","flexBasis"),x("-?(order)-"),"-?(order)-(\\d+)",x("grid-cols-","gridTemplateColumns"),y("grid-cols-(\\d+)","gridTemplateColumns",Xo),x("col-","gridColumn"),y("col-(span)-(\\d+)","gridColumn",Jo),x("col-start-","gridColumnStart"),y("col-start-(auto|\\d+)","gridColumnStart"),x("col-end-","gridColumnEnd"),y("col-end-(auto|\\d+)","gridColumnEnd"),x("grid-rows-","gridTemplateRows"),y("grid-rows-(\\d+)","gridTemplateRows",Xo),x("row-","gridRow"),y("row-(span)-(\\d+)","gridRow",Jo),x("row-start-","gridRowStart"),y("row-start-(auto|\\d+)","gridRowStart"),x("row-end-","gridRowEnd"),y("row-end-(auto|\\d+)","gridRowEnd"),y("grid-flow-((row|col)(-dense)?)","gridAutoFlow",e=>qt(Ko(e))),y("grid-flow-(dense)","gridAutoFlow"),x("auto-cols-","gridAutoColumns"),x("auto-rows-","gridAutoRows"),x("gap-x(?:$|-)","gap","columnGap"),x("gap-y(?:$|-)","gap","rowGap"),x("gap(?:$|-)","gap"),"(justify-(?:items|self))-",y("justify-","justifyContent",Go),y("(content|items|self)-",e=>({["align-"+e[1]]:Go(e)})),y("(place-(content|items|self))-",({1:e,$$:t})=>({[e]:("wun".includes(t[3])?"space-":"")+t})),x("p([xytrbl])?(?:$|-)","padding",at("padding")),x("-?m([xytrbl])?(?:$|-)","margin",at("margin")),x("-?space-(x|y)(?:$|-)","space",({1:e,_:t})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"0",["margin-"+{y:"top",x:"left"}[e]]:`calc(${t} * calc(1 - var(--tw-space-${e}-reverse)))`,["margin-"+{y:"bottom",x:"right"}[e]]:`calc(${t} * var(--tw-space-${e}-reverse))`}})),y("space-(x|y)-reverse",({1:e})=>({"&>:not([hidden])~:not([hidden])":{[`--tw-space-${e}-reverse`]:"1"}})),x("w-","width"),x("min-w-","minWidth"),x("max-w-","maxWidth"),x("h-","height"),x("min-h-","minHeight"),x("max-h-","maxHeight"),x("font-","fontWeight"),x("font-","fontFamily","fontFamily",De),y("antialiased",{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}),y("subpixel-antialiased",{WebkitFontSmoothing:"auto",MozOsxFontSmoothing:"auto"}),y("italic","fontStyle"),y("not-italic",{fontStyle:"normal"}),y("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)",({1:e,2:t="",3:r})=>t=="normal"?{fontVariantNumeric:"normal"}:{["--tw-"+(r?"numeric-fraction":"pt".includes(t[0])?"numeric-spacing":t?"numeric-figure":e)]:e,fontVariantNumeric:"var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ordinal":"var(--tw-empty,/*!*/ /*!*/)","--tw-slashed-zero":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-figure":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-spacing":"var(--tw-empty,/*!*/ /*!*/)","--tw-numeric-fraction":"var(--tw-empty,/*!*/ /*!*/)"}}}),x("tracking-","letterSpacing"),x("leading-","lineHeight"),y("list-(inside|outside)","listStylePosition"),x("list-","listStyleType"),y("list-","listStyleType"),x("placeholder-opacity-","placeholderOpacity",({_:e})=>({"&::placeholder":{"--tw-placeholder-opacity":e}})),ie("placeholder-",{property:"color",selector:"&::placeholder"}),y("text-(left|center|right|justify|start|end)","textAlign"),y("text-(ellipsis|clip)","textOverflow"),x("text-opacity-","textOpacity","--tw-text-opacity"),ie("text-",{property:"color"}),x("text-","fontSize",({_:e})=>typeof e=="string"?{fontSize:e}:{fontSize:e[0],...typeof e[1]=="string"?{lineHeight:e[1]}:e[1]}),x("indent-","textIndent"),y("(overline|underline|line-through)","textDecorationLine"),y("no-underline",{textDecorationLine:"none"}),x("underline-offset-","textUnderlineOffset"),ie("decoration-",{section:"textDecorationColor",opacityVariable:!1,opacitySection:"opacity"}),x("decoration-","textDecorationThickness"),y("decoration-","textDecorationStyle"),y("(uppercase|lowercase|capitalize)","textTransform"),y("normal-case",{textTransform:"none"}),y("truncate",{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}),y("align-","verticalAlign"),y("whitespace-","whiteSpace"),y("break-normal",{wordBreak:"normal",overflowWrap:"normal"}),y("break-words",{overflowWrap:"break-word"}),y("break-all",{wordBreak:"break-all"}),ie("caret-",{opacityVariable:!1,opacitySection:"opacity"}),ie("accent-",{opacityVariable:!1,opacitySection:"opacity"}),y("bg-gradient-to-([trbl]|[tb][rl])","backgroundImage",({1:e})=>`linear-gradient(to ${Je(e," ")},var(--tw-gradient-stops))`),ie("from-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-from":e.value,"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":"var(--tw-gradient-from),var(--tw-gradient-to)"})),ie("via-",{section:"gradientColorStops",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-gradient-to":e.color({opacityValue:"0"}),"--tw-gradient-stops":`var(--tw-gradient-from),${e.value},var(--tw-gradient-to)`})),ie("to-",{section:"gradientColorStops",property:"--tw-gradient-to",opacityVariable:!1,opacitySection:"opacity"}),y("bg-(fixed|local|scroll)","backgroundAttachment"),y("bg-origin-(border|padding|content)","backgroundOrigin",({1:e})=>e+"-box"),y(["bg-(no-repeat|repeat(-[xy])?)","bg-repeat-(round|space)"],"backgroundRepeat"),y("bg-blend-","backgroundBlendMode"),y("bg-clip-(border|padding|content|text)","backgroundClip",({1:e})=>e+(e=="text"?"":"-box")),x("bg-opacity-","backgroundOpacity","--tw-bg-opacity"),ie("bg-",{section:"backgroundColor"}),x("bg-","backgroundImage"),x("bg-","backgroundPosition"),y("bg-(top|bottom|center|(left|right)(-(top|bottom))?)","backgroundPosition",qt),x("bg-","backgroundSize"),x("rounded(?:$|-)","borderRadius"),x("rounded-([trbl]|[tb][rl])(?:$|-)","borderRadius",({1:e,_:t})=>{let r={t:["tl","tr"],r:["tr","br"],b:["bl","br"],l:["bl","tl"]}[e]||[e,e];return{[`border-${Je(r[0])}-radius`]:t,[`border-${Je(r[1])}-radius`]:t}}),y("border-(collapse|separate)","borderCollapse"),x("border-opacity(?:$|-)","borderOpacity","--tw-border-opacity"),y("border-(solid|dashed|dotted|double|none)","borderStyle"),x("border-spacing(-[xy])?(?:$|-)","borderSpacing",({1:e,_:t})=>({"@layer defaults":{"*,::before,::after,::backdrop":{"--tw-border-spacing-x":0,"--tw-border-spacing-y":0}},["--tw-border-spacing"+(e||"-x")]:t,["--tw-border-spacing"+(e||"-y")]:t,"border-spacing":"var(--tw-border-spacing-x) var(--tw-border-spacing-y)"})),ie("border-([xytrbl])-",{section:"borderColor"},at("border","Color")),ie("border-"),x("border-([xytrbl])(?:$|-)","borderWidth",at("border","Width")),x("border(?:$|-)","borderWidth"),x("divide-opacity(?:$|-)","divideOpacity",({_:e})=>({"&>:not([hidden])~:not([hidden])":{"--tw-divide-opacity":e}})),y("divide-(solid|dashed|dotted|double|none)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{borderStyle:e}})),y("divide-([xy]-reverse)",({1:e})=>({"&>:not([hidden])~:not([hidden])":{["--tw-divide-"+e]:"1"}})),x("divide-([xy])(?:$|-)","divideWidth",({1:e,_:t})=>{let r={x:"lr",y:"tb"}[e];return{"&>:not([hidden])~:not([hidden])":{[`--tw-divide-${e}-reverse`]:"0",[`border-${Je(r[0])}Width`]:`calc(${t} * calc(1 - var(--tw-divide-${e}-reverse)))`,[`border-${Je(r[1])}Width`]:`calc(${t} * var(--tw-divide-${e}-reverse))`}}}),ie("divide-",{property:"borderColor",selector:"&>:not([hidden])~:not([hidden])"}),x("ring-opacity(?:$|-)","ringOpacity","--tw-ring-opacity"),ie("ring-offset-",{property:"--tw-ring-offset-color",opacityVariable:!1}),x("ring-offset(?:$|-)","ringOffsetWidth","--tw-ring-offset-width"),y("ring-inset",{"--tw-ring-inset":"inset"}),ie("ring-",{property:"--tw-ring-color"}),x("ring(?:$|-)","ringWidth",({_:e},{theme:t})=>({"--tw-ring-offset-shadow":"var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)","--tw-ring-shadow":`var(--tw-ring-inset) 0 0 0 calc(${e} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000","&":{"--tw-ring-inset":"var(--tw-empty,/*!*/ /*!*/)","--tw-ring-offset-width":t("ringOffsetWidth","","0px"),"--tw-ring-offset-color":ze(t("ringOffsetColor","","#fff")),"--tw-ring-color":ze(t("ringColor","","#93c5fd"),{opacityVariable:"--tw-ring-opacity"}),"--tw-ring-opacity":t("ringOpacity","","0.5")}}}})),ie("shadow-",{section:"boxShadowColor",opacityVariable:!1,opacitySection:"opacity"},({_:e})=>({"--tw-shadow-color":e.value,"--tw-shadow":"var(--tw-shadow-colored)"})),x("shadow(?:$|-)","boxShadow",({_:e})=>({"--tw-shadow":De(e),"--tw-shadow-colored":De(e).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g,"$1var(--tw-shadow-color)$2"),boxShadow:"var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000","--tw-shadow-colored":"0 0 #0000"}}})),x("(opacity)-"),y("mix-blend-","mixBlendMode"),...Yo(),...Yo("backdrop-"),x("transition(?:$|-)","transitionProperty",(e,{theme:t})=>({transitionProperty:De(e),transitionTimingFunction:e._=="none"?void 0:De(t("transitionTimingFunction","")),transitionDuration:e._=="none"?void 0:De(t("transitionDuration",""))})),x("duration(?:$|-)","transitionDuration","transitionDuration",De),x("ease(?:$|-)","transitionTimingFunction","transitionTimingFunction",De),x("delay(?:$|-)","transitionDelay","transitionDelay",De),x("animate(?:$|-)","animation",(e,{theme:t,h:r})=>{let n=De(e),o=n.split(" "),a=t("keyframes",o[0]);return a?{["@keyframes "+(o[0]=r(o[0]))]:a,animation:o.join(" ")}:{animation:n}}),"(transform)-(none)",y("transform",Kr),y("transform-(cpu|gpu)",({1:e})=>({"--tw-transform":Qo(e=="gpu")})),x("scale(-[xy])?-","scale",({1:e,_:t})=>({["--tw-scale"+(e||"-x")]:t,["--tw-scale"+(e||"-y")]:t,...Kr()})),x("-?(rotate)-","rotate",qr),x("-?(translate-[xy])-","translate",qr),x("-?(skew-[xy])-","skew",qr),y("origin-(center|((top|bottom)(-(left|right))?)|left|right)","transformOrigin",qt),"(appearance)-",x("(columns)-"),"(columns)-(\\d+)","(break-(?:before|after|inside))-",x("(cursor)-"),"(cursor)-",y("snap-(none)","scroll-snap-type"),y("snap-(x|y|both)",({1:e})=>({"scroll-snap-type":e+" var(--tw-scroll-snap-strictness)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-scroll-snap-strictness":"proximity"}}})),y("snap-(mandatory|proximity)","--tw-scroll-snap-strictness"),y("snap-(?:(start|end|center)|align-(none))","scroll-snap-align"),y("snap-(normal|always)","scroll-snap-stop"),y("scroll-(auto|smooth)","scroll-behavior"),x("scroll-p([xytrbl])?(?:$|-)","padding",at("scroll-padding")),x("-?scroll-m([xytrbl])?(?:$|-)","scroll-margin",at("scroll-margin")),y("touch-(auto|none|manipulation)","touch-action"),y("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))",({1:e,2:t,3:r})=>({[`--tw-${t?"pan-x":r?"pan-y":e}`]:e,"touch-action":"var(--tw-touch-action)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-pan-x":"var(--tw-empty,/*!*/ /*!*/)","--tw-pan-y":"var(--tw-empty,/*!*/ /*!*/)","--tw-pinch-zoom":"var(--tw-empty,/*!*/ /*!*/)","--tw-touch-action":"var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)"}}})),y("outline-none",{outline:"2px solid transparent","outline-offset":"2px"}),y("outline",{outlineStyle:"solid"}),y("outline-(dashed|dotted|double|hidden)","outlineStyle"),x("(outline-offset)-"),ie("outline-",{opacityVariable:!1,opacitySection:"opacity"}),x("outline-","outlineWidth"),"(pointer-events)-",x("(will-change)-"),"(will-change)-",["resize(?:-(none|x|y))?","resize",({1:e})=>({x:"horizontal",y:"vertical"})[e]||e||"both"],y("select-(none|text|all|auto)","userSelect"),ie("fill-",{section:"fill",opacityVariable:!1,opacitySection:"opacity"}),ie("stroke-",{section:"stroke",opacityVariable:!1,opacitySection:"opacity"}),x("stroke-","strokeWidth"),y("sr-only",{position:"absolute",width:"1px",height:"1px",padding:"0",margin:"-1px",overflow:"hidden",whiteSpace:"nowrap",clip:"rect(0,0,0,0)",borderWidth:"0"}),y("not-sr-only",{position:"static",width:"auto",height:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal",clip:"auto"})];function qt(e){return(typeof e=="string"?e:e[1]).replace(/-/g," ").trim()}function Ko(e){return(typeof e=="string"?e:e[1]).replace("col","column")}function Je(e,t="-"){let r=[];for(let n of e)r.push({t:"top",r:"right",b:"bottom",l:"left"}[n]);return r.join(t)}function De(e){return e&&""+(e._||e)}function Go({$$:e}){return({r:"flex-","":"flex-",w:"space-",u:"space-",n:"space-"}[e[3]||""]||"")+e}function at(e,t=""){return({1:r,_:n})=>{let o={x:"lr",y:"tb"}[r]||r+r;return o?{...xt(e+"-"+Je(o[0])+t,n),...xt(e+"-"+Je(o[1])+t,n)}:xt(e+t,n)}}function Yo(e=""){let t=["blur","brightness","contrast","grayscale","hue-rotate","invert",e&&"opacity","saturate","sepia",!e&&"drop-shadow"].filter(Boolean),r={};for(let n of t)r[`--tw-${e}${n}`]="var(--tw-empty,/*!*/ /*!*/)";return r={[`${e}filter`]:t.map(n=>`var(--tw-${e}${n})`).join(" "),"@layer defaults":{"*,::before,::after,::backdrop":r}},[`(${e}filter)-(none)`,y(`${e}filter`,r),...t.map(n=>x(`${n[0]=="h"?"-?":""}(${e}${n})(?:$|-)`,n,({1:o,_:a})=>({[`--tw-${o}`]:Ce(a).map(s=>`${n}(${s})`).join(" "),...r})))]}function qr({1:e,_:t}){return{["--tw-"+e]:t,...Kr()}}function Kr(){return{transform:"var(--tw-transform)","@layer defaults":{"*,::before,::after,::backdrop":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":Qo()}}}}function Qo(e){return[e?"translate3d(var(--tw-translate-x),var(--tw-translate-y),0)":"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}function Jo({1:e,2:t}){return`${e} ${t} / ${e} ${t}`}function Xo({1:e}){return`repeat(${e},minmax(0,1fr))`}var Tl=Object.create,ea=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,Sl=Object.getOwnPropertyNames,_l=Object.getPrototypeOf,kl=Object.prototype.hasOwnProperty,Cl=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),El=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Sl(t))!kl.call(e,o)&&o!==r&&ea(e,o,{get:()=>t[o],enumerable:!(n=Al(t,o))||n.enumerable});return e},Ll=(e,t,r)=>(r=e!=null?Tl(_l(e)):{},El(t||!e||!e.__esModule?ea(r,"default",{value:e,enumerable:!0}):r,e)),Pl=Cl((e,t)=>{(function(r,n){typeof e=="object"&&typeof t=="object"?t.exports=n():typeof define=="function"&&define.amd?define([],n):typeof e=="object"?e.notie=n():r.notie=n()})(e,function(){return function(r){function n(a){if(o[a])return o[a].exports;var s=o[a]={i:a,l:!1,exports:{}};return r[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var o={};return n.m=r,n.c=o,n.i=function(a){return a},n.d=function(a,s,i){n.o(a,s)||Object.defineProperty(a,s,{configurable:!1,enumerable:!0,get:i})},n.n=function(a){var s=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(s,"a",s),s},n.o=function(a,s){return Object.prototype.hasOwnProperty.call(a,s)},n.p="",n(n.s=1)}([function(r,n){r.exports=function(o){return o.webpackPolyfill||(o.deprecate=function(){},o.paths=[],o.children||(o.children=[]),Object.defineProperty(o,"loaded",{enumerable:!0,get:function(){return o.l}}),Object.defineProperty(o,"id",{enumerable:!0,get:function(){return o.i}}),o.webpackPolyfill=1),o}},function(r,n,o){"use strict";(function(a){var s,i,c,u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l};(function(l,p){u(n)==="object"&&u(a)==="object"?a.exports=p():(i=[],s=p,c=typeof s=="function"?s.apply(n,i):s,c!==void 0&&(a.exports=c))})(void 0,function(){return function(l){function p(f){if(m[f])return m[f].exports;var d=m[f]={i:f,l:!1,exports:{}};return l[f].call(d.exports,d,d.exports,p),d.l=!0,d.exports}var m={};return p.m=l,p.c=m,p.i=function(f){return f},p.d=function(f,d,A){p.o(f,d)||Object.defineProperty(f,d,{configurable:!1,enumerable:!0,get:A})},p.n=function(f){var d=f&&f.__esModule?function(){return f.default}:function(){return f};return p.d(d,"a",d),d},p.o=function(f,d){return Object.prototype.hasOwnProperty.call(f,d)},p.p="",p(p.s=0)}([function(l,p,m){function f(h,U){var P={};for(var G in h)U.indexOf(G)>=0||Object.prototype.hasOwnProperty.call(h,G)&&(P[G]=h[G]);return P}Object.defineProperty(p,"__esModule",{value:!0});var d=typeof Symbol=="function"&&u(Symbol.iterator)==="symbol"?function(h){return typeof h>"u"?"undefined":u(h)}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h>"u"?"undefined":u(h)},A=Object.assign||function(h){for(var U=1;U<arguments.length;U++){var P=arguments[U];for(var G in P)Object.prototype.hasOwnProperty.call(P,G)&&(h[G]=P[G])}return h},S={top:"top",bottom:"bottom"},g={alertTime:3,dateMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],overlayClickDismiss:!0,overlayOpacity:.75,transitionCurve:"ease",transitionDuration:.3,transitionSelector:"all",classes:{container:"notie-container",textbox:"notie-textbox",textboxInner:"notie-textbox-inner",button:"notie-button",element:"notie-element",elementHalf:"notie-element-half",elementThird:"notie-element-third",overlay:"notie-overlay",backgroundSuccess:"notie-background-success",backgroundWarning:"notie-background-warning",backgroundError:"notie-background-error",backgroundInfo:"notie-background-info",backgroundNeutral:"notie-background-neutral",backgroundOverlay:"notie-background-overlay",alert:"notie-alert",inputField:"notie-input-field",selectChoiceRepeated:"notie-select-choice-repeated",dateSelectorInner:"notie-date-selector-inner",dateSelectorUp:"notie-date-selector-up"},ids:{overlay:"notie-overlay"},positions:{alert:S.top,force:S.top,confirm:S.top,input:S.top,select:S.bottom,date:S.top}},v=p.setOptions=function(h){g=A({},g,h,{classes:A({},g.classes,h.classes),ids:A({},g.ids,h.ids),positions:A({},g.positions,h.positions)})},L=function(){return new Promise(function(h){return setTimeout(h,0)})},k=function(h){return new Promise(function(U){return setTimeout(U,1e3*h)})},ee=function(){document.activeElement&&document.activeElement.blur()},w=function(){var h="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(U){var P=16*Math.random()|0,G=U==="x"?P:3&P|8;return G.toString(16)});return"notie-"+h},_={1:g.classes.backgroundSuccess,success:g.classes.backgroundSuccess,2:g.classes.backgroundWarning,warning:g.classes.backgroundWarning,3:g.classes.backgroundError,error:g.classes.backgroundError,4:g.classes.backgroundInfo,info:g.classes.backgroundInfo,5:g.classes.backgroundNeutral,neutral:g.classes.backgroundNeutral},T=function(){return g.transitionSelector+" "+g.transitionDuration+"s "+g.transitionCurve},E=function(h){return h.keyCode===13},B=function(h){return h.keyCode===27},J=function(h,U){h.classList.add(g.classes.container),h.style[U]="-10000px",document.body.appendChild(h),h.style[U]="-"+h.offsetHeight+"px",h.listener&&window.addEventListener("keydown",h.listener),L().then(function(){h.style.transition=T(),h.style[U]=0})},z=function(h,U){var P=document.getElementById(h);P&&(P.style[U]="-"+P.offsetHeight+"px",P.listener&&window.removeEventListener("keydown",P.listener),k(g.transitionDuration).then(function(){P.parentNode&&P.parentNode.removeChild(P)}))},D=function(h,U){var P=document.createElement("div");P.id=g.ids.overlay,P.classList.add(g.classes.overlay),P.classList.add(g.classes.backgroundOverlay),P.style.opacity=0,h&&g.overlayClickDismiss&&(P.onclick=function(){z(h.id,U),X()}),document.body.appendChild(P),L().then(function(){P.style.transition=T(),P.style.opacity=g.overlayOpacity})},X=function(){var h=document.getElementById(g.ids.overlay);h.style.opacity=0,k(g.transitionDuration).then(function(){h.parentNode&&h.parentNode.removeChild(h)})},j=p.hideAlerts=function(h){var U=document.getElementsByClassName(g.classes.alert);if(U.length){for(var P=0;P<U.length;P++){var G=U[P];z(G.id,G.position)}h&&k(g.transitionDuration).then(function(){return h()})}},me=p.alert=function(h){var U=h.type,P=U===void 0?4:U,G=h.text,$=h.time,oe=$===void 0?g.alertTime:$,ce=h.stay,se=ce!==void 0&&ce,F=h.position,W=F===void 0?g.positions.alert||W.top:F;ee(),j();var q=document.createElement("div"),Q=w();q.id=Q,q.position=W,q.classList.add(g.classes.textbox),q.classList.add(_[P]),q.classList.add(g.classes.alert),q.innerHTML='<div class="'+g.classes.textboxInner+'">'+G+"</div>",q.onclick=function(){return z(Q,W)},q.listener=function(M){(E(M)||B(M))&&j()},J(q,W),oe&&oe<1&&(oe=1),!se&&oe&&k(oe).then(function(){return z(Q,W)})},Se=p.force=function(h,U){var P=h.type,G=P===void 0?5:P,$=h.text,oe=h.buttonText,ce=oe===void 0?"OK":oe,se=h.callback,F=h.position,W=F===void 0?g.positions.force||W.top:F;ee(),j();var q=document.createElement("div"),Q=w();q.id=Q;var M=document.createElement("div");M.classList.add(g.classes.textbox),M.classList.add(g.classes.backgroundInfo),M.innerHTML='<div class="'+g.classes.textboxInner+'">'+$+"</div>";var Y=document.createElement("div");Y.classList.add(g.classes.button),Y.classList.add(_[G]),Y.innerHTML=ce,Y.onclick=function(){z(Q,W),X(),se?se():U&&U()},q.appendChild(M),q.appendChild(Y),q.listener=function(le){E(le)&&Y.click()},J(q,W),D()},ve=p.confirm=function(h,U,P){var G=h.text,$=h.submitText,oe=$===void 0?"Yes":$,ce=h.cancelText,se=ce===void 0?"Cancel":ce,F=h.submitCallback,W=h.cancelCallback,q=h.position,Q=q===void 0?g.positions.confirm||Q.top:q;ee(),j();var M=document.createElement("div"),Y=w();M.id=Y;var le=document.createElement("div");le.classList.add(g.classes.textbox),le.classList.add(g.classes.backgroundInfo),le.innerHTML='<div class="'+g.classes.textboxInner+'">'+G+"</div>";var re=document.createElement("div");re.classList.add(g.classes.button),re.classList.add(g.classes.elementHalf),re.classList.add(g.classes.backgroundSuccess),re.innerHTML=oe,re.onclick=function(){z(Y,Q),X(),F?F():U&&U()};var N=document.createElement("div");N.classList.add(g.classes.button),N.classList.add(g.classes.elementHalf),N.classList.add(g.classes.backgroundError),N.innerHTML=se,N.onclick=function(){z(Y,Q),X(),W?W():P&&P()},M.appendChild(le),M.appendChild(re),M.appendChild(N),M.listener=function(ue){E(ue)?re.click():B(ue)&&N.click()},J(M,Q),D(M,Q)},ke=function(h,U,P){var G=h.text,$=h.submitText,oe=$===void 0?"Submit":$,ce=h.cancelText,se=ce===void 0?"Cancel":ce,F=h.submitCallback,W=h.cancelCallback,q=h.position,Q=q===void 0?g.positions.input||Q.top:q,M=f(h,["text","submitText","cancelText","submitCallback","cancelCallback","position"]);ee(),j();var Y=document.createElement("div"),le=w();Y.id=le;var re=document.createElement("div");re.classList.add(g.classes.textbox),re.classList.add(g.classes.backgroundInfo),re.innerHTML='<div class="'+g.classes.textboxInner+'">'+G+"</div>";var N=document.createElement("input");N.classList.add(g.classes.inputField),N.setAttribute("autocapitalize",M.autocapitalize||"none"),N.setAttribute("autocomplete",M.autocomplete||"off"),N.setAttribute("autocorrect",M.autocorrect||"off"),N.setAttribute("autofocus",M.autofocus||"true"),N.setAttribute("inputmode",M.inputmode||"verbatim"),N.setAttribute("max",M.max||""),N.setAttribute("maxlength",M.maxlength||""),N.setAttribute("min",M.min||""),N.setAttribute("minlength",M.minlength||""),N.setAttribute("placeholder",M.placeholder||""),N.setAttribute("spellcheck",M.spellcheck||"default"),N.setAttribute("step",M.step||"any"),N.setAttribute("type",M.type||"text"),N.value=M.value||"",M.allowed&&(N.oninput=function(){var he=void 0;if(Array.isArray(M.allowed)){for(var Te="",Be=M.allowed,Ne=0;Ne<Be.length;Ne++)Be[Ne]==="an"?Te+="0-9a-zA-Z":Be[Ne]==="a"?Te+="a-zA-Z":Be[Ne]==="n"&&(Te+="0-9"),Be[Ne]==="s"&&(Te+=" ");he=new RegExp("[^"+Te+"]","g")}else d(M.allowed)==="object"&&(he=M.allowed);N.value=N.value.replace(he,"")});var ue=document.createElement("div");ue.classList.add(g.classes.button),ue.classList.add(g.classes.elementHalf),ue.classList.add(g.classes.backgroundSuccess),ue.innerHTML=oe,ue.onclick=function(){z(le,Q),X(),F?F(N.value):U&&U(N.value)};var Le=document.createElement("div");Le.classList.add(g.classes.button),Le.classList.add(g.classes.elementHalf),Le.classList.add(g.classes.backgroundError),Le.innerHTML=se,Le.onclick=function(){z(le,Q),X(),W?W(N.value):P&&P(N.value)},Y.appendChild(re),Y.appendChild(N),Y.appendChild(ue),Y.appendChild(Le),Y.listener=function(he){E(he)?ue.click():B(he)&&Le.click()},J(Y,Q),N.focus(),D(Y,Q)};p.input=ke;var lt=p.select=function(h,U){var P=h.text,G=h.cancelText,$=G===void 0?"Cancel":G,oe=h.cancelCallback,ce=h.choices,se=h.position,F=se===void 0?g.positions.select||F.top:se;ee(),j();var W=document.createElement("div"),q=w();W.id=q;var Q=document.createElement("div");Q.classList.add(g.classes.textbox),Q.classList.add(g.classes.backgroundInfo),Q.innerHTML='<div class="'+g.classes.textboxInner+'">'+P+"</div>",W.appendChild(Q),ce.forEach(function(Y,le){var re=Y.type,N=re===void 0?1:re,ue=Y.text,Le=Y.handler,he=document.createElement("div");he.classList.add(_[N]),he.classList.add(g.classes.button),he.classList.add(g.classes.selectChoice);var Te=ce[le+1];Te&&!Te.type&&(Te.type=1),Te&&Te.type===N&&he.classList.add(g.classes.selectChoiceRepeated),he.innerHTML=ue,he.onclick=function(){z(q,F),X(),Le()},W.appendChild(he)});var M=document.createElement("div");M.classList.add(g.classes.backgroundNeutral),M.classList.add(g.classes.button),M.innerHTML=$,M.onclick=function(){z(q,F),X(),oe?oe():U&&U()},W.appendChild(M),W.listener=function(Y){B(Y)&&M.click()},J(W,F),D(W,F)},ct=p.date=function(h,U,P){var G=h.value,$=G===void 0?new Date:G,oe=h.submitText,ce=oe===void 0?"OK":oe,se=h.cancelText,F=se===void 0?"Cancel":se,W=h.submitCallback,q=h.cancelCallback,Q=h.position,M=Q===void 0?g.positions.date||M.top:Q;ee(),j();var Y="&#9662",le=document.createElement("div"),re=document.createElement("div"),N=document.createElement("div"),ue=function(ne){le.innerHTML=g.dateMonths[ne.getMonth()],re.innerHTML=ne.getDate(),N.innerHTML=ne.getFullYear()},Le=function(ne){var Me=new Date($.getFullYear(),$.getMonth()+1,0).getDate(),et=ne.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,2);Number(et)>Me&&(et=Me.toString()),ne.target.textContent=et,Number(et)<1&&(et="1"),$.setDate(Number(et))},he=function(ne){var Me=ne.target.textContent.replace(/^0+/,"").replace(/[^\d]/g,"").slice(0,4);ne.target.textContent=Me,$.setFullYear(Number(Me))},Te=function(ne){ue($)},Be=function(ne){var Me=new Date($.getFullYear(),$.getMonth()+ne+1,0).getDate();$.getDate()>Me&&$.setDate(Me),$.setMonth($.getMonth()+ne),ue($)},Ne=function(ne){$.setDate($.getDate()+ne),ue($)},pn=function(ne){var Me=$.getFullYear()+ne;Me<0?$.setFullYear(0):$.setFullYear($.getFullYear()+ne),ue($)},Ve=document.createElement("div"),er=w();Ve.id=er;var tr=document.createElement("div");tr.classList.add(g.classes.backgroundInfo);var Pe=document.createElement("div");Pe.classList.add(g.classes.dateSelectorInner);var Xe=document.createElement("div");Xe.classList.add(g.classes.button),Xe.classList.add(g.classes.elementThird),Xe.classList.add(g.classes.dateSelectorUp),Xe.innerHTML=Y;var Qe=document.createElement("div");Qe.classList.add(g.classes.button),Qe.classList.add(g.classes.elementThird),Qe.classList.add(g.classes.dateSelectorUp),Qe.innerHTML=Y;var Ze=document.createElement("div");Ze.classList.add(g.classes.button),Ze.classList.add(g.classes.elementThird),Ze.classList.add(g.classes.dateSelectorUp),Ze.innerHTML=Y,le.classList.add(g.classes.element),le.classList.add(g.classes.elementThird),le.innerHTML=g.dateMonths[$.getMonth()],re.classList.add(g.classes.element),re.classList.add(g.classes.elementThird),re.setAttribute("contentEditable",!0),re.addEventListener("input",Le),re.addEventListener("blur",Te),re.innerHTML=$.getDate(),N.classList.add(g.classes.element),N.classList.add(g.classes.elementThird),N.setAttribute("contentEditable",!0),N.addEventListener("input",he),N.addEventListener("blur",Te),N.innerHTML=$.getFullYear();var ut=document.createElement("div");ut.classList.add(g.classes.button),ut.classList.add(g.classes.elementThird),ut.innerHTML=Y;var dt=document.createElement("div");dt.classList.add(g.classes.button),dt.classList.add(g.classes.elementThird),dt.innerHTML=Y;var gt=document.createElement("div");gt.classList.add(g.classes.button),gt.classList.add(g.classes.elementThird),gt.innerHTML=Y,Xe.onclick=function(){return Be(1)},Qe.onclick=function(){return Ne(1)},Ze.onclick=function(){return pn(1)},ut.onclick=function(){return Be(-1)},dt.onclick=function(){return Ne(-1)},gt.onclick=function(){return pn(-1)};var qe=document.createElement("div");qe.classList.add(g.classes.button),qe.classList.add(g.classes.elementHalf),qe.classList.add(g.classes.backgroundSuccess),qe.innerHTML=ce,qe.onclick=function(){z(er,M),X(),W?W($):U&&U($)};var Ke=document.createElement("div");Ke.classList.add(g.classes.button),Ke.classList.add(g.classes.elementHalf),Ke.classList.add(g.classes.backgroundError),Ke.innerHTML=F,Ke.onclick=function(){z(er,M),X(),q?q($):P&&P($)},Pe.appendChild(Xe),Pe.appendChild(Qe),Pe.appendChild(Ze),Pe.appendChild(le),Pe.appendChild(re),Pe.appendChild(N),Pe.appendChild(ut),Pe.appendChild(dt),Pe.appendChild(gt),tr.appendChild(Pe),Ve.appendChild(tr),Ve.appendChild(qe),Ve.appendChild(Ke),Ve.listener=function(ne){E(ne)?qe.click():B(ne)&&Ke.click()},J(Ve,M),D(Ve,M)};p.default={alert:me,force:Se,confirm:ve,input:ke,select:lt,date:ct,setOptions:v,hideAlerts:j}}])})}).call(n,o(0)(r))}])})}),Ml=Ll(Pl()),{default:Zo,...Rl}=Ml,Gr=Zo!==void 0?Zo:Rl;var cf=Symbol("clean");var uf=Symbol();function Yr(e,t){if(typeof e=="string")return t(e);{let r={};for(let n in e)r[n]=Yr(e[n],t);return r}}function ra(e){return t=>{if(t.transform){let r=t.transform;return t=t.input,{input:t,transform(n,o,a){let s=e(n,o,...a);return(...i)=>r(n,s,i)}}}else return{input:t,transform(r,n,o){return e(r,n,...o)}}}}var xf=ra((e,t,r)=>Yr(t,n=>{for(let o in r)n=n.replace(new RegExp(`{${o}}`,"g"),r[o]);return n})),wf=ra((e,t,r)=>{let n=new Intl.PluralRules(e).select(r);return n in t||(n="many"),Yr(t[n],o=>o.replace(/{count}/g,r))});var Jr=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function Xr(e,t,r,n){e.addEventListener?e.addEventListener(t,r,n):e.attachEvent&&e.attachEvent("on".concat(t),function(){r(window.event)})}function sa(e,t){for(var r=t.slice(0,t.length-1),n=0;n<r.length;n++)r[n]=e[r[n].toLowerCase()];return r}function la(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");for(var t=e.split(","),r=t.lastIndexOf("");r>=0;)t[r-1]+=",",t.splice(r,1),r=t.lastIndexOf("");return t}function Il(e,t){for(var r=e.length>=t.length?e:t,n=e.length>=t.length?t:e,o=!0,a=0;a<r.length;a++)n.indexOf(r[a])===-1&&(o=!1);return o}var Tt={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":Jr?173:189,"=":Jr?61:187,";":Jr?59:186,"'":222,"[":219,"]":221,"\\":220},Ie={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},en={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},pe={16:!1,18:!1,17:!1,91:!1},ae={};for(vt=1;vt<20;vt++)Tt["f".concat(vt)]=111+vt;var vt,te=[],na=!1,ca="all",ua=[],Gt=function(e){return Tt[e.toLowerCase()]||Ie[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},Nl=function(e){return Object.keys(Tt).find(function(t){return Tt[t]===e})},$l=function(e){return Object.keys(Ie).find(function(t){return Ie[t]===e})};function da(e){ca=e||"all"}function At(){return ca||"all"}function Ul(){return te.slice(0)}function Bl(){return te.map(function(e){return Nl(e)||$l(e)||String.fromCharCode(e)})}function jl(e){var t=e.target||e.srcElement,r=t.tagName,n=!0;return(t.isContentEditable||(r==="INPUT"||r==="TEXTAREA"||r==="SELECT")&&!t.readOnly)&&(n=!1),n}function Fl(e){return typeof e=="string"&&(e=Gt(e)),te.indexOf(e)!==-1}function zl(e,t){var r,n;e||(e=At());for(var o in ae)if(Object.prototype.hasOwnProperty.call(ae,o))for(r=ae[o],n=0;n<r.length;)r[n].scope===e?r.splice(n,1):n++;At()===e&&da(t||"all")}function Hl(e){var t=e.keyCode||e.which||e.charCode,r=te.indexOf(t);if(r>=0&&te.splice(r,1),e.key&&e.key.toLowerCase()==="meta"&&te.splice(0,te.length),(t===93||t===224)&&(t=91),t in pe){pe[t]=!1;for(var n in Ie)Ie[n]===t&&(Oe[n]=!1)}}function Wl(e){if(typeof e>"u")Object.keys(ae).forEach(function(s){return delete ae[s]});else if(Array.isArray(e))e.forEach(function(s){s.key&&Qr(s)});else if(typeof e=="object")e.key&&Qr(e);else if(typeof e=="string"){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=r[0],a=r[1];typeof o=="function"&&(a=o,o=""),Qr({key:e,scope:o,method:a,splitKey:"+"})}}var Qr=function(e){var t=e.key,r=e.scope,n=e.method,o=e.splitKey,a=o===void 0?"+":o,s=la(t);s.forEach(function(i){var c=i.split(a),u=c.length,l=c[u-1],p=l==="*"?"*":Gt(l);if(ae[p]){r||(r=At());var m=u>1?sa(Ie,c):[];ae[p]=ae[p].filter(function(f){var d=n?f.method===n:!0;return!(d&&f.scope===r&&Il(f.mods,m))})}})};function oa(e,t,r,n){if(t.element===n){var o;if(t.scope===r||t.scope==="all"){o=t.mods.length>0;for(var a in pe)Object.prototype.hasOwnProperty.call(pe,a)&&(!pe[a]&&t.mods.indexOf(+a)>-1||pe[a]&&t.mods.indexOf(+a)===-1)&&(o=!1);(t.mods.length===0&&!pe[16]&&!pe[18]&&!pe[17]&&!pe[91]||o||t.shortcut==="*")&&t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0))}}}function aa(e,t){var r=ae["*"],n=e.keyCode||e.which||e.charCode;if(Oe.filter.call(this,e)){if((n===93||n===224)&&(n=91),te.indexOf(n)===-1&&n!==229&&te.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(d){var A=en[d];e[d]&&te.indexOf(A)===-1?te.push(A):!e[d]&&te.indexOf(A)>-1?te.splice(te.indexOf(A),1):d==="metaKey"&&e[d]&&te.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(te=te.slice(te.indexOf(A))))}),n in pe){pe[n]=!0;for(var o in Ie)Ie[o]===n&&(Oe[o]=!0);if(!r)return}for(var a in pe)Object.prototype.hasOwnProperty.call(pe,a)&&(pe[a]=e[en[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(te.indexOf(17)===-1&&te.push(17),te.indexOf(18)===-1&&te.push(18),pe[17]=!0,pe[18]=!0);var s=At();if(r)for(var i=0;i<r.length;i++)r[i].scope===s&&(e.type==="keydown"&&r[i].keydown||e.type==="keyup"&&r[i].keyup)&&oa(e,r[i],s,t);if(n in ae){for(var c=0;c<ae[n].length;c++)if((e.type==="keydown"&&ae[n][c].keydown||e.type==="keyup"&&ae[n][c].keyup)&&ae[n][c].key){for(var u=ae[n][c],l=u.splitKey,p=u.key.split(l),m=[],f=0;f<p.length;f++)m.push(Gt(p[f]));m.sort().join("")===te.sort().join("")&&oa(e,u,s,t)}}}}function Vl(e){return ua.indexOf(e)>-1}function Oe(e,t,r){te=[];var n=la(e),o=[],a="all",s=document,i=0,c=!1,u=!0,l="+",p=!1;for(r===void 0&&typeof t=="function"&&(r=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(a=t.scope),t.element&&(s=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(u=t.keydown),t.capture!==void 0&&(p=t.capture),typeof t.splitKey=="string"&&(l=t.splitKey)),typeof t=="string"&&(a=t);i<n.length;i++)e=n[i].split(l),o=[],e.length>1&&(o=sa(Ie,e)),e=e[e.length-1],e=e==="*"?"*":Gt(e),e in ae||(ae[e]=[]),ae[e].push({keyup:c,keydown:u,scope:a,mods:o,shortcut:n[i],method:r,key:n[i],splitKey:l,element:s});typeof s<"u"&&!Vl(s)&&window&&(ua.push(s),Xr(s,"keydown",function(m){aa(m,s)},p),na||(na=!0,Xr(window,"focus",function(){te=[]},p)),Xr(s,"keyup",function(m){aa(m,s),Hl(m)},p))}function ql(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(ae).forEach(function(r){var n=ae[r].filter(function(o){return o.scope===t&&o.shortcut===e});n.forEach(function(o){o&&o.method&&o.method()})})}var Zr={getPressedKeyString:Bl,setScope:da,getScope:At,deleteScope:zl,getPressedKeyCodes:Ul,isPressed:Fl,filter:jl,trigger:ql,unbind:Wl,keyMap:Tt,modifier:Ie,modifierMap:en};for(Kt in Zr)Object.prototype.hasOwnProperty.call(Zr,Kt)&&(Oe[Kt]=Zr[Kt]);var Kt;typeof document<"u"&&(ia=window.hotkeys,Oe.noConflict=function(e){return e&&window.hotkeys===Oe&&(window.hotkeys=ia),Oe},window.hotkeys=Oe);var ia;var qf=Gr.alert;var tn=class{#e=performance.now();reset(){this.#e=performance.now()}stop(t){let r=performance.now(),n=Math.round(r-this.#e),o=Ae.green;n>1e4?o=Ae.red:n>1e3&&(o=Ae.yellow),console.debug(Ae.dim($e+" TIMING:"),t,"in",o(n+"ms")),this.#e=r}},St=class{#e=1;get level(){return this.#e}setLevel(t){switch(t){case"debug":this.#e=0;break;case"info":this.#e=1;break;case"warn":this.#e=2;break;case"error":this.#e=3;break;case"fatal":this.#e=4;break}}debug(...t){this.#e<=0&&console.log(Ae.dim($e+" DEBUG:"),...t)}v(...t){this.#e<=0&&console.log(Ae.dim($e+" VERBOSE:"),...t)}info(...t){this.#e<=1&&console.log(Ae.green($e+" INFO:"),...t)}l(...t){this.#e<=1&&console.log(Ae.green($e+" TEMP INFO:"),...t)}warn(...t){this.#e<=2&&console.warn(Ae.yellow($e+" WARN:"),...t)}error(...t){this.#e<=3&&console.error(Ae.red($e+" ERROR:"),...t)}fatal(...t){this.#e<=4&&console.error(Ae.red($e+" FATAL:"),...t)}timing(){return this.level===0?new tn:{reset:()=>{},stop:()=>{}}}},R=new St;function ga(e){let t=C.runtime.getURL(Lt),r=new URL(t);return(e.startsWith("http")||!En())&&r.searchParams.set("file",e),r.href}function fa(e){return new URL(e)?.pathname.toLowerCase().endsWith(".pdf")}var it=class extends Error{constructor(r,n,o){super(n);this.name=r,o&&(this.details=o)}};async function He(e){let t;if(e&&e.retry&&e.retry>0)try{t=await gr(pa.bind(null,e),{multiplier:2,maxAttempts:e.retry})}catch(r){throw r&&r.name==="RetryError"&&r.cause?r.cause:r}else t=await pa(e);return t}async function pa(e){e.body;let{url:t,responseType:r,...n}=e;r||(r="json"),n={mode:"cors",...n};let a=await(e.fetchPolyfill||fetch)(t,n);if(a.ok&&a.status>=200&&a.status<400){if(r==="json")return await a.json();if(r==="text")return await a.text();if(r==="raw"){let s=await a.text(),i=Object.fromEntries([...a.headers.entries()]),c=a.url;return c||(a.headers.get("X-Final-URL")?c=a.headers.get("X-Final-URL"):c=t),{body:s,headers:i,status:a.status,statusText:a.statusText,url:c}}}else{let s;try{s=await a.text()}catch(i){R.error("parse response failed",i)}throw s&&R.error("fail response",s),new it("fetchError",a.status+": "+a.statusText||"",s)}}var ma=["*://*/*","*","*://*"],ba="immersive-translate-wildcard-placeholder.com";function Kl(e,t){let r=[];if(!t||(t&&!Array.isArray(t)?r=[t]:r=t,r.length===0))return null;if(r.some(s=>ma.includes(s)))return e;let n=new URL(e);n.hash="",n.search="";let o=n.href,a=n.hostname;if(r&&r.length>0){let s=r.find(i=>{let c=i;if(i===a)return!0;if(ma.includes(i))return!0;if(!i.includes("*")&&i.includes("://")){try{let u=new URL(i);return u.pathname==="/"&&!i.endsWith("/")?u.hostname===a:Yl(o,i)}catch{}return!1}else{let u,l=i;i.includes("://")?u=i.split("://")[0]:(u="*",i="https://"+i);let p=i.replace(/\*/g,ba),m;try{m=new URL(p)}catch{return R.debug("invalid match pattern",p,"raw match value:",l),!1}let f=m.hostname,d=m.pathname;d==="/"&&(l.replace("://","").includes("/")||(d="/*"));let A=Gl(u+":",ha(f),ha(d));if(A){let S=new URL(o);return S.port="",A.test(S.href)}else return!1}});if(s)return s}return null}function ha(e){return e.replace(ba,"*")}function Gl(e,t,r){let n="^";return e==="*:"?n+="(http:|https:|file:)":n+=e,n+="//",t&&(e==="file:"||(t==="*"?n+="[^/]+?":(t.match(/^\*\./)&&(n+="[^/]*?",t=t.substring(2)),n+=t.replace(/\./g,"\\.").replace(/\*/g,"[^/]*")))),r?r==="*"||r==="/*"?n+="(/.*)?":r.includes("*")?(n+=r.replace(/\*/g,".*?"),n+="/?"):n+=r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):n+="/?",n+="$",new RegExp(n)}function ya(e,t){return Kl(e,t)!==null}function Yl(e,t){let r=new URL(e),n=new URL(t);return r.hostname===n.hostname&&r.pathname===n.pathname&&r.protocol===n.protocol&&r.port===n.port}var Jl="https://www.googleapis.com/oauth2/v3/tokeninfo",wa=vn;async function va(e){let t=C?.identity?.getRedirectURL();if(R.debug("REDIRECT_URL",t),typeof C?.runtime?.getBrowserInfo=="function"){let n=await C?.runtime?.getBrowserInfo();n&&n.name==="Firefox"&&(n.version.split(".")[0]||0)>=86&&(t="http://127.0.0.1/mozoauth2/"+t.split(".")[0].replace(/https?:\/\//,""),R.debug("browserInfo",n),R.debug("Firefox detected, using loopback addresses "+t))}if(!t)throw new Error("Redirect URL is not available");let r=["https://www.googleapis.com/auth/drive.appdata"];return`https://accounts.google.com/o/oauth2/auth?client_id=${wa}&response_type=token&redirect_uri=${encodeURIComponent(t)}&scope=${encodeURIComponent(r.join(" "))}&state=${encodeURIComponent(JSON.stringify(e))}`}function Xl(e){let t=e.match(/[#?](.*)/);return!t||t.length<1?"":new URLSearchParams(t[1].split("#")[0]).get("access_token")}function xa(e){if(!e)throw"Authorization failure";let t=`${Jl}?access_token=${e}`,r=new Request(t,{method:"GET"});function n(o){return new Promise((a,s)=>{o.status!=200&&s("Token validation error"),o.json().then(i=>{i.aud&&i.aud===wa?a(e):s("Token validation error")})})}return fetch(r).then(n)}async function Ql(e){let t=await va(e);return R.debug("redirect url",t),C.identity.launchWebAuthFlow({interactive:!0,url:t})}async function Ta(e){let t=await va(e);if(Sn()){let r=await C.storage.local.get(Pt);if(R.debug("google drive token",r),r[Pt]){let n=r[Pt];return await xa(n).catch(o=>{throw globalThis.open(t,"_self"),new Error("tokenValidateErrorRedirectToAuthUrl")}),n}return R.debug("AUTH_URL",t),globalThis.open(t,"_self"),null}else return Ql(e).then(r=>(R.debug("google drive callback redirectURL",r),Xl(r))).then(xa)}var Yt=class{constructor(t){this.accessToken=t}async upload(t,r){let n=new FormData,o={...t,mimeType:"application/json"};return R.debug("metadata",o,this.accessToken),n.append("metadata",new Blob([JSON.stringify(o)],{type:"application/json; charset=UTF-8"})),n.append("file",r),await He({url:"https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",method:"POST",headers:{Authorization:`Bearer ${this.accessToken}`},body:n})}async list(t,r){let n=new URL("https://www.googleapis.com/drive/v3/files");t&&n.searchParams.append("pageToken",t),r&&n.searchParams.append("q",r),n.searchParams.append("spaces","appDataFolder"),n.searchParams.append("fields","files(id,name,createdTime,modifiedTime,size)"),n.searchParams.append("pageSize","100"),n.searchParams.append("orderBy","createdTime desc");try{return R.debug("list api:",n.toString(),this.accessToken),await He({url:n.toString(),headers:{Authorization:`Bearer ${this.accessToken}`}})}catch(o){throw R.error("fetch google ip error",o),o}}async listAll(){let t=[],r="";do{let{nextPageToken:n,files:o}=await this.list(r).catch(a=>{throw a});t.push(...o),r=n||""}while(r);return t}async getConfig(t){try{return await He({url:`https://www.googleapis.com/drive/v3/files/${t}?alt=media`,headers:{Authorization:`Bearer ${this.accessToken}`}})}catch(r){return R.error("get config error, use default",r),{}}}async delete(t){await He({responseType:"text",url:`https://www.googleapis.com/drive/v3/files/${t}`,method:"DELETE",headers:{Authorization:`Bearer ${this.accessToken}`}})}findByName(t){return this.list(void 0,`name = '${t}'`)}uploadConfig(t){let r=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return this.upload({name:Mt,parents:["appDataFolder"]},r)}updateConfig(t,r){let n=new Blob([JSON.stringify(r,null,2)],{type:"application/json"});return this.updateContent(t,n)}async updateContent(t,r){return await He({url:`https://www.googleapis.com/upload/drive/v3/files/${t}?uploadType=media`,method:"PATCH",headers:{Authorization:`Bearer ${this.accessToken}`},body:r})}};async function Aa(e,t,r,n,o,a,s){R.debug(`autoSyncStrategy accessToken: ${e}`);let i=new Yt(e);try{let c=(await i.findByName(Mt)).files;R.debug("files",c);let u=c[0]?.id,l=null;if(u&&(l=await i.getConfig(u).then(p=>({fileId:u,config:p}))),l){let{config:p,fileId:m}=l,f=p.updatedAt?new Date(p.updatedAt):new Date(0),d=t.updatedAt?new Date(t.updatedAt):new Date(0);if(R.debug("remoteUpdatedAt",f,"localUpdatedAt",d),f>d)R.debug("remote is newer, update local config",p),r(p),a&&a(!0);else if(f.getTime()===d.getTime())R.debug("remote and local are the same, do nothing"),a&&a(!1);else if(f<d)R.debug("local is newer, update remote config",t),await i.updateConfig(m,t),a&&a(!0);else{s&&s(": unknown error");return}n(new Date().toISOString())}else if(l===null)if(t){if(!t.updatedAt){let p=new Date().toISOString();o(p),t.updatedAt=p}await i.uploadConfig(t),n(new Date().toISOString()),a&&a(!0)}else s&&s(": Local Config is empty");else s&&s(": latestConfig is "+l)}catch(c){R.error("syncLatestWithDrive error",c),s&&s(": "+c.message)}}async function _t(){let e=await lr(),t=await mt();R.debug("background_alarms","checkAutoSync",e.autoSync),e.autoSync}function Sa(e,t){let r=new Map;for(let a of t)r.set(a.header.toLowerCase(),a);let n=[],o=e.filter(a=>{let s=r.get(a.name.toLowerCase());if(s){if(s.operation==="remove")return!1;if(s.operation==="set")return!1}return!0});for(let a of t)a.operation==="set"&&n.push({name:a.header,value:a.value||""});return o.concat(n)}var Jt=[{id:1,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://httpstat.us/429"},{header:"origin",operation:"set",value:"https://httpstat.us/429"},{header:"DNT",operation:"set",value:"1"},{header:"sec-fetch-site",operation:"set",value:"same-site"}]},condition:{urlFilter:"https://httpstat.us/429",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:2,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"https://www.deepl.com"},{header:"DNT",operation:"set",value:"1"},{header:"cookie",operation:"remove"},{header:"sec-fetch-site",operation:"set",value:"same-site"}]},condition:{urlFilter:"https://www2.deepl.com/jsonrpc*",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:200,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"Referer",operation:"set",value:"https://www.deepl.com/"},{header:"origin",operation:"set",value:"https://www.deepl.com"},{header:"DNT",operation:"set",value:"1"},{header:"sec-fetch-site",operation:"set",value:"same-site"}]},condition:{urlFilter:"https://api.deepl.com/jsonrpc*",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:3,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"origin",operation:"set",value:"chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"}]},condition:{urlFilter:"https://transmart.qq.com/api/imt",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}},{id:4,priority:1,action:{type:"modifyHeaders",requestHeaders:[{header:"origin",operation:"set",value:"chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"}]},condition:{urlFilter:"https://translate.volcengine.com/crx/translate/v1/",resourceTypes:["xmlhttprequest"],domainType:"thirdParty",initiatorDomains:["cfhamdkdjgoelclgllcoikbckcfpaklj","bpoadfkcbjbfhfodiogcnhhhpibjhbnh"]}}];var kt=new Map,Ct=class{constructor(t,r=!1){this.logger=new St,r&&this.logger.setLevel("debug"),this.fromType=t,kt.has(t)||(kt.set(t,new Map),C.runtime.onMessage.addListener((n,o,a)=>{let s=n.from,i=n.to,c,u,l;o.tab&&o.tab.id&&(c=o.tab.id,s=`${s}:${c}`,u=o.tab.url,l=o.tab.active),this.logger.debug(`${n.to} received message [${n.payload.method}] from ${n.from}`,n.payload.data?n.payload.data:" ");let p=nn(i),{type:m,name:f}=p;if(m!==t)return!1;let d=nn(s),S=kt.get(m).get(f);if(!S)return this.logger.debug(`no message handler for ${m}:${i}, but it's ok`),!1;let{messageHandler:g,sync:v}=S,L={type:t,name:d.name,id:c,url:u,active:l};if(v){try{let k=g(n.payload,L);a({ok:!0,data:k})}catch(k){a({ok:!1,errorName:k.name,errorMessage:k.message,errorDetails:k.details})}return!1}else return g(n.payload,L).then(k=>{a({ok:!0,data:k})}).catch(k=>{a({ok:!1,errorName:k.name,errorMessage:k.message,errorDetails:k.details})}),!0}))}getConnection(t,r,n){let o=!1;n&&n.sync&&(o=!0);let a=this.fromType,s=kt.get(a);if(s.has(t))return s.get(t).connectionInstance;{let i=new rn(`${a}:${t}`,this.logger);return kt.get(a).set(t,{messageHandler:r,sync:o,connectionInstance:i}),i}}},rn=class{constructor(t,r){this.from=t,this.logger=r}async sendMessage(t,r){let n=nn(t),{type:o,id:a}=n;if(o!=="content_script"){let s={to:t,from:this.from,payload:r};this.logger.debug(`${s.from} send message [${s.payload.method}] to ${s.to}`,s.payload.data?s.payload.data:" ");try{let i=await C.runtime.sendMessage(s);return _a(s,i,this.logger)}catch(i){if(o==="popup"){let c=`popup ${t} is not active, so the message does not send, ignore this error, ${JSON.stringify(r)}`;return this.logger.debug(c,r,t,i),Promise.resolve({message:c})}else throw i}}else{let s={from:this.from,to:t,payload:r};this.logger.debug(`${s.from} send message [${s.payload.method}] to ${s.to}`,s.payload.data?s.payload.data:" ");let i=await C.tabs.sendMessage(a,s);return _a(s,i,this.logger)}}};function _a(e,t,r){if(t.ok)return r.debug(`${e.from} received response from ${e.to}:`,t.data?t.data:" "),t.data;throw new it(t.errorName||"UnknownError",t.errorMessage||"Unknown error",t.errorDetails)}function nn(e){let t=e.split(":");if(t.length<2)throw new Error("not a valid to string");let r={type:t[0],name:t[1]};if(t[0]==="content_script"){let n=parseInt(t[2]);if(!isNaN(n))r.id=n;else throw new Error("tab id not a valid number")}return r}function We(e,t){var r=(e&65535)+(t&65535),n=(e>>16)+(t>>16)+(r>>16);return n<<16|r&65535}function Zl(e,t){return e<<t|e>>>32-t}function Qt(e,t,r,n,o,a){return We(Zl(We(We(t,e),We(n,a)),o),r)}function be(e,t,r,n,o,a,s){return Qt(t&r|~t&n,e,t,o,a,s)}function ye(e,t,r,n,o,a,s){return Qt(t&n|r&~n,e,t,o,a,s)}function xe(e,t,r,n,o,a,s){return Qt(t^r^n,e,t,o,a,s)}function we(e,t,r,n,o,a,s){return Qt(r^(t|~n),e,t,o,a,s)}function Xt(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var r,n,o,a,s,i=1732584193,c=-271733879,u=-1732584194,l=271733878;for(r=0;r<e.length;r+=16)n=i,o=c,a=u,s=l,i=be(i,c,u,l,e[r],7,-680876936),l=be(l,i,c,u,e[r+1],12,-389564586),u=be(u,l,i,c,e[r+2],17,606105819),c=be(c,u,l,i,e[r+3],22,-1044525330),i=be(i,c,u,l,e[r+4],7,-176418897),l=be(l,i,c,u,e[r+5],12,1200080426),u=be(u,l,i,c,e[r+6],17,-1473231341),c=be(c,u,l,i,e[r+7],22,-45705983),i=be(i,c,u,l,e[r+8],7,1770035416),l=be(l,i,c,u,e[r+9],12,-1958414417),u=be(u,l,i,c,e[r+10],17,-42063),c=be(c,u,l,i,e[r+11],22,-1990404162),i=be(i,c,u,l,e[r+12],7,1804603682),l=be(l,i,c,u,e[r+13],12,-40341101),u=be(u,l,i,c,e[r+14],17,-1502002290),c=be(c,u,l,i,e[r+15],22,1236535329),i=ye(i,c,u,l,e[r+1],5,-165796510),l=ye(l,i,c,u,e[r+6],9,-1069501632),u=ye(u,l,i,c,e[r+11],14,643717713),c=ye(c,u,l,i,e[r],20,-373897302),i=ye(i,c,u,l,e[r+5],5,-701558691),l=ye(l,i,c,u,e[r+10],9,38016083),u=ye(u,l,i,c,e[r+15],14,-660478335),c=ye(c,u,l,i,e[r+4],20,-405537848),i=ye(i,c,u,l,e[r+9],5,568446438),l=ye(l,i,c,u,e[r+14],9,-1019803690),u=ye(u,l,i,c,e[r+3],14,-187363961),c=ye(c,u,l,i,e[r+8],20,1163531501),i=ye(i,c,u,l,e[r+13],5,-1444681467),l=ye(l,i,c,u,e[r+2],9,-51403784),u=ye(u,l,i,c,e[r+7],14,1735328473),c=ye(c,u,l,i,e[r+12],20,-1926607734),i=xe(i,c,u,l,e[r+5],4,-378558),l=xe(l,i,c,u,e[r+8],11,-2022574463),u=xe(u,l,i,c,e[r+11],16,1839030562),c=xe(c,u,l,i,e[r+14],23,-35309556),i=xe(i,c,u,l,e[r+1],4,-1530992060),l=xe(l,i,c,u,e[r+4],11,1272893353),u=xe(u,l,i,c,e[r+7],16,-155497632),c=xe(c,u,l,i,e[r+10],23,-1094730640),i=xe(i,c,u,l,e[r+13],4,681279174),l=xe(l,i,c,u,e[r],11,-358537222),u=xe(u,l,i,c,e[r+3],16,-722521979),c=xe(c,u,l,i,e[r+6],23,76029189),i=xe(i,c,u,l,e[r+9],4,-640364487),l=xe(l,i,c,u,e[r+12],11,-421815835),u=xe(u,l,i,c,e[r+15],16,530742520),c=xe(c,u,l,i,e[r+2],23,-995338651),i=we(i,c,u,l,e[r],6,-198630844),l=we(l,i,c,u,e[r+7],10,1126891415),u=we(u,l,i,c,e[r+14],15,-1416354905),c=we(c,u,l,i,e[r+5],21,-57434055),i=we(i,c,u,l,e[r+12],6,1700485571),l=we(l,i,c,u,e[r+3],10,-1894986606),u=we(u,l,i,c,e[r+10],15,-1051523),c=we(c,u,l,i,e[r+1],21,-2054922799),i=we(i,c,u,l,e[r+8],6,1873313359),l=we(l,i,c,u,e[r+15],10,-30611744),u=we(u,l,i,c,e[r+6],15,-1560198380),c=we(c,u,l,i,e[r+13],21,1309151649),i=we(i,c,u,l,e[r+4],6,-145523070),l=we(l,i,c,u,e[r+11],10,-1120210379),u=we(u,l,i,c,e[r+2],15,718787259),c=we(c,u,l,i,e[r+9],21,-343485551),i=We(i,n),c=We(c,o),u=We(u,a),l=We(l,s);return[i,c,u,l]}function ka(e){var t,r="",n=e.length*32;for(t=0;t<n;t+=8)r+=String.fromCharCode(e[t>>5]>>>t%32&255);return r}function on(e){var t,r=[];for(r[(e.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var n=e.length*8;for(t=0;t<n;t+=8)r[t>>5]|=(e.charCodeAt(t/8)&255)<<t%32;return r}function ec(e){return ka(Xt(on(e),e.length*8))}function tc(e,t){var r,n=on(e),o=[],a=[],s;for(o[15]=a[15]=void 0,n.length>16&&(n=Xt(n,e.length*8)),r=0;r<16;r+=1)o[r]=n[r]^909522486,a[r]=n[r]^1549556828;return s=Xt(o.concat(on(t)),512+t.length*8),ka(Xt(a.concat(s),512+128))}function Ca(e){var t="0123456789abcdef",r="",n,o;for(o=0;o<e.length;o+=1)n=e.charCodeAt(o),r+=t.charAt(n>>>4&15)+t.charAt(n&15);return r}function an(e){return unescape(encodeURIComponent(e))}function Ea(e){return ec(an(e))}function rc(e){return Ca(Ea(e))}function La(e,t){return tc(an(e),an(t))}function nc(e,t){return Ca(La(e,t))}function Pa(e,t,r){return t?r?La(t,e):nc(t,e):r?Ea(e):rc(e)}function sn(e){if(Math.abs(e)<1024)return e+" Byte";let r=["KB","MB","GB","TB","PB","EB","ZB","YB"],n=-1;do e/=1024,++n;while(Math.abs(e)>=1024&&n<r.length-1);return e.toFixed(1)+" "+r[n]}var st=[];async function Et(e,t){return await new Promise((r,n)=>{let o=e,a=1,s=indexedDB.open(o,a);s.onsuccess=i=>{r(s.result)},s.onerror=i=>{console.error("onerror: Error opening the database, switching to non-database mode",i),n()},s.onupgradeneeded=i=>{let c=s.result,u=t||"cache";c.createObjectStore(u,{keyPath:"key"})}})}async function Ma(e){let t=`${de}-${e.service}@${e.from}->${e.to}`;return await ac(t,e)}async function Ra(e){let t=Pa(e.originalText),r=`${de}-${e.service}@${e.from}->${e.to}`;return await oc(r,t)}async function oc(e,t){let r=await Et(e);return await new Promise((n,o)=>{if(!r)return o();let a="cache",i=r.transaction([a],"readonly").objectStore(a).get(t);i.onsuccess=c=>{r.close();let u=i.result;n(u)},i.onerror=c=>{r.close(),console.error("queryInDB->onerror:",c),o()}})}async function ac(e,t){let r=await Et(e);return(await Da()).includes(e)||await ic(e),await new Promise(o=>{if(!r)return o(!1);let a="cache",i=r.transaction([a],"readwrite").objectStore(a).put(t);i.onsuccess=c=>{r.close(),o(!0)},i.onerror=c=>{console.error("addInDB->onerror:",c),r.close(),o(!1)}})}async function ic(e){let t="cache_list",r=await Et(de+"-cacheList",t),o=r.transaction([t],"readwrite").objectStore(t).put({key:e});o.onsuccess=a=>{r.close(),st.push(e)},o.onerror=a=>{r.close(),console.error(a)}}async function Da(){if(st&&st.length>0)return st;let e=await Et(de+"-cacheList","cache_list");return st=await new Promise(t=>{let r="cache_list",o=e.transaction([r],"readonly").objectStore(r).getAllKeys();o.onsuccess=a=>{e.close(),t(o.result)},o.onerror=a=>{e.close(),console.error(a),t([])}}),st}async function Oa(){try{let e=[];(await Da()).forEach(n=>{e.push(sc(n))});let r=await Promise.all(e);return sn(r.reduce((n,o)=>n+o,0))}catch(e){return console.error(e),sn(0)}}async function sc(e){let t=await Et(e),n=[...t.objectStoreNames].reduce((s,i)=>{let c=lc(t,i);return s.push(c),s},[]),o=await Promise.all(n);return t.close(),o.reduce((s,i)=>s+i,0)}async function lc(e,t){return await new Promise((r,n)=>{if(e==null)return n();let o=0,a=e.transaction([t]).objectStore(t).openCursor();a.onsuccess=s=>{let i=a.result;if(i){let c=i.value;o+=JSON.stringify(c).length,i.continue()}else r(o)},a.onerror=s=>n("error in "+t+": "+s)})}var Zt,cc=async function(e,t){let{method:r,data:n}=e;if(R.debug("background received message",r,n||" "),r==="mock")await cr(150);else{if(r==="queryParagraphCache")return Ra(n);if(r==="setParagraphCache")return Ma(n);if(r==="calculateSize")return Oa();if(r==="fetch")return He(n);if(r==="getConfig")return Ye();if(r==="getLocalConfig")return mt();if(r==="openOptionsPage")C.runtime.openOptionsPage();else if(r==="openAboutPage")C.tabs.create({url:C.runtime.getURL("options.html#about")});else{if(r==="setLocalConfig")return rt(n);if(r==="detectLanguage"){let{text:o,minLength:a}=n;if(!a&&a!==0&&(a=50),o.length<=a)return"auto";try{let s=await C.i18n.detectLanguage(o);return s.languages.length>0?tt(s.languages[0].language):"auto"}catch(s){return R.debug("detect language error",s),"auto"}}else if(r==="detectTabLanguage")try{let o=await C.tabs.detectLanguage(t.id);return tt(o)}catch(o){return R.debug("detect tab language error, use auto ",o),"auto"}else if(r==="autoSyncLatestConfig"){try{await _t()}catch(o){R.debug("auto sync latest config error",o)}return""}}}};function Ia(){ln();let e=C.runtime.getManifest();if(e.manifest_version>2,e.manifest_version===2){let t=Jt.map(n=>n.condition.urlFilter),r=Jt.reduce((n,o)=>(o.condition.resourceTypes.forEach(a=>{n.includes(a)||n.push(a)}),n),[]);C.webRequest.onBeforeSendHeaders.addListener(function(n){if(!(n.originUrl&&n.originUrl.startsWith("http"))&&!!n.originUrl&&n.requestHeaders)for(let o=0;o<t.length;o++){let a=Jt[o];if(a.condition.urlFilter&&ya(n.url,a.condition.urlFilter))return{requestHeaders:Sa(n.requestHeaders,a.action.requestHeaders)}}},{urls:t,types:r},["blocking","requestHeaders"])}}function ln(){return Zt||(Zt=new Ct("background",!1).getConnection("main",cc),Zt)}function Na(){typeof C.commands<"u"&&C.commands.onCommand.addListener(async e=>{if(R.debug(`received command: ${e}`),e==="toggleTranslatePage"){let t=await C.tabs.query({active:!0,currentWindow:!0});if(t.length===0||typeof t[0].id>"u")return;let n=t[0].url;if(fa(n)){C.tabs.create({url:ga(n)});return}}await cn({method:e})})}async function cn(e){let r=(await C.tabs.query({currentWindow:!0,active:!0}))[0].id;ln().sendMessage(`content_script:main:${r}`,e).catch(o=>{R.error("send content message request failed",e,o)})}function uc(e,t){let r=e;return t&&Object.keys(t).forEach(n=>{let o=t[n],a=dc(n);if(typeof o=="object"||a){let s=o;a&&typeof s=="string"&&(s={tag:"a",href:s});let i=`<${n}>`,c=r.indexOf(i);if(c!==-1){let u=s.tag||"a",l=r.indexOf(`</${n}>`);if(l!==-1){let p=r.substring(c+i.length,l),m=Object.keys(s).filter(f=>f!=="tag").map(f=>`${f}="${s[f]}"`).join(" ");r=r.replace(`${i}${p}</${n}>`,`<${u} ${m}>${p}</${u}>`)}}}else{let s=new RegExp("{"+n+"}","gm");r=r.replace(s,o.toString())}}),r}function $a(e,t,r){let n=e[t];if(!n)return r;let o=r.split("."),a="";do{a+=o.shift();let s=n[a];s!==void 0&&(typeof s=="object"||!o.length)?(n=s,a=""):o.length?a+=".":n=r}while(o.length);return n}function Ua(e,t,r,n,o){if(!e.hasOwnProperty(r))return t;let a=$a(e,r,t);return a===t&&r!==n&&(a=$a(e,n,t)),uc(a,o)}function dc(e){if(typeof e=="number")return!0;if(e){let t=parseInt(e);return!isNaN(t)}else return!1}var Ba={"zh-CN":{"languages.en":"\u82F1\u8BED","languages.ja":"\u65E5\u8BED","languages.ko":"\u97E9\u8BED","languages.es":"\u897F\u73ED\u7259\u8BED","languages.fr":"\u6CD5\u8BED","languages.de":"\u5FB7\u8BED","languages.it":"\u610F\u5927\u5229\u8BED","languages.pt":"\u8461\u8404\u7259\u8BED","languages.ru":"\u4FC4\u8BED"},"zh-TW":{"languages.en":"\u82F1\u8A9E","languages.ja":"\u65E5\u8A9E","languages.ko":"\u97D3\u8A9E","languages.es":"\u897F\u73ED\u7259\u8A9E","languages.fr":"\u6CD5\u8A9E","languages.de":"\u5FB7\u8A9E","languages.it":"\u610F\u5927\u5229\u8A9E","languages.pt":"\u8461\u8404\u7259\u8A9E","languages.ru":"\u4FC4\u8A9E"}},gc={...Ge,"zh-CN":{...Ba["zh-CN"],...Ge["zh-CN"]},"zh-TW":{...Ba["zh-TW"],...Ge["zh-TW"]}};function ja(e,t,r){return Ua(gc,e,t,Dt,r)}var un=kn()?["action"]:["browser_action","page_action"],Fa=[{id:"toggleTranslatePage",contexts:["page",...un]},{id:nr,contexts:un},{id:or,contexts:un}];async function dn(e){R.debug("createContextMenu",Fa),await C.contextMenus.removeAll();for(let t of Fa)e.isShowContextMenu===!1&&t.id==="toggleTranslatePage"&&(t.contexts=t.contexts.filter(r=>r!=="page")),C.contextMenus.create({id:t.id,title:ja(`browser.${t.id}`,e.interfaceLanguage),contexts:t.contexts},()=>C.runtime.lastError)}async function za(e){C.contextMenus.onClicked.addListener(t=>{if(t.menuItemId===nr)C.runtime.openOptionsPage();else if(t.menuItemId===or){let r=C.runtime.getURL(Lt);C.tabs.create({url:r})}else cn({method:t.menuItemId})}),await dn(e)}function gn(){Ye().then(e=>{dn(e)}).catch(e=>{R.error("create menu error",e)})}function Ha(){C.runtime.onInstalled.addListener(e=>{R.debug(`onInstalled reason: ${e.reason}`),e.reason=="install"?(C.tabs.create({url:C.runtime.getURL("options.html")}),gn()):(e.reason=="update"&&C.runtime.getManifest().version!=e.previousVersion,gn())})}function fn(){_t(),C.alarms.onAlarm.addListener(_t),C.alarms.create("handlerDriveAuth",{periodInMinutes:45})}async function fc(){Ha(),Na();let e=await Ye();za(e).catch(t=>{R.error("setup context menu error",t)}),e.debug?R.setLevel("debug"):R.setLevel("info")}Ia();fn();fc();
