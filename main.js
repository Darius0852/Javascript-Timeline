

//SCROLL FUNCTION (TIMELINE)

	// When the user scrolls the page, execute myFunction 
	window.onscroll = function() {scrollFunction()};

	// Ceate array for dates
	const NUM_OF_OPTIONS = 200;
	const optionData = new Array(NUM_OF_OPTIONS).fill(1830).map((item, index) => index);

	function scrollFunction() {
	  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	  var scrolled = (winScroll / height) * 181;
	    var div = $("#content");
	    var div2 = $("#content2")
	  //Take the current position (vertical position from top) of your div in the variable
	  var pos = div.position();

	   if (scrolled >= (20)) {
	     div.removeClass("BeforeScroll");
	     div.addClass("come-in-left")
	   }
	   //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
	   else {
	     div.removeClass("come-in-left");
	     div.addClass("BeforeScroll");
	   }

	   if (scrolled >= (40)) {
	     div2.removeClass("BeforeScroll");
	     div2.addClass("come-in-right")
	   }
	   //If scroll is less than 100px, remove the class AfterScroll so that your content will be hidden again 
	   else {
	     div2.removeClass("come-in-right");
	     div2.addClass("BeforeScroll");
	   }


	   /* Timeline Numbers */

	   //TImeline numbers created using the scroll from top number and add offset of date

	   var string1 = scrolled.toString();
	   var date = document.getElementById('experiment');
	   var text = date.innerText;
	   var roundScrollNum = Math.round(scrolled) + 1812;
	   var scrollString = roundScrollNum.toString();

	   var roundScrollNum1 = Math.round(scrolled) + 1810;
	   var roundScrollNum2 = Math.round(scrolled) + 1811;
	   var roundScrollNum3 = Math.round(scrolled) + 1813;
	   var roundScrollNum4 = Math.round(scrolled) + 1814;

	   var scrollString1 = roundScrollNum1.toString();
	   var scrollString2 = roundScrollNum2.toString();
	   var scrollString3 = roundScrollNum3.toString();
	   var scrollString4 = roundScrollNum4.toString();




	   /*
	   var roundScrollNumMx = Math.round(scrolled) * 12;
	   var scrollMxString = roundScrollNumMx.toString();
	   */
	   var winScrollStr = winScroll.toString();
	   var margin = winScrollStr + "px";

	   document.getElementById('experimentBack1').innerText = scrollString1;
	   document.getElementById('experimentBack2').innerText = scrollString2;
	   document.getElementById('experimentBack3').innerText = scrollString3;
	   document.getElementById('experimentBack4').innerText = scrollString4;

	   document.getElementById('experimentBack1').style.top = margin;
	   document.getElementById('experimentBack2').style.top = margin;
	   document.getElementById('experimentBack3').style.top = margin;
	   document.getElementById('experimentBack4').style.top = margin;


	   document.getElementById('experiment').innerText = "--" + scrollString + "--";
	   document.getElementById('experiment').style.top = margin;

	}
