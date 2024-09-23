function mainLoad()		{
        
    console.log("mainLoad() starting");

    var valid_password = "cerner"

    var mHTML = []
    mHTML.push('<div id="page_title"></div>');
    mHTML.push('<div id="version"></div>');
    mHTML.push('<div id="division_main_menu" class="division_main_menu"></div>');
    mHTML.push('<div id="main_menu">');
        mHTML.push('<table id="main_menu_table">');
        mHTML.push('<tr>');			
        mHTML.push('<td><select id="main_menu_select">');
        mHTML.push('</select></td>');
        mHTML.push('</tr>');
        mHTML.push('<table>');
    mHTML.push('</div>');
    mHTML.push('</div>');
    
    mHTML.push('<div id="division_tool_menu" class="division_tool_menu"></div>');
    mHTML.push('<div id="tool_menu" class="tool_menu">');
        mHTML.push('<table id="tool_menu_table">');
        mHTML.push('<tr>');			
        mHTML.push('<td><span class="section-title"><div id="tool_title"></div></span></td>');
        mHTML.push('');
        mHTML.push('</tr>');
        mHTML.push('<table>');
    mHTML.push('</div>');
    mHTML.push('</div>');
    
    mHTML.push('<div id="division_tool_content"></div>');
    mHTML.push('<div id="tool_content"></div>');
    
    mHTML.push('<div id="division_bottom"></div>');
    
    mHTML.push('<div id="console_toggle">');
        mHTML.push('<table id="console_table" class="console_table">');
        mHTML.push('<tr>');
        mHTML.push('<td width=200px"><input type="checkbox" id="console_toggle_chkbox" value=1></input>Toggle Console</td>');
        mHTML.push('<td width=200px"><input type="button" class="default-button" id="console_clear_btn" value="Clear Console"></input></td>');
        mHTML.push('<td><input type="button" class="default-button" id="console_copy_btn" value="Copy Console"></input></td>');
        mHTML.push('</tr>');
        mHTML.push('<tr>');
        mHTML.push('<td colspan=3><span class="console-log"><div id="console_log"></div></span></td>');
        mHTML.push('</tr>');
        mHTML.push('<table>');
    mHTML.push('</div>');
    
    $("#main_content").html(mHTML.join(''));
    console.log("- main_content updated");
    

    //adding password protect
    passHTML = [];
    passHTML.push('<div id="password_content">')
    passHTML.push('<table id="password_table">')
    passHTML.push('<tr>')
    passHTML.push('<td colspan=3><div id=password_response>Enter the password to unlock the support tools</div>')
    passHTML.push('</tr>')
    passHTML.push('<tr>')
    passHTML.push('<td>Password:</td>')
    passHTML.push('<td><input type=password id="password_val"></input></td>')
    passHTML.push('<td><button type="button" id="password_submit">Submit</button></td>')
    passHTML.push('</tr>')

    passHTML.push('')
    passHTML.push('')
    passHTML.push('')
    passHTML.push('')
    passHTML.push('')
    passHTML.push('')
    passHTML.push('')
    passHTML.push('</table>')
    passHTML.push('</div>')

    $("#tool_content").html(passHTML.join(''));

    //setting HTML Defaults and Entriees
    $("#main_menu_select").prop("disabled", true);
    

    	
    //page_title and version
    $("#page_title").text("CST Future Orders MPage Support Tools")
    $("#page_title").addClass('page-title')
    $("#version").text("0.0.2")
    $("#version").addClass('version')
    
    //main_menu_select
    $("#main_menu_select").append($('<option>',
        {
            value: "",
            text : "Select a Support Tool"
        }));
        
        //PowerPlan Manager
        $("#main_menu_select").append($('<option>',
        {
            value: "powerplan_manage",
            text : "PowerPlan Manager"
        }));

        //Specimen Type Manager
        $("#main_menu_select").append($('<option>',
            {
                value: "specimen_manage",
                text : "Specimen Type Manager"
            }));

	//Position Manager
	
        $("#main_menu_select").append($('<option>',
            {
                value: "position_manage",
                text : "Position Manager"
            }));
	
    //division_tool_content
    $("#division_tool_content").css('height','20px')
    
    //division_bottom
    $("#division_bottom").css('height','100px')
    console.log("- main_content defaults set");
    

    //password control
    $("#password_submit").click(function() {
	console.log("password_submit clicked");
   	$("#password_response").html('');
        var password_val = $("#password_val").val();

	console.log("password submitted="+password_val);
	if (password_val == valid_password) {
		$("#main_menu_select").prop("disabled", false);
	        $("#tool_content").html('');
	} else {
		$("#password_response").html('<font color=red>Incorrect Password</font>');
		$("#password_val").val('');
	}
    });

    //console_toggle_chkbox
    $("#console_toggle_chkbox").change(function() {
        console.log("console_toggle_chkbox clicked");
        var console_check = 0
        console_check = $("#console_toggle_chkbox").prop("checked");
        console.log("- console_check="+console_check);
        viewConsole(console_check)
    });
    
    //console_clear_btn
    $("#console_clear_btn").click(function() {
        console.log("console_clear_btn clicked");
        console.log("- console cleared");
        $("#console_log").html('');
    });
    
    //console_copy_btn
    $("#console_copy_btn").click(function() {
        console.log("console_copy_btn clicked");
        console.log("- console selected and copied");
        var currentDOM = JSON.stringify(document.body.outerHTML)
        currentDOM = currentDOM.replace(/[<>&\n]/g, function(x) {
            return {
                '<': '&lt;',
                '>': '&gt;',
                '&': '&amp;',
            '\n': '<br />'
            }[x];
        });
        console.log("<pre>" + currentDOM + "</pre><br>")
    });
    
    //main_menu_select
    $("#main_menu_select").change(function() {
        console.log("main_menu_select changed");
        var selected_menu = $("#main_menu_select").val()
        var selected_text = $("#main_menu_select option:selected").text()
        console.log("- selected="+selected_menu+","+selected_text);
        $("#tool_title").text(selected_text); 
        $("#tool_content").off()
        $("#tool_content").html("")
        switch (selected_menu)	{
            case "powerplan_manage":	PowerPlanManage();
                                    	break;
            case "specimen_manage":   	SpecimenManage();
                                    	break;           
            case "position_manage":   	PositionManage();
                                    	break;              
            default: 	
                                    break;
        } 
        
    });
    
    console.log("- main_content events set");
    
    
    //console_toggle_chkbox
    //set the default value of the console check box 
    //which will determine if it's on by default
    $("#console_toggle_chkbox").prop("checked",false).change()
    
    console.log("mainLoad() ending");

}

