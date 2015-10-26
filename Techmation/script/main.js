function OnloadFuntion() {
    buildSubscription();
}
function cleanDiv(elementID) {
    document.getElementById(elementID).innerHTML = "";
}var g_bEStopState = 0;// 显示Toolbar
function showToolbar(){	var traget=document.getElementById("div_Toolbar");	traget.style.display="block"; 	}function show_AreaSetToolbar(){	var traget=document.getElementById("div_AreaSetToolbar");	traget.style.display="block"; 	}// 隐藏Toolbarfunction hideToolbar(){	var traget=document.getElementById("div_Toolbar");	traget.style.display="none"; 	}function hide_AreaSetToolbar(){	var traget=document.getElementById("div_AreaSetToolbar");	traget.style.display="none"; 	}// 数字小数点负号function checkNum(e,len) {    var obj=e.srcElement || e.target;    var dot=obj.value.indexOf(".");//alert(e.which);    len =(typeof(len)=="undefined")?2:len;    var  key=e.keyCode|| e.which;	//console.log(key);    if(key==8 || key==9 || key==46 )//这里为了兼容Firefox的backspace,tab,del,方向键        return true;				if ((key<=57 && key>=48) || key == 45) { //数字 負號			if(dot==-1)//没有小数点				return true;			else if(obj.value.length<=dot+len)//小数位数			{				return true;			}			}else if((key==46) && dot==-1){//小数点			return true;		}     return false;}// 数字小数点负号function checkNumSmall(e,len) {    var obj=e.srcElement || e.target;    var dot=obj.value.indexOf(".");//alert(e.which);    len =(typeof(len)=="undefined")?2:len;    var  key=e.keyCode|| e.which;	//console.log(key);    if(key==8 || key==9 || key==46 )//这里为了兼容Firefox的backspace,tab,del,方向键        return true;				if (key<=57 && key>=48) { //数字 負號			if(dot==-1)//没有小数点				return true;			else if(obj.value.length<=dot+len)//小数位数			{				return true;			}			}else if((key==46) && dot==-1){//小数点			return true;		}     return false;}/*function writeValue(id){	//var value = inp_X_MaxVelo.value.toFixed(2);
	//console.log(value);
	//document.getElementById(id).value = value;}*/var		IdName_AutoRefresh = ["inp_X_MovePistion",   //手动定位位置							  "inp_Y1_MovePistion",							  "inp_Z1_MovePistion",							  "inp_X_ManualVelocity",  //手动速度设定							  "inp_Y1_ManualVelocity",							  "inp_Z1_ManualVelocity",							  "inp_Y2_ManualVelocity",							  "inp_Z2_ManualVelocity",							  "inp_Coords1_X",        //路径坐标位置							  "inp_Coords1_Y1",							  "inp_Coords1_Z1",							  "inp_Coords1_Y2",							  "inp_Coords1_Z2",							  "inp_Coords2_X",        							  "inp_Coords2_Y1",							  "inp_Coords2_Z1",							  "inp_Coords2_Y2",							  "inp_Coords2_Z2",							  "inp_Coords3_X",        							  "inp_Coords3_Y1",							  "inp_Coords3_Z1",							  "inp_Coords3_Y2",							  "inp_Coords3_Z2",							  "inp_Coords4_X",        							  "inp_Coords4_Y1",							  "inp_Coords4_Z1",							  "inp_Coords4_Y2",							  "inp_Coords4_Z2",							  "inp_X_HomingPos",   //歸零位置							  "inp_Y1_HomingPos",							  "inp_Z1_HomingPos",							  "inp_Y2_HomingPos",							  "inp_Z2_HomingPos",							  "inp_X_MaxVelo",    //馬達參數--最大速度							  "inp_Y1_MaxVelo",							  "inp_Z1_MaxVelo",							  "inp_Y2_MaxVelo",							  "inp_Z2_MaxVelo",							  "inp_X_VeloPercent",//馬達參數--最大速度百分比							  "inp_Y1_VeloPercent",							  "inp_Z1_VeloPercent",							  "inp_Y2_VeloPercent",							  "inp_Z2_VeloPercent",							  "inp_X_MaxAccel",    //馬達參數--最大加速度							  "inp_Y1_MaxAccel",							  "inp_Z1_MaxAccel",							  "inp_Y2_MaxAccel",							  "inp_Z2_MaxAccel",							  "inp_X_AccelPercent",//馬達參數--最大減速度百分比							  "inp_Y1_AccelPercent",							  "inp_Z1_AccelPercent",							  "inp_Y2_AccelPercent",							  "inp_Z2_AccelPercent",							  "inp_X_MaxDecel",    //馬達參數--最大減速度							  "inp_Y1_MaxDecel",							  "inp_Z1_MaxDecel",							  "inp_Y2_MaxDecel",							  "inp_Z2_MaxDecel",							  "inp_X_DecelPercent",//馬達參數--最大減速度百分比							  "inp_Y1_DecelPercent",							  "inp_Z1_DecelPercent",							  "inp_Y2_DecelPercent",							  "inp_Z2_DecelPercent",							  "inp_X_MaxJerk"	,	  //馬達參數--最大加加速度							  "inp_Y1_MaxJerk",							  "inp_Z1_MaxJerk",							  "inp_Y2_MaxJerk",							  "inp_Z2_MaxJerk",							  "inp_X_JerkPercent", //馬達參數--最大加加速度百分比							  "inp_Y1_JerkPercent",							  "inp_Z1_JerkPercent",							  "inp_Y2_JerkPercent",							  "inp_Z2_JerkPercent",							  "inp_X_MinPosition", //馬達參數--最小位置							  "inp_Y1_MinPosition",							  "inp_Z1_MinPosition",							  "inp_Y2_MinPosition",							  "inp_Z2_MinPosition",							  "inp_X_MaxPosition",  //馬達參數--最大位置							  "inp_Y1_MaxPosition",							  "inp_Z1_MaxPosition",							  "inp_Y2_MaxPosition",							  "inp_Z2_MaxPosition",							  "inp_PathMaxVelo",    //路徑最大速度							  "inp_PathMaxAccel",   //路徑最大加速度							  "inp_PathAccelPercent",//路徑最大加速度百分比							  "inp_PathMaxDecel",    //路徑最大減速度							  "inp_PathDecelPercent",//路徑最大減速度百分比							  "inp_PathMaxJerk",     //路徑最大加加速							  "inp_PathJerkPercent", //路徑最大加加速百分比								  "inp_ClampL",			 //夹具长                     區域設定---夾具							  "inp_ClampW",          //夹具宽							  "inp_ClampH",          //夹具高							  "inp_SafetyDoor_X",    //安全門型外極限X            區域設定---禁區  							  "inp_SafetyDoor_Y1",   //安全門型外極限Y1							  "inp_SafetyDoor_Z1",   //安全門型外極限Z1							  "inp_TieBar_X",        //格林柱型內極限X							  "inp_TieBar_Y1",       //格林柱型內極限Y1							  "inp_TieBar_Z1",       //格林柱型內極限Z1							  "inp_GetPoint_Radius", //夾取點半徑                 區域設定---緩衝區							  "inp_GetPoint_X",      //夾取點坐標X               							  "inp_GetPoint_Y1",     //夾取點坐標Y							  "inp_GetPoint_Z1",     //夾取點坐標Z							  "inp_GetPoint_Radius", //放置點半徑							  "inp_SetPoint_X",      //放置點坐標X							  "inp_SetPoint_Y1",     //放置點坐標Y							  "inp_SetPoint_Z1",     //放置點坐標Z							  "inp_Crumple_Velo",    //緩衝區速度							  "inp_Crumple_Accel",   //緩衝器加速度							  "inp_Crumple_Decel",   //緩衝區減速度							  "inp_Crumple_Jerk",    //緩衝區加加速度							  "inp_MaxPos_X",        //最大工作位置X              區域設定---工作區域							  "inp_MinPos_X",        //最小工作位置X             							  "inp_MaxPos_Y1",       //最大工作位置Y1							  "inp_MinPos_Y1",       //最小工作位置Y1							  "inp_MaxPos_Z1",       //最大工作位置Z1							  "inp_MinPos_Z1",        //最小工作位置Z1
							 ];				var		VarName_AutoRefresh = ["unit/xPTemplAxisFB.gashmidata[0].saxisdata.sposdata.r32position",   //手动定位位置								"unit/xPTemplAxisFB.gashmidata[1].saxisdata.sposdata.r32position",								"unit/xPTemplAxisFB.gashmidata[2].saxisdata.sposdata.r32position",								"unit/xPTemplAxisFB.gasHMIData[0].sAxisData.sPosData.r32Velocity", //手动速度设定								"unit/xPTemplAxisFB.gasHMIData[1].sAxisData.sPosData.r32Velocity",								"unit/xPTemplAxisFB.gasHMIData[2].sAxisData.sPosData.r32Velocity",								"unit/xPTemplAxisFB.gasHMIData[3].sAxisData.sPosData.r32Velocity",								"unit/xPTemplAxisFB.gasHMIData[4].sAxisData.sPosData.r32Velocity",								"unit/dHdGlobal.gascoords[1].x",                                   //路径坐标位置								"unit/dHdGlobal.gascoords[1].y1",								"unit/dHdGlobal.gascoords[1].z1",								"unit/dHdGlobal.gascoords[1].y2",								"unit/dHdGlobal.gascoords[1].z2",								"unit/dHdGlobal.gascoords[2].x",                                								"unit/dHdGlobal.gascoords[2].y1",								"unit/dHdGlobal.gascoords[2].z1",								"unit/dHdGlobal.gascoords[2].y2",								"unit/dHdGlobal.gascoords[2].z2",								"unit/dHdGlobal.gascoords[3].x",                                								"unit/dHdGlobal.gascoords[3].y1",								"unit/dHdGlobal.gascoords[3].z1",								"unit/dHdGlobal.gascoords[3].y2",								"unit/dHdGlobal.gascoords[3].z2",								"unit/dHdGlobal.gascoords[4].x",                                								"unit/dHdGlobal.gascoords[4].y1",								"unit/dHdGlobal.gascoords[4].z1",								"unit/dHdGlobal.gascoords[4].y2",								"unit/dHdGlobal.gascoords[4].z2",								"unit/xPTemplAxisFB.gasHMIData[0].sAxisData.sHomingData.r32HomePosition",  //歸零位置								"unit/xPTemplAxisFB.gasHMIData[1].sAxisData.sHomingData.r32HomePosition",								"unit/xPTemplAxisFB.gasHMIData[2].sAxisData.sHomingData.r32HomePosition",								"unit/xPTemplAxisFB.gasHMIData[3].sAxisData.sHomingData.r32HomePosition",								"unit/xPTemplAxisFB.gasHMIData[4].sAxisData.sHomingData.r32HomePosition",								"unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxVelo",                            //馬達參數--最大速度								"unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxVelo",								"unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxVelo",								"unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxVelo",								"unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxVelo",								"unit/dHdGlobal.gsHMIdata.sAxis[1].r64Velo",                                //馬達參數--最大速度百分比								"unit/dHdGlobal.gsHMIdata.sAxis[2].r64Velo",								"unit/dHdGlobal.gsHMIdata.sAxis[3].r64Velo",								"unit/dHdGlobal.gsHMIdata.sAxis[4].r64Velo",								"unit/dHdGlobal.gsHMIdata.sAxis[5].r64Velo",								"unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxAccel",                            //馬達參數--最大加速度								"unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxAccel",								"unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxAccel",								"unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxAccel",								"unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxAccel",								"unit/dHdGlobal.gsHMIdata.sAxis[1].r64Accel",                               //馬達參數--最大減速度百分比								"unit/dHdGlobal.gsHMIdata.sAxis[2].r64Accel",								"unit/dHdGlobal.gsHMIdata.sAxis[3].r64Accel",								"unit/dHdGlobal.gsHMIdata.sAxis[4].r64Accel",								"unit/dHdGlobal.gsHMIdata.sAxis[5].r64Accel",								"unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxDecel",							 //馬達參數--最大減速度								"unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxDecel",								"unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxDecel",								"unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxDecel",								"unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxDecel",								"unit/dHdGlobal.gsHMIdata.sAxis[1].r64Decel",								 //馬達參數--最大減速度百分比								"unit/dHdGlobal.gsHMIdata.sAxis[2].r64Decel",								"unit/dHdGlobal.gsHMIdata.sAxis[3].r64Decel",								"unit/dHdGlobal.gsHMIdata.sAxis[4].r64Decel",								"unit/dHdGlobal.gsHMIdata.sAxis[5].r64Decel",								"unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxJerk",						     //馬達參數--最大加加速度								"unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxJerk",								"unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxJerk",								"unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxJerk",								"unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxJerk",								"unit/dHdGlobal.gsHMIdata.sAxis[1].r64Jerk",								 //馬達參數--最大加加速度百分比								"unit/dHdGlobal.gsHMIdata.sAxis[2].r64Jerk",								"unit/dHdGlobal.gsHMIdata.sAxis[3].r64Jerk",								"unit/dHdGlobal.gsHMIdata.sAxis[4].r64Jerk",								"unit/dHdGlobal.gsHMIdata.sAxis[5].r64Jerk",								"unit/dHdGlobal.gsHMIdata.sAxis[1].r64swLimitNeg",                           //馬達參數--最小位置								"unit/dHdGlobal.gsHMIdata.sAxis[2].r64swLimitNeg",								"unit/dHdGlobal.gsHMIdata.sAxis[3].r64swLimitNeg",								"unit/dHdGlobal.gsHMIdata.sAxis[4].r64swLimitNeg",								"unit/dHdGlobal.gsHMIdata.sAxis[5].r64swLimitNeg",								"unit/dHdGlobal.gsHMIdata.sAxis[1].r64swLimitPos",						   	 //馬達參數--最大位置								"unit/dHdGlobal.gsHMIdata.sAxis[2].r64swLimitPos",								"unit/dHdGlobal.gsHMIdata.sAxis[3].r64swLimitPos",								"unit/dHdGlobal.gsHMIdata.sAxis[4].r64swLimitPos",								"unit/dHdGlobal.gsHMIdata.sAxis[5].r64swLimitPos",								"unit/dHdGlobal.gsHMIdata.sPath.r64MaxVelo",                                 //路徑最大速度 								"unit/dHdGlobal.gsHMIdata.sPath.r64MaxAccel",							    //路徑最大加速度								"unit/dHdGlobal.gsHMIdata.sPath.r64Accel",									//路徑最大加速度百分比								"unit/dHdGlobal.gsHMIdata.sPath.r64MaxDecel",								//路徑最大減速度								"unit/dHdGlobal.gsHMIdata.sPath.r64Decel",									//路徑最大減速度百分比								"unit/dHdGlobal.gsHMIdata.sPath.r64Decel",									//路徑最大加加速								"unit/dHdGlobal.gsHMIdata.sPath.r64Jerk",									//路徑最大加加速百分比								"unit/dHdGlobal.gsHMIdata.sProductZone.r64PickerL",                         //夾具長                            區域設定---夾具								"unit/dHdGlobal.gsHMIdata.sProductZone.r64PickerW",                         //夾具寬								"unit/dHdGlobal.gsHMIdata.sProductZone.r64PickerH",                         //夾具高								"unit/dHdGlobal.gsHMIdata.sBlockedZone1.r64SafetyDoorX",                    //安全門型外極限X                   區域設定---禁區								"unit/dHdGlobal.gsHMIdata.sBlockedZone1.r64SafetyDoorY",                    //安全門型外極限Y1								"unit/dHdGlobal.gsHMIdata.sBlockedZone1.r64SafetyDoorZ",                    //安全門型外極限Z1								"unit/dHdGlobal.gsHMIdata.sBlockedZone1.r64TieBarX",                        //格林柱型內極限X								"unit/dHdGlobal.gsHMIdata.sBlockedZone1.r64TieBarY",                        //格林柱型內極限Y1								"unit/dHdGlobal.gsHMIdata.sBlockedZone1.r64TieBarZ",                        //格林柱型內極限Z1								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64PickRadius",                      //夾取點半徑                 區域設定---緩衝區								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64PickX",                           //夾取點坐標X                								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64PickY",                           //夾取點坐標Y								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64PickZ",                           //夾取點坐標Z								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64PlaceRadius",                     //放置點半徑								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64PlaceX",                          //放置點坐標X								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64PlaceY",                          //放置點坐標Y								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64PlaceZ",                          //放置點坐標Z								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64Velo",                            //緩衝區速度								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64Accel",                           //緩衝器加速度								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64Decel",                           //緩衝區減速度								"unit/dHdGlobal.gsHMIdata.sDynamicZone.r64Jerk",                            //緩衝區加加速度								"unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Xpos",                            //最大工作位置X              區域設定---工作區域								"unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Xneg",                            //最小工作位置X             								"unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Ypos",                            //最大工作位置Y1								"unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Yneg",                            //最小工作位置Y1								"unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Zpos",                            //最大工作位置Z1								"unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Zneg",                            //最小工作位置Z1                                
								]; var	SiemensAlarmID = [1,
                      2,
					  3,
					  4,
					  5,
					  6,
					  7,
					  8,
					  9,
					  10,
					  11,
					  12,
					  13,
					  14,
					  15,
					  16,
					  17,
					  18,
					  19,
					  20,
					  21,
					  22,
					  23,
                      150,                      151,					  152,					  153,					  256,					  257,					  258,					  259,					  260,					  261,					  262,					  263,					  264,					  265,					  266,					  267,					  268,					  269,					  270,					  271,					  272,					  273,					  274,					  275,					  276,					  277,					  278,					  279,					  280,					  281,					  282,					  283,					  284,					  285,					  286,					  287,					  288,					  289,					  304,					  497,					  498,					  499,					  500,					  501,					  502,					  503,					  504,					  505,					  506,					  507,					  513,					  514,					  515,					  516,					  517,					  518,					  519,					  520,					  521,					  522,					  523,					  524,					  525,					  526,					  527,					  528,					  529,					  530,					  531,					  532,					  533,					  534,					  535,					  536,					  771,					  773,					  774,					  775,					  776,					  777,					  784,					  785,					  786,					  787,					  788,					  789,					  790,					  791,					  792,					  793,					  798,					  799,					  800,					  801,					  802,					  803,					  804,					  805,					  806,					  816,					  817,					  818,					  819,					  820,					  832,					  833,					  848,					  4352,					  4353,					  4355,					  4356,					  4357,					  4358,					  4359,					  4360,					  4361,					  4369,					  4370,					  4371,					  4372,					  20480,					  20481,					  20482,					  20483,					  20484,					  20485,					  20486,					  20487,					  20488,					  20489,					  131072,					  131073,					  131074,					  131075,					  131076];					  var SiemensAlarmDes = ["請原點復歸",
                       "馬達未開",
					   "緊急停止鍵被按下",
					   "動作超時",
					   "單步動作超時",
					   "全程動作超時",
					   "主臂夾取異常",
					   "主臂放置異常",
					   "主臂吸盤異常",
					   "姿勢水平異常",
					   "姿勢垂直異常",
					   "成品模數已到",
					   "注塑機未進入全自動",
					   "未允許機械手進入",
					   "模具範圍未空",
					   "模具未在中間位置",
					   "(未允許)開模訊號異常",
					   "(未允許)關模訊號異常",
					   "未達頂進位置",
					   "未達頂退位置",
					   "中子未允許機械手進入",
					   "中子未處於可取產品位置",
					   "原點復歸成功",
                       "ERR_WRONG_SYNC_AXIS_INDEX: Wrong synchronous axis index",					   "ERR_PATH_OBJECT_TONIL: Invalid instance of path object (TO#NIL)",					   "ERR_WRONG_KINEMATIC_AXIS_INDEX: Wrong axis index for kinematics",					   "ERR_WRONG_KINEMATIC_AXIS_TYPE: Wrong axis type for kinematics",					   "ERR_KINEMATIC_AXIS_TONIL: Invalid axis instance for kinematics",					   "ERR_AXIS_TONIL: Invalid instance of axes (TO#NIL)",					   "ERR_TIMEOUT: TimeOut",					   "ERR_PRECON_POWER_ON: Invalid preconditon CMD_POWER_ON",					   "ERR_POWER_ON: Error during CMD_POWER_ON",					   "ERR_POWER_OFF: Error during CMD_POWER_OFF",					   "ERR_STOP: Error during CMD_STOP",					   "ERR_MOVE: Error during CMD_MOVE",					   "ERR_PRECON_MOVE: Invalid preconditon of CMD_MOVE",					   "ERR_POS_ABS: Error during CMD_POS_ABS",					   "ERR_PRECON_POS_ABS: Invalid preconditon of CMD_POS_ABS",					   "ERR_POS_REL: Error during CMD_POS_REL",					   "ERR_PRECON_POS_REL: Invalid preconditon of CMD_POS_REL",					   "ERR_HOME: Error during CMD_HOME",					   "ERR_PRECON_HOME: Invalid preconditon of CMD_HOME",					   "ERR_GEAR_IN: Error during CMD_GEAR_IN",					   "ERR_PRECON_GEAR_IN: Invalid preconditon of CMD_GEAR_IN",					   "ERR_GEAR_OUT: Error during CMD_GEAR_OUT",					   "ERR_GEAR_IN_SUPERIMPOSED: Error during CMD_GEAR_IN_SUPER",					   "ERR_PRECON_GEAR_IN_SUPERIMPOSED: Invalid preconditon of CMD_GEAR_IN_SUPER",					   "ERR_GEAR_OUT_SUPERIMPOSED: Error during CMD_GEAR_OUT_SUPER",					   "ERR_INVALID_PROGRAM_SET: Error invalid number of program set",					   "ERR_POS_XYZ: Error during CMD_POS_..._XYZ",					   "ERR_PRECON_POS_XYZ: Invalid preconditon of CMD_POS_..._XYZ",					   "ERR_MAX_AXES: Invalid constant MAX_AXES (must be > 0)",					   "ERR_MAX_POINT_NUMBER: Invalid constant MAX_POINT_NUMBER (must be > 0)",					   "ERR_MAX_NUMBER_OF_PATHAXES: Invalid constant MAX_NUMBER_OF_PATHAXES",					   "ERR_CALC_SEG: Error during CMD_CALC_SEG",					   "ERR_CAM_IN_ABS: Error during CMD_CAM_IN",					   "ERR_PRECON_CAM_IN: Invalid precondition of CMD_CAM_IN",					   "ERR_CAM_OUT: Error during CMD_CAM_OUT",					   "ERR_CAM_IN_ABS_SUPERIMPOSED: Error during CMD_CAM_IN_SUPER",					   "ERR_PRECON_CAM_IN_SUPERIMPOSED: Invalid precondition of CMD_CAM_IN_SUPER",					   "ERR_CAM_OUT_SUPERIMPOSED: Error during CMD_CAM_OUT_SUPER",					   "ERR_DESYNCHRONIZE_FOLLOWING_OBJECT: Errror at desynchronization of following object",					   "ERR_PRECON_POS_SEG: Invalid precondition of CMD_POS_SEG",					   "ERR_INTERRUPT_MOTION: Error during CMD_INTERRUPT_MOTION",					   "ERR_CONTINUE_MOTION: Error during CMD_CONTINUE_MOTION",					   "ERR_MAX_NUMBER_OF_PATHCMD: Invalid constant MAX_NUMBER_OF_PATHCMD",					   "ERR_REDEFINE_POSITION: Error during CMD_REDEFINE_POSITION",					   "ERR_CONTINUE_PROGRAM: Error during CMD_CONTINUE_PROGRAM",					   "ERR_POSITION_TOLERANCE_EXCEEDED: Error position tolerance exceeded",					   "ERR_PRECON_REDEFINE_POSITION: Invalid precondition of CMD_REDEFINE_POSITION",					   "ERR_PRECON_POS_SYNC_AX_START: Invalid precondition of CMD_POS_SYNC_AX_START",					   "ERR_POS_SYNC_AX_START: Error during CMD_POS_SYNC_AX_START",					   "ERR_CONTINUE_MANUAL: Error during CMD_CONTINUE_MANUAL",					   "ERR_POS_OOR: Calculated position is out of range",					   "ERR_ROBO_ND: Wrong kinematic ID",					   "ERR_SINGULARITY: Calculated position is singulary",					   "ERR_TRAVPATH_ZERO: Calculated length of pathsegment is zero",					   "ERR_SEGMENT_CAMMING: Segment is reserved at this time",					   "ERR_DOUBLE_POINTS: Two neighboring points coincide",					   "ERR_PRECON_CALC_SEG: FB Calculation is not declared",					   "ERR_SEGMENT_NUMBER: Error - number of segment",					   "ERR_PROGRAM_SETS: Error - number of program set",					   "ERR_DATASET_NUMBER: Error - number of dataset",					   "ERR_POINT_NUMBER: Error - point number",					   "ERR_LOADING_DATASET: Error - loading dataset from MMC",					   "ERR_SAVING_DATASET: Error - saving dataset to MMC",					   "ERR_AXIS_NOT_ON_STARTPOS: Error - axis position segment start",					   "ERR_COLL_STAT: Static zone collision at current position",					   "ERR_COLL_DYN: Dynamic zone collision during calculation",					   "ERR_PRECON_POS_TO_LIMIT: Invalid precondition of CMD_POS_TO_LIMIT",					   "ERR_PRECON_STEP_TO_LIMIT: Invalid precondition of CMD_STEP_TO_LIMIT",					   "ERR_WRONG_AXIS_TYPE: Wrong axis type",					   "ERR_CAM_TONIL: Invalid instance of cams (TO#NIL)",					   "ERR_SWITCH_CS: Error during CMD_SWITCH_CS",					   "ERR_SYNC_OCS: Error: actual CS is not synchronized",					   "ERR_SYNC_ABORTED: Synchronization aborted",					   "ERR_INVALID_CAM: Invalid cam",					   "ERR_NO_BASE_SEGMENT: No base segment for CMD_CREATE_SEG_OFFSET",					   "ERR_SYN_CAM_TONIL: TO reference for synchronous axi(e)s TO#NIL",					   "ERR_CREATE_SYNC_CAM: Creating cam for secondary sync. axis",					   "ERR_RESET: Error CMD_RESET",					   "ERR_ADD_TO_CAM: Error during writing to CAM",					   "ERR_PARAM_SYNC_AXIS: Invalid parameter synchronous axis",					   "ERR_CLAMPING_VALUE: Invalid clamping value",					   "ERR_EN_MOVE_TO_END_STOP: Error - CMD_EN_MOVE_TO_END_STOP",					   "ERR_DIS_MOVE_TO_END_STOP: Error - CMD_DIS_MOVE_TO_END_STOP",					   "ERR_PRECON_EN_MOVE_TO_END_STOP: Invalid precondition of CMD_EN_MOVE_TO_END_STOP",					   "ERR_PRECON_DIS_MOVE_TO_END_STOP: Invalid precondition of CMD_DIS_MOVE_TO_END_STOP",					   "ERR_TORQUE_LIMIT: Invalid torque limit",					   "ERR_EN_TORQUE_LIMITING: Error - CMD_EN_TORQUE_LIMITING",					   "ERR_DIS_TORQUE_LIMITING: Error - CMD_DIS_TORQUE_LIMITING",					   "ERR_PRECON_EN_TORQUE_LIMITING: Invalid preconditon CMD_EN_TORQUE_LIMITING",					   "ERR_PRECON_DIS_TORQUE_LIMITING: Invalid precondition CMD_DIS_TORQUE_LIMITING",					   "ERR_SET_TRACKING_SHIFT: Invalid TO instance",					   "ERR_MAX_BASIC_SEG_POINT_NUMBER: Invalid constant MAX_BASIC_SEG_POINT_NUMBER",					   "ERR_PRECON_BASIC_SEG: Error precondition of basic segment",					   "ERR_CREATE_BASIC_SEG: Error at creating of basic segment",					   "ERR_POS_BASIC_SEG: Error at running basic segment",					   "ERR_ENABLE_TRACKING_BASIC_SEG: Error at tracking of basic segment",					   "ERR_MOVE_W_AXIS_BASIC_SEG: Error rotation axis of basic segment",					   "ERR_STOP_BASIC_SEG: Error at stopping of basic segment",					   "ERR_ADAPT_SYNC_DYN_BASIC_SEG: Error at adapting synch. dynamics basic segment",					   "ERR_ENABLE_SIMULATION: Error simulation on path/following object",					   "ERR_DISABLE_SIMULATION: Error simulation off path/following object",					   "ERR_CREATE_SEG_BY_BASIC_SEG: Error during CMD_CREATE_SEG_BY_BASIC_SEG",					   "ERR_PLAUSIBILITY_BASIC_SEG: Plausibility error CMD_CREATE_SEG_BY_BASIC_SEG",					   "ERR_SWITCH_CS_BASIC_SEG: Error change coordinate system basic segment",					   "ERR_PRECON_WAIT_FOR_AXIS_CLAMPED: Invalid preconditon CMD_WAIT_FOR_AXIS_CLAMPED",					   "ERR_PRECON_WAIT_FOR_AXIS_OPERATING_AT_TORQUE_LIMIT: Invalid precon. CMD_WAIT_FOR_AXIS_OP._AT_TORQUE_",					   "ERR_PRECON_OUTPUT_CAM: FB_OutputCamsControl not registered",					   "WAR_INVALID_AXIS_NUMBER: Warning invalid number of Axis",					   "WAR_INVALID_PARA_NUMBER: Warning invalid value of parameter",					   "WAR_INVALID_SEGMENT_NUMBER: Warning invalid number of segments",					   "WAR_PROGRAM_IS_RUNNING: Warning program is already running",					   "WAR_PROGRAM_IS_STOPPED: Warning program is stopped",					   "WAR_INVALID_POINT_NUMBER: Warning invalid number of points",					   "WAR_INVALID_CS_NUMBER: Warning invalid number of coordinate system",					   "WAR_INVALID_BASIC_POINT_NUMBER: Warning invalid point number basic segment",					   "WAR_INVALID_DYNAMIC_SET: Warning invalid dynamic DataSet",					   "WAR_INVALID_TYPE_OF_AXIS: Invalid type of axis (virtual axis?)",					   "WAR_INVALID_PARA_MODE: Invalid command parameter mode",					   "WAR_STARTPOINT_TOLERANCE: Tolerance violation start point",					   "WAR_ESTOP_MANUAL_NOT_ACTIVE: E-Stop in mode manual not active",					   "ERR_ETRANS_TRANSFORMATION: specific transformation error",					   "ERR_ETRANS_STATE_REDEFINE_COMMAND: redefine position input axes failed",					   "ERR_ETRANS_MOTIONIN: activation/monitoring motion interf",					   "ERR_ETRANS_CONSTANTS: invalid constant values",					   "ERR_ETRANS_LIMIT_REACHED_AFTER_REDEF: redef. pos. tolerance limit reached",					   "ERR_ETRANS_COMMANDVAL_TOLERANCE: command value exceeded",					   "ERR_ETRANS_PATH_TOLERANCE: path tolerance exceeded",					   "ERR_ETRANS_AXES_PRECONDITION: Invalid precondition output axis",					   "ERR_ETRANS_OUTPUTAXIS: output axis",					   "ERR_ETRANS_NO_AXES_USED: no output axes",					   "ERR_ETRANS_UNKNOWN_TRANSID: unknown transformation ID",					   "ERR_ETRANS_OUTAX_0_POSITION: out axis zero position",					   "ERR_ETRANS_XY_UNDEFINED: XY undefined",					   "ERR_ETRANS_SINGULARITY: singularity",					   "ERR_ETRANS_OUT_OF_RANGE: out of range"]; var	TMAlarmID = [4096,				 4097,				 4098,				 4099,				 4100,				 4101,				 4102,				 4103,				 4104,				 4105,				 4122,				 4123,				 4124,				 4125,				 4126,				 4127,				 4128,				 4129,				 4130,				 4131,				 4132,				 4133,				 4134,				 4135,				 4136,				 4137,				 4138,				 4139,				 4140,				 4141,				 4142,				 4143,				 4144,				 4145,				 4146,				 4147,				 4148,				 4149,				 4150,				 4151,				 4152,				 4153,				 4154,				 4155,				 4156];				var TMAlarmDes =["緊急停止後請原點復歸",				 "軟體未使能",				 "超出靜止區域",				 "動作超時",				 "單步動作執行超時",				 "未在橫出保護區",				 "橫出極限異常",				 "橫入極限異常",				 "橫行出故障",				 "橫行入故障",				 "橫行出距離異常",				 "姿勢水平異常",				 "姿勢垂直異常",				 "夾取失誤",				 "產品開放",				 "產品開放錯誤",				 "主臂夾具異常",				 "主臂吸盤異常",				 "成品模數已到",				 "緊急停止異常",				 "緊急性錯誤",				 "請先尋找零點或者歸零",				 "尋找零點成功",				 "位置歸零未完成",				 "未歸零",				 "歸零未完成",				 "尋找零點失敗",				 "設定資料未準備就緒",				 "資料設定越界",				 "線上程式設計資料解析錯誤",				 "線上程式設計資料編輯錯誤",				 "線上程式設計資料有誤",				 "Y軸橫移保護",				 "Y軸下降保護",				 "射出機與機械手未一起運行:射出機在手動模式，無法進入機械手全自動模式",				 "未允許機械手進入",				 "模具範圍未空",				 "模具未在中間位置",				 "(未允許)開模訊號異常",				 "(未允許)關模訊號異常",				 "射出機未進入全自動狀態",				 "未達頂進位置",				 "未達頂退位置",				 "中子未允許機械手進入",				 "中子未處於可取產品位置"];				 				 
