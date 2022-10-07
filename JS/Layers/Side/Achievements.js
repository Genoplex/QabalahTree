addLayer('Achievements',
{
    name          : 'Achievements',
    symbol        : 'A',
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
        return 'Advancement and Achievements'
    },

    tabFormat :
    {
        'Advancements':
        {
            unlocked :  function(){return true},
            content  : 
            [
                ['row',[['achievement',11],['column',,{'width':'18px'}],['achievement',12]],{}]
            ],
        },
    },

    layerShown :  function()
    {
        return true
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
            name    : '<br><h3 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #000000;">A First Categoty of Automation',
            done    :  function()
            {
                return player.Ain.Clickables_2[5][1].gte(1)
            },
            tooltip : 'Unlock [Automation] in [Ain]',
            style   :  function()
            {
                return{
                    'height':'125px',
                    'width' :'125px',
                    'border' : '2px solid white',
                    'border-radius' : '5px',
                }
            }
        },
        12: {
            name    : '<br><h3 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #000000;">Further research',
            done    :  function()
            {
                return player.Data.Ain_Tab3_Unlocked == 1
            },
            tooltip : 'Unlock [Deep Research] in [Ain]',
            style   :  function()
            {
                return{
                    'height':'125px',
                    'width' :'125px',
                    'border' : '2px solid white',
                    'border-radius' : '5px',
                }
            }
        },
    }
})
    