import Request from '../../utils/request';

export const orderPath = (data) => {
  return Request({
    url: '/waybill?order_code=' + data.orderCode,
    method: 'GET',
    data: data
  });
}