function writeSingleVar(id) {			if(id == "btn_Stop" || id == "btn_EStop"){		    if (gboEstop == "false") {            writeValueFN("true", "unit/dHdGlobal.gboEstop");        }        else {            writeValueFN("false", "unit/dHdGlobal.gboEstop");        }	}		else {			for(var i = 0; i < IdName_AutoRefresh.length; i++)		{			if(id == IdName_AutoRefresh[i])			{				var tmpValue = document.getElementById(id).value;				writeValueFN(tmpValue, VarName_AutoRefresh[i]);				break;			}		}	}
}
//////////////////////////////////////////////////
// Aufbau Subscription
//////////////////////////////////////////////////
//////////////////////////////////////////////////
// OPC-XML Subscription
//////////////////////////////////////////////////
// Die OPC-XML SubscriptionAutoRefresh wird verwendet um die Werte von angebundenen Variablen auf der Oberflche azyklisch zu aktualisieren.

// Die SubscriptionCycle beschreibt die Aktualisierungszeit in ms
var SubscriptionCycle = 50;
var SubscriptionInstance = null;
var SubscriptionData =
	{
	    ItemList: new Array(),
	    LastIndex: 0
	};var tmAlarmData = new Array();for(var i = 0; i < 20; i++){	tmAlarmData[i] = new Array();	for(var j = 0; j < 6; j++)	{		tmAlarmData[i][j] = 0;	}}var SiemensAlarmData = new Array();for(var i = 0; i < 20; i++){	SiemensAlarmData[i] = new Array();	for(var j = 0; j < 6; j++)	{		SiemensAlarmData[i][j] = 0;	}}	
