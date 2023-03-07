export const hitherStrings = {
overview: {
camping: `Roll 1d8 and consult the table for camping outside of a sanctuary. Setting up camp in Hither is has much few ups than downs due to it's transformation.  
As you fix o'wells, the negative effects of sleeping in Hither fade away, but until then, camping will be a grueling experience.`,
campingTable: [
// BAD
`A band of 1d4 harengon brigands and 1d4 harengon snipers ambushes you in your sleep.  
You get none of the benefits of a long rest and immediately start combat unarmored.
If nobody was keeping watch, the bandits get one surprise round against you.`,
`A army of frogs and toads croak loudly throughtout the night making your sleep restless.  You only recover half of your spellslots and ki.`,
`A swarm of biting insects plagues you while you rest, draining your blood and sanity.  You only recover half of your max HP and a quarter of your hit die.`,
`A poisonous swamp fog rolls over your camp as you rest.  Roll a DC 10 CONSTITUTION SAVING THROW throw or become poisoned until you complete another long rest.`,
`An o'well near you spews water like a geyser in the middle of the night, flooding your camp in the middle of the night.  You cannot recover from exhaustion as you wake up soaked from head to toe.`,
// GOOD
`The Feywild sun shines a golden beam of light through a mossy tree to wake you up.  Camping went better than expected.  Your long rest is successful.`,
`You camp peacefully, and when you awaken, 1d8 delicious smelling mushrooms seem to have grown close to your camp.  
Each mushroom grants 1 Temp HP when eaten, or 2 if cooked by someone proficient with chef's tools.  This effect expires after your next meal.`,
`For once, hither blesses you. The night passes quietly.  The moss under you is softer than memory foam.  
You feel as though you're one with nature as you rest and meditate in peace.  Gain 5 temp HP that expire after your next long rest.`,
]
},


tables: {
    carousingCompanions: [
        {
            desc: "The fey spirit of a fallen gnome that died guarding Zybilna",
            link: "https://5e.tools/bestiary.html#fey%20spirit_tce,scaledspellsummon:3"
        },
        {
            desc: "Bullywug aristocrats seeking a squire to sponsor",
            link: "https://5e.tools/bestiary.html#bullywug%20royal_gos"
        },
        {
            desc: "Pixies looking for someone new to tease",
            link: "https://5e.tools/bestiary.html#pixie_mm"
        },
        {
            desc: "Dohwar travelers seeking safety while they search for assylum",
            link: "https://5e.tools/bestiary.html#dohwar_bam"
        },
        {
            desc: "Harengon who admires you after hearing about how you defeated Agdon and tamed Blanca",
            link: "https://5e.tools/bestiary.html#harengon%20brigand_wbtw"
        },
        {
            desc: "Satyr hoping to learn the party's vibe and chill with them",
            link: "https://5e.tools/bestiary.html#satyr%20reveler_mot"
        },
        {
            desc: "Dryad corrupted into a swamp Naiad that wants to learn how to turn back",
            link: "https://5e.tools/bestiary.html#naiad_cm"
        },
        {
            desc: "Valenar Hawk with no master.  You remind them of their old master who died in this swampy mire.",
            link: "https://5e.tools/bestiary.html#valenar%20hawk_erlw"
        },
    ],
    researchingRomance: [
        {
            desc: "You cannot find a single piece of literature that makes sense to you.  " +
            "You can't read half of these books, a vast majority of the ones you can read are not about romance, " +
            "and the one that are about romance are hopelessly confusing in the way they present their content.",
        },
        {
            desc: "Finding books on romance is hard, but you do manage to stumble upon a few you understand.  " +
            "Unfortunately, every fey romantic belief challenges your notions of what romance is and you are in inner tumoil just reading them.",
        },
        {
            desc: "The only book you find is written by an elf and is hopelessly clinical in it's assessment of what romance is and how to make it blossom.  " +
            "Still, you do learn one gesture of romance that could be helpful to you.",
        },
        {
            desc: "You find a book documenting the history of romance in the feywild.  " +
            "Most of the practices are incredibly dated, but one sticks out to you as a convincing display of affection.",
        },
        {
            desc: "You find a childrens' book that covers about two bunnies falling in love.  " +
            "It is a short tale in which the display of affection is shown when the bunnies confess their love to one another.",
        },
        {
            desc: "The book you find is... let's say adult in content.  " +
            "It does have a section that isn't as mature as the others with two great ideas for displays of affection.",
        },
        {
            desc: "You find a lengthy romance novel by the author Beabee.  " +
            "Most of the displays of affection are so lavish or outlandish that you don't have the means to reproduce them, but they give you three genuine and convincing ideas.",
        },
        {
            desc: "You bump into Agdon while you conduct your research.  He recalls your duel with enthusiasm and asks what you're looking for." +
            "Hearing your goal, he offers to tell you all about Blanca's likes, dislikes, and loves.",
        },
    ],
    romanticGestures: [
        {
            desc: "Cuddling up by a fire with a warm cup of thistle tea and telling stories about hopes and dreams.",
        },
        {
            desc: "Creating a grand scavenger hunt featuring items of sentimental value.  Simulate a grand adventure to get her out of her den.",
        },
        {
            desc: "Performing a play or ballad for them with a romantic plot. Bonus points for making a fool of yourself in the process.",
        },
        {
            desc: "Pulling mischevious and downright criminal pranks on the aristocracy in Downfall.",
        },
        {
            desc: "Risk your life to obtain something priceless, even if it's totally useless.",
        },
        {
            desc: "Take her away from her work to somewhere shady and secluded and dance with her.",
        },
        {
            desc: "Challenge her to a fight or race.  She picked up a love of duels from her time with Agdon.",
        },
        {
            desc: "A spa treatment where you brush her matted fur out.  This was one of the only parts of her life as the daughter of an aristocrat that she enjoyed.",
        },
    ]
},


owells: {
approach: `As you near the bubbling o'well, the stench of rotting vegitation grows stronger.  
Buzzing and croaking is heard loudly from every direction.
INVESTIGATION (DC 14): Those of you brave enough to attempt to peer into the well see a viscous orb as clear as glass with a humanoid creature inside.  
Water turns a sickly green as it passes through the orb and the well vomits it onto the ground.
IF PARTY ATTEMPTS TO REMOVE IT WITHOUT IOTONE: Whatever it is, it's lodged in tightly and harder than steel.  Try as you might, there's nothing you can do to pry it free.`,
removingLornlings: `When a lornling is removed, roll 1d8 and consult the encounters table to see the encounter. To remove lornlings, you need iotone.  
This concentrated fluid is made from the tears of Eachthighern (EK-tee-arn), the unicorn deity of healing, loyalty, protection, and purification.  
Cheap knockoffs made from unicorn tears are a quarter as effective as the real thing, but much more common on the black market.
Blanca has a vile of true iotone, which she obtained by having Agdon steal all of Eachthighern's pomegranates, which are his favorite food.
She will give it to players who ask for it in exchange for sparing Agdon, or if she is fond of them for whatever reason.`,
encounters: [
{title: "Giant Dragonflies", text: ` With a squeeze of the dropper, you see a disgusting patchwork cloth dart around in the swampy water.  
As you squint for a better look, you catch the creature darting to the surface to shoot into the air.  
With a cackle and the wave of a hand, it sprays a noxious mist over the surrounding bog and the dragonflies grow to a monsterous size.`},
{title: "Heartstabber Mosquitos", text: ` As you approach the next o'well, the smell of fettid water sours your stomach.  
Swarms of biting insects flit about you, looking for a meal.  You take your dropper and quickly dispence a drop of the precious liquid.
With a burst of speed, a lornling flies from the o'well and shoots a vile ray into a cloud of insects, causing a handful of mosquitoes to swell to a deadly size`},
{title: "Giant Toad and Giant Frogs", text: `As you approach the next o'well, the mad cacophany of croaks assaults your ears from every direction.
It's enough to drive you insane. `},
{title: "Crocodile and Giant Poisonous Snakes", text: `The well here `},
{title: "", text:``},
{title: "Detached Shadow", text: `THIS ONE IS COMPLETED!  The trek to this o'well is longer than normal and the unpredictable sun of Prismeer has danced its way behind you as you traveled.  
Your shadows stretch far in front of you to touch the o'well long before you can.  You step forward, and the lornling is ready for you.`},
{title: "Premature Lornling Swarm (homebrew)", text: `THE PLAYERS FAILED TO SING THIS ONE OUT!  Lornling eggs combine into an coalescence of orbs that takes on an amorphous humanoid form that's highly sticky.
The runes on this well read reciprocity.`},
{title: "FINALE! Character's Reflections", text: `  As you approach the final o'well, you look around at the swamp.  
The water isn't as murky as it once was.  It's creatures, more skittish than aggressive.  It feels closer to home than it ever has before.
When you reach the o'well, it's burbling is weak and forced.  You peer down into it to detach the lornling within the well, but it is already free and staring right at you.
From your reflections in the well water and the pools of water around you, ascends a mirrored copy of yourselves, poised to fight to defend the final o'well.`}
]
},


telemyHill: {
important: [
`A lornling corrupts Telemy deep from within.  Jingle Jangle knows of a path into telemy, but it's dangerous to descend.`,
``,
``,
``,
``
],
meetingJingle: `After completing the puzzle, a keyhole in the stone grows to reveal worn stone steps leading down into what feels like a cellar. 
A chill wind caresses you as you hear rhythmic steps on stone and smell the subtle scent of metal on the air.  
From out of the passage, a goblin appears.
She looks thin and frail, wears a coat lined with metal keys, and carries a flail that has padlocks for heads.
She manages a faint smile and says, “Such brave folk to climb Telemy Hill in its current state.  How might Jingle Jangle unlock a bit of happiness in your lives today?”`,
jinglesChamber: `From a distant spot within the chamber, sputtering candles illuminate a multitude of keys dangling from taut strings that crisscross the walls.
Hundreds of other keys lie strewn across the dirt floor.
As you take in the scene, you hear the sound of keys jingling as a goblin emerges from the dimness.`,
insight: [`Jingle Jangle is friendly. She collects keys and talks about them endlessly.
She wears a coat of keys that jingle and jangle when she walks—hence her name.
She used to be great friends with Telemy Hill, the voice of the land of Hither, before Bavlorna visited and Telemy began to change.
She was raiding the hill for fruit and truffles when she was spotted by one of Telemy Hill's trees and attacked.  
She has been in recovery for weeks, and her food and water stores are nearly depleted. 
What's left is rotting and tainted.`],
taleOfWoe: `Jingle Jangle was sneaking around, digging for the truffles that dot the top of Telemy, when Jingle Jangle's cloak of muting slipped.  
The clinks of Jingle Jangle's keys alerted the trees.`,
offerings: `A bag of truffles, a tasty snack, or purification of her rotten food.
A thirst-quenching beverage or purification of her tainted water.
Healing for her wounds.`,
theCore: `Jingle Jangle leads you to a spiraling path claiming "This will take you to the core, but it's too much for Jingle Jangle."
You descend down the path for minutes on end.  Let me know if you'd like to react to anything on your way down.  
You descend so far your ears pop and you still can't see the bottom. You continue futher down, your hair stands on end.  
Even further and you hear raspy chuckles in your mind.  The smell of the bog is stronger than ever.
Further still hideous tendrils creep from the darkness just beyond your vision.`,
fearItself: `"There's nothing to fear but fear itself." the old addage goes.  Fear itself truely is terrifying after all.
Fear Itself is one of the primordial foundations of the feywild: paranoia.  A shard of Fear Itself is currently lurking inside Telemy Hill, stoking the flames of Jingle Jangle's fear of being trapped.
It uses this emotion to boil the very feywild itself and feast on it, which permanently warps reality.  These warps are called "Dining Tables" by planeswalkers and can assist planar shifts.
Fear Itself is based entierly on Fiddlesticks from League of Legends.  Appearance, voice, lore, and all.`,
fearItselfEncounter: `As you reach the deepest recess of Telemy Hill, you become so blind you can't see your hand in front of your face.   You hear a small, metalic rattle come from behind you.
On reflex, you turn to look, and all that can be seen is a single pinprick of red light.  Roll a Wisdom Save.

The voice responds. Its breath, sweet--to most of you--like freshly churned dairy.  
Its red light is unwavering, yet it feels as though it grows larger the longer you stare, like the headlights of an oncoming vehicle.  
It's enough to drive you mad-to make you totally close control.  It speaks to you directly, dredging up the worst echo of a memory with each syllable.

THORIN: MOMMY, DON'T LEAVE ME!  MOMMY, PLEASE!
FITZ: DO YOU CARE ABOUT ANYONE ANYMORE!?
CARD: ????????????????????????????????????????????????????????????????? BUCK UP.  SHE'S SOMEWHERE SPECIAL NOW!  FAR FROM US!
DAGAHRA: AAAAHHHHHHHH!  THEY'RE ALL OVER ME!  GET THEM OFF!  OOOOOFF!
VEXDRIA: NO DAUGHTER OF MINE!  NO DAUGHTER OF MINE!

[PLAYER] Roll me a wisdom saving throw.

He continues to antagonize until someone fails.  When they fail, he's gone when everyone turns to look at him.  
If nobody fails, he gives a sickening smile and laughs with teath of jagged gems and metal, black bile and blood dripping from it.
`
},


brigands: {
enteringTollway: `A foggy marsh stretches out before you. Rickety causeways made of wooden planks form a wide, web-like structure above the bog. 
Three hundred feet away, many of these causeways converge on an enormous, ivy-covered tree stump that rises a good ten feet above the twenty-foot-high fog bank that enshrouds it.`,
runningEncounter: `When running this encounter, there are FOUR important things of note: 
• Each hex is 15 ft.
• The players can only see 30 ft in front of them. 
• The causeway is 30 ft up above murky water. 
• Players not moving carefully will roll a 1d8 and fall through a rotten board 1, 2, or 3.

You control the pontoons.  Roll a 1d8 to determine the direction they move.  1 being north, 2 north east, 3 east, and so on.  They move at 60 ft a round.`,
encounter: `If the team is spotted, the pontoon will discretely send word to Agdon via Sending Stone.  He will then join the group. 

READ THE FOLLOWING:
An odd feeling suddenly comes over you as you become aware that somewhere along the way, a hunched, hooded figure has joined the group.  
With a flourish, the figure throws off its cloak, revealing a dashing Harengon with a long, blue scarf that flutters in an etherial wind.

READ THE FOLLOWING If they make within 30 ft of the stump without being spotted: 
"He presses one finger to his lips with a coy smile and whispers, 'I'm impressed you made it past all of the patrols without being spotted.  
Care for a bit of one-on-one fun.  I admire crew as devious as yours and will keep it totally off the books.'"

If players agree, Agdon speaks into a sending stone.  "Hey Phara, you have to come see this.  Keep the other three rolling on the water though."

If players cause even a slight disturbance, Agdon will use the sending stone to call for backup.  
Four pontooning harengon arrive in the third round of combat with Agdon.  The other four arrive in the eighth round.`,
theStump: `This massive stump appears to be a base for the brigands.  Small tents and makeshift buildings sit scattered across the top.  
Agdon moves some tables, chairs, and crates to form a makeshift arena.`,
capture: `You wake up with a splitting headache, covered in burns from Agdon's brand.  The room you're in looks like it's been entirely varnished in wood. 
Directly next to you stands a Harengon soldier you recognize as the one you kidnapped.
In front of you, Agdon rhythmically taps a foot as he abscentmindedly rolls a coin in his fingers.  He seems to be staring at whatever is making a scratching noise behind you.
As a voice chimes in from where he stares, the Soldier stands at attention.  "Prepare them for interrogation." a feminine voice says with a growl.  
With a nod from Agdon and the soldier, the room fades to black.  Your friends are gone.  Through the blackness, a menacing harengon comes into view, Agdon and the soldier behind her.

AT THIS POINT, TAKE EACH PERSON, ONE BY ONE, INTO A WHISPER CHANNEL FOR INTERROGATION.
Agdon asks: Who are you?
Blanca asks: What does your group hope to gain here?
Phara may ask whatever she likes.

If anyone doesn't answer according to Blanca's standards, she will kill a party member at random, starting with Jingle Jangle.
If they state that they are trying to stop Bavlorna, she warms up to them, releases them, and gives them a gift of their choosing for their troubles as well as a Blanca Bank.`,
marriage: `
When you open the hatch to join the wedding, you see a slew of fey creatures mingling before you.  
Vibrant flower petals rain down from the sky in an extravigant display, disappearing when they touch the ground.
Will-o-wisps dart through the air, causing shadows to dance, sometimes in ways that don't match their owners.
Speaches are given, praising Blanca for her dedication to the warren, laughing about her first bride being money, and joking that Card has gotten well in over her head.
Any one of the party members can give a speech if they like. 

When speeches are done, a harengon waiter places a menu before you.  He states that you may choose from two of the five items below, none of which are given a description on the menu.
Bright Bubble Bellywash - A savory, sparkling drink that bubbles up from magic springs across the feywild.  This fickle drink bubbles away quickly and is said to be as hard to obtain as the favor of the gods themselves.
Thistle Tickle Tea -      A bitter and acrid tea made from the leaves of the thistle plant. Every harengon gulps it down delightedly, but the other fey creatures don't care to indulge in it, as it burns the throat.
Mystic Misty Moonbeams -  A salty snack made of a thin, weblike bread dusted in powdery salt.  It gives off an ethereal glow and is surprising filling, given how light it is.  When you finish the this dish, you faintly glow the same color as it.
Sour Sap Soup -           A sour syrup extracted from Agdon's tree, stewed with root vegetables. Its tart flavor is unbearable to everyone's palates, yet everyone who orders it eats it as a matter of respect and tradition.
Tender Treasure Tart -    A sweet tart in the shape of a chest.  Opening the chest's lid reveals a treasure of glistening berries that are rumored to entwine your soul with those around you.  Indeed, with bite you take, recall the fond moments you've spent with everyone recently.

The magic baked and stewed into each meal provides you with a temporary buff
Bright Bubble Bellywash - You gain the Lucky feat 3 long rests.
Thistle Tickle Tea -      You gain a Red Dragonborn's breath weapon for 3 long rests.
Mystic Misty Moonbeams -  You may cast the "Web" spell once per long rest for 3 long rests.
Sour Sap Soup -           You gain the respect of the harengon, giving you advantage on rolls made with them, for 3 long rests.
Tender Treasure Tart -    You feel a closeness to those around you.  You can use the help action as a bonus action for 3 long rests with any ally you can see.

As the clanks of forks, spoons, and glasses die down, the murmur of chatter grows.  A few catch your ear.
An aristocratic looking male Spring Eladrin discusses gossip about Titania with a female Autumn Eladrin.
A gnome and a halfling discuss the rampaging monster in the south and how they lost their friend to it. 
Jingle Jangle drunkenly regales a group of Harengon with the tale of Agdon in as much detail as she can recall.
A satyr in a sailor's uniform mutters to himself with large bags under his eyes as a pixie consoles him.
Two Boggles in tiny suits sing a small song about how happy they are to leave.

Spring Eladrin - Titania's loyal vassel, Sir Talavar has returned to the Summer court! Rumor has it he's trying to save Prismeer.
Autumn Eladrin - What a man of honor.  I wish I knew Sir Talavar...
Spring Eladrin - What I wouldn't give to be his squire.

Halfling - Pity they haven't caught the thing.
Gnome - I just want justice for ol' Elmer and wover.  Ate 'em and took over his house I heard.
Halfling - Pity.  Once of the best mason based tinkerers of our generation, gone to a hideous beast that doesn't belong here.
Gnome - Have you thought about putting a reward on it?
Halfling - And lure some folk in need to pennies to their death?  I couldn't live with myself.
Gnome - I suppose you're right.

Jingle Jangle - Just drunkenly read the Agdon story with Jingle Jangle's speech quirk.  Have Jingle Jangle inject herself and her admiration into the story.  Agdon sits close, looking pleased.

Satyr - I mean, how did it know?
Pixie - There there...
Satyr - It's like it spilled bile on my mind that I'll never scrape away.
Pixie - All wounds heal in time...
Satyr - What did it want with the heart?

Boggle 1 - Big stump host is crass.
Boggle 2 - Big stump have no grass.
Boggle 1 - No want to talk to yous.
Boggle 2 - Just want go home and snooze.
Boggle 1 - Take me back to the well.
Boggle 2 - Where life be oh so swell.
Boggle 1 and 2 - Now that the land is green and water clean.

As you idly chat, you hear a scream from the opposite end of the reception.  
A hideous, froglike creature with a patchy cloak, green skin, and massive bulging eyes creeps towards you on a lilypad with a hideous grin on her face.
It's Bavlorna Blightstraw.

"Well well well well well well well...  Blanca has returned to her roots and is partaking in grand parties again I see.
I suppose I should offer you my blessing, maybe a gift, but you know I don't give anything away for free.

Blanca hisses, "Wut do yew wunt Buvlohrna?"

"Nothing!  Nothing at all!"  She says with a smirk as she thrusts her arm into the air, "I just came to give the bride her WELL WISHES!!!" 
and as she says this, disgustingly murky water shoots from over one side of the stump as she cackles. 
"Sorry I couldn't get you anything on the registry!  But what better gift to give someone who has it all than something handmade?
She continues her hideous laugh and floats away.`,
}
};