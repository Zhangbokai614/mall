import Request from "../../utils/request";

export const cart = data => {
  return Request({
    url: "/shoppingCard",
    method: "GET",
    ...data
  });
};
