Page({
 data:{
  titles:[
     {
      id:0,
      title:"推荐"
     },
     {
      id:1,
      title:"分类"
     },
     {
      id:2,
      title:"最新"
     },
     {
      id:3,
      title:"专辑"
     }
   ],
   titleindex:0
 },
 receiveIndex(e){
  //console.log(e.detail)
  this.setData({
    titleindex:e.detail
    
  })
 
}
})
