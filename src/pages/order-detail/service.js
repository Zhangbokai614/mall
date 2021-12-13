import Request from '../../utils/request';

export const orderInfo = (order_code, data) => {
  return Request({
    url: '/order?order_code=' + order_code,
    method: 'GET',
    ...data
  });
}