function viewConsole(viewable)	{
    console.log("viewConsole started");
    $("#console_log").hide()
    $("#console_clear_btn").hide()
    $("#console_copy_btn").hide()
    if (viewable == 1) {	
        $("#console_log").show()
        $("#console_clear_btn").show()
        $("#console_copy_btn").show()
        console.log("- showig console");		
        } else {
        console.log("- hiding console");		
    }
}


(function(){
    // Save the original method in a private variable
    var _privateLog = console.log;
    // Redefine console.log method with a custom function
    console.log = function (message) {
        $("#console_log").prepend("<br/>["+Date.now()+"] "+message);
        _privateLog.apply(console, arguments);
    };
})();


function PowerPlanManage()	{
    console.log("PowerPlanManage started");
    
    filterHTML = [];
    filterHTML.push('<div id="powerplan_manage_content">');
        filterHTML.push('<table id="powerplan_manage_table">');
            filterHTML.push('<tr>');
            filterHTML.push('<td>');
            filterHTML.push('</td>');
            filterHTML.push('<td><div id="filter_req_loading" class="filter_req_loading">Loading Powerplans for selection, this will take a few seconds...</div>');
            filterHTML.push('</td>');
            filterHTML.push('</tr>');
        filterHTML.push('</table>');
        filterHTML.push('<div id="division_filter_menu" class="division_filter_menu"></div>');
        filterHTML.push('<div id="powerplan_table"></div>');

    filterHTML.push('</div>');
    
    $("#tool_content").html(filterHTML.join(''))
    
    $("#filter_req_loading").show()
    $("#filter_search_loading").hide()
    
    
    var filterRequest = window.external.XMLCclRequest();						
    filterRequest.open("GET","bc_all_future_ord_manager",true);
    filterRequest.send("~MINE~,~PowerPlan~")
    console.log("---- bc_all_future_ord_manager="+"~MINE~,~PowerPlan~")
    filterRequest.onreadystatechange = function () {
        if (filterRequest.readyState == 4 && filterRequest.status == 200) {
            	//alert(filterRequest.responseText);
		var jsonfilterRequest = JSON.parse(filterRequest.responseText);
        	var FilterResponse = jsonfilterRequest.EXCLUDED_NONLAB_POWERPLANS;
	        console.log("----- FilterResponse.QUAL.length "+FilterResponse.QUAL.length)
		var PathwayCatalog = [];
		
		//for (var i = 0; i < 2; i++) { //FilterResponse.QUAL.length; i++) {
		for (var i = 0; i < FilterResponse.QUAL.length; i++) {
			element = {};
			element = {"id":FilterResponse.QUAL[i].PATHWAY_ID,
				   "value":FilterResponse.QUAL[i].DESCRIPTION}
			//alert(JSON.stringify(element));
			//PathwayCatalog.push({'title':FilterResponse.QUAL[i].DESCRIPTION,'id':FilterResponse.QUAL[i].PATHWAY_ID})
			PathwayCatalog.push(FilterResponse.QUAL[i].DESCRIPTION)
			console.log("----- powerplan="+FilterResponse.QUAL[i].DESCRIPTION+":"+FilterResponse.QUAL[i].EXCLUDED)
		}
		
		//alert(PathwayCatalog)
		var SelPathwayCatalog = [];
		for (var i = 0; i < FilterResponse.QUAL.length; i++) {
			if (FilterResponse.QUAL[i].EXCLUDED == 1) {
				SelPathwayCatalog.push(FilterResponse.QUAL[i].DESCRIPTION)
			}
			
		}

            console.log("----- bc_all_future_ord_manager finished")
            filterRespHTML = [];
            filterRespHTML.push('PowerPlan Catalog Search - Type at least 5 characters to start the search of the PowerPlan name<br>')
            filterRespHTML.push('<input id="powerplans" size=100>')
	    filterRespHTML.push('<br><br>')
	    
	    filterRespHTML.push("<div id=excludedList></div>")
	    filterRespHTML.push('<br><br>')
	    filterRespHTML.push("<button id='powerplan_update'>Update</button>")
	    filterRespHTML.push('<br><br>')
        
            $("#powerplan_table").html(filterRespHTML.join(''))
	
            function showExcludedList() {
			ExcludedListHTML = [];
            		ExcludedListHTML.push('<br><br><br>')
            		ExcludedListHTML.push('<h2>PowerPlan Exclusion List</h2>')
			ExcludedListHTML.push('<ul class="bullets">')			
			for (var i = 0; i < SelPathwayCatalog.length; i++) {
				ExcludedListHTML.push('<li>'+SelPathwayCatalog[i]+' <a href="#">(Remove)</a></li>')
				
			}
			ExcludedListHTML.push('</ul>')
			$("#excludedList").html(ExcludedListHTML.join(''))

			$(".bullets li a").click(function(){
    			  var $li = $(this).parent();
  			  var myIndex = $li.parent().children().index( $li );
  			  removePowerPlan( myIndex );
		});
		}

		
        	$("#filter_req_loading").hide()
		showExcludedList()


		function removePowerPlan(index) {
			//alert(index)
    			SelPathwayCatalog.splice(index, 1);
    			showExcludedList();
		}
	    
	
		$( "#powerplans" ).autocomplete({
/*
source: function (request, response) {
           response($.map(PathwayCatalog, function (value, key) {
			alert(    JSON.stringify(value))            
return {
                    title: value.title,
                    id: value.id
                }
            }));
	},
*/	
     		 
			 autoFocus: true,
			 source: PathwayCatalog,
			 delay: 1000,
			 minLength: 5,
			 select: function( event, ui ) { 
					//alert(JSON.stringify(ui))
					SelPathwayCatalog.push(ui.item.value);
					//alert(JSON.stringify(SelPathwayCatalog));
					showExcludedList();
				}
	   	 });

	    $('#powerplan_update').click(function () {
		console.log("powerplan_update started");
		//var new_powerplan_list = JSON.stringify(SelPathwayCatalog);
		new_powerplan_list = '"' + SelPathwayCatalog.join('","') + '"';
		var UpdatePowerPlanRequest = window.external.XMLCclRequest();
		UpdatePowerPlanRequest.open("GET","bc_all_future_ord_manager",true);
		//UpdatePowerPlanRequest.setBlobIn(new_powerplan_list);
		//alert(new_powerplan_list)
		var UpdatePowerPlanRequestArr = "~MINE~,~PowerPlanUpdate~,0,value("+new_powerplan_list+")"
		console.log("----- UpdatePowerPlanRequestArr:"+UpdatePowerPlanRequestArr)
  		UpdatePowerPlanRequest.send(UpdatePowerPlanRequestArr)
	
		UpdatePowerPlanRequest.onreadystatechange = function () {
        		if (UpdatePowerPlanRequest.readyState == 4 && UpdatePowerPlanRequest.status == 200) {
            			alert(UpdatePowerPlanRequest.responseText);
			}
		}
	
		});
		console.log("powerplan_update ended");
		
        	}
		
    
	    }
    
    console.log("PowerPlanManage ended");
}

