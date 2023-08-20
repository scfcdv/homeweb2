  var get_date_string2 = function(dt) {
    var date = new Date(dt * 1000);
    var week = ['譌･', '譛�', '轣ｫ', '豌ｴ', '譛ｨ', '驥�', '蝨�'];
    var s = '(' + week[date.getDay()] + ')';
    return s;
  };

  var get_date_string1 = function(dt) {
    var date = new Date(dt * 1000);
    var week = ['譌･', '譛�', '轣ｫ', '豌ｴ', '譛ｨ', '驥�', '蝨�'];
    var s = date.getMonth() + 1 + '譛�';
    s += date.getDate() + '譌･';
    s += '(' + week[date.getDay()] + ')';
    return s;
  };

  var round_val = function(n) {
    return Math.round(n * 10) / 10;
  };

  var get_weather_string = function(s) {
    if (/^01/.test(s)) return '譎ｴ繧�';
    if (/^0[234]/.test(s)) return '譖�ｊ';
    if (/^(09|10)/.test(s)) return '髮ｨ';
    if (/^13/.test(s)) return '髮ｪ';
    if (/^11/.test(s)) return '髮ｷ';
    if (/^50/.test(s)) return '髴ｧ';
    return '';
  };



var get_deg = function (deg){
var deg;
  switch (true) {

    case deg > 0 && deg < 21:
      deg = "蛹�";
      return deg;
      break;
    case deg >= 22 && deg <= 44:
      deg = "蛹怜圏譚ｱ";
      return deg;
      break;
    case deg >= 45 && deg <= 66:
      deg = "蛹玲擲";
      return deg;
      break;
    case deg >= 67 && deg <= 89:
      deg = "譚ｱ蛹玲擲";
      return deg;
      break;
    case deg >= 90 && deg <= 111:
      deg = "譚ｱ";
      return deg;
      break;
    case deg >= 112 && deg <= 134:
      deg = "譚ｱ蜊玲擲";
      return deg;
      break;
    case deg >= 135 && deg <= 156:
      deg = "蜊玲擲";
      return deg;
      break;
    case deg >= 157 && deg <= 179:
      deg = "蜊怜漉譚ｱ";
      return deg;
      break;
    case deg >= 180 && deg <= 201:
      deg = "蜊�";
      return deg;
      break;
    case deg >= 202 && deg <= 224:
      deg = "蜊怜漉隘ｿ";
      return deg;
      break;
    case deg >= 225 && deg <= 246:
      deg = "蜊苓･ｿ";
      return deg;
      break;
    case deg >= 247 && deg <= 269:
      deg = "隘ｿ蜊苓･ｿ";
      return deg;
      break;
    case deg >= 270 && deg <= 291:
      deg = "隘ｿ";
      return deg;
      break;
    case deg >= 292 && deg <= 314:
      deg = "隘ｿ蛹苓･ｿ";
      return deg;
      break;
    case deg >= 315 && deg <= 336:
      deg = "蛹苓･ｿ";
      return deg;
      break;
    case deg >= 337 && deg <= 359:
      deg = "蛹怜圏隘ｿ";
      return deg;
      break;

      default:
      deg = "繧ｨ繝ｩ繝ｼ"
    }
    return;
}



  var code;

