addLayer('Ain',
{
    name          : 'Ain',
    symbol        : '<h6><font color="#ffffff">A1</style></h6>',
    resource      : '无',
    baseResource  : '点数',
    baseAmount    :  function()
    {
        return player.points
    },
    color         : '#111111',
    type          : 'normal',
    exponent      :  0.5,
    position      :  1,
    row           :  0,
    requires      :  new Decimal(10),

    resetDescription : '解析 ',

    hotkeys : 
    [
        {
            key: 'holder',
            description: 'Hotkeys for Layer "Ain"'
        },
        {
            key: 'z',
            description: 'Z: Gain Ain No.1',
            onPress  :  function()
            {
                if((player.tab == 'Ain')&&(player.Ain.points.gte(player.Ain.Clickables_1[1][3])&&(player.Ain.Auto_Clickable_1 == 0)))
                {
                    player.Ain.points             = player.Ain.points.sub(player.Ain.Clickables_1[1][3])
                    player.Ain.Clickables_1[1][1] = player.Ain.Clickables_1[1][1].add(1)
                }
            }
        },
        {
            key: 'x',
            description: 'X: Gain Ain No.2',
            onPress  :  function()
            {
                if((player.tab == 'Ain')&&(player.Ain.Clickables_1[1][1].gte(player.Ain.Clickables_1[2][3]))&&(player.Ain.Auto_Clickable_1 == 0))
                {
                    player.Ain.Clickables_1[1][1] = player.Ain.Clickables_1[1][1].sub(player.Ain.Clickables_1[2][3])
                    player.Ain.Clickables_1[2][1] = player.Ain.Clickables_1[2][1].add(1)
                }
            }
        },
        {
            key: 'c',
            description: 'C: Gain Ain No.3',
            onPress  :  function()
            {
                if((player.tab == 'Ain')&&(player.Ain.Clickables_1[2][1].gte(player.Ain.Clickables_1[3][3]))&&(player.Ain.Auto_Clickable_1 == 0))
                {
                    player.Ain.Clickables_1[2][1] = player.Ain.Clickables_1[2][1].sub(player.Ain.Clickables_1[3][3])
                    player.Ain.Clickables_1[3][1] = player.Ain.Clickables_1[3][1].add(1)
                }
            }
        },
        {
            key: 'v',
            description: 'V: Gain Ain No.4',
            onPress  :  function()
            {
                if((player.tab == 'Ain')&&(player.Ain.Clickables_1[3][1].gte(player.Ain.Clickables_1[4][3]))&&(player.Ain.Auto_Clickable_1 == 0))
                {
                    player.Ain.Clickables_1[3][1] = player.Ain.Clickables_1[3][1].sub(player.Ain.Clickables_1[4][3])
                    player.Ain.Clickables_1[4][1] = player.Ain.Clickables_1[4][1].add(1)
                }
            }
        },
    ],

    tooltip :  function()
    {
        return '<h1>AIN</h1>'
    },

    tabFormat :
    {
        'Ain':
        {
            unlocked :  function()
            {
                return true
            },
            content :  
            [
                ['display-text',function(){return '<h2>You have <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">' + format(player.Ain.points) + '</h1> <h2>Ain<br>'}],
                ['display-text',function()
                    {
                        if(player.Ain.Clickables_2[2][1].gte(1))
                        {
                            return '[(+' + format(player.Ain.Point_Gain_Base) + '×' + format(player.Ain.Point_Gain_Multiply) + ')^' + format(player.Ain.Point_Gain_Exponent) + '= +' + format(player.Ain.Point_Gain_Total) + ' Ain/s]'
                        }
                        return '(+' + format(player.Ain.Point_Gain_Base) + ' Ain/s)'
                    }
                ],
                'blank',
                ['microtabs','Tab1',{'border-color':'#0f0f0f'}],
            ]         
        },
        'Information':
        {
            unlocked :  function()
            {
                return true
            },
            content :
            [
                
            ]
        }
    },

    microtabs:
    {
        Tab1:
        {
            'Depths':
            {
                content: function()
                {
                    var Format = []
                    Format.push('blank')
                    Format.push('h-line','')
                    Format.push(['row',[['row',[['display-text','<h3>Ain Hierarchy</h3>']],                                                {'width':'200px'}],
                                        ['row',[['display-text','<h3>Depth</h3>']],                                                        {'width':'200px'}],
                                        ['row',[['display-text','<h3>Effect</h3>']],                                                       {'width':'200px'}],
                                        ['row',[['display-text','<h3>Price</h3>']],                                                        {'width':'300px'}]],
                                {'height':'50px','background-color':'#222222'}])
                    Format.push('h-line','')

                    for(var I=1; I<=8; I=I+2)
                    {
                        if(player.Ain.Clickables_1_Unlock[I])
                            Format.push(['row',[['row',[['display-text','<h3>Ain No.' + formatWhole(I) +'</h3>']],                         {'width':'200px'}],
                                                ['row',[['display-text','<h3>'  + formatWhole(player.Ain.Clickables_1[I][1]) + '</h3>']],  {'width':'200px'}],
                                                ['row',[['display-text','<h3>+' + format(player.Ain.Clickables_1[I][2]) + '</h3>']],       {'width':'200px'}],
                                                ['row',[['clickable',10+I]],                                                               {'width':'300px'}]],
                                        {'height':'35px','background-color':'#333333'}])
                            if(player.Ain.Clickables_1_Unlock[I+1])
                            Format.push(['row',[['row',[['display-text','<h3>Ain No.' + formatWhole(I+1) + '</h3>']],                      {'width':'200px'}],
                                                ['row',[['display-text','<h3>'  + formatWhole(player.Ain.Clickables_1[I+1][1]) + '</h3>']],{'width':'200px'}],
                                                ['row',[['display-text','<h3>+' + format(player.Ain.Clickables_1[I+1][2]) + '</h3>']],     {'width':'200px'}],
                                                ['row',[['clickable',11+I]],                                                               {'width':'300px'}]],
                                        {'height':'35px','background-color':'#222222'}])
                    }

                    Format.push('blank')
                    Format.push(['row',[['clickable',61]],{}])
                    return Format
               }
            },
            'Simple Research':
            {
                content:
                [
                    'blank',
                    ['h-line','900px'],
                    'blank',
                    'blank',
                    'blank',
                    'blank',
                    'blank',
                    ['row',[['column',,{'width':'605px'}],['clickable',99]],{}],
                    'blank',
                    ['row',[['column',[['clickable',24],['row',,{'height':'125px'}]],{}],['column',,{'width':'18px'}],['column',[['row',,{'height':'50px'}],['clickable',21]],{}],['column',,{'width':'18px'}],['column',[['row',,{'height':'50px'}],['clickable',22]],{}],['column',,{'width':'18px'}],['column',[['clickable',25],['row',,{'height':'125px'}]],{}]],{}],
                    ['clickable',23],
                    'blank',
                    ['clickable',26],
                ]
            },
            'Deep Research':
            {
                unlocked :  function()
                {
                    return player.Ain.MiniTab3_Shown == 1
                },
                content:  function()
                {
                    var Format = []
                    Format.push('blank')
                    Format.push('h-line','')
                    Format.push('blank')
                    Format.push(['display-text','<h2>Your Research Power(RP) is <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">' + format(player.Ain.Deep_Research_Power)])
                    Format.push('blank')
                    Format.push(['clickable',31])
                    Format.push('blank')
                    Format.push('blank')

                    if(player.Ain.Deep_Research_Category == 0)
                    {
                        Format.push(['row',[['clickable',32]],{'width':'900px'}])
                    }

                    if(player.Ain.Deep_Research_Category !== 0)
                    {
                        if(player.Ain.Deep_Research_Category == 1)
                        {
                            Format.push(['row',[['row',[['column',[['clickable',98],
                                                                   ['column',,{'height':'550px'}]],{}],
                                                        ['column',[['column',[['column',,{'height':'20px'}],
                                                                              ['display-text','<h1>Category - Aleph']],{'height':'50px'}],
                                                                   ['row',[['column',[['column',,{'height':'5px'}],
                                                                                      ['column',[['clickable',44]],{'width':'34px'}],
                                                                                      ['column',,{'height':'154px'}],
                                                                                      ['column',[['clickable',47]],{'width':'34px'}],
                                                                                      ['column',,{'height':'0px'}]],{}],
                                                                           ['column',[['column',,{'height':'48px'}],
                                                                                      ['column',[['clickable',43]],{'width':'34px'}],
                                                                                      ['column',,{'height':'18px'}],
                                                                                      ['column',[['clickable',45]],{'width':'34px'}],
                                                                                      ['column',,{'height':'18px'}],
                                                                                      ['column',[['clickable',46]],{'width':'34px','transform':'translate(-25px,-25px)'}],
                                                                                      ['column',,{'height':'43px'}]],{}],
                                                                           ['column',[['column',,{'height':'96px'}],
                                                                                      ['column',[['clickable',42]],{'width':'34px'}],
                                                                                      ['column',,{'height':'160px'}],],{}],
                                                                           ['column',[['column',,{'height':'144px'}],
                                                                                      ['column',[['clickable',41]],{'width':'34px'}],
                                                                                      ['column',,{'height':'140px'}]],{}],
                                                                           ['column',[['column',,{'height':'192px'}],
                                                                                      ['column',[['clickable',48]],{'width':'34px'}],
                                                                                      ['column',,{'height':'120px'}]],{}],
                                                                           ['column',[['column',,{'height':'122px'}],
                                                                                      ['column',[['clickable',412]],{'width':'34px','transform':'translate(25px,25px)'}],
                                                                                      ['column',,{'height':'18px'}],
                                                                                      ['column',[['clickable',411]],{'width':'34px'}],
                                                                                      ['column',,{'height':'18px'}],
                                                                                      ['column',[['clickable',49]],{'width':'34px'}],
                                                                                      ['column',,{'height':'118px'}]],{}],
                                                                           ['column',[['column',,{'height':'84px'}],
                                                                                      ['column',[['clickable',413]],{'width':'49px'}],
                                                                                      ['column',,{'height':'154px'}],
                                                                                      ['column',[['clickable',410]],{'width':'49px'}],
                                                                                      ['column',,{'height':'80px'}]],{}]],                        
                                                                   {'height':'500px'}],
                                                                  ['column',[['milestone','1']],{'height':'50px'}]],              
                                                        {'width':'500px'}],
                                                        ['column',,{'width':'50px'}],
                                                    ],                          
                                                {'width':'600px','height':'600px','border':'2px solid white'}],
                                                ['column',[['display-text',player.Ain.Deep_Research_Text],'blank',['bar','Progress']],{'width':'300px'}],
                                                ['v-line','600px']],{}])
                        }
                    }
                    return Format
                }
            }
        }
    },

    layerShown :  function()
    {
        //始终展示本层
        return player.Ain.Self_Shown
    },
    
    startData :  function()
    {    
        return{
        unlocked                    : true,
		points                      : new Decimal(10),
        Point_Gain_Multiply         : new Decimal(0),
        Point_Gain_Exponent         : new Decimal(0),
        Point_Gain_Total            : new Decimal(0),

        Point_Gain_Base                    : new Decimal(0),

        Self_Shown                  : 0,

        // 1.Depth, 2.Gain, 3.Price,
        Clickables_1                :[0,[0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                    ],
        Clickables_1_Unlock         :[0,1,0,0,0,0,0,0,0],
        Auto_Clickable_1            : 0,

        // 1.Level, 2.Effect, 3.Price,
        Clickables_2                :[0,[0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                    ],

        // 1.Type(-1:Recycle, >0:Finite), 2.Level, 3.Effect, 4.Price, 5.Progress, 6.IsResearching
        Clickables_3                :[0,[0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, 0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                    ],
        
        // 1.New, 2.Old
        Refactor                    :[0,new Decimal(1),new Decimal(1)],

        Deep_Research_Category      : 0,
        Deep_Research_Researching   : 0,
        Deep_Research_Inject        : new Decimal(0),
        Deep_Research_Power         : new Decimal(0),
        Deep_Research_Gain          : new Decimal(0),

        // 1.New 2.Old
        Deep_Research_Text          : '<br>',
        Deep_Research_TextNo        : 0,
        Deep_Research_Bar           : [0, new Decimal(0), new Decimal(0)]
        }
    },
        
    gainMult :  function()
    {
        mult = new Decimal(1)
        return mult
    },

    gainExp :  function()
    {
        exp = new Decimal(1)
        return exp
    },

    update :  function(diff)
    {
        // Ain 显示：Hierarchy 部分
        for(var I=2; I<=8; I++)
        {
            if(player.Ain.Clickables_1[I-1][1].gte(1))
            player.Ain.Clickables_1_Unlock[I] = 1
        }

        // Ain 高研究：研究上限数量部分
        player.Ain.Clickables_3[1][1]  = -1
        player.Ain.Clickables_3[2][1]  = -1
        player.Ain.Clickables_3[5][1]  = -1
        player.Ain.Clickables_3[6][1]  = 1
        player.Ain.Clickables_3[8][1]  = -1
        player.Ain.Clickables_3[11][1] = -1
        player.Ain.Clickables_3[13][1] = 1

        // Ain 高研究：价格和效果部分
        player.Ain.Clickables_3[1][3]   = new Decimal(player.Ain.Clickables_3[1][2].mul(0.2)).add(1)
        player.Ain.Clickables_3[1][4]   = new Decimal(100    ).mul(new Decimal(1.5 ).pow(player.Ain.Clickables_3[1][2].add(1)))
        player.Ain.Clickables_3[2][3]   = new Decimal(0.125  ).mul(player.Ain.Clickables_3[2][2]).add(1)
        player.Ain.Clickables_3[2][4]   = new Decimal(Math.E ).pow(new Decimal(0.25).mul(player.Ain.Clickables_3[2][2].add(4))).sub(Math.E).add(1).mul(1000)
        player.Ain.Clickables_3[5][3]   = new Decimal(0.0025 ).sub(new Decimal(1).div(player.Ain.Clickables_3[5][2].add(400))).div(0.0025)
        player.Ain.Clickables_3[6][4]   = new Decimal(1000000)
        player.Ain.Clickables_3[5][4]   = new Decimal(2      ).pow(player.Ain.Clickables_3[5][2]).mul(7500)
        player.Ain.Clickables_3[8][3]   = new Decimal(0.025  ).mul(player.Ain.Clickables_3[8][2]).add(1)
        player.Ain.Clickables_3[8][4]   = new Decimal(100    ).mul(new Decimal(1.05).pow(player.Ain.Clickables_3[8][2]))
        player.Ain.Clickables_3[11][3]  = new Decimal(10     ).mul(player.Ain.Clickables_3[11][2])
        player.Ain.Clickables_3[11][4]  = new Decimal(3      ).pow(new Decimal(0.5).mul(player.Ain.Clickables_3[11][2])).mul(10000)
        player.Ain.Clickables_3[13][4]  = new Decimal(1000000)
        
        // Refactor：新效果计算部分
        player.Ain.Refactor[1] = new Decimal(1)
        var Levels             = new Decimal(0)
        for (var I=1; I<=8; I++)
        {
            Levels = Levels.add(player.Ain.Clickables_1[I][1].mul(new Decimal(I).pow(4)))
        }
        if(player.Ain.Clickables_3[6][2].gte(1))
        {
            Levels = Levels.add(player.Ain.Clickables_2[1][1].mul(200))
            Levels = Levels.add(player.Ain.Clickables_2[2][1].mul(200))
            Levels = Levels.add(player.Ain.Clickables_2[3][1].mul(10))
        }
        player.Ain.Refactor[1] = Levels.mul(0.01).mul(player.Ain.Clickables_3[2][3]).add(1)

        // Ain 低研究：价格和效果
        player.Ain.Clickables_2[1][2] = player.Ain.Clickables_2[1][1].add(2.5).log(1.05).sub(5.5568)
        player.Ain.Clickables_2[1][3] = new Decimal(Math.E).pow(player.Ain.Clickables_2[1][1].pow(1.25)).mul(2500)
        player.Ain.Clickables_2[2][2] = new Decimal(2     ).sub(new Decimal(1).div(new Decimal(1.1).pow(player.Ain.Clickables_2[2][1])))
        player.Ain.Clickables_2[2][3] = new Decimal(Math.E).pow(player.Ain.Clickables_2[2][1].pow(1.5)).mul(1000)
        player.Ain.Clickables_2[3][2] = new Decimal(1     ).div(new Decimal(1.00347).pow(player.Ain.Clickables_2[3][1]))
        player.Ain.Clickables_2[3][3] = new Decimal(1.05  ).pow(player.Ain.Clickables_2[3][1]).mul(1000)

        // Ain 本体层级
        for(var I=1; I<=8; I++)
        {
            // Ain 效果
            player.Ain.Clickables_1[I][2] = player.Ain.Clickables_1[I][1].mul(new Decimal(I).pow(4))
            // Ain 价格
            player.Ain.Clickables_1[I][3] = new Decimal(Math.E).pow(new Decimal(0.25).mul(player.Ain.Clickables_1[I][1])).mul(10)  .mul(player.Ain.Clickables_2[3][2]).ceil()
            if(player.Ain.Clickables_1[I][1].lt(0))  player.Ain.Clickables_1[I][1] = new Decimal(0)
        }
    
        // Ain 自动购买：Hierachy 部分
        if(player.Ain.Auto_Clickable_1)
        {
            for(var J=0; J<100; J++)
            {
                for(var I=1; I<=8; I++)
                {
                    if(I==1)
                    {
                        if(player.Ain.points.gte(player.Ain.Clickables_1[1][3]))
                        {
                            player.Ain.points             = player.Ain.points.sub(player.Ain.Clickables_1[1][3])
                            player.Ain.Clickables_1[1][1] = player.Ain.Clickables_1[1][1].add(1)
                            player.Ain.Clickables_1[1][3] = new Decimal(Math.E).pow(new Decimal(0.25).mul(player.Ain.Clickables_1[1][1])).mul(10)  .mul(player.Ain.Clickables_2[3][2]).ceil()
                        }
                    }
                    if(I>1)
                    {
                        if(player.Ain.Clickables_1[I-1][1].gte(player.Ain.Clickables_1[I][3]))
                        {
                            player.Ain.Clickables_1[I-1][1] = player.Ain.Clickables_1[I-1][1].sub(player.Ain.Clickables_1[I][3])
                            player.Ain.Clickables_1[I][1]   = player.Ain.Clickables_1[I][1].add(1)
                            player.Ain.Clickables_1[I][3]   = new Decimal(Math.E).pow(new Decimal(0.25).mul(player.Ain.Clickables_1[I][1])).mul(10)  .mul(player.Ain.Clickables_2[3][2]).ceil()
                        }
                    }
                }
            }
        }

        // Ain 获得计算
        player.Ain.Point_Gain_Multiply = new Decimal(1)
        player.Ain.Point_Gain_Multiply = player.Ain.Point_Gain_Multiply.mul(player.Ain.Clickables_2[1][2])
        player.Ain.Point_Gain_Multiply = player.Ain.Point_Gain_Multiply.mul(player.Ain.Refactor[2])
        player.Ain.Point_Gain_Multiply = player.Ain.Point_Gain_Multiply.mul(player.Ain.Clickables_3[1][3])
        player.Ain.Point_Gain_Exponent = new Decimal(1)
        player.Ain.Point_Gain_Exponent = player.Ain.Point_Gain_Exponent.mul(player.Ain.Clickables_2[2][2])
        player.Ain.Point_Gain_Base = new Decimal(0)
        for(var I=1; I<=8; I++)
        {
            player.Ain.Point_Gain_Base = player.Ain.Point_Gain_Base.add(player.Ain.Clickables_1[I][2])
        }
        player.Ain.Point_Gain_Total = player.Ain.Point_Gain_Base.mul(player.Ain.Point_Gain_Multiply)
        player.Ain.Point_Gain_Total = player.Ain.Point_Gain_Total.pow(player.Ain.Point_Gain_Exponent)
        player.Ain.points   = player.Ain.points.add((player.Ain.Point_Gain_Total).mul(diff))

        // 计算研究：强度部分
        if(player.Ain.points.gte(0))                                          player.Ain.Deep_Research_Power = player.Ain.Deep_Research_Inject.add(1).log(2)
        else player.Ain.Deep_Research_Power = new Decimal(0)
        if(player.Ain.Clickables_3[8][3].gte(1))                              player.Ain.Deep_Research_Power = player.Ain.Deep_Research_Power.mul(player.Ain.Clickables_3[8][3])
        if(player.Ain.Clickables_3[5][3].mul(player.Ain.Refactor[2]).gte(1))  player.Ain.Deep_Research_Power = player.Ain.Deep_Research_Power.mul(player.Ain.Clickables_3[5][3].mul(player.Ain.Refactor[2]))

        if(player.Ain.points.gte(0))                                          player.Ain.Deep_Research_Gain  = player.Ain.points.add(player.Ain.Deep_Research_Inject).add(1).log(2)
        else player.Ain.Deep_Research_Gain = new Decimal(0)
        if(player.Ain.Clickables_3[8][3].gte(1))                              player.Ain.Deep_Research_Gain = player.Ain.Deep_Research_Gain.mul(player.Ain.Clickables_3[8][3])
        if(player.Ain.Clickables_3[5][3].mul(player.Ain.Refactor[2]).gte(1))  player.Ain.Deep_Research_Gain = player.Ain.Deep_Research_Gain.mul(player.Ain.Clickables_3[5][3].mul(player.Ain.Refactor[2]))
                                                                              player.Ain.Deep_Research_Gain = player.Ain.Deep_Research_Gain.sub(player.Ain.Deep_Research_Power)
        if(player.Ain.Deep_Research_Gain.lt(0)) player.Ain.Deep_Research_Gain = new Decimal(0)

        // 计算研究：执行研究部分
        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
        {
            if(player.Ain.Clickables_3[I][1] == -1)
            {
                if(player.Ain.Clickables_3[I][6] == 1)
                {
                    player.Ain.Clickables_3[I][5] = player.Ain.Clickables_3[I][5].add(player.Ain.Deep_Research_Power.mul(diff))
                    if(player.Ain.Clickables_3[I][5].gte(player.Ain.Clickables_3[I][4]))
                    {
                        player.Ain.Clickables_3[I][2] = player.Ain.Clickables_3[I][2].add(1)
                        player.Ain.Clickables_3[I][5] = new Decimal(0)
                    }
                }
            }
            if(player.Ain.Clickables_3[I][1]>0)
            {
                if(player.Ain.Clickables_3[I][6] == 1)
                {
                    if(player.Ain.Clickables_3[I][2].gte(player.Ain.Clickables_3[I][1]))
                    {
                        player.Ain.Clickables_3[I][6] = 0
                    }
                    else
                    {
                        player.Ain.Clickables_3[I][5] = player.Ain.Clickables_3[I][5].add(player.Ain.Deep_Research_Power.mul(diff))
                        if(player.Ain.Clickables_3[I][5].gte(player.Ain.Clickables_3[I][4]))
                        {
                            player.Ain.Clickables_3[I][2] = player.Ain.Clickables_3[I][2].add(1)
                            player.Ain.Clickables_3[I][5] = new Decimal(0)
                        }
                    }
                }
            }
        }

        // Ain 高研究文本处理：第一部分
        if(document.getElementById('clickable-Ain-41')  != null)
        {
            document.getElementById('clickable-Ain-41' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 11 }
            document.getElementById('clickable-Ain-41' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0  }
        }
        if(document.getElementById('clickable-Ain-42')  != null)
        {
            document.getElementById('clickable-Ain-42' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 12 }
            document.getElementById('clickable-Ain-42' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0  }
        }
        if(document.getElementById('clickable-Ain-43')  != null)
        {
            document.getElementById('clickable-Ain-43' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 13 }
            document.getElementById('clickable-Ain-43' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0  }
        }
        if(document.getElementById('clickable-Ain-44')  != null)
        {
            document.getElementById('clickable-Ain-44' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 14 }
            document.getElementById('clickable-Ain-44' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0  }
        }
        if(document.getElementById('clickable-Ain-45')  != null)
        {
            document.getElementById('clickable-Ain-45' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 15 }
            document.getElementById('clickable-Ain-45' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0  }
        }
        if(document.getElementById('clickable-Ain-46')  != null)
        {
            document.getElementById('clickable-Ain-46' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 16 }
            document.getElementById('clickable-Ain-46' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0  }
        }
        if(document.getElementById('clickable-Ain-47')  != null)
        {
            document.getElementById('clickable-Ain-47' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 17 }
            document.getElementById('clickable-Ain-47' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0  }
        }
        if(document.getElementById('clickable-Ain-48')  != null)
        {
            document.getElementById('clickable-Ain-48' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 18 }
            document.getElementById('clickable-Ain-48' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0  }
        }
        if(document.getElementById('clickable-Ain-49')  != null)
        {
            document.getElementById('clickable-Ain-49' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 19 }
            document.getElementById('clickable-Ain-49' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0  }
        }
        if(document.getElementById('clickable-Ain-410') != null)
        {
            document.getElementById('clickable-Ain-410' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 110 }
            document.getElementById('clickable-Ain-410' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0   }
        }
        if(document.getElementById('clickable-Ain-411') != null)
        {
            document.getElementById('clickable-Ain-411' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 111 }
            document.getElementById('clickable-Ain-411' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0   }
        }
        if(document.getElementById('clickable-Ain-412') != null)
        {
            document.getElementById('clickable-Ain-412' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 112 }
            document.getElementById('clickable-Ain-412' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0   }
        }
        if(document.getElementById('clickable-Ain-413') != null)
        {
            document.getElementById('clickable-Ain-413' ).onmouseenter = function(e){ player.Ain.Deep_Research_TextNo = 113 }
            document.getElementById('clickable-Ain-413' ).onmouseleave = function() { player.Ain.Deep_Research_TextNo = 0   }
        }

        // Ain 高研究文本处理：第二部分
        switch(player.Ain.Deep_Research_TextNo)
        {
            case 11:   player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A1]</p><br><h1>Spring Up</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[1][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>Multiply Ain production<br><br>×' + format(player.Ain.Clickables_3[1][3]) + '</h2><br>'
                      ;break
            case 12:  player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A2]</p><br><h1>Refactor EX</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[2][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>Multiply<br>[Refactor] Effect<br><br>×' + format(player.Ain.Clickables_3[2][3]) + '</h2><br>'
                      ;break
            case 13:  player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A3]</p><br><h1>Dissociation</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[3][2]) + '/' + '0' + '</h2><br><br>Finite Research<br><h1>--------------</h1><h2>The time spent<br>will multiply<br>Ain gain<br><br>(Only start time counting when this research is done)<br><br>'
                      ;break
            case 14:  player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A4]</p><br><h1>Depth Effect</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[4][2]) + '/' + '0' + '<br></h2>Finite Research<br><h1>--------------</h1><h2>Depth of Ain Hierarchy increase its production<br>'
                      ;break
            case 15:  player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A5]</p><br><h1>Knowledge Framework Reconstruction</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[5][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>[Refactor] will multiply RP by percentage<br><br>×' + format(player.Ain.Refactor[2]) + '<br>×' + format(player.Ain.Clickables_3[5][3].mul(100)) + '%<br>------------<br>≈ ×' + format(player.Ain.Clickables_3[5][3].mul(player.Ain.Refactor[2])) + '</h2><br>'
                      ;break
            case 16:  player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A6]</p><br><h1>Enlarge refactor<br>range</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[6][2]) + '/' + formatWhole(player.Ain.Clickables_3[6][1]) + '</h2><br>Finite Research<br><h1>--------------</h1><h2>[Refactor]<br>will also include the three buyables in Simple Research'
                      ;break
            case 17:  player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A7]</p><br><h1>Analyse</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[4][2]) + '/' + formatWhole(player.Ain.Clickables_3[13][1]) + '<br></h2>Finite Research<br><h1>--------------</h1><h2>Unlock new<br>features<br>'
                      ;break
            case 18:  player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A8]</p><br><h1>Note</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[8][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>Multiply RP production<br><br>×' + format(player.Ain.Clickables_3[8][3]) + '</h2><br>'
                      ;break
            case 19:  player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A9]'
                      ;break
            case 110: player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A10]</p><br><h1>Abyss</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[10][2]) + '/' + formatWhole(player.Ain.Clickables_3[13][1]) + '<br></h2>Finite Research<br><h1>--------------</h1><h2>Unlock new<br>features<br>'
                      ;break
            case 111: player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A11]</p><br><h1>Summary</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[11][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>Increase the max level of<br>[Knowledge]<br><br>+' + formatWhole(player.Ain.Clickables_3[11][3]) + '</h2><br>'
                      ;break
            case 112: player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A12]</p><br><h1>Research Bonus</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[2][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>The total level of A1 A2 A5 A8 A11 power the Ain gain<br><br>^' + format(player.Ain.Clickables_3[2][3]) + '</h2><br>'
                      ;break
            case 113: player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A13]</p><br><h1>Resting?<br>No Allowed!</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[13][2]) + '/' + formatWhole(player.Ain.Clickables_3[13][1]) + '<br></h2>Finite Research<br><h1>--------------</h1><h2>RP will multiply<br>Ain production if not researching<br><br>×' + format(player.Ain.Clickables_3[13][3]) + '</h2><br>'
                      ;break
            default : 
            {
                if(player.Ain.Clickables_3[1][6]  == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A1]</p><br><h1>Spring Up</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[1][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>Multiply Ain production<br><br>×' + format(player.Ain.Clickables_3[1][3]) + '</h2><br>'
                if(player.Ain.Clickables_3[2][6]  == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A2]</p><br><h1>Refactor EX</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[2][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>Multiply<br>[Refactor] Effect<br><br>×' + format(player.Ain.Clickables_3[2][3]) + '</h2><br>'
                if(player.Ain.Clickables_3[3][6]  == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A3]</p><br><h1>Dissociation</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[3][2]) + '/' + '0' + '</h2><br><br>Finite Research<br><h1>--------------</h1><h2>The time spent<br>will multiply<br>Ain gain<br><br>(Only start time counting when this research is done)<br><br>'
                if(player.Ain.Clickables_3[4][6]  == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A4]</p><br><h1>Depth Effect</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[4][2]) + '/' + '0' + '<br></h2>Finite Research<br><h1>--------------</h1><h2>Depth of Ain Hierarchy increase its production<br>'
                if(player.Ain.Clickables_3[5][6]  == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A5]</p><br><h1>Knowledge Framework Reconstruction</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[5][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>[Refactor] will multiply RP by percentage<br><br>×' + format(player.Ain.Refactor[2]) + '<br>×' + format(player.Ain.Clickables_3[5][3].mul(100)) + '%<br>------------<br>≈ ×' + format(player.Ain.Clickables_3[5][3].mul(player.Ain.Refactor[2])) + '</h2><br>'
                if(player.Ain.Clickables_3[6][6]  == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A6]</p><br><h1>Enlarge refactor<br>range</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[6][2]) + '/' + formatWhole(player.Ain.Clickables_3[6][1]) + '</h2><br>Finite Research<br><h1>--------------</h1><h2>[Refactor]<br>will also<br>calculate the<br>level of<br>[Ain Obtain]<br>[Ain Guide]<br>[Knowledge]<br>'
                if(player.Ain.Clickables_3[7][6]  == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A7]</p><br><h1>Analyse</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[4][2]) + '/' + formatWhole(player.Ain.Clickables_3[13][1]) + '<br></h2>Finite Research<br><h1>--------------</h1><h2>Unlock new<br>features<br>'
                if(player.Ain.Clickables_3[8][6]  == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A8]</p><br><h1>Note</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[8][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>Multiply RP production<br><br>×' + format(player.Ain.Clickables_3[8][3]) + '</h2><br>'
                if(player.Ain.Clickables_3[9][6]  == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A9]'
                if(player.Ain.Clickables_3[10][6] == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A10]</p><br><h1>Abyss</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[13][2]) + '/' + formatWhole(player.Ain.Clickables_3[13][1]) + '<br></h2>Finite Research<br><h1>--------------</h1><h2>Unlock new<br>features<br>'
                if(player.Ain.Clickables_3[11][6] == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A11]</p><br><h1>Summary</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[11][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>Increase the max level of<br>[Knowledge]<br><br>+' + formatWhole(player.Ain.Clickables_3[11][3]) + '</h2><br>'
                if(player.Ain.Clickables_3[12][6] == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A12]</p><br><h1>Research Bonus</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[2][2]) + '</h2><br>Recycling Research<br><h1>--------------</h1><h2>The total level of A1 A2 A5 A8 A11 power the Ain gain<br><br>^' + format(player.Ain.Clickables_3[2][3]) + '</h2><br>'
                if(player.Ain.Clickables_3[13][6] == 1) player.Ain.Deep_Research_Text = '<p style="transform:scale(2,2)">[A13]</p><br><h1>Resting?<br>No Allowed!</h1><br><br><h2>Lv. ' + formatWhole(player.Ain.Clickables_3[13][2]) + '/' + formatWhole(player.Ain.Clickables_3[13][1]) + '<br></h2>Finite Research<br><h1>--------------</h1><h2>RP will multiply<br>Ain production if not researching<br><br>×' + format(player.Ain.Clickables_3[13][3]) + '</h2><br>'
            };
            break
        }
    },

    doReset :  function(Resetting_Layer)
    {
        
    },

    milestones :
    {
        1:
        {
            requirementDescription : '<br>Research all finite research',
            done : function(){return false},
            effectDescription : 'Unlock next category in this research direction',
            style :  function()
            {
                if(!hasMilestone(this.layer, this.id))
                {
                    Style = {}
                    Style['width']            = '500px'
                    Style['height']           = '75px'
                    Style['background-color'] = 'black'
                    Style['border']           = '2px solid #666666'
                    Style['color']            = '#666666'
                    Style['transform']        = 'translate(0px,-25px)'
                    return Style
                }
            }
        }
    },

    bars:
    {
        Progress: {
            fillStyle : {'background-color' : "#006600"},
            baseStyle : {'background-color' : "black"},
            textStyle : {'color': '#white'},
            direction: RIGHT,
            width: 280,
            height: 30,
            progress : function()
            {
                switch(player.Ain.Deep_Research_Text.substring(33,36))
                {
                    case 'A1]' : return player.Ain.Clickables_3[1][5].div(player.Ain.Clickables_3[1][4])   ;break
                    case 'A2]' : return player.Ain.Clickables_3[2][5].div(player.Ain.Clickables_3[2][4])   ;break
                    case 'A5]' : return player.Ain.Clickables_3[5][5].div(player.Ain.Clickables_3[5][4])   ;break
                    case 'A6]' : if(player.Ain.Clickables_3[6][2].lt(player.Ain.Clickables_3[6][1])) { return player.Ain.Clickables_3[6][5].div(player.Ain.Clickables_3[6][4]) }
                                 else                                                                { return 100 } ;break
                    case 'A8]' : return player.Ain.Clickables_3[8][5].div(player.Ain.Clickables_3[8][4])   ;break
                    case 'A11' : return player.Ain.Clickables_3[11][5].div(player.Ain.Clickables_3[11][4]) ;break
                }
            },
            display : function()
            {
                switch(player.Ain.Deep_Research_Text.substring(33,36))
                {
                    case 'A1]' : return format(player.Ain.Clickables_3[1][5])  + ' / ' + format(player.Ain.Clickables_3[1][4])  ;break
                    case 'A2]' : return format(player.Ain.Clickables_3[2][5])  + ' / ' + format(player.Ain.Clickables_3[2][4])  ;break
                    case 'A5]' : return format(player.Ain.Clickables_3[5][5])  + ' / ' + format(player.Ain.Clickables_3[5][4])  ;break
                    case 'A6]' : if(player.Ain.Clickables_3[6][2].lt(player.Ain.Clickables_3[6][1])) { return format(player.Ain.Clickables_3[6][5])  + ' / ' + format(player.Ain.Clickables_3[6][4]) }
                                 else                                                                { return 'Completed' } ;break
                    case 'A8]' : return format(player.Ain.Clickables_3[8][5])  + ' / ' + format(player.Ain.Clickables_3[8][4])  ;break
                    case 'A11' : return format(player.Ain.Clickables_3[11][5]) + ' / ' + format(player.Ain.Clickables_3[11][4]) ;break
                }
            },
            unlocked: true,
        },
    },

    clickables :
    {
        11:
        {
            title :  function()
            {
                return format(player.Ain.Clickables_1[1][3]) + ' Ain'
            },
            canClick :  function()
            {
                return player.Ain.points.gte(player.Ain.Clickables_1[1][3])&&(player.Ain.Auto_Clickable_1 == 0)
            },
            onClick :  function()
            {
                if(player.Ain.Clickables_2[7][1].lt(1)) player.Ain.points = player.Ain.points.sub(player.Ain.Clickables_1[1][3])
                player.Ain.Clickables_1[1][1]                             = player.Ain.Clickables_1[1][1].add(1)
            },
            onHold :  function()
            {
                player.Ain.points             = player.Ain.points.sub(player.Ain.Clickables_1[1][3])
                player.Ain.Clickables_1[1][1] = player.Ain.Clickables_1[1][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '225px'
                Style['height']           = '25px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.points.gte(player.Ain.Clickables_1[1][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        12:
        {
            title :  function()
            {
                return format(player.Ain.Clickables_1[2][3]) + ' No.1'
            },
            canClick :  function()
            {
                return (player.Ain.Clickables_1[1][1].gte(player.Ain.Clickables_1[2][3]))&&(player.Ain.Auto_Clickable_1 == 0)
            },
            onClick :  function()
            {
                player.Ain.Clickables_1[1][1] = player.Ain.Clickables_1[1][1].sub(player.Ain.Clickables_1[2][3])
                player.Ain.Clickables_1[2][1] = player.Ain.Clickables_1[2][1].add(1)
            },
            onHold :  function()
            {
                player.Ain.Clickables_1[1][1] = player.Ain.Clickables_1[1][1].sub(player.Ain.Clickables_1[2][3])
                player.Ain.Clickables_1[2][1] = player.Ain.Clickables_1[2][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '225px'
                Style['height']           = '25px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_1[1][1].gte(player.Ain.Clickables_1[2][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        13:
        {
            title :  function()
            {
                return format(player.Ain.Clickables_1[3][3]) + ' No.2'
            },
            canClick :  function()
            {
                return (player.Ain.Clickables_1[2][1].gte(player.Ain.Clickables_1[3][3]))&&(player.Ain.Auto_Clickable_1 == 0)
            },
            onClick :  function()
            {
                player.Ain.Clickables_1[2][1] = player.Ain.Clickables_1[2][1].sub(player.Ain.Clickables_1[3][3])
                player.Ain.Clickables_1[3][1] = player.Ain.Clickables_1[3][1].add(1)
            },
            onHold :  function()
            {
                player.Ain.Clickables_1[2][1] = player.Ain.Clickables_1[2][1].sub(player.Ain.Clickables_1[3][3])
                player.Ain.Clickables_1[3][1] = player.Ain.Clickables_1[3][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '225px'
                Style['height']           = '25px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_1[2][1].gte(player.Ain.Clickables_1[3][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        14:
        {
            title :  function()
            {
                return format(player.Ain.Clickables_1[4][3]) + ' No.3'
            },
            canClick :  function()
            {
                return (player.Ain.Clickables_1[3][1].gte(player.Ain.Clickables_1[4][3]))&&(player.Ain.Auto_Clickable_1 == 0)
            },
            onClick :  function()
            {
                player.Ain.Clickables_1[3][1] = player.Ain.Clickables_1[3][1].sub(player.Ain.Clickables_1[4][3])
                player.Ain.Clickables_1[4][1] = player.Ain.Clickables_1[4][1].add(1)
            },
            onHold :  function()
            {
                player.Ain.Clickables_1[3][1] = player.Ain.Clickables_1[3][1].sub(player.Ain.Clickables_1[4][3])
                player.Ain.Clickables_1[4][1] = player.Ain.Clickables_1[4][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '225px'
                Style['height']           = '25px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_1[3][1].gte(player.Ain.Clickables_1[4][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        15:
        {
            title :  function()
            {
                return format(player.Ain.Clickables_1[5][3]) + ' No.4'
            },
            canClick :  function()
            {
                return (player.Ain.Clickables_1[4][1].gte(player.Ain.Clickables_1[5][3]))&&(player.Ain.Auto_Clickable_1 == 0)
            },
            onClick :  function()
            {
                player.Ain.Clickables_1[4][1] = player.Ain.Clickables_1[4][1].sub(player.Ain.Clickables_1[5][3])
                player.Ain.Clickables_1[5][1] = player.Ain.Clickables_1[5][1].add(1)
            },
            onClick :  function()
            {
                player.Ain.Clickables_1[4][1] = player.Ain.Clickables_1[4][1].sub(player.Ain.Clickables_1[5][3])
                player.Ain.Clickables_1[5][1] = player.Ain.Clickables_1[5][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '225px'
                Style['height']           = '25px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_1[4][1].gte(player.Ain.Clickables_1[5][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        16:
        {
            title :  function()
            {
                return format(player.Ain.Clickables_1[6][3]) + ' No.5'
            },
            canClick :  function()
            {
                return (player.Ain.Clickables_1[5][1].gte(player.Ain.Clickables_1[6][3]))&&(player.Ain.Auto_Clickable_1 == 0)
            },
            onClick :  function()
            {
                player.Ain.Clickables_1[5][1] = player.Ain.Clickables_1[5][1].sub(player.Ain.Clickables_1[6][3])
                player.Ain.Clickables_1[6][1] = player.Ain.Clickables_1[6][1].add(1)
            },
            onHold :  function()
            {
                player.Ain.Clickables_1[5][1] = player.Ain.Clickables_1[5][1].sub(player.Ain.Clickables_1[6][3])
                player.Ain.Clickables_1[6][1] = player.Ain.Clickables_1[6][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '225px'
                Style['height']           = '25px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_1[5][1].gte(player.Ain.Clickables_1[6][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        17:
        {
            title :  function()
            {
                return format(player.Ain.Clickables_1[7][3]) + ' No.6'
            },
            canClick :  function()
            {
                return (player.Ain.Clickables_1[6][1].gte(player.Ain.Clickables_1[7][3]))&&(player.Ain.Auto_Clickable_1 == 0)
            },
            onClick :  function()
            {
                player.Ain.Clickables_1[6][1] = player.Ain.Clickables_1[6][1].sub(player.Ain.Clickables_1[7][3])
                player.Ain.Clickables_1[7][1] = player.Ain.Clickables_1[7][1].add(1)
            },
            onHold :  function()
            {
                player.Ain.Clickables_1[6][1] = player.Ain.Clickables_1[6][1].sub(player.Ain.Clickables_1[7][3])
                player.Ain.Clickables_1[7][1] = player.Ain.Clickables_1[7][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '225px'
                Style['height']           = '25px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_1[6][1].gte(player.Ain.Clickables_1[7][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        18:
        {
            title :  function()
            {
                return format(player.Ain.Clickables_1[8][3]) + ' No.7'
            },
            canClick :  function()
            {
                return (player.Ain.Clickables_1[7][1].gte(player.Ain.Clickables_1[8][3]))&&(player.Ain.Auto_Clickable_1 == 0)
            },
            onClick :  function()
            {
                player.Ain.Clickables_1[7][1] = player.Ain.Clickables_1[7][1].sub(player.Ain.Clickables_1[8][3])
                player.Ain.Clickables_1[8][1] = player.Ain.Clickables_1[8][1].add(1)
            },
            onHold :  function()
            {
                player.Ain.Clickables_1[7][1] = player.Ain.Clickables_1[7][1].sub(player.Ain.Clickables_1[8][3])
                player.Ain.Clickables_1[8][1] = player.Ain.Clickables_1[8][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '225px'
                Style['height']           = '25px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_1[7][1].gte(player.Ain.Clickables_1[8][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },

        21:
        {
            title :  function()
            {
                return 'Ain Obtain<br>Lv.' + formatWhole(player.Ain.Clickables_2[1][1]) + '<br>----------------'
            },
            display :  function()
            {
                Description = '<h3>Multiply Ain Gain</h3>'
                Effect      = '<h2>×' + format(player.Ain.Clickables_2[1][2]) + '</h2>'
                Price       = '<h2>' + format(player.Ain.Clickables_2[1][3]) + ' Ain</h2>'
                return Description + '<br>' + Effect + '<br><h2>----------------</h2><br>' + Price
            },
            canClick :  function()
            {
                return player.Ain.points.gte(player.Ain.Clickables_2[1][3])
            },
            onClick :  function()
            {
                player.Ain.points             = player.Ain.points.sub(player.Ain.Clickables_2[1][3])
                player.Ain.Clickables_2[1][1] = player.Ain.Clickables_2[1][1].add(1)
            },
            onHold :  function()
            {
                player.Ain.points             = player.Ain.points.sub(player.Ain.Clickables_2[1][3])
                player.Ain.Clickables_2[1][1] = player.Ain.Clickables_2[1][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '200px'
                Style['height']           = '200px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.points.gte(player.Ain.Clickables_2[1][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        22:
        {
            title :  function()
            {
                return 'Ain Guide<br>Lv.' + formatWhole(player.Ain.Clickables_2[2][1]) + '<br>----------------'
            },
            display :  function()
            {
                Description = '<h3>Power Ain Gain</h3>'
                Effect      = '<h2>^' + format(player.Ain.Clickables_2[2][2]) + '</h2>'
                Price       = '<h2>' + format(player.Ain.Clickables_2[2][3]) + ' Ain</h2>'
                return Description + '<br>' + Effect + '<br><h2>----------------</h2><br>' + Price
            },
            branches : [21],
            canClick :  function()
            {
                return player.Ain.points.gte(player.Ain.Clickables_2[2][3])
            },
            onClick :  function()
            {
                player.Ain.points             = player.Ain.points.sub(player.Ain.Clickables_2[2][3])
                player.Ain.Clickables_2[2][1] = player.Ain.Clickables_2[2][1].add(1)
            },
            onHold :  function()
            {
                player.Ain.points             = player.Ain.points.sub(player.Ain.Clickables_2[2][3])
                player.Ain.Clickables_2[2][1] = player.Ain.Clickables_2[2][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '200px'
                Style['height']           = '200px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.points.gte(player.Ain.Clickables_2[2][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        23:
        {
            title :  function()
            {
                return 'knowledge<br>Lv.' + formatWhole(player.Ain.Clickables_2[3][1]) + '<br>----------------'
            },
            display :  function()
            {
                Description = '<h3>Reduce Hierarchy Price</h3>'
                Effect      = '<h2>÷' + format(new Decimal(1).div(player.Ain.Clickables_2[3][2])) + '</h2>'
                Price       = '<h2>' + format(player.Ain.Clickables_2[3][3]) + ' Ain</h2>'
                if(player.Ain.Clickables_2[3][1].gte(new Decimal(400).add(player.Ain.Clickables_3[11][3]))) Price = '<h2>Can\'t get more yet</h2>'
                return Description + '<br>' + Effect + '<br><h2>----------------</h2><br>' + Price
            },
            branches : [21,22],
            canClick :  function()
            {
                return player.Ain.points.gte(player.Ain.Clickables_2[3][3])&&player.Ain.Clickables_2[3][1].lt(new Decimal(400).add(player.Ain.Clickables_3[11][3]))
            },
            onClick :  function()
            {
                player.Ain.points             = player.Ain.points.sub(player.Ain.Clickables_2[3][3])
                player.Ain.Clickables_2[3][1] = player.Ain.Clickables_2[3][1].add(1)
            },
            onHold :  function()
            {
                player.Ain.points             = player.Ain.points.sub(player.Ain.Clickables_2[3][3])
                player.Ain.Clickables_2[3][1] = player.Ain.Clickables_2[3][1].add(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '200px'
                Style['height']           = '200px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_2[3][1].gte(new Decimal(400).add(player.Ain.Clickables_3[11][3])))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = '#005000'
                }
                else if(player.Ain.points.gte(player.Ain.Clickables_2[3][3]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        24:
        {
            title :  function()
            {
                return 'Refactor<br>-----------'
            },
            display :  function()
            {
                return '<h3>Unlock new features</h3><br><h2>-----------<br>25,000,000 Ain'
            },
            branches : [21],
            canClick :  function()
            {
                return (player.Ain.points.gte(25000000)&&(player.Ain.Clickables_2[4][1].lt(1)))
            },
            onClick :  function()
            {
                player.Ain.points = player.Ain.points.sub(25000000)
                player.Ain.Clickables_2[4][1] = new Decimal(1)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_2[4][1].gte(1))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = '#005000'
                }
                else if(player.Ain.points.gte(25000000))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        25:
        {
            title :  function()
            {
                return 'Automation<br>-----------'
            },
            display :  function()
            {
                return '<h3>Automatically buy layers</h3><br><h2>-----------<br>1.00e10 Ain'
            },
            tooltip  :  function()
            {
                return 'It triggers 25 times per tick<br><br>You can\'t buy layers manually when it\'s on.'
            },
            branches : [22],
            canClick :  function()
            {
                return (player.Ain.points.gte(1e10)&&(player.Ain.Clickables_2[5][1].lt(1)))
            },
            onClick :  function()
            {
                player.Ain.points = player.Ain.points.sub(1e10)
                player.Ain.Clickables_2[5][1] = new Decimal(1)
                player.Ain.Auto_Clickable_1   = 1
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_2[5][1].gte(1))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = '#005000'
                }
                else if(player.Ain.points.gte(1e10))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        26:
        {
            title :  function()
            {
                return 'Research<br>-----------'
            },
            display :  function()
            {
                return '<h3>Unlock new features</h3><br><h2>-----------<br>1.00e10 Ain'
            },
            branches : [23],
            canClick :  function()
            {
                return (player.Ain.points.gte(1e10)&&(player.Ain.Clickables_2[6][1].lt(1)))
            },
            onClick :  function()
            {
                player.Ain.points             = player.Ain.points.sub(1e10)
                player.Ain.Clickables_2[6][1] = new Decimal(1)
                player.Ain.MiniTab3_Shown     = 1
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_2[6][1].gte(1))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = '#005000'
                }
                else if(player.Ain.points.gte(1e10))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },

        31:
        {
            title :  function()
            {
                return 'Ain Inject<br>-----------------------------'
            },
            display :  function()
            {
                var Description = '<h3>Enhance power but *SPEND ALL AIN*</h3>'
                var Power       = '<h2>+' + format(player.Ain.Deep_Research_Gain) + '</h2>'
                return Description + '<br>' + Power
            },
            tooltip :  function()
            {
                return 'You have injected ' + format(player.Ain.Deep_Research_Inject) + ' Ain'
            },
            canClick :  function()
            {
                return player.Ain.points.gte(0)
            },
            onClick :  function()
            {
                player.Ain.Deep_Research_Inject = player.Ain.Deep_Research_Inject.add(player.Ain.points)
                player.Ain.points               = new Decimal(0)
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '350px'
                Style['height']           = '100px'
                Style['background-color']     = 'black'
                Style['border']               = '2px solid white'
                Style['color']                = 'white'
                return Style
            }
        },

        32:
        {
            title : '<p style="font-family:Times New Roman; transform:scale(5,5) translate(0,1px)"> א ',
            canClick :  function()
            {
                return true
            },
            onClick : function()
            {
                player.Ain.Deep_Research_Category = 1
            },
            style :  function()
            {
                Style = {}
                Style['width']                = '200px'
                Style['height']               = '200px'
                Style['background-color']     = 'rgba(0,0,0,0)'
                Style['border']               = '2px solid white'
                Style['color']                = 'white'
                return Style
            }
        },

        41:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A1</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[1][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[1][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[1][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid white'
                if(player.Ain.Clickables_3[1][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                Style['color']            = 'white'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '100'
                return Style
            }
        },
        42:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A2</p>' 
            },
            canClick :  function()
            {
                return player.Ain.Clickables_3[1][2].gte(1)
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[2][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[2][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[2][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '99'
                if(player.Ain.Clickables_3[1][2].gte(1))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                }
                if(player.Ain.Clickables_3[2][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                    Style['z-index']          = '200'
                }
                return Style
            }
        },
        43:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A3</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[3][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[3][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[3][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '98'
                if(player.Ain.Clickables_3[3][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                if(player.Ain.Clickables_3[2][2].gt(0))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                }
                return Style
            }
        },
        44:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A4</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[4][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[4][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[4][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                if(player.Ain.Clickables_3[4][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '97'
                return Style
            }
        },
        45:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A5</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[5][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[5][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[5][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '0'
                if(player.Ain.Clickables_3[2][2].gt(0))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                }
                if(player.Ain.Clickables_3[5][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                    Style['z-index']          = '200'
                }
                return Style
            }
        },
        46:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A6</p>' 
            },
            canClick :  function()
            {
                if(player.Ain.Clickables_3[6][2].gte(player.Ain.Clickables_3[6][1]))
                {
                    return false
                }
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[6][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[6][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[6][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '50'
                if(player.Ain.Clickables_3[5][2].gt(0))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                }
                if(player.Ain.Clickables_3[6][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                    Style['z-index']      = '200'
                }
                if(player.Ain.Clickables_3[6][2].gte(player.Ain.Clickables_3[6][1]))
                {
                    Style['background-color'] = '#006600'
                }
                return Style
            }
        },
        47:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A7</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[7][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[7][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[7][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                if(player.Ain.Clickables_3[7][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                return Style
            }
        },
        48:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A8</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[8][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[8][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[8][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '99'
                if(player.Ain.Clickables_3[1][2].gte(1))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                }
                if(player.Ain.Clickables_3[8][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                    Style['z-index']      = '200'
                }
                return Style
            }
        },
        49:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A9</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[9][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[9][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[9][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                if(player.Ain.Clickables_3[9][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '98'
                return Style
            }
        },
        410:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A10</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[10][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[10][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[10][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                if(player.Ain.Clickables_3[10][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '97'
                return Style
            }
        },
        411:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A11</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[11][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[11][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[11][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '98'
                if(player.Ain.Clickables_3[8][2].gte(1))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                }
                if(player.Ain.Clickables_3[11][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                    Style['z-index']      = '200'
                }
                return Style
            }
        },
        412:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A12</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[12][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[12][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[12][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                if(player.Ain.Clickables_3[12][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '97'
                return Style
            }
        },
        413:
        {
            title :  function()
            {
                return '<p style="transform:rotate(-45deg) translate(-5px,5px) scale(1.5,1.5)">A13</p>' 
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[13][6])
                {
                    case 0:
                    {
                        for(var I=1; I<player.Ain.Clickables_3.length-1; I++)
                        {
                            player.Ain.Clickables_3[I][6] = 0
                        }
                        player.Ain.Clickables_3[13][6] = 1
                        player.Ain.Deep_Research_Researching = 1
                        break
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[13][6] = 0
                        player.Ain.Deep_Research_Researching = 0
                    }
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                if(player.Ain.Clickables_3[13][6] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                Style['color']            = '#666666'
                Style['transform-origin'] = 'center'
                Style['transform']        = 'rotate(45deg)'
                Style['z-index']          = '96'
                return Style
            }
        },

        61:
        {
            title : 'Layer Refactor<br>-------------------------',
            display :  function()
            {
                if(player.Ain.Clickables_3[6][2].lt(1))
                {
                    Description = '<h3>Get bonuses based on your hierarchy<br>*BUT RESETS THEM<br><br>AND CLEAR AINS*</h3>'
                    Replace     = '<h2>×' + format(player.Ain.Refactor[1]) + '</h2>'
                    Effect      = '<h2>Current: ×' + format(player.Ain.Refactor[2])
                    return  Description + '<br>' + Replace + '<br><h2>-------------------------</h2><br>' + Effect
                }
                else
                {
                    Description = '<h3>Get bonuses based on your hierarchy and the three<br>buyables in simple researches<br><br>*BUT RESETS THEM<br>AND CLEAR AINS*</h3>'
                    Replace     = '<h2>×' + format(player.Ain.Refactor[1]) + '</h2>'
                    Effect      = '<h2>Current: ×' + format(player.Ain.Refactor[2])
                    return  Description + '<br>' + Replace + '<br><h2>-------------------------</h2><br>' + Effect
                }
            },
            unlocked :  function()
            {
                return player.Ain.Clickables_2[4][1].gte(1)
            },
            canClick :  function()
            {
                return player.Ain.Refactor[1].gt(player.Ain.Refactor[2])
            },
            onClick :  function()
            {
                player.Ain.Refactor[2]  = player.Ain.Refactor[1]
                player.Ain.Clickables_1 =   [0,[0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                               [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                               [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                               [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                               [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                               [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                               [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                               [0, new Decimal(0),new Decimal(0),new Decimal(0)],
                                            ]
                player.Ain.points       = new Decimal(10)
                if(player.Ain.Clickables_3[6][2].gte(1))
                {
                    player.Ain.Clickables_2[1][1] = new Decimal(0)
                    player.Ain.Clickables_2[2][1] = new Decimal(0)
                    player.Ain.Clickables_2[3][1] = new Decimal(0)
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '300px'
                Style['height']           = '200px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Refactor[1].gte(player.Ain.Refactor[2]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },

        98:
        {
            title : '<h1>←</h1>',
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                player.Ain.Deep_Research_Category = 0
            },
            style :  function()
            {
                Style = {}
                Style['width']                = '50px'
                Style['height']               = '50px'
                Style['background-color']     = 'rgba(0,0,0,0)'
                Style['border']               = '0px solid #666666'
                Style['color']                = 'white'
                return Style
            }
        },
        
        99:
        {
            title :  function()
            {
                if(player.Ain.Auto_Clickable_1 == 0) return 'Off'
                if(player.Ain.Auto_Clickable_1 == 1) return 'On'
            },
            branches : [25],
            unlocked :  function()
            {
                return true
            },
            canClick :  function()
            {
                return player.Ain.Clickables_2[5][1].gte(1)
            },
            onClick :  function()
            {
                switch(player.Ain.Auto_Clickable_1)
                {
                    case 0: player.Ain.Auto_Clickable_1 = 1; break;
                    case 1: player.Ain.Auto_Clickable_1 = 0; break;
                }
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Clickables_2[5][1].gte(1))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                }
                return Style
            }
        },

        100:
        {
            title : 'PlaceHolder',
            style :  function()
            {
                Style = {}
                Style['width']                = '150px'
                Style['height']               = '150px'
                Style['background-color']     = 'black'
                Style['border']               = '2px solid #666666'
                Style['color']                = '#666666'
                Style['opacity']              = '0'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        }
    }
})

// ----------------------------------------------------------
//     11 → 12 → 13 → 14 → 15 → 16 → 17 → 18
//     61
// ----------------------------------------------------------
//     24--21--22--25--99
//       26--23--27
//         28--29
//
//     21   22   23   24   25   26   27
//                    ↓    ↓
//                    *61  99
// ----------------------------------------------------------