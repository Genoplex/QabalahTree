addLayer('Achievements',
{
    name          : 'Achievements',
    symbol        : '<h6>成就</h6>',
    resource      : '',
    baseResource  : '',
    baseAmount    :  function()
    {
        return player.points
    },
    color         : '#FFFFFF',
    type          : 'normal',
    exponent      :  0.25,
    row           :  'side',
    requires      :  new Decimal(Infinity),

    nodeStyle :  function()
    {

    },

    resetDescription : '',

    hotkeys :
    [

    ],

    tooltip :  function()
    {
        return '进度和成就'
    },

    tabFormat :
    {
        '进度':
        {
            unlocked :  function(){return true},
            content  : 
            [
                'achievements'
            ],
        },
    },

    layerShown :  function()
    {
        return player.Data.Self_Show
    },

    startData :  function()
    {    
        return{
        unlocked               : true,
		points                 : new Decimal(0),
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

    update  :  function(diff)
    {

    },

    doReset :  function(Resetting_Layer)
    {},

    achievements:
    {
        11: {
            name    : '<br><br><h3 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #000000;">三维',
            done    :  function()
            {
                return player.Data.Ain_Tab2_Unlocked == 1
            },
            tooltip : '解锁【无】层的【空间】选项',
            image   :  function()
            {
                if(hasAchievement('Achievements',11)) return "resources/TKT/Achievement_11.png"
            },
            style   :  function()
            {
                return{
                    'height':'100px',
                    'width' :'100px',
                    'border-radius' : '5px',
                }
            }
        },
        12: {
            name    : '<br><br><h3 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #000000;">四维',
            done    :  function()
            {
                return player.Data.Ain_Tab3_Unlocked == 1
            },
            tooltip : '解锁【无】层的【时间】选项',
            image   :  function()
            {
                if(hasAchievement('Achievements',12)) return "resources/TKT/Achievement_12.png"
            },
            style   :  function()
            {
                return{
                    'height':'100px',
                    'width' :'100px',
                    'border-radius' : '5px',
                }
            }
        },
    }
})
    