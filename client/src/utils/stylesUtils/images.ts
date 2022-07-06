export const appImages = require.context("../../assets/img");

export const backgroundImages = {
    bg: appImages("./backgrounds/banana.jpg"),
    bg2: appImages("./backgrounds/melon.jpg"),
};
