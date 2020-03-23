interface goodsProp {
  id:string   // id
  name:string  // 名称
  price:number  // 价格
  stock:number  // 库存
  des:string  // 描述
  category:string  // 类别
  categoryID:string  // 类别id
  url:string   // 图片
  limit:number  // 限购  0不限购
  specialPrice:string // 活动价格
}

// {
//   category:'水果',
//   categoryID:'1',
// }
// {
//   category:'休闲零食',
//   categoryID:'2',
// }

const goodsData:goodsProp[] = [
  {
    id:'123',
    name:'大连金帅苹果5斤装',
    price:19.9,
    stock:10,
    des:'酸酸甜甜,很好吃',
    category:'水果',
    categoryID:'1',
    limit:0,
    url:'https://www.beibeihe.com/f1/f1.png',
    specialPrice:''
  },{
    id:'223',
    name:'山东羊角蜜 4.5斤',
    price:55,
    stock:10,
    des:'网红甜瓜，清新爽口',
    category:'水果',
    categoryID:'1',
    limit:0,
    url:'https://www.beibeihe.com/f1/f1.png',
    specialPrice:''
  },{
    id:'323',
    name:'芒中美娇娘，海南树上熟贵妃芒 5斤',
    price:118,
    stock:10,
    des:'果肉丰厚，美艳香甜',
    category:'水果',
    categoryID:'1',
    limit:0,
    url:'https://www.beibeihe.com/f1/f3.png',
    specialPrice:''
  },{
    id:'423',
    name:'水果界的五角星，云霄下河杨桃 3斤',
    price:29.9,
    stock:10,
    des:'果香芬芳，脆嫩多汁',
    category:'水果',
    categoryID:'1',
    limit:0,
    url:'https://www.beibeihe.com/f1/f2.png',
    specialPrice:''
  },{
    id:'523',
    name:'樱桃番茄 2斤装',
    price:49,
    stock:10,
    des:'脆甜多汁，茄香浓郁',
    category:'水果',
    categoryID:'1',
    limit:0,
    url:'https://www.beibeihe.com/f1/f5.png',
    specialPrice:''
  },{
    id:'623',
    name:'大连金帅苹果5斤装',
    price:19.9,
    stock:10,
    des:'酸酸甜甜,很好吃',
    category:'水果',
    categoryID:'1',
    limit:0,
    url:'https://www.beibeihe.com/f1/f1.png',
    specialPrice:''
  },{
    id:'723',
    name:'带着皮吃也无渣，新疆库尔勒香梨 5斤',
    price:68,
    stock:10,
    des:'酥脆肉细，汁多渣少',
    category:'水果',
    categoryID:'1',
    limit:0,
    url:'https://www.beibeihe.com/f1/f4.png',
    specialPrice:''
  },{
    id:'823',
    name:'多层手撕，天然酵母面包',
    price:16,
    stock:10,
    des:'手撕面包，奶香浓郁',
    category:'休闲零食',
    categoryID:'2',
    limit:0,
    url:'https://www.beibeihe.com/f1/f1.png',
    specialPrice:''
  },
]

export default goodsData
