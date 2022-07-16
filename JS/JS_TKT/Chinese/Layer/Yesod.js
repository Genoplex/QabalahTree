addLayer('Yesod',
{
    name          : 'Yesod',
    symbol        : '<h5><font color="#FFFFFF">基础</font></h5>',
    resource      : '',
    baseResource  : '',
    baseAmount    :  function()
    {
        return player.points
    },
    color         : '#4c0099',
    type          : 'normal',
    exponent      :  0.5,
    position      :  0,
    row           :  8,
    requires      :  new Decimal(Infinity),
    branches      :  ['Hod','Netzah','Tiphereth'],

    resetDescription : '将能量融合成 ',

    hotkeys :
    [

    ],

    tooltip :  function()
    {
        return '<h1>YESOD</h1>'
    },

    tabFormat :
    {
        '主界面':
        {
            unlocked :  function(){return true},
            content  :
            [

            ]
        }
    },

    layerShown :  function()
    {
        //始终展示本层
        return false
    },

    startData :  function()
    {    
        return{
        unlocked       : false,
		points         : new Decimal(0),
        }
    },
        
    gainMult :  function()
    {
        mult = new Decimal(1)
        return mult
    },

    gainExp :  function()
    {
        return new Decimal(1)
    },

    update :  function(diff)
    {},

    doReset :  function(Resetting_Layer)
    {},

    clickables :
    {
        
    }
})