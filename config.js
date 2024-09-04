//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/f21687ba3fc65745fad54.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237691795883";
global.owner = process.env.OWNER_NUMBER || "237658067966";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9NRDRqa3JsRHpidHdQNWxxV0RsVGtsQU9lRWxLTkYvcktLSk5CUW5VTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjZoeGNKV1EybjRDNnRlelZrRE1nT0VaQmpSdFBNOHBVT1BrNWtvSTRVRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpQ2g0bk5uSTBucEthMXBiQUsrUEFlR3UwWDJYSUpvLysvNGRON2pLOG40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhYzlGUGRhRC9TTkZ0aTUrOXBhQThYcmRjTGhhMXhTQVBLamJNZ0hCUFRvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklISGZqQXpYKzlIMW5Dbjk0YUFLL1FnaXRpSS9NanQwT3BZQ0ZTZURGMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitFNkRCMkVyN3RzYVpxbklhK2dTN0psTSthMjNFc2VmRFNDclJVZVplMlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFXVjV4TGdVekxoVk13RzFiYkZTK0dvOU1nSzZzZFEwdjJSQ202NzNsWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFpoa2c2SWJETXU2dlZWaFBML25GYXlBVmhZZkNsWDk1UFpjVWwzTmRuQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd0T282YUdCYWM1MHlqeEdSaGY1eTBiU3hyR1BYT2o3UFhrOXJhUFZ0SGZRcm5iUTdiaFdWNG5tUzZZWVl0Sk0xOUhWLzJ0ZkUyaUYycTdkci9RQ2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDEsImFkdlNlY3JldEtleSI6IllYdGd6VXV4eitGZWZBSjEzYkt5VFhrdnBWRjU3RXZIemhZbnZXeGNiTFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikxtek1NM2E3UWUyWXFFQUE3bUpPaXciLCJwaG9uZUlkIjoiMDE5ZjZmOWUtOTgxZi00NGM5LWJlZDEtYTE1ODcwZWU5ZDQ1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJKbmdyVGoxSmE5YUs1ako5N1NKQjlKTUdrUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTDRwR2xKRGdiQlNHaFZYNit5czZ3Y2xIRXc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ1hWMTgzUUYiLCJtZSI6eyJpZCI6IjIzNzY1ODA2Nzk2Njo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IumHkURBUkvjg6HigJTjgrnjg4bjgqPjg7zjg5bjg7MifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A3SzNiOERFT1NaNGJZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Img2R3NURllENGoxRm9ZNmNFZGtKd3ZTNWwvQ1pza2ZkSEdSamZZdlc0aE09IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJNQlJTOVRycXo3b0JCRmRtTVVxNEgrbXNpTy9qNWlRLzBFTEFEQU1CRlVVUzl4QTBQWjU0V3dYYWtmdFU1RmEyV1FHSk90eUJoTFluRkxWZVZTWmlnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJxVUsrOW51RUVkUnFPcHJuVjAzN2FTUk01MTV2MjIwc1dXLzE3UHVlLzNvMTR5bTVkNE5JZUMzMG11cmhFQmtpTEdZL29OSEVTRnRsQlBWb3ZwdGtqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY1ODA2Nzk2Njo3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlllaHJFeFdBK0k5UmFHT25CSFpDY0wwdVpmd21iSkgzUnhrWTMyTDF1SVQifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU0NTE1MDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUE9qIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "金DARKメ",
  packname: process.env.PACK_NAME || "金DARKメ",
  botname: process.env.BOT_NAME || "*ᵏᵍ┘金DARKメ𖤐*",
  ownername: process.env.OWNER_NAME || "☞⌜ 金DARKメ⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
