import Request from '../../utils/request'

export const features = (data) => {
    return Request({
        url: '/features',
        method: 'GET',
        ...data
    });
}