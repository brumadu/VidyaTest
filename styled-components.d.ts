import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: string;
      primaryButton: string;
      secondaryButton: string;
      primaryText: string;
      secondaryText: string;
    };
  }
}
