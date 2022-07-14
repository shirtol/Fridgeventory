export const appImages = require.context("../../assets/img");

export const backgroundImages = {
    bg: appImages("./backgrounds/banana.jpg"),
    bg2: appImages("./backgrounds/melon.jpg"),
    bg3: appImages("./backgrounds/bg3.jpg"),
    bg4: appImages("./backgrounds/pineappleFlip.jpg"),
};

export const AvatarsImages = {
    Hipster: appImages("./avatars/Hipster.png"),
    Stalker: appImages("./avatars/Stalker.png"),
    Karen: appImages("./avatars/Karen.png"),
    BusinessMan: appImages("./avatars/BusinessMan.png"),
    Ginger: appImages("./avatars/Ginger.png"),
    Brunette: appImages("./avatars/Brunette.png"),
    Blonde: appImages("./avatars/Blonde.png"),
};
