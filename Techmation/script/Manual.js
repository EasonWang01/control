function showDiv(id){
	if(id == "btn_ManualLocation")
	{
		document.getElementById("div_SetPosition").style.display="block"; 
	}
	else if(id == "btn_SetManualSpeed")
	{
		document.getElementById("div_SetSpeed").style.display="block";
	}
}

function hideDiv(id){
	if(id == "btn_HideSetPosition")
	{
		document.getElementById("div_SetPosition").style.display="none"; 
	}
	else if(id =="btn_HideSetSpeed")
	{
		document.getElementById("div_SetSpeed").style.display="none"; 
	}
}

function browserRedirect(id)
{
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)
	{
        BtnMobileDevices(id);
    }
	else 
	{
        BtnPcDevices(id);
    }
}
function BtnMobileDevices(id)
{
    //X1Y1
    if(id == "btn_Y1Z1_up")
	{	
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent1, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent1, false);
		function handleTouchEvent1(event1) {
            switch (event1.type) {
                case "touchstart":    
				    document.getElementById(id).style.background="url(../image/bg_BtnDown_top.png)";
                    writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");
                    break;
                case "touchend":
				    document.getElementById(id).style.background="url(../image/bg_BtnUp_top.png)";
                    writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");
                    break;   
            }
        }
	}	
	else if(id == "btn_Y1Z1_left")
	{
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent2, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent2, false);
		function handleTouchEvent2(event2) {   
            switch (event2.type) {
                case "touchstart":
				   document.getElementById(id).style.background="url(../image/bg_BtnDown_left.png)";
                    writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
                    break;
                case "touchend":
                    document.getElementById(id).style.background="url(../image/bg_BtnUp_left.png)";
					writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
                    break;   
            }
        }
		
	}
	else if(id == "btn_Y1Z1_right")
	{
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent3, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent3, false);
		function handleTouchEvent3(event3) {     
            switch (event3.type) {
                case "touchstart":
                    document.getElementById(id).style.background="url(../image/bg_BtnDown_right.png)";
					writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
                    break;
                case "touchend":
                    document.getElementById(id).style.background="url(../image/bg_BtnUp_right.png)";
					writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
                    break;   
            }
        }	
	}
	else if(id == "btn_Y1Z1_down")
	{
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent4, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent4, false);
		function handleTouchEvent4(event4) {
            switch (event4.type) {
                case "touchstart":
                    document.getElementById(id).style.background="url(../image/bg_BtnDown_bottom.png)";
					writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
                    break;
                case "touchend":
                    document.getElementById(id).style.background="url(../image/bg_BtnUp_bottom.png)";
					writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
                    break;   
            }
        }	
	}
	//X
	else if(id == "btn_X_left")
	{
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent01, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent01, false);
		function handleTouchEvent01(event01) {  
            switch (event01.type) {
                case "touchstart":
                    document.getElementById(id).style.background="url(../image/bg_BtnDown_left8150.png)";
		            writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
                    break;
                case "touchend":
                    document.getElementById(id).style.background="url(../image/bg_BtnUp_left8150.png)";
		            writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
                    break;   
            }
        }	
	}
	else if(id == "btn_X_right")
	{
		document.getElementById(id).addEventListener("touchstart", handleTouchEvent02, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent02, false);
		function handleTouchEvent02(event02) {    
            switch (event02.type) {
                case "touchstart":
				    document.getElementById(id).style.background="url(../image/bg_BtnDown_right7550.png)";
		            writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
                    break;
                case "touchend":
                    document.getElementById(id).style.background="url(../image/bg_BtnUp_right7550.png)";
		            writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
                    break;   
            }	
        }	
	}
	//手动定位
    else if(id == "btn_X_Move")
	{
	    document.getElementById(id).addEventListener("touchstart", handleTouchEvent001, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent001, false);
		function handleTouchEvent001(event001) {    
            switch (event001.type) {
                case "touchstart":
                    writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].boexecutepos");
                    break;
                case "touchend":
                   	writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].boexecutepos");
		            writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].boexecutestop");
                    break;   
            }	
        }	
	}
	else if(id == "btn_Y1_Move")
	{
	    document.getElementById(id).addEventListener("touchstart", handleTouchEvent002, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent002, false);
		function handleTouchEvent002(event002) {    
            switch (event002.type) {
                case "touchstart":
                    writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].boexecutepos");
                    break;
                case "touchend":
                   	writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].boexecutepos");
		            writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].boexecutestop");
                    break;   
            }	
        }	
	}
	else if(id == "btn_Z1_Move")
	{
	    document.getElementById(id).addEventListener("touchstart", handleTouchEvent003, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent003, false);
		function handleTouchEvent003(event003) {    
            switch (event003.type) {
                case "touchstart":
                    writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].boexecutepos");
                    break;
                case "touchend":
                   	writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].boexecutepos");
		            writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].boexecutestop");
                    break;   
            }	
        }	
	}
	else if(id == "btn_Y2_Move")
	{
        document.getElementById(id).addEventListener("touchstart", handleTouchEvent004, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent004, false);
		function handleTouchEvent004(event004) {    
            switch (event004.type) {
                case "touchstart":
                    
                    break;
                case "touchend":
                   	
                    break;   
            }	
        }	
	}
	else if(id == "btn_Z2_Move")
	{
        document.getElementById(id).addEventListener("touchstart", handleTouchEvent005, false);
        document.getElementById(id).addEventListener("touchend", handleTouchEvent005, false);
		function handleTouchEvent005(event005) {    
            switch (event005.type) {
                case "touchstart":
                    
                    break;
                case "touchend":
                   	
                    break;   
            }	
        }	
	}	
}
function BtnPcDevices(id)
{
    if(id == "btn_Y1Z1_up")
	{
	    btn_Y1Z1_up.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_top.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");
		}
		btn_Y1Z1_up.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_top.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");
		}
	}
	else if(id == "btn_Y1Z1_left")
	{
	    btn_Y1Z1_left.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_left.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
		}
		btn_Y1Z1_left.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_left.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
		}
	}
	else if(id == "btn_Y1Z1_right")
	{
	    btn_Y1Z1_right.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_right.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
		}
		btn_Y1Z1_right.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_right.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
		}
	}
	else if(id == "btn_Y1Z1_down")
	{
	    btn_Y1Z1_down.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_bottom.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
		}
		btn_Y1Z1_down.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_bottom.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
		}
	}
	else if(id == "btn_X_left")
	{
	    btn_X_left.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_left8150.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
		}
		btn_X_left.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_left8150.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
		}
	}
	else if(id == "btn_X_right")
	{
	    btn_X_right.onmousedown=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnDown_right7550.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
		}
		btn_X_right.onmouseup=function(){
		document.getElementById(id).style.background="url(../image/bg_BtnUp_right7550.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
		}
	}
	else if(id == "btn_X_Move")
	{
	    btn_X_Move.onmousedown=function(){
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].boexecutepos");
		}
		btn_X_Move.onmouseup=function(){
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].boexecutepos");
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].boexecutestop");
		}
	}
	else if(id == "btn_Y1_Move")
	{
	    btn_Y1_Move.onmousedown=function(){
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].boexecutepos");
		}
		btn_Y1_Move.onmouseup=function(){
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].boexecutepos");
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].boexecutestop");
		}
	}
	else if(id == "btn_Z1_Move")
	{
	    btn_Z1_Move.onmousedown=function(){
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].boexecutepos");
		}
		btn_Z1_Move.onmouseup=function(){
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].boexecutepos");
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].boexecutestop");
		}
	}
	else if(id == "btn_Y2_Move")
	{
	    btn_Y2_Move.onmousedown=function(){
		
		}
		btn_Y2_Move.onmouseup=function(){
		
		}
	}
	else if(id == "btn_Z2_Move")
	{
	    btn_Z2_Move.onmousedown=function(){
		
		}
		btn_Z2_Move.onmouseup=function(){
		
		}
	}
}
function BtnDown(id)
{   	
	if(id == "btn_Stop")
	{
		document.getElementById(id).style.background="url(../image/Stop_Down.png)";
	}
	else if(id == "btn_Manual")
	{
		//document.getElementById(id).style.background="url(../image/bg_BtnDown_12732.png)";
		writeValueFN("true", "unit/dHdGlobal.gboManual");
	}
	else if(id == "btn_Stop2")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_9696.png)";
		writeValueFN("true", "unit/dHdGlobal.gboAxesStop");
	}
	else if(id == "btn_Homing")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_9696.png)";
		writeValueFN("true", "unit/dHdGlobal.gboMoveToStartPos");
	}
	else if(id == "btn_Motor")
	{
		//document.getElementById(id).style.background="url(../image/bg_BtnStartOn.png)";
		writeValueFN("true", "unit/dHdGlobal.gboEnableaxes");
	}
	else if(id == "btn_ManualLocation" || id == "btn_SetManualSpeed")
	{
		//document.getElementById(id).style.background="url(../image/bg_BtnDown_127.png)";
	}
	/*else if(id == "btn_Y1Z1_up")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_top.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");
	}*/
	else if(id == "btn_Y2Z2_up")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_top.png)";
	}
	/*else if(id == "btn_Y1Z1_left")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_left.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
	}*/
	else if(id == "btn_Y2Z2_left")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_left.png)";
	}
	/*else if(id == "btn_Y1Z1_right")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_right.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
	}*/
	else if(id == "btn_Y2Z2_right")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_right.png)";
	}
	/*else if(id == "btn_Y1Z1_down")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_bottom.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
	}*/
	else if(id == "btn_Y2Z2_down")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_bottom.png)";
	}
	/*else if(id == "btn_X_left")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_left8150.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
	}
	else if(id == "btn_X_right")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnDown_right7550.png)";
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
	}*/
	/*else if(id == "btn_+Y" || id == "btn_-Y" || id == "btn_+Z" || id == "btn_-Z")
	{
		//document.getElementById(id).style.background="url(../image/bg_BtnDown.png)";
	}*/
	/*else if(id == "btn_X_Move")
	{
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].boexecutepos");
	}
	else if(id == "btn_Y1_Move")
	{
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].boexecutepos");
	}
	else if(id == "btn_Z1_Move")
	{
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].boexecutepos");
	}
	else if(id == "btn_Y2_Move")
	{

	}
	else if(id == "btn_Z2_Move")
	{

	}
	else
	{
		//document.getElementById(id).style.background="url(../image/bg_BtnDown_7434.png)";
	}*/
	else if(id == "btn_Clamp01")
	{
		writeValueFN("true", "unit/dHdGlobal.gboPicker1");
	}
	else if(id == "btn_Clamp02")
	{
		writeValueFN("true", "unit/dHdGlobal.gboPicker2");
	}
	else if(id == "btn_Clamp03")
	{
		writeValueFN("true", "unit/dHdGlobal.gboPicker3");
	}
	
	else if(id == "btn_Cupula01")
	{
		writeValueFN("true", "unit/dHdGlobal.gboSucker1");
	}
	else if(id == "btn_Cupula02")
	{
		writeValueFN("true", "unit/dHdGlobal.gboSucker2");
	}
	else if(id == "btn_Cupula03")
	{	
		writeValueFN("true", "unit/dHdGlobal.gboSucker3");
	}
	
	else if(id == "btn_Reserve01")
	{
		writeValueFN("true", "unit/dHdGlobal.gboRetain1");
	}
	else if(id == "btn_Reserve02")
	{
		writeValueFN("true", "unit/dHdGlobal.gboRetain2");
	}
	else if(id == "btn_Reserve03")
	{		
		writeValueFN("true", "unit/dHdGlobal.gboRetain3");
	}
	
	else if(id == "btn_CAxis_0")
	{
		writeValueFN("true", "unit/dHdGlobal.gboCAxis0");
	}
	else if(id == "btn_CAxis_90")
	{
		writeValueFN("true", "unit/dHdGlobal.gboCAxis90");
	}
	else if(id == "btn_CAxis_180")
	{
		writeValueFN("true", "unit/dHdGlobal.gboCAxis180");
	}
	
	else if(id == "btn_+Y")
	{
	    document.getElementById(id).style.background="url(../image/bg_BtnDown.png)";
	    writeValueFN("true", "unit/dHdGlobal.gboSyncYpos");
	}
	else if(id == "btn_-Y")
	{
	    document.getElementById(id).style.background="url(../image/bg_BtnDown.png)";
	    writeValueFN("true", "unit/dHdGlobal.gboSyncYneg");
	}
	else if(id == "btn_+Z")
	{
	    document.getElementById(id).style.background="url(../image/bg_BtnDown.png)";
	    writeValueFN("true", "unit/dHdGlobal.gboSyncZpos");
	}
	else if(id == "btn_-Z")
	{
	    document.getElementById(id).style.background="url(../image/bg_BtnDown.png)";
	    writeValueFN("true", "unit/dHdGlobal.gboSyncZneg");
	}
}

