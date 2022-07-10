export const appImages = require.context("../../assets/img");

export const backgroundImages = {
    bg: appImages("./backgrounds/banana.jpg"),
    bg2: appImages("./backgrounds/melon.jpg"),
};

export const AvatarsImages = {
    Hipster: appImages("./avatars/.png"),
    Stalker: appImages("./avatars/.png"),
    Karen: appImages("./avatars/.png"),
    BusinessMan: appImages("./avatars/.png"),
    Ginger: appImages("./avatars/.png"),
    Brunette: appImages("./avatars/.png"),
    Blonde: appImages("./avatars/.png"),
};
