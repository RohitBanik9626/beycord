const Beyblade=require("./Beyblade.js");class UltimateValkyrie extends Beyblade{constructor(e,t){super("Ultimate Valkyrie","Attack","https://ibb.co/rFStdmK",specials=[{name:"Special",requires:function(e,t,a){return e.sp>3},execute:function(e,t,a){let s=t.hp,i=0;for(var n=0;n<e.lvl;n++)i+=.25;let o=40+i;t.hp=t.hp-o;let d=s-t.hp;e.stamina=e.stamina+1;let l=(new Discord.MessageEmbed).setTitle(`[${e.username}] Ultimate Valkyrie used **Turbo Flash Launch**.`).setDescription(`Valkyrie initiated it's Jet Launch technique, smashing into the stadium walls repeatedly and bouncing off them to increase speed. It combined this with the spring blades in it's layer, allowing it to repel off each one for a increased speed boost and to prevent stamina loss this turn. Valkyrie slashed into the enemy repeatedly with it's immense speed for ${d} damage.`).setColor("#551a8b");a.channel.createMessage({embed:l})}}],this.passives=[{name:"Passive",requires:function(e,t,a){let s;return s=e.stamina<=Math.round(e.maxstamina/100*70)&&e.hp>Math.round(e.maxhp/100*80)},execute:function(e,t,a){t.hp=t.hp-2*e.atk;let s=(new Discord.MessageEmbed).setTitle(`[${e.username}].setColor("#551a8b");a.channel.createMessage({embed:s})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=UltimateValkyrie;
