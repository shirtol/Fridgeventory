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

export const logoImages = {
    logo: appImages("./logo/logo.png"),
};

export const iconsImages = {
    sadCloud: appImages("./icons/notFound.png"),
    sadFrog: appImages("./icons/frog.png"),
};

export const homePageImages = {
    food: appImages("./home/food1.jpg"),
    neighborhood: appImages("./home/neighborhood1.jpg"),
    houses: appImages("./home/houses1.jpg"),
    people: appImages("./home/people1.jpg"),
    eat: appImages("./home/eat1.jpg"),
};
