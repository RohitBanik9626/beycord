const Beyblade=require("./Beyblade.js");class StormSpriggan extends Beyblade{constructor(e,t){super("Storm Spriggan","Balance","https://media.discordapp.net/attachments/736042245442109441/826656330315202590/image2.png?width=601&height=586",e,t),this.specials=[{name:"Upper Launch",requires:function(e,t,a){return e.sp>=4},execute:function(e,t,a){t.hp-=70+.5*e.lvl,t.stability-=22,e.stamina-=1+.006*e.lvl,e.sp-=4,a.add(`[${e.username}] Storm Spriggan used **Upper Launch**!`)}}],this.passives=[{name:"Counter Break",requires:function(e,t,a){return"fight"==t.move&&e.sp>=3},execute:function(e,t,a){switch(Math.floor(2*Math.random())){case 0:t.hp-=t.atk/100*(120+.3*e.lvl),t.atk-=t.atk/100*(50+.2*e.lvl),t.stability-=10,a.add(`[${e.username}] Storm Spriggan used **Counter Break**!`);break;case 1:t.hp-=t.atk/100*(120+.6*e.lvl),t.atk-=t.atk/100*(30+.4*e.lvl),t.stability-=20,a.add(`[${e.username}] Storm Spriggan used **True Counter Break**!`)}e.sp-=3},cd:80},{name:"Determination Resonance",requires:function(e,t,a){return e.hp<=e.maxhp/2},execute:function(e,t,a){e.hp+=e.maxhp/100*10+.1*e.lvl,e.stability+=25,a.add(`[${e.username}] is determined to win! **Determination Resonance** activated!`)},cd:180}],this.modes=[],this.sd=0,this.sdchangable=!1,this.aliases=["Storm Spryzen"]}}module.exports=StormSpriggan;