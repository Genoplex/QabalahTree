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
                            return '(+' + format(player.Ain.Ain_Gain.root(player.Ain.Clickables_2[2][2])) + '^' + format(player.Ain.Clickables_2[2][2]) + ' = +' + format(player.Ain.Ain_Gain) + ' Ain/s)'
                        }
                        return '(+' + format(player.Ain.Ain_Gain) + ' Ain/s)'
                    }
                ],
                'blank',
                ['microtabs','Tab1',{'border-color':'#0f0f0f'}],
            ]         
        },
    },

    microtabs:
    {
        Tab1:
        {
            'Ain Layers':
            {
                content: function()
                {
                    var Format = []
                    Format.push('blank')
                    Format.push('h-line','')
                    Format.push(['row',[['row',[['display-text','<h3>Ain Layer</h3>']],                                      {'width':'200px'}],
                                        ['row',[['display-text','<h3>Depth</h3>']],                                              {'width':'200px'}],
                                        ['row',[['display-text','<h3>Effect</h3>']],                                             {'width':'200px'}],
                                        ['row',[['display-text','<h3>Price</h3>']],                                              {'width':'300px'}]],
                                {'height':'50px','background-color':'#222222'}])
                    Format.push('h-line','')

                    for(var I=1; I<=8; I=I+2)
                    {
                        if(player.Ain.Clickables_3[4][1].lt(1))
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
                        if(player.Ain.Clickables_3[4][1].gte(1))
                        {
                            if(player.Ain.Clickables_1_Unlock[I])
                            Format.push(['row',[['row',[['display-text','<h3>Ain No.' + formatWhole(I) +'</h3>']],                         {'width':'200px'}],
                                                ['row',[['display-text','<h3>'  + formatWhole(player.Ain.Clickables_1[I][1])   + '</h3><br><h4>(+' + formatWhole(player.Ain.Clickables_1[I][1].mul(I).mul(I))       + '%)</h3>']],  {'width':'200px'}],
                                                ['row',[['display-text','<h3>+' + format(player.Ain.Clickables_1[I][2]) + '</h3>']],       {'width':'200px'}],
                                                ['row',[['clickable',10+I]],                                                               {'width':'300px'}]],
                                        {'height':'50px','background-color':'#333333'}])
                            if(player.Ain.Clickables_1_Unlock[I+1])
                            Format.push(['row',[['row',[['display-text','<h3>Ain No.' + formatWhole(I+1) + '</h3>']],                      {'width':'200px'}],
                                                ['row',[['display-text','<h3>'  + formatWhole(player.Ain.Clickables_1[I+1][1]) + '</h3><br><h4>(+' + formatWhole(player.Ain.Clickables_1[I+1][1].mul(I+1).mul(I+1)) + '%)</h3>']],{'width':'200px'}],
                                                ['row',[['display-text','<h3>+' + format(player.Ain.Clickables_1[I+1][2]) + '</h3>']],     {'width':'200px'}],
                                                ['row',[['clickable',11+I]],                                                               {'width':'300px'}]],
                                        {'height':'50px','background-color':'#222222'}])
                        }
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
                    ['row',[['row',,{'width':'68px'}],['clickable',24],['column',,{'width':'18px'}],['clickable',21],['column',,{'width':'18px'}],['clickable',22],['column',,{'width':'18px'}],['clickable',25],['column',,{'width':'18px'}],['clickable',99]],{}],
                    'blank',
                    ['row',[['clickable',26],['row',,{'width':'18px'}],['clickable',23],['row',,{'width':'18px'}],['clickable',27]],{}],
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

                    var Upgrades = [
                         0,
                        [0,   ['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100]],
                        [0,   ['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100]],
                        [0,   ['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',318],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100]],
                        [0,   ['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',317],['clickable',36], ['clickable',37], ['clickable',100],['clickable',100],['clickable',100],['clickable',100]],
                        [0,   ['clickable',100],['clickable',100],['clickable',100],['clickable',316],['clickable',100],['clickable',32], ['clickable',100],['clickable',38], ['clickable',100],['clickable',100],['clickable',100]],
                        [0,   ['clickable',100],['clickable',100],['clickable',321],['clickable',315],['clickable',35], ['clickable',31], ['clickable',33], ['clickable',39], ['clickable',319],['clickable',100],['clickable',100]],
                        [0,   ['clickable',100],['clickable',100],['clickable',100],['clickable',314],['clickable',100],['clickable',34], ['clickable',100],['clickable',310],['clickable',100],['clickable',100],['clickable',100]],
                        [0,   ['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',313],['clickable',312],['clickable',311],['clickable',100],['clickable',100],['clickable',100],['clickable',100]],
                        [0,   ['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',320],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100]],
                        [0,   ['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100]],
                        [0,   ['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100],['clickable',100]],
                    ]
                    var Row_1  = ['row',[Upgrades[1][1], ['column',,{'width':'18px'}],Upgrades[1][2], ['column',,{'width':'18px'}],Upgrades[1][3], ['column',,{'width':'18px'}],Upgrades[1][4], ['column',,{'width':'18px'}],Upgrades[1][5], ['column',,{'width':'18px'}],Upgrades[1][6], ['column',,{'width':'18px'}],Upgrades[1][7], ['column',,{'width':'18px'}],Upgrades[1][8], ['column',,{'width':'18px'}],Upgrades[1][9], ['column',,{'width':'18px'}],Upgrades[1][10], ['column',,{'width':'18px'}],Upgrades[1][11]]]
                    var Row_2  = ['row',[Upgrades[2][1], ['column',,{'width':'18px'}],Upgrades[2][2], ['column',,{'width':'18px'}],Upgrades[2][3], ['column',,{'width':'18px'}],Upgrades[2][4], ['column',,{'width':'18px'}],Upgrades[2][5], ['column',,{'width':'18px'}],Upgrades[2][6], ['column',,{'width':'18px'}],Upgrades[2][7], ['column',,{'width':'18px'}],Upgrades[2][8], ['column',,{'width':'18px'}],Upgrades[2][9], ['column',,{'width':'18px'}],Upgrades[2][10], ['column',,{'width':'18px'}],Upgrades[2][11]]]
                    var Row_3  = ['row',[Upgrades[3][1], ['column',,{'width':'18px'}],Upgrades[3][2], ['column',,{'width':'18px'}],Upgrades[3][3], ['column',,{'width':'18px'}],Upgrades[3][4], ['column',,{'width':'18px'}],Upgrades[3][5], ['column',,{'width':'18px'}],Upgrades[3][6], ['column',,{'width':'18px'}],Upgrades[3][7], ['column',,{'width':'18px'}],Upgrades[3][8], ['column',,{'width':'18px'}],Upgrades[3][9], ['column',,{'width':'18px'}],Upgrades[3][10], ['column',,{'width':'18px'}],Upgrades[3][11]]]
                    var Row_4  = ['row',[Upgrades[4][1], ['column',,{'width':'18px'}],Upgrades[4][2], ['column',,{'width':'18px'}],Upgrades[4][3], ['column',,{'width':'18px'}],Upgrades[4][4], ['column',,{'width':'18px'}],Upgrades[4][5], ['column',,{'width':'18px'}],Upgrades[4][6], ['column',,{'width':'18px'}],Upgrades[4][7], ['column',,{'width':'18px'}],Upgrades[4][8], ['column',,{'width':'18px'}],Upgrades[4][9], ['column',,{'width':'18px'}],Upgrades[4][10], ['column',,{'width':'18px'}],Upgrades[4][11]]]
                    var Row_5  = ['row',[Upgrades[5][1], ['column',,{'width':'18px'}],Upgrades[5][2], ['column',,{'width':'18px'}],Upgrades[5][3], ['column',,{'width':'18px'}],Upgrades[5][4], ['column',,{'width':'18px'}],Upgrades[5][5], ['column',,{'width':'18px'}],Upgrades[5][6], ['column',,{'width':'18px'}],Upgrades[5][7], ['column',,{'width':'18px'}],Upgrades[5][8], ['column',,{'width':'18px'}],Upgrades[5][9], ['column',,{'width':'18px'}],Upgrades[5][10], ['column',,{'width':'18px'}],Upgrades[5][11]]]
                    var Row_6  = ['row',[Upgrades[6][1], ['column',,{'width':'18px'}],Upgrades[6][2], ['column',,{'width':'18px'}],Upgrades[6][3], ['column',,{'width':'18px'}],Upgrades[6][4], ['column',,{'width':'18px'}],Upgrades[6][5], ['column',,{'width':'18px'}],Upgrades[6][6], ['column',,{'width':'18px'}],Upgrades[6][7], ['column',,{'width':'18px'}],Upgrades[6][8], ['column',,{'width':'18px'}],Upgrades[6][9], ['column',,{'width':'18px'}],Upgrades[6][10], ['column',,{'width':'18px'}],Upgrades[6][11]]]
                    var Row_7  = ['row',[Upgrades[7][1], ['column',,{'width':'18px'}],Upgrades[7][2], ['column',,{'width':'18px'}],Upgrades[7][3], ['column',,{'width':'18px'}],Upgrades[7][4], ['column',,{'width':'18px'}],Upgrades[7][5], ['column',,{'width':'18px'}],Upgrades[7][6], ['column',,{'width':'18px'}],Upgrades[7][7], ['column',,{'width':'18px'}],Upgrades[7][8], ['column',,{'width':'18px'}],Upgrades[7][9], ['column',,{'width':'18px'}],Upgrades[7][10], ['column',,{'width':'18px'}],Upgrades[7][11]]]
                    var Row_8  = ['row',[Upgrades[8][1], ['column',,{'width':'18px'}],Upgrades[8][2], ['column',,{'width':'18px'}],Upgrades[8][3], ['column',,{'width':'18px'}],Upgrades[8][4], ['column',,{'width':'18px'}],Upgrades[8][5], ['column',,{'width':'18px'}],Upgrades[8][6], ['column',,{'width':'18px'}],Upgrades[8][7], ['column',,{'width':'18px'}],Upgrades[8][8], ['column',,{'width':'18px'}],Upgrades[8][9], ['column',,{'width':'18px'}],Upgrades[8][10], ['column',,{'width':'18px'}],Upgrades[8][11]]]
                    var Row_9  = ['row',[Upgrades[9][1], ['column',,{'width':'18px'}],Upgrades[9][2], ['column',,{'width':'18px'}],Upgrades[9][3], ['column',,{'width':'18px'}],Upgrades[9][4], ['column',,{'width':'18px'}],Upgrades[9][5], ['column',,{'width':'18px'}],Upgrades[9][6], ['column',,{'width':'18px'}],Upgrades[9][7], ['column',,{'width':'18px'}],Upgrades[9][8], ['column',,{'width':'18px'}],Upgrades[9][9], ['column',,{'width':'18px'}],Upgrades[9][10], ['column',,{'width':'18px'}],Upgrades[9][11]]]
                    var Row_10 = ['row',[Upgrades[10][1],['column',,{'width':'18px'}],Upgrades[10][2],['column',,{'width':'18px'}],Upgrades[10][3],['column',,{'width':'18px'}],Upgrades[10][4],['column',,{'width':'18px'}],Upgrades[10][5],['column',,{'width':'18px'}],Upgrades[10][6],['column',,{'width':'18px'}],Upgrades[10][7],['column',,{'width':'18px'}],Upgrades[10][8],['column',,{'width':'18px'}],Upgrades[10][9],['column',,{'width':'18px'}],Upgrades[10][10],['column',,{'width':'18px'}],Upgrades[10][11]]]                   
                    var Row_11 = ['row',[Upgrades[11][1],['column',,{'width':'18px'}],Upgrades[11][2],['column',,{'width':'18px'}],Upgrades[11][3],['column',,{'width':'18px'}],Upgrades[11][4],['column',,{'width':'18px'}],Upgrades[11][5],['column',,{'width':'18px'}],Upgrades[11][6],['column',,{'width':'18px'}],Upgrades[11][7],['column',,{'width':'18px'}],Upgrades[11][8],['column',,{'width':'18px'}],Upgrades[11][9],['column',,{'width':'18px'}],Upgrades[11][10],['column',,{'width':'18px'}],Upgrades[11][11]]]

                    if(player.Ain.MiniTab3_Shrink == 0)
                    Format.push(['row',[
                                       ['column',[
                                                 ['row',[Upgrades[player.Ain.MiniTab3_Row[1]-1][player.Ain.MiniTab3_Column[1]-1], ['column',,{'width':'18px'}], Upgrades[player.Ain.MiniTab3_Row[1]-1][player.Ain.MiniTab3_Column[1]], ['column',,{'width':'18px'}], Upgrades[player.Ain.MiniTab3_Row[1]-1][player.Ain.MiniTab3_Column[1]+1]]],
                                                 'blank',
                                                 ['row',[Upgrades[player.Ain.MiniTab3_Row[1]][player.Ain.MiniTab3_Column[1]-1],   ['column',,{'width':'18px'}], Upgrades[player.Ain.MiniTab3_Row[1]][player.Ain.MiniTab3_Column[1]],   ['column',,{'width':'18px'}], Upgrades[player.Ain.MiniTab3_Row[1]][player.Ain.MiniTab3_Column[1]+1]]],
                                                 'blank',
                                                 ['row',[Upgrades[player.Ain.MiniTab3_Row[1]+1][player.Ain.MiniTab3_Column[1]-1], ['column',,{'width':'18px'}], Upgrades[player.Ain.MiniTab3_Row[1]+1][player.Ain.MiniTab3_Column[1]], ['column',,{'width':'18px'}], Upgrades[player.Ain.MiniTab3_Row[1]+1][player.Ain.MiniTab3_Column[1]+1]]]],
                                       {'width':'580px','height':'580px','border':'3px solid white'}],
                                       ['column',,{'width':'20px'}],
                                       ['column',[
                                                 ['display-text','<h3>Research Slot<br>' + formatWhole(player.Ain.Deep_Research_Number[1]) + ' / ' + formatWhole(player.Ain.Deep_Research_Number[2])],
                                                 'blank',
                                                 ['clickable',92],
                                                 'blank',
                                                 ['row',[
                                                        ['clickable',95,],
                                                        ['column',,{'width':'18px'}],
                                                        ['clickable',91],
                                                        ['column',,{'width':'18px'}],
                                                        ['clickable',93]]],
                                                 'blank',
                                                 ['clickable',94],
                                                 'blank',
                                                 ['row',[
                                                        ['clickable',96],
                                                        ['column',,{'width':'18px'}],
                                                        ['clickable',97]]],
                                                 'blank',
                                                 'blank',
                                                 'blank',
                                                 ['display-text','<h3>Mention: Place the mouse over the researches to see the description</h3>']],
                                       {'width':'250px','height':'550px'}]],{'width':'900px'}])
                               
                    if(player.Ain.MiniTab3_Shrink == 1)
                    Format.push(['row',[
                                       ['column',[Row_1,'blank',Row_2,'blank',Row_3,'blank',Row_4,'blank',Row_5,'blank',Row_6,'blank',Row_7,'blank',Row_8,'blank',Row_9,'blank',Row_10,'blank',Row_11],
                                       {'width':'580px','height':'580px','border':'3px solid white'}],
                                       ['column',,{'width':'20px'}],
                                       ['column',[
                                                 ['display-text','<h3>Research Slot<br>' + formatWhole(player.Ain.Deep_Research_Number[1]) + ' / ' + formatWhole(player.Ain.Deep_Research_Number[2])],
                                                 'blank',
                                                 ['clickable',92],
                                                 'blank',
                                                 ['row',[
                                                        ['clickable',95,],
                                                        ['column',,{'width':'18px'}],
                                                        ['clickable',91],
                                                        ['column',,{'width':'18px'}],
                                                        ['clickable',93]]],
                                                 'blank',
                                                 ['clickable',94],
                                                 'blank',
                                                 ['row',[
                                                        ['clickable',96],
                                                        ['column',,{'width':'18px'}],
                                                        ['clickable',97]]],
                                                 'blank',
                                                 'blank',
                                                 'blank',
                                                 ['display-text','<h3>Mention: Place the mouse over the researches to see the description</h3>']],
                                       {'width':'250px','height':'550px'}]],{'width':'900px'}])

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

        Ain_Gain                    : new Decimal(0),

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

        // 1.Level, 2.Effect, 3.Price, 4.Progress, 5.IsResearching
        Clickables_3                :[0,[0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                        [0, new Decimal(0),new Decimal(0),new Decimal(0),new Decimal(0),0],
                                    ],
        
        // 1.New, 2.Old
        Refactor                    :[0,new Decimal(1),new Decimal(1)],

        MiniTab3_Shown              : 0,
        MiniTab3_Shrink             : 0,
        MiniTab3_Row                : [0,6,2,10],    //1.Shown, 2.Up,   3.Bottom
        MiniTab3_Column             : [0,6,2,10],    //1.Shown, 2.Left, 3.Right
        Deep_Research_Inject        : new Decimal(0),
        Deep_Research_Power         : new Decimal(0),
        Deep_Research_Number        : [0,0,1],      //1.Researching, 2.Ceil
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
        // Ain 层级显示
        for(var I=2; I<=8; I++)
        {
            if(player.Ain.Clickables_1[I-1][1].gte(1))
            player.Ain.Clickables_1_Unlock[I] = 1
        }

        // Research 购买项
        player.Ain.Clickables_3[2][2]  = new Decimal(player.Ain.Clickables_3[2][1].mul(0.125)).add(1)
        player.Ain.Clickables_3[2][3]  = new Decimal(100  ).mul(new Decimal(1.5  ).pow(player.Ain.Clickables_3[2][1].add(1)))
        player.Ain.Clickables_3[3][2]  = new Decimal(0.1  ).mul(player.Ain.Clickables_3[3][1]).add(1)
        player.Ain.Clickables_3[3][3]  = new Decimal(100  ).mul(new Decimal(2.5  ).pow(player.Ain.Clickables_3[3][1].add(1)))
        player.Ain.Clickables_3[4][3]  = new Decimal(50000)
        player.Ain.Clickables_3[5][2]  = player.Ain.Clickables_3[5][1].add(1).mul(2).log(Math.E).add(1).sub(0.69314)
        player.Ain.Clickables_3[5][3]  = new Decimal(1.25 ).pow(player.Ain.Clickables_3[5][1].add(1)).mul(100)
        player.Ain.Clickables_3[6][2]  = player.Ain.Clickables_3[6][1].add(8).mul(5).log(Math.E).add(1).sub(3.68887)
        player.Ain.Clickables_3[6][3]  = new Decimal(50000).mul(new Decimal(5    ).pow(player.Ain.Clickables_3[6][1]))
        player.Ain.Clickables_3[15][3] = new Decimal(10000).mul(new Decimal(1000 ).pow(player.Ain.Clickables_3[15][1]))
        
        // Refactor 购买项
        player.Ain.Refactor[1] = new Decimal(1)
        var Levels             = new Decimal(0)
        for (var I=1; I<=8; I++)
        {
            Levels = Levels.add(player.Ain.Clickables_1[I][1].mul(new Decimal(I).pow(3)))
        }
        player.Ain.Refactor[1] = new Decimal(1).add(Levels.mul(0.01))
        player.Ain.Refactor[1] = player.Ain.Refactor[1].mul(player.Ain.Clickables_3[3][2])
        

        // Ain 研究购买项
        player.Ain.Clickables_2[1][2] = player.Ain.Clickables_2[1][1].add(2.5).log(1.5).sub(2.2598).add(1)
        player.Ain.Clickables_2[1][3] = new Decimal(Math.E).pow(player.Ain.Clickables_2[1][1].pow(1.25)).mul(5000)
        player.Ain.Clickables_2[2][2] = new Decimal(2     ).sub(new Decimal(1).div(new Decimal(1.1).pow(player.Ain.Clickables_2[2][1])))
        player.Ain.Clickables_2[2][3] = new Decimal(Math.E).pow(player.Ain.Clickables_2[2][1].pow(1.75)).mul(2500)
        player.Ain.Clickables_2[3][2] = new Decimal(0.25  ).add(new Decimal(0.75).div(new Decimal(1.025).pow(player.Ain.Clickables_2[3][1]))).div(player.Ain.Clickables_3[6][2])
        player.Ain.Clickables_2[3][3] = player.Ain.Clickables_2[3][1].add(1).pow(1.25).div(4).mul(4000)

        // Ain 本体层级
        for(var I=1; I<=8; I++)
        {
            // Ain 效果
            player.Ain.Clickables_1[I][2] = player.Ain.Clickables_1[I][1].mul(new Decimal(I).pow(4))
            player.Ain.Clickables_1[I][2] = player.Ain.Clickables_1[I][2].mul(player.Ain.Clickables_2[1][2])
            player.Ain.Clickables_1[I][2] = player.Ain.Clickables_1[I][2].mul(player.Ain.Clickables_3[2][2])
            player.Ain.Clickables_1[I][2] = player.Ain.Clickables_1[I][2].mul(player.Ain.Refactor[2])
            if(player.Ain.Clickables_3[4][1].gte(1)) player.Ain.Clickables_1[I][2] = player.Ain.Clickables_1[I][2].mul(player.Ain.Clickables_1[I][1].mul(I).mul(I).mul(0.01).add(1))

            // Ain 价格
            player.Ain.Clickables_1[I][3] = new Decimal(Math.E).pow(new Decimal(0.25).mul(player.Ain.Clickables_1[I][1])).mul(10)  .mul(player.Ain.Clickables_2[3][2]).ceil()
            if(player.Ain.Clickables_1[I][1].lt(0))  player.Ain.Clickables_1[I][1] = new Decimal(0)
        }
    
        // 自动购买
        if(player.Ain.Auto_Clickable_1)
        {
            for(var I=1; I<=8; I++)
            {
                if(I==1)
                {
                    while(player.Ain.points.gte(player.Ain.Clickables_1[1][3]))
                    {
                        if(player.Ain.Clickables_2[7][1].lt(1)) player.Ain.points = player.Ain.points.sub(player.Ain.Clickables_1[1][3])
                        player.Ain.Clickables_1[1][1]                             = player.Ain.Clickables_1[1][1].add(1)
                        player.Ain.Clickables_1[I][3]                             = new Decimal(1.1).pow(player.Ain.Clickables_1[I][1]).mul(10).ceil()
                    }
                }
                if(I>1)
                {
                    while(player.Ain.Clickables_1[I-1][1].gte(player.Ain.Clickables_1[I][3]))
                    {
                        player.Ain.Clickables_1[I-1][1] = player.Ain.Clickables_1[I-1][1].sub(player.Ain.Clickables_1[I][3])
                        player.Ain.Clickables_1[I][1]   = player.Ain.Clickables_1[I][1].add(1)
                        player.Ain.Clickables_1[I][3]   = new Decimal(1.1).pow(player.Ain.Clickables_1[I][1]).mul(10).ceil()
                    }
                }
            }
        }

        // Ain 获得
        player.Ain.Ain_Gain = new Decimal(0)
        for(var I=1; I<=8; I++)
        {
            player.Ain.Ain_Gain = player.Ain.Ain_Gain.add(player.Ain.Clickables_1[I][2])
        }
        player.Ain.Ain_Gain = player.Ain.Ain_Gain.pow(player.Ain.Clickables_2[2][2])
        //player.Ain.Ain_Gain = new Decimal(0)
        player.Ain.points   = player.Ain.points.add((player.Ain.Ain_Gain).mul(diff))

        // 计算研究强度
        player.Ain.Deep_Research_Power = player.Ain.Deep_Research_Inject.add(1).log(2).mul(player.Ain.Clickables_3[5][2])
        
        // 计算研究槽位
        player.Ain.Deep_Research_Number[2] = new Decimal(1)
        player.Ain.Deep_Research_Number[2] = player.Ain.Deep_Research_Number[2].add(player.Ain.Clickables_3[15][1])

        // 计算研究
        for(var I=1; I<=21; I++)
        {
            if(player.Ain.Clickables_3[I][5] == 1)
            {
                player.Ain.Clickables_3[I][4] = player.Ain.Clickables_3[I][4].add(player.Ain.Deep_Research_Power.mul(diff))
                if(player.Ain.Clickables_3[I][4].gte(player.Ain.Clickables_3[I][3]))
                {
                    player.Ain.Clickables_3[I][1] = player.Ain.Clickables_3[I][1].add(1)
                    player.Ain.Clickables_3[I][4] = new Decimal(0)
                }

                if(player.Ain.Clickables_3[4][1].gte(1)&&player.Ain.Clickables_3[4][5] == 1)
                {
                    player.Ain.Clickables_3[4][5] = 0
                    player.Ain.Clickables_3[4][4] = new Decimal(0)
                    player.Ain.Deep_Research_Number[1] -= 1
                }
            }
        }
    },

    doReset :  function(Resetting_Layer)
    {
        
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
                Description = '<h3>Power Total Ain Gain</h3>'
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
                Description = '<h3>Reduce Layer Price</h3>'
                Effect      = '<h2>÷' + format(new Decimal(1).div(player.Ain.Clickables_2[3][2])) + '</h2>'
                Price       = '<h2>' + format(player.Ain.Clickables_2[3][3]) + ' Ain</h2>'
                if(player.Ain.Clickables_2[3][1].gte(320)) Price = '<h2>Can\'t get more</h2>'
                return Description + '<br>' + Effect + '<br><h2>----------------</h2><br>' + Price
            },
            branches : [21,22],
            canClick :  function()
            {
                return player.Ain.points.gte(player.Ain.Clickables_2[3][3])&&player.Ain.Clickables_2[3][1].lt(320)
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
                if(player.Ain.Clickables_2[3][1].gte(320))
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
                return '<h3>Unlock new features</h3><br><h2>-----------<br>5,000,000 Ain'
            },
            branches : [21],
            canClick :  function()
            {
                return (player.Ain.points.gte(5000000)&&(player.Ain.Clickables_2[4][1].lt(1)))
            },
            onClick :  function()
            {
                player.Ain.points = player.Ain.points.sub(5000000)
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
                else if(player.Ain.points.gte(5000000))
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
                return '<h3>Automatically buy layers</h3><br><h2>-----------<br>5.00e9 Ain'
            },
            tooltip  :  function()
            {
                return 'It Buys as many as it can!<br><br>You can\'t buy layers manually when it\'s on.'
            },
            branches : [22],
            canClick :  function()
            {
                return (player.Ain.points.gte(5e9)&&(player.Ain.Clickables_2[5][1].lt(1)))
            },
            onClick :  function()
            {
                player.Ain.points = player.Ain.points.sub(5e9)
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
                else if(player.Ain.points.gte(5e9))
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
                return '<h3>Unlock new features</h3><br><h2>-----------<br>5.00e9 Ain'
            },
            branches : [24,23],
            canClick :  function()
            {
                return (player.Ain.points.gte(5e9)&&(player.Ain.Clickables_2[6][1].lt(1)))
            },
            onClick :  function()
            {
                player.Ain.points             = player.Ain.points.sub(5e9)
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
                else if(player.Ain.points.gte(5e9))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },
        27:
        {
            title :  function()
            {
                return ''
            },
            display :  function()
            {
                return ''
            },
            branches : [25,23],
            canClick :  function()
            {
                return false
            },
            onClick :  function()
            {

            },
            style :  function()
            {
                Style = {}
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                return Style
            }
        },

        31:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return 'Research Power<br>-----------'
            },
            display :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                var Power = '<h2>+' + format(player.Ain.Deep_Research_Power) + '</h2>'
                return Power
            },
            tooltip :  function()
            {
                return 'Transform Ain into Research Power(RP)<br>*SPEND ALL AIN*<br><br>' + 'You have injected ' + format(player.Ain.Deep_Research_Inject) + ' Ain'
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
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['background-color']     = 'black'
                Style['border']               = '2px solid white'
                Style['color']                = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        32:
        {
            title : function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return 'Spring up<br>Lv ' + formatWhole(player.Ain.Clickables_3[2][1]) + '<br>-----------'
            },
            display :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                Price = '<h2>' + format(player.Ain.Clickables_3[2][4].div(player.Ain.Clickables_3[2][3]).mul(100)) + '%</h2>'
                return Price
            },
            tooltip :  function()
            {
                return 'Multiply Ain Gain From Layer<br>×' + format(player.Ain.Clickables_3[2][2]) + '<br><br>Process:<br>' + format(player.Ain.Clickables_3[2][4]) + ' RP<br>' + format(player.Ain.Clickables_3[2][3]) + ' RP'
            },
            canClick :  function()
            {
                if(player.Ain.Clickables_3[2][5] == 0) return player.Ain.Deep_Research_Number[1] <  player.Ain.Deep_Research_Number[2]
                if(player.Ain.Clickables_3[2][5] == 1) return player.Ain.Deep_Research_Number[1] <= player.Ain.Deep_Research_Number[2]
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[2][5])
                {
                    case 0:
                    {
                        player.Ain.Clickables_3[2][5]      = 1
                        player.Ain.Deep_Research_Number[1] += 1
                        break;
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[2][5]      = 0
                        player.Ain.Deep_Research_Number[1] -= 1

                        break;
                    }
                }
            },
            branches : [31],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[2][4].div(player.Ain.Clickables_3[2][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[2][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']        = '30px'
                    Style['height']       = '30px'
                }
                if(player.Ain.Clickables_3[2][5] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                return Style
            }
        },
        33:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return 'Refactor EX<br>Lv ' + formatWhole(player.Ain.Clickables_3[3][1]) + '<br>-----------'
            },
            display :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                Price = '<h2>' + format(player.Ain.Clickables_3[3][4].div(player.Ain.Clickables_3[3][3]).mul(100)) + '%</h2>'
                return Price
            },
            tooltip :  function()
            {
                return 'Multiply [Refactor] Effect<br>×' + format(player.Ain.Clickables_3[3][2]) +'<br><br>Process:<br>' + format(player.Ain.Clickables_3[3][4]) + ' RP<br>' + format(player.Ain.Clickables_3[3][3]) + ' RP'
            },
            canClick :  function()
            {
                if(player.Ain.Clickables_3[3][5] == 0) return player.Ain.Deep_Research_Number[1] <  player.Ain.Deep_Research_Number[2]
                if(player.Ain.Clickables_3[3][5] == 1) return player.Ain.Deep_Research_Number[1] <= player.Ain.Deep_Research_Number[2]
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[3][5])
                {
                    case 0:
                    {
                        player.Ain.Clickables_3[3][5]      = 1
                        player.Ain.Deep_Research_Number[1] += 1
                        break;
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[3][5]      = 0
                        player.Ain.Deep_Research_Number[1] -= 1

                        break;
                    }
                }
            },
            branches : [31],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[3][4].div(player.Ain.Clickables_3[3][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[3][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                if(player.Ain.Clickables_3[3][5] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                return Style
            }
        },
        34:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return 'Deep Mining<br>-----------'
            },
            display :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                var Price = '<h2>' + format(player.Ain.Clickables_3[4][4].div(player.Ain.Clickables_3[4][3]).mul(100)) + '%</h2>'
                if(player.Ain.Clickables_3[4][1].gte(1)) Price = '<h3>Research Done<br>(100%)'
                return Price
            },
            tooltip :  function()
            {
                if(player.Ain.Clickables_3[4][1].gte(1)) return 'Layer\'s Depth Increase Ain Gain'
                return 'Layer\'s Depth Increase Ain Gain<br><br>Process:<br>' + format(player.Ain.Clickables_3[4][4]) + ' RP<br>' + format(player.Ain.Clickables_3[4][3]) + ' RP'
            },
            canClick :  function()
            {
                if(player.Ain.Clickables_3[4][1].gte(1)) return false
                if(player.Ain.Clickables_3[4][5] == 0)   return player.Ain.Deep_Research_Number[1] <  player.Ain.Deep_Research_Number[2]
                if(player.Ain.Clickables_3[4][5] == 1)   return player.Ain.Deep_Research_Number[1] <= player.Ain.Deep_Research_Number[2]
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[4][5])
                {
                    case 0:
                    {
                        player.Ain.Clickables_3[4][5]      = 1
                        player.Ain.Deep_Research_Number[1] += 1
                        break;
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[4][5]      = 0
                        player.Ain.Deep_Research_Number[1] -= 1

                        break;
                    }
                }
            },
            branches : [31],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[4][4].div(player.Ain.Clickables_3[4][3]).mul(100)
                Style = {}
                if(player.Ain.Clickables_3[4][1].lt(1))
                {
                    Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                }
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                if(player.Ain.Clickables_3[4][1].gte(1))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = '#005000'
                }
                if(player.Ain.Clickables_3[4][5] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                return Style
            }
        },
        35:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return 'Study<br>Lv ' + formatWhole(player.Ain.Clickables_3[5][1]) + '<br>-----------'
            },
            display :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                Price = '<h2>' + format(player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)) + '%</h2>'
                return Price
            },
            tooltip:  function()
            {
                return 'Multiply Research Power(RP)<br>×' + format(player.Ain.Clickables_3[5][2]) + '<br><br>Process:<br>' + format(player.Ain.Clickables_3[5][4]) + ' RP<br>' + format(player.Ain.Clickables_3[5][3]) + ' RP'
            },
            canClick :  function()
            {
                if(player.Ain.Clickables_3[5][5] == 0) return player.Ain.Deep_Research_Number[1] <  player.Ain.Deep_Research_Number[2]
                if(player.Ain.Clickables_3[5][5] == 1) return player.Ain.Deep_Research_Number[1] <= player.Ain.Deep_Research_Number[2]
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[5][5])
                {
                    case 0:
                    {
                        player.Ain.Clickables_3[5][5]      = 1
                        player.Ain.Deep_Research_Number[1] += 1
                        break;
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[5][5]      = 0
                        player.Ain.Deep_Research_Number[1] -= 1

                        break;
                    }
                }
            },
            branches : [31],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                if(player.Ain.Clickables_3[5][5] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                return Style
            }
        },
        36:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return 'Research Note<br>Lv' + formatWhole(player.Ain.Clickables_3[6][1]) + '<br>-----------'
            },
            display :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                Price = '<h2>' + format(player.Ain.Clickables_3[6][4].div(player.Ain.Clickables_3[6][3]).mul(100)) + '%</h2>'
                return Price
            },
            tooltip :  function()
            {
                return 'Increase The Limit Of [Knowledge]<br>×' + format(player.Ain.Clickables_3[6][2]) + '<br><br>Process:<br>' + format(player.Ain.Clickables_3[6][4]) + ' RP<br>' + format(player.Ain.Clickables_3[6][3]) + ' RP'
            },
            canClick :  function()
            {
                if(player.Ain.Clickables_3[2][1].lte(0)) return false
                if(player.Ain.Clickables_3[6][5] == 0) return player.Ain.Deep_Research_Number[1] <  player.Ain.Deep_Research_Number[2]
                if(player.Ain.Clickables_3[6][5] == 1) return player.Ain.Deep_Research_Number[1] <= player.Ain.Deep_Research_Number[2]
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[6][5])
                {
                    case 0:
                    {
                        player.Ain.Clickables_3[6][5]      = 1
                        player.Ain.Deep_Research_Number[1] += 1
                        break;
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[6][5]      = 0
                        player.Ain.Deep_Research_Number[1] -= 1

                        break;
                    }
                }
            },
            branches : function()
            {
                if(player.Ain.Clickables_3[2][1].gte(1)) return [32]
            },
            style :  function()
            {
                Percent = player.Ain.Clickables_3[6][4].div(player.Ain.Clickables_3[6][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[6][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                if(player.Ain.Clickables_3[6][5] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                if(player.Ain.Clickables_3[2][1].lte(0))
                {
                    Style['opacity']      = '0'
                }
                return Style
            }
        },
        37:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [36],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        38:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [39],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        39:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [33],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        310:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [39],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        311:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [312],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        312:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [34],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        313:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [312],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[13][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        314:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [315],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        315:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return 'Slot Expand<br>Lv ' + formatWhole(player.Ain.Clickables_3[15][1]) + '<br>-----------'
            },
            display :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                Price = '<h2>' + format(player.Ain.Clickables_3[15][4].div(player.Ain.Clickables_3[15][3]).mul(100)) + '%</h2>'
                return Price
            },
            tooltip :  function()
            {
                return 'Get More<br>Research Slot<br>+' + formatWhole(player.Ain.Clickables_3[15][2]) + '<br><br>Process:<br>' + format(player.Ain.Clickables_3[15][4]) + ' RP<br>' + format(player.Ain.Clickables_3[15][3]) + ' RP'
            },
            canClick :  function()
            {
                if(player.Ain.Clickables_3[5][1].lte(0)) return false
                if(player.Ain.Clickables_3[15][5] == 0) return player.Ain.Deep_Research_Number[1] <  player.Ain.Deep_Research_Number[2]
                if(player.Ain.Clickables_3[15][5] == 1) return player.Ain.Deep_Research_Number[1] <= player.Ain.Deep_Research_Number[2]
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[15][5])
                {
                    case 0:
                    {
                        player.Ain.Clickables_3[15][5]      = 1
                        player.Ain.Deep_Research_Number[1] += 1
                        break;
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[15][5]      = 0
                        player.Ain.Deep_Research_Number[1] -= 1

                        break;
                    }
                }
            },
            branches : function()
            {
                if(player.Ain.Clickables_3[5][1].gte(1)) return [35]
            },
            style :  function()
            {
                Percent = player.Ain.Clickables_3[15][4].div(player.Ain.Clickables_3[15][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                if(player.Ain.Clickables_3[15][5] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                if(player.Ain.Clickables_3[5][1].lte(0))
                {
                    Style['opacity']      = '0'
                }
                return Style
            }
        },
        316:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [315],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        317:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [36],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        318:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return 'Memory<br>Lv ' + formatWhole(player.Ain.Clickables_3[18][1]) + '<br>-----------'
            },
            display :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                Description = '<h3>Ain Layer no longer consumes</h3>'
                Price = '<h3>' + format(player.Ain.Clickables_3[18][3]) + '<br>(' + format(player.Ain.Clickables_3[18][4].div(player.Ain.Clickables_3[18][3]).mul(100)) + '%)'
                return Description + '<br><h2>-----------</h2><br>' + Price
            },
            tooltip :  function()
            {
                if(player.Ain.Clickables_3[18][1].eq(0)) return 'Effect: None'
                if(player.Ain.Clickables_3[18][1].eq(1)) return 'Effect: Ain Layer No.1 won\'t consume'
                if(player.Ain.Clickables_3[18][1].eq(2)) return 'Effect: Ain Layer No.1,2 won\'t consume'
                if(player.Ain.Clickables_3[18][1].gt(2)) return 'Effect: Ain Layer No.1~' + formatWhole(player.Ain.Clickables_3[18][1]) + ' won\'t consume'
            },
            canClick :  function()
            {
                if(player.Ain.Clickables_3[6][1].lte(0)) return false
                if(player.Ain.Clickables_3[18][1].gte(8)) return false
                if(player.Ain.Clickables_3[18][5] == 0) return player.Ain.Deep_Research_Number[1] <  player.Ain.Deep_Research_Number[2]
                if(player.Ain.Clickables_3[18][5] == 1) return player.Ain.Deep_Research_Number[1] <= player.Ain.Deep_Research_Number[2]
            },
            onClick :  function()
            {
                switch(player.Ain.Clickables_3[18][5])
                {
                    case 0:
                    {
                        player.Ain.Clickables_3[18][5]      = 1
                        player.Ain.Deep_Research_Number[1] += 1
                        break;
                    }
                    case 1:
                    {
                        player.Ain.Clickables_3[18][5]      = 0
                        player.Ain.Deep_Research_Number[1] -= 1

                        break;
                    }
                }
            },
            branches : function()
            {
                if(player.Ain.Clickables_3[6][1].gte(1)) return [36]
            },
            style :  function()
            {
                Percent = player.Ain.Clickables_3[18][4].div(player.Ain.Clickables_3[18][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                Style['width']            = '150px'
                Style['height']           = '150px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                if(player.Ain.Clickables_3[18][5] == 1)
                {
                    Style['border']       = '2px solid yellow'
                }
                if(player.Ain.Clickables_3[6][1].lte(0))
                {
                    Style['opacity']      = '0'
                }
                return Style
            }
        },
        319:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [39],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        320:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [312],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },
        321:
        {
            title :  function()
            {
                if(player.Ain.MiniTab3_Shrink == 1) return ''
                return ''
            },
            branches : [315],
            style :  function()
            {
                Percent = player.Ain.Clickables_3[5][4].div(player.Ain.Clickables_3[5][3]).mul(100)
                Style = {}
                Style['background']       = 'linear-gradient(to bottom, #444444 ' + Percent + '%, #000000 ' + Percent + '%)'
                if(player.Ain.Clickables_3[5][4].eq(0)) Style['background'] = '#000000'
                Style['width']            = '170px'
                Style['height']           = '170px'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                if(player.Ain.MiniTab3_Shrink == 1)
                {
                    Style['width']            = '30px'
                    Style['height']           = '30px'
                }
                return Style
            }
        },


        61:
        {
            title : 'Layer Refactor<br>-------------------------',
            display :  function()
            {
                Description = '<h3>Get bonuses based on you layers<br>*BUT RESETS LAYERS*</h3>'
                Replace     = '<h2>×' + format(player.Ain.Refactor[1]) + '</h2>'
                Effect      = '<h2>Current: ×' + format(player.Ain.Refactor[2])
                return  Description + '<br>' + Replace + '<br><h2>-------------------------</h2><br>' + Effect
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
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '300px'
                Style['height']           = '175px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid #666666'
                Style['color']            = '#666666'
                if(player.Ain.Refactor[1].gt(player.Ain.Refactor[2]))
                {
                    Style['border']           = '2px solid white'
                    Style['color']            = 'white'
                    Style['background-color'] = 'black'
                }
                return Style
            }
        },

        91:
        {
            title : '<h2>M</h2>',
            tooltip :  function()
            {
                return 'Return to middle'
            },
            canClick : function()
            {
                return true
            },
            onClick :  function()
            {
                player.Ain.MiniTab3_Row[1]    = 6
                player.Ain.MiniTab3_Column[1] = 6
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                return Style
            }
        },
        92:
        {
            title : '<h1>↑</h1>',
            tooltip :  function()
            {
                return 'Move the research tree up'
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                if(player.Ain.MiniTab3_Row[1] > player.Ain.MiniTab3_Row[2]) player.Ain.MiniTab3_Row[1] -= 1
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                return Style
            }
        },
        93:
        {
            title : '<h1>→</h1>',
            tooltip :  function()
            {
                return 'Move the research tree to the right'
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                if(player.Ain.MiniTab3_Column[1] < player.Ain.MiniTab3_Column[3]) player.Ain.MiniTab3_Column[1] += 1
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                return Style
            }
        },
        94:
        {
            title : '<h1>↓</h1>',
            tooltip :  function()
            {
                return 'Move the research tree down'
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                if(player.Ain.MiniTab3_Row[1] < player.Ain.MiniTab3_Row[3]) player.Ain.MiniTab3_Row[1] += 1
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                return Style
            }
        },
        95:
        {
            title : '<h1>←</h1>',
            tooltip :  function()
            {
                return 'Move the research tree up'
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                if(player.Ain.MiniTab3_Column[1] > player.Ain.MiniTab3_Column[2]) player.Ain.MiniTab3_Column[1] -= 1
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                return Style
            }
        },
        96:
        {
            title : '<h1>+</h1>',
            tooltip :  function()
            {
                return 'Enlarge the research tree'
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                player.Ain.MiniTab3_Shrink = 0
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
                return Style
            }
        },
        97:
        {
            title : '<h1>-</h1>',
            tooltip :  function()
            {
                return 'Shrink the research tree'
            },
            canClick :  function()
            {
                return true
            },
            onClick :  function()
            {
                player.Ain.MiniTab3_Shrink = 1
            },
            style :  function()
            {
                Style = {}
                Style['width']            = '50px'
                Style['height']           = '50px'
                Style['background-color'] = 'black'
                Style['border']           = '2px solid white'
                Style['color']            = 'white'
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
// Column  02  03  04  05  06  07  08  09  10
//
// Row                     51
// 02      58          428-417-418         55
// 03          \\  415-416-318-41--42  //              92
// 04          414 \\  317-36--37  //  43          95--91--93
// 05      427 413 316     32  //  38  44  419         94
// 06  54--426-321-315-35--31--33--39--319-420-52    96--97
// 07      425 412 314 //  34  \\  310 45  421
// 08          411 //  313-312-311 \\  46
// 09          //  410-49--320-48--47  \\
// 10      57          424-423-422         56
//                         53
// ----------------------------------------------------------