function subscription(instance, cycleTime, parItemList) {
    var HandleList = new Array;

    if (!instance) {
        //Rckgabefunktion fr die subscription. Diese Funktion beschreibt wie die aktualisierten Variablen auf der HTML-Seite dargestellt werden sollen.
        var tmpSubscriptionCB = function (CurrentValues) {
            for (var i = 0; i < CurrentValues.length; i++) {
                for (var k = 0; k < HandleList.length; k++) {
                    if (CurrentValues[i].mItemHandle == HandleList[k]) {
                        var Value = "empty";
                        switch (parItemList[k].style) {
                            //Diese switch-case Anweisung beschreibt das unterschiedliche Vorgehen der Aktualisierung je nach verwendetem "style" in der oben beschriebenen Itemlist der "buildSubscription"-Funktion.
                            case "floatValue":
                                //Wenn Typ ist "floatValue" -> schreiben des neuen Variablenwertes in das angebundene HTML-Element.
                                {
                                    var tmpValue = document.getElementById(parItemList[k].id);
                                    Value = parseFloat(CurrentValues[i].mItemValue).toFixed(2);
                                    tmpValue.value = Value;
                                    break;
                                }
                            case "floatSpeed":                                //Wenn Typ ist "floatValue" -> schreiben des neuen Variablenwertes in das angebundene HTML-Element.                                {                                    var tmpValue = document.getElementById(parItemList[k].id);                                    Value = parseFloat(CurrentValues[i].mItemValue).toFixed(1);                                    tmpValue.value = Value;                                    break;                                }                            
                            case "gboAutomatic":                         
                                {
                                    Value = CurrentValues[i].mItemValue;
                                    if (Value == 0) {									   
                                        document.getElementById("inp_MotionMode").value = "手動";  										
                                    }
                                    else if(Value == 1){                                      										document.getElementById("inp_MotionMode").value = "半自動"; 
                                    }									else if(Value == 2){									   										document.getElementById("inp_MotionMode").value = "全自動"; 																			}									else if(Value == 3){									    										document.getElementById("inp_MotionMode").value = "單步執行"; 										}
                                    break;
                                }							case "gboModel":                                {                                    Value = CurrentValues[i].mItemValue;                                    if (Value == 0) {                                            document.getElementById("inp_OperationMode").value = "一般模式";  	   										                                    }                                    else if(Value == 1){                                  										document.getElementById("inp_OperationMode").value = "試運轉"; 	                                    }                                    break;                                }
							//Y1/Z1
							case "gboY1Z1_Horizontal":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Y1Z1_Horizontal").value  = "姿勢水平"; 
									document.getElementById("btn_Y1Z1_Horizontal").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Y1Z1_Horizontal").value  = "姿勢水平"; 
									document.getElementById("btn_Y1Z1_Horizontal").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							 case "gboY1Z1_Vertical":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Y1Z1_Vertical").value  = "姿勢垂直"; 
									document.getElementById("btn_Y1Z1_Vertical").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Y1Z1_Vertical").value  = "姿勢垂直"; 
									document.getElementById("btn_Y1Z1_Vertical").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }	
							 case "gboY1Z1_TopLine":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Y1Z1_TopLine").value  = "主臂上升限"; 
									document.getElementById("btn_Y1Z1_TopLine").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Y1Z1_TopLine").value  = "主臂上升限"; 
									document.getElementById("btn_Y1Z1_TopLine").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//型内、外限
							case "gboX_InnerLimit":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_X_InnerLimit").value = "型內限";
									document.getElementById("btn_X_InnerLimit").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_X_InnerLimit").value  = "型內限"; 
									document.getElementById("btn_X_InnerLimit").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboX_OuterLimit":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_X_OuterLimit").value  = "型外限"; 
									document.getElementById("btn_X_OuterLimit").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_X_OuterLimit").value  = "型外限"; 
									document.getElementById("btn_X_OuterLimit").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//射出机输入讯号
							//<tr1>
							case "gboShow11":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show11").value = "機械手急停";
									document.getElementById("btn_Show11").style.backgroundColor = "#FF3300"; 
									document.getElementById("btn_Show11").style.fontSize = "12px";
									}
									else if(Value == "false"){
									document.getElementById("btn_Show11").value  = "機械手急停"; 
									document.getElementById("btn_Show11").style.backgroundColor = "#FFFFFF"; 
									document.getElementById("btn_Show11").style.fontSize = "12px";
									}
									 break;
							    }
							 case "gboShow21":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show21").value  = "中子到2"; 
									document.getElementById("btn_Show21").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show21").value  = "中子到2"; 
									document.getElementById("btn_Show21").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//<tr2>
							case "gboShow12":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show12").value = "注塑機全自動";
									document.getElementById("btn_Show12").style.backgroundColor = "#FF3300"; 
									document.getElementById("btn_Show12").style.fontSize = "12px";
									}
									else if(Value == "false"){
									document.getElementById("btn_Show12").value  = "注塑機全自動"; 
									document.getElementById("btn_Show12").style.backgroundColor = "#FFFFFF"; 
									document.getElementById("btn_Show12").style.fontSize = "12px";
									}
									 break;
							    }
							 case "gboShow22":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show22").value  = "安全門1"; 
									document.getElementById("btn_Show22").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show22").value  = "安全門1"; 
									document.getElementById("btn_Show22").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//<tr3>
							case "gboShow13":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show13").value = "關模安全";
									document.getElementById("btn_Show13").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show13").value  = "關模安全"; 
									document.getElementById("btn_Show13").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboShow23":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show23").value  = "安全門2"; 
									document.getElementById("btn_Show23").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show23").value  = "安全門2"; 
									document.getElementById("btn_Show23").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//<tr4>
							case "gboShow14":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show14").value = "開模完成";
									document.getElementById("btn_Show14").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show14").value  = "開模完成"; 
									document.getElementById("btn_Show14").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboShow24":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show24").value  = "不良品"; 
									document.getElementById("btn_Show24").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show24").value  = "不良品"; 
									document.getElementById("btn_Show24").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//<tr5>
							case "gboShow15":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show15").value = "關模完成";
									document.getElementById("btn_Show15").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show15").value  = "關模完成"; 
									document.getElementById("btn_Show15").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							//<tr6>
							case "gboShow16":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show16").value = "頂退完成";
									document.getElementById("btn_Show16").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show16").value  = "頂退完成"; 
									document.getElementById("btn_Show16").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							//<tr7>
							case "gboShow17":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show17").value = "頂進完成";
									document.getElementById("btn_Show17").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show17").value  = "頂進完成"; 
									document.getElementById("btn_Show17").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							//<tr8>
							case "gboShow18":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show18").value = "中子到1";
									document.getElementById("btn_Show18").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show18").value  = "中子到1"; 
									document.getElementById("btn_Show18").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							//射出机输出讯号
							//<tr1>
							case "gboShow51":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show51").value = "注塑機急停";
									document.getElementById("btn_Show51").style.backgroundColor = "#FF3300"; 
									document.getElementById("btn_Show51").style.fontSize = "12px";
									}
									else if(Value == "false"){
									document.getElementById("btn_Show51").value  = "注塑機急停"; 
									document.getElementById("btn_Show51").style.backgroundColor = "#FFFFFF"; 
									document.getElementById("btn_Show51").style.fontSize = "12px";
									}
									 break;
							    }
							 case "gboShow61":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show61").value  = "允許中子到2"; 
									document.getElementById("btn_Show61").style.backgroundColor = "#FF3300"; 
									document.getElementById("btn_Show61").style.fontSize = "12px";
									}
									else if(Value == "false"){
									document.getElementById("btn_Show61").value  = "允許中子到2"; 
									document.getElementById("btn_Show61").style.backgroundColor = "#FFFFFF";
									document.getElementById("btn_Show61").style.fontSize = "12px";
									}
									 break;
							    }
							//<tr2>
							case "gboShow52":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show52").value = "機械手始能";
									document.getElementById("btn_Show52").style.backgroundColor = "#FF3300"; 
									document.getElementById("btn_Show52").style.fontSize = "12px";
									}
									else if(Value == "false"){
									document.getElementById("btn_Show52").value  = "機械手始能"; 
									document.getElementById("btn_Show52").style.backgroundColor = "#FFFFFF"; 
									document.getElementById("btn_Show52").style.fontSize = "12px";
									}
									 break;
							    }
							//<tr3>
							case "gboShow53":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show53").value = "模具範圍空";
									document.getElementById("btn_Show53").style.backgroundColor = "#FF3300"; 
									document.getElementById("btn_Show53").style.fontSize = "12px";
									}
									else if(Value == "false"){
									document.getElementById("btn_Show53").value  = "模具範圍空"; 
									document.getElementById("btn_Show53").style.backgroundColor = "#FFFFFF"; 
									document.getElementById("btn_Show53").style.fontSize = "12px";
									}
									 break;
							    }
							//<tr4>
							case "gboShow54":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show54").value = "允許開模";
									document.getElementById("btn_Show54").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show54").value  = "允許開模"; 
									document.getElementById("btn_Show54").style.backgroundColor = "#FFFFFF"; 									
									}
									 break;
							    }
							//<tr5>
							case "gboShow55":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show55").value = "允許關模";
									document.getElementById("btn_Show55").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show55").value  = "允許關模"; 
									document.getElementById("btn_Show55").style.backgroundColor = "#FFFFFF"; 									
									}
									 break;
							    }
							//<tr6>
							case "gboShow56":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show56").value = "允許頂退";
									document.getElementById("btn_Show56").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show56").value  = "允許頂退"; 
									document.getElementById("btn_Show56").style.backgroundColor = "#FFFFFF"; 									
									}
									 break;
							    }
							//<tr7>
							case "gboShow57":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show57").value = "允許頂進";
									document.getElementById("btn_Show57").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Show57").value  = "允許頂進"; 
									document.getElementById("btn_Show57").style.backgroundColor = "#FFFFFF"; 									
									}
									 break;
							    }
							//<tr8>
							case "gboShow58":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Show58").value = "允許中子到1";
									document.getElementById("btn_Show58").style.backgroundColor = "#FF3300"; 
									document.getElementById("btn_Show58").style.fontSize = "12px";
									}
									else if(Value == "false"){
									document.getElementById("btn_Show58").value  = "允許中子到1"; 
									document.getElementById("btn_Show58").style.backgroundColor = "#FFFFFF"; 
									document.getElementById("btn_Show58").style.fontSize = "12px";
									}
									 break;
							    }
							//机械手输入讯号
							//tr1
							case "gboClamp11":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Clamp11").value = "夾具01限";
									document.getElementById("inp_Clamp11").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Clamp11").value  = "夾具01限"; 
									document.getElementById("inp_Clamp11").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboCupula11":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Cupula11").value  = "吸盤01限"; 
									document.getElementById("inp_Cupula11").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Cupula11").value  = "吸盤01限"; 
									document.getElementById("inp_Cupula11").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							case "gboReserve11":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Reserve11").value = "保留01限";
									document.getElementById("inp_Reserve11").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Reserve11").value  = "保留01限"; 
									document.getElementById("inp_Reserve11").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboPost11":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Post11").value  = "姿勢0度"; 
									document.getElementById("inp_Post11").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Post11").value  = "姿勢0度"; 
									document.getElementById("inp_Post11").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//tr2
							case "gboClamp12":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Clamp12").value = "夾具02限";
									document.getElementById("inp_Clamp12").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Clamp12").value  = "夾具02限"; 
									document.getElementById("inp_Clamp12").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboCupula12":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Cupula12").value  = "吸盤02限"; 
									document.getElementById("inp_Cupula12").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Cupula12").value  = "吸盤02限"; 
									document.getElementById("inp_Cupula12").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							case "gboReserve12":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Reserve12").value = "保留02限";
									document.getElementById("inp_Reserve12").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Reserve12").value  = "保留02限"; 
									document.getElementById("inp_Reserve12").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboPost12":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Post12").value  = "姿勢90度"; 
									document.getElementById("inp_Post12").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Post12").value  = "姿勢90度"; 
									document.getElementById("inp_Post12").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//tr3
							case "gboClamp13":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Clamp13").value = "夾具03限";
									document.getElementById("inp_Clamp13").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Clamp13").value  = "夾具03限"; 
									document.getElementById("inp_Clamp13").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboCupula13":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Cupula13").value  = "吸盤03限"; 
									document.getElementById("inp_Cupula13").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Cupula13").value  = "吸盤03限"; 
									document.getElementById("inp_Cupula13").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							case "gboReserve13":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Reserve13").value = "保留03限";
									document.getElementById("inp_Reserve13").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Reserve13").value  = "保留03限"; 
									document.getElementById("inp_Reserve13").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboPost13":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Post13").value  = "姿勢180度"; 
									document.getElementById("inp_Post13").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Post13").value  = "姿勢180度"; 
									document.getElementById("inp_Post13").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//机械手输出讯号
							//tr1
							case "gboClamp21":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Clamp21").value = "夾具01";
									document.getElementById("inp_Clamp21").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Clamp21").value  = "夾具01"; 
									document.getElementById("inp_Clamp21").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboCupula21":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Cupula21").value  = "吸盤01"; 
									document.getElementById("inp_Cupula21").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Cupula21").value  = "吸盤01"; 
									document.getElementById("inp_Cupula21").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							case "gboReserve21":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Reserve21").value = "保留01";
									document.getElementById("inp_Reserve21").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Reserve21").value  = "保留01"; 
									document.getElementById("inp_Reserve21").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboPost21":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Post21").value  = "姿勢0度"; 
									document.getElementById("inp_Post21").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Post21").value  = "姿勢0度"; 
									document.getElementById("inp_Post21").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//tr2
							case "gboClamp22":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Clamp22").value = "夾具02";
									document.getElementById("inp_Clamp22").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Clamp22").value  = "夾具02"; 
									document.getElementById("inp_Clamp22").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboCupula22":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Cupula22").value  = "吸盤02"; 
									document.getElementById("inp_Cupula22").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Cupula22").value  = "吸盤02"; 
									document.getElementById("inp_Cupula22").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							case "gboReserve22":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Reserve22").value = "保留02";
									document.getElementById("inp_Reserve22").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Reserve22").value  = "保留02"; 
									document.getElementById("inp_Reserve22").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboPost22":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Post22").value  = "姿勢90度"; 
									document.getElementById("inp_Post22").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Post22").value  = "姿勢90度"; 
									document.getElementById("inp_Post22").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//tr3
							case "gboClamp23":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Clamp23").value = "夾具03";
									document.getElementById("inp_Clamp23").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Clamp23").value  = "夾具03"; 
									document.getElementById("inp_Clamp23").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboCupula23":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Cupula23").value  = "吸盤03"; 
									document.getElementById("inp_Cupula23").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Cupula23").value  = "吸盤03"; 
									document.getElementById("inp_Cupula23").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							case "gboReserve23":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Reserve23").value = "保留03";
									document.getElementById("inp_Reserve23").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Reserve23").value  = "保留03"; 
									document.getElementById("inp_Reserve23").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboPost23":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Post23").value  = "姿勢180度"; 
									document.getElementById("inp_Post23").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_Post23").value  = "姿勢180度"; 
									document.getElementById("inp_Post23").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							//开关模、姿态
							 case "gboMoldOpenComplete":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_MoldOpenComplete").value = "開模完成";
									document.getElementById("inp_MoldOpenComplete").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_MoldOpenComplete").value  = "開模完成"; 
									document.getElementById("inp_MoldOpenComplete").style.backgroundColor = "#FFFFFF"; 
									}
									 break;
							    }
							 case "gboMoldCloseSafety":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_MoldCloseSafety").value  = "關模安全"; 
									document.getElementById("inp_MoldCloseSafety").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("inp_MoldCloseSafety").value  = "關模安全"; 
									document.getElementById("inp_MoldCloseSafety").style.backgroundColor = "#FFFFFF";
									}
									 break;
							    }
							 case "gboPose0":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Pose").value= "0度"; 
									}
									else{
									}
									 break;
							    }
                             case "gboPose90":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Pose").value = "90度"; 
									}
									else{
									}
									 break;
							    }
                             case "gboPose180":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("inp_Pose").value = "180度"; 
									}
									else{
									}
									 break;
							    }								
								//手动页夹具、保留、C轴、吸盘
							 case "gboClamp1":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Clamp01").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Clamp01").style.backgroundColor  = "#3399FF"; 
									}
									 break;
							    }
							 case "gboClamp2":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Clamp02").style.backgroundColor  = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Clamp02").style.backgroundColor = "#3399FF"; 
									}
									 break;
							    }
							 case "gboClamp3":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Clamp03").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Clamp03").style.backgroundColor = "#3399FF"; 
									}
									 break;
							    }
							 case "gboCupula1":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Cupula01").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Cupula01").style.backgroundColor  = "#3399FF"; 
									}
									 break;
							    }
							 case "gboCupula2":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Cupula02").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Cupula02").style.backgroundColor  = "#3399FF"; 
									}
									 break;
							    }
							 case "gboCupula3":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Cupula03").style.backgroundColor  = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Cupula03").style.backgroundColor = "#3399FF"; 
									}
									 break;
							    }
							 case "gboReserve1":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Reserve01").style.backgroundColor  = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Reserve01").style.backgroundColor  = "#3399FF"; 
									}
									 break;
							    }
							 case "gboReserve2":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Reserve02").style.backgroundColor  = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Reserve02").style.backgroundColor  = "#3399FF"; 
									}
									 break;
							    }
							 case "gboReserve3":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_Reserve03").style.backgroundColor = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_Reserve03").style.backgroundColor  = "#3399FF"; 
									}
									 break;
							    }
							 case "gboCAxis1":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_CAxis_0").style.backgroundColor  = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_CAxis_0").style.backgroundColor  = "#3399FF"; 
									}
									 break;
							    }
							 case "gboCAxis2":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_CAxis_90").style.backgroundColor  = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_CAxis_90").style.backgroundColor = "#3399FF"; 
									}
									 break;
							    }
							 case "gboCAxis3":
							    {
							       Value = CurrentValues[i].mItemValue;
								    if (Value == "true") {
									document.getElementById("btn_CAxis_180").style.backgroundColor  = "#FF3300"; 
									}
									else if(Value == "false"){
									document.getElementById("btn_CAxis_180").style.backgroundColor  = "#3399FF"; 
									}
									 break;
							    }													 case "MotorState":                                //Wenn Typ ist "MotorState" -> bei TRUE Felder fr Manuelle Bedienung deaktivieren und Buttons einfrben, bei False Buttons fr Automatikbedienung deaktivieren                                {                                    Value = CurrentValues[i].mItemValue;                                    if (Value == "true") {																			document.getElementById("btn_Motor").style.background="url(../image/bg_BtnStartOff.png)";										                                    }									else{																			document.getElementById("btn_Motor").style.background="url(../image/bg_BtnStartOn.png)";										}                                    break;                                }
                            case "gboEStop":
                                //Wenn Typ ist "gboEStop"
                                {
                                    Value = CurrentValues[i].mItemValue;
                                    if (Value == "false") {																				if(document.getElementById("btn_Stop") != null)										{
											document.getElementById("btn_Stop").style.background="url(../image/Stop_Down.png)";											}										if(document.getElementById("btn_EStop") != null)										{											document.getElementById("btn_EStop").style.background="url(Techmation/image/Stop_Down.png)";											}
                                        gboEstop = "false";
                                    }
                                    else {										if(document.getElementById("btn_Stop") != null)										{
											document.getElementById("btn_Stop").style.background="url(../image/Stop_Up.png)";											}										if(document.getElementById("btn_EStop") != null)										{											document.getElementById("btn_EStop").style.background="url(Techmation/image/Stop_Up.png)";											}
                                        gboEstop = "true";
                                    }
                                    break;
                                }
                            default:
                                //Wenn Typ unbekannt oder nicht angegeben, dann wird versucht, den aktualisierten Variablenwert in das angebundene HTML-Element zu schreiben.
                                {
                                    var tmpValue = document.getElementById(parItemList[k].id);									if(tmpValue != null)									{
										Value = CurrentValues[i].mItemValue;
										tmpValue.value = Value;									}
                                    break;
                                };
                        }
                    }
                }
            }
        };

        var tmpCancelCB = function () {
            if (instance) {
                instance.destructor();
                instance = null;
            }
        };
        instance = new OPCSubscriptionAutoRefresh("DE", tmpSubscriptionCB, tmpCancelCB, cycleTime);
        for (var i = 0; i < parItemList.length; i++) {
            HandleList[i] = instance.addItem(parItemList[i].itemPath, parItemList[i].itemName);
        }
        return instance;
    }
}
var gboEstop = "false";
//////////////////////////////////////////////////
// Funktionen zum einmaligen Schreiben / Lesen von Variablen
//////////////////////////////////////////////////
function ReadValueStackOne(id, SimotionVariable) {
	var tmpReadCB = function(parResponse)
	{
		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
		{
			var tmpItemValue = parResponse[tmpIndex];
			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			if(document.getElementById(id[tmpIndex]) != null)
			{   console.log(parseFloat(tmpValue).toFixed(2));
				document.getElementById(id[tmpIndex]).value = parseFloat(tmpValue).toFixed(2);	
			}
		}
		return true;
	}
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
	for(var i = 0; i < id.length; i++)
	{
		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
}
function ReadValueStackTwo(id, SimotionVariable) {
	var tmpReadCB = function(parResponse)
	{
		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
		{
			var tmpItemValue = parResponse[tmpIndex];
			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			if(document.getElementById(id[tmpIndex]) != null)
			{   console.log(parseFloat(tmpValue).toFixed(2));
				if(parseFloat(tmpValue).toFixed(2)==1){document.getElementById(id[tmpIndex]).value="1";}
				else if(parseFloat(tmpValue).toFixed(2)==2){document.getElementById(id[tmpIndex]).value="2";}
				else if(parseFloat(tmpValue).toFixed(2)==3){document.getElementById(id[tmpIndex]).value="3";}
				else if(parseFloat(tmpValue).toFixed(2)==4){document.getElementById(id[tmpIndex]).value="4";}
				else if(parseFloat(tmpValue).toFixed(2)==5){document.getElementById(id[tmpIndex]).value="5";}
				else if(parseFloat(tmpValue).toFixed(2)==6){document.getElementById(id[tmpIndex]).value="6";}
			}
		}
		return true;
	}
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
	for(var i = 0; i < id.length; i++)
	{
		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
}
function ReadValuePathOne(id, SimotionVariable) {
	var tmpReadCB = function(parResponse)
	{
		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
		{
			var tmpItemValue = parResponse[tmpIndex];
			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			if(document.getElementById(id[tmpIndex]) != null)
			{   switch(parseFloat(tmpValue).toFixed(2) % 11){
			        case 0:
					    document.getElementById(id[tmpIndex]).value="Watiing Point";
					break;
					case 1:
					    document.getElementById(id[tmpIndex]).value="path1";
					break;
					case 2:
					    document.getElementById(id[tmpIndex]).value="path2";
					break;
					case 3:
					    document.getElementById(id[tmpIndex]).value="path3";
					break;
					case 4:
					    document.getElementById(id[tmpIndex]).value="path4";
					break;
					case 5:
					    document.getElementById(id[tmpIndex]).value="path5";
					break;
					case 6:
					    document.getElementById(id[tmpIndex]).value="path6";
					break;
					case 7:
					    document.getElementById(id[tmpIndex]).value="path7";
					break;
					case 8:
					    document.getElementById(id[tmpIndex]).value="path8";
					break;
					case 9:
					    document.getElementById(id[tmpIndex]).value="path9";
					break;
					case 10:
					    document.getElementById(id[tmpIndex]).value="path10";
					break;
					default:
					break;
				}
			}
		}
		return true;
	}
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
	for(var i = 0; i < id.length; i++)
	{
		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
}
function ReadValuePathTwo(id, SimotionVariable) {	var tmpReadCB = function(parResponse)	{		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)		{			var tmpItemValue = parResponse[tmpIndex];			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;			if(document.getElementById(id[tmpIndex]) != null)			{  
	            switch(parseFloat(tmpValue).toFixed(2) % 10){
				case 1:
				    document.getElementById(id[tmpIndex]).value="1";
				break;
				case 2:
				    document.getElementById(id[tmpIndex]).value="2";
				break;
				case 3:
				    document.getElementById(id[tmpIndex]).value="3";
				break;
				case 4:
				    document.getElementById(id[tmpIndex]).value="4";
				break;
				case 5:
				    document.getElementById(id[tmpIndex]).value="5";
				break;
				case 6:
				    document.getElementById(id[tmpIndex]).value="6";
				break;
				case 7:
				    document.getElementById(id[tmpIndex]).value="7";
				break;
				case 8:
				    document.getElementById(id[tmpIndex]).value="8";
				break;
				case 9:
				    document.getElementById(id[tmpIndex]).value="9";
				break;
				case 10:
				    document.getElementById(id[tmpIndex]).value="10";
				break;
				default:
				break;
				}
			}		}		return true;	}    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);	for(var i = 0; i < id.length; i++)	{		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);    }    tmpReadRequest.sendReadRequest();}
