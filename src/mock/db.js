const Mock = require('mockjs')

const Random = Mock.Random

module.exports = () => {

    let data = Mock.mock({
        "goodsInfo|1-12": [
            {
                "kind": "综合推荐",
                "id|+1": 1,
                "production_code": "aaa-bbb-123",
                "standard_code": "GB-2011-034",
                "shelf_life": {
                    temperature: "4°",
                    "days": "7"
                },
                "title": '@csentence',
                "inventory|0-10000": 10000,
                "images": ['https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624772554-assets/web-upload/e5f89e0e-95e3-4874-bd7d-f9e35446299b.jpeg',
                    Random.image('200x200', '#50B347', '#FFF', 'Mock'),
                    Random.image('200x200', '#50AA47', '#FFF', 'Mock')
                ],
                "focus|1-2": false,
                "price|10-80": 80,
                "sku": [
                    { "testA|10-20": 10 },
                    { "testB|10-20": 10 },
                    { "testC|10-20": 10 },
                    { "testD|10-20": 10 },
                ]
            },
            {
                "kind": "水果",
                "id|+1": 200,
                "production_code": "aaa-bbb-123",
                "standard_code": "GB-2011-034",
                "shelf_life": {
                    temperature: "4°",
                    "days": "7"
                },
                "title": '@csentence',
                "inventory|0-10000": 10000,
                "images": [
                    'https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg',
                    Random.image('200x200', '#50B347', '#FFF', 'Mock'),
                    Random.image('200x200', '#50AA47', '#FFF', 'Mock')
                ],
                "focus": false,
                "price|10-80": 80,
                "sku": [
                    { "testA|10-20": 10 },
                    { "testB|10-20": 10 },
                    { "testC|10-20": 10 },
                    { "testD|10-20": 10 },
                ]
            },
            {
                "kind": "生鲜",
                "id|+1": 300,
                "production_code": "aaa-bbb-123",
                "standard_code": "GB-2011-034",
                "shelf_life": {
                    temperature: "4",
                    "days": "7"
                },
                "title": '@csentence',
                "inventory|0-10000": 10000,
                "images": ['https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624966034-assets/web-upload/62065657-0c31-43f8-87be-32fe1bcedc6e.jpeg',
                    Random.image('200x200', '#50B347', '#FFF', 'Mock'),
                    Random.image('200x200', '#50AA47', '#FFF', 'Mock')
                ],
                "focus": false,
                "price|10-80": 80,
                "sku": [
                    { "testA|10-20": 10 },
                    { "testB|10-20": 10 },
                    { "testC|10-20": 10 },
                    { "testD|10-20": 10 },
                ]
            },
            {
                "kind": "粮油",
                "id|+1": 400,
                "production_code": "aaa-bbb-123",
                "standard_code": "GB-2011-034",
                "shelf_life": {
                    temperature: "4°",
                    "days": "7"
                },
                "title": '@csentence',
                "inventory|0-10000": 10000,
                "images": ['https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624970549-assets/web-upload/1feeadb1-9f70-4df2-89e8-90afb12cfa15.jpeg',
                    Random.image('200x200', '#50B347', '#FFF', 'Mock'),
                    Random.image('200x200', '#50AA47', '#FFF', 'Mock')
                ],
                "focus": false,
                "price|10-80": 80,
                "sku": [
                    { "testA|10-20": 10 },
                    { "testB|10-20": 10 },
                    { "testC|10-20": 10 },
                    { "testD|10-20": 10 },
                ]
            },
            {
                "kind": "海鲜",
                "id|+1": 500,
                "production_code": "aaa-bbb-123",
                "standard_code": "GB-2011-034",
                "shelf_life": {
                    temperature: "4°",
                    "days": "7"
                },
                "title": '@csentence',
                "inventory|0-10000": 10000,
                "images": ['https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624780002-assets/web-upload/ddb1742e-309c-4b5f-ad4b-de2b656e69db.jpeg',
                    Random.image('200x200', '#50B347', '#FFF', 'Mock'),
                    Random.image('200x200', '#50AA47', '#FFF', 'Mock')
                ],
                "focus": true,
                "price|10-80": 80,
                "sku": [
                    { "testA|10-20": 10 },
                    { "testB|10-20": 10 },
                    { "testC|10-20": 10 },
                    { "testD|10-20": 10 },
                ]
            },
            {
                "kind": "其它",
                "id|+1": 600,
                "production_code": "aaa-bbb-123",
                "standard_code": "GB-2011-034",
                "shelf_life": {
                    temperature: "4°",
                    "days": "7"
                },
                "title": '@csentence',
                "inventory|0-10000": 10000,
                "images": ['https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624973974-assets/web-upload/922f160e-4682-46a5-a11f-49cc55a263a0.jpeg',
                    Random.image('200x200', '#50B347', '#FFF', 'Mock'),
                    Random.image('200x200', '#50AA47', '#FFF', 'Mock')
                ],
                "focus": false,
                "price|10-80": 80,
                "sku": [
                    { "testA|10-20": 10 },
                    { "testB|10-20": 10 },
                    { "testC|10-20": 10 },
                    { "testD|10-20": 10 },
                ]
            },
        ],
        "noticebar": ["因部分地区疫情，无法收寄快递影响物流，给您带来的不便敬请谅解，详细了解请联系客服。"],
        "homeImages": {
            "posters": 'https://cdn.nlark.com/yuque/0/2021/png/660331/1634622259552-assets/web-upload/268743d4-25d3-4753-8442-e1759a3e22e0.png',
            "activity": 'https://cdn.nlark.com/yuque/0/2021/png/660331/1634622273241-assets/web-upload/44716d8c-a3cb-43a3-ad88-7491fe01059b.png'
        }
    })

    return data
}