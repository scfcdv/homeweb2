  var get_date_string2 = function(dt) {
    var date = new Date(dt * 1000);
    var week = ['日', '月', '火', '水', '木', '金', '土'];
    var s = '(' + week[date.getDay()] + ')';
    return s;
  };

  var get_date_string1 = function(dt) {
    var date = new Date(dt * 1000);
    var week = ['日', '月', '火', '水', '木', '金', '土'];
    var s = date.getMonth() + 1 + '月';
    s += date.getDate() + '日';
    s += '(' + week[date.getDay()] + ')';
    return s;
  };

  var round_val = function(n) {
    return Math.round(n * 10) / 10;
  };

  var get_weather_string = function(s) {
    if (/^01/.test(s)) return '晴れ';
    if (/^0[234]/.test(s)) return '曇り';
    if (/^(09|10)/.test(s)) return '雨';
    if (/^13/.test(s)) return '雪';
    if (/^11/.test(s)) return '雷';
    if (/^50/.test(s)) return '霧';
    return '';
  };



var get_deg = function (deg){
var deg;
  switch (true) {

    case deg > 0 && deg < 21:
      deg = "�?";
      return deg;
      break;
    case deg >= 22 && deg <= 44:
      deg = "北北東";
      return deg;
      break;
    case deg >= 45 && deg <= 66:
      deg = "北東";
      return deg;
      break;
    case deg >= 67 && deg <= 89:
      deg = "東北東";
      return deg;
      break;
    case deg >= 90 && deg <= 111:
      deg = "東";
      return deg;
      break;
    case deg >= 112 && deg <= 134:
      deg = "東南東";
      return deg;
      break;
    case deg >= 135 && deg <= 156:
      deg = "南東";
      return deg;
      break;
    case deg >= 157 && deg <= 179:
      deg = "南南東";
      return deg;
      break;
    case deg >= 180 && deg <= 201:
      deg = "�?";
      return deg;
      break;
    case deg >= 202 && deg <= 224:
      deg = "南南西";
      return deg;
      break;
    case deg >= 225 && deg <= 246:
      deg = "南西";
      return deg;
      break;
    case deg >= 247 && deg <= 269:
      deg = "西南西";
      return deg;
      break;
    case deg >= 270 && deg <= 291:
      deg = "西";
      return deg;
      break;
    case deg >= 292 && deg <= 314:
      deg = "西北西";
      return deg;
      break;
    case deg >= 315 && deg <= 336:
      deg = "北西";
      return deg;
      break;
    case deg >= 337 && deg <= 359:
      deg = "北北西";
      return deg;
      break;

      default:
      deg = "エラー"
    }
    return;
}



  var code;