function SpecimenManage()	{
    console.log("SpecimenManage started");
    
    filterHTML = [];
    filterHTML.push('<div id="specimen_manage_content">');
        filterHTML.push('<table id="specimen_manage_table">');
            filterHTML.push('<tr>');
            filterHTML.push('<td>');
            filterHTML.push('</td>');
            filterHTML.push('<td><div id="filter_req_loading" class="filter_req_loading"></div>');
            filterHTML.push('</td>');
            filterHTML.push('</tr>');
        filterHTML.push('</table>');
        filterHTML.push('<div id="division_filter_menu" class="division_filter_menu"></div>');
        filterHTML.push('<div id="specimen_table"></div>');

    filterHTML.push('</div>');
    
    $("#tool_content").html(filterHTML.join(''))
    
    $("#filter_req_loading").show()
    $("#filter_search_loading").hide()
    
    
    var filterRequest = window.external.XMLCclRequest();						
    filterRequest.open("GET","bc_all_future_ord_manager",true);
    filterRequest.send("~MINE~,~Specimens~")
    console.log("---- bc_all_future_ord_manager="+"~MINE~,~Specimens~")
    filterRequest.onreadystatechange = function () {
        if (filterRequest.readyState == 4 && filterRequest.status == 200) {
	    var jsonfilterRequest = JSON.parse(filterRequest.responseText);
            var FilterResponse = jsonfilterRequest.COMMON_LAB_SPECIMENS;
	        filterRespHTML = [];
		filterRespHTML.push('<div class="container">') 
		filterRespHTML.push('<table border=0 width=740px><tr><td>') 
		filterRespHTML.push('<b>Specimen Types Excluded') 
		filterRespHTML.push('</td><td align=right>')
		filterRespHTML.push('<b>Specimen Types Included') 
		filterRespHTML.push('</td></tr>') 
		filterRespHTML.push('</table>')  
		filterRespHTML.push('<select id="specimenlist" multiple="multiple" class="multiselect" name="specimens[]">')	
		console.log("----- FilterResponse.QUAL.length "+FilterResponse.QUAL.length)
		for (var i = 0; i < FilterResponse.QUAL.length; i++) {
			if (FilterResponse.QUAL[i].EXCLUDED == 1) {
			 	var specExcluded = ' '
				} else {
				var specExcluded = ' selected="selected"'
				}
			filterRespHTML.push('<option value="'+FilterResponse.QUAL[i].SPECIMEN_TYPE_CD+'" '+specExcluded+'>'+FilterResponse.QUAL[i].SPECIMEN_TYPE+'</option>')
			console.log("----- specimen type="+FilterResponse.QUAL[i].SPECIMEN_TYPE+":"+specExcluded)
		}
		filterRespHTML.push('</select>')
		filterRespHTML.push('<button id="spec_update">Update</button>')	
		filterRespHTML.push('<div id="switcher"></div>')
		filterRespHTML.push('</div>')
   	
            console.log("----- bc_all_future_ord_manager finished")
       
	
            $("#specimen_table").html(filterRespHTML.join(''))
	    //$.localise('ui-multiselect', {/*language: 'en',*/ path: 'js/locale/'});
	    //$('#switcher').themeswitcher();
	    //$("#specimenlist").multiselect();
	    $("#specimenlist").gs_multiselect();

	    $('#spec_update').click(function () {
			var new_specimen_list = $("#specimenlist option").map(function() {return $(this).val();}).get();
			console.log("----- selected:"+new_specimen_list)
			var UpdatePowerPlanRequest = window.external.XMLCclRequest();
			UpdatePowerPlanRequest.open("GET","bc_all_future_ord_manager",true);
			//UpdatePowerPlanRequest.setBlobIn(JSON.stringify(new_specimen_list));
			var UpdatePowerPlanRequestArr = "~MINE~,~SpecimenUpdate~,value("+new_specimen_list+")"
			console.log("----- UpdatePowerPlanRequestArr:"+UpdatePowerPlanRequestArr)
    			UpdatePowerPlanRequest.send(UpdatePowerPlanRequestArr)
	
			UpdatePowerPlanRequest.onreadystatechange = function () {
        			if (UpdatePowerPlanRequest.readyState == 4 && UpdatePowerPlanRequest.status == 200) {
            				alert(UpdatePowerPlanRequest.responseText);	
					SpecimenManage();
				}
			}
	
		});

            $("#filter_req_loading").hide()
        }
    
    }
    
    console.log("SpecimenManage ended");
}


