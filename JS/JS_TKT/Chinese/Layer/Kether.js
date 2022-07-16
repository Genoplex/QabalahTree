addLayer('Kether',
{
    name          : 'Kether',
    symbol        : '<h5><font color="#000000">王冠</font></h5>',
    resource      : '',
    baseResource  : '',
    baseAmount    :  function()
    {
        return player.points
    },
    color         : '#FFFFFF',
    type          : 'normal',
    exponent      :  0.5,
    position      :  0,
    row           :  3,
    requires      :  new Decimal(Infinity),

    resetDescription : '将能量融合成 ',

    hotkeys :
    [

    ],

    tooltip :  function()
    {
        return '<h1>KETHER</h1>'
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
})