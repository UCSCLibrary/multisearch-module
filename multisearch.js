// JavaScript Document
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
	jQuery(".tab4").click(function (e) {
		e.preventDefault();
		jQuery(".tabcontent").hide();
		jQuery(".tabcontent4").show();
		jQuery(".tab").removeClass("current");
		jQuery(".tab4").addClass("current");
	});
	jQuery(".tab5").click(function (e) {
		e.preventDefault();
		jQuery(".tabcontent").hide();
		jQuery(".tabcontent5").show();
		jQuery(".tab").removeClass("current");
		jQuery(".tab5").addClass("current");
	});
	
	// Set form action
	jQuery(".tabs .journalsTabsSubmit").click(function (event) {
		var ebscohostsearchtext=document.getElementById('ebscohosttabstext').value;
    ebscohostsearchtext='('+ebscohostsearchtext.replace(/ /g,'+AND+')+')';
	//alert(ebscohostsearchtext);
    window.location.href ='https://login.oca.ucsc.edu/login?url=https://search.ebscohost.com/login.aspx?direct=true&site=ehost-live&scope=site&type=1&db=a9h&authtype=ip&bquery=' + ebscohostsearchtext;
		event.preventDefault();
	});
	jQuery(".select .journalsSelectSubmit").click(function (event) {
		var ebscohostsearchtext=document.getElementById('ebscohostselecttext').value;
    ebscohostsearchtext='('+ebscohostsearchtext.replace(/ /g,'+AND+')+')';
	//alert(ebscohostsearchtext);
    window.location.href ='https://login.oca.ucsc.edu/login?url=https://search.ebscohost.com/login.aspx?direct=true&site=ehost-live&scope=site&type=1&db=a9h&authtype=ip&bquery=' + ebscohostsearchtext;
		event.preventDefault();
	});
	
	jQuery(".tabs .catalogsSubmit").click(function () {
		jQuery(".tabs .catalogsForm").attr('action', "https://cruzcat.ucsc.edu/search/X?SEARCH=");
	});
	jQuery(".select .catalogsSubmit").click(function () {
		jQuery(".select .catalogsForm").attr('action', "https://cruzcat.ucsc.edu/search/X?SEARCH=");
	});
	jQuery(".tabs .melvylSubmit").click(function () {
		jQuery(".tabs .melvylForm").attr('action', "https://ucsc.worldcat.org/search");
	});
	jQuery(".select .melvylSubmit").click(function () {
		jQuery(".select .melvylForm").attr('action', "https://ucsc.worldcat.org/search");
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
	jQuery(".tabs .scholarSubmit").click(function () {
		var scholarString = jQuery('.tabs .scholarSearch').val();
		var scholarEncoded = encodeURIComponent(scholarString);
		var scholarSearch = "https://login.oca.ucsc.edu/login?url=https://scholar.google.com/scholar?hl=en&q="+scholarEncoded+"&btnG=&as_sdt=1%2C5&as_sdtp=";
		jQuery(".tabs .scholarForm").attr('action', scholarSearch);
	});
	jQuery(".select .scholarSubmit").click(function () {
		var scholarString = jQuery('.select .scholarSearch').val();
		var scholarEncoded = encodeURIComponent(scholarString);
		var scholarSearch = "https://login.oca.ucsc.edu/login?url=https://scholar.google.com/scholar?hl=en&q="+scholarEncoded+"&btnG=&as_sdt=1%2C5&as_sdtp=";
		jQuery(".select .scholarForm").attr('action', scholarSearch);
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