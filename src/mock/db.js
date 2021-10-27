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
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "detailImages": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg"
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
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "detailImages": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg"
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
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "detailImages": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg"
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
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "detailImages": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg"
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
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "detailImages": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg"
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
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "detailImages": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715956-assets/web-upload/11bd94e9-8a08-44d8-8d81-c0df05ae1454.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715891-assets/web-upload/72a7b82d-7e76-4f86-be19-e2b8e0295b9a.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715991-assets/web-upload/1f8462d3-a9f0-4ac7-8682-ea332efb6806.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715995-assets/web-upload/d2ffd27e-7681-4718-bc67-e4c8f5b4a98c.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716031-assets/web-upload/25768f08-080a-4748-843e-bedbba4c5edf.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322715981-assets/web-upload/b7214668-4e86-4d57-a657-4d7bba2755a6.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635322716058-assets/web-upload/48df232e-47ee-4747-afa3-ce355d8e3e05.jpeg"
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