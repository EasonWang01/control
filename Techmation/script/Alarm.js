function buildSubscription() {

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Path.bcs.x.position";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Path.bcs.x.velocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Path.bcs.y.position";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Path.bcs.y.velocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Path.bcs.z.position";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Path.bcs.z.velocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
   /* SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldOpenComplete";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "MoldStatus";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dGlobal.gbiMoldOpenComplete";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldCloseSafety";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "MoldStatus";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dGlobal.gboMoldCloseSafety";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;*/
//开模
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldOpenComplete";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboMoldOpenComplete";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[4]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//关模
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldCloseSafety";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboMoldCloseSafety";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[3]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//姿态
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Pose";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboPose0";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[23]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Pose";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboPose90";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[24]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Pose";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboPose180";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[25]";
	SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
 //模式1
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MotionMode";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboAutomatic";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gbyMotionMode";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	//模式2
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_OperationMode";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboModel";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gbyOperationMode";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
  //Starte Aktualisierung
    SubscriptionInstance = subscription(SubscriptionInstance, SubscriptionCycle, SubscriptionData.ItemList);
	
	//ReadTM_Alarm(TM_Alarm);
	ReadSiemens_Alarm(Siemens_Alarm);
	//ShowAlarm();
}

		  
/*var TM_Alarm = [ "unit/dHdGlobal.gsTM_AlarmHistory[1].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[1].wDeviceType",
                 "unit/dHdGlobal.gsTM_AlarmHistory[1].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[1].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[1].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[1].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[2].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[2].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[2].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[2].wComponentNumber",
                 "unit/dHdGlobal.gsTM_AlarmHistory[2].wType",
                 "unit/dHdGlobal.gsTM_AlarmHistory[2].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[3].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[3].wDeviceType",
                 "unit/dHdGlobal.gsTM_AlarmHistory[3].wState",
                 "unit/dHdGlobal.gsTM_AlarmHistory[3].wComponentNumber",
                 "unit/dHdGlobal.gsTM_AlarmHistory[3].wType",
                 "unit/dHdGlobal.gsTM_AlarmHistory[3].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[4].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[4].wDeviceType",
                 "unit/dHdGlobal.gsTM_AlarmHistory[4].wState",
                 "unit/dHdGlobal.gsTM_AlarmHistory[4].wComponentNumber",
                 "unit/dHdGlobal.gsTM_AlarmHistory[4].wType",
                 "unit/dHdGlobal.gsTM_AlarmHistory[4].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[5].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[5].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[5].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[5].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[5].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[5].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[6].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[6].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[6].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[6].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[6].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[6].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[7].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[7].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[7].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[7].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[7].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[7].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[8].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[8].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[8].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[8].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[8].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[8].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[9].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[9].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[9].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[9].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[9].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[9].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[10].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[10].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[10].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[10].wComponentNumber",
                 "unit/dHdGlobal.gsTM_AlarmHistory[10].wType",
                 "unit/dHdGlobal.gsTM_AlarmHistory[10].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[11].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[11].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[11].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[11].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[11].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[11].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[12].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[12].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[12].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[12].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[12].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[12].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[13].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[13].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[13].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[13].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[13].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[13].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[14].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[14].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[14].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[14].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[14].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[14].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[15].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[15].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[15].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[15].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[15].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[15].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[16].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[16].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[16].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[16].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[16].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[16].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[17].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[17].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[17].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[17].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[17].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[17].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[18].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[18].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[18].wState",
				 "unit/dHdGlobal.gsTM_AlarmHistory[18].wComponentNumber",
				 "unit/dHdGlobal.gsTM_AlarmHistory[18].wType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[18].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[19].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[19].wDeviceType",
				 "unit/dHdGlobal.gsTM_AlarmHistory[19].wState",
                 "unit/dHdGlobal.gsTM_AlarmHistory[19].wComponentNumber",
                 "unit/dHdGlobal.gsTM_AlarmHistory[19].wType",
                 "unit/dHdGlobal.gsTM_AlarmHistory[19].stTime",
				 "unit/dHdGlobal.gsTM_AlarmHistory[20].adwErrorID",
				 "unit/dHdGlobal.gsTM_AlarmHistory[20].wDeviceType",
                 "unit/dHdGlobal.gsTM_AlarmHistory[20].wState",
                 "unit/dHdGlobal.gsTM_AlarmHistory[20].wComponentNumber",
                 "unit/dHdGlobal.gsTM_AlarmHistory[20].wType",
                 "unit/dHdGlobal.gsTM_AlarmHistory[20].stTime"];
var	Siemens_Alarm = ["unit/dHdGlobal.gsHMIdata.sAlarmHistory[1].b32ErrorId",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[1].b16ErrorSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[1].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[1].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[1].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[1].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[2].errorID",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[2].eSource",
				     "unit/dHdGlobal.gsAlarmHistory.aHistory[2].aMessageParmeter[1]",
				     "unit/dHdGlobal.gsAlarmHistory.aHistory[2].aMessageParmeter[2]",
				     "unit/dHdGlobal.gsAlarmHistory.aHistory[2].aMessageParmeter[3]",
				     "unit/dHdGlobal.gsAlarmHistory.aHistory[2].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[3].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[3].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[3].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[3].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[3].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[3].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[4].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[4].eSource",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[4].aMessageParmeter[1]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[4].aMessageParmeter[2]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[4].aMessageParmeter[3]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[4].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[5].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[5].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[5].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[5].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[5].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[5].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[6].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[6].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[6].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[6].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[6].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[6].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[7].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[7].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[7].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[7].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[7].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[7].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[8].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[8].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[8].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[8].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[8].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[8].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[9].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[9].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[9].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[9].aMessageParmeter[2]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[9].aMessageParmeter[3]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[9].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[10].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[10].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[10].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[10].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[10].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[10].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[11].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[11].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[11].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[11].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[11].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[11].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[12].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[12].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[12].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[12].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[12].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[12].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[13].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[13].eSource",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[13].aMessageParmeter[1]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[13].aMessageParmeter[2]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[13].aMessageParmeter[3]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[13].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[14].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[14].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[14].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[14].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[14].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[14].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[15].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[15].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[15].aMessageParmeter[1]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[15].aMessageParmeter[2]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[15].aMessageParmeter[3]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[15].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[16].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[16].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[16].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[16].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[16].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[16].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[17].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[17].eSource",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[17].aMessageParmeter[1]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[17].aMessageParmeter[2]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[17].aMessageParmeter[3]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[17].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[18].errorID",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[18].eSource",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[18].aMessageParmeter[1]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[18].aMessageParmeter[2]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[18].aMessageParmeter[3]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[18].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[19].errorID",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[19].eSource",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[19].aMessageParmeter[1]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[19].aMessageParmeter[2]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[19].aMessageParmeter[3]",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[19].tStamp",
					 "unit/dHdGlobal.gsAlarmHistory.aHistory[20].errorID",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[20].eSource",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[20].aMessageParmeter[1]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[20].aMessageParmeter[2]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[20].aMessageParmeter[3]",
                     "unit/dHdGlobal.gsAlarmHistory.aHistory[20].tStamp"];
	*/			 
var	Siemens_Alarm = ["unit/dHdGlobal.gsHMIdata.sAlarmHistory[1].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[1].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[1].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[1].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[2].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[2].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[2].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[2].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[3].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[3].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[3].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[3].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[4].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[4].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[4].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[4].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[5].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[5].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[5].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[5].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[6].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[6].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[6].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[6].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[7].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[7].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[7].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[7].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[8].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[8].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[8].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[8].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[9].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[9].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[9].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[9].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[10].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[10].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[10].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[10].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[11].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[11].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[11].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[11].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[12].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[12].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[12].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[12].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[13].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[13].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[13].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[13].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[14].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[14].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[14].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[14].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[15].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[15].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[15].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[15].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[16].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[16].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[16].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[16].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[17].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[17].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[17].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[17].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[18].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[18].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[18].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[18].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[19].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[19].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[19].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[19].tStamp",
					 "unit/dHdGlobal.gsHMIdata.sAlarmHistory[20].b32ErrorId","unit/dHdGlobal.gsHMIdata.sAlarmHistory[20].b16ErrorSource","unit/dHdGlobal.gsHMIdata.sAlarmHistory[20].b16ErrorState","unit/dHdGlobal.gsHMIdata.sAlarmHistory[20].tStamp",
					];