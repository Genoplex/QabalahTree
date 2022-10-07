addLayer('Auto',
{
    name          : 'Auto',
    symbol        : '<h6>自动</h6>',
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
        return '在这里调整你的自动化'
    },

    tabFormat :
    {
        '自动化':
        {
            unlocked :  function(){return true},
            content  : 
            [
                ['row',[['clickable',14],['row',,{'width':'15px'}],['clickable',11],['row',,{'width':'15px'}],['clickable',12],['row',,{'width':'15px'}],['clickable',13]]]
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

    clickables :
    {
        11:
        {
            title    : '【无之组合】',
            display  :  function()
            {
                if(player.Ain.Clickables_1_Auto == 1) return '<br><br><h1>开启</h1><br><br><br><br>'
                if(player.Ain.Clickables_1_Auto == 0) return '<br><br><h1>关闭</h1><br><br><br><br>'
            },
            unlocked :  function()
            {
                return (hasUpgrade('Ain',52))||(hasMilestone('Ainsoph',0))
            },
            canClick :  function(){return true},
            onClick  :  function()
            {
                switch(player.Ain.Clickables_1_Auto)
                {
                    case 0:
                    {
                        player.Ain.Clickables_1_Auto = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_1_Auto = 0
                        break
                    }
                }
            },
            style    :  function()
            {
                return{
                    'height'           : '150px',
                    'width'            : '150px',
                    'border-width'     : '4px',
                    'color'            : 'white',
                    'border-color'     : 'white',
                    'background-color' : 'black',
                }
            }
        },
        12:
        {
            title    : '【空间】类',
            display  :  function()
            {
                if(player.Ain.Clickables_2_Auto == 1) return '<br><br><h1>开启</h1><br><br><br><br>'
                if(player.Ain.Clickables_2_Auto == 0) return '<br><br><h1>关闭</h1><br><br><br><br>'
            },
            unlocked :  function()
            {
                return hasUpgrade('Ainsoph',21)
            },
            canClick :  function(){return true},
            onClick  :  function()
            {
                switch(player.Ain.Clickables_2_Auto)
                {
                    case 0:
                    {
                        player.Ain.Clickables_2_Auto = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_2_Auto = 0
                        break
                    }
                }
            },
            style    :  function()
            {
                return{
                    'height'           : '150px',
                    'width'            : '150px',
                    'border-width'     : '4px',
                    'color'            : 'white',
                    'border-color'     : 'white',
                    'background-color' : 'black',
                }
            }
        },
        13:
        {
            title    : '【无之解构】<br>【组合优化】',
            display  :  function()
            {
                if(player.Ain.Clickables_12_Auto == 1) return '<br><h1>开启</h1><br><br><br><br>'
                if(player.Ain.Clickables_12_Auto == 0) return '<br><h1>关闭</h1><br><br><br><br>'
            },
            unlocked :  function()
            {
                return hasUpgrade('Ainsoph',22)
            },
            canClick :  function(){return true},
            onClick  :  function()
            {
                switch(player.Ain.Clickables_12_Auto)
                {
                    case 0:
                    {
                        player.Ain.Clickables_12_Auto = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_12_Auto = 0
                        break
                    }
                }
            },
            style    :  function()
            {
                return{
                    'height'           : '150px',
                    'width'            : '150px',
                    'border-width'     : '4px',
                    'color'            : 'white',
                    'border-color'     : 'white',
                    'background-color' : 'black',
                }
            }
        },
        14:
        {
            title    : '【无】升级',
            display  :  function()
            {
                if(player.Ain.Upgrades_1_Auto == 1) return '<br><br><h1>开启</h1><br><br><br><br>'
                if(player.Ain.Upgrades_1_Auto == 0) return '<br><br><h1>关闭</h1><br><br><br><br>'
            },
            unlocked :  function()
            {
                return hasUpgrade('Ainsoph',23)
            },
            canClick :  function(){return true},
            onClick  :  function()
            {
                switch(player.Ain.Upgrades_1_Auto)
                {
                    case 0:
                    {
                        player.Ain.Upgrades_1_Auto = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Upgrades_1_Auto = 0
                        break
                    }
                }
            },
            style    :  function()
            {
                return{
                    'height'           : '150px',
                    'width'            : '150px',
                    'border-width'     : '4px',
                    'color'            : 'white',
                    'border-color'     : 'white',
                    'background-color' : 'black',
                }
            }
        },
    }
})
    