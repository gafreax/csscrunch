import CleanCssLib from 'clean-css'
import { parse } from './index'
// import { css } from './data'
const cleanCssInstance = new CleanCssLib({ level: 2 })
// todo: remove empty rules
const css = `div {color:red}div{float:left}a{color:yellow; /* comment */ background: #aaff00;} p{color:#fffff}div{padding:4px;margin:0px}
.row-7 td.column.first .border {
  border: 0;
  padding: 0 30px 0 0; 
}
.row-5 td.column.first .border {
  border: 0;
  padding: 0 30px 0 0; 
}
`
// const _css = `
// body {
//   margin: 0;
//   padding: 0;
//   -webkit-text-size-adjust: none;
//   text-size-adjust: none;
//   background-color: #FFFFFF;
// }

// .nl-container {
//   background-color: #FFFFFF;
// }
// table, .column {
//   mso-table-lspace: 0pt;
//   mso-table-rspace: 0pt;
// }
// .column {
//   font-weight: 400;
//   text-align: left;
//   vertical-align: top;
// }
// p {
//   margin: 0;
// }
// img {1
//   display: block;
//   height: auto;
// }
// .desktop_hide,
// .desktop_hide table {
//   mso-hide: all;
//   display: none;
//   max-height: 0px;
//   overflow: hidden;
// }.divider_inner {
//   font-size: 1px;
//   line-height: 1px;
// }.icons_block td {
//   vertical-align: middle;
// }
// .icons_block td img {
//   border: 0;
//   margin: 0 auto;
// }
// .icons_block td a {
//   text-decoration: none;
// }
// @media (max-width: 660px) {
//   .desktop_hide table.icons-inner {
//     display: inline-block !important;
//   }
//   .icons-inner {
//     text-align: center;
//   }
//   .icons-inner td {
//     margin: 0 auto;
//   }
// }@media (max-width: 660px) {
//   .image_block img.fullWidth {
//     max-width: 100% !important;
//   }
// }
// .image_block img {
//   border: 0;
// }.menu_block.desktop_hide .menu-links span {
//   mso-hide: all;
// }
// @media (max-width: 660px) {
//   .menu-checkbox[type=checkbox] ~ .menu-links {
//     display: none !important;
//     padding: 5px 0;
//   }
//   .menu-checkbox[type=checkbox] ~ .menu-links span.sep {
//     display: none !important;
//   }
//   .menu-checkbox[type=checkbox]:checked ~ .menu-links,
//   .menu-checkbox[type=checkbox] ~ .menu-trigger {
//     display: block !important;
//     max-width: none !important;
//     max-height: none !important;
//     font-size: inherit !important;
//   }
//   .menu-checkbox[type=checkbox] ~ .menu-links > a,
//   .menu-checkbox[type=checkbox] ~ .menu-links > span.label {
//     display: block !important;
//     text-align: center;
//   }
//   .menu-checkbox[type=checkbox]:checked ~ .menu-trigger .menu-close {
//     display: block !important;
//   }
//   .menu-checkbox[type=checkbox]:checked ~ .menu-trigger .menu-open {
//     display: none !important;
//   }
//   .menu-specific {
//     display: none;
//   }
// }.social-table img {
//   border: 0;
// }
// @media (max-width: 660px) {
//   .social_block.desktop_hide .social-table {
//     display: inline-block !important;
//   }
// }.text_block {
//   word-break: break-word;
// }@media (max-width: 660px) {
//   .video_block .sizer {
//     max-width: none !important;
//   }
// }
// .video_block * {
//   box-sizing: content-box;
// }h1, h2, h3 {
//   margin: 0;
// }.paragraph_block {
//   word-break: break-word;
// }.list_block {
//   word-break: break-word;
// }
// .list_block ul, .list_block ol {
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 0;
// }
// .list_block ul.leftList, .list_block ol.leftList {
//   padding-left: 20px;
// }@media (max-width: 660px) {
//   /* TODO: check if .row is removable */
//   /*
//   .row {
//       width: 100%;
//       height: auto;
//   }
//   */
//   .row .side {
//     display: none;
//   }
//   .row-content {
//     width: 100% !important;
//   }
//   .stack .column {
//     width: 100%;
//     display: block;
//   }
//   .mobile_hide {
//     min-height: 0px;
//     max-height: 0px;
//     max-width: 0px;
//     display: none;
//     overflow: hidden;
//     font-size: 0px;
//   }
//   .desktop_hide,
//   .desktop_hide table {
//     display: table !important;
//     max-height: none !important;
//   }
//   .reverse {
//     display: table;
//     width: 100%;
//   }
//   .reverse .column.first {
//     display: table-footer-group !important;
//   }
//   .reverse .column.last {
//     display: table-header-group !important;
//   }
// }.row-1{}.row-1 .row-content{color: #000000;}.row-1 .col-1 {padding-bottom: 20px;padding-top: 20px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-1 .col-1 .block-1{width: 100%;}.row-2{background-color: #d70595;}.row-2 .row-content{background-color: #d70595;color: #000000;}.row-2 .col-1 {padding-bottom: 30px;padding-top: 30px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-2 .col-1 .block-1{padding-bottom: 5px;padding-left: 10px;padding-right: 10px;padding-top: 10px;}.row-2 .col-1 .block-2{padding-bottom: 10px;padding-left: 40px;padding-right: 40px;padding-top: 5px;}.row-3{background-color: #d70595;}.row-3 .row-content{background-color: #d70595;color: #000000;}.row-3 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-3 .col-1 .block-1{width: 100%;}.row-4{background-color: #ffffff;}.row-4 .row-content{background-color: #f7f7f5;color: #000000;}.row-4 .col-1 {padding-bottom: 20px;padding-top: 20px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-4 .col-1 .block-1{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;}.row-4 .col-1 .block-2{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 5px;}.row-4 .col-1 .block-3{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;text-align: center;}.row-5{}.row-5 .row-content{background-color: #d70595;color: #000000;}.row-5 .col-1 {border-top: 18px solid #FFFFFF;vertical-align: top;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-5 .col-1 .block-1{padding-bottom: 20px;padding-left: 10px;padding-right: 10px;padding-top: 15px;}.row-6{}.row-6 .row-content{background-color: #f7f7f5;color: #000000;}.row-6 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-6 .col-1 .block-1{width: 100%;}.row-7{}.row-7 .row-content{background-color: #f7f7f5;color: #000000;}.row-7 .col-1 {padding-bottom: 5px;padding-left: 20px;padding-right: 20px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-7 .col-1 .block-1{width: 100%;}.row-7 .col-1 .block-2{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 20px;}.row-7 .col-1 .block-3{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;}.row-7 .col-1 .block-4{padding-left: 10px;width: 100%;}.row-7 .col-1 .block-5{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;}.row-7 .col-1 .block-6{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;text-align: left;}.row-7 .col-2 {padding-bottom: 5px;padding-left: 20px;padding-right: 20px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-7 .col-2 .block-1{width: 100%;}.row-7 .col-2 .block-2{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 20px;}.row-7 .col-2 .block-3{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;}.row-7 .col-2 .block-4{padding-left: 10px;width: 100%;}.row-7 .col-2 .block-5{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;}.row-7 .col-2 .block-6{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;text-align: left;}.row-8{}.row-8 .row-content{background-color: #f7f7f5;color: #000000;}.row-8 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-9{}.row-9 .row-content{background-color: #d70595;color: #000000;}.row-9 .col-1 {padding-bottom: 5px;padding-top: 5px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-9 .col-1 .block-1{width: 100%;}.row-9 .col-1 .block-2{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;}.row-9 .col-2 {padding-bottom: 5px;padding-top: 5px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-9 .col-2 .block-1{width: 100%;}.row-9 .col-2 .block-2{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;}.row-9 .col-3 {padding-bottom: 5px;padding-top: 5px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-9 .col-3 .block-1{width: 100%;}.row-9 .col-3 .block-2{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;}.row-10{}.row-10 .row-content{background-color: #ffffff;color: #000000;}.row-10 .col-1 {padding-bottom: 20px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-10 .col-1 .block-1{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;}.row-11{background-color: #d70595;}.row-11 .row-content{background-color: #d70595;color: #000000;}.row-11 .col-1 {padding-bottom: 25px;padding-top: 25px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-11 .col-1 .block-1{padding-bottom: 5px;padding-left: 10px;padding-right: 10px;padding-top: 10px;}.row-11 .col-1 .block-2{padding-bottom: 10px;padding-left: 40px;padding-right: 40px;padding-top: 5px;}.row-11 .col-1 .block-3{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 10px;text-align: center;}.row-12{background-color: #f7f7f5;}.row-12 .row-content{color: #000000;}.row-12 .col-1 {padding-bottom: 20px;padding-top: 5px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-12 .col-1 .block-1{padding-bottom: 10px;padding-left: 10px;padding-right: 10px;padding-top: 20px;}
// `

