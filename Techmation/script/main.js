function OnloadFuntion() {
    buildSubscription();
}
function cleanDiv(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
function showToolbar(){
	//console.log(value);
	//document.getElementById(id).value = value;
							 ];
								];
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
                      150,
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
                       "ERR_WRONG_SYNC_AXIS_INDEX: Wrong synchronous axis index",
function writeSingleVar(id) {
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
	};
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
                            case "floatSpeed":
                            case "gboAutomatic":                         
                                {
                                    Value = CurrentValues[i].mItemValue;
                                    if (Value == 0) {									   
                                        document.getElementById("inp_MotionMode").value = "手動";  										
                                    }
                                    else if(Value == 1){                                      
                                    }
                                    break;
                                }
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
							    }						
                            case "gboEStop":
                                //Wenn Typ ist "gboEStop"
                                {
                                    Value = CurrentValues[i].mItemValue;
                                    if (Value == "false") {
											document.getElementById("btn_Stop").style.background="url(../image/Stop_Down.png)";	
                                        gboEstop = "false";
                                    }
                                    else {
											document.getElementById("btn_Stop").style.background="url(../image/Stop_Up.png)";	
                                        gboEstop = "true";
                                    }
                                    break;
                                }
                            default:
                                //Wenn Typ unbekannt oder nicht angegeben, dann wird versucht, den aktualisierten Variablenwert in das angebundene HTML-Element zu schreiben.
                                {
                                    var tmpValue = document.getElementById(parItemList[k].id);
										Value = CurrentValues[i].mItemValue;
										tmpValue.value = Value;
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
function ReadValuePathTwo(id, SimotionVariable) {
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
			}
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
}
			console.log(tmpValue);
			console.log(wIndex);
				default:
				break;
        ShowAlarm();			
			switch(SiemensAlarmData[i][1])
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
			}
				if(SiemensAlarmData[i][0] == SiemensAlarmID[j])
					var AlarmDes = SiemensAlarmDes[j];
					console.log(AlarmDes);
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