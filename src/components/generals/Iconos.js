import React from "react";
import { View } from "react-native";

import Svg, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
  Style,
} from "react-native-svg";

import SvgIcon from "react-native-svg-icon";

const Iconos = (props) => <SvgIcon svgs={svgs} {...props} />;

Iconos.defaultProps = {
  //Esto modifica la caja
  viewBox: "0 0 100 100",
};

export default Iconos;

export const svgs = {
  Desplegar: (
    <Svg viewBox="0 0 12 8">
      <Path d="M11.3674 0.499979L12 1.13254L6 7.13254L0 1.13254L0.632559 0.499979L6 5.86742L11.3674 0.499979Z" />
    </Svg>
  ),
  Perro: (
    <Svg id="Capa_1" data-name="Capa 1" viewBox="0 0 362 271">
      <Path
        // class="cls-1"
        d="M330.26,58.11a3.42,3.42,0,0,0-2.18-5.06c-1.36-.5-2.65-.95-3.87-1.39-7.54-2.66-12.84-4.27-18.71-6.42-6.82-2.51-5-9.43-11.31-12.56a40.66,40.66,0,0,0-11.54-3.39c-1.78-.27-3.62-.49-5.48-.62a69,69,0,0,0-14.45.4A17.57,17.57,0,0,0,252,34.94L241.56,40c-5,3.44-3.59,9.35-1.33,15-7.84,9.21-15.18,17.66-22.37,24.63-2.42,2.35-4.81,4.54-7.23,6.56h0c-.92-.09-1.83-.14-2.77-.17a75.29,75.29,0,0,0-21.41,2.39c-1,.26-2,.47-3,.64-6.37,1.17-12.86,1-19.38.7-2.31-.11-4.64-.25-6.95-.35l-1.91-.08c-12.87-.6-21.12-1.36-29-1.41-1.42,0-2.83,0-4.25.05a118.24,118.24,0,0,0-14.15,1.34h0c-.16,0-.33.05-.5.09l-1.24,0c-1.91.06-4,.15-6.06.2H97.7c-3,0-6,0-9.2-.16s-6.45-.51-9.65-1c-1.8-.28-3.27-.55-4.88-.92s-3.24-.8-4.83-1.29A57.62,57.62,0,0,1,51.58,77.6a48.65,48.65,0,0,1-6.8-6.11L44,70.67l-.34-.37-.35-.42c-.45-.59-.92-1.14-1.36-1.71-.82-1.12-1.62-2.16-2.33-3.27C38.22,62.74,37,60.66,36,58.77s-1.89-3.54-2.58-4.93c-1.37-2.76-2.14-4.36-2.14-4.36s.55,1.68,1.54,4.63c.49,1.46,1.11,3.23,1.89,5.26s1.71,4.29,2.89,6.72C38,67,38.53,68,39,68.91c0,0,0,0,0,0,.15.32.32.62.48.92.37.6.76,1.22,1.13,1.86l.3.47.33.52.67,1a53.56,53.56,0,0,0,6.42,7.59,64.46,64.46,0,0,0,18,12.24c1.69.77,3.42,1.5,5.16,2.16s3.66,1.29,5.25,1.76c3.6,1,7,1.82,10.46,2.44,1.64.3,3.26.57,4.84.79L91.36,102c-5.46,10.24-6.5,24-6.92,31.69a107,107,0,0,1-1.92,11.07c-.32,1.37-.66,2.69-1,4h0c-.17.61-.34,1.19-.52,1.78a76.14,76.14,0,0,1-6.82,16.27l0,0c-7.12,12.5-15,16.74-15,16.74,0,.79-4.67,20.4-7.8,33.28l-.62,2.54h-.1a54.49,54.49,0,0,0-2,8.61c-.94,5.81,2.75,11.06,5.93,11.06l6.4,0c4.75,0,6.22-5.23,4.13-8.78s-4.51-4.77-3.24-9.62h-.06l10.57-29.77,14.3-7,8.83-4.34c-.5,1.36-1,2.53-1.35,3.61-.56,1.59-2.15,5.16-1.23,6.57,3.07,4.71,10.48,22.51,13.28,25.75a27.41,27.41,0,0,1,2,5.16c2.62,9.11,6.6,9.52,9.64,9.52l4.4.16c4.53,0,5.53-5.73,2.7-8.51-2.46-2.43-6.4-4.4-10.1-9.6-4.16-7.32-6.6-16.46-8.17-19a3.25,3.25,0,0,1,.18-3.65c2.84-3.78,4.93-3.1,9.94-7.87,13.06-12.45,20.09-16.25,25.83-26.27l1.95.5c2.46.62,4.45-.61,4.71-2.7v-.07a5,5,0,0,0-.78-3.13c10.39,4.22,19.48,8.95,25.24,10.69,13,4,22.36-1.09,29.63.58l-.17,7.61-.82,35.71c0,1.06,3.3,14.37,4.84,20.6v0c.28,2.49,2.16,15.8,9,15.8l6,.32,2.64.13c3.23,0,4.89-1.05,5.61-2.55a5.61,5.61,0,0,0,4.25,2.17l8.57.45c7.86,0,6.66-6.2,4.13-10.3-1.91-3.06-5.66-4.18-8.06-6.08l-3.06-10.38a44.88,44.88,0,0,1-1.59-16.78l4.84-51c2-3.61,2.71-7.59,4.75-13.93.77-2.38,1.71-5.1,3-8.25l2.53-5.13,1.42-2.88,1.83-3.67h0l1.07-2.2,3.49-7.09v0l9.37-19a7,7,0,0,1,8.44-2.38c6.52,2.82,10.88,5.1,17,11.12,2,1.1,5.58.53,8.21-.37a15.71,15.71,0,0,0,1.56-.64l1-.47a3,3,0,0,0,1.66-3.2,4.87,4.87,0,0,1,.25,1.36,13.56,13.56,0,0,1-.66,3.66,8.87,8.87,0,0,0-.39,3.68,1.57,1.57,0,0,0,.45,1c.54.45,1.36.15,2-.21.41-.25.8-.51,1.19-.79a1.94,1.94,0,0,0,.78-.9,2.16,2.16,0,0,0,0-.84l-.42-3.6a15.82,15.82,0,0,0-.59-3.14,10.47,10.47,0,0,0-3.41-4.6c-.53-.43-1.11-.8-1.68-1.18l.27-.65-.56.44c-.95-.61-1.92-1.19-2.9-1.75-2.39-1.39-4.75-2.84-7-4.41a17.42,17.42,0,0,0-2.7-1.65,5.25,5.25,0,0,0-2.79-.45,5.9,5.9,0,0,1-1.06-1.22,4.21,4.21,0,0,1-.6-2.92,2.64,2.64,0,0,1,.62-1.36l0-.06a8.87,8.87,0,0,1,8.61-2.67L312,71.79a11.81,11.81,0,0,0,6.93-1.42,23.16,23.16,0,0,0,5.92-4.46,26.19,26.19,0,0,0,2.05-2.38c.51-.69,1-1.38,1.39-2.06l.4-.69ZM221,225.06l-3.28-10.76a35.41,35.41,0,0,1-1-15.83l3.33-19.91,1,26a19.38,19.38,0,0,0,.57,4L225.78,225c.05.48.21,1.75.52,3.39C224.52,227.17,222.5,226.24,221,225.06Z"
      />
    </Svg>
  ),

  Concentrado: (
    <Svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 278 271"
    >
      <Path
        class="cls-1"
        d="M215.12,73.87c0-3.89,1.19-32,1.19-44.87-23.77.65-115.17,0-115.17,0S81.53,35.26,74.9,35.64c-1.07,22.72-2,34.22-2,42.32S49.51,212,50.09,219.58s19.32,18.14,25.75,21.65,148.06-5.85,151.57-10.83S215.12,77.76,215.12,73.87ZM153,202.61a49.45,49.45,0,1,1,49.45-49.45A49.44,49.44,0,0,1,153,202.61Z"
      />
      <Path
        class="cls-1"
        d="M174.9,157a9.13,9.13,0,0,0-.88,1.91l-13.15-8.06-7-4.29-13.16-8.07a10.11,10.11,0,0,0,1.31-1.65,9.41,9.41,0,1,0-16.86-1.79,9.39,9.39,0,1,0,9.24,14.21c.13-.22.21-.46.33-.69l13,8,7,4.29,13,8c-.15.21-.32.39-.46.61a9.41,9.41,0,1,0,16.85,1.79A9.39,9.39,0,1,0,174.9,157Z"
      />
    </Svg>
  ),

  Patita: (
    <Svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 278 271"
    >
      <Path
        class="cls-1"
        d="M142.34,101.27c11.45,7.3,29.94-1.22,41.3-19s11.3-38.17-.14-45.47-29.93,1.22-41.3,19S130.91,94,142.34,101.27Z"
      />
      <Path
        class="cls-1"
        d="M85.89,98.27C98,102.71,113.45,91,120.37,72.16S123.09,34.4,111,29.94,83.42,37.19,76.49,56,73.78,93.81,85.89,98.27Z"
      />
      <Path
        class="cls-1"
        d="M155.58,122.42C125.3,88,18.84,114.16,33.8,151.59c12.2,30.5,30.36,15,46.41,35,.35.44.67.88,1,1.31s.79.75,1.18,1.15c17.79,18.45.16,34.51,28.87,50.46C146.49,259.11,185.87,156.8,155.58,122.42Z"
      />
      <Path
        class="cls-1"
        d="M174.88,138.21c5.8,12.27,26,14.91,45.08,5.89s29.9-26.29,24.11-38.55-26-14.91-45.09-5.9S169.09,125.94,174.88,138.21Z"
      />
      <Path
        class="cls-1"
        d="M241.67,178.35c-2.88-12.58-21.09-19.15-40.69-14.66S167.86,182,170.73,194.6s21.11,19.15,40.7,14.65S244.55,190.93,241.67,178.35Z"
      />
    </Svg>
  ),
  Logo: (
    <Svg
      id="Capa_1"
      data-name="Capa 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 278 271"
    >
      <Path
        class="cls-1"
        d="M66.59 125.6l63.48 22.32 84.08-26.04-77.81-14.85-69.75 18.57z"
      />
      <Path
        class="cls-2"
        d="M130.05 148.9l-66.62-23.43 72.88-19.39h.21L218 121.66zm-60.3-23.18l60.34 21.22 80.22-24.85L136.38 108z"
      />
      <Path
        class="cls-3"
        d="M136.34 107l26.55-12.77a11.28 11.28 0 017.19-.88l57 11.92a3.69 3.69 0 011.38 6.62l-14.1 10z"
      />
      <Path
        class="cls-2"
        d="M214.59 122.87l-.39-.08-80.81-15.37 29.1-14a12.28 12.28 0 017.78-1l57 11.92a4.61 4.61 0 011.72 8.29zm-75.29-16.22l74.86 14.24 13.78-9.73a2.76 2.76 0 00-1-5l-57-11.92a10.43 10.43 0 00-6.6.81z"
      />
      <Path
        class="cls-3"
        d="M136.34 107.03v39.52l16.77-5.77 61.27-18.9-78.04-14.85z"
      />
      <Path
        class="cls-2"
        d="M135.41 147.86v-42l82.82 15.75-64.83 20zm1.87-39.7v37.09l15.56-5.36 57.68-17.8z"
      />
      <Path
        class="cls-3"
        d="M66.59 125.6l-13.26-20.89a6.86 6.86 0 014.55-10.42l56.7-10.47a7.8 7.8 0 017.81 3.2l14 20z"
      />
      <Path
        class="cls-2"
        d="M66.17 126.67l-13.62-21.46a7.79 7.79 0 015.16-11.84l56.7-10.47a8.74 8.74 0 018.74 3.59l14.72 21.1zm49.82-42a7.42 7.42 0 00-1.24.11L58.05 95.2a5.93 5.93 0 00-3.93 9L67 124.52l67.81-18-13.2-18.92a6.86 6.86 0 00-5.61-2.98z"
      />
      <Path
        class="cls-3"
        d="M130.07 147.92l-.53 92.64-62.95-25.11V125.6l63.48 22.32z"
      />
      <Path
        class="cls-2"
        d="M130.47 241.93l-64.81-25.85v-91.8l65.35 23zm-62.95-27.11l61.1 24.37.52-90.61-61.62-21.67z"
      />
      <Path
        class="cls-3"
        d="M130.07 147.92l-16.19 25.34a7.9 7.9 0 01-9.72 3L51 154a6.71 6.71 0 01-2.12-11l17.71-17.4z"
      />
      <Path
        class="cls-2"
        d="M107.23 177.84a8.83 8.83 0 01-3.43-.69l-53.14-22.29a7.65 7.65 0 01-2.41-12.5l18.1-17.84 65.14 22.91-16.83 26.33a8.82 8.82 0 01-7.43 4.08zm-40.4-51.17l-17.27 17a5.78 5.78 0 001.82 9.45l53.14 22.29a6.94 6.94 0 008.57-2.67l15.56-24.35z"
      />
      <Path
        d="M189.9 134c-.6-.37-1.18-.77-1.75-1.19-4.17-3.1-43.89-45.37-48.42-47-.61-.22-1.2-.42-1.82-.61-1-1.91-2-4-2.9-6.08-2.77-6.34-5.26-13.67-7.85-21.6 2.93-3.06 5.37-6.47 3.08-10l-5.36-6a12.2 12.2 0 00-5.3-6.56 48.08 48.08 0 00-9.14-4c-1.22-.4-2.46-.74-3.66-1a28.14 28.14 0 00-8.27-.86c-4.85.31-5.51 5.2-10.51 5.02-4.31-.16-8.11-.52-13.63-.79l-2.87-.13a2.36 2.36 0 00-2.72 2.67l.3 2.11.07.55a16.26 16.26 0 00.35 1.68 17.79 17.79 0 00.69 2.06 16.21 16.21 0 002.61 4.4 8.18 8.18 0 004.07 2.72l12.63 1.27a6.16 6.16 0 014.81 4v.06a1.77 1.77 0 010 1 2.84 2.84 0 01-1.15 1.7 3.84 3.84 0 01-1 .51 3.59 3.59 0 00-1.91-.44 11.34 11.34 0 00-2.15.35c-1.87.4-3.76.71-5.66 1-.77.11-1.54.22-2.3.36l-.14-.47v.49a12.75 12.75 0 00-1.39.32 7.15 7.15 0 00-3.38 2.05A9.94 9.94 0 0074 63.44l-1.21 2.19a1.38 1.38 0 00-.21.54 1.43 1.43 0 00.26.79c.17.27.36.54.56.81s.74.79 1.2.65a1.16 1.16 0 00.55-.5 6.19 6.19 0 00.71-2.46 8.93 8.93 0 01.53-2.46 3.45 3.45 0 01.51-.81 2.09 2.09 0 00.22 2.49l.53.56c.24.26.52.54.83.82 1.45 1.27 3.57 2.56 5.16 2.38a33.58 33.58 0 0113.8-2.64 4.83 4.83 0 014.78 3.74l1 14.58.37 5.45.11 1.68.21 2.83.15 2.21.28 3.94c0 2.35-.12 4.33-.25 6.06-.11 1.41-.24 2.64-.36 3.75l-.1.07c-5.58 3.22-11.26 6.3-17 9.31a66.85 66.85 0 01-6.63 2.71 12.1 12.1 0 00-8 10.2c-.41 3-.59 6-.72 9-.17 3.74-1.92 6.78-3.85 9.82a15.4 15.4 0 00-1.71 4.24c-.51 1.85.82 2.81 2.51 3.31a5.86 5.86 0 006.35-2.26 25.72 25.72 0 013.42-3.87c1.35-1.26 1.95-2.64 1.09-4.35a6.63 6.63 0 01-.35-5.72c.48-1.23.44-2.67.93-3.9.3-.74 1.09-1.69 1.81-1.77 1.8-.2 2-1.31 2-2.54.11-2.86.37-3.24 3.36-3.95 4.71-1.13 9.45-2.14 14.13-3.34 4.13-1.06 8.28-2.12 12.38-3.26l3.25 2.82c-5.52 3.13-11.13 6.12-16.79 9a65 65 0 01-6.55 2.66 11.75 11.75 0 00-7.87 10c-.39 2.93-.56 5.91-.68 8.89-.14 3.66-1.86 6.64-3.76 9.61a15.24 15.24 0 00-1.67 4.16c-.5 1.81.82 2.76 2.5 3.25a5.8 5.8 0 006.29-2.13 25.84 25.84 0 013.33-3.84c1.33-1.22 1.92-2.57 1.06-4.26a6.45 6.45 0 01-.37-5.62c.47-1.2.42-2.62.91-3.81.29-.73 1.06-1.66 1.78-1.73 1.78-.19 2-1.28 2-2.49.11-2.8.36-3.18 3.32-3.86 4.66-1.08 9.35-2.06 14-3.21s9.1-2.25 13.6-3.5c3.9 5.9 8.47 15.34 15 16 3 .28 6.72 10.16 11.92 10l34.68-23.79c-1.9-.89 2.34-6.75.6-7.89z"
        fill="#161c34"
      />
      <Path
        class="cls-1"
        d="M214.15 202.7l-84.61 37.86.53-92.64 84.31-26.04-.23 80.82z"
      />
      <Path
        class="cls-2"
        d="M128.6 242l.54-94.77 86.17-26.61-.23 82.68zm2.4-93.39l-.52 90.51 82.74-37 .22-79z"
      />
      <Path
        class="cls-3"
        d="M130.07 147.92l16.65 28.52a6.52 6.52 0 008 2.8l72-27.64a6.8 6.8 0 002.89-10.6l-15.23-19.14z"
      />
      <Path
        class="cls-2"
        d="M152.33 180.61a7.41 7.41 0 01-6.41-3.7l-17.24-29.53 86-26.58 15.63 19.64a7.73 7.73 0 01-3.28 12L155 180.11a7.43 7.43 0 01-2.67.5zm-20.86-32.15L147.53 176a5.57 5.57 0 006.82 2.4l72.05-27.64a5.87 5.87 0 002.48-9.13L214.05 123z"
      />
    </Svg>
  ),
};
