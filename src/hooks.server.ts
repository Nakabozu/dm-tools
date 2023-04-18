/* BLANCA HOOK!
   Hooks run every time the app is started and keep running as long as the server persists. */
import { DISCORD_TOKEN } from "$env/static/private";
import { Client, Events, GatewayIntentBits, IntentsBitField, SlashCommandBuilder } from "discord.js";
import { items } from "$lib/server/items";
import seedrandom from "seedrandom";

// Initialize the list of items that could be up for sale
const mundaneItems: Array<any> = [];
const commonItems: Array<any> = [];
const uncommonItems: Array<any> = [];
const rareItems: Array<any> = [];
const veryRareItems: Array<any> = [];
const otherItems: Array<any> = [];

items.forEach((item: any) => {
    if("rarity" in item){
        if (item["rarity"] == "none"){
            mundaneItems.push(item);
        }
        else if (item["rarity"] == "common"){
            commonItems.push(item);
        }
        else if (item["rarity"] == "uncommon"){
            uncommonItems.push(item);
        }
        else if (item["rarity"] == "rare"){
            rareItems.push(item);
        }
        else if (item["rarity"] == "very rare"){
            veryRareItems.push(item);
        }
        else{
            otherItems.push(item);
        }
    }else{
        otherItems.push(item);
    }
})

/**
 * My slash commands
 */
const pingCommand = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction: any) {
		await interaction.reply('Pong!');
	},
};


// These are the permissions we're requesting that our bot have.
// Guids: Bot can join servers
// GuildMessage: Bot can message in the servers it has joined
// GuildVoiceStates: Bot can join voice chats in guilds and "speak"
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds, 
        IntentsBitField.Flags.GuildMessages, 
        IntentsBitField.Flags.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ]
});

client.login(DISCORD_TOKEN);

client.on("messageCreate", (message) => {
    if(message.content === "$peruse"){
        const currentTime = new Date();
        
        const rngA = seedrandom(`${(currentTime.getFullYear()*10000) + (currentTime.getMonth() * 100) + currentTime.getDate()}a`);
        const rngB = seedrandom(`${(currentTime.getFullYear()*10000) + (currentTime.getMonth() * 100) + currentTime.getDate()}b`);
        const rngC = seedrandom(`${(currentTime.getFullYear()*10000) + (currentTime.getMonth() * 100) + currentTime.getDate()}c`);
        const rngD = seedrandom(`${(currentTime.getFullYear()*10000) + (currentTime.getMonth() * 100) + currentTime.getDate()}d`);
        const rngE = seedrandom(`${(currentTime.getFullYear()*10000) + (currentTime.getMonth() * 100) + currentTime.getDate()}e`);
        const rngF = seedrandom(`${(currentTime.getFullYear()*10000) + (currentTime.getMonth() * 100) + currentTime.getDate()}f`);
        const rngG = seedrandom(`${(currentTime.getFullYear()*10000) + (currentTime.getMonth() * 100) + currentTime.getDate()}g`);
        const rngH = seedrandom(`${(currentTime.getFullYear()*10000) + (currentTime.getMonth() * 100) + currentTime.getDate()}h`);
        const rngI = seedrandom(`${(currentTime.getFullYear()*10000) + (currentTime.getMonth() * 100) + currentTime.getDate()}i`);

        let finalMessage = "Here's what's up for grabs today:\n";

        const mundaneItem1 = mundaneItems[Math.floor(rngA()*mundaneItems.length)];
        const mundaneItem2 = mundaneItems[Math.floor(rngB()*mundaneItems.length)];
        const mundaneItem3 = mundaneItems[Math.floor(rngC()*mundaneItems.length)];

        const common1 = commonItems[Math.floor(rngD()*commonItems.length)];
        const common2 = commonItems[Math.floor(rngE()*commonItems.length)];

        const uncommon1 = uncommonItems[Math.floor(rngF()*uncommonItems.length)];

        const rare1 = rareItems[Math.floor(rngG()*rareItems.length)];

        const veryRare1 = veryRareItems[Math.floor(rngH()*veryRareItems.length)];

        const other1 = otherItems[Math.floor(rngI()*otherItems.length)];
        
        let isRarityMessageDisplayed = false;

        // I can add my own stats to these items like price variability and such.
        const allItems = [
            {item: mundaneItem1, rarity: 1},
            {item: mundaneItem2, rarity: 1},
            {item: mundaneItem3, rarity: 1},
            {item: common1, rarity: 2},
            {item: common2, rarity: 2},
            {item: uncommon1, rarity: 3},
            {item: rare1, rarity: 4},
            {item: veryRare1, rarity: 5},
            {item: other1, rarity: 6}
        ]

        allItems.forEach(item => {
            if(shouldAddItem(item["rarity"])){
                // If this is a rare item and we haven't displayed Blanca's special indicator message
                if(item["rarity"] > 3 && !isRarityMessageDisplayed){
                    isRarityMessageDisplayed = true;
                    finalMessage += "What you're about to see next is special.  Sure to sell before the next time you check, I guarantee.\n";
                }
                // Paste the item name and show if it has a picture I can link.
                finalMessage += `• **__${item["item"]["name"]}${item["item"]["hasFluffImages"] ? ":frame_photo:" : ""}__**`;
                if(item["item"]["value"]){
                    finalMessage += ` *${getPriceAsString(item["item"]["value"])}*`;
                }
                /* 
                
                I was going to add details to mundane items but Discord doesn't support long messages from bots :/
                I'm thinking maybe I could send the mundane and the magic items in separate messages, but I'll do that if this becomes a big issue.

                if(item["rarity"] <= 1 && item["item"]["entries"]){
                    finalMessage += ` - ${Array.from(item["item"]["entries"]).join(" ")}`;
                }
                */
                if(item["item"]["nakentries"]){
                    finalMessage += ` - ${Array.from(item["item"]["nakentries"]).join(" ")}`;
                }
            }
            finalMessage += "\n";
        });
        message.channel.send(finalMessage);

        finalMessage = "";
    }
})

/********************
 * HELPER FUNCTIONS *
 ********************/
const shouldAddItem = (rarity: number): boolean => {
    switch(rarity) {
        case 1: // Mundane Items
        return true;
        case 2: // Common Items
        return true;
        case 3: // Uncommon Items
        return true; 
        case 4: // Rare Items
        return (Math.floor(Math.random()*25)+1 == 1); 
        case 5: // Very Rare Items
            return (Math.floor(Math.random()*50)+1 == 1); 
        case 6: // Other Items
            return (Math.floor(Math.random()*33)+1 == 1); 
        default: // Unknown Items
        return false;
    }
}

const getPriceAsString = (value: number): string => {
    let tempValue = value;

    const copper = `${tempValue % 10} CP `;
    tempValue = Math.floor(tempValue/10);
    const silver = `${tempValue % 10} SP `;
    tempValue = Math.floor(tempValue/10);
    const gold = `${tempValue} GP `;

    return(`${gold !== "0 GP " ? gold : ""}${silver !== "0 SP " ? silver : ""}${copper !== "0 CP " ? copper : ""}`);
}