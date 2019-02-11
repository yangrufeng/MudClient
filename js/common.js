var CLIENT_INPUT = "INPUT"; // 玩家输入消息
var CLIENT_NICKNAME = "NICKNAME"; // 玩家选定昵称
var CLIENT_USERS = "GET_USER"; // 玩家获取所有玩家（除自己以外）的名称列表
var CLIENT_ROLES = "GET_ROLE"; // 玩家获取游戏中可选角色列表
var CLIENT_PICKROLE = "PICK_ROLE"; // 玩家选定角色
var CLIENT_PICK= "PICK_ITEM"; // 玩家选定选项
var CLIENT_MOVE="MOVE"; // 玩家移动到地图某个点
var CLIENT_TRIGGER = "GET_TRIGGER"; // 玩家请求查询触发事项
var CLIENT_MONSTERDETAIL = "GET_MONSTERDETAIL"; // 玩家请求查询怪物详情
var CLIENT_PERSIONDETAIL = "GET_PERSIONDETAIL"; // 玩家请求查询人物详情
var CLIENT_ESCAPE = "REQUEST_ESCAPE"; // 玩家请求脱离战斗
var CLIENT_FIGHT = "CLIENT_FIGHT_MONSTER"; // 玩家对怪物发起攻击
var CLIENT_ITEMDETAIL = "GET_ITEMDETAIL"; // 玩家请求查询物品详情
var CLIENT_USE_ITEM = "USE_ITEM"; // 玩家请求使用物品
var CLIENT_EVENT = "ANSWER_EVENT"; // 玩家针对事件进行选择
var CLIENT_FIGHT_PERSION = "FIGHT_PERSION"; // 玩家与其它玩家或者NPC战斗
var CLIENT_WAIT = "WAIT"; // 玩家请求跳过当前回合
var CLIENT_GETMAP = "GETMAP"; // 请求获取最新地图

var SERVER_OUTPUT="OUTPUT"; // 服务器输出消息（响应INPUT）
var SERVER_ACTION="ACTION"; // 服务器返回玩家行动选项
var SERVER_PIKER="PIKER"; // 服务器返回玩家选择选项
var SERVER_USERS="USERS"; // 服务器返回用户名称列表
var SERVER_ROLES="ROLES"; // 服务器返回角色列表
var SERVER_TASK= "TASK"; // 服务器返回玩家任务列表
var SERVER_FIGHT= "START_FIGHT"; // 服务器返回战斗
var SERVER_EVENT= "SHOW_EVENT"; // 服务器返回事件要求
var SERVER_REFRESH_FIGHT = "REFRESH_FIGHT"; // 刷新战斗中的怪物列表
var SERVER_MONSTER_FIGHT= "MONSTER_FIGHT_CLIENT"; // 怪物攻击玩家
var SERVER_SHOWDESCRIPT= "SHOW_DES"; // 服务器返回地点描述
var SERVER_MONSTERDETAIL= "MONSTERDETAIL"; // 服务器返回怪物详情
var SERVER_PERSIONDETAIL = "PERSIONDETAIL"; // 服务器返回人物详情
var SERVER_ITEMDETAIL= "ITEMDETAIL"; // 服务器返回物品详情
var SERVER_ESCAPERESULT="ESCAPERESULT"; // 玩家脱离战斗结果（成功/失败）
var SERVER_TURNON = "TURNON"; // 服务器提示玩家可以进行操作
var SERVER_REBIRTH = "REBIRTH"; // 复活一名玩家
var SERVER_DROPOUT = "DROPOUT"; // 物品掉落
var SERVER_REFRESHPLAYER = "REFRESHPLAYER"; // 刷新玩家状态
var SERVER_REFRESHPERSIONS= "REFRESHPERSIONS"; // 刷新人物列表
var SERVER_REFRESH_FIGHT_PERSION = "REFRESH_FIGHT_PERSION"; // 刷新玩家看到的人物列表
var SERVER_REFRESH_FIGHT_MONSTER = "REFRESH_FIGHT_MONSTER"; // 刷新玩家看到的怪物列表
var SERVER_REFRESH_MAP = "REFRESH_MAP"; // 刷新玩家地图
var SERVER_MOD = "MOD"; // 服务器通知玩家当前游戏使用的MOD
var SERVER_PICKROLE = "PICKROLE"; // 服务器响应玩家选择角色
var SERVER_SHOWPLAYER= "SHOW_PLAYER"; // 服务器提示有玩家选好角色加入游戏
var SERVER_WAIT = "WAIT"; // 服务器控制玩家等待其他玩家操作
var SERVER_FIGHT_PERSION = "FIGHT_PERSION"; // 服务器响应玩家攻击玩家或NPC的结果

var SERVER_MOVE= "MOVE_RESPONSE"; // 响应MOVE
var SERVER_NPC= "SHOW_NPC"; // 展示NPC信息
var CLIENT_TALK = "TALK_TO"; // 与NPC交谈

