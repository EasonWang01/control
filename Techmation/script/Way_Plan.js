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

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords1_X";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[1].x";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords1_Y1";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[1].y1";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords1_Z1";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[1].z1";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords1_Y2";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[1].y2";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords1_Z2";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[1].z2";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;	
	

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords2_X";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[2].x";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords2_Y1";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[2].y1";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords2_Z1";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[2].z1";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords2_Y2";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[2].y2";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords2_Z2";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[2].z2";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords3_X";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[3].x";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords3_Y1";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[3].y1";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords3_Z1";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[3].z1";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords3_Y2";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[3].y2";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords3_Z2";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[3].z2";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords4_X";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[4].x";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords4_Y1";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[4].y1";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords4_Z1";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[4].z1";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords4_Y2";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[4].y2";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Coords4_Z2";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gascoords[4].z2";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
    //Starte Aktualisierung

    SubscriptionInstance = subscription(SubscriptionInstance, SubscriptionCycle, SubscriptionData.ItemList);
}