import { Client, GatewayIntentBits, Events } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// Bot is ready
client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Handle slash commands
client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  switch (interaction.commandName) {
    case 'odds':
      await oddsCommand(interaction);
      break;
    case 'sports':
      await sportsCommand(interaction);
      break;
    // add more commands here
    case 'ping':
      await pingCommand(interaction); 
      break
  }
});

client.login(process.env.DISCORD_TOKEN);