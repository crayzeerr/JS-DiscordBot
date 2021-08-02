let Discord = require("discord.js")
let client = new Discord.Client()
const ytdl = require("ytdl-core");

client.on("message", message => {
if(message.content === "?help") {
  let embed = new Discord.MessageEmbed()
  .setTitle("These are the commands")
  .setDescription("**?bruh**\n **?hg**\n **?hb**\n **?he**\n **?hv**\n **?hl**\n **?hs**\n **?hsa**\n **?hi**\n **?hw**\n **?19**\n **?spam <word>**: spams a word/link\n **?randomnumber**: Chooses a random number, including decimals")
  .setColor("BLUE")
  .setFooter("Some of these commands might not work")
  message.channel.send(embed)

if(message.content === "?join")
  client.channels.cache.get("ChannelID")
  message.member.voice.channel.join()
  
client.on
  client.user.setActivity('?help', { type: 'PLAYING' });

}
  
if(message.content === "?bruh") {
  let embed = new Discord.MessageEmbed()
  .setTitle("Bruh")
  .setDescription("Bruh")
  .setColor("RED")
  .setFooter("Bruh")
  message.channel.send(embed)
}
if(message.content === "?hg") {
  const attachment = new Discord.MessageAttachment('https://i.kym-cdn.com/entries/icons/original/000/036/141/Drip_Goku.jpg')
  message.channel.send("He do be dripping doe", attachment)
}
if(message.content === "?hb") {
  const attachment = new Discord.MessageAttachment('https://preview.redd.it/vup68rh1hic61.jpg?width=640&crop=smart&auto=webp&s=662d406e0b71d22820c25628b1ffeb74d3e49de7')
  message.channel.send("He do be dripping doe", attachment)
}
if(message.content === "?he") {
  const attachment = new Discord.MessageAttachment('https://i.ytimg.com/vi/gmNquVyFOKA/maxresdefault.jpg')
  message.channel.send("He do be dripping doe", attachment)
}
if(message.content === "?hv") {
  const attachment = new Discord.MessageAttachment('https://i.redd.it/d4lnp1xi8yb61.png')
  message.channel.send("He do be dripping doe", attachment)
}
if(message.content === "?hl") {
  const attachment = new Discord.MessageAttachment('https://preview.redd.it/pq4ul49ptcc61.png?auto=webp&s=0c14f2c742e6a0d2b8bd32d6256a6dd7f8b2b15f')
  message.channel.send("He do be dripping doe", attachment)
}
if(message.content === "?hs") {
  const attachment = new Discord.MessageAttachment('https://preview.redd.it/itbgmhlgco861.jpg?width=640&crop=smart&auto=webp&s=7f6571da2c707a88acc8cc70155f37a3415661e5')
  message.channel.send("He do be dripping doe", attachment)
}
if(message.content === "?hsa") {
  const attachment = new Discord.MessageAttachment('https://i.redd.it/bwhfynu8uma61.jpg')
  message.channel.send("He do be dripping doe", attachment)
}
if(message.content === "?hi") {
  const attachment = new Discord.MessageAttachment('https://pbs.twimg.com/media/Dw_-pBuXcAAj0_a.jpg')
  message.channel.send("He do be dripping doe", attachment)
}
if(message.content === "?hw") {
  const attachment = new Discord.MessageAttachment('https://preview.redd.it/5t98agc1egm61.jpg?width=830&format=pjpg&auto=webp&s=e289291877eae5222b69c4274e4424a6071b4719')
  message.channel.send("He do be dripping doe", attachment)
}
if(message.content === "?19") {
  message.channel.send('https://www.reddit.com/r/pyrocynical/comments/m3m4h0/pyro_this_u/?utm_source=share&utm_medium=web2x&context=3')
}
if(message.content === "?randomnumber") {
  message.reply("The random number is " + Math.random())
}
var spam;
if(message.content.includes('?spam')) {
  message.channel.send("What do you want me to spam?")
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  message.reply(message.content.replace('?spam',''))
  
}
})