// const css_new = 'body {\n  margin: 0;\n  padding: 0;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n  background-color: #fff1ff;\n}\n\n.nl-container {\n  background-color: #fff1ff;\n}\n\ntable, .column {\n  mso-table-lspace: 0pt;\n  mso-table-rspace: 0pt;\n}\n\n.column {\n  font-weight: 400;\n  text-align: left;\n  vertical-align: top;\n}\n\np {\n  margin: 0;\n}\n\nimg {\n  display: block;\n  height: auto;\n}\n\n.desktop_hide,\n.desktop_hide table {\n  mso-hide: all;\n  display: none;\n  max-height: 0px;\n  overflow: hidden;\n}.divider_inner {\n  font-size: 1px;\n  line-height: 1px;\n}.icons_block td {\n  vertical-align: middle;\n}\n.icons_block td img {\n  border: 0;\n  margin: 0 auto;\n}\n.icons_block td a {\n  text-decoration: none;\n}\n\n@media (max-width: 670px) {\n  .desktop_hide table.icons-inner {\n    display: inline-block !important;\n  }\n  .icons-inner {\n    text-align: center;\n  }\n  .icons-inner td {\n    margin: 0 auto;\n  }\n}@media (max-width: 670px) {\n  .image_block img.fullWidth {\n    max-width: 100% !important;\n  }\n}\n.image_block img {\n  border: 0;\n}.menu_block.desktop_hide .menu-links span {\n  mso-hide: all;\n}\n\n@media (max-width: 670px) {\n  .menu-checkbox[type=checkbox] ~ .menu-links {\n    display: none !important;\n    padding: 5px 0;\n  }\n  .menu-checkbox[type=checkbox] ~ .menu-links span.sep {\n    display: none !important;\n  }\n  .menu-checkbox[type=checkbox]:checked ~ .menu-links,\n  .menu-checkbox[type=checkbox] ~ .menu-trigger {\n    display: block !important;\n    max-width: none !important;\n    max-height: none !important;\n    font-size: inherit !important;\n  }\n  .menu-checkbox[type=checkbox] ~ .menu-links > a,\n  .menu-checkbox[type=checkbox] ~ .menu-links > span.label {\n    display: block !important;\n    text-align: center;\n  }\n  .menu-checkbox[type=checkbox]:checked ~ .menu-trigger .menu-close {\n    display: block !important;\n  }\n  .menu-checkbox[type=checkbox]:checked ~ .menu-trigger .menu-open {\n    display: none !important;\n  }\n  .menu-specific {\n    display: none;\n  }\n}.social-table img {\n  border: 0;\n}\n\n@media (max-width: 670px) {\n  .social_block.desktop_hide .social-table {\n    display: inline-block !important;\n  }\n}.text_block {\n  word-break: break-word;\n}@media (max-width: 670px) {\n  .video_block .sizer {\n    max-width: none !important;\n  }\n}\n.video_block * {\n  box-sizing: content-box;\n}h1, h2, h3 {\n  margin: 0;\n}.paragraph_block {\n  word-break: break-word;\n}.list_block {\n  word-break: break-word;\n}\n.list_block ul, .list_block ol {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n}\n.list_block ul.leftList, .list_block ol.leftList {\n  padding-left: 20px;\n}@media (max-width: 670px) {\n  /* TODO: check if .row is removable */\n  /*\n  .row {\n  \twidth: 100%;\n  \theight: auto;\n  }\n  */\n  .row .side {\n    display: none;\n  }\n  .row-content {\n    width: 100% !important;\n  }\n  .stack .column {\n    width: 100%;\n    display: block;\n  }\n  .mobile_hide {\n    min-height: 0px;\n    max-height: 0px;\n    max-width: 0px;\n    display: none;\n    overflow: hidden;\n    font-size: 0px;\n  }\n  .desktop_hide,\n  .desktop_hide table {\n    display: table !important;\n    max-height: none !important;\n  }\n  .reverse {\n    display: table;\n    width: 100%;\n  }\n  .reverse .column.first {\n    display: table-footer-group !important;\n  }\n  .reverse .column.last {\n    display: table-header-group !important;\n  }\n}.row-1{background-color: #ffffff;}.row-1 .row-content{background-color: #ffffff;color: #000000;}.row-1 .col-1 {padding-bottom: 10px;padding-top: 10px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-1 .col-1 .block-1{}.row-2{background-color: #ffffff;}.row-2 .row-content{background-color: #bf8c41;color: #000000;}.row-2 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-2 .col-1 .block-1{width: 100%;}.row-3{background-color: #ffffff;}.row-3 .row-content{background-color: #FFFFFF;color: #000000;}.row-3 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-3 .col-1 .block-1{width: 100%;}.row-4{}.row-4 .row-content{background-color: #ffffff;color: #000000;}.row-4 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-4 .col-1 .block-1{width: 100%;}.row-4 .col-2 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-4 .col-2 .block-1{width: 100%;}.row-4 .col-3 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-4 .col-3 .block-1{width: 100%;}.row-4 .col-4 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-4 .col-4 .block-1{width: 100%;}.row-5{background-color: #ffffff;}.row-5 .row-content{background-color: #f9f7ea;color: #000000;}.row-5 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-5 .col-1 .block-1{width: 100%;}.row-5 .col-1 .block-2{width: 100%;}.row-6{background-color: #ffffff;}.row-6 .row-content{background-color: #f3dfdb;color: #000000;}.row-6 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-6 .col-1 .block-1{width: 100%;}.row-7{background-color: #ffffff;}.row-7 .row-content{background-color: #f3dfdb;color: #000000;}.row-7 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-7 .col-1 .block-1{}.row-8{background-color: #ffffff;}.row-8 .row-content{background-color: #f3dfdb;color: #000000;}.row-8 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-8 .col-1 .block-1{width: 100%;}.row-9{background-color: #ffffff;}.row-9 .row-content{background-color: #ffffff;color: #000000;}.row-9 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-9 .col-1 .block-1{width: 100%;}.row-10{background-color: #ffffff;}.row-10 .row-content{background-color: #ffffff;color: #000000;}.row-10 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-10 .col-1 .block-1{width: 100%;}.row-10 .col-2 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-10 .col-2 .block-1{width: 100%;}.row-11{}.row-11 .row-content{background-color: #ffffff;color: #000000;}.row-11 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-11 .col-1 .block-1{width: 100%;}.row-12{background-color: #ffffff;}.row-12 .row-content{background-color: #e2e4e9;color: #000000;}.row-12 .col-1 {padding-bottom: 10px;padding-top: 22px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-12 .col-1 .block-1{width: 100%;}.row-13{background-color: #ffffff;}.row-13 .row-content{background-color: #e2e4e9;color: #000000;}.row-13 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-13 .col-2 {padding-bottom: 5px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-13 .col-2 .block-1{color: #000000;font-family: inherit;font-size: 14px;text-align: center;}.row-13 .col-3 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-14{background-color: #ffffff;}.row-14 .row-content{background-color: #e2e4e9;color: #000000;}.row-14 .col-1 {padding-bottom: 30px;padding-left: 15px;padding-right: 15px;padding-top: 20px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-14 .col-1 .block-1{}'
// const css = `
// body {
//   margin: 0;
//   padding: 0;
//   -webkit-text-size-adjust: none;
//   text-size-adjust: none;
//   background-color: #fff1ff;
// }

