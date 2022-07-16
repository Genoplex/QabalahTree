addNode('Aleph',
{
    name          : 'Aleph',
    symbol        :  function()
    {
        return '<span style="font-size:25px;color:rgb(0, 0, 0);font-style:normal;font-weight:bold;">&#1488;</span>'
    },
    color         : '#888888',
    position      :  50,
    row           :  49,
    branches      : ['Simulation'],

    layerShown    :  function()
    {
        return true
    },

    tooltip       :  function()
    {
        return 'ALEPH'
    },

    startData     :  function()
    {    
        return{

        }
    },

    canClick      :  function(){return true}
})

addNode('Bet',
{
    name          : 'bet',
    symbol        :  function()
    {
        return '<span style="font-size:25px;color:rgb(0, 0, 0);font-style:normal;font-weight:bold;">&#1489;</span>'
    },
    color         : '#888888',
    position      :  50,
    row           :  49,
    branches      : ['Simulation'],

    layerShown    :  function()
    {
        return true
    },

    tooltip       :  function()
    {
        return 'BET'
    },

    startData     :  function()
    {    
        return{

        }
    },
    
    canClick      :  function(){return true}
})