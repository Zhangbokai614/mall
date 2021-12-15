import Request from '../../utils/request';

export const orderInfo = (data) => {
  return Request({
    url: '/order',
    method: 'GET',
    ...data
  });
}