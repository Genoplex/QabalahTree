addLayer('Data',
{
    name          : 'Data',
    symbol        : '',
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

        {
            key: "g",
            description: "Test",
            onPress  :  function()
            {
                
            }
        },
    ],

    tooltip :  function()
    {
        return '这是用于特殊数据检查和计算的层级，请不要乱动'
    },

    tabFormat :
    {
        '主界面':
        {
            unlocked :  function(){return true},
            content  : 
            [
                ['display-text',function(){return 'Test'}]
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

        Pause                  : 1,
        Show_Points            : 0,

        Hotkey                 : {},
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

    doReset :  function(Resetting_Layer)
    {

    },

    update :  function(diff)
    {
    }
})
    