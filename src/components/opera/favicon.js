import youtube_favicon from "../../assets/img/favicon/youtube_favicon.png";
import vk_favicon from "../../assets/img/favicon/vk_favicon.png";
import bi_ua from "../../assets/img/favicon/bi.ua.png";
import oborot_team from "../../assets/img/favicon/oborot.team.png";
import novbud_com_ua from "../../assets/img/favicon/novbud.com.ua.png";
import superhotel_kiev_ua from "../../assets/img/favicon/superhotel.kiev.ua.png";
import liquimoly_ua from "../../assets/img/favicon/liquimoly.ua.png";
import blest_ua from "../../assets/img/favicon/blest.ua.png";
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
            case 'bi.ua': {
                return {backgroundImage: `url(${bi_ua})`};
            }
            case 'oborot.team': {
                return {backgroundImage: `url(${oborot_team})`};
            }
            case 'novbud.com.ua': {
                return {backgroundImage: `url(${novbud_com_ua})`};
            }
            case 'superhotel.kiev.ua': {
                return {backgroundImage: `url(${superhotel_kiev_ua})`};
            }
            case 'liquimoly.ua': {
                return {backgroundImage: `url(${liquimoly_ua})`};
            }
            case 'blest.ua': {
                return {backgroundImage: `url(${blest_ua})`};
            }
        }
    }
}