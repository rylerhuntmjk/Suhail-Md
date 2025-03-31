const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9138916225";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGE || process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_31_03_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NixcbiAgICAgICAgNTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxODgsXG4gICAgICAgIDk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTczLFxuICAgICAgICA1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDU2LFxuICAgICAgICA2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNzNoSU8yTU53UWQxdTcrWWdQSHNpcGsrcVQ3bk02dlgzSkNMNnJNN0RkMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ3NENnloSEJTS2FSRllrTmZWenZSUVwiLFxuICBcInBob25lSWRcIjogXCI4N2Y0MWE2Ni1mYzRhLTRlOGItOGMzYy05YmJmOWY2Y2ViNGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgMTU4LFxuICAgICAgOTMsXG4gICAgICAxNTQsXG4gICAgICAxNjYsXG4gICAgICAxOTYsXG4gICAgICAyMTEsXG4gICAgICAxNzIsXG4gICAgICAxNjcsXG4gICAgICAyMzAsXG4gICAgICA4NyxcbiAgICAgIDk0LFxuICAgICAgMjMyLFxuICAgICAgMTMzLFxuICAgICAgMTQ2LFxuICAgICAgMjUzLFxuICAgICAgMTkxLFxuICAgICAgMTM2LFxuICAgICAgMjA4LFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICA5MCxcbiAgICAgIDE2OCxcbiAgICAgIDE1NyxcbiAgICAgIDU2LFxuICAgICAgMzAsXG4gICAgICAxNTAsXG4gICAgICAyMjgsXG4gICAgICAxMTQsXG4gICAgICA0NyxcbiAgICAgIDI5LFxuICAgICAgNTYsXG4gICAgICAxMDEsXG4gICAgICAxMzMsXG4gICAgICA5MSxcbiAgICAgIDE2OSxcbiAgICAgIDE1NCxcbiAgICAgIDE0OSxcbiAgICAgIDk0LFxuICAgICAgMTkwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRZQ0tSNzhBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM4OTE2MjI1OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDcxOTI3ODI2NDc0ODQ6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkRVb01zSEVNM0xyTDhHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsOUVSU1VuQjlRWnJjZDczdUJ5dS84RmFQTmRIUWkwZlk0TFhyNjRvbldvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitMZnhtSDl1dk16eFc0YzdMd3gySW1ZbXdveEhudEZEa1hSWlQ2WmpUWHlwaE5UUWRnK25sWlJ5OWxkNXM4Vm9jaXk1VWFuS1kwaWRoNEJwamxYQkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhXdDlFeUVGYnRURFEzZnI3aEppZkNvckVoNVR2REZLVGtSY1lrQjhJVytsaTdzQ3JFVVZYRlgvUm53dE41QVAwWWVOMWhwYnh2Qkc5cVh2TzAxdkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzg5MTYyMjU6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQzNDYzODg5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SMILE-MD",
  ownername:process.env.OWNER_NAME|| "Smile💯",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SMILE"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