switch(true){
    case  /蛹玲ｵｷ驕�/.test(search_add):
    var result  = search_add.slice( 3 );

    var array1 = ["遞壼�蟶�","螳苓ｰｷ驛｡迪ｿ謇墓搗","譫晏ｹｸ驛｡豬憺�灘挨逕ｺ","譫晏ｹｸ驛｡荳ｭ鬆灘挨逕ｺ","譫晏ｹｸ驛｡譫晏ｹｸ逕ｺ","螟ｩ蝪ｩ驛｡雎雁ｯ檎伴","遉ｼ譁�Γ遉ｼ譁�伴","蛻ｩ蟆ｻ驛｡蛻ｩ蟆ｻ逕ｺ","蛻ｩ蟆ｻ驛｡蛻ｩ蟆ｻ蟇悟｣ｫ逕ｺ","螟ｩ蝪ｩ驛｡蟷悟ｻｶ逕ｺ"];
    var array2 = ["譌ｭ蟾晏ｸ�","螢ｫ蛻･蟶�","蜷榊ｯ�ｸ�","蟇瑚憶驥主ｸ�","荳雁ｷ晞Γ鮃ｹ譬也伴","荳雁ｷ晞Γ譚ｱ逾樊･ｽ逕ｺ","荳雁ｷ晞Γ蠖馴ｺｻ逕ｺ","荳雁ｷ晞Γ豈泌ｸ�伴","荳雁ｷ晞Γ諢帛挨逕ｺ","荳雁ｷ晞Γ荳雁ｷ晉伴","荳雁ｷ晞Γ譚ｱ蟾晉伴","荳雁ｷ晞Γ鄒守騒逕ｺ","遨ｺ遏･驛｡荳雁ｯ瑚憶驥守伴","遨ｺ遏･驛｡荳ｭ蟇瑚憶驥守伴","遨ｺ遏･驛｡蜊怜ｯ瑚憶驥守伴","蜍�鴛驛｡蜊�蜀�譚�","荳雁ｷ晞Γ蜥悟ｯ堤伴","荳雁ｷ晞Γ蜑｣豺ｵ逕ｺ","荳雁ｷ晞Γ荳句ｷ晉伴","荳ｭ蟾晞Γ鄒取ｷｱ逕ｺ","荳ｭ蟾晞Γ髻ｳ螽∝ｭ仙ｺ懈搗","荳ｭ蟾晞Γ荳ｭ蟾晉伴","髮ｨ遶憺Γ蟷悟刈蜀�伴","逡呵酔蟶�","蠅玲ｯ幃Γ蠅玲ｯ帷伴","逡呵酔驛｡蟆丞ｹｳ逕ｺ","闍ｫ蜑埼Γ闍ｫ蜑咲伴","闍ｫ蜑埼Γ鄒ｽ蟷檎伴","闍ｫ蜑埼Γ蛻晏ｱｱ蛻･譚�","螟ｩ蝪ｩ驛｡驕�蛻･逕ｺ","螟ｩ蝪ｩ驛｡螟ｩ蝪ｩ逕ｺ"];
  var array3 = ["譛ｭ蟷悟ｸ�","譛ｭ蟷悟ｸゆｸｭ螟ｮ蛹ｺ","譛ｭ蟷悟ｸょ圏蛹ｺ","譛ｭ蟷悟ｸよ擲蛹ｺ","譛ｭ蟷悟ｸら區遏ｳ蛹ｺ","譛ｭ蟷悟ｸりｱ雁ｹｳ蛹ｺ","譛ｭ蟷悟ｸょ漉蛹ｺ","譛ｭ蟷悟ｸり･ｿ蛹ｺ","譛ｭ蟷悟ｸょ字蛻･蛹ｺ","譛ｭ蟷悟ｸよ焔遞ｲ蛹ｺ","譛ｭ蟷悟ｸよｸ�伐蛹ｺ","豎溷挨蟶�","蜊�ｭｳ蟶�","諱ｵ蠎ｭ蟶�","蛹怜ｺ�ｳｶ蟶�","遏ｳ迢ｩ蟶�","蠖灘挨逕ｺ","譁ｰ遽�豢･譚�","螟募ｼｵ蟶�","蟯ｩ隕区ｲ｢蟶�","鄒主売蟶�","闃ｦ蛻･蟶�","襍､蟷ｳ蟶�","荳臥ｬ�蟶�","貊晏ｷ晏ｸ�","遐ょｷ晏ｸ�","豁悟ｿ怜�蟶�","豺ｱ蟾晏ｸ�","遨ｺ遏･驛｡蜊怜ｹ檎伴","遨ｺ遏･驛｡螂井ｺ墓ｱ溽伴","遨ｺ遏･驛｡荳顔�ょｷ晉伴","螟募ｼｵ驛｡逕ｱ莉∫伴","螟募ｼｵ驛｡髟ｷ豐ｼ逕ｺ","螟募ｼｵ驛｡譬怜ｱｱ逕ｺ","讓ｺ謌ｸ驛｡譛亥ｽ｢逕ｺ","讓ｺ謌ｸ驛｡豬ｦ閾ｼ逕ｺ","讓ｺ謌ｸ驛｡譁ｰ蜊∵ｴ･蟾晉伴","髮ｨ遶憺Γ螯ｹ閭檎央逕ｺ","髮ｨ遶憺Γ遘ｩ辷ｶ蛻･逕ｺ","髮ｨ遶憺Γ髮ｨ遶懃伴","髮ｨ遶憺Γ蛹礼ｫ懃伴","髮ｨ遶憺Γ豐ｼ逕ｰ逕ｺ","蟆乗ｨｽ蟶�","蟲ｶ迚ｧ驛｡蟲ｶ迚ｧ譚�","蟇ｿ驛ｽ驛｡蟇ｿ驛ｽ逕ｺ","蟇ｿ驛ｽ驛｡鮟呈收蜀�伴","逎ｯ隹ｷ驛｡陂ｭ雜顔伴","陌ｻ逕ｰ驛｡繝九そ繧ｳ逕ｺ","陌ｻ逕ｰ驛｡逵溽叫譚�","陌ｻ逕ｰ驛｡逡吝ｯｿ驛ｽ譚�","陌ｻ逕ｰ驛｡蝟懆撃蛻･逕ｺ","陌ｻ逕ｰ驛｡莠ｬ讌ｵ逕ｺ","陌ｻ逕ｰ驛｡蛟ｶ遏･螳臥伴","蟯ｩ蜀�Γ蜈ｱ蜥檎伴","蟯ｩ蜀�Γ蟯ｩ蜀�伴","蜿､螳�Γ豕頑搗","蜿､螳�Γ逾樊�蜀�搗","遨堺ｸｹ驛｡遨堺ｸｹ逕ｺ","蜿､蟷ｳ驛｡蜿､蟷ｳ逕ｺ"," 菴吝ｸるΓ莉∵惠逕ｺ"," 菴吝ｸるΓ菴吝ｸら伴"," 菴吝ｸるΓ襍､莠募ｷ晄搗"];
    var array4 = ["邯ｲ襍ｰ蟶�","邯ｲ襍ｰ驛｡鄒主ｹ檎伴","邯ｲ襍ｰ驛｡豢･蛻･逕ｺ","譁憺㈹驛｡譁憺㈹逕ｺ","譁憺㈹驛｡貂�㈹逕ｺ","譁憺㈹驛｡蟆乗ｸ�ｰｴ逕ｺ","蟶ｸ蜻るΓ菴仙曹髢鍋伴","邯ｲ襍ｰ驛｡螟ｧ遨ｺ逕ｺ","蛹苓ｦ句ｸ�","蟶ｸ蜻るΓ險灘ｭ仙ｺ懃伴","蟶ｸ蜻るΓ鄂ｮ謌ｸ逕ｺ","邏句挨蟶�","邏句挨驛｡驕�霆ｽ逕ｺ","邏句挨驛｡貉ｧ蛻･逕ｺ","邏句挨驛｡貊昜ｸ顔伴","邏句挨驛｡闊磯Κ逕ｺ","邏句挨驛｡隘ｿ闊磯Κ譚�","邏句挨驛｡髮�ｭｦ逕ｺ"];
    var array5 = ["譬ｹ螳､蟶�","驥惹ｻ倬Γ蛻･豬ｷ逕ｺ","讓呎ｴ･驛｡荳ｭ讓呎ｴ･逕ｺ","讓呎ｴ･驛｡讓呎ｴ･逕ｺ","逶ｮ譴ｨ驛｡鄒��逕ｺ","驥ｧ霍ｯ蟶�","驥ｧ霍ｯ驛｡驥ｧ霍ｯ逕ｺ","蜴壼ｲｸ驛｡蜴壼ｲｸ逕ｺ","蜴壼ｲｸ驛｡豬應ｸｭ逕ｺ","蟾昜ｸ企Γ讓呵幻逕ｺ","蟾昜ｸ企Γ蠑溷ｭ仙ｱ育伴","髦ｿ蟇帝Γ鮓ｴ螻�搗","逋ｽ邉�驛｡逋ｽ邉�逕ｺ"];
    var array6 = ["蟶ｯ蠎�ｸ�","豐ｳ譚ｱ驛｡髻ｳ譖ｴ逕ｺ","豐ｳ譚ｱ驛｡螢ｫ蟷檎伴","豐ｳ譚ｱ驛｡荳雁｣ｫ蟷檎伴","豐ｳ譚ｱ驛｡鮖ｿ霑ｽ逕ｺ","荳雁ｷ晞Γ譁ｰ蠕礼伴","荳雁ｷ晞Γ貂�ｰｴ逕ｺ","豐ｳ隘ｿ驛｡闃ｽ螳､逕ｺ","豐ｳ隘ｿ驛｡荳ｭ譛ｭ蜀�搗","豐ｳ隘ｿ驛｡譖ｴ蛻･譚�","蠎�ｰｾ驛｡螟ｧ讓ｹ逕ｺ","蠎�ｰｾ驛｡蠎�ｰｾ逕ｺ","荳ｭ蟾晞Γ蟷募挨逕ｺ","荳ｭ蟾晞Γ豎�逕ｰ逕ｺ","荳ｭ蟾晞Γ雎企��伴","荳ｭ蟾晞Γ譛ｬ蛻･逕ｺ","雜ｳ蟇�Γ雜ｳ蟇�伴","雜ｳ蟇�Γ髯ｸ蛻･逕ｺ","蜊∝享驛｡豬ｦ蟷檎伴"];
    var array7 = ["螳､陂ｭ蟶�","闍ｫ蟆冗鴬蟶�","逋ｻ蛻･蟶�","莨企＃蟶�","陌ｻ逕ｰ驛｡雎頑ｵｦ逕ｺ","譛臥匠驛｡螢ｮ迸･逕ｺ","逋ｽ閠�Γ逋ｽ閠∫伴","蜍�鴛驛｡蜴夂悄逕ｺ","陌ｻ逕ｰ驛｡豢樒絢貉也伴","蜍�鴛驛｡螳牙ｹｳ逕ｺ","蜍�鴛驛｡繧縺九ｏ逕ｺ","豐呎ｵ�Γ譌･鬮倡伴","豐呎ｵ�Γ蟷ｳ蜿也伴","譁ｰ蜀�驛｡譁ｰ蜀�逕ｺ","豬ｦ豐ｳ驛｡豬ｦ豐ｳ逕ｺ","讒倅ｼｼ驛｡讒倅ｼｼ逕ｺ","蟷梧ｳ蛾Γ縺医ｊ繧ら伴","譌･鬮倬Γ譁ｰ縺ｲ縺�縺狗伴"];
    var array8 = ["蜃ｽ鬢ｨ蟶�","蛹玲沫蟶�","譚ｾ蜑埼Γ譚ｾ蜑咲伴","譚ｾ蜑埼Γ遖丞ｳｶ逕ｺ","荳顔｣ｯ驛｡遏･蜀�伴","荳顔｣ｯ驛｡譛ｨ蜿､蜀�伴","莠逕ｰ驛｡荳�｣ｯ逕ｺ","闌�Κ驛｡鮖ｿ驛ｨ逕ｺ","闌�Κ驛｡譽ｮ逕ｺ","莠梧ｵｷ驛｡蜈ｫ髮ｲ逕ｺ","螻ｱ雜企Γ髟ｷ荳�Κ逕ｺ","讙懷ｱｱ驛｡豎溷ｷｮ逕ｺ","讙懷ｱｱ驛｡荳翫ヮ蝗ｽ逕ｺ","讙懷ｱｱ驛｡蜴壽ｲ｢驛ｨ逕ｺ","辷ｾ蠢鈴Γ荵咎Κ逕ｺ","螂･蟆ｻ驛｡螂･蟆ｻ逕ｺ","轢ｬ譽夐Γ莉企≡逕ｺ","荵�□驛｡縺帙◆縺ｪ逕ｺ"];

    if((array1.includes(result))==true){
      code = 11000;
      code = ("0" + code).slice( -6 );
    }else if((array2.includes(result))==true){
      code = 12000;
      code = ("0" + code).slice( -6 );
    }else if((array3.includes(result))==true){
      code = 16000;
      code = ("0" + code).slice( -6 );
    }else if((array4.includes(result))==true){
      code = 13000;
      code = ("0" + code).slice( -6 );
    }else if((array5.includes(result))==true){
      code = 14100;
      code = ("0" + code).slice( -6 );
    }else if((array6.includes(result))==true){
      code = 14030;
      code = ("0" + code).slice( -6 );
    }else if((array7.includes(result))==true){
      code = 15000;
      code = ("0" + code).slice( -6 );
    }else if((array8.includes(result))==true){
      code = 17000;
      code = ("0" + code).slice( -6 );
    }
    break;
    case  /髱呈｣ｮ逵�/.test(search_add):
    code = 20000;
    code = ("0" + code).slice( -6 );
    break;
    case  /蟯ｩ謇狗恁/.test(search_add):
    code = 30000;
    code = ("0" + code).slice( -6 );
    break;
    case  /螳ｮ蝓守恁/.test(search_add):
    code = 40000;
    code = ("0" + code).slice( -6 );
    break;
    case  /遘狗伐逵�/.test(search_add):
    code = 50000;
    code = ("0" + code).slice( -6 );
    break;
    case  /螻ｱ蠖｢逵�/.test(search_add):
    code = 60000;
    code = ("0" + code).slice( -6 );
    break;
    case  /遖丞ｳｶ逵�/.test(search_add):
    code = 70000;
    code = ("0" + code).slice( -6 );
    break;
    case  /譚ｱ莠ｬ驛ｽ/.test(search_add):
    code = 130000;
    break;
    case  /逾槫･亥ｷ晉恁/.test(search_add):
    code = 140000;
    break;
    case  /蝓ｼ邇臥恁/.test(search_add):
    code = 110000;
    break;
    case  /蜊�痩逵�/.test(search_add):
    code = 120000;
    break;
    case  /闌ｨ蝓守恁/.test(search_add):
    code = 80000;
    code = ("0" + code).slice( -6 );
    break;
    case  /譬�惠逵�/.test(search_add):
    code = 90000;
    code = ("0" + code).slice( -6 );
    break;
    case  /鄒､鬥ｬ逵�/.test(search_add):
    code = 100000;
    break;
    case  /螻ｱ譴ｨ逵�/.test(search_add):
    code = 190000;
    break;
    case  /譁ｰ貎溽恁/.test(search_add):
    code = 150000;
    break;
    case  /髟ｷ驥守恁/.test(search_add):
    code = 200000;
    break;
    case  /蟇悟ｱｱ逵�/.test(search_add):
    code = 160000;
    break;
    case  /遏ｳ蟾晉恁/.test(search_add):
    code = 170000;
    break;
    case  /遖丈ｺ慕恁/.test(search_add):
    code = 180000;
    break;
    case  /諢帷衍逵�/.test(search_add):
    code = 230000;
    break;
    case  /蟯宣�逵�/.test(search_add):
    code = 210000;
    break;
    case  /髱吝ｲ｡逵�/.test(search_add):
    code = 220000;
    break;
    case  /荳蛾㍾逵�/.test(search_add):
    code = 240000;
    break;
    case  /螟ｧ髦ｪ蠎�/.test(search_add):
    code = 270000;
    break;
    case  /蜈ｵ蠎ｫ逵�/.test(search_add):
    code = 280000;
    break;
    case  /莠ｬ驛ｽ蠎�/.test(search_add):
    code = 260000;
    break;
    case  /貊玖ｳ逵�/.test(search_add):
    code = 250000;
    break;
    case  /螂郁憶逵�/.test(search_add):
    code = 290000;
    break;
    case  /蜥梧ｭ悟ｱｱ逵�/.test(search_add):
    code = 300000;
    break;
    case  /魑･蜿也恁/.test(search_add):
    code = 310000;
    break;
    case  /蟲ｶ譬ｹ逵�/.test(search_add):
    code = 320000;
    break;
    case  /蟯｡螻ｱ逵�/.test(search_add):
    code = 330000;
    break;
    case  /蠎�ｳｶ逵�/.test(search_add):
    code = 340000;
    break;
    case  /螻ｱ蜿｣逵�/.test(search_add):
    code = 350000;
    break;
    case  /蠕ｳ蟲ｶ逵�/.test(search_add):
    code = 360000;
    break;
    case  /鬥吝ｷ晉恁/.test(search_add):
    code = 370000;
    break;
    case  /諢帛ｪ帷恁/.test(search_add):
    code = 380000;
    break;
    case  /鬮倡衍逵�/.test(search_add):
    code = 390000;
    break;
    case  /遖丞ｲ｡逵�/.test(search_add):
    code = 400000;
    break;
    case  /螟ｧ蛻�恁/.test(search_add):
    code = 440000;
    break;
    case  /菴占ｳ逵�/.test(search_add):
    code = 410000;
    break;
    case  /髟ｷ蟠守恁/.test(search_add):
    code = 420000;
    break;
    case  /辭頑悽逵�/.test(search_add):
    code = 430000;
    break;
    case  /螳ｮ蟠守恁/.test(search_add):
    code = 450000;
    break;
    case  /鮖ｿ蜈仙ｳｶ逵�/.test(search_add):
    code = 460100;
    break;
    case  /豐也ｸ�恁/.test(search_add):
    var result  = search_add.slice( 3 );
    var array11 = ["驍｣隕�ｸ�","螳憺㍽貉ｾ蟶�","豬ｦ豺ｻ蟶�","邉ｸ貅蟶�","豐也ｸ�ｸ�","雎願ｦ句沁蟶�","縺�ｋ縺ｾ蟶�","蜊怜沁蟶�","隱ｭ隹ｷ譚�","蝌画焔邏咲伴","蛹苓ｰｷ逕ｺ","蛹嶺ｸｭ蝓取搗","荳ｭ蝓取搗","隘ｿ蜴溽伴","荳朱ぅ蜴溽伴","蜊鈴｢ｨ蜴溽伴","貂｡蝌画聞譚�","蠎ｧ髢灘袖譚�","邊溷嵜譚�","貂｡蜷榊万譚�","蜈ｫ驥咲ｬ逕ｺ","蜷崎ｭｷ蟶�","蝗ｽ鬆ｭ譚�","螟ｧ螳懷袖譚�","譚ｱ譚�","莉雁ｸｰ莉∵搗","譛ｬ驛ｨ逕ｺ","諱ｩ邏肴搗","螳憺㍽蠎ｧ譚�","驥第ｭｦ逕ｺ","莨頑ｱ滓搗","莨雁ｹｳ螻区搗","莨頑弍蜷肴搗","荵�ｱｳ蟲ｶ逕ｺ"];
    var array12 = ["蜊怜､ｧ譚ｱ譚�","蛹怜､ｧ譚ｱ譚�"];
    var array13 = ["螳ｮ蜿､蟲ｶ蟶�","螟夊憶髢捺搗"];
    var array14 = ["遏ｳ蝙｣蟶�","遶ｹ蟇檎伴","荳朱ぅ蝗ｽ逕ｺ"];
    if((array11.includes(result))==true){
      code = 471000;
    }else if((array12.includes(result))==true){
      code = 472000;
    }else if((array13.includes(result))==true){
      code = 473000;
    }else if((array14.includes(result))==true){
      code = 474000;
    break;

  }
}


  var weather1 = function(data) {
    $(function() {
      $.ajax({
          type: 'GET',
          url: 'https://www.jma.go.jp/bosai/forecast/data/forecast/'+code+'.json',
          dataType: 'json'
        })
        .then(
          // 蜿門ｾ玲�蜉滓凾
          function input(json) {
            for (var i = 1; i < json.length; i++) {
              outer: for (var j in json[1].timeSeries) {
                for (var h in json[0].timeSeries[1].areas) {
                  for (var k in json[0].timeSeries[1].areas[1].pops) {
                    var rain0 = (json[0].timeSeries[1].areas[1].pops[0]);
                    $('.d_rain').html(rain0 + "%");
                    break outer

                  }
                }
              }
            }
          },
          function() {
            // 繧ｨ繝ｩ繝ｼ逋ｺ逕滓凾
            alert('螟ｱ謨�');
          }
        );
    });



    var s = '<div class="w_bg"><span class="w_city">'+inputText1+'</span><span class="w_title" id="pc_city">螟ｩ豌嶺ｺ亥�ｱ</span></div>';

    s += '<div class="sep"><ul class="day">';
    s += '<li><span class="day">' + get_date_string1(data.daily[0].dt)  + '</span></li>';
    s += '<li><span class="temp" style="display:none"><i style="color:#c1132e;margin-right:5px" class="fas fa-thermometer-half"></i>' + round_val(data.current.temp) + '邃�' + '</li>';
    s += '<li><span class="max_temp" style="display:none"><i class="fa fa-caret-up" style="color:red"></i>' + Math.trunc(data.daily[0].temp.max) + '</span><span class="min_temp" style="display:none"><i class="fa fa-caret-down" style="color:blue"></i>' + Math.trunc(data.daily[
        0].temp.min) +
      '</span></li>';
    s += '</ul>';
    var icon = data.daily[0].weather[0].icon;
    s += '<img class="d_img" src="https://openweathermap.org/img/wn/' + icon + '@2x.png">';

    s += '<div class="weather-box"><div class="snow"><div class="rain_s" style="display:none"><i class="wi wi-umbrella" margin-right:5px"></i><span class="d_rain"></span></div>'
    if (data.daily[0].weather[0].snow) {
      s += '<span class="w_snow" style="display:none"><i class="far fa-snowflake"></i>' + round_val(data.daily[0].weather[0].snow) + 'mm' + '</span></div>';
    } else {
      s += '<span class="w_snow" style="display:none"><i class="far fa-snowflake"></i>' + 0 + 'mm' + '</span></div>';
    }
    s += '<div class="other"><span class="pop-rain" style="display:none"><i class="fas fa-tint"></i>' + data.daily[0].pop + '</span>';
    s += '<span class="speed-wind" style="display:none"><i class="wi wi-strong-wind"></i>' + data.daily[0].wind_speed + '</span>';
    s += '<span class="deg-wind" style="display:none"><i class="far fa-compass"></i>' + get_deg(data.daily[0].wind_deg) + '</span></div>';
    s += '</div></div>';

    $('#weather1').html(s);

  };

  var weather2 = function(data) {
    int=1;


      if(weather_value==1) {
        int=7;
        var elem = document.getElementById("PageStyleSheet");
        elem.href = "https://sitecreation.co.jp/wp-content/themes/emanon-premium-child/tpl/style7.css";

      }else if(weather_value==2){
        int=6
        var elem = document.getElementById("PageStyleSheet");
        elem.href = "https://sitecreation.co.jp/wp-content/themes/emanon-premium-child/tpl/style6.css";

      }else if(weather_value==3){
        int=5
        var elem = document.getElementById("PageStyleSheet");
        elem.href = "https://sitecreation.co.jp/wp-content/themes/emanon-premium-child/tpl/style5.css";

      }else if(weather_value==4){
        int=4
        var elem = document.getElementById("PageStyleSheet");
        elem.href = "https://sitecreation.co.jp/wp-content/themes/emanon-premium-child/tpl/style4.css";

      }else if(weather_value==5){
        int=3
        var elem = document.getElementById("PageStyleSheet");
        elem.href = "https://sitecreation.co.jp/wp-content/themes/emanon-premium-child/tpl/style3.css";

      }else if(weather_value==6){
        int=2
        var elem = document.getElementById("PageStyleSheet");
        elem.href = "https://sitecreation.co.jp/wp-content/themes/emanon-premium-child/tpl/style2.css";

      }else if(weather_value==7) {
        int=1
        var elem = document.getElementById("PageStyleSheet");
        elem.href = "https://sitecreation.co.jp/wp-content/themes/emanon-premium-child/tpl/style.css";

      }else if(weather_value === null){
        int=1
      }
    var s = '<ul>';
    var list = data.daily;
    console.log(list);
    for (var i = 1; i < list.length - int; i++) {
      $(function() {
        $.ajax({
            type: 'GET',
            url: 'https://www.jma.go.jp/bosai/forecast/data/forecast/'+code+'.json',
            dataType: 'json'
          })
          .then(
            // 蜿門ｾ玲�蜉滓凾
            function input(json) {
              for (var i = 1; i < json.length; i++) {
                outer: for (var j in json[1].timeSeries) {
                  for (var h in json[1].timeSeries[0].areas) {
                    for (var k in json[1].timeSeries[0].areas[0].pops) {
                      var rain1 = (json[1].timeSeries[0].areas[0].pops[1]);
                      var rain2 = (json[1].timeSeries[0].areas[0].pops[2]);
                      var rain3 = (json[1].timeSeries[0].areas[0].pops[3]);
                      var rain4 = (json[1].timeSeries[0].areas[0].pops[4]);
                      var rain5 = (json[1].timeSeries[0].areas[0].pops[5]);
                      var rain6 = (json[1].timeSeries[0].areas[0].pops[6]);
                      $('.rain1').html(rain1 + "%");
                      $('.rain2').html(rain2 + "%");
                      $('.rain3').html(rain3 + "%");
                      $('.rain4').html(rain4 + "%");
                      $('.rain5').html(rain5 + "%");
                      $('.rain6').html(rain6 + "%");
                      break outer

                    }
                  }
                }
              }
            },
            function() {
              //
              alert('螟ｱ謨�');
            }
          );
      });

      s += '<li>';
      s += '<span class="date">' + get_date_string2(list[i].dt) + '</span>';
      for (var j in list[i].weather) {
        var icon = list[i].weather[j].icon;
        s += '<img class="icon" src="http://openweathermap.org/img/wn/' + icon + '.png">';
      }
      s += '<div class="w_temp"><span class="max_temp" style="display:none"><i class="fa fa-caret-up" style="color:red"></i>' + Math.trunc(list[i].temp.max) + '邃�' + '</span><span class="min_temp" style="display:none"><i class="fa fa-caret-down" style="color:blue"></i>';
      s += Math.trunc(list[i].temp.min) + '邃�' + '</span></div><div class="rain_s" style="display:none;font-size: 10px;"><i class="wi wi-umbrella" style="margin-right:3px"></i><span class=rain' + [i] + '></span></div>';

      if (list[i].weather.snow) {
        s += '<span class="w_snow" style="display:none"><i class="far fa-snowflake" style="margin-right:3px;font-size: 10px;"></i>' + round_val(list[i].weather.snow) + 'mm' + '</span>';
      } else {
        s += '<span class="w_snow" style="display:none"><i class="far fa-snowflake" style="margin-right:3px;font-size: 10px;"></i>' + 0 + 'mm' + '</span>';
      }
      s += '<div class="other-list"><span class="pop-rain" style="display:none"><i class="fas fa-tint"></i>' + list[i].pop + '</span>';
      s += '<span class="speed-wind" style="display:none"><i class="wi wi-strong-wind"></i>' + list[i].wind_speed + '</span>';
      s += '<span class="deg-wind" style="display:none"><i class="far fa-compass"></i>' + get_deg(list[i].wind_deg) + '</span></div>';
      s += '</li>';

    }
    s += '</ul><p class="weather-c-name" style="display:block !important"><a href="https://sitecreation.co.jp/tenkiyohou/">蛻ｶ菴懶ｼ壽�ｪ蠑丈ｼ夂､ｾ繧ｵ繧､繝医け繝ｪ繧ｨ繝ｼ繧ｷ繝ｧ繝ｳ</a></p></div>';

    $('#weather2').html(s);

  };

    $.ajax({
        type: 'GET',
        url: 'https://msearch.gsi.go.jp/address-search/AddressSearch?q='+ search_add,
        dataType: 'json'
      })
      .then(
        // 蜿門ｾ玲�蜉滓凾
        function input(json) {
          var lon = json[0].geometry.coordinates[0];
          var lat = json[0].geometry.coordinates[1];
        var addv1 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=minutely,hourly,alerts&units=metric&appid=7b95e0702267744b5ee95749fa8be28f'
        var addv2 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=current,minutely,hourly,alerts&units=metric&appid=7b95e0702267744b5ee95749fa8be28f';


          jQuery(function($) {
            $.ajax({
              cache: false,
              dataType: 'json',
              success: weather1,
              url: addv1
            });
            $.ajax({
              cache: false,
              dataType: 'json',
              success: weather2,
              url: addv2
            });
          });



        },
        function() {
          // 繧ｨ繝ｩ繝ｼ逋ｺ逕滓凾
          alert('螟ｱ謨�');
        }
      );
