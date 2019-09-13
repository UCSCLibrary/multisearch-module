// JavaScript Document

/* Note: there are also scripts in the theme javascript file (themes/spencer/js/spencer.js) that support this module.*/

jQuery( document ).ready(function() {
	
	// Set textbox values
	/*jQuery(".catalogsSearch").val("Search Cruzcat for books, media, journal titles available at UCSC...");*/
	
	
	// Remove textbox value when user clicks in textbox
	jQuery(".textbox").click(function() {
    	jQuery(this).val("");
	});
	
	// Hide/show functionality for tabs
	jQuery(".tab1").click(function (e) {
		e.preventDefault();
		jQuery(".tabcontent").hide();
		jQuery(".tabcontent1").show();
		jQuery(".tab").removeClass("current");
		jQuery(".tab1").addClass("current");
	});
	jQuery(".tab2").click(function (e) {
		e.preventDefault();
		jQuery(".tabcontent").hide();
		jQuery(".tabcontent2").show();
		jQuery(".tab").removeClass("current");
		jQuery(".tab2").addClass("current");
	});
	jQuery(".tab3").click(function (e) {
		e.preventDefault();
		jQuery(".tabcontent").hide();
		jQuery(".tabcontent3").show();
		jQuery(".tab").removeClass("current");
		jQuery(".tab3").addClass("current");
	});
	
	// search button functions
	
	jQuery(".tabs .catalogsSubmit").click(function () {
		document.getElementById("primoTabsQuery").value = "any,contains," + document.getElementById("primoTabsQueryTemp").value.replace(/[,]/g, " ");
		document.forms["tabsSearchForm"].submit();
	});
	
	jQuery(".select .catalogsSubmit").click(function () {
		document.getElementById("primoSelectQuery").value = "any,contains," + document.getElementById("primoSelectQueryTemp").value.replace(/[,]/g, " ");
		document.forms["selectSearchForm"].submit();
	});
	
	jQuery(".tabs .reservesSubmit").click(function () {
		document.getElementById("reservesTabsQuery").value = "any,contains," + document.getElementById("reservesTabsQueryTemp").value.replace(/[,]/g, " ");
		document.forms["tabsReserveForm"].submit();
	});
	
	jQuery(".select .reservesSubmit").click(function () {
		document.getElementById("reservesSelectQuery").value = "any,contains," + document.getElementById("reservesSelectQueryTemp").value.replace(/[,]/g, " ");
		document.forms["selectReserveForm"].submit();
	});
	
	jQuery(".tabs .melvylSubmit").click(function () {
		jQuery(".tabs .melvylForm").attr('action', "https://ucsc.on.worldcat.org/external-search?queryString=");
	});
	jQuery(".select .melvylSubmit").click(function () {
		jQuery(".select .melvylForm").attr('action', "https://ucsc.on.worldcat.org/external-search?queryString=");
	});
	jQuery(".tabs .reservesSubmit").click(function () {
		var reservesFilter = jQuery('select[name="reservesFilter"] :selected').attr('class');
		var reservesSearch = "https://cruzcat.ucsc.edu/search/" + reservesFilter + "?SEARCH=";
		jQuery(".tabs .reservesForm").attr('action', reservesSearch);
	});
	jQuery(".select .reservesSubmit").click(function () {
		var reservesFilter = jQuery('select[name="reservesFilter"] :selected').attr('class');
		var reservesSearch = "https://cruzcat.ucsc.edu/search/" + reservesFilter + "?SEARCH=";
		jQuery(".select .reservesForm").attr('action', reservesSearch);
	});
	
	/* select list scripts */
	
	$("select.multiselect").change(function(){
        $(this).find("option:selected").each(function(){
            var optionValue = $(this).attr("value");
            if(optionValue){
                $(".tabcontent").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".tabcontent").hide();
            }
        });
    }).change();
	
});