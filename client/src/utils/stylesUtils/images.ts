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
    eye: appImages("./icons/eye.png"),
    eyeClose: appImages("./icons/eye-close.png"),
};

export const homePageImages = {
    food: appImages("./home/food-small.jpg"),
    neighborhood: appImages("./home/neighborhood-small.jpg"),
    houses: appImages("./home/houses-small.jpg"),
    people: appImages("./home/people-small.jpg"),
    eat: appImages("./home/eat-small.jpg"),
    vik: appImages("./home/vik-muniz.jpg"),
};

export const hoodImages = {
    hood: appImages("./hood/hood-nobg.png"),
};

export const navbarImages = {
    fridge: appImages("./navbar/fridge1.png"),
    hood: appImages("./navbar/hood.png"),
    login: appImages("./navbar/login1.png"),
    register: appImages("./navbar/register1.png"),
    welcome: appImages("./navbar/welcome.png"),
    logout: appImages("./navbar/logout1.png"),
};

export const hoodContextMenuImages = {
    phone: appImages("./hood/contextMenu/phone.png"),
    email: appImages("./hood/contextMenu/email.png"),
    whatsapp: appImages("./hood/contextMenu/whatsapp.png"),
};
