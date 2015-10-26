
/*$(document).ready(function(e) {
			//设置最大值
			ScrollBar.maxValue=100;
			//初始化
			ScrollBar.Initialize();		
		});
		var ScrollBar = {
			value: 20,
			maxValue: 100,
			step: 1,
			currentX: 0,
			Initialize: function() {
				if (this.value > this.maxValue) {
					alert("给定当前值大于了最大值");
					return;
				}
				this.GetValue();
				$("#scroll_Track").css("width", this.currentX + 2 + "px");
				$("#scroll_Thumb").css("margin-left", this.currentX + "px");
				this.Value();
				$("#scrollBarTxt").html(ScrollBar.value + "/" + ScrollBar.maxValue);
			},
			Value: function() {
				var valite = false;
				var currentValue;
				$("#scroll_Thumb").touchstart(function() {
					valite = true;
					$(document.body).touchmove(function(event) {
						if (valite == false) return;
						var changeX = event.clientX - ScrollBar.currentX;
						currentValue = changeX - ScrollBar.currentX-$("#Demo").offset().left;
						$("#scroll_Thumb").css("margin-left", currentValue + "px");
						$("#scroll_Track").css("width", currentValue + 2 + "px");
						if ((currentValue + 25) >= $("#scrollBar").width()) {
							$("#scroll_Thumb").css("margin-left", $("#scrollBar").width() - 25 + "px");
							$("#scroll_Track").css("width", $("#scrollBar").width() + 2 + "px");
							ScrollBar.value = ScrollBar.maxValue;
						} else if (currentValue <= 0) {
							$("#scroll_Thumb").css("margin-left", "0px");
							$("#scroll_Track").css("width", "0px");
						} else {
							ScrollBar.value = Math.round(100 * (currentValue / $("#scrollBar").width()));
						}
						$("#scrollBarTxt").html(ScrollBar.value + "/" + ScrollBar.maxValue);
					});
				});
				$(document.body).touchend(function() {
					ScrollBar.value = Math.round(100 * (currentValue / $("#scrollBar").width()));
					valite = false;
					if (ScrollBar.value >= ScrollBar.maxValue) ScrollBar.value = ScrollBar.maxValue;
					if (ScrollBar.value <= 0) ScrollBar.value = 0;
					$("#scrollBarTxt").html(ScrollBar.value + "/" + ScrollBar.maxValue);
					//console.log(ScrollBar.value);
					writeValueFN(ScrollBar.value, "unit/dHdGlobal.gsHMIdata.sPath.r64Velo");
				});
			},
			GetValue: function() {
				this.currentX = $("#scrollBar").width() * (this.value / this.maxValue);
			}
		}
 */
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


	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_MaxVelo";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxVelo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_MaxVelo";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxVelo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_MaxVelo";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxVelo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_MaxVelo";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxVelo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_MaxVelo";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxVelo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_VeloPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[1].r64Velo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_VeloPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[2].r64Velo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_VeloPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[3].r64Velo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_VeloPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[4].r64Velo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_VeloPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[5].r64Velo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_MaxAccel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxAccel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_MaxAccel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxAccel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_MaxAccel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxAccel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_MaxAccel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxAccel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_MaxAccel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxAccel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_AccelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[1].r64Accel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_AccelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[2].r64Accel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_AccelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[3].r64Accel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_AccelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[4].r64Accel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_AccelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[5].r64Accel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_MaxDecel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxDecel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_MaxDecel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxDecel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_MaxDecel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxDecel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_MaxDecel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxDecel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_MaxDecel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxDecel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_DecelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[1].r64Decel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_DecelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[2].r64Decel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_DecelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[3].r64Decel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_DecelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[4].r64Decel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_DecelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[5].r64Decel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_MaxJerk";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxJerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_MaxJerk";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxJerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_MaxJerk";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxJerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_MaxJerk";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxJerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_MaxJerk";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxJerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_JerkPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[1].r64Jerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_JerkPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[2].r64Jerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_JerkPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[3].r64Jerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_JerkPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[4].r64Jerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_JerkPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[5].r64Jerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_MinPosition";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[1].r64swLimitNeg";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_MinPosition";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[2].r64swLimitNeg";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_MinPosition";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[3].r64swLimitNeg";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_MinPosition";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[4].r64swLimitNeg";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_MinPosition";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[5].r64swLimitNeg";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_MaxPosition";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[1].r64swLimitPos";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_MaxPosition";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[2].r64swLimitPos";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_MaxPosition";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[3].r64swLimitPos";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_MaxPosition";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[4].r64swLimitPos";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_MaxPosition";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sAxis[5].r64swLimitPos";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_PathMaxVelo";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sPath.r64MaxVelo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();      //路徑速度百分比
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_PathVelo";
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sPath.r64Velo";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_PathMaxAccel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sPath.r64MaxAccel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_PathMaxDecel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sPath.r64MaxDecel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_PathMaxJerk";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sPath.r64MaxJerk";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_PathAccelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sPath.r64Accel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_PathDecelPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sPath.r64Decel";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_PathJerkPercent";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "default";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sPath.r64Jerk";

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
}
//速度
function writeSingleVar0(id)
{    
    if(id=="inp_X_MaxVelo") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxVelo");
    } 
}
function writeSingleVar1(id)
{    
    if(id=="inp_X_VeloPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[1].r64Velo");
    } 
}
function writeSingleVar2(id)
{    
    if(id=="inp_Y1_MaxVelo") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxVelo");
    } 
}
function writeSingleVar3(id)
{    
    if(id=="inp_Y1_VeloPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[2].r64Velo");
    } 
}
function writeSingleVar4(id)
{    
    if(id=="inp_Z1_MaxVelo") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxVelo");
    } 
}
function writeSingleVar5(id)
{    
    if(id=="inp_Z1_VeloPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[3].r64Velo");
    } 
}
function writeSingleVar6(id)
{    
    if(id=="inp_Y2_MaxVelo") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxVelo");
    } 
}
function writeSingleVar7(id)
{    
    if(id=="inp_Y2_VeloPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[4].r64Velo");
    } 
}
function writeSingleVar8(id)
{    
    if(id=="inp_Z2_MaxVelo") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxVelo");
    } 
}
function writeSingleVar9(id)
{    
    if(id=="inp_Z2_VeloPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[5].r64Velo");
    } 
}
//加速度
function writeSingleVar00(id)
{    
    if(id=="inp_X_MaxAccel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxAccel");
    } 
}
function writeSingleVar01(id)
{    
    if(id=="inp_X_AccelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[1].r64Accel");
    } 
}
function writeSingleVar02(id)
{    
    if(id=="inp_Y1_MaxAccel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxAccel");
    } 
}
function writeSingleVar03(id)
{    
    if(id=="inp_Y1_AccelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[2].r64Accel");
    } 
}
function writeSingleVar04(id)
{    
    if(id=="inp_Z1_MaxAccel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxAccel");
    } 
}
function writeSingleVar05(id)
{    
    if(id=="inp_Z1_AccelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[3].r64Accel");
    } 
}
function writeSingleVar06(id)
{    
    if(id=="inp_Y2_MaxAccel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxAccel");
    } 
}
function writeSingleVar07(id)
{    
    if(id=="inp_Y2_AccelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[4].r64Accel");
    } 
}
function writeSingleVar08(id)
{    
    if(id=="inp_Z2_MaxAccel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxAccel");
    } 
}
function writeSingleVar09(id)
{    
    if(id=="inp_Z2_AccelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[5].r64Accel");
    } 
}
//减速度
function writeSingleVar10(id)
{    
    if(id=="inp_X_MaxDecel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxDecel");
    } 
}
function writeSingleVar11(id)
{    
    if(id=="inp_X_DecelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[1].r64Decel");
    } 
}
function writeSingleVar12(id)
{    
    if(id=="inp_Y1_MaxDecel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxDecel");
    } 
}
function writeSingleVar13(id)
{    
    if(id=="inp_Y1_DecelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[2].r64Decel");
    } 
}
function writeSingleVar14(id)
{    
    if(id=="inp_Z1_MaxDecel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxDecel");
    } 
}
function writeSingleVar15(id)
{    
    if(id=="inp_Z1_DecelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[3].r64Decel");
    } 
}
function writeSingleVar16(id)
{    
    if(id=="inp_Y2_MaxDecel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxDecel");
    } 
}
function writeSingleVar17(id)
{    
    if(id=="inp_Y2_DecelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[4].r64Decel");
    } 
}
function writeSingleVar18(id)
{    
    if(id=="inp_Z2_MaxDecel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxDecel");
    } 
}
function writeSingleVar19(id)
{    
    if(id=="inp_Z2_DecelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[5].r64Decel");
    } 
}
//加加速度
function writeSingleVar20(id)
{    
    if(id=="inp_X_MaxJerk") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[1].r64MaxJerk");
    } 
}
function writeSingleVar21(id)
{    
    if(id=="inp_X_JerkPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[1].r64Jerk");
    } 
}
function writeSingleVar22(id)
{    
    if(id=="inp_Y1_MaxJerk") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[2].r64MaxJerk");
    } 
}
function writeSingleVar23(id)
{    
    if(id=="inp_Y1_JerkPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[2].r64Jerk");
    } 
}
function writeSingleVar24(id)
{    
    if(id=="inp_Z1_MaxJerk") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[3].r64MaxJerk");
    } 
}
function writeSingleVar25(id)
{    
    if(id=="inp_Z1_JerkPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[3].r64Jerk");
    } 
}
function writeSingleVar26(id)
{    
    if(id=="inp_Y2_MaxJerk") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[4].r64MaxJerk");
    } 
}
function writeSingleVar27(id)
{    
    if(id=="inp_Y2_JerkPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[4].r64Jerk");
    } 
}
function writeSingleVar28(id)
{    
    if(id=="inp_Z2_MaxJerk") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[5].r64MaxJerk");
    } 
}
function writeSingleVar29(id)
{    
    if(id=="inp_Z2_JerkPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[5].r64Jerk");
    } 
}
//最小位置
function writeSingleVar30(id)
{    
    if(id=="inp_X_MinPosition") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[1].r64swLimitNeg");
    } 
}
function writeSingleVar31(id)
{    
    if(id=="inp_Y1_MinPosition") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[2].r64swLimitNeg");
    } 
}
function writeSingleVar32(id)
{    
    if(id=="inp_Z1_MinPosition") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[3].r64swLimitNeg");
    } 
}
function writeSingleVar33(id)
{    
    if(id=="inp_Y2_MinPosition") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[4].r64swLimitNeg");
    } 
}
function writeSingleVar34(id)
{    
    if(id=="inp_Z2_MinPosition") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[5].r64swLimitNeg");
    } 
}
//最大位置
function writeSingleVar40(id)
{    
    if(id=="inp_X_MaxPosition") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[1].r64swLimitPos");
    } 
}
function writeSingleVar41(id)
{    
    if(id=="inp_Y1_MaxPosition") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[2].r64swLimitPos");
    } 
}
function writeSingleVar42(id)
{    
    if(id=="inp_Z1_MaxPosition") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[3].r64swLimitPos");
    } 
}
function writeSingleVar43(id)
{    
    if(id=="inp_Y2_MaxPosition") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[4].r64swLimitPos");
    } 
}
function writeSingleVar44(id)
{    
    if(id=="inp_Z2_MaxPosition") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sAxis[5].r64swLimitPos");
    } 
}
//路径最大速度
function writeSingleVar50(id)
{    
    if(id=="inp_PathMaxVelo") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sPath.r64MaxVelo");
    } 
}
//路径速度
function writeSingleVar60(id)
{    
    if(id=="inp_PathVelo") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sPath.r64Velo");
    } 
}
//路径加速度、路径减速度、路径加加速度（最大值与百分比）
function writeSingleVar70(id)
{    
    if(id=="inp_PathMaxAccel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sPath.r64MaxAccel");
    } 
}
function writeSingleVar71(id)
{    
    if(id=="inp_PathAccelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sPath.r64Accel");
    } 
}
function writeSingleVar72(id)
{    
    if(id=="inp_PathMaxDecel") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sPath.r64MaxDecel");
    } 
}
function writeSingleVar73(id)
{    
    if(id=="inp_PathDecelPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sPath.r64Decel");
    } 
}
function writeSingleVar74(id)
{    
    if(id=="inp_PathMaxJerk") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sPath.r64MaxJerk");
    } 
}
function writeSingleVar75(id)
{    
    if(id=="inp_PathJerkPercent") {
	var y=document.getElementById(id).value;
    writeValueFN(y, "unit/dHdGlobal.gsHMIdata.sPath.r64Jerk");
    } 
}
