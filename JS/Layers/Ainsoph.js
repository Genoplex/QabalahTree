addLayer('Ainsoph',
{
    name          : 'Ainsoph',
    symbol        : '<h6><font color="#ffffff">限</style></h6>',
    resource      : '无限',
    baseResource  : '无',
    baseAmount    :  function()
    {
        return player.Ain.points
    },
    color         : '#111111',
    type          : 'normal',
    exponent      :  0.03,
    position      :  1,
    row           :  1,
    requires      :  new Decimal(1.79e308),
    branches      : ['Ain'],

    resetDescription : '融合 ',

    hotkeys :
    [

    ],

    tooltip :  function()
    {
        return '<h1>AIN-SOPH</h1>'
    },

    tabFormat :
    {
        '无限':
        {
            unlocked :  function(){return true},
            content  :
            [
                ['display-text',function(){return '<h2>现在有</h2> <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">' + format(player.Ainsoph.points) + '</h1> <h2>无限</h2>'}],
                'blank',
                'prestige-button',
                'blank',
                ['display-text',function(){return '<h3>现在有</h3> <h3 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">' + format(player.Ain.points) + '</h3> <h3>无</h3>'}],
                ['display-text',function(){return '<h3>总共获取过</3> <h3 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">' + format(player.Ainsoph.total) + '</h3> <h3>无限</h3>'}],
                'blank',
                ['microtabs','Tab1',{'border-color':'#0f0f0f'}],
            ]
        },
        '无限层级':
        {
            unlocked :  function()
            {
                return player.Data.Ainsoph_Tab2_Unlocked==1
            },
            content  :
            [
                ['display-text',function(){return '<h2>现在有</h2> <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">' + format(player.Ainsoph.points) + '</h1> <h2>无限</h2>'}],
                'blank',
                'prestige-button',
                'blank',
                ['display-text',function(){return '<h3>现在有</h3> <h3 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">' + format(player.Ain.points) + '</h3> <h3>无</h3>'}],
                ['display-text',function(){return '<h3>总共获取过</3> <h3 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">' + format(player.Ainsoph.total) + '</h3> <h3>无限</h3>'}],
                'blank','blank',
                ['display-text',function(){return player.Ainsoph.Text_Infinity}],
                'blank',
                ['row',[['clickable',21],['row',,{'width':'15px'}],['clickable',22],['row',,{'width':'15px'}],['clickable',23],['row',,{'width':'15px'}],['clickable',24]],{}]
            ]
        }
    },

    microtabs:
    {
        Tab1:
        {
            '无限树':
            {
                content: function()
                {
                    var Format         = []
                    var Upgrade_Format = []
                    var Upgrades       =  new Array()
                    Upgrades[1]        = ['row',[['upgrade',11]],{}]
                    Upgrades[2]        = ['row',[['upgrade',21],['row',,{'width':'15px'}],['upgrade',31],['row',,{'width':'15px'}],['upgrade',41]],{}]
                    Upgrades[3]        = ['row',[['upgrade',22],['row',,{'width':'15px'}],['upgrade',23],['row',,{'width':'15px'}],['upgrade',42],['row',,{'width':'15px'}],['upgrade',43]],{}]
                    Upgrades[4]        = ['row',[['upgrade',51]],{}]
                    
                    Upgrade_Format.push(Upgrades[player.Ainsoph.Upgrade_Row-2])
                    Upgrade_Format.push('blank')
                    Upgrade_Format.push(Upgrades[player.Ainsoph.Upgrade_Row-1])
                    Upgrade_Format.push('blank')
                    Upgrade_Format.push(Upgrades[player.Ainsoph.Upgrade_Row]  )

                    if(player.Ainsoph.Upgrade_Mini == 1)
                    {
                        Upgrade_Format = [
                            Upgrades[1],
                            'blank',
                            Upgrades[2],
                            'blank',
                            Upgrades[3],
                            'blank',
                            Upgrades[4]
                        ]
                    }

                    Format.push('blank')
                    Format.push(['row',[['column',,{'width':'50px'}],['column',Upgrade_Format,{'width':'800px'}],['column',[['clickable',11],'blank',['clickable',12],'blank',['clickable',15],'blank',['clickable',13],'blank',['clickable',14]],{}]],{}])

                    return Format
                }
            },
            '里程碑':
            {
                content:
                [
                    'blank',
                    'milestones',
                ]
            },
        }
    },

    layerShown :  function()
    {
        //始终展示本层
        return player.Data.Ainsoph_show == 1
    },

    startData :  function()
    {    
        return{
        unlocked        : false,
		points          : new Decimal(0),

        Upgrade_Effect  : new Array(),

        Upgrade_Row     : 3,
        Upgrade_Row_Max : 3,
        Upgrade_Mini    : 0,

        Infinity_Stage        : new Decimal(1),
        Infinity_Stage_Max    : new Decimal(1),
        Infinity              : new Decimal(1),
        Infinity_Mult         : new Decimal(1),
        Text_Infinity         : '<br>',

        Clickables_Inf_Level  : [0,new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
        Clickables_Inf_Effect : [0,new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
        Clickables_Inf_Cost   : [0,new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0)],
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
    {
        //升级层数
        player.Ainsoph.Upgrade_Row_Max = 5

        //升级效果
        player.Ainsoph.Upgrade_Effect[11] = player.Ainsoph.total.add(1).pow(8)
        player.Ainsoph.Upgrade_Effect[31] = player.Ainsoph.points.add(1).pow(2)
        player.Ainsoph.Upgrade_Effect[41] = new Decimal(player.Ainsoph.resetTime).pow(1.5)
        if(player.Ainsoph.Upgrade_Effect[11].lt(1)) player.Ainsoph.Upgrade_Effect[11] = new Decimal(1)
        if(player.Ainsoph.Upgrade_Effect[41].lt(1)) player.Ainsoph.Upgrade_Effect[41] = new Decimal(1)

        //无限价格
        player.Ainsoph.Clickables_Inf_Cost[1]   = new Decimal(5).pow(player.Ainsoph.Clickables_Inf_Level[1]).mul(250000000)

        //无限购买项
        player.Ainsoph.Clickables_Inf_Effect[1] = player.Ainsoph.Clickables_Inf_Level[1].mul(0.01).mul(new Decimal(2).pow(player.Ainsoph.Clickables_Inf_Level[1].div(10).floor())).add(1)

        //无限增值
        player.Ainsoph.Infinity_Mult = new Decimal(1)
        player.Ainsoph.Infinity_Mult = player.Ainsoph.Infinity_Mult = player.Ainsoph.Clickables_Inf_Effect[1]
        player.Ainsoph.Infinity = player.Ainsoph.Infinity.mul(player.Ainsoph.Infinity_Mult.pow(diff))

        //无限文本
        player.Ainsoph.Text_Infinity = '<br>'
        player.Ainsoph.Infinity_Stage = new Decimal(1)
        if(player.Ainsoph.Infinity.gte(new Decimal('1.79e308'))) player.Ainsoph.Infinity_Stage = new Decimal(2)
        if(player.Ainsoph.Infinity.gte(new Decimal('1.79e308').pow('1.79e308'))) player.Ainsoph.Infinity_Stage = new Decimal(3)
        if(player.Ainsoph.Infinity.gte(new Decimal('1.79e308').pow('1.79e308').pow('1.79e308'))) player.Ainsoph.Infinity_Stage = new Decimal(4)
        if(player.Ainsoph.Infinity.gte(new Decimal('1.79e308').pow('1.79e308').pow('1.79e308').pow('1.79e308'))) player.Ainsoph.Infinity_Stage = new Decimal(5)
        if(player.Ainsoph.Infinity.gte(new Decimal('1.79e308').pow('1.79e308').pow('1.79e308').pow('1.79e308').pow('1.79e308'))) player.Ainsoph.Infinity_Stage = new Decimal(6)
        if(player.Ainsoph.Infinity.gte(new Decimal('1.79e308').pow('1.79e308').pow('1.79e308').pow('1.79e308').pow('1.79e308').pow('1.79e308'))) player.Ainsoph.Infinity_Stage = new Decimal(7)
        if(player.Ainsoph.Infinity_Stage.eq(1)) player.Ainsoph.Text_Infinity = '<h3>无限量级已经抵达&nbsp</h3> <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">ω<sub>' + format(player.Ainsoph.Infinity) + '</sub></font></h1><h3>&nbsp&nbsp每秒基数都会 <h2 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">×' + format(player.Ainsoph.Infinity_Mult) +'</h2>'
        if(player.Ainsoph.Infinity_Stage.eq(2)) player.Ainsoph.Text_Infinity = '<h3>无限量级已经抵达&nbsp</h3> <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">ε<sub>' + format(player.Ainsoph.Infinity.root('1.79e308')) + '</sub></font></h1><h3>&nbsp&nbsp每秒基数都会 <h2 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">×' + format(player.Ainsoph.Infinity_Mult) + ' (' + format(player.Ainsoph.Infinity_Mult.root('1.79e308')) + ')</h2>'
        if(player.Ainsoph.Infinity_Stage.eq(3)) player.Ainsoph.Text_Infinity = '<h3>无限量级已经抵达&nbsp</h3> <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">φ<sub>' + format(player.Ainsoph.Infinity.root('1.79e308').root('1.79e308')) + '</sub></font></h1><h3>&nbsp&nbsp每秒基数都会 <h2 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">×' + format(player.Ainsoph.Infinity_Mult) + ' (' + format(player.Ainsoph.Infinity_Mult.root('1.79e308').root('1.79e308')) + ')</h2>'
        if(player.Ainsoph.Infinity_Stage.eq(4)) player.Ainsoph.Text_Infinity = '<h3>无限量级已经抵达&nbsp</h3> <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">ψ<sub>' + format(player.Ainsoph.Infinity.root('1.79e308').root('1.79e308').root('1.79e308')) + '</sub></font></h1><h3>&nbsp&nbsp每秒基数都会 <h2 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">×' + format(player.Ainsoph.Infinity_Mult) + ' (' + format(player.Ainsoph.Infinity_Mult.root('1.79e308').root('1.79e308').root('1.79e308')) + ')</h2>'
        if(player.Ainsoph.Infinity_Stage.eq(5)) player.Ainsoph.Text_Infinity = '<h3>无限量级已经抵达&nbsp</h3> <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">Ω<sub>' + format(player.Ainsoph.Infinity.root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308')) + '</sub></font></h1><h3>&nbsp&nbsp每秒基数都会 <h2 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">×' + format(player.Ainsoph.Infinity_Mult) + ' (' + format(player.Ainsoph.Infinity_Mult.root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308')) + ')</h2>'
        if(player.Ainsoph.Infinity_Stage.eq(5)) player.Ainsoph.Text_Infinity = '<h3>无限量级已经抵达&nbsp</h3> <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">א<sub>' + format(player.Ainsoph.Infinity.root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308')) + '</sub></font></h1><h3>&nbsp&nbsp每秒基数都会 <h2 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">×' + format(player.Ainsoph.Infinity_Mult) + ' (' + format(player.Ainsoph.Infinity_Mult.root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308')) + ')</h2>'
        if(player.Ainsoph.Infinity_Stage.eq(6)) player.Ainsoph.Text_Infinity = '<h3>无限量级已经抵达&nbsp</h3> <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">ב<sub>' + format(player.Ainsoph.Infinity.root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308')) + '</sub></font></h1><h3>&nbsp&nbsp每秒基数都会 <h2 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">×' + format(player.Ainsoph.Infinity_Mult) + ' (' + format(player.Ainsoph.Infinity_Mult.root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308')) + ')</h2>'
        if(player.Ainsoph.Infinity_Stage.eq(7)) player.Ainsoph.Text_Infinity = '<h3>无限量级已经抵达&nbsp</h3> <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">Σ<sub>' + format(player.Ainsoph.Infinity.root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308')) + '</sub></font></h1><h3>&nbsp&nbsp每秒基数都会 <h2 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">×' + format(player.Ainsoph.Infinity_Mult) + ' (' + format(player.Ainsoph.Infinity_Mult.root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308').root('1.79e308')) + ')</h2>'
    },

    doReset :  function(Resetting_Layer)
    {

    },

    upgrades :
    {
        11:
        {
            fullDisplay  :  function()
            {
                var Title       = '<h2>无限增幅</h2>'
                var Discription = '<br><h3>总无限提高点数获取</h3>'
                var Effect      = '<br><h3>×' + format(player.Ainsoph.Upgrade_Effect[11])
                var Cost        = '<br><h3>花费：' + format(1) + ' 无限'
                if(player.Ainsoph.Upgrade_Mini == 1) return '<br>'
                return Title + '<br>' + Discription + Effect + '<br>' + Cost
            },
            canAfford    :  function()
            {
                return (player.Ainsoph.points.gte(1))
            },
            pay          :  function()
            {
                player.Ainsoph.points = player.Ainsoph.points.sub(1)
            },
            style        :  function()
            {
                var Style = {}
                Style['height']           = '165px'
                Style['width']            = '165px'
                Style['color']            = 'white'
                Style['border-color']     = 'white'
                Style['background-color'] = 'black'
                Style['border-width']     = '4px'
                if(player.Ainsoph.points.lt(1))
                {
                    Style['color']            = '#777777'
                    Style['border-color']     = '#777777'
                    Style['background-color'] = 'black'
                }
                if(hasUpgrade('Ainsoph',11))
                {
                    Style['color']            = 'white'
                    Style['border-color']     = 'white'
                    Style['background-color'] = '#002e00'
                }
                if(player.Ainsoph.Upgrade_Mini == 1)
                {
                    Style['height']           = '30px'
                    Style['width']            = '30px'
                    Style['border-width']     = '2px'
                }
                return Style
            }
        },
        21:
        {
            fullDisplay  :  function()
            {
                var Title       = '<h2>稳定空间</h2>'
                var Discription = '<br><h3>自动购买间升级</h3>'
                var Cost        = '<br><h3>花费：' + format(5) + ' 无限'
                if(player.Ainsoph.Upgrade_Mini == 1) return '<br>'
                return Title + '<br>' + Discription + '<br>' + Cost
            },
            branches     : [11],
            canAfford    :  function()
            {
                player.Ain.Clickables_2_Auto = 1
                return (player.Ainsoph.points.gte(5)&&(hasUpgrade('Ainsoph',11)))
            },
            pay          :  function()
            {
                player.Ainsoph.points = player.Ainsoph.points.sub(5)
            },
            style        :  function()
            {
                var Style = {}
                Style['height']           = '165px'
                Style['width']            = '165px'
                Style['color']            = 'white'
                Style['border-color']     = 'white'
                Style['background-color'] = 'black'
                Style['border-width']     = '4px'
                if(player.Ainsoph.points.lt(5))
                {
                    Style['color']            = '#777777'
                    Style['border-color']     = '#777777'
                    Style['background-color'] = 'black'
                }
                if(hasUpgrade('Ainsoph',21))
                {
                    Style['color']            = 'white'
                    Style['border-color']     = 'white'
                    Style['background-color'] = '#002e00'
                }
                if(player.Ainsoph.Upgrade_Mini == 1)
                {
                    Style['height']           = '30px'
                    Style['width']            = '30px'
                    Style['border-width']     = '2px'
                }
                return Style
            }
        },
        22:
        {
            fullDisplay  :  function()
            {
                var Title       = '<h2>最大流算法</h2>'
                var Discription = '<br><h3>【无之解构】和【组合优化】不再需要手动重置</h3>'
                var Cost        = '<br><h3>花费：' + format(500) + ' 无限'
                if(player.Ainsoph.Upgrade_Mini == 1) return '<br>'
                return Title + '<br>' + Discription + '<br>' + Cost
            },
            branches     : [21],
            canAfford    :  function()
            {
                return (player.Ainsoph.points.gte(500)&&(hasUpgrade('Ainsoph',21)))
            },
            pay          :  function()
            {
                player.Ainsoph.points = player.Ainsoph.points.sub(500)
                player.Ain.Clickables_12_Auto = 1
            },
            style        :  function()
            {
                var Style = {}
                Style['height']           = '165px'
                Style['width']            = '165px'
                Style['color']            = 'white'
                Style['border-color']     = 'white'
                Style['background-color'] = 'black'
                Style['border-width']     = '4px'
                if(player.Ainsoph.points.lt(500))
                {
                    Style['color']            = '#777777'
                    Style['border-color']     = '#777777'
                    Style['background-color'] = 'black'
                }
                if(hasUpgrade('Ainsoph',22))
                {
                    Style['color']            = 'white'
                    Style['border-color']     = 'white'
                    Style['background-color'] = '#002e00'
                }
                if(player.Ainsoph.Upgrade_Mini == 1)
                {
                    Style['height']           = '30px'
                    Style['width']            = '30px'
                    Style['border-width']     = '2px'
                }
                return Style
            }
        },
        23:
        {
            fullDisplay  :  function()
            {
                var Title       = '<h2>最小费用流算法</h2>'
                var Discription = '<br><h3>自动购买无的升级</h3>'
                var Cost        = '<br><h3>花费：' + format(300) + ' 无限'
                if(player.Ainsoph.Upgrade_Mini == 1) return '<br>'
                return Title + '<br>' + Discription + '<br>' + Cost
            },
            branches     : [21],
            canAfford    :  function()
            {
                return (player.Ainsoph.points.gte(300)&&(hasUpgrade('Ainsoph',21)))
            },
            pay          :  function()
            {
                player.Ainsoph.points = player.Ainsoph.points.sub(300)
                player.Ain.Upgrades_1_Auto = 1
            },
            style        :  function()
            {
                var Style = {}
                Style['height']           = '165px'
                Style['width']            = '165px'
                Style['color']            = 'white'
                Style['border-color']     = 'white'
                Style['background-color'] = 'black'
                Style['border-width']     = '4px'
                if(player.Ainsoph.points.lt(300))
                {
                    Style['color']            = '#777777'
                    Style['border-color']     = '#777777'
                    Style['background-color'] = 'black'
                }
                if(hasUpgrade('Ainsoph',23))
                {
                    Style['color']            = 'white'
                    Style['border-color']     = 'white'
                    Style['background-color'] = '#002e00'
                }
                if(player.Ainsoph.Upgrade_Mini == 1)
                {
                    Style['height']           = '30px'
                    Style['width']            = '30px'
                    Style['border-width']     = '2px'
                }
                return Style
            }
        },
        31:
        {
            fullDisplay  :  function()
            {
                var Title       = '<h2>逆无限</h2>'
                var Discription = '<br><h3>无限提高前四个【无之组合】</h3>'
                var Effect      = '<br><h3>×' + format(player.Ainsoph.Upgrade_Effect[31])
                var Cost        = '<br><h3>花费：' + format(5) + ' 无限'
                if(player.Ainsoph.Upgrade_Mini == 1) return '<br>'
                return Title + '<br>' + Discription + Effect + '<br>' + Cost
            },
            branches     : [11],
            canAfford    :  function()
            {
                return (player.Ainsoph.points.gte(5)&&(hasUpgrade('Ainsoph',11)))
            },
            pay          :  function()
            {
                player.Ainsoph.points = player.Ainsoph.points.sub(5)
            },
            style        :  function()
            {
                var Style = {}
                Style['height']           = '165px'
                Style['width']            = '165px'
                Style['color']            = 'white'
                Style['border-color']     = 'white'
                Style['background-color'] = 'black'
                Style['border-width']     = '4px'
                if(player.Ainsoph.points.lt(5))
                {
                    Style['color']            = '#777777'
                    Style['border-color']     = '#777777'
                    Style['background-color'] = 'black'
                }
                if(hasUpgrade('Ainsoph',31))
                {
                    Style['color']            = 'white'
                    Style['border-color']     = 'white'
                    Style['background-color'] = '#002e00'
                }
                if(player.Ainsoph.Upgrade_Mini == 1)
                {
                    Style['height']           = '30px'
                    Style['width']            = '30px'
                    Style['border-width']     = '2px'
                }
                return Style
            }
        },
        41:
        {
            fullDisplay  :  function()
            {
                var Title       = '<h2>流动时间</h2>'
                var Discription = '<br><h3>重置时间提高无获得</h3>'
                var Effect      = '<h3>×' + format(player.Ainsoph.Upgrade_Effect[41])
                var Cost        = '<br><h3>花费：' + format(5) + ' 无限'
                if(player.Ainsoph.Upgrade_Mini == 1) return '<br>'
                return Title + '<br>' + Discription + Effect + '<br>' + Cost
            },
            branches     : [11],
            canAfford    :  function()
            {
                return (player.Ainsoph.points.gte(5)&&(hasUpgrade('Ainsoph',11)))
            },
            pay          :  function()
            {
                player.Ainsoph.points = player.Ainsoph.points.sub(5)
            },
            style        :  function()
            {
                var Style = {}
                Style['height']           = '165px'
                Style['width']            = '165px'
                Style['color']            = 'white'
                Style['border-color']     = 'white'
                Style['background-color'] = 'black'
                Style['border-width']     = '4px'
                if(player.Ainsoph.points.lt(1))
                {
                    Style['color']            = '#777777'
                    Style['border-color']     = '#777777'
                    Style['background-color'] = 'black'
                }
                if(hasUpgrade('Ainsoph',41))
                {
                    Style['color']            = 'white'
                    Style['border-color']     = 'white'
                    Style['background-color'] = '#002e00'
                }
                if(player.Ainsoph.Upgrade_Mini == 1)
                {
                    Style['height']           = '30px'
                    Style['width']            = '30px'
                    Style['border-width']     = '2px'
                }
                return Style
            }
        },
        42:
        {
            fullDisplay  :  function()
            {
                var Title       = '<h2>超浓缩</h2>'
                var Discription = '<br><h3>直接提高无的获得</h3>'
                var Effect      = '<br><h3>×' + format(15000)
                var Cost        = '<br><h3>花费：' + format(250) + ' 无限'
                if(player.Ainsoph.Upgrade_Mini == 1) return '<br>'
                return Title + '<br>' + Discription + Effect + '<br>' + Cost
            },
            branches     : [41],
            canAfford    :  function()
            {
                return (player.Ainsoph.points.gte(250)&&(hasUpgrade('Ainsoph',41)))
            },
            pay          :  function()
            {
                player.Ainsoph.points = player.Ainsoph.points.sub(250)
            },
            style        :  function()
            {
                var Style = {}
                Style['height']           = '165px'
                Style['width']            = '165px'
                Style['color']            = 'white'
                Style['border-color']     = 'white'
                Style['background-color'] = 'black'
                Style['border-width']     = '4px'
                if(player.Ainsoph.points.lt(250))
                {
                    Style['color']            = '#777777'
                    Style['border-color']     = '#777777'
                    Style['background-color'] = 'black'
                }
                if(hasUpgrade('Ainsoph',42))
                {
                    Style['color']            = 'white'
                    Style['border-color']     = 'white'
                    Style['background-color'] = '#002e00'
                }
                if(player.Ainsoph.Upgrade_Mini == 1)
                {
                    Style['height']           = '30px'
                    Style['width']            = '30px'
                    Style['border-width']     = '2px'
                }
                return Style
            }
        },
        43:
        {
            fullDisplay  :  function()
            {
                var Title       = '<h2>超增益</h2>'
                var Discription = '<br><h3>降低无的需求</h3>'
                var Effect      = '<br><h3>÷' + format(1.1)
                var Cost        = '<br><h3>花费：' + format(1500) + ' 无限'
                if(player.Ainsoph.Upgrade_Mini == 1) return '<br>'
                return Title + '<br>' + Discription + Effect + '<br>' + Cost
            },
            branches     : [41],
            canAfford    :  function()
            {
                return (player.Ainsoph.points.gte(1500)&&(hasUpgrade('Ainsoph',41)))
            },
            pay          :  function()
            {
                player.Ainsoph.points = player.Ainsoph.points.sub(1500)
            },
            style        :  function()
            {
                var Style = {}
                Style['height']           = '165px'
                Style['width']            = '165px'
                Style['color']            = 'white'
                Style['border-color']     = 'white'
                Style['background-color'] = 'black'
                Style['border-width']     = '4px'
                if(player.Ainsoph.points.lt(1500))
                {
                    Style['color']            = '#777777'
                    Style['border-color']     = '#777777'
                    Style['background-color'] = 'black'
                }
                if(hasUpgrade('Ainsoph',43))
                {
                    Style['color']            = 'white'
                    Style['border-color']     = 'white'
                    Style['background-color'] = '#002e00'
                }
                if(player.Ainsoph.Upgrade_Mini == 1)
                {
                    Style['height']           = '30px'
                    Style['width']            = '30px'
                    Style['border-width']     = '2px'
                }
                return Style
            }
        },
        51:
        {
            fullDisplay  :  function()
            {
                var Title       = '<h2>无尽的阶梯</h2>'
                var Discription = '<br><h3>解锁【无限层级】</h3>'
                var Cost        = '<br><h3>花费：' + format(12500000) + ' 无限'
                if(player.Ainsoph.Upgrade_Mini == 1) return '<br>'
                return Title + '<br>' + Discription + '<br>' + Cost
            },
            canAfford    :  function()
            {
                return (player.Ainsoph.points.gte(12500000))
            },
            pay          :  function()
            {
                player.Ainsoph.points = player.Ainsoph.points.sub(12500000)
            },
            style        :  function()
            {
                var Style = {}
                Style['height']           = '165px'
                Style['width']            = '165px'
                Style['color']            = 'white'
                Style['border-color']     = 'white'
                Style['background-color'] = 'black'
                Style['border-width']     = '4px'
                if(player.Ainsoph.points.lt(12500000))
                {
                    Style['color']            = '#777777'
                    Style['border-color']     = '#777777'
                    Style['background-color'] = 'black'
                }
                if(hasUpgrade('Ainsoph',51))
                {
                    Style['color']            = 'white'
                    Style['border-color']     = 'white'
                    Style['background-color'] = '#002e00'
                }
                if(player.Ainsoph.Upgrade_Mini == 1)
                {
                    Style['height']           = '30px'
                    Style['width']            = '30px'
                    Style['border-width']     = '2px'
                }
                return Style
            }
        },
    },

    clickables :
    {
        11:
        {
            title    : '<h1>↑</h1>',
            canClick :  function(){return true},
            onClick  :  function()
            {
                player.Ainsoph.Upgrade_Row = 3
            },
            style    :  function()
            {
                return{
                    'height'           :'50px',
                    'width'            :'50px',
                    'border-width'     : '4px',
                    'color'            : '#ffffff',
                    'border-color'     : '#ffffff',
                    'background-color' : 'black',
                }
            }
        },
        12:
        {
            title : '<h1>^</h1>',
            canClick :  function(){return true},
            onClick  :  function()
            {
                if(player.Ainsoph.Upgrade_Row > 3) player.Ainsoph.Upgrade_Row -= 1
            },
            style :  function()
            {
                return{
                    'height'           :'50px',
                    'width'            :'50px',
                    'border-width'     : '4px',
                    'color'            : '#ffffff',
                    'border-color'     : '#ffffff',
                    'background-color' : 'black',
                }
            }
        },
        13:
        {
            title : '<h1>v</h1>',
            canClick :  function(){return true},
            onClick  :  function()
            {
                if(player.Ainsoph.Upgrade_Row < player.Ainsoph.Upgrade_Row_Max) player.Ainsoph.Upgrade_Row += 1
            },
            style :  function()
            {
                return{
                    'height'           :'50px',
                    'width'            :'50px',
                    'border-width'     : '4px',
                    'color'            : '#ffffff',
                    'border-color'     : '#ffffff',
                    'background-color' : 'black',
                }
            }
        },
        14:
        {
            title : '<h1>↓</h1>',
            canClick :  function(){return true},
            onClick  :  function()
            {
                player.Ainsoph.Upgrade_Row = player.Ainsoph.Upgrade_Row_Max
            },
            style :  function()
            {
                return{
                    'height'           :'50px',
                    'width'            :'50px',
                    'border-width'     : '4px',
                    'color'            : '#ffffff',
                    'border-color'     : '#ffffff',
                    'background-color' : 'black',
                }
            }
        },
        15:
        {
            title : '<h1>↹</h1>',
            canClick :  function(){return true},
            onClick  :  function()
            {
                switch(player.Ainsoph.Upgrade_Mini)
                {
                    case 0:
                    {
                        player.Ainsoph.Upgrade_Mini = 1
                        break
                    }
                    case 1:
                    {
                        player.Ainsoph.Upgrade_Mini = 0
                        break
                    }
                }
            },
            style :  function()
            {
                return{
                    'height'           :'50px',
                    'width'            :'50px',
                    'border-width'     : '4px',
                    'color'            : '#ffffff',
                    'border-color'     : '#ffffff',
                    'background-color' : 'black',
                }
            }
        },
        21:
        {
            title : '<h3>线性增量</h3>',
            display  :  function()
            {
                var Level       = '<h3>Lv.' + formatWhole(player.Ainsoph.Clickables_Inf_Level[1])  + '  DIM.' + formatWhole(player.Ainsoph.Clickables_Inf_Level[1].div(10).floor())
                var Discription = '<br><h3>提高基数增长倍数</h3>'
                var Effect      = '<br><h3>x' + format(player.Ainsoph.Clickables_Inf_Effect[1]) + '</h3>'
                var Cost        = '<br><h3>花费：' + format(player.Ainsoph.Clickables_Inf_Cost[1]) + ' 无限</h3>'
                return Level + '<br>' + Discription + Effect + '<br>' + Cost
            },
            canClick :  function()
            {
                return player.Ainsoph.points.gte(player.Ainsoph.Clickables_Inf_Cost[1])
            },
            onClick  :  function()
            {
                player.Ainsoph.points                  = player.Ainsoph.points.sub(player.Ainsoph.Clickables_Inf_Cost[1])
                player.Ainsoph.Clickables_Inf_Level[1] = player.Ainsoph.Clickables_Inf_Level[1].add(1)
            },
            onHold   :  function()
            {
                player.Ain.points              = player.Ain.points.sub(player.Ain.Clickables_11_Price[1])
                player.Ain.Clickables_11_Level[1] = player.Ain.Clickables_11_Level[1].add(1)
            },
            style    :  function()
            {
                if(player.Ainsoph.points.gte(player.Ainsoph.Clickables_Inf_Cost[1]))
                {
                    return{
                    'height'           : '150px',
                    'width'            : '200px',
                    'border-width'     : '4px',
                    'color'            : 'white',
                    'border-color'     : 'white',
                    'background-color' : 'black',
                    }
                }
                else
                {
                    return{
                    'height'           : '150px',
                    'width'            : '200px',
                    'border-width'     : '4px',
                    'color'            : '#777777',
                    'border-color'     : '#777777',
                    'background-color' : 'black', 
                    }
                }
            }
        },
        22:
        {
            title : '<h3>倍增量</h3>',
            display  :  function()
            {
                var Level       = '<h3>Lv.' + formatWhole(player.Ainsoph.Clickables_Inf_Level[1])  + '  DIM.' + formatWhole(player.Ainsoph.Clickables_Inf_Level[1].div(10).floor())
                var Discription = '<br><h3>提高基数增长倍数</h3>'
                var Effect      = '<br><h3>x' + format(player.Ainsoph.Clickables_Inf_Effect[1]) + '</h3>'
                var Cost        = '<br><h3>花费：' + format(player.Ainsoph.Clickables_Inf_Cost[1]) + ' 无限</h3>'
                return Level + '<br>' + Discription + Effect + '<br>' + Cost
            },
            canClick :  function()
            {
                return player.Ainsoph.points.gte(player.Ainsoph.Clickables_Inf_Cost[1])
            },
            onClick  :  function()
            {
                player.Ainsoph.points                  = player.Ainsoph.points.sub(player.Ainsoph.Clickables_Inf_Cost[1])
                player.Ainsoph.Clickables_Inf_Level[1] = player.Ainsoph.Clickables_Inf_Level[1].add(1)
            },
            onHold   :  function()
            {
                player.Ain.points              = player.Ain.points.sub(player.Ain.Clickables_11_Price[1])
                player.Ain.Clickables_11_Level[1] = player.Ain.Clickables_11_Level[1].add(1)
            },
            style    :  function()
            {
                if(player.Ainsoph.points.gte(player.Ainsoph.Clickables_Inf_Cost[1]))
                {
                    return{
                    'height'           : '150px',
                    'width'            : '200px',
                    'border-width'     : '4px',
                    'color'            : 'white',
                    'border-color'     : 'white',
                    'background-color' : 'black',
                    }
                }
                else
                {
                    return{
                    'height'           : '150px',
                    'width'            : '200px',
                    'border-width'     : '4px',
                    'color'            : '#777777',
                    'border-color'     : '#777777',
                    'background-color' : 'black', 
                    }
                }
            }
        },
        23:
        {
            title : '<h3>幂增量</h3>',
            display  :  function()
            {
                var Level       = '<h3>Lv.' + formatWhole(player.Ainsoph.Clickables_Inf_Level[1])  + '  DIM.' + formatWhole(player.Ainsoph.Clickables_Inf_Level[1].div(10).floor())
                var Discription = '<br><h3>提高基数增长倍数</h3>'
                var Effect      = '<br><h3>x' + format(player.Ainsoph.Clickables_Inf_Effect[1]) + '</h3>'
                var Cost        = '<br><h3>花费：' + format(player.Ainsoph.Clickables_Inf_Cost[1]) + ' 无限</h3>'
                return Level + '<br>' + Discription + Effect + '<br>' + Cost
            },
            canClick :  function()
            {
                return player.Ainsoph.points.gte(player.Ainsoph.Clickables_Inf_Cost[1])
            },
            onClick  :  function()
            {
                player.Ainsoph.points                  = player.Ainsoph.points.sub(player.Ainsoph.Clickables_Inf_Cost[1])
                player.Ainsoph.Clickables_Inf_Level[1] = player.Ainsoph.Clickables_Inf_Level[1].add(1)
            },
            onHold   :  function()
            {
                player.Ain.points              = player.Ain.points.sub(player.Ain.Clickables_11_Price[1])
                player.Ain.Clickables_11_Level[1] = player.Ain.Clickables_11_Level[1].add(1)
            },
            style    :  function()
            {
                if(player.Ainsoph.points.gte(player.Ainsoph.Clickables_Inf_Cost[1]))
                {
                    return{
                    'height'           : '150px',
                    'width'            : '200px',
                    'border-width'     : '4px',
                    'color'            : 'white',
                    'border-color'     : 'white',
                    'background-color' : 'black',
                    }
                }
                else
                {
                    return{
                    'height'           : '150px',
                    'width'            : '200px',
                    'border-width'     : '4px',
                    'color'            : '#777777',
                    'border-color'     : '#777777',
                    'background-color' : 'black', 
                    }
                }
            }
        },
        24:
        {
            title    :  function()
            {
                if(player.Ainsoph.Infinity_Stage_Max == 1) return '<h3>不动点<br>ω^α=α</h3>'
                if(player.Ainsoph.Infinity_Stage_Max == 2) return '<h3>极限序数<br>ε(λ)=supε(α)</h3>'
                if(player.Ainsoph.Infinity_Stage_Max == 3) return '<h3>函数序数<br>φ(α,0)=α</h3>'
                if(player.Ainsoph.Infinity_Stage_Max == 4) return '<h3>超越可数基数</h3>'
                if(player.Ainsoph.Infinity_Stage_Max == 5) return '<h3>不动点<br>א(κ)=κ</h3>'
                if(player.Ainsoph.Infinity_Stage_Max == 6) return '<h3>不动点<br>ב(κ)=κ</h3>'
                if(player.Ainsoph.Infinity_Stage_Max == 7) return '<h3>超越 ZFC 公理</h3>'
            },
            display  :  function()
            {
                var Discription = '<br><h3>提高基数增长倍数</h3>'
                var Effect      = '<br><h3>x' + format(player.Ainsoph.Clickables_Inf_Effect[1]) + '</h3>'
                var Cost        = '<br><h3>花费：' + format(player.Ainsoph.Clickables_Inf_Cost[1]) + ' 无限</h3>'
                return Discription + Effect + '<br>' + Cost
            },
            canClick :  function()
            {
                return player.Ainsoph.points.gte(player.Ainsoph.Clickables_Inf_Cost[1])
            },
            onClick  :  function()
            {
                player.Ainsoph.points                  = player.Ainsoph.points.sub(player.Ainsoph.Clickables_Inf_Cost[1])
                player.Ainsoph.Clickables_Inf_Level[1] = player.Ainsoph.Clickables_Inf_Level[1].add(1)
            },
            onHold   :  function()
            {
                player.Ain.points              = player.Ain.points.sub(player.Ain.Clickables_11_Price[1])
                player.Ain.Clickables_11_Level[1] = player.Ain.Clickables_11_Level[1].add(1)
            },
            style    :  function()
            {
                if(player.Ainsoph.points.gte(player.Ainsoph.Clickables_Inf_Cost[1]))
                {
                    return{
                    'height'           : '150px',
                    'width'            : '200px',
                    'border-width'     : '4px',
                    'color'            : 'white',
                    'border-color'     : 'white',
                    'background-color' : 'black',
                    }
                }
                else
                {
                    return{
                    'height'           : '150px',
                    'width'            : '200px',
                    'border-width'     : '4px',
                    'color'            : '#777777',
                    'border-color'     : '#777777',
                    'background-color' : 'black', 
                    }
                }
            }
        },
    },

    milestones :
    {
        0: {
            requirementDescription : "<h3>1 总无限</h3>",
            done  :  function()
            {
                return player.Ainsoph.total.gte(1)
            },
            effectDescription      : "<br>【无】层的所有自动化都将永久保留。<br>即使【无】层的任何挑战被启动，这些自动化也可以启动",
            style :  function()
            {
                if(hasMilestone('Ainsoph',0))
                {
                    return{
                        'height'           : '165px',
                        'width'            : '165px',
                        'border-width'     : '4px',
                        'color'            : 'white',
                        'border-color'     : 'white',
                        'background-color' : '#002e00',
                    }
                }
                return{
                    'height'           : '165px',
                    'width'            : '165px',
                    'border-width'     : '4px',
                    'color'            : 'white',
                    'border-color'     : 'white',
                    'background-color' : 'black',
                }
            }
        },
        1: {
            requirementDescription : "<h3>所有第二行升级</h3>",
            done  :  function()
            {
                return  ((hasUpgrade('Ainsoph',21))&&(hasUpgrade('Ainsoph',31))&&(hasUpgrade('Ainsoph',41)))
            },
            effectDescription      : "<br>【稳定空间】也会购买【无色集群】",
            style :  function()
            {
                if(hasMilestone('Ainsoph',0))
                {
                    return{
                        'height'           : '165px',
                        'width'            : '165px',
                        'border-width'     : '4px',
                        'color'            : 'white',
                        'border-color'     : 'white',
                        'background-color' : '#002e00',
                    }
                }
                return{
                    'height'           : '165px',
                    'width'            : '165px',
                    'border-width'     : '4px',
                    'color'            : 'white',
                    'border-color'     : 'white',
                    'background-color' : 'black',
                }
            }
        },
    },
})