import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapterPlugin from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";

import AutoformatPlugin from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Font from "@ckeditor/ckeditor5-font/src/font";

import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import UnderlinePlugin from "@ckeditor/ckeditor5-basic-styles/src/underline";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code";

import BlockQuotePlugin from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import EasyImagePlugin from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import HeadingPlugin from "@ckeditor/ckeditor5-heading/src/heading";
import ImagePlugin from "@ckeditor/ckeditor5-image/src/image";
import ImageCaptionPlugin from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStylePlugin from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbarPlugin from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUploadPlugin from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";

import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import ListPlugin from "@ckeditor/ckeditor5-list/src/list";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";

import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";

import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
  EssentialsPlugin,
  UploadAdapterPlugin,
  Font,
  AutoformatPlugin,
  BoldPlugin,
  UnderlinePlugin,
  ItalicPlugin,
  Strikethrough,
  Subscript,
  Code,

  BlockQuotePlugin,
  EasyImagePlugin,
  HeadingPlugin,
  ImagePlugin,
  ImageCaptionPlugin,
  ImageResize,
  ImageStylePlugin,
  ImageToolbarPlugin,
  ImageUploadPlugin,
  MediaEmbed,

  LinkPlugin,
  ListPlugin,

  Table,
  TableToolbar,
  ParagraphPlugin,
  Alignment,
  RemoveFormat
];

ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      "removeformat",
      "|",
      "heading",
      "|",
      "fontSize",
      "fontFamily",
      "fontColor",
      "fontBackgroundColor",
      "|",
      "bold",
      "underline",
      "italic",
      "strikethrough",
      "subscript",
      "code",
      "|",

      "alignment",
      "|",
      "link",
      "bulletedList",
      "numberedList",
      "|",

      "imageUpload",
      "mediaembed",
      "insertTable",
      "blockQuote",
      "|",
      "undo",
      "redo",
      "|"
    ]
  },

  fontSize: {
    options: [8, 10, 12, 14, 16, 18, 20, 24, 26, 28, 30, 32]
  },
  fontFamily: {
    options: [
      "default",
      "Arial, Helvetica, sans-serif",
      "Courier New, Courier, monospace",
      "Georgia, serif",
      "Lucida Sans Unicode, Lucida Grande, sans-serif",
      "Tahoma, Geneva, sans-serif",
      "Times New Roman, Times, serif",
      "Trebuchet MS, Helvetica, sans-serif",
      "Verdana, Geneva, sans-serif"
    ]
  },
  fontColor: {
    colors: [
      {
        color: "hsl(0, 0%, 0%)",
        label: "Black"
      },
      {
        color: "hsl(0, 0%, 30%)",
        label: "Dim grey"
      },
      {
        color: "hsl(0, 0%, 60%)",
        label: "Grey"
      },
      {
        color: "hsl(0, 0%, 90%)",
        label: "Light grey"
      },
      {
        color: "hsl(0, 0%, 100%)",
        label: "White",
        hasBorder: true
      }

      // ...
    ]
  },
  fontBackgroundColor: {
    colors: [
      {
        color: "hsl(0, 75%, 60%)",
        label: "Red"
      },
      {
        color: "hsl(30, 75%, 60%)",
        label: "Orange"
      },
      {
        color: "hsl(60, 75%, 60%)",
        label: "Yellow"
      },
      {
        color: "hsl(90, 75%, 60%)",
        label: "Light green"
      },
      {
        color: "hsl(120, 75%, 60%)",
        label: "Green"
      }

      // ...
    ]
  },
  image: {
    toolbar: [
      "imageTextAlternative",
      "|",
      "imageStyle:alignLeft",
      "imageStyle:full",
      "imageStyle:alignRight"
    ],
    styles: ["full", "side", "alignLeft", "alignCenter", "alignRight"],
    resizeUnit: "px"
  },
  alignment: {
    options: ["left", "center", "right"]
  },
  language: "en"
};
