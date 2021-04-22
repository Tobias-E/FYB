import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
import { primaryFont, headerFont } from './typography';
import { normalize } from 'polished';

export const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    ${normalize}
    html{
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body{
        margin: 0;
        font-family: ${primaryFont};
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${headerFont};
    }
`;
