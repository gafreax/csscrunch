module.exports = `
@charset "UTF-8";[theme=web-theme] {
  --devsite-primary-color: #3740ff;
  --devsite-secondary-color: #e51661
}

[foreground=web-theme],[theme=web-theme] [foreground=theme] {
  --devsite-foreground-color: #3740ff;
  --devsite-foreground-button-background-hover: #ebecff;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #cdcfff;
  --devsite-foreground-button-border-color-active: #ebecff;
  --devsite-foreground-button-color: #3740ff;
  --devsite-foreground-button-primary-background: #3740ff;
  --devsite-foreground-button-primary-background-hover: #e51661;
  --devsite-foreground-button-primary-color: #fff
}

body,dd,div,dl,figure,form,img,input,menu {
  margin: 0;
  padding: 0
}

body[no-overflow] {
  overflow: hidden
}

iframe {
  border: 0
}

iframe:not([src]) {
  display: none
}

.beta>:first-child,.caution>:first-child,.deprecated>:first-child,.dogfood>:first-child,.experimental>:first-child,.key-point>:first-child,.key-term>:first-child,.note>:first-child,.objective>:first-child,.preview>:first-child,.quickstart-left>:first-child,.quickstart-wide>:first-child,.special>:first-child,.success>:first-child,.warning>:first-child,aside>:first-child,blockquote>:first-child,dd>:first-child,li>p:first-child,td>.devsite-table-wrapper:first-child>table,td>.expandable:first-child>:nth-child(2),td>:first-child,td>:first-child:empty+devsite-code,td>:first-child>li:first-child {
  margin-top: 0
}

.beta>:last-child,.caution>:last-child,.deprecated>:last-child,.dogfood>:last-child,.experimental>:last-child,.key-point>:last-child,.key-term>:last-child,.note>:last-child,.objective>:last-child,.preview>:last-child,.quickstart-left>:last-child,.quickstart-wide>:last-child,.special>:last-child,.success>:last-child,.warning>:last-child,aside>:last-child,blockquote>:last-child,dd>:last-child,li>p:last-child,td>.devsite-table-wrapper:last-child>table,td>.expandable:last-child>:last-child,td>:last-child,td>:last-child>li:last-child {
  margin-bottom: 0
}

html {
  -moz-box-sizing: border-box;
  box-sizing: border-box
}

*,:after,:before {
  -moz-box-sizing: inherit;
  box-sizing: inherit
}

.clearfix:after,.quickstart-step:after {
  clear: both;
  content: "";
  display: table;
  height: 0;
  visibility: hidden
}

:root {
  --devsite-code-font-family: Roboto Mono,monospace;
  --devsite-primary-font-family: Roboto,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;
  --devsite-h1-margin: 40px 0 20px;
  --devsite-h2-margin: 40px 0 20px;
  --devsite-h3-margin: 32px 0 16px;
  --devsite-h4-font: 500 16px/24px var(--devsite-primary-font-family);
  --devsite-h5-font: 700 14px/24px var(--devsite-primary-font-family);
  --devsite-h6-font: 500 14px/24px var(--devsite-primary-font-family);
  --devsite-background-0: #e8eaed;
  --devsite-background-1: #fff;
  --devsite-background-2: #f8f9fa;
  --devsite-background-3: #f1f3f4;
  --devsite-background-4: #e8eaed;
  --devsite-background-5: #dadce0;
  --devsite-primary-text-color: #202124;
  --devsite-primary-text-rgba: rgba(0,0,0,.87);
  --devsite-secondary-text-color: #5f6368;
  --devsite-secondary-text-rgba: rgba(0,0,0,.65);
  --devsite-tertiary-text-color: #bdc1c6;
  --devsite-tertiary-text-rgba: rgba(0,0,0,.26);
  --devsite-inverted-text-color: #fff;
  --devsite-inverted-text-color-hover: hsla(0,0%,100%,.7);
  --devsite-inverted-text-rgba: hsla(0,0%,100%,.7);
  --devsite-primary-border: 1px solid #dadce0;
  --devsite-secondary-border: 1px solid #e8eaed;
  --devsite-elevation-key-shadow-color: rgba(60,64,67,.3);
  --devsite-elevation-ambient-shadow-color: rgba(60,64,67,.15);
  --devsite-elevation-inset-shadow-color: hsla(210,6%,63%,.5);
  --tenant-background-1: #fff;
  --tenant-background-2: #f8f9fa;
  --tenant-background-3: #f1f3f4;
  --tenant-primary-text-color: #202124;
  --tenant-secondary-text-color: #5f6368;
  --tenant-inverted-text-color: #fff;
  --tenant-primary-border: 1px solid #dadce0;
  --tenant-secondary-border: 1px solid #e8eaed;
  --devsite-link-background: #d2e3fc;
  --devsite-link-background-active: #e8f0fe;
  --devsite-link-color: #1a73e8;
  --devsite-contrast-link-color: #185abc;
  --devsite-button-background-hover: #e4eefc;
  --devsite-button-background-active: #c8ddf9;
  --devsite-button-color: #1a73e8;
  --devsite-button-primary-background: #1a73e8;
  --devsite-button-primary-background-hover: #1765cc;
  --devsite-button-primary-background-active: #185abc;
  --devsite-button-primary-color: #fff;
  --devsite-caution-notice-background: #feefe3;
  --devsite-caution-notice-border-color: transparent;
  --devsite-caution-notice-color: #b31412;
  --devsite-key-point-notice-background: #e8eaf6;
  --devsite-key-point-notice-border-color: transparent;
  --devsite-key-point-notice-color: #3f51b5;
  --devsite-key-term-notice-background: #f3e8fd;
  --devsite-key-term-notice-border-color: transparent;
  --devsite-key-term-notice-color: #9334e6;
  --devsite-note-notice-background: #e8f0fe;
  --devsite-note-notice-border-color: transparent;
  --devsite-note-notice-color: #303f9f;
  --devsite-status-notice-background: #f1f3f4;
  --devsite-status-notice-border-color: transparent;
  --devsite-status-notice-color: #546e7a;
  --devsite-success-notice-background: #e0f2f1;
  --devsite-success-notice-border-color: transparent;
  --devsite-success-notice-color: #00796b;
  --devsite-warning-notice-background: #fce8e6;
  --devsite-warning-notice-border-color: transparent;
  --devsite-warning-notice-color: #a50e0e;
  --devsite-notice-margin: 16px 0;
  --devsite-notice-padding-block: 15px;
  --devsite-notice-padding-inline: 60px 24px;
  --devsite-book-nav-background: var(--devsite-background-1);
  --devsite-concierge-top: 48px;
  --devsite-concierge-width-closed: 54px;
  --devsite-concierge-width-open: 387px;
  --devsite-concierge-width: 0px;
  --devsite-card-background: var(--devsite-background-1);
  --devsite-card-header-background: var(--devsite-background-3);
  --devsite-checkbox-border-radius: 2px;
  --devsite-checkbox-icon-canvas-border-radius: 50%;
  --devsite-checkbox-icon-canvas-offset-x: -9px;
  --devsite-checkbox-icon-canvas-offset-y: -9px;
  --devsite-checkbox-icon-canvas-size: 36px;
  --devsite-checkbox-margin-block: -2px 2px;
  --devsite-checkbox-margin-inline: 0 8px;
  --devsite-checkbox-offset-x: 3px;
  --devsite-checkbox-offset-y: -3px;
  --devsite-checkbox-size: 18px;
  --devsite-feature-tooltip-background-color: #1a73e8;
  --devsite-feature-tooltip-offset-y: 3px;
  --devsite-input-background: var(--devsite-background-1);
  --devsite-input-border: var(--devsite-secondary-border);
  --devsite-landing-row-item-gap: 24px;
  --devsite-mdc-line-height: 56px;
  --devsite-scrollbar-thumb-background: hsla(207,5%,52%,.26);
  --devsite-select-background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="4" viewBox="0 0 20 4"><path d="M0,0l4,4l4-4H0z" fill="%23202124"/></svg>');
  --devsite-select-border-radius: 2px
}

[lang=ar],[lang=fa] {
  --devsite-nav-item-line-height: 18px
}

devsite-appearance-selector {
  --devsite-appearance-selector-menu-transform: translate3d(-10px,0,0)
}

[dir=rtl] devsite-appearance-selector {
  --devsite-appearance-selector-menu-transform: translate3d(calc(46px - 100%),0,0)
}

devsite-bookmark {
  --devsite-bookmark-background: 0;
  --devsite-bookmark-background-focus-legacy: var(--devsite-background-4);
  --devsite-bookmark-background-hover-legacy: var(--devsite-background-3);
  --devsite-bookmark-icon-color: var(--devsite-secondary-text-color);
  --devsite-bookmark-icon-color-saved: var(--devsite-link-color);
  --devsite-bookmark-icon-color-saved-hover: #174ea6;
  --devsite-dropdown-list-toggle-background-hover: var(--devsite-background-3);
  --devsite-dropdown-list-toggle-border: var(--devsite-primary-border,0);
  --devsite-dropdown-list-toggle-border-hover: var(--devsite-primary-border);
  --devsite-dropdown-list-toggle-height: 36px
}

devsite-book-nav {
  --devsite-book-nav-input-height: 32px;
  --devsite-nav-divider-background: #f1f3f4
}

.devsite-book-nav-toggle[aria-expanded] {
  --devsite-book-nav-toggle-background: var(--devsite-background-3);
  --devsite-book-nav-toggle-background-hover: var(--devsite-background-4)
}

.devsite-book-nav-toggle:not([aria-expanded]) {
  --devsite-book-nav-toggle-background: var(--devsite-background-1);
  --devsite-book-nav-toggle-background-hover: var(--devsite-background-3)
}

devsite-carousel {
  --devsite-carousel-gap: 16px 24px;
  --devsite-carousel-grid: 1fr 40px/40px 1fr 40px;
  --devsite-carousel-item-flex: 0 0 var(--devsite-carousel-item-width,auto);
  --devsite-carousel-marker-margin-inline: -18px 0;
  --devsite-carousel-marker-size: 12px;
  --devsite-carousel-markers-gap: 0 4px;
  --devsite-carousel-markers-grid-column: 2;
  --devsite-carousel-markers-grid-row: 2;
  --devsite-carousel-next-grid-column: 3;
  --devsite-carousel-prev-grid-column: 1;
  --devsite-carousel-prev-next-grid-row: 2;
  --devsite-carousel-slideshow-grid-column: 1/-1;
  --devsite-carousel-slideshow-grid-row: 1
}

devsite-carousel[data-items-per-slide] {
  --devsite-carousel-item-gap: 0 24px
}

devsite-carousel[data-items-per-slide=auto] {
  --devsite-carousel-item-gap: 0 8px
}

[template=page] devsite-carousel[data-full-width],[template=page] devsite-carousel[data-items-per-slide=auto] {
  --devsite-carousel-gap: 16px 40px;
  --devsite-carousel-grid: 1fr 40px/0 40px 1fr 40px 0;
  --devsite-carousel-margin-inline: -40px;
  --devsite-carousel-markers-grid-column: 3;
  --devsite-carousel-next-grid-column: 4;
  --devsite-carousel-prev-grid-column: 2;
  --devsite-carousel-slideshow-grid-column: 1/-1;
  --devsite-carousel-slideshow-padding-inline: 40px
}

[template=page] devsite-carousel[data-items-per-slide=auto] {
  --devsite-carousel-ghost-item-width: 32px;
  --devsite-carousel-slideshow-scroll-padding: 0 40px
}

devsite-catalog {
  --devsite-button-icon-content: "cancel";
  --devsite-button-icon-margin-x-end: 8px;
  --devsite-button-icon-margin-x-start: 8px;
  --devsite-catalog-grid: "sidebar main" 1fr/1fr 3fr;
  --devsite-chips-gap: 8px;
  --devsite-dynamic-content-margin: 0;
  --devsite-catalog-sidebar-button-display: none!important;
  --devsite-input-border-radius: var(--devsite-card-border-radius);
  --devsite-input-height: 40px;
  --devsite-input-padding: 7px 16px;
  --devsite-input-width: 100%;
  --devsite-notice-margin: 16px 0;
  --devsite-notice-padding-block: 15px;
  --devsite-notice-padding-inline: 60px 24px
}

[layout=docs] devsite-catalog {
  --devsite-catalog-grid: "sidebar main" 1fr/1fr 2fr
}

[layout=docs] devsite-catalog:not([items-across]),devsite-catalog[template=activity]:not([items-across]) {
  --devsite-columns: 2
}

devsite-catalog .catalog-filter-chip {
  --devsite-button-sibling-gap-x: 0
}

[dir=ltr] devsite-catalog .catalog-filter-chip {
  --devsite-button-padding: 0 0 0 12px
}

[dir=rtl] devsite-catalog .catalog-filter-chip {
  --devsite-button-padding: 0 12px 0 0
}

devsite-code,devsite-content {
  --devsite-code-background: #f1f3f4;
  --devsite-code-color: #37474f;
  --devsite-var-color: #d01884
}

devsite-code {
  --devsite-code-buttons-toggle-dark-display: inline;
  --devsite-code-buttons-toggle-light-display: none;
  --devsite-code-comments-color: #b80672;
  --devsite-code-keywords-color: #1967d2;
  --devsite-code-numbers-color: #c5221f;
  --devsite-code-strings-color: #188038;
  --devsite-code-types-color: #9334e6;
  --devsite-github-link-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M9-.06A9,9,0,0,0,6.16,17.48c.44.09.59-.19.59-.43V15.38c-2.5.54-3-1.07-3-1.07a2.35,2.35,0,0,0-1-1.31c-.82-.56.06-.55.06-.55a1.89,1.89,0,0,1,1.38.93,1.92,1.92,0,0,0,2.62.75,1.91,1.91,0,0,1,.57-1.21c-2-.23-4.1-1-4.1-4.45a3.49,3.49,0,0,1,.92-2.41,3.25,3.25,0,0,1,.09-2.38S5,3.43,6.75,4.6a8.59,8.59,0,0,1,4.5,0c1.72-1.17,2.48-.92,2.48-.92a3.25,3.25,0,0,1,.09,2.38,3.49,3.49,0,0,1,.92,2.41c0,3.46-2.1,4.22-4.11,4.44a2.14,2.14,0,0,1,.62,1.67v2.47c0,.24.14.52.6.43A9,9,0,0,0,9-.06Z" fill="%231a73e8"/></svg>')
}

devsite-code[dark-code] {
  --devsite-code-background: #283142;
  --devsite-code-buttons-color: hsla(0,0%,100%,.7);
  --devsite-code-buttons-hover: #fff;
  --devsite-code-buttons-toggle-dark-display: none;
  --devsite-code-buttons-toggle-light-display: inline;
  --devsite-code-color: #f1f3f4;
  --devsite-code-comments-color: #ff8bcb;
  --devsite-code-keywords-color: #78d9ec;
  --devsite-code-numbers-color: #fbbc04;
  --devsite-code-strings-color: #9ccc65;
  --devsite-code-types-color: #d7aefb;
  --devsite-github-link-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M9-.06A9,9,0,0,0,6.16,17.48c.44.09.59-.19.59-.43V15.38c-2.5.54-3-1.07-3-1.07a2.35,2.35,0,0,0-1-1.31c-.82-.56.06-.55.06-.55a1.89,1.89,0,0,1,1.38.93,1.92,1.92,0,0,0,2.62.75,1.91,1.91,0,0,1,.57-1.21c-2-.23-4.1-1-4.1-4.45a3.49,3.49,0,0,1,.92-2.41,3.25,3.25,0,0,1,.09-2.38S5,3.43,6.75,4.6a8.59,8.59,0,0,1,4.5,0c1.72-1.17,2.48-.92,2.48-.92a3.25,3.25,0,0,1,.09,2.38,3.49,3.49,0,0,1,.92,2.41c0,3.46-2.1,4.22-4.11,4.44a2.14,2.14,0,0,1,.62,1.67v2.47c0,.24.14.52.6.43A9,9,0,0,0,9-.06Z" fill="%23669df6"/></svg>');
  --devsite-scrollbar-thumb-background: hsla(0,0%,100%,.7);
  --devsite-var-color: #ff8bcb
}

devsite-content {
  --devsite-compare-yes-color: #34a853;
  --devsite-compare-no-color: #d93025;
  --devsite-confidential-results-background: hsla(27,93%,94%,.5);
  --devsite-search-results-breadcrumb-color: #1e8e3e;
  --devsite-select-sibling-gap-x: 16px;
  --devsite-steps-title-border-focus: 1px solid #174ea6;
  --devsite-steps-title-color: #174ea6;
  --devsite-dropdown-list-border-radius: var( --devsite-dropdown-list-toggle-border-radius );
  --devsite-dropdown-list-min-width: 194px;
  --devsite-dropdown-list-toggle-background-hover: var(--devsite-background-2);
  --devsite-dropdown-list-toggle-border-radius: 4px;
  --devsite-dropdown-list-toggle-color: var(--devsite-secondary-text-color);
  --devsite-dropdown-list-toggle-color-hover: var(--devsite-primary-text-color);
  --devsite-dropdown-list-toggle-button-padding: 0 3px;
  --devsite-dropdown-list-toogle-button-justify-content: center
}

devsite-device {
  --devsite-device-border-color: #ddd
}

devsite-dynamic-content {
  --devsite-progress-background: #dadce0;
  --devsite-progress-background-2: #dadce0;
  --devsite-progress-background-4: #dadce0;
  --devsite-progress-bar-color: #f9ab00
}

devsite-dynamic-content .completed {
  --devsite-progress-bar-color: #1e8e3e
}

devsite-dynamic-hero {
  --devsite-background-text-decoration: none
}

devsite-footer-linkboxes {
  --devsite-footer-linkboxes-grid-template-columns: repeat(auto-fit,minmax(85.4px,1fr));
  --devsite-footer-linkboxes-padding: 0 24px
}

devsite-footer-utility devsite-language-selector {
  --devsite-language-selector-menu-inset-inline: auto 0;
  --devsite-language-selector-menu-transform: translate3d(0,calc(-100% - 36px),0)
}

devsite-header devsite-language-selector {
  --devsite-select-color: #3c4043
}

devsite-multiple-choice {
  --devsite-multiple-choice-answer-border-bottom: var(--devsite-primary-border);
  --devsite-multiple-choice-answer-border-top: 0;
  --devsite-multiple-choice-background: var(--devsite-background-2);
  --devsite-multiple-choice-border: 0;
  --devsite-multiple-choice-border-radius: 0;
  --devsite-multiple-choice-correct-background: #f8fbf9;
  --devsite-multiple-choice-correct-color: #137333;
  --devsite-multiple-choice-incorrect-background: #fef9f8;
  --devsite-multiple-choice-incorrect-color: #d93025;
  --devsite-multiple-choice-overflow: visible;
  --devsite-multiple-choice-question-background: var( --devsite-secondary-text-color );
  --devsite-multiple-choice-question-color: var(--devsite-inverted-text-color)
}

devsite-nav-buttons {
  --devsite-button-primary-background-selected: #174ea6
}

devsite-playlist {
  --devsite-playlist-icon-color: #0d652d;
  --devsite-playlist-max-width: 936px;
  --devsite-playlist-padding-x: 40px
}

[type=playlist] {
  --devsite-card-image-object-fit: contain
}

devsite-playlist devsite-bookmark {
  --devsite-bookmark-background-focus-legacy: rgba(138,180,248,.12);
  --devsite-bookmark-background-hover-legacy: rgba(138,180,248,.12);
  --devsite-bookmark-icon-arrow-color: #dadce0;
  --devsite-bookmark-icon-color: #dadce0;
  --devsite-bookmark-icon-color-saved: #8ab4f8;
  --devsite-bookmark-icon-color-saved-hover: #d2e3fc;
  --devsite-dropdown-list-toggle-background-hover: hsla(220,9%,87%,.24);
  --devsite-dropdown-list-toggle-border: 1px solid #5f6368;
  --devsite-dropdown-list-toggle-border-hover: 1px solid #5f6368;
  --devsite-dropdown-list-toggle-color-hover: #dadce0
}

devsite-quiz {
  --devsite-quiz-correct-background: #e6f4ea;
  --devsite-quiz-correct-border-color: #e6f4ea;
  --devsite-quiz-correct-border-color-focus: #1e8e3e;
  --devsite-quiz-correct-color: #1e8e3e;
  --devsite-quiz-error-background: #fce8e6;
  --devsite-quiz-error-border-color: #fce8e6;
  --devsite-quiz-error-border-color-focus: #d93025;
  --devsite-quiz-error-color: #d93025;
  --devsite-quiz-partially-correct-background: #feefe3;
  --devsite-quiz-partially-correct-color: #e8710a;
  --devsite-quiz-partially-correct-indicator-background: orange;
  --devsite-quiz-secondary-text-color: #5f6368
}

devsite-recommendations-sidebar,devsite-recommended-content {
  --devsite-recommendations-accent: #303f9f
}

devsite-recommended-content {
  --devsite-background-text-decoration: none;
  --devsite-checkbox-margin-block: 0;
  --devsite-checkbox-margin-inline: 0;
  --devsite-checkbox-size: 0;
  --devsite-h1-margin: 0;
  --devsite-h3-margin: 0;
  --devsite-recommended-content-filters-overflow: scroll hidden;
  --devsite-recommended-content-grid: "list-header" 24px "content"/1fr;
  --devsite-recommended-content-item-show-all-display: flex;
  --devsite-recommended-content-toggle-display: none
}

devsite-recommended-content[filters] {
  --devsite-recommended-content-grid: "filters-header" 24px "filters" minmax(40px,auto) "list-header" 24px "content" /1fr
}

[template=landing] devsite-carousel[data-markers-size=small] {
  --devsite-carousel-marker-size: 8px;
  --devsite-carousel-markers-gap: 0
}

[template=landing] devsite-carousel[data-markers-background=secondary],devsite-recommended-content devsite-carousel {
  --devsite-carousel-button-color: var(--devsite-secondary-text-color);
  --devsite-carousel-button-color-hover: var(--devsite-primary-text-color);
  --devsite-carousel-marker-margin-inline: -16px 0;
  --devsite-carousel-marker-size: 8px;
  --devsite-carousel-markers-background-focus: var( --devsite-secondary-text-color );
  --devsite-carousel-markers-background-hover: var( --devsite-secondary-text-color );
  --devsite-carousel-markers-gap: 0;
  --devsite-carousel-prev-next-box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);
  --devsite-recommended-content-filters-overflow: initial
}

[template=landing] devsite-carousel[data-controls-position=center],[template=landing] devsite-recommended-content devsite-carousel {
  --devsite-carousel-gap: 0;
  --devsite-carousel-grid: 1fr auto/24px 24px 1fr 24px 24px;
  --devsite-carousel-margin-inline: -24px;
  --devsite-carousel-markers-grid-column: 2/-2;
  --devsite-carousel-markers-grid-row: 2;
  --devsite-carousel-next-grid-column: -1/-3;
  --devsite-carousel-prev-grid-column: 1/3;
  --devsite-carousel-prev-next-grid-row: 1;
  --devsite-carousel-slideshow-grid-column: 2/-2;
  --devsite-carousel-slideshow-grid-row: 1;
  --devsite-carousel-slideshow-padding-inline: 24px
}

devsite-recommended-content devsite-carousel[data-items-per-slide=auto] {
  --devsite-carousel-gradient-background: var(--devsite-background-3);
  --devsite-carousel-gradient-display: block;
  --devsite-carousel-gradient-end-grid-column: 5;
  --devsite-carousel-gradient-grid-row: 1;
  --devsite-carousel-gradient-start-grid-column: 1;
  --devsite-carousel-markers-display: none;
  --devsite-carousel-slideshow-margin-block: -8px;
  --devsite-carousel-slideshow-padding-block: 8px
}

devsite-book-nav,devsite-search {
  --devsite-searchbox-hover: #e8eaed;
  --devsite-searchbox-inactive: var(--devsite-background-3);
  --devsite-search-border-radius: 2px;
  --devsite-search-form-background-active: var(--devsite-background-3);
  --devsite-search-height: 36px;
  --devsite-search-image-top: 6px;
  --devsite-search-image-x: 8px;
  --devsite-search-field-border: 0;
  --devsite-search-field-height: 36px;
  --devsite-search-field-padding-x-start: 40px
}

devsite-select {
  --devsite-select-display: inline-block
}

devsite-user {
  --devsite-notification-background: #1967d2
}

google-codelab-about {
  --google-codelab-about-active-border-color: #1a73e8
}

table {
  --devsite-alt-table-cell-background: rgba(241,243,244,.75);
  --devsite-h2-border: 0;
  --devsite-responsive-table-first-column-background: #f1f3f4;
  --devsite-table-cell-background: hsla(0,0%,100%,.95);
  --devsite-table-heading-background: #e8eaed
}

table.blue {
  --devsite-alt-table-cell-background: #f6f7fb;
  --devsite-table-heading-background: 0;
  --devsite-responsive-table-first-column-background: #f6f7fb;
  --devsite-table-row-background: #e8eaf6;
  --devsite-table-row-border: 1px solid #c5cae9
}

table.blue table {
  --devsite-table-heading-background: inherit
}

table.cyan {
  --devsite-alt-table-cell-background: #f4fcfd;
  --devsite-table-heading-background: 0;
  --devsite-responsive-table-first-column-background: #f4fcfd;
  --devsite-table-row-background: #e4f7fb;
  --devsite-table-row-border: 1px solid #a1e4f2
}

table.cyan table {
  --devsite-table-heading-background: inherit
}

table.green {
  --devsite-alt-table-cell-background: #f3faf9;
  --devsite-table-heading-background: 0;
  --devsite-responsive-table-first-column-background: #f3faf9;
  --devsite-table-row-background: #e0f2f1;
  --devsite-table-row-border: 1px solid #b2dfdb
}

table.green table {
  --devsite-table-heading-background: inherit
}

table.orange {
  --devsite-alt-table-cell-background: #fff9f4;
  --devsite-table-heading-background: 0;
  --devsite-responsive-table-first-column-background: #fff9f4;
  --devsite-table-row-background: #feefe3;
  --devsite-table-row-border: 1px solid #fedfc8
}

table.orange table {
  --devsite-table-heading-background: inherit
}

table.pink {
  --devsite-alt-table-cell-background: #fef5fa;
  --devsite-table-heading-background: 0;
  --devsite-responsive-table-first-column-background: #fef5fa;
  --devsite-table-row-background: #fde7f3;
  --devsite-table-row-border: 1px solid #fdcfe8
}

table.pink table {
  --devsite-table-heading-background: inherit
}

table.purple {
  --devsite-alt-table-cell-background: #faf6fe;
  --devsite-table-heading-background: 0;
  --devsite-responsive-table-first-column-background: #faf6fe;
  --devsite-table-row-background: #f3e8fd;
  --devsite-table-row-border: 1px solid #e9d2fd
}

table.purple table {
  --devsite-table-heading-background: inherit
}

.devsite-header-billboard {
  --devsite-h1-margin: 14px 0
}

[background] {
  --devsite-background-button-border-color: transparent;
  --devsite-background-button-color: var(--devsite-button-color);
  --devsite-background-button-color-hover: var(--devsite-button-color);
  --devsite-background-button-primary-background: var(--devsite-background-1);
  --devsite-background-button-primary-background-hover: var( --devsite-link-background-active );
  --devsite-background-button-primary-color: var(--devsite-button-color);
  --devsite-background-button-primary-color-hover: var(--devsite-button-color);
  --devsite-background-button-white-background-hover: hsla(210,6%,63%,.3);
  --devsite-background-button-white-background-focus: hsla(210,6%,63%,.5);
  --devsite-background-button-white-color: var(--devsite-inverted-text-color);
  --devsite-heading-color: var(--devsite-inverted-text-color);
  --devsite-icon-color: var(--devsite-inverted-text-color);
  --devsite-icon-color-hover: var(--devsite-inverted-text-color-hover);
  --devsite-link-color: var(--devsite-inverted-text-color)
}

.devsite-landing-row-cta {
  --devsite-button-border: 1px solid transparent;
  --devsite-button-border-active: 1px solid transparent;
  --devsite-button-border-hover: 1px solid transparent;
  --devsite-button-primary-background: var(--devsite-background-1);
  --devsite-button-primary-background-hover: var( --devsite-link-background-active );
  --devsite-button-primary-color: var(--devsite-button-color);
  --devsite-button-primary-color-hover: var(--devsite-button-color);
  --devsite-button-raised-background: var(--devsite-background-1);
  --devsite-button-raised-background-active: var( --devsite-link-background-active );
  --devsite-button-raised-background-hover: var( --devsite-link-background-active );
  --devsite-button-white-background-focus: hsla(210,6%,63%,.5);
  --devsite-button-white-background-hover: hsla(210,6%,63%,.3);
  --devsite-button-white-color: var(--devsite-inverted-text-color)
}

[theme=cyan] .devsite-landing-row-cta,[theme=google-yellow] .devsite-landing-row-cta,[theme=orange] .devsite-landing-row-cta,[theme=pale-blue] .devsite-landing-row-cta {
  --devsite-button-white-color: #202124;
  --devsite-text-color: #202124
}

[background=theme] {
  --devsite-background-color: var(--devsite-primary-color)
}

[background=grey],[background=white] {
  --devsite-background-button-border-color: #dadce0;
  --devsite-background-button-color: var(--devsite-button-color);
  --devsite-background-button-color-hover: var(--devsite-button-color);
  --devsite-background-button-primary-background: var( --devsite-button-primary-background );
  --devsite-background-button-primary-background-hover: var( --devsite-button-primary-background-hover );
  --devsite-background-button-primary-color: var( --devsite-button-primary-color );
  --devsite-background-button-primary-color-hover: var( --devsite-button-primary-color-hover );
  --devsite-background-button-white-color: var(--devsite-button-color);
  --devsite-icon-color: var(--devsite-secondary-text-color);
  --devsite-icon-color-hover: var(--devsite-link-color)
}

[background=blue-grey] {
  --devsite-background-color: #607d8b
}

[foreground=blue-grey],[theme=blue-grey] [foreground=theme] {
  --devsite-foreground-color: #607d8b;
  --devsite-foreground-button-background-hover: #eff2f3;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #d7dfe2;
  --devsite-foreground-button-border-color-active: #eff2f3;
  --devsite-foreground-button-color: #607d8b;
  --devsite-foreground-button-primary-background: #607d8b;
  --devsite-foreground-button-primary-background-hover: #455a64;
  --devsite-foreground-button-primary-color: #fff
}

[background=blue-grey-dark] {
  --devsite-background-color: #455a64
}

[foreground=blue-grey-dark],[theme=blue-grey-dark] [foreground=theme] {
  --devsite-foreground-color: #455a64;
  --devsite-foreground-button-background-hover: #eceff0;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #d1d6d8;
  --devsite-foreground-button-border-color-active: #eceff0;
  --devsite-foreground-button-color: #455a64;
  --devsite-foreground-button-primary-background: #455a64;
  --devsite-foreground-button-primary-background-hover: #37474f;
  --devsite-foreground-button-primary-color: #fff
}

[background=cyan] {
  --devsite-background-color: #12b5cb
}

[foreground=cyan],[theme=cyan] [foreground=theme] {
  --devsite-foreground-color: #12b5cb;
  --devsite-foreground-button-background-hover: #e7f8fa;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #c4edf2;
  --devsite-foreground-button-border-color-active: #e7f8fa;
  --devsite-foreground-button-color: #12b5cb;
  --devsite-foreground-button-primary-background: #12b5cb;
  --devsite-foreground-button-primary-background-hover: #098591;
  --devsite-foreground-button-primary-color: #fff
}

[background=deep-orange] {
  --devsite-background-color: #ff5722
}

[foreground=deep-orange],[theme=deep-orange] [foreground=theme] {
  --devsite-foreground-color: #ff5722;
  --devsite-foreground-button-background-hover: #ffeee9;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #ffd5c8;
  --devsite-foreground-button-border-color-active: #ffeee9;
  --devsite-foreground-button-color: #ff5722;
  --devsite-foreground-button-primary-background: #ff5722;
  --devsite-foreground-button-primary-background-hover: #e64a19;
  --devsite-foreground-button-primary-color: #fff
}

[background=deep-purple] {
  --devsite-background-color: #673ab7
}

[foreground=deep-purple],[theme=deep-purple] [foreground=theme] {
  --devsite-foreground-color: #673ab7;
  --devsite-foreground-button-background-hover: #f0ebf8;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #d9ceed;
  --devsite-foreground-button-border-color-active: #f0ebf8;
  --devsite-foreground-button-color: #673ab7;
  --devsite-foreground-button-primary-background: #673ab7;
  --devsite-foreground-button-primary-background-hover: #512da8;
  --devsite-foreground-button-primary-color: #fff
}

[background=google-blue] {
  --devsite-background-color: #1a73e8
}

[foreground=google-blue],[theme=google-blue] [foreground=theme] {
  --devsite-foreground-color: #1a73e8;
  --devsite-foreground-button-background-hover: #e8f1fd;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #c6dcf9;
  --devsite-foreground-button-border-color-active: #e8f1fd;
  --devsite-foreground-button-color: #1a73e8;
  --devsite-foreground-button-primary-background: #1a73e8;
  --devsite-foreground-button-primary-background-hover: #185abc;
  --devsite-foreground-button-primary-color: #fff
}

[background=google-green] {
  --devsite-background-color: #1e8e3e
}

[foreground=google-green],[theme=google-green] [foreground=theme] {
  --devsite-foreground-color: #1e8e3e;
  --devsite-foreground-button-background-hover: #e9f4ec;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #c7e3cf;
  --devsite-foreground-button-border-color-active: #e9f4ec;
  --devsite-foreground-button-color: #1e8e3e;
  --devsite-foreground-button-primary-background: #1e8e3e;
  --devsite-foreground-button-primary-background-hover: #137333;
  --devsite-foreground-button-primary-color: #fff
}

[background=google-red] {
  --devsite-background-color: #d93025
}

[foreground=google-red],[theme=google-red] [foreground=theme] {
  --devsite-foreground-color: #d93025;
  --devsite-foreground-button-background-hover: #fbeae9;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #f6cbc9;
  --devsite-foreground-button-border-color-active: #fbeae9;
  --devsite-foreground-button-color: #d93025;
  --devsite-foreground-button-primary-background: #d93025;
  --devsite-foreground-button-primary-background-hover: #b31412;
  --devsite-foreground-button-primary-color: #fff
}

[background=google-yellow] {
  --devsite-background-color: #f9ab00
}

[foreground=google-yellow],[theme=google-yellow] [foreground=theme] {
  --devsite-foreground-color: #f9ab00;
  --devsite-foreground-button-background-hover: #fef7e6;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #feeabf;
  --devsite-foreground-button-border-color-active: #fef7e6;
  --devsite-foreground-button-color: #f9ab00;
  --devsite-foreground-button-primary-background: #f9ab00;
  --devsite-foreground-button-primary-background-hover: #ea8600;
  --devsite-foreground-button-primary-color: #fff
}

[background=indigo] {
  --devsite-background-color: #3f51b5
}

[foreground=indigo],[theme=indigo] [foreground=theme] {
  --devsite-foreground-color: #3f51b5;
  --devsite-foreground-button-background-hover: #eceef8;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #cfd4ed;
  --devsite-foreground-button-border-color-active: #eceef8;
  --devsite-foreground-button-color: #3f51b5;
  --devsite-foreground-button-primary-background: #3f51b5;
  --devsite-foreground-button-primary-background-hover: #303f9f;
  --devsite-foreground-button-primary-color: #fff
}

[background=orange] {
  --devsite-background-color: #e8710a
}

[foreground=orange],[theme=orange] [foreground=theme] {
  --devsite-foreground-color: #e8710a;
  --devsite-foreground-button-background-hover: #fdf1e7;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #f9dcc2;
  --devsite-foreground-button-border-color-active: #fdf1e7;
  --devsite-foreground-button-color: #e8710a;
  --devsite-foreground-button-primary-background: #e8710a;
  --devsite-foreground-button-primary-background-hover: #c26401;
  --devsite-foreground-button-primary-color: #fff
}

[background=pink] {
  --devsite-background-color: #e52592
}

[foreground=pink],[theme=pink] [foreground=theme] {
  --devsite-foreground-color: #e52592;
  --devsite-foreground-button-background-hover: #fce9f4;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #f9c9e4;
  --devsite-foreground-button-border-color-active: #fce9f4;
  --devsite-foreground-button-color: #e52592;
  --devsite-foreground-button-primary-background: #e52592;
  --devsite-foreground-button-primary-background-hover: #b80672;
  --devsite-foreground-button-primary-color: #fff
}

[background=purple] {
  --devsite-background-color: #9334e6
}

[foreground=purple],[theme=purple] [foreground=theme] {
  --devsite-foreground-color: #9334e6;
  --devsite-foreground-button-background-hover: #f4ebfd;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #e4ccf9;
  --devsite-foreground-button-border-color-active: #f4ebfd;
  --devsite-foreground-button-color: #9334e6;
  --devsite-foreground-button-primary-background: #9334e6;
  --devsite-foreground-button-primary-background-hover: #7627bb;
  --devsite-foreground-button-primary-color: #fff
}

[background=teal] {
  --devsite-background-color: #009688
}

[foreground=teal],[theme=teal] [foreground=theme] {
  --devsite-foreground-color: #009688;
  --devsite-foreground-button-background-hover: #e6f5f3;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #bfe5e1;
  --devsite-foreground-button-border-color-active: #e6f5f3;
  --devsite-foreground-button-color: #009688;
  --devsite-foreground-button-primary-background: #009688;
  --devsite-foreground-button-primary-background-hover: #00796b;
  --devsite-foreground-button-primary-color: #fff
}

[background=blue] {
  --devsite-background-color: #1a73e8
}

[foreground=blue],[theme=blue] [foreground=theme] {
  --devsite-foreground-color: #1a73e8;
  --devsite-foreground-button-background-hover: #e8f1fd;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #c6dcf9;
  --devsite-foreground-button-border-color-active: #e8f1fd;
  --devsite-foreground-button-color: #1a73e8;
  --devsite-foreground-button-primary-background: #1a73e8;
  --devsite-foreground-button-primary-background-hover: #185abc;
  --devsite-foreground-button-primary-color: #fff
}

[background=green] {
  --devsite-background-color: #1e8e3e
}

[foreground=green],[theme=green] [foreground=theme] {
  --devsite-foreground-color: #1e8e3e;
  --devsite-foreground-button-background-hover: #e9f4ec;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #c7e3cf;
  --devsite-foreground-button-border-color-active: #e9f4ec;
  --devsite-foreground-button-color: #1e8e3e;
  --devsite-foreground-button-primary-background: #1e8e3e;
  --devsite-foreground-button-primary-background-hover: #137333;
  --devsite-foreground-button-primary-color: #fff
}

[background=light-blue] {
  --devsite-background-color: #0288d1
}

[foreground=light-blue],[theme=light-blue] [foreground=theme] {
  --devsite-foreground-color: #0288d1;
  --devsite-foreground-button-background-hover: #e6f3fa;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #c0e1f4;
  --devsite-foreground-button-border-color-active: #e6f3fa;
  --devsite-foreground-button-color: #0288d1;
  --devsite-foreground-button-primary-background: #0288d1;
  --devsite-foreground-button-primary-background-hover: #303f9f;
  --devsite-foreground-button-primary-color: #fff
}

[background=light-green] {
  --devsite-background-color: #8bc34a
}

[foreground=light-green],[theme=light-green] [foreground=theme] {
  --devsite-foreground-color: #8bc34a;
  --devsite-foreground-button-background-hover: #f3f9ed;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #e2f0d2;
  --devsite-foreground-button-border-color-active: #f3f9ed;
  --devsite-foreground-button-color: #8bc34a;
  --devsite-foreground-button-primary-background: #8bc34a;
  --devsite-foreground-button-primary-background-hover: #689f38;
  --devsite-foreground-button-primary-color: #fff
}

[background=navy] {
  --devsite-background-color: #3f51b5
}

[foreground=navy],[theme=navy] [foreground=theme] {
  --devsite-foreground-color: #3f51b5;
  --devsite-foreground-button-background-hover: #eceef8;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #cfd4ed;
  --devsite-foreground-button-border-color-active: #eceef8;
  --devsite-foreground-button-color: #3f51b5;
  --devsite-foreground-button-primary-background: #3f51b5;
  --devsite-foreground-button-primary-background-hover: #303f9f;
  --devsite-foreground-button-primary-color: #fff
}

[background=pale-blue] {
  --devsite-background-color: #12b5cb
}

[foreground=pale-blue],[theme=pale-blue] [foreground=theme] {
  --devsite-foreground-color: #12b5cb;
  --devsite-foreground-button-background-hover: #e7f8fa;
  --devsite-foreground-button-border-color: #dadce0;
  --devsite-foreground-button-border-color-hover: #c4edf2;
  --devsite-foreground-button-border-color-active: #e7f8fa;
  --devsite-foreground-button-color: #12b5cb;
  --devsite-foreground-button-primary-background: #12b5cb;
  --devsite-foreground-button-primary-background-hover: #098591;
  --devsite-foreground-button-primary-color: #fff
}

[background=cyan] {
  --devsite-background-color: #4ecde6
}

[background=google-yellow] {
  --devsite-background-color: #fcc934
}

[background=light-green] {
  --devsite-background-color: #a8dab5
}

[background=orange] {
  --devsite-background-color: #fcad70
}

[background=grey],[background=light-green] {
  --devsite-link-color: #1967d2
}

[background=grey] {
  --devsite-background-color: var(--devsite-background-3);
  --devsite-heading-color: var(--devsite-primary-text-color);
  --devsite-text-color: var(--devsite-primary-text-color);
  --devsite-text-color-hover: var(--devsite-secondary-text-color)
}

[background=light-green] {
  --devsite-background-button-white-color: #202124;
  --devsite-icon-color: #202124;
  --devsite-icon-color-hover: #5f6368;
  --devsite-text-color: #202124;
  --devsite-text-color-hover: #5f6368
}

[foreground=light-green] {
  --devsite-foreground-button-primary-color: #202124
}

.devsite-landing-row-item-labels [background=light-green]:not([foreground]) {
  --devsite-text-color: #202124
}

[background=cyan],[background=google-yellow],[background=orange],[background=pale-blue],[theme=cyan] [background=theme],[theme=google-yellow] [background=theme],[theme=orange] [background=theme],[theme=pale-blue] [background=theme] {
  --devsite-background-button-white-color: #202124;
  --devsite-heading-color: #202124;
  --devsite-icon-color: #202124;
  --devsite-icon-color-hover: #5f6368;
  --devsite-link-color: #202124;
  --devsite-text-color: #202124;
  --devsite-text-color-hover: #5f6368
}

[background=white] {
  --devsite-background-color: var(--devsite-background-1);
  --devsite-heading-color: var(--devsite-primary-text-color);
  --devsite-link-color: unset;
  --devsite-text-color: var(--devsite-primary-text-color);
  --devsite-text-color-hover: var(--devsite-secondary-text-color)
}

[foreground=cyan],[foreground=google-yellow],[foreground=orange],[foreground=pale-blue] {
  --devsite-foreground-button-primary-color: #202124
}

[foreground=theme] {
  --devsite-icon-color: var(--devsite-primary-color)
}

[foreground=theme] .devsite-heading-link {
  --devsite-icon-color: var(--devsite-secondary-text-color);
  --devsite-icon-color-hover: var(--devsite-link-color)
}

[foreground=white] {
  --devsite-icon-color: var(--devsite-inverted-text-color);
  --devsite-text-color: var(--devsite-inverted-text-color)
}

.devsite-landing-row-item-labels [background]:not([foreground]) {
  --devsite-text-color: #fff
}

.devsite-landing-row-item-labels [background=cyan]:not([foreground]),.devsite-landing-row-item-labels [background=google-yellow]:not([foreground]),.devsite-landing-row-item-labels [background=orange]:not([foreground]),.devsite-landing-row-item-labels [background=pale-blue]:not([foreground]) {
  --devsite-text-color: #202124
}

[layout=docs] {
  --devsite-banner-margin: -40px -40px 40px
}

[layout=docs],[layout=docs][template=landing] {
  --devsite-banner-message-padding: 20px 40px 19px
}

[layout=full],[template=landing] {
  --devsite-banner-message-padding: 20px 24px 19px
}

[layout=full] {
  --devsite-banner-margin: -40px calc(50% - 50vw) 40px;
  --devsite-main-content-max-width: 1600px;
  --devsite-main-content-padding: 40px 80px
}

[layout=full][concierge] {
  --devsite-banner-margin: -40px calc(50% - 50vw + var(--devsite-concierge-width)/2) 40px
}

[template="404"],[template=offline] {
  --devsite-404-links-columns: 4;
  --devsite-404-search-margin: 0 0 160px;
  --devsite-main-content-padding: 0 80px
}

[layout][template=badge],[layout][template=landing],[layout][template=playlist],[layout][template=profile],[layout][template=quiz],[layout][template=topic] {
  --devsite-banner-margin: 0;
  --devsite-main-content-max-width: none;
  --devsite-main-content-padding: 0
}

[layout][concierge=closed],[layout][concierge] {
  --devsite-concierge-width: var(--devsite-concierge-width-closed,0px)
}

[layout][concierge=open] {
  --devsite-concierge-width: var(--devsite-concierge-width-open,0px)
}

[layout][concierge=hide],[layout][concierge=modal] {
  --devsite-concierge-width: 0px
}

[layout][codelabs-content-type=paginated][concierge] {
  --devsite-concierge-top: 64px
}

[layout=full]:not([template=landing]) {
  --devsite-notice-margin: 16px calc(50% - 50vw);
  --devsite-notice-padding-block: 15px;
  --devsite-notice-padding-inline: calc(50vw - 50% + 36px) calc(50vw - 50%)
}

[layout=full] devsite-content,[template=landing] devsite-content {
  --devsite-breadcrumb-list-display: none;
  --devsite-breadcrumb-list-padding: 20px 24px
}

[layout=full][template=search] devsite-content {
  --devsite-breadcrumb-list-padding: inherit
}

.devsite-landing-row {
  --devsite-landing-group-padding: 0 24px;
  --devsite-landing-row-padding: 40px 0
}

[layout=docs] .devsite-landing-row {
  --devsite-landing-group-padding: 0 40px
}

.devsite-landing-row-padding-small {
  --devsite-landing-row-padding: 32px 0
}

.devsite-landing-row-padding-medium {
  --devsite-landing-row-padding: 64px 0
}

.devsite-landing-row-padding-large {
  --devsite-landing-row-padding: 96px 0
}

.devsite-landing-row-padding-xlarge {
  --devsite-landing-row-padding: 128px 0
}

.devsite-landing-row-1-up {
  --devsite-1-up-grid-template-columns: repeat(12,1fr);
  --devsite-1-up-no-media-description-grid-column: 1/span 8;
  --devsite-custom-image-icon-font-size: 256px;
  --devsite-custom-image-icon-max-height: 256px;
  --devsite-custom-image-icon-width: 256px
}

.devsite-landing-row-2-up,.devsite-landing-row-50 {
  --devsite-custom-image-icon-font-size: 192px;
  --devsite-custom-image-icon-max-height: 192px;
  --devsite-custom-image-icon-width: 192px
}

.devsite-landing-row-3-up,.devsite-landing-row-67 {
  --devsite-custom-image-icon-font-size: 128px;
  --devsite-custom-image-icon-max-height: 128px;
  --devsite-custom-image-icon-width: 128px
}

.devsite-landing-row-4-up,.devsite-landing-row-75,[layout=docs] .devsite-landing-row-2-up {
  --devsite-custom-image-icon-font-size: 96px;
  --devsite-custom-image-icon-max-height: 96px;
  --devsite-custom-image-icon-width: 96px
}

.devsite-landing-row-2-up {
  --devsite-landing-row-group-grid: auto-flow/repeat(2,1fr)
}

.devsite-landing-row-3-up {
  --devsite-landing-row-group-grid: auto-flow/repeat(3,1fr)
}

.devsite-landing-row-4-up {
  --devsite-landing-row-group-grid: auto-flow/repeat(4,1fr)
}

[header-position=left],[header-position=right] {
  --devsite-landing-row-group-grid: auto-flow/repeat(2,1fr)
}

[size=small] {
  --devsite-icon-size: 24px
}

[size=medium] {
  --devsite-icon-size: 48px
}

[size=large] {
  --devsite-icon-size: 96px
}

[size=xlarge] {
  --devsite-icon-size: 144px
}

.devsite-landing-row-logos [size] {
  --devsite-custom-image-icon-font-size: 96px;
  --devsite-custom-image-icon-max-height: 96px;
  --devsite-custom-image-icon-width: 96px;
  --devsite-icon-size: 96px
}

[background][size] {
  --devsite-icon-margin-block: 0;
  --devsite-icon-margin-inline: 0
}

[background][size=small] {
  --devsite-icon-canvas-size: 28px;
  --devsite-icon-size: 18px
}

[background][size=medium],[size=medium] {
  --devsite-icon-canvas-size: 56px
}

[background][size=medium] {
  --devsite-icon-size: 36px
}

[background][size=large] {
  --devsite-icon-canvas-size: 112px;
  --devsite-icon-size: 72px
}

[background][size=xlarge] {
  --devsite-icon-canvas-size: 168px;
  --devsite-icon-size: 108px
}

[icon-position^=bottom] {
  --devsite-icon-canvas-margin-block: 8px 0
}

[icon-position=bottom] {
  --devsite-icon-canvas-margin-inline: 0;
  --devsite-icon-margin-inline: 0
}

[icon-position=bottom-right] {
  --devsite-icon-canvas-margin-inline: 20px 0;
  --devsite-icon-margin-inline: 0 4px
}

[icon-position=right] {
  --devsite-icon-canvas-margin-block: 0;
  --devsite-icon-canvas-margin-inline: 20px 0;
  --devsite-icon-margin-block: 0;
  --devsite-icon-margin-inline: 0
}

[icon-position=top] {
  --devsite-header-icon-canvas-margin-block: 0 20px;
  --devsite-header-icon-canvas-margin-inline: 0
}

[icon-position=top] [size=small] {
  --devsite-icon-canvas-margin-block: 0 12px
}

[icon-position=top] [size=medium] {
  --devsite-icon-canvas-margin-block: 0 16px
}

[icon-position=top] [size=large] {
  --devsite-icon-canvas-margin-block: 0 24px
}

[icon-position=top] [size=xlarge] {
  --devsite-icon-canvas-margin-block: 0 32px
}

.devsite-landing-row-header-centered,.devsite-landing-row-header-centered [icon-position=top] {
  --devsite-header-icon-canvas-margin-inline: auto
}

.devsite-landing-row-item-centered {
  --devsite-icon-margin-inline: auto
}

@media screen and (max-width: 1253px) {
  [layout] devsite-catalog {
      --devsite-catalog-grid:"main"/1fr;
      --devsite-catalog-sidebar-button-display: inline-block!important;
      --devsite-catalog-sidebar-button-margin: 0 0 16px;
      --devsite-columns: 2
  }

  devsite-recommended-content {
      --devsite-columns: 3
  }
}

@media screen and (max-width: 1440px) {
  [template] devsite-recommended-content devsite-carousel[data-items-per-slide=auto] {
      --devsite-carousel-gap:0;
      --devsite-carousel-ghost-item-width: 16px;
      --devsite-carousel-gradient-start-grid-column: 2;
      --devsite-carousel-gradient-end-grid-column: -2;
      --devsite-carousel-gradient-width: 80px;
      --devsite-carousel-grid: minmax(40px,auto) /0 48px 1fr 48px 0;
      --devsite-carousel-slideshow-scroll-padding: 0 24px
  }
}

@media screen and (max-width: 840px) {
  [template=page] devsite-carousel[data-full-width],[template=page] devsite-carousel[data-items-per-slide=auto] {
      --devsite-carousel-gap:16px 24px;
      --devsite-carousel-grid: 1fr 40px/0 40px 1fr 40px 0;
      --devsite-carousel-margin-inline: -24px;
      --devsite-carousel-markers-grid-column: 3;
      --devsite-carousel-next-grid-column: 4;
      --devsite-carousel-prev-grid-column: 2;
      --devsite-carousel-slideshow-grid-column: 1/-1;
      --devsite-carousel-slideshow-padding-inline: 24px
  }

  [template=page] devsite-carousel[data-items-per-slide=auto] {
      --devsite-carousel-ghost-item-width: 16px;
      --devsite-carousel-slideshow-scroll-padding: 0 24px
  }

  devsite-footer-utility devsite-language-selector {
      --devsite-language-selector-menu-inset-inline: 0 auto
  }

  devsite-playlist {
      --devsite-playlist-max-width: 768px;
      --devsite-playlist-padding-x: 40px
  }

  devsite-recommended-content {
      --devsite-columns: 2;
      --devsite-recommended-content-filters-margin-inline: -24px;
      --devsite-recommended-content-filters-padding-inline: 24px;
      --devsite-recommended-content-filters-width: calc(100% + 48px)
  }

  [layout] {
      --devsite-banner-margin: -24px -24px 24px
  }

  [layout][template] {
      --devsite-banner-message-padding: 20px 24px 19px
  }

  [layout=full] {
      --devsite-main-content-padding: 24px
  }

  [template="404"],[template=offline] {
      --devsite-404-links-columns: 2;
      --devsite-404-search-margin: 0 0 80px;
      --devsite-main-content-padding: 0 24px
  }

  .devsite-landing-row,[class^=devsite-landing-row-padding-] {
      --devsite-landing-row-padding: 24px 0
  }

  [layout=docs] .devsite-landing-row {
      --devsite-landing-group-padding: 0 24px
  }

  .devsite-landing-row-1-up {
      --devsite-1-up-grid-template-columns: repeat(2,1fr);
      --devsite-1-up-no-media-description-grid-column: 1/span 2
  }

  .devsite-landing-row-1-up,.devsite-landing-row-2-up,.devsite-landing-row-3-up,.devsite-landing-row-4-up {
      --devsite-custom-image-icon-font-size: 128px;
      --devsite-custom-image-icon-max-height: 128px;
      --devsite-custom-image-icon-width: 128px
  }

  .devsite-landing-row-3-up,.devsite-landing-row-4-up {
      --devsite-landing-row-group-grid: auto-flow/repeat(2,1fr)
  }

  [icon-position^=bottom] {
      --devsite-icon-canvas-margin-block: 0;
      --devsite-icon-canvas-margin-inline: 20px 0;
      --devsite-icon-margin-inline: 0 4px
  }
}

@media screen and (max-width: 600px) {
  :root {
      --devsite-landing-row-item-gap:16px
  }

  [layout] {
      --devsite-banner-margin: -16px -16px 16px
  }

  [layout][template] {
      --devsite-banner-message-padding: 16px 16px 15px
  }

  [layout=full] {
      --devsite-main-content-padding: 16px;
      --devsite-notice-margin: 16px -40px;
      --devsite-notice-padding-block: 15px;
      --devsite-notice-padding-inline: 76px 40px
  }

  [layout=full] devsite-content,[template=landing] devsite-content {
      --devsite-breadcrumb-list-padding: 20px 16px
  }

  [template="404"],[template=offline] {
      --devsite-404-search-margin: 0 0 40px;
      --devsite-main-content-padding: 0 16px
  }

  [template] devsite-carousel[data-full-width],[template] devsite-carousel[data-items-per-slide=auto] {
      --devsite-carousel-gap: 16px 16px;
      --devsite-carousel-grid: 1fr 40px/0 40px 1fr 40px 0;
      --devsite-carousel-margin-inline: -16px;
      --devsite-carousel-markers-grid-column: 3;
      --devsite-carousel-next-grid-column: 4;
      --devsite-carousel-prev-grid-column: 2;
      --devsite-carousel-slideshow-grid-column: 1/-1;
      --devsite-carousel-slideshow-padding-inline: 16px
  }

  [template] devsite-carousel[data-items-per-slide=auto] {
      --devsite-carousel-ghost-item-width: 8px;
      --devsite-carousel-slideshow-scroll-padding: 0 16px
  }

  devsite-content {
      --devsite-select-sibling-gap-x: 0;
      --devsite-select-sibling-gap-y: 16px
  }

  devsite-footer-linkboxes {
      --devsite-footer-linkboxes-grid-template-columns: 1fr;
      --devsite-footer-linkboxes-padding: 0 16px
  }

  devsite-playlist {
      --devsite-playlist-max-width: 100%;
      --devsite-playlist-padding-x: 24px
  }

  [template=landing] devsite-carousel[data-hide-mobile-controls] {
      --devsite-carousel-markers-display: none;
      --devsite-carousel-prev-next-display: none
  }

  [template] devsite-recommended-content devsite-carousel {
      --devsite-carousel-item-width: 70vw!important;
      --devsite-carousel-margin-inline: -16px;
      --devsite-carousel-markers-display: none;
      --devsite-carousel-prev-next-display: none;
      --devsite-carousel-slideshow-grid-column: 1/-1;
      --devsite-carousel-slideshow-padding-inline: 16px;
      --devsite-carousel-slideshow-scroll-padding: 0 16px
  }

  devsite-recommended-content devsite-carousel[data-items-per-slide=auto] {
      --devsite-carousel-gradient-display: none;
      --devsite-carousel-item-flex: initial
  }

  devsite-select {
      --devsite-select-display: block
  }

  .devsite-landing-row,[class^=devsite-landing-row-padding-] {
      --devsite-landing-group-padding: 0 16px;
      --devsite-landing-row-padding: 16px 0
  }

  [layout=docs] .devsite-landing-row {
      --devsite-landing-group-padding: 0 16px
  }

  .devsite-landing-row-1-up,.devsite-landing-row-2-up,.devsite-landing-row-3-up {
      --devsite-item-display: block
  }

  .devsite-landing-row-2-up,.devsite-landing-row-3-up,.devsite-landing-row-4-up,.devsite-landing-row[header-position] {
      --devsite-landing-row-group-grid: auto-flow/1fr
  }
}

:root {
  --devsite-headline-font-family: Roboto,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;
  --devsite-display-font: 300 48px/56px var(--devsite-primary-font-family);
  --devsite-h1-font: 300 34px/40px var(--devsite-primary-font-family);
  --devsite-h1-letter-spacing: -0.01em;
  --devsite-h2-font: 300 24px/32px var(--devsite-primary-font-family);
  --devsite-h2-letter-spacing: -0.01em;
  --devsite-h2-padding: 0 0 3px;
  --devsite-h3-font: 400 20px/32px var(--devsite-primary-font-family);
  --devsite-card-border: 0;
  --devsite-card-border-radius: 2px;
  --devsite-card-box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color);
  --devsite-feature-tooltip-border-radius: 2px
}

devsite-header {
  --devsite-button-box-shadow: none;
  --devsite-button-box-shadow-focus: none;
  --devsite-button-box-shadow-active: none;
  --devsite-upper-tab-marker-color-inactive: transparent;
  --devsite-lower-tab-marker-color-inactive: transparent
}

devsite-catalog,devsite-nav-buttons {
  --devsite-button-background: var(--devsite-background-1);
  --devsite-button-background-hover: var(--devsite-background-3);
  --devsite-button-background-selected: var(--devsite-background-3);
  --devsite-button-border: 1px solid #bdc1c6;
  --devsite-button-border-hover: 1px solid #bdc1c6;
  --devsite-button-border-selected: 1px solid #bdc1c6;
  --devsite-button-color: var(--devsite-primary-text-color)
}

.devsite-header-billboard {
  --devsite-h1-font: 300 24px/32px var(--devsite-primary-font-family);
  --devsite-h1-letter-spacing: 0
}

[foreground] {
  --devsite-foreground-button-border-color: transparent;
  --devsite-foreground-button-border-color-hover: transparent;
  --devsite-foreground-button-border-color-active: transparent
}

@media screen and (max-width: 600px) {
  :root {
      --devsite-display-font:300 24px/32px var(--devsite-primary-font-family);
      --devsite-h1-font: 300 24px/32px var(--devsite-primary-font-family)
  }
}

html {
  -ms-touch-action: manipulation;
  touch-action: manipulation
}

body,html {
  color: var(--devsite-primary-text-color);
  font: 400 16px/24px var(--devsite-primary-font-family);
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  margin: 0;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  text-size-adjust: 100%
}

body {
  background-color: var(--devsite-background-1)
}

.devsite-book-nav-bg:after,body[layout=docs] {
  background-color: var(--devsite-body-background,var(--devsite-background-0))
}

body[sitemask--active] {
  overflow: hidden
}

p {
  margin: 16px 0;
  padding: 0
}

img,video {
  border: 0;
  height: auto;
  max-width: 100%
}

img {
  border-radius: var(--devsite-image-border-radius)
}

video {
  border-radius: var(--devsite-video-border-radius)
}

table img {
  max-width: 272px
}

table :link,table :visited {
  word-break: normal
}

.devsite-toast-content :link,.devsite-toast-content :visited {
  color: #fff;
  text-decoration: underline
}

.devsite-toast-content a:focus {
  background: hsla(0,0%,100%,.3);
  border-radius: 2px;
  margin: -4px;
  padding: 4px;
  text-decoration: none
}

sup {
  line-height: 1
}

dd,ol,ul {
  margin: 0;
  padding-left: 40px
}

td>dl>dd,td>ol,td>ul {
  padding-left: 20px
}

ol {
  list-style: decimal outside
}

ol ol {
  list-style-type: lower-alpha
}

ol ol ol {
  list-style-type: lower-roman
}

ol.upper-alpha {
  list-style-type: upper-alpha
}

ul {
  list-style: disc outside
}

li,li p {
  margin: 12px 0;
  padding: 0
}

dt {
  font: 700 16px/24px var(--devsite-primary-font-family)
}

dd,dt {
  margin: 16px 0
}

blockquote {
  background: var(--devsite-blockquote-background,var(--devsite-background-3));
  border-left: var(--devsite-blockquote-border-left,0);
  border-radius: var(--devsite-blockquote-border-radius,0);
  margin: var(--devsite-blockquote-margin,16px 0);
  padding: var(--devsite-blockquote-padding,8px);
  quotes: none
}

hr {
  border: 0;
  border-top: var(--devsite-primary-border);
  height: 0;
  margin: var(--devsite-hr-margin,16px 0);
  width: 100%
}

.devsite-page-title~.devsite-article-body>devsite-view-release-notes:first-child+p,.devsite-page-title~.devsite-article-body>p:first-child {
  margin-top: 28px
}

.devsite-article-body>hr.full-width {
  margin: 16px -40px;
  width: calc(100% + 80px)
}

@media screen and (max-width: 840px) {
  .devsite-article-body>hr.full-width {
      margin:16px -24px;
      width: calc(100% + 48px)
  }
}

@media screen and (max-width: 600px) {
  .devsite-article-body>hr.full-width {
      margin:16px -16px;
      width: calc(100% + 32px)
  }
}

abbr,acronym {
  border-bottom: 1px dotted var(--devsite-secondary-text-color);
  cursor: help
}

address,cite,dfn,em {
  font-style: italic
}

strong {
  font-weight: 700
}

[visually-hidden] {
  opacity: 0!important;
  pointer-events: none!important;
  visibility: hidden!important
}

.hidden,[hidden] {
  display: none!important
}

[render-hidden] {
  display: inline!important;
  position: absolute!important;
  visibility: hidden!important
}

[no-scroll] {
  overflow: hidden
}

#app-progress {
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1011
}

#app-progress .devsite-progress--indeterminate .devsite-progress--indeterminate-1,#app-progress .devsite-progress--indeterminate .devsite-progress--indeterminate-3 {
  background-color: var(--devsite-progress-background-color,var(--devsite-primary-color,var(--devsite-secondary-text-color)))
}

.devsite-article .material-icons {
  vertical-align: bottom
}

.devsite-article-body .material-icons:not(:link):not(button),[template=landing] .devsite-article .material-icons:not(:link):not(button) {
  cursor: default;
  pointer-events: none
}

.footnotes ol {
  padding-left: 16px
}

.footnotes li {
  font: 400 13px/20px var(--devsite-primary-font-family)
}

#qv-wrapper,#table-of-contents,#tb-wrapper,.inline-toc,div.toc:not(.class):not(.group):not(.type):not(.interface),h2#contents,h2.toc,h3#contents,h3.toc,ol.toc,section.toc,ul.toc {
  display: none
}

@media screen and (max-width: 840px) {
  #app-progress {
      z-index:1014
  }
}

:link,:visited {
  color: var(--devsite-link-color);
  outline: 0;
  -webkit-text-decoration: var(--devsite-link-text-decoration,none);
  -moz-text-decoration: var(--devsite-link-text-decoration,none);
  text-decoration: var(--devsite-link-text-decoration,none);
  word-break: break-word
}

a:hover {
  -webkit-text-decoration: var(--devsite-link-text-decoration-hover);
  -moz-text-decoration: var(--devsite-link-text-decoration-hover);
  text-decoration: var(--devsite-link-text-decoration-hover)
}

a:focus {
  text-decoration: underline
}

a:focus img {
  -webkit-filter: brightness(75%);
  filter: brightness(75%)
}

.no-feedback devsite-feedback {
  display: none!important
}

.preserve-case {
  text-transform: none
}

a.external:after,a[href*="man7.org"]:after,a[href*="oracle.com"]:after {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  content: "open_in_new";
  font-size: 18px;
  margin-block:0;margin-inline:4px 0;vertical-align: text-bottom
}

[dir=rtl] a.external:after,[dir=rtl] a[href*="man7.org"]:after,[dir=rtl] a[href*="oracle.com"]:after {
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1)
}

a.download:before {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  content: "file_download";
  display: inline-block;
  font-size: 18px;
  margin-block:0;margin-inline:0 4px;vertical-align: text-bottom
}

devsite-content {
  counter-reset: numbered-h2 numbered-h3
}

h2.numbered {
  line-height: 48px;
  margin-top: 60px;
  padding-bottom: 19px
}

h2.numbered~h3.numbered {
  line-height: 40px
}

h2.numbered:before,h2.numbered~h3.numbered:before {
  background: var(--devsite-tertiary-text-color);
  color: var(--devsite-inverted-text-color);
  display: inline-block;
  margin-block:0;text-align: center
}

h2.numbered:before {
  border-radius: 24px;
  content: counter(numbered-h2);
  counter-increment: numbered-h2;
  counter-set: numbered-h3 0;
  height: 48px;
  line-height: 48px;
  margin-inline:0 20px;width: 48px
}

h2.numbered~h3.numbered:before {
  border-radius: 20px;
  content: counter(numbered-h2) "." counter(numbered-h3);
  counter-increment: numbered-h3;
  height: 40px;
  line-height: 40px;
  margin-inline:0 16px;min-width: 40px;
  padding-inline:4px}

.compare-better,.compare-no,.compare-worse,.compare-yes {
  font-weight: 700
}

.compare-better:before,.compare-blank:before,.compare-no:before,.compare-worse:before,.compare-yes:before {
  content: "";
  display: inline-block;
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  word-wrap: normal;
  margin-block:-4px 0;margin-inline:0 4px;text-transform: none;
  vertical-align: middle;
  width: 24px
}

.compare-better:before,.compare-yes:before {
  color: var(--devsite-compare-yes-color)
}

.compare-no:before,.compare-worse:before {
  color: var(--devsite-compare-no-color)
}

.compare-better:before {
  content: "thumb_up"
}

.compare-no:before {
  content: "not_interested"
}

.compare-worse:before {
  content: "thumb_down"
}

.compare-yes:before {
  content: "check"
}

.align-center {
  text-align: center
}

.align-right {
  text-align: right
}

.hanging-indent,.members.function td:first-child {
  -webkit-padding-start: 25px;
  -moz-padding-start: 25px;
  padding-inline-start:25px;text-indent: -17px
}

.bad-table {
  table-layout: fixed
}

.bad-table td,.bad-table tr {
  word-wrap: break-word
}

.bad-table pre {
  word-wrap: normal
}

.screenshot {
  border: var(--devsite-secondary-border);
  padding: 3px
}

.columns td,.columns th,.columns tr {
  background: 0;
  border: 0;
  font: 16px/24px var(--devsite-primary-font-family);
  padding-block:0}

.columns tr {
  padding-inline:0}

.columns td,.columns th {
  padding-inline:0 20px}

.columns th {
  color: var(--devsite-primary-text-color);
  font-weight: 500
}

.columns code,.columns pre {
  background: var(--devsite-background-3)
}

.inline:not(.expandable) {
  display: inline
}

.inline-block {
  display: inline-block
}

.block {
  display: block
}

img.inline-icon {
  height: 1.2em;
  vertical-align: sub
}

.no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.wrap-code {
  white-space: normal
}

.attempt-left,.attempt-right,aside.attempt-left,aside.attempt-right {
  max-width: calc(50% - 20px)
}

.attempt-left,.video-wrapper-left,aside.attempt-left {
  margin-block:0 40px;margin-inline:0 40px}

[dir=ltr] .attempt-left,[dir=ltr] .video-wrapper-left,[dir=ltr] aside.attempt-left {
  float: left
}

[dir=rtl] .attempt-left,[dir=rtl] .video-wrapper-left,[dir=rtl] aside.attempt-left {
  float: right
}

.attempt-right,.video-wrapper,aside.attempt-right {
  margin-block:0 40px;margin-inline:40px 0}

[dir=ltr] .attempt-right,[dir=ltr] .video-wrapper,[dir=ltr] aside.attempt-right {
  float: right
}

[dir=rtl] .attempt-right,[dir=rtl] .video-wrapper,[dir=rtl] aside.attempt-right {
  float: left
}

.clear {
  clear: both
}

.attempt-left+.attempt-right,.attempt-left+.video-wrapper,.video-wrapper-left+.attempt-right,.video-wrapper-left+.video-wrapper {
  margin-inline:0}

.video-wrapper,.video-wrapper-full-width {
  overflow: hidden;
  position: relative
}

.video-wrapper,.video-wrapper-left {
  width: calc(50% - 20px)
}

.video-wrapper-full-width {
  margin: 16px 0;
  width: 100%
}

.video-wrapper embed,.video-wrapper iframe,.video-wrapper object,.video-wrapper-full-width embed,.video-wrapper-full-width iframe,.video-wrapper-full-width object,.video-wrapper-left embed,.video-wrapper-left iframe,.video-wrapper-left object {
  height: 101%;
  left: -.5%;
  position: absolute;
  top: -.5%;
  width: 101%
}

@media screen and (max-width: 840px) {
  .attempt-left,.attempt-right,aside.attempt-left,aside.attempt-right {
      display:block;
      max-width: 100%
  }

  .attempt-left,.attempt-right,.video-wrapper,.video-wrapper-left,aside.attempt-left,aside.attempt-right {
      float: none;
      margin: 16px 0;
      width: 100%
  }
}

body[pending] #gc-wrapper {
  margin-top: 0!important
}

body[ready] #gc-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0;
  -moz-box-flex: 1;
  -ms-flex: 1 0;
  flex: 1 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

[dir=ltr] body[concierge] #gc-wrapper {
  -webkit-transition: margin-right .1s cubic-bezier(0,0,.2,1);
  transition: margin-right .1s cubic-bezier(0,0,.2,1)
}

[dir=rtl] body[concierge] #gc-wrapper {
  -webkit-transition: margin-left .1s cubic-bezier(0,0,.2,1);
  transition: margin-left .1s cubic-bezier(0,0,.2,1)
}

[dir=ltr] body[ready][concierge] #gc-wrapper {
  margin-right: var(--devsite-concierge-width,0)
}

[dir=rtl] body[ready][concierge] #gc-wrapper {
  margin-left: var(--devsite-concierge-width,0)
}

.devsite-wrapper {
  min-height: 100vh
}

body[ready] .devsite-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden
}

.full-bleed {
  margin: 0;
  padding: 0
}

.devsite-book-nav-bg,devsite-book-nav {
  width: 269px
}

body[pending] devsite-book-nav {
  position: absolute
}

@media screen and (max-width: 840px) {
  body[devsite-book-nav--open] {
      overflow:hidden
  }

  body[devsite-book-nav--open] devsite-book-nav[fixed] {
      -webkit-transform: translateX(0)!important;
      transform: translateX(0)!important
  }
}

.devsite-sidebar {
  grid-column: 3;
  grid-row: 1;
  min-width: 0;
  width: auto
}

[has-sidebar] .devsite-sidebar {
  margin: 24px 0 0;
  -webkit-margin-end: 24px;
  -moz-margin-end: 24px;
  margin-inline-end:24px;-webkit-margin-start: -8px;
  -moz-margin-start: -8px;
  margin-inline-start:-8px}

.devsite-sidebar[fixed] .devsite-sidebar-content {
  background-color: var(--devsite-body-background,var(--devsite-background-0));
  contain: content;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-height: var(--devsite-js-sidebar-max-height);
  max-width: var(--devsite-js-sidebar-max-width);
  -webkit-padding-start: 8px;
  -moz-padding-start: 8px;
  padding-inline-start:8px;position: fixed;
  -webkit-transform: translate3d(0,var(--devsite-js-sidebar-offset),0);
  transform: translate3d(0,var(--devsite-js-sidebar-offset),0)
}

.devsite-sidebar devsite-toc.devsite-toc,.devsite-sidebar devsite-toc>.devsite-nav-list {
  width: auto
}

devsite-recommendations-sidebar.recommendations-rendered {
  margin-top: 20px
}

body devsite-toc>.devsite-nav-list {
  width: auto
}

.devsite-main-content {
  margin: 0 auto;
  max-width: var(--devsite-main-content-max-width);
  padding: var(--devsite-main-content-padding);
  position: relative;
  width: 100%
}

#contain-402 {
  z-index: 1004!important
}

body[pending] .devsite-main-content {
  min-height: calc(100vh - 456px)
}

body[ready] .devsite-main-content {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-height: auto
}

body[layout=docs] .devsite-main-content {
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr minmax(752px,936px) 1fr;
  grid-template-rows: 1fr
}

body[layout=docs] .devsite-main-content[has-sidebar] {
  grid-template-columns: 1fr minmax(752px,936px) minmax(160px,1fr)
}

body[layout=docs] .devsite-main-content[has-book-nav] {
  grid-template-columns: minmax(269px,1fr) minmax(752px,936px) 1fr
}

body[layout=docs][concierge] .devsite-main-content[has-book-nav],body[layout=docs][concierge] .devsite-main-content[has-book-nav][has-sidebar] {
  grid-template-columns: minmax(269px,1fr) minmax(365px,1072px) 1fr
}

body[layout=docs] .devsite-main-content[has-book-nav][has-sidebar] {
  grid-template-columns: minmax(269px,1fr) minmax(752px,936px) minmax(160px,1fr)
}

.devsite-main-content[has-book-nav]~.devsite-footer,.devsite-main-content[has-book-nav]~devsite-footer-promos,.devsite-main-content[has-book-nav]~devsite-footer-utility {
  margin-block:0;margin-inline:269px 0}

@media screen and (max-width: 1253px) {
  body[layout=docs] .devsite-main-content[has-sidebar] {
      grid-template-columns:1fr minmax(752px,936px) 1fr
  }

  body[layout=docs] .devsite-main-content[has-book-nav],body[layout=docs] .devsite-main-content[has-book-nav][has-sidebar] {
      grid-template-columns: 269px 1fr 0
  }

  [layout][concierge=closed],[layout][concierge] {
      --devsite-concierge-width: var(--devsite-concierge-width-closed,0px)
  }

  [layout][concierge=open] {
      --devsite-concierge-width: var(--devsite-concierge-width-open,0px)
  }

  [dir=ltr] body[ready][concierge] #gc-wrapper {
      margin-right: var(--devsite-concierge-width-closed,0)
  }

  [dir=rtl] body[ready][concierge] #gc-wrapper {
      margin-left: var(--devsite-concierge-width-closed,0)
  }

  [layout][concierge=hide] {
      --devsite-concierge-width: 0px
  }

  .devsite-sidebar {
      display: none
  }
}

@media screen and (max-width: 840px) {
  body[layout=docs] .devsite-main-content {
      display:block;
      min-width: 100%
  }

  devsite-content-footer {
      padding: 0 24px
  }

  [layout][concierge=closed],[layout][concierge=hide],[layout][concierge=open],[layout][concierge] {
      --devsite-concierge-width: 0px
  }

  [dir=ltr] body[ready][concierge] #gc-wrapper {
      margin-right: 0
  }

  [dir=rtl] body[ready][concierge] #gc-wrapper {
      margin-left: 0
  }

  .devsite-main-content[has-book-nav]~.devsite-footer,.devsite-main-content[has-book-nav]~devsite-footer-promos,.devsite-main-content[has-book-nav]~devsite-footer-utility {
      margin-inline:0}
}

@media screen and (max-width: 600px) {
  devsite-content-footer {
      padding:0 16px
  }
}

.devsite-icon:before,::part(material-icon) {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal
}

.devsite-icon-arrow-drop-down:before {
  content: "arrow_drop_down"
}

.devsite-icon-close:before {
  content: "close"
}

.devsite-icon-code:before {
  content: "code"
}

.devsite-icon-code-dark:before,.devsite-icon-code-light:before {
  content: "brightness_medium"
}

.devsite-icon-copy:before {
  content: "content_copy"
}

.devsite-icon-edit:before {
  content: "edit"
}

.beta,.caution,.deprecated,.dogfood,.experimental,.key-point,.key-term,.note,.objective,.preview,.special,.success,.tip,.warning,aside {
  border-top: 1px solid var(--devsite-notice-border-color,transparent);
  border-bottom: 1px solid var(--devsite-notice-border-color,transparent);
  border-radius: var(--devsite-notice-border-radius,0);
  display: block;
  font-size: 14px;
  margin: var(--devsite-notice-margin);
  padding-block:var(--devsite-notice-padding-block);padding-inline: var(--devsite-notice-padding-inline)
}

.beta :link,.beta :visited,.caution :link,.caution :visited,.deprecated :link,.deprecated :visited,.dogfood :link,.dogfood :visited,.experimental :link,.experimental :visited,.key-point :link,.key-point :visited,.key-term :link,.key-term :visited,.note :link,.note :visited,.objective :link,.objective :visited,.preview :link,.preview :visited,.special :link,.special :visited,.success :link,.success :visited,.tip :link,.tip :visited,.warning :link,.warning :visited,aside :link,aside :visited {
  text-decoration: underline
}

.beta a:focus,.beta a:hover,.caution a:focus,.caution a:hover,.deprecated a:focus,.deprecated a:hover,.dogfood a:focus,.dogfood a:hover,.experimental a:focus,.experimental a:hover,.key-point a:focus,.key-point a:hover,.key-term a:focus,.key-term a:hover,.note a:focus,.note a:hover,.objective a:focus,.objective a:hover,.preview a:focus,.preview a:hover,.special a:focus,.special a:hover,.success a:focus,.success a:hover,.tip a:focus,.tip a:hover,.warning a:focus,.warning a:hover,aside a:focus,aside a:hover {
  background: hsla(0,0%,100%,.7);
  border-radius: 2px;
  margin: -4px;
  padding: 4px;
  text-decoration: none
}

.beta pre,.caution pre,.deprecated pre,.dogfood pre,.experimental pre,.key-point pre,.key-term pre,.note pre,.objective pre,.preview pre,.special pre,.success pre,.tip pre,.warning pre,aside pre {
  background: hsla(0,0%,100%,.75)
}

.beta code,.caution code,.deprecated code,.dogfood code,.experimental code,.key-point code,.key-term code,.note code,.objective code,.preview code,.special code,.success code,.tip code,.warning code,aside code {
  border: 0;
  font-weight: 700;
  padding: 0
}

.beta:before,.caution:before,.deprecated:before,.dogfood:before,.experimental:before,.key-point:before,.key-term:before,.note:before,.objective:before,.preview:before,.special:before,.success:before,.tip:before,.warning:before,aside:before {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  margin-block:0;margin-inline:-36px 0}

[dir=ltr] .beta:before,[dir=ltr] .caution:before,[dir=ltr] .deprecated:before,[dir=ltr] .dogfood:before,[dir=ltr] .experimental:before,[dir=ltr] .key-point:before,[dir=ltr] .key-term:before,[dir=ltr] .note:before,[dir=ltr] .objective:before,[dir=ltr] .preview:before,[dir=ltr] .special:before,[dir=ltr] .success:before,[dir=ltr] .tip:before,[dir=ltr] .warning:before,[dir=ltr] aside:before {
  float: left
}

[dir=rtl] .beta:before,[dir=rtl] .caution:before,[dir=rtl] .deprecated:before,[dir=rtl] .dogfood:before,[dir=rtl] .experimental:before,[dir=rtl] .key-point:before,[dir=rtl] .key-term:before,[dir=rtl] .note:before,[dir=rtl] .objective:before,[dir=rtl] .preview:before,[dir=rtl] .special:before,[dir=rtl] .success:before,[dir=rtl] .tip:before,[dir=rtl] .warning:before,[dir=rtl] aside:before {
  float: right
}

aside var {
  background: inherit;
  font-weight: 700;
  padding: 0
}

.beta,.experimental,.note,.preview,.special,.tip,aside {
  background: var(--devsite-note-notice-background);
  border-color: var(--devsite-note-notice-border-color);
  color: var(--devsite-note-notice-color)
}

.beta :link,.beta :link code,.beta :visited,.beta :visited code,.beta code,.experimental :link,.experimental :link code,.experimental :visited,.experimental :visited code,.experimental code,.note :link,.note :link code,.note :visited,.note :visited code,.note code,.preview :link,.preview :link code,.preview :visited,.preview :visited code,.preview code,.special :link,.special :link code,.special :visited,.special :visited code,.special code,.tip :link,.tip :link code,.tip :visited,.tip :visited code,.tip code,aside :link,aside :link code,aside :visited,aside :visited code,aside code {
  background: var(--devsite-note-notice-background);
  border-color: var(--devsite-note-notice-border-color);
  color: var(--devsite-note-notice-color)
}

.note:before,.special:before,.tip:before,aside:before {
  content: "star"
}

.beta:before,.experimental:before,.preview:before {
  content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M20.21,17.64l-6.15-8.22V5.57h2.57V3H6.35v2.57h2.57v3.86l-6.3,8.4c-0.44,0.6-0.5,1.41-0.15,2.08C2.8,20.58,3.49,21,4.24,21h14.5c1.11,0,2.01-0.9,2.01-2.01C20.75,18.48,20.53,18,20.21,17.64z' fill='%2301579b'/></svg>")
}

.caution {
  background: var(--devsite-caution-notice-background);
  border-color: var(--devsite-caution-notice-border-color);
  color: var(--devsite-caution-notice-color)
}

.caution :link,.caution :link code,.caution :visited,.caution :visited code,.caution code {
  background: var(--devsite-caution-notice-background);
  border-color: var(--devsite-caution-notice-border-color);
  color: var(--devsite-caution-notice-color)
}

.caution:before {
  content: "error"
}

.deprecated {
  background: var(--devsite-status-notice-background);
  border-color: var(--devsite-status-notice-border-color);
  color: var(--devsite-status-notice-color)
}

.deprecated :link,.deprecated :link code,.deprecated :visited,.deprecated :visited code,.deprecated code {
  background: var(--devsite-status-notice-background);
  border-color: var(--devsite-status-notice-border-color);
  color: var(--devsite-status-notice-color)
}

.deprecated:before {
  content: "not_interested"
}

.dogfood {
  background: var(--devsite-status-notice-background);
  border-color: var(--devsite-status-notice-border-color);
  color: var(--devsite-status-notice-color)
}

.dogfood :link,.dogfood :link code,.dogfood :visited,.dogfood :visited code,.dogfood code {
  background: var(--devsite-status-notice-background);
  border-color: var(--devsite-status-notice-border-color);
  color: var(--devsite-status-notice-color)
}

.dogfood:before {
  content: "pets"
}

.key-point {
  background: var(--devsite-key-point-notice-background);
  border-color: var(--devsite-key-point-notice-border-color);
  color: var(--devsite-key-point-notice-color)
}

.key-point :link,.key-point :link code,.key-point :visited,.key-point :visited code,.key-point code {
  background: var(--devsite-key-point-notice-background);
  border-color: var(--devsite-key-point-notice-border-color);
  color: var(--devsite-key-point-notice-color)
}

.key-point:before {
  content: "lightbulb_outline"
}

.key-term {
  background: var(--devsite-key-term-notice-background);
  border-color: var(--devsite-key-term-notice-border-color);
  color: var(--devsite-key-term-notice-color)
}

.key-term :link,.key-term :link code,.key-term :visited,.key-term :visited code,.key-term code {
  background: var(--devsite-key-term-notice-background);
  border-color: var(--devsite-key-term-notice-border-color);
  color: var(--devsite-key-term-notice-color)
}

.key-term:before {
  content: "font_download"
}

.objective {
  background: var(--devsite-success-notice-background);
  border-color: var(--devsite-success-notice-border-color);
  color: var(--devsite-success-notice-color)
}

.objective :link,.objective :link code,.objective :visited,.objective :visited code,.objective code {
  background: var(--devsite-success-notice-background);
  border-color: var(--devsite-success-notice-border-color);
  color: var(--devsite-success-notice-color)
}

.objective:before {
  content: "school"
}

.success {
  background: var(--devsite-success-notice-background);
  border-color: var(--devsite-success-notice-border-color);
  color: var(--devsite-success-notice-color)
}

.success :link,.success :link code,.success :visited,.success :visited code,.success code {
  background: var(--devsite-success-notice-background);
  border-color: var(--devsite-success-notice-border-color);
  color: var(--devsite-success-notice-color)
}

.success:before {
  content: "check_circle"
}

.warning {
  background: var(--devsite-warning-notice-background);
  border-color: var(--devsite-warning-notice-border-color);
  color: var(--devsite-warning-notice-color)
}

.warning :link,.warning :link code,.warning :visited,.warning :visited code,.warning code {
  background: var(--devsite-warning-notice-background);
  border-color: var(--devsite-warning-notice-border-color);
  color: var(--devsite-warning-notice-color)
}

.warning:before {
  content: "warning"
}

.beta :focus code,.beta :hover code,.caution :focus code,.caution :hover code,.deprecated :focus code,.deprecated :hover code,.dogfood :focus code,.dogfood :hover code,.experimental :focus code,.experimental :hover code,.key-point :focus code,.key-point :hover code,.key-term :focus code,.key-term :hover code,.note :focus code,.note :hover code,.objective :focus code,.objective :hover code,.preview :focus code,.preview :hover code,.special :focus code,.special :hover code,.success :focus code,.success :hover code,.tip :focus code,.tip :hover code,.warning :focus code,.warning :hover code,aside :focus code,aside :hover code {
  background: transparent
}

.devsite-no-page-title>.beta:first-child,.devsite-no-page-title>.caution:first-child,.devsite-no-page-title>.deprecated:first-child,.devsite-no-page-title>.dogfood:first-child,.devsite-no-page-title>.experimental:first-child,.devsite-no-page-title>.key-point:first-child,.devsite-no-page-title>.key-term:first-child,.devsite-no-page-title>.note:first-child,.devsite-no-page-title>.objective:first-child,.devsite-no-page-title>.preview:first-child,.devsite-no-page-title>.special:first-child,.devsite-no-page-title>.success:first-child,.devsite-no-page-title>.tip:first-child,.devsite-no-page-title>.warning:first-child,.devsite-no-page-title>aside:first-child {
  clear: right
}

.devsite-banner {
  border-bottom: 1px solid var(--devsite-banner-border-color,transparent);
  font: var(--devsite-banner-font,inherit);
  font-size: var(--devsite-banner-font-size,14px);
  letter-spacing: var(--devsite-banner-letter-spacing,normal);
  margin: var(--devsite-banner-margin)
}

.devsite-banner :link,.devsite-banner :visited {
  text-decoration: underline
}

.devsite-banner-message {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: var(--devsite-banner-message-justify-content,normal);
  -webkit-justify-content: var(--devsite-banner-message-justify-content,normal);
  -moz-box-pack: var(--devsite-banner-message-justify-content,normal);
  -ms-flex-pack: var(--devsite-banner-message-justify-content,normal);
  justify-content: var(--devsite-banner-message-justify-content,normal);
  margin: 0 auto;
  max-width: var(--devsite-banner-message-max-width,1488px);
  padding: var(--devsite-banner-message-padding)
}

.devsite-banner-message-text {
  -webkit-margin-end: var(--devsite-banner-message-text-margin-x-end,auto);
  -moz-margin-end: var(--devsite-banner-message-text-margin-x-end,auto);
  margin-inline-end:var(--devsite-banner-message-text-margin-x-end,auto)}

.devsite-banner a: not(.button):focus,.devsite-banner[background] a:not(.button):focus {
  background:var(--devsite-inverted-text-rgba);
  border-radius: 2px;
  margin: -4px;
  padding: 4px;
  text-decoration: none
}

.devsite-banner[background=white] {
  border-bottom: var(--devsite-primary-border)
}

.devsite-banner-announcement,.devsite-banner-announcement :link:not(.button),.devsite-banner-announcement :visited:not(.button) {
  background: var(--devsite-banner-background,var(--devsite-note-notice-background));
  border-color: var(--devsite-banner-border-color,var(--devsite-note-notice-border-color))
}

[layout=docs] .devsite-banner:first-of-type {
  border-radius: var(--devsite-banner-border-radius,0)
}

.devsite-banner-announcement[background] :link:not(.button),.devsite-banner-announcement[background] :visited:not(.button) {
  background: 0
}

.devsite-banner-confidential {
  background: var(--devsite-caution-notice-background);
  border-color: var(--devsite-caution-notice-border-color);
  color: var(--devsite-caution-notice-color)
}

.devsite-banner-confidential .devsite-banner-message:before {
  content: "warning";
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  -webkit-margin-end: 16px;
  -moz-margin-end: 16px;
  margin-inline-end:16px}

.devsite-banner-translated {
  background: var(--devsite-background-3);
  border-color: var(--devsite-translated-notice-border-color,transparent);
  color: var(--devsite-secondary-text-rgba)
}

.devsite-banner-translated :link {
  text-decoration: none
}

.devsite-banner .button,.devsite-banner button {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  margin: -6px 0;
  -webkit-margin-start: 16px;
  -moz-margin-start: 16px;
  margin-inline-start:16px;text-decoration: none
}

.devsite-banner .material-icons {
  margin: -2px 0;
  vertical-align: middle
}

.devsite-banner-translated-image {
  margin: 4px 0 -4px;
  -webkit-margin-end: 24px;
  -moz-margin-end: 24px;
  margin-inline-end:24px;width: 122px
}

.devsite-banner-heading {
  font-weight: 700
}

@media screen and (max-width: 1253px) {
  .devsite-banner-translated .devsite-banner-translated-text {
      display:block
  }
}

@media screen and (max-width: 840px) {
  [layout=docs] .devsite-banner-announcement {
      border-radius:0
  }
}

@media screen and (max-width: 600px) {
  [layout][template] .devsite-banner-message {
      display:block
  }

  .devsite-banner .button,.devsite-banner button {
      margin: 12px 0 0;
      -webkit-margin-start: 0;
      -moz-margin-start: 0;
      margin-inline-start:0}
}

[items-across="1"] {
  --devsite-columns: 1
}

[items-across="2"] {
  --devsite-columns: 2
}

[items-across="3"] {
  --devsite-columns: 3
}

[items-across="4"] {
  --devsite-columns: 4
}

.devsite-card-group {
  display: grid;
  gap: var(--devsite-landing-row-item-gap,24px);
  grid: auto-flow/repeat(var(--devsite-columns,3),1fr)
}

.devsite-card-wrapper {
  min-width: 0
}

.devsite-card-wrapper[hidden] {
  display: none
}

.devsite-card h3 {
  font: var(--devsite-h2-font);
  letter-spacing: var(--devsite-h2-letter-spacing);
  margin: 0 0 10px
}

.devsite-card {
  background: var(--devsite-card-background);
  border: var(--devsite-card-border);
  border-radius: var(--devsite-card-border-radius);
  box-shadow: var(--devsite-card-box-shadow);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
  -webkit-transition: var(--devsite-card-transition,0);
  transition: var(--devsite-card-transition,0)
}

.devsite-card-image {
  border-radius: var(--devsite-card-image-border-radius);
  height: 100%;
  object-fit: var(--devsite-card-image-object-fit,cover);
  position: absolute;
  width: 100%
}

.devsite-card-image-container {
  background-image: var(--devsite-card-default-image,url(../images/dynamic-content-card-default.png));
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--devsite-card-image-container-border-radius);
  padding: 0 0 56.25%
}

.devsite-card-image-no-background {
  background-image: none!important;
  overflow: hidden;
  position: relative
}

.devsite-card-content-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0;
  -moz-box-flex: 1;
  -ms-flex: 1 0;
  flex: 1 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.devsite-card-buttons,.devsite-card-content,.devsite-card-skill {
  padding: var(--devsite-card-content-padding,16px)
}

.devsite-card-content {
  -webkit-box-flex: var(--devsite-card-content-flex,1 0);
  -webkit-flex: var(--devsite-card-content-flex,1 0);
  -moz-box-flex: var(--devsite-card-content-flex,1 0);
  -ms-flex: var(--devsite-card-content-flex,1 0);
  flex: var(--devsite-card-content-flex,1 0);
  word-break: break-word
}

.devsite-card-category {
  background-color: var(--devsite-label-background-color,transparent);
  border-radius: var(--devsite-label-border-radius,4px);
  color: var(--devsite-label-color,inherit);
  font: var(--devsite-label-font,700 12px/22px var(--devsite-primary-font-family));
  letter-spacing: var(--devsite-label-letter-spacing,.3px);
  margin: var(--devsite-label-margin,0 0 16px);
  padding: var(--devsite-label-padding,0);
  text-transform: var(--devsite-label-text-transform,uppercase)
}

.devsite-card-summary {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  color: var(--devsite-card-summary-color,inherit);
  display: -webkit-box;
  font: 400 16px/24px var(--devsite-primary-font-family);
  margin: var(--devsite-card-summary-margin,16px 0 0);
  max-height: 96px;
  overflow: hidden
}

.devsite-card-attribution {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-top: var(--devsite-card-attribution-border,var(--devsite-primary-border));
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  color: var(--devsite-card-attribution-color,inherit);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: var(--devsite-card-attribution-font-size,12px);
  font-weight: var(--devsite-card-attribution-font-weight,normal);
  gap: 0 16px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: var(--devsite-card-attribution-line-height,16px);
  margin: var(--devsite-card-attribution-margin,0);
  min-height: var(--devsite-card-attribution-min-height,40px);
  padding: var(--devsite-card-attribution-padding,16px);
  position: relative
}

.devsite-card-icon-container {
  color: var(--devsite-secondary-text-color);
  display: grid;
  height: 32px;
  place-content: center;
  width: 32px
}

.devsite-card-icon-container[background] {
  background-color: var(--devsite-background-color);
  border-radius: 50%;
  overflow: hidden
}

.devsite-card-attribution-text-container {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: end
}

.devsite-card-icon-image {
  height: 32px
}

.devsite-card-icon.material-icons {
  color: var(--devsite-foreground-color);
  font-size: 32px
}

.devsite-card-icon-container[background] .devsite-card-icon {
  font-size: 24px
}

.devsite-card-attribution-author,.devsite-card-attribution-date,.devsite-card-attribution-name,.devsite-card-date,.devsite-card-duration {
  margin: 0
}

.devsite-card-attribution-author+.devsite-card-attribution-date,.devsite-card-attribution-name+.devsite-card-attribution-author {
  margin-top: 8px
}

.devsite-card-section {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 16px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.devsite-card-attribution+.devsite-card-buttons,.devsite-card-content+.devsite-card-buttons,.devsite-card-content+.devsite-card-section .activity-card-icons,.devsite-card-content+.devsite-card-section .devsite-card-buttons,.devsite-card-content+.devsite-card-skill,.devsite-card-skill+.devsite-card-attribution,.devsite-card-skill+.devsite-card-buttons {
  padding-top: 0
}

.devsite-card-date,.devsite-card-duration {
  color: var(--devsite-card-date-color,var(--devsite-secondary-text-color));
  font: var(--devsite-card-date-font,400 12px/16px var(--devsite-primary-font-family));
  letter-spacing: var(--devsite-card-date-letter-spacing,.3px)
}

.devsite-card-icons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px
}

.devsite-card-icon {
  height: 32px;
  width: 32px
}

.devsite-card-api-references {
  list-style: none;
  padding: 0
}

.devsite-card-api-references {
  color: var(--devsite-card-api-references-color,var(--devsite-secondary-text-color));
  font-size: 14px;
  line-height: 18px;
  margin-top: 12px
}

.devsite-card-api-references-item {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap
}

.devsite-card-skill {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-card-skill-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: var(--devsite-card-skill-font,14px/20px var(--devsite-primary-font-family));
  -webkit-box-pack: var(--devsite-card-skill-justify-content);
  -webkit-justify-content: var(--devsite-card-skill-justify-content);
  -moz-box-pack: var(--devsite-card-skill-justify-content);
  -ms-flex-pack: var(--devsite-card-skill-justify-content);
  justify-content: var(--devsite-card-skill-justify-content)
}

.devsite-card-skill-icon {
  height: 24px;
  margin: var(--devsite-card-skill-icon-margin,0 4px 0 -6px);
  width: 24px
}

.devsite-card-skill-icon-filled {
  fill: currentColor
}

.devsite-card-skill-icon-unfilled {
  fill: var(--devsite-background-5)
}

.devsite-card-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: row-reverse;
  -moz-box-orient: horizontal;
  -moz-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  margin: auto 0 0
}

[template=activity] .devsite-card h3 {
  margin-bottom: 4px
}

.devsite-card-list {
  border: var(--devsite-card-border);
  border-radius: var(--devsite-card-border-radius);
  list-style: none;
  overflow: var(--devsite-card-list-overflow,visible);
  padding: 0
}

.devsite-card-list-item {
  border: var(--devsite-card-list-item-border,0);
  border-radius: var(--devsite-card-list-item-border-radius,2px);
  box-shadow: var(--devsite-card-box-shadow,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color));
  margin: var(--devsite-card-list-item-margin,0 0 20px)
}

.devsite-card-list-item:not(:last-child) {
  border-bottom: var(--devsite-card-list-item-border,var(--devsite-card-border,0))
}

.devsite-card-list-item:last-child {
  border-bottom: var(--devsite-card-list-item-border,0);
  margin: 0
}

.devsite-card-list-link {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-card-list-link-color,var(--devsite-link-color));
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font: var(--devsite-card-list-link-font,var(--devsite-h2-font));
  letter-spacing: var(--devsite-h2-letter-spacing);
  padding: var(--devsite-card-list-link-padding,16px 20px);
  -webkit-transition: background .2s,color .2s;
  transition: background .2s,color .2s;
  width: 100%
}

.devsite-card-list-link:focus,.devsite-card-list-link:hover {
  background: var(--devsite-card-list-link-background-hover,var(--devsite-link-background-hover));
  color: var(--devsite-card-list-link-color-hover,var(--devsite-link-color));
  text-decoration: none
}

.devsite-card-list-link:after {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  content: "arrow_forward";
  margin-left: auto;
  opacity: 0;
  -webkit-transform: translateX(-20px);
  transform: translateX(-20px);
  -webkit-transition: opacity .2s,-webkit-transform .2s;
  transition: opacity .2s,-webkit-transform .2s;
  transition: opacity .2s,transform .2s;
  transition: opacity .2s,transform .2s,-webkit-transform .2s
}

.devsite-card-list-link:focus:after,.devsite-card-list-link:hover:after {
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0)
}

@media screen and (max-width: 840px) {
  .devsite-card-group,[items-across="3"],[items-across="4"] {
      --devsite-columns:2
  }
}

@media screen and (max-width: 600px) {
  .devsite-card-group {
      display:block
  }

  .devsite-card-wrapper:not(:first-of-type) {
      margin-top: 16px
  }

  .devsite-card-summary {
      font-size: 14px;
      line-height: 20px;
      max-height: 80px
  }
}

.pre-style,code,pre {
  background: var(--devsite-code-background);
  color: var(--devsite-code-color);
  direction: ltr!important;
  font: 400 100%/1 var(--devsite-code-font-family);
  padding: var(--devsite-inline-code-padding,1px 4px);
  text-align: left!important
}

code {
  border: var(--devsite-inline-code-border,0);
  border-radius: var(--devsite-inline-code-border-radius,0);
  font: 500 90%/1 var(--devsite-code-font-family);
  word-break: break-word
}

.pre-style code,pre code,table code {
  font-weight: 400;
  word-break: normal
}

.pre-style,pre {
  font: 14px/20px var(--devsite-code-font-family);
  margin: 16px 0;
  overflow-x: auto;
  padding: 24px;
  position: relative
}

.pre-style code,pre code {
  background: 0;
  border: var(--devsite-inline-nested-code-border,0);
  font-size: 14px;
  padding: 0
}

b code,strong code {
  font-weight: 700
}

cite code,em code,i code {
  font-style: italic
}

pre.devsite-code-highlight>code>span,pre.devsite-code-highlight>span {
  -webkit-filter: grayscale(1);
  filter: grayscale(1)
}

td>pre:only-child {
  padding: 0
}

td>devsite-code pre.inline-code,td>devsite-code:only-child pre,td>div:first-child:empty+devsite-code:last-child pre {
  padding: 0 64px 0 0
}

td>devsite-code pre.inline-code,td>devsite-code:not([dark-code]):only-child pre,td>div:first-child:empty+devsite-code:not([dark-code]):last-child pre {
  background: 0
}

td>devsite-code pre.inline-code~.devsite-code-buttons-container,td>devsite-code:only-child pre~.devsite-code-buttons-container,td>div:first-child:empty+devsite-code:last-child pre~.devsite-code-buttons-container {
  top: -6px
}

h1 code,h2 code,h3 code,h4 code,h5 code,h6 code {
  background: 0;
  color: var(--devsite-primary-text-color);
  padding: 0
}

h1 code {
  color: #80868b
}

:link code,:visited code,code :link,code :visited,pre :link,pre :visited,td :link code,td :visited code,td code :link,td code :visited {
  color: var(--devsite-contrast-link-color)
}

body[layout] .devsite-main-content var span,var,var code {
  color: var(--devsite-var-color);
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  font-weight: 500
}

pre.clear-for-copy {
  all: initial;
  left: -100vw;
  position: absolute;
  top: -100vh;
  white-space: pre
}

pre.clear-for-copy * {
  all: unset;
  font-family: var(--devsite-code-font-family);
  white-space: pre
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0
}

input[type=radio] {
  -webkit-appearance: none;
  background: var(--devsite-background-1);
  border-radius: 2px;
  cursor: pointer;
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  height: 18px;
  margin-block:-2px 2px;margin-inline:0 8px;outline: 0;
  position: relative;
  -webkit-transition: color .2s;
  transition: color .2s;
  vertical-align: middle;
  width: 18px
}

input[type=radio] {
  color: var(--devsite-secondary-text-color)
}

input[type=radio] {
  border-radius: 50%;
  -webkit-transition: none;
  transition: none
}

input[type=radio]:focus:before {
  background: var(--devsite-background-4)
}

input[type=radio]:checked {
  color: var(--devsite-link-color)
}

input[type=radio]:focus:before {
  background: var(--devsite-input-background-focus,var(--devsite-link-background))
}

input[type=radio]:after {
  content: "check_box_outline_blank";
  position: relative;
  top: -3px;
  z-index: 1
}

[dir=ltr] input[type=radio]:after {
  right: 3px
}

[dir=rtl] input[type=radio]:after {
  left: 3px
}

input[type=radio]:after {
  content: "radio_button_unchecked"
}

input[type=radio]:checked:after {
  content: "radio_button_checked"
}

input[type=radio]:before {
  border-radius: 50%;
  content: "";
  display: block;
  height: 36px;
  position: absolute;
  top: -9px;
  -webkit-transition: background .2s;
  transition: background .2s;
  width: 36px
}

[dir=ltr] input[type=radio]:before {
  left: -9px
}

[dir=rtl] input[type=radio]:before {
  right: -9px
}

input[type=radio]:disabled {
  color: var(--devsite-input-color-disabled,var(--devsite-tertiary-text-color));
  cursor: default
}

input[type=date],input[type=datetime-local],input[type=datetime],input[type=email],input[type=month],input[type=number],input[type=password],input[type=search],input[type=tel],input[type=text],input[type=time],input[type=url],input[type=week],select[multiple],select[size],textarea {
  background: var(--devsite-input-background);
  border: var(--devsite-input-border);
  border-radius: var(--devsite-input-border-radius,2px);
  color: var(--devsite-input-color,var(--devsite-primary-text-color));
  font: var(--devsite-input-font,16px/20px var(--devsite-primary-font-family));
  height: var(--devsite-input-height,auto);
  margin: var(--devsite-input-margin,0);
  max-width: 100%;
  outline: 0;
  padding: var(--devsite-input-padding,7px);
  -webkit-transition: border-color .2s;
  transition: border-color .2s;
  vertical-align: middle;
  width: var(--devsite-input-width,auto)
}

input[type=date]:focus,input[type=datetime-local]:focus,input[type=datetime]:focus,input[type=email]:focus,input[type=month]:focus,input[type=number]:focus,input[type=password]:focus,input[type=search]:focus,input[type=tel]:focus,input[type=text]:focus,input[type=time]:focus,input[type=url]:focus,input[type=week]:focus,select[multiple]:focus,select[size]:focus,textarea:focus {
  border-bottom: var(--devsite-input-border-bottom-focus,2px solid var(--devsite-link-color));
  padding-bottom: var(--devsite-input-padding-bottom-focus,6px)
}

input[type=date]:disabled,input[type=datetime-local]:disabled,input[type=datetime]:disabled,input[type=email]:disabled,input[type=month]:disabled,input[type=number]:disabled,input[type=password]:disabled,input[type=search]:disabled,input[type=tel]:disabled,input[type=text]:disabled,input[type=time]:disabled,input[type=url]:disabled,input[type=week]:disabled,select[multiple]:disabled,select[size]:disabled,textarea:disabled {
  background: var(--devsite-background-3)
}

body input[type=file] {
  height: auto;
  line-height: 1;
  padding: var(--devsite-input-file-padding,8px 16px)
}

select {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: var(--devsite-select-background-color);
  border: var(--devsite-select-border,var(--devsite-secondary-border));
  border-radius: var(--devsite-select-border-radius);
  box-shadow: none;
  color: var(--devsite-select-color,var(--devsite-primary-text-color));
  cursor: pointer;
  display: inline-block;
  font: var(--devsite-select-font,500 14px/36px var(--devsite-primary-font-family));
  height: var(--devsite-select-height,36px);
  line-height: var(--devsite-select-line-height,34px);
  max-width: var(--devsite-select-max-width,340px);
  min-width: 72px;
  outline: 0;
  overflow: hidden;
  padding: var(--devsite-select-padding,0 27px 0 7px);
  text-align: left;
  text-indent: .01px;
  text-overflow: ellipsis;
  -webkit-transition: background-color .2s;
  transition: background-color .2s;
  vertical-align: middle;
  white-space: nowrap;
  background-image: var(--devsite-select-background-image);
  background-position: 100%;
  background-repeat: no-repeat
}

select:focus,select:hover {
  background-color: var(--devsite-select-background-color-hover,var(--devsite-background-3));
  border: var(--devsite-select-border-hover,var(--devsite-select-border,var(--devsite-secondary-border)));
  color: var(--devsite-select-color-hover)
}

select:active {
  background-color: var(--devsite-select-background-color-active,var(--devsite-background-4));
  color: var(--devsite-select-color-active)
}

select:disabled {
  background-color: var(--devsite-background-3);
  border-color: transparent;
  color: var(--devsite-tertiary-text-color);
  cursor: default
}

select:disabled {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="4" viewBox="0 0 20 4"><path d="M0,0l4,4l4-4H0z" fill="%23bdc1c6"/></svg>')
}

@media screen and (-ms-high-contrast:active) {
  select {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="4" viewBox="0 0 20 4"><path d="M0,0l4,4l4-4H0z" fill="white"/></svg>')
  }
}

@media screen and (-ms-high-contrast:black-on-white) {
  select {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="4" viewBox="0 0 20 4"><path d="M0,0l4,4l4-4H0z" fill="black"/></svg>')
  }
}

input[type=checkbox] {
  -webkit-appearance: none;
  background: var(--devsite-background-1);
  border-radius: var(--devsite-checkbox-border-radius);
  cursor: pointer;
  height: var(--devsite-checkbox-size);
  margin-block:var(--devsite-checkbox-margin-block);margin-inline: var(--devsite-checkbox-margin-inline);
  outline: 0;
  position: relative;
  -webkit-transition: color .2s;
  transition: color .2s;
  vertical-align: middle;
  width: var(--devsite-checkbox-size)
}

input[type=checkbox] {
  color: var(--devsite-secondary-text-color)
}

input[type=checkbox]:focus:before {
  background: var(--devsite-background-4)
}

input[type=checkbox]:checked,input[type=checkbox]:indeterminate {
  color: var(--devsite-link-color)
}

input[type=checkbox]:checked:focus:before,input[type=checkbox]:indeterminate:focus:before {
  background: var(--devsite-input-background-focus,var(--devsite-link-background))
}

input[type=checkbox]:after {
  content: "check_box_outline_blank";
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  position: relative;
  right: var(--devsite-checkbox-offset-x);
  top: var(--devsite-checkbox-offset-y);
  z-index: 1
}

:host-context([dir=rtl]) input[type=checkbox]:after,[dir=rtl] input[type=checkbox]:after {
  left: var(--devsite-checkbox-offset-x);
  right: auto
}

input[type=checkbox]:checked:after {
  content: "check_box"
}

input[type=checkbox]:indeterminate:after {
  content: "indeterminate_check_box"
}

input[type=checkbox]:before {
  border-radius: var(--devsite-checkbox-icon-canvas-border-radius);
  content: "";
  display: block;
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  height: var(--devsite-checkbox-icon-canvas-size);
  position: absolute;
  top: var(--devsite-checkbox-icon-canvas-offset-y);
  -webkit-transition: background .2s;
  transition: background .2s;
  width: var(--devsite-checkbox-icon-canvas-size)
}

:host-context([dir=ltr]) input[type=checkbox]:before,[dir=ltr] input[type=checkbox]:before {
  left: var(--devsite-checkbox-icon-canvas-offset-x)
}

:host-context([dir=rtl]) input[type=checkbox]:before,[dir=rtl] input[type=checkbox]:before {
  right: var(--devsite-checkbox-icon-canvas-offset-x)
}

input[type=checkbox]:disabled {
  color: var(--devsite-input-color-disabled,var(--devsite-tertiary-text-color));
  cursor: default
}

label {
  color: var(--devsite-secondary-text-color);
  display: block;
  font-size: 12px
}

input+label {
  color: var(--devsite-primary-text-color);
  display: inline;
  font-size: 16px
}

label[for] {
  cursor: pointer
}

input:disabled+label {
  color: var(--devsite-input-color-disabled,var(--devsite-tertiary-text-color));
  cursor: default
}

devsite-book-nav .devsite-breadcrumb-list,devsite-content .devsite-breadcrumb-list,devsite-header .devsite-breadcrumb-list {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: var(--devsite-breadcrumb-list-display);
  padding: var(--devsite-breadcrumb-list-padding);
  white-space: nowrap
}

.devsite-search-project .devsite-breadcrumb-list,devsite-book-nav .devsite-breadcrumb-list,devsite-header .devsite-breadcrumb-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-family: var(--devsite-font-family,var(--devsite-primary-font-family))
}

devsite-header .devsite-breadcrumb-list {
  letter-spacing: var(--devsite-header-lower-breadcrumb-letter-spacing,0);
  text-transform: var(--devsite-header-lower-breadcrumb-text-transform,none)
}

devsite-content .devsite-breadcrumb-list {
  background: var(--devsite-breadcrumb-list-background,var(--devsite-background-1));
  display: var(--devsite-breadcrumb-list-display,inline-flex);
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: var(--devsite-breadcrumb-list-font-size,13px);
  width: var(--devsite-breadcrumb-list-width)
}

devsite-book-nav .devsite-breadcrumb-item,devsite-content .devsite-breadcrumb-item,devsite-header .devsite-breadcrumb-item {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  padding: var(--devsite-breadcrumb-padding)
}

devsite-book-nav .devsite-breadcrumb-guillemet,devsite-book-nav .devsite-breadcrumb-link,devsite-header .devsite-breadcrumb-guillemet,devsite-header .devsite-breadcrumb-link {
  color: var(--devsite-secondary-text-rgba);
  fill: var(--devsite-secondary-text-rgba)
}

devsite-book-nav .devsite-breadcrumb-guillemet:focus,devsite-book-nav .devsite-breadcrumb-guillemet:hover,devsite-book-nav .devsite-breadcrumb-link:focus,devsite-book-nav .devsite-breadcrumb-link:hover,devsite-header .devsite-breadcrumb-guillemet:focus,devsite-header .devsite-breadcrumb-guillemet:hover,devsite-header .devsite-breadcrumb-link:focus,devsite-header .devsite-breadcrumb-link:hover {
  color: var(--devsite-primary-text-rgba)
}

devsite-book-nav .devsite-breadcrumb-guillemet:focus .devsite-google-wordmark-svg-path,devsite-book-nav .devsite-breadcrumb-guillemet:hover .devsite-google-wordmark-svg-path,devsite-book-nav .devsite-breadcrumb-link:focus .devsite-google-wordmark-svg-path,devsite-book-nav .devsite-breadcrumb-link:hover .devsite-google-wordmark-svg-path,devsite-header .devsite-breadcrumb-guillemet:focus .devsite-google-wordmark-svg-path,devsite-header .devsite-breadcrumb-guillemet:hover .devsite-google-wordmark-svg-path,devsite-header .devsite-breadcrumb-link:focus .devsite-google-wordmark-svg-path,devsite-header .devsite-breadcrumb-link:hover .devsite-google-wordmark-svg-path {
  fill: var(--devsite-primary-text-rgba)
}

devsite-book-nav .devsite-breadcrumb-guillemet,devsite-header .devsite-breadcrumb-guillemet {
  font-size: 24px;
  margin: 0 4px;
  width: 24px
}

devsite-content .devsite-breadcrumb-guillemet {
  color: var(--devsite-secondary-text-color);
  font-size: 18px;
  margin: 0 4px;
  width: 18px
}

devsite-book-nav .devsite-breadcrumb-guillemet:before,devsite-content .devsite-breadcrumb-guillemet:before,devsite-header .devsite-breadcrumb-guillemet:before {
  content: "chevron_right"
}

[dir=rtl] devsite-book-nav .devsite-breadcrumb-guillemet:before,[dir=rtl] devsite-content .devsite-breadcrumb-guillemet:before,[dir=rtl] devsite-header .devsite-breadcrumb-guillemet:before {
  content: "chevron_left"
}

devsite-book-nav .devsite-breadcrumb-link,devsite-content .devsite-breadcrumb-link,devsite-header .devsite-breadcrumb-link {
  display: inline-block;
  -webkit-transition: color .2s;
  transition: color .2s
}

devsite-header .devsite-doc-set-nav-row .devsite-breadcrumb-link,devsite-header .devsite-product-description-row .devsite-breadcrumb-guillemet,devsite-header .devsite-product-description-row .devsite-breadcrumb-link {
  color: var(--devsite-header-foreground-lower-hover,var(--devsite-inverted-text-color));
  fill: var(--devsite-header-foreground-lower-hover,var(--devsite-inverted-text-color))
}

devsite-header .devsite-doc-set-nav-row .devsite-breadcrumb-link:focus,devsite-header .devsite-doc-set-nav-row .devsite-breadcrumb-link:hover,devsite-header .devsite-product-description-row .devsite-breadcrumb-guillemet:focus,devsite-header .devsite-product-description-row .devsite-breadcrumb-guillemet:hover,devsite-header .devsite-product-description-row .devsite-breadcrumb-link:focus,devsite-header .devsite-product-description-row .devsite-breadcrumb-link:hover {
  color: var(--devsite-header-foreground-lower,var(--devsite-inverted-text-rgba));
  fill: var(--devsite-header-foreground-lower,var(--devsite-inverted-text-rgba))
}

devsite-book-nav .devsite-breadcrumb-link:focus,devsite-book-nav .devsite-breadcrumb-link:hover,devsite-header .devsite-breadcrumb-link:focus,devsite-header .devsite-breadcrumb-link:hover {
  text-decoration: none
}

devsite-content .devsite-breadcrumb-link {
  color: var(--devsite-breadcrumb-link-color,var(--devsite-secondary-text-color))
}

devsite-content .devsite-breadcrumb-link:focus,devsite-content .devsite-breadcrumb-link:hover {
  color: var(--devsite-breadcrumb-link-hover,var(--devsite-link-color));
  text-decoration: none
}

.devsite-nav {
  font-size: var(--devsite-nav-font-size,13px)
}

.devsite-nav-list,.devsite-nav-responsive-tabs,.devsite-nav-section {
  list-style-type: none;
  padding: 0
}

.devsite-nav-item {
  line-height: var(--devsite-nav-item-line-height,16px);
  margin: 0
}

.devsite-nav-title {
  color: var(--devsite-nav-title-color,var(--devsite-primary-text-color));
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding: var(--devsite-nav-title-padding,4px 0);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

.devsite-nav-title[href]:focus,.devsite-nav-title[href]:hover {
  color: var(--devsite-nav-color-hover,var(--devsite-link-color));
  text-decoration: none
}

.devsite-nav-heading>.devsite-nav-title {
  color: var(--devsite-nav-heading-color,var(--devsite-secondary-text-rgba));
  font-weight: 700
}

.devsite-nav-active {
  font-weight: var(--devsite-nav-font-weight-active,500)
}

@media screen and (-ms-high-contrast:active),screen and (prefers-contrast:high) {
  .devsite-nav-active {
      font-weight: 700;
      text-decoration: underline
  }
}

.devsite-nav-active,.devsite-nav-active.devsite-nav-title,.devsite-nav-active.devsite-nav-title>.devsite-nav-icon:before,.devsite-nav-deprecated .devsite-nav-active.devsite-nav-title {
  color: var(--devsite-nav-color-active,var(--devsite-link-color-active,var(--devsite-link-color)))
}

.devsite-nav-text {
  overflow: hidden;
  text-overflow: ellipsis
}

.devsite-nav-accordion>.devsite-expandable-nav>.devsite-nav-title-no-path:focus,.devsite-nav-title-no-path:focus {
  color: var(--devsite-link-color)
}

.devsite-nav-icon {
  cursor: default;
  font-size: 18px;
  margin: -1px 0 -1px 4px
}

[dir=rtl] .devsite-nav-icon {
  margin: -1px 4px -1px 0
}

.devsite-nav-icon:before {
  color: var(--devsite-secondary-text-color);
  content: "info"
}

.devsite-nav-icon[data-icon=alpha]:before,.devsite-nav-icon[data-icon=beta]:before,.devsite-nav-icon[data-icon=experimental]:before,.devsite-nav-icon[data-icon=preview]:before {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M15.78,13.39L11,7V4h2V2H5v2h2v3l-4.9,6.53c-0.34,0.47-0.39,1.1-0.12,1.62C2.24,15.67,2.77,16,3.36,16h11.28 c0.86,0,1.56-0.7,1.56-1.56C16.2,14.04,16.03,13.67,15.78,13.39z" fill="%2380868b"/></svg>')
}

[appearance=dark] .devsite-nav-icon[data-icon=alpha]:before,[appearance=dark] .devsite-nav-icon[data-icon=beta]:before,[appearance=dark] .devsite-nav-icon[data-icon=experimental]:before,[appearance=dark] .devsite-nav-icon[data-icon=preview]:before {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M15.78,13.39L11,7V4h2V2H5v2h2v3l-4.9,6.53c-0.34,0.47-0.39,1.1-0.12,1.62C2.24,15.67,2.77,16,3.36,16h11.28 c0.86,0,1.56-0.7,1.56-1.56C16.2,14.04,16.03,13.67,15.78,13.39z" fill="%239aa0a6"/></svg>')
}

.devsite-nav-deprecated .devsite-nav-title,.devsite-nav-deprecated.devsite-nav-accordion .devsite-nav-title,.devsite-nav-icon[data-icon=deprecated]:before,.devsite-nav-icon[data-icon=unsupported]:before {
  color: var(--devsite-secondary-text-color)
}

.devsite-nav-icon[data-icon=deprecated]:before,.devsite-nav-icon[data-icon=unsupported]:before {
  content: "not_interested"
}

.devsite-nav-icon[data-icon=external]:before {
  content: "open_in_new"
}

[dir=rtl] .devsite-nav-icon[data-icon=external]:before {
  display: inline-block;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1)
}

.devsite-nav-icon[data-icon=forward]:before {
  content: "arrow_forward";
  cursor: pointer
}

[dir=rtl] .devsite-nav-icon[data-icon=forward]:before {
  content: "arrow_back"
}

.devsite-nav-icon[data-icon=limited]:before {
  content: "verified_user"
}

.devsite-nav-icon[data-icon=new]:before {
  content: "new_releases"
}

.devsite-nav-icon[data-icon=nightly]:before {
  content: "nights_stay"
}

.button,.devsite-footer-utility-button>a,button,input[type=button],input[type=file],input[type=image],input[type=reset],input[type=submit] {
  -moz-appearance: none;
  -webkit-appearance: none;
  background: var(--devsite-button-background,var(--devsite-background-1));
  border: var(--devsite-button-border,0);
  border-radius: var(--devsite-button-border-radius,2px);
  box-shadow: var(--devsite-button-box-shadow,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color));
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  color: var(--devsite-button-color);
  cursor: pointer;
  display: inline-block;
  font: var(--devsite-button-font,500 14px/36px var(--devsite-primary-font-family));
  height: var(--devsite-button-height,36px);
  letter-spacing: var(--devsite-button-letter-spacing,0);
  line-height: var(--devsite-button-line-height,36px);
  margin: var(--devsite-button-margin,0);
  -webkit-margin-end: var(--devsite-button-margin-x-end);
  -moz-margin-end: var(--devsite-button-margin-x-end);
  margin-inline-end:var(--devsite-button-margin-x-end);max-width: var(--devsite-button-max-width,none);
  min-width: 36px;
  outline: 0;
  overflow: hidden;
  padding: var(--devsite-button-padding,0 16px);
  text-align: center;
  text-decoration: none;
  text-overflow: ellipsis;
  text-transform: var(--devsite-button-text-transform,uppercase);
  -webkit-transition: background-color .2s,border .2s,box-shadow .2s;
  transition: background-color .2s,border .2s,box-shadow .2s;
  vertical-align: middle;
  white-space: nowrap;
  width: var(--devsite-button-width,auto)
}

.button:focus,.button:hover,.devsite-footer-utility-button>a:focus,.devsite-footer-utility-button>a:hover,button:focus,button:hover,input[type=button]:focus,input[type=button]:hover,input[type=file]:focus,input[type=file]:hover,input[type=image]:focus,input[type=image]:hover,input[type=reset]:focus,input[type=reset]:hover,input[type=submit]:focus,input[type=submit]:hover {
  background: var(--devsite-button-background-hover);
  border: var(--devsite-button-border-hover,0);
  color: var(--devsite-button-color-hover,var(--devsite-button-color));
  font-weight: 500;
  -webkit-text-decoration: var(--devsite-button-text-decoration-hover,none);
  -moz-text-decoration: var(--devsite-button-text-decoration-hover,none);
  text-decoration: var(--devsite-button-text-decoration-hover,none)
}

.button:focus,.devsite-footer-utility-button>a:focus,button:focus,input[type=button]:focus,input[type=file]:focus,input[type=image]:focus,input[type=reset]:focus,input[type=submit]:focus {
  box-shadow: var(--devsite-button-box-shadow-focus,none)
}

.button:active,.devsite-footer-utility-button>a:active,button:active,input[type=button]:active,input[type=file]:active,input[type=image]:active,input[type=reset]:active,input[type=submit]:active {
  background: var(--devsite-button-background-active);
  border: var(--devsite-button-border-active,0);
  box-shadow: var(--devsite-button-box-shadow-active,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color));
  -webkit-transform: var(--devsite-button-transform-active,none);
  transform: var(--devsite-button-transform-active,none)
}

[foreground] .button,[foreground][background] .button {
  border-color: var(--devsite-foreground-button-border-color,transparent)
}

[foreground] .button,[foreground] .button:active,[foreground] .button:focus,[foreground] .button:hover,[foreground][background] .button,[foreground][background] .button:active,[foreground][background] .button:focus,[foreground][background] .button:hover {
  color: var(--devsite-foreground-button-color,var(--devsite-foreground-color,var(--devsite-primary-color,var(--devsite-button-color))))
}

[foreground] .button:active,[foreground] .button:focus,[foreground] .button:hover,[foreground][background] .button:active,[foreground][background] .button:focus,[foreground][background] .button:hover {
  background: var(--devsite-foreground-button-background-hover);
  border-color: var(--devsite-foreground-button-border-color-hover,transparent);
  color: var(--devsite-foreground-button-color-hover,var(--devsite-foreground-color,var(--devsite-primary-color,var(--devsite-button-color))))
}

[foreground] .button:active,[foreground][background] .button:active {
  background: var(--devsite-foreground-button-background-active,var(--devsite-foreground-button-background-hover));
  border-color: var(--devsite-foreground-button-border-color-active,transparent)
}

[background]:not(.devsite-landing-row-cards) .button:not([disabled]) {
  background: var(--devsite-background-button-background,var(--devsite-background-1));
  border-color: var(--devsite-background-button-border-color,transparent);
  color: var(--devsite-foreground-button-color,var(--devsite-background-button-color,var(--devsite-button-color)))
}

[background]:not(.devsite-landing-row-cards) .button:not([disabled]):active,[background]:not(.devsite-landing-row-cards) .button:not([disabled]):focus,[background]:not(.devsite-landing-row-cards) .button:not([disabled]):hover {
  background: var(--devsite-background-button-background-hover,var(--devsite-button-background-hover));
  border-color: var(--devsite-background-button-border-color-hover,transparent);
  color: var(--devsite-foreground-button-color-hover,var(--devsite-foreground-button-color,var(--devsite-background-button-color-hover,var(--devsite-button-color))))
}

[background]:not(.devsite-landing-row-cards) .button:not([disabled]):active {
  border-color: var(--devsite-background-button-border-color-active,transparent)
}

.button.button-disabled,.button.button-disabled:active,.button.button-disabled:focus,.button.button-disabled:hover,[background] .button.button-disabled,[background] .button.button-disabled:active,[background] .button.button-disabled:focus,[background] .button.button-disabled:hover,[foreground] .button.button-disabled,[foreground] .button.button-disabled:active,[foreground] .button.button-disabled:focus,[foreground] .button.button-disabled:hover,body[theme] [background] .button.button-disabled,body[theme] [background] .button.button-disabled:active,body[theme] [background] .button.button-disabled:focus,body[theme] [background] .button.button-disabled:hover,body[theme] [foreground] .button.button-disabled,body[theme] [foreground] .button.button-disabled:active,body[theme] [foreground] .button.button-disabled:focus,body[theme] [foreground] .button.button-disabled:hover,button[disabled],button[disabled]:active,button[disabled]:focus,button[disabled]:hover,input[type=button][disabled],input[type=button][disabled]:active,input[type=button][disabled]:focus,input[type=button][disabled]:hover,input[type=file][disabled],input[type=file][disabled]:active,input[type=file][disabled]:focus,input[type=file][disabled]:hover,input[type=image][disabled],input[type=image][disabled]:active,input[type=image][disabled]:focus,input[type=image][disabled]:hover,input[type=reset][disabled],input[type=reset][disabled]:active,input[type=reset][disabled]:focus,input[type=reset][disabled]:hover,input[type=submit][disabled],input[type=submit][disabled]:active,input[type=submit][disabled]:focus,input[type=submit][disabled]:hover {
  background: var(--devsite-button-disabled-background,#ddd);
  border: var(--devsite-button-disabled-border,0);
  box-shadow: none;
  color: var(--devsite-button-disabled-color,var(--devsite-tertiary-text-rgba));
  cursor: default;
  line-height: var(--devsite-button-disabled-line-height,36px);
  pointer-events: none
}

.button-blue,.button-green,.button-primary,.button-red,body devsite-footer-utility .devsite-footer-utility-button>a {
  background: var(--devsite-button-primary-background,var(--devsite-button-color));
  color: var(--devsite-button-primary-color,var(--devsite-inverted-text-color));
  line-height: var(--devsite-button-primary-line-height,36px)
}

.button-blue,.button-blue:active,.button-blue:focus,.button-blue:hover,.button-green,.button-green:active,.button-green:focus,.button-green:hover,.button-primary,.button-primary:active,.button-primary:focus,.button-primary:hover,.button-red,.button-red:active,.button-red:focus,.button-red:hover,body devsite-footer-utility .devsite-footer-utility-button>a,body devsite-footer-utility .devsite-footer-utility-button>a:active,body devsite-footer-utility .devsite-footer-utility-button>a:focus,body devsite-footer-utility .devsite-footer-utility-button>a:hover {
  border: 0
}

.button-blue:hover,.button-green:hover,.button-primary:hover,.button-red:hover,body devsite-footer-utility .devsite-footer-utility-button>a:hover {
  box-shadow: var(--devsite-button-primary-box-shadow-hover,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color))
}

.button-blue:focus,.button-blue:hover,.button-green:focus,.button-green:hover,.button-primary:focus,.button-primary:hover,.button-red:focus,.button-red:hover,body devsite-footer-utility .devsite-footer-utility-button>a:focus,body devsite-footer-utility .devsite-footer-utility-button>a:hover {
  background: var(--devsite-button-primary-background-hover);
  border: var(--devsite-button-primary-border-hover);
  color: var(--devsite-button-primary-color-hover,var(--devsite-inverted-text-color))
}

.button-blue:active,.button-green:active,.button-primary:active,.button-red:active,body devsite-footer-utility .devsite-footer-utility-button>a:active {
  background: var(--devsite-button-primary-background-active);
  box-shadow: var(--devsite-button-primary-box-shadow-active,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color));
  color: var(--devsite-button-primary-color-active,var(--devsite-inverted-text-color))
}

[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]) {
  background: var(--devsite-background-button-primary-background,var(--devsite-background-1));
  color: var(--devsite-background-button-primary-color,var(--devsite-button-color))
}

[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):active,[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):focus,[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):hover {
  color: var(--devsite-background-button-primary-color-hover,var(--devsite-background-button-primary-color,var(--devsite-button-color)))
}

[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):focus,[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):hover {
  background: var(--devsite-background-button-primary-background-hover)
}

[background]:not(.devsite-landing-row-cards) .button-primary:not([disabled]):active {
  background: var(--devsite-background-button-primary-background-hover)
}

[foreground] .button-primary,[foreground][background] .button-primary {
  background: var(--devsite-foreground-button-primary-background);
  color: var(--devsite-foreground-button-primary-color,var(--devsite-inverted-text-color))
}

[foreground] .button-primary:active,[foreground] .button-primary:focus,[foreground] .button-primary:hover,[foreground][background] .button-primary:active,[foreground][background] .button-primary:focus,[foreground][background] .button-primary:hover {
  background: var(--devsite-foreground-button-primary-background-hover);
  color: var(--devsite-foreground-button-primary-color-hover,var(--devsite-foreground-button-primary-color,var(--devsite-inverted-text-color)))
}

.button-white {
  background: 0;
  line-height: var(--devsite-button-white-line-height,36px);
  padding: 0 8px
}

.button-white,.button-white:active,.button-white:focus,.button-white:hover {
  border: 0;
  color: var(--devsite-button-white-color,var(--devsite-button-color))
}

.button-white,.button-white:hover {
  box-shadow: var(--devsite-button-white-box-shadow-hover,none)
}

.button-white:active,.button-white:focus,.button-white:hover {
  -webkit-text-decoration: var(--devsite-button-white-text-decoration-hover,none);
  -moz-text-decoration: var(--devsite-button-white-text-decoration-hover,none);
  text-decoration: var(--devsite-button-white-text-decoration-hover,none)
}

.button-white:focus,.button-white:hover {
  background: var(--devsite-button-white-background-hover,var(--devsite-button-background-hover))
}

.button-white:focus {
  box-shadow: var(--devsite-button-white-box-shadow-focus,none)
}

.button-white:active {
  background: var(--devsite-button-white-background-active,var(--devsite-button-background-active));
  box-shadow: var(--devsite-button-white-box-shadow-active,none)
}

[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]) {
  background: transparent
}

[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]),[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]):active,[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]):focus,[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]):hover {
  color: var(--devsite-background-button-white-color,var(--devsite-inverted-text-color))
}

[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]):hover {
  background: var(--devsite-background-button-white-background-hover)
}

[background]:not(.devsite-landing-row-cards) .button-white:not([disabled]):focus {
  background: var(--devsite-background-button-white-background-focus)
}

[background][foreground] .button-white,[background][foreground] .button-white:active,[background][foreground] .button-white:focus,[background][foreground] .button-white:hover,[foreground] .button-white,[foreground] .button-white:active,[foreground] .button-white:focus,[foreground] .button-white:hover {
  color: var(--devsite-foreground-button-white-color,var(--devsite-foreground-button-color,var(--devsite-foreground-color)))
}

[background][foreground] .button-white:focus,[background][foreground] .button-white:hover,[foreground] .button-white:focus,[foreground] .button-white:hover {
  background: var(--devsite-foreground-button-white-background-hover,var(--devsite-foreground-button-background-hover))
}

[background][foreground] .button-white:active,[foreground] .button-white:active {
  background: var(--devsite-foreground-button-white-background-active,var(--devsite-foreground-button-background-active,var(--devsite-foreground-button-background-hover)))
}

[background=theme]:not(.devsite-landing-row-cards) .button-white {
  color: var(--devsite-text-color,var(--devsite-inverted-text-color))
}

.button-white.button-disabled,.button-white[disabled] {
  background: 0
}

.button-raised {
  background: var(--devsite-button-raised-background,var(--devsite-background-1));
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color);
  line-height: var(--devsite-button-raised-line-height,36px)
}

.button-raised,.button-raised:active,.button-raised:focus,.button-raised:hover {
  border: 0;
  color: var(--devsite-button-raised-color,var(--devsite-button-color))
}

.button-raised:focus,.button-raised:hover {
  background: var(--devsite-button-raised-background-hover,var(--devsite-button-background-hover));
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color)
}

.button-raised:active {
  background: var(--devsite-button-raised-background-active,var(--devsite-button-background-active));
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color)
}

[background]:not(.devsite-landing-row-cards) .button-raised {
  background: var(--devsite-background-1)
}

.button+.button,button+button,input[type=button]+input[type=button],input[type=file]+input[type=file],input[type=image]+input[type=image],input[type=reset]+input[type=reset],input[type=submit]+input[type=submit] {
  -webkit-margin-start: var(--devsite-button-sibling-gap-x,16px);
  -moz-margin-start: var(--devsite-button-sibling-gap-x,16px);
  margin-inline-start:var(--devsite-button-sibling-gap-x,16px)}

.button-flat+.button-flat,.button-white+.button-white,button+.button {
  margin-left: 8px
}

[dir=rtl] .button-flat+.button-flat,[dir=rtl] .button-white+.button-white,[dir=rtl] button+.button {
  margin-left: 0;
  margin-right: 8px
}

.button-flat {
  padding: 0 8px
}

.button-flat,.button-flat:active,.button-flat:focus,.button-flat:hover {
  background: 0;
  border: 0;
  box-shadow: none
}

.button-flat:disabled {
  background-color: transparent
}

[foreground] .button-primary:active,[foreground] .button-primary:focus,[foreground] .button-primary:hover,[foreground] .button-raised:active,[foreground] .button-raised:focus,[foreground] .button-raised:hover,[foreground] .button-white:active,[foreground] .button-white:focus,[foreground] .button-white:hover {
  border: 0
}

.button-transparent {
  padding: 0 8px
}

.button-transparent,.button-transparent:focus,.button-transparent:hover {
  background-color: transparent;
  border: 0;
  box-shadow: none
}

.button-text-white {
  color: var(--devsite-inverted-text-color)
}

.button-text-blue {
  color: var(--devsite-link-color)
}

.button-lowercase {
  text-transform: none
}

[dir=ltr] .button-unindented {
  margin-left: var(--devsite-button-unindented-margin-x,-8px)
}

[dir=rtl] .button-unindented {
  margin-right: var(--devsite-button-unindented-margin-x,-8px)
}

.button-icon,.button>.material-icons,button>.material-icons {
  font-size: 18px;
  height: 18px;
  width: 18px
}

.button.button-with-icon,.button.external {
  padding: var(--devsite-button-with-icon-padding,0 16px)
}

.button-primary.button-with-icon,.button-primary.external,.button-raised.button-with-icon,.button-raised.external {
  padding: var(--devsite-button-primary-with-icon-padding,0 16px)
}

.button-white.button-with-icon,.button-white.external {
  padding: 0 16px
}

.button>.material-icons,button>.material-icons {
  margin: 0 8px;
  position: relative;
  top: -2px;
  vertical-align: middle
}

.button>.button-icon,button>.button-icon {
  margin: 0 8px
}

.button-with-icon>.button-icon,.button-with-icon>.material-icons {
  margin: 0 8px 0 -4px
}

[dir=rtl] .button-with-icon>.button-icon,[dir=rtl] .button-with-icon>.material-icons {
  margin: 0 -4px 0 8px
}

.button-with-icon>.icon-after,.button.external:not(.button-with-icon):after,button.external:not(.button-with-icon):after {
  margin: 0 -4px 0 8px
}

[dir=rtl] .button-with-icon>.icon-after,[dir=rtl] .button.external:not(.button-with-icon):after,[dir=rtl] button.external:not(.button-with-icon):after {
  margin: 0 8px 0 -4px
}

[dir=ltr] .button:not(.button-with-icon)>.material-icons:not(.icon-after) {
  margin-left: var(--devsite-button-material-icon-margin-x,-4px)
}

[dir=rtl] .button:not(.button-with-icon)>.material-icons:not(.icon-after) {
  margin-right: var(--devsite-button-material-icon-margin-x,-4px)
}

[dir=ltr] .button:not(.button-with-icon)>.icon-after {
  margin-right: var(--devsite-button-material-icon-margin-x,-4px)
}

[dir=rtl] .button:not(.button-with-icon)>.icon-after {
  margin-left: var(--devsite-button-material-icon-margin-x,-4px)
}

[dir=ltr] .button-white:not(.button-with-icon)>.material-icons:not(.icon-after) {
  margin-left: var(--devsite-button-white-material-icon-margin-x,4px)
}

[dir=rtl] .button-white:not(.button-with-icon)>.material-icons:not(.icon-after) {
  margin-right: var(--devsite-button-white-material-icon-margin-x,4px)
}

[dir=ltr] .button-white:not(.button-with-icon)>.icon-after {
  margin-right: var(--devsite-button-white-material-icon-margin-x,4px)
}

[dir=rtl] .button-white:not(.button-with-icon)>.icon-after {
  margin-left: var(--devsite-button-white-material-icon-margin-x,4px)
}

.devsite-landing-row-item[foreground=grey] .button,[foreground=grey] .button {
  background: var(--devsite-secondary-text-color)
}

.devsite-landing-row-item[foreground=grey] .button:active,.devsite-landing-row-item[foreground=grey] .button:focus,.devsite-landing-row-item[foreground=grey] .button:hover,[foreground=grey] .button:active,[foreground=grey] .button:focus,[foreground=grey] .button:hover {
  background: #3c4043
}

[layout=docs] h1,[layout=docs] h2,[layout=docs] h3,[layout=docs] h4,[layout=docs] h5,[layout=docs] h6 {
  overflow: hidden;
  text-overflow: ellipsis
}

.devsite-article h1:first-of-type {
  display: inline;
  margin-top: 0;
  vertical-align: middle
}

.devsite-article[has-bookmark] h1:first-of-type {
  -webkit-margin-end: 83px;
  -moz-margin-end: 83px;
  margin-inline-end:83px}

.devsite-page-title-meta {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

.devsite-page-date {
  color: var(--devsite-secondary-text-color);
  font: 14px/20px var(--devsite-primary-font-family)
}

.devsite-landing-row h2,.devsite-landing-row-item-description h3,h1 {
  color: var(--devsite-heading-color,var(--devsite-secondary-text-color))
}

.devsite-landing-row h2,.devsite-landing-row-large-headings .devsite-landing-row-item-description h3,h1 {
  font: var(--devsite-h1-font);
  letter-spacing: var(--devsite-h1-letter-spacing);
  margin: var(--devsite-h1-margin)
}

.devsite-landing-row-1-up.devsite-landing-row-hero .devsite-landing-row-item-description h3,.devsite-landing-row-large-headings h2 {
  font: var(--devsite-display-font);
  letter-spacing: var(--devsite-display-letter-spacing)
}

.devsite-landing-row .devsite-catalog-alphabet-letter-heading h2 {
  margin: 20px 0
}

[layout=docs] h2 {
  border-bottom: var(--devsite-h2-border,var(--devsite-secondary-border));
  padding: var(--devsite-h2-padding)
}

.devsite-landing-row h3,h2 {
  font: var(--devsite-h2-font);
  letter-spacing: var(--devsite-h2-letter-spacing);
  margin: var(--devsite-h2-margin)
}

h3 {
  font: var(--devsite-h3-font);
  letter-spacing: var(--devsite-h3-letter-spacing);
  margin: var(--devsite-h3-margin)
}

.devsite-landing-row h4,.devsite-landing-row-item-no-media h3 {
  font: var(--devsite-h3-font);
  margin: var(--devsite-h3-margin,32px 0 12px);
  padding: 0
}

.devsite-landing-row-large-headings .devsite-landing-row-item-list h4 {
  font: 400 20px/32px var(--devsite-primary-font-family);
  letter-spacing: -.01em
}

h4,h5,h6 {
  margin: 32px 0 16px
}

h4 {
  font: var(--devsite-h4-font);
  letter-spacing: var(--devsite-h4-letter-spacing)
}

h5 {
  font: var(--devsite-h5-font);
  letter-spacing: var(--devsite-h5-letter-spacing)
}

h6 {
  font: var(--devsite-h6-font);
  letter-spacing: var(--devsite-h6-letter-spacing)
}

h1+dl>dt:first-child,h1+h1,h1+h2,h1+h3,h1+h4,h1+h5,h1+h6,h2+dl>dt:first-child,h2+h1,h2+h2,h2+h3,h2+h4,h2+h5,h2+h6,h3+dl>dt:first-child,h3+h1,h3+h2,h3+h3,h3+h4,h3+h5,h3+h6,h4+dl>dt:first-child,h4+h1,h4+h2,h4+h3,h4+h4,h4+h5,h4+h6,h5+dl>dt:first-child,h5+h1,h5+h2,h5+h3,h5+h4,h5+h5,h5+h6,h6+dl>dt:first-child,h6+h1,h6+h2,h6+h3,h6+h4,h6+h5,h6+h6 {
  margin-top: 0
}

table {
  border: 0;
  border-collapse: collapse;
  border-spacing: 0;
  font: 14px/20px var(--devsite-primary-font-family);
  margin: 16px 0 15px;
  width: 100%
}

caption {
  background: var(--devsite-background-3);
  font-weight: 500;
  padding: 12px 8px;
  text-align: center
}

tr {
  background: var(--devsite-table-row-background,0);
  border: 0;
  border-bottom: var(--devsite-table-row-border,var(--devsite-primary-border))
}

tr:first-child {
  border-top: var(--devsite-table-row-border,var(--devsite-primary-border))
}

td,th {
  border: 0;
  margin: 0;
  text-align: left
}

[dir=rtl] td,[dir=rtl] th {
  text-align: right
}

th {
  font: var(--devsite-table-heading-font,500 16px/24px var(--devsite-primary-font-family));
  height: 48px;
  padding: var(--devsite-table-heading-padding,8px);
  vertical-align: middle
}

th>h2,th>h3 {
  border: 0;
  font: var(--devsite-table-heading-font,500 16px/24px var(--devsite-primary-font-family));
  margin: 0!important;
  padding: 0!important
}

td>.expandable>h2.showalways,td>.expandable>h3.showalways,td>h2:only-child,td>h3:only-child {
  border: 0;
  font: 500 14px/20px var(--devsite-primary-font-family);
  margin: 0;
  padding-bottom: 0
}

td>.expandable>h2.showalways,td>.expandable>h3.showalways {
  line-height: 24px
}

table h4,table h5,table h6 {
  margin-left: 0!important;
  margin-right: 0!important;
  padding-left: 0!important;
  padding-right: 0!important
}

td b,td strong,th b,th strong {
  font-weight: 500
}

td {
  padding: var(--devsite-table-cell-padding,7px 8px 8px)
}

td code,th code {
  background: 0;
  border: 0;
  font: 500 100%/1 var(--devsite-code-font-family);
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  padding: 0
}

td pre code {
  font-weight: 400;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased
}

table.responsive td,table.responsive th {
  min-width: 214px
}

table.responsive table:not(.responsive) td,table.responsive table:not(.responsive) th {
  min-width: 120px
}

table.responsive td code,table.responsive th code {
  word-break: break-all;
  word-break: break-word
}

table.responsive td tr:not(.alt) td:first-child,table.responsive tr:not(.alt) td td:first-child,td {
  background: var(--devsite-table-cell-background);
  vertical-align: top
}

table.fixed {
  table-layout: fixed
}

table.fixed td,table.fixed td code,table.fixed th,table.fixed th code {
  word-break: break-word
}

.devsite-table-wrapper {
  margin: var(--devsite-table-margin,16px 0);
  overflow: auto
}

.devsite-table-wrapper .devsite-table-wrapper {
  margin: 0;
  overflow: visible
}

.devsite-table-wrapper table {
  margin: 0
}

.devsite-table-wrapper .devsite-table-wrapper table {
  margin: 16px 0
}

table.responsive table.responsive {
  margin: 0
}

table.responsive td tr:first-child td {
  padding-top: 0
}

table.responsive td tr:last-child td {
  padding-bottom: 0
}

[dir=ltr] table.responsive td td:first-child {
  padding-left: 0
}

[dir=rtl] table.responsive td td:first-child {
  padding-right: 0
}

table.responsive>*>tr>th:not(:first-child),table.responsive>tr>th:not(:first-child) {
  display: none
}

table.columns tr {
  border: 0
}

table table tr:first-child {
  border-top: 0
}

devsite-selector .devsite-table-wrapper:last-child tr:last-child,table table tr:last-child {
  border-bottom: 0
}

th,th code {
  background: var(--devsite-table-heading-background,#e8eaed);
  color: var(--devsite-table-heading-color,var(--devsite-primary-text-color))
}

table.vertical-rules tr>td:not(:last-child),table.vertical-rules tr>th:not(:last-child) {
  border-right: var(--devsite-table-row-border,var(--devsite-primary-border))
}

.alt td,table.alternating-even-rows tr:nth-child(2n) td,table.alternating-odd-rows tr:nth-child(odd) td,td.alt {
  background: var(--devsite-alt-table-cell-background)
}

table.responsive>*>tr:not(.alt) td:first-child,table.responsive>tr:not(.alt) td:first-child {
  background: var(--devsite-responsive-table-first-column-background)
}

.devsite-article-body>.devsite-full-width-table,.devsite-article-body>table.full-width {
  margin: 16px -40px
}

@media screen and (max-width: 840px) {
  .devsite-article-body>.devsite-full-width-table,.devsite-article-body>table.full-width {
      margin:16px -24px
  }
}

@media screen and (max-width: 600px) {
  .devsite-article-body>.devsite-full-width-table,.devsite-article-body>table.full-width {
      margin:16px -16px
  }
}

.devsite-article-body>.devsite-full-width-table td:first-child,.devsite-article-body>.devsite-full-width-table th:first-child,.devsite-article-body>table.full-width td:first-child,.devsite-article-body>table.full-width th:first-child {
  padding-left: 40px
}

@media screen and (max-width: 840px) {
  .devsite-article-body>.devsite-full-width-table td:first-child,.devsite-article-body>.devsite-full-width-table th:first-child,.devsite-article-body>table.full-width td:first-child,.devsite-article-body>table.full-width th:first-child {
      padding-left:24px
  }
}

@media screen and (max-width: 600px) {
  .devsite-article-body>.devsite-full-width-table td:first-child,.devsite-article-body>.devsite-full-width-table th:first-child,.devsite-article-body>table.full-width td:first-child,.devsite-article-body>table.full-width th:first-child {
      padding-left:16px
  }
}

.devsite-article-body>.devsite-full-width-table td:last-child,.devsite-article-body>.devsite-full-width-table th:last-child,.devsite-article-body>table.full-width td:last-child,.devsite-article-body>table.full-width th:last-child {
  padding-right: 40px
}

@media screen and (max-width: 840px) {
  .devsite-article-body>.devsite-full-width-table td:last-child,.devsite-article-body>.devsite-full-width-table th:last-child,.devsite-article-body>table.full-width td:last-child,.devsite-article-body>table.full-width th:last-child {
      padding-right:24px
  }
}

@media screen and (max-width: 600px) {
  .devsite-article-body>.devsite-full-width-table td:last-child,.devsite-article-body>.devsite-full-width-table th:last-child,.devsite-article-body>table.full-width td:last-child,.devsite-article-body>table.full-width th:last-child {
      padding-right:16px
  }
}

.devsite-full-width-table table table td:first-child,.devsite-full-width-table table table th:first-child {
  padding-left: 0
}

@media screen and (max-width: 840px) {
  .devsite-full-width-table table table td:first-child,.devsite-full-width-table table table th:first-child {
      padding-right:0
  }
}

.devsite-full-width-table table table td:last-child,.devsite-full-width-table table table th:last-child {
  padding-right: 0
}

@media screen and (max-width: 840px) {
  .devsite-full-width-table table table td:last-child,.devsite-full-width-table table table th:last-child {
      padding-left:0
  }
}

@media screen and (max-width: 840px) {
  table.responsive td,table.responsive th,table.responsive tr {
      display:block
  }

  table.responsive table:not(.responsive) tr {
      display: table-row
  }

  table.responsive table:not(.responsive) td,table.responsive table:not(.responsive) th {
      display: table-cell
  }

  table.responsive>*>th,table.responsive>th {
      height: auto;
      padding: var(--devsite-responsive-table-heading-padding,14px 8px)
  }

  table.fixed.responsive col {
      display: contents
  }
}

.devsite-book-nav::-webkit-scrollbar,.devsite-dialog::-webkit-scrollbar,.devsite-popout::-webkit-scrollbar,.devsite-table-wrapper::-webkit-scrollbar,.devsite-tabs-overflow-menu::-webkit-scrollbar,.devsite-toc::-webkit-scrollbar,[scrollbars]::-webkit-scrollbar,pre::-webkit-scrollbar {
  height: 8px;
  width: 8px
}

.devsite-book-nav::-webkit-scrollbar-thumb,.devsite-dialog::-webkit-scrollbar-thumb,.devsite-popout::-webkit-scrollbar-thumb,.devsite-table-wrapper::-webkit-scrollbar-thumb,.devsite-tabs-overflow-menu::-webkit-scrollbar-thumb,.devsite-toc::-webkit-scrollbar-thumb,[scrollbars]::-webkit-scrollbar-thumb,pre::-webkit-scrollbar-thumb {
  background: var(--devsite-scrollbar-thumb-background);
  border-radius: 8px
}

.devsite-doc-set-nav-row::-webkit-scrollbar,.devsite-header-upper-tabs::-webkit-scrollbar,[no-horizontal-scrollbars]::-webkit-scrollbar {
  height: 0;
  width: 0
}

.devsite-table-wrapper::-webkit-scrollbar-corner,[scrollbars]::-webkit-scrollbar-corner,pre::-webkit-scrollbar-corner {
  background: 0
}

.devsite-cse-confidential-results {
  background: var(--devsite-confidential-results-background);
  margin: 16px -40px;
  padding: 0 40px 16px
}

.devsite-cse-confidential-results+aside {
  margin-top: -16px!important
}

.devsite-search-results-stats {
  margin-bottom: 8px
}

.devsite-search-results .gs-title {
  font-weight: 500
}

.devsite-search-results .gs-title:link,.devsite-search-results .gs-title:visited {
  color: var(--devsite-link-color)
}

.devsite-search-results .gs-webResult .gs-visibleUrl {
  color: var(--devsite-search-results-breadcrumb-color);
  font-size: 14px
}

.devsite-search-results .gs-snippet {
  margin-top: 0
}

.devsite-search-results .gs-webResult:not(.gs-no-results-result):not(.gs-error-result) .gs-snippet {
  color: var(--devsite-primary-text-color)
}

.devsite-result-item-link .devsite-result-item-confidential,.devsite-search-results .gs-title-label {
  background: var(--devsite-caution-notice-background);
  border-radius: 4px;
  color: var(--devsite-caution-notice-color);
  display: inline-block;
  font: 500 11px/16px var(--devsite-primary-font-family);
  letter-spacing: .8px;
  margin: 0 8px;
  padding: 5px 8px 3px;
  text-transform: uppercase
}

body[template=search] .gsc-webResult .gsc-result {
  border: none;
  margin: 24px 0;
  padding: 0
}

.devsite-search-page-controls {
  margin-top: 8px
}

.devsite-search-project {
  border-bottom: var(--devsite-primary-border);
  margin-bottom: 24px;
  padding-bottom: 23px
}

.devsite-search-project .devsite-project-scoped-results-title {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-bottom: 8px
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-wrapper {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  height: 36px;
  margin: 6px 0
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-link,.devsite-search-project .devsite-project-scoped-results-title .devsite-site-logo-link {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 1;
  -webkit-transition: opacity .2s;
  transition: opacity .2s
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-link:focus,.devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-link:hover,.devsite-search-project .devsite-project-scoped-results-title .devsite-site-logo-link:focus {
  opacity: .7;
  text-decoration: none
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-site-logo {
  aspect-ratio: var(--devsite-logo-aspect-ratio,auto);
  height: var(--devsite-logo-height,32px)
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-has-google-wordmark>.devsite-breadcrumb-link,.devsite-search-project .devsite-project-scoped-results-title .devsite-has-google-wordmark>.devsite-product-name {
  direction: ltr
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-google-wordmark {
  height: 24px;
  margin: 0 4px 0 0;
  position: relative;
  top: 5px
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-google-wordmark-svg-path {
  -webkit-transition: fill .2s;
  transition: fill .2s
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-site-logo-link canvas {
  height: auto!important
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-site-logo-link picture {
  display: contents
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-product-logo-container {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  color: var(--devsite-primary-color,var(--devsite-primary-text-color));
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 36px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-inline:0 4px;width: 36px
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-product-logo-container[background] {
  background: var(--devsite-primary-color,var(--devsite-primary-text-color));
  color: var(--devsite-inverted-text-color)
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-product-logo {
  color: inherit;
  font-size: 32px;
  height: 32px;
  max-width: 32px;
  min-width: 32px;
  overflow: hidden;
  white-space: nowrap
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-product-logo-container[background] .devsite-product-logo {
  font-size: 28px;
  height: 28px;
  max-width: 28px;
  min-width: 28px
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-product-name {
  font: var(--devsite-wordmark-font,400 20px/32px var(--devsite-primary-font-family));
  letter-spacing: 0;
  margin: 0;
  max-height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-transition: color .2s;
  transition: color .2s;
  white-space: nowrap
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-site-logo:not([src*=".svg"]) {
  height: auto;
  max-height: 32px
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-breadcrumb-link>.devsite-product-name {
  color: inherit
}

@media screen and (max-width: 840px) {
  .devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-wrapper {
      -webkit-box-flex:0;
      -webkit-flex: 0 1 auto;
      -moz-box-flex: 0;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      min-width: 0
  }

  .devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-wrapper .devsite-breadcrumb-item:not(:first-of-type),.devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-wrapper .devsite-site-logo-link+.devsite-product-name {
      display: none
  }

  .devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-wrapper .devsite-breadcrumb-item,.devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-wrapper .devsite-breadcrumb-link,.devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-wrapper .devsite-breadcrumb-list,.devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-wrapper .devsite-product-name {
      width: 100%
  }

  .devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-wrapper .devsite-breadcrumb-link {
      overflow: hidden;
      text-overflow: ellipsis
  }
}

.devsite-search-project .devsite-project-scoped-results-title .devsite-product-name-wrapper {
  position: relative;
  margin-left: .3em
}

.devsite-search-project .devsite-breadcrumb-list,.devsite-search-project .devsite-project-scoped-results-title {
  font: var(--devsite-wordmark-font,400 20px/32px var(--devsite-primary-font-family))
}

.devsite-search-project .devsite-breadcrumb-link,.devsite-search-project .devsite-breadcrumb-link:hover {
  color: var(--devsite-primary-text-color)
}

.devsite-search-project .devsite-product-logo-container {
  color: var(--devsite-primary-color,var(--devsite-primary-text-color))
}

.devsite-search-project .devsite-product-logo-container[background] {
  background: var(--devsite-primary-color,var(--devsite-primary-text-color));
  color: var(--devsite-inverted-text-color)
}

.devsite-search-project .devsite-breadcrumb-link .devsite-google-wordmark {
  fill: currentColor
}

.devsite-steps {
  border-top: var(--devsite-steps-border,0);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: var(--devsite-steps-margin,0);
  padding: var(--devsite-steps-padding,24px 0 40px)
}

.devsite-steps .steps-direction {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-weight: 500;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative
}

.devsite-steps .steps-previous {
  margin-left: var(--devsite-steps-prev-next-margin-x,40px)
}

.devsite-steps .steps-next {
  margin-right: var(--devsite-steps-prev-next-margin-x,40px);
  text-align: right
}

.devsite-steps .steps-link:hover {
  -webkit-text-decoration: var(--devsite-steps-text-decoration-hover,none);
  -moz-text-decoration: var(--devsite-steps-text-decoration-hover,none);
  text-decoration: var(--devsite-steps-text-decoration-hover,none)
}

.devsite-steps .steps-link:focus {
  text-decoration: none
}

.devsite-steps .steps-link-direction {
  color: var(--devsite-steps-direction-color,var(--devsite-link-color));
  display: block;
  font: var(--devsite-steps-direction-font,500 14px/24px var(--devsite-primary-font-family))
}

.devsite-steps .steps-link-title {
  color: var(--devsite-steps-title-color);
  display: var(--devsite-steps-title-display,inline);
  font: var(--devsite-steps-title-font,500 18px/24px var(--devsite-primary-font-family))
}

.devsite-steps .steps-link:hover .steps-link-title {
  border-bottom: var(--devsite-steps-title-border-hover,none)
}

.devsite-steps .steps-link:focus .steps-link-title {
  border-bottom: var(--devsite-steps-title-border-focus)
}

.devsite-steps .steps-link-arrow {
  color: var(--devsite-steps-arrow-color,var(--devsite-link-color));
  position: absolute
}

.devsite-steps .steps-link-arrow-left {
  left: var(--devsite-steps-arrow-x-start,-40px)
}

.devsite-steps .steps-link-arrow-right {
  right: var(--devsite-steps-arrow-x-start,-40px)
}

@media screen and (max-width: 840px) {
  .devsite-steps .steps-link-title {
      font:var(--devsite-steps-title-font,500 14px/24px var(--devsite-primary-font-family))
  }

  .devsite-steps .steps-previous {
      margin-left: var(--devsite-steps-prev-next-margin-x,24px)
  }

  .devsite-steps .steps-next {
      margin-right: var(--devsite-steps-prev-next-margin-x,24px)
  }

  .devsite-steps .steps-link-arrow-left {
      left: var(--devsite-steps-arrow-x-start,-24px)
  }

  .devsite-steps .steps-link-arrow-right {
      right: var(--devsite-steps-arrow-x-start,-24px)
  }

  .devsite-steps .steps-link-arrow {
      bottom: var(--devsite-steps-arrow-y-end,4px);
      font-size: 16px
  }
}

@media screen and (max-width: 600px) {
  .devsite-steps {
      padding:8px 0 16px
  }

  .devsite-steps .steps-previous {
      margin-left: var(--devsite-steps-prev-next-margin-x,0)
  }

  .devsite-steps .steps-next {
      margin-right: var(--devsite-steps-prev-next-margin-x,0)
  }

  .devsite-steps .steps-link-arrow {
      display: var(--devsite-steps-arrow-display,none)
  }
}

.devsite-jsfiddle-hide {
  display: none
}

html[cached] .devsite-wrapper {
  display: none
}

.devsite-dialog:not([is-upgraded]),iframe.devsite-embedded-youtube-video:not([is-upgraded]) {
  pointer-events: none;
  visibility: hidden
}

.code-sample,.data-sample,.ds-selector-dropdown,.ds-selector-tabs,.kd-tabbed-horz,.kd-tabbed-vert {
  display: none
}

.expandable {
  display: none
}

devsite-selector {
  pointer-events: none;
  visibility: hidden
}

devsite-search .devsite-searchbox {
  background: var(--devsite-searchbox-background,var(--devsite-background-3));
  border-radius: 2px
}

iframe.framebox,iframe.inherit-locale {
  display: block;
  width: 100%
}

[background] {
  background-color: var(--devsite-background-color,var(--devsite-primary-color))
}

[background],[background]:not([foreground]) {
  color: var(--devsite-text-color,var(--devsite-inverted-text-color))
}

[background] :link:not(.button),[background] :visited:not(.button) {
  color: var(--devsite-foreground-color,var(--devsite-link-color))
}

[background] :focus>:not(.material-icons),[background] :link>:not(.material-icons):hover,[background] p>a:not(.button) {
  -webkit-text-decoration: var(--devsite-background-text-decoration,underline);
  -moz-text-decoration: var(--devsite-background-text-decoration,underline);
  text-decoration: var(--devsite-background-text-decoration,underline)
}

[background] p>a:focus {
  background: var(--devsite-inverted-text-rgba);
  border-radius: 2px;
  margin: -4px;
  padding: 4px;
  text-decoration: none
}

[foreground] :focus>:not(.material-icons),[foreground] :link>:not(.material-icons):hover {
  color: var(--devsite-foreground-color,var(--devsite-primary-color,var(--devsite-link-color)));
  text-decoration: underline
}

[foreground] h2 a:not(.button),[foreground] h3 a:not(.button) {
  color: var(--devsite-foreground-color,var(--devsite-primary-color,var(--devsite-link-color)))
}

.devsite-landing-row-item[foreground] h2 a:not(.button),.devsite-landing-row-item[foreground] h3 a:not(.button) {
  color: var(--devsite-foreground-color,var(--devsite-primary-color,var(--devsite-link-color)))
}

devsite-content {
  display: block;
  position: relative
}

body[layout=docs] devsite-content {
  align-self: start;
  grid-column: 2;
  grid-row: 1;
  margin: 24px 0;
  max-width: 936px;
  min-width: 0
}

body[layout=docs][concierge] devsite-content {
  max-width: 1072px
}

body[layout=docs] .devsite-article {
  background-color: var(--devsite-background-1);
  border: var(--devsite-page-border,0);
  border-radius: var(--devsite-page-border-radius,2px);
  box-shadow: var(--devsite-page-box-shadow,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color));
  padding: 40px
}

body[layout=docs][template=landing] .devsite-article {
  padding: 0
}

.devsite-article-meta {
  display: grid;
  grid-gap: 0 16px;
  grid-template-areas: "breadcrumbs ratings";
  grid-template-columns: 1fr auto;
  margin: var(--devsite-article-meta-margin,0 0 16px)
}

.devsite-article-meta .devsite-breadcrumb-list {
  grid-area: breadcrumbs
}

.devsite-article-meta devsite-thumb-rating {
  grid-area: ratings
}

.devsite-banner+.devsite-article-meta {
  margin-top: -16px
}

body[layout=full] .devsite-article-meta,body[template=landing] .devsite-article-meta {
  margin: 0
}

devsite-feedback[position=header] {
  display: block
}

[dir=ltr] devsite-feedback[position=header] {
  float: right;
  margin-left: 24px
}

[dir=rtl] devsite-feedback[position=header] {
  float: left;
  margin-right: 24px
}

body[layout=full] devsite-feedback[position=header],body[template=landing] devsite-feedback[position=header] {
  display: none
}

[template=page] .devsite-article-body {
  margin-top: 16px
}

[template=page] .devsite-article-body>:first-child,[template=page] .devsite-article-body>devsite-view-release-notes:first-child+* {
  margin-top: 0
}

@media screen and (max-width: 840px) {
  body[layout=docs] devsite-content {
      margin:0
  }

  body[layout=docs] .devsite-article {
      border: 0;
      border-radius: 0;
      box-shadow: none;
      padding: 24px
  }

  .devsite-banner+.devsite-article-meta {
      margin-top: 0
  }
}

@media screen and (max-width: 600px) {
  body[layout=docs] .devsite-article {
      padding:16px
  }

  .devsite-article-meta {
      display: block;
      margin: 0 0 12px
  }

  [dir] devsite-feedback[position=header] {
      float: none;
      margin: 0 0 12px;
      position: static
  }

  [dir] article[has-bookmark] devsite-feedback[position=header] {
      margin: 0 0 12px
  }
}

#devsite-support-form {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 0 0 -40px
}

#devsite-support-form>* {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
  -moz-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  padding: 0 0 0 40px
}

.devsite-support-form-error {
  color: #d93025
}

.devsite-support-form-hidden {
  display: none
}

.devsite-support-form-field {
  margin: 0 0 8px
}

.devsite-support-form-field input:not([type=checkbox]):not([type=radio]),.devsite-support-form-field select,.devsite-support-form-field textarea {
  width: 100%
}

.devsite-support-form-cc {
  color: var(--devsite-secondary-text-color);
  display: block;
  font-size: 13px
}

#devsite-support-form>.devsite-support-form-half {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 50%;
  -moz-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%
}

.devsite-support-quota {
  font: italic 400 12px/20px var(--devsite-primary-font-family);
  margin-bottom: 8px
}

.devsite-support-quota-help {
  font-size: 18px;
  margin-left: 4px;
  vertical-align: top
}

.devsite-support-quota-help:after {
  color: var(--devsite-tertiary-text-color);
  content: "help"
}

@media screen and (max-width: 600px) {
  #devsite-support-form {
      display:block
  }
}

.devsite-404,.devsite-offline {
  font: var(--devsite-404-font);
  letter-spacing: var(--devsite-404-letter-spacing);
  margin: var(--devsite-404-margin,120px auto 0);
  max-width: var(--devsite-404-max-width,804px);
  min-height: var(--devsite-404-min-height);
  position: relative;
  text-align: var(--devsite-404-text-align,center)
}

.devsite-404 devsite-search,.devsite-offline-reload,.devsite-offline-suggestions {
  margin: var(--devsite-404-search-margin);
  position: relative;
  z-index: 1
}

.devsite-404 devsite-search .devsite-popout-result {
  max-height: 304px
}

.devsite-404 devsite-search,.devsite-404 devsite-search .devsite-searchbox {
  width: 100%
}

.devsite-404 devsite-search .devsite-search-button {
  display: none
}

.devsite-404 h3,.devsite-offline h3 {
  color: var(--devsite-offline-heading-color,var(--devsite-secondary-color,var(--devsite-primary-text-color)))
}

.devsite-404 h3 {
  font: 400 64px/64px var(--devsite-code-font-family)
}

.devsite-404-error {
  background: var(--devsite-404-error-background);
  padding: var(--devsite-404-error-padding);
  text-align: var(--devsite-404-error-text-align,center)
}

.devsite-404-error-message,.devsite-404-error>h3 {
  position: relative;
  z-index: 2
}

.devsite-404-error>h3 {
  display: var(--devsite-404-error-heading-display,block)
}

.devsite-404-error-message {
  font: var(--devsite-404-error-message-font);
  letter-spacing: var(--devsite-404-error-message-letter-spacing);
  margin: var(--devsite-404-error-message-margin,0 0 20px)
}

.devsite-404-links {
  border-top: var(--devsite-404-links-border,var(--devsite-primary-border));
  margin: var(--devsite-404-links-margin,0 calc(50% - 50vw) 40px);
  padding: var(--devsite-404-links-padding,0 calc(50vw - 50%));
  text-align: start
}

.devsite-404-links h3 {
  color: var(--devsite-primary-text-color);
  font: var(--devsite-404-links-heading-font,var(--devsite-h3-font))
}

.devsite-404-links ul {
  display: grid;
  gap: 0 24px;
  grid: auto-flow/repeat(var(--devsite-404-links-columns),1fr);
  list-style: none;
  padding: 0
}

.devsite-404-links li {
  margin: var(--devsite-404-links-item-margin,12px 0)
}

.devsite-offline .devsite-offline-suggestions {
  text-align: start
}

.devsite-offline .devsite-offline-suggestions h3,.devsite-offline .devsite-offline-suggestions ul {
  margin: 0
}

.devsite-offline h3 {
  font: 400 32px/48px var(--devsite-code-font-family)
}

.devsite-offline-reload {
  text-align: center
}

@media screen and (max-width: 840px) {
  .devsite-404,.devsite-offline {
      margin-top:40px
  }
}

body[embed] .devsite-book-nav-bg,body[embed] .devsite-book-nav-bg[fixed],body[embed] .devsite-book-nav-blur,body[embed] .devsite-book-nav-toggle,body[embed] .devsite-sidebar,body[embed] devsite-book-nav,body[embed] devsite-feature-tooltip.devsite-page-bookmark-tooltip,body[embed] devsite-feedback[position=header],body[embed] devsite-footer-linkboxes,body[embed] devsite-footer-promos,body[embed] devsite-footer-utility,body[embed] devsite-header,body[embed] devsite-panel,body[embed] devsite-thumb-rating[position=header],body[embed] devsite-toc,body[ready][embed] .devsite-book-nav-bg,body[ready][embed] .devsite-book-nav-bg[fixed],body[ready][embed] .devsite-book-nav-blur,body[ready][embed] .devsite-book-nav-toggle,body[ready][embed] .devsite-sidebar,body[ready][embed] devsite-book-nav,body[ready][embed] devsite-feature-tooltip.devsite-page-bookmark-tooltip,body[ready][embed] devsite-feedback[position=header],body[ready][embed] devsite-footer-linkboxes,body[ready][embed] devsite-footer-promos,body[ready][embed] devsite-footer-utility,body[ready][embed] devsite-header,body[ready][embed] devsite-panel,body[ready][embed] devsite-thumb-rating[position=header],body[ready][embed] devsite-toc {
  display: none
}

body[layout=docs][embed] .devsite-article {
  box-shadow: none
}

body[layout=docs][embed] devsite-content {
  margin: 0
}

@media print {
  .prettyprint a,:link,:visited,a .atn,a .atv,a .com,a .dec,a .kwd,a .lit,a .pln,a .pun,a .str,a .tag,a .typ,a [class^=devsite-syntax-],a code,aside :link,aside :visited,body,code,h1,h1 code,h2,h2 code,h3,h3 code,h4,h4 code,h5,h5 code,h6,h6 code,html,pre,pre .atn,pre .atv,pre .com,pre .dec,pre .kwd,pre .lit,pre .pln,pre .pun,pre .str,pre .tag,pre .typ,pre [class^=devsite-syntax-],td,td code,th,th :link,th :visited,th code,var {
      color: #000!important;
      padding-left: 0!important;
      padding-right: 0!important
  }

  .beta,.caution,.deprecated,.dogfood,.experimental,.key-point,.key-term,.note,.objective,.preview,.special,.success,.tip,.warning,aside {
      color: #000!important;
      margin-left: 0!important;
      margin-right: 0!important;
      padding-left: 0!important;
      padding-right: 0!important
  }

  .beta a,.caution a,.deprecated a,.dogfood a,.experimental a,.key-point a,.key-term a,.note a,.objective a,.preview a,.special a,.success a,.tip a,.warning a,aside a {
      color: #000!important;
      margin-left: 0!important;
      margin-right: 0!important;
      padding-left: 0!important;
      padding-right: 0!important
  }

  #gc-wrapper {
      margin: 0!important
  }

  devsite-code {
      margin-left: 0!important;
      margin-right: 0!important;
      padding-left: 0!important;
      padding-right: 0!important
  }

  devsite-expandable>:not(.showalways):not(.exw-control):not(.exw-expanded-content):not(.expand-control) {
      display: block!important
  }

  :link,:visited {
      text-decoration: underline
  }

  .devsite-article-meta,.devsite-banner-confidential .button,.devsite-banner-translated .button,.devsite-book-nav-bg,.devsite-book-nav-blur,.devsite-book-nav-toggle,.devsite-code-buttons-container,.devsite-page-bookmark-tooltip,.devsite-sidebar,devsite-book-nav,devsite-bookmark,devsite-concierge,devsite-feedback,devsite-footer-linkboxes,devsite-footer-promos,devsite-footer-utility,devsite-googler-buttons,devsite-header,devsite-recommendations,devsite-snackbar,devsite-thumb-rating {
      display: none!important
  }

  .devsite-article,.devsite-main-content,devsite-content {
      background: 0!important;
      border: 0!important;
      box-shadow: none!important;
      display: block!important;
      margin: 0!important;
      max-width: none!important;
      padding: 0!important;
      width: auto!important
  }

  .devsite-banner {
      margin-top: 0
  }

  .attempt-left,.attempt-right,.video-wrapper {
      float: none;
      margin: 16px 0
  }

  img,video {
      display: block!important;
      page-break-inside: avoid!important
  }

  .devsite-main-content a[href]:after {
      content: " (" attr(href) ")";
      display: inline-block;
      font: 14px/20px var(--devsite-primary-font-family);
      max-width: 100%;
      word-wrap: break-word
  }
}

@page {
  margin: .75in
}

.devsite-product-platform-row {
  margin: 8px 0;
  padding: 0 24px
}

.devsite-header-no-lower-tabs .devsite-product-platform-row {
  margin-top: -12px;
  padding-bottom: 24px
}

.devsite-platform-container {
  display: inline-block
}

.devsite-platform-container+.devsite-platform-container {
  margin-left: 16px
}

.devsite-platform-icon-container {
  background: var(--devsite-background-1);
  border-radius: 50%;
  height: 40px;
  margin: 0 auto;
  width: 40px
}

.devsite-platform-icon {
  color: var(--devsite-secondary-text-color);
  font-size: 24px;
  height: 24px;
  margin: 8px;
  width: 24px
}

@media screen and (max-width: 1000px) {
  div.devsite-collapsible-section,div.devsite-header-background {
      background-image:none
  }
}

@media screen and (max-width: 600px) {
  .devsite-product-platform-row {
      padding:0 16px
  }
}

.devsite-landing-row-cards .devsite-landing-row-item {
  border: var(--devsite-card-border);
  border-radius: var(--devsite-card-border-radius);
  box-shadow: var(--devsite-card-box-shadow);
  overflow: var(--devsite-card-overflow,hidden);
  position: relative
}

.devsite-landing-row-cards .devsite-landing-row-item,.devsite-landing-row-cards[background] .devsite-landing-row-item {
  --devsite-link-color: #1a73e8;
  --devsite-text-color: var(--devsite-primary-text-color)
}

.devsite-landing-row-cards .devsite-landing-row-item:not([background]) {
  background-color: var(--devsite-card-background)
}

body[theme] .devsite-landing-row-cards[background=theme] :link:not(.button),body[theme] .devsite-landing-row-cards[background=theme] :visited:not(.button) {
  color: var(--devsite-link-color)
}

.devsite-landing-row-cards .devsite-landing-row-column .devsite-landing-row-item {
  display: block
}

.devsite-landing-row-cards .devsite-landing-row-item[description-position] .devsite-landing-row-item-media+.devsite-landing-row-item-description {
  margin: 0
}

.devsite-landing-row-cards .devsite-landing-row-item-description {
  padding: 16px
}

.devsite-landing-row-cards .devsite-landing-row-item-buttons {
  padding-top: 16px
}

.devsite-landing-row-cards[background=theme] .devsite-landing-row-item-icon {
  color: var(--devsite-secondary-text-color)
}

.devsite-landing-row-cards .devsite-landing-row-item-no-media h3 {
  font: var(--devsite-h2-font);
  margin: 0 0 20px
}

.devsite-landing-row-cards.devsite-landing-row-1-up .devsite-landing-row-item-media {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0;
  -moz-box-flex: 1;
  -ms-flex: 1 0;
  flex: 1 0;
  margin: 0
}

@media screen and (max-width: 840px) {
  .devsite-landing-row-cards.devsite-landing-row-1-up .devsite-landing-row-item {
      display:block
  }
}

@media screen and (max-width: 600px) {
  .devsite-landing-row-cards.devsite-landing-row-1-up .devsite-landing-row-item-media+.devsite-landing-row-item-description {
      margin:0;
      padding: 16px
  }
}

.devsite-landing-row-cta {
  text-align: center
}

.devsite-landing-row.devsite-landing-row-cta:not([background]) {
  background: var(--devsite-cta-background,var(--devsite-primary-color));
  color: var(--devsite-text-color,var(--devsite-inverted-text-color))
}

.devsite-landing-row.devsite-landing-row-cta .devsite-landing-row-item {
  display: block
}

.devsite-landing-row.devsite-landing-row-cta .devsite-landing-row-item-description {
  margin: 0 auto;
  max-width: 856px
}

.devsite-landing-row-cta.devsite-landing-row h2,.devsite-landing-row-cta.devsite-landing-row-large-headings .devsite-landing-row-item-description h3 {
  color: var(--devsite-text-color,var(--devsite-inverted-text-color))
}

.devsite-landing-row-cta h3 {
  font: var(--devsite-h1-font,400 34px/40px var(--devsite-primary-font-family));
  letter-spacing: var(--devsite-h1-letter-spacing);
  margin-bottom: 16px;
  text-decoration: inherit
}

.devsite-landing-row-cta h3 a:not(.button) {
  color: var(--devsite-text-color,var(--devsite-inverted-text-color))
}

.devsite-landing-row-cta h3+.devsite-landing-row-item-buttons {
  margin-top: 8px
}

@media screen and (max-width: 600px) {
  .devsite-landing-row-cta .devsite-landing-row-item-description {
      font:400 16px/24px var(--devsite-primary-font-family)
  }
}

.devsite-landing-row-header {
  background: var(--devsite-landing-row-header-background);
  border-radius: var(--devsite-landing-row-header-border-radius);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 auto;
  max-width: var(--devsite-landing-row-header-max-width);
  padding: var(--devsite-landing-row-header-padding)
}

.devsite-landing-row[header-position=left] .devsite-landing-row-header,.devsite-landing-row[header-position=right] .devsite-landing-row-header {
  display: block;
  margin: 0
}

.devsite-landing-row[header-position=left] .devsite-landing-row-header {
  grid-column: var(--devsite-landing-row-header-grid-column,1)
}

.devsite-landing-row[header-position=right] .devsite-landing-row-header {
  grid-column: var(--devsite-landing-row-header-grid-column,3);
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -moz-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2
}

.devsite-landing-row[header-position=top] .devsite-landing-row-header+.devsite-landing-row-group {
  margin: var(--devsite-landing-row-group-margin,32px auto 0)
}

.devsite-landing-row-header-text {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  margin: var(--devsite-landing-row-header-text-margin);
  max-width: var(--devsite-landing-row-header-text-max-width)
}

.devsite-landing-row-header-text>h2 {
  margin: 0
}

.devsite-landing-row-description {
  color: var(--devsite-text-color,var(--devsite-primary-text-color));
  font-family: var(--devsite-landing-row-description-font-family,var(--devsite-primary-font-family));
  font-size: var(--devsite-landing-row-description-font-size,18px);
  letter-spacing: var(--devsite-letter-spacing);
  line-height: var(--devsite-line-height,24px);
  max-width: var(--devsite-landing-row-description-max-width,856px)
}

[background] .devsite-landing-row-description {
  color: var(--devsite-text-color,var(--devsite-inverted-text-color))
}

.devsite-landing-row:not([background]):not([foreground]) .devsite-landing-row-description {
  color: var(--devsite-text-color,var(--devsite-heading-color,var(--devsite-secondary-text-color)))
}

h2+.devsite-landing-row-description {
  margin-top: var(--devsite-row-header-contents-gap,16px)
}

.devsite-landing-row-header-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  margin-block:0;margin-inline:0 auto}

.devsite-landing-row-header-centered .devsite-landing-row-header,.devsite-landing-row-header[icon-position=top] {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.devsite-landing-row-header-centered .devsite-landing-row-header-buttons,.devsite-landing-row-header[icon-position=top] .devsite-landing-row-header-buttons {
  margin-inline:0}

.devsite-landing-row-header-centered .devsite-landing-row-header {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center
}

.devsite-landing-row-header-centered .devsite-landing-row-description {
  margin-left: auto;
  margin-right: auto
}

.devsite-landing-row-header-centered .devsite-landing-row-header-buttons {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.devsite-landing-row-header-centered .devsite-landing-row-header-buttons,.devsite-landing-row-header[icon-position=top] .devsite-landing-row-header-buttons,.devsite-landing-row[header-position=left] .devsite-landing-row-header-buttons,.devsite-landing-row[header-position=right] .devsite-landing-row-header-buttons {
  margin: var(--devsite-buttons-margin,24px 0 0)
}

@media screen and (max-width: 840px) {
  .devsite-landing-row-header+.devsite-landing-row-group {
      margin-top:32px
  }

  .devsite-landing-row-header {
      display: block
  }
}

@media screen and (max-width: 840px) {
  .devsite-landing-row-header-text+.devsite-landing-row-header-buttons {
      display:block;
      margin: 24px 0 0
  }
}

@media screen and (max-width: 600px) {
  .devsite-landing-row-header-text+.devsite-landing-row-header-buttons {
      margin:16px 0 0
  }
}

.devsite-landing-row-1-up .devsite-landing-row-item-description[icon-position=left],.devsite-landing-row-item-description[icon-position] {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row
}

.devsite-landing-row-item-description[icon-position=right] {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: row-reverse;
  -moz-box-orient: horizontal;
  -moz-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse
}

.devsite-landing-row-item-description[icon-position=top] {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.devsite-landing-row-item-description[icon-position^=bottom] {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: column-reverse;
  -moz-box-orient: vertical;
  -moz-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse
}

.devsite-landing-row-header-icon-container,.devsite-landing-row-header-icon-container[background],.devsite-landing-row-item-icon-container,.devsite-landing-row-item-icon-container[background] {
  color: var(--devsite-foreground-color,var(--devsite-icon-color,var(--devsite-secondary-text-color)))
}

.devsite-landing-row-header-icon-container,.devsite-landing-row-item-icon-container {
  height: var(--devsite-icon-canvas-size);
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  -webkit-transition: background .2s,box-shadow .2s,color .2s;
  transition: background .2s,box-shadow .2s,color .2s;
  width: var(--devsite-icon-canvas-size)
}

.devsite-landing-row-header-icon-container {
  margin-block:var(--devsite-header-icon-canvas-margin-block,0 8px);margin-inline: var(--devsite-header-icon-canvas-margin-inline,0 20px)
}

.devsite-landing-row-item-icon-container {
  display: var(--devsite-icon-canvas-display,inherit);
  inset: var(--devsite-icon-canvas-inset);
  margin-block:var(--devsite-icon-canvas-margin-block,0 8px);margin-inline: var(--devsite-icon-canvas-margin-inline,0 20px);
  overflow: var(--devsite-icon-canvas-overflow);
  position: var(--devsite-icon-canvas-position)
}

.devsite-landing-row-item-description[icon-position=bottom] .devsite-landing-row-item-icon-container,.devsite-landing-row-item-description[icon-position=bottom]>a,.devsite-landing-row-item-description[icon-position=right] .devsite-landing-row-item-icon-container,.devsite-landing-row-item-description[icon-position=right]>a {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center
}

.devsite-landing-row-item-description[icon-position=bottom-right] .devsite-landing-row-item-icon-container,.devsite-landing-row-item-description[icon-position=bottom-right]>a {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end
}

.devsite-landing-row-header-icon-container[background],.devsite-landing-row-item-icon-container[background] {
  background: var(--devsite-background-color,var(--devsite-primary-color,var(--devsite-primary-text-color)))
}

.devsite-landing-row-header-icon-container[background][foreground=theme],.devsite-landing-row-header-icon-container[foreground=theme],.devsite-landing-row-item-icon-container[background][foreground=theme],.devsite-landing-row-item-icon-container[foreground=theme] {
  color: var(--devsite-primary-color,var(--devsite-primary-text-color))
}

.devsite-landing-row :focus .devsite-landing-row-header-icon-container[background][foreground=theme],.devsite-landing-row :focus .devsite-landing-row-item-icon-container[background][foreground=theme],.devsite-landing-row :link .devsite-landing-row-header-icon-container[background][foreground=theme]:hover,.devsite-landing-row :link .devsite-landing-row-item-icon-container[background][foreground=theme]:hover {
  color: var(--devsite-primary-color,var(--devsite-primary-text-color))
}

.devsite-landing-row-header-icon,.devsite-landing-row-item-icon {
  aspect-ratio: 1
}

.devsite-landing-row-header-icon {
  font-size: var(--devsite-header-icon-size,var(--devsite-icon-size));
  height: var(--devsite-header-icon-size,var(--devsite-icon-size));
  margin-block:var(--devsite-header-icon-margin-block,0);margin-inline: var(--devsite-header-icon-margin-inline,0);
  width: var(--devsite-header-icon-size,var(--devsite-icon-size))
}

.devsite-landing-row-item-icon {
  font-size: var(--devsite-icon-size);
  height: var(--devsite-icon-size);
  margin-block:var(--devsite-icon-margin-block,0);margin-inline: var(--devsite-icon-margin-inline,4px 0);
  width: var(--devsite-icon-size)
}

.devsite-landing-row-item-centered [icon-position=top] .devsite-landing-row-item-icon-container,.devsite-landing-row-item-centered [icon-position=top]>a {
  margin-inline:auto}

.devsite-landing-row-header-icon-container[background],.devsite-landing-row-item-icon-container[background] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

[background] .devsite-landing-row-header-icon-container:not([foreground]),[background] .devsite-landing-row-item-icon-container:not([foreground]) {
  color: var(--devsite-icon-color,var(--devsite-inverted-text-color))
}

:focus .devsite-landing-row-header-icon-container,:focus .devsite-landing-row-item-icon-container,:link .devsite-landing-row-header-icon-container:hover,:link .devsite-landing-row-item-icon-container:hover {
  color: var(--devsite-link-color)
}

[foreground] .devsite-landing-row-item :focus .devsite-landing-row-item-icon-container,[foreground] .devsite-landing-row-item :link .devsite-landing-row-item-icon-container:hover,[foreground] :focus .devsite-landing-row-header-icon-container,[foreground] :link .devsite-landing-row-header-icon-container:hover {
  color: hsla(210,6%,63%,.5)
}

[background] .devsite-landing-row-item :focus .devsite-landing-row-item-icon-container,[background] .devsite-landing-row-item :link .devsite-landing-row-item-icon-container:hover,[background] :focus .devsite-landing-row-header-icon-container,[background] :link .devsite-landing-row-header-icon-container:hover {
  color: var(--devsite-icon-color-hover,var(--devsite-inverted-text-rgba))
}

:focus .devsite-landing-row-header-icon-container[background],:focus .devsite-landing-row-item-icon-container[background],:link .devsite-landing-row-header-icon-container[background]:hover,:link .devsite-landing-row-item-icon-container[background]:hover {
  color: var(--devsite-foreground-color,var(--devsite-icon-color,var(--devsite-secondary-text-color)));
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color)
}

[background] :focus .devsite-landing-row-header-icon-container[background],[background] :focus .devsite-landing-row-item-icon-container[background],[background] :link .devsite-landing-row-header-icon-container[background]:hover,[background] :link .devsite-landing-row-item-icon-container[background]:hover {
  color: var(--devsite-foreground-color,var(--devsite-icon-color,var(--devsite-inverted-text-color)));
  text-decoration: none
}

@media screen and (max-width: 840px) {
  .devsite-landing-row-item-description[icon-position^=bottom] {
      -webkit-box-orient:horizontal;
      -webkit-box-direction: reverse;
      -webkit-flex-direction: row-reverse;
      -moz-box-orient: horizontal;
      -moz-box-direction: reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse
  }

  .devsite-landing-row-item-description[icon-position^=bottom] .devsite-landing-row-item-icon,.devsite-landing-row-item-description[icon-position^=bottom] .devsite-landing-row-item-icon-container,.devsite-landing-row-item-description[icon-position^=bottom]>a {
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      align-self: center
  }
}

.devsite-landing-row-1-up .devsite-landing-row-item {
  display: var(--devsite-item-display,grid);
  grid-gap: var(--devsite-landing-row-item-gap);
  grid-template-columns: var(--devsite-1-up-grid-template-columns)
}

.devsite-landing-row-1-up.devsite-landing-row-hero .devsite-landing-row-item {
  -webkit-box-align: var(--devsite-hero-align-items,center);
  -webkit-align-items: var(--devsite-hero-align-items,center);
  -moz-box-align: var(--devsite-hero-align-items,center);
  -ms-flex-align: var(--devsite-hero-align-items,center);
  align-items: var(--devsite-hero-align-items,center)
}

.devsite-landing-row-1-up .devsite-landing-row-item-description,.devsite-landing-row-1-up .devsite-landing-row-item-media-left {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -moz-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1
}

.devsite-landing-row-1-up .devsite-landing-row-item-media,.devsite-landing-row-1-up .devsite-landing-row-item-media-left+.devsite-landing-row-item-description {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -moz-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2
}

.devsite-landing-row-1-up .devsite-landing-row-item-description {
  display: block;
  grid-column: 1/span 4
}

.devsite-landing-row-1-up .devsite-landing-row-item-media {
  grid-column: var(--devsite-media-grid-column,5/span 8);
  margin: 0
}

.devsite-landing-row-1-up .devsite-landing-row-item-media-left {
  grid-column: var(--devsite-media-left-grid-column,1/span 8)
}

.devsite-landing-row-1-up .devsite-landing-row-item-media-left+.devsite-landing-row-item-description {
  grid-column: 9/span 4
}

.devsite-landing-row.devsite-landing-row-1-up .devsite-landing-row-item-description {
  margin-top: 0
}

.devsite-landing-row-1-up .devsite-landing-row-item-no-media .devsite-landing-row-item-description {
  grid-column: var(--devsite-1-up-no-media-description-grid-column)
}

.devsite-landing-row-50 .devsite-landing-row-item-description {
  grid-column: 1/span 6
}

.devsite-landing-row-50 .devsite-landing-row-item-media {
  grid-column: var(--devsite-row-50-media-grid-column,7/span 6)
}

.devsite-landing-row-50 .devsite-landing-row-item-media-left {
  grid-column: var(--devsite-row-50-media-left-grid-column,1/span 6)
}

.devsite-landing-row-50 .devsite-landing-row-item-media-left+.devsite-landing-row-item-description {
  grid-column: 7/span 6
}

.devsite-landing-row-67 .devsite-landing-row-item-description {
  grid-column: var(--devsite-row-67-description-grid-column,1/span 8)
}

.devsite-landing-row-67 .devsite-landing-row-item-media {
  grid-column: var(--devsite-row-67-media-grid-column,9/span 4)
}

.devsite-landing-row-67 .devsite-landing-row-item-media-left {
  grid-column: var(--devsite-row-67-media-left-grid-column,1/span 4)
}

.devsite-landing-row-67 .devsite-landing-row-item-media-left+.devsite-landing-row-item-description {
  grid-column: var(--devsite-row-67-description-left-grid-column,5/span 8)
}

.devsite-landing-row-75 .devsite-landing-row-item-description {
  grid-column: 1/span 9
}

.devsite-landing-row-75 .devsite-landing-row-item-media {
  grid-column: var(--devsite-row-75-media-grid-column,10/span 3)
}

.devsite-landing-row-75 .devsite-landing-row-item-media-left {
  grid-column: var(--devsite-row-75-media-left-grid-column,1/span 3)
}

.devsite-landing-row-75 .devsite-landing-row-item-media-left+.devsite-landing-row-item-description {
  grid-column: 4/span 9
}

.devsite-landing-row-100 .devsite-landing-row-group,.devsite-landing-row-100 .devsite-landing-row-item-media {
  width: 100%
}

.devsite-landing-row-100 .devsite-landing-row-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.devsite-landing-row-100 .devsite-landing-row-item-media+.devsite-landing-row-item-description {
  margin-bottom: 32px
}

@media screen and (max-width: 840px) {
  .devsite-landing-row-1-up .devsite-landing-row-item-description,.devsite-landing-row-1-up .devsite-landing-row-item-media-left {
      grid-column:1;
      grid-row: 1;
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -moz-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1
  }

  .devsite-landing-row-1-up .devsite-landing-row-item-media-left+.devsite-landing-row-item-description,.devsite-landing-row-1-up .devsite-landing-row-item-media:not(.devsite-landing-row-item-media-left) {
      grid-column: 2
  }
}

@media screen and (max-width: 600px) {
  .devsite-landing-row-1-up .devsite-landing-row-item {
      display:var(--devsite-item-display,block)
  }
}

.devsite-landing-row-item-buttons {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: -12px;
  padding-top: 8px
}

.devsite-landing-row-1-up.devsite-landing-row-hero .devsite-landing-row-item-buttons {
  padding-top: var(--devsite-landing-row-hero-buttons-padding-top,32px)
}

.devsite-landing-row-item-buttons .button {
  margin: 4px 4px 4px 12px
}

.devsite-landing-row-item-buttons .button>.material-icons {
  top: -1px
}

.devsite-landing-row-item-buttons .button-white:not(.button-raised),.devsite-landing-row-item-buttons .button-white:not(.button-raised)+.button-white:not(.button-raised) {
  margin: 0 4px
}

.devsite-landing-row-cta .devsite-landing-row-item-buttons {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 24px 0 0
}

p+.devsite-landing-row-item-buttons {
  margin-top: -8px
}

.devsite-landing-row-item-media {
  border-radius: var(--devsite-item-media-border-radius);
  height: var(--devsite-item-media-container-height);
  margin: var(--devsite-item-media-margin,0);
  min-width: 0;
  max-height: var(--devsite-item-media-max-height);
  overflow: var(--devsite-item-media-overflow);
  padding: var(--devsite-item-media-padding,0);
  width: var(--devsite-item-media-container-width)
}

.devsite-landing-row-item-code devsite-code {
  margin: 0
}

.devsite-landing-row-item-video {
  display: block;
  width: 100%
}

.devsite-landing-row-item-description {
  color: var(--devsite-text-color,inherit);
  max-width: var(--devsite-item-text-max-width);
  padding: var(--devsite-item-text-padding);
  text-align: var(--devsite-item-text-align)
}

.devsite-landing-row-item-media+.devsite-landing-row-item-description {
  margin: var(--devsite-item-description-margin,32px 0 0)
}

.devsite-landing-row-item[description-position=left] .devsite-landing-row-item-description,.devsite-landing-row-item[description-position=left] .devsite-landing-row-item-media,.devsite-landing-row-item[description-position=right] .devsite-landing-row-item-description,.devsite-landing-row-item[description-position=right] .devsite-landing-row-item-media {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 var(--devsite-item-media-width,calc(50% - 12px));
  -moz-box-flex: 0;
  -ms-flex: 0 0 var(--devsite-item-media-width,calc(50% - 12px));
  flex: 0 0 var(--devsite-item-media-width,calc(50% - 12px));
  margin: 0
}

.devsite-landing-row-item[description-position=left] .devsite-landing-row-item-media {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -moz-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2
}

.devsite-landing-row-item[description-position=left] .devsite-landing-row-item-description {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -moz-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1
}

.devsite-landing-row-item[background] .devsite-landing-row-item-description,.devsite-landing-row-item[background][description-position=left] .devsite-landing-row-item-description,.devsite-landing-row-item[background][description-position=right] .devsite-landing-row-item-description {
  padding: var(--devsite-item-description-padding,16px)
}

[dir=ltr] .devsite-landing-row-cards .devsite-landing-row-item[description-position=left] .devsite-landing-row-item-description,[dir=ltr] .devsite-landing-row-item[background][description-position=left] .devsite-landing-row-item-description {
  padding-right: 0
}

[dir=rtl] .devsite-landing-row-cards .devsite-landing-row-item[description-position=left] .devsite-landing-row-item-description,[dir=rtl] .devsite-landing-row-item[background][description-position=left] .devsite-landing-row-item-description {
  padding-left: 0
}

[dir=ltr] .devsite-landing-row-cards .devsite-landing-row-item[description-position=right] .devsite-landing-row-item-description,[dir=ltr] .devsite-landing-row-item[background][description-position=right] .devsite-landing-row-item-description {
  padding-left: 0
}

[dir=rtl] .devsite-landing-row-cards .devsite-landing-row-item[description-position=right] .devsite-landing-row-item-description,[dir=rtl] .devsite-landing-row-item[background][description-position=right] .devsite-landing-row-item-description {
  padding-right: 0
}

.devsite-landing-row-item[description-position=top] .devsite-landing-row-item-media {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -moz-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2
}

.devsite-landing-row-item[description-position=top] .devsite-landing-row-item-description {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -moz-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1
}

.devsite-landing-row-item[description-position=top] .devsite-landing-row-item-media+.devsite-landing-row-item-description {
  margin: var(--devsite-item-description-top-margin-override,var(--devsite-item-description-top-margin,0 0 32px))
}

.devsite-landing-row-item-body,.devsite-landing-row-item-description {
  -webkit-box-align: var(--devsite-item-description-align-items);
  -webkit-align-items: var(--devsite-item-description-align-items);
  -moz-box-align: var(--devsite-item-description-align-items);
  -ms-flex-align: var(--devsite-item-description-align-items);
  align-items: var(--devsite-item-description-align-items);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: var(--devsite-item-description-height,auto);
  min-width: 0
}

.devsite-landing-row-item-body {
  display: var(--devsite-item-body-display,flex);
  grid: var(--devsite-item-body-grid);
  grid-gap: var(--devsite-item-body-grid-gap)
}

.devsite-landing-row-item-body h3 {
  grid-area: heading
}

.devsite-landing-row-item-buttons {
  grid-area: buttons;
  margin: var(--devsite-buttons-margin,auto 0 -8px);
  padding: var(--devsite-buttons-padding,8px 0 0)
}

[dir=ltr] .devsite-landing-row-item-buttons {
  margin-left: -12px
}

[dir=rtl] .devsite-landing-row-item-buttons {
  margin-right: -12px
}

.devsite-landing-row h3:first-child,.devsite-landing-row h3:first-of-type,.devsite-landing-row h4+p,.devsite-landing-row h4:first-child,.devsite-landing-row h5:first-child,.devsite-landing-row h6:first-child,.devsite-landing-row p:first-child,.devsite-landing-row-item-description h2,.devsite-landing-row-large-headings h3 {
  margin-top: 0
}

.devsite-landing-row-item-description-content {
  font: var(--devsite-description-content-font,inherit);
  grid-area: content
}

.devsite-landing-row-item-description-content>:last-child {
  margin-bottom: 0
}

.devsite-landing-row-item-centered .devsite-landing-row-item-description-content,.devsite-landing-row-item-centered h3 {
  text-align: center
}

.devsite-landing-row-item-centered .devsite-landing-row-item-buttons {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

@media screen and (max-width: 840px) {
  .devsite-landing-row-item[description-position] .devsite-landing-row-item-description,.devsite-landing-row-item[description-position] .devsite-landing-row-item-media {
      max-width:none
  }

  .devsite-landing-row-item[description-position] .devsite-landing-row-item-media {
      -webkit-align-self: var(--devsite-item-media-align-self);
      -ms-flex-item-align: var(--devsite-item-media-align-self);
      align-self: var(--devsite-item-media-align-self);
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -moz-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      margin: var(--devsite-item-media-margin,0);
      -webkit-box-ordinal-group: NaN;
      -webkit-order: var(--devsite-item-media-order,1);
      -moz-box-ordinal-group: NaN;
      -ms-flex-order: var(--devsite-item-media-order,1);
      order: var(--devsite-item-media-order,1);
      width: var(--devsite-item-media-width)
  }

  .devsite-landing-row-item[description-position] .devsite-landing-row-item-description {
      -webkit-box-ordinal-group: NaN;
      -webkit-order: var(--devsite-item-description-order,2);
      -moz-box-ordinal-group: NaN;
      -ms-flex-order: var(--devsite-item-description-order,2);
      order: var(--devsite-item-description-order,2)
  }

  .devsite-landing-row-item[description-position=top] .devsite-landing-row-item-media {
      -webkit-box-ordinal-group: 3;
      -webkit-order: 2;
      -moz-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2
  }

  .devsite-landing-row-item[description-position=top] .devsite-landing-row-item-description {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -moz-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1
  }

  [dir] .devsite-landing-row-cards .devsite-landing-row-item[description-position] .devsite-landing-row-item-description,[dir] .devsite-landing-row-item[background][description-position] .devsite-landing-row-item-description {
      padding: var(--devsite-item-description-padding,16px)
  }
}

@media screen and (max-width: 600px) {
  .devsite-landing-row-1-up .devsite-landing-row-item-media+.devsite-landing-row-item-description {
      margin:var(--devsite-item-description-margin,32px 0 0);
      padding: 0
  }
}

.devsite-landing-row-item-custom-image {
  aspect-ratio: 16/9
}

.devsite-landing-row-item-custom-image,.devsite-landing-row-item-custom-image-icon-wrapper {
  display: grid;
  place-content: center
}

.devsite-landing-row-item-custom-image:not([background]) {
  background-color: var(--devsite-background-color,var(--devsite-primary-color,var(--devsite-primary-text-color)))
}

.devsite-landing-row-item-custom-image[background=grey] {
  background: var(--devsite-background-color,var(--devsite-background-3))
}

.devsite-landing-row-item-custom-image[background=white] {
  background: var(--devsite-background-1)
}

.devsite-landing-row-item-custom-image-icon-container[background],.devsite-landing-row-no-image-background .devsite-landing-row-item-custom-image:not([background]) {
  background: 0
}

.devsite-landing-row-item-custom-image-icon {
  color: var(--devsite-inverted-text-color);
  font-size: var(--devsite-custom-image-icon-font-size);
  max-height: var(--devsite-custom-image-icon-max-height);
  width: var(--devsite-custom-image-icon-width)
}

.devsite-landing-row-item-custom-image[background=grey]:not([foreground]) .devsite-landing-row-item-custom-image-icon,.devsite-landing-row-item-custom-image[background=white]:not([foreground]) .devsite-landing-row-item-custom-image-icon {
  color: var(--devsite-icon-color,var(--devsite-secondary-text-color))
}

.devsite-landing-row-item-custom-image-icon.material-icons {
  opacity: .8
}

.devsite-landing-row-item-description-callout {
  font-weight: 700
}

.devsite-landing-row-item-description-feature {
  margin-top: 16px;
  position: relative
}

.devsite-landing-row-item-description-feature+.devsite-landing-row-item-description-feature {
  margin: 0
}

.devsite-landing-row-item-description-feature-link {
  border-bottom: var(--devsite-secondary-border);
  font-weight: 500;
  padding: 12px 0 11px
}

.devsite-landing-row-item-description-feature-tooltip {
  background: #455a64;
  color: hsla(0,0%,100%,.7);
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);
  font: 14px/20px var(--devsite-primary-font-family);
  min-width: 200px;
  opacity: 0;
  padding: 24px;
  position: absolute;
  -webkit-transition: opacity .2s,visibility .2s;
  transition: opacity .2s,visibility .2s;
  visibility: hidden;
  width: 67%;
  z-index: 1020
}

.no-touch .devsite-landing-row-item-description-feature-link:hover+.devsite-landing-row-item-description-feature-tooltip {
  opacity: 1;
  visibility: visible
}

.devsite-landing-row-item-description-feature-tooltip:before {
  border-bottom: 8px solid #455a64;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  content: "";
  position: absolute;
  top: -8px
}

.devsite-landing-row-item-description-feature-tooltip h3,.devsite-landing-row-large-headings .devsite-landing-row-item-description-feature-tooltip h3 {
  color: #fff;
  font: 14px/20px var(--devsite-primary-font-family);
  margin-bottom: 8px;
  padding: 0
}

.devsite-landing-row-item-image {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  height: var(--devsite-item-image-container-height);
  -webkit-transform: var(--devsite-item-image-transform);
  transform: var(--devsite-item-image-transform);
  width: var(--devsite-item-image-container-width)
}

.devsite-landing-row-item-image:not([background]) {
  background: var(--devsite-background-4)
}

.devsite-landing-row-item-image img {
  min-width: var(--devsite-item-image-min-width);
  vertical-align: middle;
  width: var(--devsite-item-image-width,100%)
}

.devsite-landing-row-item-image a {
  display: block
}

.devsite-landing-row-no-image-background .devsite-landing-row-item-image:not([background]) {
  background: 0
}

.devsite-landing-row-item-list {
  padding: 0
}

.devsite-landing-row-item-description-content+.devsite-landing-row-item-list {
  margin-top: 32px
}

.devsite-landing-row-item-list-item {
  list-style: none
}

.devsite-landing-row-item-list-item-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

.devsite-landing-row-item-list-item-content[icon-position=top] {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.devsite-landing-row-item-list-item-icon-container,.devsite-landing-row-item-list-item-icon-container[background] {
  color: var(--devsite-foreground-color,var(--devsite-icon-color,var(--devsite-secondary-text-color)))
}

.devsite-landing-row-item-list-item-icon-container {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  height: 40px;
  margin-block:0;margin-inline:0 20px;-webkit-transition: background .2s,box-shadow .2s,color .2s;
  transition: background .2s,box-shadow .2s,color .2s;
  width: 40px
}

.devsite-landing-row-item-list-item-icon {
  font-size: 32px;
  height: 32px;
  width: 32px
}

.devsite-landing-row-item-list-item-icon-container[background] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-background-color,var(--devsite-primary-color,var(--devsite-primary-text-color)));
  border-radius: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.devsite-landing-row-item-list-item-icon-container[background] .devsite-landing-row-item-list-item-icon {
  font-size: 24px;
  height: 24px;
  width: 24px
}

.devsite-landing-row-item-list h4 {
  font: 400 16px/20px var(--devsite-primary-font-family)
}

.devsite-landing-row .devsite-landing-row-item-list h4 {
  margin: 0 0 4px
}

.devsite-landing-row-item-list-item-description {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font: 400 14px/20px var(--devsite-primary-font-family);
  max-width: calc(100% - 40px)
}

@media screen and (max-width: 840px) {
  .devsite-landing-row-item-list-item-description {
      max-width:none
  }
}

.devsite-landing-row-item-list-item:not(:last-child) .devsite-landing-row-item-list-item-description-content {
  margin-bottom: 24px
}

[background] :focus>.devsite-landing-row-item-list-item-icon-container,[background] :link>.devsite-landing-row-item-list-item-icon-container:hover {
  text-decoration: none
}

:focus .devsite-landing-row-item-list-item-content .devsite-landing-row-item-list-item-icon-container[foreground=theme],:link .devsite-landing-row-item-list-item-icon-container[foreground=theme]:hover {
  color: var(--devsite-icon-color-hover,var(--devsite-primary-color,var(--devsite-inverted-text-rgba)))
}

[foreground] :focus .devsite-landing-row-item-list-item-content .devsite-landing-row-item-list-item-icon-container,[foreground] :link .devsite-landing-row-item-list-item-content:hover .devsite-landing-row-item-list-item-icon-container {
  color: hsla(210,6%,63%,.5)
}

[background] :focus .devsite-landing-row-item-list-item-content .devsite-landing-row-item-list-item-icon-container,[background] :link .devsite-landing-row-item-list-item-content:hover .devsite-landing-row-item-list-item-icon-container {
  color: var(--devsite-icon-color-hover,var(--devsite-inverted-text-rgba))
}

:link .devsite-landing-row-item-list-item-description h4+p {
  color: var(--devsite-primary-text-color);
  text-decoration: none
}

[background] :link .devsite-landing-row-item-list-item-description h4+p {
  color: var(--devsite-text-color,var(--devsite-inverted-text-color))
}

:focus .devsite-landing-row-item-list-item-content .devsite-landing-row-item-list-item-icon-container[background],:link .devsite-landing-row-item-list-item-content:hover .devsite-landing-row-item-list-item-icon-container[background] {
  background: var(--devsite-inverted-text-rgba);
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color)
}

.devsite-landing-row :focus .devsite-landing-row-item-list-item-description>:first-child,[background] :link .devsite-landing-row-item-list-item-description>:first-child {
  text-decoration: underline
}

.devsite-landing-row-item-labels>a,.devsite-landing-row-item-labels>span {
  color: var(--devsite-label-color,inherit);
  display: inline-block;
  font: var(--devsite-label-font,500 11px/16px var(--devsite-primary-font-family));
  letter-spacing: var(--devsite-label-letter-spacing,.8px);
  margin: var(--devsite-label-margin,0 0 8px);
  text-transform: var(--devsite-label-text-transform,uppercase)
}

.devsite-landing-row-item-labels>a+a,.devsite-landing-row-item-labels>a+span,.devsite-landing-row-item-labels>span+a,.devsite-landing-row-item-labels>span+span {
  margin-left: 8px
}

.devsite-landing-row-item-labels>a[background],.devsite-landing-row-item-labels>span[background] {
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 4px 8px
}

.devsite-landing-row-column>.devsite-landing-row-item:nth-of-type(n+2) {
  margin: 32px 0 0
}

.devsite-landing-row-item {
  -webkit-box-align: var(--devsite-item-align-items);
  -webkit-align-items: var(--devsite-item-align-items);
  -moz-box-align: var(--devsite-item-align-items);
  -ms-flex-align: var(--devsite-item-align-items);
  align-items: var(--devsite-item-align-items);
  border: var(--devsite-item-border);
  border-radius: var(--devsite-item-border-radius);
  display: var(--devsite-item-display,flex);
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: var(--devsite-item-flex-direction,column);
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: var(--devsite-item-flex-direction,column);
  flex-direction: var(--devsite-item-flex-direction,column);
  gap: var(--devsite-item-gap);
  -webkit-box-pack: var(--devsite-item-justify-content);
  -webkit-justify-content: var(--devsite-item-justify-content);
  -moz-box-pack: var(--devsite-item-justify-content);
  -ms-flex-pack: var(--devsite-item-justify-content);
  justify-content: var(--devsite-item-justify-content);
  max-height: var(--devsite-item-max-height);
  max-width: 100%;
  position: var(--devsite-item-position,initial);
  z-index: var(--devsite-item-z-index,auto)
}

.devsite-landing-row-item[description-position=left],.devsite-landing-row-item[description-position=right] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.devsite-landing-row-column,.devsite-landing-row-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0;
  -moz-box-flex: 1;
  -ms-flex: 1 0;
  flex: 1 0;
  min-width: 0
}

.devsite-landing-row-column>.devsite-landing-row-item {
  display: block
}

.devsite-landing-row-item-hidden {
  visibility: hidden
}

@media screen and (max-width: 840px) {
  .devsite-landing-row-item[description-position] {
      -webkit-box-orient:vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -moz-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start
  }
}

@media screen and (max-width: 600px) {
  .devsite-landing-row-item[description-position=top] {
      display:-webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column
  }
}

.devsite-landing-row-logos .devsite-landing-row-item-custom-image {
  aspect-ratio: unset;
  height: 96px
}

.devsite-landing-row-logos .devsite-landing-row-item-custom-image:not([background]) {
  background: 0
}

.devsite-landing-row-logos .devsite-landing-row-item-custom-image-icon {
  opacity: 1
}

.devsite-landing-row-logos .devsite-landing-row-item-description {
  margin: 0;
  text-align: center
}

@media screen and (max-width: 840px) {
  .devsite-landing-row-logos.devsite-landing-row-3-up .devsite-landing-row-group {
      grid-template-columns:repeat(3,1fr)
  }

  .devsite-landing-row-logos.devsite-landing-row-4-up .devsite-landing-row-group {
      grid-template-columns: repeat(4,1fr)
  }
}

@media screen and (max-width: 600px) {
  .devsite-landing-row-logos.devsite-landing-row-2-up .devsite-landing-row-group,.devsite-landing-row-logos.devsite-landing-row-4-up .devsite-landing-row-group,.devsite-landing-row-logos.devsite-landing-row[header-position] .devsite-landing-row-group {
      grid-template-columns:repeat(2,1fr)
  }
}

.devsite-landing-row-1-up.devsite-landing-row-marquee,.devsite-landing-row-1-up.devsite-landing-row-marquee[background] {
  padding: 0
}

.devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-header {
  margin: 0;
  padding: 40px 0 0
}

.devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-item-description,.devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-item-media {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center
}

.devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-item-media {
  margin: 0
}

.devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-item-image {
  background: 0
}

.devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-item-description {
  padding: 40px 0
}

@media screen and (max-width: 840px) {
  .devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-item {
      display:block
  }

  .devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-item-description,.devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-item-media {
      width: 100%
  }

  .devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-item-description,.devsite-landing-row-1-up.devsite-landing-row-marquee .devsite-landing-row-item-media-left+.devsite-landing-row-item-description {
      margin: 0
  }
}

.devsite-landing-row {
  overflow: var(--devsite-landing-row-overflow);
  padding: var(--devsite-landing-row-padding)
}

.devsite-landing-row:not([background]) {
  background-color: var(--devsite-background-1)
}

body[layout=docs] .devsite-landing-row:first-of-type {
  border-radius: var(--devsite-first-row-border-radius,2px 2px 0 0)
}

body[layout=docs] .devsite-landing-row:last-of-type {
  border-radius: var(--devsite-last-row-border-radius,0 0 2px 2px)
}

.devsite-landing-row:not([background]):not(.devsite-landing-row-cta)+.devsite-landing-row:not([background]):not(.devsite-landing-row-cta):not([class^=devsite-landing-row-padding-]),.devsite-landing-row[background=grey]:not(.devsite-landing-row-cta)+[background=grey]:not(.devsite-landing-row-cta):not([class^=devsite-landing-row-padding-]),.devsite-landing-row[background=theme]+[background=theme]:not(.devsite-landing-row-cta):not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=blue-grey]+[background=blue-grey]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=blue-grey-dark]+[background=blue-grey-dark]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=cyan]+[background=cyan]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=deep-orange]+[background=deep-orange]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=deep-purple]+[background=deep-purple]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=google-blue]+[background=google-blue]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=google-green]+[background=google-green]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=google-red]+[background=google-red]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=google-yellow]+[background=google-yellow]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=indigo]+[background=indigo]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=orange]+[background=orange]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=pink]+[background=pink]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=purple]+[background=purple]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=teal]+[background=teal]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=blue]+[background=blue]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=green]+[background=green]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=light-blue]+[background=light-blue]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=light-green]+[background=light-green]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=navy]+[background=navy]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row[background=pale-blue]+[background=pale-blue]:not([class^=devsite-landing-row-padding-]) {
  padding-top: 0
}

.devsite-landing-row:not([background])+.devsite-landing-row-cta:not([class^=devsite-landing-row-padding-]) {
  padding-top: 40px
}

.devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-small {
  padding-top: 32px
}

.devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-medium {
  padding-top: 64px
}

.devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-large {
  padding-top: 96px
}

.devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-xlarge {
  padding-top: 128px
}

.devsite-landing-row-inner {
  border-radius: var(--devsite-landing-group-border-radius);
  margin: var(--devsite-landing-group-margin,0 auto);
  max-width: var(--devsite-landing-row-max-width,1488px);
  padding: var(--devsite-landing-group-padding)
}

.devsite-landing-row-group,.devsite-landing-row-html {
  margin: 0 auto
}

.devsite-landing-row-group {
  background: var(--devsite-landing-row-group-background);
  border: var(--devsite-landing-row-group-border);
  border-radius: var(--devsite-landing-row-group-border-radius);
  display: grid;
  grid: var(--devsite-landing-row-group-grid);
  grid-auto-rows: var(--devsite-grid-auto-rows);
  grid-gap: var(--devsite-landing-row-item-gap);
  max-width: var(--devsite-landing-row-group-max-width);
  padding: var(--devsite-landing-row-group-padding)
}

.devsite-landing-row-1-up .devsite-landing-row-group {
  display: block
}

.devsite-landing-row[header-position=left] .devsite-landing-row-inner,.devsite-landing-row[header-position=right] .devsite-landing-row-inner {
  display: grid;
  grid: var(--devsite-landing-row-inner-grid,1fr/repeat(3,1fr));
  grid-gap: var(--devsite-landing-row-item-gap)
}

.devsite-landing-row[header-position=left] .devsite-landing-row-group {
  grid-column: var(--devsite-landing-row-group-grid-column,2/span 2)
}

.devsite-landing-row[header-position=right] .devsite-landing-row-group {
  grid-column: var(--devsite-landing-row-group-grid-column,1/span 2);
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -moz-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1
}

@media screen and (max-width: 840px) {
  .devsite-landing-row[header-position] .devsite-landing-row-inner {
      display:block
  }

  .devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-large,.devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-medium,.devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-small,.devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-xlarge,.devsite-landing-row:not([background])+.devsite-landing-row-cta:not([class^=devsite-landing-row-padding-]) {
      padding-top: 24px
  }
}

@media screen and (max-width: 600px) {
  .devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-large,.devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-medium,.devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-small,.devsite-landing-row:not([background])+.devsite-landing-row-cta.devsite-landing-row-padding-xlarge,.devsite-landing-row:not([background])+.devsite-landing-row-cta:not([class^=devsite-landing-row-padding-]) {
      padding-top:16px
  }
}

[theme=web-theme] {
  --devsite-body-background: #fff;
  --devsite-background-3: #f8f9fa;
  --devsite-page-box-shadow: none;
  --devsite-heading-color: var(--devsite-primary-text-color);
  --devsite-link-text-decoration-hover: underline;
  --devsite-link-color: #3740ff;
  --devsite-toc-border: #d2d3d7;
  --devsite-toc-border-width: 1px;
  --devsite-header-lower-box-shadow: 0 1px #d2d3d7;
  --devsite-upper-tab-marker-color: #6001ff;
  --devsite-upper-tab-marker-color-inactive: #6001ff;
  --devsite-card-border-radius: 10px;
  --devsite-card-border: 1px solid #d2d3d7;
  --devsite-card-box-shadow: 0;
  --devsite-button-box-shadow: none;
  --devsite-button-color: var(--devsite-primary-color);
  --devsite-button-background-hover: #f8faff;
  --devsite-button-primary-box-shadow-hover: none
}

[theme=web-theme] .devsite-card,[theme=web-theme] .devsite-landing-row-cards .devsite-landing-row-item {
  --devsite-h3-font: var(--devsite-h2-font);
  --devsite-link-color: var(--devsite-heading-color)
}

[theme=web-theme] .devsite-landing-row-item {
  --devsite-foreground-color: var(--devsite-primary-text-color);
  --devsite-heading-color: var(--devsite-primary-text-color)
}

[theme=web-theme] devsite-footer-linkboxes {
  --devsite-footer-linkboxes-grid-template-columns: 1fr;
  --devsite-footer-linkboxes-padding: 8px 32px
}

@media (min-width: 1200px) {
  [theme=web-theme] devsite-footer-linkboxes {
      --devsite-footer-linkboxes-grid-template-columns:600px 1fr 1fr 1fr
  }
}

[theme=web-theme] .devsite-article figure {
  margin-top: 32px;
  margin-bottom: 32px
}

[theme=web-theme] .devsite-article figure>:not(figcaption) {
  display: block;
  margin-left: auto;
  margin-right: auto
}

[theme=web-theme] .devsite-article figure figcaption.wd-caption {
  text-align: center
}

.wd-narrow {
  max-width: 100ch;
  margin: auto
}

.wd-top-stroke {
  border-top: var(--devsite-primary-border)
}

.wd-switcher {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 16px
}

.wd-switcher>* {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-basis: calc(751248px - 99900%);
  -ms-flex-preferred-size: calc(751248px - 99900%);
  flex-basis: calc(751248px - 99900%)
}

.wd-switcher>:nth-last-child(n+3),.wd-switcher>:nth-last-child(n+3)~* {
  -webkit-flex-basis: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%
}

.wd-authors {
  --avatar-size: 65px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 2em
}

.wd-author {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 1em;
  line-height: calc(var(--avatar-size)/2)
}

.wd-author img {
  border-radius: 50%;
  height: var(--avatar-size,65px);
  width: var(--avatar-size,65px)
}

.wd-browser-compat {
  --icon-size: 1.5em;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  line-height: var(--icon-size)
}

.wd-browser-compat ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 1em;
  list-style: none;
  padding-inline:1em}

.wd-browser-compat li {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 1em;
  height: var(--icon-size);
  margin-left: 2em;
  min-width: var(--icon-size);
  padding-inline:.4em;text-align: center;
  vertical-align: middle
}

.wd-browser-compat li:before {
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  content: "";
  display: block;
  height: var(--icon-size);
  margin-left: -2.2em;
  position: absolute;
  width: var(--icon-size)
}

.wd-browser-compat [data-support=yes] {
  background: var(--devsite-success-notice-background);
  color: var(--devsite-success-notice-color)
}

.wd-browser-compat [data-support=no] {
  background: var(--devsite-warning-notice-background);
  color: var(--devsite-warning-notice-color)
}

.wd-browser-compat [data-support=deprecated] {
  background-color: var(--devsite-warning-notice-background);
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 14C2.0875 14 1.73438 13.8531 1.44062 13.5594C1.14687 13.2656 1 12.9125 1 12.5V2.5H0V1H4V0H8V1H12V2.5H11V12.491C11 12.9137 10.8531 13.2708 10.5594 13.5625C10.2656 13.8542 9.9125 14 9.5 14H2.5ZM9.5 2.5H2.5V12.5H9.5V2.5ZM4 11H5.5V4H4V11ZM6.5 11H8V4H6.5V11Z' fill='%23A50E0E'/%3E%3C/svg%3E%0A");
  color: var(--devsite-warning-notice-color)
}

.wd-browser-compat [data-support=preview] {
  background-color: var(--devsite-success-notice-background);
  background-image: url("data:image/svg+xml,%3Csvg width='18' height='12' viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 9.5C9.97222 9.5 10.7986 9.15972 11.4792 8.47917C12.1597 7.79861 12.5 6.97222 12.5 6C12.5 5.02778 12.1597 4.20139 11.4792 3.52083C10.7986 2.84028 9.97222 2.5 9 2.5C8.02778 2.5 7.20139 2.84028 6.52083 3.52083C5.84028 4.20139 5.5 5.02778 5.5 6C5.5 6.97222 5.84028 7.79861 6.52083 8.47917C7.20139 9.15972 8.02778 9.5 9 9.5ZM9 8C8.44444 8 7.97222 7.80556 7.58333 7.41667C7.19444 7.02778 7 6.55556 7 6C7 5.44444 7.19444 4.97222 7.58333 4.58333C7.97222 4.19444 8.44444 4 9 4C9.55556 4 10.0278 4.19444 10.4167 4.58333C10.8056 4.97222 11 5.44444 11 6C11 6.55556 10.8056 7.02778 10.4167 7.41667C10.0278 7.80556 9.55556 8 9 8ZM9 12C7.0195 12 5.21535 11.4549 3.58754 10.3646C1.95974 9.27431 0.763889 7.81944 0 6C0.763889 4.18056 1.95974 2.72569 3.58754 1.63542C5.21535 0.545139 7.0195 0 9 0C10.9805 0 12.7847 0.545139 14.4125 1.63542C16.0403 2.72569 17.2361 4.18056 18 6C17.2361 7.81944 16.0403 9.27431 14.4125 10.3646C12.7847 11.4549 10.9805 12 9 12ZM9 10.5C10.5556 10.5 11.9931 10.0972 13.3125 9.29167C14.6319 8.48611 15.6458 7.38889 16.3542 6C15.6458 4.61111 14.6319 3.51389 13.3125 2.70833C11.9931 1.90278 10.5556 1.5 9 1.5C7.44444 1.5 6.00694 1.90278 4.6875 2.70833C3.36806 3.51389 2.35417 4.61111 1.64583 6C2.35417 7.38889 3.36806 8.48611 4.6875 9.29167C6.00694 10.0972 7.44444 10.5 9 10.5Z' fill='%23F29900'/%3E%3C/svg%3E%0A");
  color: var(--devsite-success-notice-color)
}

.wd-browser-compat [data-support=flag] {
  background-color: var(--devsite-success-notice-background);
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='14' viewBox='0 0 12 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 14V0H7L7.5 2H12V10H7L6.5 8H1.5V14H0ZM8.16667 8.5H10.5V3.5H6.33333L5.83333 1.5H1.5V6.5H7.66667L8.16667 8.5Z' fill='%23F29900'/%3E%3C/svg%3E%0A");
  color: var(--devsite-success-notice-color)
}

.wd-browser-compat [data-browser=chrome]:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-10 -10 276 276'%3E%3ClinearGradient id='a' x1='145' x2='34' y1='253' y2='61' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231e8e3e'/%3E%3Cstop offset='1' stop-color='%2334a853'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='111' x2='222' y1='254' y2='62' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fcc934'/%3E%3Cstop offset='1' stop-color='%23fbbc04'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='17' x2='239' y1='80' y2='80' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23d93025'/%3E%3Cstop offset='1' stop-color='%23ea4335'/%3E%3C/linearGradient%3E%3Ccircle cx='128' cy='128' r='64' fill='%23fff'/%3E%3Cpath fill='url(%23a)' d='M96 183a64 64 0 0 1-23-23L17 64a128 128 0 0 0 111 192l55-96a64 64 0 0 1-87 23Z'/%3E%3Cpath fill='url(%23b)' d='M192 128a64 64 0 0 1-9 32l-55 96A128 128 0 0 0 239 64H128a64 64 0 0 1 64 64Z'/%3E%3Ccircle cx='128' cy='128' r='52' fill='%231a73e8'/%3E%3Cpath fill='url(%23c)' d='M96 73a64 64 0 0 1 32-9h111a128 128 0 0 0-222 0l56 96a64 64 0 0 1 23-87Z'/%3E%3C/svg%3E")
}

.wd-browser-compat [data-browser=firefox]:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cdefs%3E%3CradialGradient id='ff-b' cx='428.5' cy='55.1' r='501' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23ffbd4f'/%3E%3Cstop offset='.2' stop-color='%23ffac31'/%3E%3Cstop offset='.3' stop-color='%23ff9d17'/%3E%3Cstop offset='.3' stop-color='%23ff980e'/%3E%3Cstop offset='.4' stop-color='%23ff563b'/%3E%3Cstop offset='.5' stop-color='%23ff3750'/%3E%3Cstop offset='.7' stop-color='%23f5156c'/%3E%3Cstop offset='.8' stop-color='%23eb0878'/%3E%3Cstop offset='.9' stop-color='%23e50080'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-c' cx='245.4' cy='259.9' r='501' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.3' stop-color='%23960e18'/%3E%3Cstop offset='.3' stop-color='%23b11927' stop-opacity='.7'/%3E%3Cstop offset='.4' stop-color='%23db293d' stop-opacity='.3'/%3E%3Cstop offset='.5' stop-color='%23f5334b' stop-opacity='.1'/%3E%3Cstop offset='.5' stop-color='%23ff3750' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-d' cx='305.8' cy='-58.6' r='363' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23fff44f'/%3E%3Cstop offset='.3' stop-color='%23ffdc3e'/%3E%3Cstop offset='.5' stop-color='%23ff9d12'/%3E%3Cstop offset='.5' stop-color='%23ff980e'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-e' cx='190' cy='390.8' r='238.6' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.3' stop-color='%233a8ee6'/%3E%3Cstop offset='.5' stop-color='%235c79f0'/%3E%3Cstop offset='.7' stop-color='%239059ff'/%3E%3Cstop offset='1' stop-color='%23c139e6'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-f' cx='252.2' cy='201.3' r='126.5' gradientTransform='matrix(1 0 0 1 -48 31)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.2' stop-color='%239059ff' stop-opacity='0'/%3E%3Cstop offset='.3' stop-color='%238c4ff3' stop-opacity='.1'/%3E%3Cstop offset='.8' stop-color='%237716a8' stop-opacity='.5'/%3E%3Cstop offset='1' stop-color='%236e008b' stop-opacity='.6'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-g' cx='239.1' cy='34.6' r='171.6' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffe226'/%3E%3Cstop offset='.1' stop-color='%23ffdb27'/%3E%3Cstop offset='.3' stop-color='%23ffc82a'/%3E%3Cstop offset='.5' stop-color='%23ffa930'/%3E%3Cstop offset='.7' stop-color='%23ff7e37'/%3E%3Cstop offset='.8' stop-color='%23ff7139'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-h' cx='374' cy='-74.3' r='732.2' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23fff44f'/%3E%3Cstop offset='.5' stop-color='%23ff980e'/%3E%3Cstop offset='.6' stop-color='%23ff5634'/%3E%3Cstop offset='.7' stop-color='%23ff3647'/%3E%3Cstop offset='.9' stop-color='%23e31587'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-i' cx='304.6' cy='7.1' r='536.4' gradientTransform='rotate(84 303 4)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff44f'/%3E%3Cstop offset='.1' stop-color='%23ffe847'/%3E%3Cstop offset='.2' stop-color='%23ffc830'/%3E%3Cstop offset='.3' stop-color='%23ff980e'/%3E%3Cstop offset='.4' stop-color='%23ff8b16'/%3E%3Cstop offset='.5' stop-color='%23ff672a'/%3E%3Cstop offset='.6' stop-color='%23ff3647'/%3E%3Cstop offset='.7' stop-color='%23e31587'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-j' cx='235' cy='98.1' r='457.1' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23fff44f'/%3E%3Cstop offset='.5' stop-color='%23ff980e'/%3E%3Cstop offset='.6' stop-color='%23ff5634'/%3E%3Cstop offset='.7' stop-color='%23ff3647'/%3E%3Cstop offset='.9' stop-color='%23e31587'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-k' cx='355.7' cy='124.9' r='500.3' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23fff44f'/%3E%3Cstop offset='.2' stop-color='%23ffe141'/%3E%3Cstop offset='.5' stop-color='%23ffaf1e'/%3E%3Cstop offset='.6' stop-color='%23ff980e'/%3E%3C/radialGradient%3E%3ClinearGradient id='ff-a' x1='446.9' y1='76.8' x2='47.9' y2='461.8' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23fff44f'/%3E%3Cstop offset='.1' stop-color='%23ffe847'/%3E%3Cstop offset='.2' stop-color='%23ffc830'/%3E%3Cstop offset='.4' stop-color='%23ff980e'/%3E%3Cstop offset='.4' stop-color='%23ff8b16'/%3E%3Cstop offset='.5' stop-color='%23ff672a'/%3E%3Cstop offset='.5' stop-color='%23ff3647'/%3E%3Cstop offset='.7' stop-color='%23e31587'/%3E%3C/linearGradient%3E%3ClinearGradient id='ff-l' x1='442.1' y1='74.8' x2='102.6' y2='414.3' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.2' stop-color='%23fff44f' stop-opacity='.8'/%3E%3Cstop offset='.3' stop-color='%23fff44f' stop-opacity='.6'/%3E%3Cstop offset='.5' stop-color='%23fff44f' stop-opacity='.2'/%3E%3Cstop offset='.6' stop-color='%23fff44f' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M479 166c-11-25-32-52-49-60a249 249 0 0 1 25 73c-27-68-73-95-111-155a255 255 0 0 1-8-14 44 44 0 0 1-4-9 1 1 0 0 0 0-1 1 1 0 0 0-1 0c-60 35-81 101-83 134a120 120 0 0 0-66 25 71 71 0 0 0-6-5 111 111 0 0 1-1-58c-25 11-44 29-58 44-9-12-9-52-8-60l-8 4a175 175 0 0 0-24 21 210 210 0 0 0-22 26 203 203 0 0 0-32 73l-1 2-2 15a229 229 0 0 0-4 34v1a240 240 0 0 0 477 40l1-9c5-41 0-84-15-121zM202 355l3 1-3-1zm55-145zm198-31z' fill='url(%23ff-a)'/%3E%3Cpath d='M479 166c-11-25-32-52-49-60 14 26 22 53 25 72v1a207 207 0 0 1-206 279c-113-3-212-87-231-197-3-17 0-26 2-40-2 11-3 14-4 34v1a240 240 0 0 0 477 40l1-9c5-41 0-84-15-121z' fill='url(%23ff-b)'/%3E%3Cpath d='M479 166c-11-25-32-52-49-60 14 26 22 53 25 72v1a207 207 0 0 1-206 279c-113-3-212-87-231-197-3-17 0-26 2-40-2 11-3 14-4 34v1a240 240 0 0 0 477 40l1-9c5-41 0-84-15-121z' fill='url(%23ff-c)'/%3E%3Cpath d='m362 195 1 1a130 130 0 0 0-22-29C266 92 322 5 331 0c-60 35-81 101-83 134l9-1c45 0 84 25 105 62z' fill='url(%23ff-d)'/%3E%3Cpath d='M257 210c-1 6-22 26-29 26-68 0-80 41-80 41 3 35 28 64 57 79l4 2 7 3a107 107 0 0 0 31 6c120 6 143-143 57-186 22-4 45 5 58 14-21-37-60-62-105-62l-9 1a120 120 0 0 0-66 25l17 16c16 16 58 33 58 35z' fill='url(%23ff-e)'/%3E%3Cpath d='M257 210c-1 6-22 26-29 26-68 0-80 41-80 41 3 35 28 64 57 79l4 2 7 3a107 107 0 0 0 31 6c120 6 143-143 57-186 22-4 45 5 58 14-21-37-60-62-105-62l-9 1a120 120 0 0 0-66 25l17 16c16 16 58 33 58 35z' fill='url(%23ff-f)'/%3E%3Cpath d='m171 151 5 3a111 111 0 0 1-1-58c-25 11-44 29-58 44 1 0 36 0 54 11z' fill='url(%23ff-g)'/%3E%3Cpath d='M18 261a242 242 0 0 0 231 197 207 207 0 0 0 206-279c8 56-20 110-64 146-86 71-169 43-186 31l-3-1c-50-24-71-70-67-110-42 0-57-35-57-35s38-28 89-4c46 22 90 4 90 4 0-2-42-19-58-35l-17-16a71 71 0 0 0-6-5l-5-3c-18-11-52-11-54-11-9-12-9-51-8-60l-8 4a175 175 0 0 0-24 21 210 210 0 0 0-22 26 203 203 0 0 0-32 73c0 1-9 38-5 57z' fill='url(%23ff-h)'/%3E%3Cpath d='M341 167a130 130 0 0 1 22 29 46 46 0 0 1 4 3c55 50 26 121 24 126 44-36 72-90 64-146-27-68-73-95-111-155a255 255 0 0 1-8-14 44 44 0 0 1-4-9 1 1 0 0 0 0-1 1 1 0 0 0-1 0c-9 5-65 92 10 167z' fill='url(%23ff-i)'/%3E%3Cpath d='M367 199a46 46 0 0 0-4-3l-1-1c-13-9-36-18-58-15 86 44 63 193-57 187a107 107 0 0 1-31-6 131 131 0 0 1-11-5c17 12 99 39 186-31 2-5 31-76-24-126z' fill='url(%23ff-j)'/%3E%3Cpath d='M148 277s12-41 80-41c7 0 28-20 29-26s-44 18-90-4c-51-24-89 4-89 4s15 35 57 35c-4 40 16 85 67 110l3 1c-29-15-54-44-57-79z' fill='url(%23ff-k)'/%3E%3Cpath d='M479 166c-11-25-32-52-49-60a249 249 0 0 1 25 73c-27-68-73-95-111-155a255 255 0 0 1-8-14 44 44 0 0 1-4-9 1 1 0 0 0 0-1 1 1 0 0 0-1 0c-60 35-81 101-83 134l9-1c45 0 84 25 105 62-13-9-36-18-58-14 86 43 63 192-57 186a107 107 0 0 1-31-6 131 131 0 0 1-11-5l-3-1 3 1c-29-15-54-44-57-79 0 0 12-41 80-41 7 0 28-20 29-26 0-2-42-19-58-35l-17-16a71 71 0 0 0-6-5 111 111 0 0 1-1-58c-25 11-44 29-58 44-9-12-9-52-8-60l-8 4a175 175 0 0 0-24 21 210 210 0 0 0-22 26 203 203 0 0 0-32 73l-1 2-2 15a279 279 0 0 0-4 34v1a240 240 0 0 0 477 40l1-9c5-41 0-84-15-121zm-24 13z' fill='url(%23ff-l)'/%3E%3C/svg%3E")
}

.wd-browser-compat [data-browser=edge]:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 27600 27600'%3E%3ClinearGradient id='A' gradientUnits='userSpaceOnUse'/%3E%3ClinearGradient id='B' x1='6870' x2='24704' y1='18705' y2='18705' xlink:href='%23A'%3E%3Cstop offset='0' stop-color='%230c59a4'/%3E%3Cstop offset='1' stop-color='%23114a8b'/%3E%3C/linearGradient%3E%3ClinearGradient id='C' x1='16272' x2='5133' y1='10968' y2='23102' xlink:href='%23A'%3E%3Cstop offset='0' stop-color='%231b9de2'/%3E%3Cstop offset='.16' stop-color='%231595df'/%3E%3Cstop offset='.67' stop-color='%230680d7'/%3E%3Cstop offset='1' stop-color='%230078d4'/%3E%3C/linearGradient%3E%3CradialGradient id='D' cx='16720' cy='18747' r='9538' xlink:href='%23A'%3E%3Cstop offset='.72' stop-opacity='0'/%3E%3Cstop offset='.95' stop-opacity='.53'/%3E%3Cstop offset='1'/%3E%3C/radialGradient%3E%3CradialGradient id='E' cx='7130' cy='19866' r='14324' gradientTransform='matrix(.14843 -.98892 .79688 .1196 -8759 25542)' xlink:href='%23A'%3E%3Cstop offset='.76' stop-opacity='0'/%3E%3Cstop offset='.95' stop-opacity='.5'/%3E%3Cstop offset='1'/%3E%3C/radialGradient%3E%3CradialGradient id='F' cx='2523' cy='4680' r='20243' gradientTransform='matrix(-.03715 .99931 -2.12836 -.07913 13579 3530)' xlink:href='%23A'%3E%3Cstop offset='0' stop-color='%2335c1f1'/%3E%3Cstop offset='.11' stop-color='%2334c1ed'/%3E%3Cstop offset='.23' stop-color='%232fc2df'/%3E%3Cstop offset='.31' stop-color='%232bc3d2'/%3E%3Cstop offset='.67' stop-color='%2336c752'/%3E%3C/radialGradient%3E%3CradialGradient id='G' cx='24247' cy='7758' r='9734' gradientTransform='matrix(.28109 .95968 -.78353 .22949 24510 -16292)' xlink:href='%23A'%3E%3Cstop offset='0' stop-color='%2366eb6e'/%3E%3Cstop offset='1' stop-color='%2366eb6e' stop-opacity='0'/%3E%3C/radialGradient%3E%3Cpath id='H' d='M24105 20053a9345 9345 0 01-1053 472 10202 10202 0 01-3590 646c-4732 0-8855-3255-8855-7432 0-1175 680-2193 1643-2729-4280 180-5380 4640-5380 7253 0 7387 6810 8137 8276 8137 791 0 1984-230 2704-456l130-44a12834 12834 0 006660-5282c220-350-168-757-535-565z'/%3E%3Cpath id='I' d='M11571 25141a7913 7913 0 01-2273-2137 8145 8145 0 01-1514-4740 8093 8093 0 013093-6395 8082 8082 0 011373-859c312-148 846-414 1554-404a3236 3236 0 012569 1297 3184 3184 0 01636 1866c0-21 2446-7960-8005-7960-4390 0-8004 4166-8004 7820 0 2319 538 4170 1212 5604a12833 12833 0 007684 6757 12795 12795 0 003908 610c1414 0 2774-233 4045-656a7575 7575 0 01-6278-803z'/%3E%3Cpath id='J' d='M16231 15886c-80 105-330 250-330 566 0 260 170 512 472 723 1438 1003 4149 868 4156 868a5954 5954 0 003027-839 6147 6147 0 001133-850 6180 6180 0 001910-4437c26-2242-796-3732-1133-4392-2120-4141-6694-6525-11668-6525-7011 0-12703 5635-12798 12620 47-3654 3679-6605 7996-6605 350 0 2346 34 4200 1007 1634 858 2490 1894 3086 2921 618 1067 728 2415 728 2952s-271 1333-780 1990z'/%3E%3Cuse fill='url(%23B)' xlink:href='%23H'/%3E%3Cuse fill='url(%23D)' opacity='.35' xlink:href='%23H'/%3E%3Cuse fill='url(%23C)' xlink:href='%23I'/%3E%3Cuse fill='url(%23E)' opacity='.4' xlink:href='%23I'/%3E%3Cuse fill='url(%23F)' xlink:href='%23J'/%3E%3Cuse fill='url(%23G)' xlink:href='%23J'/%3E%3C/svg%3E")
}

.wd-browser-compat [data-browser=safari]:before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='195 190 135 135'%3E%3Cdefs%3E%3ClinearGradient id='s-a' x1='132.6' x2='134.4' y1='111.7' y2='-105.3' xlink:href='%23s-b'%3E%3Cstop offset='0' stop-color='%23d2d2d2' /%3E%3Cstop offset='.5' stop-color='%23f2f2f2' /%3E%3Cstop offset='1' stop-color='%23fff' /%3E%3C/linearGradient%3E%3ClinearGradient id='s-b' gradientUnits='userSpaceOnUse' /%3E%3ClinearGradient id='s-c' x1='65.4' x2='67.4' y1='115.7' y2='17.1' xlink:href='%23s-b'%3E%3Cstop offset='0' stop-color='%23005ad5' /%3E%3Cstop offset='.2' stop-color='%230875f0' /%3E%3Cstop offset='.3' stop-color='%23218cee' /%3E%3Cstop offset='.6' stop-color='%2327a5f3' /%3E%3Cstop offset='.8' stop-color='%2325aaf2' /%3E%3Cstop offset='1' stop-color='%2321aaef' /%3E%3C/linearGradient%3E%3ClinearGradient id='s-d' x1='158.7' x2='176.3' y1='96.7' y2='79.5' xlink:href='%23s-b'%3E%3Cstop offset='0' stop-color='%23c72e24' /%3E%3Cstop offset='1' stop-color='%23fd3b2f' /%3E%3C/linearGradient%3E%3CradialGradient id='s-i' cx='-69.9' cy='69.3' r='54' gradientTransform='matrix(.9 -.01 .04 2.72 -9 -120)' xlink:href='%23s-b'%3E%3Cstop offset='0' stop-color='%2324a5f3' stop-opacity='0' /%3E%3Cstop offset='1' stop-color='%231e8ceb' /%3E%3C/radialGradient%3E%3CradialGradient id='s-j' cx='109.3' cy='13.8' r='93.1' gradientTransform='matrix(-.02 1.1 -1.04 -.02 137 -115)' xlink:href='%23s-b'%3E%3Cstop offset='0' stop-opacity='0' /%3E%3Cstop offset='1' stop-color='%235488d6' stop-opacity='0' /%3E%3Cstop offset='1' stop-color='%235d96eb' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='220' height='220' x='22' y='-107' fill='url(%23s-a)' ry='49' transform='matrix(.57 0 0 .57 187 256)' /%3E%3Cg transform='translate(194 190)'%3E%3Ccircle cx='67.8' cy='67.7' fill='url(%23s-c)' paint-order='stroke fill markers' r='54' /%3E%3Ccircle cx='-69.9' cy='69.3' fill='url(%23s-i)' transform='translate(138 -2)' r='54' /%3E%3C/g%3E%3Cellipse cx='120' cy='14.2' fill='url(%23s-j)' rx='93.1' ry='93.7' transform='matrix(.58 0 0 .58 192 250)' /%3E%3Cg transform='matrix(.58 0 0 .57 197 182)'%3E%3Cpath fill='%23cac7c8' d='M46 192h1l72-48-7-9-66 57Z' /%3E%3Cpath fill='%23fbfffc' d='M46 191v1l66-57-7-9-59 65Z' /%3E%3Cpath fill='url(%23s-d)' d='m119 144-7-9 66-57-59 66Z' /%3E%3Cpath fill='%23fb645c' d='m105 126 7 9 66-57-1-1-72 49Z' /%3E%3C/g%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-miterlimit='1' stroke-width='1.3' d='m287 278 3-2m-12-17 8-2m-8-3h4m-4-13 8 2m-8 3h4m-1-13 7 3m-4-11 7 4m-2-11 6 6m0-12 6 7m1-11 4 6m4-10 3 7m5-9 2 7m15-7-1 7m10-5-3 7m11-4-4 7m11-2-5 6m16 7-7 4m10 4-7 3m10 6-8 1m8 16-8-2m5 10-7-3m4 11-7-4m2 11-6-5m0 11-5-6m-2 11-4-7m-4 11-3-8m-6 10-1-8m-16 8 2-8m-10 5 3-7m-11 4 4-7m-11 2 5-6m-8 3 3-3m4 8 2-3m5 8 2-4m6 7 1-4m8 5v-4m8 4v-4m9 3-1-4m9 1-2-4m9 0-2-4m9-2-3-3m8-4-3-2m8-5-4-2m7-6-4-1m5-8h-4m4-8h-4m3-9-4 1m1-9-4 2m-1-9-3 2m-2-9-3 3m-4-8-2 3m-5-8-2 4m-6-6-1 3m-8-5v4m-8-4v4m-9-2 1 3m-9 0 2 3m-9 1 2 3m-9 2 3 3m-8 4 3 2m-8 5 4 2m-7 6 4 1m-4 25 4-1m-2 5 7-3m-6 7 4-2m-2 6 7-4m-13-21h8m41-41v-8m0 99v-8m49-42h-8' transform='translate(-65 8)' /%3E%3C/svg%3E")
}

.wd-caption {
  font-size: .8em;
  opacity: .8
}

.wd-compare {
  margin-bottom: 16px
}

.wd-embed {
  width: 100%
}

.wd-footer-promo {
  background: url('data:image/svg+xml,<svg viewBox="0 0 125 24" aria-label="web.dev" fill="currentColor" height="24" role="img" width="125" xmlns="http://www.w3.org/2000/svg"><path d="M0.625 19.9489C0.625 18.2638 1.99102 16.8977 3.67614 16.8977H19.9489C21.634 16.8977 23 18.2638 23 19.9489C23 21.634 21.634 23 19.9489 23H3.67614C1.99102 23 0.625 21.634 0.625 19.9489Z" fill="%2366CCFF"></path><path d="M1.51866 1.51866C2.7102 0.327114 4.64208 0.327114 5.83361 1.51866L13.97 9.65503C15.1615 10.8466 15.1615 12.7784 13.97 13.97L5.83361 22.1063C4.64208 23.2979 2.7102 23.2979 1.51866 22.1063C0.327114 20.9148 0.327114 18.9829 1.51866 17.7914L7.13797 12.1721C7.33655 11.9735 7.33655 11.6515 7.13797 11.4529L1.51866 5.83361C0.327114 4.64208 0.327114 2.7102 1.51866 1.51866Z" clip-rule="evenodd" fill="%230066FF" fill-rule="evenodd"></path><path d="M11.0422 16.8977L5.83361 22.1063C4.64208 23.2979 2.7102 23.2979 1.51866 22.1063C0.327114 20.9148 0.327114 18.9829 1.51866 17.7914L2.41233 16.8977H11.0422Z" fill="%23CC66FF"></path><path d="M19.9488 23C21.6339 23 23 21.634 23 19.9489C23 18.2638 21.6339 16.8977 19.9488 16.8977C18.2637 16.8977 16.8977 18.2638 16.8977 19.9489C16.8977 21.634 18.2637 23 19.9488 23Z" fill="%230066FF"></path><path d="M116.6 20.1H114.4L109.6 8.20005H112L115.5 17.4L119 8.20005H121.4L116.6 20.1V20.1ZM99.8 12.8H106.6C106.5 11.2 105.2 9.90005 103.2 9.90005C101.5 9.90005 100.2 11 99.8 12.8V12.8ZM103.4 20.5C99.9 20.5 97.4 17.8 97.4 14.2C97.4 10.6 99.9 7.90005 103.3 7.90005C106.8 7.90005 109.1 10.3 109.1 14.4V14.6H99.8C99.9 16.9 101.6 18.5 103.6 18.5C105 18.5 106.2 17.8 106.9 16.4L108.9 17.4C107.8 19.3 105.8 20.5 103.4 20.5V20.5ZM89.4 20.5C86.3 20.5 83.7 17.7 83.7 14.2C83.7 10.7 86.3 7.90005 89.4 7.90005C91.1 7.90005 92.7 8.70005 93.5 9.90005H93.6L93.5 8.30005V2.80005H95.7V20.1H93.6V18.5H93.5C92.6 19.7 91.1 20.5 89.4 20.5V20.5ZM89.7 18.5C91.9 18.5 93.5 16.8 93.5 14.2C93.5 11.7 91.9 9.90005 89.7 9.90005C87.6 9.90005 85.9 11.7 85.9 14.2C85.9 16.7 87.6 18.5 89.7 18.5ZM82.9 18.6C82.9 19.5 82.2 20.2001 81.2 20.2001C80.3 20.2001 79.5 19.4 79.5 18.6C79.5 17.7 80.3 17 81.2 17C82.2 17 82.9 17.7 82.9 18.6ZM72.4 18.5C74.5 18.5 76.2 16.7 76.2 14.2C76.2 11.7 74.5 9.90005 72.4 9.90005C70.2 9.90005 68.6 11.7 68.6 14.2C68.6 16.7 70.2 18.5 72.4 18.5ZM72.8 20.5C71.1 20.5 69.5 19.7 68.7 18.5H68.6V20.1H66.5V2.80005H68.7V8.30005L68.6 9.90005H68.7C69.5 8.70005 71 7.90005 72.8 7.90005C75.9 7.90005 78.5 10.7 78.5 14.2C78.4 17.7 75.9 20.5 72.8 20.5V20.5ZM55.4 12.8H62.2C62.1 11.2 60.8 9.90005 58.8 9.90005C57.1 9.90005 55.8 11 55.4 12.8V12.8ZM59 20.5C55.5 20.5 53 17.8 53 14.2C53 10.6 55.5 7.90005 58.9 7.90005C62.4 7.90005 64.7 10.3 64.7 14.4V14.6H55.4C55.5 16.9 57.2 18.5 59.2 18.5C60.6 18.5 61.7 17.8 62.5 16.4L64.5 17.4C63.4 19.3 61.4 20.5 59 20.5V20.5ZM52.7 8.30005L48.9 20.2001H46.6L43.6 11.1L40.7 20.2001H38.4L34.5 8.30005H36.8L39.4 17.3L42.3 8.30005H44.6L47.5 17.3L50.1 8.30005H52.7V8.30005Z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>') no-repeat 0 0;
  background-size: 130px;
  padding: 48px 112px 0 0
}

.wd-footer-promo h3 {
  display: none
}

.wd-label {
  opacity: .8
}

.wd-stats {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 0 24px;
  padding: 0
}

@media screen and (max-width: 1253px) {
  .wd-stats {
      display:block
  }
}

.wd-stats__item {
  background: var(--devsite-success-notice-background);
  border-radius: var(--devsite-card-border-radius);
  border: var(--devsite-success-notice-color);
  box-shadow: var(--devsite-card-box-shadow);
  color: var(--devsite-success-notice-color);
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  -moz-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  max-width: calc(33.33% - 16px);
  padding: 18px 20px 20px
}

.wd-stats__figure {
  font-size: 2em;
  font-weight: 500
}

.wd-stats__figure sub {
  font-weight: 400;
  vertical-align: baseline
}

.wd-about-cta .devsite-landing-row-item-icon {
  width: 236px
}

.wd-about-hero figure {
  max-width: 60ch;
  padding: 48px
}

.wd-about-team {
  --devsite-link-color: var(--devsite-heading-color);
  padding-top: 40px
}

.wd-about-team .devsite-landing-row-item-image {
  height: 20ch;
  margin: 40px auto;
  width: 20ch
}

.wd-about-team .devsite-landing-row-item-image img {
  border-radius: 50%
}

devsite-a11y-announce {
  background: transparent;
  color: transparent;
  display: block;
  left: -500vw;
  position: absolute;
  top: -500vh;
  z-index: -1
}

devsite-analytics>iframe {
  display: none
}

devsite-anselm {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

devsite-anselm .anselm-loading {
  display: none
}

devsite-anselm .anselm-loading devsite-spinner {
  margin: 0 auto
}

devsite-anselm[loading] .anselm-loading {
  display: block
}

devsite-anselm[type=playlist] .anselm-results {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  margin: 0 -12px
}

devsite-anselm h3:first-child {
  margin-bottom: 4px
}

devsite-anselm[active] .anselm-suggest-container input {
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color)
}

devsite-anselm[pending-suggestions] .anselm-suggest-container .anselm-suggest-search-icon {
  opacity: 0
}

devsite-anselm[pending-suggestions] .anselm-suggest-container .anselm-suggest-spinner {
  opacity: 1
}

devsite-anselm[has-query] .anselm-suggest-container .anselm-suggest-close-icon {
  opacity: 1;
  pointer-events: all
}

devsite-anselm[has-suggestions][active] .anselm-suggest-container input {
  border-radius: 2px 2px 0
}

devsite-anselm .anselm-suggest-container {
  max-width: 492px;
  margin-bottom: 36px
}

devsite-anselm .anselm-suggest-container form {
  position: relative
}

devsite-anselm .anselm-suggest-container input {
  border: 0!important;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color);
  color: #3c4043;
  line-height: 26px;
  padding: 8px 46px;
  width: 100%
}

devsite-anselm .anselm-suggest-container input:hover {
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color)
}

devsite-anselm .anselm-suggest-container input:focus {
  border: 0!important;
  padding-bottom: 8px
}

devsite-anselm .anselm-suggest-container .anselm-suggestions {
  background: var(--devsite-background-1);
  border-top: 1px solid #fff;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 3px 0 var(--devsite-elevation-key-shadow-color),0 6px 10px 4px var(--devsite-elevation-ambient-shadow-color);
  position: absolute;
  width: 100%;
  z-index: 100
}

devsite-anselm .anselm-suggest-container .anselm-suggestions:empty {
  box-shadow: none
}

devsite-anselm .anselm-suggest-container .anselm-suggest-result {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  line-height: 56px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

devsite-anselm .anselm-suggest-container .anselm-suggest-result a {
  color: #3c4043;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 0 16px
}

devsite-anselm .anselm-suggest-container .anselm-suggest-result a:focus,devsite-anselm .anselm-suggest-container .anselm-suggest-result a:hover,devsite-anselm .anselm-suggest-container .anselm-suggest-result.highlight a {
  text-decoration: none;
  background: #f1f3f4
}

devsite-anselm .anselm-suggest-input-container {
  position: relative
}

devsite-anselm .anselm-suggest-input-container .anselm-suggest-close-icon,devsite-anselm .anselm-suggest-input-container .anselm-suggest-search-icon,devsite-anselm .anselm-suggest-input-container .anselm-suggest-spinner {
  color: #5f6368;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  -webkit-transition: opacity .3s cubic-bezier(0,.795,0,1);
  transition: opacity .3s cubic-bezier(0,.795,0,1)
}

devsite-anselm .anselm-suggest-input-container .anselm-suggest-close-icon,devsite-anselm .anselm-suggest-input-container .anselm-suggest-close-icon:focus {
  text-decoration: none
}

devsite-anselm .anselm-suggest-input-container .anselm-suggest-search-icon {
  opacity: 1
}

devsite-anselm .anselm-suggest-input-container .anselm-suggest-search-icon,devsite-anselm .anselm-suggest-input-container .anselm-suggest-spinner {
  top: 8px;
  left: 16px
}

devsite-anselm .anselm-suggest-input-container .anselm-suggest-close-icon {
  top: 8px;
  right: 16px
}

devsite-anselm .anselm-more {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 20px 0 32px
}

devsite-anselm .anselm-cell {
  opacity: 0;
  -webkit-transition: opacity .3s cubic-bezier(.4,0,1,1);
  transition: opacity .3s cubic-bezier(.4,0,1,1)
}

devsite-anselm .anselm-cell[show] {
  opacity: 1
}

devsite-anselm .anselm-cell .bull {
  padding: 0 4px
}

devsite-anselm .anselm-cell .anselm-meta {
  font-family: var(--devsite-primary-font-family);
  font-size: 12px;
  color: #5f6368;
  letter-spacing: .3px;
  text-align: left;
  line-height: 16px
}

devsite-anselm .anselm-cell .anselm--tags span {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-family: var(--devsite-primary-font-family);
  font-size: 12px;
  color: #5f6368;
  letter-spacing: .3px;
  text-align: left;
  line-height: 16px;
  border: var(--devsite-primary-border);
  border-radius: 16px;
  height: 30px;
  padding: 12px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

devsite-anselm .anselm-cell--list p {
  font-family: var(--devsite-primary-font-family);
  font-size: 14px;
  color: #3c4043;
  letter-spacing: .2px;
  line-height: 20px;
  margin: 8px 0;
  text-align: left
}

devsite-anselm .anselm-card {
  background: var(--devsite-card-background);
  border: var(--devsite-card-border);
  border-radius: var(--devsite-card-border-radius);
  box-shadow: var(--devsite-card-box-shadow);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%
}

devsite-anselm .anselm-card .anselm-card--top {
  border-radius: var(--devsite-card-content-border-radius,1px 1px 0 0);
  height: 158px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative
}

devsite-anselm .anselm-card .anselm-card--top .badge-icon {
  width: 110px;
  height: 110px;
  position: relative;
  z-index: 2;
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0)
}

@-webkit-keyframes bounce {
  0% {
      opacity: 0;
      -webkit-transform: scale(.2);
      transform: scale(.2)
  }

  50% {
      opacity: 1;
      -webkit-transform: scale(1.3);
      transform: scale(1.3)
  }

  to {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1
  }
}

@keyframes bounce {
  0% {
      opacity: 0;
      -webkit-transform: scale(.2);
      transform: scale(.2)
  }

  50% {
      opacity: 1;
      -webkit-transform: scale(1.3);
      transform: scale(1.3)
  }

  to {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1
  }
}

devsite-anselm .anselm-card .anselm-card--top .badge-icon.bounce {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-name: bounce;
  animation-name: bounce;
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1)
}

devsite-anselm .anselm-card devsite-progress .devsite-progress--indeterminate .devsite-progress--indeterminate-2,devsite-anselm .anselm-card devsite-progress .devsite-progress--indeterminate .devsite-progress--indeterminate-4 {
  background: #dadce0
}

devsite-anselm .anselm-card .anselm-card--progress {
  overflow: hidden;
  height: 2px;
  background: #dadce0
}

devsite-anselm .anselm-card .anselm-card--progress .anselm-card--progress--bar {
  background: #fbbc04;
  height: 2px;
  -webkit-transform: translateX(-101%);
  transform: translateX(-101%);
  -webkit-transition: background .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: background .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),background .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),background .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1)
}

devsite-anselm .anselm-card .anselm-card--progress .anselm-card--progress--bar.completed {
  background: #34a853
}

devsite-anselm .anselm-card .anselm-card--progress--info:empty:before {
  content: " "
}

devsite-anselm .anselm-card .anselm-card--progress--info {
  font-size: 12px;
  font-weight: 700;
  color: #3c4043;
  padding: 0 16px;
  opacity: 0;
  -webkit-transform: translateY(12px);
  transform: translateY(12px);
  -webkit-transition: opacity .213s cubic-bezier(.4,0,1,1),-webkit-transform .213s cubic-bezier(.4,0,1,1);
  transition: opacity .213s cubic-bezier(.4,0,1,1),-webkit-transform .213s cubic-bezier(.4,0,1,1);
  transition: transform .213s cubic-bezier(.4,0,1,1),opacity .213s cubic-bezier(.4,0,1,1);
  transition: transform .213s cubic-bezier(.4,0,1,1),opacity .213s cubic-bezier(.4,0,1,1),-webkit-transform .213s cubic-bezier(.4,0,1,1)
}

devsite-anselm .anselm-card .anselm-card--progress--info.show {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: opacity .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: opacity .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),opacity .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),opacity .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1)
}

devsite-anselm .anselm-card .anselm-card--body {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0 16px
}

devsite-anselm .anselm-card .anselm--tags:not(:empty) {
  border-bottom: var(--devsite-primary-border);
  margin: 0 16px;
  padding: 0 0 16px
}

devsite-anselm .anselm-card .anselm-card--bottom {
  margin: 16px
}

devsite-anselm .anselm-card .anselm-card--summary {
  font-family: var(--devsite-primary-font-family);
  font-size: 12px;
  color: #5f6368;
  letter-spacing: .3px;
  text-align: left;
  line-height: 16px
}

devsite-anselm .anselm-card .anselm-card--actions {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

devsite-anselm .anselm-cell--card {
  -webkit-flex-basis: calc(33.33% - 24px);
  -ms-flex-preferred-size: calc(33.33% - 24px);
  flex-basis: calc(33.33% - 24px);
  margin: 12px
}

devsite-anselm .anselm-cell--list {
  margin-bottom: 32px
}

devsite-anselm .anselm-cell--list a {
  color: #1a73e8
}

devsite-anselm .anselm-no-results-found {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-top: 36px
}

devsite-anselm .anselm-no-results-found .no-results-text {
  -webkit-flex-basis: 50%;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  padding: 0 12px
}

devsite-anselm .anselm-no-results-found .no-results-text h3 {
  font-size: 28px;
  color: #3c4043;
  line-height: 36px;
  margin: 0
}

devsite-anselm .anselm-no-results-found .no-results-text p {
  margin: 0;
  padding: 8px 0 0;
  font-size: 14px;
  color: #5f6368;
  line-height: 20px
}

devsite-anselm .anselm-no-results-found .no-results-img {
  margin: 0 12px;
  padding: 0 12px;
  -webkit-flex-basis: 50%;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  background-image: url(../../images/not-found.svg);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  height: 206px
}

devsite-anselm .anselm-results-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

devsite-anselm .anselm-results-container .anselm-results-cell {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

devsite-anselm .anselm-results-container .anselm-featured-cell {
  display: none;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 292px;
  padding-left: 18px
}

devsite-anselm .anselm-results-container .anselm-featured-cell h4 {
  font-size: 10px;
  font-weight: 500;
  color: #5f6368;
  line-height: 16px;
  text-transform: uppercase
}

devsite-anselm.has-featured .anselm-no-results-found {
  display: block
}

devsite-anselm.has-featured .anselm-no-results-found .no-results-img {
  margin: 48px 12px;
  height: 295px
}

devsite-anselm.has-featured .anselm-no-results-found .no-results-text {
  text-align: center
}

devsite-anselm.has-featured .anselm-results-container .anselm-results-cell {
  max-width: 491px
}

devsite-anselm.has-featured .anselm-results-container .anselm-featured-cell {
  display: block
}

devsite-anselm .anselm--featured {
  border: var(--devsite-card-border);
  border-radius: var(--devsite-card-border-radius);
  box-shadow: var(--devsite-card-box-shadow);
  margin-bottom: 12px;
  padding: 16px
}

devsite-anselm .anselm--featured .topic__meta {
  border-top: 1px solid #dadce0;
  color: #3c4043;
  font-size: 12px;
  line-height: 16px;
  margin: 16px 0 8px;
  padding: 16px 0 0
}

devsite-anselm .anselm--featured .topic__updated {
  padding-top: 4px
}

@media screen and (max-width: 840px) {
  devsite-anselm .anselm-cell--card {
      -webkit-flex-basis:calc(50% - 24px);
      -ms-flex-preferred-size: calc(50% - 24px);
      flex-basis: calc(50% - 24px)
  }

  devsite-anselm.has-featured .anselm-results-container .anselm-featured-cell {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex
  }

  devsite-anselm .anselm-results-container {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -webkit-flex-direction: column-reverse;
      -moz-box-orient: vertical;
      -moz-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse
  }

  devsite-anselm .anselm-results-container .anselm-featured-cell {
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      overflow-x: auto;
      min-width: 100%;
      margin: 0 0 24px;
      padding: 24px 0 0;
      position: relative
  }

  devsite-anselm .anselm-results-container .anselm-featured-cell h4 {
      position: absolute;
      top: 0;
      left: 0
  }

  devsite-anselm .anselm-results-container .anselm--featured {
      min-width: 200px;
      margin-right: 8px;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      max-width: 300px
  }

  devsite-anselm .anselm-results-container .anselm--featured .devsite-landing-row-item-description {
      position: relative
  }

  devsite-anselm .anselm-results-container .anselm--featured a {
      position: absolute;
      right: 8px;
      top: 8px;
      padding: 0;
      height: 30px;
      width: 30px
  }

  devsite-anselm .anselm-results-container .anselm--featured a .devsite-landing-row-item-icon-container {
      width: 30px;
      height: 30px
  }

  devsite-anselm .anselm-results-container .anselm--featured a .devsite-landing-row-item-icon-container img {
      width: 30px;
      height: 30px;
      margin: 0
  }

  devsite-anselm .anselm-results-container .anselm--featured h3 {
      margin: 0
  }

  devsite-anselm .anselm-results-container .anselm--featured .devsite-landing-row-item-body a {
      position: static;
      margin: 12px;
      text-overflow: ellipsis;
      margin-right: 54px;
      width: auto;
      height: auto
  }

  devsite-anselm .anselm-results-container .anselm--featured .devsite-landing-row-item-body .topic__meta {
      margin-top: 0
  }

  devsite-anselm .anselm-results-container .anselm--featured .devsite-landing-row-item-body .devsite-landing-row-item-buttons,devsite-anselm .anselm-results-container .anselm--featured .devsite-landing-row-item-body p {
      display: none
  }
}

@media screen and (max-width: 600px) {
  devsite-anselm .anselm-cell--card {
      -webkit-flex-basis:calc(100% - 24px);
      -ms-flex-preferred-size: calc(100% - 24px);
      flex-basis: calc(100% - 24px)
  }

  devsite-anselm .anselm-no-results-found {
      margin-top: 12px;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap
  }

  devsite-anselm .anselm-no-results-found .no-results-img,devsite-anselm .anselm-no-results-found .no-results-text {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%
  }

  devsite-anselm .anselm-no-results-found .no-results-img {
      margin-top: 32px;
      height: 163px
  }
}

devsite-dialog[open].devsite-henhouse-dialog {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0
}

.devsite-henhouse-inner {
  background: var(--devsite-background-1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-top: 2px;
  overflow: hidden
}

.devsite-henhouse-spinner-container {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 240px
}

.devsite-credentials-spinner-region {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.devsite-henhouse-cross-container {
  height: 160px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -webkit-align-items: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

.devsite-henhouse-cross {
  margin: 16px;
  float: right;
  cursor: pointer
}

.devsite-apix-error {
  padding: 32px
}

.devsite-apix-controls {
  position: absolute;
  right: 8px;
  z-index: 1001
}

.devsite-apix-controls .button-flat {
  cursor: pointer!important
}

.devsite-apix-controls .devsite-dock-apix:before,.devsite-apix-controls .devsite-fullscreen-apix:before,.devsite-apix-controls .devsite-hide-apix:before {
  color: var(--devsite-primary-text-color)
}

.devsite-apix-controls .devsite-hide-apix:before {
  content: "close"
}

.devsite-apix-controls .devsite-fullscreen-apix:before {
  content: "fullscreen"
}

.devsite-apix-controls .devsite-dock-apix:before {
  content: "fullscreen_exit"
}

.apis-explorer {
  background: var(--devsite-background-3)
}

.devsite-apix {
  background: var(--devsite-background-3);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: height,transform
}

.devsite-apix:not(.dialog) .devsite-apix-controls {
  top: 24px
}

.devsite-apix:not(.dialog) .devsite-apix-controls .devsite-dock-apix {
  display: none
}

.devsite-apix.dialog {
  border-radius: 2px;
  box-shadow: 0 17px 17px rgba(0,0,0,.15),0 27px 55px rgba(0,0,0,.3);
  font: 14px/20px var(--devsite-primary-font-family);
  max-width: calc(100% - 48px);
  overflow: auto;
  padding: 8px;
  position: fixed;
  z-index: 10012;
  max-height: none!important
}

.devsite-apix.dialog .apis-explorer {
  height: 100%;
  min-height: 100%
}

.devsite-apix.dialog .devsite-fullscreen-apix,.devsite-apix.dialog .devsite-hide-apix {
  display: none
}

.devsite-has-apix .devsite-main-content {
  z-index: auto
}

.devsite-has-apix .devsite-main-content devsite-googler-buttons {
  z-index: 1003
}

@media screen and (min-width: 1201px) {
  .devsite-apix:not(.dialog) {
      box-shadow:0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28);
      display: none;
      max-height: 100vh;
      overflow: auto;
      position: fixed;
      right: 0;
      top: 96px;
      width: 400px;
      z-index: 1001
  }

  .devsite-apix.dialog {
      bottom: 20px;
      left: calc(50% - 576px);
      margin: 0;
      top: 50px;
      width: 1152px
  }

  .devsite-has-apix .devsite-apix {
      display: block
  }
}

@media screen and (max-width: 1200px) {
  .devsite-apix {
      display:block
  }

  .devsite-apix:not(.dialog) {
      margin-top: 32px;
      max-height: none!important;
      position: relative;
      -webkit-transform: none!important;
      transform: none!important;
      top: auto!important;
      height: auto!important
  }

  .devsite-apix.dialog {
      bottom: 20px;
      left: 24px;
      margin: 0;
      top: 50px;
      width: calc(100% - 48px)
  }

  .devsite-hide-apix {
      display: none
  }
}

.devsite-page-insights-dialog.has-dashboard {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding: 0;
  width: 100%
}

.devsite-page-insights-dialog.has-dashboard .devsite-dialog-contents {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding: 0
}

.devsite-page-insights-dialog.has-dashboard .dialog-title {
  -webkit-border-after: 1px solid #dadce0;
  border-block-end:1px solid #dadce0;display: grid;
  gap: 12px;
  grid-gap: 12px;
  grid-template-areas: "title message close";
  grid-template-columns: auto 1fr auto;
  -webkit-margin-after: 8px;
  margin-block-end:8px;padding-block:20px;padding-inline:24px;width: 100%
}

.devsite-page-insights-dialog.has-dashboard h3 {
  font: 400 18px/30px var(--devsite-headline-font-family);
  grid-area: title;
  text-align: initial
}

.devsite-page-insights-dialog.has-dashboard p {
  font: 14px/20px var(--devsite-primary-font-family);
  grid-area: message
}

.devsite-page-insights-dialog.has-dashboard h3,.devsite-page-insights-dialog.has-dashboard p {
  -webkit-align-self: baseline;
  -ms-flex-item-align: baseline;
  align-self: baseline;
  margin: 0
}

.devsite-page-insights-dialog.has-dashboard .devsite-dialog-close {
  align-self: flex-start;
  grid-area: close;
  margin: -4px
}

.devsite-page-insights-dialog.has-dashboard aside {
  display: grid;
  grid-template-columns: auto 1fr auto;
  -webkit-margin-after: 12px;
  margin-block-end:12px;-webkit-margin-before: 16px;
  margin-block-start:16px;margin-inline:auto;max-width: 800px
}

.devsite-page-insights-dialog.has-dashboard .dismiss-aside {
  background: var(--devsite-note-notice-background)
}

.devsite-page-insights-dialog.has-dashboard .dashboard-embed {
  height: 100%;
  width: 100%
}

.devsite-page-insights-dialog.has-link aside {
  -webkit-margin-after: 0;
  margin-block-end:0}

.devsite-page-insights-dialog.has-link .devsite-dialog-buttons {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-padding-after: 16px;
  padding-block-end:16px;-webkit-padding-before: 8px;
  padding-block-start:8px;padding-inline:16px}

@-webkit-keyframes badgeGrowIn {
  0% {
      -webkit-transform: scale(0);
      transform: scale(0)
  }

  to {
      -webkit-transform: scale(1.3);
      transform: scale(1.3)
  }
}

@-webkit-keyframes badgeGrowOut {
  0% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3)
  }

  to {
      -webkit-transform: scale(1);
      transform: scale(1)
  }
}

@-webkit-keyframes badgeFadeIn {
  0% {
      opacity: 0
  }

  12% {
      opacity: 0
  }

  87% {
      opacity: 100%
  }
}

@-webkit-keyframes counterHide {
  0% {
      opacity: 0
  }

  to {
      opacity: 0
  }
}

.devsite-claim-badge-dialog.devsite-claim-badge-dialog,devsite-badge-awarded.devsite-claim-badge-dialog {
  padding: 0
}

.devsite-claim-badge-dialog .card,devsite-badge-awarded .card {
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);
  border-radius: 5px;
  background: var(--devsite-background-1);
  display: block;
  max-width: 856px;
  border-top: 5px solid #1a73e8;
  position: relative;
  overflow: hidden;
  margin: 0 auto
}

.devsite-claim-badge-dialog .card .card-content,devsite-badge-awarded .card .card-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-height: calc(100vh - 32px);
  overflow: visible
}

.devsite-claim-badge-dialog .card .illustration-container,.devsite-claim-badge-dialog .card .text-container,devsite-badge-awarded .card .illustration-container,devsite-badge-awarded .card .text-container {
  width: 50%
}

@media screen and (max-width: 600px) {
  .devsite-claim-badge-dialog .card .illustration-container,.devsite-claim-badge-dialog .card .text-container,devsite-badge-awarded .card .illustration-container,devsite-badge-awarded .card .text-container {
      width:100%
  }
}

.devsite-claim-badge-dialog .card .profile-creation-container,devsite-badge-awarded .card .profile-creation-container {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  max-height: 50vh;
  border-top: 1px solid #e8eaed;
  padding: 16px 24px
}

.devsite-claim-badge-dialog .card .profile-creation-container p,devsite-badge-awarded .card .profile-creation-container p {
  margin: 8px 0;
  color: #3c4043;
  font-size: 14px;
  line-height: 22px
}

.devsite-claim-badge-dialog .card .profile-creation-container-email-options,devsite-badge-awarded .card .profile-creation-container-email-options {
  margin-top: 8px
}

.devsite-claim-badge-dialog .card .profile-creation-container-email-options .profile-creation-container-email-option,devsite-badge-awarded .card .profile-creation-container-email-options .profile-creation-container-email-option {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.devsite-claim-badge-dialog .card .profile-creation-container-email-options .profile-creation-container-email-option input,devsite-badge-awarded .card .profile-creation-container-email-options .profile-creation-container-email-option input {
  margin-top: 0
}

.devsite-claim-badge-dialog .card .profile-creation-container-email-options .profile-creation-container-email-option label,devsite-badge-awarded .card .profile-creation-container-email-options .profile-creation-container-email-option label {
  font-size: 14px
}

.devsite-claim-badge-dialog .card .spinner-container,devsite-badge-awarded .card .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: hsla(0,0%,100%,.8);
  z-index: 100;
  pointer-events: none;
  opacity: 0;
  -webkit-transition: opacity .3s cubic-bezier(.4,0,.2,1);
  transition: opacity .3s cubic-bezier(.4,0,.2,1)
}

.devsite-claim-badge-dialog .card .content-container,devsite-badge-awarded .card .content-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

@media screen and (max-width: 600px) {
  .devsite-claim-badge-dialog .card .content-container,devsite-badge-awarded .card .content-container {
      -webkit-box-orient:vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column
  }
}

.devsite-claim-badge-dialog .card .text-container,devsite-badge-awarded .card .text-container {
  padding: 36px 24px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

@media screen and (max-width: 600px) {
  .devsite-claim-badge-dialog .card .text-container,devsite-badge-awarded .card .text-container {
      padding:24px
  }
}

.devsite-claim-badge-dialog .illustration-container,devsite-badge-awarded .illustration-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 164px;
  min-width: 303px;
  height: 164px;
  width: 303px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  background-image: url(../images/badge-award-background.svg);
  background-size: 100% calc(100% + 2px);
  background-position: 1px -1px;
  background-repeat: no-repeat
}

.devsite-claim-badge-dialog .illustration-container.show .badge-icon,devsite-badge-awarded .illustration-container.show .badge-icon {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1)
}

.devsite-claim-badge-dialog .illustration-container.animate .badge-icon,devsite-badge-awarded .illustration-container.animate .badge-icon {
  -webkit-animation: badgeGrowIn .33s cubic-bezier(.75,0,.71,.97),badgeGrowOut .17s cubic-bezier(.85,-.14,.83,.83) .33s,badgeFadeIn .5s linear;
  animation: badgeGrowIn .33s cubic-bezier(.75,0,.71,.97),badgeGrowOut .17s cubic-bezier(.85,-.14,.83,.83) .33s,badgeFadeIn .5s linear
}

.devsite-claim-badge-dialog .illustration-container .badge-icon,devsite-badge-awarded .illustration-container .badge-icon {
  width: 124px;
  height: 124px;
  z-index: 1000;
  opacity: 0;
  -webkit-transform: scale(0,0,0);
  transform: scale(0,0,0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards
}

.devsite-claim-badge-dialog .illustration-container .badge-icon.incomplete,devsite-badge-awarded .illustration-container .badge-icon.incomplete {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%)
}

.devsite-claim-badge-dialog .illustration-container .badge-animation,devsite-badge-awarded .illustration-container .badge-animation {
  position: absolute;
  width: 195px;
  height: 170px;
  background-image: url(../images/badge-award-animation.gif);
  background-size: 100% 100%
}

.devsite-claim-badge-dialog .completed-title,devsite-badge-awarded .completed-title {
  font-size: 20px;
  margin-bottom: 8px;
  line-height: 28px;
  color: #000;
  font-family: var(--devsite-headline-font-family)
}

.devsite-claim-badge-dialog .claim-badge-text,.devsite-claim-badge-dialog .completed-text,.devsite-claim-badge-dialog .create-profile-text,.devsite-claim-badge-dialog .error-text,.devsite-claim-badge-dialog .not-eligible-text,.devsite-claim-badge-dialog .sign-in-text,devsite-badge-awarded .claim-badge-text,devsite-badge-awarded .completed-text,devsite-badge-awarded .create-profile-text,devsite-badge-awarded .error-text,devsite-badge-awarded .not-eligible-text,devsite-badge-awarded .sign-in-text {
  font-size: 14px
}

.devsite-claim-badge-dialog .buttons-container,devsite-badge-awarded .buttons-container {
  border-top: 1px solid #e8eaed;
  padding: 0 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

.devsite-claim-badge-dialog .buttons-container .buttons,devsite-badge-awarded .buttons-container .buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

.devsite-claim-badge-dialog .buttons-container .dismiss,devsite-badge-awarded .buttons-container .dismiss {
  position: relative;
  overflow: visible
}

@media screen and (max-width: 600px) {
  .devsite-claim-badge-dialog .buttons-container,devsite-badge-awarded .buttons-container {
      -webkit-box-orient:vertical;
      -webkit-box-direction: reverse;
      -webkit-flex-direction: column-reverse;
      -moz-box-orient: vertical;
      -moz-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
      padding-top: 0;
      text-align: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center
  }

  .devsite-claim-badge-dialog .buttons-container .button,devsite-badge-awarded .buttons-container .button {
      margin: 10px auto 0
  }

  .devsite-claim-badge-dialog .buttons-container .buttons,devsite-badge-awarded .buttons-container .buttons {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -moz-box-orient: horizontal;
      -moz-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      margin-top: 5px
  }
}

.devsite-claim-badge-dialog[loading] .card .spinner-container,devsite-badge-awarded[loading] .card .spinner-container {
  opacity: 1;
  pointer-events: all
}

.devsite-claim-badge-dialog .qr-code-container,devsite-badge-awarded .qr-code-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 225px;
  background-image: url(../images/claim-badge-dialog-background.png);
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-position: 50%;
  background-size: 700px
}

.devsite-claim-badge-dialog .qr-code-container canvas,devsite-badge-awarded .qr-code-container canvas {
  display: none
}

.devsite-claim-badge-dialog .qr-code-container img,devsite-badge-awarded .qr-code-container img {
  height: 150px;
  width: 150px;
  padding: 10px;
  background: var(--devsite-background-1)
}

.devsite-claim-badge-dialog .redeem-code-section,devsite-badge-awarded .redeem-code-section {
  padding: 18px 24px 0;
  margin-bottom: -15px
}

.devsite-claim-badge-dialog .redeem-code-title,devsite-badge-awarded .redeem-code-title {
  text-transform: uppercase;
  font-size: 10.5px;
  font-weight: 600;
  color: #80868b;
  margin-bottom: 3px
}

.devsite-claim-badge-dialog .redeem-code,devsite-badge-awarded .redeem-code {
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 12px;
  color: #000;
  padding: 8px 2px 8px 12px;
  border: 2px solid #1a73e8;
  border-radius: 4px;
  background-color: rgba(232,240,254,.6)
}

.devsite-claim-badge-dialog .illustration-container.animate .badge-icon-counter,devsite-badge-awarded .illustration-container.animate .badge-icon-counter {
  -webkit-animation: counterHide 1s,badgeGrowIn .33s cubic-bezier(.75,0,.71,.97) 1s,badgeGrowOut .17s cubic-bezier(.85,-.14,.83,.83) 1.33s,badgeFadeIn .5s linear 1s;
  animation: counterHide 1s,badgeGrowIn .33s cubic-bezier(.75,0,.71,.97) 1s,badgeGrowOut .17s cubic-bezier(.85,-.14,.83,.83) 1.33s,badgeFadeIn .5s linear 1s;
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1)
}

.devsite-claim-badge-dialog .illustration-container .badge-icon-counter,devsite-badge-awarded .illustration-container .badge-icon-counter {
  padding: 3px 10px;
  font-size: 14px;
  border-radius: 19px;
  color: #fff;
  font-weight: 500;
  background-color: #1a73e8;
  position: absolute;
  bottom: 17px;
  z-index: 10001;
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
  box-shadow: 0 4px 8px 3px rgba(60,64,67,.149),0 1px 3px 0 rgba(60,64,67,.302)
}

.devsite-claim-badge-dialog .badge-name,devsite-badge-awarded .badge-name {
  font-weight: 500
}

.devsite-claim-badge-dialog .buttons-container .more-badges-marker,devsite-badge-awarded .buttons-container .more-badges-marker {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  top: -12px;
  right: -12px;
  background: #ea4335;
  min-width: 24px;
  min-height: 24px;
  border-radius: 50px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-weight: 700;
  max-height: 24px;
  max-width: 24px;
  line-height: 24px;
  font-size: 12px
}

@media screen and (max-width: 600px) {
  .devsite-claim-badge-dialog .buttons-container .sharing,devsite-badge-awarded .buttons-container .sharing {
      -webkit-box-orient:horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -moz-box-orient: horizontal;
      -moz-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      padding: 2px 0 20px
  }
}

.devsite-claim-badge-dialog .buttons-container .actions .button,.devsite-claim-badge-dialog .buttons-container .actions button,devsite-badge-awarded .buttons-container .actions .button,devsite-badge-awarded .buttons-container .actions button {
  margin: 8px
}

.devsite-claim-badge-dialog .buttons-container .sharing,devsite-badge-awarded .buttons-container .sharing {
  font-size: 14px;
  color: #3c4043;
  padding-left: 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

.devsite-claim-badge-dialog .buttons-container .sharing .share-buttons-container,devsite-badge-awarded .buttons-container .sharing .share-buttons-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

.devsite-claim-badge-dialog .buttons-container .sharing span,devsite-badge-awarded .buttons-container .sharing span {
  margin: 0 8px
}

.devsite-claim-badge-dialog .buttons-container .sharing .button,.devsite-claim-badge-dialog .buttons-container .sharing button,devsite-badge-awarded .buttons-container .sharing .button,devsite-badge-awarded .buttons-container .sharing button {
  box-shadow: none;
  margin: 0 8px;
  padding: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border: 0;
  height: auto;
  min-width: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0
}

.devsite-claim-badge-dialog .buttons-container .sharing .button:focus,.devsite-claim-badge-dialog .buttons-container .sharing .button:hover,.devsite-claim-badge-dialog .buttons-container .sharing button:focus,.devsite-claim-badge-dialog .buttons-container .sharing button:hover,devsite-badge-awarded .buttons-container .sharing .button:focus,devsite-badge-awarded .buttons-container .sharing .button:hover,devsite-badge-awarded .buttons-container .sharing button:focus,devsite-badge-awarded .buttons-container .sharing button:hover {
  background: none
}

.devsite-claim-badge-dialog .buttons-container .sharing .button:active,.devsite-claim-badge-dialog .buttons-container .sharing button:active,devsite-badge-awarded .buttons-container .sharing .button:active,devsite-badge-awarded .buttons-container .sharing button:active {
  box-shadow: none
}

.devsite-claim-badge-dialog .buttons-container .sharing a:active,.devsite-claim-badge-dialog .buttons-container .sharing a:focus,.devsite-claim-badge-dialog .buttons-container .sharing a:hover,devsite-badge-awarded .buttons-container .sharing a:active,devsite-badge-awarded .buttons-container .sharing a:focus,devsite-badge-awarded .buttons-container .sharing a:hover {
  text-decoration: none
}

.devsite-claim-badge-dialog .buttons-container .sharing .material-icons,devsite-badge-awarded .buttons-container .sharing .material-icons {
  color: #5f6368;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 8px
}

devsite-badge-redeemer {
  display: block;
  opacity: 1;
  -webkit-transition: opacity .7s ease-in;
  transition: opacity .7s ease-in
}

devsite-badge-redeemer .redeem-code-page-subtitle {
  margin-bottom: 50px;
  margin-top: -28px;
  font-size: 18px;
  color: #202124;
  font-family: var(--devsite-headline-font-family)
}

devsite-badge-redeemer devsite-badge-awarded {
  display: block
}

devsite-badge-redeemer.redeem-success {
  opacity: 0
}

devsite-badge-redeemer .waiting-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-badge-redeemer .waiting-container devsite-spinner {
  margin-top: 15px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center
}

devsite-badge-redeemer .change-account-button,devsite-badge-redeemer .create-profile-button,devsite-badge-redeemer .sign-in-button {
  margin-top: 10px
}

devsite-badge-redeemer .enter-button {
  margin-top: 15px
}

devsite-badge-redeemer .redeem-code-title {
  text-transform: uppercase;
  font-size: 10.5px;
  font-weight: 600;
  color: #80868b;
  letter-spacing: 1px
}

devsite-badge-redeemer .redeem-code-error-icon,devsite-badge-redeemer .redeem-code-error-message,devsite-badge-redeemer .redeem-code-success-icon {
  display: none
}

devsite-badge-redeemer.redeem-success .redeem-code-input {
  border-color: #1e8e3e!important;
  color: default!important
}

devsite-badge-redeemer.redeem-success .redeem-code-success-icon {
  display: inline;
  font-size: 25px;
  color: #1e8e3e;
  margin-left: 10px;
  line-height: 44px
}

devsite-badge-redeemer.redeem-error .redeem-code-input {
  border-color: #d93025
}

devsite-badge-redeemer.redeem-error .redeem-code-error-message {
  display: block;
  font-size: 12px;
  color: #80868b;
  font-style: italic;
  font-weight: 600
}

devsite-badge-redeemer.redeem-error .redeem-code-error-icon {
  display: inline;
  font-size: 25px;
  color: #d93025;
  margin-left: 10px;
  line-height: 44px
}

devsite-badge-redeemer .redeem-code-spinner {
  display: inline-block;
  margin-left: 10px;
  top: 6px
}

devsite-badge-redeemer .redeem-code-input {
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 12px;
  color: #000;
  padding: 8px 2px 8px 12px;
  border: 2px solid #1a73e8;
  border-radius: 4px;
  background-color: rgba(232,240,254,.6);
  width: 450px;
  height: 45px
}

devsite-badge-redeemer .redeem-code-input:disabled {
  border-color: #80868b;
  color: #80868b
}

devsite-badger {
  display: none
}

.static-badge-awarded-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.static-badge-awarded-container .devsite-badger-award-inner {
  padding: 10px
}

.static-badge-awarded-container .dismiss {
  display: none
}

.devsite-badger-award {
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  z-index: 99999
}

.devsite-badger-award .devsite-badger-award-inner {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 670px;
  width: 670px;
  margin-bottom: 16px;
  pointer-events: all;
  position: absolute;
  -webkit-transform: translateY(150%);
  transform: translateY(150%);
  -webkit-transition: bottom .2s,margin-right .2s,-webkit-transform .2s cubic-bezier(.4,0,1,1);
  transition: bottom .2s,margin-right .2s,-webkit-transform .2s cubic-bezier(.4,0,1,1);
  transition: bottom .2s,margin-right .2s,transform .2s cubic-bezier(.4,0,1,1);
  transition: bottom .2s,margin-right .2s,transform .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1)
}

@media screen and (max-width: 600px) {
  .devsite-badger-award .devsite-badger-award-inner {
      width:calc(100% - 20px);
      margin-bottom: 10px
  }
}

.devsite-badger-award .devsite-badger-award-inner[show] {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: bottom .2s,margin-right .2s,-webkit-transform .2s cubic-bezier(0,0,.2,1);
  transition: bottom .2s,margin-right .2s,-webkit-transform .2s cubic-bezier(0,0,.2,1);
  transition: bottom .2s,margin-right .2s,transform .2s cubic-bezier(0,0,.2,1);
  transition: bottom .2s,margin-right .2s,transform .2s cubic-bezier(0,0,.2,1),-webkit-transform .2s cubic-bezier(0,0,.2,1)
}

.devsite-badger-award .devsite-badger-award-inner[show] .devsite-badger-award-actions,.devsite-badger-award .devsite-badger-award-inner[show] .devsite-badger-award-details {
  opacity: 1
}

.devsite-badger-award .devsite-badger-award-inner:first-child {
  bottom: 10px;
  z-index: 15
}

.devsite-badger-award .devsite-badger-award-inner:nth-child(2) {
  bottom: 5px;
  margin-right: -10px;
  z-index: 14;
  -webkit-filter: grayscale(100%) brightness(110%);
  filter: grayscale(100%) brightness(110%)
}

.devsite-badger-award .devsite-badger-award-inner:nth-child(3) {
  bottom: 0;
  margin-right: -20px;
  z-index: 13;
  -webkit-filter: grayscale(100%) brightness(110%);
  filter: grayscale(100%) brightness(110%)
}

.devsite-badger-award .devsite-badger-award-inner:nth-child(4) {
  bottom: -5px;
  margin-right: -30px;
  z-index: 12;
  -webkit-filter: grayscale(100%) brightness(110%);
  filter: grayscale(100%) brightness(110%)
}

.devsite-badger-award .devsite-badger-award-inner:nth-child(n+5) {
  bottom: -5px;
  margin-right: -30px;
  display: none
}

@media screen and (max-width: 600px) {
  .devsite-badger-award .devsite-badger-award-inner:first-child {
      bottom:0;
      z-index: 15
  }

  .devsite-badger-award .devsite-badger-award-inner:nth-child(2) {
      bottom: 0;
      margin-right: 0
  }

  .devsite-badger-award .devsite-badger-award-inner:nth-child(n+3) {
      display: none
  }
}

.devsite-badger-award .devsite-badger-award-actions {
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  opacity: 0;
  -webkit-transition: opacity .3s cubic-bezier(.4,0,.2,1);
  transition: opacity .3s cubic-bezier(.4,0,.2,1);
  border-top: 1px solid #dadce0;
  padding: 8px
}

devsite-book-nav {
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  z-index: 1004
}

.devsite-book-nav-bg,body[pending] devsite-book-nav {
  background: var(--devsite-book-nav-background);
  box-shadow: var(--devsite-book-nav-box-shadow,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color))
}

body[pending] devsite-book-nav {
  height: 100vh
}

body[ready] devsite-book-nav[fixed] {
  box-shadow: none;
  contain: content;
  max-height: 100%;
  position: fixed;
  -webkit-transform: translateY(var(--devsite-js-book-nav-y-offset,0));
  transform: translateY(var(--devsite-js-book-nav-y-offset,0));
  will-change: top,max-height,transform
}

body[ready] .devsite-book-nav-bg[fixed] {
  bottom: 0;
  display: block;
  position: fixed;
  top: 0;
  z-index: 1
}

body[ready] .devsite-book-nav-bg[animatable],body[ready] devsite-book-nav[animatable] {
  -webkit-transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
  transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
  transition: transform .2s cubic-bezier(.4,0,.2,1);
  transition: transform .2s cubic-bezier(.4,0,.2,1),-webkit-transform .2s cubic-bezier(.4,0,.2,1)
}

.devsite-book-nav-bg:after {
  bottom: -10px;
  content: "";
  display: block;
  height: 10px;
  position: fixed;
  width: 279px
}

[dir=ltr] .devsite-book-nav-bg:after {
  left: 0
}

[dir=rtl] .devsite-book-nav-bg:after {
  right: 0
}

devsite-book-nav .devsite-book-nav-filter {
  background: var(--devsite-book-nav-background);
  border-bottom: var(--devsite-primary-border);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 12px;
  padding: 24px 24px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2
}

devsite-book-nav input[type=text] {
  background: var(--devsite-searchbox-inactive);
  border: 0;
  border-radius: 4px;
  color: var(--devsite-searchbox-placeholder,var(--devsite-secondary-text-color));
  font-size: var(--devsite-nav-font-size,13px);
  height: var(--devsite-book-nav-input-height);
  padding-inline:var(--devsite-book-nav-input-height);width: 100%
}

devsite-book-nav input[type=text]:hover {
  background: var(--devsite-searchbox-hover)
}

devsite-book-nav input[type=text]:focus {
  background: var(--devsite-search-form-background-active);
  border: 0;
  box-shadow: var(--devsite-search-active-box-shadow,none);
  color: var(--devsite-search-form-text-active,var(--devsite-primary-text-color));
  padding: 16px var(--devsite-book-nav-input-height)
}

devsite-book-nav .devsite-nav-list {
  padding-bottom: 56px
}

devsite-book-nav .devsite-nav-list>.devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-divider):first-child {
  border-top: 0;
  margin-top: 20px;
  padding-top: 0
}

devsite-book-nav .devsite-book-nav-filter:not(.hidden)+.devsite-book-nav-wrapper .devsite-nav-list>.devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-divider):first-child {
  margin-top: 0
}

devsite-book-nav .filter-clear-button,devsite-book-nav .filter-list-icon:before {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-searchbox-placeholder,var(--devsite-secondary-text-color));
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: normal normal normal 14px/1 Material Icons;
  height: var(--devsite-book-nav-input-height);
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: absolute;
  top: 24px;
  width: var(--devsite-book-nav-input-height)
}

devsite-book-nav .filter-list-icon:before {
  content: "filter_list";
  inset-inline: 24px auto
}

devsite-book-nav .filter-clear-button {
  cursor: pointer;
  inset-inline: auto 24px;
  outline: 0
}

devsite-book-nav .filter-clear-button:before {
  content: "close"
}

devsite-book-nav .filter-clear-button:focus:before,devsite-book-nav .filter-clear-button:hover:before {
  background: var(--devsite-background-5);
  border-radius: 50%;
  padding: 4px
}

devsite-book-nav .devsite-nav-text mark {
  background: #feefc3;
  border-radius: 4px
}

[dir=ltr] devsite-book-nav li .devsite-nav-title {
  padding-left: 24px
}

[dir=rtl] devsite-book-nav li .devsite-nav-title {
  padding-left: 8px;
  padding-right: 24px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li .devsite-nav-title {
  padding-left: 40px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li .devsite-nav-title {
  padding-right: 40px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li li .devsite-nav-title {
  padding-left: 56px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li li .devsite-nav-title {
  padding-right: 56px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li li li .devsite-nav-title {
  padding-left: 72px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li li li .devsite-nav-title {
  padding-right: 72px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li li li li .devsite-nav-title {
  padding-left: 88px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li li li li .devsite-nav-title {
  padding-right: 88px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li li li li li .devsite-nav-title {
  padding-left: 104px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li li li li li .devsite-nav-title {
  padding-right: 104px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li li li li li li .devsite-nav-title {
  padding-left: 120px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li li li li li li .devsite-nav-title {
  padding-right: 120px
}

[dir=ltr] devsite-book-nav li.devsite-nav-divider .devsite-nav-title {
  padding-left: 0
}

[dir=rtl] devsite-book-nav li.devsite-nav-divider .devsite-nav-title {
  padding-right: 0
}

[dir=ltr] devsite-book-nav .devsite-nav-title {
  margin-right: var(--devsite-nav-title-margin-x,0);
  padding-right: 8px
}

[dir=rtl] devsite-book-nav .devsite-nav-title {
  margin-left: var(--devsite-nav-title-margin-x,0);
  padding-left: 8px
}

devsite-book-nav .devsite-nav-title.devsite-nav-active {
  background: var(--devsite-nav-title-background-active,0)
}

[dir=ltr] devsite-book-nav .devsite-nav-title.devsite-nav-active {
  border-radius: var(--devsite-nav-title-border-radius,0 12px 12px 0)
}

[dir=rtl] devsite-book-nav .devsite-nav-title.devsite-nav-active {
  border-radius: var(--devsite-nav-title-border-radius,12px 0 0 12px)
}

[dir=ltr] devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-heading)>.devsite-nav-title:not(.devsite-nav-active),[dir=ltr] devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion)>.devsite-expandable-nav>.devsite-nav-title-no-path {
  border-radius: var(--devsite-nav-title-border-radius,0 12px 12px 0)
}

[dir=rtl] devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-heading)>.devsite-nav-title:not(.devsite-nav-active),[dir=rtl] devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion)>.devsite-expandable-nav>.devsite-nav-title-no-path {
  border-radius: var(--devsite-nav-title-border-radius,12px 0 0 12px)
}

devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-heading)>.devsite-nav-title:not(.devsite-nav-active):focus,devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-heading)>.devsite-nav-title:not(.devsite-nav-active):hover,devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion)>.devsite-expandable-nav>.devsite-nav-title-no-path:focus,devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion)>.devsite-expandable-nav>.devsite-nav-title-no-path:hover {
  background: var(--devsite-nav-title-background-hover,0)
}

devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-heading)>.devsite-nav-title:not(.devsite-nav-active):focus,devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-heading)>.devsite-nav-title:not(.devsite-nav-active):hover {
  color: var(--devsite-nav-title-color-hover,var(--devsite-link-color))
}

devsite-book-nav .devsite-nav-list>.devsite-nav-heading:not(.devsite-nav-divider) {
  border-top: var(--devsite-primary-border);
  padding-top: 11px
}

devsite-book-nav .devsite-nav-heading:not(.devsite-nav-divider) {
  margin-top: 12px
}

[dir=ltr] devsite-book-nav .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-left: 24px
}

[dir=rtl] devsite-book-nav .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-right: 24px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-left: 40px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-right: 40px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-left: 56px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-right: 56px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li li .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-left: 72px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li li .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-right: 72px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li li li .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-left: 88px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li li li .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-right: 88px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li li li li .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-left: 104px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li li li li .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-right: 104px
}

[dir=ltr] devsite-book-nav .devsite-expandable-nav li li li li li .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-left: 120px
}

[dir=rtl] devsite-book-nav .devsite-expandable-nav li li li li li .devsite-nav-heading:not(.devsite-nav-divider) .devsite-nav-title-no-path {
  padding-right: 120px
}

[dir=ltr] devsite-book-nav .devsite-nav-accordion>.devsite-expandable-nav>.devsite-nav-title-no-path {
  margin-right: 0
}

[dir=rtl] devsite-book-nav .devsite-nav-accordion>.devsite-expandable-nav>.devsite-nav-title-no-path {
  margin-left: 0
}

devsite-book-nav .devsite-nav-heading.devsite-nav-divider {
  background: var(--devsite-nav-divider-background);
  border-bottom: var(--devsite-primary-border);
  border-top: var(--devsite-primary-border);
  padding: 4px 24px 2px
}

devsite-book-nav .devsite-nav-heading.devsite-nav-divider:first-child {
  padding-top: 4px
}

devsite-book-nav .devsite-nav-divider>.devsite-nav-title {
  font: 500 11px/16px var(--devsite-primary-font-family);
  letter-spacing: .8px;
  text-transform: uppercase
}

devsite-book-nav .devsite-nav-accordion+.devsite-nav-accordion,devsite-book-nav .devsite-nav-divider+.devsite-nav-accordion {
  border-top: 0;
  padding-top: 12px
}

devsite-book-nav .devsite-nav-accordion+.devsite-nav-divider {
  border-top: 0;
  padding-top: 4px
}

devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion) .devsite-nav-heading>.devsite-nav-title-no-path {
  border-radius: 0;
  cursor: default
}

devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion) .devsite-nav-heading>.devsite-nav-title-no-path:focus,devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion) .devsite-nav-heading>.devsite-nav-title-no-path:hover {
  background: 0
}

devsite-book-nav .devsite-nav-item.devsite-nav-deprecated:not(.devsite-nav-accordion) .devsite-nav-heading>.devsite-nav-title-no-path:focus,devsite-book-nav .devsite-nav-item.devsite-nav-deprecated:not(.devsite-nav-accordion) .devsite-nav-heading>.devsite-nav-title-no-path:hover {
  color: var(--devsite-nav-title-no-path-color-hover,var(--devsite-link-color))
}

devsite-book-nav .devsite-nav-accordion+.devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-divider),devsite-book-nav .devsite-nav-divider+.devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-divider),devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-divider)+.devsite-nav-accordion,devsite-book-nav .devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-divider)+.devsite-nav-divider {
  margin-top: 12px
}

devsite-book-nav .devsite-nav-break {
  height: 24px
}

#devsite-hamburger-menu,devsite-book-nav .devsite-mobile-header,devsite-book-nav .devsite-mobile-nav-top {
  display: none
}

devsite-book-nav .devsite-mobile-header {
  background: var(--devsite-header-color-upper,var(--devsite-background-1));
  border-bottom: var(--devsite-header-border,var(--devsite-primary-border))
}

#devsite-hamburger-menu:before,devsite-book-nav #devsite-close-nav:before {
  border-radius: 50%;
  padding: 8px;
  -webkit-transition: background .2s;
  transition: background .2s
}

#devsite-hamburger-menu:focus:before,#devsite-hamburger-menu:hover:before,devsite-book-nav #devsite-close-nav:focus:before,devsite-book-nav #devsite-close-nav:hover:before {
  background: var(--devsite-background-3)
}

#devsite-hamburger-menu:before {
  content: "menu"
}

[dir=ltr] devsite-book-nav #devsite-close-nav:before {
  content: "arrow_back"
}

[dir=rtl] devsite-book-nav #devsite-close-nav:before {
  content: "arrow_forward"
}

devsite-book-nav[top-level-nav] #devsite-close-nav:before {
  content: "close"
}

.devsite-book-nav-toggle {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: var(--devsite-book-nav-toggle-background);
  border: var(--devsite-book-nav-toggle-border,0);
  bottom: 16px;
  box-shadow: var(--devsite-book-nav-toggle-box-shadow,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color));
  color: var(--devsite-book-nav-toggle-color,var(--devsite-secondary-text-color));
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-width: 24px;
  padding: 0;
  position: fixed;
  text-decoration: none;
  -webkit-transform: translateX(calc(var(--devsite-js-book-nav-scrollbar-width, 0px) - var(--devsite-nav-title-margin-x, 8px)));
  transform: translateX(calc(var(--devsite-js-book-nav-scrollbar-width, 0px) - var(--devsite-nav-title-margin-x, 8px)));
  -webkit-transition: border-radius .2s ease,-webkit-transform .2s cubic-bezier(.4,0,.2,1);
  transition: border-radius .2s ease,-webkit-transform .2s cubic-bezier(.4,0,.2,1);
  transition: transform .2s cubic-bezier(.4,0,.2,1),border-radius .2s ease;
  transition: transform .2s cubic-bezier(.4,0,.2,1),border-radius .2s ease,-webkit-transform .2s cubic-bezier(.4,0,.2,1);
  z-index: 1004
}

.devsite-book-nav-toggle:focus,.devsite-book-nav-toggle:hover {
  background-color: var(--devsite-book-nav-toggle-background-hover);
  border: var(--devsite-book-nav-toggle-border-hover,0);
  box-shadow: var(--devsite-book-nav-toggle-box-shadow-hover,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color));
  color: var(--devsite-book-nav-toggle-color-hover,var(--devsite-secondary-text-color))
}

.devsite-book-nav-toggle[aria-expanded] {
  border-radius: 50%;
  width: 40px
}

[dir=ltr] .devsite-book-nav-toggle[aria-expanded] {
  -webkit-transform: translateX(calc(229px - var(--devsite-js-book-nav-scrollbar-width, 0px) - var(--devsite-nav-title-margin-x, 8px)));
  transform: translateX(calc(229px - var(--devsite-js-book-nav-scrollbar-width, 0px) - var(--devsite-nav-title-margin-x, 8px)))
}

[dir=rtl] .devsite-book-nav-toggle[aria-expanded] {
  -webkit-transform: translateX(calc(-229px + var(--devsite-js-book-nav-scrollbar-width, 0px) + var(--devsite-nav-title-margin-x, 8px)));
  transform: translateX(calc(-229px + var(--devsite-js-book-nav-scrollbar-width, 0px) + var(--devsite-nav-title-margin-x, 8px)))
}

.devsite-book-nav-toggle:not([aria-expanded]) {
  -webkit-border-start: 0;
  -moz-border-start: 0;
  border-inline-start:0;-webkit-transition: width .2s ease,border-radius .2s ease,-webkit-transform .15s cubic-bezier(.4,0,.2,1);
  transition: width .2s ease,border-radius .2s ease,-webkit-transform .15s cubic-bezier(.4,0,.2,1);
  transition: width .2s ease,transform .15s cubic-bezier(.4,0,.2,1),border-radius .2s ease;
  transition: width .2s ease,transform .15s cubic-bezier(.4,0,.2,1),border-radius .2s ease,-webkit-transform .15s cubic-bezier(.4,0,.2,1);
  width: 24px
}

[dir=ltr] .devsite-book-nav-toggle:not([aria-expanded]) {
  border-radius: 0 20px 20px 0
}

[dir=rtl] .devsite-book-nav-toggle:not([aria-expanded]) {
  border-radius: 20px 0 0 20px
}

.devsite-book-nav-toggle:not([aria-expanded]):focus,.devsite-book-nav-toggle:not([aria-expanded]):hover {
  width: 40px
}

[dir=ltr] body[ready] .devsite-book-nav-bg[collapsed] {
  -webkit-transform: translate(-279px);
  transform: translate(-279px)
}

[dir=rtl] body[ready] .devsite-book-nav-bg[collapsed] {
  -webkit-transform: translate(279px);
  transform: translate(279px)
}

[dir=ltr] body[ready] devsite-book-nav[collapsed] {
  -webkit-transform: translate(-279px,var(--devsite-js-book-nav-y-offset,0));
  transform: translate(-279px,var(--devsite-js-book-nav-y-offset,0))
}

[dir=rtl] body[ready] devsite-book-nav[collapsed] {
  -webkit-transform: translate(279px,var(--devsite-js-book-nav-y-offset,0));
  transform: translate(279px,var(--devsite-js-book-nav-y-offset,0))
}

.devsite-book-nav-toggle .devsite-book-nav-toggle-icon {
  font-size: 20px;
  height: 20px;
  position: static;
  width: 20px
}

.devsite-book-nav-toggle .devsite-book-nav-toggle-icon:before {
  content: var(--devsite-book-nav-toggle-icon)
}

[dir=ltr] .devsite-book-nav-toggle,[dir=rtl] .devsite-book-nav-toggle[aria-expanded] {
  --devsite-book-nav-toggle-icon: "chevron_right"
}

[dir=ltr] .devsite-book-nav-toggle[aria-expanded],[dir=rtl] .devsite-book-nav-toggle {
  --devsite-book-nav-toggle-icon: "chevron_left"
}

devsite-book-nav~.devsite-book-nav-blur {
  background-color: var(--devsite-book-nav-background);
  bottom: 0;
  height: 64px;
  -webkit-mask-image: -webkit-linear-gradient(transparent,#000 28px);
  mask-image: linear-gradient(transparent,#000 28px);
  pointer-events: none;
  position: fixed;
  width: calc(269px - var(--devsite-js-book-nav-scrollbar-width, 0px));
  z-index: 1004;
  -webkit-transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
  transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
  transition: transform .2s cubic-bezier(.4,0,.2,1);
  transition: transform .2s cubic-bezier(.4,0,.2,1),-webkit-transform .2s cubic-bezier(.4,0,.2,1);
  -webkit-transform: translate(0);
  transform: translate(0)
}

[dir=ltr] devsite-book-nav~.devsite-book-nav-blur {
  left: 0
}

[dir=rtl] devsite-book-nav~.devsite-book-nav-blur {
  right: 0
}

[dir=ltr] devsite-book-nav~.devsite-book-nav-blur[collapsed] {
  left: 0;
  -webkit-transform: translate(-281px,var(--devsite-js-book-nav-y-offset,0));
  transform: translate(-281px,var(--devsite-js-book-nav-y-offset,0))
}

[dir=rtl] devsite-book-nav~.devsite-book-nav-blur[collapsed] {
  right: 0;
  -webkit-transform: translate(281px,var(--devsite-js-book-nav-y-offset,0));
  transform: translate(281px,var(--devsite-js-book-nav-y-offset,0))
}

@media screen and (max-width: 840px) {
  devsite-book-nav {
      display:none;
      height: 100vh;
      max-height: 100vh!important;
      top: 0!important;
      z-index: 1013
  }

  body[ready] .devsite-book-nav-bg,body[ready] devsite-book-nav {
      -webkit-transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
      transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
      transition: transform .2s cubic-bezier(.4,0,.2,1);
      transition: transform .2s cubic-bezier(.4,0,.2,1),-webkit-transform .2s cubic-bezier(.4,0,.2,1)
  }

  [dir=ltr] body[ready] devsite-book-nav {
      -webkit-transform: translate(-281px);
      transform: translate(-281px)
  }

  [dir=rtl] body[ready] devsite-book-nav {
      -webkit-transform: translate(281px);
      transform: translate(281px)
  }

  .devsite-book-nav-blur {
      display: none
  }

  body[ready] .devsite-book-nav-bg[fixed] {
      display: none
  }

  body[ready] devsite-book-nav[fixed] {
      background: var(--devsite-book-nav-background);
      display: block!important;
      box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color)
  }

  devsite-book-nav[visually-hidden] {
      opacity: 1!important;
      pointer-events: auto!important;
      visibility: visible!important
  }

  #devsite-hamburger-menu,devsite-book-nav #devsite-close-nav {
      height: 100%;
      position: relative;
      width: auto;
      z-index: 20
  }

  #devsite-hamburger-menu {
      display: block;
      width: 40px
  }

  [dir=ltr] #devsite-hamburger-menu {
      margin: 0 0 0 -4px
  }

  [dir=rtl] #devsite-hamburger-menu {
      margin: 0 -4px 0 0
  }

  devsite-book-nav #devsite-close-nav {
      color: var(--devsite-secondary-text-color);
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0
  }

  [dir=ltr] devsite-book-nav #devsite-close-nav {
      margin: 0 0 0 -12px
  }

  [dir=rtl] devsite-book-nav #devsite-close-nav {
      margin: 0 -12px 0 0
  }

  devsite-book-nav .devsite-mobile-nav-top {
      display: block
  }

  devsite-book-nav .devsite-book-nav-wrapper {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
      transition: -webkit-transform .2s cubic-bezier(.4,0,.2,1);
      transition: transform .2s cubic-bezier(.4,0,.2,1);
      transition: transform .2s cubic-bezier(.4,0,.2,1),-webkit-transform .2s cubic-bezier(.4,0,.2,1)
  }

  [dir=ltr] devsite-book-nav .devsite-book-nav-wrapper {
      -webkit-transform: translateX(-269px);
      transform: translateX(-269px)
  }

  [dir=rtl] devsite-book-nav .devsite-book-nav-wrapper {
      -webkit-transform: translateX(269px);
      transform: translateX(269px)
  }

  devsite-book-nav .devsite-nav-list {
      padding-bottom: 120px
  }

  devsite-book-nav .devsite-nav-list>.devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-divider):first-child {
      margin-top: 0
  }

  devsite-book-nav .devsite-mobile-nav-bottom .devsite-nav-list>.devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-divider):first-child {
      margin-top: 13px
  }

  devsite-book-nav .devsite-mobile-nav-top .devsite-nav-text {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -moz-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1
  }

  devsite-book-nav[top-level-nav] .devsite-book-nav-wrapper {
      -webkit-transform: translateX(0);
      transform: translateX(0)
  }

  devsite-book-nav:not([top-level-nav]) .devsite-mobile-nav-top,devsite-book-nav[top-level-nav] .devsite-mobile-nav-bottom {
      height: calc(100vh - 64px);
      overflow: hidden
  }

  devsite-book-nav .devsite-mobile-nav-top>.devsite-nav-list>.devsite-nav-item {
      border-bottom: var(--devsite-primary-border)
  }

  devsite-book-nav .devsite-mobile-nav-top>.devsite-nav-list>.devsite-nav-item>.devsite-nav-title {
      font-weight: 700;
      padding-bottom: 15px;
      padding-top: 16px
  }

  devsite-book-nav .devsite-mobile-nav-top>.devsite-nav-list>.devsite-nav-item>.devsite-nav-active {
      background: 0
  }

  devsite-book-nav .devsite-mobile-nav-top>.devsite-nav-list>.devsite-nav-item>.devsite-nav-title:not(.devsite-nav-active) {
      color: var(--devsite-secondary-text-color)
  }

  devsite-book-nav .devsite-mobile-nav-top>.devsite-nav-list>.devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-heading)>.devsite-nav-title {
      border-radius: 0
  }

  devsite-book-nav .devsite-mobile-nav-top>.devsite-nav-list>.devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-heading)>.devsite-nav-title:focus,devsite-book-nav .devsite-mobile-nav-top>.devsite-nav-list>.devsite-nav-item:not(.devsite-nav-accordion):not(.devsite-nav-heading)>.devsite-nav-title:hover {
      background: 0
  }

  devsite-book-nav .devsite-mobile-nav-bottom,devsite-book-nav .devsite-mobile-nav-top {
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;
      width: 269px
  }

  devsite-book-nav .devsite-mobile-header {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      height: 49px;
      padding: 0 16px;
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      z-index: 100
  }

  devsite-book-nav .devsite-mobile-header .devsite-nav-active {
      font-weight: 400
  }

  devsite-book-nav .devsite-nav-responsive-tabs {
      margin-bottom: 12px;
      margin-top: -11px
  }

  devsite-book-nav .devsite-lower-tab-item {
      margin: 0
  }

  devsite-book-nav .devsite-nav-responsive-tabs>.devsite-nav-item:last-child {
      margin-bottom: 8px
  }

  devsite-book-nav~.devsite-book-nav-toggle {
      display: none
  }

  devsite-book-nav .devsite-book-nav-filter {
      display: none
  }
}

@media screen and (max-width: 600px) {
  #devsite-hamburger-menu,devsite-book-nav #devsite-close-nav {
      margin:0 4px 0 -12px
  }
}

.devsite-expandable-nav {
  display: block;
  position: relative
}

.devsite-expandable-nav>.devsite-nav-section {
  max-width: 100%;
  overflow-y: hidden;
  -webkit-transition: height .2s;
  transition: height .2s;
  width: 100%;
  will-change: height
}

.devsite-expandable-nav:not([animatable])>.devsite-nav-section {
  -webkit-transition: height 1ms;
  transition: height 1ms
}

.devsite-expandable-nav>.devsite-nav-section .devsite-nav-heading:not(.devsite-nav-divider):first-child {
  margin-top: 0
}

.devsite-expandable-nav:not(.expanded)>.devsite-nav-section {
  display: none
}

.devsite-expandable-nav:not(.expanded)>.devsite-nav-section {
  height: 0
}

.devsite-expandable-nav>.devsite-nav-title-no-path {
  cursor: pointer;
  outline: 0
}

.devsite-expandable-nav>.devsite-nav-title {
  -webkit-padding-start: 24px;
  -moz-padding-start: 24px;
  padding-inline-start:24px}

.devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-title {
  -webkit-padding-start: 40px;
  -moz-padding-start: 40px;
  padding-inline-start:40px}

.devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-title {
  -webkit-padding-start: 56px;
  -moz-padding-start: 56px;
  padding-inline-start:56px}

.devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-title {
  -webkit-padding-start: 72px;
  -moz-padding-start: 72px;
  padding-inline-start:72px}

.devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-title {
  -webkit-padding-start: 88px;
  -moz-padding-start: 88px;
  padding-inline-start:88px}

.devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-title {
  -webkit-padding-start: 104px;
  -moz-padding-start: 104px;
  padding-inline-start:104px}

.devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-title {
  -webkit-padding-start: 120px;
  -moz-padding-start: 120px;
  padding-inline-start:120px}

.devsite-expandable-nav>.devsite-nav-toggle {
  cursor: pointer;
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  text-decoration: none
}

.devsite-nav-item:not(.devsite-nav-accordion)>.devsite-expandable-nav>.devsite-nav-toggle {
  font-size: 18px;
  position: absolute;
  top: var(--devsite-nav-toggle-y-start,2px);
  -webkit-transform: rotate(0);
  transform: rotate(0);
  -webkit-transition: -webkit-transform .2s ease;
  transition: -webkit-transform .2s ease;
  transition: transform .2s ease;
  transition: transform .2s ease,-webkit-transform .2s ease;
  will-change: transform
}

.devsite-nav-item:not(.devsite-nav-accordion)>.devsite-expandable-nav:not([animatable])>.devsite-nav-toggle {
  -webkit-transition: -webkit-transform 1ms;
  transition: -webkit-transform 1ms;
  transition: transform 1ms;
  transition: transform 1ms,-webkit-transform 1ms
}

[dir=ltr] .devsite-expandable-nav>.devsite-nav-toggle {
  left: 4px
}

[dir=rtl] .devsite-expandable-nav>.devsite-nav-toggle {
  right: 4px
}

[dir=ltr] .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  left: 20px
}

[dir=rtl] .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  right: 20px
}

[dir=ltr] .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  left: 36px
}

[dir=rtl] .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  right: 36px
}

[dir=ltr] .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  left: 52px
}

[dir=rtl] .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  right: 52px
}

[dir=ltr] .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  left: 68px
}

[dir=rtl] .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  right: 68px
}

[dir=ltr] .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  left: 84px
}

[dir=rtl] .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  right: 84px
}

[dir=ltr] .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  left: 100px
}

[dir=rtl] .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav .devsite-expandable-nav>.devsite-nav-toggle {
  right: 100px
}

.devsite-nav-item:not(.devsite-nav-accordion)>.devsite-expandable-nav:not(.expanded)>.devsite-nav-toggle {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg)
}

[dir=rtl] .devsite-nav-item:not(.devsite-nav-accordion)>.devsite-expandable-nav:not(.expanded)>.devsite-nav-toggle {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg)
}

.devsite-expandable-nav>.devsite-nav-toggle:before {
  content: "arrow_drop_down"
}

.devsite-nav-accordion {
  border-bottom: var(--devsite-primary-border);
  border-top: var(--devsite-primary-border);
  padding: 11px 0
}

.devsite-nav-accordion>.devsite-expandable-nav {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

.devsite-nav-accordion>.devsite-expandable-nav>.devsite-nav-title {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-secondary-text-rgba);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 196px;
  -moz-box-flex: 1;
  -ms-flex: 1 0 196px;
  flex: 1 0 196px;
  font-weight: 700;
  overflow: hidden
}

.devsite-nav-accordion>.devsite-expandable-nav>.devsite-nav-toggle {
  color: var(--devsite-secondary-text-color);
  font-size: 24px;
  margin-block:0;margin-inline:0 8px;-webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -moz-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  -webkit-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transition: -webkit-transform .5s;
  transition: -webkit-transform .5s;
  transition: transform .5s;
  transition: transform .5s,-webkit-transform .5s
}

.devsite-nav-accordion>.devsite-expandable-nav:not([animatable])>.devsite-nav-toggle {
  -webkit-transition: -webkit-transform 1ms;
  transition: -webkit-transform 1ms;
  transition: transform 1ms;
  transition: transform 1ms,-webkit-transform 1ms
}

.devsite-nav-accordion>.devsite-expandable-nav:not(.expanded)>.devsite-nav-toggle {
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg)
}

.devsite-nav-accordion>.devsite-expandable-nav>.devsite-nav-toggle:before {
  content: "expand_less"
}

.devsite-nav-accordion>.devsite-expandable-nav>.devsite-nav-section {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -moz-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2
}

devsite-book-nav .devsite-product-id-row {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  min-height: 60px;
  padding: var(--devsite-product-id-row-padding,20px 24px 2px)
}

devsite-book-nav .devsite-header-no-lower-tabs .devsite-product-id-row {
  min-height: 72px;
  padding: var(--devsite-product-id-row-padding,20px 24px)
}

devsite-book-nav .devsite-product-description-row {
  color: var(--devsite-header-foreground-lower-description,var(--devsite-header-foreground-lower-hover,var(--devsite-inverted-text-color)));
  font: var(--devsite-header-lower-description-font,400 20px/32px var(--devsite-primary-font-family))
}

devsite-book-nav .devsite-product-description {
  font: 16px/24px var(--devsite-primary-font-family);
  margin-block:0;margin-inline:0 180px}

devsite-book-nav .devsite-breadcrumb-list+.devsite-product-description {
  margin-block:8px 0}

devsite-book-nav .devsite-product-button-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-block:0;margin-inline:24px 0;z-index: 1
}

@media screen and (max-width: 840px) {
  devsite-book-nav .devsite-product-id-row {
      min-height:72px;
      padding: var(--devsite-product-id-row-padding,20px 24px)
  }

  devsite-book-nav .devsite-product-description {
      margin-inline:0}
}

@media screen and (max-width: 600px) {
  devsite-book-nav .devsite-header-no-lower-tabs .devsite-product-id-row,devsite-book-nav .devsite-product-id-row {
      -webkit-flex-wrap:wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      padding: var(--devsite-product-id-row-padding,20px 16px)
  }

  devsite-book-nav .devsite-product-button-row {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      margin-block:16px 0;margin-inline:0}
}

devsite-book-nav .devsite-product-name-wrapper {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  height: 36px;
  margin: 6px 0
}

devsite-book-nav .devsite-product-name-link,devsite-book-nav .devsite-site-logo-link {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 1;
  -webkit-transition: opacity .2s;
  transition: opacity .2s
}

devsite-book-nav .devsite-product-name-link:focus,devsite-book-nav .devsite-product-name-link:hover,devsite-book-nav .devsite-site-logo-link:focus {
  opacity: .7;
  text-decoration: none
}

devsite-book-nav .devsite-site-logo {
  aspect-ratio: var(--devsite-logo-aspect-ratio,auto);
  height: var(--devsite-logo-height,32px)
}

devsite-book-nav .devsite-has-google-wordmark>.devsite-breadcrumb-link,devsite-book-nav .devsite-has-google-wordmark>.devsite-product-name {
  direction: ltr
}

devsite-book-nav .devsite-google-wordmark {
  height: 24px;
  margin: 0 4px 0 0;
  position: relative;
  top: 5px
}

devsite-book-nav .devsite-google-wordmark-svg-path {
  -webkit-transition: fill .2s;
  transition: fill .2s
}

devsite-book-nav .devsite-site-logo-link canvas {
  height: auto!important
}

devsite-book-nav .devsite-site-logo-link picture {
  display: contents
}

devsite-book-nav .devsite-product-logo-container {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  color: var(--devsite-primary-color,var(--devsite-primary-text-color));
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 36px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-inline:0 4px;width: 36px
}

devsite-book-nav .devsite-product-logo-container[background] {
  background: var(--devsite-primary-color,var(--devsite-primary-text-color));
  color: var(--devsite-inverted-text-color)
}

devsite-book-nav .devsite-product-logo {
  color: inherit;
  font-size: 32px;
  height: 32px;
  max-width: 32px;
  min-width: 32px;
  overflow: hidden;
  white-space: nowrap
}

devsite-book-nav .devsite-product-logo-container[background] .devsite-product-logo {
  font-size: 28px;
  height: 28px;
  max-width: 28px;
  min-width: 28px
}

devsite-book-nav .devsite-product-name {
  font: var(--devsite-wordmark-font,400 20px/32px var(--devsite-primary-font-family));
  letter-spacing: 0;
  margin: 0;
  max-height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-transition: color .2s;
  transition: color .2s;
  white-space: nowrap
}

devsite-book-nav .devsite-site-logo:not([src*=".svg"]) {
  height: auto;
  max-height: 32px
}

devsite-book-nav .devsite-breadcrumb-link>.devsite-product-name {
  color: inherit
}

@media screen and (max-width: 840px) {
  devsite-book-nav .devsite-product-name-wrapper {
      -webkit-box-flex:0;
      -webkit-flex: 0 1 auto;
      -moz-box-flex: 0;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      min-width: 0
  }

  devsite-book-nav .devsite-product-name-wrapper .devsite-breadcrumb-item:not(:first-of-type),devsite-book-nav .devsite-product-name-wrapper .devsite-site-logo-link+.devsite-product-name {
      display: none
  }

  devsite-book-nav .devsite-product-name-wrapper .devsite-breadcrumb-item,devsite-book-nav .devsite-product-name-wrapper .devsite-breadcrumb-link,devsite-book-nav .devsite-product-name-wrapper .devsite-breadcrumb-list,devsite-book-nav .devsite-product-name-wrapper .devsite-product-name {
      width: 100%
  }

  devsite-book-nav .devsite-product-name-wrapper .devsite-breadcrumb-link {
      overflow: hidden;
      text-overflow: ellipsis
  }
}

devsite-bookmark.show {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-bookmark-background);
  border: 0;
  box-shadow: none;
  cursor: pointer;
  height: 36px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  min-width: 66px;
  padding: 0;
  vertical-align: middle;
  width: 66px
}

devsite-bookmark.show.devsite-legacy-bookmark {
  border-radius: 18px;
  min-width: 36px;
  width: 36px
}

devsite-bookmark.show.devsite-legacy-bookmark:focus,devsite-bookmark.show.devsite-legacy-bookmark:hover {
  background: var(--devsite-bookmark-background-hover-legacy)
}

devsite-bookmark.show.devsite-page-bookmark,devsite-feature-tooltip.devsite-page-bookmark-tooltip {
  -webkit-margin-end: 8px;
  -moz-margin-end: 8px;
  margin-inline-end:8px;-webkit-margin-start: -74px;
  -moz-margin-start: -74px;
  margin-inline-start:-74px}

devsite-bookmark input.bookmark-checkbox {
  background: var(--devsite-bookmark-background);
  color: var(--devsite-bookmark-icon-color);
  margin: 0
}

devsite-bookmark devsite-dropdown-list {
  --devsite-button-box-shadow: none
}

devsite-bookmark devsite-dropdown-list .bookmark-icon {
  color: var(--devsite-bookmark-icon-color);
  -webkit-transition: color .2s;
  transition: color .2s
}

devsite-bookmark devsite-dropdown-list:where(:hover,:focus,:active) .bookmark-icon {
  color: var(--devsite-dropdown-list-toggle-color-hover)
}

devsite-bookmark devsite-dropdown-list .bookmark-icon.toggled {
  color: var(--devsite-bookmark-icon-color-saved)
}

devsite-bookmark devsite-dropdown-list:where(:hover,:focus,:active) .bookmark-icon.toggled {
  color: var(--devsite-bookmark-icon-color-saved-hover)
}

devsite-bookmark input.bookmark-checkbox:after {
  content: "bookmark_border"
}

devsite-bookmark input.bookmark-checkbox:checked:after {
  content: "bookmark"
}

devsite-bookmark input.bookmark-checkbox:checked:focus:before,devsite-bookmark input.bookmark-checkbox:focus:before {
  background: var(--devsite-bookmark-background-focus-legacy)
}

devsite-bookmark input.bookmark-checkbox:checked,devsite-bookmark[saved] input.bookmark-checkbox,devsite-bookmark[saved] input.bookmark-checkbox:checked {
  color: var(--devsite-bookmark-icon-color-saved)
}

.devsite-bookmark-dialog .create-profile-spinner {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: hsla(0,0%,100%,.8);
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: opacity .3s cubic-bezier(.4,0,.2,1);
  transition: opacity .3s cubic-bezier(.4,0,.2,1);
  z-index: 10
}

.devsite-bookmark-dialog.loading .create-profile-spinner {
  opacity: 1
}

.devsite-receive-updates-dialog {
  padding: 24px
}

.devsite-receive-updates-dialog .devsite-dialog-contents {
  padding: 0
}

.devsite-receive-updates-dialog .no-link {
  text-align: left
}

.devsite-receive-updates-dialog .devsite-dialog-buttons {
  -webkit-box-pack: left;
  -webkit-justify-content: left;
  -moz-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
  padding: 0
}

.devsite-receive-updates-dialog .devsite-dialog-buttons .devsite-dialog-close {
  -webkit-margin-start: 16px;
  -moz-margin-start: 16px;
  margin-inline-start:16px}

devsite-carousel>:where(ul,ol,[role=list]) {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: var(--devsite-carousel-item-gap);
  list-style: none;
  padding: 0
}

devsite-carousel:not(:defined) :where(ul,ol,[role=list]) {
  display: none
}

devsite-carousel>:where(ul,ol,[role=list])>:where(li,[role=listitem]) {
  -webkit-box-align: start;
  -webkit-align-items: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: var(--devsite-carousel-item-flex);
  -webkit-flex: var(--devsite-carousel-item-flex);
  -moz-box-flex: var(--devsite-carousel-item-flex);
  -ms-flex: var(--devsite-carousel-item-flex);
  flex: var(--devsite-carousel-item-flex);
  margin: 0;
  scroll-snap-align: start
}

devsite-carousel[data-items-per-slide=auto]>:is(ul,ol,[role=list])>:is(li,[role=listitem]):last-child:empty {
  border: 0;
  padding: 0;
  padding-block:0;padding-inline:0;visibility: hidden;
  width: var(--devsite-carousel-ghost-item-width)
}

devsite-catalog {
  display: block;
  margin: 20px 0;
  width: 100%
}

devsite-catalog>* {
  display: none
}

devsite-catalog>.catalog-container {
  -webkit-box-align: start;
  -webkit-align-items: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  display: grid;
  gap: 30px;
  grid: var(--devsite-catalog-grid)
}

devsite-catalog .catalog-sidebar {
  grid-area: sidebar
}

devsite-catalog .catalog-main {
  grid-area: main
}

devsite-catalog .catalog-checkbox-controls-container,devsite-catalog .catalog-checkbox-controls-group,devsite-catalog .catalog-main-filter-controls {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-catalog .catalog-checkbox-controls-container,devsite-catalog .catalog-checkbox-controls-group {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-catalog .catalog-checkbox-controls-group,devsite-catalog .catalog-checkbox-controls-subtitle,devsite-catalog .catalog-checkbox-controls-title,devsite-catalog .catalog-checkbox-label,devsite-catalog .catalog-filter-bar {
  text-align: var(--devsite-catalog-text-align,start);
  width: 100%
}

devsite-catalog .catalog-checkbox-controls-container {
  border: var(--devsite-primary-border);
  border-radius: var(--devsite-card-border-radius);
  color: var(--devsite-secondary-text-color)
}

devsite-catalog .catalog-filter-chips {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: var(--devsite-chips-gap)
}

devsite-catalog .catalog-checkbox-controls-filter-chips-container {
  display: none
}

devsite-catalog .catalog-main-filter-chips>:only-child {
  margin-bottom: 24px
}

devsite-catalog .catalog-main-filter-chips>div {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 16px 8px
}

devsite-catalog .catalog-main-filter-chips>div:empty {
  display: none
}

devsite-catalog .catalog-filter-chip {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 16px;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 32px
}

devsite-catalog .catalog-filter-chip:after {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  content: var(--devsite-button-icon-content);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 18px;
  height: 18px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-margin-end: var(--devsite-button-icon-margin-x-end);
  -moz-margin-end: var(--devsite-button-icon-margin-x-end);
  margin-inline-end:var(--devsite-button-icon-margin-x-end);-webkit-margin-start: var(--devsite-button-icon-margin-x-start);
  -moz-margin-start: var(--devsite-button-icon-margin-x-start);
  margin-inline-start:var(--devsite-button-icon-margin-x-start);width: 18px
}

devsite-catalog .catalog-checkbox-controls-group {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  padding: 0 20px 20px
}

devsite-catalog .catalog-container .catalog-clear-group-checkboxes-button,devsite-catalog .catalog-container .catalog-select-group-checkboxes-button {
  -webkit-margin-start: -8px;
  -moz-margin-start: -8px;
  margin-inline-start:-8px}

devsite-catalog .catalog-checkbox-controls-group>devsite-pagination {
  margin: 0
}

devsite-catalog .catalog-checkbox-controls-group>devsite-pagination .button {
  border: 0;
  -webkit-margin-start: -10px;
  -moz-margin-start: -10px;
  margin-inline-start:-10px}

devsite-catalog .catalog-checkbox-controls-buttons-container {
  display: none
}

devsite-catalog .catalog-checkbox-controls-title {
  border-bottom: var(--devsite-primary-border);
  color: var(--devsite-catalog-title-color);
  font: var(--devsite-catalog-title-font,500 13px/20px var(--devsite-primary-font-family));
  letter-spacing: var(--devsite-catalog-title-letter-spacing,1.5px);
  margin: var(--devsite-catalog-title-margin,0 0 20px);
  padding: var(--devsite-catalog-title-padding,15px 20px 11px);
  text-transform: var(--devsite-catalog-title-text-transform,uppercase)
}

devsite-catalog .catalog-checkbox-controls-subtitle {
  color: var(--devsite-primary-text-color);
  font: var(--devsite-catalog-subtitle-font,16px/24px var(--devsite-headline-font-family));
  padding: var(--devsite-catalog-subtitle-padding)
}

devsite-catalog .catalog-checkbox-container {
  margin: 6px 0
}

devsite-catalog .catalog-checkbox-label {
  color: var(--devsite-catalog-label-color,--devsite-secondary-text-color);
  font: var(--devsite-catalog-label-font,500 14px/20px var(--devsite-primary-font-family))
}

devsite-catalog .catalog-main-filter-controls {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 24px;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start
}

devsite-catalog .catalog-filter-bar-container {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  width: 100%
}

devsite-catalog .catalog-filter-bar-container:before {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  color: var(--devsite-catalog-filter-bar-container-color);
  content: var(--devsite-catalog-filter-bar-container-content);
  position: var(--devsite-catalog-filter-bar-container-position);
  top: var(--devsite-catalog-filter-bar-container-top)
}

[dir=ltr] devsite-catalog .catalog-filter-bar-container:before {
  left: var(--devsite-catalog-filter-bar-container-x-start)
}

[dir=rtl] devsite-catalog .catalog-filter-bar-container:before {
  right: var(--devsite-catalog-filter-bar-container-x-start)
}

devsite-catalog .catalog-filter-bar {
  margin: 0 0 24px;
  max-width: var(--devsite-catalog-filter-bar-max-width,725px);
  min-width: 150px
}

devsite-catalog .catalog-show-sidebar-button {
  display: var(--devsite-catalog-sidebar-button-display);
  margin: var(--devsite-catalog-sidebar-button-margin,0)
}

devsite-catalog .catalog-filter-bar-container+.catalog-show-sidebar-button {
  margin: 4px 0 auto
}

devsite-catalog devsite-pagination {
  margin-top: 20px
}

devsite-catalog devsite-dynamic-content .devsite-dynamic-content-no-results {
  border: 0;
  padding: 0;
  width: auto
}

devsite-catalog devsite-dynamic-content .devsite-dynamic-content-no-results-image {
  width: 425px
}

@media screen and (max-width: 1253px) {
  devsite-catalog .catalog-sidebar {
      border-radius:var(--devsite-catalog-sidebar-border-radius);
      box-shadow: var(--devsite-card-box-shadow);
      height: calc(100vh - var(--devsite-js-header-height, 0) - 4px);
      margin-block:calc(var(--devsite-js-header-height, 0) + 4px) 0;-webkit-margin-end: 0;
      -moz-margin-end: 0;
      margin-inline-end:0;position: fixed;
      top: 0;
      -webkit-transition: width .2s;
      transition: width .2s;
      visibility: hidden;
      width: 0;
      z-index: 1007
  }

  [dir=ltr] devsite-catalog .catalog-sidebar {
      right: 0
  }

  [dir=rtl] devsite-catalog .catalog-sidebar {
      left: 0
  }

  devsite-catalog .catalog-sidebar[expanded] {
      max-width: 90%;
      visibility: visible;
      width: 340px
  }

  devsite-catalog .catalog-sidebar:before {
      background-color: rgba(0,0,0,.4);
      bottom: 0;
      content: "";
      left: 0;
      margin: -200px;
      opacity: 0;
      pointer-events: none;
      position: fixed;
      right: 0;
      -webkit-tap-highlight-color: transparent;
      top: 0;
      -webkit-transition: opacity .2s cubic-bezier(.4,0,.2,1),visibility .2s linear;
      transition: opacity .2s cubic-bezier(.4,0,.2,1),visibility .2s linear;
      visibility: hidden;
      z-index: -1
  }

  devsite-catalog .catalog-sidebar[expanded]:before {
      content: "";
      cursor: pointer;
      opacity: 1;
      pointer-events: auto;
      -webkit-transition: opacity .2s ease;
      transition: opacity .2s ease;
      visibility: visible
  }

  devsite-catalog .catalog-checkbox-controls-title {
      margin-bottom: 10px
  }

  devsite-catalog .catalog-checkbox-controls-buttons-container {
      border-top: var(--devsite-primary-border);
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -moz-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      margin-top: auto;
      padding: 16px 20px
  }

  devsite-catalog .catalog-checkbox-controls-container {
      background: var(--devsite-card-background,var(--devsite-background-1));
      height: 100%;
      overflow-y: scroll
  }

  devsite-catalog .catalog-checkbox-controls-filter-chips-container {
      display: block;
      margin-block:0 2px;margin-inline:16px 12px}

  devsite-catalog .catalog-main {
      width: 100%
  }
}

devsite-catalog-body-badges .loading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 36px 0
}

devsite-catalog-body-badges p {
  margin: 0
}

devsite-catalog-body-badges .no-results {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 64px 0;
  gap: 8px;
  opacity: .5
}

devsite-catalog-body-badges .profile-cards-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 22px
}

devsite-catalog-body-badges .profile-cards-controls {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 8px;
  margin-top: 20px
}

@media screen and (max-width: 1253px) {
  devsite-catalog-body-badges .profile-cards-grid {
      grid-template-columns:1fr 1fr
  }
}

@media screen and (max-width: 600px) {
  devsite-catalog-body-badges .profile-cards-grid {
      grid-template-columns:1fr
  }
}

devsite-catalog-body-badges .transparent {
  opacity: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

devsite-catalog-body-badges .profile-card {
  border-radius: 8px;
  border: var(--devsite-primary-border);
  padding: 32px 16px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center
}

devsite-catalog-body-badges .profile-card-image,devsite-catalog-body-badges .profile-card-image-placeholder {
  width: 118px;
  height: 118px;
  min-width: 118px;
  min-height: 118px;
  border-radius: 118px
}

devsite-catalog-body-badges .profile-card-image-placeholder {
  background: var(--devsite-background-5)
}

devsite-catalog-body-badges .profile-card-name {
  font-family: var(--devsite-headline-font-family);
  font-size: 24px;
  line-height: 32px;
  color: var(--devsite-secondary-color);
  margin-top: 20px
}

devsite-catalog-body-badges .profile-card-details,devsite-catalog-body-badges .profile-card-location {
  font-family: var(--devsite-primary-font-family);
  font-size: 16px;
  line-height: 24px
}

devsite-catalog-body-badges .profile-card-location {
  color: #3c4043;
  margin-top: 8px
}

devsite-catalog-body-badges .profile-card-details {
  color: var(--devsite-secondary-color);
  margin-top: 8px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

devsite-catalog-body-badges .profile-card-button {
  margin-top: 20px
}

devsite-checkbox:not([ready]) {
  background: 0;
  visibility: hidden
}

devsite-checkbox[ready] {
  visibility: visible
}

devsite-code {
  border: var(--devsite-code-border,0);
  border-radius: var(--devsite-code-border-radius,0);
  clear: both;
  direction: ltr!important;
  display: block;
  margin: var(--devsite-code-margin,16px 0);
  min-height: var(--devsite-code-button-size);
  overflow: hidden;
  position: relative
}

devsite-code .devsite-code-buttons-container {
  position: absolute;
  right: var(--devsite-code-buttons-container-right,0);
  top: 0;
  z-index: 1
}

devsite-code .devsite-code-buttons-container button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: 0;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  color: #202124;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-size: 18px;
  height: var(--devsite-code-button-size,24px);
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  min-width: auto;
  padding: 0;
  -webkit-transition: color .2s;
  transition: color .2s;
  width: var(--devsite-code-button-size,24px)
}

devsite-code .devsite-code-buttons-container button:focus,devsite-code .devsite-code-buttons-container button:hover {
  color: #5f6368
}

devsite-code .devsite-code-buttons-container button.material-icons,devsite-code .devsite-code-buttons-container button.material-icons:hover {
  cursor: pointer
}

devsite-code .devsite-code-buttons-container button {
  color: var(--devsite-code-buttons-color)
}

devsite-code .devsite-code-buttons-container button:focus,devsite-code .devsite-code-buttons-container button:hover {
  color: var(--devsite-code-buttons-hover)
}

devsite-code .devsite-code-buttons-container .devsite-toggle-dark {
  display: var(--devsite-code-buttons-toggle-dark-display)
}

devsite-code .devsite-code-buttons-container .devsite-toggle-light {
  display: var(--devsite-code-buttons-toggle-light-display)
}

devsite-code pre {
  margin: 0;
  padding-block:var(--devsite-code-padding-block,24px);padding-inline: var(--devsite-code-padding-inline,24px)
}

devsite-code pre::-webkit-scrollbar-thumb {
  background: var(--devsite-scrollbar-thumb-background)
}

devsite-code pre .com,devsite-code pre .devsite-syntax-c,devsite-code pre .devsite-syntax-c1,devsite-code pre .devsite-syntax-ch,devsite-code pre .devsite-syntax-cm,devsite-code pre .devsite-syntax-cp,devsite-code pre .devsite-syntax-cpf,devsite-code pre .devsite-syntax-cs {
  color: var(--devsite-code-comments-color)
}

devsite-code pre .dec,devsite-code pre .devsite-syntax-il,devsite-code pre .devsite-syntax-m,devsite-code pre .devsite-syntax-mb,devsite-code pre .devsite-syntax-mf,devsite-code pre .devsite-syntax-mh,devsite-code pre .devsite-syntax-mi,devsite-code pre .devsite-syntax-mo,devsite-code pre .lit {
  color: var(--devsite-code-numbers-color)
}

devsite-code pre .devsite-syntax-k,devsite-code pre .devsite-syntax-kc,devsite-code pre .devsite-syntax-kd,devsite-code pre .devsite-syntax-kn,devsite-code pre .devsite-syntax-kp,devsite-code pre .devsite-syntax-kr,devsite-code pre .devsite-syntax-kt,devsite-code pre .devsite-syntax-nt,devsite-code pre .devsite-syntax-ow,devsite-code pre .kwd,devsite-code pre .tag {
  color: var(--devsite-code-keywords-color)
}

devsite-code pre .atv,devsite-code pre .cpf,devsite-code pre .devsite-syntax-dl,devsite-code pre .devsite-syntax-s,devsite-code pre .devsite-syntax-s1,devsite-code pre .devsite-syntax-s2,devsite-code pre .devsite-syntax-sa,devsite-code pre .devsite-syntax-sb,devsite-code pre .devsite-syntax-sc,devsite-code pre .devsite-syntax-sd,devsite-code pre .devsite-syntax-se,devsite-code pre .devsite-syntax-sh,devsite-code pre .devsite-syntax-si,devsite-code pre .devsite-syntax-sr,devsite-code pre .devsite-syntax-ss,devsite-code pre .devsite-syntax-sx,devsite-code pre .str {
  color: var(--devsite-code-strings-color)
}

devsite-code pre .atn,devsite-code pre .devsite-syntax-bp,devsite-code pre .devsite-syntax-fm,devsite-code pre .devsite-syntax-gh,devsite-code pre .devsite-syntax-go,devsite-code pre .devsite-syntax-gp,devsite-code pre .devsite-syntax-gr,devsite-code pre .devsite-syntax-gt,devsite-code pre .devsite-syntax-gu,devsite-code pre .devsite-syntax-na,devsite-code pre .devsite-syntax-nb,devsite-code pre .devsite-syntax-nc,devsite-code pre .devsite-syntax-nd,devsite-code pre .devsite-syntax-ne,devsite-code pre .devsite-syntax-nf,devsite-code pre .devsite-syntax-ni,devsite-code pre .devsite-syntax-nl,devsite-code pre .devsite-syntax-nn,devsite-code pre .devsite-syntax-no,devsite-code pre .devsite-syntax-nv,devsite-code pre .devsite-syntax-vc,devsite-code pre .devsite-syntax-vg,devsite-code pre .devsite-syntax-vi,devsite-code pre .devsite-syntax-vm,devsite-code pre .typ {
  color: var(--devsite-code-types-color)
}

devsite-code .prettyprint :not(.devsite-github-link)>a:not(.devsite-github-link),devsite-code a,devsite-code a :is(.atn,.atv,.com,.dec,.kwd,.lit,.pln,.pun,.str,.tag,.typ),devsite-code a [class^=devsite-syntax-] {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  font-weight: 700
}

devsite-code[dark-code] .prettyprint :not(.devsite-github-link)>a:not(.devsite-github-link),devsite-code[dark-code] a,devsite-code[dark-code] a :is(.atn,.atv,.com,.dec,.kwd,.lit,.pln,.pun,.str,.tag,.typ),devsite-code[dark-code] a [class^=devsite-syntax-] {
  color: #669df6
}

devsite-code .prettyprint a:focus,devsite-code .prettyprint a:hover,devsite-code a:focus :is(.atn,.atv,.com,.dec,.kwd,.lit,.pln,.pun,.str,.tag,.typ),devsite-code a:focus [class^=devsite-syntax-],devsite-code a:hover :is(.atn,.atv,.com,.dec,.kwd,.lit,.pln,.pun,.str,.tag,.typ),devsite-code a:hover [class^=devsite-syntax-] {
  text-decoration: underline
}

devsite-code .devsite-terminal:before {
  color: #bdc1c6;
  content: "$";
  padding-right: 8px
}

devsite-code .devsite-terminal[data-terminal-prefix]:before {
  content: attr(data-terminal-prefix)
}

devsite-code .devsite-github-link {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

devsite-code a.devsite-github-link:focus,devsite-code a.devsite-github-link:hover {
  text-decoration: none
}

devsite-code .devsite-github-link:after {
  background: no-repeat var(--devsite-github-link-icon);
  content: "";
  display: block;
  height: 18px;
  margin-left: 8px;
  width: 18px
}

devsite-code[dark-code] .devsite-github-link>a {
  color: #669df6
}

devsite-code devsite-selector pre {
  margin: 0
}

body[layout=full] devsite-code {
  overflow: visible
}

body[layout=full] devsite-code:after {
  background: var(--devsite-code-background);
  content: "";
  display: block;
  height: 100%;
  left: calc(50% - 50vw);
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: -1
}

:is(aside,.beta,.caution,.deprecated,.dogfood,.experimental,.key-point,.key-term,.note,.objective,.preview,.special,.success,.tip,.warning) devsite-code pre {
  background: var(--devsite-code-background)
}

devsite-codelab-catalog .controls {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

devsite-codelab-catalog .catalog-selector,devsite-codelab-catalog .category-selector,devsite-codelab-catalog .sort-controls {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1
}

devsite-codelab-catalog .controls {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

devsite-codelab-catalog .catalog-selector,devsite-codelab-catalog .category-selector {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-codelab-catalog .catalog-selector {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  width: auto
}

devsite-codelab-catalog .category-selector {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

devsite-codelab-catalog[sortorder=-timestamp] .button[sortorder=-timestamp],devsite-codelab-catalog[sortorder=displaytitle] .button[sortorder=displaytitle],devsite-codelab-catalog[sortorder=durationminutes] .button[sortorder=durationminutes] {
  border-bottom: 2px solid;
  border-radius: 4px 4px 0 0
}

@media screen and (max-width: 840px) {
  devsite-codelab-catalog .sort-controls {
      -webkit-box-flex:0;
      -webkit-flex: 0 1 auto;
      -moz-box-flex: 0;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      padding-bottom: 16px;
      width: 100%
  }

  devsite-codelab-catalog .catalog-selector {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -moz-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start
  }
}

@media screen and (max-width: 600px) {
  devsite-codelab-catalog .catalog-selector {
      padding-bottom:16px
  }

  devsite-codelab-catalog .category-selector {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -moz-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start
  }
}

devsite-concierge {
  --devsite-concierge-border: 1px solid #bdc1c6;
  bottom: 0;
  position: fixed;
  top: var(--devsite-concierge-top,48px);
  z-index: 1006
}

[appearance=dark] devsite-concierge {
  --devsite-concierge-border: 1px solid #5f6368
}

[dir=ltr] body[concierge] devsite-concierge {
  left: 100%;
  -webkit-transition: left .1s cubic-bezier(0,0,.2,1);
  transition: left .1s cubic-bezier(0,0,.2,1)
}

[dir=ltr] body[ready][concierge] devsite-concierge {
  left: calc(100% - var(--devsite-concierge-width, 54px))
}

[dir=rtl] body[concierge] devsite-concierge {
  right: 100%;
  -webkit-transition: right .1s cubic-bezier(0,0,.2,1);
  transition: right .1s cubic-bezier(0,0,.2,1)
}

[dir=rtl] body[ready][concierge] devsite-concierge {
  right: calc(100% - var(--devsite-concierge-width, 54px))
}

body[ready] devsite-concierge {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  bottom: var(--devsite-panel-height,0)
}

[dir=ltr] body[ready][concierge=modal] devsite-concierge,body[ready][concierge=modal] devsite-concierge [dir=rtl] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1014;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

.devsite-concierge-container {
  background: var(--devsite-background-1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

.devsite-concierge-container:before {
  --devsite-elevation-key-shadow-color: rgba(0,0,0,.3);
  --devsite-elevation-ambient-shadow-color: rgba(0,0,0,.15);
  content: "";
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color);
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1
}

[dir=ltr] .devsite-concierge-container:before {
  -webkit-clip-path: inset(0 0 0 -3px);
  clip-path: inset(0 0 0 -3px)
}

[dir=rtl] .devsite-concierge-container:before {
  -webkit-clip-path: inset(0 -3px 0 0);
  clip-path: inset(0 -3px 0 0)
}

body[ready][concierge=modal] .devsite-concierge-container {
  height: 80vh;
  width: 80vw;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color)
}

body[ready][concierge=modal] .devsite-concierge-container:before {
  display: none
}

.devsite-concierge-menu {
  border-top: 1px solid #bdc1c6;
  -webkit-padding-before: 8px;
  padding-block-start:8px;width: var(--devsite-concierge-width-closed,54px);
  z-index: 1
}

body[ready][concierge=modal] .devsite-concierge-menu {
  border-top: 0;
  border-radius: 8px 0 0 8px
}

.devsite-concierge-panel {
  background: var(--devsite-background-1);
  border-top: 1px solid #bdc1c6;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  width: calc(var(--devsite-concierge-width-open) - var(--devsite-concierge-width-closed))
}

[dir=ltr] .devsite-concierge-panel {
  border-left: var(--devsite-concierge-border,0)
}

[dir=rtl] .devsite-concierge-panel {
  border-right: var(--devsite-concierge-border,0)
}

.devsite-concierge-panel>* {
  display: none
}

.devsite-concierge-panel>[active] {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

body[ready][concierge=modal] .devsite-concierge-panel {
  border-radius: 0 8px 8px 0;
  border-top: 0
}

.devsite-concierge-menu {
  overflow: visible;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 12px
}

.devsite-concierge-panel-open {
  width: var(--devsite-concierge-width-open,355px)
}

.devsite-concierge-panel-open .devsite-concierge-panel {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

.devsite-concierge-menu-item {
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0 2px
}

.devsite-concierge-menu--hidden {
  display: none
}

.devsite-concierge-menu-icon {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  color: #5f6368;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  -webkit-transition: background-color .3s cubic-bezier(.4,0,.2,1);
  transition: background-color .3s cubic-bezier(.4,0,.2,1);
  width: 40px
}

.devsite-concierge-menu-icon:active,.devsite-concierge-menu-icon:hover {
  background-color: #e8f0fe;
  border-radius: 50%
}

.devsite-concierge-menu-icon .material-icons {
  font-size: 20px
}

.devsite-concierge-menu-icon svg path {
  fill: #5f6368
}

[appearance=dark] .devsite-concierge-menu-icon svg path {
  fill: #9aa0a6
}

[appearance=dark] .devsite-concierge-menu-icon:active,[appearance=dark] .devsite-concierge-menu-icon:hover {
  background-color: #3c4043
}

.devsite-concierge-menu-title {
  text-align: center;
  color: #5f6368;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer
}

[appearance=dark] .devsite-concierge-menu-title {
  color: #9aa0a6
}

.devsite-concierge-menu-item--selected .devsite-concierge-menu-icon {
  background-color: #e8f0fe
}

.devsite-concierge-menu-item--selected .devsite-concierge-menu-icon svg path {
  fill: #1a73e8
}

[appearance=dark] .devsite-concierge-menu-item--selected .devsite-concierge-menu-icon {
  background-color: #3c4043
}

[appearance=dark] .devsite-concierge-menu-item--selected .devsite-concierge-menu-icon svg path {
  fill: #8ab4f8
}

.devsite-concierge-menu-item--selected .devsite-concierge-menu-title {
  color: #1a73e8
}

[appearance=dark] .devsite-concierge-menu-item--selected .devsite-concierge-menu-title {
  color: #8ab4f8
}

.devsite-concierge-menu-item--selected:after {
  background: #1967d2;
  content: "";
  height: 42px;
  position: absolute;
  top: 0;
  width: 4px
}

[appearance=dark] .devsite-concierge-menu-item--selected:after {
  background-color: #8ab4f8
}

[dir=ltr] .devsite-concierge-menu-item--selected:after {
  border-radius: 4px 0 0 4px;
  right: 0
}

[dir=rtl] .devsite-concierge-menu-item--selected:after {
  border-radius: 0 4px 4px 0;
  left: 0
}

.devsite-concierge-notification-dot {
  width: 10px;
  height: 10px;
  position: absolute;
  border-radius: 50%;
  background: #0b57d0;
  top: 2px;
  right: 8px;
  -webkit-animation-name: notificationDotAnimation;
  animation-name: notificationDotAnimation;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-iteration-count: 3;
  animation-iteration-count: 3
}

@-webkit-keyframes notificationDotAnimation {
  0% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }

  30% {
      -webkit-transform: scale3d(1.25,.75,1);
      transform: scale3d(1.25,.75,1)
  }

  40% {
      -webkit-transform: scale3d(.75,1.25,1);
      transform: scale3d(.75,1.25,1)
  }

  50% {
      -webkit-transform: scale3d(1.15,.85,1);
      transform: scale3d(1.15,.85,1)
  }

  65% {
      -webkit-transform: scale3d(.95,1.05,1);
      transform: scale3d(.95,1.05,1)
  }

  75% {
      -webkit-transform: scale3d(1.05,.95,1);
      transform: scale3d(1.05,.95,1)
  }

  to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }
}

@keyframes notificationDotAnimation {
  0% {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }

  30% {
      -webkit-transform: scale3d(1.25,.75,1);
      transform: scale3d(1.25,.75,1)
  }

  40% {
      -webkit-transform: scale3d(.75,1.25,1);
      transform: scale3d(.75,1.25,1)
  }

  50% {
      -webkit-transform: scale3d(1.15,.85,1);
      transform: scale3d(1.15,.85,1)
  }

  65% {
      -webkit-transform: scale3d(.95,1.05,1);
      transform: scale3d(.95,1.05,1)
  }

  75% {
      -webkit-transform: scale3d(1.05,.95,1);
      transform: scale3d(1.05,.95,1)
  }

  to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }
}

.devsite-concierge-notification {
  font-size: 12px;
  top: 8px;
  border-radius: 12px;
  white-space: nowrap;
  color: #fff;
  background: #1967d2;
  padding: 0 12px;
  position: absolute;
  cursor: pointer;
  pointer-events: none;
  -webkit-animation: notifcationAnimation .5s ease-out .15s forwards;
  animation: notifcationAnimation .5s ease-out .15s forwards;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  opacity: 0
}

[dir=ltr] .devsite-concierge-notification {
  right: calc(100% - 8px)
}

[dir=rtl] .devsite-concierge-notification {
  left: calc(100% - 8px)
}

@-webkit-keyframes notifcationAnimation {
  0% {
      opacity: 1;
      -webkit-transform: translateZ(0) scaleX(1);
      transform: translateZ(0) scaleX(1)
  }

  to {
      opacity: 0;
      -webkit-transform: translate3d(12px,0,0) scale3d(.9,.9,.9);
      transform: translate3d(12px,0,0) scale3d(.9,.9,.9)
  }
}

@keyframes notifcationAnimation {
  0% {
      opacity: 1;
      -webkit-transform: translateZ(0) scaleX(1);
      transform: translateZ(0) scaleX(1)
  }

  to {
      opacity: 0;
      -webkit-transform: translate3d(12px,0,0) scale3d(.9,.9,.9);
      transform: translate3d(12px,0,0) scale3d(.9,.9,.9)
  }
}

@media screen and (max-width: 840px) {
  body[ready] devsite-concierge,devsite-concierge {
      display:none
  }
}

devsite-concierge-ai-panel .devsite-concierge-panel-header {
  padding: 12px 16px;
  border-bottom: var(--devsite-concierge-border)
}

devsite-concierge-ai-panel .devsite-concierge-panel-loading,devsite-concierge-ai-panel .devsite-concierge-tos-accept,devsite-concierge-ai-panel .devsite-concierge-tos-intro {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 11px;
  padding: 0 35px
}

devsite-concierge-ai-panel .devsite-concierge-tos-accept {
  -webkit-box-align: start;
  -webkit-align-items: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: start;
  gap: 9px
}

devsite-concierge-ai-panel .devsite-concierge-tos-accept .devsite-tos-title {
  font-size: 16px;
  font-weight: 500;
  font-color: #3c4043
}

devsite-concierge-ai-panel .devsite-concierge-tos-accept .devsite-tos-button-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 8px;
  -webkit-margin-before: 12px;
  margin-block-start:12px;--devsite-button-sibling-gap-x: 0;
  --devsite-button-padding: 0 15px
}

devsite-concierge-ai-panel .devsite-concierge-panel-header-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  gap: 2px;
  height: 40px
}

devsite-concierge-ai-panel .devsite-concierge-panel-header-row h2 {
  --devsite-h2-margin: 0;
  --devsite-h2-font: 500 16px/24px var(--devsite-headline-font-family);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-size: 16px;
  line-height: 24px;
  -webkit-margin-end: 10px;
  -moz-margin-end: 10px;
  margin-inline-end:10px}

devsite-concierge-ai-panel .devsite-concierge-panel-header-row h3 {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 500 12px/16px var(--devsite-headline-font-family);
  background: #feefe3;
  border-radius: 4px;
  color: #b31412;
  font-size: 12px;
  line-height: 16px;
  padding: 2px 6px;
  text-transform: uppercase
}

devsite-concierge-ai-panel .devsite-concierge-panel-header-button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  color: #5f6368;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 20px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-decoration: none;
  line-height: 28px;
  width: 32px;
  height: 32px
}

devsite-concierge-ai-panel .devsite-concierge-panel-header-button:active,devsite-concierge-ai-panel .devsite-concierge-panel-header-button:focus,devsite-concierge-ai-panel .devsite-concierge-panel-header-button:hover {
  background: #e8eaed;
  text-decoration: none
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-header-button {
  color: #9aa0a6
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-header-button:active,[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-header-button:focus,[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-header-button:hover {
  background: #3c4043
}

devsite-concierge-ai-panel .devsite-concierge-panel-sections {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  gap: 10px;
  overflow: auto;
  padding: 16px
}

devsite-concierge-ai-panel .devsite-concierge-panel-section {
  border: var(--devsite-concierge-border);
  border-radius: 8px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0
}

[layout=docs] devsite-concierge-ai-panel .devsite-concierge-panel-section h1,[layout=docs] devsite-concierge-ai-panel .devsite-concierge-panel-section h2,[layout=docs] devsite-concierge-ai-panel .devsite-concierge-panel-section h3,[layout=docs] devsite-concierge-ai-panel .devsite-concierge-panel-section h4,[layout=docs] devsite-concierge-ai-panel .devsite-concierge-panel-section h5,[layout=docs] devsite-concierge-ai-panel .devsite-concierge-panel-section h6 {
  -webkit-margin-end: 0;
  -moz-margin-end: 0;
  margin-inline-end:0;-webkit-padding-end: 0;
  -moz-padding-end: 0;
  padding-inline-end:0}

devsite-concierge-ai-panel .devsite-concierge-panel-section-header {
  border-bottom: var(--devsite-concierge-border);
  padding: 14px 16px
}

devsite-concierge-ai-panel .devsite-concierge-panel-section-content {
  padding: 16px
}

devsite-concierge-ai-panel .devsite-concierge-panel-section-fill {
  min-height: 200px;
  overflow: auto;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1
}

devsite-concierge-ai-panel .devsite-concierge-panel-feedback {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  justify-self: flex-end;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-ai-panel .devsite-concierge-panel-section h3 {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 700 13px/21px var(--devsite-headline-font-family);
  font-size: 13px;
  line-height: 21px;
  color: #5f6368
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-section h3 {
  color: #e8eaed
}

[type=article] devsite-concierge-ai-panel .devsite-concierge-panel-section p,[type=pricing] devsite-concierge-ai-panel .devsite-concierge-panel-section p,[type=product] devsite-concierge-ai-panel .devsite-concierge-panel-section p,[type=reference] devsite-concierge-ai-panel .devsite-concierge-panel-section p {
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  margin: 0
}

[concierge=modal] devsite-concierge-ai-panel .devsite-concierge-panel-close,[concierge=modal] devsite-concierge-ai-panel .devsite-concierge-panel-fullscreen {
  display: none
}

devsite-concierge-ai-panel .devsite-concierge-panel-dock {
  display: none
}

[concierge=modal] devsite-concierge-ai-panel .devsite-concierge-panel-dock {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-ai-panel .devsite-concierge-panel-section--loading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 4px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

@-webkit-keyframes pulse {
  0%,to {
      opacity: 1
  }

  50% {
      opacity: .5
  }
}

devsite-concierge-ai-panel .devsite-concierge-panel-section--loading .devsite-concierge-panel-section-header {
  border-bottom: 1px solid transparent
}

devsite-concierge-ai-panel .devsite-concierge-panel-section--loading h2.devsite-concierge-panel-skeleton {
  height: 21px
}

devsite-concierge-ai-panel .devsite-concierge-panel-section--loading .devsite-concierge-panel-skeleton {
  background: var(--tenant-background-3);
  border-radius: 4px;
  margin: 0 0 4px;
  font-size: 13px;
  height: 21px;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite
}

devsite-concierge-ai-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:first-child {
  width: 100%
}

devsite-concierge-ai-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(2) {
  width: 50%
}

devsite-concierge-ai-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(3) {
  width: 33%
}

devsite-concierge-ai-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(4) {
  width: 66%
}

devsite-concierge-ai-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(5) {
  width: 25%
}

devsite-concierge-ai-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(6) {
  width: 44%
}

[appearance=dark] devsite-concierge-ai-panel input[type=text] {
  --devsite-input-color: #bdc1c6
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-section {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 0
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-header {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: var(--devsite-concierge-border);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -moz-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  padding: 12px 16px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-header-titles {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 8px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-header h2 {
  color: #5f6368;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  margin: 0
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-header h2 {
  color: #e8eaed
}

[layout=docs] devsite-concierge-ai-panel .devsite-concierge-panel-chat-header h3,[layout=full] devsite-concierge-ai-panel .devsite-concierge-panel-chat-header h3 {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #f3e8fd;
  border-radius: 4px;
  color: #681da8;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  gap: 6px;
  line-height: 14px;
  margin: 0;
  padding: 3px 6px;
  -webkit-padding-end: 8px;
  -moz-padding-end: 8px;
  padding-inline-end:8px;text-transform: uppercase
}

[layout=docs][appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-header h3,[layout=full][appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-header h3 {
  background: #a59d97;
  color: #40251f
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat--reset,devsite-concierge-ai-panel .devsite-concierge-panel-chat--reset[disabled] {
  --devsite-button-color: #5f6368;
  --devsite-button-line-height: 21px;
  --devsite-button-border: 0;
  --devsite-button-disabled-border: 0;
  --devsite-button-disabled-line-height: 24px;
  min-width: auto
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-body {
  background: #f8f9fa;
  border-radius: 0 0 8px 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: hidden;
  gap: 8px
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-body {
  background: #36373a
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-form {
  background: #fff;
  border-radius: 30px;
  border: 1px solid #dadce0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 4px;
  padding: 0;
  -webkit-padding-start: 20px;
  -moz-padding-start: 20px;
  padding-inline-start:20px;margin-bottom: 8px;
  --devsite-input-border: 0;
  --devsite-input-padding: 0;
  --devsite-input-border-bottom-focus: 0;
  --devsite-input-padding-bottom-focus: 0;
  --devsite-input-height: 45px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-form[disabled] {
  --devsite-input-background: var(--devsite-background-3);
  background: var(--devsite-background-3)
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-form {
  --devsite-input-background: #202124;
  background: #202124
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-header,devsite-concierge-ai-panel .devsite-concierge-panel-chat-inputs {
  --devsite-button-border: 0;
  --devsite-button-padding: 0;
  --devsite-button-height: auto;
  --devsite-button-background-hover: 0;
  --devsite-button-border-hover: 0;
  --devsite-button-box-shadow-active: 0;
  --devsite-button-background-active: 0;
  --devsite-button-border-active: 0;
  --devsite-button-disabled-background: 0;
  --devsite-button-disabled-border: 0
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-inputs {
  padding: 0 16px 16px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-input {
  --devsite-input-border-radius: 0;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-size: 13px
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-input {
  --devsite-background-3: #202124
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-button {
  --devsite-button-background: 0
}

[dir=rtl] devsite-concierge-ai-panel .devsite-concierge-panel-chat-button {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg)
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-button {
  color: #5f6368
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-user-button {
  --devsite-button-padding: 0 16px;
  --devsite-button-border: 1px solid #dadce0;
  --devsite-button-border-hover: 1px solid #dadce0
}

devsite-concierge-ai-panel p.devsite-concierge-panel-chat-disclaimer {
  color: rgba(0,0,0,.55);
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  margin: 0;
  padding: 0;
  text-align: center
}

[appearance=dark] devsite-concierge-ai-panel p.devsite-concierge-panel-chat-disclaimer {
  color: #9aa0a6
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: calc(var(--devsite-concierge-width-open) - 91px);
  padding: 16px 16px 0;
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  overflow: scroll
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-loading,devsite-concierge-ai-panel .devsite-concierge-panel-chat-requires-access {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  width: 100%
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-requires-access {
  text-align: center;
  gap: 8px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-requires-access h3 {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #202124
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-requires-access .button {
  --devsite-button-background: none;
  margin-top: 16px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-row {
  -webkit-animation: fadeInChatRow .5s;
  animation: fadeInChatRow .5s;
  margin: 8px 0
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-row:first-child {
  margin-top: 0
}

@-webkit-keyframes fadeInChatRow {
  0% {
      opacity: 0;
      -webkit-transform: translate3d(0,12px,0);
      transform: translate3d(0,12px,0)
  }

  to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
  }
}

@keyframes fadeInChatRow {
  0% {
      opacity: 0;
      -webkit-transform: translate3d(0,12px,0);
      transform: translate3d(0,12px,0)
  }

  to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0)
  }
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-system,devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-user,devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions {
  color: #3c4043;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-system,[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-user,[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions {
  color: #e8eaed
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-system,devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions {
  background: #fff;
  border-radius: 8px;
  padding: 16px 0
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-system,[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions {
  background: #202124
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  padding: 16px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions-icon {
  padding-top: 2px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions-icon svg {
  width: 16px;
  height: 16px;
  fill: #1a73e8
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions-icon svg {
  fill: #8ab4f8
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-system dd,devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-system ol,devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-system p,devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-system ul,devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions dd,devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions ol,devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions p,devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions ul {
  padding: 0 16px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-system ol,devsite-concierge-ai-panel .devsite-concierge-panel-chat-from-system ul,devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions ol,devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions ul {
  -webkit-margin-start: 16px;
  -moz-margin-start: 16px;
  margin-inline-start:16px}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-references {
  padding: 16px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-references h3 {
  color: #80868b;
  font-size: 10px;
  line-height: 14px;
  font-weight: 500;
  text-transform: uppercase
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-references ul {
  padding: 0;
  -webkit-margin-start: 0;
  -moz-margin-start: 0;
  margin-inline-start:0}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-references ul li {
  -webkit-margin-start: 0;
  -moz-margin-start: 0;
  margin-inline-start:0;overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0 2px;
  list-style: none
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-references ul li a {
  --devsite-link-color: #1967d2
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  margin: 8px 0 0;
  padding: 0
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions ul li {
  line-height: 21px;
  margin: 0
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-quickprompt-questions a {
  font-size: 13px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-communicating {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 4px;
  padding: 0 16px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-communicating span {
  -webkit-animation: devsite-concierge-panel-chat-dot-blink 1.5s infinite;
  animation: devsite-concierge-panel-chat-dot-blink 1.5s infinite;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  background-color: #1967d2;
  border-radius: 50%;
  height: 6px;
  opacity: 0;
  width: 6px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-communicating span:nth-child(2) {
  -webkit-animation-delay: .2s;
  animation-delay: .2s
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-communicating span:nth-child(3) {
  -webkit-animation-delay: .4s;
  animation-delay: .4s
}

[appearance=dark] devsite-concierge-ai-panel .devsite-concierge-panel-chat-communicating span {
  background-color: #8ab4f8
}

@-webkit-keyframes devsite-concierge-panel-chat-dot-blink {
  0%,to {
      opacity: .1
  }

  20% {
      opacity: 1
  }
}

@keyframes devsite-concierge-panel-chat-dot-blink {
  0%,to {
      opacity: .1
  }

  20% {
      opacity: 1
  }
}

devsite-concierge-ai-panel .devsite-concierge-panel-recommendations {
  min-height: 200px
}

devsite-concierge-ai-panel pre code {
  font-size: 13px
}

devsite-concierge-ai-panel devsite-code pre {
  --devsite-code-padding-inline: 16px
}

[concierge=modal] devsite-concierge-ai-panel .devsite-concierge-panel-sections {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row
}

[concierge=modal] devsite-concierge-ai-panel .devsite-concierge-panel-recommendations {
  -webkit-flex-basis: 286px;
  -ms-flex-preferred-size: 286px;
  flex-basis: 286px
}

[concierge=modal] devsite-concierge-ai-panel .devsite-concierge-panel-chat-section {
  height: 100%;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1
}

[concierge=modal] devsite-concierge-ai-panel .devsite-concierge-panel-chat-container {
  max-width: 100%
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-row .feedback-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 16px 16px 0
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-row .feedback-icon {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 5px
}

devsite-concierge-ai-panel .devsite-concierge-panel-chat-row .feedback-icon.clicked {
  background-color: #d2e3fc
}

devsite-concierge-ai-panel .devsite-concierge-chat-bug-feedback.chat-container {
  padding: 16px
}

devsite-concierge-ai-panel .devsite-concierge-chat-bug-feedback .chat-thanks {
  margin-bottom: 10px
}

devsite-concierge-ai-panel .devsite-concierge-chat-bug-feedback .chat-prompt {
  padding: 0
}

devsite-concierge-ai-panel .devsite-concierge-chat-bug-feedback .chat-button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 10px;
  padding: 0 16px
}

devsite-concierge-ai-panel .devsite-concierge-chat-bug-feedback .chat-icon {
  margin-right: 0;
  top: 0
}

devsite-concierge-apix {
  height: 100%
}

devsite-concierge-apix .apis-explorer {
  background: inherit;
  height: 100%
}

devsite-concierge-apix .apis-explorer iframe {
  height: 100%;
  width: 100%
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-header {
  padding: 12px 16px;
  border-bottom: var(--devsite-concierge-border)
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-loading,devsite-concierge-api-explorer-panel .devsite-concierge-tos-accept,devsite-concierge-api-explorer-panel .devsite-concierge-tos-intro {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 11px;
  padding: 0 35px
}

devsite-concierge-api-explorer-panel .devsite-concierge-tos-accept {
  -webkit-box-align: start;
  -webkit-align-items: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: start;
  gap: 9px
}

devsite-concierge-api-explorer-panel .devsite-concierge-tos-accept .devsite-tos-title {
  font-size: 16px;
  font-weight: 500;
  font-color: #3c4043
}

devsite-concierge-api-explorer-panel .devsite-concierge-tos-accept .devsite-tos-button-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 8px;
  -webkit-margin-before: 12px;
  margin-block-start:12px;--devsite-button-sibling-gap-x: 0;
  --devsite-button-padding: 0 15px
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-chat-user-button {
  --devsite-button-padding: 0 16px;
  --devsite-button-border: 1px solid #dadce0;
  --devsite-button-border-hover: 1px solid #dadce0
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  gap: 2px;
  height: 40px
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-row h2 {
  --devsite-h2-margin: 0;
  --devsite-h2-font: 500 16px/24px var(--devsite-headline-font-family);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-size: 16px;
  line-height: 24px;
  -webkit-margin-end: 10px;
  -moz-margin-end: 10px;
  margin-inline-end:10px}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-row h3 {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 500 12px/16px var(--devsite-headline-font-family);
  background: #feefe3;
  border-radius: 4px;
  color: #b31412;
  font-size: 12px;
  line-height: 16px;
  padding: 2px 6px;
  text-transform: uppercase
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  color: #5f6368;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 20px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-decoration: none;
  line-height: 28px;
  width: 32px;
  height: 32px
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-button:active,devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-button:focus,devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-button:hover {
  background: #e8eaed;
  text-decoration: none
}

[appearance=dark] devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-button {
  color: #9aa0a6
}

[appearance=dark] devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-button:active,[appearance=dark] devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-button:focus,[appearance=dark] devsite-concierge-api-explorer-panel .devsite-concierge-panel-header-button:hover {
  background: #3c4043
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-sections {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  gap: 10px;
  overflow: auto;
  padding: 16px
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section {
  border: var(--devsite-concierge-border);
  border-radius: 8px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0
}

[layout=docs] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section h1,[layout=docs] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section h2,[layout=docs] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section h3,[layout=docs] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section h4,[layout=docs] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section h5,[layout=docs] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section h6 {
  -webkit-margin-end: 0;
  -moz-margin-end: 0;
  margin-inline-end:0;-webkit-padding-end: 0;
  -moz-padding-end: 0;
  padding-inline-end:0}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section-header {
  border-bottom: var(--devsite-concierge-border);
  padding: 14px 16px
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section-content {
  padding: 16px
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section-fill {
  min-height: 200px;
  overflow: auto;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-feedback {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  justify-self: flex-end;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section h3 {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 700 13px/21px var(--devsite-headline-font-family);
  font-size: 13px;
  line-height: 21px;
  color: #5f6368
}

[appearance=dark] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section h3 {
  color: #e8eaed
}

[type=article] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section p,[type=pricing] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section p,[type=product] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section p,[type=reference] devsite-concierge-api-explorer-panel .devsite-concierge-panel-section p {
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  margin: 0
}

[concierge=modal] devsite-concierge-api-explorer-panel .devsite-concierge-panel-close,[concierge=modal] devsite-concierge-api-explorer-panel .devsite-concierge-panel-fullscreen {
  display: none
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-dock {
  display: none
}

[concierge=modal] devsite-concierge-api-explorer-panel .devsite-concierge-panel-dock {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section--loading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 4px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section--loading .devsite-concierge-panel-section-header {
  border-bottom: 1px solid transparent
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section--loading h2.devsite-concierge-panel-skeleton {
  height: 21px
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section--loading .devsite-concierge-panel-skeleton {
  background: var(--tenant-background-3);
  border-radius: 4px;
  margin: 0 0 4px;
  font-size: 13px;
  height: 21px;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:first-child {
  width: 100%
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(2) {
  width: 50%
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(3) {
  width: 33%
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(4) {
  width: 66%
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(5) {
  width: 25%
}

devsite-concierge-api-explorer-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(6) {
  width: 44%
}

devsite-concierge-api-explorer-panel .devsite-concierge-api-explorer-panel-discover-apis-section {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 500 16px/24px var(--devsite-headline-font-family);
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  gap: 8px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-concierge-api-explorer-panel .devsite-concierge-api-explorer-panel-discover-apis-section p {
  color: #5f6368;
  font-size: 14px;
  margin: 0
}

devsite-concierge-api-explorer-panel .devsite-concierge-api-explorer-panel-discover-apis-section a {
  margin-top: 8px
}

devsite-concierge-api-explorer-panel .devsite-discover-apis-icon {
  margin-bottom: 8px
}

devsite-concierge-info-panel {
  --devsite-toc-border-width: 0;
  --devsite-nav-list-padding-x-start: 0
}

devsite-concierge-info-panel .devsite-concierge-panel-header {
  padding: 12px 16px;
  border-bottom: var(--devsite-concierge-border)
}

devsite-concierge-info-panel .devsite-concierge-panel-loading,devsite-concierge-info-panel .devsite-concierge-tos-accept,devsite-concierge-info-panel .devsite-concierge-tos-intro {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 11px;
  padding: 0 35px
}

devsite-concierge-info-panel .devsite-concierge-tos-accept {
  -webkit-box-align: start;
  -webkit-align-items: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: start;
  gap: 9px
}

devsite-concierge-info-panel .devsite-concierge-tos-accept .devsite-tos-title {
  font-size: 16px;
  font-weight: 500;
  font-color: #3c4043
}

devsite-concierge-info-panel .devsite-concierge-tos-accept .devsite-tos-button-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 8px;
  -webkit-margin-before: 12px;
  margin-block-start:12px;--devsite-button-sibling-gap-x: 0;
  --devsite-button-padding: 0 15px
}

devsite-concierge-info-panel .devsite-concierge-panel-chat-user-button {
  --devsite-button-padding: 0 16px;
  --devsite-button-border: 1px solid #dadce0;
  --devsite-button-border-hover: 1px solid #dadce0
}

devsite-concierge-info-panel .devsite-concierge-panel-header-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  gap: 2px;
  height: 40px
}

devsite-concierge-info-panel .devsite-concierge-panel-header-row h2 {
  --devsite-h2-margin: 0;
  --devsite-h2-font: 500 16px/24px var(--devsite-headline-font-family);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-size: 16px;
  line-height: 24px;
  -webkit-margin-end: 10px;
  -moz-margin-end: 10px;
  margin-inline-end:10px}

devsite-concierge-info-panel .devsite-concierge-panel-header-row h3 {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 500 12px/16px var(--devsite-headline-font-family);
  background: #feefe3;
  border-radius: 4px;
  color: #b31412;
  font-size: 12px;
  line-height: 16px;
  padding: 2px 6px;
  text-transform: uppercase
}

devsite-concierge-info-panel .devsite-concierge-panel-header-button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  color: #5f6368;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 20px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-decoration: none;
  line-height: 28px;
  width: 32px;
  height: 32px
}

devsite-concierge-info-panel .devsite-concierge-panel-header-button:active,devsite-concierge-info-panel .devsite-concierge-panel-header-button:focus,devsite-concierge-info-panel .devsite-concierge-panel-header-button:hover {
  background: #e8eaed;
  text-decoration: none
}

[appearance=dark] devsite-concierge-info-panel .devsite-concierge-panel-header-button {
  color: #9aa0a6
}

[appearance=dark] devsite-concierge-info-panel .devsite-concierge-panel-header-button:active,[appearance=dark] devsite-concierge-info-panel .devsite-concierge-panel-header-button:focus,[appearance=dark] devsite-concierge-info-panel .devsite-concierge-panel-header-button:hover {
  background: #3c4043
}

devsite-concierge-info-panel .devsite-concierge-panel-sections {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  gap: 10px;
  overflow: auto;
  padding: 16px
}

devsite-concierge-info-panel .devsite-concierge-panel-section {
  border: var(--devsite-concierge-border);
  border-radius: 8px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0
}

[layout=docs] devsite-concierge-info-panel .devsite-concierge-panel-section h1,[layout=docs] devsite-concierge-info-panel .devsite-concierge-panel-section h2,[layout=docs] devsite-concierge-info-panel .devsite-concierge-panel-section h3,[layout=docs] devsite-concierge-info-panel .devsite-concierge-panel-section h4,[layout=docs] devsite-concierge-info-panel .devsite-concierge-panel-section h5,[layout=docs] devsite-concierge-info-panel .devsite-concierge-panel-section h6 {
  -webkit-margin-end: 0;
  -moz-margin-end: 0;
  margin-inline-end:0;-webkit-padding-end: 0;
  -moz-padding-end: 0;
  padding-inline-end:0}

devsite-concierge-info-panel .devsite-concierge-panel-section-header {
  border-bottom: var(--devsite-concierge-border);
  padding: 14px 16px
}

devsite-concierge-info-panel .devsite-concierge-panel-section-content {
  padding: 16px
}

devsite-concierge-info-panel .devsite-concierge-panel-section-fill {
  min-height: 200px;
  overflow: auto;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1
}

devsite-concierge-info-panel .devsite-concierge-panel-feedback {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  justify-self: flex-end;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-info-panel .devsite-concierge-panel-section h3 {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 700 13px/21px var(--devsite-headline-font-family);
  font-size: 13px;
  line-height: 21px;
  color: #5f6368
}

[appearance=dark] devsite-concierge-info-panel .devsite-concierge-panel-section h3 {
  color: #e8eaed
}

[type=article] devsite-concierge-info-panel .devsite-concierge-panel-section p,[type=pricing] devsite-concierge-info-panel .devsite-concierge-panel-section p,[type=product] devsite-concierge-info-panel .devsite-concierge-panel-section p,[type=reference] devsite-concierge-info-panel .devsite-concierge-panel-section p {
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  margin: 0
}

[concierge=modal] devsite-concierge-info-panel .devsite-concierge-panel-close,[concierge=modal] devsite-concierge-info-panel .devsite-concierge-panel-fullscreen {
  display: none
}

devsite-concierge-info-panel .devsite-concierge-panel-dock {
  display: none
}

[concierge=modal] devsite-concierge-info-panel .devsite-concierge-panel-dock {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-info-panel .devsite-concierge-panel-section--loading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 4px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-concierge-info-panel .devsite-concierge-panel-section--loading .devsite-concierge-panel-section-header {
  border-bottom: 1px solid transparent
}

devsite-concierge-info-panel .devsite-concierge-panel-section--loading h2.devsite-concierge-panel-skeleton {
  height: 21px
}

devsite-concierge-info-panel .devsite-concierge-panel-section--loading .devsite-concierge-panel-skeleton {
  background: var(--tenant-background-3);
  border-radius: 4px;
  margin: 0 0 4px;
  font-size: 13px;
  height: 21px;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite
}

devsite-concierge-info-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:first-child {
  width: 100%
}

devsite-concierge-info-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(2) {
  width: 50%
}

devsite-concierge-info-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(3) {
  width: 33%
}

devsite-concierge-info-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(4) {
  width: 66%
}

devsite-concierge-info-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(5) {
  width: 25%
}

devsite-concierge-info-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(6) {
  width: 44%
}

devsite-concierge-info-panel .devsite-concierge-info-panel-tags {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-flow: row wrap;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0
}

devsite-concierge-info-panel .devsite-concierge-info-panel-tags li {
  background: #f1f3f4;
  font-size: 14px;
  line-height: 20px;
  margin: 0;
  padding: 0 8px
}

[appearance=dark] devsite-concierge-info-panel .devsite-concierge-info-panel-tags li {
  background: #36373a;
  color: #9aa0a6
}

devsite-concierge-info-panel .devsite-concierge-info-panel-toggle-tags {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 6px
}

devsite-concierge-info-panel .devsite-concierge-info-panel-toggle-tags:active,devsite-concierge-info-panel .devsite-concierge-info-panel-toggle-tags:hover {
  text-decoration: none
}

devsite-concierge-info-panel devsite-toc .devsite-nav-heading {
  display: none
}

devsite-concierge-info-panel devsite-toc ul ul {
  --devsite-nav-list-padding-x-start: 12px
}

devsite-concierge-info-panel devsite-toc a.devsite-nav-title {
  color: var(--devsite-nav-title-color,var(--devsite-primary-text-color))
}

@media screen and (max-width: 1253px) {
  devsite-concierge-info-panel devsite-toc.devsite-toc,devsite-concierge-info-panel devsite-toc[visible].devsite-toc {
      display:block
  }
}

devsite-concierge-my-activity-panel {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-header {
  padding: 12px 16px;
  border-bottom: var(--devsite-concierge-border)
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-loading,devsite-concierge-my-activity-panel .devsite-concierge-tos-accept,devsite-concierge-my-activity-panel .devsite-concierge-tos-intro {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 11px;
  padding: 0 35px
}

devsite-concierge-my-activity-panel .devsite-concierge-tos-accept {
  -webkit-box-align: start;
  -webkit-align-items: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: start;
  gap: 9px
}

devsite-concierge-my-activity-panel .devsite-concierge-tos-accept .devsite-tos-title {
  font-size: 16px;
  font-weight: 500;
  font-color: #3c4043
}

devsite-concierge-my-activity-panel .devsite-concierge-tos-accept .devsite-tos-button-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 8px;
  -webkit-margin-before: 12px;
  margin-block-start:12px;--devsite-button-sibling-gap-x: 0;
  --devsite-button-padding: 0 15px
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-chat-user-button {
  --devsite-button-padding: 0 16px;
  --devsite-button-border: 1px solid #dadce0;
  --devsite-button-border-hover: 1px solid #dadce0
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-header-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  gap: 2px;
  height: 40px
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-header-row h2 {
  --devsite-h2-margin: 0;
  --devsite-h2-font: 500 16px/24px var(--devsite-headline-font-family);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-size: 16px;
  line-height: 24px;
  -webkit-margin-end: 10px;
  -moz-margin-end: 10px;
  margin-inline-end:10px}

devsite-concierge-my-activity-panel .devsite-concierge-panel-header-row h3 {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 500 12px/16px var(--devsite-headline-font-family);
  background: #feefe3;
  border-radius: 4px;
  color: #b31412;
  font-size: 12px;
  line-height: 16px;
  padding: 2px 6px;
  text-transform: uppercase
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-header-button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  color: #5f6368;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 20px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-decoration: none;
  line-height: 28px;
  width: 32px;
  height: 32px
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-header-button:active,devsite-concierge-my-activity-panel .devsite-concierge-panel-header-button:focus,devsite-concierge-my-activity-panel .devsite-concierge-panel-header-button:hover {
  background: #e8eaed;
  text-decoration: none
}

[appearance=dark] devsite-concierge-my-activity-panel .devsite-concierge-panel-header-button {
  color: #9aa0a6
}

[appearance=dark] devsite-concierge-my-activity-panel .devsite-concierge-panel-header-button:active,[appearance=dark] devsite-concierge-my-activity-panel .devsite-concierge-panel-header-button:focus,[appearance=dark] devsite-concierge-my-activity-panel .devsite-concierge-panel-header-button:hover {
  background: #3c4043
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-sections {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  gap: 10px;
  overflow: auto;
  padding: 16px
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section {
  border: var(--devsite-concierge-border);
  border-radius: 8px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0
}

[layout=docs] devsite-concierge-my-activity-panel .devsite-concierge-panel-section h1,[layout=docs] devsite-concierge-my-activity-panel .devsite-concierge-panel-section h2,[layout=docs] devsite-concierge-my-activity-panel .devsite-concierge-panel-section h3,[layout=docs] devsite-concierge-my-activity-panel .devsite-concierge-panel-section h4,[layout=docs] devsite-concierge-my-activity-panel .devsite-concierge-panel-section h5,[layout=docs] devsite-concierge-my-activity-panel .devsite-concierge-panel-section h6 {
  -webkit-margin-end: 0;
  -moz-margin-end: 0;
  margin-inline-end:0;-webkit-padding-end: 0;
  -moz-padding-end: 0;
  padding-inline-end:0}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section-header {
  border-bottom: var(--devsite-concierge-border);
  padding: 14px 16px
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section-content {
  padding: 16px
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section-fill {
  min-height: 200px;
  overflow: auto;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-feedback {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  justify-self: flex-end;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section h3 {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 700 13px/21px var(--devsite-headline-font-family);
  font-size: 13px;
  line-height: 21px;
  color: #5f6368
}

[appearance=dark] devsite-concierge-my-activity-panel .devsite-concierge-panel-section h3 {
  color: #e8eaed
}

[type=article] devsite-concierge-my-activity-panel .devsite-concierge-panel-section p,[type=pricing] devsite-concierge-my-activity-panel .devsite-concierge-panel-section p,[type=product] devsite-concierge-my-activity-panel .devsite-concierge-panel-section p,[type=reference] devsite-concierge-my-activity-panel .devsite-concierge-panel-section p {
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  margin: 0
}

[concierge=modal] devsite-concierge-my-activity-panel .devsite-concierge-panel-close,[concierge=modal] devsite-concierge-my-activity-panel .devsite-concierge-panel-fullscreen {
  display: none
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-dock {
  display: none
}

[concierge=modal] devsite-concierge-my-activity-panel .devsite-concierge-panel-dock {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section--loading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 4px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section--loading .devsite-concierge-panel-section-header {
  border-bottom: 1px solid transparent
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section--loading h2.devsite-concierge-panel-skeleton {
  height: 21px
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section--loading .devsite-concierge-panel-skeleton {
  background: var(--tenant-background-3);
  border-radius: 4px;
  margin: 0 0 4px;
  font-size: 13px;
  height: 21px;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:first-child {
  width: 100%
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(2) {
  width: 50%
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(3) {
  width: 33%
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(4) {
  width: 66%
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(5) {
  width: 25%
}

devsite-concierge-my-activity-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(6) {
  width: 44%
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-header {
  padding: 12px 16px;
  border-bottom: var(--devsite-concierge-border)
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-loading,devsite-concierge-recommendations-panel .devsite-concierge-tos-accept,devsite-concierge-recommendations-panel .devsite-concierge-tos-intro {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 11px;
  padding: 0 35px
}

devsite-concierge-recommendations-panel .devsite-concierge-tos-accept {
  -webkit-box-align: start;
  -webkit-align-items: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: start;
  gap: 9px
}

devsite-concierge-recommendations-panel .devsite-concierge-tos-accept .devsite-tos-title {
  font-size: 16px;
  font-weight: 500;
  font-color: #3c4043
}

devsite-concierge-recommendations-panel .devsite-concierge-tos-accept .devsite-tos-button-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 8px;
  -webkit-margin-before: 12px;
  margin-block-start:12px;--devsite-button-sibling-gap-x: 0;
  --devsite-button-padding: 0 15px
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-chat-user-button {
  --devsite-button-padding: 0 16px;
  --devsite-button-border: 1px solid #dadce0;
  --devsite-button-border-hover: 1px solid #dadce0
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-header-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  gap: 2px;
  height: 40px
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-header-row h2 {
  --devsite-h2-margin: 0;
  --devsite-h2-font: 500 16px/24px var(--devsite-headline-font-family);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-size: 16px;
  line-height: 24px;
  -webkit-margin-end: 10px;
  -moz-margin-end: 10px;
  margin-inline-end:10px}

devsite-concierge-recommendations-panel .devsite-concierge-panel-header-row h3 {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 500 12px/16px var(--devsite-headline-font-family);
  background: #feefe3;
  border-radius: 4px;
  color: #b31412;
  font-size: 12px;
  line-height: 16px;
  padding: 2px 6px;
  text-transform: uppercase
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-header-button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  color: #5f6368;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 20px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-decoration: none;
  line-height: 28px;
  width: 32px;
  height: 32px
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-header-button:active,devsite-concierge-recommendations-panel .devsite-concierge-panel-header-button:focus,devsite-concierge-recommendations-panel .devsite-concierge-panel-header-button:hover {
  background: #e8eaed;
  text-decoration: none
}

[appearance=dark] devsite-concierge-recommendations-panel .devsite-concierge-panel-header-button {
  color: #9aa0a6
}

[appearance=dark] devsite-concierge-recommendations-panel .devsite-concierge-panel-header-button:active,[appearance=dark] devsite-concierge-recommendations-panel .devsite-concierge-panel-header-button:focus,[appearance=dark] devsite-concierge-recommendations-panel .devsite-concierge-panel-header-button:hover {
  background: #3c4043
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-sections {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  gap: 10px;
  overflow: auto;
  padding: 16px
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section {
  border: var(--devsite-concierge-border);
  border-radius: 8px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0
}

[layout=docs] devsite-concierge-recommendations-panel .devsite-concierge-panel-section h1,[layout=docs] devsite-concierge-recommendations-panel .devsite-concierge-panel-section h2,[layout=docs] devsite-concierge-recommendations-panel .devsite-concierge-panel-section h3,[layout=docs] devsite-concierge-recommendations-panel .devsite-concierge-panel-section h4,[layout=docs] devsite-concierge-recommendations-panel .devsite-concierge-panel-section h5,[layout=docs] devsite-concierge-recommendations-panel .devsite-concierge-panel-section h6 {
  -webkit-margin-end: 0;
  -moz-margin-end: 0;
  margin-inline-end:0;-webkit-padding-end: 0;
  -moz-padding-end: 0;
  padding-inline-end:0}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section-header {
  border-bottom: var(--devsite-concierge-border);
  padding: 14px 16px
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section-content {
  padding: 16px
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section-fill {
  min-height: 200px;
  overflow: auto;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-feedback {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  justify-self: flex-end;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section h3 {
  --devsite-h3-margin: 0;
  --devsite-h3-font: 700 13px/21px var(--devsite-headline-font-family);
  font-size: 13px;
  line-height: 21px;
  color: #5f6368
}

[appearance=dark] devsite-concierge-recommendations-panel .devsite-concierge-panel-section h3 {
  color: #e8eaed
}

[type=article] devsite-concierge-recommendations-panel .devsite-concierge-panel-section p,[type=pricing] devsite-concierge-recommendations-panel .devsite-concierge-panel-section p,[type=product] devsite-concierge-recommendations-panel .devsite-concierge-panel-section p,[type=reference] devsite-concierge-recommendations-panel .devsite-concierge-panel-section p {
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  margin: 0
}

[concierge=modal] devsite-concierge-recommendations-panel .devsite-concierge-panel-close,[concierge=modal] devsite-concierge-recommendations-panel .devsite-concierge-panel-fullscreen {
  display: none
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-dock {
  display: none
}

[concierge=modal] devsite-concierge-recommendations-panel .devsite-concierge-panel-dock {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section--loading {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 4px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section--loading .devsite-concierge-panel-section-header {
  border-bottom: 1px solid transparent
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section--loading h2.devsite-concierge-panel-skeleton {
  height: 21px
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section--loading .devsite-concierge-panel-skeleton {
  background: var(--tenant-background-3);
  border-radius: 4px;
  margin: 0 0 4px;
  font-size: 13px;
  height: 21px;
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:first-child {
  width: 100%
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(2) {
  width: 50%
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(3) {
  width: 33%
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(4) {
  width: 66%
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(5) {
  width: 25%
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section--loading>.devsite-concierge-panel-skeleton:nth-child(6) {
  width: 44%
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-section {
  border: 0
}

devsite-concierge-recommendations-panel .devsite-concierge-panel-recommendations {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

devsite-concierge-recommendations-panel devsite-recommended-content {
  --devsite-card-border: var(--devsite-concierge-border)
}

devsite-concierge-recommendations-panel devsite-recommended-content .skeleton-item {
  --tenant-primary-border: var(--devsite-concierge-border)
}

devsite-concierge-recommendations-panel devsite-recommended-content .devsite-recommended-content-list {
  --devsite-columns: 1;
  --devsite-landing-row-item-gap: 10px
}

devsite-concierge-recommendations-panel devsite-recommended-content .devsite-recommended-content-item {
  padding: 16px
}

[appearance=dark] devsite-concierge-recommendations-panel devsite-recommended-content .devsite-recommended-content-item-doc-type:before {
  color: #9aa0a6
}

devsite-concierge-recommendations-panel devsite-recommended-content h3.devsite-recommended-content-item-heading {
  min-height: auto;
  font-weight: 500
}

[layout=docs] devsite-concierge-recommendations-panel devsite-recommended-content h3.devsite-recommended-content-item-heading,[layout=full] devsite-concierge-recommendations-panel devsite-recommended-content h3.devsite-recommended-content-item-heading {
  min-height: 0;
  -webkit-margin-end: 0;
  -moz-margin-end: 0;
  margin-inline-end:0;-webkit-padding-end: 0;
  -moz-padding-end: 0;
  padding-inline-end:0}

devsite-concierge-recommendations-panel devsite-recommended-content .devsite-recommended-content-item-description {
  min-height: auto
}

devsite-concierge-recommendations-panel devsite-recommended-content .skeleton-list {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-concierge-recommendations-panel devsite-recommended-content .skeleton-list .skeleton-item {
  width: 100%
}

[concierge=modal] devsite-concierge-recommendations-panel .devsite-concierge-panel-sections {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row
}

[concierge=modal] devsite-concierge-recommendations-panel .devsite-concierge-panel-recommendations {
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1
}

[concierge=modal] devsite-concierge-recommendations-panel devsite-recommended-content .devsite-recommended-content-list {
  --devsite-columns: 4;
  --devsite-landing-row-item-gap: 24px
}

@media screen and (max-width: 1253px) {
  [concierge=modal] devsite-concierge-recommendations-panel devsite-recommended-content .devsite-recommended-content-list {
      --devsite-columns:3
  }
}

.devsite-content-excellence-dialog.has-dashboard {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding: 0;
  width: 100%
}

.devsite-content-excellence-dialog.has-dashboard .devsite-dialog-contents {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding: 0
}

.devsite-content-excellence-dialog.has-dashboard .dialog-title {
  -webkit-border-after: 1px solid #dadce0;
  border-block-end:1px solid #dadce0;display: grid;
  gap: 12px;
  grid-gap: 12px;
  grid-template-areas: "title message close";
  grid-template-columns: auto 1fr auto;
  -webkit-margin-after: 8px;
  margin-block-end:8px;padding-block:20px;padding-inline:24px;width: 100%
}

.devsite-content-excellence-dialog.has-dashboard h3 {
  font: 400 18px/30px var(--devsite-headline-font-family);
  grid-area: title
}

.devsite-content-excellence-dialog.has-dashboard p {
  font: 14px/20px var(--devsite-primary-font-family);
  grid-area: message
}

.devsite-content-excellence-dialog.has-dashboard h3,.devsite-content-excellence-dialog.has-dashboard p {
  -webkit-align-self: baseline;
  -ms-flex-item-align: baseline;
  align-self: baseline;
  margin: 0
}

.devsite-content-excellence-dialog.has-dashboard .devsite-dialog-close {
  align-self: flex-start;
  grid-area: close;
  margin: -4px
}

.devsite-content-excellence-dialog.has-dashboard aside {
  display: grid;
  grid-template-columns: auto 1fr auto;
  -webkit-margin-after: 12px;
  margin-block-end:12px;-webkit-margin-before: 16px;
  margin-block-start:16px;margin-inline:auto;max-width: 800px
}

.devsite-content-excellence-dialog.has-dashboard .dismiss-aside {
  background: var(--devsite-note-notice-background);
  -webkit-margin-start: 16px;
  -moz-margin-start: 16px;
  margin-inline-start:16px}

.devsite-content-excellence-dialog.has-dashboard .dashboard-embed {
  height: 100%;
  padding-inline:40px;width: 100%
}

.devsite-content-excellence-dialog.has-link h3 {
  text-align: initial
}

.devsite-content-excellence-dialog.has-link aside {
  -webkit-margin-after: 0;
  margin-block-end:0}

.devsite-content-excellence-dialog.has-link .devsite-dialog-buttons {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-padding-after: 16px;
  padding-block-end:16px;-webkit-padding-before: 8px;
  padding-block-start:8px;padding-inline:16px}

devsite-content-footer {
  clear: both;
  color: var(--devsite-secondary-text-rgba);
  display: block;
  font: 13px/20px var(--devsite-primary-font-family)
}

devsite-content-footer :link,devsite-content-footer :visited {
  color: var(--devsite-contrast-link-color)
}

devsite-cookie-consent {
  background: #e8f0fe;
  bottom: 0;
  color: #3c4043;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  font: 14px/20px var(--devsite-primary-font-family);
  gap: 32px;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1018
}

devsite-cookie-consent .icon {
  color: #1967d2;
  cursor: default;
  -webkit-padding-before: 14px;
  padding-block-start:14px;padding-inline:16px}

devsite-cookie-consent .content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: auto;
  max-width: 1210px
}

devsite-cookie-consent .disclosure {
  padding-block:16px}

devsite-cookie-consent .controls {
  -webkit-box-align: end;
  -webkit-align-items: end;
  -moz-box-align: end;
  -ms-flex-align: end;
  align-items: end;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  gap: 8px;
  -webkit-box-pack: end;
  -webkit-justify-content: end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
  -webkit-margin-after: 8px;
  margin-block-end:8px;-webkit-margin-end: 8px;
  -moz-margin-end: 8px;
  margin-inline-end:8px}

devsite-cookie-consent .button+.button {
  margin: 0
}

[appearance=dark] devsite-cookie-consent {
  background: #394457;
  color: #dadce0
}

[appearance=dark] devsite-cookie-consent .icon,[appearance=dark] devsite-cookie-consent :link,[appearance=dark] devsite-cookie-consent :visited {
  color: #8ab4f8
}

[appearance=dark] devsite-cookie-consent .button {
  background: #8ab4f8;
  border: none;
  color: #202124
}

@media screen and (max-width: 840px) {
  devsite-cookie-consent {
      -webkit-box-orient:vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 20px
  }

  devsite-cookie-consent .content {
      -webkit-margin-end: 16px;
      -moz-margin-end: 16px;
      margin-inline-end:16px}

  devsite-cookie-consent .disclosure {
      -webkit-padding-after: 0;
      padding-block-end:0}
}

devsite-countdown {
  --devsite-countdown-box-height: 158px;
  --devsite-countdown-box-margin: 0 12px;
  --devsite-countdown-box-width: 220px;
  --devsite-countdown-display: flex;
  --devsite-countdown-gap: unset;
  --devsite-countdown-grid: unset;
  --devsite-countdown-label-font: 500 32px "Google Sans";
  --devsite-countdown-number-font: 700 64px/56px "Google Sans"
}

@media screen and (max-width: 825px) {
  devsite-countdown {
      --devsite-countdown-box-height:100px;
      --devsite-countdown-box-margin: 0;
      --devsite-countdown-box-width: 100%;
      --devsite-countdown-display: grid;
      --devsite-countdown-gap: 10px 18px;
      --devsite-countdown-grid: auto-flow/1fr 1fr;
      --devsite-countdown-label-font: 500 22px "Google Sans";
      --devsite-countdown-number-font: 700 44px/56px "Google Sans"
  }
}

devsite-countdown {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: var(--devsite-countdown-display);
  gap: var(--devsite-countdown-gap);
  grid: var(--devsite-countdown-grid);
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 20px
}

devsite-countdown .devsite-countdown-box {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #dadce0;
  border-radius: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: var(--devsite-countdown-box-height);
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: var(--devsite-countdown-box-margin);
  width: var(--devsite-countdown-box-width)
}

devsite-countdown .devsite-countdown-number {
  font: var(--devsite-countdown-number-font)
}

devsite-countdown .devsite-countdown-label {
  font: var(--devsite-countdown-label-font)
}

devsite-credentials-dialog {
  border: 1px dashed #f439a0;
  cursor: pointer;
  padding: 2px
}

.devsite-credentials-dialog .devsite-credentials-dialog-credentials,.devsite-credentials-dialog .devsite-credentials-dialog-oauth-message,.devsite-credentials-dialog .devsite-credentials-dialog-projects {
  margin-top: 16px
}

.devsite-credentials-dialog devsite-spinner {
  margin: auto
}

.devsite-credentials-dialog .devsite-credentials-dialog-selector {
  width: 100%
}

devsite-cse {
  display: block
}

devsite-cse table {
  border-collapse: inherit;
  margin: 0
}

devsite-cse tr {
  background: var(--devsite-background-1);
  border: 0
}

devsite-cse td {
  padding: 0
}

devsite-cse .gsc-control-cse,devsite-cse .gsc-control-cse .gsc-table-result {
  background: 0;
  border: 0;
  font: 400 16px/24px var(--devsite-primary-font-family);
  padding: 0
}

devsite-cse .gsc-above-wrapper-area {
  display: none
}

devsite-cse .gsc-results {
  width: 100%
}

devsite-cse .has-cse-filter .gsc-webResult.gsc-result:has(.gs-spelling) {
  display: none
}

devsite-cse .gsc-results .gsc-imageResult,devsite-cse .gsc-webResult.gsc-result,devsite-cse .gsc-webResult.gsc-result:hover {
  background: 0
}

devsite-cse .gsc-results .gsc-cursor-box {
  margin: 8px 0
}

devsite-cse .gsc-table-result,devsite-cse .gsc-thumbnail-inside,devsite-cse .gsc-url-top {
  padding-left: 0;
  padding-right: 0
}

devsite-cse .gs-error-result .gs-snippet,devsite-cse .gs-no-results-result .gs-snippet,devsite-cse .gs-webResult:not(.gs-no-results-result):not(.gs-error-result) .gs-snippet {
  color: var(--devsite-primary-text-color)
}

devsite-cse .gs-error-result .gs-snippet,devsite-cse .gs-no-results-result .gs-snippet {
  background: 0;
  border: 0;
  margin: 0;
  padding: 0
}

devsite-cse .gcsc-find-more-on-google {
  margin: 0
}

devsite-cse .has-cse-filter .gcsc-find-more-on-google {
  display: none
}

devsite-cse .gcsc-find-more-on-google,devsite-cse .gsc-control-cse .gs-imageResult a.gs-title:link,devsite-cse .gsc-control-cse .gs-imageResult a.gs-title:link b,devsite-cse .gsc-control-cse .gs-imageResult a.gs-title:visited,devsite-cse .gsc-control-cse .gs-imageResult a.gs-title:visited b,devsite-cse .gsc-control-cse .gs-result .gs-title,devsite-cse .gsc-control-cse .gs-result .gs-title *,devsite-cse .gsc-control-cse .gs-webResult.gs-result a.gs-title:link,devsite-cse .gsc-control-cse .gs-webResult.gs-result a.gs-title:link b,devsite-cse .gsc-control-cse .gs-webResult.gs-result a.gs-title:visited,devsite-cse .gsc-control-cse .gs-webResult.gs-result a.gs-title:visited b {
  color: var(--devsite-link-color);
  font: 500 16px/24px var(--devsite-primary-font-family);
  height: auto;
  text-decoration: none
}

devsite-cse .gcsc-find-more-on-google-magnifier {
  fill: var(--devsite-link-color)
}

devsite-cse .gsc-results .gsc-cursor-box .gsc-cursor-page {
  background: 0;
  border-color: transparent;
  color: var(--devsite-link-color)
}

devsite-cse .gsc-control-cse .gs-imageResult a.gs-title:focus,devsite-cse .gsc-control-cse .gs-result .gs-title:focus,devsite-cse .gsc-control-cse .gs-webResult.gs-result a.gs-title:focus {
  text-decoration: underline
}

devsite-cse .gsc-control-cse .gs-result .gs-title b {
  font-weight: 700
}

devsite-cse .gs-imageResult div.gs-visibleUrl,devsite-cse .gs-webResult div.gs-visibleUrl {
  color: var(--devsite-search-results-breadcrumb-color);
  font-size: 14px
}

devsite-cse .gcsc-branding {
  display: none
}

devsite-device {
  display: block;
  margin: 16px 0
}

devsite-device>.devsite-device-options {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 12px;
  margin: 0 0 24px
}

devsite-device .devsite-device-input {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 0 24px
}

devsite-device .devsite-device-input>input {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-inline:0 16px}

devsite-device [type=radio],devsite-device [type=radio]:after,devsite-device [type=radio]:before {
  display: none
}

devsite-device [type=radio]+label {
  border: var(--devsite-primary-border);
  box-shadow: none;
  font: 500 14px/36px var(--devsite-headline-font-family);
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 16px;
  color: var(--devsite-link-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 32px;
  padding: 0 16px;
  -webkit-transition: background .2s,border .2s,box-shadow .2s,color .2s;
  transition: background .2s,border .2s,box-shadow .2s,color .2s
}

devsite-device [type=radio]+label:focus,devsite-device [type=radio]+label:hover {
  background: var(--devsite-link-background-active)
}

devsite-device [type=radio]:checked+label {
  background: var(--devsite-link-color);
  border-color: var(--devsite-link-color);
  color: var(--devsite-inverted-text-color)
}

devsite-device>.devsite-device {
  overflow: hidden;
  position: relative
}

devsite-device[device=desktop]>.devsite-device {
  max-width: 100%;
  padding-bottom: 62.5%
}

devsite-device[device=tablet]>.devsite-device {
  max-width: 60%;
  padding-bottom: 80%
}

devsite-device[device=mobile]>.devsite-device {
  max-width: 32.109375%;
  padding-bottom: 57.109375%
}

devsite-device iframe {
  background: var(--devsite-background-1);
  border: solid var(--devsite-device-border-color);
  height: 166.6666666667%;
  position: absolute;
  -webkit-transform: scale(.6);
  transform: scale(.6);
  width: 166.6666666667%
}

[dir=ltr] devsite-device iframe {
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0
}

[dir=rtl] devsite-device iframe {
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0
}

devsite-device[device=desktop] iframe {
  border-radius: 16px;
  border-width: 32px 16px
}

devsite-device[device=tablet] iframe {
  border-radius: 24px;
  border-width: 60px 16px
}

devsite-device[device=mobile] iframe {
  border-radius: 36px;
  border-width: 60px 12px
}

devsite-dropdown-list:not([ready]) {
  background: 0;
  visibility: hidden;
  position: relative;
  z-index: 2
}

devsite-dropdown-list[ready] {
  visibility: visible
}

devsite-dynamic-content {
  display: block;
  margin: var(--devsite-dynamic-content-margin,20px 0);
  width: 100%
}

.devsite-dynamic-content-display-tag-container {
  list-style: none;
  padding: 12px 0
}

.devsite-dynamic-content-display-tag-container:empty {
  display: none
}

devsite-dynamic-content .devsite-card-progress {
  background: var(--devsite-progress-background);
  height: 2px;
  margin: 0 -16px;
  overflow: hidden;
  width: auto
}

devsite-dynamic-content .devsite-card-progress-bar {
  background: var(--devsite-progress-bar-color);
  height: 2px;
  -webkit-transform: translateX(-101%);
  transform: translateX(-101%);
  -webkit-transition: background .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: background .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),background .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),background .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1)
}

devsite-dynamic-content .devsite-card-progress-info {
  font: 13px/20px var(--devsite-primary-font-family);
  margin-top: 2px;
  opacity: 0;
  -webkit-transform: translateY(12px);
  transform: translateY(12px);
  -webkit-transition: opacity .213s cubic-bezier(.4,0,1,1),-webkit-transform .213s cubic-bezier(.4,0,1,1);
  transition: opacity .213s cubic-bezier(.4,0,1,1),-webkit-transform .213s cubic-bezier(.4,0,1,1);
  transition: transform .213s cubic-bezier(.4,0,1,1),opacity .213s cubic-bezier(.4,0,1,1);
  transition: transform .213s cubic-bezier(.4,0,1,1),opacity .213s cubic-bezier(.4,0,1,1),-webkit-transform .213s cubic-bezier(.4,0,1,1)
}

devsite-dynamic-content .devsite-card-progress-info.show {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: opacity .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: opacity .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),opacity .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),opacity .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1)
}

devsite-dynamic-content .devsite-card-progress-info:empty:before {
  content: " "
}

.devsite-dynamic-content-display-tag {
  background: var(--devsite-background-3);
  border-radius: var(--devsite-display-tag-border-radius);
  color: var(--devsite-display-tag-color,var(--devsite-secondary-text-color));
  display: inline-block;
  font: var(--devsite-display-tag-font,500 14px/20px var(--devsite-primary-font-family));
  margin-block:0 12px;margin-inline:0 4px;padding: var(--devsite-display-tag-padding,1px 8px)
}

devsite-dynamic-content .devsite-label-confidential {
  font: 500 11px/16px var(--devsite-primary-font-family);
  letter-spacing: .8px;
  background: var(--devsite-caution-notice-background);
  border-radius: var(--devsite-label-border-radius,4px);
  color: var(--devsite-caution-notice-color);
  display: inline-block;
  margin-block:0 8px;padding-block:5px 3px;padding-inline:8px;text-transform: uppercase
}

devsite-dynamic-content .devsite-dynamic-content-no-results {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-background-1);
  border: var(--devsite-secondary-border);
  border-radius: var(--devsite-card-border-radius);
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 32px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  max-width: 100%;
  padding: 25px 55px;
  width: 100%
}

devsite-dynamic-content .devsite-dynamic-content-no-results-image {
  display: var(--devsite-dynamic-content-no-results-image-display,block);
  max-width: 100%;
  width: 250px
}

devsite-dynamic-content devsite-pagination {
  margin-top: 20px
}

devsite-dynamic-hero {
  display: none
}

devsite-dynamic-hero img {
  object-fit: contain;
  padding: 50px
}

devsite-dynamic-hero .scale-down img {
  max-height: 180px;
  object-fit: scale-down;
  padding: 0
}

devsite-dynamic-hero a:focus {
  text-decoration: none
}

devsite-dynamic-hero .devsite-landing-row-item-description-content {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis
}

devsite-dynamic-hero .devsite-landing-row-item-image .material-icons {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 190px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 55px
}

.dgc-hero.fade-in {
  -webkit-animation: dynamic-hero-fade-in 1s;
  animation: dynamic-hero-fade-in 1s;
  background: url(../images/dynamic-hero-background.svg) 100%/contain no-repeat;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

[appearance=dark] .dgc-hero.fade-in {
  background-image: url(../images/dynamic-hero-background-dark.svg)
}

.dgc-hero.fade-in devsite-dynamic-hero {
  display: block
}

.dgc-hero.fade-out {
  -webkit-animation: dynamic-hero-fade-out .5s forwards;
  animation: dynamic-hero-fade-out .5s forwards
}

.dgc-dynamic-hero {
  display: none
}

@media screen and (max-width: 840px) {
  .dgc-hero.fade-in {
      background-image:url(../images/dynamic-hero-background-cropped.svg)
  }

  [appearance=dark] .dgc-hero.fade-in {
      background-image: url(../images/dynamic-hero-background-dark-cropped.svg)
  }

  devsite-dynamic-hero .devsite-landing-row-item-image .material-icons,devsite-dynamic-hero img {
      padding: 0 30px 0 0
  }

  devsite-dynamic-hero .devsite-landing-row-item-description-content {
      -webkit-line-clamp: 3;
      max-width: 100%
  }
}

@media screen and (max-width: 600px) {
  .dgc-hero.fade-in {
      background:unset
  }

  [appearance=dark] .dgc-hero.fade-in {
      background: unset
  }

  devsite-dynamic-hero .devsite-landing-row-item-image .material-icons,devsite-dynamic-hero img {
      padding: 0
  }
}

@-webkit-keyframes dynamic-hero-fade-in {
  0% {
      opacity: 0
  }

  to {
      opacity: 1
  }
}

@keyframes dynamic-hero-fade-in {
  0% {
      opacity: 0
  }

  to {
      opacity: 1
  }
}

@-webkit-keyframes dynamic-hero-fade-out {
  0% {
      opacity: 1
  }

  to {
      opacity: 0
  }
}

@keyframes dynamic-hero-fade-out {
  0% {
      opacity: 1
  }

  to {
      opacity: 0
  }
}

.pac-container {
  z-index: 2000
}

devsite-edit-profile {
  display: grid;
  grid: auto/calc(50% - 12px) calc(50% - 12px);
  margin-block:0 18px;margin-inline:24px;gap: 20px
}

devsite-edit-profile .waiting-container {
  margin: auto
}

devsite-edit-profile .devsite-edit-profile-error-incorrect,devsite-edit-profile .devsite-edit-profile-error-missing {
  display: none;
  color: #ea4335;
  font-size: 12px;
  margin: 2px 0 0 14px
}

devsite-edit-profile .devsite-edit-profile-textarea {
  grid-column: 1/3;
  min-height: 110px
}

devsite-edit-profile .devsite-edit-profile-input {
  display: block;
  position: relative;
  min-height: 86px
}

devsite-edit-profile .devsite-edit-profile-input[incorrect] .devsite-edit-profile-error-incorrect,devsite-edit-profile .devsite-edit-profile-input[missing] .devsite-edit-profile-error-missing {
  display: inline-block
}

devsite-edit-profile .devsite-edit-profile-input-length,devsite-edit-profile .devsite-edit-profile-private-chip {
  color: var(--devsite-secondary-text-color);
  font-size: 12px;
  font-weight: 500;
  margin: 2px 0 0 14px;
  display: inline-block
}

devsite-edit-profile .devsite-edit-profile-input-length .material-symbols-outlined,devsite-edit-profile .devsite-edit-profile-private-chip .material-symbols-outlined {
  font-size: 12px;
  font-variation-settings: "FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48;
  top: 2px;
  position: relative
}

devsite-edit-profile.devsite-edit-profile-small {
  grid: auto/auto
}

devsite-edit-profile.devsite-edit-profile-small .devsite-edit-profile-textarea {
  grid-column: unset
}

devsite-expandable {
  display: block;
  min-height: 24px
}

devsite-expandable:not([expanded])>:not(.showalways):not(.expand-control):not(.exw-control) {
  display: none
}

devsite-expandable .exw-control>.showalways {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-expandable .exw-control>h2.showalways {
  margin: 40px 0 20px;
  padding-bottom: 7px
}

devsite-expandable .exw-control>h3.showalways {
  margin: 34px 0 20px
}

devsite-expandable .exw-control>h4.showalways {
  margin: 36px 0 20px
}

devsite-expandable .expand-control:not(button):not(.button) {
  color: var(--devsite-link-color);
  cursor: pointer
}

devsite-expandable a.exw-control:active,devsite-expandable a.exw-control:focus,devsite-expandable a.exw-control:hover {
  color: var(--devsite-link-color);
  cursor: pointer;
  outline: 0;
  text-decoration: none
}

devsite-expandable a.exw-control>.showalways:before {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-secondary-text-color);
  content: "add_circle";
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  height: 20px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-margin-before: 4px;
  margin-block-start:4px;-webkit-margin-end: 12px;
  -moz-margin-end: 12px;
  margin-inline-end:12px;-webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  width: 20px
}

devsite-expandable.arrow-icon a.exw-control>.showalways:before {
  content: "chevron_right"
}

[dir=rtl] devsite-expandable.arrow-icon a.exw-control>.showalways:before {
  content: "chevron_left"
}

devsite-expandable[expanded]>a.exw-control>.showalways:before {
  content: "remove_circle"
}

devsite-expandable.arrow-icon[expanded]>a.exw-control>.showalways:before {
  content: "keyboard_arrow_down"
}

devsite-expandable a.exw-control:focus>.showalways:before,devsite-expandable a.exw-control:hover>.showalways:before {
  color: var(--devsite-link-color)
}

devsite-expandable .collapse-content-msg,devsite-expandable[expanded] .expand-content-msg {
  display: none
}

devsite-expandable[expanded] .collapse-content-msg {
  display: inline
}

devsite-content devsite-expandable devsite-expandable {
  margin-left: 40px
}

devsite-extradory {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

devsite-extradory .devsite-extra-dory-iframe {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-extradory .devsite-extra-dory-iframe iframe {
  width: 100%;
  height: 100%;
  border: 0
}

devsite-extradory h2 {
  font-size: 24px;
  color: #3c4043;
  text-align: center;
  line-height: 32px;
  margin: 0;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center
}

devsite-extradory .devsite-extradory-create-profile {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center
}

devsite-extradory .devsite-extradory-step1,devsite-extradory .devsite-extradory-step2,devsite-extradory .devsite-extradory-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  width: 100%;
  padding: 20px
}

devsite-extradory .devsite-extradory-create-profile {
  margin-top: 26px
}

devsite-extradory p {
  font-size: 16px;
  color: #3c4043;
  line-height: 24px
}

devsite-extradory .devsite-extradory-cta label,devsite-extradory .devsite-extradory-cta p {
  font-size: 14px;
  color: #3c4043;
  line-height: 29px;
  margin: 0
}

devsite-extradory .devsite-extradory-buttons,devsite-extradory .devsite-extradory-join-group,devsite-extradory .devsite-extradory-try-again-buttons {
  margin-top: 36px
}

devsite-extradory .devsite-extradory-spinner {
  padding: 64px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%
}

devsite-extradory .devsite-extradory-try-again-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%
}

devsite-extradory .devsite-extradory-authorize,devsite-extradory .devsite-extradory-change-account,devsite-extradory .devsite-extradory-join-group,devsite-extradory .devsite-extradory-not-eligible,devsite-extradory .devsite-extradory-sign-in,devsite-extradory .devsite-extradory-try-again {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center
}

.devsite-fast-track-creator-dialog {
  padding: 24px
}

devsite-fast-track-profile-creator label {
  font-size: 16px
}

devsite-fast-track-profile-creator h4 {
  margin: 0 0 10px
}

devsite-fast-track-profile-creator .sub-text {
  color: var(--devsite-secondary-text-color);
  font: 400 12px/16px var(--devsite-primary-font-family);
  letter-spacing: .3px;
  -webkit-padding-start: 16px;
  -moz-padding-start: 16px;
  padding-inline-start:16px;margin: 5px 0 20px
}

devsite-fast-track-profile-creator .tos {
  margin: 12px 0 24px
}

devsite-fast-track-profile-creator devsite-spinner {
  margin-right: 8px
}

devsite-fast-track-profile-creator .devsite-devprofile-callout-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end
}

devsite-feature-tooltip:not([ready])>[slot] {
  display: none
}

devsite-feature-tooltip {
  display: block
}

devsite-feature-tooltip [slot].step {
  display: none
}

devsite-feature-tooltip [slot].step.current {
  display: block
}

devsite-dialog.devsite-feedback .devsite-dialog-contents {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0
}

devsite-dialog.devsite-feedback h3 {
  margin: 0 0 20px;
  padding: 16px 16px 0
}

devsite-dialog.devsite-feedback .devsite-feedback-items {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 6px
}

devsite-dialog.devsite-feedback .devsite-feedback-item {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-secondary-text-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0;
  -moz-box-flex: 1;
  -ms-flex: 1 0 0px;
  flex: 1 0 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  text-decoration: none
}

devsite-dialog.devsite-feedback .devsite-feedback-item-type {
  color: var(--devsite-link-color)
}

devsite-dialog.devsite-feedback .devsite-feedback-item:focus>.devsite-feedback-item-type {
  text-decoration: underline
}

devsite-dialog.devsite-feedback .devsite-feedback-item-icon-container {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 48px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 8px 0;
  width: 48px
}

devsite-dialog.devsite-feedback .devsite-feedback-item-icon-color {
  background-color: var(--devsite-feedback-icon-background,var(--devsite-primary-color,var(--devsite-primary-text-color)));
  border-radius: 50%;
  color: var(--devsite-inverted-text-color)
}

devsite-dialog.devsite-feedback .devsite-feedback-item-icon {
  font-size: 32px
}

devsite-dialog.devsite-feedback .devsite-feedback-item-icon-container img {
  max-width: 100%
}

devsite-dialog.devsite-feedback .devsite-feedback-notice,devsite-dialog.devsite-feedback .devsite-feedback-support {
  padding: 16px 16px 0;
  text-align: center
}

devsite-dialog.devsite-feedback .devsite-feedback-support-icon {
  font-size: 18px;
  margin-right: 4px;
  vertical-align: middle
}

devsite-dialog.devsite-feedback .devsite-feedback-support-icon+span {
  vertical-align: middle
}

devsite-dialog.devsite-feedback .devsite-feedback-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: var(--devsite-feedback-buttons-padding,16px 0 0)
}

devsite-filter {
  display: block
}

.devsite-filter-input,devsite-filter input[type=text] {
  --devsite-input-width: 100%
}

devsite-filter>.devsite-table-wrapper:first-child>table {
  margin-top: 0
}

devsite-filter [results-count-container] {
  color: var(--devsite-filter-results-count-color);
  font-family: var(--devsite-filter-results-count-font-family);
  margin: var(--devsite-filter-results-count-margin,16px 0)
}

devsite-filter[sortable] th:hover {
  cursor: pointer
}

devsite-filter th[sort-ascending],devsite-filter th[sort-descending] {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none
}

devsite-filter th[sort-ascending]:after,devsite-filter th[sort-descending]:after {
  content: "arrow_drop_down";
  display: inline-block;
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  margin: -2px 0 0;
  position: absolute;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: -webkit-transform .2s;
  transition: -webkit-transform .2s;
  transition: transform .2s;
  transition: transform .2s,-webkit-transform .2s;
  vertical-align: middle
}

devsite-filter th[sort-descending]:after {
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg)
}

devsite-filter[hide-if-empty][empty] {
  display: none
}

devsite-filter[highlight] mark {
  background-color: #ffe168
}

devsite-filter[highlight] mark:after,devsite-filter[highlight] mark:before {
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(1px,1px,1px,1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px
}

devsite-filter[highlight] mark:before {
  content: " [highlight start] "
}

devsite-filter[highlight] mark:after {
  content: " [highlight end] "
}

devsite-filter .devsite-filter-input-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  position: relative
}

devsite-filter .devsite-filter-clear-button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-searchbox-placeholder,var(--devsite-secondary-text-color));
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: normal normal normal 14px/1 Material Icons;
  height: var(--devsite-input-height,36px);
  inset-inline: auto 0;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  outline: 0;
  position: absolute;
  width: var(--devsite-input-height,36px)
}

devsite-filter .devsite-filter-clear-button:before {
  content: "close"
}

devsite-filter .devsite-filter-clear-button:focus:before,devsite-filter .devsite-filter-clear-button:hover:before {
  background: var(--devsite-background-5);
  border-radius: 50%;
  padding: 4px
}

devsite-footer-linkboxes {
  background: var(--devsite-footer-background,var(--devsite-background-1));
  color: var(--devsite-footer-color);
  display: block;
  font: var(--devsite-footer-linkboxes-font,400 14px/16px var(--devsite-primary-font-family));
  padding: var(--devsite-footer-linkboxes-padding)
}

devsite-footer-linkboxes .devsite-footer-linkboxes-list {
  border-bottom: var(--devsite-primary-border);
  display: grid;
  grid-gap: 24px;
  grid-template-columns: var(--devsite-footer-linkboxes-grid-template-columns);
  list-style: none;
  padding: 24px 0
}

devsite-footer-linkboxes .devsite-footer-linkbox {
  margin: 0
}

devsite-footer-linkboxes .devsite-footer-linkbox-heading {
  font: var(--devsite-footer-heading-font,500 14px/16px var(--devsite-primary-font-family));
  margin: var(--devsite-footer-heading-margin,0 0 8px);
  text-transform: var(--devsite-footer-heading-text-transform)
}

devsite-footer-linkboxes .devsite-footer-linkbox-list .devsite-footer-linkbox-heading {
  margin: var(--devsite-footer-list-heading-margin,40px 0 0)
}

devsite-footer-linkboxes .devsite-footer-linkbox-list {
  list-style-type: none;
  padding: 0
}

devsite-footer-linkboxes .devsite-footer-linkbox-item {
  margin: 0
}

devsite-footer-linkboxes .devsite-footer-linkbox-link {
  color: var(--devsite-footer-link-color,var(--devsite-primary-text-color));
  display: inline-block;
  padding: 8px 0
}

devsite-footer-linkboxes .devsite-footer-linkbox-link:focus,devsite-footer-linkboxes .devsite-footer-linkbox-link:hover {
  color: var(--devsite-footer-link-hover,var(--devsite-link-color));
  font-weight: var(--devsite-footer-link-font-weight-hover);
  text-decoration: none
}

devsite-footer-linkboxes .devsite-footer-linkbox-description {
  color: var(--devsite-secondary-text-color);
  font: var(--devsite-footer-description-font,14px/20px var(--devsite-primary-font-family));
  margin: 0 0 16px
}

devsite-footer-linkboxes .devsite-footer-linkbox-icon {
  margin-block:0 4px}

devsite-footer-promos {
  background: var(--devsite-footer-background,var(--devsite-background-1));
  border-top: var(--devsite-footer-border,var(--devsite-primary-border));
  color: var(--devsite-footer-color);
  display: block;
  font: 14px/20px var(--devsite-primary-font-family);
  padding: 0 24px
}

devsite-footer-promos .devsite-footer-promos-list {
  border-bottom: var(--devsite-primary-border);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 0 24px;
  list-style: none;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  padding: 18px 0
}

devsite-footer-promos .devsite-footer-promo {
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 192px;
  -moz-box-flex: 0;
  -ms-flex: 0 1 192px;
  flex: 0 1 192px;
  margin: 20px 0;
  text-align: center
}

devsite-footer-promos .devsite-footer-promo-icon {
  color: var(--devsite-text-color,var(--devsite-primary-text-rgba));
  display: block;
  font-size: 48px;
  height: 48px;
  margin-block:0 8px;margin-inline:auto;width: 48px
}

devsite-footer-promos .devsite-footer-promo-title {
  color: var(--devsite-footer-heading-color,var(--devsite-primary-text-rgba));
  display: block;
  font: var(--devsite-footer-heading-font);
  font-weight: var(--devsite-footer-heading-font-weight,500)
}

devsite-footer-promos .devsite-footer-promo-title:focus,devsite-footer-promos .devsite-footer-promo-title:hover {
  color: var(--devsite-footer-link-hover,var(--devsite-link-color));
  font-weight: var(--devsite-footer-link-font-weight-hover);
  text-decoration: none
}

@media screen and (max-width: 1253px) {
  .devsite-main-content[has-book-nav]~devsite-footer-promos .devsite-footer-promos-list {
      -webkit-flex-wrap:wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      gap: unset;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -moz-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start
  }

  .devsite-main-content[has-book-nav]~devsite-footer-promos .devsite-footer-promo {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 50%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      padding-block:0;padding-inline:20px}
}

@media screen and (max-width: 840px) {
  .devsite-main-content[has-book-nav]~devsite-footer-promos .devsite-footer-promos-list,devsite-footer-promos .devsite-footer-promos-list {
      -webkit-flex-wrap:wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -moz-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      padding: 12px 0
  }

  .devsite-main-content[has-book-nav]~devsite-footer-promos .devsite-footer-promo,devsite-footer-promos .devsite-footer-promo {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 50%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      margin: 0;
      padding-block:8px;padding-inline:0;text-align: start
  }

  devsite-footer-promos .devsite-footer-promo-icon {
      height: 32px;
      margin-block:0;margin-inline:0 8px;width: 32px
  }

  devsite-footer-promos .devsite-footer-promo-title {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      font-weight: 400
  }

  devsite-footer-promos .devsite-footer-promo-description {
      display: none
  }
}

@media screen and (max-width: 600px) {
  devsite-footer-promos {
      padding:0 16px
  }

  devsite-footer-promos .devsite-footer-promos-list {
      display: block
  }
}

devsite-footer-utility {
  background: var(--devsite-footer-background,var(--devsite-background-1));
  color: var(--devsite-footer-color);
  display: block;
  font: 400 14px/16px var(--devsite-primary-font-family);
  padding: 0 24px
}

devsite-footer-utility .devsite-footer-sites-list,devsite-footer-utility .devsite-footer-sites-logo-link,devsite-footer-utility .devsite-footer-utility-button,devsite-footer-utility .devsite-footer-utility-item,devsite-footer-utility .devsite-footer-utility-list,devsite-footer-utility nav {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-footer-utility .devsite-footer-utility-button,devsite-footer-utility .devsite-footer-utility-list,devsite-footer-utility nav {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

devsite-footer-utility nav {
  gap: 16px;
  padding: 24px 0
}

devsite-footer-utility .devsite-footer-sites,devsite-footer-utility .devsite-footer-sites-list {
  gap: 0 40px
}

devsite-footer-utility .devsite-footer-sites {
  -webkit-border-after: var(--devsite-primary-border);
  border-block-end:var(--devsite-primary-border);padding: 24px 0 23px
}

devsite-footer-utility .devsite-footer-sites-list,devsite-footer-utility .devsite-footer-utility-list {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  list-style: none;
  padding: 0
}

devsite-footer-utility .devsite-footer-sites-item,devsite-footer-utility .devsite-footer-utility-item {
  margin: 0
}

devsite-footer-utility .devsite-footer-sites-link {
  color: var(--devsite-primary-text-color);
  display: block;
  padding: 8px 0
}

devsite-footer-utility .devsite-footer-sites-link:focus,devsite-footer-utility .devsite-footer-sites-link:hover {
  color: var(--devsite-link-color);
  text-decoration: none
}

devsite-footer-utility .devsite-footer-sites-logo {
  height: 32px;
  margin-top: -4px;
  width: 185px
}

devsite-footer-utility .devsite-footer-utility-links,devsite-footer-utility .devsite-footer-utility-list {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

devsite-footer-utility .devsite-footer-utility-list {
  gap: 16px 8px;
  -webkit-box-flex: var(--devsite-footer-utility-list-flex,1);
  -webkit-flex: var(--devsite-footer-utility-list-flex,1);
  -moz-box-flex: var(--devsite-footer-utility-list-flex,1);
  -ms-flex: var(--devsite-footer-utility-list-flex,1);
  flex: var(--devsite-footer-utility-list-flex,1);
  min-height: 36px
}

devsite-footer-utility .devsite-footer-utility-link {
  color: var(--devsite-footer-link-color,var(--devsite-primary-text-color))
}

devsite-footer-utility .devsite-footer-utility-link:focus,devsite-footer-utility .devsite-footer-utility-link:hover {
  color: var(--devsite-footer-link-hover,var(--devsite-link-color))
}

devsite-footer-utility a:focus,devsite-footer-utility a:hover {
  font-weight: var(--devsite-footer-link-font-weight-hover)
}

devsite-footer-utility .devsite-footer-utility-item {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

devsite-footer-utility .devsite-footer-utility-item-centered {
  margin: 0 auto
}

devsite-footer-utility .devsite-footer-utility-button {
  gap: 0 16px;
  line-height: 20px;
  margin-inline:auto 0}

devsite-footer-utility .devsite-footer-utility-button>a:focus {
  text-decoration: none
}

devsite-footer-utility .devsite-footer-utility-item:before {
  content: "|";
  -webkit-margin-end: 8px;
  -moz-margin-end: 8px;
  margin-inline-end:8px}

devsite-footer-utility .devsite-footer-utility-button:before,devsite-footer-utility .devsite-footer-utility-item-centered:before,devsite-footer-utility .devsite-footer-utility-item-no-marker:before,devsite-footer-utility .devsite-footer-utility-item:first-child:before {
  content: "";
  -webkit-margin-end: 0;
  -moz-margin-end: 0;
  margin-inline-end:0}

devsite-footer-utility devsite-language-selector {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  margin: var(--devsite-language-selector-margin,0)
}

@media screen and (max-width: 1253px) {
  [has-book-nav]~devsite-footer-utility .devsite-footer-sites,[has-book-nav]~devsite-footer-utility .devsite-footer-sites-list {
      -webkit-box-align:start;
      -webkit-align-items: start;
      -moz-box-align: start;
      -ms-flex-align: start;
      align-items: start;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column
  }

  [has-book-nav]~devsite-footer-utility .devsite-footer-sites {
      gap: 16px 0
  }
}

@media screen and (max-width: 840px) {
  devsite-footer-utility .devsite-footer-sites,devsite-footer-utility .devsite-footer-sites-list {
      -webkit-box-align:start;
      -webkit-align-items: start;
      -moz-box-align: start;
      -ms-flex-align: start;
      align-items: start;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column
  }

  devsite-footer-utility .devsite-footer-sites {
      gap: 16px 0
  }

  devsite-footer-utility .devsite-footer-utility-list {
      -webkit-box-flex: 100%;
      -webkit-flex: 100%;
      -moz-box-flex: 100%;
      -ms-flex: 100%;
      flex: 100%
  }

  devsite-footer-utility .devsite-footer-utility-button {
      -webkit-box-flex: 100%;
      -webkit-flex: 100%;
      -moz-box-flex: 100%;
      -ms-flex: 100%;
      flex: 100%;
      margin-inline:0}

  devsite-footer-utility .devsite-footer-utility-button:before {
      display: none
  }
}

@media screen and (max-width: 600px) {
  devsite-footer-utility {
      padding:0 16px
  }

  devsite-footer-utility .devsite-footer-utility-item-centered {
      margin: 12px 0
  }
}

.devsite-fully-clickable {
  background-color: var(--devsite-fully-clickable-background,var(--devsite-background-color));
  border-radius: var(--devsite-fully-clickable-border-radius);
  position: relative
}

.devsite-fully-clickable:before {
  border-radius: var(--devsite-fully-clickable-border-radius);
  box-shadow: var(--devsite-fully-clickable-box-shadow,0 14px 25px 0 rgba(60,64,67,.08),0 4px 13px 0 rgba(60,64,67,.12));
  content: "";
  display: block;
  height: 100%;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  -webkit-transition: opacity .2s ease-out;
  transition: opacity .2s ease-out;
  width: 100%
}

.devsite-fully-clickable:focus-within:before,.devsite-fully-clickable:hover:before {
  opacity: 1
}

.devsite-fully-clickable:active:before {
  opacity: .4
}

.devsite-fully-clickable-link:active,.devsite-fully-clickable-link:focus,.devsite-fully-clickable-link:hover {
  -webkit-transform: none!important;
  transform: none!important
}

.devsite-fully-clickable-link:not(.button):active,.devsite-fully-clickable-link:not(.button):focus,.devsite-fully-clickable-link:not(.button):hover {
  text-decoration: none!important
}

.devsite-fully-clickable-link:before {
  bottom: 0;
  content: "";
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1
}

devsite-googler-buttons {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  bottom: calc(var(--devsite-panel-height, 0px) + 24px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: fixed;
  z-index: 1004
}

[dir=ltr] [concierge] devsite-googler-buttons {
  -webkit-transition: right .1s cubic-bezier(0,0,.2,1);
  transition: right .1s cubic-bezier(0,0,.2,1);
  right: calc(12px + var(--devsite-concierge-width))
}

[dir=ltr] [concierge=modal] devsite-googler-buttons,[dir=ltr] devsite-googler-buttons {
  right: 24px
}

[dir=rtl] [concierge] devsite-googler-buttons {
  -webkit-transition: left .1s cubic-bezier(0,0,.2,1);
  transition: left .1s cubic-bezier(0,0,.2,1);
  left: calc(12px + var(--devsite-concierge-width))
}

[dir=rtl] [concierge=modal] devsite-googler-buttons,[dir=rtl] devsite-googler-buttons {
  left: 24px
}

devsite-googler-buttons>a:focus {
  text-decoration: none
}

devsite-googler-buttons .devsite-googler-button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-background-1);
  border-radius: 50%;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: -48px auto;
  outline: 0;
  position: relative;
  -webkit-transition: background .2s,box-shadow .2s,margin .2s;
  transition: background .2s,box-shadow .2s,margin .2s;
  width: 40px
}

devsite-googler-buttons[active] .devsite-googler-button {
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color);
  margin: 4px auto
}

devsite-googler-buttons .devsite-googler-button:focus,devsite-googler-buttons .devsite-googler-button:hover,devsite-googler-buttons a:focus>.devsite-googler-button {
  background: #e8f0fe
}

devsite-googler-buttons .devsite-googler-button:active,devsite-googler-buttons a:active>.devsite-googler-button {
  background: #d2e3fc
}

devsite-googler-buttons .devsite-googler-admin:before {
  color: #80868b;
  content: "storage"
}

devsite-googler-buttons .devsite-googler-page-insights:before {
  color: #12b5cb;
  content: "bar_chart"
}

devsite-googler-buttons .devsite-googler-analytics:before {
  color: #e8710a;
  content: "timeline"
}

devsite-googler-buttons .devsite-googler-bug:before {
  color: #e52592;
  content: "bug_report"
}

devsite-googler-buttons .devsite-googler-cache {
  background: #689f38
}

devsite-googler-buttons .devsite-googler-cache:hover {
  background: #5bb974
}

devsite-googler-buttons .devsite-googler-cache:active,devsite-googler-buttons .devsite-googler-cache:focus {
  background: #8bc34a
}

devsite-googler-buttons .devsite-googler-cache[active] {
  background: #d93025
}

devsite-googler-buttons .devsite-googler-cache[active]:hover {
  background: #ea4335
}

devsite-googler-buttons .devsite-googler-cache[active]:active,devsite-googler-buttons .devsite-googler-cache[active]:focus {
  background: #ee675c
}

devsite-googler-buttons .devsite-googler-cache:before {
  color: var(--devsite-inverted-text-color);
  content: "cached"
}

devsite-googler-buttons .devsite-googler-cache[active]:after {
  background: var(--devsite-background-1);
  border-bottom: 2px solid #d93025;
  content: "";
  display: block;
  height: 4px;
  position: absolute;
  -webkit-transform: rotate(45deg) translateY(1px);
  transform: rotate(45deg) translateY(1px);
  width: 28px
}

devsite-googler-buttons .devsite-googler-cache[active]:active:after,devsite-googler-buttons .devsite-googler-cache[active]:focus:after {
  border-color: #ee675c
}

devsite-googler-buttons .devsite-googler-devrel:before {
  color: #607d8b;
  content: "build"
}

devsite-googler-buttons .devsite-googler-edit:before {
  color: #689f38;
  content: "edit"
}

devsite-googler-buttons .devsite-googler-source:before {
  color: #4285f4;
  content: "code"
}

devsite-googler-buttons .devsite-googler-env:before {
  color: #681da8;
  content: "swap_horiz"
}

devsite-googler-buttons .devsite-googler-content-excellence:before {
  color: #4285f4;
  content: "local_police"
}

devsite-googler-buttons .devsite-googler-speed-dial {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color);
  height: 56px;
  margin: 0;
  width: 56px
}

devsite-googler-buttons[active] .devsite-googler-speed-dial {
  margin: 16px 0 0
}

devsite-googler-buttons .devsite-googler-speed-dial:before {
  content: url(../../images/fab.svg);
  -webkit-transition: -webkit-transform .2s;
  transition: -webkit-transform .2s;
  transition: transform .2s;
  transition: transform .2s,-webkit-transform .2s
}

devsite-googler-buttons[active] .devsite-googler-speed-dial:before {
  content: "close";
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg)
}

devsite-header {
  display: block;
  position: relative;
  z-index: 1006
}

body[ready] devsite-header[fixed] {
  contain: layout;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%
}

body[ready][concierge] devsite-header[fixed] {
  contain: unset;
  top: auto;
  position: static;
  z-index: unset
}

devsite-header .devsite-top-logo-row-wrapper-wrapper {
  border-bottom: var(--devsite-header-border,0);
  position: relative;
  z-index: 1
}

body[ready][concierge] devsite-header[fixed] .devsite-top-logo-row-wrapper-wrapper {
  position: fixed;
  z-index: 1007;
  left: 0;
  right: 0
}

devsite-header .devsite-top-logo-row-wrapper-wrapper,devsite-header .devsite-top-logo-row-wrapper-wrapper:before {
  background: var(--devsite-header-color-upper,var(--devsite-background-1))
}

body[ready] devsite-header[fixed] .devsite-top-logo-row-wrapper-wrapper:before {
  content: "";
  height: 400px;
  position: absolute;
  -webkit-transform: translateY(-400px);
  transform: translateY(-400px);
  width: 100%
}

devsite-header[fixed] .devsite-top-logo-row-wrapper-wrapper {
  pointer-events: all
}

devsite-header .devsite-collapsible-section {
  position: relative
}

[dir=ltr] body[concierge] devsite-header .devsite-collapsible-section {
  right: 0;
  -webkit-transition: right .1s cubic-bezier(0,0,.2,1);
  transition: right .1s cubic-bezier(0,0,.2,1)
}

[dir=rtl] body[concierge] devsite-header .devsite-collapsible-section {
  left: 0;
  -webkit-transition: left .1s cubic-bezier(0,0,.2,1);
  transition: left .1s cubic-bezier(0,0,.2,1)
}

body[ready][concierge] devsite-header[fixed] .devsite-collapsible-section {
  position: fixed;
  left: 0;
  right: 0;
  top: var(--devsite-js-top-row--height,49px);
  z-index: 1005
}

[dir=ltr] body[ready][concierge] devsite-header[fixed] .devsite-collapsible-section {
  right: var(--devsite-concierge-width,0)
}

[dir=rtl] body[ready][concierge] devsite-header[fixed] .devsite-collapsible-section {
  left: var(--devsite-concierge-width,0)
}

devsite-header .devsite-collapsible-section,devsite-header[no-lower-row][fixed] {
  box-shadow: var(--devsite-header-lower-box-shadow,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color))
}

devsite-header[fixed] .devsite-collapsible-section {
  contain: style;
  pointer-events: all;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  will-change: transform
}

devsite-header .devsite-top-logo-row {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-header-color-upper,var(--devsite-background-1));
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 16px;
  height: 48px;
  padding: 0 16px 0 24px;
  position: relative;
  -webkit-transform: translateZ(0);
  transform: translateZ(0)
}

[dir=rtl] devsite-header .devsite-top-logo-row {
  padding: 0 24px 0 16px
}

devsite-header .devsite-top-button {
  background: var(--devsite-header-link-background,0);
  border-radius: var(--devsite-header-link-border-radius,var(--devsite-button-border-radius,2px));
  color: var(--devsite-header-link-color,var(--devsite-secondary-text-rgba));
  padding: var(--devsite-header-link-padding,0 8px);
  -webkit-text-decoration: var(--devsite-header-link-text-decoration);
  -moz-text-decoration: var(--devsite-header-link-text-decoration);
  text-decoration: var(--devsite-header-link-text-decoration);
  -webkit-transition: background .2s,box-shadow .2s,color .2s;
  transition: background .2s,box-shadow .2s,color .2s
}

devsite-header .devsite-top-button,devsite-header .devsite-top-button:active,devsite-header .devsite-top-button:focus,devsite-header .devsite-top-button:hover {
  border: 0
}

devsite-header .devsite-top-button:active,devsite-header .devsite-top-button:focus,devsite-header .devsite-top-button:hover {
  color: var(--devsite-header-link-color-active,var(--devsite-primary-text-rgba));
  -webkit-text-decoration: var(--devsite-header-link-text-decoration-active);
  -moz-text-decoration: var(--devsite-header-link-text-decoration-active);
  text-decoration: var(--devsite-header-link-text-decoration-active)
}

devsite-header .devsite-top-button:focus {
  background: var(--devsite-header-link-background-focus,var(--devsite-header-link-background-hover,var(--devsite-header-link-background-active,var(--devsite-background-3))))
}

devsite-header .devsite-top-button:hover {
  background: var(--devsite-header-link-background-hover,var(--devsite-header-link-background-active,var(--devsite-background-3)))
}

devsite-header .devsite-top-button:active {
  background: var(--devsite-header-link-background-active,var(--devsite-background-3));
  box-shadow: var(--devsite-header-link-box-shadow-active,none)
}

devsite-header .devsite-header-icon-button {
  color: var(--devsite-header-icon-color,var(--devsite-secondary-text-rgba));
  display: none;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  height: 24px;
  min-width: 24px;
  padding: 0;
  -webkit-transition: color .2s;
  transition: color .2s;
  width: 24px
}

devsite-header .devsite-header-icon-button:active,devsite-header .devsite-header-icon-button:focus,devsite-header .devsite-header-icon-button:hover {
  color: var(--devsite-header-icon-color-active,var(--devsite-primary-text-rgba))
}

devsite-header .devsite-top-logo-row-middle {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  position: relative
}

devsite-header .devsite-collapsible-section {
  background-color: var(--devsite-header-color-lower,var(--devsite-primary-color,var(--devsite-secondary-text-color)))
}

@media screen and (max-width: 840px) {
  devsite-header {
      -webkit-transform:translateZ(0);
      transform: translateZ(0)
  }

  body[ready][concierge] devsite-header[fixed] {
      contain: layout;
      position: fixed;
      z-index: 1006
  }

  devsite-header .devsite-top-logo-row {
      padding: 0 16px;
      gap: 8px
  }

  devsite-header .devsite-header-upper-tabs devsite-tabs {
      margin: 0 0 0 16px
  }

  [dir=rtl] devsite-header .devsite-header-upper-tabs devsite-tabs {
      margin: 0 16px 0 0
  }

  devsite-header .devsite-header-upper-tabs .devsite-doc-set-nav {
      display: none
  }
}

devsite-header .devsite-header-billboard {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: var(--devsite-header-color-lower,var(--devsite-primary-color,var(--devsite-background-1)));
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 40px 24px 20px;
  position: relative;
  z-index: 100
}

devsite-header .devsite-header-billboard h1 {
  line-height: var(--devsite-h1-line-height,1);
  overflow: visible;
  padding: 0
}

devsite-header .devsite-header-billboard-logo {
  max-height: 64px
}

devsite-header .devsite-header-billboard-search {
  margin: 0 auto;
  max-width: 816px;
  padding-bottom: 48px
}

devsite-header .devsite-header-billboard-search devsite-search {
  width: 100%
}

devsite-header .devsite-header-billboard-search devsite-search .devsite-popout-result {
  max-height: 50vh
}

devsite-header .devsite-header-billboard-search .devsite-search-background,devsite-header .devsite-header-billboard-search devsite-search .devsite-searchbox:before {
  background: var(--devsite-header-color-lower,var(--devsite-primary-color,var(--devsite-background-1)))
}

@media screen and (max-width: 840px) {
  devsite-header .devsite-header-billboard-search {
      margin:0 24px
  }
}

devsite-header .devsite-doc-set-nav-row {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: var(--devsite-header-lower-tabs-border-bottom,none);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  min-height: 48px;
  padding: 0 24px 0 0
}

[dir=rtl] devsite-header .devsite-doc-set-nav-row {
  padding: 0 0 0 24px
}

[dir=ltr] devsite-header .devsite-doc-set-nav-row .devsite-breadcrumb-list {
  padding-left: 24px
}

[dir=rtl] devsite-header .devsite-doc-set-nav-row .devsite-breadcrumb-list {
  padding-right: 24px
}

@media screen and (max-width: 840px) {
  devsite-header .devsite-doc-set-nav-row {
      display:none
  }
}

@media screen and (max-width: 600px) {
  devsite-header devsite-language-selector {
      display:none
  }
}

devsite-header .devsite-header-link {
  -webkit-transition: background .2s,box-shadow .2s,color .2s;
  transition: background .2s,box-shadow .2s,color .2s
}

devsite-header .devsite-header-link,devsite-header .devsite-header-link:visited {
  color: var(--devsite-header-link-color,var(--devsite-secondary-text-rgba))
}

devsite-header .devsite-header-link:focus,devsite-header .devsite-header-link:hover {
  color: var(--devsite-header-link-color-active,var(--devsite-primary-text-rgba))
}

@media screen and (max-width: 840px) {
  devsite-header .devsite-header-link {
      display:none
  }
}

devsite-header .devsite-product-name-wrapper {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  height: 36px;
  margin: 6px 0
}

devsite-header .devsite-product-name-link,devsite-header .devsite-site-logo-link {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  opacity: 1;
  -webkit-transition: opacity .2s;
  transition: opacity .2s
}

devsite-header .devsite-product-name-link:focus,devsite-header .devsite-product-name-link:hover,devsite-header .devsite-site-logo-link:focus {
  opacity: .7;
  text-decoration: none
}

devsite-header .devsite-site-logo {
  aspect-ratio: var(--devsite-logo-aspect-ratio,auto);
  height: var(--devsite-logo-height,32px)
}

devsite-header .devsite-has-google-wordmark>.devsite-breadcrumb-link,devsite-header .devsite-has-google-wordmark>.devsite-product-name {
  direction: ltr
}

devsite-header .devsite-google-wordmark {
  height: 24px;
  margin: 0 4px 0 0;
  position: relative;
  top: 5px
}

devsite-header .devsite-google-wordmark-svg-path {
  -webkit-transition: fill .2s;
  transition: fill .2s
}

devsite-header .devsite-site-logo-link canvas {
  height: auto!important
}

devsite-header .devsite-site-logo-link picture {
  display: contents
}

devsite-header .devsite-product-logo-container {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  color: var(--devsite-primary-color,var(--devsite-primary-text-color));
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 36px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-inline:0 4px;width: 36px
}

devsite-header .devsite-product-logo-container[background] {
  background: var(--devsite-primary-color,var(--devsite-primary-text-color));
  color: var(--devsite-inverted-text-color)
}

devsite-header .devsite-product-logo {
  color: inherit;
  font-size: 32px;
  height: 32px;
  max-width: 32px;
  min-width: 32px;
  overflow: hidden;
  white-space: nowrap
}

devsite-header .devsite-product-logo-container[background] .devsite-product-logo {
  font-size: 28px;
  height: 28px;
  max-width: 28px;
  min-width: 28px
}

devsite-header .devsite-product-name {
  font: var(--devsite-wordmark-font,400 20px/32px var(--devsite-primary-font-family));
  letter-spacing: 0;
  margin: 0;
  max-height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-transition: color .2s;
  transition: color .2s;
  white-space: nowrap
}

devsite-header .devsite-site-logo:not([src*=".svg"]) {
  height: auto;
  max-height: 32px
}

devsite-header .devsite-breadcrumb-link>.devsite-product-name {
  color: inherit
}

@media screen and (max-width: 840px) {
  devsite-header .devsite-product-name-wrapper {
      -webkit-box-flex:0;
      -webkit-flex: 0 1 auto;
      -moz-box-flex: 0;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      min-width: 0
  }

  devsite-header .devsite-product-name-wrapper .devsite-breadcrumb-item:not(:first-of-type),devsite-header .devsite-product-name-wrapper .devsite-site-logo-link+.devsite-product-name {
      display: none
  }

  devsite-header .devsite-product-name-wrapper .devsite-breadcrumb-item,devsite-header .devsite-product-name-wrapper .devsite-breadcrumb-link,devsite-header .devsite-product-name-wrapper .devsite-breadcrumb-list,devsite-header .devsite-product-name-wrapper .devsite-product-name {
      width: 100%
  }

  devsite-header .devsite-product-name-wrapper .devsite-breadcrumb-link {
      overflow: hidden;
      text-overflow: ellipsis
  }
}

devsite-header .devsite-product-id-row {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  min-height: 60px;
  padding: var(--devsite-product-id-row-padding,20px 24px 2px)
}

devsite-header .devsite-header-no-lower-tabs .devsite-product-id-row {
  min-height: 72px;
  padding: var(--devsite-product-id-row-padding,20px 24px)
}

devsite-header .devsite-product-description-row {
  color: var(--devsite-header-foreground-lower-description,var(--devsite-header-foreground-lower-hover,var(--devsite-inverted-text-color)));
  font: var(--devsite-header-lower-description-font,400 20px/32px var(--devsite-primary-font-family))
}

devsite-header .devsite-product-description {
  font: 16px/24px var(--devsite-primary-font-family);
  margin-block:0;margin-inline:0 180px}

devsite-header .devsite-breadcrumb-list+.devsite-product-description {
  margin-block:8px 0}

devsite-header .devsite-product-button-row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-block:0;margin-inline:24px 0;z-index: 1
}

@media screen and (max-width: 840px) {
  devsite-header .devsite-product-id-row {
      min-height:72px;
      padding: var(--devsite-product-id-row-padding,20px 24px)
  }

  devsite-header .devsite-product-description {
      margin-inline:0}
}

@media screen and (max-width: 600px) {
  devsite-header .devsite-header-no-lower-tabs .devsite-product-id-row,devsite-header .devsite-product-id-row {
      -webkit-flex-wrap:wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      padding: var(--devsite-product-id-row-padding,20px 16px)
  }

  devsite-header .devsite-product-button-row {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      margin-block:16px 0;margin-inline:0}
}

devsite-header[search-expanded] .devsite-header-upper-tabs {
  opacity: 0;
  position: absolute
}

devsite-header[search-expanded] devsite-search {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0;
  -moz-box-flex: 1;
  -ms-flex: 1 0;
  flex: 1 0
}

devsite-header [transition] {
  -webkit-transition: -webkit-transform .2s;
  transition: -webkit-transform .2s;
  transition: transform .2s;
  transition: transform .2s,-webkit-transform .2s
}

devsite-header[search-active] .devsite-search-background:after {
  background: var(--devsite-searchbox-active,var(--devsite-background-3))
}

devsite-header devsite-search[search-active] .devsite-search-field::-webkit-input-placeholder {
  color: var(--devsite-searchbox-placeholder-active,var(--devsite-secondary-text-color))
}

devsite-header devsite-search[search-active] .devsite-search-field::-moz-placeholder {
  color: var(--devsite-searchbox-placeholder-active,var(--devsite-secondary-text-color))
}

devsite-header devsite-search[search-active] .devsite-search-field:-ms-input-placeholder {
  color: var(--devsite-searchbox-placeholder-active,var(--devsite-secondary-text-color))
}

devsite-header devsite-search[search-active] .devsite-search-field::-ms-input-placeholder {
  color: var(--devsite-searchbox-placeholder-active,var(--devsite-secondary-text-color))
}

devsite-header devsite-search[search-active] .devsite-search-field::placeholder {
  color: var(--devsite-searchbox-placeholder-active,var(--devsite-secondary-text-color))
}

devsite-header devsite-search[search-active] .devsite-search-field,devsite-header devsite-search[search-active] .devsite-search-field:hover {
  background: var(--devsite-searchbox-active,var(--devsite-background-3));
  color: var(--devsite-searchbox-text-active,var(--devsite-primary-text-color))
}

devsite-header devsite-search[search-active] .devsite-search-image {
  color: var(--devsite-searchbox-placeholder,var(--devsite-secondary-text-color))
}

@media screen and (max-width: 840px) {
  devsite-header[search-active] .devsite-product-name-wrapper,devsite-header[search-active] devsite-language-selector,devsite-header[search-active] devsite-user {
      display:none
  }

  devsite-header[search-active] devsite-search {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -moz-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-transform: none!important;
      transform: none!important
  }

  devsite-header[search-active] .devsite-header-upper-tabs {
      -webkit-box-flex: 0;
      -webkit-flex: 0 1;
      -moz-box-flex: 0;
      -ms-flex: 0 1;
      flex: 0 1;
      overflow: hidden
  }

  devsite-header[search-active] .devsite-top-logo-row devsite-search {
      margin: 6px 0
  }

  devsite-header .devsite-top-logo-row devsite-search[search-active] .devsite-searchbox {
      width: 100%
  }

  devsite-header devsite-search[search-active] .devsite-search-form {
      border-radius: var(--devsite-search-border-radius,0);
      box-shadow: var(--devsite-search-active-box-shadow,none);
      left: 0;
      overflow: var(--devsite-search-active-overflow,visible);
      position: var(--devsite-search-form-position,relative);
      top: 0
  }

  [dir=ltr] devsite-header devsite-search[search-active] .devsite-search-form {
      right: var(--devsite-search-form-position-end,auto)
  }

  [dir=rtl] devsite-header devsite-search[search-active] .devsite-search-form {
      left: var(--devsite-search-form-position-end,auto)
  }

  devsite-header devsite-search[search-active] .devsite-search-field,devsite-header devsite-search[search-active] .devsite-search-field:hover {
      background: var(--devsite-search-form-background-active,var(--devsite-background-3));
      color: var(--devsite-search-form-text-active,var(--devsite-primary-text-color))
  }

  [dir=ltr] devsite-header .devsite-header-billboard-search devsite-search[search-active] .devsite-search-form {
      right: var(--devsite-search-form-position-start,auto)
  }

  [dir=rtl] devsite-header .devsite-header-billboard-search devsite-search[search-active] .devsite-search-form {
      left: var(--devsite-search-form-position-start,auto)
  }

  devsite-header .devsite-top-logo-row devsite-search[search-active] .devsite-searchbox .devsite-search-image {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex
  }

  devsite-header .devsite-top-logo-row devsite-search .devsite-searchbox:before,devsite-header .devsite-top-logo-row devsite-search[search-active] .devsite-popout {
      width: var(--devsite-popout-width,calc(100vw + 16px))
  }

  [dir=ltr] devsite-header .devsite-top-logo-row devsite-search .devsite-searchbox:before,[dir=ltr] devsite-header .devsite-top-logo-row devsite-search[search-active] .devsite-popout {
      left: var(--devsite-popout-position-start,-60px)
  }

  [dir=rtl] devsite-header .devsite-top-logo-row devsite-search .devsite-searchbox:before,[dir=rtl] devsite-header .devsite-top-logo-row devsite-search[search-active] .devsite-popout {
      right: var(--devsite-popout-position-start,-60px)
  }

  devsite-header .devsite-top-logo-row devsite-search[search-active] .devsite-search-button {
      margin-block:0;margin-inline:var(--devsite-search-button-margin-before,16px) 0}

  devsite-header .devsite-top-logo-row devsite-search[search-active] .devsite-search-button[search-open] {
      display: none
  }

  devsite-header .devsite-top-logo-row devsite-search[search-active] .devsite-search-button[search-close] {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex
  }

  devsite-header [transition] {
      -webkit-transition: none;
      transition: none
  }
}

devsite-header .devsite-search-background {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: stretch;
  -webkit-justify-content: stretch;
  -moz-box-pack: stretch;
  -ms-flex-pack: stretch;
  justify-content: stretch;
  margin-block:0;margin-inline:24px 0;padding: 6px 0;
  pointer-events: none;
  position: absolute;
  -webkit-transition: -webkit-transform .2s;
  transition: -webkit-transform .2s;
  transition: transform .2s;
  transition: transform .2s,-webkit-transform .2s;
  will-change: transition;
  z-index: 9
}

[dir=ltr] devsite-header .devsite-search-background {
  right: 0;
  -webkit-transform-origin: right center;
  transform-origin: right center
}

[dir=rtl] devsite-header .devsite-search-background {
  left: 0;
  -webkit-transform-origin: left center;
  transform-origin: left center
}

devsite-header .devsite-search-background,devsite-header .devsite-searchbox:before {
  background: var(--devsite-header-color-upper,var(--devsite-background-1))
}

devsite-header .devsite-search-background:after {
  content: "";
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  height: 100%;
  -webkit-transition: background .2s;
  transition: background .2s
}

devsite-header .devsite-search-background:after,devsite-header devsite-search input.devsite-search-field {
  background: var(--devsite-searchbox-inactive)
}

devsite-header devsite-search input.devsite-search-field::-webkit-input-placeholder {
  color: var(--devsite-searchbox-placeholder,var(--devsite-secondary-text-color))
}

devsite-header devsite-search input.devsite-search-field::-moz-placeholder {
  color: var(--devsite-searchbox-placeholder,var(--devsite-secondary-text-color))
}

devsite-header devsite-search input.devsite-search-field:-ms-input-placeholder {
  color: var(--devsite-searchbox-placeholder,var(--devsite-secondary-text-color))
}

devsite-header devsite-search input.devsite-search-field::-ms-input-placeholder {
  color: var(--devsite-searchbox-placeholder,var(--devsite-secondary-text-color))
}

devsite-header devsite-search input.devsite-search-field::placeholder {
  color: var(--devsite-searchbox-placeholder,var(--devsite-secondary-text-color))
}

devsite-header devsite-search input.devsite-search-field:hover {
  background: var(--devsite-searchbox-hover)
}

devsite-header devsite-search .devsite-search-image,devsite-header devsite-search input.devsite-search-field {
  color: var(--devsite-searchbox-placeholder,var(--devsite-secondary-text-color))
}

devsite-header[billboard] .devsite-search-background {
  display: none
}

devsite-header[billboard][bottom-row--hidden] .devsite-search-background {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-header[billboard] .devsite-top-logo-row devsite-search .devsite-search-form {
  opacity: 1;
  -webkit-transition: opacity .2s,-webkit-transform .2s;
  transition: opacity .2s,-webkit-transform .2s;
  transition: opacity .2s,transform .2s;
  transition: opacity .2s,transform .2s,-webkit-transform .2s
}

devsite-header[billboard][bottom-row--hidden] .devsite-top-logo-row devsite-search .devsite-search-form {
  -webkit-transform: translateZ(0);
  transform: translateZ(0)
}

body[template="404"] devsite-header .devsite-top-logo-row .devsite-search-form,devsite-header[billboard]:not([bottom-row--hidden]) .devsite-top-logo-row devsite-search .devsite-search-form {
  opacity: 0;
  pointer-events: none
}

[dir=ltr] body[template="404"] devsite-header .devsite-top-logo-row .devsite-search-form,[dir=ltr] devsite-header[billboard]:not([bottom-row--hidden]) .devsite-top-logo-row devsite-search .devsite-search-form {
  -webkit-transform: translate3d(200px,0,0);
  transform: translate3d(200px,0,0)
}

[dir=rtl] body[template="404"] devsite-header .devsite-top-logo-row .devsite-search-form,[dir=rtl] devsite-header[billboard]:not([bottom-row--hidden]) .devsite-top-logo-row devsite-search .devsite-search-form {
  -webkit-transform: translate3d(-200px,0,0);
  transform: translate3d(-200px,0,0)
}

devsite-header[billboard][bottom-row--hidden] .devsite-header-billboard-search devsite-search {
  opacity: 0
}

devsite-header[billboard] .devsite-header-billboard-search devsite-search {
  margin-inline:0}

devsite-header[billboard] .devsite-header-billboard-search devsite-search .devsite-popout {
  max-height: calc(100vh - 255px)
}

@media screen and (max-width: 840px) {
  devsite-header .devsite-top-logo-row devsite-search {
      width:auto
  }

  devsite-header .devsite-top-logo-row devsite-search .devsite-searchbox {
      width: 0
  }

  devsite-header .devsite-search-background,devsite-header .devsite-search-background:after,devsite-header devsite-search .devsite-search-field,devsite-header devsite-search .devsite-search-field:hover,devsite-header[search-active] .devsite-search-background:after {
      background: 0
  }

  devsite-header .devsite-top-logo-row devsite-search .devsite-searchbox .devsite-search-image {
      display: none
  }

  devsite-header .devsite-top-logo-row devsite-search .devsite-search-button {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: var(--devsite-secondary-text-color);
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      z-index: 1
  }

  devsite-header .devsite-top-logo-row devsite-search .devsite-search-button[search-open] {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex
  }

  devsite-header .devsite-top-logo-row devsite-search .devsite-search-button[search-close] {
      display: none;
      margin-right: 6px
  }

  devsite-header .devsite-top-logo-row devsite-search .devsite-search-button[search-open]:before {
      content: "search"
  }

  devsite-header .devsite-top-logo-row devsite-search .devsite-search-button[search-close]:before {
      content: "cancel"
  }

  devsite-header .devsite-top-logo-row devsite-search .devsite-result-item a,devsite-header .devsite-top-logo-row devsite-search .devsite-result-label,devsite-header .devsite-top-logo-row devsite-search .devsite-suggest-footer,devsite-header .devsite-top-logo-row devsite-search .devsite-suggest-header {
      padding-inline:var(--devsite-search-content-padding-start,60px) 8px}
}

devsite-header .devsite-header-upper-tabs {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 0;
  -moz-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0;
  margin-block:0;margin-inline:var(--devsite-upper-tab-margin-x,32px) 0;opacity: 1;
  position: relative;
  z-index: 8
}

devsite-header devsite-tabs tab a:focus,devsite-header devsite-tabs tab a:hover {
  text-decoration: none
}

devsite-header cloudx-tabs-nav.upper-tabs .devsite-tabs-wrapper,devsite-header devsite-tabs.upper-tabs .devsite-tabs-wrapper {
  background: var(--devsite-header-color-upper,var(--devsite-background-1))
}

devsite-header devsite-tabs.upper-tabs>.devsite-tabs-wrapper>tab>a:focus,devsite-header devsite-tabs.upper-tabs>.devsite-tabs-wrapper>tab>a:hover {
  color: var(--devsite-upper-tab-active,var(--devsite-primary-text-color))
}

devsite-header devsite-tabs.upper-tabs>.devsite-tabs-wrapper>tab>a:focus:after,devsite-header devsite-tabs.upper-tabs>.devsite-tabs-wrapper>tab>a:hover:after {
  border-color: var(--devsite-upper-tab-marker-color-inactive,var(--devsite-upper-tab-inactive,var(--devsite-secondary-text-color)))
}

devsite-header cloudx-tabs-nav.lower-tabs a,devsite-header devsite-tabs.lower-tabs .devsite-tabs-content,devsite-header devsite-tabs.lower-tabs a {
  color: var(--devsite-header-foreground-lower,var(--devsite-inverted-text-color));
  letter-spacing: var(--devsite-header-lower-tabs-letter-spacing,0)
}

devsite-header cloudx-tabs-nav.lower-tabs a:focus,devsite-header cloudx-tabs-nav.lower-tabs a:hover,devsite-header devsite-tabs.lower-tabs .devsite-tabs-content:focus,devsite-header devsite-tabs.lower-tabs .devsite-tabs-content:hover,devsite-header devsite-tabs.lower-tabs a:focus,devsite-header devsite-tabs.lower-tabs a:hover {
  color: var(--devsite-header-foreground-lower-hover,var(--devsite-header-foreground-lower,var(--devsite-inverted-text-rgba)))
}

devsite-header cloudx-tabs-nav.lower-tabs tab[active]>a,devsite-header devsite-tabs.lower-tabs tab[active]>.devsite-tabs-content,devsite-header devsite-tabs.lower-tabs tab[active]>a {
  color: var(--devsite-header-foreground-lower-active,var(--devsite-inverted-text-color))
}

devsite-header cloudx-tabs-nav.lower-tabs tab[active]>a:focus,devsite-header devsite-tabs.lower-tabs tab[active]>.devsite-tabs-content:focus,devsite-header devsite-tabs.lower-tabs tab[active]>a:focus {
  color: var(--devsite-header-foreground-lower-active-focus,var(--devsite-header-foreground-lower,var(--devsite-inverted-text-rgba)))
}

@media screen and (-ms-high-contrast:active),screen and (prefers-contrast:high) {
  devsite-header cloudx-tabs-nav.lower-tabs tab[active]>a,devsite-header devsite-tabs.lower-tabs tab[active]>.devsite-tabs-content,devsite-header devsite-tabs.lower-tabs tab[active]>a {
      color: inherit
  }
}

devsite-header cloudx-tabs-nav.lower-tabs>.devsite-tabs-wrapper>tab>a:after,devsite-header devsite-tabs.lower-tabs>.devsite-tabs-wrapper>tab>a:after {
  border-radius: var(--devsite-lower-tab-marker-border-radius,var(--devsite-tab-marker-border-radius,0))
}

devsite-header devsite-tabs.lower-tabs>.devsite-tabs-wrapper>tab>a:focus:after,devsite-header devsite-tabs.lower-tabs>.devsite-tabs-wrapper>tab>a:hover:after {
  border-color: var(--devsite-lower-tab-marker-color-inactive,var(--devsite-header-foreground-lower,var(--devsite-inverted-text-rgba)))
}

devsite-header cloudx-tabs-nav.lower-tabs>.devsite-tabs-wrapper>tab[active]>a:after,devsite-header devsite-tabs.lower-tabs>.devsite-tabs-wrapper>tab[active]>a:after {
  border-color: var(--devsite-lower-tab-marker-color-active,var(--devsite-header-foreground-lower-active,var(--devsite-background-1)))
}

devsite-header cloudx-tabs-nav tab[overflow-tab]>a:after,devsite-header devsite-tabs tab[overflow-tab]>a:after {
  display: none
}

devsite-header devsite-tabs.upper-tabs tab[overflow-tab]:after {
  background: var(--devsite-header-color-upper,var(--devsite-background-1))
}

devsite-header cloudx-tabs-nav.upper-tabs .devsite-tabs-overflow-menu,devsite-header devsite-tabs.upper-tabs .devsite-tabs-overflow-menu {
  border-top: var(--devsite-header-border,0)
}

@media screen and (max-width: 840px) {
  [dir=ltr] devsite-header .devsite-header-upper-tabs {
      margin-left:0
  }

  [dir=rtl] devsite-header .devsite-header-upper-tabs {
      margin-right: 0
  }

  devsite-header devsite-tabs.lower-tabs,devsite-header devsite-tabs.upper-tabs {
      display: none
  }
}

[layout=docs] h2:not(.no-link),[layout=docs] h3:not(.no-link),[layout=docs] h4:not(.no-link),[layout=docs] h5:not(.no-link),[layout=docs] h6:not(.no-link),h1.add-link {
  -webkit-margin-end: -40px;
  -moz-margin-end: -40px;
  margin-inline-end:-40px;-webkit-padding-end: 40px;
  -moz-padding-end: 40px;
  padding-inline-end:40px}

.devsite-heading-link.material-icons {
  color: var(--devsite-icon-color,var(--devsite-secondary-text-color));
  height: 24px;
  opacity: 0
}

.devsite-heading-link.material-icons:focus,.devsite-heading-link.material-icons:hover {
  color: var(--devsite-icon-color-hover,var(--devsite-link-color));
  cursor: pointer!important
}

.devsite-landing-row-item-list h4>.devsite-heading-link.material-icons,h1>.devsite-heading-link.material-icons,h2>.devsite-heading-link.material-icons,h3>.devsite-heading-link.material-icons {
  vertical-align: middle
}

.devsite-landing-row-item-list h4>.devsite-heading-link.material-icons,th>h2>.devsite-heading-link.material-icons,th>h3>.devsite-heading-link.material-icons {
  margin: -4px 0
}

.devsite-heading-link.material-icons:focus,.devsite-heading-link.material-icons:hover,:focus>.devsite-heading-link.material-icons,:hover>.devsite-heading-link.material-icons {
  opacity: 1
}

.devsite-heading-link:after {
  content: "link"
}

devsite-iframe {
  display: block;
  width: 100%
}

devsite-iframe+* {
  position: relative
}

devsite-iframe+devsite-iframe {
  margin-top: 16px
}

devsite-iframe iframe {
  height: 100%;
  width: 100%
}

devsite-iframe iframe[src*=".frame"] {
  height: calc(100% + 32px);
  margin: -16px;
  width: calc(100% + 32px)
}

devsite-info-popout:not(:defined) {
  visibility: hidden
}

devsite-jump-to {
  display: block;
  margin: 40px 0 0!important;
  opacity: 0;
  padding-bottom: 96px;
  pointer-events: none;
  position: relative;
  -webkit-transition: opacity .5s;
  transition: opacity .5s
}

devsite-jump-to[visible] {
  opacity: 1;
  pointer-events: auto
}

devsite-jump-to .devsite-jump-to-link {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-link-background,var(--devsite-link-color))!important;
  border-radius: 50%;
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color);
  color: var(--devsite-link-color,var(--devsite-inverted-text-color))!important;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 24px;
  height: 56px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  -webkit-transition: background .2s,box-shadow .2s,color .2s;
  transition: background .2s,box-shadow .2s,color .2s;
  width: 56px
}

devsite-jump-to .devsite-jump-to-link:focus,devsite-jump-to .devsite-jump-to-link:hover {
  background: var(--devsite-link-background-hover,var(--devsite-background-1))!important;
  color: var(--devsite-link-color)!important;
  text-decoration: none
}

devsite-jump-to .devsite-jump-to-link:active {
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color)
}

[dir=ltr] devsite-jump-to .devsite-jump-to-link {
  right: 0
}

[dir=rtl] devsite-jump-to .devsite-jump-to-link {
  left: 0
}

devsite-jump-to[pinned] .devsite-jump-to-link {
  bottom: 40px;
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color);
  position: fixed
}

devsite-jump-to[pinned] .devsite-jump-to-link:active {
  box-shadow: 0 2px 3px 0 var(--devsite-elevation-key-shadow-color),0 6px 10px 4px var(--devsite-elevation-ambient-shadow-color)
}

devsite-jump-to .devsite-jump-to-link:before {
  content: "arrow_upward";
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal
}

@media screen and (max-width: 840px) {
  devsite-jump-to {
      margin:40px 0 0!important;
      padding-bottom: 80px
  }

  devsite-jump-to[pinned] .devsite-jump-to-link {
      bottom: 24px
  }
}

devsite-language-selector:not(:defined) ul,devsite-language-selector:not([open]) ul {
  display: none
}

devsite-language-selector ul {
  display: block;
  list-style: none;
  padding: 0
}

devsite-language-selector li {
  font-size: 14px;
  margin: 0;
  min-width: 100%
}

devsite-language-selector a {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  min-height: 48px;
  min-width: 0;
  overflow: hidden;
  padding-inline:16px;text-overflow: ellipsis;
  white-space: nowrap
}

devsite-language-selector a:is(:link,:visited) {
  color: var(--devsite-primary-text-color)
}

devsite-language-selector a:is(:hover,:focus) {
  background-color: var(--devsite-background-3);
  text-decoration: none
}

devsite-language-selector a[aria-current] {
  background-color: var(--devsite-item-background-selected,var(--devsite-background-3));
  font-weight: var(--devsite-item-font-weight-selected,500)
}

@media screen and (-ms-high-contrast:active),screen and (prefers-contrast:high) {
  devsite-language-selector a[aria-current] {
      font-weight: 700;
      text-decoration: underline
  }
}

.devsite-dialog-wrapper {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1014
}

.devsite-dialog-wrapper.below-site-mask {
  z-index: 1011
}

devsite-dialog {
  background: var(--devsite-background-1);
  border-radius: var(--devsite-border-radius,2px);
  color: var(--devsite-secondary-text-color);
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color);
  font-size: 14px;
  line-height: 20px;
  max-height: calc(100vh - 48px);
  max-width: calc(100vw - 48px);
  pointer-events: all;
  overflow: auto;
  padding: var(--devsite-dialog-padding,8px);
  width: var(--devsite-content-excellence-dialog-width,480px)
}

@media screen and (max-width: 840px) {
  devsite-dialog {
      max-height:calc(100vh - 32px);
      max-width: calc(100vw - 32px)
  }
}

devsite-dialog:not([open]) {
  display: none
}

devsite-dialog .devsite-dialog-contents {
  color: var(--devsite-secondary-text-color);
  overflow: hidden;
  padding: var(--devsite-dialog-contents-padding,16px)
}

devsite-dialog .devsite-dialog-close {
  cursor: pointer
}

devsite-dialog .devsite-dialog-close:not(.button):not(button) {
  border-radius: 16px;
  height: 32px;
  width: 32px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-dialog .devsite-dialog-close:not(.button):not(button):hover {
  background-color: #f1f3f4
}

devsite-dialog .devsite-dialog-contents>p:first-child:last-child {
  margin: 0
}

devsite-dialog h2,devsite-dialog h3 {
  color: var(--devsite-heading-color,inherit)
}

devsite-dialog h3 {
  font: var(--devsite-heading-font,400 20px/32px var(--devsite-primary-font-family));
  margin: 0 0 20px;
  outline: 0;
  text-align: var(--devsite-heading-text-align,inherit)
}

devsite-dialog .devsite-dialog-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 4px 4px 0
}

devsite-lightbox {
  pointer-events: all;
  position: relative
}

devsite-lightbox:not([open]) {
  display: none
}

devsite-lightbox .devsite-dialog-contents {
  padding: 0
}

devsite-lightbox .devsite-lightbox-icon-close {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: hsla(207,5%,52%,.54);
  border: 0;
  border-radius: 0;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 40px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  outline: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 40px;
  z-index: 1
}

[dir=ltr] devsite-lightbox .devsite-lightbox-icon-close {
  right: 0
}

[dir=rtl] devsite-lightbox .devsite-lightbox-icon-close {
  left: 0
}

devsite-lightbox .devsite-lightbox-icon-close:hover {
  background: rgba(0,0,0,.43)
}

devsite-lightbox .devsite-lightbox-icon-close:active {
  box-shadow: none
}

devsite-lightbox .devsite-lightbox-icon-close:after {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  color: #f1f3f4;
  content: "close";
  -webkit-transition: color .3s ease-in-out;
  transition: color .3s ease-in-out
}

devsite-lightbox .devsite-lightbox-icon-close:focus:after,devsite-lightbox .devsite-lightbox-icon-close:hover:after {
  color: #fff
}

devsite-lightbox img {
  max-height: 100vh
}

.devsite-lightbox-image {
  cursor: pointer;
  outline: 0
}

.devsite-lightbox-image:focus {
  -webkit-filter: brightness(75%);
  filter: brightness(75%)
}

.MathJax_SVG_Display {
  overflow-x: auto
}

@media screen and (max-width: 600px) {
  .MathJax_SVG_Display {
      margin:1em -16px!important;
      padding: 0 16px 16px;
      width: calc(100% + 32px)!important
  }
}

devsite-multiple-choice {
  background-color: var(--devsite-multiple-choice-background);
  border: var(--devsite-multiple-choice-border);
  border-radius: var(--devsite-multiple-choice-border-radius);
  display: block;
  margin: 16px 0;
  overflow: var(--devsite-multiple-choice-overflow);
  visibility: hidden!important
}

devsite-multiple-choice[ready] {
  visibility: visible!important
}

devsite-multiple-choice .devsite-multiple-choice-question {
  background-color: var(--devsite-multiple-choice-question-background);
  color: var(--devsite-multiple-choice-question-color);
  font: var(--devsite-table-heading-font,500 16px/24px var(--devsite-primary-font-family));
  padding: 16px 24px
}

devsite-multiple-choice .devsite-multiple-choice-answer {
  border-bottom: var(--devsite-multiple-choice-answer-border-bottom);
  border-top: var(--devsite-multiple-choice-answer-border-top)
}

devsite-multiple-choice .devsite-multiple-choice-answer,devsite-multiple-choice .devsite-multiple-choice-answer:focus,devsite-multiple-choice .devsite-multiple-choice-answer:hover {
  outline: 0
}

devsite-multiple-choice .devsite-multiple-choice-answer:not([clicked]):focus,devsite-multiple-choice .devsite-multiple-choice-answer:not([clicked]):hover {
  color: var(--devsite-link-color);
  cursor: pointer
}

devsite-multiple-choice .devsite-multiple-choice-option {
  padding: 16px 72px 16px 24px;
  position: relative
}

devsite-multiple-choice .devsite-multiple-choice-option:after {
  content: "check_box_outline_blank";
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  height: 100%;
  position: absolute;
  right: 24px;
  top: calc(50% - 12px)
}

devsite-multiple-choice [correct] {
  background-color: var(--devsite-multiple-choice-correct-background)
}

devsite-multiple-choice [incorrect] {
  background-color: var(--devsite-multiple-choice-incorrect-background)
}

devsite-multiple-choice [correct] .devsite-multiple-choice-option:after {
  color: var(--devsite-multiple-choice-correct-color);
  content: "check"
}

devsite-multiple-choice [incorrect] .devsite-multiple-choice-option:after {
  color: var(--devsite-multiple-choice-incorrect-color);
  content: "not_interested"
}

devsite-multiple-choice .devsite-multiple-choice-explanation {
  font-size: 14px;
  padding: 0 24px 16px
}

devsite-multiple-choice .devsite-multiple-choice-explanation-correctness {
  font-weight: 500;
  margin-top: 16px
}

devsite-multiple-choice [correct] .devsite-multiple-choice-explanation-correctness {
  color: var(--devsite-multiple-choice-correct-color)
}

devsite-multiple-choice [incorrect] .devsite-multiple-choice-explanation-correctness {
  color: var(--devsite-multiple-choice-incorrect-color)
}

devsite-my-activity-light.devsite-my-activity-wide-ui .activities {
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start
}

devsite-my-activity-light.devsite-my-activity-wide-ui .activity {
  width: calc(33% - 20px);
  min-width: 300px
}

devsite-my-activity-light.devsite-my-activity-wide-ui .my-activity-show-more {
  display: none
}

devsite-my-activity-light {
  --devsite-my-activity-arrow-color: #5f6368;
  --devsite-bookmark-icon-arrow-color: #5f6368;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%
}

[appearance=dark] devsite-my-activity-light {
  --devsite-my-activity-arrow-color: #9aa0a6;
  --devsite-bookmark-icon-arrow-color: #9aa0a6
}

devsite-my-activity-light .waiting-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%
}

devsite-my-activity-light .tooltip {
  background-color: var(--devsite-link-color);
  border-radius: 10px;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);
  color: var(--tenant-inverted-text-color);
  padding-block:20px 10px;padding-inline:20px;position: absolute;
  z-index: 1;
  inset-inline-start: 28px;
  top: 50px;
  -webkit-margin-end: 5px;
  -moz-margin-end: 5px;
  margin-inline-end:5px}

devsite-my-activity-light .tooltip .arrow {
  color: var(--devsite-link-color);
  font-size: 60px;
  inset-inline-start: 4px;
  position: absolute;
  top: -34px
}

devsite-my-activity-light .tooltip .title {
  font-weight: 500;
  font-size: 100%;
  font-family: var(--devsite-headline-font-family)
}

devsite-my-activity-light .tooltip .button {
  color: #fff;
  float: end;
  -webkit-margin-before: 10px;
  margin-block-start:10px}

devsite-my-activity-light .tooltip .button:hover {
  background-color: var(--devsite-link-color)
}

devsite-my-activity-light .my-activity-date-range {
  font-weight: 500;
  color: var(--tenant-secondary-text-color);
  line-height: 20px;
  font-size: 13px;
  -webkit-margin-after: 8px;
  margin-block-end:8px}

devsite-my-activity-light .my-activity-container {
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%
}

devsite-my-activity-light .activities {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 10px;
  -webkit-margin-end: -15px;
  -moz-margin-end: -15px;
  margin-inline-end:-15px;-webkit-padding-end: 15px;
  -moz-padding-end: 15px;
  padding-inline-end:15px;position: relative
}

devsite-my-activity-light .activity {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border: var(--devsite-primary-border);
  border-radius: 8px;
  padding: 12px 8px 10px
}

devsite-my-activity-light .activity-expanded {
  border: 2px var(--devsite-link-color) solid;
  padding: 11px 7px 9px
}

devsite-my-activity-light .activity-playlist {
  padding: 11px 7px 9px
}

devsite-my-activity-light .my-activity-overview-section {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-my-activity-light .activity-icon {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 22px;
  height: 20px;
  margin: 4px;
  -webkit-margin-end: 10px;
  -moz-margin-end: 10px;
  margin-inline-end:10px;min-width: 20px;
  width: 20px
}

devsite-my-activity-light .activity.badge .activity-icon {
  background-image: url(../images/activity-badge.svg)
}

devsite-my-activity-light .activity.android .activity-icon {
  background-image: url(../images/activity-android.png)
}

devsite-my-activity-light .activity.cloud .activity-icon {
  background-image: url(../images/activity-cloud.png)
}

devsite-my-activity-light .activity.bazel .activity-icon {
  background-image: url(../images/activity-bazel.svg)
}

devsite-my-activity-light .activity.other .activity-icon {
  background-image: url(../images/activity-other.png)
}

devsite-my-activity-light .activity.firebase .activity-icon {
  background-image: url(../images/activity-firebase.svg);
  background-size: 15px
}

devsite-my-activity-light .activity-title-tags {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: hidden
}

devsite-my-activity-light .activity-link {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  overflow: hidden;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  font-weight: 500;
  font-size: 14px
}

devsite-my-activity-light .activity-text {
  line-height: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}

devsite-my-activity-light .activity-tags {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  color: var(--tenant-secondary-text-color);
  font-size: 12px;
  line-height: 20px
}

devsite-my-activity-light .activity-tag:after {
  content: "•";
  font-size: 14px;
  line-height: 14px;
  top: 1px;
  position: relative;
  -webkit-margin-end: 5px;
  -moz-margin-end: 5px;
  margin-inline-end:5px;-webkit-margin-start: 3px;
  -moz-margin-start: 3px;
  margin-inline-start:3px}

devsite-my-activity-light .activity-tag:last-child:after {
  content: ""
}

devsite-my-activity-light .activity-expand-arrow {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  cursor: pointer;
  color: var(--devsite-my-activity-arrow-color)
}

devsite-my-activity-light .activity-link-out {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 17px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  line-height: 24px;
  margin: 0 4px
}

devsite-my-activity-light .my-activity-show-more {
  border: var(--devsite-primary-border);
  border-radius: 8px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding: 8px;
  -webkit-padding-end: 9px;
  -moz-padding-end: 9px;
  padding-inline-end:9px;-webkit-padding-start: 16px;
  -moz-padding-start: 16px;
  padding-inline-start:16px;font-weight: 500;
  color: var(--devsite-link-color);
  font-size: 14px;
  line-height: 20px;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 8px;
  cursor: pointer
}

devsite-my-activity-light .activity-details {
  border-top: var(--devsite-primary-border);
  margin: 10px -7px 0;
  padding: 0 12px
}

devsite-my-activity-light .activity-details-section {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: var(--devsite-primary-border);
  padding: 12px 0
}

devsite-my-activity-light .updated-chip {
  background-color: var(--devsite-link-background-active);
  -webkit-margin-end: 12px;
  -moz-margin-end: 12px;
  margin-inline-end:12px;color: var(--devsite-contrast-link-color);
  padding: 1px 8px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  line-height: 21px
}

devsite-my-activity-light .my-activity-view-release-notes-container {
  line-height: 21px;
  font-size: 13px;
  font-weight: 500
}

devsite-my-activity-light .activity-details-section:last-child {
  border-bottom: none;
  -webkit-padding-after: 0;
  padding-block-end:0}

devsite-my-activity-light .activity-details-section-nomenclature {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-my-activity-light .activity-details-title {
  -webkit-margin-end: 5px;
  -moz-margin-end: 5px;
  margin-inline-end:5px;display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

devsite-my-activity-light .activity-date {
  font-size: 13px;
  line-height: 21px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--tenant-secondary-text-color)
}

devsite-my-activity-light .activity-bookmarked-container {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: end
}

devsite-my-activity-light .activity-bookmarked-container devsite-bookmark devsite-dropdown-list {
  --devsite-dropdown-list-toggle-border-radius: 4px;
  --devsite-dropdown-list-toggle-button-padding: 0 8px
}

devsite-my-activity-light .activity-bookmarked-container devsite-bookmark {
  -webkit-box-pack: end;
  -webkit-justify-content: end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end
}

devsite-my-activity-light .activity-details-title {
  font-size: 13px;
  font-weight: 700;
  line-height: 21px;
  color: var(--tenant-secondary-text-color)
}

devsite-my-activity-light .activity-nom-tags {
  -webkit-margin-before: 6px;
  margin-block-start:6px;display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

devsite-my-activity-light .activity-nom-tag {
  background-color: var(--devsite-background-3);
  color: var(--tenant-secondary-text-color);
  font-size: 14px;
  font-weight: 500;
  padding: 1px 8px;
  text-align: center
}

devsite-my-activity-light .activity-completion-container {
  font-size: 12px;
  -webkit-margin-before: 4px;
  margin-block-start:4px;-webkit-padding-start: 28px;
  -moz-padding-start: 28px;
  padding-inline-start:28px;z-index: 3
}

devsite-my-activity-light .activity-completion-container .activity-completion-color {
  background-color: #fcad70;
  height: 6px;
  inset-block-start: 0;
  position: absolute
}

devsite-my-activity-light .activity-completion-container .activity-completion-grey {
  background-color: var(--devsite-background-3);
  border-radius: 5px;
  height: 6px;
  -webkit-margin-after: 4px;
  margin-block-end:4px;overflow: hidden;
  position: relative;
  width: 210px
}

devsite-my-community {
  font-size: 16px
}

devsite-my-community .devsite-my-community-feature-not-available {
  text-align: center;
  margin: 50px 0
}

devsite-my-community .waiting-container {
  margin: auto
}

devsite-my-community .devsite-my-community-card {
  margin-bottom: 24px;
  height: unset
}

devsite-my-community .devsite-my-community-header {
  padding: 24px;
  border-bottom: var(--devsite-card-border);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

devsite-my-community .devsite-my-community-icon {
  max-width: 66px;
  max-height: 66px;
  -webkit-margin-end: 18px;
  -moz-margin-end: 18px;
  margin-inline-end:18px}

devsite-my-community .devsite-my-community-title-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-my-community .devsite-my-community-title {
  font: var(--devsite-h2-font);
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  color: var(--devsite-heading-color,var(--devsite-secondary-text-color))
}

devsite-my-community .devsite-my-community-member-chip {
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-success-notice-color);
  background-color: var(--devsite-success-notice-background);
  padding: 1px 8px;
  -webkit-margin-before: 7px;
  margin-block-start:7px}

devsite-my-community .devsite-my-community-description {
  padding: 0 24px 20px;
  white-space: pre-line
}

devsite-my-community .devsite-my-community-button-container {
  padding: 0 24px 24px
}

devsite-my-community .devsite-my-community-button-container button.button {
  margin: 6px 6px 0 0
}

devsite-my-community .devsite-my-community-button-container devsite-spinner {
  display: inline-block;
  margin-left: 24px;
  position: absolute
}

devsite-my-community .devsite-my-community-details-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-transition: border-color,max-height,.5s ease-out;
  transition: border-color,max-height,.5s ease-out;
  border-top: 1px solid transparent;
  margin-top: 4px;
  max-height: 0
}

devsite-my-community .devsite-my-community-details-container[opened] {
  border-top: var(--devsite-card-border);
  -webkit-transition: border-color,max-height,.5s ease-in;
  transition: border-color,max-height,.5s ease-in;
  max-height: 3000px
}

devsite-my-community .devsite-my-community-missing-info-warning,devsite-my-community .devsite-my-community-profile-not-allowed {
  gap: 10px;
  color: var(--devsite-caution-notice-color);
  background-color: var(--devsite-caution-notice-background);
  padding: 9px 24px;
  font-size: 14px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-margin-after: 24px;
  margin-block-end:24px;-webkit-margin-before: 3px;
  margin-block-start:3px}

devsite-my-community .devsite-my-community-missing-info-warning .material-symbols-outlined,devsite-my-community .devsite-my-community-profile-not-allowed .material-symbols-outlined {
  font-variation-settings: "FILL" 1,"wght" 400,"GRAD" 0,"opsz" 48
}

devsite-my-community .devsite-my-community-no-profile-info {
  color: var(--devsite-note-notice-color);
  background-color: var(--devsite-note-notice-background);
  padding: 9px 24px;
  font-size: 14px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-margin-after: 24px;
  margin-block-end:24px}

devsite-my-community .devsite-my-community-no-profile-info .material-symbols-outlined {
  -webkit-margin-end: 10px;
  -moz-margin-end: 10px;
  margin-inline-end:10px}

devsite-my-community .devsite-my-community-profile-attributes-title {
  font-size: 18px;
  margin: 0 24px 9px;
  font-family: var(--devsite-headline-font-family)
}

devsite-my-community .devsite-my-community-legal-title {
  font-size: 18px;
  margin: 0 0 16px;
  font-family: var(--devsite-headline-font-family)
}

devsite-my-community .devsite-my-community-profile-attributes {
  display: grid;
  grid: auto/calc(50% - 12px) calc(50% - 12px);
  margin: 0 24px 18px;
  gap: 24px;
  font-size: 18px
}

devsite-my-community .devsite-my-community-profile-attributes-text {
  margin: 0;
  font-size: 16px;
  grid-column: 1/3
}

devsite-my-community .devsite-my-community-error-incorrect,devsite-my-community .devsite-my-community-error-missing {
  display: none;
  color: #ea4335;
  font-size: 12px;
  margin: 2px 0 0 14px
}

devsite-my-community .devsite-my-community-legal-container {
  margin: 0 24px 24px
}

devsite-my-community .devsite-my-community-legal-container[missing] .devsite-my-community-error-missing {
  display: inline-block
}

devsite-my-community .devsite-my-community-legal-container[missing] .devsite-my-community-legal-copy {
  border: 2px solid #ea4335
}

devsite-my-community .devsite-my-community-profile-attribute-input {
  display: block;
  position: relative;
  min-height: 86px
}

devsite-my-community .devsite-my-community-profile-attribute-input[incorrect] .devsite-my-community-error-incorrect,devsite-my-community .devsite-my-community-profile-attribute-input[missing] .devsite-my-community-error-missing {
  display: inline-block
}

devsite-my-community .devsite-my-community-email-preference {
  padding: 0 24px 24px
}

devsite-my-community .devsite-my-community-email-pref-input {
  margin-top: 8px
}

devsite-my-community .devsite-my-community-profile-title {
  margin: 24px 24px 16px;
  font-size: 18px;
  font-family: var(--devsite-headline-font-family)
}

devsite-my-community .devsite-my-community-profile-text {
  margin: 0 24px 16px
}

devsite-my-community .devsite-my-community-private-explanation {
  margin: 0 24px 24px
}

devsite-my-community .devsite-my-community-private-explanation span {
  color: var(--devsite-secondary-text-color);
  font-size: 12px;
  font-weight: 500;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: bottom;
  line-height: 23px
}

devsite-my-community .devsite-my-community-private-explanation span:before {
  content: "lock";
  font-family: Material Symbols Outlined;
  font-size: 12px;
  font-variation-settings: "FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48;
  -webkit-margin-end: 3px;
  -moz-margin-end: 3px;
  margin-inline-end:3px}

devsite-my-community .devsite-my-community-private-chip {
  color: var(--devsite-secondary-text-color);
  font-size: 12px;
  font-weight: 500;
  margin: 2px 0 0 14px;
  display: inline-block
}

devsite-my-community .devsite-my-community-private-chip .material-symbols-outlined {
  font-size: 12px;
  font-variation-settings: "FILL" 0,"wght" 400,"GRAD" 0,"opsz" 48;
  top: 2px;
  position: relative
}

devsite-my-community .devsite-my-community-legal-copy {
  padding: 16px;
  font-size: 14px;
  background-color: var(--devsite-background-3);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-my-community .devsite-my-community-legal-copy input {
  background-color: transparent;
  -webkit-margin-before: 5px;
  margin-block-start:5px;-webkit-margin-end: 11px;
  -moz-margin-end: 11px;
  margin-inline-end:11px}

.devsite-my-community-leave-title {
  font-family: Google Sans;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: var(--devsite-heading-color,var(--devsite-secondary-text-color));
  margin-bottom: 16px
}

.devsite-my-community-leave-buttons {
  margin-top: 24px
}

devsite-my-community.devsite-my-community-small .devsite-my-community-title {
  font-size: 22px
}

devsite-my-community.devsite-my-community-small .devsite-my-community-profile-attributes {
  grid: auto/auto
}

devsite-my-community.devsite-my-community-small .devsite-my-community-profile-attributes-text {
  grid-column: 1/2
}

devsite-nav-buttons {
  display: block
}

devsite-nav-buttons button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: var(--devsite-button-border);
  box-shadow: none;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font-weight: 500;
  text-transform: none
}

devsite-nav-buttons button,devsite-nav-buttons button:focus,devsite-nav-buttons button:hover {
  color: var(--devsite-button-color)
}

devsite-nav-buttons button:focus,devsite-nav-buttons button:hover {
  background: var(--devsite-button-background-hover);
  border: var(--devsite-button-border-hover)
}

devsite-nav-buttons button,devsite-nav-buttons button[class^=button-] {
  border-radius: 16px;
  height: 32px;
  line-height: 30px;
  padding: var(--devsite-button-padding,0 12px)
}

devsite-nav-buttons button[class^=button-][selected],devsite-nav-buttons button[selected] {
  border: var(--devsite-button-border-selected);
  padding-left: 8px
}

devsite-nav-buttons button[class^=button-],devsite-nav-buttons button[class^=button-][selected] {
  border: 0
}

devsite-nav-buttons button[selected] {
  background: var(--devsite-button-background-selected);
  color: var(--devsite-button-color-selected)
}

devsite-nav-buttons button.button-white[selected] {
  background: var(--devsite-button-white-background-selected,var(--devsite-link-color));
  color: var(--devsite-button-white-color-selected,var(--devsite-inverted-text-color))
}

devsite-nav-buttons button.button-primary[selected] {
  background: var(--devsite-button-primary-background-selected);
  color: var(--devsite-button-primary-color-selected,var(--devsite-inverted-text-color))
}

devsite-nav-buttons button[selected]:before {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  content: "checked";
  margin-right: 8px;
  width: 24px
}

devsite-pagination {
  display: block;
  font: var(--devsite-pagination-font,inherit);
  letter-spacing: var(--devsite-pagination-letter-spacing,normal)
}

devsite-pagination[buttons],devsite-pagination[initial-results] {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-pagination button[hidden] {
  display: none
}

devsite-pagination .devsite-pagination-page-numbers-controls {
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -moz-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-pagination .devsite-pagination-next-button,devsite-pagination .devsite-pagination-previous-button {
  border: 0
}

devsite-pagination .devsite-pagination-next-button:not([disabled]),devsite-pagination .devsite-pagination-previous-button:not([disabled]) {
  border: 0;
  color: var(--devsite-secondary-text-color)
}

devsite-pagination .devsite-pagination-previous-button:before {
  content: "chevron_left"
}

devsite-pagination .devsite-pagination-next-button:before {
  content: "chevron_right"
}

devsite-pagination .devsite-pagination-page-numbers {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-pagination .devsite-pagination-ellipsis,devsite-pagination a {
  margin: var(--devsite-pagination-link-margin,0 7px)
}

devsite-pagination a[selected] {
  text-decoration: underline
}

devsite-pagination .devsite-pagination-ellipsis {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  padding-top: 1px
}

[dir] devsite-pagination .button,[dir] devsite-pagination .button+.button {
  margin-left: 10px;
  margin-right: 10px
}

devsite-panel {
  bottom: 0;
  display: block;
  height: var(--devsite-panel-height,auto);
  left: 0;
  max-height: var(--devsite-panel-max-height,50vh);
  overflow: auto;
  position: fixed;
  right: 0;
  z-index: 1017
}

devsite-panel[always-on-top] {
  z-index: 1019
}

devsite-panel[devsite-size=content-area] {
  background-color: var(--devsite-background-1)
}

devsite-playlist {
  display: block;
  margin-bottom: 48px
}

devsite-playlist .devsite-playlist--inner {
  margin: 0 auto;
  max-width: var(--devsite-playlist-max-width);
  padding: 0 var(--devsite-playlist-padding-x)
}

devsite-playlist .devsite-playlist--header {
  background-color: #263238
}

devsite-playlist .devsite-playlist--header .devsite-playlist--inner {
  padding-bottom: 24px
}

devsite-playlist .devsite-playlist--header-details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

devsite-playlist .devsite-playlist--header-badge-info,devsite-playlist .devsite-playlist--header-details-info {
  color: #fff;
  padding-top: 40px;
  width: calc(50% - 20px)
}

devsite-playlist .devsite-playlist--header-badge-info {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative
}

devsite-playlist .devsite-playlist--header-badge-info--bg {
  background: url(../images/playlist_header.svg) no-repeat 0 -20px/cover;
  content: "";
  height: 213px;
  left: 0;
  position: absolute;
  top: 0;
  width: 510px
}

devsite-playlist .devsite-playlist--header-badge-info--container {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  justify-self: center;
  position: relative
}

devsite-playlist .devsite-playlist-badge-details-icon,devsite-playlist .devsite-playlist-badge-details-icon-container {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-playlist .devsite-playlist-badge-details-icon-container-signin-enabled.devsite-playlist-badge-details-icon-container {
  margin-bottom: -48px;
  position: relative;
  z-index: 1
}

devsite-playlist .devsite-playlist-badge-details-icon {
  background: var(--devsite-background-1);
  border-radius: 50%;
  height: 135px;
  padding: 7px;
  position: relative;
  width: 135px
}

devsite-playlist .devsite-playlist-badge-details-icon-container-signin-enabled .devsite-playlist-badge-details-icon {
  -webkit-transform: translate3d(0,-44px,0);
  transform: translate3d(0,-44px,0);
  -webkit-transition: -webkit-transform .2s cubic-bezier(0,0,.2,1);
  transition: -webkit-transform .2s cubic-bezier(0,0,.2,1);
  transition: transform .2s cubic-bezier(0,0,.2,1);
  transition: transform .2s cubic-bezier(0,0,.2,1),-webkit-transform .2s cubic-bezier(0,0,.2,1)
}

devsite-playlist .devsite-playlist--progress-bar--outer,devsite-playlist .devsite-playlist--progress-text,devsite-playlist .devsite-playlist-badge-details-action,devsite-playlist .devsite-playlist-badge-details-icon img,devsite-playlist .devsite-playlist-badge-details-subtext {
  opacity: 1;
  position: relative;
  -webkit-transition: opacity .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1),transform .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1),transform .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1);
  z-index: 2
}

devsite-playlist .devsite-playlist-badge-details-icon img {
  -webkit-animation: badgeGrowIn .33s cubic-bezier(.75,0,.71,.97),badgeGrowOut .17s cubic-bezier(.85,-.14,.83,.83) .33s,badgeFadeIn .5s linear;
  animation: badgeGrowIn .33s cubic-bezier(.75,0,.71,.97),badgeGrowOut .17s cubic-bezier(.85,-.14,.83,.83) .33s,badgeFadeIn .5s linear;
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1)
}

devsite-playlist .devsite-playlist-badge-sharing {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-top: var(--devsite-secondary-border);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 12px -16px -16px;
  padding: 8px 0;
  -webkit-padding-start: 12px;
  -moz-padding-start: 12px;
  padding-inline-start:12px}

devsite-playlist .devsite-playlist-share-buttons {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-playlist .devsite-playlist-badge-sharing span {
  color: var(--devsite-secondary-text-color);
  font-size: 14px;
  line-height: 1
}

devsite-playlist .devsite-playlist-badge-sharing img {
  width: 18px
}

devsite-playlist .devsite-playlist-badge-sharing button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 0;
  box-shadow: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: auto;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-width: 0;
  padding: 4px
}

devsite-playlist .devsite-playlist-badge-sharing button:focus,devsite-playlist .devsite-playlist-badge-sharing button:hover {
  background: none
}

devsite-playlist .devsite-playlist-badge-sharing button+button {
  margin: 0 8px
}

devsite-playlist .devsite-playlist-badge-details-icon img {
  position: static
}

devsite-playlist .devsite-playlist-badge-details-icon devsite-spinner {
  opacity: 0;
  position: absolute;
  -webkit-transition: opacity .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1)
}

devsite-playlist .devsite-playlist--progress-text {
  color: var(--devsite-primary-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center
}

devsite-playlist .devsite-playlist--progress-bar {
  -webkit-transition: opacity .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1)
}

devsite-playlist .devsite-playlist--progress-bar.hide {
  opacity: 0
}

devsite-playlist .devsite-playlist--progress-bar--outer {
  background: var(--devsite-link-background-active);
  border-radius: 24px;
  height: 10px;
  margin: 14px 0 0;
  position: relative
}

devsite-playlist .devsite-playlist--progress-bar--inner {
  background: var(--devsite-link-color);
  border-radius: 24px;
  display: inline-block;
  height: 100%;
  position: absolute;
  -webkit-transition: width .3s cubic-bezier(0,0,.2,1);
  transition: width .3s cubic-bezier(0,0,.2,1);
  white-space: nowrap;
  width: 0
}

devsite-playlist .devsite-playlist-badge-details-action,devsite-playlist .devsite-playlist-badge-details-subtext {
  font-size: 14px;
  line-height: 16px;
  text-align: center
}

devsite-playlist .devsite-playlist-badge-details-subtext {
  color: var(--devsite-secondary-text-color);
  padding: 28px 0 0
}

devsite-playlist .devsite-playlist-badge-details-action {
  font-weight: 700;
  padding: 4px 0 0
}

devsite-playlist .no-badge .devsite-playlist-badge-details-icon-container {
  display: none
}

devsite-playlist .badge-earned .devsite-playlist-badge-details-subtext {
  padding: 0 0 12px
}

devsite-playlist .not-eligible .devsite-playlist--progress-bar,devsite-playlist .not-eligible .devsite-playlist--progress-text {
  display: none
}

devsite-playlist .not-eligible.no-badge .devsite-playlist-badge-details-subtext {
  padding-top: 0
}

devsite-playlist .loading {
  pointer-events: none
}

devsite-playlist .loading .devsite-playlist-badge-details-icon-container {
  bottom: 0;
  left: 0;
  margin-bottom: 0;
  position: absolute;
  right: 0;
  top: 0
}

devsite-playlist .loading .devsite-playlist-badge-details-icon {
  background: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0)
}

devsite-playlist .loading .devsite-playlist--progress-bar--outer,devsite-playlist .loading .devsite-playlist--progress-text,devsite-playlist .loading .devsite-playlist-badge-details-action,devsite-playlist .loading .devsite-playlist-badge-details-subtext {
  opacity: 0
}

devsite-playlist .loading .devsite-playlist-badge-details-icon img {
  opacity: 0;
  position: absolute
}

devsite-playlist .loading .devsite-playlist-badge-details-icon devsite-spinner {
  opacity: 1
}

devsite-playlist .devsite-playlist--header h1:first-of-type {
  color: #fff;
  font: var(--devsite-h1-font)
}

devsite-playlist .devsite-playlist-details {
  color: var(--devsite-secondary-text-color);
  font-size: 12px;
  line-height: 16px
}

devsite-playlist .devsite-playlist--header p {
  line-height: 24px;
  margin: 22px 0;
  padding: 0
}

devsite-playlist .devsite-playlist-return-button {
  margin-top: 24px
}

devsite-playlist .devsite-playlist-summary {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: normal 700 12px/24px var(--devsite-primary-font-family)
}

devsite-playlist .devsite-playlist-badge-details {
  background: var(--devsite-background-1);
  border-radius: 8px;
  height: auto;
  max-width: 213px;
  padding: 16px;
  width: 100%;
  min-width: 64px;
  min-height: 64px
}

devsite-playlist .profile-notification {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-playlist .profile-notification--inner {
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);
  border-radius: 4px;
  color: var(--devsite-secondary-text-color);
  margin: 0 auto;
  padding: 16px
}

devsite-playlist .devsite-playlist--section {
  padding: 24px 0;
  position: relative
}

devsite-playlist .devsite-playlist--section .arrow--up,devsite-playlist[not-signed-in] .devsite-playlist--item--meta em,devsite-playlist[not-signed-in] .devsite-playlist--section .playlist-skip {
  display: none
}

devsite-playlist .devsite-playlist--item-top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-playlist .devsite-playlist--item-top:before {
  background: var(--devsite-background-5);
  content: "";
  display: block;
  height: 0;
  -webkit-margin-start: 15px;
  -moz-margin-start: 15px;
  margin-inline-start:15px;margin-top: 2px;
  position: absolute;
  top: 54px;
  -webkit-transition: height .2s cubic-bezier(.4,0,1,1),opacity .2s cubic-bezier(.4,0,1,1);
  transition: height .2s cubic-bezier(.4,0,1,1),opacity .2s cubic-bezier(.4,0,1,1);
  width: 1px;
  z-index: 1
}

devsite-playlist .devsite-playlist--item-top-index {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0;
  -moz-box-flex: 0;
  -ms-flex: 0 0;
  flex: 0 0;
  position: relative;
  width: 30px
}

devsite-playlist .devsite-playlist--item-top-index span {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-primary-text-color);
  border-radius: 50%;
  color: var(--devsite-inverted-text-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 30px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 2px;
  opacity: 1;
  width: 30px
}

devsite-playlist .devsite-playlist--item-top-index i {
  color: var(--devsite-playlist-icon-color);
  font-size: 36px;
  height: 36px;
  left: -3px;
  opacity: 0;
  position: absolute;
  top: -1px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  width: 36px
}

devsite-playlist .devsite-playlist--item-top-index devsite-spinner {
  opacity: 0;
  position: absolute;
  top: 2px
}

devsite-playlist .devsite-playlist--item-top-index devsite-spinner,devsite-playlist .devsite-playlist--item-top-index i,devsite-playlist .devsite-playlist--item-top-index span {
  -webkit-transition: background .2s cubic-bezier(.4,0,1,1),opacity .2s cubic-bezier(.4,0,1,1);
  transition: background .2s cubic-bezier(.4,0,1,1),opacity .2s cubic-bezier(.4,0,1,1)
}

devsite-playlist .devsite-playlist--item-top-controls {
  width: 32px
}

devsite-playlist .devsite-playlist--item-top-controls button {
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  color: var(--devsite-playlist-button-color,var(--devsite-primary-text-color));
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 32px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-width: 0;
  padding: 0;
  width: 32px
}

devsite-playlist .devsite-playlist--item-top-controls button:focus,devsite-playlist .devsite-playlist--item-top-controls button:hover {
  color: var(--devsite-playlist-button-color-hover)
}

devsite-playlist .devsite-playlist--item-top-controls button:active {
  color: var(--devsite-playlist-button-color-active)
}

devsite-playlist .devsite-playlist--item-top-controls button .material-icons {
  cursor: pointer;
  font-size: 24px;
  height: 24px;
  margin: 0;
  position: static;
  top: auto;
  width: 24px
}

devsite-playlist .devsite-playlist--item-top-title {
  cursor: pointer;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 0 18px
}

devsite-playlist .devsite-playlist--item-top-title h2 {
  font-size: 28px;
  line-height: 36px;
  margin: 0;
  padding: 0
}

devsite-playlist .devsite-playlist--item--content,devsite-playlist .devsite-playlist--item--meta {
  padding: 0 48px
}

devsite-playlist .devsite-playlist--item--meta {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-secondary-text-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 12px;
  line-height: 16px;
  margin: 4px 0
}

devsite-playlist .devsite-playlist--item--meta em {
  -webkit-padding-start: 16px;
  -moz-padding-start: 16px;
  padding-inline-start:16px}

devsite-playlist .devsite-playlist--item--meta .material-icons {
  font-size: 18px;
  height: 18px;
  -webkit-margin-end: 4px;
  -moz-margin-end: 4px;
  margin-inline-end:4px;width: 18px
}

devsite-playlist .devsite-playlist--item--actions,devsite-playlist .devsite-playlist--item--content {
  display: none
}

devsite-playlist .devsite-playlist--item--actions {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 8px 0 32px;
  -webkit-padding-start: 48px;
  -moz-padding-start: 48px;
  padding-inline-start:48px}

devsite-playlist [ready] .devsite-playlist--item-top:before {
  height: calc(100% - 30px)
}

devsite-playlist [expanded] {
  background: #f1f3f4 url(../images/playlist_active.svg) repeat-x top
}

devsite-playlist [expanded] .arrow--down {
  display: none
}

devsite-playlist [expanded] .arrow--up {
  display: block
}

devsite-playlist [expanded] .devsite-playlist--item-top-index span {
  background: var(--devsite-link-color)
}

devsite-playlist [expanded] .devsite-playlist--item--content {
  display: block
}

devsite-playlist [expanded] .devsite-playlist--item--actions {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-playlist [type=game] .devsite-playlist--item--content,devsite-playlist [type=video] .devsite-playlist--item--content {
  padding: 12px 48px
}

devsite-playlist [completing] devsite-spinner {
  opacity: 1
}

devsite-playlist [completed] .devsite-playlist--item-top-index span {
  opacity: 0
}

devsite-playlist [completed] .devsite-playlist--item-top-index i {
  opacity: 1;
  -webkit-transform: rotate(0);
  transform: rotate(0)
}

devsite-playlist [completed] .playlist-skip {
  display: none
}

devsite-playlist [completed][expanded] .devsite-playlist--item-top-index i {
  background-color: rgba(230,240,255,.24)
}

devsite-playlist [last] .devsite-playlist--item-top:before {
  display: none
}

devsite-playlist .devsite-playlist--section-quiz {
  border: var(--devsite-primary-border);
  border-radius: 4px;
  padding: 24px
}

devsite-playlist .devsite-playlist--section-quiz h2 {
  margin: 0;
  padding: 0
}

devsite-playlist .devsite-playlist--section-project-header {
  -webkit-box-align: start;
  -webkit-align-items: start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 0 8px
}

devsite-playlist .devsite-playlist--project--status {
  background: var(--devsite-background-3);
  border-radius: 4px;
  font: 500 11px/16px var(--devsite-primary-font-family);
  letter-spacing: .8px;
  padding-block:4px;padding-inline:8px;text-transform: uppercase
}

devsite-playlist .devsite-playlist--footer,devsite-playlist .devsite-playlist--section-quiz .devsite-playlist--item--actions {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-playlist .devsite-playlist--footer {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 20px;
  padding: 4px 0
}

.devsite-playlist-dialog {
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color);
  background: var(--devsite-background-1);
  border-radius: 8px;
  padding: 24px;
  position: relative
}

.devsite-playlist-dialog .devsite-playlist-dialog-spinner {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-background-1);
  bottom: 0;
  display: none;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100
}

.devsite-playlist-dialog.loading .devsite-playlist-dialog-spinner {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

.devsite-playlist-dialog .devsite-playlist-dialog-inner {
  color: var(--devsite-secondary-text-color);
  position: relative
}

.devsite-playlist-dialog .devsite-playlist-dialog-inner h4 {
  font-family: var(--devsite-headline-font-family);
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px
}

.devsite-playlist-dialog .devsite-playlist-dialog-inner label {
  font-size: 14px;
  line-height: 22px
}

.devsite-playlist-dialog .devsite-playlist-dialog-inner p {
  color: var(--devsite-secondary-text-color);
  font-size: 12px;
  line-height: 16px
}

@media screen and (max-width: 600px) {
  devsite-playlist .devsite-playlist--header-details {
      -webkit-box-align:center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column
  }

  devsite-playlist .devsite-playlist--header-badge-info,devsite-playlist .devsite-playlist--header-details-info {
      width: 100%
  }

  devsite-playlist .devsite-playlist--header-badge-info--bg {
      background-position: 0;
      top: 84px
  }
}

devsite-playlist-earnable-badges {
  display: block
}

devsite-playlist-earnable-badges.loading {
  position: relative
}

devsite-playlist-earnable-badges .spinner-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-playlist-summary {
  display: block
}

devsite-playlist-summary.loading {
  position: relative
}

devsite-playlist-summary .progress-container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000
}

devsite-playlist-summary .devsite-playlist-summary-image.hide,devsite-playlist-summary .devsite-playlist-summary-info.hide {
  opacity: 0;
  -webkit-transform: translateY(12px);
  transform: translateY(12px);
  -webkit-transition: opacity .213s cubic-bezier(.4,0,1,1),-webkit-transform .213s cubic-bezier(.4,0,1,1);
  transition: opacity .213s cubic-bezier(.4,0,1,1),-webkit-transform .213s cubic-bezier(.4,0,1,1);
  transition: transform .213s cubic-bezier(.4,0,1,1),opacity .213s cubic-bezier(.4,0,1,1);
  transition: transform .213s cubic-bezier(.4,0,1,1),opacity .213s cubic-bezier(.4,0,1,1),-webkit-transform .213s cubic-bezier(.4,0,1,1)
}

devsite-playlist-summary .devsite-playlist-summary-image,devsite-playlist-summary .devsite-playlist-summary-info {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: opacity .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: opacity .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),opacity .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),opacity .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1)
}

devsite-playlist-summary .devsite-playlist-summary-progress-background {
  overflow: hidden
}

devsite-playlist-summary.not-signed-in .devsite-playlist-summary-progress-background {
  margin-right: 0
}

devsite-playlist-summary.not-signed-in .devsite-playlist-summary-progress-bar-value {
  display: none
}

devsite-playlist-summary .devsite-playlist-summary-progress-bar {
  -webkit-transform: translateX(-101%);
  transform: translateX(-101%);
  -webkit-transition: -webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: -webkit-transform .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1);
  transition: transform .213s cubic-bezier(0,0,.2,1),-webkit-transform .213s cubic-bezier(0,0,.2,1)
}

devsite-playlist-summary .devsite-playlist-summary-progress-bar-value:empty:before,devsite-playlist-summary .devsite-playlist-summary-status:empty:before {
  content: " "
}

devsite-product-catalog .devsite-product-catalog-alphabet {
  border-bottom: var(--devsite-primary-border);
  border-top: var(--devsite-primary-border);
  color: var(--devsite-secondary-text-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 20px;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 16px 0
}

devsite-product-catalog .devsite-product-catalog-alphabet-link,devsite-product-catalog .devsite-product-catalog-alphabet-link-disabled {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -moz-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 10px 0
}

devsite-product-catalog .devsite-product-catalog-alphabet-letter:not(:last-child) {
  border-bottom: var(--devsite-primary-border)
}

devsite-product-catalog .devsite-product-catalog-alphabet-letter-heading {
  margin: 20px 0
}

devsite-product-catalog .devsite-product-catalog-alphabet-letter-list {
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-gap: 40px;
  -moz-column-gap: 40px;
  column-gap: 40px;
  list-style: none;
  margin: 0 0 40px;
  padding: 0
}

devsite-product-catalog .devsite-product-catalog-alphabet-letter-list-item {
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  margin: 0 0 16px
}

devsite-product-catalog .devsite-product-catalog-alphabet-letter-link {
  display: block;
  padding: 8px 0
}

devsite-product-catalog .devsite-product-catalog-item-name {
  margin: 0
}

devsite-product-catalog devsite-filter:not(:first-of-type) {
  border-top: var(--devsite-primary-border)
}

devsite-product-catalog .devsite-filter-input+.devsite-product-catalog-alphabet {
  margin-top: 32px
}

devsite-product-catalog .devsite-filter-input:valid+.devsite-product-catalog-alphabet {
  display: none
}

@media screen and (max-width: 840px) {
  devsite-product-catalog .devsite-product-catalog-alphabet {
      -webkit-flex-wrap:wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -moz-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start
  }

  devsite-product-catalog .devsite-product-catalog-alphabet-letter-list {
      -webkit-column-count: 2;
      -moz-column-count: 2;
      column-count: 2
  }

  devsite-product-catalog .devsite-product-catalog-alphabet-link,devsite-product-catalog .devsite-product-catalog-alphabet-link-disabled {
      display: block;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 44px;
      -moz-box-flex: 0;
      -ms-flex: 0 0 44px;
      flex: 0 0 44px;
      text-align: center
  }
}

@media screen and (max-width: 600px) {
  devsite-product-catalog .devsite-product-catalog-alphabet {
      padding:0 0 20px
  }

  devsite-product-catalog .devsite-product-catalog-alphabet-letter-list {
      -webkit-column-count: 1;
      -moz-column-count: 1;
      column-count: 1
  }
}

devsite-progress {
  pointer-events: none;
  -webkit-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transition: -webkit-transform .2s ease;
  transition: -webkit-transform .2s ease;
  transition: transform .2s ease;
  transition: transform .2s ease,-webkit-transform .2s ease
}

devsite-progress[type=indeterminate] {
  height: 2px;
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  contain: size layout style paint
}

devsite-progress .devsite-progress--indeterminate {
  position: relative;
  height: 2px
}

devsite-progress .devsite-progress--indeterminate-1,devsite-progress .devsite-progress--indeterminate-2,devsite-progress .devsite-progress--indeterminate-3,devsite-progress .devsite-progress--indeterminate-4 {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0)
}

devsite-progress .devsite-progress--indeterminate-1 {
  -webkit-animation: progress-indeterminate-1 2.5s linear infinite;
  animation: progress-indeterminate-1 2.5s linear infinite;
  background: var(--devsite-progress-background-1,var(--devsite-background-1));
  z-index: 1
}

devsite-progress .devsite-progress--indeterminate-2 {
  -webkit-animation: progress-indeterminate-2 2.5s ease-in infinite;
  animation: progress-indeterminate-2 2.5s ease-in infinite;
  background: var(--devsite-progress-background-2,var(--devsite-background-1));
  z-index: 2
}

devsite-progress .devsite-progress--indeterminate-3 {
  -webkit-animation: progress-indeterminate-3 2.5s ease-out infinite;
  animation: progress-indeterminate-3 2.5s ease-out infinite;
  background: var(--devsite-progress-background-3,var(--devsite-background-1));
  z-index: 3
}

devsite-progress .devsite-progress--indeterminate-4 {
  -webkit-animation: progress-indeterminate-4 2.5s ease-out infinite;
  animation: progress-indeterminate-4 2.5s ease-out infinite;
  background: var(--devsite-progress-background-4,var(--devsite-background-1));
  z-index: 4
}

devsite-progress .devsite-progress--indeterminate-1,devsite-progress .devsite-progress--indeterminate-2,devsite-progress .devsite-progress--indeterminate-3,devsite-progress .devsite-progress--indeterminate-4 {
  -webkit-animation-play-state: var(--devsite-progress-animation-play-state);
  animation-play-state: var(--devsite-progress-animation-play-state)
}

@-webkit-keyframes progress-indeterminate-1 {
  0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0)
  }

  50%,to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }
}

@keyframes progress-indeterminate-1 {
  0% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0)
  }

  50%,to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }
}

@-webkit-keyframes progress-indeterminate-2 {
  0%,20% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0)
  }

  70%,to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }
}

@keyframes progress-indeterminate-2 {
  0%,20% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0)
  }

  70%,to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }
}

@-webkit-keyframes progress-indeterminate-3 {
  0%,60% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0)
  }

  90%,to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }
}

@keyframes progress-indeterminate-3 {
  0%,60% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0)
  }

  90%,to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }
}

@-webkit-keyframes progress-indeterminate-4 {
  0%,75% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0)
  }

  to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }
}

@keyframes progress-indeterminate-4 {
  0%,75% {
      -webkit-transform: scaleX(0);
      transform: scaleX(0)
  }

  to {
      -webkit-transform: scaleX(1);
      transform: scaleX(1)
  }
}

@keyframes badgeGrowIn {
  0% {
      -webkit-transform: scale(0);
      transform: scale(0)
  }

  to {
      -webkit-transform: scale(1.3);
      transform: scale(1.3)
  }
}

@keyframes badgeGrowOut {
  0% {
      -webkit-transform: scale(1.3);
      transform: scale(1.3)
  }

  to {
      -webkit-transform: scale(1);
      transform: scale(1)
  }
}

@keyframes badgeFadeIn {
  0% {
      opacity: 0
  }

  12% {
      opacity: 0
  }

  87% {
      opacity: 100%
  }
}

@keyframes counterHide {
  0% {
      opacity: 0
  }

  to {
      opacity: 0
  }
}

devsite-quiz {
  display: block;
  font-size: 14px
}

devsite-quiz input[type=checkbox],devsite-quiz input[type=radio] {
  margin-top: 0;
  position: relative;
  top: 3px
}

devsite-quiz devsite-bookmark input.bookmark-checkbox {
  top: 0
}

devsite-quiz input+label {
  font-size: 14px;
  vertical-align: middle
}

devsite-quiz devsite-select .devsite-select-toggle {
  min-width: 200px
}

devsite-quiz [answered] .variant-success:checked {
  color: var(--devsite-quiz-correct-color)
}

devsite-quiz [answered] .variant-success:checked:focus:before {
  background: var(--devsite-quiz-correct-background)
}

devsite-quiz [answered] input[type=text].variant-success {
  background-color: var(--devsite-quiz-correct-background);
  border-color: var(--devsite-quiz-correct-border-color)
}

devsite-quiz [answered] input[type=text]:focus.variant-success {
  border-bottom-color: var(--devsite-quiz-correct-border-color-focus)
}

devsite-quiz [answered] .variant-error:checked {
  color: var(--devsite-quiz-error-color)
}

devsite-quiz [answered] .variant-error:checked:focus:before {
  background: var(--devsite-quiz-error-background)
}

devsite-quiz [answered] input[type=text].variant-error {
  background-color: var(--devsite-quiz-error-background);
  border-color: var(--devsite-quiz-error-border-color)
}

devsite-quiz [answered] input[type=text]:focus.variant-error {
  border-bottom-color: var(--devsite-quiz-error-color)
}

devsite-quiz .devsite-quiz-header {
  background: var(--devsite-background-2);
  border-bottom: var(--devsite-primary-border)
}

devsite-quiz .devsite-quiz-header-content {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0 auto;
  padding: 48px 16px
}

devsite-quiz .devsite-quiz-title {
  margin-bottom: 8px;
  padding: 0;
  top: 0
}

devsite-quiz .devsite-quiz-tagline {
  color: var(--devsite-quiz-secondary-text-color);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 0
}

devsite-quiz .devsite-quiz-tagline:empty {
  min-height: 40px
}

devsite-quiz .devsite-quiz-return-button {
  margin-top: 15px
}

devsite-quiz .devsite-quiz-badge {
  display: none
}

devsite-quiz .devsite-quiz-partially-correct-indicator {
  background-color: var(--devsite-quiz-partially-correct-indicator-background)
}

devsite-quiz .devsite-quiz-body {
  margin: 0 auto;
  padding: 48px 16px 0
}

devsite-quiz [answered] .devsite-quiz-feedback {
  margin-bottom: 18px;
  opacity: 1;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: opacity .2s cubic-bezier(0,0,.2,1),-webkit-transform .2s cubic-bezier(0,0,.2,1);
  transition: opacity .2s cubic-bezier(0,0,.2,1),-webkit-transform .2s cubic-bezier(0,0,.2,1);
  transition: opacity .2s cubic-bezier(0,0,.2,1),transform .2s cubic-bezier(0,0,.2,1);
  transition: opacity .2s cubic-bezier(0,0,.2,1),transform .2s cubic-bezier(0,0,.2,1),-webkit-transform .2s cubic-bezier(0,0,.2,1)
}

devsite-quiz .devsite-quiz-submit-error {
  background: var(--devsite-quiz-error-background);
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  padding: 6px 12px
}

devsite-quiz .devsite-quiz-submit-error i {
  color: var(--devsite-quiz-error-color);
  line-height: 30px;
  -webkit-margin-end: 8px;
  -moz-margin-end: 8px;
  margin-inline-end:8px}

devsite-quiz .devsite-quiz-submit-button {
  margin-top: 64px
}

devsite-quiz .devsite-quiz-submit-button devsite-spinner {
  display: inline-block;
  -webkit-margin-start: 15px;
  -moz-margin-start: 15px;
  margin-inline-start:15px;top: 5px
}

devsite-quiz .devsite-quiz-question-list {
  font: 400 18px/30px var(--devsite-headline-font-family);
  font-weight: 500;
  list-style-position: inside;
  -webkit-padding-start: 0;
  -moz-padding-start: 0;
  padding-inline-start:0}

devsite-quiz .devsite-quiz-question {
  margin: 0 0 64px
}

devsite-quiz .devsite-quiz-question:last-child {
  margin-bottom: 0
}

devsite-quiz .devsite-quiz-question-header {
  font: 400 18px/30px var(--devsite-headline-font-family);
  font-weight: 500;
  margin: 0
}

devsite-quiz .devsite-quiz-question-sub-header {
  color: var(--devsite-quiz-secondary-text-color);
  font-size: 12px;
  font-style: italic;
  line-height: 16px;
  margin: 0
}

devsite-quiz .devsite-quiz-answer {
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 16px 0;
  position: relative
}

devsite-quiz .devsite-quiz-answer label {
  font-family: var(--devsite-primary-font-family);
  font-weight: 400;
  line-height: 24px;
  -webkit-margin-end: 15px;
  -moz-margin-end: 15px;
  margin-inline-end:15px}

devsite-quiz .devsite-quiz-answer .devsite-landing-row-item-media {
  -webkit-margin-end: 15px;
  -moz-margin-end: 15px;
  margin-inline-end:15px;min-width: auto
}

devsite-quiz .devsite-quiz-match-question {
  border-top: var(--devsite-primary-border);
  margin: 24px 0 0
}

devsite-quiz .devsite-quiz-match-question-row {
  border-bottom: var(--devsite-primary-border);
  display: block
}

devsite-quiz .devsite-quiz-feedback,devsite-quiz .devsite-quiz-match-question-row-element {
  margin: 24px 0
}

devsite-quiz .devsite-quiz-problem-item {
  font-size: 14px;
  line-height: 20px;
  margin: 0
}

devsite-quiz .devsite-quiz-fill-in-the-blank-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 14px;
  margin: 8px 0 0
}

devsite-quiz .devsite-quiz-fill-in-the-blank-question {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: block;
  line-height: 32px;
  margin-bottom: 0
}

devsite-quiz .devsite-quiz-fill-in-the-blank-question+.devsite-quiz-feedback {
  margin-top: 8px
}

devsite-quiz .devsite-quiz-text-input {
  font-family: var(--devsite-primary-font-family);
  font-size: 14px;
  font-weight: 400;
  -webkit-margin-start: 0;
  -moz-margin-start: 0;
  margin-inline-start:0;padding: 3px 7px
}

devsite-quiz .devsite-quiz-text-input::-webkit-input-placeholder {
  font-size: 14px;
  font-style: italic;
  line-height: 20px
}

devsite-quiz .devsite-quiz-text-input::-moz-placeholder {
  font-size: 14px;
  font-style: italic;
  line-height: 20px
}

devsite-quiz .devsite-quiz-text-input:-ms-input-placeholder {
  font-size: 14px;
  font-style: italic;
  line-height: 20px
}

devsite-quiz .devsite-quiz-text-input::-ms-input-placeholder {
  font-size: 14px;
  font-style: italic;
  line-height: 20px
}

devsite-quiz .devsite-quiz-text-input::placeholder {
  font-size: 14px;
  font-style: italic;
  line-height: 20px
}

devsite-quiz .devsite-quiz-footer {
  background: transparent;
  min-height: 48px;
  -webkit-transition: background .2s cubic-bezier(.4,0,1,1);
  transition: background .2s cubic-bezier(.4,0,1,1);
  margin: 64px 0 -68px
}

devsite-quiz devsite-badge-awarded {
  max-width: 720px;
  display: block;
  margin: 0 auto
}

devsite-quiz [show] {
  background: var(--devsite-background-2);
  -webkit-transition: background .2s cubic-bezier(0,0,.2,1);
  transition: background .2s cubic-bezier(0,0,.2,1)
}

devsite-quiz [show] .devsite-quiz-footer-content {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition: opacity .2s cubic-bezier(0,0,.2,1),-webkit-transform .2s cubic-bezier(0,0,.2,1);
  transition: opacity .2s cubic-bezier(0,0,.2,1),-webkit-transform .2s cubic-bezier(0,0,.2,1);
  transition: opacity .2s cubic-bezier(0,0,.2,1),transform .2s cubic-bezier(0,0,.2,1);
  transition: opacity .2s cubic-bezier(0,0,.2,1),transform .2s cubic-bezier(0,0,.2,1),-webkit-transform .2s cubic-bezier(0,0,.2,1)
}

devsite-quiz .devsite-quiz-footer-content {
  opacity: 0;
  padding: 48px 16px;
  -webkit-transform: translateY(24px);
  transform: translateY(24px);
  -webkit-transition: opacity .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1),transform .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1),transform .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1)
}

devsite-quiz .static-badge-awarded-container {
  min-height: 68px;
  background: var(--devsite-background-2)
}

devsite-quiz .static-badge-awarded-container .devsite-badger-award-inner:first-child {
  padding-top: 30px
}

devsite-quiz .static-badge-awarded-container .devsite-badger-award-inner:last-child {
  padding-bottom: 30px
}

devsite-quiz .devsite-quiz-results-container {
  width: 100%
}

devsite-quiz .devsite-quiz-footer-header {
  font: 400 32px/40px var(--devsite-headline-font-family)
}

devsite-quiz .devsite-quiz-score {
  font-weight: 500
}

devsite-quiz .devsite-quiz-score-copy {
  font: 400 24px/32px var(--devsite-headline-font-family);
  margin-bottom: 8px
}

devsite-quiz .devsite-quiz-score-success {
  font-size: 20px;
  margin-bottom: 20px
}

devsite-quiz .devsite-quiz-score-fail .devsite-quiz-score {
  color: var(--devsite-quiz-error-color)
}

devsite-quiz .devsite-quiz-score-success .devsite-quiz-score {
  color: var(--devsite-quiz-correct-color)
}

devsite-quiz .devsite-quiz-score-subtext {
  color: var(--devsite-quiz-secondary-text-color);
  margin-top: 8px
}

devsite-quiz .devsite-quiz-action-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-quiz .devsite-quiz-rating {
  border-top: var(--devsite-primary-border);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 32px 0
}

devsite-quiz .devsite-quiz-feedback {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-primary-text-color);
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin: 0;
  opacity: 0;
  position: relative;
  -webkit-transform: translateX(-24px);
  transform: translateX(-24px);
  -webkit-transition: opacity .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1),transform .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1),transform .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1)
}

devsite-quiz .devsite-quiz-feedback-container {
  border-radius: 4px;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin: -9px 0;
  padding: 4px 12px
}

devsite-quiz .devsite-quiz-feedback-container:before {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  line-height: inherit;
  -webkit-margin-end: 8px;
  -moz-margin-end: 8px;
  margin-inline-end:8px}

devsite-quiz .correct {
  background: var(--devsite-quiz-correct-background)
}

devsite-quiz .correct:before {
  color: var(--devsite-quiz-correct-color);
  content: "check_circle_outline"
}

devsite-quiz .partially-correct {
  background: var(--devsite-quiz-partially-correct-background);
  margin: 15px 0 0
}

devsite-quiz .partially-correct:before {
  color: var(--devsite-quiz-partially-correct-color);
  content: "remove_circle_outline"
}

devsite-quiz .incorrect {
  background: var(--devsite-quiz-error-background)
}

devsite-quiz .incorrect:before {
  color: var(--devsite-quiz-error-color);
  content: "not_interested"
}

devsite-quiz .devsite-quiz-feedback-text {
  font-family: var(--devsite-headline-font-family);
  font-size: 14px;
  line-height: 20px;
  margin: 5px 0
}

devsite-quiz .devsite-quiz-feedback-title {
  font-family: var(--devsite-headline-font-family);
  font-size: 16px;
  font-weight: 500
}

devsite-quiz .devsite-quiz-feedback-message {
  font-family: var(--devsite-primary-font-family)
}

@media screen and (max-width: 600px) {
  devsite-quiz .devsite-quiz-question {
      margin-bottom:36px
  }

  devsite-quiz .devsite-quiz-match-question-row-element {
      margin: 12px 0
  }

  devsite-quiz .devsite-quiz-feedback {
      margin: 0 0 12px;
      top: 0
  }
}

@media screen and (min-width: 601px) {
  devsite-quiz .devsite-quiz-body,devsite-quiz .devsite-quiz-footer-content,devsite-quiz .devsite-quiz-header-content {
      -webkit-padding-start:24px;
      -moz-padding-start: 24px;
      padding-inline-start:24px;-webkit-padding-end: 24px;
      -moz-padding-end: 24px;
      padding-inline-end:24px}

  devsite-quiz .devsite-quiz-badge {
      display: block;
      height: 122px;
      min-width: 122px;
      opacity: 0;
      -webkit-transform: scale(1);
      transform: scale(1);
      width: 122px
  }

  devsite-quiz .devsite-quiz-badge.show {
      -webkit-animation: badgeGrowIn .33s cubic-bezier(.75,0,.71,.97),badgeGrowOut .17s cubic-bezier(.85,-.14,.83,.83) .33s,badgeFadeIn .5s linear;
      animation: badgeGrowIn .33s cubic-bezier(.75,0,.71,.97),badgeGrowOut .17s cubic-bezier(.85,-.14,.83,.83) .33s,badgeFadeIn .5s linear;
      -webkit-margin-start: 48px;
      -moz-margin-start: 48px;
      margin-inline-start:48px;opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1)
  }

  devsite-quiz .devsite-quiz-badge img {
      height: 120px;
      width: 120px
  }

  devsite-quiz .devsite-quiz-match-question {
      border: 0;
      display: table;
      max-width: 600px;
      width: 100%
  }

  devsite-quiz .devsite-quiz-match-question-row {
      border: 0;
      display: table-row
  }

  devsite-quiz .devsite-quiz-match-question-row-element,devsite-quiz .devsite-quiz-match-question-row>.devsite-quiz-feedback {
      display: table-cell;
      margin: 0;
      padding: 24px;
      position: relative;
      top: 0;
      vertical-align: middle
  }

  devsite-quiz .devsite-quiz-match-question-row-element {
      border-top: var(--devsite-primary-border)
  }

  devsite-quiz .devsite-quiz-match-question-row:last-child>.devsite-quiz-match-question-row-element {
      border-bottom: var(--devsite-primary-border)
  }

  devsite-quiz .devsite-quiz-problem {
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-padding-start: 0;
      -moz-padding-start: 0;
      padding-inline-start:0;width: 100%
  }

  devsite-quiz .devsite-quiz-answer {
      -webkit-padding-end: 0;
      -moz-padding-end: 0;
      padding-inline-end:0}

  devsite-quiz .devsite-quiz-feedback-container {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex
  }
}

@media screen and (min-width: 841px) {
  devsite-quiz .devsite-quiz-body,devsite-quiz .devsite-quiz-footer-content,devsite-quiz .devsite-quiz-header-content {
      max-width:768px
  }

  devsite-quiz .devsite-quiz-header-text {
      max-width: 488px
  }

  devsite-quiz .devsite-quiz-footer {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -moz-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center
  }

  devsite-quiz .devsite-quiz-footer-content {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      width: 100%
  }

  devsite-quiz .devsite-quiz-footer-content+.devsite-quiz-footer-content {
      margin-top: 0
  }

  devsite-quiz .devsite-quiz-footer-content:nth-last-child(2),devsite-quiz .devsite-quiz-footer-content:nth-last-child(2)+.devsite-quiz-footer-content {
      max-width: 384px
  }

  devsite-quiz .devsite-quiz-footer-content:nth-last-child(2) {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -moz-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end
  }
}

devsite-recommendations {
  border-top: var(--devsite-primary-border);
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 40px -40px -40px;
  padding: 20px 40px 40px
}

body[layout=full] devsite-recommendations {
  padding: 12px 0
}

body[layout=docs][template=landing] devsite-recommendations {
  margin: 0;
  padding: 12px 40px
}

devsite-recommendations .significatio-overview {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative
}

body[layout=full] devsite-recommendations .significatio-overview {
  margin: 0 auto
}

body[layout=full] devsite-recommendations .significatio-body,body[layout=full] devsite-recommendations .significatio-overview {
  max-width: 1488px;
  padding: 0 24px
}

devsite-recommendations .significatio-heading {
  font: var(--devsite-h2-font);
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  padding-right: 4px
}

devsite-recommendations .significatio-body {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 12px 0 0;
  width: 100%
}

body[layout=full] devsite-recommendations .significatio-body {
  margin: 16px auto 0
}

devsite-recommendations .significatio-heading-icon {
  fill: currentColor;
  margin-inline:0 4px;width: 24px
}

devsite-recommendations .significatio-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row
}

devsite-recommendations .significatio-buttons button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 20px;
  height: 40px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0;
  -webkit-transition: background .2s;
  transition: background .2s;
  width: 40px
}

devsite-recommendations .significatio-buttons button:focus,devsite-recommendations .significatio-buttons button:hover {
  background-color: #aecbfa
}

devsite-recommendations .significatio-buttons .material-icons {
  top: auto
}

devsite-recommendations .significatio-buttons .material-icons:not(:link) {
  pointer-events: none
}

devsite-recommendations .significatio-loading {
  display: none
}

devsite-recommendations[loading] .significatio-loading {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1
}

devsite-recommendations .significatio-loading devsite-spinner {
  margin: 0 auto
}

devsite-recommendations .significatio-recommendations {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 0 24px
}

devsite-recommendations:not([loading]) .significatio-recommendations {
  width: 100%
}

devsite-recommendations .significatio-card {
  background: var(--devsite-card-background);
  border: var(--devsite-card-border);
  border-radius: var(--devsite-card-border-radius);
  box-shadow: var(--devsite-card-box-shadow);
  color: var(--devsite-primary-text-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1;
  -moz-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: calc(33.3333333333% - 16px);
  min-width: 0;
  opacity: 0;
  padding: 18px 20px 20px;
  -webkit-transition: opacity .2s cubic-bezier(.4,0,1,1);
  transition: opacity .2s cubic-bezier(.4,0,1,1)
}

devsite-recommendations .significatio-card:hover {
  box-shadow: var(--devsite-card-box-shadow-hover,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color))
}

devsite-recommendations .significatio-card.error {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-recommendations .significatio-card[show] {
  opacity: 1
}

devsite-recommendations .significatio-card-heading {
  font: 500 16px/24px var(--devsite-primary-font-family);
  margin: 0 0 8px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--devsite-link-color)
}

devsite-recommendations .significatio-card-description {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  font-size: 14px;
  -webkit-line-clamp: 2;
  margin: 0 0 20px;
  max-height: 48px;
  overflow: hidden
}

devsite-recommendations .significatio-card.error .significatio-card-description {
  color: #80868b;
  font: 400 12px/16px var(--devsite-primary-font-family);
  letter-spacing: 0;
  -webkit-line-clamp: 3;
  margin: 12px 0;
  text-align: center
}

devsite-recommendations .significatio-card.error .significatio-card-description+.significatio-card-description {
  margin-top: 0
}

devsite-recommendations .significatio-card-meta {
  font: 400 14px/16px var(--devsite-primary-font-family);
  color: var(--devsite-secondary-text-color);
  margin: auto 0 0
}

devsite-recommendations .info-container,devsite-recommendations .significatio-popout-container,devsite-recommendations .significatio-recommend-popout-container {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  position: relative
}

devsite-recommendations .info-button,devsite-recommendations .significatio-popout-toggle {
  color: #5f6368
}

devsite-recommendations .significatio-attr-toggle {
  height: 16px;
  color: #80868b;
  padding: 0 5px;
  min-width: 0;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: visible
}

devsite-recommendations .significatio-attr-toggle .significatio-attr-info {
  height: 16px;
  width: 16px;
  fill: #80868b;
  position: relative;
  top: -2px;
  margin: 0
}

devsite-recommendations .significatio-attr h4 {
  font: 500 14px/16px var(--devsite-primary-font-family);
  color: #3c4043;
  line-height: 20px
}

devsite-recommendations .significatio-attr p {
  font: 400 14px/16px var(--devsite-primary-font-family);
  color: #3c4043;
  line-height: 20px
}

devsite-recommendations .significatio-info-container {
  border-radius: 50%;
  height: 36px;
  -webkit-transition: opacity .2s,-webkit-transform .2s;
  transition: opacity .2s,-webkit-transform .2s;
  transition: opacity .2s,transform .2s;
  transition: opacity .2s,transform .2s,-webkit-transform .2s
}

devsite-recommendations .significatio-info-container:hover {
  background-color: var(--devsite-background-4)
}

devsite-recommendations .significatio-error-icon,devsite-recommendations .significatio-icon-info {
  fill: currentColor;
  vertical-align: text-bottom;
  width: 18px;
  height: 36px
}

devsite-recommendations .significatio-popout {
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color);
  background: var(--devsite-background-1);
  max-width: 400px;
  opacity: 0;
  padding: 20px 24px;
  position: absolute;
  top: calc(100% + 8px);
  -webkit-transform: translateY(-12px);
  transform: translateY(-12px);
  -webkit-transition: opacity .2s,-webkit-transform .2s;
  transition: opacity .2s,-webkit-transform .2s;
  transition: opacity .2s,transform .2s;
  transition: opacity .2s,transform .2s,-webkit-transform .2s
}

[dir=ltr] devsite-recommendations .significatio-popout {
  left: -12px
}

[dir=rtl] devsite-recommendations .significatio-popout {
  right: -12px
}

devsite-recommendations .significatio-popout.significatio-attr {
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color);
  border-radius: 4px;
  padding: 16px 17px;
  width: 150px
}

[dir=ltr] devsite-recommendations .significatio-popout.significatio-attr {
  left: calc(-75px + 50%)
}

[dir=rtl] devsite-recommendations .significatio-popout.significatio-attr {
  right: calc(-75px + 50%)
}

devsite-recommendations .significatio-popout.significatio-attr h4 {
  margin-bottom: 8px
}

devsite-recommendations .significatio-popout.significatio-attr p {
  margin-bottom: 0
}

devsite-recommendations .significatio-popout-heading {
  margin-top: 0
}

[dir=ltr] body[layout=full] devsite-recommendations .significatio-popout {
  right: 32px
}

[dir=rtl] body[layout=full] devsite-recommendations .significatio-popout {
  left: 32px
}

devsite-recommendations .significatio-popout[active] {
  opacity: 1;
  -webkit-transform: translateY(0);
  transform: translateY(0)
}

devsite-recommendations .significatio-popout p {
  margin-top: 0
}

devsite-recommendations .significatio-interaction-container {
  height: 36px
}

devsite-recommendations .significatio-internal-only {
  line-height: 12px;
  size: 12px;
  margin: 14px 0;
  color: #a50e0e
}

@media screen and (max-width: 1253px) {
  body[layout] devsite-recommendations .significatio-recommendations {
      display:block
  }

  body[layout] devsite-recommendations .significatio-card {
      max-width: none
  }

  [dir] body[layout] devsite-recommendations .significatio-card:not(:first-child) {
      margin: 24px 0 0
  }
}

@media screen and (max-width: 840px) {
  body[layout][template] devsite-recommendations {
      margin:24px -24px -24px;
      padding: 24px
  }

  body[layout=full] devsite-recommendations .significatio-body,body[layout=full] devsite-recommendations .significatio-overview {
      padding: 0
  }

  [dir=ltr] body[layout=full] devsite-recommendations .significatio-popout {
      right: -8px
  }

  [dir=rtl] body[layout=full] devsite-recommendations .significatio-popout {
      left: -8px
  }
}

@media screen and (max-width: 600px) {
  body[layout][template] devsite-recommendations {
      margin:32px -16px -16px;
      padding: 16px
  }

  [dir] body[layout] devsite-recommendations .significatio-card:not(:first-child) {
      margin: 16px 0 0
  }
}

devsite-recommendations-dropdown {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1
}

.devsite-recommendations-dropdown-toggle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

.devsite-recommendations-dropdown-icon {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  pointer-events: none;
  top: 0
}

[dir=ltr] .devsite-recommendations-dropdown-icon {
  right: 8px
}

[dir=rtl] .devsite-recommendations-dropdown-icon {
  left: 8px
}

.devsite-recommendations-dropdown-icon:before {
  font-size: 18px;
  content: "keyboard_arrow_down"
}

.devsite-recommendations-dropdown-toggle.active>.devsite-recommendations-dropdown-icon:before {
  content: "keyboard_arrow_up"
}

.devsite-recommendations-dropdown-list {
  background: var(--devsite-background-1);
  border: var(--devsite-list-border,var(--devsite-secondary-border));
  border-radius: var(--devsite-list-border-radius,2px);
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);
  display: none;
  font: 400 14px/20px var(--devsite-primary-font-family);
  opacity: 0;
  outline: 0;
  overflow-y: auto;
  pointer-events: none;
  position: absolute;
  -webkit-transition: opacity .2s,visibility .2s;
  transition: opacity .2s,visibility .2s;
  z-index: 1005;
  list-style-type: none;
  padding: 0 14px
}

.devsite-recommendations-dropdown-list.active {
  display: block;
  opacity: 1;
  pointer-events: auto
}

devsite-recommendations-dropdown .devsite-select-item {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0;
  min-height: 48px;
  min-width: 100%;
  white-space: nowrap;
  border-bottom: 1px solid #dadce0;
  padding: 14px 0
}

devsite-recommendations-dropdown .devsite-select-item:hover {
  background-color: var(--devsite-background-3);
  cursor: pointer
}

devsite-recommendations-dropdown .devsite-select-item>.significatio-card-heading {
  margin: 0
}

devsite-recommendations-sidebar {
  display: var(--devsite-js-recommendations-sidebar-display,block);
  position: relative
}

devsite-recommendations-sidebar .devsite-recommendations-sidebar-heading {
  font-weight: 700;
  margin-bottom: 8px;
  -webkit-margin-start: -8px;
  -moz-margin-start: -8px;
  margin-inline-start:-8px}

devsite-recommendations-sidebar .devsite-recommendations-sidebar-heading-link {
  color: var(--devsite-recommendations-accent);
  padding: 0
}

devsite-recommendations-sidebar .devsite-nav-text,devsite-recommendations-sidebar .devsite-recommendations-sidebar-icon {
  pointer-events: none
}

devsite-recommendations-sidebar .devsite-recommendations-sidebar-icon {
  fill: var(--devsite-recommendations-accent);
  height: 24px;
  -webkit-margin-end: 8px;
  -moz-margin-end: 8px;
  margin-inline-end:8px;width: 24px
}

devsite-recommendations-sidebar .devsite-nav-active .devsite-recommendations-sidebar-icon,devsite-recommendations-sidebar .devsite-recommendations-sidebar-heading-link:focus .devsite-recommendations-sidebar-icon,devsite-recommendations-sidebar .devsite-recommendations-sidebar-heading-link:hover .devsite-recommendations-sidebar-icon {
  fill: var(--devsite-nav-color-hover,var(--devsite-link-color))
}

devsite-recommendations-sidebar>.devsite-nav-list {
  -webkit-border-start: var(--devsite-toc-border-width,4px) solid var(--devsite-recommendations-accent);
  -moz-border-start: var(--devsite-toc-border-width,4px) solid var(--devsite-recommendations-accent);
  border-inline-start:var(--devsite-toc-border-width,4px) solid var(--devsite-recommendations-accent);-webkit-padding-start: var(--devsite-nav-list-padding-x-start,12px);
  -moz-padding-start: var(--devsite-nav-list-padding-x-start,12px);
  padding-inline-start:var(--devsite-nav-list-padding-x-start,12px)}

devsite-recommendations-sidebar .devsite-nav-item {
  padding: var(--devsite-nav-title-padding,4px 0)
}

devsite-recommendations-sidebar .devsite-nav-item:first-of-type,devsite-recommendations-sidebar .devsite-nav-title:first-of-type {
  padding-top: 0
}

devsite-recommendations-sidebar .devsite-nav-title {
  padding-bottom: 0;
  text-decoration: none
}

devsite-recommendations-sidebar .significatio-card-meta {
  color: var(--devsite-secondary-text-color);
  font-size: 11px;
  line-height: 14px;
  margin: 4px 0 0
}

@-webkit-keyframes fadeIn {
  0% {
      opacity: 0
  }

  to {
      opacity: 1
  }
}

@keyframes fadeIn {
  0% {
      opacity: 0
  }

  to {
      opacity: 1
  }
}

devsite-recommended-content:not(:defined) {
  min-height: 354px
}

@keyframes pulse {
  0%,to {
      opacity: 1
  }

  50% {
      opacity: .5
  }
}

devsite-recommended-content .skeleton-filters,devsite-recommended-content .skeleton-list {
  -webkit-animation: fadeIn .5s;
  animation: fadeIn .5s;
  list-style: none;
  padding: 0
}

devsite-recommended-content .skeleton-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: var(--devsite-landing-row-item-gap,24px);
  -webkit-flex-wrap: var(--devsite-recommended-content-filters-flex-wrap);
  -ms-flex-wrap: var(--devsite-recommended-content-filters-flex-wrap);
  flex-wrap: var(--devsite-recommended-content-filters-flex-wrap);
  padding-bottom: 38px
}

devsite-recommended-content .skeleton-filters {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-flex-wrap: var(--devsite-recommended-content-filters-flex-wrap);
  -ms-flex-wrap: var(--devsite-recommended-content-filters-flex-wrap);
  flex-wrap: var(--devsite-recommended-content-filters-flex-wrap);
  overflow: hidden;
  padding-bottom: 2px
}

devsite-recommended-content .skeleton-header {
  grid-area: header
}

devsite-recommended-content .skeleton-item {
  align-self: start;
  background: var(--tenant-background-1);
  border: var(--tenant-primary-border);
  border-radius: 8px;
  display: grid;
  grid: var(--skeleton-item-grid);
  margin: 0;
  padding: 16px
}

devsite-recommended-content .skeleton-filters .skeleton-item {
  gap: 8px 0;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0
}

devsite-recommended-content .skeleton-list .skeleton-item {
  gap: 8px 0;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

devsite-recommended-content .skeleton-filters,devsite-recommended-content .skeleton-filters-header,devsite-recommended-content .skeleton-item-heading,devsite-recommended-content .skeleton-item-icon,devsite-recommended-content .skeleton-item-meta,devsite-recommended-content .skeleton-item-text {
  -webkit-animation: pulse 2s infinite;
  animation: pulse 2s infinite
}

devsite-recommended-content .skeleton-filters-header>div,devsite-recommended-content .skeleton-item-heading>div,devsite-recommended-content .skeleton-item-icon,devsite-recommended-content .skeleton-item-meta,devsite-recommended-content .skeleton-item-text>div {
  background: var(--tenant-background-3);
  border-radius: 4px
}

devsite-recommended-content .skeleton-filters-header {
  height: 40px;
  padding-top: 6px
}

devsite-recommended-content .skeleton-filters-header>div {
  border: var(--tenant-primary-border);
  background: var(--tenant-background-1);
  width: 20%;
  height: 24px
}

devsite-recommended-content .skeleton-item-heading>div {
  height: 26px
}

devsite-recommended-content .skeleton-item-heading>div:first-child {
  margin-block:4px 0;width: 95%
}

devsite-recommended-content .skeleton-item-heading>div:nth-child(2) {
  margin-block:8px 0;width: 55%
}

devsite-recommended-content .skeleton-item-meta,devsite-recommended-content .skeleton-item-text {
  margin-block:4px 0}

devsite-recommended-content .skeleton-item-meta {
  height: 14px;
  width: 45%
}

devsite-recommended-content .skeleton-item-text>div {
  height: 14px
}

devsite-recommended-content .skeleton-item-text>div:first-child {
  width: 100%
}

devsite-recommended-content .skeleton-item-text>div:nth-child(2) {
  margin-block:8px 0;width: 70%
}

devsite-recommended-content .skeleton-item-text>div:nth-child(3) {
  margin-block:8px 0;width: 60%
}

devsite-recommended-content .skeleton-item-icon {
  height: 32px;
  width: 32px
}

@media (max-width: 1128px) {
  devsite-recommended-content:not(:defined) {
      min-height:496px
  }

  devsite-recommended-content .skeleton-filters-header {
      height: 114px
  }

  devsite-recommended-content .skeleton-filters {
      padding-bottom: 6px
  }

  devsite-recommended-content .skeleton-list .skeleton-item:nth-child(4) {
      display: none
  }
}

@media (max-width: 820px) {
  devsite-recommended-content .skeleton-list .skeleton-item:nth-child(3) {
      display:none
  }
}

@media (max-width: 600px) {
  devsite-recommended-content:not(:defined) {
      min-height:334px
  }

  devsite-recommended-content .skeleton-list .skeleton-item:nth-child(2) {
      display: none
  }

  devsite-recommended-content .skeleton-list {
      padding-bottom: 18px
  }

  devsite-recommended-content .skeleton-list .skeleton-item {
      max-width: 85%
  }

  devsite-recommended-content .skeleton-filters {
      padding-bottom: 2px
  }

  devsite-recommended-content .skeleton-filters-header {
      height: 40px
  }
}

devsite-recommended-content .devsite-recommended-content-filters-spacer {
  min-height: 100px
}

devsite-recommended-content .devsite-recommended-content-profile-cta {
  min-height: 46px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 16px;
  -webkit-animation: fadeIn .5s;
  animation: fadeIn .5s;
  --devsite-background-button-background: transparent;
  --devsite-background-button-background-hover: transparent;
  --devsite-background-button-border-color-hover: var( --devsite-background-button-border-color )
}

devsite-recommended-content .devsite-recommended-content-profile-cta .devsite-recommended-content-profile-cta-badge {
  height: 46px;
  width: 190px;
  border-bottom: 1px solid #dadce0
}

devsite-recommended-content .devsite-recommended-content-profile-cta .button {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0
}

devsite-recommended-content .devsite-recommended-content-profile-cta .text {
  color: #1a73e8;
  line-height: 1
}

@media (max-width: 820px) {
  devsite-recommended-content .devsite-recommended-content-profile-cta .devsite-recommended-content-profile-cta-badge {
      display:none
  }
}

@media (max-width: 600px) {
  devsite-recommended-content .devsite-recommended-content-profile-cta {
      -webkit-box-orient:vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      padding-top: 18px;
      text-align: center
  }

  devsite-recommended-content .devsite-recommended-content-profile-cta .text {
      line-height: 20px
  }
}

devsite-recommended-content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 16px 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-recommended-content .devsite-recommended-content-header {
  -webkit-animation: fadeIn .5s;
  animation: fadeIn .5s;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between
}

@media (max-width: 600px) {
  devsite-recommended-content .devsite-recommended-content-header {
      -webkit-box-orient:vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -moz-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start
  }
}

devsite-recommended-content .devsite-recommended-content-heading {
  -webkit-animation: fadeIn .5s;
  animation: fadeIn .5s;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  line-height: 24px
}

devsite-recommended-content .devsite-recommended-content-heading-message,devsite-recommended-content .devsite-recommended-content-item-updated {
  color: var(--devsite-secondary-text-color);
  font-size: 14px
}

devsite-recommended-content .devsite-recommended-content-heading-label {
  font-size: 16px;
  line-height: 36px
}

devsite-recommended-content devsite-rich-tooltip {
  font: 14px/20px var(--devsite-primary-font-family)
}

devsite-recommended-content .devsite-recommended-content-heading-message {
  font-style: italic
}

devsite-recommended-content .devsite-recommended-content-toggle {
  display: var(--devsite-recommended-content-toggle-display)
}

devsite-recommended-content .devsite-recommended-content-filters-wrapper {
  position: relative
}

devsite-recommended-content devsite-feature-tooltip {
  top: 24px
}

devsite-recommended-content .devsite-recommended-content-filters {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-flex-wrap: var(--devsite-recommended-content-filters-flex-wrap);
  -ms-flex-wrap: var(--devsite-recommended-content-filters-flex-wrap);
  flex-wrap: var(--devsite-recommended-content-filters-flex-wrap);
  grid-area: filters;
  margin-block:var(--devsite-recommended-content-filters-margin-block,-8px);margin-inline: var(--devsite-recommended-content-filters-margin-inline,0);
  overflow: var(--devsite-recommended-content-filters-overflow);
  padding-block:var(--devsite-recommended-content-filters-padding-block,8px);padding-inline: var(--devsite-recommended-content-filters-padding-inline,0);
  -webkit-transition: opacity .5s;
  transition: opacity .5s;
  width: var(--devsite-recommended-content-filters-width,100%)
}

devsite-recommended-content .devsite-recommended-content-filters::-webkit-scrollbar {
  background: 0;
  height: 0;
  width: 0
}

devsite-recommended-content .devsite-recommended-content-filters-item input[type=checkbox] {
  display: inline
}

devsite-recommended-content .devsite-recommended-content-filters-item input[type=checkbox]:after,devsite-recommended-content .devsite-recommended-content-filters-item input[type=checkbox]:before {
  display: none
}

devsite-recommended-content .devsite-recommended-content-filters-item label {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-background-1);
  border: var(--devsite-primary-border);
  border-radius: 8px;
  color: var(--devsite-primary-text-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: var(--devsite-button-font,500 14px/36px var(--devsite-primary-font-family));
  height: 32px;
  padding: 0 16px;
  -webkit-transition: background .2s,border .2s,box-shadow .2s,color .2s;
  transition: background .2s,border .2s,box-shadow .2s,color .2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap
}

devsite-recommended-content .devsite-recommended-content-filters-item label:hover {
  background: var(--devsite-background-2)
}

devsite-recommended-content .devsite-recommended-content-filters-item input:disabled+label:hover {
  background: var(--devsite-background-1)
}

devsite-recommended-content .devsite-recommended-content-filters-item input[type=checkbox]:focus+label {
  background: var(--devsite-background-3);
  border-color: var(--devsite-primary-text-color)
}

devsite-recommended-content .devsite-recommended-content-filters-item input[type=checkbox]:checked+label {
  background: var(--devsite-link-background-hover);
  border-color: transparent;
  color: var(--devsite-link-color)
}

[background=grey] devsite-recommended-content .devsite-recommended-content-filters-item input[type=checkbox]:checked+label {
  border-color: var(--devsite-link-color)
}

devsite-recommended-content .devsite-recommended-content-filters-item input[type=checkbox]:checked+label:hover {
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color)
}

devsite-recommended-content .devsite-recommended-content-filters-item input[type=checkbox]:checked:disabled+label:hover {
  box-shadow: revert
}

devsite-recommended-content .devsite-recommended-content-filters-item input[type=checkbox]:checked:focus+label {
  color: var(--devsite-contrast-link-color)
}

.devsite-recommended-content-filters-item input[type=checkbox]:disabled {
  pointer-events: none
}

devsite-recommended-content .devsite-recommended-content-list-header {
  grid-area: list-header
}

devsite-recommended-content .devsite-recommended-content-list {
  -webkit-animation: fadeIn .5s;
  animation: fadeIn .5s;
  display: grid;
  gap: var(--devsite-landing-row-item-gap,24px);
  grid: auto-flow/repeat(var(--devsite-columns,4),1fr);
  grid-area: content
}

devsite-recommended-content devsite-carousel .devsite-recommended-content-list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-recommended-content .devsite-recommended-content-item {
  background: var(--devsite-card-background);
  border: var(--devsite-card-border);
  border-radius: var(--devsite-card-border-radius);
  box-shadow: var(--devsite-card-box-shadow);
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
  padding: 16px
}

devsite-recommended-content .devsite-recommended-content-item:nth-child(n+5) {
  display: var(--devsite-recommended-content-item-show-all-display)
}

devsite-recommended-content .devsite-recommended-content-item-doc-type {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 0;
  text-transform: uppercase
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-icon:before {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  color: #5f6368;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 16px;
  margin-right: 4px
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-article:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-blog:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-case_study:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-concept:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-course:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-guide:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-marketing:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-pathway:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-quickstart:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-release_notes:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-support:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-topic:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-troubleshooting:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-tutorial:before {
  content: "article"
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-best_practices:before {
  content: "check_circle"
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-api_reference:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-reference:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-sample:before {
  content: "code"
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-playlist:before {
  content: "format_list_numbered"
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-pricing:before {
  content: "monetization_on"
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-podcast:before {
  content: "podcasts"
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-quiz:before {
  content: "quiz"
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-codelab:before {
  content: "science"
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-media:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-video:before {
  content: "smart_display"
}

devsite-recommended-content .devsite-recommended-content-item-doc-type-content_navigator:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-landing:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-landing_page:before,devsite-recommended-content .devsite-recommended-content-item-doc-type-product:before {
  content: "web"
}

devsite-recommended-content .devsite-recommended-content-item-heading {
  -webkit-box-orient: vertical;
  color: var(--devsite-link-color);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-height: 28px;
  min-height: 56px;
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -moz-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  overflow: hidden
}

devsite-recommended-content[truncate] .devsite-recommended-content-item-heading {
  display: initial;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap
}

devsite-recommended-content .devsite-recommended-content-item-description,devsite-recommended-content .devsite-recommended-content-item-updated {
  margin: 0
}

devsite-recommended-content .devsite-recommended-content-item-description {
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-height: 24px;
  min-height: 72px;
  -webkit-box-ordinal-group: 4;
  -webkit-order: 3;
  -moz-box-ordinal-group: 4;
  -ms-flex-order: 3;
  order: 3;
  overflow: hidden;
  word-break: break-word
}

devsite-recommended-content .devsite-recommended-content-item-updated {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -moz-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2
}

devsite-recommended-content .devsite-recommended-content-item-products {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-ordinal-group: 5;
  -webkit-order: 4;
  -moz-box-ordinal-group: 5;
  -ms-flex-order: 4;
  order: 4
}

devsite-recommended-content .devsite-recommended-content-item-icon {
  display: grid;
  margin-block:auto 0;-webkit-margin-end: 8px;
  -moz-margin-end: 8px;
  margin-inline-end:8px;place-content: center;
  width: 32px
}

devsite-recommended-content .devsite-recommended-content-item-icon img,devsite-recommended-content .devsite-recommended-content-item-icon picture {
  height: 32px
}

devsite-recommended-content .devsite-recommended-content-item-icon .material-icons {
  color: var(--devsite-foreground-color,var(--devsite-secondary-text-color));
  font-size: 32px
}

devsite-recommended-content .devsite-recommended-content-item-product-tag {
  background: var(--devsite-background-3);
  color: var(--devsite-display-tag-color,var(--devsite-secondary-text-color));
  display: inline-block;
  font: var(--devsite-display-tag-font,500 14px/20px var(--devsite-primary-font-family));
  -webkit-margin-end: 8px;
  -moz-margin-end: 8px;
  margin-inline-end:8px;padding: 2px 4px
}

devsite-recommended-content devsite-rich-tooltip {
  --devsite-rich-tooltip-button-size: 24px;
  --devsite-rich-tooltip-button-hover-background: 0;
  --devsite-rich-tooltip-padding-block: 8px;
  --devsite-rich-tooltip-padding-inline: 16px;
  --devsite-rich-tooltip-width: auto;
  --devsite-rich-tooltip-min-width: 200px;
  height: var(--devsite-rich-tooltip-button-size);
  width: var(--devsite-rich-tooltip-button-size)
}

devsite-recommended-content devsite-rich-tooltip:defined {
  background: var(--devsite-background-3);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-recommended-content devsite-rich-tooltip button[label-type=icon]:is(:hover,:focus) {
  background: 0
}

devsite-recommended-content .devsite-recommended-content-cta {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  letter-spacing: .25px;
  --devsite-button-border: 0;
  --devsite-button-border-hover: 0;
  --devsite-button-disabled-border: 0;
  --devsite-background-button-background: transparent;
  --devsite-button-border-active: 0;
  --devsite-button-box-shadow-active: 0
}

devsite-recommended-content .devsite-recommended-content-cta .material-icons {
  top: auto;
  font-size: 20px
}

devsite-recommended-content .devsite-recommended-content-cta devsite-spinner {
  margin-right: 7px
}

devsite-recommended-content .ctable {
  display: none
}

devsite-recommended-content .devsite-table-wrapper {
  display: none
}

devsite-reference-results {
  background: var(--devsite-background-1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color);
  max-height: 305px;
  padding: 20px 10px 20px 28px;
  margin: 16px 0
}

devsite-reference-results:empty {
  display: none
}

devsite-reference-results .devsite-reference-results {
  height: auto;
  width: 100%
}

devsite-reference-results .devsite-reference-results h3 {
  margin-top: 0
}

devsite-reference-results .devsite-reference-results-list {
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  padding-left: 0
}

devsite-reference-results .devsite-reference-results-list-item {
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  margin: 0 0 0 -8px;
  outline: 0;
  overflow: hidden;
  padding: 10px 8px;
  text-decoration: none;
  text-overflow: ellipsis;
  -webkit-transition: background .2s;
  transition: background .2s;
  white-space: nowrap
}

devsite-reference-results .devsite-reference-results-list-item:focus,devsite-reference-results .devsite-reference-results-list-item:hover {
  background: var(--devsite-background-3)
}

devsite-reference-results .devsite-reference-results-list-link {
  color: var(--devsite-primary-text-color);
  font: 13px/20px var(--devsite-primary-font-family)
}

@media screen and (max-width: 600px) {
  devsite-reference-results {
      overflow-y:scroll
  }

  devsite-reference-results .devsite-reference-results-list {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      padding-bottom: 20px
  }

  devsite-reference-results .devsite-reference-results {
      width: auto
  }
}

devsite-related-entities {
  --devsite-chips-gap: 8px;
  --devsite-button-background-active: var(--devsite-background-2);
  --devsite-button-background-hover: rgba(var(--devsite-primary-text-color),0.1);
  --devsite-button-border-hover: var(--devsite-button-border,0);
  --devsite-button-color: var(--devsite-primary-text-color)
}

devsite-rich-tooltip {
  display: none;
  position: relative;
  z-index: 2
}

devsite-rich-tooltip:defined {
  background: 0;
  display: revert
}

devsite-rich-tooltip>[slot] {
  margin: 0!important;
  padding: 0!important
}

devsite-rich-tooltip ul {
  list-style: none
}

devsite-rich-tooltip li {
  margin-block:2px}

devsite-search {
  border-radius: var(--devsite-search-border-radius);
  display: inline-block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  height: var(--devsite-search-height);
  margin: 6px 0 6px 24px;
  overflow: hidden;
  position: relative;
  text-align: left;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  vertical-align: top;
  width: 200px;
  will-change: transition;
  z-index: 10
}

[dir=rtl] devsite-search {
  margin: 6px 24px 6px 0;
  text-align: right
}

body[pending] devsite-search {
  visibility: hidden!important
}

devsite-search .devsite-search-image {
  color: var(--devsite-search-image-color,var(--devsite-secondary-text-color));
  position: absolute;
  top: var(--devsite-search-image-top);
  -webkit-transition: color .2s;
  transition: color .2s
}

[dir=ltr] devsite-search .devsite-search-image {
  left: var(--devsite-search-image-x)
}

[dir=rtl] devsite-search .devsite-search-image {
  right: var(--devsite-search-image-x)
}

devsite-search .devsite-search-image:before {
  content: "search"
}

devsite-search .devsite-search-container {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-search .devsite-suggest-results-container {
  border-top: var(--devsite-primary-border)
}

devsite-search input.devsite-search-field {
  background: none;
  border: var(--devsite-search-field-border);
  border-radius: var(--devsite-search-field-border-radius);
  color: var(--devsite-secondary-text-color);
  height: var(--devsite-search-field-height);
  outline: 0;
  padding: 8px;
  -webkit-padding-start: var(--devsite-search-field-padding-x-start);
  -moz-padding-start: var(--devsite-search-field-padding-x-start);
  padding-inline-start:var(--devsite-search-field-padding-x-start);-webkit-transition: background .2s,color .2s;
  transition: background .2s,color .2s;
  width: 100%
}

devsite-search input.devsite-search-field::-webkit-input-placeholder {
  color: var(--devsite-search-field-placeholder-color,var(--devsite-secondary-text-color));
  font: var(--devsite-search-field-placeholder-font);
  -webkit-transition: color .2s;
  transition: color .2s
}

devsite-search input.devsite-search-field::-moz-placeholder {
  color: var(--devsite-search-field-placeholder-color,var(--devsite-secondary-text-color));
  font: var(--devsite-search-field-placeholder-font);
  -moz-transition: color .2s;
  transition: color .2s
}

devsite-search input.devsite-search-field:-ms-input-placeholder {
  color: var(--devsite-search-field-placeholder-color,var(--devsite-secondary-text-color));
  font: var(--devsite-search-field-placeholder-font);
  -ms-transition: color .2s;
  transition: color .2s
}

devsite-search input.devsite-search-field::-ms-input-placeholder {
  color: var(--devsite-search-field-placeholder-color,var(--devsite-secondary-text-color));
  font: var(--devsite-search-field-placeholder-font);
  -ms-transition: color .2s;
  transition: color .2s
}

devsite-search input.devsite-search-field::placeholder {
  color: var(--devsite-search-field-placeholder-color,var(--devsite-secondary-text-color));
  font: var(--devsite-search-field-placeholder-font);
  -webkit-transition: color .2s;
  transition: color .2s
}

devsite-search input.devsite-search-field:focus {
  border: var(--devsite-search-field-border);
  padding-bottom: 8px
}

devsite-search .devsite-searchbox {
  width: 100%
}

devsite-search .devsite-searchbox:before {
  background: var(--devsite-background-1);
  content: "";
  display: var(--devsite-searchbox-before-display,block);
  height: 500px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: -458px;
  -webkit-transition: opacity 1ms .2s;
  transition: opacity 1ms .2s;
  width: calc(100% + 12px);
  will-change: opacity;
  z-index: -1
}

[dir=ltr] devsite-search .devsite-searchbox:before {
  left: -6px
}

[dir=rtl] devsite-search .devsite-searchbox:before {
  right: -6px
}

devsite-search[search-active] {
  overflow: visible
}

devsite-search[search-active] .devsite-searchbox:before {
  opacity: 1
}

devsite-search[search-active] .devsite-searchbox:hover {
  background: var(--devsite-searchbox-background-active,var(--devsite-background-3))
}

.devsite-header-billboard-search devsite-search[search-active] .devsite-search-form,body[template="404"] devsite-search[search-active] .devsite-search-form,devsite-header[search-expanded] .devsite-search-form {
  border-radius: var(--devsite-search-border-radius,0);
  box-shadow: var(--devsite-search-active-box-shadow,none);
  overflow: var(--devsite-search-active-overflow,visible)
}

.devsite-header-billboard-search devsite-search[search-active] .devsite-popout,body[template="404"] devsite-search[search-active] .devsite-popout,devsite-header[search-expanded] devsite-search .devsite-popout {
  display: var(--devsite-popout-active-display,block)
}

.devsite-header-billboard-search devsite-search[search-active] .devsite-search-field,.devsite-header-billboard-search devsite-search[search-active] .devsite-search-field:hover,body[template="404"] devsite-search[search-active] .devsite-search-field,body[template="404"] devsite-search[search-active] .devsite-search-field:hover,devsite-header[search-expanded] devsite-search[search-active] .devsite-search-field,devsite-header[search-expanded] devsite-search[search-active] .devsite-search-field:hover {
  background: var(--devsite-search-form-background-active);
  color: var(--devsite-search-form-text-active,var(--devsite-primary-text-color))
}

devsite-search[search-active] .devsite-search-field {
  color: var(--devsite-primary-text-color)
}

devsite-search[search-active] .devsite-search-field::-webkit-input-placeholder {
  color: var(--devsite-secondary-text-color)
}

devsite-search[search-active] .devsite-search-field::-moz-placeholder {
  color: var(--devsite-secondary-text-color)
}

devsite-search[search-active] .devsite-search-field:-ms-input-placeholder {
  color: var(--devsite-secondary-text-color)
}

devsite-search[search-active] .devsite-search-field::-ms-input-placeholder {
  color: var(--devsite-secondary-text-color)
}

devsite-search[search-active] .devsite-search-field::placeholder {
  color: var(--devsite-secondary-text-color)
}

devsite-search[search-active] .devsite-search-image {
  color: var(--devsite-search-active-image-color,var(--devsite-secondary-text-color))
}

devsite-search .devsite-popout,devsite-search[search-active] .devsite-popout {
  display: var(--devsite-popout-display,block)
}

devsite-search .devsite-popout {
  margin-top: var(--devsite-popout-margin-top,6px);
  position: var(--devsite-popout-position,absolute);
  -webkit-transform: var(--devsite-popout-transform,translateY(-100vh));
  transform: var(--devsite-popout-transform,translateY(-100vh));
  -webkit-transition: var(--devsite-popout-transition,transform .2s);
  transition: var(--devsite-popout-transition,transform .2s);
  visibility: hidden;
  width: 100%;
  z-index: var(--devsite-popout-z-index,-2)
}

devsite-search[search-active] .devsite-popout {
  -webkit-transform: translateY(0);
  transform: translateY(0);
  -webkit-transition-delay: .2s;
  transition-delay: .2s;
  visibility: visible;
  will-change: transform
}

devsite-search .devsite-popout-result {
  background: var(--devsite-background-1);
  box-shadow: var(--devsite-popout-box-shadow,0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color));
  max-height: calc(100vh - 56px);
  overflow-y: auto
}

devsite-search .devsite-popout-result:empty,devsite-search[search-active][no-suggest] .devsite-popout {
  display: none
}

devsite-search .devsite-suggest-wrapper {
  padding: 16px 0 0;
  font-size: 14px
}

devsite-search .devsite-result-item,devsite-search .devsite-result-label {
  font: 13px/20px var(--devsite-primary-font-family);
  margin: 0
}

devsite-search .devsite-result-label {
  padding-left: 40px
}

[dir=rtl] devsite-search .devsite-result-label {
  padding-left: 0;
  padding-right: 40px
}

devsite-search .devsite-result-item a {
  color: var(--devsite-primary-text-color);
  display: block;
  outline: 0;
  padding: 8px;
  text-decoration: none;
  -webkit-transition: background .2s;
  transition: background .2s;
  will-change: transition
}

[dir=ltr] devsite-search .devsite-result-item a {
  padding-left: 40px
}

[dir=rtl] devsite-search .devsite-result-item a {
  padding-right: 40px
}

devsite-search .devsite-result-item a:focus,devsite-search .devsite-result-item a:hover,devsite-search .devsite-result-item.highlight a {
  background: var(--devsite-background-3)
}

devsite-search .devsite-result-item b {
  font-weight: 500
}

devsite-search .devsite-suggest-footer {
  border-top: var(--devsite-primary-border);
  margin: 8px 0 0;
  padding: 7px 0 8px 40px
}

[dir=rtl] devsite-search .devsite-suggest-footer {
  padding: 7px 40px 8px 0
}

devsite-search .devsite-suggest-footer>.button {
  display: inline-block;
  margin: 6px 0;
  max-width: calc(100% - 16px)
}

[dir=ltr] devsite-search .devsite-suggest-footer>.button {
  margin-right: 16px
}

[dir=rtl] devsite-search .devsite-suggest-footer>.button {
  margin-left: 16px
}

devsite-search .devsite-suggest-footer>.button-white {
  max-width: 100%
}

[dir=ltr] devsite-search .devsite-suggest-footer>.button-white {
  margin-left: -8px
}

[dir=rtl] devsite-search .devsite-suggest-footer>.button-white {
  margin-right: -8px
}

devsite-search .devsite-suggest-header {
  font: 500 11px/16px var(--devsite-primary-font-family);
  letter-spacing: .8px;
  margin: 12px 0;
  padding-left: 40px;
  text-transform: uppercase
}

[dir=rtl] devsite-search .devsite-suggest-header {
  padding-left: 0;
  padding-right: 40px
}

devsite-search hr+.devsite-suggest-sub-section>.devsite-suggest-header {
  margin-top: 24px
}

devsite-search .devsite-suggest-header .devsite-suggest-project:before {
  content: "|";
  margin: 0 8px
}

devsite-search hr {
  margin: 8px 0
}

devsite-search .devsite-suggestion-fragment+.devsite-suggestion-fragment:before {
  content: "|";
  margin: 0 8px
}

devsite-search .devsite-search-disabled {
  padding-bottom: 16px
}

devsite-search[compact] {
  width: auto
}

devsite-search[compact] .devsite-search-field,devsite-search[compact] .devsite-searchbox {
  background-color: transparent
}

devsite-search[compact] input.devsite-search-field {
  width: 0
}

devsite-search[compact] .devsite-search-image {
  left: calc(50% - 12px);
  pointer-events: none
}

[dir=ltr] devsite-search[compact][search-active] .devsite-search-image {
  left: 8px;
  right: auto
}

[dir=rtl] devsite-search[compact][search-active] .devsite-search-image {
  right: 8px;
  left: auto
}

devsite-search[compact][search-active] input.devsite-search-field {
  width: 100%
}

@media screen and (max-width: 840px) {
  devsite-search input.devsite-search-field {
      padding-left:40px
  }

  [dir=rtl] devsite-search input.devsite-search-field {
      padding-left: 0;
      padding-right: 40px
  }

  .devsite-search-background,.devsite-search-background:after,[search-active] .devsite-search-background:after,devsite-search .devsite-search-field,devsite-search .devsite-search-field:hover {
      -webkit-transition: none;
      transition: none
  }

  devsite-search .devsite-search-image {
      left: 8px
  }

  [dir=rtl] devsite-search .devsite-search-image {
      left: auto;
      right: 8px
  }

  devsite-header devsite-search {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      margin-left: 8px;
      overflow: visible
  }

  [dir=rtl] devsite-header devsite-search {
      margin-left: 0;
      margin-right: 8px
  }

  devsite-header devsite-search .devsite-search-form {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -moz-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1
  }

  devsite-header .devsite-top-logo-row devsite-search:not([search-active]) input.devsite-search-field {
      padding: 0
  }
}

devsite-select {
  display: var(--devsite-select-display);
  margin: var(--devsite-select-margin);
  position: relative
}

devsite-select+devsite-select,devsite-select~.button,devsite-select~button {
  -webkit-margin-before: var(--devsite-select-sibling-gap-y);
  margin-block-start:var(--devsite-select-sibling-gap-y);-webkit-margin-start: var(--devsite-select-sibling-gap-x);
  -moz-margin-start: var(--devsite-select-sibling-gap-x);
  margin-inline-start:var(--devsite-select-sibling-gap-x)}

devsite-select select {
  display: none!important;
  pointer-events: none!important;
  position: absolute;
  z-index: -1
}

devsite-select .devsite-select {
  position: relative
}

devsite-select .devsite-select-toggle {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: var(--devsite-select-background-color);
  border: var(--devsite-select-border,var(--devsite-secondary-border));
  border-radius: var(--devsite-select-border-radius);
  box-shadow: none;
  color: var(--devsite-select-color,var(--devsite-primary-text-color));
  cursor: pointer;
  display: inline-block;
  font: var(--devsite-select-font,500 14px/36px var(--devsite-primary-font-family));
  height: var(--devsite-select-height,36px);
  line-height: var(--devsite-select-line-height,34px);
  max-width: var(--devsite-select-max-width,340px);
  min-width: 72px;
  outline: 0;
  overflow: hidden;
  padding: var(--devsite-select-padding,0 27px 0 7px);
  text-align: left;
  text-indent: .01px;
  text-overflow: ellipsis;
  -webkit-transition: background-color .2s;
  transition: background-color .2s;
  vertical-align: middle;
  white-space: nowrap;
  position: relative
}

devsite-select .devsite-select-toggle:focus,devsite-select .devsite-select-toggle:hover {
  background-color: var(--devsite-select-background-color-hover,var(--devsite-background-3));
  border: var(--devsite-select-border-hover,var(--devsite-select-border,var(--devsite-secondary-border)));
  color: var(--devsite-select-color-hover)
}

devsite-select .devsite-select-toggle:active {
  background-color: var(--devsite-select-background-color-active,var(--devsite-background-4));
  color: var(--devsite-select-color-active)
}

devsite-select .devsite-select-toggle:disabled {
  background-color: var(--devsite-background-3);
  border-color: transparent;
  color: var(--devsite-tertiary-text-color);
  cursor: default
}

devsite-select .devsite-select-toggle-icon {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0
}

[dir=ltr] devsite-select .devsite-select-toggle-icon {
  right: var(--devsite-select-toggle-icon-x,8px)
}

[dir=rtl] devsite-select .devsite-select-toggle-icon {
  left: var(--devsite-select-toggle-icon-x,8px)
}

devsite-select .devsite-select-toggle-icon:before {
  font-size: 18px
}

devsite-select .devsite-select-toggle-count {
  -webkit-margin-start: var(--devsite-select-count-margin-inline-start,6px);
  -moz-margin-start: var(--devsite-select-count-margin-inline-start,6px);
  margin-inline-start:var(--devsite-select-count-margin-inline-start,6px)}

devsite-select .devsite-select-toggle-count[parens]: not(:empty):before {
  content:"("
}

devsite-select .devsite-select-toggle-count[parens]:not(:empty):after {
  content: ")"
}

devsite-select .devsite-select-list {
  background: var(--devsite-background-1);
  border: var(--devsite-list-border,var(--devsite-secondary-border));
  border-radius: var(--devsite-list-border-radius,2px);
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);
  display: none;
  font: var(--devsite-list-font,400 14px/20px var(--devsite-primary-font-family));
  max-height: 304px;
  min-width: var(--devsite-list-min-width);
  opacity: 0;
  outline: 0;
  overflow-y: auto;
  padding: 8px 0;
  pointer-events: none;
  position: absolute;
  -webkit-transition: opacity .2s,visibility .2s;
  transition: opacity .2s,visibility .2s;
  z-index: 1005
}

devsite-dialog devsite-select .devsite-select-list {
  z-index: 1015
}

devsite-select[menu--open] .devsite-select-list {
  display: block;
  pointer-events: auto
}

devsite-select[menu--show] .devsite-select-list {
  opacity: 1
}

devsite-select[menu-position=above] .devsite-select-list {
  bottom: var(--devsite-list-position-y,36px)
}

devsite-select[menu-position=below] .devsite-select-list {
  top: var(--devsite-list-position-y,36px)
}

devsite-select .devsite-select-item {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0;
  min-height: 48px;
  min-width: 100%;
  padding: 8px 16px;
  white-space: nowrap
}

devsite-select .devsite-select-item.devsite-focused,devsite-select .devsite-select-item:focus,devsite-select .devsite-select-item:hover {
  background-color: var(--devsite-background-3);
  cursor: pointer
}

devsite-select .devsite-select-item[data-selected] {
  background-color: var(--devsite-item-background-selected,var(--devsite-background-3));
  color: var(--devsite-item-color-selected);
  font-weight: var(--devsite-item-font-weight-selected,500)
}

@media screen and (-ms-high-contrast:active),screen and (prefers-contrast:high) {
  devsite-select .devsite-select-item[data-selected] {
      font-weight: 700;
      text-decoration: underline
  }
}

devsite-select.devsite-select--multiple .devsite-select-item {
  padding-left: 48px;
  position: relative
}

devsite-select.devsite-select--multiple .devsite-select-item:before {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  color: #80868b;
  content: "check_box_outline_blank";
  display: block;
  font-size: 24px;
  left: 16px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%)
}

devsite-select.devsite-select--multiple .devsite-select-item[data-selected]:before {
  color: #1a73e8;
  content: "check_box"
}

devsite-selector {
  background: var(--devsite-selector-background,var(--devsite-background-1));
  border: var(--devsite-border,var(--devsite-secondary-border));
  border-radius: var(--devsite-border-radius,0);
  display: block;
  margin: var(--devsite-selector-margin,16px 0)
}

devsite-selector devsite-tabs {
  display: none
}

devsite-selector devsite-tabs[connected] {
  border-bottom: var(--devsite-border,var(--devsite-secondary-border));
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-selector devsite-tabs tab a {
  cursor: pointer;
  display: inline-block;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  line-height: var(--devsite-selector-tab-line-height,48px);
  margin: 0;
  max-width: 200px;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  -webkit-transition: color .2s;
  transition: color .2s;
  white-space: nowrap
}

devsite-selector devsite-tabs tab a,devsite-selector devsite-tabs tab a:link,devsite-selector devsite-tabs tab a:visited {
  color: var(--devsite-secondary-text-color)
}

devsite-selector devsite-tabs tab a:focus,devsite-selector devsite-tabs tab a:hover {
  color: var(--devsite-link-hover,var(--devsite-link-color))
}

devsite-selector devsite-tabs tab[active] a:link,devsite-selector devsite-tabs tab[active] a:visited {
  color: var(--devsite-link-color)
}

@media screen and (-ms-high-contrast:active),screen and (prefers-contrast:high) {
  devsite-selector devsite-tabs tab[active] a:link,devsite-selector devsite-tabs tab[active] a:visited {
      color: inherit
  }
}

devsite-selector devsite-tabs>div>tab[tab] a:focus:after,devsite-selector devsite-tabs>div>tab[tab] a:hover:after {
  border-color: var(--devsite-tab-marker-color,transparent)
}

devsite-selector devsite-tabs>div>tab[active] a:after,devsite-selector devsite-tabs>div>tab[active] a:focus:after,devsite-selector devsite-tabs>div>tab[active] a:hover:after {
  border-color: var(--devsite-link-color)
}

devsite-selector devsite-tabs tab[two-line] a {
  line-height: 20px;
  padding-top: 4px;
  white-space: normal
}

devsite-selector tab[two-line] [tab-label]:after {
  content: attr(tab-label);
  display: block;
  font-size: 12px
}

body devsite-selector devsite-tabs tab[overflow-tab] .devsite-tabs-overflow-menu tab a {
  height: auto;
  min-height: 48px;
  width: 100%
}

devsite-selector devsite-tabs[overflow-menu--open] tab[overflow-tab] {
  background: var(--devsite-overflow-tab-background,0);
  border-radius: var(--devsite-overflow-tab-border-radius,0)
}

body devsite-selector devsite-tabs tab[overflow-tab] .devsite-tabs-overflow-menu tab a:focus,body devsite-selector devsite-tabs tab[overflow-tab] .devsite-tabs-overflow-menu tab a:hover {
  background: var(--devsite-overflow-link-background-hover,var(--devsite-background-3))
}

devsite-selector>section {
  display: none;
  outline: 0
}

devsite-selector>section[active] {
  display: block;
  padding: 0 23px
}

devsite-selector>section .devsite-table-wrapper:first-child tbody tr:first-child,devsite-selector>section .devsite-table-wrapper:first-child thead tr {
  border-top: 0
}

devsite-selector>section>.devsite-table-wrapper,devsite-selector>section>.github-docwidget-gitinclude-code>devsite-code,devsite-selector>section>.github-docwidget-include,devsite-selector>section>aside.beta,devsite-selector>section>aside.caution,devsite-selector>section>aside.deprecated,devsite-selector>section>aside.dogfood,devsite-selector>section>aside.experimental,devsite-selector>section>aside.key-objective,devsite-selector>section>aside.key-point,devsite-selector>section>aside.key-term,devsite-selector>section>aside.note,devsite-selector>section>aside.preview,devsite-selector>section>aside.success,devsite-selector>section>aside.warning,devsite-selector>section>devsite-code,devsite-selector>section>table {
  margin: 0 -23px
}

devsite-selector>section>:first-child:not(:empty):not(aside):not(devsite-code):not(table):not(.devsite-table-wrapper):not([class^=github-]) {
  margin-top: var(--devsite-selector-content-margin-y,15px)
}

devsite-selector>section>:last-child:not(aside):not(devsite-code):not(table):not(.devsite-table-wrapper):not([class^=github-]) {
  margin-bottom: var(--devsite-selector-content-margin-y,15px)
}

devsite-selector .devsite-table-wrapper:last-child,devsite-selector>section>.github-docwidget-gitinclude-code>devsite-code:last-child>pre,devsite-selector>section>aside:last-child,devsite-selector>section>devsite-code:last-child>pre {
  border-radius: var(--devsite-content-border-radius,0)
}

devsite-selector .devsite-table-wrapper+.devsite-table-wrapper {
  margin-top: 16px
}

devsite-selector>section table devsite-code {
  margin: 16px 0
}

devsite-selector>section>devsite-code pre {
  padding-left: 23px
}

.devsite-article devsite-selector .material-icons {
  font-size: var(--devsite-selector-icon-font-size,18px);
  vertical-align: text-bottom
}

devsite-selector[ready] {
  pointer-events: auto;
  visibility: visible
}

devsite-shell-activate-button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around
}

devsite-shell-activate-button[tooltip--shown] {
  z-index: 104
}

@media screen and (max-width: 840px) {
  devsite-shell-activate-button {
      display:none
  }
}

devsite-shell-activate-button ul li {
  text-align: left
}

devsite-shell-activate-button button {
  border: none;
  color: #5f6368;
  height: auto;
  margin: 0 0 0 11px;
  min-width: 0;
  padding: 9px 13px;
  width: auto
}

devsite-shell-activate-button button.cloudshell-dogfood {
  padding-right: 0
}

devsite-shell-activate-button button.cloudshell-dogfood:before {
  background: var(--devsite-background-1);
  border-radius: 100%;
  border: var(--devsite-header-border);
  box-shadow: 1px 1px 1px var(--devsite-background-0);
  color: #1a73e8;
  content: "pets";
  float: right;
  font-family: Material Icons;
  font-size: 14px;
  font-weight: 400;
  height: 20px;
  line-height: 18px;
  overflow: hidden;
  position: relative;
  right: 7px;
  text-align: center;
  text-rendering: optimizelegibility;
  top: 7px;
  width: 20px
}

devsite-shell-activate-button button[disabled].cloudshell-dogfood:before {
  color: #9aa0a6
}

devsite-shell-activate-button button:active {
  background: var(--devsite-background-4);
  border: none
}

devsite-shell-activate-button button:focus {
  background: none;
  border: none;
  color: #5f6368
}

devsite-shell-activate-button button:hover {
  background: var(--devsite-background-4);
  border: none;
  color: #5f6368
}

devsite-shell-activate-button cloud-mdc-rich-tooltip::part(richTooltip) {
  -webkit-transform: translateX(-36px);
  transform: translateX(-36px)
}

devsite-shell-activate-button button[disabled] {
  border: none
}

devsite-shell-activate-button button svg {
  display: block;
  margin: auto;
  pointer-events: none
}

devsite-shell-activate-button .tooltip-title {
  color: #3c4043;
  font-size: 16px;
  font-weight: 500;
  margin: 2px 0 8px;
  padding: 0
}

devsite-shell-activate-button [slot=contents].tooltip-contents {
  color: #3c4043;
  font-family: var(--devsite-wordmark-font-family);
  font-size: 14px;
  font-weight: 400
}

devsite-shell-activate-button p.tooltip-contents {
  text-align: left;
  margin: 0
}

devsite-shell-activate-button ul.tooltip-contents {
  margin: 8px 0 0
}

devsite-shell-activate-button ul.tooltip-contents li {
  margin: 0
}

devsite-shell-activate-button .tooltip-buttons {
  float: left;
  margin: 24px 0 2px
}

body[free-trial] devsite-shell-activate-button[free-trial-hide] {
  display: none
}

body[free-trial] devsite-shell-activate-button[force-visibility] {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-sitemask {
  background: rgba(0,0,0,.4);
  bottom: -200px;
  cursor: pointer;
  left: -200px;
  opacity: 0;
  pointer-events: none;
  position: fixed;
  right: -200px;
  top: -200px;
  -webkit-transition: opacity .2s cubic-bezier(.4,0,.2,1),visibility .2s linear;
  transition: opacity .2s cubic-bezier(.4,0,.2,1),visibility .2s linear;
  visibility: hidden;
  z-index: 1012;
  -webkit-tap-highlight-color: transparent
}

devsite-sitemask[visible] {
  opacity: 1;
  pointer-events: auto;
  -webkit-transition: opacity .2s ease;
  transition: opacity .2s ease;
  visibility: visible
}

devsite-snackbar {
  bottom: 0;
  left: 0;
  margin-right: 24px;
  min-width: 288px;
  position: fixed;
  right: 0;
  z-index: 1018
}

devsite-snackbar .devsite-snackbar-snack {
  bottom: 0;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: var(--devsite-snack-max-width,none);
  min-width: var(--devsite-snack-min-width,auto);
  padding: 0 0 24px 24px;
  position: absolute;
  -webkit-transform: translateY(100px);
  transform: translateY(100px);
  -webkit-transition: -webkit-transform .2s cubic-bezier(.4,0,1,1);
  transition: -webkit-transform .2s cubic-bezier(.4,0,1,1);
  transition: transform .2s cubic-bezier(.4,0,1,1);
  transition: transform .2s cubic-bezier(.4,0,1,1),-webkit-transform .2s cubic-bezier(.4,0,1,1);
  width: var(--devsite-snack-width,auto)
}

devsite-snackbar [show].devsite-snackbar-snack {
  -webkit-transform: translateY(0);
  transform: translateY(0)
}

devsite-snackbar .devsite-snackbar-inner {
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-snackbar-inner-background,#3c4043);
  border-radius: var(--devsite-snackbar-inner-border-radius,2px);
  box-shadow: 0 1px 3px 0 var(--devsite-elevation-key-shadow-color),0 4px 8px 3px var(--devsite-elevation-ambient-shadow-color);
  color: var(--devsite-snackbar-inner-color,#fff);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-flow: row var(--devsite-snackbar-inner-flex-wrap,nowrap);
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-flow: row var(--devsite-snackbar-inner-flex-wrap,nowrap);
  flex-flow: row var(--devsite-snackbar-inner-flex-wrap,nowrap);
  font-size: 14px;
  min-height: 48px;
  padding: 0
}

devsite-snackbar .devsite-snackbar-message {
  -webkit-box-flex: var(--devsite-snackbar-message-flex,1 1);
  -webkit-flex: var(--devsite-snackbar-message-flex,1 1);
  -moz-box-flex: var(--devsite-snackbar-message-flex,1 1);
  -ms-flex: var(--devsite-snackbar-message-flex,1 1);
  flex: var(--devsite-snackbar-message-flex,1 1);
  font: var(--devsite-snackbar-message-font,inherit);
  letter-spacing: .2px;
  line-height: 20px;
  font-weight: 400;
  overflow: hidden;
  padding: var(--devsite-snackbar-message-padding,24px);
  text-overflow: ellipsis;
  word-break: break-word
}

devsite-snackbar .devsite-snackbar-message a {
  color: var(--devsite-snackbar-link-color,#669df6)
}

devsite-snackbar .devsite-snackbar-action,devsite-snackbar .devsite-snackbar-link {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  color: var(--devsite-snackbar-link-color,#eeff41);
  cursor: pointer;
  display: inline-block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0;
  -moz-box-flex: 0;
  -ms-flex: 0 0;
  flex: 0 0;
  float: right;
  font: var(--devsite-snackbar-action-font,inherit);
  height: auto;
  letter-spacing: .25px;
  line-height: 20px;
  margin-left: 0;
  margin-right: var(--devsite-snackbar-action-margin-right,0);
  min-width: -webkit-fit-content;
  min-width: -moz-fit-content;
  min-width: fit-content;
  outline: none;
  padding: var(--devsite-snackbar-action-padding,14px 24px);
  position: relative
}

devsite-snackbar .devsite-snackbar-action,devsite-snackbar .devsite-snackbar-action:active,devsite-snackbar .devsite-snackbar-action:focus,devsite-snackbar .devsite-snackbar-action:hover,devsite-snackbar .devsite-snackbar-link,devsite-snackbar .devsite-snackbar-link:active,devsite-snackbar .devsite-snackbar-link:focus,devsite-snackbar .devsite-snackbar-link:hover {
  background: 0;
  border: 0;
  box-shadow: none
}

devsite-snackbar .devsite-snackbar-link:focus {
  text-decoration: none
}

devsite-snackbar [type=cookie-notification] .devsite-snackbar-link,devsite-snackbar [type^=notification-] .devsite-snackbar-action {
  margin-left: var(--devsite-snackbar-action-margin-left,0)
}

@media screen and (max-width: 840px) {
  devsite-snackbar {
      margin-right:0;
      max-width: 100%
  }

  devsite-snackbar [type=cookie-notification] .devsite-snackbar-inner,devsite-snackbar [type^=notification-] .devsite-snackbar-inner {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap
  }

  devsite-snackbar [type=cookie-notification] .devsite-snackbar-message,devsite-snackbar [type^=notification-] .devsite-snackbar-message {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 100%;
      -moz-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      padding: var(--devsite-snackbar-message-padding,24px 24px 0)
  }

  devsite-snackbar .devsite-snackbar-inner {
      border-radius: 0
  }

  devsite-snackbar .devsite-snackbar-snack {
      left: 0;
      padding: 24px 0 0;
      right: 0
  }
}

devsite-spinner.devsite-send-spinner {
  margin-left: 78px
}

#devsite-support-form-button-wrapper {
  height: 36px
}

.devsite-support-projects {
  position: relative
}

.devsite-support-projects .devsite-support-projects-placeholder {
  height: 36px;
  position: absolute
}

devsite-tabs {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: var(--devsite-tabs-height,48px);
  margin: var(--devsite-tabs-margin);
  position: relative;
  width: var(--devsite-tabs-width)
}

devsite-tabs[connected] {
  max-width: none
}

devsite-tabs .devsite-tabs-wrapper {
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0
}

[dir=ltr] devsite-tabs.lower-tabs .devsite-tabs-wrapper {
  left: var(--devsite-tabs-wrapper-x,0)
}

[dir=rtl] devsite-tabs.lower-tabs .devsite-tabs-wrapper {
  right: var(--devsite-tabs-wrapper-x,0)
}

devsite-tabs[no-overflow] .devsite-tabs-wrapper {
  overflow: auto
}

devsite-tabs[dropdown--open] .devsite-tabs-wrapper,devsite-tabs[overflow-menu--open] .devsite-tabs-wrapper {
  overflow: visible
}

devsite-tabs tab {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  position: relative
}

devsite-tabs tab>.devsite-tabs-content,devsite-tabs tab>a {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: var(--devsite-link-font,500 14px/20px var(--devsite-primary-font-family));
  letter-spacing: var(--devsite-link-letter-spacing,normal);
  margin: 0;
  padding: var(--devsite-link-padding,0 24px);
  text-transform: var(--devsite-link-text-transform,uppercase);
  -webkit-transition: color .2s;
  transition: color .2s;
  white-space: nowrap
}

devsite-tabs tab>.devsite-tabs-content,devsite-tabs tab>.devsite-tabs-content:focus,devsite-tabs tab>.devsite-tabs-content:hover,devsite-tabs tab>a,devsite-tabs tab>a:focus,devsite-tabs tab>a:hover {
  text-decoration: none
}

devsite-tabs.upper-tabs tab a {
  font-weight: var(--devsite-upper-tab-font-weight,400);
  text-transform: none
}

devsite-tabs.upper-tabs tab>a {
  color: var(--devsite-upper-tab-inactive,var(--devsite-secondary-text-color))
}

devsite-tabs.upper-tabs tab[active]>a {
  font-weight: 500
}

@media screen and (-ms-high-contrast:active),screen and (prefers-contrast:high) {
  devsite-tabs.upper-tabs tab[active]>a {
      color: inherit
  }
}

devsite-tabs.upper-tabs>.devsite-tabs-wrapper>tab[active]>a {
  color: var(--devsite-upper-tab-active,var(--devsite-primary-text-color))
}

devsite-tabs.upper-tabs>.devsite-tabs-wrapper>tab[active]>a:hover {
  color: var(--devsite-upper-tab-active-hover,var(--devsite-upper-tab-active,var(--devsite-primary-text-color)))
}

devsite-tabs.upper-tabs>.devsite-tabs-wrapper>tab[active]>a:focus {
  color: var(--devsite-upper-tab-active-focus,var(--devsite-secondary-text-color))
}

devsite-tabs.upper-tabs>.devsite-tabs-wrapper>tab[active]>a:after {
  border-color: var(--devsite-upper-tab-marker-color,var(--devsite-secondary-color,var(--devsite-primary-text-color)))
}

devsite-tabs.upper-tabs>.devsite-tabs-wrapper>tab[active]>a:hover:after {
  border-color: var(--devsite-upper-tab-marker-color-hover,var(--devsite-upper-tab-marker-color,var(--devsite-secondary-color,var(--devsite-primary-text-color))))
}

devsite-tabs tab>a:focus:after,devsite-tabs tab>a:hover:after,devsite-tabs tab[active]>a:after {
  border-radius: var(--devsite-tab-marker-border-radius,0);
  border-top: var(--devsite-tab-marker-height,2px) solid transparent;
  bottom: 0;
  content: "";
  display: block;
  position: absolute
}

[dir=ltr] devsite-tabs tab>a:focus:after,[dir=ltr] devsite-tabs tab>a:hover:after,[dir=ltr] devsite-tabs tab[active]>a:after {
  left: var(--devsite-tab-marker-position-x,0);
  right: var(--devsite-tab-marker-position-x-end,var(--devsite-tab-marker-position-x,0))
}

[dir=rtl] devsite-tabs tab>a:focus:after,[dir=rtl] devsite-tabs tab>a:hover:after,[dir=rtl] devsite-tabs tab[active]>a:after {
  left: var(--devsite-tab-marker-position-x-end,var(--devsite-tab-marker-position-x,0));
  right: var(--devsite-tab-marker-position-x,0)
}

devsite-tabs tab[dropdown]>a {
  padding-block:0;padding-inline:var(--devsite-dropdown-tab-padding-x,24px) 0;position: relative;
  z-index: 2
}

[dir=ltr] devsite-tabs tab[active][dropdown] a:not(.devsite-tabs-dropdown-toggle):after,[dir=ltr] devsite-tabs tab[dropdown] a:not(.devsite-tabs-dropdown-toggle):focus:after,[dir=ltr] devsite-tabs tab[dropdown] a:not(.devsite-tabs-dropdown-toggle):hover:after {
  right: var(--devsite-tab-marker-inset-x,0)
}

[dir=rtl] devsite-tabs tab[active][dropdown] a:not(.devsite-tabs-dropdown-toggle):after,[dir=rtl] devsite-tabs tab[dropdown] a:not(.devsite-tabs-dropdown-toggle):focus:after,[dir=rtl] devsite-tabs tab[dropdown] a:not(.devsite-tabs-dropdown-toggle):hover:after {
  left: var(--devsite-tab-marker-inset-x,0)
}

devsite-tabs.upper-tabs tab[dropdown] .devsite-tabs-dropdown a {
  font-weight: var(--devsite-upper-tab-dropdown-link-font-weight)
}

devsite-tabs.upper-tabs tab[dropdown] .devsite-tabs-dropdown a,devsite-tabs.upper-tabs tab[dropdown] .devsite-tabs-dropdown a:visited {
  color: var(--devsite-upper-tab-dropdown-link,var(--devsite-primary-text-color))
}

devsite-tabs.upper-tabs tab[dropdown] .devsite-tabs-dropdown a:focus,devsite-tabs.upper-tabs tab[dropdown] .devsite-tabs-dropdown a:hover {
  color: var(--devsite-upper-tab-dropdown-link-hover,var(--devsite-secondary-text-color))
}

devsite-tabs.upper-tabs tab[dropdown] .devsite-tabs-dropdown a:focus .devsite-nav-item-title,devsite-tabs.upper-tabs tab[dropdown] .devsite-tabs-dropdown a:hover .devsite-nav-item-title {
  -webkit-text-decoration: var(--devsite-nav-item-title-text-decoration-hover,none);
  -moz-text-decoration: var(--devsite-nav-item-title-text-decoration-hover,none);
  text-decoration: var(--devsite-nav-item-title-text-decoration-hover,none)
}

devsite-tabs.upper-tabs tab[dropdown] .devsite-nav-item-description {
  color: var(--devsite-upper-tab-dropdown-description,var(--devsite-secondary-text-color));
  font-weight: var(--devsite-upper-tab-dropdown-description-font-weight);
  margin: var(--devsite-upper-tab-dropdown-description-margin)
}

devsite-tabs .devsite-tabs-dropdown-content {
  border-top: var(--devsite-header-border,0)
}

devsite-tabs.lower-tabs tab[dropdown] .devsite-tabs-dropdown-content,devsite-tabs.lower-tabs tab[overflow-tab] .devsite-tabs-overflow-menu,devsite-tabs.upper-tabs tab[dropdown] .devsite-tabs-dropdown-content,devsite-tabs.upper-tabs tab[overflow-tab] .devsite-tabs-overflow-menu {
  border-radius: var(--devsite-upper-tab-dropdown-corner-radius,0)
}

devsite-tabs.upper-tabs tab[dropdown] .devsite-tabs-dropdown-toggle:before,devsite-tabs.upper-tabs tab[overflow-tab] .devsite-icon-arrow-drop-down:before {
  color: var(--devsite-upper-tab-dropdown-inactive,var(--devsite-upper-tab-inactive,var(--devsite-secondary-text-color)))
}

devsite-tabs.upper-tabs tab[active][dropdown] .devsite-tabs-dropdown-toggle:before {
  color: var(--devsite-upper-tab-dropdown-active,var(--devsite-upper-tab-active,var(--devsite-primary-text-color)))
}

devsite-tabs tab[dropdown] .devsite-tabs-dropdown-toggle {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding-block:0;padding-inline:0 var(--devsite-dropdown-toggle-padding-x,0)}

devsite-tabs tab[dropdown] .devsite-tabs-dropdown-toggle: before,devsite-tabs.upper-tabs .devsite-icon-arrow-drop-down:before {
  width:24px;
  height: 24px;
  overflow: hidden;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: background .2s,color .2s,-webkit-transform .2s;
  transition: background .2s,color .2s,-webkit-transform .2s;
  transition: background .2s,color .2s,transform .2s;
  transition: background .2s,color .2s,transform .2s,-webkit-transform .2s
}

devsite-tabs tab[dropdown] .devsite-tabs-dropdown-toggle:focus:before {
  background: var(--devsite-background-3);
  border-radius: 50%
}

devsite-tabs tab[dropdown--open] .devsite-tabs-dropdown-toggle:before,devsite-tabs.upper-tabs[overflow-menu--open] tab:hover .devsite-icon-arrow-drop-down:before {
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg)
}

devsite-tabs tab[overflow-tab] {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  position: relative
}

devsite-tabs tab[overflow-tab][collapsed] {
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -moz-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0
}

devsite-tabs.upper-tabs tab[overflow-tab]:after {
  content: "";
  height: 48px;
  position: absolute;
  z-index: -1
}

[dir=ltr] devsite-tabs.upper-tabs tab[overflow-tab]:after {
  left: -6px;
  right: -100%
}

[dir=rtl] devsite-tabs.upper-tabs tab[overflow-tab]:after {
  left: -100%;
  right: -6px
}

devsite-tabs tab[overflow-tab] tab>a {
  padding: var(--devsite-overflow-tab-padding,0 24px)
}

devsite-tabs tab[overflow-tab] a {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: row-reverse;
  -moz-box-orient: horizontal;
  -moz-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  position: relative
}

devsite-tabs tab[overflow-tab] tab .devsite-tabs-dropdown,devsite-tabs tab[overflow-tab] tab .devsite-tabs-dropdown-toggle {
  display: none
}

devsite-tabs tab[overflow-tab] .devsite-tabs-overflow-menu {
  background: var(--devsite-overflow-menu-background,var(--devsite-background-1));
  border-radius: var(--devsite-overflow-menu-border-radius,2px);
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-height: 320px;
  overflow-y: auto;
  padding: 16px 0;
  position: absolute;
  top: var(--devsite-overflow-menu-top,-16px);
  z-index: 1005
}

devsite-tabs.upper-tabs tab[overflow-tab] .devsite-tabs-overflow-menu {
  border-radius: 0 0 2px 2px;
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color),inset 0 4px 6px -4px var(--devsite-elevation-inset-shadow-color);
  top: 48px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition: -webkit-transform .2s;
  transition: -webkit-transform .2s;
  transition: transform .2s;
  transition: transform .2s,-webkit-transform .2s;
  z-index: -1
}

devsite-tabs.upper-tabs .devsite-tabs-overflow-menu .devsite-tabs-dropdown-toggle {
  display: none!important
}

devsite-tabs.upper-tabs tab[overflow-tab] .devsite-tabs-overflow-menu[hidden] {
  display: block!important;
  pointer-events: none;
  -webkit-transform: translate3d(0,-150%,0);
  transform: translate3d(0,-150%,0)
}

devsite-tabs tab[overflow-tab] .devsite-tabs-overflow-menu tab a {
  background: var(--devsite-background-1);
  color: var(--devsite-secondary-text-color);
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  height: 48px
}

devsite-tabs tab[overflow-tab] .devsite-tabs-overflow-menu tab a:focus,devsite-tabs tab[overflow-tab] .devsite-tabs-overflow-menu tab a:hover {
  background: var(--devsite-background-3);
  color: var(--devsite-primary-text-color)
}

devsite-tabs .devsite-tabs-dropdown {
  display: block;
  font-size: 13px;
  left: -6px;
  min-width: calc(100% + 12px);
  outline: 0;
  overflow: hidden;
  padding: 0 6px 6px;
  pointer-events: none;
  position: absolute;
  top: 100%;
  z-index: -1
}

[dir=rtl] devsite-tabs .devsite-tabs-dropdown {
  right: -6px;
  left: auto
}

devsite-tabs [dropdown-full] .devsite-tabs-dropdown {
  left: 0;
  padding: var(--devsite-dropdown-full-padding,0 0 6px);
  width: var(--devsite-dropdown-full-width,100vw)
}

[dir=rtl] devsite-tabs [dropdown-full] .devsite-tabs-dropdown {
  left: auto;
  right: 0
}

devsite-tabs .devsite-tabs-dropdown-content {
  background-color: var(--devsite-background-1);
  display: var(--devsite-dropdown-content-display,flex);
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color),inset 0 4px 6px -4px var(--devsite-elevation-inset-shadow-color);
  grid-template-columns: var(--devsite-dropdown-content-grid-template-columns,none);
  grid-template-rows: var(--devsite-dropdown-content-grid-template-rows,none);
  overflow: auto;
  max-height: 600px;
  max-width: 100vw;
  padding: var(--devsite-dropdown-content-padding,0 12px);
  pointer-events: none;
  -webkit-transform: translate3d(0,-150%,0);
  transform: translate3d(0,-150%,0);
  -webkit-transition: -webkit-transform 0s;
  transition: -webkit-transform 0s;
  transition: transform 0s;
  transition: transform 0s,-webkit-transform 0s;
  white-space: nowrap
}

devsite-tabs .devsite-tabs-dropdown[dropdown-transition] .devsite-tabs-dropdown-content {
  -webkit-transition: -webkit-transform .5s;
  transition: -webkit-transform .5s;
  transition: transform .5s;
  transition: transform .5s,-webkit-transform .5s
}

devsite-tabs tab[dropdown--open] .devsite-tabs-dropdown-content {
  pointer-events: all;
  -webkit-transform: translateZ(0);
  transform: translateZ(0)
}

devsite-tabs .devsite-tabs-dropdown-column {
  background: var(--devsite-dropdown-column-background,none);
  border-top: var(--devsite-dropdown-column-border-top,0);
  -moz-box-sizing: var(--devsite-dropdown-column-box-sizing,inherit);
  box-sizing: var(--devsite-dropdown-column-box-sizing,inherit);
  display: var(--devsite-dropdown-column-display);
  margin: var(--devsite-dropdown-column-margin,0);
  max-width: var(--devsite-dropdown-column-max-width,none);
  min-width: var(--devsite-dropdown-column-min-width,180px);
  padding: var(--devsite-dropdown-column-padding,0)
}

devsite-tabs [dropdown-full] .devsite-tabs-dropdown-column {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  grid-row: var(--devsite-dropdown-column-grid-row,auto);
  min-width: 0
}

devsite-tabs .devsite-tabs-dropdown-section {
  list-style: none;
  margin: var(--devsite-dropdown-section-margin,0);
  padding: var(--devsite-dropdown-section-padding,0 12px)
}

devsite-tabs .devsite-tabs-dropdown-section:first-child {
  margin: var(--devsite-dropdown-first-section-margin,18px 0 0)
}

devsite-tabs .devsite-tabs-dropdown-section:not(:first-child) {
  margin-top: 54px
}

devsite-tabs tab[dropdown] .devsite-nav-item,devsite-tabs tab[dropdown] .devsite-nav-title {
  line-height: 18px;
  margin: var(--devsite-nav-text-margin,0 0 18px)
}

devsite-tabs tab[dropdown] .devsite-nav-title {
  border-bottom: var(--devsite-nav-title-border-bottom,0);
  color: var(--devsite-nav-title-color,var(--devsite-secondary-text-color));
  font: var(--devsite-nav-title-font,inherit);
  font-weight: var(--devsite-nav-title-font-weight,700);
  outline: none;
  padding: var(--devsite-nav-title-padding,0);
  text-transform: var(--devsite-nav-title-transform,none);
  white-space: var(--devsite-nav-title-white-space)
}

devsite-tabs tab[dropdown] .devsite-nav-item-title {
  display: var(--devsite-nav-item-title-display,block);
  font: var(--devsite-nav-item-title-font,inherit);
  letter-spacing: var(--devsite-nav-item-title-letter-spacing,normal);
  line-height: var(--devsite-nav-item-title-line-height,inherit);
  margin: var(--devsite-nav-item-title-margin,0)
}

devsite-tabs [dropdown-full] .devsite-nav-item>a,devsite-tabs [dropdown-full] .devsite-nav-title {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal
}

devsite-tabs tab[dropdown] .devsite-nav-description,devsite-tabs tab[dropdown] .devsite-nav-item-description {
  font: var(--devsite-nav-description-font,inherit);
  font-size: var(--devsite-nav-description-font-size,inherit);
  line-height: var(--devsite-nav-description-line-height,inherit)
}

devsite-tabs tab[dropdown] .devsite-nav-description {
  color: var(--devsite-nav-description-color,inherit);
  display: var(--devsite-nav-description-display,inherit);
  margin: var(--devsite-nav-description-margin,12px 0);
  white-space: var(--devsite-nav-description-white-space,inherit)
}

devsite-tabs tab[dropdown] .devsite-nav-item-description {
  color: var(--devsite-secondary-text-color);
  padding: var(--devsite-padding,0);
  white-space: normal
}

body[theme] devsite-tabs .devsite-tabs-dropdown a,body[theme] devsite-tabs .devsite-tabs-dropdown a:visited {
  color: var(--devsite-primary-text-color);
  display: var(--devsite-dropdown-link-display,block);
  font-weight: 400
}

body[theme] devsite-tabs .devsite-tabs-dropdown a:focus,body[theme] devsite-tabs .devsite-tabs-dropdown a:hover {
  color: var(--devsite-link-color)
}

devsite-tabs[render-hidden] {
  width: 100%
}

devsite-tabs tab[overflow-tab][render-hidden],devsite-tabs[render-hidden] tab[overflow-tab] {
  -webkit-box-flex: 0;
  -webkit-flex: none;
  -moz-box-flex: 0;
  -ms-flex: none;
  flex: none
}

devsite-tabs tab[dropdown] .devsite-tabs-close-button {
  color: var(--devsite-primary-text-color);
  cursor: pointer;
  position: absolute;
  right: 24px;
  top: 24px;
  visibility: hidden;
  z-index: 1
}

devsite-tabs tab[dropdown] .devsite-tabs-close-button:focus,devsite-tabs tab[dropdown] .devsite-tabs-close-button:hover {
  color: var(--devsite-link-color)
}

devsite-tabs tab[dropdown--open] .devsite-tabs-close-button {
  visibility: visible
}

devsite-thumb-rating {
  display: block
}

devsite-thumb-rating[position=footer] {
  text-align: center
}

devsite-thumb-rating .devsite-thumb-rating {
  border-radius: 4px;
  display: grid;
  grid-gap: 0 8px;
  grid-template-areas: "label thumbs";
  grid-template-columns: auto 1fr
}

devsite-thumb-rating .devsite-thumb-label {
  font-size: 13px;
  grid-area: label
}

devsite-thumb-rating .devsite-thumbs {
  grid-area: thumbs
}

devsite-thumb-rating[position=header] .devsite-thumbs,devsite-thumb-rating[position=main] .devsite-thumbs {
  margin: -3px 0
}

devsite-thumb-rating .devsite-thumb {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: 0;
  border: 0;
  border-radius: 50%;
  box-shadow: none;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  fill: var(--devsite-secondary-text-color);
  height: 30px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  min-width: 30px;
  padding: 0;
  width: 30px
}

devsite-thumb-rating .devsite-thumb:focus,devsite-thumb-rating .devsite-thumb:hover {
  background: var(--devsite-background-3)
}

devsite-thumb-rating .devsite-thumb+.devsite-thumb {
  margin: 0
}

devsite-thumb-rating[rating=down] .devsite-thumb-down,devsite-thumb-rating[rating=up] .devsite-thumb-up {
  fill: var(--devsite-link-color)
}

devsite-thumb-rating[rating=down] .devsite-thumb-down:focus,devsite-thumb-rating[rating=down] .devsite-thumb-down:hover,devsite-thumb-rating[rating=up] .devsite-thumb-up:focus,devsite-thumb-rating[rating=up] .devsite-thumb-up:hover {
  background: var(--devsite-link-background-active)
}

devsite-thumb-rating .devsite-thumb-icon {
  -webkit-box-flex: 0;
  -webkit-flex: none;
  -moz-box-flex: 0;
  -ms-flex: none;
  flex: none;
  height: 18px;
  pointer-events: none;
  width: 18px
}

devsite-thumb-rating[position=footer] .devsite-thumb-rating {
  display: block;
  margin-top: 24px
}

.devsite-thumb-rating-dialog {
  position: relative
}

.devsite-thumb-rating-dialog .devsite-thumb-rating-categories {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

.devsite-thumb-rating-dialog .devsite-thumb-rating-category {
  padding-bottom: 12px
}

[dir=ltr] .devsite-thumb-rating-dialog h3 {
  text-align: left
}

[dir=rtl] .devsite-thumb-rating-dialog h3 {
  text-align: right
}

.devsite-thumb-rating-dialog h3:only-child {
  margin-bottom: 8px
}

.devsite-thumb-rating-dialog .devsite-dialog-buttons {
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -moz-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding: 0 16px 16px
}

.devsite-thumb-rating-dialog .devsite-feedback-icon {
  fill: currentColor;
  top: 0
}

[dir=ltr] .button+devsite-feedback[position=thumb-rating] {
  margin-left: 16px
}

[dir=rtl] .button+devsite-feedback[position=thumb-rating] {
  margin-right: 16px
}

devsite-feedback[feedback-type=thumb-rating][position=header] {
  margin-top: 4px
}

devsite-feedback[feedback-type=thumb-rating][position=footer] {
  display: block;
  margin-top: 8px;
  text-align: center
}

.devsite-thumb-rating-dialog .devsite-dialog-contents {
  color: var(--devsite-primary-text-color)
}

.devsite-thumb-rating-dialog input+label {
  font-size: 14px
}

.devsite-thumb-rating-dialog .account-note {
  color: var(--devsite-secondary-text-color);
  font: 400 12px/16px var(--devsite-primary-font-family);
  letter-spacing: .3px
}

.devsite-thumb-rating-dialog .create-profile-spinner {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: hsla(0,0%,100%,.8);
  bottom: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  -webkit-transition: opacity .3s cubic-bezier(.4,0,.2,1);
  transition: opacity .3s cubic-bezier(.4,0,.2,1);
  z-index: 10
}

.devsite-thumb-rating-dialog.loading .create-profile-spinner {
  opacity: 1
}

@media screen and (max-width: 600px) {
  devsite-thumb-rating[position=header] .devsite-thumb-rating {
      margin:16px 0 8px
  }

  devsite-thumb-rating[position=main] .devsite-thumb-rating {
      margin: 8px 0
  }

  devsite-thumb-rating[position=footer] .devsite-thumb-rating {
      margin-bottom: 24px
  }
}

devsite-toc.devsite-toc {
  overflow: auto;
  width: 160px
}

devsite-toc>.devsite-nav-list {
  -webkit-border-start: var(--devsite-toc-border-width,4px) solid var(--devsite-toc-border,var(--devsite-primary-color));
  -moz-border-start: var(--devsite-toc-border-width,4px) solid var(--devsite-toc-border,var(--devsite-primary-color));
  border-inline-start:var(--devsite-toc-border-width,4px) solid var(--devsite-toc-border,var(--devsite-primary-color));width: 160px
}

.devsite-sidebar[fixed] devsite-toc>.devsite-nav-list {
  -webkit-padding-end: 8px;
  -moz-padding-end: 8px;
  padding-inline-end:8px}

devsite-toc>.devsite-nav-list>:first-child>.devsite-nav-title {
  padding-top: 0
}

devsite-toc>.devsite-nav-list>:last-child>.devsite-nav-list>:last-child>.devsite-nav-title:last-child,devsite-toc>.devsite-nav-list>:last-child>.devsite-nav-title:only-child {
  padding-bottom: 0
}

devsite-toc .devsite-nav-list {
  -webkit-padding-start: var(--devsite-nav-list-padding-x-start,12px);
  -moz-padding-start: var(--devsite-nav-list-padding-x-start,12px);
  padding-inline-start:var(--devsite-nav-list-padding-x-start,12px)}

devsite-toc .devsite-nav-list .devsite-nav-list .devsite-nav-title {
  color: var(--devsite-nav-title-nested-color,var(--devsite-nav-title-color,var(--devsite-primary-text-color)))
}

devsite-toc .devsite-nav-list .devsite-nav-list .devsite-nav-title:focus,devsite-toc .devsite-nav-list .devsite-nav-list .devsite-nav-title:hover {
  color: var(--devsite-nav-nested-color-hover,var(--devsite-nav-color-hover,var(--devsite-link-color)))
}

devsite-toc .devsite-nav-list .devsite-nav-list .devsite-nav-active {
  color: var(--devsite-nav-color-active,var(--devsite-link-color-active,var(--devsite-link-color)))
}

devsite-toc.devsite-toc-embedded {
  display: none
}

devsite-toc.devsite-toc-embedded>.devsite-nav-list {
  width: auto
}

devsite-toc.devsite-toc-embedded .devsite-nav-item {
  display: none
}

devsite-toc.devsite-toc-embedded .devsite-nav-item[visible],devsite-toc.devsite-toc-embedded[expanded] .devsite-nav-item {
  display: block
}

devsite-toc.devsite-toc-embedded .devsite-nav-item.devsite-toc-toggle,devsite-toc.devsite-toc-embedded[expanded] .devsite-nav-item.devsite-toc-toggle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-toc .devsite-nav-more-items,devsite-toc .devsite-nav-show-all {
  display: none
}

devsite-toc[expandable] .devsite-nav-more-items,devsite-toc[expandable] .devsite-nav-show-all {
  color: var(--devsite-secondary-text-color);
  display: block;
  height: 24px;
  padding: 0
}

devsite-toc .devsite-nav-show-all {
  margin: -4px 0 0 4px;
  min-width: 20px
}

devsite-toc .devsite-nav-show-all:before {
  content: "expand_more"
}

devsite-toc .devsite-nav-more-items {
  margin-bottom: -8px;
  min-width: 0
}

devsite-toc .devsite-nav-more-items:before {
  content: "more_horiz"
}

devsite-toc[expanded] .devsite-nav-more-items:before,devsite-toc[expanded] .devsite-nav-show-all:before {
  content: "expand_less"
}

devsite-toc .devsite-toc-toggle {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0
}

devsite-toc .devsite-show-apix {
  margin-top: 12px
}

@media screen and (max-width: 1253px) {
  devsite-toc.devsite-toc,devsite-toc[visible].devsite-toc {
      display:none
  }

  devsite-toc.devsite-toc-embedded:not(:empty) {
      display: block;
      margin: 28px 0 24px
  }

  body[layout][concierge] devsite-toc.devsite-toc-embedded {
      display: none
  }

  devsite-toc.devsite-toc-embedded:not(:empty)~.devsite-article-body>:first-child {
      margin-top: 0
  }

  body[template=landing] devsite-toc.devsite-toc-embedded:not(:empty) {
      margin: 20px 40px 24px
  }
}

@media screen and (max-width: 840px) {
  body[template=landing] devsite-toc.devsite-toc-embedded:not(:empty) {
      margin:20px 24px 24px
  }

  body[layout][concierge] devsite-toc.devsite-toc-embedded:not(:empty) {
      display: block
  }
}

@media screen and (max-width: 600px) {
  body[template=landing] devsite-toc.devsite-toc-embedded:not(:empty) {
      margin:20px 16px 24px
  }
}

.devsite-tooltip-msg {
  border-radius: 2px;
  background: rgba(95,99,104,.9);
  color: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: 500 10px/10px var(--devsite-primary-font-family);
  margin: 8px 0;
  max-width: 300px;
  opacity: 1;
  padding: 6px 8px;
  pointer-events: none;
  position: fixed;
  -webkit-transition: opacity .2s;
  transition: opacity .2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 1020
}

devsite-topic {
  display: block
}

devsite-topic .devsite-topic--inner {
  max-width: 936px;
  padding: 0 40px;
  margin: 0 auto
}

devsite-topic .devsite-topic--header {
  background-color: var(--devsite-background-1);
  background-image: url(../images/devsite_topics_header.svg);
  background-repeat: no-repeat;
  background-position: top;
  background-size: 1440px auto;
  margin-bottom: 40px
}

devsite-topic .devsite-topic--header .devsite-topic--inner {
  padding-top: 168px
}

devsite-topic .devsite-topic--header h1 {
  margin: 0;
  top: auto;
  font-size: 36px;
  line-height: 44px;
  color: #202124;
  font-family: var(--devsite-headline-font-family)
}

devsite-topic .devsite-topic--header p {
  margin: 0;
  padding: 0;
  color: #202124;
  font-size: 18px;
  line-height: 24px;
  font-family: var(--devsite-headline-font-family)
}

devsite-topic .devsite-topic--header .jump-links {
  border-bottom: 1px solid #ddd;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-family: Google Sans;
  font-weight: 500;
  -ms-flex-pack: distribute;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  list-style: none;
  padding: 26px 0 0;
  width: 100%
}

devsite-topic .devsite-topic--header .jump-links a:after {
  content: "arrow_downward";
  font: normal normal normal 18px/1 Material Icons;
  margin-left: 8px;
  vertical-align: text-bottom
}

devsite-topic .devsite-topic--header .jump-links a {
  text-decoration: none!important
}

devsite-topic .devsite-topic--header .jump-links a:link,devsite-topic .devsite-topic--header .jump-links a:visited {
  color: #5f6368!important
}

devsite-topic .devsite-topic--header .jump-links a:focus,devsite-topic .devsite-topic--header .jump-links a:hover {
  color: #1a73e8!important
}

devsite-topic .devsite-topic--section {
  padding: 40px 0
}

devsite-topic .devsite-topic--section:nth-child(odd) {
  background: #f8f9fa
}

devsite-topic .devsite-topic--section:first-child() {
  background: none
}

devsite-topic .devsite-topic--section h2 {
  margin: 0;
  padding: 0;
  font-size: 32px;
  color: #202124;
  line-height: 40px;
  font-family: var(--devsite-headline-font-family)
}

devsite-topic .devsite-topic--section .devsite-topic-section-description {
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #3c4043;
  line-height: 24px;
  font-family: var(--devsite-primary-font-family);
  max-width: calc(66.6666666667% - 13.3333333333px)
}

devsite-topic .devsite-topic-section--row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 0 -12px;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

devsite-topic .devsite-topic-section--row .devsite-topic-section--card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  min-width: 0;
  max-width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 12px 24px
}

devsite-topic .devsite-topic-section--row .devsite-topic-section--card .devsite-topic-section-card--title {
  font-size: 24px;
  color: #202124;
  line-height: 32px;
  font-family: var(--devsite-primary-font-family)
}

devsite-topic .devsite-topic-section--row .devsite-topic-section--card .devsite-topic-section-card--title a {
  color: #202124
}

devsite-topic .devsite-topic-section--row .devsite-topic-section--card .devsite-topic-section-card--description {
  font-size: 16px;
  color: #3c4043;
  letter-spacing: .1px;
  line-height: 24px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

devsite-topic .devsite-topic-section-card--label {
  padding: 16px
}

devsite-topic .devsite-topic-section-card--label span {
  border-radius: 4px;
  padding: 2px 8px;
  font-family: var(--devsite-primary-font-family);
  font-size: 12px;
  color: rgba(0,0,0,.87);
  text-transform: uppercase
}

devsite-topic .devsite-topic-section--hero {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -webkit-flex-direction: row-reverse;
  -moz-box-orient: horizontal;
  -moz-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse
}

devsite-topic .devsite-topic-section--hero-media {
  margin-left: 12px
}

devsite-topic .devsite-topic-section--hero-media .devsite-landing-row-item-image {
  background: none
}

devsite-topic .devsite-topic-section--hero-description {
  margin-right: 12px
}

devsite-topic .devsite-topic-section--hero-description p.devsite-topic-section-description {
  max-width: 100%
}

devsite-topic .devsite-topic-section--hero-description,devsite-topic .devsite-topic-section--hero-media {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: calc(50% - 12px)
}

devsite-topic .devsite-topic-section--cards {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 24px;
  margin: 0 -12px;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}

devsite-topic .devsite-topic-section--cards .devsite-topic-section--card {
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);
  background: var(--devsite-background-1);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  min-width: 0;
  max-width: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border-radius: 4px;
  margin: 0 12px 24px;
  width: calc(50% - 24px)
}

devsite-topic .devsite-topic-section--cards .devsite-topic-section--card .devsite-topic-section-card--title {
  padding: 0 16px
}

devsite-topic .devsite-topic-section--cards .devsite-topic-section--card .devsite-topic-section-card--title a {
  font-family: var(--devsite-headline-font-family);
  font-size: 24px;
  color: #202124;
  line-height: 32px
}

devsite-topic .devsite-topic-section--cards .devsite-topic-section--card .devsite-topic-section-card--description {
  padding: 8px 16px 24px;
  border-bottom: 1px solid #ddd;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

devsite-topic .devsite-topic-section--cards .devsite-topic-section--card .devsite-topic-section-card--description p {
  font-size: 16px;
  color: #3c4043;
  line-height: 24px
}

devsite-topic .devsite-topic-section--cards .devsite-topic-section--card .devsite-topic-section-card--meta {
  padding: 16px 16px 12px;
  font-size: 12px;
  line-height: 16px
}

devsite-topic .devsite-topic-section--cards .devsite-topic-section--card .devsite-topic-section-card--meta-byline {
  color: #202124
}

devsite-topic .devsite-topic-section--cards .devsite-topic-section--card .devsite-topic-section-card--meta-date {
  color: #3c4043
}

devsite-topic .devsite-topic-section--cards .devsite-topic-section--card .devsite-topic-section-card--buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 12px 8px 8px
}

devsite-topic .devsite-topic-section--1-up .devsite-topic-section--card {
  width: calc(100% - 24px);
  margin-bottom: 0
}

devsite-topic .devsite-topic-section--2-up .devsite-topic-section--card {
  margin-bottom: 0
}

devsite-topic .devsite-topic-section--3-up .devsite-topic-section--card {
  width: calc(33% - 24px)
}

@media screen and (max-width: 840px) {
  devsite-topic .devsite-topic--inner {
      max-width:768px;
      padding: 0 40px
  }
}

@media screen and (max-width: 600px) {
  devsite-topic .devsite-topic--inner {
      max-width:100%;
      padding: 0 24px
  }

  devsite-topic .devsite-topic--section {
      padding: 24px 0
  }

  devsite-topic .devsite-topic--section .devsite-topic-section--card {
      width: calc(100% - 24px)
  }

  devsite-topic .devsite-topic-section--hero {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column
  }

  devsite-topic .devsite-topic-section--hero-description,devsite-topic .devsite-topic-section--hero-media {
      margin: 0;
      width: 100%
  }

  devsite-topic .devsite-topic-section--hero-media {
      margin-bottom: 24px
  }
}

devsite-tracking-question {
  background-color: var(--devsite-background-3);
  display: block;
  padding: 8px
}

devsite-tracking-question .devsite-tracking-question-text {
  font-weight: 700
}

devsite-tracking-question .devsite-tracking-question-hidden {
  display: none
}

devsite-tracking-question .devsite-tracking-question-choice-button {
  background: var(--devsite-background-1);
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
  color: var(--devsite-primary-text-color);
  cursor: pointer;
  line-height: 50px;
  margin: 8px 0;
  padding: 0 20px;
  -webkit-transition: background .2s,box-shadow .2s;
  transition: background .2s,box-shadow .2s
}

devsite-tracking-question .devsite-tracking-question-choice-button:focus,devsite-tracking-question .devsite-tracking-question-choice-button:hover {
  background: #bdc1c6;
  box-shadow: 0 4px 8px 0 hsla(210,6%,63%,.5)
}

devsite-user {
  display: block;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -moz-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto
}

devsite-user[signed-in],devsite-user[signed-in].not-eligible {
  min-width: 44px
}

devsite-user[signed-in][enable-profiles] {
  min-width: 84px
}

devsite-user[signed-in][enable-profiles].not-eligible {
  min-width: 44px
}

devsite-user[signed-in][enable-profiles][fp-auth] {
  min-width: 88px
}

devsite-user[signed-in][enable-profiles][fp-auth].not-eligible {
  min-width: 44px
}

devsite-user #devsite-signin-btn {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: 500 14px/36px var(--devsite-primary-font-family)
}

devsite-user devsite-spinner {
  margin: 4px 8px 4px 20px
}

devsite-user devsite-spinner.hide {
  -webkit-animation-delay: .45s;
  animation-delay: .45s;
  opacity: 0;
  -webkit-transition: opacity .45s ease;
  transition: opacity .45s ease
}

devsite-user .ogb-wrapper {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  opacity: 1;
  -webkit-transition: opacity .2s cubic-bezier(.4,0,.2,1);
  transition: opacity .2s cubic-bezier(.4,0,.2,1)
}

devsite-user .ogb-pending {
  opacity: 0
}

devsite-user .gb_Mb>.gb_Lb,devsite-user .gb_Nb>.gb_Mb,devsite-user .gb_Pd>.gb_Za,devsite-user .gb_Rb>.gb_Qb,devsite-user .gb_Sb>.gb_Rb {
  -moz-box-sizing: content-box;
  box-sizing: content-box
}

devsite-user button.devsite-user-change-account,devsite-user button.devsite-user-signout {
  height: auto;
  color: var(--devsite-primary-text-color)
}

devsite-user button.devsite-user-change-account .material-icons,devsite-user button.devsite-user-signout .material-icons {
  height: auto;
  margin: 0;
  top: auto;
  width: auto
}

devsite-user button.devsite-user-change-account {
  border: 0
}

@media (-webkit-min-device-pixel-ratio: 1.25),(min-resolution:1.25dppx),not all {
  [dir=rtl] devsite-user .gb_xa:before {
      -webkit-transform-origin:right 0;
      transform-origin: right 0
  }
}

devsite-user .devsite-user-dialog {
  display: none
}

devsite-user .devsite-user-dialog a:link,devsite-user .devsite-user-dialog a:visited {
  text-decoration: none
}

devsite-user[dialog--open] .devsite-user-dialog {
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid rgba(0,0,0,.2);
  box-shadow: 0 2px 10px rgba(0,0,0,.2);
  color: rgba(0,0,0,.87);
  display: block;
  max-height: calc(100vh - 86px);
  outline: none;
  overflow: auto;
  position: absolute;
  right: 24px;
  top: 62px;
  width: 354px
}

[dir=rtl] devsite-user[dialog--open] .devsite-user-dialog {
  left: 24px;
  right: auto
}

devsite-user .devsite-user-dialog-photo,devsite-user .devsite-user-dialog-toggle,devsite-user .devsite-user-dialog-toggle .devsite-user-dialog-letter {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 50%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  padding: 0
}

devsite-user .devsite-user-dialog .devsite-user-dialog-photo,devsite-user .devsite-user-dialog-signin .devsite-user-dialog-letter {
  background: var(--devsite-user-avatar-background,var(--devsite-background-color,var(--devsite-primary-color,var(--devsite-primary-text-color))));
  color: var(--devsite-user-avatar-color,var(--devsite-text-color,var(--devsite-inverted-text-color)))
}

devsite-user .devsite-user-dialog-toggle {
  border: 4px solid transparent;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  height: 32px;
  margin: 0 4px 0 0;
  overflow: hidden;
  text-decoration: none;
  width: 32px
}

[dir=rtl] devsite-user .devsite-user-dialog-toggle {
  margin: 0 0 0 4px
}

devsite-user .devsite-user-dialog-toggle:focus {
  border-color: var(--devsite-link-background-active)
}

devsite-user .devsite-user-dialog-photo-thumbnail {
  height: 32px;
  width: 32px
}

devsite-user[js-signin] button {
  box-shadow: none
}

devsite-user[js-signin] .devsite-user-dialog-toggle {
  opacity: 0;
  -webkit-transition: opacity .45s ease;
  transition: opacity .45s ease
}

devsite-user[js-signin] .devsite-user-dialog-toggle.show {
  opacity: 1
}

devsite-user .devsite-user-dialog-toggle .devsite-user-dialog-letter {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 32px;
  -moz-box-flex: 0;
  -ms-flex: 0 0 32px;
  flex: 0 0 32px;
  font-size: 17px;
  height: 32px
}

devsite-user .devsite-user-dialog-learn-more {
  background-color: var(--devsite-link-background-active);
  border-radius: 4px;
  color: var(--devsite-secondary-text-color);
  font: 12px/16px var(--devsite-primary-font-family);
  margin: 4px 4px 0;
  padding: 4px 29px;
  text-align: center
}

devsite-user .devsite-user-dialog-learn-more a,devsite-user .devsite-user-dialog-learn-more span {
  font-weight: 500
}

devsite-user .devsite-user-dialog-learn-more a {
  color: var(--devsite-contrast-link-color)
}

devsite-user .devsite-user-dialog-learn-more a:focus,devsite-user .devsite-user-dialog-learn-more a:hover {
  text-decoration: underline
}

devsite-user .devsite-user-dialog-user {
  background: #fff;
  border-radius: 0 0 16px 16px;
  margin: 0 4px 4px;
  padding: 20px 33px 23px;
  text-align: center
}

devsite-user .devsite-user-dialog-photo {
  left: -2px;
  margin: 0 auto 16px;
  position: relative
}

devsite-user .devsite-user-dialog-photo,devsite-user .devsite-user-dialog-photo-portrait {
  height: 80px;
  width: 80px
}

devsite-user .devsite-user-dialog-letter {
  text-transform: uppercase
}

devsite-user .devsite-user-dialog-photo .devsite-user-dialog-letter {
  font-size: 52px
}

devsite-user .devsite-user-dialog-email,devsite-user .devsite-user-dialog-name {
  overflow: hidden;
  text-overflow: ellipsis
}

devsite-user .devsite-user-dialog-name {
  color: var(--devsite-primary-text-color);
  font: 500 16px/22px var(--devsite-headline-font-family);
  letter-spacing: .29px
}

devsite-user .devsite-user-dialog-email {
  color: var(--devsite-secondary-text-color);
  font: 400 14px/19px var(--devsite-primary-font-family)
}

devsite-user .devsite-user-manage {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: 0;
  border-radius: 17px;
  border: var(--devsite-primary-border);
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font: 500 14px/20px var(--devsite-headline-font-family);
  height: 34px;
  letter-spacing: .25px;
  margin: 16px 0 0;
  padding: 0 16px;
  white-space: nowrap
}

devsite-user .devsite-user-manage:link,devsite-user .devsite-user-manage:visited {
  color: var(--devsite-primary-text-color)
}

devsite-user .devsite-user-manage:focus,devsite-user .devsite-user-manage:hover {
  background-color: var(--devsite-background-2)
}

devsite-user .devsite-user-manage:active {
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);
  background-color: var(--devsite-background-4);
  border-color: transparent
}

devsite-user .devsite-user-dialog-buttons {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-user .devsite-user-dialog .developer-profile:link,devsite-user .devsite-user-dialog .developer-profile:visited,devsite-user .devsite-user-dialog .devsite-user-developer-profile:link,devsite-user .devsite-user-dialog .devsite-user-developer-profile:visited,devsite-user .devsite-user-dialog .devsite-user-signin:link,devsite-user .devsite-user-dialog .devsite-user-signin:visited,devsite-user .devsite-user-signout:link,devsite-user .devsite-user-signout:visited {
  color: var(--devsite-primary-text-color)
}

devsite-user .devsite-user-dialog .developer-profile:focus,devsite-user .devsite-user-dialog .developer-profile:hover,devsite-user .devsite-user-dialog .devsite-user-developer-profile:focus,devsite-user .devsite-user-dialog .devsite-user-developer-profile:hover,devsite-user .devsite-user-dialog .devsite-user-signin:focus,devsite-user .devsite-user-dialog .devsite-user-signin:hover,devsite-user .devsite-user-signout:focus,devsite-user .devsite-user-signout:hover {
  background-color: var(--devsite-background-2)
}

devsite-user .devsite-user-dialog .developer-profile:active,devsite-user .devsite-user-dialog .devsite-user-developer-profile:active,devsite-user .devsite-user-dialog .devsite-user-signin:active,devsite-user .devsite-user-signout:active {
  background-color: var(--devsite-background-4)
}

devsite-user .devsite-user-dialog .devsite-user-developer-profile,devsite-user .devsite-user-dialog .devsite-user-signin {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: 500 14px/16px var(--devsite-headline-font-family);
  letter-spacing: .25px;
  padding: 15px 39px 16px;
  width: 100%
}

devsite-user .devsite-user-dialog-buttons>:first-child {
  border-top: var(--devsite-secondary-border)
}

devsite-user .devsite-user-dialog .devsite-user-signin {
  border-bottom: var(--devsite-secondary-border)
}

devsite-user .devsite-user-dialog .new-notification {
  background: var(--devsite-notification-background);
  border-radius: 10px;
  color: var(--devsite-inverted-text-color);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .3px;
  padding: 2px 8px
}

[dir=ltr] devsite-user .devsite-user-dialog .new-notification {
  margin-left: 12px
}

[dir=rtl] devsite-user .devsite-user-dialog .new-notification {
  margin-right: 12px
}

devsite-user .devsite-user-signin .devsite-switch-account-icon {
  fill: currentColor;
  -webkit-margin-end: 12px;
  -moz-margin-end: 12px;
  margin-inline-end:12px}

devsite-user .devsite-user-developer-profile .google-dev-icon {
  position: relative;
  width: 28px
}

[dir=ltr] devsite-user .devsite-user-developer-profile .google-dev-icon {
  margin-left: -4px;
  margin-right: 8px
}

[dir=rtl] devsite-user .devsite-user-developer-profile .google-dev-icon {
  margin-left: 8px;
  margin-right: -4px
}

devsite-user .devsite-user-signout {
  border-radius: 4px;
  border: var(--devsite-primary-border);
  display: inline-block;
  font: 500 14px/16px var(--devsite-headline-font-family);
  letter-spacing: .15px;
  margin: 16px auto;
  padding: 10px 24px
}

devsite-user .devsite-user-signout:active {
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 2px 6px 2px var(--devsite-elevation-ambient-shadow-color);
  background-color: var(--devsite-background-4);
  border-color: transparent
}

devsite-user .devsite-user-dialog-footer {
  border-top: var(--devsite-secondary-border);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 14px 20px
}

devsite-user .devsite-user-dialog-footer-link {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  margin: 0
}

devsite-user .devsite-user-dialog-footer-link:not(:first-child):before {
  color: var(--devsite-secondary-text-color);
  content: "•";
  font-size: 13px
}

devsite-user .devsite-user-dialog-footer-link>a {
  border-radius: 4px;
  display: inline-block;
  font: 400 12px/16px var(--devsite-primary-font-family);
  padding: 4px 8px
}

devsite-user .devsite-user-dialog-footer-link>a:link,devsite-user .devsite-user-dialog-footer-link>a:visited {
  color: var(--devsite-secondary-text-color)
}

devsite-user .devsite-user-dialog-footer-link>a:focus,devsite-user .devsite-user-dialog-footer-link>a:hover {
  background-color: var(--devsite-background-2)
}

devsite-user .devsite-user-dialog-footer-link>a:active {
  background-color: var(--devsite-background-4)
}

devsite-user .devsite-devprofile-wrapper {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  opacity: 0;
  position: relative
}

devsite-user .devsite-devprofile-wrapper.show {
  opacity: 1;
  -webkit-transition: all .15s cubic-bezier(.4,0,.2,1) 0s;
  transition: all .15s cubic-bezier(.4,0,.2,1) 0s
}

devsite-user .devsite-devprofile-wrapper devsite-spinner {
  margin: 0
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-notifications-indicator {
  background-color: #1a73e8;
  border-radius: 8px;
  height: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
  z-index: 1
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-button {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border: var(--devsite-primary-border);
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 32px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  min-height: 32px;
  min-width: 32px;
  padding: 0;
  position: relative;
  width: 32px;
  --devsite-button-background-active: #e8eaed;
  --devsite-button-background-hover: #e8eaed;
  --devsite-button-border-hover: none;
  --devsite-button-border-radius: 50%;
  --devsite-button-box-shadow: none;
  --devsite-button-box-shadow-active: none
}

devsite-user .devsite-devprofile-wrapper.open .devsite-devprofile-button {
  background: #e8eaed
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout {
  max-width: 378px;
  width: 100vw
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-notch,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout .devsite-devprofile-notch {
  border-bottom: 8px solid var(--devsite-background-1);
  border-left: 9px solid transparent;
  border-right: 9px solid transparent;
  -webkit-clip-path: inset(-8px -8px 0);
  clip-path: inset(-8px -8px 0);
  height: 0;
  position: absolute;
  right: 9px;
  top: -8px;
  width: 0;
  -webkit-filter: drop-shadow(0 1px 2px var(--devsite-elevation-key-shadow-color)) drop-shadow(0 2px 6px var(--devsite-elevation-ambient-shadow-color));
  filter: drop-shadow(0 1px 2px var(--devsite-elevation-key-shadow-color)) drop-shadow(0 2px 6px var(--devsite-elevation-ambient-shadow-color))
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-notch:before {
  background: var(--devsite-background-1)
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout {
  background: var(--devsite-background-1);
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);
  display: none;
  font-family: var(--devsite-primary-font-family);
  margin-right: -2px;
  margin-top: 8px;
  opacity: 0;
  padding: 8px 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 100%;
  -webkit-transform-origin: top right;
  transform-origin: top right;
  -webkit-transform: scale(.8);
  transform: scale(.8);
  -webkit-transition: all .15s cubic-bezier(.4,0,.2,1) 0s;
  transition: all .15s cubic-bezier(.4,0,.2,1) 0s;
  z-index: 1007
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout .devsite-devprofile-notch:before {
  background: var(--devsite-background-1)
}

[dir=rtl] devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout {
  left: 0;
  right: auto
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout.show {
  opacity: 1;
  pointer-events: all;
  -webkit-transform: scale(1);
  transform: scale(1)
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout.visible {
  display: block
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout .devsite-devprofile-notifications-container {
  background-color: #1a73e8;
  border-radius: 16px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  height: 16px;
  line-height: 16px;
  margin-left: 10px;
  padding: 0 5px 0 4px
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout .profile-links-header {
  color: var(--devsite-primary-text-color);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: .8px;
  line-height: 16px;
  padding: 12px 14px;
  text-transform: uppercase
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout .profile-link {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-primary-text-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 14px 16px;
  text-decoration: none
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout .profile-link:hover {
  background: #f1f3f4
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout ul {
  margin: 0;
  padding: 0
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout ul li {
  list-style: none;
  margin: 0;
  padding: 0
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-profile] {
  max-width: 232px
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-bookmarked-pages],devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-rated-pages] {
  background: var(--devsite-link-color);
  color: var(--devsite-inverted-text-color);
  padding: 16px 24px
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-bookmarked-pages] .devsite-devprofile-notch,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-rated-pages] .devsite-devprofile-notch {
  border-bottom: 8px solid var(--devsite-link-color)
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-bookmarked-pages] .devsite-devprofile-notch:before,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-rated-pages] .devsite-devprofile-notch:before {
  background: var(--devsite-link-color)
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-bookmarked-pages] .devsite-devprofile-notch svg g path,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-rated-pages] .devsite-devprofile-notch svg g path {
  fill: var(--devsite-link-color)
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-bookmarked-pages] .buttons,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-rated-pages] .buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-top: 16px
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-bookmarked-pages] .buttons .button:hover,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-rated-pages] .buttons .button:hover {
  --devsite-link-color: #4285f4
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-bookmarked-pages] .button-white,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-rated-pages] .button-white {
  color: var(--devsite-inverted-text-color)
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-bookmarked-pages] .button-white:focus,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-bookmarked-pages] .button-white:hover,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-rated-pages] .button-white:focus,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=view-rated-pages] .button-white:hover {
  background: var(--devsite-link-color);
  color: var(--devsite-button-background-hover)
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=create-profile] {
  font-family: var(--devsite-primary-font-family);
  padding: 12px 20px
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=create-profile] .devsite-devprofile-callout-logo {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 36px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 20px 0
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=create-profile] .devsite-devprofile-callout-subhead {
  color: var(--devsite-primary-text-color);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: .1px;
  line-height: 24px;
  margin-bottom: 8px;
  text-align: center
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=create-profile] .devsite-devprofile-callout-body {
  font-size: 14px;
  margin-bottom: 24px
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout[popup-type=create-profile] .devsite-devprofile-callout-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout {
  background: var(--devsite-background-1);
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);
  font-family: var(--devsite-headline-font-family);
  margin-top: 8px;
  max-width: 378px;
  opacity: 1;
  padding: 16px;
  position: absolute;
  right: -2px;
  top: 100%;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all .15s cubic-bezier(.4,0,.2,1) 0s;
  transition: all .15s cubic-bezier(.4,0,.2,1) 0s;
  width: 100vw
}

[dir=rtl] devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout {
  left: 0;
  right: auto
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout.hide {
  opacity: 0;
  -webkit-transform-origin: top right;
  transform-origin: top right;
  -webkit-transform: scale(.8);
  transform: scale(.8)
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-error,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-step1,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-step2,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-step3,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-step4 {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-step3 {
  padding: 24px 0
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-logo {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-logo svg {
  width: 74px
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout h4 {
  color: var(--devsite-primary-text-color);
  font-size: 16px;
  letter-spacing: .1px;
  line-height: 24px;
  margin: 20px 0 8px;
  padding: 0;
  text-align: left
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout p {
  color: var(--devsite-primary-text-color);
  font-size: 14px;
  letter-spacing: .25px;
  line-height: 20px;
  margin: 0;
  padding: 0
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .account-note,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .sub-text,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .tos {
  color: var(--devsite-secondary-text-color);
  font: 400 12px/16px var(--devsite-primary-font-family);
  letter-spacing: .3px
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .sub-text,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .tos {
  font-size: 14px
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .sub-text {
  -webkit-padding-start: 16px;
  -moz-padding-start: 16px;
  padding-inline-start:16px}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-newsletter,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-occupation {
  margin-bottom: 16px;
  width: 100%
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-newsletter label,devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-occupation label {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: var(--devsite-primary-text-color);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  letter-spacing: .25px;
  line-height: 16px
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -moz-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-top: 24px;
  width: 100%
}

devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout .devsite-devprofile-callout-buttons .button-dismiss {
  --devsite-button-background-active: #fff;
  --devsite-button-background-hover: #fff;
  --devsite-button-border: 0;
  --devsite-button-border-active: 0;
  --devsite-button-border-hover: 0;
  --devsite-button-box-shadow-active: none
}

@media screen and (max-width: 840px) {
  devsite-user[dialog--open] .devsite-user-dialog {
      right:16px
  }

  [dir=rtl] devsite-user[dialog--open] .devsite-user-dialog {
      left: 16px;
      right: auto
  }

  devsite-user .devsite-devprofile-wrapper .devsite-devprofile-callout {
      max-width: calc(100vw - 80px)
  }

  devsite-user .devsite-devprofile-wrapper .devsite-devprofile-popout {
      max-width: calc(100vw - 64px)
  }
}

devsite-var {
  position: relative;
  white-space: nowrap
}

devsite-var .devsite-var-input-wrapper {
  bottom: -2px;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  display: none;
  left: -4px;
  position: absolute;
  width: 100%
}

devsite-var[active] .devsite-var-input-wrapper {
  display: inline-block
}

devsite-selector devsite-var .devsite-var-input-wrapper {
  bottom: -3px
}

table devsite-var .devsite-var-input-wrapper {
  bottom: -3px
}

devsite-code devsite-var .devsite-var-input-wrapper {
  bottom: -2px
}

devsite-var .devsite-var-input-wrapper+var {
  border-bottom: 1px dotted var(--devsite-var-color);
  cursor: pointer
}

devsite-var input.devsite-var-input {
  border: 1px solid #80868b;
  font-family: inherit;
  font-size: inherit;
  padding: 1px 3px 0;
  width: inherit
}

devsite-var input.devsite-var-input:focus {
  border-bottom: 1px solid #80868b;
  padding-bottom: 0
}

devsite-var button.devsite-icon-edit {
  color: var(--devsite-var-color);
  margin: 0 0 2px 5px
}

devsite-var .material-icons.devsite-icon-edit {
  vertical-align: middle
}

devsite-var .devsite-icon-close {
  bottom: 0;
  position: absolute;
  right: -4px;
  top: 0
}

devsite-var .devsite-icon-close,devsite-var .devsite-icon-close:hover {
  color: #202124
}

devsite-var .devsite-var-wrapper .material-icons {
  background: none;
  border: none;
  font-size: inherit;
  height: inherit;
  min-width: inherit;
  padding: 0
}

devsite-var .devsite-var-wrapper .material-icons:active {
  box-shadow: none
}

devsite-var .devsite-var-wrapper .material-icons:hover {
  cursor: pointer
}

devsite-version-selector {
  display: block;
  padding: 0 24px
}

devsite-version-selector .devsite-version-selector-select {
  width: 100%
}

.devsite-future-version,.devsite-future-version * {
  color: var(--devsite-tertiary-text-rgba);
  text-decoration: none
}

devsite-video {
  aspect-ratio: 16/9;
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%
}

devsite-video .devsite-video-placeholder img,devsite-video .devsite-video-placeholder span,devsite-video iframe {
  position: absolute
}

devsite-video iframe {
  height: 101%;
  left: -.5%;
  top: -.5%;
  width: 101%
}

devsite-video .devsite-video-placeholder span {
  color: var(--devsite-primary-text-color);
  padding: 8px
}

devsite-video .devsite-basic-video-player {
  border: 0;
  height: 100%;
  position: absolute;
  width: 100%
}

.devsite-view-release-notes-dialog-container {
  height: 80%;
  width: 720px
}

devsite-view-release-notes {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-view-release-notes .view-notes-link {
  font: 14px/20px var(--devsite-primary-font-family)
}

.devsite-page-date+devsite-view-release-notes[data-shown]:before {
  color: #5f6368;
  content: "|";
  margin-inline:8px}

devsite-view-release-notes-dialog {
  color: #000;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding: 15px
}

[appearance=dark] devsite-view-release-notes-dialog {
  color: #fff
}

devsite-view-release-notes-dialog .devsite-dialog-header {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 10px
}

devsite-view-release-notes-dialog .devsite-dialog-header .title {
  text-align: initial
}

devsite-view-release-notes-dialog .devsite-dialog-header devsite-dropdown-list {
  -webkit-align-self: end;
  -ms-flex-item-align: end;
  align-self: end;
  border: var(--devsite-primary-border);
  border-radius: 5px;
  height: -webkit-min-content;
  height: -moz-min-content;
  height: min-content;
  font-weight: 500;
  --devsite-bookmark-icon-arrow-color: #5f6368;
  --devsite-button-width: 144px;
  --devsite-dropdown-list-border-radius: 2px;
  --devsite-dropdown-list-toggle-border-radius: 4px;
  --devsite-dropdown-list-min-width: 144px;
  --devsite-dropdown-list-toggle-background-hover: var(--devsite-background-3);
  --devsite-dropdown-list-toogle-button-justify-content: space-between;
  --devsite-dropdown-list-toggle-button-padding: 8px 16px
}

devsite-view-release-notes-dialog .devsite-dialog-header .chip-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 4px
}

devsite-view-release-notes-dialog .devsite-dialog-header .selected-date-toggle {
  color: #1a73e8;
  line-height: 10px;
  margin: 0;
  margin-right: 8px
}

[appearance=dark] devsite-view-release-notes-dialog .devsite-dialog-header .selected-date-toggle {
  color: #8ab4f8
}

devsite-view-release-notes-dialog .devsite-dialog-contents {
  border: var(--devsite-primary-border);
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow-y: scroll
}

devsite-view-release-notes-dialog .devsite-dialog-contents .release-note-date-section {
  margin-bottom: 24px
}

devsite-view-release-notes-dialog .devsite-dialog-contents .release-note-date-section .release-note-date-header {
  text-align: left;
  font-size: 18px;
  margin-bottom: 12px;
  margin-top: 0
}

devsite-view-release-notes-dialog .devsite-dialog-contents .release-note-date-section .release-note {
  -webkit-box-align: baseline;
  -webkit-align-items: baseline;
  -moz-box-align: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-view-release-notes-dialog .devsite-dialog-contents .release-note .release-note-content {
  color: #000;
  padding: 0 8px
}

[appearance=dark] devsite-view-release-notes-dialog .devsite-dialog-contents .release-note .release-note-content {
  color: #fff
}

devsite-view-release-notes-dialog .release-note-type-chip {
  border-radius: 20px;
  font-weight: 700
}

devsite-view-release-notes-dialog .release-note-type-chip.large {
  font-size: 12px;
  padding: 4px 14px
}

devsite-view-release-notes-dialog .release-note-type-chip.large.green {
  background: #137333;
  color: #fff
}

devsite-view-release-notes-dialog .release-note-type-chip.large.yellow {
  background: #ea8600;
  color: #fff
}

devsite-view-release-notes-dialog .release-note-type-chip.large.blue {
  background: #185abc;
  color: #fff
}

devsite-view-release-notes-dialog .release-note-type-chip.large.red {
  background: #b31412;
  color: #fff
}

devsite-view-release-notes-dialog .release-note-type-chip.large.orange {
  background: #c26401;
  color: #fff
}

devsite-view-release-notes-dialog .release-note-type-chip.large.grey {
  background: #3c4043;
  color: #fff
}

devsite-view-release-notes-dialog .release-note-type-chip.small {
  font-size: 12px;
  padding: 0 8px
}

devsite-view-release-notes-dialog .release-note-type-chip.small.green {
  background: #e6f4ea;
  color: #137333
}

devsite-view-release-notes-dialog .release-note-type-chip.small.yellow {
  background: #fef7e0;
  color: #ea8600
}

devsite-view-release-notes-dialog .release-note-type-chip.small.blue {
  background: #e8f0fe;
  color: #185abc
}

devsite-view-release-notes-dialog .release-note-type-chip.small.red {
  background: #fce8e6;
  color: #b31412
}

devsite-view-release-notes-dialog .release-note-type-chip.small.orange {
  background: #feefe3;
  color: #c26401
}

devsite-view-release-notes-dialog .release-note-type-chip.small.grey {
  background: #f8f9fa;
  color: #3c4043
}

devsite-view-release-notes-dialog .devsite-dialog-footer {
  padding: 10px 0 0
}

devsite-view-release-notes-dialog .devsite-dialog-footer .devsite-dialog-close {
  color: #4285f4
}

devsite-visibility-analytics[counterfactual] {
  display: block;
  height: 1px;
  opacity: 0
}

devsite-visibility-analytics[counterfactual] * {
  display: none
}

devsite-vplus .devsite-vplus-content-container {
  border: 1px solid #000;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  visibility: hidden
}

devsite-vplus .devsite-vplus-slide-frame {
  height: 100%;
  left: 0;
  overflow: auto;
  position: absolute;
  top: 0;
  width: 100%
}

devsite-vplus .devsite-vplus-video {
  bottom: 0;
  height: 26%;
  position: absolute;
  right: 0;
  -webkit-transition: width 1.3s ease,height 1.3s ease,position 1.3s ease;
  transition: width 1.3s ease,height 1.3s ease,position 1.3s ease;
  width: 26%;
  z-index: 1
}

devsite-vplus .devsite-vplus-video.devsite-vplus-large {
  height: 100%;
  width: 100%
}

devsite-vplus .devsite-vplus-video-container {
  bottom: 0;
  cursor: pointer;
  height: 26%;
  position: absolute;
  right: 0;
  -webkit-transition: width 1.3s ease,height 1.3s ease,position 1.3s ease;
  transition: width 1.3s ease,height 1.3s ease,position 1.3s ease;
  width: 26%;
  z-index: 1
}

devsite-vplus .devsite-vplus-video-container.devsite-vplus-large {
  height: 100%;
  width: 100%
}

devsite-vplus .devsite-vplus-video-container>video {
  width: 100%
}

@media (max-width: 1049px) {
  #video-caption-container span {
      font-size:1.9vw
  }
}

@media (min-width: 1050px) {
  #video-caption-container span {
      font-size:1.1vw
  }
}

devsite-vplus .devsite-vplus-controls {
  background-color: #fff;
  border-radius: 6px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  margin: 0 auto;
  max-width: 490px;
  padding: 6px;
  text-align: center
}

devsite-vplus .devsite-vplus-controls-text {
  font-size: 16px;
  font-style: normal;
  font-weight: 700
}

devsite-vplus .devsite-vplus-slide-status {
  margin: auto
}

devsite-vplus .devsite-vplus-slide-status span {
  font-size: 18px
}

devsite-vplus .devsite-vplus-slide-status span:not(:first-of-type) {
  padding-left: 5px
}

devsite-vplus .devsite-vplus-player-controls {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: 8px 16px
}

devsite-vplus .devsite-vplus-control-button {
  cursor: pointer;
  box-shadow: none;
  height: 43px;
  padding-top: 0;
  width: 50px
}

devsite-vplus .devsite-vplus-control-button:hover {
  box-shadow: 0 2px 4px #9aa0a6;
  border-radius: 4px
}

devsite-vplus .devsite-vplus-video-controls-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

devsite-vplus .devsite-vplus-play-icon {
  margin-left: 0
}

devsite-vplus .devsite-vplus-pause-icon {
  margin-left: 0
}

devsite-vplus .devsite-vplus-play-button {
  padding-left: 0;
  margin-left: 16px;
  width: 50px
}

devsite-vplus .devsite-vplus-next-button {
  padding-left: 0;
  margin-left: 16px;
  width: 50px
}

devsite-vplus .devsite-vplus-triangle {
  border-style: solid;
  height: 0;
  margin: auto;
  position: relative;
  width: 0
}

devsite-vplus .devsite-vplus-back {
  border-color: transparent #174ea6 transparent transparent;
  border-width: 8px 16px 8px 0
}

devsite-vplus .devsite-vplus-back-triangle-1 {
  left: -8px;
  top: 15px
}

devsite-vplus .devsite-vplus-back-triangle-2 {
  left: 8px;
  top: -1px
}

devsite-vplus .devsite-vplus-forward-single {
  border-color: transparent transparent transparent #174ea6;
  border-width: 16px 0 16px 25px;
  top: 5px
}

devsite-vplus .devsite-vplus-forward {
  border-color: transparent transparent transparent #174ea6;
  border-width: 8px 0 8px 16px;
  top: 5px
}

devsite-vplus .devsite-vplus-forward-triangle-1 {
  left: -8px;
  top: 15px
}

devsite-vplus .devsite-vplus-forward-triangle-2 {
  left: 8px;
  top: -1px
}

devsite-vplus .devsite-vplus-pause {
  background-color: #174ea6;
  height: 30px;
  width: 9px
}

devsite-vplus .devsite-vplus-rect-1 {
  left: 12px;
  position: relative;
  top: 6px
}

devsite-vplus .devsite-vplus-rect-2 {
  left: 29px;
  position: relative;
  top: -24px
}

devsite-vplus .devsite-vplus-playbackrate select:hover {
  box-shadow: 0 2px 4px #9aa0a6
}

devsite-vplus .devsite-vplus-playbackrate .material-icons {
  margin-top: 10px
}

devsite-vplus .devsite-vplus-playbackrate select {
  border-color: transparent;
  font-size: 18px;
  height: 46px;
  padding-bottom: 2px;
  padding-top: 2px;
  -moz-text-align-last: center;
  text-align-last: center;
  text-transform: none
}

devsite-vplus .devsite-vplus-caption-control-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 8px
}

devsite-vplus .devsite-vplus-caption-control {
  background-color: #174ea6;
  border: 0;
  border-radius: 16px;
  color: var(--devsite-inverted-text-color);
  display: inline-block;
  height: 35px;
  line-height: 39px;
  margin-right: 10px;
  margin-top: 1px;
  padding: 0;
  text-align: center;
  text-decoration: none;
  text-indent: 0;
  vertical-align: 10%;
  width: 50px
}

devsite-vplus .devsite-vplus-captions-off {
  background-color: #fff;
  color: #174ea6
}

devsite-vplus .devsite-vplus-controls .devsite-vplus-control-button.disabled {
  background-color: transparent
}

devsite-vplus .devsite-vplus-prev-button.disabled .devsite-vplus-triangle {
  border-right-color: #94969a
}

devsite-vplus .devsite-vplus-prev-button:hover:not(.disabled) .devsite-vplus-triangle {
  border-right-color: #18345c
}

devsite-vplus .devsite-vplus-next-button:hover:not(.disabled) .devsite-vplus-triangle {
  border-right-color: #18345c
}

devsite-vplus .devsite-vplus-next-button.disabled .devsite-vplus-triangle {
  border-left-color: #94969a
}

.next-button:hover:not(.disabled) .devsite-vplus-triangle,devsite-vplus .devsite-vplus-play-button:hover:not(.disabled) .devsite-vplus-triangle {
  border-left-color: #18345c
}

devsite-vplus .devsite-vplus-navigation-button-container {
  margin: 0 auto;
  text-align: center
}

devsite-vplus .devsite-vplus-navigation-button-link {
  text-decoration: none
}

devsite-vplus .devsite-vplus-navigation-button {
  background-color: #174ea6;
  box-shadow: 0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);
  color: var(--devsite-inverted-text-color);
  display: inline-block;
  font-size: 16px;
  margin: 12px 36px;
  padding: 12px 36px
}

devsite-vplus .devsite-vplus-addendums {
  border-top: 0;
  border: 1px solid #000;
  cursor: pointer
}

devsite-vplus .devsite-vplus-addendums-header {
  background-color: var(--devsite-background-5);
  outline: none;
  padding: 8px 8px 8px 0;
  width: 100%
}

devsite-vplus .devsite-vplus-addendums-control {
  cursor: pointer;
  display: table-cell;
  vertical-align: middle
}

devsite-vplus .devsite-vplus-addendums-control .material-icons.devsite-vplus-caption-button {
  cursor: pointer
}

devsite-vplus .devsite-vplus-addendums-control>div {
  white-space: nowrap;
  margin-left: 8px;
  margin-right: 8px
}

devsite-vplus .devsite-vplus select {
  outline: 2px
}

devsite-vplus .devsite-vplus select:hover,devsite-vplus .devsite-vplus-notes-control>div>div:hover,devsite-vplus .devsite-vplus-transcript-control>div>div:hover {
  box-shadow: 0 2px 4px #9aa0a6;
  background-color: #e4f7fb
}

devsite-vplus .devsite-vplus select:focus {
  background-color: #e4f7fb
}

devsite-vplus .devsite-vplus-addendums-control.devsite-vplus-search-widget>div {
  margin-left: 0;
  margin-right: 0
}

devsite-vplus .devsite-vplus-addendums-label {
  white-space: nowrap
}

devsite-vplus .devsite-vplus-addendums-control .devsite-hidden {
  display: none
}

devsite-vplus .devsite-vplus-notes-control .devsite-vplus-addendums-closed,devsite-vplus .devsite-vplus-notes-control .devsite-vplus-addendums-opened,devsite-vplus .devsite-vplus-transcript-control .devsite-vplus-addendums-closed,devsite-vplus .devsite-vplus-transcript-control .devsite-vplus-addendums-opened {
  display: none
}

devsite-vplus .devsite-vplus-notes-control.goog-zippy-collapsed .devsite-vplus-addendums-closed,devsite-vplus .devsite-vplus-notes-control.goog-zippy-expanded .devsite-vplus-addendums-opened,devsite-vplus .devsite-vplus-transcript-control.goog-zippy-collapsed .devsite-vplus-addendums-closed,devsite-vplus .devsite-vplus-transcript-control.goog-zippy-expanded .devsite-vplus-addendums-opened {
  display: inline
}

devsite-vplus .devsite-vplus-search-widget {
  background: var(--devsite-background-3);
  padding: 2px 4px;
  position: relative;
  width: 100%
}

devsite-vplus .devsite-vplus-search-widget>div {
  width: 100%
}

devsite-vplus .devsite-vplus-search-input {
  background-color: transparent;
  border-width: 0;
  font-size: 14px;
  width: 100%
}

devsite-vplus .devsite-vplus-search-input:hover {
  box-shadow: 0 2px 4px #9aa0a6
}

devsite-vplus .devsite-vplus-search-autocomplete {
  position: relative;
  white-space: normal;
  width: 100%;
  z-index: 1
}

devsite-vplus .devsite-vplus-search-autocomplete .ac-renderer {
  background: var(--devsite-background-1);
  border: 1px solid var(--devsite-secondary-text-color);
  box-shadow: 2px 2px 2px hsla(0,0%,40%,.4);
  font: normal 13px Arial,sans-serif;
  position: absolute;
  width: 100%
}

devsite-vplus .devsite-vplus-search-autocomplete .ac-row {
  cursor: pointer;
  padding: 6px
}

devsite-vplus .devsite-vplus-search-autocomplete .ac-highlighted {
  font-weight: 700
}

devsite-vplus .devsite-vplus-search-autocomplete .ac-active {
  background-color: #bdc1c6
}

devsite-vplus .devsite-vplus-addendums-control div.devsite-vplus-captions-language-selector-wrapper,devsite-vplus .devsite-vplus-addendums-control div.devsite-vplus-video-language-selector-wrapper {
  display: inline-block;
  height: auto;
  margin-right: 2px;
  padding: 0;
  vertical-align: bottom
}

devsite-vplus .devsite-vplus-captions-language-selector-wrapper .material-icons,devsite-vplus .devsite-vplus-video-language-selector-wrapper .material-icons {
  vertical-align: middle
}

devsite-vplus .devsite-vplus-captions-language-selector-wrapper:focus-within .material-icons,devsite-vplus .devsite-vplus-video-language-selector-wrapper:focus-within .material-icons {
  display: none
}

devsite-vplus .devsite-vplus-captions-language-selector-wrapper select,devsite-vplus .devsite-vplus-video-language-selector-wrapper select {
  background-color: var(--devsite-background-5);
  min-width: 0;
  padding-right: 16px;
  width: 0
}

devsite-vplus .devsite-vplus-captions-language-selector-wrapper select:focus,devsite-vplus .devsite-vplus-video-language-selector-wrapper select:focus {
  outline: 5px auto -webkit-focus-ring-color;
  padding-right: 27px;
  width: auto
}

devsite-vplus .devsite-vplus-captions-language-selector-wrapper select.kd-select,devsite-vplus .devsite-vplus-video-language-selector-wrapper select.kd-select {
  border-color: transparent;
  font-size: small;
  height: auto;
  padding-bottom: 2px;
  padding-top: 2px;
  -moz-text-align-last: right;
  text-align-last: right
}

devsite-vplus .devsite-vplus-addendums-opened .material-icons {
  width: 1em
}

devsite-vplus .devsite-vplus-addendums-closed .material-icons {
  background-color: #bdc1c6;
  color: var(--devsite-inverted-text-color);
  width: 1em
}

devsite-vplus .devsite-vplus-notes {
  border-top: 1 solid #000;
  height: 100px;
  margin: 0;
  overflow: auto;
  padding: 16px;
  position: relative;
  resize: vertical;
  width: 100%
}

devsite-vplus .devsite-vplus-transcript-captions {
  border-top: 1 solid #000;
  height: 4.5em;
  margin: 0;
  overflow: auto;
  padding: 0;
  position: relative;
  resize: vertical;
  width: 100%
}

devsite-vplus .devsite-vplus-transcript-captions table {
  border-collapse: separate;
  margin: 0
}

devsite-vplus .devsite-vplus-transcript-caption {
  padding: .15em 1em;
  width: 100%
}

devsite-vplus .devsite-vplus-transcript-slide-separator {
  font-weight: 700;
  font-style: italic
}

devsite-vplus .devsite-vplus-transcript-slide-separator hr {
  padding: 1px 0
}

devsite-vplus .devsite-vplus-transcript-caption:focus {
  outline-offset: -3px
}

devsite-vplus .devsite-vplus-transcript-caption td {
  background-color: #fff;
  border-color: #fff;
  padding: 0 .25em;
  text-shadow: 0 0 0 currentColor
}

devsite-vplus .devsite-vplus-transcript-caption:hover td {
  text-shadow: .5px 0 .1px #5f6368,-.5px 0 .1px #5f6368
}

devsite-vplus .devsite-vplus-transcript-caption:hover .devsite-vplus-transcript-caption-bullet {
  visibility: visible
}

devsite-vplus .devsite-vplus-transcript-caption.devsite-vplus-caption-highlighted td {
  background-color: #fdd663
}

devsite-vplus .devsite-vplus-transcript-caption .devsite-vplus-transcript-caption-bullet {
  padding: 0 0 0 4px;
  visibility: hidden
}

devsite-vplus .devsite-vplus-transcript-caption-time {
  font-weight: lighter;
  min-width: 2.5em;
  text-align: right
}

devsite-vplus .devsite-vplus-transcript-caption-text {
  width: 100%
}

devsite-vplus .devsite-vplus-fullscreen-icon {
  color: #174ea6;
  padding: 0;
  text-overflow: inherit;
  text-transform: none
}

devsite-vplus .devsite-hidden {
  display: none
}

devsite-youtube {
  aspect-ratio: 16/9;
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%
}

devsite-youtube .devsite-video-placeholder img,devsite-youtube .devsite-video-placeholder span,devsite-youtube iframe {
  position: absolute
}

devsite-youtube iframe {
  height: 101%;
  left: -.5%;
  top: -.5%;
  width: 101%
}

devsite-youtube .devsite-video-placeholder span {
  color: var(--devsite-primary-text-color);
  padding: 8px
}

devsite-youtube .devsite-basic-video-player {
  border: 0;
  height: 100%;
  position: absolute;
  width: 100%
}

body[codelabs-content-type=paginated] google-codelab {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template: 64px 1fr 56px/256px 1fr;
  grid-template-areas: "title title" "drawer  main" "metadata  main"
}

body[codelabs-content-type=paginated] google-codelab #main {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  grid-area: main;
  position: relative;
  background: #f8f9fa
}

body[codelabs-content-type=paginated] google-codelab #codelab-title {
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);
  color: #3c4043;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  grid-area: title;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 64px;
  padding: 0 36px 0 16px;
  -webkit-font-smoothing: antialiased;
  z-index: 1000;
  max-width: 100vw
}

body[codelabs-content-type=paginated] google-codelab #codelab-title h1 {
  font-size: 20px;
  font-weight: 400;
  margin: 0 8px;
  font-family: Roboto,Noto,sans-serif;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 0;
  display: inline-block
}

body[codelabs-content-type=paginated] google-codelab #codelab-title h1 a {
  color: #3c4043;
  text-decoration: none
}

body[codelabs-content-type=paginated] google-codelab #codelab-title h1 a:focus,body[codelabs-content-type=paginated] google-codelab #codelab-title h1 a:hover {
  color: #212121;
  text-decoration: underline
}

body[codelabs-content-type=paginated] google-codelab #codelab-title .time-remaining {
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -moz-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap
}

body[codelabs-content-type=paginated] google-codelab #codelab-title .time-remaining i {
  margin-right: 3px
}

body[codelabs-content-type=paginated] google-codelab #codelab-nav-buttons {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -moz-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0
}

body[codelabs-content-type=paginated] google-codelab #codelab-nav-buttons #arrow-back,body[codelabs-content-type=paginated] google-codelab #codelab-nav-buttons #menu {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  text-decoration: none;
  color: #3c4043;
  width: 40px;
  height: 40px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

body[codelabs-content-type=paginated] google-codelab #controls {
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  padding: 0 32px;
  z-index: 1001
}

body[codelabs-content-type=paginated] google-codelab #fabs {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1025px
}

body[codelabs-content-type=paginated] google-codelab #done,body[codelabs-content-type=paginated] google-codelab #next-step,body[codelabs-content-type=paginated] google-codelab #previous-step {
  border-radius: 4px;
  font-family: Google Sans,Arial,sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .6px;
  line-height: 24px;
  padding-bottom: 6px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 6px;
  pointer-events: auto;
  text-transform: none;
  background: #fff;
  color: #1a73e8;
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: -webkit-transform .3s ease-in-out;
  transition: -webkit-transform .3s ease-in-out;
  transition: transform .3s ease-in-out;
  transition: transform .3s ease-in-out,-webkit-transform .3s ease-in-out;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2);
  text-decoration: none;
  -webkit-font-smoothing: antialiased
}

body[codelabs-content-type=paginated] google-codelab #next-step {
  color: #fff;
  background: #1a73e8
}

body[codelabs-content-type=paginated] google-codelab #done {
  background: #1e8e3e;
  color: #fff
}

body[codelabs-content-type=paginated] google-codelab #fabs a[disappear] {
  -webkit-transform: scale(0);
  transform: scale(0)
}

body[codelabs-content-type=paginated] google-codelab #done {
  background: #0f9d58
}

body[codelabs-content-type=paginated] google-codelab #drawer .codelab-time-container {
  display: none
}

body[codelabs-content-type=paginated] google-codelab .metadata {
  background: #f8f9fa;
  color: #777;
  font-size: 14px;
  grid-area: metadata;
  padding: 16px
}

body[codelabs-content-type=paginated] google-codelab .metadata a {
  color: currentcolor;
  margin-left: 4px
}

body[codelabs-content-type=paginated] google-codelab .metadata a:focus,body[codelabs-content-type=paginated] google-codelab .metadata a:hover {
  color: #212121
}

@media (max-width: 768px) {
  body[codelabs-content-type=paginated] google-codelab {
      grid-template:64px 1fr 56px/1fr;
      grid-template-areas: "title" "main" "metadata";
      padding-top: 0
  }

  body[codelabs-content-type=paginated] google-codelab #codelab-title {
      padding: 0 16px
  }

  body[codelabs-content-type=paginated] google-codelab #codelab-title .codelab-time-container {
      display: none
  }
}

body[codelabs-content-type=paginated] google-codelab #drawer {
  width: 256px;
  grid-area: drawer;
  position: relative;
  z-index: 100;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background: #f8f9fa;
  overflow: auto
}

body[codelabs-content-type=paginated] google-codelab #drawer .steps {
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  overflow-x: visible;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

body[codelabs-content-type=paginated] google-codelab #drawer .steps:only-child {
  max-height: 100%
}

body[codelabs-content-type=paginated] google-codelab #drawer ol {
  margin: 0;
  padding: 16px 12px;
  counter-reset: li-count;
  list-style: none;
  overflow-x: visible;
  overflow-y: auto;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li {
  display: block;
  counter-increment: li-count
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li a {
  text-decoration: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
  color: #80868b;
  padding: 3px 10px;
  min-height: 48px;
  font-weight: 400;
  line-height: 20px;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  position: relative;
  font-family: Roboto,Noto,sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
  border: 1px solid #dadce0;
  border-radius: 5px;
  margin: 6px 0;
  background: #fff
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li a:active,body[codelabs-content-type=paginated] google-codelab #drawer ol li a:focus {
  background: #c6c6c6;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
  border-color: #c6c6c6!important
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li a .step {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li .step:before {
  content: counter(li-count);
  display: inline-block;
  font-style: normal;
  width: 26px;
  min-width: 26px;
  color: #fff;
  background: #80868b;
  border-radius: 50%;
  text-align: center;
  height: 26px;
  vertical-align: middle;
  line-height: 26px;
  margin-right: 8px;
  font-weight: 400;
  position: relative;
  z-index: 2;
  -webkit-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li a:focus,body[codelabs-content-type=paginated] google-codelab #drawer ol li[selected] a {
  color: #212121;
  font-weight: 600;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li[selected] a {
  border-color: #fff
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li[selected] .step:before {
  font-weight: 600
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li[completed] a {
  color: #212121
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li[completed] .step:before {
  background-color: #1a73e8;
  color: #fff
}

body[codelabs-content-type=paginated] google-codelab #codelab-nav-buttons #menu {
  display: none
}

body[codelabs-content-type=paginated] google-codelab #drawer ol ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px
}

body[codelabs-content-type=paginated] google-codelab #drawer ol ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0,0,0,.5);
  -webkit-box-shadow: 0 0 1px hsla(0,0%,100%,.5)
}

@media (max-width: 768px) {
  body[codelabs-content-type=paginated] google-codelab #codelab-nav-buttons #arrow-back {
      display:none
  }

  body[codelabs-content-type=paginated] google-codelab #codelab-nav-buttons #menu {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex
  }

  body[codelabs-content-type=paginated] google-codelab #drawer {
      grid-area: auto;
      width: 256px;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 10000;
      will-change: transform;
      box-shadow: 2px 2px 4px transparent;
      pointer-events: none;
      -webkit-transform: translate3d(-100%,0,0);
      transform: translate3d(-100%,0,0);
      -webkit-transition: box-shadow .3s,-webkit-transform .3s ease-in-out;
      transition: box-shadow .3s,-webkit-transform .3s ease-in-out;
      transition: transform .3s ease-in-out,box-shadow .3s;
      transition: transform .3s ease-in-out,box-shadow .3s,-webkit-transform .3s ease-in-out
  }

  body[codelabs-content-type=paginated] google-codelab[drawer--open] #drawer {
      box-shadow: 2px 2px 4px rgba(0,0,0,.15);
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      pointer-events: all
  }

  body[codelabs-content-type=paginated] google-codelab #main:before {
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      position: absolute;
      -webkit-transition: opacity .38s ease-in-out;
      transition: opacity .38s ease-in-out;
      background-color: rgba(0,0,0,.3);
      z-index: 10;
      pointer-events: none;
      opacity: 0
  }

  body[codelabs-content-type=paginated] google-codelab[drawer--open] #main:before {
      opacity: 1;
      pointer-events: all
  }

  body[codelabs-content-type=paginated] google-codelab #drawer .codelab-time-container {
      display: block;
      padding: 20px 10px 10px 23px
  }

  body[codelabs-content-type=paginated] google-codelab #drawer .time-remaining i {
      margin-right: 9px
  }
}

body[codelabs-content-type=paginated] google-codelab #steps {
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}

body[codelabs-content-type=paginated] google-codelab google-codelab-step {
  display: none;
  width: 100%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 32px;
  overflow-y: auto;
  overflow-x: hidden
}

body[codelabs-content-type=paginated] google-codelab google-codelab-step[animating],body[codelabs-content-type=paginated] google-codelab google-codelab-step[selected] {
  display: block;
  -webkit-transform-origin: 0 50% 0;
  transform-origin: 0 50% 0;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both
}

body[codelabs-content-type=paginated] google-codelab google-codelab-step[animating] {
  pointer-events: none;
  position: absolute;
  overflow: hidden
}

@media (max-width: 768px) {
  body[codelabs-content-type=paginated] google-codelab google-codelab-step {
      padding-top:8px
  }
}

body[codelabs-content-type=paginated] google-codelab #drawer ol li {
  padding: 0;
  margin: 0
}

body[codelabs-content-type=paginated] google-codelab {
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0
}

body[codelabs-content-type=paginated] google-codelab #codelab-title h1 {
  width: auto;
  color: #3c4043;
  top: 0
}

body[codelabs-content-type=paginated] google-codelab .title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin-left: 10px;
  overflow: hidden
}

body[codelabs-content-type=paginated] google-codelab .no-return-url {
  display: none!important
}

body[codelabs-content-type=paginated] google-codelab #drawer .metadata .material-icons,body[codelabs-content-type=paginated] google-codelab-about .about-card .material-icons {
  top: 0!important
}

body[codelabs-content-type=paginated] body[template=codelab] devsite-footer-utility .devsite-footer-utility-button>a,body[codelabs-content-type=paginated] google-codelab .button-blue,body[codelabs-content-type=paginated] google-codelab .button-green,body[codelabs-content-type=paginated] google-codelab .button-primary,body[codelabs-content-type=paginated] google-codelab .button-red {
  color: #fff!important
}

body[codelabs-content-type=paginated] google-codelab #codelab-title devsite-language-selector {
  margin: 0 16px
}

body[codelabs-content-type=paginated] google-codelab #controls devsite-language-selector {
  background: var(--devsite-background-1);
  display: none
}

@media screen and (max-width: 840px) {
  body[codelabs-content-type=paginated] google-codelab #codelab-title devsite-language-selector {
      margin:0 8px
  }
}

@media screen and (max-width: 600px) {
  body[codelabs-content-type=paginated] google-codelab #codelab-title devsite-language-selector {
      display:none
  }

  body[codelabs-content-type=paginated] google-codelab #controls devsite-language-selector {
      display: block
  }

  body[codelabs-content-type=paginated] google-codelab #main #controls {
      padding: 0 8px
  }

  body[codelabs-content-type=paginated] google-codelab #controls .spacer {
      display: -webkit-box;
      display: -webkit-flex;
      display: -moz-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -moz-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center
  }
}

[dir=ltr] body[codelabs-content-type=paginated][concierge] google-codelab #main {
  margin-right: var(--devsite-concierge-width,0)
}

[dir=rtl] body[codelabs-content-type=paginated][concierge] google-codelab #main {
  margin-left: var(--devsite-concierge-width,0)
}

body[codelabs-content-type=paginated] {
  color: #4e5256;
  font-family: var(--devsite-primary-font-family);
  overflow: hidden
}

body[codelabs-content-type=paginated] google-codelab {
  opacity: 0
}

body[codelabs-content-type=paginated] devsite-googler-buttons {
  bottom: 148px
}

body[codelabs-content-type=paginated][ready] google-codelab {
  opacity: 1
}

body[codelabs-content-type=paginated] .devsite-main-content {
  max-width: 100%!important;
  padding: 0!important
}

body[codelabs-content-type=paginated] a:focus {
  text-decoration: none
}

body[codelabs-content-type=paginated] .devsite-badger-award {
  left: 256px
}

body[codelabs-content-type=paginated] .devsite-back-to-top-link,body[codelabs-content-type=paginated] .devsite-banner,body[codelabs-content-type=paginated] .devsite-book-nav-bg,body[codelabs-content-type=paginated] .devsite-book-nav-bg[fixed],body[codelabs-content-type=paginated] .devsite-book-nav-blur,body[codelabs-content-type=paginated] .devsite-book-nav-toggle,body[codelabs-content-type=paginated] .devsite-footer,body[codelabs-content-type=paginated] .devsite-heading-link,body[codelabs-content-type=paginated] .devsite-page-bookmark-tooltip,body[codelabs-content-type=paginated] .devsite-page-title,body[codelabs-content-type=paginated] .devsite-sidebar,body[codelabs-content-type=paginated] devsite-book-nav,body[codelabs-content-type=paginated] devsite-bookmark,body[codelabs-content-type=paginated] devsite-header {
  display: none
}

body[codelabs-content-type=paginated] devsite-code:after {
  display: none
}

body[codelabs-content-type=paginated] devsite-user[signed-in][enable-profiles] {
  min-width: 44px
}

body[codelabs-content-type=scrolling][type=codelab] .devsite-sidebar[fixed] .devsite-sidebar-content {
  -webkit-padding-start: 0;
  -moz-padding-start: 0;
  padding-inline-start:0}

body[codelabs-content-type=scrolling][type=codelab] .devsite-sidebar[fixed] devsite-toc {
  -webkit-padding-end: 8px;
  -moz-padding-end: 8px;
  padding-inline-end:8px}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-show-all {
  margin: 0
}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-more-items {
  -webkit-margin-after: 0;
  margin-block-end:0}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc>.devsite-nav-list,body[codelabs-content-type=scrolling][type=codelab] devsite-toc[fixed]>.devsite-nav-list {
  border: 0;
  counter-reset: steps;
  padding: 0
}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-item {
  -webkit-margin-after: 8px;
  margin-block-end:8px;-webkit-margin-start: 2px;
  -moz-margin-start: 2px;
  margin-inline-start:2px}

body[codelabs-content-type=scrolling][type=codelab] .devsite-toc-toggle,body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-item:last-child>a {
  padding: 12px 8px
}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-item>a {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: var(--devsite-background-1);
  border-radius: 4px;
  color: var(--devsite-secondary-text-color);
  display: grid;
  font-family: var(--devsite-headline-font-family);
  font-size: 14px;
  grid-gap: 0 8px;
  grid-template-columns: 26px 1fr;
  padding: 12px 8px;
  border: var(--devsite-primary-border);
  box-shadow: none
}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-item[completed]>a {
  color: var(--devsite-primary-text-color)
}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-item>a:before {
  background: var(--devsite-tertiary-text-color);
  border-radius: 100%;
  color: var(--devsite-inverted-text-color);
  content: counter(steps);
  counter-increment: steps;
  height: 26px;
  line-height: 26px;
  text-align: center;
  width: 26px
}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-text {
  color: var(--devsite-primary-text-color)
}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-active.devsite-nav-title {
  border: 0;
  box-shadow: 0 1px 2px 0 var(--devsite-elevation-key-shadow-color),0 1px 3px 1px var(--devsite-elevation-ambient-shadow-color)
}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-active.devsite-nav-title,body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-active.devsite-nav-title:focus,body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-active.devsite-nav-title:hover {
  color: var(--devsite-primary-text-color)
}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-active.devsite-nav-title:before,body[codelabs-content-type=scrolling][type=codelab] devsite-toc .devsite-nav-item[completed]>a:before {
  background: var(--devsite-link-color)
}

body[codelabs-content-type=scrolling][type=codelab] .codelab-banner {
  background-color: var(--devsite-background-2);
  color: var(--devsite-button-color);
  font: 500 14px/36px var(--devsite-primary-font-family);
  line-height: 24px
}

body[codelabs-content-type=scrolling][type=codelab] .codelab-banner .devsite-banner-message {
  padding: 16px 40px
}

body[codelabs-content-type=scrolling] .devsite-banner :link,body[codelabs-content-type=scrolling] .devsite-banner :visited {
  text-decoration: underline
}

body[codelabs-content-type=scrolling][type=codelab] .codelab-banner :link,body[codelabs-content-type=scrolling][type=codelab] .codelab-banner :visited {
  color: var(--devsite-button-color);
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap
}

body[codelabs-content-type=scrolling][type=codelab] .codelab-banner .material-icons {
  color: var(--devsite-button-color);
  margin: 0;
  vertical-align: bottom
}

body[codelabs-content-type=scrolling][type=codelab] .devsite-nav-item.devsite-toc-toggle {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-margin-after: 0;
  margin-block-end:0}

body[codelabs-content-type=scrolling][type=codelab] .devsite-toc-toggle .devsite-nav-title {
  padding: 0
}

body[codelabs-content-type=scrolling][type=codelab] devsite-toc:not(.devsite-toc-embedded) .devsite-toc-toggle:before {
  color: var(--devsite-secondary-text-color);
  content: "schedule";
  -webkit-margin-end: 8px;
  -moz-margin-end: 8px;
  margin-inline-end:8px;font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal
}

body[codelabs-content-type=scrolling][type=codelab] h3>.devsite-heading>a[href*=github],body[codelabs-content-type=scrolling][type=codelab] h3>.devsite-heading>a[href*=github]:visited {
  color: #000;
  text-decoration: none;
  padding-left: 24px;
  background-repeat: no-repeat;
  background-size: 18px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAflBMVEUAAACXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZbf2s+YAAAAKXRSTlMA+SAC7QrIBPXROWMX17rCSmusXEaAD9zNeXFWJqOLMx3mtJJAK5xP4Jw4LyAAAAT6SURBVGje1NbdcqJAEAXg0zJAQEFA0QhojJHE8/4vuBfrJlvQGHSGbO13CzVT09M/g//HIssPRZAYIUkxSVAc8myBSfnrMjVUmbRc+5jEsUqFN0lazeDYogo4SlC5jPq6EI4mxRpOhKuId4pWof228y0fsJ1bbp0lfFCS4XFNSgtpg8eEO6EV2YV4QBvRWtTiXl4udEByD3fxCzpS+LhDk9CZpMFosaFDJsZItdApqTHKnM7NMULOCeQW5534zDUnUuOmWDgRiXFDYzgZ02CQn3BCiY8BXsFJFd7YQjLPkeGDTPRsRhZVK+zIABxX+yfe6Wm/OgL4YIe0UIQRO8x1jm/yiHeI8s11RdP7FKJvx649PmUBRwoyfNqza6dUktzsNt7HliNsa+9m95UGXSl7XvQn2OV0qOpzO1tsNotZe66rw+lyXbb08bcX9qToyNgjYTcoS3PaxT4UflydzLJ7nFDYk3V+SdhzQZfnQTP89VW5jPDbmRTAWvDdnAq1zFnC2pLfHHnFn9uYK3yJ+HOhZoRPa2peYe2VmjX+KKjawNKGqgJXC6HqDEtnqmSB3yrqSlgqqau+UkAVwVLEKz1tZxxQw1LNATObSNvHOqUqCGEtDKhKAcAXqlo40Ag14g92D77BiTcO9pByqNbsDfeIcvCK3+HI++AlG2piOBJTY4AjNVs4s6XmiMwitSzSK0Nu0bQs2leOAzUzODOj5qDPYvHgTCj6TA703HLoog+oxGIgWgzHBMbigWnx1DSQyTcOqBDw34Sav9q1sx1HYSAKoNcYE4cl0AlhIB22rF3//4PTI43ULbrMYjzKy5zHROiGyNhlyqAXDC5z8Acc6mcFu3+OpeCD+Y87ONMRR1isik6qet+wah3gzMEwfIPXLIsB9sQp4UxJnL2pDFRwRBHrauoEZHDkaeoV5PSKKpNydMTSCk4oTawO8O07Nva9JN+8Z0skHNgk5l3bkf7hLUcjW+CceH2B1YqeeDmzTXU5sB/EE4rZmDucsA9ksBtvJuoQq4SaDE5sqc8n2+eaNyqBOTmHtcycG8xo3B4lrMgjmZ0GrwtYaQsLbUBmImZeojKuHRbyHjRmz5ZFQRUdByfGxCPEfPJW07gbVyVoiU9xIwYz97GVs1LD5oMmbPknvcKntLmXNNDvT2GBEV1WXXyadjA0Q64bIMygLsTo00aCsbmWfCbfDOEnt6QF8EzjlBi6BasVdscU5HYwbdz9LO65y9ae4tjKwTzDTJUZfxlPJjRLhoELfdPHgNrl9ZIFK6I5LhjyxOB75QdFsqAEVIKmCW+qcZ0B9xvOPft7eReaVnFPRPmj1lPvbcJdx6toUrkB46zpmyeAnFLViMGDZvSkKfo8Y3ikAORjB8RVqonIT4+hxJjW/qRRzezNvd1VoegKoG1uGOPRhBomaktfAok/PJ9a3PykQEk1xsQ0bqtg5Pk/+04qBtryotDlG4wpaJTvzS7Q3sCwDdbhgu1sw9yi7V/9XFSEb3MwbAbXYWn5H7zF3+5J2gZHNhuPX5frsaqaOvWpsAw+rC3FY6tg/cRMYU88zya4DzGbV7oL3npYQNWugmuFZSLtIlhHWOwcrA8OzrAgT3pdsD5J2PH2a4L3HuzdStvgMscq8j2hL/e5wcm7BLA2OuBbFebVKWBirYR/D6OWc16JizqEO0WUCrHzMMrbCZFGBf5j/QYa/td1VlNoIAAAAABJRU5ErkJggg==)
}

body[codelabs-content-type=scrolling][type=codelab] .faq a[href*="cloud.google.com"] {
  padding-left: 22px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAC9FBMVEX////u7u7v7+/ZRDf/zEH/zkPbRTlJifT/z0XYRDhRj/XWRDdPjvVOjfX/zkH/z0fXQzdGiPXUQzdMi/VKi/Xr6+3t7e1SkPXbRDdLjPW70fPaQjVOjPXx8PD9/f1nnff19fXRQzdHifVJhOxEh/Tu7/JLifH9y0DUQjVtofhOi/NKh+9HgelGf+b+7saaWXX/zDz+yTrZRzrRQjT7+/vxx8PeqkTsuj32uzrOQzdqn/j39/fr6Oj9yT/3vjvaQDPUPTBJivVKifPq7O/z0Mz968T4wj7zwD3NPTHGPDD0+P9Bifrv8/Xx8vJJhu5EfOPo3Nv/0Ez8y0rxvT3ZPjBDi/tBhPT55ePkysj+3Hr/0VLHVErcpkPcTUH7xD35wTzztznpsTjKRTjo8P3U4/z6+vr//PmQt/mBrff//fayy/ZUkfZjmfSXufP78/L18+//+Oj66Of+9eBCdt3t59f/89TvxcPsurXasKztqKL+4Y7jjIT0033ShH3hc2ngaV7/1F3/0ljjv1fbWU37xkDaoEDCSj/xujvptjvutjrxtjn8xDflrDb5vjXJQjX2tzP4+v+bwf3I3Pyiw/t0pvhel/VZlPW90fP/+/DV3/Cdu+/e4uv33Nk+btP+8Mz+8Mniwb7+7L3u371Vdrv+6bDusq3+56j+5aTx2Z+Gjpj+4pbolI3RjYehnIT+2XPedW370mbHaGDMZl3bY1jQVUvbU0f/00PYTkLKSj/tsjjwpjfeXjfnfjbEQjbXPjTSPS/w9vu50vs7hfr5+flypPf89vb89fTF1fHM2vBsnfB3ou/67+6swOpekert6uNdi+M5deLq4OA/dt83bt80a9xmjdby19VKc8jx5cf12cP/7r/gwr+pnr/v4b7xwLtffbf+6rHx3KnorKjYqKTXpqHXo57aop3ZkovTwIboh3+jX3f30XDgenCWUm3Kc2zIsGnMcGj4y1zgYFXgX1TfrEXWlz7mhjfsrTbkljbabDbcVTbsmTBDSJ02AAAFFklEQVRYw+2WV1jTUABGkyZpi6W0tKUWC0hBsAporbMWrCgqKA6WCooK7r333nvvvffee++99957b33x3uTetIEGnnzx83y89Tunf25SWuI/f4Oqk6cU4ijLkr9sfp5Ckyfk6h8o5JkH4umpVPr5+fnqdLro6GiZTBYkk3l71z5SNbdA8zyt8wLYhKefUunr66vV6WQsMDExF3/StLytka/0VPopfbUgoEWBoCBv76lNcj6AFnnQ+6MB0BcsKNA8x2M4iPbjAThQgVsAA545TWg8RQlc5MMBflrg8wHgg3NsIX6OAa10Lr6SDQgHgAXetSeJD5iqRTrytfAKdHwgiAu0EZ3QvEBhYLLAu6+LDoIOtCApKSnVUqoBDondyiahoTggazt9ej4hd94Wxbya4z5wskZoYVgA0/NXlGSlVr3iJpOpOMsbt36r4BphsACQHSezBfSP4zQQs8Zs3n7P3QmeDQ8OAwVwdkEt0ADhhI3jFCxms7lfu+yBthHhwcFhoaCgnXZC4obqPYbZPABqgHVpNj/yak1QABdRQatriwcIiXy312alrBRFqff175jFb9lrZecIVGgz09+NTurjbw/LNFmtUqnVw8PRM0AY6JowaHFN7iIKz2rvtCIjfbBPkvF992aapABKakzvKByQymxbO5e7iDb8BfjoA5uWsPv7kJxPSi4Oy7RpgA/+kl8KArdolUq1uDMshLXCA8jD6NXqpEQPAmDCszibTSFlccS4+DMGMCrVtvdzO0eEh59CPulfgsDYoQ/Rb4q1mbiCsX8zZ2AVrQLIV16uGRGMTxD6PIEkh2TBOPA4og09nSeYJoe+fND1SxdmSRCBgg+6PypE9o01mTRq6Bs+1yEQqcCHJK69cn62xDnA3YS6W4qD51kBA9LV6MX5aXKuIB90/wyJnztCQFMJKuif2zQANfANn9CnchlYzyWYF7OFV8ATgAPV624BAzQKCgTSSxIsDxIYOQR00m7kFgjpsQP6CgUlNWxFd7LDAEaOoPvoc74ESa1NsUBXK9QelLHfafTqclZmKwXvsjpJihyi/mkc9j3Su/P7BngxeMJHPXoru9vbCP4vYZ9aT/DMpxkAW7CsCCFZ3D5I5BowAPnp1wgnqRaGQ84kduEKemchwC5BJ1jX6Tt6Ey50SvBiMH1AgCvYA1i9BP8UkRtjsW8c3E5wjcstfCBxUQgW/APt9sBAfxIR/2ScBvnS5O6EgA4baL7w+hzpRELyhNSqZ1Jgf/0xQsgSuXPCQzxBSPwaG/YpawyRhRnrvBh0DvSGLkITn2A9M/Kljt5HiawsTGAwxVbohS7+JGPfOBgNEJDK3wg60d2EBTvM2KdWE27opPLCWPqEZP9W+BCLfIoa3JFwxyoLX4haVNFHSMUecQrsGx8RbmmZxgfoIV9KIeoDhg4d+jXTzPubCREWWmhOB0SV5hgxYkRGxpgxY36i+2cEgRixQLN1FpqnYJWkKklJScNLjxy5MyPjhwf0Kegn9yZEmZdAuxQqVwEkDR8+auTO77uhD3XKsbWOeKBZL4ugULlyuXJlyjQaNeqbFfhG6BuSwdeqOF0H0q6FBmyhUaNdu6FPQd/RHw4Qpxfj4heMatCwIZywh1JTLAYD+mkhSoeBLoGoqCENYGDXL943oB834iyhLdjHgfF79mHfsb0bkRvLBhZDjB49euzYsePH/96/vzyHeXN3Inc6zSuCqcRys1tJjm4xdYj//JP8AXE5S/JuAn7MAAAAAElFTkSuQmCC)
}

body[codelabs-content-type=scrolling][type=codelab] .faq a[href*="stackoverflow.com"] {
  padding-left: 22px;
  background-size: 24px;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAE8CAMAAABq2/00AAAA4VBMVEUAAACCg4aCg4aCg4bIj0P1fx/2hh+ojHCojHCojHD2ih/UjCn0eiD0eiD2hB/2hR/RjjDUjCnKkkPUjCnUjCn2ih/UjCnCllPCllP2ih/CllPCllPCllP2ih/CllPCllPCllP2ih/2ih/CllPCllP2ih/2ih/CllPUjCnCllPUjCn0eiD0eiD2ih+ojHD0eiDUjCn0eiD0eiCojHDUjCn0eiDUjCn0eiDUjCnUjCn0eiCojHD0eiCojHD2ih+ojHD2ih+ojHCojHCdiXaViHuCg4aojHD0eiDCllPUjCn2ih8XYwy7AAAARXRSTlMAv0CAEEAQv4BA7++/gCBQQN8wIIDPv2Dfv5+PUDDPryCAcO+/r49wn4Bg79/frJ9QcGDPr6+Pj3DPz2AwIJ9wYOaPVDAbIL/gAAAGhElEQVR42uzbsYrCQBDG8WmyxaJJlcIixQmxMSIRgiBB7Bbm/R/oPAnH3e0SxwSvyf/3DLt8zDeMAAAAAAAAAAAAAAAAAAAAAAAAAAAA4F9k7Xm1Xwlek53WqyY87AVWfbHumvCTE5hkIZYJTFyIrQU2+xA5CmxWIULcWq1DTGBzCrFcMDluC4ENcTtDEyKdwKYLkYuAuH27ggFtuj7ETgLiNo0B7Z3c1YnNMUQaWbTC6/W1uKUPHbha7wr60GnP7ot3YpGHWCsL5Wod1JP70LMsU+H12424nfDsBj4XgzMD2kN20F82YtDSh965nf61JW7Nzy7iKwY067OLlfJcw/qx1KQPQ9zSh1aaVtGHGnxoUummrB97WZhSk3byRM/6UST3mpQRtwZbTTo4GXdhQLvbaNJVxnX0oSMftyBuDQpN8o4BzaDWpFrG5KwfH5zXpJuMCfShox83pw812GnSxrx+XPI5hjvowF7ttawfB5km+Yq4nf5xS84x5lR7nGPMqfaI2znVHgPajGqPc4w51R7nGJ/sm29P2zAQh49h1kJgJHGWlrbQItAIebNO67owadpgwOzv/4Wm8S8NLsXxGSTu/HyEk/O78+McRu0FH4pQe2EdA6P2wjoGRu2FdotQe2EdA6P2wjoGRu2FdotQe+GChlF7DNcxKulN7bFbx4h1lPlSe+x8aKK1Tqae1B6zdYxM35BLP2qP1TqGjPQdmfCi9ji125l+ICp9qD1G6xixXiSPPag9PusYiW5SCLza49JuK/2YKEOrPSYXNBFpkyTGqj0e6xiFXkoukWqPwzpGrJ8iEyi1x8GHnuknSUqU2qO/jlHpVeQpwhB8oL6OISK9mkK4qz3q7bbQzxFV7mqP9jpGqi1IYme1R3sdI060BTPpaAiot9ss0hZkwk3tUb+gyUJbkEzd1B55HxqfaQvy1Ent0V/HKCNtwVy0NwSfGPhQMdcWRJWD2uOwjiFzbcFZ3F7tsVjHmDqMLTZqj3S7bTm2RJloZwh2maxjyJnd2NJS7XFZx7AcW2QrtUe93dZUDmOLjdrbaTTa7e9fNgj1i7ZjS9lK7dU+dPvzzgaRZ8elpPZji73a2/j749vOLuWytRtbCmmv9jghLMcWuw936zfwwnZssTAEexw+VidTmstn1N4Wr2/2gcrBlO6HY3eHKNqPLYfh2FmPLeZ/aXvh2D1Q2o0tYkHt8ZxQliIybTm2NNXex30IWI8tcePDPYSAywPv+61w7NwfeHfJHrvJS44tSQmUGan+oCfAgTi3fOCly1D952A4eqkH3gTocqDuOT5NX2JsmQJZhFrkaHwy8fzAmwNdeuoRRgQiTakEugyUSR2B+LFlDoTpK4M6AvH/pUUC6JIqAyMCMQ+8pMe8E2XgGIFlxKxbAIyVgUUEWj/wUh6QAZQBIgJlzqlbQKwMUBE4Tdh0C4ChMsBFoMgiJt2ivpvVoCNQznh0CxDKAB2B9dgSA2l6ygAbgfUDbwG0GSgDPxEo5tS7xYq7GT4CU8Im6pbRsNkxMBFIex5ezqQ3qM8fPgL5kZ6Mj1QNLgKpR90y4tNjpbxFID+ExwjsAUN8ReAYmOIjAlmePF8RyLHv+orAPgScI3AIb531tQZ/XjECR3DL5VoTeDOsXTVYf8UIFHDLu6sm8GZAFA8ZgccQimcgLCPwNBRvOROLCExD8Z4mXR2BRxCK5+wCx6F47hHYC8Vzj8BJKJ5zBPYhFM85Agf0i3dx3ulcdLubm5e+I3BEv3id65r7Ov70EoGCV/EW+NrpdLu/cHWkX7zz65pn6hiK9689O8hJKIaiMCxK0nYzTBgSYxDs/pekiTohEq/v0eRKv28J/+zkXMbrF2IdxQvEC3ScOF7r6+3LrtZDa1vxVinfHaeId+qjTBCv9kGO4i1XJoi365/EWxCv9EF24i1XJ4jXv4iXKd7p/uNt+yjt/uO1PspZvOVmmGcPrZ1q3ZUi3qoDaNva4WYdj5PFu2nHMm+8nzqKF4y3vuOreL923PcrqngRz6291FrKXrxbdWzifXB6iydehHh5iDco3maQpxnivQ2yEU888cQLEi8R8cSLES8R8cSLES8R8cSLES8R8cSLES8R8QbFexzkPEO86xxA4on3F+LlIZ54QeLlIZ54QeLlIZ54QeLlId6qeOk8/BviiRciXibiiRciXibiiRciXibiiRciXibiiQcAAAAAAAAAAAAAAAAAwHTeAe21evvWi2VXAAAAAElFTkSuQmCC)
}

body[codelabs-content-type=scrolling][type=codelab] .faq a[href*="support.google.com/webmasters/"] {
  padding-left: 24px;
  background-size: 24px;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAolBMVEUAAADW1tbW1tZ6enrQ0dJ6enrMzMzq6+zq6+x6enru7+/m5+ju7+/m5+j////S09REi/XW1tbm5+ju7+9PT0/Q0dK8vLxGjfVZWVlNTU16enrMzMzIyMj09PS/0uuSkpJpaWmbm5tim/e0tLSEhIStx+3e3+GsrKxwcHBZk/dPk/R1p/KPtu/U3eqmpqZlZWVfmO5woeqHreWvwN6nu9qLi4vZSE73AAAADnRSTlMAEcxmzO7MzDMz7u6IiHn/rpYAAALMSURBVHja7dXpjtowFIZhUkqZlSV1ncQdEsK+zD7T+7+1xjTiwxVOAmeORyP5+2UspPchEtDy8/Pz8/Pz8/M7cZeduHKdyxbL0FfVAMUraHdUHUB12i22tZWqBRSDgKFfC4CApV8PgIClXw/gE6hyTd/lAR7gAV8fEHwbWtc/ul/WfQ8IfQKAIECfCoCA3sdq+nQB+nQABIQ+CQABtY9Z+lQB+gwACBj6AFAE6DM9AL0fAalPB/yGgNAfntwHAAJKnwCAwNLneQAAVAvM/ttzVLlB4z2/A6AFVoDRf43IfewVgGKNAG/Uvrl39BsCXqh9cy8nA/51tmk63+jDZp6m9wTA4DzANiyW6lOqTxAMHAD22XASReuwpKDvELCNookBGJwx9E8B3OvsQp8e9GmOviNANA/Dh4k+TApBukHfFSBa7/I7whqf3xWA/gOAoU8DDJwBCHk+wIAw9CsAPw/W++CFB/MAD/hCgL59PXPS8toRYKHEndkTauEQIIUQ0hToG2eAXOicKdBXmSPAo9CTpkDo5U4Ad6IEGILy0gFgFJctCACIh/yATABwIChvVyE3IBR7AAQAiOmIGZADAMEBQMkRL+AJAAgOALGUI07AQgBgCPb3uRbwAaYAGAIAZlIL2AA5AIYAgJXUAjaAAsAQADCWO4EjAAQGQAvYAUsDsDQAeuwAMZvu89PZ/jZhBmQCi2dl60+MPiMAf8UgZEUpK/LoJ4oX0C9LIIyF0U8yXkBPVCzRWzIDZjX9sWQG9Kv7ScYN6KnKfizZAf2qfpLzA3p5RV9JboDeytp/kk4Ao5WtP+UFQKCO9sdTSQQ03+OR/kxKdgAWZv/11VI6AWBmP5HSNQD5zwQknwxIqIBu468hBgDqNYCuFXBDASSNAbdWQHB1PiBpDLgOWtZdXPEDri/QswjYAOjbF9x0OQHd26Dl5+fn5+fn5+dn7i/3LEaKJNV/0wAAAABJRU5ErkJggg==)
}

body[codelabs-content-type=scrolling][type=codelab] .faq a[href*="developer.android.com"],body[codelabs-content-type=scrolling][type=codelab] .faq a[href*=android-developer] {
  padding-left: 20px;
  background-repeat: no-repeat;
  background-size: 20px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAq1BMVEX///+lyjmfxyGhyCqkyjakyTP+/vuiyS7z+OWlyjKgxyTX57ChyCfa6bTx9uLy9+Sz0l6szk/D24Tt9NrN4ZnK4JSiyCyexh34+/D6/PTp8dPh7cjf7L7k78vc6rnW5qzU5ajS5KPP4p+21GWnzD3F3Yi813Kx0ViqzUWexhr8/vjv9d7Z6LKy0lyZxADh7cLA2n2rzkr1+erJ35C61m6uz1KcxRHn8M6/2XgEePWtAAACr0lEQVRo3u3Z2XKiQBiG4Y9ebNO2aCCyzOC+7zH7/V/ZRJZQZaJpWnKS4TlJUItXbX4pFJXK71DTusvccI6z5oMSAutdhDP2uzpK4CxwxsRBGYJdA19qLAOU4s4LkyUN7G4Ude2glmzuRihHKDqAPZhNuJRKSckms37rvctrKMnG728l5cxKMU7JuCF7KEvf87h1gnu0iXK4B2p9Sc3dUgZNMusMLvu42r20LiBXT8JMWRepN1xlGu+fK8/6xFPxwsvH697/eP/j7uDTOvB+dxwX/AaM2SQ+6icrYHDyGmgfWE3irNeCqTaPAwcArydroboAbuMAb8NQRNJn20SYtHK8HaKZzoffhZl5tlNxsD5PsnUQ2b9jwwnO35WvRo3lN/o2TDwKS5M3gokF0w2wZxgIlpY2FpgsgdQPkLXJQar0A/LVIDB6Idp2GxQQrJI/rbq2Voijlc5S9LZs8uYCqBVyXLTZhLW/fSn3hDMmZAQ05I020gT2PmeM+w4uGpLksFs+oEEtbaqJVnpUkz4uyebf6xQK0CY6XjoSC1xQ9/PPr4KB52zuvTrOa5EssC0auM0C0tYKtI0DqgpUgSpQBapAFfifAj90Tn5YZoGnooH8eutB56KDDosGhlTrYiTyk0epVdFAKJLn9rLHRSNfcE4tF0UDcAXlXPhDfGPtjGejEMUDCEdPY8eFHoOADvPAxiDQLBBQkUHAJfoB34UBS/9CfAETe6lZYKZft/QIFe94vicRy7tcvKOkB0PhYOo4zlNWYNvjpjOdZwU+O24OQlynK62EGCF2J9IbpIsy/P0I3CHW+Qj8qQJVoAr8VOCx3EB+YvDSwIDmXzaW4oZZseU6Lfr5aaAUPT8uyPuT33VeIpRkI5RHyRQfHEKFUj2UJuh1GjaQsxudKECl8jv8A6GtQkKSkMLrAAAAAElFTkSuQmCC)
}

@media screen and (max-width: 840px) {
  body[codelabs-content-type=paginated] .devsite-badger-award {
      left:0
  }

  body[codelabs-content-type=scrolling][type=codelab] .codelab-banner .devsite-banner-message {
      padding: 16px 24px
  }
}

body[codelabs-content-type=paginated] google-codelab-about .codelab-title {
  width: 100%;
  text-align: center;
  font-size: 32px;
  margin: 20px auto 30px auto;
  line-height: 45px;
  max-width: 700px
}

body[codelabs-content-type=paginated] google-codelab-about .codelab-title .token {
  display: inline-block;
  margin: 0 5px
}

body[codelabs-content-type=paginated] google-codelab-about .about-card {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border: 1px solid #dadce0;
  border-radius: 5px;
  background: #fff;
  max-width: 800px;
  margin: 0 auto 30px auto;
  padding: 20px
}

body[codelabs-content-type=paginated] google-codelab-about .about-card h2 {
  font-weight: 500;
  font-weight: 400!important;
  line-height: 1em!important;
  margin: 0!important;
  font-size: 28px
}

body[codelabs-content-type=paginated] google-codelab-about .about-card>:not(:first-child) {
  padding-top: 30px
}

body[codelabs-content-type=paginated] google-codelab-about .about-card .material-icons {
  margin-right: 10px;
  top: 6px;
  position: relative
}

body[codelabs-content-type=scrolling][ready] google-codelab-about {
  border-radius: 4px;
  border: var(--devsite-primary-border);
  border-left: solid 4px var(--google-codelab-about-active-border-color);
  display: block;
  margin-top: 32px;
  padding: 32px
}

body[codelabs-content-type=scrolling] google-codelab-about .caption {
  color: var(--devsite-primary-text-color);
  font: 400 12px/16px var(--devsite-primary-font-family);
  letter-spacing: .3px;
  margin: 0 0 24px;
  text-transform: uppercase
}

body[codelabs-content-type=scrolling] google-codelab-about .about {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex
}

body[codelabs-content-type=scrolling] google-codelab-about .about-item {
  -webkit-border-end: solid 1px var(--devsite-background-5);
  -moz-border-end: solid 1px var(--devsite-background-5);
  border-inline-end:solid 1px var(--devsite-background-5);-webkit-padding-end: 16px;
  -moz-padding-end: 16px;
  padding-inline-end:16px;-webkit-padding-start: 16px;
  -moz-padding-start: 16px;
  padding-inline-start:16px}

body[codelabs-content-type=scrolling] google-codelab-about .about-item:first-child {
  -webkit-padding-start: 0;
  -moz-padding-start: 0;
  padding-inline-start:0}

body[codelabs-content-type=scrolling] google-codelab-about .about-item:last-child {
  -webkit-border-end: 0;
  -moz-border-end: 0;
  border-inline-end:0;-webkit-padding-end: 0;
  -moz-padding-end: 0;
  padding-inline-end:0}

body[codelabs-content-type=scrolling] google-codelab-about .authors,body[codelabs-content-type=scrolling] google-codelab-about .duration,body[codelabs-content-type=scrolling] google-codelab-about .last-updated {
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  font: 14px/20px var(--devsite-primary-font-family)
}

body[codelabs-content-type=scrolling] google-codelab-about .material-icons {
  color: var(--devsite-secondary-text-color);
  -webkit-margin-end: 8px;
  -moz-margin-end: 8px;
  margin-inline-end:8px}

@media screen and (max-width: 840px) {
  body[codelabs-content-type=scrolling] google-codelab-about .about {
      -webkit-box-orient:vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -moz-box-orient: vertical;
      -moz-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 16px;
      padding: 0
  }

  body[codelabs-content-type=scrolling] google-codelab-about .about-item {
      border: 0;
      padding: 0
  }
}

body[codelabs-content-type=paginated] google-codelab-step {
  line-height: 24px;
  display: block
}

body[codelabs-content-type=paginated] google-codelab-step:focus {
  outline: none
}

body[codelabs-content-type=paginated] google-codelab-step code,body[codelabs-content-type=paginated] google-codelab-step pre {
  font-family: Source Code Pro,Helvetica,Arial;
  font-size: inherit;
  border-radius: 4px;
  overflow-x: auto;
  overflow-y: visible
}

body[codelabs-content-type=paginated] google-codelab-step code {
  background-color: #e8eaed;
  padding: .1em .3em
}

body[codelabs-content-type=paginated] google-codelab-step pre {
  display: block;
  color: #fff;
  background-color: #28323f;
  padding: 14px;
  -webkit-text-size-adjust: none;
  line-height: 1.4
}

body[codelabs-content-type=paginated] google-codelab-step pre>code {
  padding: 0;
  background-color: transparent
}

body[codelabs-content-type=paginated] google-codelab-step code em {
  color: #97c8f2
}

body[codelabs-content-type=paginated] google-codelab-step code .str,body[codelabs-content-type=paginated] google-codelab-step pre .str {
  color: #34a853
}

body[codelabs-content-type=paginated] google-codelab-step code .kwd,body[codelabs-content-type=paginated] google-codelab-step pre .kwd {
  color: #f538a0
}

body[codelabs-content-type=paginated] google-codelab-step code .com,body[codelabs-content-type=paginated] google-codelab-step pre .com {
  color: #bdc1c6
}

body[codelabs-content-type=paginated] google-codelab-step code .typ,body[codelabs-content-type=paginated] google-codelab-step pre .typ {
  color: #24c1e0
}

body[codelabs-content-type=paginated] google-codelab-step code .lit,body[codelabs-content-type=paginated] google-codelab-step pre .lit {
  color: #4285f4
}

body[codelabs-content-type=paginated] google-codelab-step code .pun,body[codelabs-content-type=paginated] google-codelab-step pre .pun {
  color: #f8f9fa
}

body[codelabs-content-type=paginated] google-codelab-step code .pln,body[codelabs-content-type=paginated] google-codelab-step pre .pln {
  color: #f8f9fa
}

body[codelabs-content-type=paginated] google-codelab-step code .tag,body[codelabs-content-type=paginated] google-codelab-step pre .tag {
  color: #24c1e0
}

body[codelabs-content-type=paginated] google-codelab-step code .atn,body[codelabs-content-type=paginated] google-codelab-step pre .atn {
  color: #eda912
}

body[codelabs-content-type=paginated] google-codelab-step code .atv,body[codelabs-content-type=paginated] google-codelab-step pre .atv {
  color: #34a853
}

body[codelabs-content-type=paginated] google-codelab-step code .dec,body[codelabs-content-type=paginated] google-codelab-step pre .dec {
  color: #5195ea
}

body[codelabs-content-type=paginated] google-codelab-step paper-button {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  min-width: 5.14em;
  margin: 0 .29em;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  font: inherit;
  text-transform: uppercase;
  outline-width: 0;
  border-radius: 3px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  z-index: 0;
  padding: .7em .57em;
  font-family: Roboto,Noto,sans-serif;
  -webkit-font-smoothing: antialiased;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12),0 3px 1px -2px rgba(0,0,0,.2)
}

body[codelabs-content-type=paginated] google-codelab-step h2.step-title {
  font-family: Google Sans,Arial,sans-serif!important;
  font-size: 28px!important;
  font-weight: 400!important;
  line-height: normal!important;
  margin: 0 0 30px!important
}

body[codelabs-content-type=paginated] google-codelab-step .step-title a {
  color: #3c4043;
  text-decoration: none
}

body[codelabs-content-type=paginated] google-codelab-step .step-title a:focus,body[codelabs-content-type=paginated] google-codelab-step .step-title a:hover {
  color: #212121;
  text-decoration: underline
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions {
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15);
  background: #fff;
  max-width: 800px;
  font-size: 14px;
  margin: 0 auto;
  margin-bottom: 90px;
  border-radius: 4px
}

body[codelabs-content-type=paginated] google-codelab-step .instructions .inner {
  padding: 24px
}

body[codelabs-content-type=paginated] google-codelab[theme=minimal] google-codelab-step .instructions .inner {
  padding: 0 24px
}

@media (max-width: 800px) {
  body[codelabs-content-type=paginated] google-codelab .instructions {
      margin:0 0 16px 0
  }
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions :not(.step-title)>a,body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions :not(.step-title)>a:visited {
  color: #1a73e8
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions h2,body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions h3,body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions h4 {
  font-weight: 400;
  margin: 0
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions h2 {
  font-weight: 300;
  line-height: 1em;
  font-size: 22px
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions {
  line-height: 24px
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions li {
  margin: .5em 0
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions h2 {
  font-weight: 500;
  margin: 20px 0 0 0;
  font-size: 20px
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions h3 {
  font-size: 16px;
  font-weight: 500;
  margin: 20px 0 0 0
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions aside {
  padding: .5em 1em;
  margin: 2em 0;
  border-left: 4px solid;
  border-radius: 4px
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions aside p {
  margin: .5em 0
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions aside.note,body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions aside.notice {
  border-color: #ea8600;
  background: #fef7e0;
  color: #212124
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions aside.special,body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions aside.tip {
  border-color: #137333;
  background: #e6f4ea;
  color: #212124
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) google-codelab-step .instructions aside.warning {
  border-color: #ea8600;
  background: #fef7e0;
  color: #212124
}

body[codelabs-content-type=paginated] google-codelab-step .instructions aside.callout {
  background-color: #e8f0fe;
  margin: 20px 0;
  padding: 15px;
  border-left: 3px solid #185abc;
  border-radius: 4px;
  color: #212124;
  font-size: 14px;
  line-height: 1.5
}

body[codelabs-content-type=paginated] google-codelab-step aside.callout b {
  color: #185abc
}

body[codelabs-content-type=paginated] google-codelab-step .instructions ul.checklist {
  list-style: none;
  padding: 0 0 0 1em
}

body[codelabs-content-type=paginated] google-codelab-step .instructions ul.checklist li {
  padding-left: 24px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEUAAAAxokwwoks1pFAxokwxokwxokwxokwxokwnnkQnnkQnnkRou3y84cTS69cxokwonkQxokwnnkRqvH1VsmtluXlVsmsnnkRdtnLw+PIxokwqn0YinEAfmj3goh/UAAAAGnRSTlMA2CcEo+6AQT7+2IOBJxPl27alhoBnX15SCCe258UAAAB+SURBVEjH7dA5EoAgEERR3BcQ923Q+1/T0SqKlNbMouP3gxkRFvZpyQb64VSQT4mOcYc8mU5DnqIG8zXoozj4d34tML+YrET8XBFx4e2F4oAL4N7J3EUB/EfSUwD/zG3hvFdROu9XtL31vgXguQA9F6DnAvM8WbOHpkXYD3cBBCcPjtASYjwAAAAASUVORK5CYII=")
}

body[codelabs-content-type=paginated] google-codelab-step .instructions h2 code,body[codelabs-content-type=paginated] google-codelab-step .instructions table code {
  background: #fff
}

body[codelabs-content-type=paginated] google-codelab-step .instructions .indented {
  margin-left: 40px
}

body[codelabs-content-type=paginated] google-codelab-step .instructions strong {
  font-weight: 600
}

body[codelabs-content-type=paginated] google-codelab-step .instructions :link paper-button {
  text-decoration: none!important
}

body[codelabs-content-type=paginated] google-codelab-step .instructions paper-button {
  display: inline-block;
  border-radius: 4px;
  color: #fff;
  font-family: Google Sans,Arial,sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 16px;
  padding-top: 6px;
  text-transform: none
}

body[codelabs-content-type=paginated] google-codelab-step .instructions paper-button a {
  text-decoration: none;
  color: inherit!important
}

body[codelabs-content-type=paginated] google-codelab-step a paper-button {
  display: inline-block
}

body[codelabs-content-type=paginated] google-codelab-step .instructions paper-button.colored {
  background-color: #1e8e3e
}

body[codelabs-content-type=paginated] google-codelab-step .instructions paper-button.red {
  background-color: #d93025
}

body[codelabs-content-type=paginated] google-codelab-step .instructions iron-icon {
  vertical-align: sub;
  margin-right: 7px;
  margin-left: 3px;
  font-size: 16px;
  top: -1px;
  position: relative
}

body[codelabs-content-type=paginated] google-codelab-step .instructions img {
  max-width: 100%;
  vertical-align: bottom
}

body[codelabs-content-type=paginated] google-codelab-step .instructions .image-container {
  text-align: center
}

body[codelabs-content-type=paginated] google-codelab-step .instructions table {
  border-spacing: 0
}

body[codelabs-content-type=paginated] google-codelab-step .instructions td {
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  padding: 8px
}

body[codelabs-content-type=paginated] google-codelab-step .instructions table p {
  margin: 0
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) .instructions h3.faq {
  border-bottom: 1px solid #ddd
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) .instructions ul.faq {
  list-style: none;
  padding-left: 1em
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) .instructions .faq li {
  font-size: 1.1em;
  margin-bottom: .8em
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) .instructions .faq a {
  color: inherit;
  text-decoration: none
}

body[codelabs-content-type=paginated] google-codelab:not([theme=minimal]) .instructions .faq a:hover {
  text-decoration: underline
}

body[codelabs-content-type=paginated] google-codelab-step .instructions .faq a[href*="cloud.google.com"] {
  padding-left: 22px;
  background-size: 20px;
  background-repeat: no-repeat;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAC9FBMVEX////u7u7v7+/ZRDf/zEH/zkPbRTlJifT/z0XYRDhRj/XWRDdPjvVOjfX/zkH/z0fXQzdGiPXUQzdMi/VKi/Xr6+3t7e1SkPXbRDdLjPW70fPaQjVOjPXx8PD9/f1nnff19fXRQzdHifVJhOxEh/Tu7/JLifH9y0DUQjVtofhOi/NKh+9HgelGf+b+7saaWXX/zDz+yTrZRzrRQjT7+/vxx8PeqkTsuj32uzrOQzdqn/j39/fr6Oj9yT/3vjvaQDPUPTBJivVKifPq7O/z0Mz968T4wj7zwD3NPTHGPDD0+P9Bifrv8/Xx8vJJhu5EfOPo3Nv/0Ez8y0rxvT3ZPjBDi/tBhPT55ePkysj+3Hr/0VLHVErcpkPcTUH7xD35wTzztznpsTjKRTjo8P3U4/z6+vr//PmQt/mBrff//fayy/ZUkfZjmfSXufP78/L18+//+Oj66Of+9eBCdt3t59f/89TvxcPsurXasKztqKL+4Y7jjIT0033ShH3hc2ngaV7/1F3/0ljjv1fbWU37xkDaoEDCSj/xujvptjvutjrxtjn8xDflrDb5vjXJQjX2tzP4+v+bwf3I3Pyiw/t0pvhel/VZlPW90fP/+/DV3/Cdu+/e4uv33Nk+btP+8Mz+8Mniwb7+7L3u371Vdrv+6bDusq3+56j+5aTx2Z+Gjpj+4pbolI3RjYehnIT+2XPedW370mbHaGDMZl3bY1jQVUvbU0f/00PYTkLKSj/tsjjwpjfeXjfnfjbEQjbXPjTSPS/w9vu50vs7hfr5+flypPf89vb89fTF1fHM2vBsnfB3ou/67+6swOpekert6uNdi+M5deLq4OA/dt83bt80a9xmjdby19VKc8jx5cf12cP/7r/gwr+pnr/v4b7xwLtffbf+6rHx3KnorKjYqKTXpqHXo57aop3ZkovTwIboh3+jX3f30XDgenCWUm3Kc2zIsGnMcGj4y1zgYFXgX1TfrEXWlz7mhjfsrTbkljbabDbcVTbsmTBDSJ02AAAFFklEQVRYw+2WV1jTUABGkyZpi6W0tKUWC0hBsAporbMWrCgqKA6WCooK7r333nvvvffee++99957b33x3uTetIEGnnzx83y89Tunf25SWuI/f4Oqk6cU4ijLkr9sfp5Ckyfk6h8o5JkH4umpVPr5+fnqdLro6GiZTBYkk3l71z5SNbdA8zyt8wLYhKefUunr66vV6WQsMDExF3/StLytka/0VPopfbUgoEWBoCBv76lNcj6AFnnQ+6MB0BcsKNA8x2M4iPbjAThQgVsAA545TWg8RQlc5MMBflrg8wHgg3NsIX6OAa10Lr6SDQgHgAXetSeJD5iqRTrytfAKdHwgiAu0EZ3QvEBhYLLAu6+LDoIOtCApKSnVUqoBDondyiahoTggazt9ej4hd94Wxbya4z5wskZoYVgA0/NXlGSlVr3iJpOpOMsbt36r4BphsACQHSezBfSP4zQQs8Zs3n7P3QmeDQ8OAwVwdkEt0ADhhI3jFCxms7lfu+yBthHhwcFhoaCgnXZC4obqPYbZPABqgHVpNj/yak1QABdRQatriwcIiXy312alrBRFqff175jFb9lrZecIVGgz09+NTurjbw/LNFmtUqnVw8PRM0AY6JowaHFN7iIKz2rvtCIjfbBPkvF992aapABKakzvKByQymxbO5e7iDb8BfjoA5uWsPv7kJxPSi4Oy7RpgA/+kl8KArdolUq1uDMshLXCA8jD6NXqpEQPAmDCszibTSFlccS4+DMGMCrVtvdzO0eEh59CPulfgsDYoQ/Rb4q1mbiCsX8zZ2AVrQLIV16uGRGMTxD6PIEkh2TBOPA4og09nSeYJoe+fND1SxdmSRCBgg+6PypE9o01mTRq6Bs+1yEQqcCHJK69cn62xDnA3YS6W4qD51kBA9LV6MX5aXKuIB90/wyJnztCQFMJKuif2zQANfANn9CnchlYzyWYF7OFV8ATgAPV624BAzQKCgTSSxIsDxIYOQR00m7kFgjpsQP6CgUlNWxFd7LDAEaOoPvoc74ESa1NsUBXK9QelLHfafTqclZmKwXvsjpJihyi/mkc9j3Su/P7BngxeMJHPXoru9vbCP4vYZ9aT/DMpxkAW7CsCCFZ3D5I5BowAPnp1wgnqRaGQ84kduEKemchwC5BJ1jX6Tt6Ey50SvBiMH1AgCvYA1i9BP8UkRtjsW8c3E5wjcstfCBxUQgW/APt9sBAfxIR/2ScBvnS5O6EgA4baL7w+hzpRELyhNSqZ1Jgf/0xQsgSuXPCQzxBSPwaG/YpawyRhRnrvBh0DvSGLkITn2A9M/Kljt5HiawsTGAwxVbohS7+JGPfOBgNEJDK3wg60d2EBTvM2KdWE27opPLCWPqEZP9W+BCLfIoa3JFwxyoLX4haVNFHSMUecQrsGx8RbmmZxgfoIV9KIeoDhg4d+jXTzPubCREWWmhOB0SV5hgxYkRGxpgxY36i+2cEgRixQLN1FpqnYJWkKklJScNLjxy5MyPjhwf0Kegn9yZEmZdAuxQqVwEkDR8+auTO77uhD3XKsbWOeKBZL4ugULlyuXJlyjQaNeqbFfhG6BuSwdeqOF0H0q6FBmyhUaNdu6FPQd/RHw4Qpxfj4heMatCwIZywh1JTLAYD+mkhSoeBLoGoqCENYGDXL943oB834iyhLdjHgfF79mHfsb0bkRvLBhZDjB49euzYsePH/96/vzyHeXN3Inc6zSuCqcRys1tJjm4xdYj//JP8AXE5S/JuAn7MAAAAAElFTkSuQmCC")
}

body[codelabs-content-type=paginated] google-codelab-step .instructions .faq a[href*="stackoverflow.com"] {
  padding-left: 22px;
  background-size: 24px;
  background-repeat: no-repeat;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAAE8CAMAAABq2/00AAAA4VBMVEUAAACCg4aCg4aCg4bIj0P1fx/2hh+ojHCojHCojHD2ih/UjCn0eiD0eiD2hB/2hR/RjjDUjCnKkkPUjCnUjCn2ih/UjCnCllPCllP2ih/CllPCllPCllP2ih/CllPCllPCllP2ih/2ih/CllPCllP2ih/2ih/CllPUjCnCllPUjCn0eiD0eiD2ih+ojHD0eiDUjCn0eiD0eiCojHDUjCn0eiDUjCn0eiDUjCnUjCn0eiCojHD0eiCojHD2ih+ojHD2ih+ojHCojHCdiXaViHuCg4aojHD0eiDCllPUjCn2ih8XYwy7AAAARXRSTlMAv0CAEEAQv4BA7++/gCBQQN8wIIDPv2Dfv5+PUDDPryCAcO+/r49wn4Bg79/frJ9QcGDPr6+Pj3DPz2AwIJ9wYOaPVDAbIL/gAAAGhElEQVR42uzbsYrCQBDG8WmyxaJJlcIixQmxMSIRgiBB7Bbm/R/oPAnH3e0SxwSvyf/3DLt8zDeMAAAAAAAAAAAAAAAAAAAAAAAAAAAA4F9k7Xm1Xwlek53WqyY87AVWfbHumvCTE5hkIZYJTFyIrQU2+xA5CmxWIULcWq1DTGBzCrFcMDluC4ENcTtDEyKdwKYLkYuAuH27ggFtuj7ETgLiNo0B7Z3c1YnNMUQaWbTC6/W1uKUPHbha7wr60GnP7ot3YpGHWCsL5Wod1JP70LMsU+H12424nfDsBj4XgzMD2kN20F82YtDSh965nf61JW7Nzy7iKwY067OLlfJcw/qx1KQPQ9zSh1aaVtGHGnxoUummrB97WZhSk3byRM/6UST3mpQRtwZbTTo4GXdhQLvbaNJVxnX0oSMftyBuDQpN8o4BzaDWpFrG5KwfH5zXpJuMCfShox83pw812GnSxrx+XPI5hjvowF7ttawfB5km+Yq4nf5xS84x5lR7nGPMqfaI2znVHgPajGqPc4w51R7nGJ/sm29P2zAQh49h1kJgJHGWlrbQItAIebNO67owadpgwOzv/4Wm8S8NLsXxGSTu/HyEk/O78+McRu0FH4pQe2EdA6P2wjoGRu2FdotQe2EdA6P2wjoGRu2FdotQe+GChlF7DNcxKulN7bFbx4h1lPlSe+x8aKK1Tqae1B6zdYxM35BLP2qP1TqGjPQdmfCi9ji125l+ICp9qD1G6xixXiSPPag9PusYiW5SCLza49JuK/2YKEOrPSYXNBFpkyTGqj0e6xiFXkoukWqPwzpGrJ8iEyi1x8GHnuknSUqU2qO/jlHpVeQpwhB8oL6OISK9mkK4qz3q7bbQzxFV7mqP9jpGqi1IYme1R3sdI060BTPpaAiot9ss0hZkwk3tUb+gyUJbkEzd1B55HxqfaQvy1Ent0V/HKCNtwVy0NwSfGPhQMdcWRJWD2uOwjiFzbcFZ3F7tsVjHmDqMLTZqj3S7bTm2RJloZwh2maxjyJnd2NJS7XFZx7AcW2QrtUe93dZUDmOLjdrbaTTa7e9fNgj1i7ZjS9lK7dU+dPvzzgaRZ8elpPZji73a2/j749vOLuWytRtbCmmv9jghLMcWuw936zfwwnZssTAEexw+VidTmstn1N4Wr2/2gcrBlO6HY3eHKNqPLYfh2FmPLeZ/aXvh2D1Q2o0tYkHt8ZxQliIybTm2NNXex30IWI8tcePDPYSAywPv+61w7NwfeHfJHrvJS44tSQmUGan+oCfAgTi3fOCly1D952A4eqkH3gTocqDuOT5NX2JsmQJZhFrkaHwy8fzAmwNdeuoRRgQiTakEugyUSR2B+LFlDoTpK4M6AvH/pUUC6JIqAyMCMQ+8pMe8E2XgGIFlxKxbAIyVgUUEWj/wUh6QAZQBIgJlzqlbQKwMUBE4Tdh0C4ChMsBFoMgiJt2ivpvVoCNQznh0CxDKAB2B9dgSA2l6ygAbgfUDbwG0GSgDPxEo5tS7xYq7GT4CU8Im6pbRsNkxMBFIex5ezqQ3qM8fPgL5kZ6Mj1QNLgKpR90y4tNjpbxFID+ExwjsAUN8ReAYmOIjAlmePF8RyLHv+orAPgScI3AIb531tQZ/XjECR3DL5VoTeDOsXTVYf8UIFHDLu6sm8GZAFA8ZgccQimcgLCPwNBRvOROLCExD8Z4mXR2BRxCK5+wCx6F47hHYC8Vzj8BJKJ5zBPYhFM85Agf0i3dx3ulcdLubm5e+I3BEv3id65r7Ov70EoGCV/EW+NrpdLu/cHWkX7zz65pn6hiK9689O8hJKIaiMCxK0nYzTBgSYxDs/pekiTohEq/v0eRKv28J/+zkXMbrF2IdxQvEC3ScOF7r6+3LrtZDa1vxVinfHaeId+qjTBCv9kGO4i1XJoi365/EWxCv9EF24i1XJ4jXv4iXKd7p/uNt+yjt/uO1PspZvOVmmGcPrZ1q3ZUi3qoDaNva4WYdj5PFu2nHMm+8nzqKF4y3vuOreL923PcrqngRz6291FrKXrxbdWzifXB6iydehHh5iDco3maQpxnivQ2yEU888cQLEi8R8cSLES8R8cSLES8R8cSLES8R8cSLES8R8QbFexzkPEO86xxA4on3F+LlIZ54QeLlIZ54QeLlIZ54QeLlId6qeOk8/BviiRciXibiiRciXibiiRciXibiiRciXibiiQcAAAAAAAAAAAAAAAAAwHTeAe21evvWi2VXAAAAAElFTkSuQmCC")
}

body[codelabs-content-type=paginated] google-codelab-step .instructions .faq a[href*="support.google.com/webmasters/"] {
  padding-left: 24px;
  background-size: 24px;
  background-repeat: no-repeat;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAolBMVEUAAADW1tbW1tZ6enrQ0dJ6enrMzMzq6+zq6+x6enru7+/m5+ju7+/m5+j////S09REi/XW1tbm5+ju7+9PT0/Q0dK8vLxGjfVZWVlNTU16enrMzMzIyMj09PS/0uuSkpJpaWmbm5tim/e0tLSEhIStx+3e3+GsrKxwcHBZk/dPk/R1p/KPtu/U3eqmpqZlZWVfmO5woeqHreWvwN6nu9qLi4vZSE73AAAADnRSTlMAEcxmzO7MzDMz7u6IiHn/rpYAAALMSURBVHja7dXpjtowFIZhUkqZlSV1ncQdEsK+zD7T+7+1xjTiwxVOAmeORyP5+2UspPchEtDy8/Pz8/Pz8/M7cZeduHKdyxbL0FfVAMUraHdUHUB12i22tZWqBRSDgKFfC4CApV8PgIClXw/gE6hyTd/lAR7gAV8fEHwbWtc/ul/WfQ8IfQKAIECfCoCA3sdq+nQB+nQABIQ+CQABtY9Z+lQB+gwACBj6AFAE6DM9AL0fAalPB/yGgNAfntwHAAJKnwCAwNLneQAAVAvM/ttzVLlB4z2/A6AFVoDRf43IfewVgGKNAG/Uvrl39BsCXqh9cy8nA/51tmk63+jDZp6m9wTA4DzANiyW6lOqTxAMHAD22XASReuwpKDvELCNookBGJwx9E8B3OvsQp8e9GmOviNANA/Dh4k+TApBukHfFSBa7/I7whqf3xWA/gOAoU8DDJwBCHk+wIAw9CsAPw/W++CFB/MAD/hCgL59PXPS8toRYKHEndkTauEQIIUQ0hToG2eAXOicKdBXmSPAo9CTpkDo5U4Ad6IEGILy0gFgFJctCACIh/yATABwIChvVyE3IBR7AAQAiOmIGZADAMEBQMkRL+AJAAgOALGUI07AQgBgCPb3uRbwAaYAGAIAZlIL2AA5AIYAgJXUAjaAAsAQADCWO4EjAAQGQAvYAUsDsDQAeuwAMZvu89PZ/jZhBmQCi2dl60+MPiMAf8UgZEUpK/LoJ4oX0C9LIIyF0U8yXkBPVCzRWzIDZjX9sWQG9Kv7ScYN6KnKfizZAf2qfpLzA3p5RV9JboDeytp/kk4Ao5WtP+UFQKCO9sdTSQQ03+OR/kxKdgAWZv/11VI6AWBmP5HSNQD5zwQknwxIqIBu468hBgDqNYCuFXBDASSNAbdWQHB1PiBpDLgOWtZdXPEDri/QswjYAOjbF9x0OQHd26Dl5+fn5+fn5+dn7i/3LEaKJNV/0wAAAABJRU5ErkJggg==")
}

body[codelabs-content-type=paginated] google-codelab-step .instructions .faq a[href*="developer.android.com"],body[codelabs-content-type=paginated] google-codelab-step .instructions .faq a[href*=android-developer] {
  padding-left: 20px;
  background-repeat: no-repeat;
  background-size: 20px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAq1BMVEX///+lyjmfxyGhyCqkyjakyTP+/vuiyS7z+OWlyjKgxyTX57ChyCfa6bTx9uLy9+Sz0l6szk/D24Tt9NrN4ZnK4JSiyCyexh34+/D6/PTp8dPh7cjf7L7k78vc6rnW5qzU5ajS5KPP4p+21GWnzD3F3Yi813Kx0ViqzUWexhr8/vjv9d7Z6LKy0lyZxADh7cLA2n2rzkr1+erJ35C61m6uz1KcxRHn8M6/2XgEePWtAAACr0lEQVRo3u3Z2XKiQBiG4Y9ebNO2aCCyzOC+7zH7/V/ZRJZQZaJpWnKS4TlJUItXbX4pFJXK71DTusvccI6z5oMSAutdhDP2uzpK4CxwxsRBGYJdA19qLAOU4s4LkyUN7G4Ude2glmzuRihHKDqAPZhNuJRKSckms37rvctrKMnG728l5cxKMU7JuCF7KEvf87h1gnu0iXK4B2p9Sc3dUgZNMusMLvu42r20LiBXT8JMWRepN1xlGu+fK8/6xFPxwsvH697/eP/j7uDTOvB+dxwX/AaM2SQ+6icrYHDyGmgfWE3irNeCqTaPAwcArydroboAbuMAb8NQRNJn20SYtHK8HaKZzoffhZl5tlNxsD5PsnUQ2b9jwwnO35WvRo3lN/o2TDwKS5M3gokF0w2wZxgIlpY2FpgsgdQPkLXJQar0A/LVIDB6Idp2GxQQrJI/rbq2Voijlc5S9LZs8uYCqBVyXLTZhLW/fSn3hDMmZAQ05I020gT2PmeM+w4uGpLksFs+oEEtbaqJVnpUkz4uyebf6xQK0CY6XjoSC1xQ9/PPr4KB52zuvTrOa5EssC0auM0C0tYKtI0DqgpUgSpQBapAFfifAj90Tn5YZoGnooH8eutB56KDDosGhlTrYiTyk0epVdFAKJLn9rLHRSNfcE4tF0UDcAXlXPhDfGPtjGejEMUDCEdPY8eFHoOADvPAxiDQLBBQkUHAJfoB34UBS/9CfAETe6lZYKZft/QIFe94vicRy7tcvKOkB0PhYOo4zlNWYNvjpjOdZwU+O24OQlynK62EGCF2J9IbpIsy/P0I3CHW+Qj8qQJVoAr8VOCx3EB+YvDSwIDmXzaW4oZZseU6Lfr5aaAUPT8uyPuT33VeIpRkI5RHyRQfHEKFUj2UJuh1GjaQsxudKECl8jv8A6GtQkKSkMLrAAAAAElFTkSuQmCC")
}

body[codelabs-content-type=paginated] google-codelab-step .instructions h3>a[href*=github],body[codelabs-content-type=paginated] google-codelab-step .instructions h3>a[href*=github]:visited {
  color: #000;
  text-decoration: none;
  padding-left: 24px;
  background-repeat: no-repeat;
  background-size: 18px;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAflBMVEUAAACXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZaXlZbf2s+YAAAAKXRSTlMA+SAC7QrIBPXROWMX17rCSmusXEaAD9zNeXFWJqOLMx3mtJJAK5xP4Jw4LyAAAAT6SURBVGje1NbdcqJAEAXg0zJAQEFA0QhojJHE8/4vuBfrJlvQGHSGbO13CzVT09M/g//HIssPRZAYIUkxSVAc8myBSfnrMjVUmbRc+5jEsUqFN0lazeDYogo4SlC5jPq6EI4mxRpOhKuId4pWof228y0fsJ1bbp0lfFCS4XFNSgtpg8eEO6EV2YV4QBvRWtTiXl4udEByD3fxCzpS+LhDk9CZpMFosaFDJsZItdApqTHKnM7NMULOCeQW5534zDUnUuOmWDgRiXFDYzgZ02CQn3BCiY8BXsFJFd7YQjLPkeGDTPRsRhZVK+zIABxX+yfe6Wm/OgL4YIe0UIQRO8x1jm/yiHeI8s11RdP7FKJvx649PmUBRwoyfNqza6dUktzsNt7HliNsa+9m95UGXSl7XvQn2OV0qOpzO1tsNotZe66rw+lyXbb08bcX9qToyNgjYTcoS3PaxT4UflydzLJ7nFDYk3V+SdhzQZfnQTP89VW5jPDbmRTAWvDdnAq1zFnC2pLfHHnFn9uYK3yJ+HOhZoRPa2peYe2VmjX+KKjawNKGqgJXC6HqDEtnqmSB3yrqSlgqqau+UkAVwVLEKz1tZxxQw1LNATObSNvHOqUqCGEtDKhKAcAXqlo40Ag14g92D77BiTcO9pByqNbsDfeIcvCK3+HI++AlG2piOBJTY4AjNVs4s6XmiMwitSzSK0Nu0bQs2leOAzUzODOj5qDPYvHgTCj6TA703HLoog+oxGIgWgzHBMbigWnx1DSQyTcOqBDw34Sav9q1sx1HYSAKoNcYE4cl0AlhIB22rF3//4PTI43ULbrMYjzKy5zHROiGyNhlyqAXDC5z8Acc6mcFu3+OpeCD+Y87ONMRR1isik6qet+wah3gzMEwfIPXLIsB9sQp4UxJnL2pDFRwRBHrauoEZHDkaeoV5PSKKpNydMTSCk4oTawO8O07Nva9JN+8Z0skHNgk5l3bkf7hLUcjW+CceH2B1YqeeDmzTXU5sB/EE4rZmDucsA9ksBtvJuoQq4SaDE5sqc8n2+eaNyqBOTmHtcycG8xo3B4lrMgjmZ0GrwtYaQsLbUBmImZeojKuHRbyHjRmz5ZFQRUdByfGxCPEfPJW07gbVyVoiU9xIwYz97GVs1LD5oMmbPknvcKntLmXNNDvT2GBEV1WXXyadjA0Q64bIMygLsTo00aCsbmWfCbfDOEnt6QF8EzjlBi6BasVdscU5HYwbdz9LO65y9ae4tjKwTzDTJUZfxlPJjRLhoELfdPHgNrl9ZIFK6I5LhjyxOB75QdFsqAEVIKmCW+qcZ0B9xvOPft7eReaVnFPRPmj1lPvbcJdx6toUrkB46zpmyeAnFLViMGDZvSkKfo8Y3ikAORjB8RVqonIT4+hxJjW/qRRzezNvd1VoegKoG1uGOPRhBomaktfAok/PJ9a3PykQEk1xsQ0bqtg5Pk/+04qBtryotDlG4wpaJTvzS7Q3sCwDdbhgu1sw9yi7V/9XFSEb3MwbAbXYWn5H7zF3+5J2gZHNhuPX5frsaqaOvWpsAw+rC3FY6tg/cRMYU88zya4DzGbV7oL3npYQNWugmuFZSLtIlhHWOwcrA8OzrAgT3pdsD5J2PH2a4L3HuzdStvgMscq8j2hL/e5wcm7BLA2OuBbFebVKWBirYR/D6OWc16JizqEO0WUCrHzMMrbCZFGBf5j/QYa/td1VlNoIAAAAABJRU5ErkJggg==")
}

body[codelabs-content-type=paginated] google-codelab-step .youtube-video {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: auto;
  width: 560px;
  height: 315px;
  border: none;
  max-width: 100%;
  max-height: 51vw
}

body[codelabs-content-type=paginated] google-codelab-step .embedded-iframe {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin: auto;
  width: 560px;
  height: 315px;
  border: none;
  max-width: 100%;
  max-height: 51vw
}

body[codelabs-content-type=paginated] google-codelab google-codelab-step .note:before,body[codelabs-content-type=paginated] google-codelab google-codelab-step .special:before,body[codelabs-content-type=paginated] google-codelab google-codelab-step aside:before {
  content: unset!important
}

body[codelabs-content-type=paginated] google-codelab google-codelab-step .instructions aside.special,body[codelabs-content-type=paginated] google-codelab google-codelab-step .instructions aside.warning {
  margin: 10px 0!important;
  padding: 15px 20px!important
}

body[codelabs-content-type=paginated] iron-icon {
  font: normal normal normal 24px/1 Material Icons;
  -webkit-font-feature-settings: "liga";
  -moz-font-feature-settings: "liga";
  font-feature-settings: "liga";
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-transform: none;
  word-wrap: normal;
  font-size: inherit
}

body[codelabs-content-type=paginated] iron-icon[icon=file-download]:after {
  content: "cloud_download"
}

body[codelabs-content-type=paginated] google-codelab .warning,body[codelabs-content-type=paginated] google-codelab .warning :link,body[codelabs-content-type=paginated] google-codelab .warning :visited,body[codelabs-content-type=paginated] google-codelab .warning code {
  background: #fef7e0
}

body[codelabs-content-type=paginated] google-codelab .special :link,body[codelabs-content-type=paginated] google-codelab .special :visited,body[codelabs-content-type=paginated] google-codelab .special code,body[codelabs-content-type=paginated] google-codelab aside :link,body[codelabs-content-type=paginated] google-codelab aside :visited,body[codelabs-content-type=paginated] google-codelab aside code {
  background: #e6f4ea
}

body[codelabs-content-type=paginated] google-codelab-step td {
  background: transparent
}

body[codelabs-content-type=paginated] google-codelab-step .instructions h3>a[href*=github],body[codelabs-content-type=paginated] google-codelab-step .instructions h3>a[href*=github]:visited {
  background-position: 0 3px
}

body[codelabs-content-type=paginated] google-codelab-step code {
  font: 500 90%/1 var(--devsite-code-font-family)
}

body[codelabs-content-type=paginated] google-codelab-step pre {
  background: var(--devsite-code-background,#f1f3f4);
  border-radius: 0;
  color: var(--devsite-code-color,inherit);
  font: 14px/20px var(--devsite-code-font-family);
  margin: 16px 0;
  overflow-x: auto;
  padding: 8px 80px 8px 8px;
  position: relative
}

body[codelabs-content-type=paginated] google-codelab-step devsite-code pre {
  margin: 0
}

body[codelabs-content-type=paginated] google-codelab-step pre,body[codelabs-content-type=paginated] google-codelab-step pre code {
  font: 14px/20px var(--devsite-code-font-family)
}

body[codelabs-content-type=paginated] google-codelab-step code .com,body[codelabs-content-type=paginated] google-codelab-step pre .com {
  color: var(--devsite-code-comments-color)
}

body[codelabs-content-type=paginated] google-codelab-step code .dec,body[codelabs-content-type=paginated] google-codelab-step code .lit,body[codelabs-content-type=paginated] google-codelab-step pre .dec,body[codelabs-content-type=paginated] google-codelab-step pre .lit {
  color: var(--devsite-code-numbers-color)
}

body[codelabs-content-type=paginated] google-codelab-step code .kwd,body[codelabs-content-type=paginated] google-codelab-step code .tag,body[codelabs-content-type=paginated] google-codelab-step pre .kwd,body[codelabs-content-type=paginated] google-codelab-step pre .tag {
  color: var(--devsite-code-keywords-color)
}

body[codelabs-content-type=paginated] google-codelab-step code .atv,body[codelabs-content-type=paginated] google-codelab-step code .str,body[codelabs-content-type=paginated] google-codelab-step pre .atv,body[codelabs-content-type=paginated] google-codelab-step pre .str {
  color: var(--devsite-code-strings-color)
}

body[codelabs-content-type=paginated] google-codelab-step code .atn,body[codelabs-content-type=paginated] google-codelab-step code .typ,body[codelabs-content-type=paginated] google-codelab-step pre .atn,body[codelabs-content-type=paginated] google-codelab-step pre .typ {
  color: var(--devsite-code-types-color)
}

body[codelabs-content-type=paginated] google-codelab-step code .pln,body[codelabs-content-type=paginated] google-codelab-step code .pun,body[codelabs-content-type=paginated] google-codelab-step pre .pln,body[codelabs-content-type=paginated] google-codelab-step pre .pun {
  color: inherit
}

google-codelab-survey {
  visibility: hidden
}

google-codelab-survey[upgraded] {
  visibility: visible
}

google-codelab-survey {
  display: block;
  margin: 2em 0;
  padding: 0;
  background: #e8f0fe;
  border-left: 4px solid #185abc;
  border-radius: 4px;
  color: #3c4043
}

google-codelab-survey h4 {
  font-size: 16px;
  font-weight: 400;
  padding: .8em 0 0;
  margin: 0
}

google-codelab-survey .survey-question-wrapper {
  padding: .4em 0 1.1em 30px
}

google-codelab-survey .survey-question-options {
  padding: .8em 0 0
}

.survey-option-wrapper {
  cursor: pointer;
  display: block;
  padding: 0 0 4px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle
}

google-codelab-survey .option-text {
  color: #212121;
  font-size: 16px;
  padding-left: 24px
}

.survey-option-wrapper input {
  position: absolute;
  opacity: 0
}

.custom-radio-button {
  position: absolute;
  top: 5px;
  left: 0;
  height: 13px;
  width: 13px;
  background-color: #fff;
  border: 2px solid #3f51b5;
  border-radius: 50%
}

.custom-radio-button:after {
  content: "";
  position: absolute;
  display: none
}

.survey-option-wrapper input:checked~.custom-radio-button:after {
  display: block
}

.survey-option-wrapper .custom-radio-button:after {
  top: 1px;
  left: 1px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3f51b5
}

`
