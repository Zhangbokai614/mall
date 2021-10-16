import Request from '../../utils/request';

export const goodsInfo = (data) => {
    return Request({
        url: '/goodsinfo',
        method: 'GET',
        ...data
    });
}

export const noticebarText = (data) => {
    return Request({
        url: '/noticebar',
        method: 'GET',
        ...data
    });
}