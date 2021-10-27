import Request from '../../utils/request';

export const kind = (data) => {
  return Request({
    url: '/kind',
    method: 'GET',
    ...data
  });
}

export const goodsCard = (kind, data) => {
  return Request({
    url: '/goods_card?kind='+ kind,
    method: 'GET',
    ...data
  });
}