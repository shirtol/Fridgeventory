const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "485px",
    tabletS: "565px",
    tablet: "768px",
    laptop: "1024px",
    laptopM: "1200px",
    laptopML: "1600px",
    laptopL: "1920px",
    desktop: "2560px",
};

const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tabletS: `(max-width: ${size.tabletS})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopM: `(max-width: ${size.laptopM})`,
    laptopML: `(max-width: ${size.laptopML})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
};

export default device;