function ReadValuePath(id, SimotionVariable,id_2) {
	var tmpReadCB = function(parResponse)
	{
		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
		{
			var tmpItemValue = parResponse[tmpIndex];//console.log(tmpItemValue);
			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			if(document.getElementById(id[tmpIndex]) != null && document.getElementById(id_2[tmpIndex]).value != 0)
			{   
				document.getElementById(id[tmpIndex]).value = parseFloat(tmpValue).toFixed(2);	
			}
		}
		return true;
	}
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
	for(var i = 0; i < id.length; i++)
	{//console.log(id[i]);//console.log(SimotionVariable[i]);
		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
}
function ReadValuePathRightThere(id, SimotionVariable, id_2) {
	var tmpReadCB = function(parResponse)
	{//console.log(parResponse.length);
		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
		{
			var tmpItemValue = parResponse[tmpIndex];//console.log(tmpItemValue);
			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			if(document.getElementById(id[tmpIndex]) != null&& document.getElementById(id_2[tmpIndex]).value != 0)
			{
			    if(parseFloat(tmpValue).toFixed(2)==0 && parseInt(document.getElementById(id_2[tmpIndex]).value)>51){
				document.getElementById(id[tmpIndex]).value ="OFF";	
				}
				else if(parseFloat(tmpValue).toFixed(2)==1 && parseInt(document.getElementById(id_2[tmpIndex]).value)>51){
				document.getElementById(id[tmpIndex]).value ="ON";	
				}
				else {
				document.getElementById(id[tmpIndex]).value =parseFloat(tmpValue).toFixed(2);
				}
			}
		}
		return true;
	}
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
	for(var i = 0; i < id.length; i++)
	{
		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
}
function ReadValuePathRightFour(id, SimotionVariable, id_2) {
	var tmpReadCB = function(parResponse)
	{
		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
		{
			var tmpItemValue = parResponse[tmpIndex];
			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			if(document.getElementById(id[tmpIndex]) != null&& document.getElementById(id_2[tmpIndex]).value != 0)
			{
				document.getElementById(id[tmpIndex]).value =parseFloat(tmpValue).toFixed(2)/1000;
			}
		}
		return true;
	}
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
	for(var i = 0; i < id.length; i++)
	{
		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
}

function ReadValuePathRightTwo(id, SimotionVariable,id_3,id_4) {
	var tmpReadCB = function(parResponse)
	{
		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
		{
			var tmpItemValue = parResponse[tmpIndex];//console.log(tmpItemValue);
			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			if(document.getElementById(id[tmpIndex]) != null)
			{   
			    switch(parseFloat(tmpValue).toFixed(2) % 1000){
				case 1:
				    document.getElementById(id[tmpIndex]).value="1";
				break;
				case 2:
				    document.getElementById(id[tmpIndex]).value="2";
				break;
				case 3:
				    document.getElementById(id[tmpIndex]).value="3";
				break;
				case 4:
				    document.getElementById(id[tmpIndex]).value="4";
				break;
				case 5:
				    document.getElementById(id[tmpIndex]).value="5";
				break;
				case 6:
				    document.getElementById(id[tmpIndex]).value="6";
				break;
				case 7:
				    document.getElementById(id[tmpIndex]).value="7";
				break;
				case 8:
				    document.getElementById(id[tmpIndex]).value="8";
				break;
				case 11:
				    document.getElementById(id[tmpIndex]).value="11";
				break;
				case 50:
				    document.getElementById(id[tmpIndex]).value="50";
					document.getElementById(id_3[tmpIndex]).style.display="none";
					document.getElementById(id_4[tmpIndex]).style.display="none";
				break;
				case 53:
				    document.getElementById(id[tmpIndex]).value="53";
				break;
				case 54:
				    document.getElementById(id[tmpIndex]).value="54";
				break;
				case 55:
				    document.getElementById(id[tmpIndex]).value="55";
				break;
				case 56:
				    document.getElementById(id[tmpIndex]).value="56";
				break;
				case 57:
				    document.getElementById(id[tmpIndex]).value="57";
				break;
				case 58:
				    document.getElementById(id[tmpIndex]).value="58";
				break;
				case 59:
				    document.getElementById(id[tmpIndex]).value="59";
				break;
				case 62:
				    document.getElementById(id[tmpIndex]).value="62";
				break;
				case 67:
				    document.getElementById(id[tmpIndex]).value="67";
				break;
				case 68:
				    document.getElementById(id[tmpIndex]).value="68";
				break;
				case 69:
				    document.getElementById(id[tmpIndex]).value="69";
				break;
				case 70:
				    document.getElementById(id[tmpIndex]).value="70";
				break;
				case 71:
				    document.getElementById(id[tmpIndex]).value="71";
				break;
				case 72:
				    document.getElementById(id[tmpIndex]).value="72";
				break;
				case 73:
				    document.getElementById(id[tmpIndex]).value="73";
				break;
				case 74:
				    document.getElementById(id[tmpIndex]).value="74";
				break;
				case 75:
				    document.getElementById(id[tmpIndex]).value="75";
				break;
				case 104:
				    document.getElementById(id[tmpIndex]).value="104";
				break;
				case 105:
				    document.getElementById(id[tmpIndex]).value="105";
				break;
				case 106:
				    document.getElementById(id[tmpIndex]).value="106";
				break;
				case 107:
				    document.getElementById(id[tmpIndex]).value="107";
				break;
				case 108:
				    document.getElementById(id[tmpIndex]).value="108";
				break;
				case 109:
				    document.getElementById(id[tmpIndex]).value="109";
				break;
				case 117:
				    document.getElementById(id[tmpIndex]).value="117";
				break;
				case 118:
				    document.getElementById(id[tmpIndex]).value="118";
				break;
				case 119:
				    document.getElementById(id[tmpIndex]).value="119";
				break;
				case 120:
				    document.getElementById(id[tmpIndex]).value="120";
				break;
				case 121:
				    document.getElementById(id[tmpIndex]).value="121";
				break;
				case 122:
				    document.getElementById(id[tmpIndex]).value="122";
				break;
				case 123:
				    document.getElementById(id[tmpIndex]).value="123";
				break;
				case 124:
				    document.getElementById(id[tmpIndex]).value="124";
				break;
				case 125:
				    document.getElementById(id[tmpIndex]).value="125";
				break;
				case 151:
				    document.getElementById(id[tmpIndex]).value="151";
					document.getElementById(id_3[tmpIndex]).style.display="none";
					document.getElementById(id_4[tmpIndex]).style.display="none";
				break;
				default:
				break;
				}
				
			}
		}
		return true;
	}
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
	for(var i = 0; i < id.length; i++)
	{//console.log(id[i]);//console.log(SimotionVariable[i]);
		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
}

function ReadValue(id, SimotionVariable) {
	var tmpReadCB = function(parResponse)
	{//console.log(parResponse.length);
		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
		{
			var tmpItemValue = parResponse[tmpIndex];//console.log(tmpItemValue);
			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			if(document.getElementById(id[tmpIndex]) != null)
			{
				document.getElementById(id[tmpIndex]).value = parseFloat(tmpValue).toFixed(2);	
			}
		}
		return true;
	}
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
	for(var i = 0; i < id.length; i++)
	{
		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
}
//////*****************////
function ReadValueLine(id, SimotionVariable) 
{
	var tmpReadCB = function(parResponse)
	{
		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
		{
			var tmpItemValue = parResponse[tmpIndex];
			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			if(document.getElementById(id[tmpIndex]) != null)
			{   
			    switch(tmpIndex % 7){
			        case 0:
				        if(parseFloat(tmpValue).toFixed(2)==32){
				            document.getElementById(id[tmpIndex]).value="1";
				        }
				        else if(parseFloat(tmpValue).toFixed(2)==28){
				            document.getElementById(id[tmpIndex]).value="2";
				        }
				        else if(parseFloat(tmpValue).toFixed(2)==24){
				            document.getElementById(id[tmpIndex]).value="3";
				        }
				        else if(parseFloat(tmpValue).toFixed(2)==66){
				            document.getElementById(id[tmpIndex]).value="4";
				        }
				        else if(parseFloat(tmpValue).toFixed(2)==23){
				            document.getElementById(id[tmpIndex]).value="5";
			    	    }
				        else{
				            document.getElementById(id[tmpIndex+1]).style.display="none";
				            document.getElementById(id[tmpIndex+2]).style.display="none";
				            document.getElementById(id[tmpIndex+3]).style.display="none";
				            document.getElementById(id[tmpIndex+4]).style.display="none";
				            document.getElementById(id[tmpIndex+5]).style.display="none";
							document.getElementById(id[tmpIndex+6]).style.display="none";
						}
					break;
				    case 1:
					    document.getElementById(id[tmpIndex]).value = parseFloat(tmpValue).toFixed(2);
					break;
                    case 2:
					    document.getElementById(id[tmpIndex]).value = parseFloat(tmpValue).toFixed(2);
					break;
                    case 3:
					    document.getElementById(id[tmpIndex]).value = parseFloat(tmpValue).toFixed(2);
					break;
					case 4:
					     if(parseFloat(tmpValue).toFixed(2)==3){
			            	 document.getElementById(id[tmpIndex]).value="3";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==4){
				             document.getElementById(id[tmpIndex]).value="4";
				         }
                         else if(parseFloat(tmpValue).toFixed(2)==5){
				             document.getElementById(id[tmpIndex]).value="5";
				         }
                         else if(parseFloat(tmpValue).toFixed(2)==6){
				             document.getElementById(id[tmpIndex]).value="6";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==7){
				             document.getElementById(id[tmpIndex]).value="7";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==8){
				             document.getElementById(id[tmpIndex]).value="8";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==9){
				             document.getElementById(id[tmpIndex]).value="9";
			             }
				         else if(parseFloat(tmpValue).toFixed(2)==54){
				             document.getElementById(id[tmpIndex]).value="54";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==55){
				             document.getElementById(id[tmpIndex]).value="55";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==56){
				             document.getElementById(id[tmpIndex]).value="56";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==57){
				             document.getElementById(id[tmpIndex]).value="57";
			          	 }
				         else if(parseFloat(tmpValue).toFixed(2)==58){
				             document.getElementById(id[tmpIndex]).value="58";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==59){
				             document.getElementById(id[tmpIndex]).value="59";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==67){
				             document.getElementById(id[tmpIndex]).value="67";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==68){
				             document.getElementById(id[tmpIndex]).value="68";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==69){
				             document.getElementById(id[tmpIndex]).value="69";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==70){
				             document.getElementById(id[tmpIndex]).value="70";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==71){
				             document.getElementById(id[tmpIndex]).value="71";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==72){
				             document.getElementById(id[tmpIndex]).value="72";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==73){
				             document.getElementById(id[tmpIndex]).value="73";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==74){
				             document.getElementById(id[tmpIndex]).value="74";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==75){
				             document.getElementById(id[tmpIndex]).value="75";
				         }
					break;
					case 5:
					     if(parseFloat(tmpValue).toFixed(2)==1){
				            document.getElementById(id[tmpIndex]).value="1";
				         }
				         else if(parseFloat(tmpValue).toFixed(2)==2){
				            document.getElementById(id[tmpIndex]).value="2";
				         }
					break;
					case 6:
					    document.getElementById(id[tmpIndex]).value = parseFloat(tmpValue).toFixed(2)/1000;	 
					break;
					default:
					break;
					}
				}
		}
		
		return true;
	}
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
	for(var i = 0; i < id.length; i++)
	{
		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
}

function ReadValueSP(id, SimotionVariable) {
	var tmpReadCB = function(parResponse)
	{
		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)
		{
			var tmpItemValue = parResponse[tmpIndex];
			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			if(document.getElementById(id[tmpIndex]) != null)
			{
				document.getElementById(id[tmpIndex]).value = parseFloat(tmpValue).toFixed(2);	
			}
		}
		return true;
	}
    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);
	for(var i = 0; i < id.length; i++)
	{
		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);
    }
    tmpReadRequest.sendReadRequest();
}function ReadSiemens_Alarm(SimotionVariable) {	var tmpReadCB = function(parResponse)	{		for (var tmpIndex = 0; tmpIndex < parResponse.length; tmpIndex++)		{			var tmpItemValue = parResponse[tmpIndex];			var tmpValue = (tmpItemValue.mItemValue) ? tmpItemValue.mItemValue : tmpItemValue.mItemResultId;
			console.log(tmpValue);			var wIndex = parseInt(tmpIndex/4);	
			console.log(wIndex);			switch(tmpIndex % 4)			{						case 0:					SiemensAlarmData[wIndex][0] = tmpValue;					break;				case 1:					SiemensAlarmData[wIndex][1] = tmpValue;					break;				case 2:					SiemensAlarmData[wIndex][2] = tmpValue;					break;				case 3:					SiemensAlarmData[wIndex][3] = tmpValue;					break;
				default:
				break;			}
        ShowAlarm();					}		ShowAlarm();		return true;	}    var tmpReadRequest = new OPCReadRequest("DE", tmpReadCB);	for(var i = 0; i < SimotionVariable.length; i++)	{		tmpReadRequest.addItem("SIMOTION", SimotionVariable[i]);    }    tmpReadRequest.sendReadRequest();}function ShowAlarm(){  	var tab = document.getElementById("tab_Alarm");	for(var i = 0; i < 20; i++)	{		if(SiemensAlarmData[i][0] != 0)		{			tab.rows[i].cells[0].innerHTML = i+1;			tab.rows[i].cells[1].innerHTML = SiemensAlarmData[i][0];			tab.rows[i].cells[5].innerHTML = SiemensAlarmData[i][3];
			switch(SiemensAlarmData[i][1])			{  				case '1':					tab.rows[i].cells[2].innerHTML = "Siemens";					break;				case '2':					tab.rows[i].cells[2].innerHTML = "picker";					break;				case '3':					tab.rows[i].cells[2].innerHTML = "IMM";					break;				default:					break;			}
			switch(SiemensAlarmData[i][2])
			{
				case '1':
					tab.rows[i].cells[3].innerHTML = "Alarm";
					break;
				case '2':
					tab.rows[i].cells[3].innerHTML = "Warning";
					break;
				case '3':
					tab.rows[i].cells[3].innerHTML = "Message";
					break;
				default:
					break;
			}			for(var j = 0; j < SiemensAlarmID.length; j++)			{				//if(tmAlarmData[i][0] == TMAlarmID[j])
				if(SiemensAlarmData[i][0] == SiemensAlarmID[j])				{						//var AlarmDes = "(" + ComponentNumber[tmAlarmData[i][3] - 1] + ", 類型:" + TMType[tmAlarmData[i][4] - 1] + ")" + TMAlarmDes[j];
					var AlarmDes = SiemensAlarmDes[j];					tab.rows[i].cells[4].innerHTML = AlarmDes;
					console.log(AlarmDes);					break;				}			}			//AlarmNum++;		}	}		}
function writeValueFN(tmpItemValue, tmpString) {
    var tmpWriteCB = function (parWriteResult) {
        tmpWrite.destructor();
        return true;
    }
    var tmpWrite = new OPCWriteRequest("EN", tmpWriteCB);
    var tmpItemHandle = tmpWrite.addItem("SIMOTION", tmpString);
    tmpWrite.setItemValue(tmpItemHandle, tmpItemValue);
    tmpWrite.sendWriteRequest();
}
