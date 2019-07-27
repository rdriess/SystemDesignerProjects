/* 
 * StarWars
 * 
 * @description 
 * 
 * @module StarWars
 * @version 0.0.1
 * @requires system-runtime
 * 
 */

// install System Runtime
const runtime = require('system-runtime');

// uncomment this line to debug your system
// runtime.install('node_modules/system-runtime/extensions/mode-admin-server.json');

// set the level of log
runtime.require('logger').level('info');

// install and start the system
runtime.install({"name":"StarWars","master":true,"version":"0.0.1","description":"","schemas":{"d50b075a-1811-44f6-be0b-858c36184fb8":{"_id":"d50b075a-1811-44f6-be0b-858c36184fb8","_name":"Jedi","_inherit":["_Component"],"firstName":"property","lastName":"property","father":"link","fullName":"method"}},"models":{"f1b1ff42-a256-484e-b5a6-d8892ea4d78a":{"_id":"f1b1ff42-a256-484e-b5a6-d8892ea4d78a","_name":"Jedi","_description":"","firstName":{"description":"","type":"any","readOnly":false,"mandatory":true,"default":""},"lastName":{"description":"","type":"any","readOnly":false,"mandatory":true,"default":""},"father":{"description":"","type":"Jedi","kind":"normal","readOnly":false,"mandatory":true,"default":""},"fullName":{"result":"string"}}},"behaviors":{"c401f7c4-626d-4060-a51c-2657e7013b76":{"_id":"c401f7c4-626d-4060-a51c-2657e7013b76","component":"c4179b74-8a93-4b2b-9ed5-6256d094bbfc","state":"start","action":"function start() { \nlet luke = null,\n    logger = null;\n\n// get logger component\nlogger = this.require('logger');\n\n//get luke component\nluke = this.require('luke');\n\n// get the name of the father of Luke\nlogger.info(luke.father().fullName());\n}","useCoreAPI":false,"core":false},"c243f4e1-10c1-449f-b892-185924263702":{"_id":"c243f4e1-10c1-449f-b892-185924263702","component":"Jedi","state":"fullName","action":"function fullName() { \n  let result = this.firstName() + ' ' + this.lastName();\n  return result;\n}","useCoreAPI":false,"core":false}},"types":{},"components":{"Jedi":{"vader":{"_id":"vader","father":"","firstName":"Darth","lastName":"Vader"},"luke":{"_id":"luke","father":"vader","firstName":"Luke","lastName":"Skywalker"}}},"_id":"c4179b74-8a93-4b2b-9ed5-6256d094bbfc"});