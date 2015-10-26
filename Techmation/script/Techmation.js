/*function ReadWriteBN(){
    for(var a=1;a > 0;a++){
	    var b=a % 2;
		console.log(b);
	    if(b==0){
	        writeValueFN("true", "unit/dHdGlobal.gboBreak");
	    }
	    else if(b==1){
	        writeValueFN("false", "unit/dHdGlobal.gboBreak");
	    }
	}
}*/

function BtnDown(id)
{
	if(id == "btn_Stop")
	{
		document.getElementById(id).style.background="url(Techmation/image/Stop_Down.png)";
	}
	else if(id == "btn_Reset")
	{
		//document.getElementById(id).style.background="url(Techmation/image/bg_BtnDown_16335.png)";
	}
	else if(id == "btn_Start")
	{
		document.getElementById(id).style.background="url(Techmation/image/bg_StartDown.png)";
		writeValueFN("true", "unit/dHdGlobal.gboStartProgram");
	}
	else if(id == "btn_Continue")
	{
		document.getElementById(id).style.background="url(Techmation/image/bg_ContinueDown.png)";
		writeValueFN("true", "unit/dHdGlobal.gboContinueProgram");
	}
	else if(id == "btn_Stop2")
	{
		document.getElementById(id).style.background="url(Techmation/image/bg_StopDown.png)";
		writeValueFN("true", "unit/dHdGlobal.gboInterruptProgram");
	}
	else if(id == "btn_Auto")
	{
		//document.getElementById(id).style.background="url(Techmation/image/bg_BtnDown_163.png)";
		writeValueFN("true", "unit/dHdGlobal.gboAutomatic");
	}
	else if(id == "btn_Semi_auto")
	{
		//document.getElementById(id).style.background="url(Techmation/image/bg_BtnDown_163.png)";
		writeValueFN("true", "unit/dHdGlobal.gboSemiAutomatic");
	}
	else
	{
		//document.getElementById(id).style.background="url(Techmation/image/bg_BtnDown_163.png)";
	}
}

function BtnUp(id)
{
	if(id == "btn_Stop")
	{
		document.getElementById(id).style.background="url(Techmation/image/Stop_Up.png)";
	}
	else if(id == "btn_Reset")
	{
		//document.getElementById(id).style.background="url(Techmation/image/bg_BtnUp_16335.png)";
	}
	else if(id == "btn_Start")
	{
		document.getElementById(id).style.background="url(Techmation/image/bg_StartUp.png)";
		writeValueFN("false", "unit/dHdGlobal.gboStartProgram");
	}
	else if(id == "btn_Continue")
	{
		document.getElementById(id).style.background="url(Techmation/image/bg_ContinueUp.png)";
		writeValueFN("false", "unit/dHdGlobal.gboContinueProgram");
	}
	else if(id == "btn_Stop2")
	{
		document.getElementById(id).style.background="url(Techmation/image/bg_StopUp.png)";
		writeValueFN("false", "unit/dHdGlobal.gboInterruptProgram");
	}
	else if(id == "btn_Auto")
	{
		//document.getElementById(id).style.background="url(Techmation/image/bg_BtnDown_163.png)";
		writeValueFN("false", "unit/dHdGlobal.gboAutomatic");
	}
	else if(id == "btn_Semi_auto")
	{
		//document.getElementById(id).style.background="url(Techmation/image/bg_BtnDown_163.png)";
		writeValueFN("false", "unit/dHdGlobal.gboSemiAutomatic");
	}
	else
	{
	//	document.getElementById(id).style.background="url(Techmation/image/bg_BtnUp_163.png)";
	}
}

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
	

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
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
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
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
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Pre_Production";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";  
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dGlobal.gudiEstimateAmount";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Cur_Production";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";  
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dGlobal.gudicurrentAmount";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Stop";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboEStop";  
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gboEstopState";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    //Starte Aktualisierung

    SubscriptionInstance = subscription(SubscriptionInstance, SubscriptionCycle, SubscriptionData.ItemList);
}
/*
(function BreakNB(){
    setInterval("ReadWriteBN();",1000);
}());*/