// .nl-container {
//   background-color: #fff1ff;
// }

// table, .column {
//   mso-table-lspace: 0pt;
//   mso-table-rspace: 0pt;
// }

// .column {
//   font-weight: 400;
//   text-align: left;
//   vertical-align: top;
// }

// p {
//   margin: 0;
// }

// img {
//   display: block;
//   height: auto;
// }

// .desktop_hide,
// .desktop_hide table {
//   mso-hide: all;
//   display: none;
//   max-height: 0px;
//   overflow: hidden;
// }.divider_inner {
//   font-size: 1px;
//   line-height: 1px;
// }.icons_block td {
//   vertical-align: middle;
// }
// .icons_block td img {
//   border: 0;
//   margin: 0 auto;
// }
// .icons_block td a {
//   text-decoration: none;
// }

// @media (max-width: 670px) {
//   .desktop_hide table.icons-inner {
//     display: inline-block !important;
//   }
//   .icons-inner {
//     text-align: center;
//   }
//   .icons-inner td {
//     margin: 0 auto;
//   }
// }@media (max-width: 670px) {
//   .image_block img.fullWidth {
//     max-width: 100% !important;
//   }
// }
// .image_block img {
//   border: 0;
// }.menu_block.desktop_hide .menu-links span {
//   mso-hide: all;
// }

