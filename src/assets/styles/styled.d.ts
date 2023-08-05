import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      desktop: string;
    };
    title: string;
    colors: {
      background: string;
      card_background: string;
      nav_background: string;
      primary_text: string;
      secondary_text: string;
      highlight: string;
      scroll: string;
    };
  }
}
