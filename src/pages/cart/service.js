import Request from '../../utils/request';

export const cart = (data) => {
  return Request({
    url: '/shopping_card',
    method: 'GET',
    ...data,
  });
};
