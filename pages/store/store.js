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
      },
      {
        type:'猫砂盆',
        goods:[
          {
            name: '小清新猫砂盆',
            logo: '../../images/pages/good9.jpg',
            sale: '99',
            rate: '95%',
            oldPrice: '65',
            nowPrice: '56'
          },
          {
            name: 'Ag+抗菌猫砂盆',
            logo: '../../images/pages/good10.jpg',
            sale: '99',
            rate: '95%',
            oldPrice: '132',
            nowPrice: '112'
          }
        ]
      },
      {
        type: '猫窝',
        goods: [
          {
            name: '舒慕高档宠物棉窝',
            logo: '../../images/pages/good11.jpg',
            sale: '78',
            rate: '96%',
            oldPrice: '69',
            nowPrice: '69'
          },
          {
            name: '绒球疯狂石头之蒙古包',
            logo: '../../images/pages/good12.jpg',
            sale: '103',
            rate: '98%',
            oldPrice: '89',
            nowPrice: '69'
          }
        ]
      },
      {
        type: '猫玩具',
        goods: [
          {
            name: '两孔剑麻羽毛球',
            logo: '../../images/pages/good13.jpg',
            sale: '23',
            rate: '98%',
            oldPrice: '20',
            nowPrice: '16'
          },
          {
            name: 'Rakuten游乐转不停',
            logo: '../../images/pages/good14.jpg',
            sale: '420',
            rate: '99%',
            oldPrice: '66',
            nowPrice: '56'
          }
        ]
      },
      {
        type: '猫工具',
        goods: [
          {
            name: '宠百思美毛全面圆头针梳',
            logo: '../../images/pages/good15.jpg',
            sale: '83',
            rate: '98%',
            oldPrice: '43',
            nowPrice: '29'
          },
          {
            name: '金多乐美毛刷',
            logo: '../../images/pages/good16.jpg',
            sale: '77',
            rate: '95%',
            oldPrice: '29',
            nowPrice: '29'
          }
        ]
      }
    ],
    scrollNum:0,
    scrollTop:0,
    heightList : [0, 400, 806, 1020, 9000]
  },
  goodsScrollAct:function(e){
    for (var i = 0; i < this.data.heightList.length; i++){
      console.log(e.detail.scrollTop)
      if (e.detail.scrollTop >= this.data.heightList[i] && e.detail.scrollTop < this.data.heightList[i+1]){
        this.setData({
          scrollNum:i
        });
      }
    }
  },
  selectMenuAct:function(e){
    var id = e.target.dataset.id;
    this.setData({
      scrollNum : id,
      scrollTop: this.data.heightList[id]
    });
  }
})