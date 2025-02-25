

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1004206704994566164", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@discordbot.opd5w.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/xQF9f9yUEM",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
    {
  "name": "INZEWORLD.COM (DE)",
  "password": "saher.inzeworld.com",
  "host": "lava.inzeworld.com",
  "port": 3128,
  "secure": false 
    },
    {
  "name": "ChalresNaig Node (Backup)",
  "password": "charlesnaig-lavalink",
  "host": "212.227.65.132",
  "port": 10296,
  "secure": false
    },
    { 
      name: "saher",
      password: "saher.inzeworld.com",
      host: "lava.inzeworld.com",
      port: 3128,
      secure: false
    }
  ]
}
