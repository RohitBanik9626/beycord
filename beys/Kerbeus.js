const Beyblade=require("./Beyblade.js");class Kerbeus extends Beyblade{constructor(e,s){super("Kerbeus","Defense","https://i.ibb.co/Q8p0yvz/kerbeus.png",e,s),this.specials=[{name:"Special",requires:function(e,s,t){return e.sp>3},execute:function(e,s,t){let a=s.hp,i=0;for(var r=0;r<e.lvl;r++)i+=.2;let n=40+i;s.hp=s.hp-n;let o=a-s.hp;e.stamina=e.stamina-2,s.atk=Math.round(s.atk/100*75);let l=(new Discord.MessageEmbed).setTitle(`[${e.username}] Kerbeus used **Chain Defense**.`).setDescription(`Kerbeus utilized the centralized weight distribution of it's Central disc, increasing it's spin velocity as a method of improving it's damage resistance, along with the tabs on it's Defense driver to reduce damage by 25% at the cost of 2 stamina. Kerbeus retaliated by using the chain on it's layer to shred into the opponent for ${o} damage`).setColor("#551a8b");t.channel.createMessage({embed:l})}}],this.passives=[{name:"Passive",requires:function(e,s,t){return!1},execute:function(e,s,t){s.hp=s.hp-28;let a=(new Discord.MessageEmbed).setTitle(`Uh oh, [${e.username}] ${e.bey.bbname||e.bey.name} tried to use it's passive ability but it was not set up properly. 28 damage dealt.`).setDescription("Please report this at the support server.").setColor("#551a8b");t.channel.createMessage({embed:a})},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=[]}}module.exports=Kerbeus;