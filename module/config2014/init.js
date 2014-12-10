define(function(require){
    var app={};
    app.module = [
        {name:"门店管理",_class:"store",menu:[{name:"门店基本信息",_class:"#base"},{name:"门店形象展示",_class:"#display"},{name:"部门管理",_class:"#divisional"},{name:"员工管理",_class:"#staff"}]},
        {name:"商品管理",_class:"commodity",menu:[{name:"商品分类管理",_class:"#category"},{name:"商品管理",_class:"#items"},{name:"商品效果分析",_class:"#analysis"}]},
        {name:"预约管理",_class:"order",menu:[{name:"未处理预约",_class:"#pending"},{name:"历史预约",_class:"#history"},{name:"统计分析",_class:"#analysis"}]},
        {name:"消费者管理",_class:"consumer",menu:[{name:"全部消费者",_class:"#all"},{name:"对商品有需求的顾客",_class:"#demand"},{name:"对我感兴趣的潜在顾客",_class:"#prospects"}]},
        {name:"统计分析",_class:"statisAnal",menu:[{name:"商品效果",_class:"#category"},{name:"主题活动",_class:"#items"},{name:"消费者",_class:"#items"}]},
        {name:"线上营销",_class:"online",menu:[{name:"主题活动",_class:"#theme"},{name:"广告位管理",_class:"#advertise"},{name:"优惠券",_class:"#coupon"},{name:"团购",_class:"#groupon"}]},
        {name:"效果分析",_class:"analysis",menu:[{name:"门店效果分析",_class:"#store"},{name:"商品效果分析",_class:"#items"},{name:"线上营销效果分析",_class:"#online"},{name:"预约统计分析",_class:"#order"}]},
        {name:"增值服务",_class:"valueadd",menu:[{name:"精准营销",_class:"#precision"},{name:"线下主题活动",_class:"#offline"},{name:"商业资源对接",_class:"#link"},{name:"开通高级版",_class:"#verup"}]}
    ]
    return app;
});