import Request from '../../utils/request';

export const goodsInfo = (data) => {
    return Request({
        url: '/goodsInfo',
        method: 'GET',
        ...data
    });
}

export const noticebar = (data) => {
    return Request({
        url: '/noticebar',
        method: 'GET',
        ...data
    });
}

export const homeImages = (data) => {
    return Request({
        url: '/homeImages',
        method: 'GET',
        ...data
    });
}