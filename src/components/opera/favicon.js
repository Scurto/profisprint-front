import youtube_favicon from "../../assets/img/favicon/youtube_favicon.png";
import vk_favicon from "../../assets/img/favicon/vk_favicon.png";
import close from "../../assets/img/opera/close.svg";
import history from "../../assets/img/opera/history.svg";

export const faviconAPI = {

    getFavicon(value) {
        switch (value) {
            case 'youtube': {
                return {backgroundImage: `url(${youtube_favicon})`};
            }
            case 'vk': {
                return {backgroundImage: `url(${vk_favicon})`};
            }
            case 'close': {
                return {backgroundImage: `url(${close})`};
            }
            case 'history': {
                return {backgroundImage: `url(${history})`};
            }
        }
    }
}