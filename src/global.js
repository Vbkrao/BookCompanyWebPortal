import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;
--font-lato: Lato;

/* font sizes */
--font-size-base: 16px;
--font-size-41xl: 60px;
--font-size-3xl: 22px;
--font-size-lg: 18px;
--font-size-sm: 14px;
--font-size-7xl: 26px;
--font-size-26xl: 45px;
--font-size-29xl: 48px;
--font-size-smi: 13px;
--font-size-9xl: 28px;
--font-size-4xl: 23px;
--font-size-5xl: 24px;
--font-size-13xl: 32px;
--font-size-xl: 20px;
--font-size-17xl: 36px;

/* Colors */
--color-white: #fff;
--color-tomato-100: #ed553b;
--color-tomato-200: rgba(237, 85, 59, 0.8);
--color-darkslateblue-100: #463c74;
--color-darkslateblue-200: #393280;
--color-darkslateblue-300: rgba(57, 50, 128, 0.8);
--color-gray-100: #888;
--color-gray-200: #848383;
--color-gray-300: #7a7a7a;
--color-gray-400: #111;
--color-lightgray: #d1d1d1;
--color-gainsboro-100: #e5e3da;
--color-gainsboro-200: #e0e0e0;
--color-silver-100: #c4c4c4;
--color-silver-200: #bebebe;
--color-silver-300: #bcbcbc;
--color-whitesmoke-100: #f6f6f6;
--color-whitesmoke-200: #eaeaea;
--color-black: #000;
--color-lavenderblush-100: #fcecec;
--color-lavenderblush-200: #fcebea;
--color-linen: #eae8df;

/* Gaps */
--gap-mini: 15px;
--gap-6xl: 25px;
--gap-3xs: 10px;

/* Border radiuses */
--br-6xs: 7px;
--br-xl: 20px;
--br-3xs: 10px;
--br-5xs: 8px;

}
`;