function BtnUp(id)
{
	if(id == "btn_Stop")
	{
		document.getElementById(id).style.background="url(../image/Stop_Up.png)";
	}
	else if(id == "btn_Manual")
	{
		//document.getElementById(id).style.background="url(../image/bg_BtnUp_12732.png)";
		writeValueFN("false", "unit/dHdGlobal.gboManual");
	}
	else if(id == "btn_Stop2")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_9696.png)";
	}
	else if(id == "btn_Homing")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_9696.png)";
		writeValueFN("false", "unit/dHdGlobal.gboMoveToStartPos");
	}
	else if(id == "btn_Motor")
	{
		//document.getElementById(id).style.background="url(../image/bg_BtnStartOff.png)";
		writeValueFN("false", "unit/dHdGlobal.gboEnableaxes");
	}
	else if(id == "btn_ManualLocation" || id == "btn_SetManualSpeed")
	{
		//document.getElementById(id).style.background="url(../image/bg_BtnUp_127.png)";
	}
	/*else if(id == "btn_Y1Z1_up")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_top.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojogpositiv");
	}*/
	else if(id == "btn_Y2Z2_up")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_top.png)";
	}
	/*else if(id == "btn_Y1Z1_left" )
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_left.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojognegative");
	}*/
	else if(id == "btn_Y2Z2_left")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_left.png)";
	}
	/*else if(id == "btn_Y1Z1_right" )
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_right.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].bojogpositiv");
	}*/
	else if( id == "btn_Y2Z2_right")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_right.png)";
	}
	/*else if(id == "btn_Y1Z1_down")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_bottom.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].bojognegative");
	}*/
	else if(id == "btn_Y2Z2_down")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_bottom.png)";
	}
	/*else if(id == "btn_X_left")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_left8150.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojognegative");
	}
	else if(id == "btn_X_right")
	{
		document.getElementById(id).style.background="url(../image/bg_BtnUp_right7550.png)";
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].bojogpositiv");
	}*/
	else if(id == "btn_Clamp01")
	{
		writeValueFN("false", "unit/dHdGlobal.gboPicker1");
	}
	else if(id == "btn_Clamp02")
	{		
		writeValueFN("false", "unit/dHdGlobal.gboPicker2");
	}
	else if(id == "btn_Clamp03")
	{		
		writeValueFN("false", "unit/dHdGlobal.gboPicker3");
	}
	
	else if(id == "btn_Cupula01")
	{
		
		writeValueFN("false", "unit/dHdGlobal.gboSucker1");
	}
	else if(id == "btn_Cupula02")
	{		
		writeValueFN("false", "unit/dHdGlobal.gboSucker2");
	}
	else if(id == "btn_Cupula03")
	{		
		writeValueFN("false", "unit/dHdGlobal.gboSucker3");
	}
	
	else if(id == "btn_Reserve01")
	{	
		writeValueFN("false", "unit/dHdGlobal.gboRetain1");
	}
	else if(id == "btn_Reserve02")
	{		
		writeValueFN("false", "unit/dHdGlobal.gboRetain2");
	}
	else if(id == "btn_Reserve03")
	{		
		writeValueFN("false", "unit/dHdGlobal.gboRetain3");
	}
	
	else if(id == "btn_CAxis_0")
	{
		writeValueFN("false", "unit/dHdGlobal.gboCAxis0");
	}
	else if(id == "btn_CAxis_90")
	{		
		writeValueFN("false", "unit/dHdGlobal.gboCAxis90");
	}
	else if(id == "btn_CAxis_180")
	{		
		writeValueFN("false", "unit/dHdGlobal.gboCAxis180");
	}
	
	else if(id == "btn_+Y")
	{
	    document.getElementById(id).style.background="url(../image/bg_BtnUp.png)";
	    writeValueFN("false", "unit/dHdGlobal.gboSyncYpos");
	}
	else if(id == "btn_-Y")
	{
	    document.getElementById(id).style.background="url(../image/bg_BtnUp.png)";
	    writeValueFN("false", "unit/dHdGlobal.gboSyncYneg");
	}
	else if(id == "btn_+Z")
	{
	    document.getElementById(id).style.background="url(../image/bg_BtnUp.png)";
	    writeValueFN("false", "unit/dHdGlobal.gboSyncZpos");
	}
	else if(id == "btn_-Z")
	{
	    document.getElementById(id).style.background="url(../image/bg_BtnUp.png)";
	    writeValueFN("false", "unit/dHdGlobal.gboSyncZneg");
	}
	/*else if(id == "btn_X_Move")
	{
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[0].boexecutepos");
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[0].boexecutestop");
	}
	else if(id == "btn_Y1_Move")
	{
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[1].boexecutepos");
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[1].boexecutestop");
	}
	else if(id == "btn_Z1_Move")
	{
		writeValueFN("false", "unit/xPTemplAxisFB.gashmidata[2].boexecutepos");
		writeValueFN("true", "unit/xPTemplAxisFB.gashmidata[2].boexecutestop");
	}
	else if(id == "btn_Y2_Move")
	{

	}
	else if(id == "btn_Z2_Move")
	{

	}
	else
	{
		//document.getElementById(id).style.background="url(../image/bg_BtnUp_7434.png)";
	}*/
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
//Y1/Z1
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Y1Z1_Horizontal";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboY1Z1_Horizontal";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[23]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Y1Z1_Vertical";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboY1Z1_Vertical";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[24]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Y1Z1_TopLine";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboY1Z1_TopLine";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gboNegLimitZ1";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//型内、外限
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_X_InnerLimit";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboX_InnerLimit";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gboNegLimitX";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_X_OuterLimit";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboX_OuterLimit";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gboPosLimitX";
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
//夹具
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Clamp01";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboClamp1";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[67]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Clamp02";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboClamp2";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[68]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Clamp03";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboClamp3";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[69]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//吸盘
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Cupula01";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboCupula1";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[70]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Cupula02";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboCupula2";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[71]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Cupula03";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboCupula3";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[72]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//保留
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Reserve01";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboReserve1";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[64]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Reserve02";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboReserve2";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[65]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Reserve03";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboReserve3";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[66]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//C轴
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_CAxis_0";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboCAxis1";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[73]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_CAxis_90";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboCAxis2";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[74]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_CAxis_180";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboCAxis3";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[75]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "btn_Motor";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "MotorState";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gboPower";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_MovePistion";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/xPTemplAxisFB.gashmidata[0].saxisdata.sposdata.r32position";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_MovePistion";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/xPTemplAxisFB.gashmidata[1].saxisdata.sposdata.r32position";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_MovePistion";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/xPTemplAxisFB.gashmidata[2].saxisdata.sposdata.r32position";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_ManualVelocity";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/xPTemplAxisFB.gasHMIData[0].sAxisData.sPosData.r32Velocity";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;	
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_ManualVelocity";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/xPTemplAxisFB.gasHMIData[1].sAxisData.sPosData.r32Velocity";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_ManualVelocity";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/xPTemplAxisFB.gasHMIData[2].sAxisData.sPosData.r32Velocity";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_ManualVelocity";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/xPTemplAxisFB.gasHMIData[3].sAxisData.sPosData.r32Velocity";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_ManualVelocity";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/xPTemplAxisFB.gasHMIData[4].sAxisData.sPosData.r32Velocity";

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