var SPLIT_SEPARATOR="::"; // 指令分隔符
var CMD_SEPARATOR = "\\|"; // 命令分隔符
var ITEM_SEPARATOR = "/"; // 选项分隔符（分割玩家选项）

var ACTION_EAST = "东";
var ACTION_NORTH = "北";
var ACTION_WEST = "西";
var ACTION_SOUTH = "南";

var FIGHT_SRC = "SRC"; // 攻击发出者
var FIGHT_TARGET = "TARGET"; // 攻击目标
var FIGHT_HURT = "HURT"; // 造成的伤害

var JSON_ID = "ID";
var JSON_NAME = "NAME";
var JSON_HINT = "HINT";
var JSON_REQIURE = "REQIURE";
var JSON_PLACE = "PLACE";
var JSON_TERRAIN = "TERRAIN";
var JSON_ISFINISHED = "ISFINISHED";
var JSON_CON = "CON";
var JSON_STR = "STR";
var JSON_DEX = "DEX";
var JSON_DESC = "DESC";
var JSON_DROPOUT = "DROPOUT";
var JSON_THING = "THING";
var JSON_MONSTER = "MONSTER";
var JSON_UNIT = "UNIT";
var JSON_GOT = "GOT";
var JSON_ACTION = "ACTION";
var JSON_HUNGRY = "HUNGRY"
var JSON_TYPE = "TYPE";
var JSON_POSITION = "POSITION";

var ITEM_TYPE_EQUIPMENT_ON = "EQUIPMENT_ON"; // 已装备物品
var ITEM_TYPE_EQUIPMENT_OFF = "EQUIPMENT_OFF"; // 未装备物品

/*
 * MOD
 */
var MOD_NONE = "NONE"; // 无MOD
var MOD_SURVIVAL = "SURVIVAL"; // 大逃杀MOD(大逃杀)

/*
 * SURVIVAL MOD(大逃杀)
 */
var SURVIVAL_POISON_NUM = "POISON_NUM"; // 投毒结束后地点造成伤害（投毒数量）
var SURVIVAL_POISONING = "POISONING"; // 地点是否处于毒雾范围

function str2UTF8(str){  
    var bytes = new Array();
    var len,c;  
    len = str.length;  
    for(var i = 0; i < len; i++){  
        c = str.charCodeAt(i);  
        if(c >= 0x010000 && c <= 0x10FFFF){  
            bytes.push(((c >> 18) & 0x07) | 0xF0);  
            bytes.push(((c >> 12) & 0x3F) | 0x80);  
            bytes.push(((c >> 6) & 0x3F) | 0x80);  
            bytes.push((c & 0x3F) | 0x80);  
        }else if(c >= 0x000800 && c <= 0x00FFFF){  
            bytes.push(((c >> 12) & 0x0F) | 0xE0);  
            bytes.push(((c >> 6) & 0x3F) | 0x80);  
            bytes.push((c & 0x3F) | 0x80);  
        }else if(c >= 0x000080 && c <= 0x0007FF){  
            bytes.push(((c >> 6) & 0x1F) | 0xC0);  
            bytes.push((c & 0x3F) | 0x80);  
        }else{  
            bytes.push(c & 0xFF);  
        }  
    }  
    return bytes;  
}  
function byteToString(arr) {  
    if(typeof arr === 'string') {  
        return arr;  
    }  
    var str = '',  
        _arr = arr;  
    for(var i = 0; i < _arr.length; i++) {  
        var one = _arr[i].toString(2),  
            v = one.match(/^1+?(?=0)/);  
        if(v && one.length == 8) {  
            var bytesLength = v[0].length;  
            var store = _arr[i].toString(2).slice(7 - bytesLength);  
            for(var st = 1; st < bytesLength; st++) {  
                store += _arr[st + i].toString(2).slice(2);  
            }  
            str += String.fromCharCode(parseInt(store, 2));  
            i += bytesLength - 1;  
        } else {  
            str += String.fromCharCode(_arr[i]);  
        }  
    }  
    return str;  
}
//var a = ['mac', 'iphone', 'vivo', 'OPPO'];
//var b = [0.1, 0.2, 0.3, 0.4];
//console.log(random(a, b));
function random(arr1, arr2) {
	var sum = 0,
	factor = 0,
	random = Math.random();
	for(var i = arr2.length - 1; i >= 0; i--) {
		sum += arr2[i]; // 统计概率总和
	};
	random *= sum; // 生成概率随机数
	for(var i = arr2.length - 1; i >= 0; i--) {

		factor += arr2[i];

		if(random <= factor)

			return arr1[i];

	};
	return null;
};

function f_check_IP(ip) {
   var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;//正则表达式   
   if(re.test(ip))   
   {   
       if( RegExp.$1<256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) 
       return true;   
   }  
   return false;    
}
