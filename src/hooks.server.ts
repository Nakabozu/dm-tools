/* BLANCA HOOK!
   Hooks run every time the app is started and keep running as long as the server persists. */
import { DISCORD_TOKEN } from "$env/static/private";
import { Client, Events, GatewayIntentBits, IntentsBitField, SlashCommandBuilder, command } from "discord.js";
import { items } from "$lib/server/items.ts";
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
        let highValueMessage = "";

        const mundaneItem1 = mundaneItems[Math.floor(rngA()*mundaneItems.length)];
        const mundaneItem2 = mundaneItems[Math.floor(rngB()*mundaneItems.length)];
        const mundaneItem3 = mundaneItems[Math.floor(rngC()*mundaneItems.length)];

        const common1 = commonItems[Math.floor(rngD()*commonItems.length)];
        const common2 = commonItems[Math.floor(rngE()*commonItems.length)];

        const uncommon1 = uncommonItems[Math.floor(rngF()*uncommonItems.length)];

        const rare1 = rareItems[Math.floor(rngG()*rareItems.length)];

        const veryRare1 = veryRareItems[Math.floor(rngH()*veryRareItems.length)];

        const other1 = otherItems[Math.floor(rngI()*otherItems.length)];

        finalMessage += `• ${mundaneItem1["name"]}
• ${mundaneItem2["name"]}
• ${mundaneItem3["name"]}
• ${common1["name"]}
• ${common2["name"]}
• ${uncommon1["name"]}\n`

        if(Math.floor(Math.random()*25)+1 == 1){
            highValueMessage += `• ${rare1["name"]}\n`
        }
        if (Math.floor(Math.random()*50)+1 == 1){
            highValueMessage += `• ${veryRare1["name"]}\n`
        }
        if (Math.floor(Math.random()*33)+1 == 1){
            highValueMessage += `• ${other1["name"]}\n`
        }

        if (highValueMessage.length > 0){
            finalMessage += `What you're about to see next is special.  Sure to sell before the next time you check, I guarantee.\n${highValueMessage}`
        }
        
        message.channel.send(finalMessage);
    }
})
