import Request from '../../utils/request';

export const activityImages = (data) => {
  return Request({
    url: '/home_Images',
    method: 'GET',
    ...data
  });
}