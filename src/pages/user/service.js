import Request from '../../utils/request';

export const activityImages = (data) => {
    return Request({
        url: '/homeImages',
        method: 'GET',
        ...data
    });
}