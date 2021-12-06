import Request from '../../utils/request';

export const goodsCard = (data) => {
  return Request({
    url: '/goods_card',
    method: 'GET',
    ...data
  });
}