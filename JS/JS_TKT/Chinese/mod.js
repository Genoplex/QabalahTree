let modInfo = {
	name        : '卡巴拉之树',
	id          : 'GenoplexsTKT',
	author      : '神之海(Genoplex)',
	thanks      : '',
	pointsName  : '',
	discordName : '',
	discordLink : '',
	initialStartPoints: new Decimal (10),
	offlineLimit: 0,
}

// Set your version in num and name
let VERSION = {
	num: 'ersion a.0.1 Demo',
	name: '',
}

let changelog = ``
	

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(0)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function()
	{
		if(player.Data.Show_Points == 0)    return '<br>'
		                                    return '<h2>You have <h1 style="color:tmp[layer].color; text-shadow: 0px 0px 10px #FFFFFF;">' + format(player.points) + ' (+' + format(getPointGen()) + '/s)' + '</h1> <h2>Points<br>'
	},
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}