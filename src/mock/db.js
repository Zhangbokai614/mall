const Mock = require('mockjs')

const Random = Mock.Random

module.exports = () => {

    let data = Mock.mock({
        "kind": ["综合推荐", "水果", "生鲜", "粮油", "海鲜", "其它"],
        "focus": [
            {
                "kind": "综合推荐",
                "id|+1": 1,
                "title": '@csentence',
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "price|10-80": 80,
            }
        ],
        "goods_card|1-8": [
            {
                "kind": "综合推荐",
                "id|+1": 1,
                "title": '@csentence',
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133351-assets/web-upload/ad357fa1-c2fc-4d57-9f62-3b47d6f53d93.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "price|10-80": 80,
                "weight|1-4": 2,
            },
            {
                "kind": "水果",
                "id|+1": 200,
                "title": '@csentence',
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "price|10-80": 80,
                "weight|1-4": 2,
            },
            {
                "kind": "生鲜",
                "id|+1": 300,
                "title": '@csentence',
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624966034-assets/web-upload/62065657-0c31-43f8-87be-32fe1bcedc6e.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "price|10-80": 80,
                "weight|1-4": 2,
            },
            {
                "kind": "粮油",
                "id|+1": 400,
                "title": '@csentence',
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624970549-assets/web-upload/1feeadb1-9f70-4df2-89e8-90afb12cfa15.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "price|10-80": 80,
            },
            {
                "kind": "海鲜",
                "id|+1": 500,
                "title": '@csentence',
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624977744-assets/web-upload/680da5d6-7802-42be-8d12-29f3e28c9882.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "price|10-80": 80,
            },
            {
                "kind": "其它",
                "id|+1": 600,
                "title": Random.csentence(),
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624973974-assets/web-upload/922f160e-4682-46a5-a11f-49cc55a263a0.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "price|10-80": 80,
            },
            {
                "kind": "其它",
                "id|+1": 600,
                "title": Random.csentence(3, 5),
                "images": [
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624973974-assets/web-upload/922f160e-4682-46a5-a11f-49cc55a263a0.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133270-assets/web-upload/a04b49f4-112d-45c5-a82d-edf22a74a085.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/12696250-77d1-41d2-817e-6c518fd93c44.jpeg",
                    "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1635323133316-assets/web-upload/08ad0391-8520-45da-ae2c-047c44be9041.jpeg"
                ],
                "price|10-80": 80,
            },
        ],
        "goods_info|1-8": [
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
                "price|10-80": 80,
                "weight|1-4": 2,
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
                "price|10-80": 80,
                "weight|1-4": 2,
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
                "price|10-80": 80,
                "weight|1-4": 2,
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
                "price|10-80": 80,
                "weight|1-4": 2,
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
                "price|10-80": 80,
                "weight|1-4": 2,
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
                "title": Random.csentence(3, 5),
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
                "price|10-80": 80,
                "weight|1-4": 2,
                "sku": [
                    { "testA|10-20": 10 },
                    { "testB|10-20": 10 },
                    { "testC|10-20": 10 },
                    { "testD|10-20": 10 },
                ]
            },
        ],
        "order": [
            {
                order_code: '00000000001',
                order_state: '01',
                payment_time: Mock.mock('@datetime()'),
                receipt_time: Mock.mock('@datetime()'),
                refund_time: Mock.mock('@datetime()'),
                goods_id: 1,
                specs: '一斤装',
                "number|1-10": 3,
                "cost|10-100": 42,
                "finish|1-2": true,
            },
            {
                order_code: '00000000002',
                order_state: '02',
                payment_time: Mock.mock('@datetime()'),
                receipt_time: Mock.mock('@datetime()'),
                refund_time: Mock.mock('@datetime()'),
                goods_id: 200,
                specs: '三斤装',
                "number|1-10": 3,
                "cost|10-100": 51,
                "finish|1-2": true,
            },
            {
                order_code: '00000000003',
                order_state: '03',
                payment_time: Mock.mock('@datetime()'),
                receipt_time: Mock.mock('@datetime()'),
                refund_time: Mock.mock('@datetime()'),
                goods_id: 300,
                specs: '五斤装',
                "number|1-10": 3,
                "cost|10-100": 67,
                "finish|1-2": true,
            },
            {
                order_code: '00000000004',
                order_state: '04',
                payment_time: Mock.mock('@datetime()'),
                receipt_time: Mock.mock('@datetime()'),
                refund_time: Mock.mock('@datetime()'),
                goods_id: 400,
                specs: '一斤装',
                "number|1-10": 3,
                "cost|10-100": 27,
                "finish|1-2": true,
            },
            {
                order_code: '00000000005',
                order_state: '01',
                payment_time: Mock.mock('@datetime()'),
                receipt_time: Mock.mock('@datetime()'),
                refund_time: Mock.mock('@datetime()'),
                goods_id: 500,
                specs: '十斤装',
                "number|1-10": 3,
                "cost|10-100": 39,
                "finish|1-2": true,
            },
        ],
        "home_images": ['https://cdn.nlark.com/yuque/0/2021/png/660331/1634622259552-assets/web-upload/268743d4-25d3-4753-8442-e1759a3e22e0.png'],
        "after_sales_detail": ['折扣价：为折扣期间的价格如果没有特殊说明，折扣是在原价基础上计算出的优惠比例或者优惠金额；如果有疑问您可以在购买前询问客服。'],
        "after_sales_free": ['：包邮不包含偏远地区及海外地区。']
    })

    return data
}