// @media (max-width: 670px) {
//   .menu-checkbox[type=checkbox] ~ .menu-links {
//     display: none !important;
//     padding: 5px 0;
//   }
//   .menu-checkbox[type=checkbox] ~ .menu-links span.sep {
//     display: none !important;
//   }
//   .menu-checkbox[type=checkbox]:checked ~ .menu-links,
//   .menu-checkbox[type=checkbox] ~ .menu-trigger {
//     display: block !important;
//     max-width: none !important;
//     max-height: none !important;
//     font-size: inherit !important;
//   }
//   .menu-checkbox[type=checkbox] ~ .menu-links > a,
//   .menu-checkbox[type=checkbox] ~ .menu-links > span.label {
//     display: block !important;
//     text-align: center;
//   }
//   .menu-checkbox[type=checkbox]:checked ~ .menu-trigger .menu-close {
//     display: block !important;
//   }
//   .menu-checkbox[type=checkbox]:checked ~ .menu-trigger .menu-open {
//     display: none !important;
//   }
//   .menu-specific {
//     display: none;
//   }
// }.social-table img {
//   border: 0;
// }

// @media (max-width: 670px) {
//   .social_block.desktop_hide .social-table {
//     display: inline-block !important;
//   }
// }.text_block {
//   word-break: break-word;
// }@media (max-width: 670px) {
//   .video_block .sizer {
//     max-width: none !important;
//   }
// }
// .video_block * {
//   box-sizing: content-box;
// }h1, h2, h3 {
//   margin: 0;
// }.paragraph_block {
//   word-break: break-word;
// }.list_block {
//   word-break: break-word;
// }
// .list_block ul {
//   list-style-position: inside;
// }
// .list_block ul, .list_block ol {
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 0;
// }
// .list_block ul.leftList, .list_block ol.leftList {
//   padding-left: 20px;
// }@media (max-width: 670px) {
//   /* TODO: check if .row is removable */
//   /*
//   .row {
//     width: 100%;
//     height: auto;
//   }
//   */
//   .row .side {
//     display: none;
//   }
//   .row-content {
//     width: 100% !important;
//   }
//   .stack .column {
//     width: 100%;
//     display: block;
//   }
//   .mobile_hide {
//     min-height: 0px;
//     max-height: 0px;
//     max-width: 0px;
//     display: none;
//     overflow: hidden;
//     font-size: 0px;
//   }
//   .desktop_hide,
//   .desktop_hide table {
//     display: table !important;
//     max-height: none !important;
//   }
//   .reverse {
//     display: table;
//     width: 100%;
//   }
//   .reverse .column.first {
//     display: table-footer-group !important;
//   }
//   .reverse .column.last {
//     display: table-header-group !important;
//   }
// }.row-1{background-color: #ffffff;}.row-1 .row-content{background-color: #ffffff;color: #000000;}.row-1 .col-1 {padding-bottom: 10px;padding-top: 10px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-1 .col-1 .block-1{}.row-2{background-color: #ffffff;}.row-2 .row-content{background-color: #bf8c41;color: #000000;}.row-2 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-2 .col-1 .block-1{width: 100%;}.row-3{background-color: #ffffff;}.row-3 .row-content{background-color: #FFFFFF;color: #000000;}.row-3 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-3 .col-1 .block-1{width: 100%;}.row-4{}.row-4 .row-content{background-color: #ffffff;color: #000000;}.row-4 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-4 .col-1 .block-1{width: 100%;}.row-4 .col-2 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-4 .col-2 .block-1{width: 100%;}.row-4 .col-3 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-4 .col-3 .block-1{width: 100%;}.row-4 .col-4 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-4 .col-4 .block-1{width: 100%;}.row-5{background-color: #ffffff;}.row-5 .row-content{background-color: #f9f7ea;color: #000000;}.row-5 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-5 .col-1 .block-1{width: 100%;}.row-5 .col-1 .block-2{width: 100%;}.row-6{background-color: #ffffff;}.row-6 .row-content{background-color: #f3dfdb;color: #000000;}.row-6 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-6 .col-1 .block-1{width: 100%;}.row-7{background-color: #ffffff;}.row-7 .row-content{background-color: #f3dfdb;color: #000000;}.row-7 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-7 .col-1 .block-1{}.row-8{background-color: #ffffff;}.row-8 .row-content{background-color: #f3dfdb;color: #000000;}.row-8 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-8 .col-1 .block-1{width: 100%;}.row-9{background-color: #ffffff;}.row-9 .row-content{background-color: #ffffff;color: #000000;}.row-9 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-9 .col-1 .block-1{width: 100%;}.row-10{background-color: #ffffff;}.row-10 .row-content{background-color: #ffffff;color: #000000;}.row-10 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-10 .col-1 .block-1{width: 100%;}.row-10 .col-2 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-10 .col-2 .block-1{width: 100%;}.row-11{}.row-11 .row-content{background-color: #ffffff;color: #000000;}.row-11 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-11 .col-1 .block-1{width: 100%;}.row-12{background-color: #ffffff;}.row-12 .row-content{background-color: #e2e4e9;color: #000000;}.row-12 .col-1 {padding-bottom: 10px;padding-top: 22px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-12 .col-1 .block-1{width: 100%;}.row-13{background-color: #ffffff;}.row-13 .row-content{background-color: #e2e4e9;color: #000000;}.row-13 .col-1 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-13 .col-2 {padding-bottom: 5px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-13 .col-2 .block-1{color: #000000;font-family: inherit;font-size: 14px;text-align: center;}.row-13 .col-3 {vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-14{background-color: #ffffff;}.row-14 .row-content{background-color: #e2e4e9;color: #000000;}.row-14 .col-1 {padding-bottom: 30px;padding-left: 15px;padding-right: 15px;padding-top: 20px;vertical-align: top;border-top: 0px;border-right: 0px;border-bottom: 0px;border-left: 0px;}.row-14 .col-1 .block-1{}'
// `
console.log('css ', css)
const perf = []
const testNumber = 1000
for (let i = 0; i < testNumber; i++) {
  const t1 = performance.now()
  parse(css)
  const d1 = performance.now() - t1
  const t2 = performance.now()
  cleanCssInstance.minify(css)
  const d2 = performance.now() - t2
  perf.push({ d1, d2, win: d1 < d2 ? 'd1' : 'd2' })
}

const a = parse(css)
const b = cleanCssInstance.minify(css)
console.log('== result mine == \n', a, '\n')
console.log('== result lib ==\n', b.styles, '\n')
console.table({
  average: {
    mine: perf.reduce((prev, cur) => prev + cur.d1, 0) / perf.length,
    lib: perf.reduce((prev, cur) => prev + cur.d2, 0) / perf.length
  },
  wins: {
    mine: perf.reduce((prev, cur) => prev + (cur.win === 'd1' ? 1 : 0), 0),
    lib: perf.reduce((prev, cur) => prev + (cur.win === 'd2' ? 1 : 0), 0)
  },
  size: {
    mine: a.length,
    lib: b.styles.length
  },
  'orginal css': { size: css.length }
})
