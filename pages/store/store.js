// pages/store/store.js
Page({
  data:{
    menu:['猫粮','猫砂','猫砂盆','猫窝','猫玩具','猫工具'],
    allGoods:[
      {
        type:'精品猫粮',
        goods:[
          {
            name: 'whiskas伟嘉',
            logo: '../../images/pages/good1.jpg',
            sale: '126',
            rate: '95%',
            oldPrice: '65',
            nowPrice: '58'
          },
          {
            name: 'DDTRA-PET',
            logo: '../../images/pages/good2.jpg',
            sale: '469',
            rate: '99%',
            oldPrice: '128',
            nowPrice: '99'
          },
          {
            name: 'Friskies猫食',
            logo: '../../images/pages/good3.jpg',
            sale: '168',
            rate: '97%',
            oldPrice: '169',
            nowPrice: '159'
          },
          {
            name: 'MUGGLES 麻瓜',
            logo: '../../images/pages/good4.jpg',
            sale: '332',
            rate: '98%',
            oldPrice: '96',
            nowPrice: '88'
          }
        ]
      },
      {
        type:'无臭猫砂',
        goods:[
          {
            name: '喵嗞固态',
            logo: '../../images/pages/good5.jpg',
            sale: '78',
            rate: '96%',
            oldPrice: '34',
            nowPrice: '32'
          },
          {
            name: '乐洁love clear',
            logo: '../../images/pages/good6.jpg',
            sale: '173',
            rate: '98%',
            oldPrice: '29',
            nowPrice: '27'
          },
          {
            name: '洁珊',
            logo: '../../images/pages/good7.jpg',
            sale: '45',
            rate: '95%',
            oldPrice: '65',
            nowPrice: '48'
          },
          {
            name: '固态无臭Ag+',
            logo: '../../images/pages/good8.jpg',
            sale: '89',
            rate: '98%',
            oldPrice: '86',
            nowPrice: '78'
          },
        ]
      }
    ]
  }
})