function PositionManage()	{
    console.log("PositionManage started");
    
    filterHTML = [];
    filterHTML.push('<div id="position_manage_content">');
        filterHTML.push('<table id="position_manage_table">');
            filterHTML.push('<tr>');
            filterHTML.push('<td>');
            filterHTML.push('</td>');
            filterHTML.push('<td><div id="filter_req_loading" class="filter_req_loading"></div>');
            filterHTML.push('</td>');
            filterHTML.push('</tr>');
        filterHTML.push('</table>');
        filterHTML.push('<div id="division_filter_menu" class="division_filter_menu"></div>');
        filterHTML.push('<div id="position_table"></div>');

    filterHTML.push('</div>');
    
    $("#tool_content").html(filterHTML.join(''))
    
    $("#filter_req_loading").show()
    $("#filter_search_loading").hide()
    
    
    var filterRequest = window.external.XMLCclRequest();						
    filterRequest.open("GET","bc_all_future_ord_manager",true);
    filterRequest.send("~MINE~,~Positions~")
    console.log("---- bc_all_future_ord_manager="+"~MINE~,~Positions~")
    filterRequest.onreadystatechange = function () {
        if (filterRequest.readyState == 4 && filterRequest.status == 200) {
	    var jsonfilterRequest = JSON.parse(filterRequest.responseText);
            var FilterResponse = jsonfilterRequest.ACTIVATE_POSITIONS;
	        filterRespHTML = [];
		filterRespHTML.push('<div class="container">') 
		filterRespHTML.push('<table border=0 width=800px><tr><td>') 
		filterRespHTML.push('<b>Positions Without Permission to Activate') 
		filterRespHTML.push('</td><td align=right>')
		filterRespHTML.push('<b>Positions Able to Activate') 
		filterRespHTML.push('</td></tr>') 
		filterRespHTML.push('</table>')  
		filterRespHTML.push('<select id="positionlist" multiple="multiple" class="multiselect" name="positions[]">')	
		console.log("----- FilterResponse.QUAL.length "+FilterResponse.QUAL.length)
		for (var i = 0; i < FilterResponse.QUAL.length; i++) {
			if (FilterResponse.QUAL[i].INCLUDED == 0) {
			 	var specExcluded = ' '
				} else {
				var specExcluded = ' selected="selected"'
				}
			filterRespHTML.push('<option value="'+FilterResponse.QUAL[i].POSITION_CD+'" '+specExcluded+'>'+FilterResponse.QUAL[i].POSITION+'</option>')
			console.log("----- specimen type="+FilterResponse.QUAL[i].POSITION+":"+specExcluded)
		}
		filterRespHTML.push('</select>')
		filterRespHTML.push('<button id="pos_update">Update</button>')	
		filterRespHTML.push('<div id="switcher"></div>')
		filterRespHTML.push('</div>')
   	
            console.log("----- bc_all_future_ord_manager finished")
       
	
            $("#position_table").html(filterRespHTML.join(''))
	    //$.localise('ui-multiselect', {/*language: 'en',*/ path: 'js/locale/'});
	    //$('#switcher').themeswitcher();
	    //$("#specimenlist").multiselect();
	    $("#positionlist").gs_multiselect();

	    $('#pos_update').click(function () {
			var new_position_list = $("#positionlist option").map(function() {return $(this).val();}).get();
			console.log("----- selected:"+new_position_list)
			var UpdatePowerPlanRequest = window.external.XMLCclRequest();
			UpdatePowerPlanRequest.open("GET","bc_all_future_ord_manager",true);
			//UpdatePowerPlanRequest.setBlobIn(JSON.stringify(new_position_list));
			var UpdatePowerPlanRequestArr = "~MINE~,~PositionUpdate~,value("+new_position_list+")"
			console.log("----- UpdatePowerPlanRequestArr:"+UpdatePowerPlanRequestArr)
    			UpdatePowerPlanRequest.send(UpdatePowerPlanRequestArr)
	
			UpdatePowerPlanRequest.onreadystatechange = function () {
        			if (UpdatePowerPlanRequest.readyState == 4 && UpdatePowerPlanRequest.status == 200) {
            				alert(UpdatePowerPlanRequest.responseText);	
					PositionManage();
				}
			}
	
		});

            $("#filter_req_loading").hide()
        }
    
    }
    
    console.log("PositionManage ended");
}

