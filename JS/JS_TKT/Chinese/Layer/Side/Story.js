addLayer('Story',
{
    name          : 'Story',
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

    ],

    tooltip :  function()
    {
        return '这是用于特殊数据检查和计算的层级，请不要乱动'
    },

    tabFormat :
    {
        'Story':
        {
            unlocked :  function(){return true},
            content  : 
            [
                ['display-text',function(){return player.Story.Text_Story}],
                'clickables'
            ],
        },
    },

    layerShown :  function()
    {
        return false
    },

    startData :  function()
    {    
        return{
        unlocked               : true,
		points                 : new Decimal(0),

        Story_Part             : '1.1',
        In_Story               : 0,
        Story_Time             : 0,

        Text_Story             : '',
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
        if  (   (player.Data.Pause == 1)
              &&(player.Story.Story_Part == '1.1')
            )
        {
            player.subtabs.Story.mainTabs = 'Story'
            if  (   (player.tab !== 'options-tab')
                  &&(player.tab !== 'changelog-tab')
                  &&(player.tab !== 'info-tab')   
                )   player.tab = 'Story'
        }

        if(player.Story.In_Story == 1)
        {
            // If you play too much minecraft. You will write things like this too.
            player.Story.Story_Time += 1
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 20)) player.Story.Text_Story = '<h1>Y</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 21)) player.Story.Text_Story = '<h1>Yo</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 22)) player.Story.Text_Story = '<h1>You</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 23)) player.Story.Text_Story = '<h1>You </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 24)) player.Story.Text_Story = '<h1>You o</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 25)) player.Story.Text_Story = '<h1>You op</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 26)) player.Story.Text_Story = '<h1>You ope</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 27)) player.Story.Text_Story = '<h1>You open</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 28)) player.Story.Text_Story = '<h1>You open </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 29)) player.Story.Text_Story = '<h1>You open y</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 30)) player.Story.Text_Story = '<h1>You open yo</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 31)) player.Story.Text_Story = '<h1>You open you</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 32)) player.Story.Text_Story = '<h1>You open your</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 33)) player.Story.Text_Story = '<h1>You open your </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 34)) player.Story.Text_Story = '<h1>You open your e</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 35)) player.Story.Text_Story = '<h1>You open your ey</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 36)) player.Story.Text_Story = '<h1>You open your eye</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 37)) player.Story.Text_Story = '<h1>You open your eyes</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 57)) player.Story.Text_Story = '<h1>You open your eyes<br><br>O</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 58)) player.Story.Text_Story = '<h1>You open your eyes<br><br>On</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 59)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Onl</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 60)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 61)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 62)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only f</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 63)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only fi</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 64)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only fin</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 65)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only find</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 66)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only find n</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 67)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only find no</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 68)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only find not</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 69)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only find noth</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 70)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only find nothi</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 71)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only find nothin</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 72)) player.Story.Text_Story = '<h1>You open your eyes<br><br>Only find nothing</h1>'

            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 132)) player.Story.Text_Story = '<h1>"T"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 133)) player.Story.Text_Story = '<h1>"Th"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 134)) player.Story.Text_Story = '<h1>"Thi"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 135)) player.Story.Text_Story = '<h1>"This"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 136)) player.Story.Text_Story = '<h1>"This i</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 137)) player.Story.Text_Story = '<h1>"This is"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 138)) player.Story.Text_Story = '<h1>"This isn"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 139)) player.Story.Text_Story = '<h1>"This isn\'"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 140)) player.Story.Text_Story = '<h1>"This isn\'t"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 141)) player.Story.Text_Story = '<h1>"This isn\'t "</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 142)) player.Story.Text_Story = '<h1>"This isn\'t r"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 143)) player.Story.Text_Story = '<h1>"This isn\'t ri"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 144)) player.Story.Text_Story = '<h1>"This isn\'t rig"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 145)) player.Story.Text_Story = '<h1>"This isn\'t righ"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 146)) player.Story.Text_Story = '<h1>"This isn\'t right"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 147)) player.Story.Text_Story = '<h1>"This isn\'t right."</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 167)) player.Story.Text_Story = '<h1>"This isn\'t right." </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 168)) player.Story.Text_Story = '<h1>"This isn\'t right." Y</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 169)) player.Story.Text_Story = '<h1>"This isn\'t right." Yo</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 170)) player.Story.Text_Story = '<h1>"This isn\'t right." You</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 171)) player.Story.Text_Story = '<h1>"This isn\'t right." You </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 172)) player.Story.Text_Story = '<h1>"This isn\'t right." You t</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 173)) player.Story.Text_Story = '<h1>"This isn\'t right." You th</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 174)) player.Story.Text_Story = '<h1>"This isn\'t right." You thi</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 175)) player.Story.Text_Story = '<h1>"This isn\'t right." You thin</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 176)) player.Story.Text_Story = '<h1>"This isn\'t right." You think</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 196)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"T"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 197)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"Th"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 198)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"The"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 199)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"Ther"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 200)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 201)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There "</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 202)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There s"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 203)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There sh"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 204)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There sho"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 205)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shou"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 206)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shoul"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 207)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There should"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 208)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 209)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 210)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 211)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t "</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 212)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t b"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 213)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t be"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 214)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t be "</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 215)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t be n"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 216)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t be no"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 217)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t be not"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 218)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t be noth"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 219)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t be nothi"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 220)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t be nothin"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 221)) player.Story.Text_Story = '<h1>"This isn\'t right." You think<br><br>"There shouldn\'t be nothing"</h1>'

            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 281)) player.Story.Text_Story = '<h1>M</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 282)) player.Story.Text_Story = '<h1>Ma</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 283)) player.Story.Text_Story = '<h1>May</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 284)) player.Story.Text_Story = '<h1>May </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 285)) player.Story.Text_Story = '<h1>Mayb</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 286)) player.Story.Text_Story = '<h1>Maybe</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 287)) player.Story.Text_Story = '<h1>Maybe </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 288)) player.Story.Text_Story = '<h1>Maybe y</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 289)) player.Story.Text_Story = '<h1>Maybe yo</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 290)) player.Story.Text_Story = '<h1>Maybe you</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 291)) player.Story.Text_Story = '<h1>Maybe you c</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 292)) player.Story.Text_Story = '<h1>Maybe you ca</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 293)) player.Story.Text_Story = '<h1>Maybe you can</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 294)) player.Story.Text_Story = '<h1>Maybe you can </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 295)) player.Story.Text_Story = '<h1>Maybe you can s</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 296)) player.Story.Text_Story = '<h1>Maybe you can st</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 297)) player.Story.Text_Story = '<h1>Maybe you can sta</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 298)) player.Story.Text_Story = '<h1>Maybe you can star</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 299)) player.Story.Text_Story = '<h1>Maybe you can start</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 300)) player.Story.Text_Story = '<h1>Maybe you can start </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 301)) player.Story.Text_Story = '<h1>Maybe you can start f</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 302)) player.Story.Text_Story = '<h1>Maybe you can start fr</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 303)) player.Story.Text_Story = '<h1>Maybe you can start fro</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 304)) player.Story.Text_Story = '<h1>Maybe you can start from</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 305)) player.Story.Text_Story = '<h1>Maybe you can start from </h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 306)) player.Story.Text_Story = '<h1>Maybe you can start from "n"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 307)) player.Story.Text_Story = '<h1>Maybe you can start from "no"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 308)) player.Story.Text_Story = '<h1>Maybe you can start from "not"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 309)) player.Story.Text_Story = '<h1>Maybe you can start from "noth"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 310)) player.Story.Text_Story = '<h1>Maybe you can start from "nothi"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 311)) player.Story.Text_Story = '<h1>Maybe you can start from "nothin"</h1>'
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 312)) player.Story.Text_Story = '<h1>Maybe you can start from "nothing"</h1>'
            
            if((player.Story.Story_Part == '1.1')&&(player.Story.Story_Time == 332))
            {
                player.Ain.Self_Shown   = 1
                player.Data.Pause       = 0
                player.Story.In_Story   = 0
                player.Story.Story_Time = 0
                player.Story.Story_Part = '1.2'
            }
        }
    },

    clickables :  
    {
        11:
        {
            title    : '<h2>Open Your Eyes</h2>',
            unlocked :  function()
            {
                return  (   (player.Data.Pause == 1)
                          &&(player.Story.Story_Part == '1.1')
                          &&(player.Story.In_Story == 0)
                        )
            },
            canClick :  function()
            {
                return true
            },
            onClick  :  function()
            {
                player.Story.In_Story = 1
            },
            style    :  function()
            {
                return{
                    'height' : '50px',
                    'width'  : '300px',
                }
            }
        }
    }
})
    