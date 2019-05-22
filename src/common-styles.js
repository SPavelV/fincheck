import styled from 'styled-components';

//grid:
export const maxWidth = `1360px`;
export const gutterDesktop = `20px`;
export const gutterMobile = `15px`;
export const mediaMinWidthDesktop = `768px`;
export const mediaMinWidthDesktopLarge = `1200px`;

//fonts:
export const robotoFont = `Roboto, sans-serif`;
export const eczarFont = `Eczar, serif`;
export const firstFont = robotoFont;
export const secondFont = eczarFont;

//colors:
export const blackColor = `rgba(0, 0, 0, 0.87)`;
export const grayColor =  `#7B7B7B`;
export const lightGrayColor = `#E5E5E5`;
export const secondLightGrayColor = `#FAFAFA;`;
export const greenColor = `#007D51`;
export const greenDarkColor = `#005D57`;
export const redColor = `#FF6951`;
export const borderColor = lightGrayColor;
export const bgSectionColor = secondLightGrayColor;

export const greenColorArr = ['#005D57','#04B97F', '#37EFBA', '#007D51', '#33EEB8'];
export const redColorArr = ['#FFDC78 ','#FF6951 ', '#FFD7D0', '#FFAC12', '#EB7764'];

export const linkHoverColor = greenColor;
export const linkColor = grayColor;

//shadow:
export const sectionShadow = `0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14);`

export const PageInner = styled.section`
  padding: ${gutterMobile};
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;
  background-color: ${bgSectionColor};
  box-shadow: ${sectionShadow};
  font-family: ${robotoFont};

  @media(min-width: ${mediaMinWidthDesktop}) {
    padding: ${gutterDesktop};
  }
`;

export const SectionInnerTransparent = styled.div`
  padding: ${gutterMobile};
  max-width: ${maxWidth};
  width: 100%;
  margin: 0 auto;
  font-family: ${robotoFont};

  @media(min-width: ${mediaMinWidthDesktop}) {
    padding: ${gutterDesktop};
  }
`;

//styled components:
export const SectionTitle = styled.div`
  font-family: ${firstFont};
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 0.25px;
  color: ${grayColor};

  @media(min-width: ${mediaMinWidthDesktop}) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const SectionLinkTitle = styled.a`
  font-family: ${firstFont};
  font-weight: 500;
  font-size: 9px;
  line-height: 19px;
  color: ${blackColor};
  text-transform: uppercase;
  text-decoration: none;

  @media(min-width: ${mediaMinWidthDesktop}) {
    font-size: 14px;
    line-height: 20px;
  }

  &:hover {
    color: ${greenColor};
  }
`;