const Mock = require('mockjs')

const Random = Mock.Random

module.exports = () => {

    let data = Mock.mock({
        goodsInfo: {
            "综合推荐|2-6": [
                {
                    "id|+1": 1,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624772554-assets/web-upload/e5f89e0e-95e3-4874-bd7d-f9e35446299b.jpeg',
                    "focus": false,
                    "price|10-80": 80,
                }
            ],
            "水果|2-6": [
                {
                    "id|+1": 200,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    "focus": false,
                    "price|10-80": 80,
                }
            ],
            "生鲜|2-6": [
                {
                    "id|+1": 300,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624966034-assets/web-upload/62065657-0c31-43f8-87be-32fe1bcedc6e.jpeg',
                    "focus": false,
                    "price|10-80": 80,
                }
            ],
            "粮油|2-6": [
                {
                    "id|+1": 300,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624970549-assets/web-upload/1feeadb1-9f70-4df2-89e8-90afb12cfa15.jpeg',
                    "focus": false,
                    "price|10-80": 80,
                }
            ],
            "海鲜|1-2": [
                {
                    "id|+1": 300,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624780002-assets/web-upload/ddb1742e-309c-4b5f-ad4b-de2b656e69db.jpeg',
                    "focus": true,
                    "price|10-80": 80,
                }
            ],
            "其他|2-6": [
                {
                    "id|+1": 300,
                    "title": '@csentence',
                    "inventory|0-10000": 10000,
                    "images": 'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624973974-assets/web-upload/922f160e-4682-46a5-a11f-49cc55a263a0.jpeg',
                    "focus": false,
                    "price|10-80": 80,
                }
            ],
        },
        "noticebar": ["因部分地区疫情，无法收寄快递影响物流，给您带来的不便敬请谅解，详细了解请联系客服。"],
        "homeImages": {
            "posters": 'https://cdn.nlark.com/yuque/0/2021/png/660331/1634622259552-assets/web-upload/268743d4-25d3-4753-8442-e1759a3e22e0.png',
            "activity": 'https://cdn.nlark.com/yuque/0/2021/png/660331/1634622273241-assets/web-upload/44716d8c-a3cb-43a3-ad88-7491fe01059b.png'
        }
    })

    return data
}