switch(true){
    case  /北海�?/.test(search_add):
    var result  = search_add.slice( 3 );

    var array1 = ["稚�?�?","宗谷郡猿払村","枝幸郡浜�?�別町","枝幸郡中頓別町","枝幸郡枝幸町","天塩郡豊富町","礼�?��礼�?��","利尻郡利尻町","利尻郡利尻富士町","天塩郡幌延町"];
    var array2 = ["旭川�?","士別�?","名�?�?","富良野�?","上川郡鷹栖町","上川郡東神楽町","上川郡当麻町","上川郡比�?��","上川郡愛別町","上川郡上川町","上川郡東川町","上川郡美瑛町","空知郡上富良野町","空知郡中富良野町","空知郡南富良野町","�?��郡�?�?�?","上川郡和寒町","上川郡剣淵町","上川郡下川町","中川郡美深町","中川郡音威子府村","中川郡中川町","雨竜郡幌加�?��","留萌�?","増毛郡増毛町","留萌郡小平町","苫前郡苫前町","苫前郡羽幌町","苫前郡初山別�?","天塩郡�?別町","天塩郡天塩町"];
  var array3 = ["札幌�?","札幌市中央区","札幌市北区","札幌市東区","札幌市白石区","札幌市豊平区","札幌市南区","札幌市西区","札幌市厚別区","札幌市手稲区","札幌市�?��区","江別�?","�?���?","恵庭�?","北�?���?","石狩�?","当別町","新�?津�?","夕張�?","岩見沢�?","美唄�?","芦別�?","赤平�?","三�?�?","滝川�?","砂川�?","歌志�?�?","深川�?","空知郡南幌町","空知郡奈井江町","空知郡上�?�川町","夕張郡由仁町","夕張郡長沼町","夕張郡栗山町","樺戸郡月形町","樺戸郡浦臼町","樺戸郡新十津川町","雨竜郡妹背牛町","雨竜郡秩父別町","雨竜郡雨竜町","雨竜郡北竜町","雨竜郡沼田町","小樽�?","島牧郡島牧�?","寿都郡寿都町","寿都郡黒松�?��","磯谷郡蘭越町","虻田郡ニセコ町","虻田郡真狩�?","虻田郡留寿都�?","虻田郡喜茂別町","虻田郡京極町","虻田郡倶知安町","岩�?��共和町","岩�?��岩�?��","古�?��泊村","古�?��神�?�?��","積丹郡積丹町","古平郡古平町"," 余市郡仁木町"," 余市郡余市町"," 余市郡赤井川村"];
    var array4 = ["網走�?","網走郡美幌町","網走郡津別町","斜里郡斜里町","斜里郡�?��町","斜里郡小�?��町","常呂郡佐呂間町","網走郡大空町","北見�?","常呂郡訓子府町","常呂郡置戸町","紋別�?","紋別郡�?軽町","紋別郡湧別町","紋別郡滝上町","紋別郡興部町","紋別郡西興部�?","紋別郡�?��町"];
    var array5 = ["根室�?","野付郡別海町","標津郡中標津町","標津郡標津町","目梨郡�??町","釧路�?","釧路郡釧路町","厚岸郡厚岸町","厚岸郡浜中町","川上郡標茶町","川上郡弟子屈町","阿寒郡鶴�?��","白�?郡白�?町"];
    var array6 = ["帯�?�?","河東郡音更町","河東郡士幌町","河東郡上士幌町","河東郡鹿追町","上川郡新得町","上川郡�?��町","河西郡芽室町","河西郡中札�?��","河西郡更別�?","�?��郡大樹町","�?��郡�?��町","中川郡幕別町","中川郡�?田町","中川郡豊�??��","中川郡本別町","足�?��足�?��","足�?��陸別町","十勝郡浦幌町"];
    var array7 = ["室蘭�?","苫小牧�?","登別�?","伊達�?","虻田郡豊浦町","有珠郡壮瞥町","白�?��白老町","�?��郡厚真町","虻田郡洞爺湖町","�?��郡安平町","�?��郡�?かわ町","沙�?��日高町","沙�?��平取町","新�?郡新�?町","浦河郡浦河町","様似郡様似町","幌泉郡えりも町","日高郡新ひ�?か町"];
    var array8 = ["函館�?","北斗�?","松前郡松前町","松前郡福島町","上磯郡知�?��","上磯郡木古�?��","�?田郡�?��町","�?��郡鹿部町","�?��郡森町","二海郡八雲町","山越郡長�?��町","檜山郡江差町","檜山郡上ノ国町","檜山郡厚沢部町","爾志郡乙部町","奥尻郡奥尻町","瀬棚郡今��町","�?��郡せたな町"];

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
    case  /青森�?/.test(search_add):
    code = 20000;
    code = ("0" + code).slice( -6 );
    break;
    case  /岩手県/.test(search_add):
    code = 30000;
    code = ("0" + code).slice( -6 );
    break;
    case  /宮城県/.test(search_add):
    code = 40000;
    code = ("0" + code).slice( -6 );
    break;
    case  /秋田�?/.test(search_add):
    code = 50000;
    code = ("0" + code).slice( -6 );
    break;
    case  /山形�?/.test(search_add):
    code = 60000;
    code = ("0" + code).slice( -6 );
    break;
    case  /福島�?/.test(search_add):
    code = 70000;
    code = ("0" + code).slice( -6 );
    break;
    case  /東京都/.test(search_add):
    code = 130000;
    break;
    case  /神奈川県/.test(search_add):
    code = 140000;
    break;
    case  /埼玉県/.test(search_add):
    code = 110000;
    break;
    case  /�?���?/.test(search_add):
    code = 120000;
    break;
    case  /茨城県/.test(search_add):
    code = 80000;
    code = ("0" + code).slice( -6 );
    break;
    case  /�?���?/.test(search_add):
    code = 90000;
    code = ("0" + code).slice( -6 );
    break;
    case  /群馬�?/.test(search_add):
    code = 100000;
    break;
    case  /山梨�?/.test(search_add):
    code = 190000;
    break;
    case  /新潟県/.test(search_add):
    code = 150000;
    break;
    case  /長野県/.test(search_add):
    code = 200000;
    break;
    case  /富山�?/.test(search_add):
    code = 160000;
    break;
    case  /石川県/.test(search_add):
    code = 170000;
    break;
    case  /福井県/.test(search_add):
    code = 180000;
    break;
    case  /愛知�?/.test(search_add):
    code = 230000;
    break;
    case  /岐�?�?/.test(search_add):
    code = 210000;
    break;
    case  /静岡�?/.test(search_add):
    code = 220000;
    break;
    case  /三重�?/.test(search_add):
    code = 240000;
    break;
    case  /大阪�?/.test(search_add):
    code = 270000;
    break;
    case  /兵庫�?/.test(search_add):
    code = 280000;
    break;
    case  /京都�?/.test(search_add):
    code = 260000;
    break;
    case  /滋�?�?/.test(search_add):
    code = 250000;
    break;
    case  /奈良�?/.test(search_add):
    code = 290000;
    break;
    case  /和歌山�?/.test(search_add):
    code = 300000;
    break;
    case  /鳥取県/.test(search_add):
    code = 310000;
    break;
    case  /島根�?/.test(search_add):
    code = 320000;
    break;
    case  /岡山�?/.test(search_add):
    code = 330000;
    break;
    case  /�?���?/.test(search_add):
    code = 340000;
    break;
    case  /山口�?/.test(search_add):
    code = 350000;
    break;
    case  /徳島�?/.test(search_add):
    code = 360000;
    break;
    case  /香川県/.test(search_add):
    code = 370000;
    break;
    case  /愛媛県/.test(search_add):
    code = 380000;
    break;
    case  /高知�?/.test(search_add):
    code = 390000;
    break;
    case  /福岡�?/.test(search_add):
    code = 400000;
    break;
    case  /大�?��/.test(search_add):
    code = 440000;
    break;
    case  /佐�?�?/.test(search_add):
    code = 410000;
    break;
    case  /長崎県/.test(search_add):
    code = 420000;
    break;
    case  /熊本�?/.test(search_add):
    code = 430000;
    break;
    case  /宮崎県/.test(search_add):
    code = 450000;
    break;
    case  /鹿児島�?/.test(search_add):
    code = 460100;
    break;
    case  /沖�?��/.test(search_add):
    var result  = search_add.slice( 3 );
    var array11 = ["那�?�?","宜野湾�?","浦添�?","糸�?�?","沖�?�?","豊見城�?","�?��ま�?","南城�?","読谷�?","嘉手納町","北谷町","北中城村","中城村","西原町","与那原町","南風原町","渡嘉敷�?","座間味�?","粟国�?","渡名喜�?","八重�?�町","名護�?","国頭�?","大宜味�?","東�?","今帰仁村","本部町","恩納村","宜野座�?","金武町","伊江村","伊平屋村","伊是名村","�?��島町"];
    var array12 = ["南大東�?","北大東�?"];
    var array13 = ["宮古島�?","多良間村"];
    var array14 = ["石垣�?","竹富町","与那国町"];
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
          // 取得�?功時
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
            // エラー発生時
            alert('エラー');
          }
        );
    });



    var s = '<div class="w_bg"><span class="w_city">'+inputText1+'</span><span class="w_title" id="pc_city">天気予報</span></div>';

    s += '<div class="sep"><ul class="day">';
    s += '<li><span class="day">' + get_date_string1(data.daily[0].dt)  + '</span></li>';
    s += '<li><span class="temp" style="display:none"><i style="color:#c1132e;margin-right:5px" class="fas fa-thermometer-half"></i>' + round_val(data.current.temp) + '℃' + '</li>';
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
            // 取得�?功時
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
              alert('失�?');
            }
          );
      });

      s += '<li>';
      s += '<span class="date">' + get_date_string2(list[i].dt) + '</span>';
      for (var j in list[i].weather) {
        var icon = list[i].weather[j].icon;
        s += '<img class="icon" src="http://openweathermap.org/img/wn/' + icon + '.png">';
      }
      s += '<div class="w_temp"><span class="max_temp" style="display:none"><i class="fa fa-caret-up" style="color:red"></i>' + Math.trunc(list[i].temp.max) + '℃' + '</span><span class="min_temp" style="display:none"><i class="fa fa-caret-down" style="color:blue"></i>';
      s += Math.trunc(list[i].temp.min) + '℃' + '</span></div><div class="rain_s" style="display:none;font-size: 10px;"><span class=rain' + [i] + '></span></div>';

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
    s += '</ul></div>';

    $('#weather2').html(s);

  };

    $.ajax({
        type: 'GET',
        url: 'https://msearch.gsi.go.jp/address-search/AddressSearch?q='+ search_add,
        dataType: 'json'
      })
      .then(
        // 取得�?功時
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
          // エラー発生時
          alert('失�?');
        }
      );
