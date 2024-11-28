/**
 * 文章列表
 */
define([
   'ArticleType',
   'CETWord',
   'english-vocabulary/CET4mini',
   'phrase/Phrase'
], function (
    ArticleType,
    CETWord,
    CET4mini,
    Phrase
) {

   // 字符串 -> []英文单词
   function getWordsArrayFrom(contentStr) {
      let tempArray = contentStr.split('\n');
      let tempArrayAll = [];
      tempArray.forEach(item => {
         let wordArray = item.split('\t');
         tempArrayAll.push(new CETWord(wordArray[0], wordArray[1]));
      })
      return tempArrayAll
   }
   // 字符串 -> []词条
   function getPhraseArrayFrom(contentStr) {
      return contentStr.split('\n');
   }


   return {
      top500: {
         name: '常用前500',
         value: 'top500',
         type: ArticleType.character,
         // content: '的一是了不在有个人这上中大为来我到出要以时和地们得可下对生也子就过能他会多发说而于自之用年行家方后作成开面事好小心前所道法如进着同经分定都然与本还其当起动已两点从问里主实天高去现长此三将无国全文理明日些看只公等十意正外想间把情者没重相那向知因样学应又手但信关使种见力名二处门并口么先位头回话很再由身入内第平被给次别几月真立新通少机打水果最部何安接报声才体今合性西你放表目加常做己老四件解路更走比总金管光工结提任东原便美及教难世至气神山数利书代直色场变记张必受交非服化求风度太万各算边王什快许连五活思该步海指物则女或完马强言条特命感清带认保望转传儿制干计民白住字它义车像反象题却流且即深近形取往系量论告息让决未花收满每华业南觉电空眼听远师元请容她军士百办语期北林识半夫客战院城候单音台死视领失司亲始极双令改功程爱德复切随李员离轻观青足落叫根怎持精送众影八首包准兴红达早尽故房引火站似找备调断设格消拉照布友整术石展紧据终周式举飞片虽易运笑云建谈界务写钱商乐推注越千微若约英集示呢待坐议乎留称品志黑存六造低江念产刻节尔吃势依图共曾响底装具喜严九况跟罗须显热病证刚治绝群市阳确究久除闻答段官政类黄武七支费父统'
         content: '不要以发而前道进同经分定都然与其起动已两点主现将文理些意想间情者没重那向知因样学但关使种见门先位头平被给次部何安接报声才体今合性西你放表目加常做己老件解路更走比总金管光结提任东原便美及教难世至气神山数利书代直色场变记张必受交非服化求风度太各算边什快许连活思该步海指物则女或完强言条特命感清带认保望转传儿制干计民白住字它义车像反象题却流且即深近形取往系量论告息让决未花收满每华南觉空远师元请容她军士百办语期北林识半夫客战院城候单音台死视领失司亲始极双令改功程爱德复切随李员离轻观青足落叫根怎持精送众影八首包准兴达早尽故房引火站似找备调断设格消拉照布友整术石展紧据终周举片虽易运笑建谈界务写钱商乐推注越千微若约英集示呢待坐议乎留称品志黑存造低江念产刻节尔吃势依图共曾响底装具喜严九况跟罗须显热病证刚治绝群市阳确究久除闻答段官政类黄武支费父统'
      },
      mid500: {
         name: '常用中500',
         value: 'mid500',
         type: ArticleType.character,
         // content: '查般斯倒突号树拿克初广奇愿欢希母香破谁致线急古既句京甚仍晚争游龙余护另器细木权星哪苦孩试朝阿队居害独讲错局男差参社换选止际假汉够诉资密案史较环投静宝专修室区料帮衣竟模脸善兵考规联团冷玉施派纪采历顾春责夜画惊银负续吗简章左块索酒值态按陈河巴冲阵境助角户乱呼灵脚继楼景怕停铁异谢否伤兰置医良承福科属围需退基右速适药怀击买素背岁土忙充排价质遇端列印贵疑露哥杀标招血礼弟亮齐穿脑委州某顺省讨尚维板散项状追笔副层沙养读习永草胡济执察归富座雨堂威忽苏船罪敢妇村著食导免温莫掌激慢托胜险寻守波雷沉秀职验靠楚略族藏丽渐刘仅肯担扬盘唐钟级毛营坚松皮供店饭范哈赶吧雪斗效临农味恶烟园烈配杂短卫跳孙曲封抓移顿律卖艺旧朋救防脱翻划迎痛校窗宣乡杨叶警限湖软掉财词压挥超屋秋跑忘馆暗班党宗坏技困登姐预耳席梦朱组旁份禁套亚益探康增诗戏伯晓含劳恩顶君庄谓付田毕纸研虚怪宁替犯灯优您姓例丝盖误架幸隐股毒娘占智佛床米凡介征彩演射祖欲束获舞圣伙梅普借私源镇睡缓升纳织歌宫概野醒夏互积街牌休摇洋败监骨批兄刀网率庭熟创访硬仁菜丁绿牛避阴拍雄秘缺卷姑尼油恐玩释遍握球降虑荣策肉妈迷检伸欧攻练育危厅啊睛摆茶勇判材抱亦妻吸喝趣嘴逐操午吉浪轮默毫冰珠'
         content: '查般斯倒突号树拿克初广奇愿欢希母香破谁致线急古既句京甚仍晚争游龙余护另器细木权星哪苦孩试朝阿队居害独讲错局男差参社换选止际假汉够诉资密案史较环投静宝专修室区料帮衣竟模脸善兵考规联团冷玉施派纪采历顾春责夜画惊银负续吗简章左块索酒值态按陈河巴冲阵境助角户乱呼灵脚继楼景怕停铁异谢否伤兰置医良承福科属围需退基右速适药怀击买素背岁土忙充排价质遇端列印贵疑露哥杀标招血礼弟亮齐穿脑委州某顺省讨尚维板散项状追笔副层沙养读习永草胡济执察归富座雨堂威忽苏船罪敢妇村著食导免温莫掌激慢托胜险寻守波雷沉秀职验靠楚略族藏丽渐仅肯担扬盘唐钟级毛营坚松皮供店饭范哈赶吧雪斗效临农味恶烟园烈配杂短卫跳孙曲封抓移顿律卖艺旧朋救防脱翻划迎痛校窗宣乡杨叶警限湖软掉财词压挥超屋秋跑忘馆暗班党宗坏技困登姐预耳席梦朱组旁份禁套亚益探康增诗戏伯晓含劳恩顶君庄谓付田毕纸研虚怪宁替犯灯优您姓例丝盖误架幸隐股毒娘占智佛床米凡介征彩演射祖欲束获舞圣伙梅普借私源镇睡缓升纳织歌宫概野醒夏互积街牌休摇洋败监骨批兄刀网率庭熟创访硬仁菜丁绿牛避阴拍雄秘缺卷姑尼油恐玩释遍握球降虑荣策肉妈迷检伸欧攻练育危厅啊睛摆茶勇判材抱亦妻吸喝趣嘴逐操午吉浪轮默毫冰珠'
      },
      tail500: {
         name: '常用后500',
         value: 'tail500',
         type: ArticleType.character,
         // content: '鼓阶孔徐固偏陆诸遗爷述帝闭补编巨透弄尤鲁拥录吴墙货弱敌挑宽迹抽忍折输稳皇桌献蒙纷麻洗评挂童尊舍唯博剧乃混弹附迟敬杯鱼控塞剑厚佳测训牙洞淡盛县芳雅革款横累择乘刺载猛逃构赵杜庆途奔虎巧抗针徒圆闪谷绍聚额健诚鲜泪闲均序震仿缘戴婚篇亡奶忠烦赛闹协杰残懂丹柳妹映桥叹愈旅授享暴偷蓝氏寒宜弃丰延辈抢颜赞典冒眉烧厂唱径库川辞伴怒型纯贝票隔穷拜审伦悲柔启减页纵扫伟迫振瑞丈梁洲枪央触予孤缩洛损促番罢宋奋销幕犹锁珍抬陪妙摸峰劲镜沈夺昨哭讯貌谋泰侧贫扶阻贴申岸彼赏版抵泽插迅凭伊潮咱仙符宇肩尝递燕洁拒郎凝净遭仪薄卡末勒乌森诺呀壮忧沿惯丢季企壁惜婆袋朗零辛忆努舒枝凤灭韩胆灰旦孟陷俗绕疾瞧洪甲帐糊泛皆碰吹码奉箱倾胸堆狂仲圈冬餐厉腿尖括佩鬼欣垂跃港骗融撞塔紫荡敏郑赖滑允鸟课暂瓦祥染滚浮粗刑辆狗扑稍秦扎魂岛腾臣琴悉络摩措域冠竹殊豪呆萨旋喊寄悄倍祝剩督旗返召彻宾甘吐乔腰拔幅违详臂尺饮颗涉逼竞培惠亏叔伏唤鸡邻池怨奥侯骑漫拖俊尾恨贯凌兼询碎晨罚铺浓伍宿泉井繁粉绪筑恢匹尘辉魔仰董描距盗渡勤劝莲坦搭挺踪幽截荒恰慧邦颇焦醉废掩签丧灾鼻侵陶肃裁俱磨析奖匆瓶泥拾凉麦钢涌潜隆津搞蛋奈扰耐傅锦播墨偶捕惑飘屈鸣挤毁斜啦污赤慰饰锋覆汤寿跨羊航'
         content: '鼓阶孔徐固偏陆诸遗爷述闭补编巨透弄尤鲁拥录吴墙货弱敌挑宽迹抽忍折输稳皇桌献蒙纷麻洗评挂童尊舍唯博剧乃混弹附迟敬杯鱼控塞剑厚佳测训牙洞淡盛县芳雅革款横累择乘刺载猛逃构赵杜庆途奔虎巧抗针徒圆闪谷绍聚额健诚鲜泪闲均序震仿缘戴婚篇亡奶忠烦赛闹协杰残懂丹柳妹映桥叹愈旅授享暴偷蓝氏寒宜弃丰延辈抢颜赞典冒眉烧厂唱径库川辞伴怒型纯贝票隔穷拜审伦悲柔启减页纵扫伟迫振瑞丈梁洲枪央触予孤缩洛损促番罢宋奋销幕犹锁珍抬陪妙摸峰劲镜沈夺昨哭讯貌谋泰侧贫扶阻贴申岸彼赏版抵泽插迅凭伊潮咱仙符宇肩尝递燕洁拒郎凝净遭仪薄卡末勒乌森诺呀壮忧沿惯丢季企壁惜婆袋朗零辛忆努舒枝凤灭韩胆灰旦孟陷俗绕疾瞧洪甲帐糊泛皆碰吹码奉箱倾胸堆狂仲圈冬餐厉腿尖括佩鬼欣垂跃港骗融撞塔紫荡敏郑赖滑允鸟课暂瓦祥染滚浮粗刑辆狗扑稍秦扎魂岛腾臣琴悉络摩措域冠竹殊豪呆萨旋喊寄悄倍祝剩督旗返召彻宾甘吐乔腰拔幅违详臂尺饮颗涉逼竞培惠亏叔伏唤鸡邻池怨奥侯骑漫拖俊尾恨贯凌兼询碎晨罚铺浓伍宿泉井繁粉绪筑恢匹尘辉魔仰董描距盗渡勤劝莲坦搭挺踪幽截荒恰慧邦颇焦醉废掩签丧灾鼻侵陶肃裁俱磨析奖匆瓶泥拾凉麦钢涌潜隆津搞蛋奈扰耐傅锦播墨偶捕惑飘屈鸣挤毁斜啦污赤慰饰锋覆汤寿跨羊航'
      },
      phrase: {
         name: '常用词条',
         value: 'phrase',
         type: ArticleType.phrase,
         content: Phrase.content,
         getPhraseArray(){ return getPhraseArrayFrom(Phrase.content)}
      },
      hard: {
         name: '易错易忘字',
         value: 'hard',
         type: ArticleType.character,
         content: '腻卸凹凸武戒熬曳舟罐戈撩缺'
      },
      loveYourLife: {
         name: 'Love your life',
         value: 'loveYourLife',
         type: ArticleType.english,
         content: 'However mean your life is, meet it and live it; do not shun it and call it hardnames. It is not so bad as you suppose. It looks poorest when you are richest. The faultfinder will find faults in paradise. Love your life, poor as it is. You may perhaps have some pleasant, thrilling, glorious hours, even in a poorhouse. The setting sun is reflected from the windows of the almshouse as brightly as from the rich man\'s abode; the snow melts before its door as early in the spring. I do not see but a quiet mind may live as contentedly there, and have as cheering thoughts, as in a palace. The town\'s poor seem to me often to live the most independent lives of any. May be they are simply great enough to receive without misgiving. Most think that they are above being supported by the town; but it often happens that they are not above supporting themselves by dishonest means. which should be more disreputable. Cultivate poverty like a garden herb, like sage. Do not trouble yourself much to get new things, whether clothes or friends, turn the old, return to them. Things do not change, we change. Sell your clothes and keep your thoughts.'
      },
      classicSentences: {
         name: 'Classic sentences',
         value: 'classicSentences',
         type: ArticleType.english,
         content: "Love your parents. We are too busy growing up yet we forget that they are already growing old. The moment you think about giving up, think of the reason why you held on so long. I don't wanna be your 'number one' that implies there are a number two and maybe a number three. I want to be your only one. Total umbrella for someone else if he, you're just not for him in the rain. Hold my hand, you won't get lost even with eyes closed. We never really grow up. We only learn how to act in public. Each trauma, is another kind of maturity. Fortune favours the brave. You keep on concentrating on the things you wish you had or things you wish you didn't have and you sort of forget what you do have. Never put your happiness in someone else's hands. Sometimes you have to give up on someone in order to respect yourself. There is a time in life that is full of uneasiness. We have no other choice but to face it. Being single means you're strong and patient enough to wait for someone who deserves your worth. The more you care, the more you have to lose. One of the best things in life is seeing a smile on a person's face and knowing that you put it there. No matter how bad your life may seem in the moment, it will always get betterSometimes, it is better to turn around and leave than to insist on and pretend to be well. Patience with family is love, Patience with others is respect, Patience with self is confidence. Sometimes, the most painful not lose, but get later not happy. For those things I don't talk about, it does not mean I don't know. We both have no idea if we are gonna be together in the end. But one thing's for sure that I'll do everything I can to make it happen."
      },
      cheerUp: {
         name: 'Cheer up',
         value: 'cheerUp',
         type: ArticleType.english,
         content: "That you going to have some ups and you're going to have some downs. Most people gave up on themselves easily. You know that a human spirit is powerful? There is nothing as powerful - its hard to kill the human spirit! Anybody can feel good when they have their health, they bills are paid, they have happy relationships. Anybody can be positive then, anybody can have a large of vision then. Anybody can have a lot of faith under those kind of circumstances. The real challenge of growth, mentally, emotionally and spiritually. Comes when you get knocked down. It takes courage to act. Part of being hungry when you've been defeated. It takes courage to start over again. Fear kills dream. Fear kills hope. Fear put people in the hospital. Fear can age you. Can hold you back from doing something that you know within yourself that you are capable of doing, but it will paralyzed you. At the end of your feelings is nothing, but at the end of every principles is a promise. Behind your little feelings, it might not be absolutely nothing at the end of your little feelings. But behind every principles is a promise. And some of you in your life. The reason why you are not in your goal right now, because you just all about your feelings. All on your feelings, you don't feel like waking up, so who does? Everyday you say 'no' to your dreams, you might be pushing your dreams back a whole six months, a whole year! That one single day, that one day you didn't get up could have pushed your stuff back I don't know how long. Don't allow your emotion to control you. We are emotional but we wanna begin to discipline your emotion. If you don't discipline and contain your emotion, they will use you. You want it and you're going to go all out to have it. Its not going to be easy, when you want to change. Its not easy. If it were in fact easy, everybody would do it. But if you're serious, you'll go all out. I'm in control here. I'm not going to let this get me down, I'm not going to let this destroy me! I'm coming back! And I'll be stronger and better because of it. You have got to make a declaration. That this is what you stand for. You standing up for your dream. You standing up for piece of mind. You standing up for health. Take full responsibility for your life. Accepts where you are and the responsibility that you're going to take yourself where you want to go. You can decide that I am going to live each day as if it were my last. Live your life with passion. With some drive. Decide that you are going to push yourself. The last chapter to your life has not been written yet. And it doesn't matter about what happened yesterday. It doesn't matter about what happened to you, what matter is. What are you going to do about it? This year I will make this goal become a reality. I wont talk about it anymore. I Can, I Can! I CAN! To persevere I think its important for everybody. Don't give up, don't give in. There's always an answer to everything."
      },
      steveJobs: {
         name: 'Steve Jobs\' speech',
         value: 'steveJobs',
         type: ArticleType.english,
         content: "So you have to trust that the dots will somehow connect in your future. You have to trust in something. Your gut, destiny, life, karma, whatever. Because believing that the dots will connect down the road. Will give you the confidence to follow your heart, even when it leads you off the well worn path. And that will make all the difference. Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma: Which is living with the results of other people's thinking. Don't let the noise of other opinions drown out your own inner voices. You've got to find what you love. And that is true for works, as its for your lovers. Your work is gonna fill a large part of your life. And the only way to be truly satisfied. Is to do what you believe is great work. And the only way to do a great work. Is to love what you do. If you haven't found it yet. Keep looking and don't settle. Have the courage to follow your heart and intuition. There somehow, already know. What you truly want to become."
      },
      CET4: {
         name: '四级',
         value: 'CET4',
         type: ArticleType.word,
         content: CET4mini.content,
         getWordsArray() { return getWordsArrayFrom(CET4mini.content)}
      },
      article1: {
         name: '春 - 朱自清',
         value: 'article1',
         type: ArticleType.article,
         content: "盼望着，盼望着，东风来了，春天的脚步近了。一切都像刚睡醒的样子，欣欣然张开了眼。山朗润起来了，水涨起来了，太阳的脸红起来了。小草偷偷地从土里钻出来，嫩嫩的，绿绿的。园子里，田野里，瞧去，一大片一大片满是的。坐着，躺着，打两个滚，踢几脚球，赛几趟跑，捉几回迷藏。风轻悄悄的，草软绵绵的。桃树、杏树、梨树，你不让我，我不让你，都开满了花赶趟儿。红的像火，粉的像霞，白的像雪。花里带着甜味儿；闭了眼，树上仿佛已经满是桃儿、杏儿、梨儿。花下成千成百的蜜蜂嗡嗡地闹着，大小的蝴蝶飞来飞去。野花遍地是：杂样儿，有名字的，没名字的，散在草丛里，像眼睛，像星星，还眨呀眨的。“吹面不寒杨柳风”，不错的，像母亲的手抚摸着你。风里带来些新翻的泥土的气息，混着青草味儿，还有各种花的香，都在微微润湿的空气里酝酿。鸟儿将窠巢安在繁花嫩叶当中，高兴起来了，呼朋引伴地卖弄清脆的喉咙，唱出宛转的曲子，与轻风流水应和着。牛背上牧童的短笛，这时候也成天在嘹亮地响。雨是最寻常的，一下就是三两天。可别恼。看，像牛毛，像花针，像细丝，密密地斜织着，人家屋顶上全笼着一层薄烟。树叶子却绿得发亮，小草也青得逼你的眼。傍晚时候，上灯了，一点点黄晕的光，烘托出一片安静而和平的夜。乡下去，小路上，石桥边，有撑起伞慢慢走着的人；还有地里工作的农夫，披着蓑，戴着笠的。他们的草屋，稀稀疏疏的，在雨里静默着。天上风筝渐渐多了，地上孩子也多了。城里乡下，家家户户，老老小小，他们也赶趟儿似的，一个个都出来了。舒活舒活筋骨，抖擞抖擞精神，各做各的一份事去。“一年之计在于春”，刚起头儿，有的是工夫，有的是希望。春天像刚落地的娃娃，从头到脚都是新的，他生长着。春天像小姑娘，花枝招展的，笑着，走着。春天像健壮的青年，有铁一般的胳膊和腰脚，他领着我们上前去。"
      },
      article2: {
         name: '爱怕什么 - 毕淑敏',
         value: 'article2',
         type: ArticleType.article,
         content: "爱挺娇气挺笨挺糊涂的，有很多怕的东西。爱怕撒谎。当我们不爱的时候，假装爱，是一件痛苦而倒霉的事情。假如别人识破，我们就成了虚伪的坏蛋。你骗了别人的钱，可以退赔，你骗了别人的爱，就成了无赦的罪人。假如别人不曾识破，那就更惨。除非你已良心丧尽，否则便要承诺爱的假象，那心灵深处的绞杀，永无宁日。爱怕沉默。太多的人，以为爱到深处是无言。其实，爱是很难描述的一种情感，需要详尽的表达和传递。爱需要行动，但爱绝不仅仅是行动，或者说语言和温情的流露，也是行动不可或缺的部分。我曾经和朋友们做过一个测验，让一个人心中充满一种独特的感觉，然后用表情和手势做出来，让其他不知底细的人猜测他的内心活动。出谜和解谜的人都欣然答应，自以为百无一失。结果，能正确解码的人少得可怜。当你自觉满脸爱意的时候，他人误读的结论千奇百怪。比如认为那是——矜持、发呆、忧郁……一位妈妈，胸有成竹地低下头，做出一个表情。我和另一位女士愣愣地看着她，相互对视了一下，异口同声地说：你要自杀！她愤怒地瞪着我们说，岂有此理！你们怎么那么笨？！我此刻心头正充盈温情！愚笨的我俩挺惭愧的，但没等我们道歉的话出口，那妈妈恍然大悟道：原来是这样！怪不得我每次这样看着儿子的时候，他会不安地说：妈妈，我又做错了什么？你又在发什么愁？爱是那样的需要表达，就像耗竭太快的电器，每日都是充电。重复而新鲜地描述爱意吧，它是一种勇敢和智慧的艺术。爱怕犹豫。爱是羞怯和机灵的，一不留神它就吃了鱼饵闪去。爱的起初往往是柔弱无骨的碰撞和翩若惊鸿的引力。在爱的极早期，就敏锐地识别自己的真爱，是一种能力更是一种果敢。爱一桩事业，就奋不顾身地投入。爱一个人，就斩钉截铁地追求。爱一个民族，就挫骨扬灰地献身。爱一桩事业，就呕心沥血。爱一种信仰，就至死不悔。爱怕模棱两可。要么爱这一个，要么爱那一个，遵循一种全或无的原则。爱，就铺天盖地，不遗下一个角落。不爱就快刀断麻，金盆洗手。迟疑延宕是对他人和自己的不负责任。爱怕沙上建塔。那样的爱，无论多么玲珑剔透，潮起潮落，遗下的只是无珠的蚌壳和断根的水草。爱怕无源之水。沙漠里的河啊，即便不是海市蜃楼，波光粼粼又能坚持几天？当沙暴袭来的时候，最先干涸的正是泪水积聚的咸水湖。爱怕假冒伪劣。真的爱也许不那么外表光滑，色彩艳丽，没有精致的包装，没有夸口的广告，但它是有内在的质量保证。真爱并非不会发生短路与损伤，但是它有保修单，那是两颗心的承诺，写在天地间。爱是一个有机整体，怕分割。好似钢化玻璃，据说坦克轧上也不会碎，可惜它的弱点是宁折不弯，脆不可裁。一旦破碎，就裂成了无数蚕豆大的渣滓，流淌一地，闪着凄楚的冷光，再也无法复原。爱的脚力不健，怕远。距离会漂淡彼此相思的颜色，假如有可能，就靠得近一点，再近一点，直到水乳交融亲密无间。万万不要人为地以分离考验它的强度，那你也许后悔莫及。尽量地创造并肩携手天人合一的时光。爱像仙人掌类的花朵，怕转瞬即逝，爱可以不朝朝暮暮，爱可以不卿卿我我，但爱要铁杵磨成针，恒远久长。爱怕平分秋色，在爱的钢丝上不能学高空王子，不宜做危险动作。即使你摇摇晃晃，一时不曾跌落，也是偶然性在救你，任何一阵旋风，都可能使你飘然坠毁。最明智最保险的是赶快从高空回到平地，在泥土上留下深深脚印。爱怕刻意求工。爱可以披头散发，爱可以荆钗布裙，爱可以粗茶淡饭，爱可以餐风宿露。只要一腔真情，爱就有了依傍。爱的时候，眼珠近视散光，只爱看江山如画。耳是聋的，只爱听莺歌燕语。爱让人片面，爱让人轻信。爱让人智商下降，爱让人一厢情愿。爱最怕的，是腐败。爱需要天天注入激情的活力，但又如深潭，波澜不惊。说了爱的这许多毛病，爱岂不一无是处？爱是世上最坚固的记忆金属，高温下不融化，冰冻不脆裂。造一艘爱的航天飞机，你就可以驾驶着它，遨游九天。爱是比天空和海洋更博大的宇宙，在那个独特的穹隆中，有着亿万颗爱的星斗，闪烁光芒。一粒小行星划下，就是爱的雨丝，缀起满天清光。爱是神奇的化学试剂，能让苦难变得香甜，能让一分钟驻成永远。能让平凡的容颜貌若天仙，能让喃喃细语压过雷鸣电闪。爱是孕育万物的草原。在这里，能生长出能力、勇气、智慧、才干、友谊，关怀……所有人间的美德和属于大自然的美丽天分，爱都会赠予你。在生和死之间，是独特的人生旅程。拥有一份真爱，就是照耀人生温暖的灯。"
      },
      article3: {
         name: '秋天的怀念 - 史铁生',
         value: 'article3',
         type: ArticleType.article,
         content: "双腿瘫痪后，我的脾气变得暴怒无常。望着望着天上北归的雁阵，我会突然把面前的玻璃砸碎；听着听着李谷一甜美的歌声，我会猛地把手边的东西摔向四周的墙壁。母亲就悄悄地躲出去，在我看不见的地方偷偷地听着我的动静。当一切恢复沉寂，她又悄悄地进来，眼边红红的，看着我。“听说北海的花儿都开了，我推着你去走走。”她总是这么说。母亲喜欢花，可自从我的腿瘫痪后，她侍弄的那些花都死了。“不，我不去！”我狠命地捶打这两条可恨的腿，喊着：“我活着有什么劲！”母亲扑过来抓住我的手，忍住哭声说：“咱娘儿俩在一块儿，好好儿活，好好儿活……”可我却一直都不知道，她的病已经到了那步田地。后来妹妹告诉我，她常常肝疼得整宿整宿翻来覆去地睡不了觉。那天我又独自坐在屋里，看着窗外的树叶“唰唰啦啦”地飘落。母亲进来了，挡在窗前：“北海的菊花开了，我推着你去看看吧。”她憔悴的脸上现出央求般的神色。“什么时候？”“你要是愿意，就明天？”她说。我的回答已经让她喜出望外了。“好吧，就明天。”我说。她高兴得一会坐下，一会站起：“那就赶紧准备准备。”“唉呀，烦不烦？几步路，有什么好准备的！”她也笑了，坐在我身边，絮絮叨叨地说着：“看完菊花，咱们就去‘仿膳’，你小时候最爱吃那儿的豌豆黄儿。还记得那回我带你去北海吗？你偏说那杨树花是毛毛虫，跑着，一脚踩扁一个……”她忽然不说了。对于“跑”和“踩”一类的字眼儿。她比我还敏感。她又悄悄地出去了。她出去了。就再也没回来。邻居们把她抬上车时，她还在大口大口地吐着鲜血。我没想到她已经病成那样。看着三轮车远去，也绝没有想到那竟是永远的诀别。邻居的小伙子背着我去看她的时候，她正艰难地呼吸着，像她那一生艰难的生活。别人告诉我，她昏迷前的最后一句话是：“我那个有病的儿子和我那个还未成年的女儿……”又是秋天，妹妹推我去北海看了菊花。黄色的花淡雅、白色的花高洁、紫红色的花热烈而深沉，泼泼洒洒，秋风中正开得烂漫。我懂得母亲没有说完的话。妹妹也懂。我俩在一块儿，要好好儿活……"
      },
      article4: {
         name: '增广贤文 - （上）',
         value: 'article4',
         type: ArticleType.article,
         content: "昔时贤文，诲汝谆谆。集韵增广，多见多闻。观今宜鉴古，无古不成今。知己知彼，将心比心。酒逢知己饮，诗向会人吟。相识满天下，知心能几人？相逢好似初相识，到老终无怨恨心。近水知鱼性，近山识鸟音。易涨易退山溪水，易反易复小人心。运去金成铁，时来铁似金。读书须用意，一字值千金。逢人且说三分话，未可全抛一片心。有意栽花花不发，无心插柳柳成荫。画龙画虎难画骨，知人知面不知心。钱财如粪土，仁义值千金。流水下滩非有意，白云出岫本无心。当时若不登高望，谁信东流海洋深？路遥知马力，日久见人心。两人一般心，无钱堪买金；一人一般心，有钱难买针。相见易得好，久住难为人。马行无力皆因瘦，人不风流只为贫。饶人不是痴汉，痴汉不会饶人。是亲不似亲，非亲却似亲。美不美，故乡水；亲不亲，故乡人。莺花犹怕春光老，岂可教人枉度春？相逢不饮空归去，洞口桃花也笑人。红粉佳人休使老，风流浪子莫教贫。在家不会迎宾客，出门方知少主人。黄芩无假，阿魏无真。客来主不顾，自是无良宾。良宾方不顾，应恐是痴人。贫居闹市无人问，富在深山有远亲。谁人背后无人说，哪个人前不说人？有钱道真语，无钱语不真。不信但看筵中酒，杯杯先劝有钱人。闹市挣钱，静处安身。来如风雨，去似微尘。长江后浪推前浪，世上新人赶旧人。近水楼台先得月，向阳花木早逢春。古人不见今时月，今月曾经照古人。先到为君，后到为臣。莫道君行早，更有早行人。莫信直中直，须防仁不仁。山中有直树，世上无直人。只恨枝无叶，莫怨太阳偏。大家都是命，半点不由人。一年之计在于春，一日之计在于晨。一家之计在于和，一生之计在于勤。责人之心责己，恕己之心恕人。守口如瓶，防意如城。宁可人负我，切莫我负人。再三须慎意，第一莫欺心。虎身犹可近，人毒不堪亲。来说是非者，便是是非人。远水难救近火，远亲不如近邻。有酒有肉多兄弟，急难何曾见一人？人情似纸张张薄，世事如棋局局新。山中自有千年树，世上难逢百岁人。力微休负重，言轻莫劝人。无钱莫入众，遭难莫寻亲。平生不做皱眉事，世上应无切齿人。士者国之宝，儒为席上珍。若要断酒法，醒眼看醉人。求人须求大丈夫，济人须济急时无。久住令人贱，频来亲也疏。酒中不语真君子，财上分明大丈夫。出家如初，成佛有余。积金千两，不如明解经书。养子不教如养驴，养女不教如养猪。有田不耕仓廪虚，有书不读子孙愚。仓廪虚兮岁月乏，子孙愚兮礼仪疏。听君一席话，胜读十年书。人不通今古，马牛如襟裾。茫茫四海人无数，哪个男儿是丈夫？白酒酿成迎宾客，黄金散尽为收书。救人一命，胜造七级浮屠。城门失火，殃及池鱼。庭前生瑞草，好事不如无。欲求生富贵，须下死工夫。百年成之不足，一旦坏之有余。人心似铁，官法如炉。善化不足，恶化有余。水至清则无鱼，人太急则无智。智者减半，愚者全无。在家由父，出嫁从夫。痴人畏妇，贤女敬夫。是非终日有，不听自然无。竹篱茅舍风光好，道院僧房终不如。宁可正而不足，不可邪而有余。宁可信其有，不可信其无。命里有时终须有，命里无时莫强求。道院迎仙客，书堂隐相儒。庭栽栖凤竹，池养化龙鱼。结交须胜己，似我不如无。但看三五日，相见不如初。人情似水分高下，世事如云任卷舒。会说说都是，不会说无理。磨刀恨不利，刀利伤人指；求财恨不多，财多害自己。知足常足，终身不辱；知止常止，终身不耻。有福伤财，无福伤己。差之毫厘，失之千里。若登高必自卑，若涉远必自迩。三思而行，再思可矣。动口不如亲为，求人不如求己。小时是兄弟，长大各乡里。嫉财莫嫉食，怨生莫怨死。人见白头嗔，我见白头喜。多少少年郎，不到白头死。墙有缝，壁有耳。好事不出门，坏事传千里。若要人不知，除非己莫为。为人不做亏心事，半夜敲门心不惊。贼是小人，智过君子。君子固穷，小人穷斯溢矣。富贵多忧，贫穷自在。不以我为德，反以我为仇。宁可直中取，不可曲中求。人无远虑，必有近忧。知我者谓我心忧，不知我者谓我何求？晴天不肯去，直待雨淋头。成事莫说，覆水难收。是非只为多开口，烦恼皆因强出头。忍得一时之气，免得百日之忧。近来学得乌龟法，得缩头时且缩头。惧法朝朝乐，欺公日日忧。人生一世，草长一春。黑发不知勤学早，转眼便是白头翁。月过十五光明少，人到中年万事休。儿孙自有儿孙福，莫为儿孙做马牛。人生不满百，常怀千岁忧。今朝有酒今朝醉，明日愁来明日忧。路逢险处须回避，事到临头不自由。人贫不语，水平不流。一家养女百家求，一马不行百马忧。有花方酌酒，无月不登楼。三杯通大道，一醉解千愁。深山毕竟藏老虎，大海终须纳细流。惜花须检点，无月不梳头。大抵选她肌骨好，不搽红粉也风流。受恩深处宜先退，得意浓时便可休。莫待是非来入耳，从前恩爱反为仇。留得五湖明月在，不愁无处下金钩。休别有鱼处，莫恋浅滩头。去时终须去，再三留不住。忍一句，息一怒，饶一着，退一步。生不认魂，死不认尸。父母恩深终有别，夫妻义重也分离。人生似鸟同林宿，大难来时各自飞。人善被人欺，马善被人骑。人无横财不富，马无夜草不肥。人恶人怕天不怕，人善人欺天不欺。善恶到头终有报，只盼早到与来迟。黄河尚有澄清日，岂能人无得运时？得宠思辱，居安思危。念念有如临敌日，心心常似过桥时。英雄行险道，富贵似花枝。年青莫道春光好，只怕秋来有冷时。送君千里，终有一别。但将冷眼观螃蟹，看它横行到几时！见事莫说，问事不知。闲事莫管，无事早归。假缎染就真红色，也被旁人说是非。善事可做，恶事莫为。许人一物，千金不移。龙生龙子，虎生虎儿。龙游浅水遭虾戏，虎落平原被犬欺。一举首登龙虎榜，十年身到凤凰池。十年寒窗无人问，一举成名天下知。酒债寻常处处有，人生七十古来稀！养儿防老，积谷防饥。鸡豚狗彘之畜，无失其时，数口之家，可以无饥矣。常将有日思无日，莫把无时当有时。树欲静而风不止，子欲养而亲不待。时来风送滕王阁，运去雷轰荐福碑。入门休问荣枯事，且看容颜便得知。官清司吏瘦，神灵庙主肥。息却雷霆之怒，罢却虎豹之威。饶人算知本，输人算知机。好言难得，恶语易施。一言既出，驷马难追。择其善者而从之，其不善者而改之。少时不努力，老大徒伤悲。人有善愿，天必佑之。莫饮卯时酒，昏昏醉到酉。莫骂酉时妻，一夜受孤凄。种麻得麻，种豆得豆。天眼恢恢，疏而不漏。做官莫向前，作客莫在后。宁添一斗，莫添一口。螳螂捕蝉，岂知黄雀在后？不求金玉重重贵，但愿儿孙个个贤。一日夫妻，百世姻缘。百世修来同船渡，千世修来共枕眠。杀人一万，自损三千。枯木逢春犹再发，人无两度再少年。未晚先投宿，鸡鸣早看天。将相场中堪走马，公候肚内好撑船。富人思来年，穷人想眼前。世上若要人情好，赊去物品莫取钱。生死有命，富贵在天。击石原有火，不击乃无烟。人学始知道，不学亦徒然。莫笑他人老，终须还到老。但能守本分，终身无烦恼。善有善报，恶有恶报，不是不报，时候未到。人而无信，不须礼之。一人道好，千人传之。若要凡事好，须先问三老。君子爱财，取之有道。贞妇爱色，纳之以礼。年年防饥，夜夜防盗。学者是好，不学不好。学者如禾如稻，不学如草如蒿。遇饮酒时须防醉，得高歌处且高歌。因风吹火，用力不多。不因渔夫引，怎能见波涛？无求到处人情好，不饮任他酒价高。知事少时烦恼少，识人多处是非多。进山不怕虎伤人，只怕人情两面刀。强中更有强中手，恶人须用恶人磨。会使不在家富豪，风流不用衣着佳。光阴似箭，日月如梭。天时不如地利，地利不如人和。黄金未为贵，安乐值钱多。世上万般皆下品，思量惟有读书高。世间好语书谈尽，天下名山僧占多。为善最乐，作恶难逃。好人相逢，恶人回避。羊有跪乳之恩，鸦有反哺之情。你急他未急，人闲心不闲。隐恶扬善，执其两端。妻贤夫祸少，子孝父心宽。已覆之水，收之实难。人生知足时常足，人老偷闲且是闲。处处绿杨堪系马，家家有路通长安。见者易，学者难。厌静还思喧，嫌喧又忆山。自从心定后，无处不安然。莫将容易得，便作等闲看。用心计较般般错，退后思量事事宽。道路各别，养家一般。由俭入奢易，从奢入俭难。知音说与知音听，不是知音莫与谈。点石化为金，人心犹未足。信了赌，卖了屋。他人观花，不涉你目。他人碌碌，不涉你足。谁人不爱子孙贤，谁人不爱千钟粟。莫把真心空计较，五行不是这题目。书到用时方恨少，事非经过不知难。行事存德，莫问前程。河狭水紧，人急智生。明知山有虎，莫向虎山行。路不行不到，事不为不成。无钱方断酒，临老才读经。点塔七层，不如暗处一灯。万事劝人休瞒昧，举头三尺有神明。但存方寸地，留与子孙耕。灭却心头火，剔起佛前灯。惺惺多不足，蒙蒙作公卿。众星朗朗，不如孤月独明。兄弟相害，不如自生。合理可作，小利不争。牡丹花好空入目，枣花虽小结实多。欺老莫欺小，欺人心不明。勤奋耕锄收地利，他时饱暖谢苍天。得忍且忍，得耐且耐，不忍不耐，小事成灾。相论逞英豪，家计渐渐退。贤妇令夫贵，恶妇令夫败。一人有庆，兆民厨赖。人老心未老，人穷计莫穷。人无千日好，花无百日红。黄蜂一口针，橘子两边分。世间通恨事，最毒淫妇心。杀人可恶，情理不容。乍富不知新受用，乍贫难改旧家风。座上客常满，杯中酒不空。屋漏又遭连夜雨，行船偏遇打头风。笋因落箨方成竹，鱼为奔波始化龙。记得少年骑竹马，转眼又是白头翁。礼义生于富足，盗贼出于贫穷。天上众星皆拱北，世间无水不朝东。士为知己者死，女为悦己者容。色即是空，空即是色。君子安贫，达人知命。良药苦口利于病，忠言逆耳利于行。顺天者昌，逆天者亡。有缘千里来相会，无缘对面不相逢。有福者昌，无福者亡。人为财死，鸟为食亡。夫妻相和好，琴瑟与笙簧。红粉易妆娇态女，无钱难作好儿郎。有子之人贫不久，无儿无女富不长。善必寿老，恶必早亡。爽口食多偏作病，快心事过恐遭殃。富贵定言要依分，贫穷不必枉思量。画水无风空作浪，绣花虽好不生香。贪他一斗米，失却半年粮。争他一脚豚，反失一只羊。龙归晚洞云犹湿，麝过春山草木香。人生只会量人短，何不回头把自量？见善如不及，见恶如探汤。人穷志短，马瘦毛长。自家心里急，他人未知忙。贫无达士将金赠，病有高人说药方。秋来满山多秀色，春来无处不花香。凡人不可貌相，海水不可斗量。清清之水，为土所防。济济之士，为酒所伤。蒿草之下，或有兰香。茅茨之屋，或有公王。无限朱门生饿殍，几多白屋出公卿。酒里乾坤大，壶中日月长。拂石坐来春衫冷，踏花归去马蹄香。万事前身定，浮生空自忙。叫月子规喉舌冷，宿花蝴蝶梦魂香。一言不中，千言不用。一人传虚，百人传实。万金良药，不如无疾。世事如明镜，前程似暗漆。君子怀刑，小人怀惠。良田万顷，日食一升。大厦千间，夜眠八尺。千经万典，孝义为先。天上人间，方便第一。一字入公门，九牛拔不出。衙门八字开，有理无钱莫进来。欲求天下事，须用世间财。富从升合起，贫因不算来。近河不得枉使水，近山不得枉烧柴。家中无才子，官从何处来？慈不掌兵，义不掌财。一夫当关，万夫莫开。万事不由人计较，一生都是命安排。白云本是无心物，却被清风引出来。慢行急行，逆取顺取。命中只有如许财，丝毫不可有闪失。人间私语，天闻若雷。暗室亏心，神目如电。一毫之恶，劝人莫作。一毫之善，与人方便。亏人是祸，饶人是福，乘除加减，报应甚速。圣贤言语，神钦鬼伏。人各有心，心各有见。口说不如身逢，耳闻不如目见。见人富贵生欢喜，莫把心头似火烧。养兵千日，用在一时。国清才子贵，家富小儿娇。利刀割肉伤可愈，恶语伤人恨不消。公道世间为白发，贵人头上不曾饶。有才堪出众，无衣懒出门。为官须作相，及第必争先。茵从地发，树向枝分。宅里燃火，烟气成云。以直报怨，知恩报恩。红颜今日虽欺我，白发他时不放君。借问酒家何处有，牧童遥指杏花村。父子和而家不退，兄弟和而家不分。一片云间不相识，三千里外却逢君。官有正条，民有私约。争得猫儿，失却牛脚。愚者千虑，必有一得，智者千虑，必有一失。始吾于人也，听其言而信其行。今吾于人也，听其言而观其行。哪个梳头无乱发，情人眼里出西施。珠沉渊而川媚，玉韫石而山辉。夕阳无限好，只恐不多时。久旱逢甘霖，他乡遇故知；洞房花烛夜，金榜题名时。惜花春起早，爱月夜眠迟。掬水月在手，弄花香满衣。桃红李白蔷薇紫，问着东君总不知。国乱思良将，家贫思良妻。池塘积水防秋旱，田地深耕足养家。教子教孙须教义，栽桑栽柘少栽花。休念故乡生处好，受恩深处便为家。根深不怕树摇动，树正不愁月影斜。奉劝君子，各宜守己。只此呈示，万无一失。"
      },
      article5: {
         name: '增广贤文 - （下）',
         value: 'article5',
         type: ArticleType.article,
         content: "前人俗语，言浅理深。补遗增广，集成书文。世上无难事，只怕不专心。成人不自在，自在不成人；金凭火炼方知色，与人交财便知心。乞丐无粮，懒惰而成。勤俭为无价之宝，节粮乃众妙之门。省事俭用，免得求人。量大祸不在，机深祸亦深。善为至宝深深用，心作良田世世耕。群居防口，独坐防心。体无病为富贵，身平安莫怨贫。败家子弟挥金如土，贫家子弟积土成金。富贵非关天地，祸福不是鬼神。安分贫一时，本分终不贫。不拜父母拜干亲，弟兄不和结外人。人过留名，雁过留声。择子莫择父，择亲莫择邻。爱妻之心是主，爱子之心是亲。事从根起，藕叶连心。祸与福同门，利与害同城。清酒红人脸，财帛动人心！宁可荤口念佛，不可素口骂人。有钱能说话，无钱话不灵。岂能尽如人意？但求不愧吾心。不说自己井绳短，反说他人箍井深。恩爱多生病，无钱便觉贫。只学斟酒意，莫学下棋心。孝莫假意，转眼便为人父母。善休望报，回头只看汝儿孙！口开神气散，舌出是非生！弹琴费指甲，说话费精神。千贯买田，万贯结邻。人言未必犹尽，听话只听三分。隔壁岂无耳，窗外岂无人？财可养生须注意，事不关己不劳心。酒不护贤，色不护病；财不护亲，气不护命！一日不可无常业，安闲便易起邪心！炎凉世态，富贵更甚于贫贱；嫉妒人心，骨肉更甚于外人！瓜熟蒂落，水到渠成。人情送匹马，买卖不饶针！过头饭好吃，过头话难听！事多累了自己，田多养了众人。怕事忍事不生事自然无事；平心静心不欺心何等放心！天子至尊不过于理，在理良心天下通行。好话不在多说，有理不在高声！一朝权在手，便把令来行。甘草味甜人可食，巧言妄语不可听。当场不论，过后枉然。贫莫与富斗，富莫与官争！官清难逃猾吏手，衙门少有念佛人！家有千口，主事一人。父子竭力山成玉，弟兄同心土变金。当事者迷，旁观者清。怪人不知理，知理不怪人。未富先富终不富，未贫先贫终不贫。少当少取，少输当赢！饱暖思淫欲，饥寒起盗心！蚊虫遭扇打，只因嘴伤人！欲多伤神，财多累心！布衣得暖真为福，千金平安即是春。家贫出孝子，国乱显忠臣！宁做太平犬，莫做离乱人！人有几等，官有几品。理不卫亲，法不为民。自重者然后人重，人轻者便是自轻。自身不谨，扰乱四邻。快意事过非快意，自古败名因败事。伤身事莫做，伤心话莫说。小人肥口，君子肥身。地不生无名之辈，天不生无路之人。一苗露水一苗草，一朝天子一朝臣。读书未见书如逢良友，见人读书如逢故人。福满须防有祸，凶多料必无争。不怕三十而死，只怕死后无名。但知江湖者，都是薄命人。不怕方中打死人，只知方中无好人。说长说短，宁说人长莫说短；施恩施怨，宁施人恩莫施怨。育林养虎，虎大伤人。冤家抱头死，事要解交人。卷帘归乳燕，开扇出苍蝇。爱鼠常留饭，怜蛾灯罩纱。人命在天，物命在人。奸不通父母，贼不通地邻。盗贼多出赌博，人命常出奸情。治国信谗必杀忠臣，治家信谗必疏其亲。治国不用佞臣，治家不用佞妇。好臣一国之宝，好妇一家之珍。稳的不滚，滚的不稳。儿不嫌母丑，狗不嫌家贫。君子千钱不计较，小人一钱恼人心。人前显贵，闹里夺争。要知江湖深，一个不做声。知止自当出妄想，安贫须是禁奢心。初入行业，三年事成；初吃馒头，三年口生。家无生活计，坐吃如山崩。家有良田万顷，不如薄艺在身；艺多不养家，食多嚼不赢。命中只有八合米，走遍天下不满升。使心用心，反害自身。国家无空地，世上无闲人。妙药难医怨逆病，混财不富穷命人。耽误一年春，十年补不清；人能处处能，草能处处生。会打三班鼓，也要几个人。人不走不亲，水不打不浑。三贫三富不到老，十年兴败多少人！买货买得真，折本折得轻。不怕问到，只怕倒问。人强不如货强，价高不如口便。会买买怕人，会卖卖怕人。只只船上有梢公，天子足下有贫亲。既知莫望，不知莫向。在一行，练一行。穷莫失志，富莫癫狂。天欲令其灭亡，必先让其疯狂。梢长人胆大，梢短人心慌。隔行莫贪利，久炼必成钢。瓶花虽好艳，相看不耐长。早起三光，迟起三慌。未来休指望，过去莫思量；时来遇好友，病去遇良方。布得春风有夏雨，哈得秋风大家凉。晴带雨伞，饱带饥粮。满壶全不响，半壶响叮当。久利之事莫为，众争之地莫往。老医迷旧疾，朽药误良方；该在水中死，不在岸上亡。舍财不如少取，施药不如传方。倒了城墙丑了县官，打了梅香丑了姑娘。燕子不进愁门，耗子不钻空仓。苍蝇不叮无缝蛋，谣言不找谨慎人。一人舍死，万人难当。人争一口气，佛争一炷香。门为小人而设，锁乃君子之防。舌咬只为揉，齿落皆因眶。硬弩弦先断，钢刀刃自伤。贼名难受，龟名难当。好事他人未见讲，错处他偏说得长。男子无志纯铁无钢，女子无志烂草无瓤。生男欲得成龙犹恐成獐，生女欲得成凤犹恐成虎。养男莫听狂言，养女莫叫离母。男子失教必愚顽，女子失教定粗鲁。生男莫教弓与弩，生女莫教歌与舞。学成弓弩沙场灾，学成歌舞为人妾。财交者密，财尽者疏。婚姻论财，夫妻之道。色娇者亲，色衰者疏。少实胜虚，巧不如拙。百战百胜不如无争，万言万中不如一默。有钱不置怨逆产，冤家宜解不宜结。近朱者赤，近墨者黑。一个山头一只虎，恶龙难斗地头蛇。出门看天色，进门看脸色。商贾买卖如施舍，买卖公平如积德。天生一人，地生一穴。家无三年之积不成其家，国无九年之积不成其国。男子有德便是才，女子无才便是德。有钱难买子孙贤，女儿不请上门客。男大当婚女大当嫁，不婚不嫁惹出笑话。谦虚美德，过谦即诈。自己跌倒自己爬，望人扶持都是假。人不知己过，牛不知力大。一家饱暖千家怨，一物不见赖千家。当面论人惹恨最大，是与不是随他说吧！谁人做得千年主，转眼流传八百家。满载芝麻都漏了，还在水里捞油花！皇帝坐北京，以理统天下。五百年前共一家，不同祖宗也同华！学堂大如官厅，人情大过王法。找钱犹如针挑土，用钱犹如水推沙！害人之心不可有，防人之心不可无！不愁无路，就怕不做。须向根头寻活计，莫从体面下功夫！祸从口出，病从口入。药补不如肉补，肉补不如养补。思虑之害甚于酒色，日日劳力上床呼疾。人怕不是福，人欺不是辱。能言不是真君子，善处方为大丈夫！为人莫犯法，犯法身无主。姊妹同肝胆，弟兄同骨肉。慈母多误子，悍妇必欺夫！君子千里同舟，小人隔墙易宿。文钱逼死英雄汉，财不归身恰是无。妻子如衣服，弟兄似手足。衣服补易新，手足断难续。盗贼怨失主，不孝怨父母。一时劝人以口，百世劝人以书。我不如人我无其福，人不如我我常知足！捡金不忘失金人，三两黄铜四两福。因祸得福，求赌必输。一言而让他人之祸，一忿而折平生之福。天有不测风云，人有旦夕祸福。不淫当斋，淡饱当肉。缓步当车，无祸当福。男无良友不知己之有过，女无明镜不知面之精粗。事非亲做，不知难处。十年易读举子，百年难淘江湖！积钱不如积德，闲坐不如看书。思量挑担苦，空手做是福。时来易借银千两，运去难赊酒半壶。天晴打过落雨铺，少时享过老来福。与人方便自己方便，一家打墙两家好看。当面留一线，过后好相见。入门掠虎易，开口告人难。手指要往内撇，家丑不可外传。浪子出于祖无德，孝子出于前人贤。货离乡贵，人离乡贱。树挪死，人挪活。在家千日好，出门处处难。三员长者当官员，几个明人当知县？明人自断，愚人官断。人怕三见面，树怕一墨线。村夫硬似铁，光棍软如棉。不是撑船手，怎敢拿篙竿！天下礼仪无穷，一人知识有限。一人不得二人计，宋江难结万人缘。家有三亩田，不离衙门前，乡间无强汉，衙门就饿饭。人人依礼仪，天下不设官。衙门钱，眼睛钱；田禾钱，千万年。诗书必读，不可做官。为人莫当官，当官皆一般。换了你我去，恐比他还贪。官吏清廉如修行，书差方便如行善。靠山吃山，种田吃田。吃尽美味还是盐，穿尽绫罗还是棉。一夫不耕，全家饿饭，一女不织，全家受寒。金银到手非容易，用时方知来时难。先讲断，后不乱，免得藕断丝不断。听人劝，得一半。不怕慢，只怕站。逢快莫赶，逢贱莫懒。谋事在人，成事在天！长路人挑担，短路人赚钱。宁卖现二，莫卖赊三。赚钱往前算，折本往后算。小小生意赚大钱，七十二行出状元。自己无运至，却怨世界难。胆大不如胆小，心宽甚如屋宽。妻贤何愁家不富，子孙何须受祖田。是儿不死，是财不散。财来生我易，我去生财难。十月滩头坐，一日下九滩。结交一人难上难，得罪一人一时间。借债经商，卖田还债；赊钱起屋，卖屋还钱。修起庙来鬼都老，拾得秤来姜卖完。不嫖莫转，不赌莫看。节食以去病，少食以延年。豆腐多了是包水，梢公多了打烂船。无口过是，无眼过难。无身过易，无心过难。不会凫水怨河湾，不会犁田怨枷担。他马莫骑，他弓莫挽。要知心腹事，但听口中言。宁在人前全不会，莫在人前会不全。事非亲见，切莫乱谈。打人莫打脸，骂人莫骂短。好言一句三冬暖，话不投机六月寒。人上十口难盘，帐上万元难还。放债如施，收债如讨。告状讨钱，海底摸盐。衙门深似海，弊病大如天。银钱莫欺骗，牛马不好变。好汉莫被人识破，看破不值半文钱。狗咬对头人，雷打三世冤。不卖香烧无剩钱，井水不打不满边。事宽则园，太久则偏。高人求低易，低人求高难。有钱就是男子汉，无钱就是汉子难。人上一百，手艺齐全。难者不会，会者不难。生就木头造就船，砍的没得车的圆。心不得满，事不得全。鸟飞不尽，话说不完。人无喜色休开店，事不遂心莫怨天。选婿莫选田园，选女莫选嫁奁。红颜女子多薄命，福人出在丑人边。人将礼义为先，树将花果为园。临危许行善，过后心又变。天意违可以人回，命早定可以心挽。强盗口内出赦书，君子口中无戏言。贵人语少，贫子话多。快里须斟酌，耽误莫迟春。读过古华佗，不如见症多。东屋未补西屋破，前帐未还后又拖。今年又说明年富，待到明年差不多。志不同己，不必强合。莫道坐中安乐少，须知世上苦情多。本少利微强如坐，屋檐水也滴得多。勤俭持家富，谦恭受益多。细处不断粗处断，黄梅不落青梅落。见钱起意便是贼，顺手牵羊乃为盗。要做快活人，切莫寻烦恼。要做长寿人，莫做短命事。要做有后人，莫做无后事。不经一事，不长一智。宁可无钱使，不可无行止。栽树要栽松柏，结交要结君子。秀才不出门，能知天下事。钱多不经用，儿多不耐死。弟兄争财家不穷不止，妻妾争风夫不死不止。男人有志，妇人有势。夫人死百将临门，将军死一卒不至。天旱误甲子，人穷误口齿。百岁无多日，光阴能几时？父母养其身，自己立其志。待有余而济人，终无济人之日；待有闲而读书，终无读书之时。此书传后世，句句必精读，其中礼和义，奉劝告世人。勤奋读，苦发奋，走遍天涯如游刃。古今贤文内容古今贤文（志向篇）山立在地上，人立在志上。月缺不改光，剑折不改钢。鸟要紧的是翅膀，人要紧的是理想。胸无理想，枉活一世。三军可夺帅，匹夫不可夺志。虎瘦雄心在，人穷志不穷。立下凌云志，敢去摘星星。有志周行天下，无志寸步难行。天下无难事，只要肯攀登。年怕中秋月怕半，男儿立志在少年。船大不怕浪高，志大不怕艰险。没有爬不过的高山，没有闯不过的险滩。见异思迁，土堆难翻；专心致志，高峰能攀。无志之人常立志，有志之人立长志。实践是实现理想的阶梯，知识是实现理想的翅膀。不学杨柳随风摆，要学青松立山冈。古今贤文（真理篇）不入虎穴，焉得虎子。近水识鱼性，近山识鸟音。欲知山中事，须问打柴人。兼听则明，偏听则暗。多看事实，少听虚言。满招损，谦受益。知过必改，闻过则喜。户枢不蠹，流水不腐。从善如流，疾恶如仇。钟不敲不响，话不说不明。良药苦口利于病，忠言逆耳利于行。古今贤文（合作篇）人心齐，泰山移。独脚难行，孤掌难鸣。水涨船高，柴多火旺。三个臭皮匠，赛过诸葛亮。一块砖头砌不成墙，一根木头盖不成房。一个篱笆三个桩，一个好汉三个帮。一根竹竿容易弯，三根麻绳难扯断。一花独放不是春，万紫千红春满园。知己知彼，将心比心。远水难救近火，远亲不如近邻。美不美，故乡水；亲不亲，故乡人。海内存知己，天涯若比邻。君子之交淡如水，小人之交酒肉亲。豆角开花藤牵藤，朋友相处心连心。古今贤文（劝学篇）枯木逢春犹再发，人无两度再少年。不患老而无成，只怕幼儿不学。长江后浪推前浪，世上今人胜古人。若使年华虚度过，到老空留后悔心。有志不在年高，无志空长百岁。少壮不努力，老大徒伤悲。好好学习，天天向上。坚持不懈，久炼成钢。三百六十行，行行出状元。冰生于水而寒于水，青出于蓝而胜于蓝。书到用时方恨少，事非经过不知难。身怕不动，脑怕不用。手越用越巧，脑越用越灵。三天打鱼，两天晒网，三心二意，一事无成。一日练，一日功，一日不练十日空。拳不离手，曲不离口。刀不磨要生锈，人不学要落后。书山有路勤为径，学海无涯苦作舟。师傅领进门，修行在自身。熟能生巧，业精于勤。古今贤文（读书篇）欲知天下事，须读古今书。学了就用处处行，光学不用等于零。不能则学，不知则问；读书全在自用心，老师不过引路人。好曲不厌百回唱，好书不厌百回读。读书贵能疑，疑能得教益。默读便于思索，朗读便于记忆。初读好书，如获良友；重读好书，如逢故知。处处留心皆学问，三人同行有我师。古今贤文（环保篇）保护环境，人人有责。树木成阴，空气清新。绿了大地，润了人心。功在当代，造福子孙。山上树木光，山下走泥浆。治山治水不栽树，有土有水保不住。植树造林镇风沙，遍地都是好庄稼。新增广贤文全文尊师以重道，爱众而亲仁。钱财如粪土，仁义值千金。作事须循天理，出言要顺人心。处富贵地，要矜持贫贱的痛痒，当少壮时，须体念衰老的辛酸。孝当竭力，非徒养身。鸦有反哺之孝，羊知跪乳之恩。打虎还要亲兄弟，出阵还须父子兵。父子和而家不败，弟兄和而家不分。知己知彼，将心比心。责人之心责己，爱己之心爱人。贪爱沉溺即苦海，利欲炽燃是火坑。随时莫起趋时念，脱俗休存矫俗心。昼夜惜阴，夜坐惜灯。读书须用意，一字值千金。平生不作皱眉事，世上应无切齿人。近水知鱼性，近山识鸟音。路遥知马力，日久见人心。饶人不是痴汉，痴汉不会饶人。不说自己桶索短，但怨人家箍井深。美不美，乡中水；亲不亲，故乡人。割不断的亲，离不开的邻。但行好事，莫问前程。钝鸟先飞，大器晚成。一年之计在于春，一日之计在于寅。一家之计在于和，一生之计在于勤。无病休嫌瘦，身安莫怨贫。岂能尽如人意，但求无愧人心。偏听则暗，兼听则明。耳闻是虚，眼见是实。毋施小惠而伤大体，毋借公论而快私情。毋以已长而形人之短，毋因已拙而忌人之能。平日不作亏心事，半夜敲门心不惊。牡丹花好空入目，枣花虽小结实成。汝惟不矜，天下莫与汝争能；汝惟不伐，天下莫与汝争功。明不伤察，直不过矫。仁能善断，清能有容。不自是而露才，不轻试以幸功。受享不逾分外，修持不减分中。肝肠煦若春风，虽囊乏一文，还怜茕独；气骨清如秋水，纵家徒四壁，终傲王公。早把甘旨勤奉养，夕阳光阴不多时。得宠思辱，居安思危。成名每在穷苦日，败事多因得意时。许人一物，千金不移。一言既出，驷马难追。博学而笃志，切问而近思。惜钱休教子，护短莫从师。须知孺子可教，勿谓童子何知。静坐常思已过，闲谈莫论人非。三人同行，必有我师，择其善者而从，其不善者改之。狎昵恶少，久必受其累；屈志老成，急则可相依。心口如一，童叟无欺。人有善念，天必佑之。过则无惮改，独则毋自欺。道吾好者是吾贼，道吾恶者是吉师。学不尚行，马牛而襟裾。结交须胜已，似我不如无。同君一席话，胜读十年书。水至清，则无鱼；人至察，则无徒。宁可正而不足，不可斜而有余。认真还自在，作假费功夫。是非朝朝有，不听自然无。聪明逞尽，惹祸招灾。富从升合起，贫因不算来。用人不宜刻，刻则思效者去；交友不宜滥，滥则贡谀者来。乐不可极，乐极生哀；欲不可纵，纵欲成灾。言顾行，行顾言。不作风波于世上，但留清白在人间。勿因群疑而阻独见，勿任已意而废人言。自处超然，处人蔼然。得意堪然，失意泰然。由俭入奢易，由奢入俭难。枯木逢春犹再发，人无两度再少年。儿孙胜于我，要钱做甚么；儿孙不如我，要钱做甚么。谦恭待人，忠厚传家。不学无术，读书便佳。与治同道罔不兴，与乱同事罔不亡。居身务期质朴，训子要有义方。富若不教子，钱谷必消灭。贵若不教子，衣冠受不长。人无远虑，必有近忧。勿临渴而掘井，宜未雨而绸缪。酒虽养性还乱性，水能载舟亦覆舟。克已者，触事皆成药石；尤人者，启口即是戈矛。儿孙自有儿孙福，莫与儿孙做牛马。深山毕竟藏猛虎，大海终须纳细流。休向君子诌媚，君子原无私惠；休与小人为仇，小人自我对头。登高必自卑，若涉远必自迩。磨刀恨不利，刀利伤人指；求财恨不多，财多终累已。居视其所亲，达视其所举；富视其所不为，贫视其所不取。知足常足，终身不辱；知止常止，终身不耻。君子爱财，取之有道；小人放利，不顾天理。悖入亦悖出，害人终害已。身欲出樊笼外，心要在腔子里。勿偏信而为奸所欺，勿自任而为气所使。使口不如自走，求人不如求已。处骨肉之变，宜从容不宜激烈；当家庭之衰，宜惕厉不宜委靡。务下学而上达，毋舍近而趋远。量入为出，凑少成多。溪壑易填，人心难满。用人与教人，二者却相反，用人取其长，教人责其短。仕宦芳规清、慎、勤，饮食要诀缓、暖、软。留心学到古人难，立脚怕随流俗转。凡是自是，便少一是。有短护短，更添一短。好问则裕，自用则小。勿营华屋，勿作营巧。若争小可，便失大道。但能依本分，终须无烦恼。有言逆于汝心，必求诸道；有言逊于汝志，必求诸非道。吃得亏，坐一堆；要得好，大做小。志宜高而身宜下，胆欲大而心欲小。学者如禾如稻，不学者如蒿如草。唇亡齿必寒，教弛富难保。书中结良友，千载奇逢；门内产贤郎，一家活宝。狗不嫌家贫，儿不嫌母丑。勿贪意外之财，勿饮过量之酒。进步便思退步，着手先图放手。责善勿过高，当思其可从。攻恶勿太严，要使其可受。和气致祥，乖气致戾。玩人丧德，玩物丧志。门内有君子，门外君子至；门内有小人，门外小人至。趋炎虽暖，暖后更觉寒增；食蔗能甘，甘余更生苦趣。家庭和睦，蔬食尽有余欢；骨肉乖违，珍馐亦减至味。先学耐烦，切莫使气。性躁心粗，一生不济。得时莫夸能，不遇休妒世。物盛则必衰，有隆还有替。路径仄处，留一步与人行；滋味浓时，减三分让人嗜。为人要学大莫学小，志气一卑污了，品格难乎其高；持家要学小莫学大，门面一弄阔了，后来难乎其继。三十不立，四十见恶，五十相将寻死路。见怪不怪，怪乃自败。一正压百邪，少见必多怪。君子之交淡以成，小人之交甘以坏。爱人者，人恒爱。敬人者，人恒敬。损友敬而远，益友亲而敬。善与人交，久而能敬。过则相规，言而有信。木受绳则直，人受柬则圣。良药苦口利于病，忠言逆耳利于行。智生识，识生断。当断不断，反受其乱。一毫之恶，劝人莫作；一毫之善，与人方便。难合难分，易亲亦易散。传家二字耕与读，防家二字盗与奸，倾家二字淫与赌，守家二字勤与俭。不汲汲于富贵，不戚戚于贫贱。素位而行，不尤不怨。先达之人可尊也，不可比媚。权势之人可远也，不可侮慢。善有善报，恶有恶报，若有不报，日子未到。贤者不炫已之长，君子不夺人所好。救既败之事，如驭临岩之马，休轻加一鞭；图垂成之功，如挽上滩之舟，莫稍停一棹。大事不糊涂，小事不渗漏。内藏精明，外示浑厚。恩宜先淡而浓，先浓后淡者，人记忘其惠；威宜自严而宽，先宽后严者，人怨其酷。以积货财之心积学问，则盛德日新；以爱妻子之心爱你母，则孝行自笃。学须静，才须学。非学无以广才，非静无以成学。不患老而无成，只怕幼而不学。富贵如刀兵戈矛，稍放纵便销膏靡骨而不知；贫贱如针砭药石，一忧勤即砥节砺行而不觉。不矜细行，终累大德。亲戚不悦，无务外交；事不终始，无务多业。临难勿苟免，临财勿苟得。谗言不可听，听之祸殃结。君听臣遭诛，父听子遭灭，夫妇听之离，兄弟听之别，朋友听之疏，亲戚听之绝。性天澄澈，即饥餐渴饮，无非康济身肠；心地沉迷，纵演偈谈玄，总是播弄精魄。芝兰生于深林，不以无人而不芳；君子修其道德，不为穷困而改节。廉官可酌贪泉水，志士不受嗟来食。"
      },
      customize: {
         name: '自定义发文',
         value: 'customize',
         type: ArticleType.customize,
         content: "",
      },



   }
})


