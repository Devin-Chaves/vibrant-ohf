/*
	Vibrant Media Code for HTML based Custom Solutions.
	This file needs to be implemented into the root HTML file that will be used for the Logo URL later.
	Otherwise Url Parameters and Path recognition might break.

	This document uses jQuery please make sure the root HTML loads the latest jQuery file
	before loading this script.

	This code is designed in closures. It conztains a general customAd() function with usefull helper functions to build
	containers, use Url and JSONP Parameters and validating variables. Further it contains a customLogger() for any kind of click and event logging. Legecy Clicks (for intext) and creativeCommons for Takeover solution.

	@Version: 2.0
	@Date: 17/07/2015

	@Author: DennisWittenbrink@vibrantmedia.com

	@lastModifiedDate: 20/11/2015
	@lastModifiedAuthor: DennisWittenbrink@vibrantmedia.com

	@used_jQueryVersion: Most recent from CDN or recent Vibrant Version

	@Note: If you have added code please put a comment right in front of it like this:

				//TODO: Code Keeper needs to approve
				//My description...
				if(something) dosomething....;

	@Note: If you changed code please copy he entire old function before you do and comment it out.
			Please add a comment like this:
			//TODO: Changed lines x/y/z; CodeKeeper needs to approve


	@Note: If you add functions please make sure you use a comment style like this:
				//TODO NEw function, CodeKeeper needs to approve
				/*
					Function Description, what does it do, what is it for, is it collaborating with something else

					@param String [name1], has the folllowing effect
					@param Boolean [name2], is true if....happens
					-> Do "@param" for every parameter you can parse into the function, if there are none you won't need any @param

					-> If the function returns something tell us what it does
					@return Array productArray, is an Array holding the following information:
											[0] -> product name
											[1] -> product ID
											[2] -> product image


				*/


/*
	@Note: Before inventing new functions, please check the function examples in this document and check if you can re-use them.
			There are e.g. functions for: mouseActions, buttons, css settings, click areas, dynamically adding containers, initialize an xml
			and more...


*/



/*
Global Parameters Used
*/

		//glaobal parameters
		 // The creativeAPI
    var creativeAPI,
		channel,
		params,
		clickEvent,
		object,
		adInstance,
		slidePlayer,
		utils,
		dom,
		cfg,
		parentWindow;


	var videoplayer,
	 	quartileID,
		logger,
		log,
		template;

    // Constants
    var REFRESH_RATE,
		START_VAL,
		MAX_LENGTH,
		DELAY,
		DEFAULT_WIDTH,
		DEFAULT_HEIGHT,
		COMPONENTS,
		ADCHOICE_URL,
		events,
		LOG_EVENTS,
		CPE_EVENT,
		global_first_slide_load;





/*
	The customAd() closure function contains many useful functions to use in EVERY Custom Creative created by Vibrant Media.
	The function should be initiallized as a global function in your code:
	Suggestion:

	var ca;

	 $(document).ready({
	   	ca = customAd();

		ca.initVars(
	    	init();
		);
	 });

	Note that you need to include this JS Script AFTER your JQUERY and (if you are doing BrandCanvas) creativecommons.js!
	For a function documentation please see external overview here just an overview by name (private functions cannot be called from your code), functions are commented in code:

	@private functions: getUrlParameters, loadJSONP, cleanClickURL, globalDoesExist, checkFinish
	@public functions: initVars, doesExist, addDefault, getParam, getParams, setParam, assetPath, createElement, create_element, setMouseOverEffect,
						toBoolean
*/


function customAd(){

	var parameters = {};
	//var jsonFinished = false;
	var timeout = 5000;

		/*
			Function to get all Url Parameters and dsave them in the global parameter variable.

		*/
		function getUrlParameters()
		{
			//q is set to the url parameter string (evrything after the "?")
			var q = this.location.search.substring(1);
			//alert(q);

			var va = q.split("&"); //q is splitt into the parameter pairs: "name=value"

			var v; //will be the temp array to hold the name (v[0]) and value (v[1])

			for (var i = 0;i < va.length;i ++) //for all values in "va"...
			{
				v = va[i].split("="); //va pairs are split and saved with the format above
				if (v[1])
				{
					parameters["" + v[0]] = unescape(v[1]); //if the value is not empty the "name" and "value" are written into the global parameter array
					//if(v[0] == 'zip') alert(parameters.zip);
				}
			}
		}




		/*
			Function that checks if a variable exists

			@param element variable, can be every kind of JS/jQuery element or variable that needs to be verified
			@return Boolean exist, is true if the variable exists
		*/

		function globalDoesExist(variable){
			//console.log(variable  + ' <-- variable to test');
			var exist = false;
			//if(variable && variable != null && variable != 'undefined') exist = true;
			//if(variable == false || variable == 'false') exist = true;

			if (typeof variable !== 'undefined' && variable !== null) { exist = true; }
			if (typeof variable === false || variable === false) { exist = true; }

			return exist;
		}


		/*
			function that handles the closeUnitTimer;
		*/
		function closeUnitAfterCountdown(){
			var myTimer = parseInt(ca.setToExist('closeAfterTseconds',true,5));
			var closeTimer = parseInt(ca.setToExist('closeTimer',true,0));
			if(myTimer > 0 && closeTimer > -1){
				if(closeTimer >= myTimer){
					adInstance.fire('close');
				} else if(ca.getParam('window_focus') == false){
					ca.setParam('closeTimer',0);
					setTimeout(function(){
						closeUnitAfterCountdown();
					}, 1500);
					//console.log('check for close');
				}else{
					closeTimer++;
					ca.setParam('closeTimer',closeTimer);
					setTimeout(function(){
						closeUnitAfterCountdown();
					}, 1000);
					//closeAfterTseconds
				}//else closeTimer > myTimer

			}//else myTimer >0

		}



	return {

		/*
			This should ALWAYS be called first and the callback should contain code to trigger the actual unit to initalize.
			The Function will parse and store all Paramters (Defaults, URL, JSON) and make them available for use at any time.
			Also it will guarantee that the Parameters are really completely parsed.
		*/
		initVars:function(callback){


			/*
				Init all Kormorant Required Variables
			*/
			creativeAPI = window.frameElement.creativeAPI;
			// Communication channel between kormorant
			channel = creativeAPI.channel;
			// The creative Parameters
			parameters = creativeAPI.template.params;
			//used in case that clicks are triggered multiple times
			parameters.clickBreak =false;
			//Because Apple devices...
			clickEvent = creativeAPI.config.mobile ? 'touchend' : 'click';

			events = creativeAPI.events;

			log = creativeAPI.log;
			adInstance = creativeAPI.adInstance;
			template = creativeAPI.template;

			utils = creativeAPI.utils;
			dom = creativeAPI.dom;
			parentWindow = creativeAPI.window;
			cfg = creativeAPI.config;

			object = {
			    communication: new events.Observable()
			};

			REFRESH_RATE      = 16.66; // 60fps (1000/60)
			START_VAL               = 0;
			MAX_LENGTH              = 100;
			DELAY                   = 250;
			DEFAULT_WIDTH           = window.innerWidth;
			DEFAULT_HEIGHT          = window.innerHeight;
			COMPONENTS              = 2;
			ADCHOICE_URL            = 'http://www.vibrantmedia.com/whatisIntelliTXT.asp';


			CPE_EVENT = {
				click: 1,
				close: 2
			}


			LOG_EVENTS = {
						play       : 2,
						pause      : 3,
						quartile_1 : 5,
						quartile_2 : 6,
						quartile_3 : 7,
						quartile_4 : 8,
						complete   : 9,
					};

			//sets params from URL
			getUrlParameters();
			//alert('my init');
			callback();


		},

		/*
			should remove all http: and throw errora for demo assets TEST function
		*/
		sanitizeParameters:function(){

			for(var e in parameters){
			// console.log('my value: ' + parameters[e]);
				if(typeof parameters[e] === 'string'){

					if(parameters[e].indexOf('http://') > -1){
						parameters[e] = parameters[e].replace('http://','https://');
					//	console.log('check value1: ' + parameters[e]);
					} else if(parameters[e].indexOf('demos.') > -1){
						alert("Error: You are using demo assets!!! ---- This is what I found: " + parameters[e]);
					}
				 }

			}


			var myScripts = document.getElementsByTagName('script');
			for(var e in myScripts){
				if(this.doesExist(myScripts[e].src)){
					if(myScripts[e].src.indexOf('demos.') >-1){
						alert("Error: You are using demo Script!!! ---- This is what I found: " + myScripts[e].src);
					} else if(myScripts[e].src.indexOf('http://') >-1){
						//alert("Error: You are using insecure scripts!!! ---- This is what I found: " + myScripts[e].src);
					}
				}

			}
		},

		//see globalDoesExist...
		//@param Boolean "paramKey" let's the function look directly into the global params
		doesExist:function(value,paramKey){
            if(paramKey == true){
				value = parameters[value];
			}
			return globalDoesExist(value);
		},

		 /*
		 	Function that checks for an existing value and returns either the value or a fallback

			@param Boolean "paramKey" let's the function look directly into the global params
			@param String/int "value", usually a variable name that is meant to exist
			@param fallbackValue returns any given value as a fallback

			@return Funcion returns either the value (if exists) or the fallbackValue
		 */

		setToExist:function(value,paramKey,fallbackValue){
			var initVal = value;
			if(paramKey == true){
				value = parameters[value];
			}
			if(globalDoesExist(value)){
				return value;
			} else {
                this.addParam(initVal,fallbackValue);
				//console.log(value + ' <value ----- fallback> ' + fallbackValue);
				return fallbackValue
			}
		},

		/*
			Function evaluates if a valid src has been set and which kind of assets we are looking at
			@param String 'src', is the src-url
			@return Object 'srcArray', is an Array that return the following value:
						type -> String (one of these: html, image, null - dependend of what the asset is)
						valid -> Boolean (true if it is a valid asset; false if not identiied or not present)
						src -> String (the src itself, just so the Object can be used without additional param calls

		*/
		hasValidCreative:function(src){
			//construct empty object
			var srcArray = {};
			//alert(src);
			//if no src available
			if(!globalDoesExist(src)){
				srcArray.type = null;
				srcArray.valid = false;
				srcArray.src = null;
			} else if(src.indexOf('.html') > -1){ //if the src is an html src
				srcArray.type = 'html';
				srcArray.valid = true;
				srcArray.src = src;
			} else if(src.indexOf('.png') > -1 || src.indexOf('.jpg') > -1 || src.indexOf('.jpeg') > -1 || src.indexOf('.gif') >-1){ //if the src is a known image format
				srcArray.type = 'image';
				srcArray.valid = true;
				srcArray.src = src;
			} else { //if the src cannot be identified
				srcArray.type = null;
				srcArray.valid = false;
				srcArray.src = null;
			}

			//return result
			return srcArray;
		},


		/*
			Function will set Wrapper inner HTML and display an error to avoid bad setups
			@param String 'message', is the Error Message to be displayed
		*/
		displayErrorMessage:function(message){
			//set Message and HTML
			var iHtml = "<div style='position:absolute; background:#fff; top:0; left:0; color:#000; font-size:14px; width:100%; height:300px;'><stong>"+ message +"</strong></div>"
			//set wrapper innerHtml
			$('body').html(iHtml);
		},


		/*
			Function to display a note if the Viewport needs to change
			@param Boolean ‘showMe', will create (true) or remove (false) the notice
			@param String 'myMsg', is the message to be displayed. (Default Value: Please turn back to Landscape or wider Screen")
		*/
		showFlipNotice:function(showMe, myMsg){
			if(showMe == true || showMe == 'true'){
				var nCSS = {
						"width":$(window).width()+"px",
						"height":$(window).height()+"px",
						"display":"block",
						"background":"#333333",
						"color":'#fff',
						"position":'fixed',
						"top":"0",
						"left":"0",
						"z-index":'98'
					};

					var nAttr = {
						'id':'flipBackNotice'
					};

					var msg = ca.setToExist(myMsg,"Please turn back to Landscape or wider Screen");
					var nhl = ($(window).width()-280)/2;
					var nht = ($(window).height()-40)/2;
					var nhtml = "<span style='display:block; position:absolute; left:"+nhl+"px; top:"+nht+"px; font-family:Arial; font-size:13px; width:280px; height:40px;' />"+ msg +"</span>";

					ca.createElement('div','#wrapper',nhtml,null,nCSS,nAttr);
			} else{
				ca.removeElement('#flipBackNotice');
			}



		},


		/*
			Function will initialize an automatic close if a unit is left unactive (e.g. no mouse on unit)
			This is typical for CPC iunits

			@param Object/String 'container', is the container (jQuery Object or String like "#wrapper') which
											will bin a mouseenter/mouseleave handler to stop the closeCountdown.
											If left undefined/null it defaults to body
			@param int 't', is the countdown duration. Defaults to 5. (NOTE: t is seconds!!!)
		*/
		initCloseCountdown:function(container,t){
			//c is either the given container or the "body" by default
			var c = this.setToExist(container,false,'body');
			//newT checks fot t variable or defaults to 5
			var newT = this.setToExist(t, false, 5);

			//global parameter "closeAfterTseconds is set
			var myTimer = parseInt(ca.setToExist('closeAfterTseconds',true,newT));

			//whenever the mouse enters the auto close is deactivated
			$('#wrapper').bind('mouseenter',function(){
				ca.setParam('closeTimer',-1);
				//whenever the mouse leaves again the timer restarts
				$('#wrapper').bind('mouseleave',function(){
					ca.setParam('closeTimer',0);
					closeUnitAfterCountdown();
				});
			});


			//the window status need to be checked and set
			$(window).focus(function() {
				ca.setParam('window_focus',true);
			}).blur(function() {
				ca.setParam('window_focus',false);
			});

			//start the close timer
			closeUnitAfterCountdown();

		},//closeCountdown end

		/*
			Function can add a Soundhandler to a unit with Video. Mouseenter will start the video mouse leave remove it.

			@paran Element/String 'container', is the container the mouse-event shoul be bind to. Defaults to "body"
			@param Boolean 'avoidMute', if set to true this will prevent the unit from muting on mouseleave once sound is on. Defaults to false.
		*/
		addSoundHandler:function(container,avoidMute){
			var c = this.setToExist(container,false,'body');
			var a = this.setToExist(avoidMute,false,false)
			$(c).bind('mouseenter',function(){

				//fire communication event for al videos
				object.communication.fire('unmute_video');

				//first unbin then bind mouseleave event in order to control mute/unmute
				$(c).unbind('mouseleave');
				$(c).bind('mouseleave', function(){
					if(!ca.toBoolean(a)){
						object.communication.fire('mute_video');
					}
				});
				//soundHandler(c,a);
			});
		},


		/*
			Function creates close button, ad choices, and logo for take overs

			@param element/String 'parentContainer', is the units main container where the elements should be added to

		*/

		createDefaultElements:function(parentContainer){

			var cl = customLogger(null);

			//elements can be changed via global params but shuld default to this
			var closeSrc = ca.setToExist('closeBtnSrc',true, '//images.intellitxt.com/a/102315/Creative_Template_Files/Icons/icon_close_40x40.png');
			var adChoicesSrc = ca.setToExist('AdChoicesSrc',true,'//images.intellitxt.com/a/102315/Creative_Template_Files/Icons/icon_adChoices_20x20.png');
			var vLogoSrc = ca.setToExist('vibrantLogoSrc',true, '//images.intellitxt.com/a/102315/Creative_Template_Files/Icons/icon_v_20x20.png');

			//standard link for adchoices
			var adChLink = ca.setToExist('AdChoicesLink',true,'http://www.vibrantmedia.com/whatisIntelliTXT.asp');


			var alAttr = {
				'id':'adChoices_vibrant'
			};

			var acAttr = {
				'id':'adChoices',
				'src':adChoicesSrc
			};

			var vlAttr = {
				'id':'vibrantLogo',
				'src':vLogoSrc
			};

			var alCSS = {
				"position":"fixed",
				"right":"0px",
				"bottom":"0px",
				"z-index":"80",
				"width":"20px",
				"height":"40px",
				"overflow":"hidden"
			};


			var acCSS = {
				"position":"absolute",
				"top":"0",
				"right":"0",
				"width":"20px",
				"height":"20px",
				"cursor":"pointer"
			};

			var vlCSS = {
				"position":"absolute",
				"top":"20px",
				"right":"0",
				"width":"20px",
				"height":"20px",
				"cursor":"pointer"
			};

			//first remove potential existing containers, then add AdChoices and Vibrant Logo
			this.removeElement('#adChoices_vibrant');
			this.createElement('div', parentContainer,null, null, alCSS,alAttr);
			this.createElement('img','#adChoices_vibrant',null,null,acCSS,acAttr);
			this.createElement('img','#adChoices_vibrant',null,null,vlCSS,vlAttr);
			cl.adChoiceClick('#adChoices',adChLink);
			cl.setCustomClick('#vibrantLogo', "http://vibrantmedia.com", 'Vibrant Logo Click');


			var closeCSS = {
				"width":"40px",
				"height":"40px",
				"position":"fixed",
				"right":"0px",
				"top":"0px",
				"cursor":"pointer",
				"z-index":"99"
			};
			var closeAttr = {
				'id':'closeBtn',
				'src':closeSrc
			};

			this.removeElement('#closeBtn');
			this.createElement('img', parentContainer,null, null, closeCSS,closeAttr);


			// Let Kormorant know that the close button has been triggered
			// So that it can remove the takeover from the DOM and log close
			creativeAPI.events.bind(document.getElementById('closeBtn'), 'click', function () {
				creativeAPI.channel.fire('close');
			});

		},

		/*
			Function to add default values to parameter list.

			@param String name, will be the "key" the value will be saved at within the parameter array.
			@param String d, value for parameter
			@param Boolean useAssetPath, if set to true the absolute assetpath is added to the "d" parameter,
										 for example: d='video.mp4' will be transformed to d='http://domain.com/path/assets/video.mp4'
		*/
		addDefault:function(name, d, useAssetPath)
		{
			//Check if global parameter variable already holds a variable taken from URL
			if (!this.doesExist(parameters[name]))
			{
				if(useAssetPath) d = this.assetPath()+d; //if the dynamic asset path should be added to d this will happen here
				parameters[name] = d; //d is saved to global Parameter Array
			}
		},

		//get all parameters
		getParams:function(){
			return parameters
		},

		//gets specific paramerter
		getParam:function(key){
			var v = parameters[key];
			if(!this.doesExist(v)){
				if(this.doesExist(parameters['creative'])){
					v = parameters['creative'][key];
				}
			}
			return v;//parameters[key];
		},

		//calls addDefaults
		addParam:function(name, d, useAssetPath){
			this.addDefault(name, d, useAssetPath);
		},

		//same as addParams but overwrites existing params
		setParam:function(name, d, useAssetPath){
			if(useAssetPath) d = assetPath()+d; //if the dynamic asset path should be added to d this will happen here
			parameters[name] = d; //d is saved to global Parameter Array
		},


				/*
			Function replaced old "getJSVariables(jsonURL)"

			@param 'jsonURL', is the URL to the JSON File. IMPORTANT: it is JSONP with the defined callback function "jsonCalback"
			so the JSONP needs to have this Format:
						jsonCallback({
							"param1":"value2",
							...
							"paramN":"valueN"
						});

		*/
		loadJSONP:function(jsonURL,callback){
			if(globalDoesExist(jsonURL)){
			//	var parameters = ca.getParams();
				var url = jsonURL;

				$.ajax({
				   type: 'GET',
					url: url,
					async: true,
					jsonpCallback: 'jsonCallback',
					contentType: "application/json",
					dataType: 'jsonp',
					success: function(json) {
					   //console.log(json.string);
					  // alert(url);
						   for (var key in json){
								var d = json[key];

							//Check if global parameter variable already holds a variable taken from URL
							if (!globalDoesExist(ca.getParams()[key]))
							{
								//console.log(d);
								ca.getParams()[key] = d; //d is saved to global Parameter Array
							}

						}
						jsonFinished = true;
						callback();
					},
					error: function(e) {
					   //console.log(e.message);
					   jsonFinished = true;
					   callback();
					}
				});
			} else {
				jsonFinished = true;
				callback();
			}
		},



				/*
			Function replaced old "getJSVariables(jsonURL)"

			@param 'jsonURL', is the URL to the JSON File. IMPORTANT: it is JSONP with the defined callback function "jsonCalback"
			so the JSONP needs to have this Format:
						jsonCallback({
							"param1":"value2",
							...
							"paramN":"valueN"
						});

		*/
		loadExternalJSONP:function(jsonURL, callback){
			if(globalDoesExist(jsonURL)){
			//	var parameters = ca.getParams();
				var url = jsonURL;

				$.ajax({
				   type: 'GET',
					url: url,
					async: true,
					//jsonpCallback: 'jsonCallback',
					contentType: "application/json",
					dataType: 'jsonp',
					success: function(json) {
					var rObject = {};
					   for (var key in json){
								var d = json[key];
								//console.log(d.text + ' - the d value');

							rObject[key] = d;

						}
						jsonFinished = true;
						callback(rObject);
						//return rObject;
						//callback();
					},
					error: function(e) {
					   //console.log(e.message);
					   jsonFinished = true;
					   callback(rObject);
					   return null;
					}
				});
			} else {
				jsonFinished = true;
				return null;
				//callback();
			}
		},


		/*
			Function returns the assetPath, so that default Files will always be set with the correct absolute path.

			@param Boolean assetFolder, defines if "assets/" is added to the path (true or undefined). If set to false "assets/" won'z be added
			@return String assetsPath, is the path where all assets should lie. It refers to a folder
											named "assets" within the root folder of the creative (if assetFolder is not false).
											Example: http://[somepath]/assets"
		*/
		assetPath:function(assetFolder){
			var addFolderName = true;
			if(this.doesExist(assetFolder) && assetFolder == false){ addFolderName = false;}

			var filename = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);
			var pathname = window.location.pathname.replace(filename, "");
			var assetsPath = window.location.protocol + "//" + window.location.hostname + pathname;
			if(addFolderName){ assetsPath = assetsPath + "assets/";}

			return assetsPath;
		},


		/*
			Function to create a certin Element and attach it to a parent.

			@param String tag, defines the tag identifier for the given Element (e.g. li, div, span...)
			@param String parent, defines the parent (in jQuery format) to which the Element has to be appended (e.g. '#parent', '#parent .subparent'
									or the Object itself if fetched before...)
			@param String html, can be the content that is meant to be set for the Element, if not set it will be ignored
			@param String addClass, can be a class name that the element should get. If not set it will be ignored.
			@param Array cssSet, is an Array of n Elements in this format: 'css attribute name' -> 'css value'  (e.g.: cssSet['backgound']='none')
			@param Array attributeSet, is an array of tag attributes that can be added, format: 'attribute name'
									-> 'attribute value' (e.g.  attributeSet['href'] = 'http:/google.de' or ...['id'] = 'e1')

		*/
		create_element:function(tag, parent, html, addClass, cssSet, attributeSet){

			//create Element
			var element = document.createElement(tag);

			//if there is a class to add, this happens here
			if(addClass && addClass != null && addClass != 'undefined' && addClass.length > 1) element.className = addClass;

			//if HTML is avilable it is added here
			if(html && html != 'undefined' && html != null){

				element.innerHTML=html;

			}

			//if there is a cssSet Array the each function iterates through all elements
			if(cssSet != null && cssSet && cssSet != 'undefined'){

				for(var key in cssSet){
				   $(element).css(key, cssSet[key]);

				}
			}

			//if there is an attributeSet Array the each function iterates through all elements
			if(attributeSet && attributeSet != 'undefined' && attributeSet != null){

				for(var key in attributeSet){
				  $(element).attr(key, attributeSet[key]);
				}
			}

			//elemnt is appended to parent
			$(parent).append(element);


		},

		//Same as create_element just for common use with other writing convention
		createElement:function(tag, parent, html, addClass, cssSet, attributeSet){
			this.create_element(tag, parent, html, addClass, cssSet, attributeSet)
		},

	/*Removes an Element*/
		removeElement:function(element){
			$(element).remove();
		},


		/*
			Function can transform Strings and ints (or any value) into a Boolean

			@param v, can be any type of variable
			@return Boolean b, if v is (int) 1, (String) '1', (String) 'true' or (Boolean) true, the return value is true,
								any other value or Object will return false
		*/
		toBoolean:function(v)
		{
			var b = false;

			if (v === "1" || v === 1 || v === "true" || v === true)
			{
				b = true;
			}
			else
			{
				b = false;
			}

			return b;
		},

		/*
			Returns the Weather info.
			@param String 'postCode' is the postcode past into the API for local weather defaults to london
			@param String 'countryCode' is the countrycode used for the api. (Usually provided by Kormo) -> default: 'uk'
					 possible known Values:
					 	'uk' -> England
			@param String 'weatherAPIKey', is the API Key. Best to leave null since it is set to the default Key.
		*/
		getWeatherInfo:function(postCode, countryCode, weatherAPIKey, callback){
					//Kormo only provides CountryCode and PostCode
			//Add the below vars to customLib
			//var locationCountry = creativeAPI.config.geo.cc;
			//var locationPostCode = creativeAPI.config.geo.pc;


			var kormoPostCode = this.setToExist(postCode,false,"ec2n 3ar");
			var kormoCountryCode = this.setToExist(countryCode,false,"uk");
			var myKey = this.setToExist(weatherAPIKey,false,'8a5857d37dbce43c92adf59081a87b9b');
			var returnObj;
			//Vibrant API URL & KEY = 'http://api.openweathermap.org/data/2.5/weather?appid=8a5857d37dbce43c92adf59081a87b9b';

			//Replace kormoPostCode & kormoCountryCode with locationPostCode & locationCountry
			var OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + myKey +"&units=metric&zip="+kormoPostCode+","+kormoCountryCode;

			$.ajax({
				   type: 'GET',
					url:OPEN_WEATHER_MAP_URL,
					async: true,
					//jsonpCallback: 'jsonCallback',
					contentType: "application/json",
					dataType: 'jsonp',
					success: function(response) {
					var rObject = {};
					  console.log('get weather: Success');
					   //jsonFinished = true;
						callback(response);
						//return rObject;
						//callback();
					},
					error: function(e) {
					   console.log('get weather: ' + e.message);
					  // jsonFinished = true;
					   callback(response);
					   return null;
					}
				});
			//setTimeout(function(){ console.log('hello response' + returnObj); return returnObj;},3000);

		},//weather end

		/*
			Documentation for API
			https://developer.weatherunlocked.com/documentation/localweather/current
		*/
		getSSLWeatherInfo:function(postCode, countryCode,weatherAPIKey,weatherAPIId,callback){



			var kormoPostCode = this.setToExist(postCode,false,"ec2n 3ar");
			var kormoCountryCode = this.setToExist(countryCode,false,"uk");
			var combinedLocation = kormoCountryCode.trim().replace(' ','') + '.' +kormoPostCode.trim().replace(' ','');

			var myKey = this.setToExist(weatherAPIKey,false,'a6bd69bdb0abff265ad59362155ec74a');
			var myId = this.setToExist(weatherAPIId,false,'1d1a0f32');

			//var returnObj;

			//Replace kormoPostCode & kormoCountryCode with locationPostCode & locationCountry
			var OPEN_WEATHER_MAP_URL = "https://api.weatherunlocked.com/api/current/"+ combinedLocation +"?app_id="+myId +"&app_key="+myKey;


			$.ajax({
        			url: OPEN_WEATHER_MAP_URL,
					type: "GET",
					success: function (response) {
								console.log(response);
								callback(response);
							},
					error: function (error) {
						console.log(error);
						callback(response);
						 return null;
					}
			});

		}//ssl weather end


	}
}

/*
	Can be initialized with customAd Object and deals with click and event logging.
	Recommondation is to use a global function like this:
	  var ca, cl;

	  $(document).ready({
	   	ca = customAd();
		cl = customLogger(ca);

		ca.initVars(
	    	init();
		);
	 });

	 Please find a detailed function description in the documentation document.
	 Below a list of public and private functions (private functions cannot be called in your code). Functions are commented below.

	 @private functions: buildURL, setRedirect, debuglog
	 @private functions: setLegacyClick, setCustomClick, setLogger

*/
function customLogger(ca){
	//check for ca function. If none is available ca is initialized here.
	if(ca == 'undefined' || ca == null || ca == 'null' || ca == '') {  var ca = customAd();}

	//The logger will most likely need a customModule instance
	var cm = customModules(ca, this);

	//we get all params "local"
	var parameters = ca.getParams();

	//initialize logging using the creative commons library should be hosted
	var tempurl = String(window.location.href);
	var isdebug = true;
	var thisvid = '';
	var tempstr;


//	alert('test:' + )

	//is demo on demo page or is it somewhere that shouldn't have console.logs
	if(tempurl.search("demo")!=-1){
	//console.log('tempurl');
		isdebug=true;
		//console.log('********debugging**********')
	}else{
		isdebug=false;
	}

	//Log  interactions
	function logInteraction (event) {
	if (!CPE_EVENT[event.type]) {
			return;
		}

		log.cpeInteraction({
			product: adInstance.product,
			hookId: adInstance.settings.vibrantParameters.hookId || 0,
			event: CPE_EVENT[event.type], // Integer
			element: event.target, // String
			creativeId: template.id
		});
	}


	//log video Events for JW
	function logVideo(eventName, video) {
		log.videoEvent({
			product: adInstance.product,
			hookId: adInstance.settings.vibrantParameters.hookId,
			event: LOG_EVENTS[eventName],
			position: (video.currentTime || 0) * 1000,
			duration: (video.duration || 0) * 1000,
			videoId: video.videoId,
			creativeId: template.id
		});

	}


	/*
		Logs All Clicks
		@param String Indicator: 'cpe' -> logs cpe clicks; 'cpc' -> logs cpc clicks
	*/

	function logClickThrough(elementName, clickURL, indicator) {
		 var adSettings = adInstance.getAdConfig();

		if(clickURL.indexOf('{{click}}') > -1){
			clickURL = adInstance.settings.ads[0].clickUrl;
		} else if(clickURL.indexOf('{{clickUrl}}') > -1){
			clickURL = adInstance.settings.ads[0].clickUrl;
		}


		object.communication.fire('click_interaction');
		object.communication.fire('click_through_done');
	//object.communication.on('click_interaction',function(){alert('why here');});

		switch(indicator){

			case 'cpc':
			 log.clickThrough({
				 product: adInstance.product,
                    hookId: adSettings.vibrantParameters.hookId || 0,
                    keyword: encodeURIComponent(adSettings.term && adSettings.term.keyword  || ''),
                    clickUrl: clickURL || adInstance.settings.ads[0].clickUrl,
                    source: 100
			 });

			break;

			case 'cpe':
				log.cpeClickThrough({
					product: adInstance.product,
					hookId: adInstance.settings.vibrantParameters.hookId || 0,
					element: elementName, //String
					creativeId: template.id,
					clickUrl: clickURL || adInstance.settings.ads[0].clickUrl //String
				});
			break;

			case 'adchoices':
			    log.adChoiceClick({
					product: adInstance.product,
					hookId: adInstance.settings.vibrantParameters.hookId || 0
				});
			break;


		}

	}



	//Do a console log! But only on demos!
	function debuglog(msg){
		if(isdebug==true){
			console.log(msg+'  :  ');
		}
	}


//================================================
	return{

		/*
			Function sets an adChoices Click to the passed in Element
			@param Elment/String 'container', is the element which will trigger the adChoices click
			@param url/String 'ac', ist the adChoices page (defaults to vibrant standard)
		*/
		adChoiceClick:function(container,ac){

			$(container).bind('click', function () {
				var ADCHOICE_URL = this.setToExist(ac,false,'http://www.vibrantmedia.com/whatisIntelliTXT.asp');

				logClickThrough(container, ADCHOICE_URL, 'adchoices');

				dom.openUrl(ADCHOICE_URL);

			});
		},



		//Legacy Click function: Converts legacy Clicks into Kormorant Logging
		setLegacyClick:function(element, url, so){
			$(element).bind('click',function(e){
			//	this.setClickCPC(e.target,url,so,so);
				logClickThrough(so, decodeURIComponent(url),'cpc');
				channel.fire('Click on Unit - so-value:'+so);
				object.communication.fire('Click on Unit - so-value:'+so);
				this.logInteraction(null,'click',so);
				cm.useVideoHandler(true);
			});
		},

		/*
			Will set a click and also fire a Chanel and Communication message
			@param String "eTarget", the target name
			@param String "url"m the URL it will go to
			@param String "channelEventName" is the Channel Event Name which is fired
			@param String "communicationlEventName" is the Communication Event Name which is fired
		*/
	    setClickCPC:function(eTarget, url, channelEventName, communicationEventName){
			logClickThrough(eTarget, decodeURIComponent(url), 'cpc');
			this.logInteraction(null,'click',channelEventName);
			channel.fire(channelEventName);
			object.communication.fire(communicationEventName);
			cm.useVideoHandler(true);
		},

		//================================

		/*
			Set a clickthorough on any object
			@param Object elment, is the element which will be clickable
			@param String url, is the clickThrough URL
			@param String Message, is the message that will show up in the reporting
		*/
		setCustomClick:function(element, url, message){
			$(element).bind('click',function(e){
				logClickThrough(message, decodeURIComponent(url),'cpe');
				channel.fire('Click on Element - '+message);
				object.communication.fire('Click on Element - '+message);
				object.communication.fire(message);
				cm.useVideoHandler(true);
			});
		},

        /*
			Same as setCustomClick but not assigned to an Object. You need to call it yourself.

			@param String url, is the clickThrough URL
			@param String Message, is the message that will show up in the reporting
		*/
        logClickCPE:function(url, message){
            logClickThrough(message, decodeURIComponent(url),'cpe');
			channel.fire('Click on Element - '+message);
			object.communication.fire('Click on Element - '+message);
			object.communication.fire(message);
			cm.useVideoHandler(true);
        },

		//=========================

		/*
			Kormorant Event Logging for CPE
			@param event e, is the event that is parsed in. Can be null if the event is supposed to be set as a custom event by the other parameters
			@param String type, is a custom type (standard Values: "click" or "close") (igrnored if e != null)
			@param String target, is the Description to be logged (ignrored if e != 0)
		*/
		logInteraction:function(e, type, target) {

			if(!ca.doesExist(e)){
				e = {
					'type':type,
					'target':target
				};

			}


			if (!CPE_EVENT[e.type]) {
				return;
			}

			log.cpeInteraction({
				product: adInstance.product,
				hookId: adInstance.settings.vibrantParameters.hookId || 0,
				event: CPE_EVENT[e.type], // Integer
				element: e.target, // String
				creativeId: template.id
			});
		},

/*
			Set a custom event on any object/action for BrandCanvas Builds or units which are using creativecommens.js
			NOTE: unitlog must be activated in live environment
			@param String typeofevent, name of the event (e.g. "Switche Video")
			@param String buttonName, is the button/trigger name that will show up in the reporting and identify the event
		*/
		creativeEvent:function (typeofevent, buttonName){
			cl.logInteraction(null, 'click', buttonName);
		},

		//see logVideo
		logVideoEvent:function(eventName, video){
			logVideo(eventName, video);
		},



		//=========================

		/*
			This will register any created video Player for logging.
			NOTE: It is designed for ONE player! Not multiple Videos.

			@ Object video, is the VideoPlayer Element to be registered
		*/
		registerPlayer:function(video){

			player = video;
			//get correct video

			debuglog('video reset: ');
			var started = false;
			var quartile1=false;
			var quartile2=false;
			var quartile3=false;
			var quartile4=false;

			//Variables to store info
			var myQuartile;
			var vidduration;
			var myQuartileDuration;

			var vidduration = player.duration; //might be reset on metaload

			//on video complete
      		player.addEventListener('ended', function() {
			//***************LOGGING EVENT**************
				debuglog('ENDED');
				if(!quartile4){
					quartile4=true;
					cl.logInteraction(null, 'click', 'Video Quartile 4 - Legacy');
				}
			}, false);

			//on completed loaded metainfo
			player.addEventListener('loadedmetadata', function() {
				vidduration = player.duration;
				myQuartile =  Math.ceil(Number(vidduration))/4;

			}, false);


			/*
				Track time and throw start/quatile events.
				NOTE: the forth Quartile is handled above with "ended"
			*/
			player.addEventListener('timeupdate', function() {
			//***************LOGGING EVENT**************
				var mycurrentime = player.currentTime;
				tempstr = "mainVideo";
				videolabel = tempstr;
				thisvid = tempstr;

				if(mycurrentime>0&&started==false){

					started=true;
					debuglog('STARTED');
					cl.logInteraction(null, 'click', 'Video Start - Legacy')

			  	} else if(mycurrentime>(myQuartile*1)&&quartile1==false){
					quartile1=true;
					cl.logInteraction(null, 'click', 'Video Quartile 1 - Legacy')
			  } else if(mycurrentime>myQuartile*2&&quartile2==false){
					quartile2=true;
					cl.logInteraction(null, 'click', 'Video Quartile 2 - Legacy')
			  } else if(mycurrentime>(myQuartile*3)&&quartile3==false){
					quartile3=true;
					debuglog('QUARTILE 3');
					cl.logInteraction(null, 'click', 'Video Quartile 3 - Legacy')
			  }
			}, false);
		}
	};
}



/*
	Can be initialized with customAd Object and customLogger Object and can build you helpful tools such as a video Player
	or HotSpots. All used variables will be taken by using the ca-object parameter access so that you can parse in all params ia URl
	or the same JSON. Also Elments will be added to ca-parameter list. (see individual documentation)

	Recommondation is to use a global function like this:
	  var ca, cl; cm;

	  $(document).ready({
	   	ca = customAd();
		cl = customLogger(ca);
		cm = customModules(ca,cl)

		ca.initVars(
	    	init();
		);
	 });

	 Please find a detailed function description in the documentation document.
	 Below a list of public and private functions (private functions cannot be called in your code). Functions are commented below.

	 @private functions: videoPlayerHandler
	 @private functions: useVideoHandler,createHotSpots,setVideoPlayer

*/
function customModules(ca, cl){

	//checks if customAd and customLogger Objects have been set and if not initializes those
	if(ca == 'undefined' || ca == null || ca == 'null' || ca == '') {  var ca = customAd();}
	if(cl == 'undefined' || cl == null || cl== 'null' || cl == '') {  var cl = customLogger();}

	//Function that handles play or pause
	//NOTE: Simplistic... this will confuse status if a user would click twice (what will basically never happen)
	//TODO: Parse in "clicked" boolean to avoid issue! if false or null -> execute if true: don't. (notr: function calls need to be updated)
	function videoPlayerHandler(forcePause, forcePlay){


		var player = ca.getParam('videoPlayer');
		if(ca.doesExist(player)){
	//		console.log('i was here: -- -- ?!?! -- player');
			if((player.paused && !forcePause) || forcePlay !=false){
			//	console.log('i was here: -- -- ?!?!');
				player.play();
				$('#vm_vp_play').css('background-position','0 -50px');
			} else {
			//	console.log('i was here: -- -- ');
				player.pause();
				$('#vm_vp_play').css('background-position','0 -25px');
			}
		}

	}


	return{

		//function for making the handler accessible on public
		useVideoHandler:function(forcePause,forcePlay){
			videoPlayerHandler(forcePause,forcePlay);
		},
		/*
			Function to place HotSpots
			@param: Object "hs" is a HotSpot Object in this format (directly parsed from ca-Object if missed):
							'HS1':{
								'w':20,
								'h':20,
								'x':20,
								'y':20,
								'click':'http://www.google.de',
								'controlColor':true,
								'z-index':'20'
							}, ....
			@param Element 'parent', is the the parent where the hot spots will be added.
			@param boolean 'brandcanvas', tells the got spot which kind of clik to set
		*/
		createHotSpots:function(parent,brandcanvas,hs){
			//Set hs Object if parameter is availabe
			if(!ca.doesExist(hs)) var hs = ca.getParam('HotSpots');
			i=0;
			//if the hs oject is avialable/has contents the loop iterates thorugh an builds the Clickable areas
			for(key in hs){
				i++;
				var hsAttr = new Object({'id':'vm_hs_'+i});

				//Parameters for opacity that will make the object visible but "not seen" (this is for IE Browsers)
				var c = "rgba(255,255,255,0.1)";
				var o = '0.1'

				//For setup pupose a control color with full opacity can be used
				if(hs[key]['controlColor']){
					c = '#ccc';
					o = 1;
				}

				var myz = ca.setToExist(hs[key]['z-index'], false, 99+i);

				var hsCss = new Object({
					'width': hs[key]['w'] + 'px',
					'height': hs[key]['h'] + 'px',
					'left': hs[key]['x'] + 'px',
					'top': hs[key]['y'] + 'px',
					'position': 'absolute',
					'background-color':c,
					'opacity':o,
					'cursor':'pointer',
					'z-index': myz
				});

				ca.create_element('div', parent, null, null, hsCss, hsAttr);

				//HotSpots canbe used for Brand Canvas or InText, this if case will set the HotSpot with the correct ClickLogger
				if(!brandcanvas) {cl.setLegacyClick('#vm_hs_'+i, hs[key]['click'], 13+i)}
				else { cl.setCustomClick('#vm_hs_'+i, hs[key]['click'], 'Click on HotSpot'+i)}

			}
		}, //hotSpot End



		//removeJWPlayer
		removeJWPlayer:function(parent){
			jwplayer(parent).remove();
			//console.log('remove player enter');
		},

		/*
			Starts or Stops playlist Item

			@param Element "myPlayer", the player if it is known or null
			@param String "myparent", name for the parent or null if not defined
			@param int "playListIndex", index of playlist item to be played/paused
			@param Boolean "playItem", if true, the item is played
		*/
		playlistHandler:function(myPlayer, myParent, playListIndex, playItem){
			ca.setToExist(playListIndex, false, 0);
			if(ca.doesExist(myPlayer)){
				if(playItem == true || playItem == 'true'){
					myPlayer.getPlaylistItem(playListIndex).play();
				} else{
					myPlayer.getPlaylistItem(playListIndex).stop();
				}

			} else if (ca.doesExist(myParent)){
				if(playItem == true || playItem == 'true'){
					jwplayer(myParent).getPlaylistItem(playListIndex).play();
				} else{
					jwplayer(myParent).getPlaylistItem(playListIndex).stop();
				}
			}
		},



		/*
		=============================    JW PLAYER =======================================
		*/


		/*
			Creates a JW Player

			NOTE: if a playlist is set in the playerSettings Object all other parameters are ignored!!! - Each item can and should hold the Information below which you can set for a single video!

			NOTE: Function uses global Params like "engagementTime" and "billOnPlay"

			@param Object "playerSettings" is the configuration Object for the player. Mandatory setting is the mp4Src
						{
								'mp4Src':videoSource, //-> mandarory
								'videoPosterSrc':poster,
								'playerW':pw,
								'name':[nameToIdentifyPlayer],
								'auostart':as,
								'mute':mute,
								'volume':volume,
								'vast': vast,
                                'vpaid': "disabled"/"enabled"/"insecure",
                                'vastClient':"vast"/"googima",
								'controls':controls,
								'viewHandler':true, -> if true video is paused when out of view
								'playlist':[link to JSON file] or format like displayed on this Doc link -> https://developer.jwplayer.com/jw-player/docs/developer-guide/customization/configuration-reference/#playlist
						}

			@param element 'parent' the parent container which the video will be attached to
		*/
	//	createJWPlayer:function(playerSettings,parent){},
	    createJWPlayer: function(playerSettings, parent){
			var ps = playerSettings;

			var vSrc,posterSrc,playerW,videoPlayerName,fps,myAutostart, volume, startMute, vast, vpaid,vastClient, hasControls, myPlaylist, preload,viewHandler, defineViewable;

			//IF THERE IS NO GLOBAL VIDEO SETING OBJECT IT IS INITIALIZED HERE
			if(!ca.doesExist(ca.getParam('globalPlayerSettings'))){
				var gps = {};
				ca.setParam('globalPlayerSetting', gps);
			}

			//CHECK IF THE PLAYER SETTINGS FOR THIS PLAYER ARE AVAILABLE AND HAVE AN EXISTING VIDEO SOURCE
			if(ca.doesExist(ps)){
				if(ca.doesExist(playerSettings['mp4Src']) || ca.doesExist(playerSettings['vast']) ){

					//Try to set all data from player settings
					vSrc = ps.mp4Src;
					vSrc = ca.setToExist(vSrc, false, '//images.intellitxt.com/ast/ee318636-be5b-dc11-9c93-005056c00008/vmuk52455/onesecondvideo.mp4');
					posterSrc = ps.videoPosterSrc;
					playerW = ps.playerW;
					videoPlayerName = ps.name;
					myAutostart = ps.autostart;
					if(!ca.doesExist(ps.autostart)){ myAutostart = ps.autoplay;};
					if(myAutostart == "true"){myAutostart = true;}
					volume = ps.volume;
					startMute = ps.mute;
					vast = ps.vast;
					hasControls = ps.controls;
					myPlaylist = ps.playlist;
                    vpaid = ca.setToExist(ps.vpaid,false,'disabled');
                    vastClient = ca.setToExist(ps.vastClient,false,'vast');
					preload = ca.setToExist(ps.preload,false,'metadata');

					viewHandler = ps.viewHandler;
					if(!ca.doesExist(viewHandler)){ viewHandler = ca.setToExist('viewHandler',true,true);}

					defineViewable = ps.defineViewable;
					if(!ca.doesExist(defineViewable) || parseInt(defineViewable) == 'NaN'){ defineViewable = ca.setToExist('defineViewable',true,50);}

					ps.fps = true;

					//use default values for not existiong values
					if(!ca.doesExist(playerW)){ playerW = 400;}
					if(!ca.doesExist(myAutostart)){ myAutostart = false;}
					if(!ca.doesExist(videoPlayerName)){ videoPlayerName = 'Main_Video'}
					if(!ca.doesExist(volume)){ volume = 40; }
					if(!ca.doesExist(startMute)){startMute = false;}
					if(!ca.doesExist(hasControls)){ hasControls = false; }

					//get the global player settings, store the playerSettings for this one inside
					var gps = ca.getParam('globalPlayerSetting');
					gps[videoPlayerName] = ps;
					ca.setParam('globalPlayerSetting', gps);
				} else {
					alert('Video Source is missing!');
					return;
				}
			} // end if playerSettings exist


			if(!ca.doesExist(videoplayer)){
				videoplayer = creativeAPI.videoplayer(window, document);
			}

			var playerH = (9*playerW)/16;


            //console.log('=========== >' + vast + ' < =================' );
			var loadObject = {};

			if(ca.doesExist(myPlaylist)){
				loadObject = {
					playlist: myPlaylist
				}
			} else if(ca.doesExist(vast)){
			//	var vastMsg = setToExist('vastMessage',true, '')
				// console.log('=========== >' + ps.autostart + ' < :: or :: '+ ps.autoplay+'=================' );
                loadObject = {
					file: vSrc,
					width: playerW,
					height: playerH,
					autostart: myAutostart,
					image: posterSrc,
					controls:hasControls,
					mute: startMute,
					primary: "html5",
					advertising: {
						"client": vastClient,
						"tag": vast,
                        "vpaidmode":vpaid
					}

				}
			} else{

				loadObject = {
					file: vSrc,
					preload: preload,
					width: playerW,
					height: playerH,
					autostart: myAutostart,
					image: posterSrc,
					controls:hasControls,
					mute: startMute,

				}

			}
			videoplayer.load(loadObject,
				undefined,
				function (video) {
					// Select the element that will hold the video
				//	alert(parent);
					var videoHolder = parent;

					// Pass video holder to the video build method
					video.build(videoHolder);

					//set Volune
					if(!ca.toBoolean(startMute)){
						jwplayer().setVolume(volume);
					} else{
							jwplayer().setVolume(0);
					}



					//build additional poster src
					var correctHeight = 25;
                    if(hasControls == false){
                        correctHeight = 0;
                    }
						if(ca.doesExist(posterSrc)){
							var pCSS = {
								'height':(playerH-correctHeight)+'px',
								'width':playerW+'px',
								'left':$(videoHolder).css('left'),
								'top':$(videoHolder).css('top'),
								'position':'absolute',
								'cursor':'pointer',
								'display':'block',
								'z-index':100
							}

							var pAttr = {
								'id':'posterImage',
								'src':posterSrc
							}


							ca.createElement('img',videoHolder.parentElement,null,null,pCSS,pAttr);

							hasControls = ca.toBoolean(hasControls);


							if(!hasControls || myAutostart == false || myAutostart == 'false'){

								$('#posterImage').unbind('click');
								$('#posterImage').bind('click',function(){

									object.communication.fire('clickToPlay');
								});

								object.communication.fire('poster image set');

								video.on('click',function(){
									//object.communication.on('click_on_video');
									object.communication.fire('click_interaction');
								});

								//create replay button:
								var rCSS = {
									'height':'40px',
									'width':'40px',
									'left':$(videoHolder).css('left'),
									'top':$(videoHolder).css('top'),
									'position':'absolute',
									'cursor':'pointer',
									'display':'none',
									'z-index':101
								}

								var replaySrc = ca.setToExist('replayBtnSrc',true,'//images.intellitxt.com/a/102315/Creative_Template_Files/Icons/replay.png');
								var rAttr = {
									'id':'replayBtn',
									'src':replaySrc
								}

								ca.createElement('img',videoHolder.parentElement,null,null,rCSS,rAttr);
								$('#replayBtn').unbind('click');
								$('#replayBtn').bind('click',function(){
									object.communication.fire('clickToPlay');
								});

							} //end if has no controls
						}

					//====== build poster end

					video.on('click',function(){
						object.communication.fire('click_on_video');
					});

					video.on('play', function (event) {

						$('#posterImage').css('display','none');
						$('#replayBtn').css('display','none');
						cl.logVideoEvent('play', video);
						channel.fire(videoPlayerName + ' Play');
						object.communication.fire(videoPlayerName + ' Play');


						if(viewHandler == true || viewHandler == 'true'){

							var absoluteViewport = dom.getAbsoluteViewport();
							var adPos = dom.getPosition(adInstance.outerBox);

							//ca.setParam('avoidScrollToPlay',false);
							var debounceCheck = utils.debounce(function isInViewport () {

							absoluteViewport = dom.getAbsoluteViewport();
							adPos = dom.getPosition(adInstance.outerBox);
							var adI = adPos.getIntersection(absoluteViewport);

							//	defineViewable = 90;
							var divider =  100 -parseInt(defineViewable);
							divider = 100/divider;
							//console.log('divider: ' + divider);
							var checkVal = (parseInt(adPos.bottom)-parseInt(ca.getParam('height'))/divider);
							var checkValTop = (parseInt(adPos.top)+parseInt(ca.getParam('height'))/divider);
							var bottomCheck = (adI.bottom < checkVal);
							var topCheck = (adI.top > checkValTop);

							 if(bottomCheck){
								object.communication.fire('out_of_view');
							 }else if(topCheck){
								 object.communication.fire('out_of_view');
							 } else if(!bottomCheck && !topCheck){
								 object.communication.fire('into_view');

							 }
								/*
								if (!dom.isInViewport(adInstance.outerBox)) {

									object.communication.fire('out_of_view');
								} else {
									object.communication.fire('into_view');
									//useVideoHandler(false,true);
								}
								*/
							}, 250);

							events.bind(parentWindow, 'scroll', debounceCheck);
						}


						//if we want to bill on Video Play
						var engagementTime = parseInt(ca.setToExist('engagementTime',true,-1),10);
						var billOnPlay = ca.toBoolean(ca.setToExist('billOnPlay',true,false));
						if(billOnPlay == true){
							engagementTime = 0;
						}


						if(engagementTime === 0){
							ca.setParam('engaged',true);
	        	        	    // Drop engagement tracking
    		                	adInstance.fire('engagement');
								channel.fire('channel_engagement');
                		    	log.engagement({
									product: adInstance.product,
									hookId: adInstance.settings.vibrantParameters.hookId,
									source: 1,
									creativeId: template.id
								});
						}



					});

					video.on('pause', function (event) {
						cl.logVideoEvent('pause', video);
						channel.fire(videoPlayerName + ' Pause');
						object.communication.fire(videoPlayerName + ' Pause');
						$('#posterImage').css('display','block');
					});

					video.on('complete', function (event) {
						//alert('hallo ringo!!');
						channel.fire(videoPlayerName + ' Complete');
						object.communication.fire(videoPlayerName + ' Complete');

						if(ca.getParam('billCPC') != true && ca.getParam('billCPC') != 'true'){
							$('#posterImage').unbind('click');
							//channel.fire(videoPlayerName + ' Complete');
//							alert('Test: '+ca.getParam('engaged'));
							if(ca.toBoolean(ca.getParam('engaged')) === false){

								adInstance.fire('engagement');
								channel.fire('channel_engagement');
								log.engagement({
									product: adInstance.product,
									hookId: adInstance.settings.vibrantParameters.hookId,
									source: 1,
									creativeId: template.id
			                    });
							}
						}
						//console.log('tell me about it: ' + videoPlayerName + ' Complete');
						if(ca.getParam('globalPlayerSetting')[videoPlayerName]['fps']){
							cl.logVideoEvent('complete', video);
							ca.getParam('globalPlayerSetting')[videoPlayerName]['fps'] = false;
						}

						$('#posterImage').css('display','block');
						$('#replayBtn').css('display','block');

					});

					video.on('quartile', function (event) {
						cl.logVideoEvent(event.data, video);
						channel.fire(videoPlayerName + ' Quartile Reached');
						object.communication.fire(event.data);
					});

					var engagementTime = parseInt(ca.setToExist('engagementTime',true,-1),10);

					if(engagementTime > 0){
						ca.setParam('engaged',false);
						ca.setParam('closed',false);
						video.on('time',function(e){
							 var time = e.data.position * 1000;
							if (time >= engagementTime && !ca.getParam('engaged')) {
								ca.setParam('engaged',true);
	        	        	    // Drop engagement tracking
    		                	adInstance.fire('engagement');
								channel.fire('channel_engagement');
                		    	log.engagement({
									product: adInstance.product,
									hookId: adInstance.settings.vibrantParameters.hookId,
									source: 1,
									creativeId: template.id
			                    });
			              }

						});
					}

				 	if(ca.getParam('closeAfterComplete') === true || ca.getParam('closeAfterComplete') === 'true'){
						 //if we have an engagement unit we like to close it after play
            		    object.communication.on(videoPlayerName + ' Complete', function(){
                    		adInstance.fire('close');
                		});
					}


					object.communication.on('mute_video',function(){
						jwplayer().setVolume(0);
					});

					object.communication.on('unmute_video',function(){
						jwplayer().setVolume(volume);
					});


					object.communication.on('click_interaction',function(){
						video.pause();
						ca.setParam('avoidScrollToPlay',true);
					});

					channel.on('channel_engagement',function(){
						ca.setParam('engaged',true);
					});

					object.communication.on('clickToPlay',function(){
						video.play();
						ca.setParam('avoidScrollToPlay',false);
					});

					object.communication.on('out_of_view',function(){
						ca.setParam('out_of_view', true);
						video.pause();
					});

					object.communication.on('into_view', function(){
						ca.setParam('out_of_view', false);


						if(cfg.mobile && navigator.userAgent.indexOf('Android') === -1){
							ca.setParam('avoidScrollToPlay',true,true);
						}

						if(!ca.getParam('avoidScrollToPlay')){
							video.play();
						}

					});


					//store the video right in the parameters
					ca.setParam('Video_'+videoPlayerName, video);
					//if there is no VideoPlyers Object so far: Create it
					if(!ca.doesExist(ca.getParam('VideoPlayers'))){
						var players = {};
						ca.setParam('VideoPlayers', players);
					}

					//iterate through existing players and add current player
					var myP = ca.getParam('VideoPlayers');
					var i=0;
					var newP = {};
					for(e in myP){
						newP[i] = $(this);
						i++;
					}
					ca.setParam('VideoPlayers', newP);


			}); //load end





		},
		/*
		============================   JW END ============================================
		*/
		/*

			This function creates a video player, appends it to the given parent and stores the player in the ca parameter object
			for easy access. This includes controls but not handlers. The player uses certain ca-variables that need to be available (see external doc
			for details).

			@param Object playerParent, is the parent where the player will be appended to

			@used ca-parameters: playerW, playerH, playerX, playerY, autoplay, volume,posterImg,mp4Src, webMSrc,
									btnSprite or controlSprite (both optional),hasScrub
			@added ca-parameter: videoPlayer

		*/
		setVideoPlayer: function (playerParent){
			var 	pw = ca.getParam('playerW'),
				px = ca.getParam('playerX'),
				py = ca.getParam('playerY');
				autoplay = ca.getParam('autoplay');
				volume = ca.getParam('volume')/10;
				//scrubColor = ca.getParam('scrubColor');

				//h = ca.getParam('height'),
				//w = ca.getParam('width'),
				//ph = ca.getParam('ph'),

			//calculate defaults if variables are not set
			//if(!ca.doesExist(ca.getParam('width'))){ w = 400;}
			//if(!ca.doesExist(ca.getParam('height'))){ h = 250;}
			if(!ca.doesExist(ca.getParam('playerW'))){ pw = 400; ca.addParam('playerW',pw,false);}
			if(!ca.doesExist(ca.getParam('playerX'))){ px = 0; ca.addParam('playerX',px,false); }
			if(!ca.doesExist(ca.getParam('playerY'))){ py = 0; ca.addParam('playerY',py,false);}
			if(!ca.doesExist(ca.getParam('autoplay'))){ autoplay = true; ca.addParam('autoplay',autoplay,false);}
			if(!ca.doesExist(ca.getParam('volume'))){ volume = 0.5;}


			//if(!ca.doesExist(ca.getParam('scrubColor'))){ scrubColor = "28B900";}

			//if not specifically defined or set to any negative value the player will calculate the heigth in 16:9 format
			//reffering to the given width
			var ph = ca.getParam('playerH');

			if(!ca.doesExist(ca.getParam('playerH')) || ca.getParam('playerH') < 0 ){
				ph = (pw*9)/16;
				ca.addParam('playerH',ph,false);
			}


			if(ca.doesExist(ca.getParam('posterImg'))){
				var imgAttr = new Object({
					'id':'vm_vpPoster',
					'alt':'vm_vpPoster',
					'src':ca.getParam('posterImg')
				});

				var imgCss = new Object({
						'border':0,
						'border':'none',
						'padding':0,
						'margin':0,
						'position':'absolute',
						'top':py + 'px',
						'left':px + 'px',
						'width':pw + 'px',
						'height':ph + 'px',
						'z-index':4,
						'display':'block'
					});
				ca.create_element('img', playerParent, null, null, imgCss, imgAttr);

			} //set Poster image close




			  if(ca.doesExist(ca.getParam('youtubeId'))){
				  //TODO: Add Youtube Code for embeding, ATTENTION: Need to figure Controls!!!!
			  } else {

				  var pAttr = new Object({
				  	'id':'vm_vp_player',
				  	'poster':ca.getParam('posterImg')
				  });

				  //set Player CSS
				  var pCSS = new Object({
					  'border':0,
					  'border':'none',
					  'padding':0,
					  'margin':0,
					  'position':'absolute',
					  'top':py + 'px',
					  'left':px + 'px',
					  'width':pw + 'px',
					  'height':ph + 'px',
					  'z-index':3
				  });

				  ca.create_element('video', playerParent, null, null, pCSS, pAttr);
				  var player = document.getElementById('vm_vp_player');

				  //Both video sources are set and appended

				  var mp4Attr = new Object({
					  'src':ca.getParam('mp4Src'),
					  'type':'video/mp4'
				  });

				  var webMAttr = new Object({
					  'src':ca.getParam('webMSrc'),
					  'type':'video/webm'
				  });

				  ca.create_element('source', player, null, null, null, mp4Attr);
				  ca.create_element('source', player, null, null, null, webMAttr);

				  //let's add videoPlayer features
				  if(!autoplay) {player.pause();}
				  else{ player.play();}
				  $(player).click(function(e){
				  	videoPlayerHandler();
				  })
				  ca.addParam('videoPlayer',player);
				  //set controls



				  if(!ca.doesExist($('#vm_vp_controls').attr('id'))){

					var zi = parseInt($(player).css('z-index'))+1;
					var cAttr = new Object({'id':'vm_vp_controls'});
				  	ca.create_element('div',playerParent, null,null, null, cAttr);

					$('#vm_vp_controls').css('z-index',zi);

						var pmAttr = new Object({'id':'vm_vp_playMute'});
					  	ca.create_element('div','#vm_vp_controls', null,null, null, pmAttr);

							var playAttr = new Object({'id':'vm_vp_play'});
						  	ca.create_element('span','#vm_vp_playMute', null,null, null, playAttr);

							var muteAttr = new Object({'id':'vm_vp_mute'});
						  	ca.create_element('span','#vm_vp_playMute', null,null, null, muteAttr);

						var scrubAttr = new Object({'id':'vm_vp_scrub'});
					  	ca.create_element('div','#vm_vp_controls', null,null, null, scrubAttr);

							var scrubMAttr = new Object({'id':'vm_vp_scrubMark'});
						  	ca.create_element('span','#vm_vp_scrub', null,null, null, scrubMAttr);

						var timeAttr = new Object({'id':'vm_vp_time'});
					  	ca.create_element('div','#vm_vp_controls', null,null, null, timeAttr);
				  }

				  var topValue = parseInt(py) + parseInt(ph);
				  $('#vm_vp_controls').css({
					  'overflow':'hidden',
					  'width':pw + 'px',
					  'height':'30px',
					  'position':'absolute',
					  'top': topValue  + 'px',
					  'left':px +'px',
					  'z-index': $('#vm_vpClick').css('z-index')+1,
				  });

				  var btnSprite = "assets/btn_sprite2.png";
				  if(ca.doesExist(ca.getParam('btnSprite'))) { btnSprite = ca.getParam('btnSprite');}
				  else if(ca.doesExist(ca.getParam('controlSprite'))) { btnSprite = ca.getParam('controlSprite');}
				  $('#vm_vp_play, #vm_vp_mute').css({
					 'background':'url('+ btnSprite +') no-repeat 0 -50px',
					 'height':'25px',
					 'width':'25px',
					 'display':'block',
					 'cursor':'pointer',
					 'position':'absolute',
					 'left':'5px',
					 'top':'2px'
				   });

				   $('#vm_vp_mute').css({
					 'background-position':'0 -124px',
					 'left':'32px'
				   });

				   $('#vm_vp_play').click(function(e) {
                    	videoPlayerHandler();
               		});

					$('#vm_vp_mute').click(function(e) {
                    	if(player.muted){
							player.muted = false;
							$('#vm_vp_mute').css('background-position','0 -124px');
						} else {
							player.muted = true;
							$('#vm_vp_mute').css('background-position','0 -148px');
						}
               		});

					player.addEventListener('playing', function(e){
						$('#vm_vp_play').css('background-position','0 -50px');
						$('#vm_vpPoster').css('display','none');
					});


					player.addEventListener('ended', function(e){
						$('#vm_vp_play').css('background-position','0 -225px');
						$('#vm_vpPoster').css('display','block');
					});


				  //TODO: If Video is not to low in width remove control items: scrubbar, time
				  var scrub = $('#vm_vp_scrub');
				  var scrubProg = $('#vm_vp_scrubMark');
				  var timer = $('#vm_vp_time');

				  var hasScrub = true;

				  if(ca.doesExist(ca.getParam('hasScrub'))){ hasScrub = ca.getParam('hasScrub'); }
				  else if(pw < 300 || ca.getParam('hasScrub') == false) { hasScrub = false;}

				  if(!hasScrub){
					  ca.removeElement(scrub);
					  var topValue2 = parseInt(py) + parseInt(ph)-30;
					  $('#vm_vp_controls').css({
						  'top': topValue2 + 'px',
						  '-webkit-box-shadow': '0px 0px 0px 0px rgba(153,153,153,0)',
					  '-moz-box-shadow': '0px 0px 0px 0px rgba(153,153,153,0)',
					  'box-shadow': '0px 0px 0px 0px rgba(153,153,153,0)',
					  });

				  } else {
					  var sw = pw - 120;
					  $(scrub).css({
						  'width':sw+'px',
						  'height':$('#vm_vp_controls').css('height'),
						  'position':'absolute',
						  'left':'60px',
						  'top':0,
						  'border-left':'solid #444 1px',
						  'border-right':'solid #444 1px',
						  //background gradiant
						  "background":"-moz-linear-gradient(top,  rgba(179,179,179,0.0) 10%, rgba(179,179,179,0.2) 100%)",
						  "background":"-webkit-gradient(linear, left top, left bottom, color-stop(10%,rgba(179,179,179,0.0)), color-stop(100%,rgba(179,179,179,0.2)))",
						  "background":"-webkit-linear-gradient(top,  rgba(179,179,179,0.0) 10%,rgba(179,179,179,0.2) 100%)",
						  "background":"-o-linear-gradient(top,  rgba(179,179,179,0.0) 10%,rgba(179,179,179,0.2) 100%)",
						  "background":"-ms-linear-gradient(top,  rgba(179,179,179,0.0) 10%,rgba(179,179,179,0.2) 100%)",
						  "background":"linear-gradient(to bottom,  rgba(179,179,179,0.0) 10%,rgba(179,179,179,0.2) 100%)",
						  "filter":"progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=0)",
					  });


					  var sc = '28B900';
					  if(ca.doesExist(ca.getParam('scrubColor'))){ sc = ca.getParam('scrubColor');}

					  $(scrubProg).css({
						  'width':0,
						  'height':$('#vm_vp_controls').css('height'),
						  'position':'absolute',
						  //'left':'82px',
						  'top':0,
						  'background-color':'#'+sc,
						  'opacity':0.2,
					  });


					 player.addEventListener('timeupdate', function(){
						var timePercent = this.currentTime / this.duration * 100;
						$(scrubProg).css({width:timePercent + '%'});
					});



					  //if the unit has a scrub bar the controls need a solid bg
					  $('#vm_vp_controls').css('background-color','#333333');

				  }
				  if(pw < 140) {
					  ca.removeElement(timer)
				  } else {
					  $(timer).css({
						  'width':'40px',
						  'padding':'7px',
						  'height': parseInt($('#vm_vp_controls').css('height')-7-7)+'px',
						  'font-family':'Gotham, "Helvetica Neue", Helvetica, Arial, sans-serif',
						  'color':'#fff',
						  'overflow':'hidden',
						  'font-size':'12px',
						  'text-shadow':'#000 1px 1px 1px',
						  'top':0,
						  'right':0,
						  'text-align':'center',
						  'position':'absolute'
					  });

					  $(timer).html('00:00');

					  player.addEventListener('timeupdate', function(){
						var html = '';
						var sec = Math.floor(this.currentTime);
						var secHTML='0';
						var minutes = 0;

						if(sec > 59){
						  minutes = sec/60;
						  minutes = Math.floor(minutes);//minutes.split('.')[0];
						  sec = sec%60;
						  if(sec < 10) secHTML = '0'+ sec.toString();
						  else { secHTML = sec;}
						  if(minutes < 10) html = '0'+minutes+':'+ secHTML;
						  else html = minutes + ':' + sec;
						} else{
						  if(sec < 10) html = '00:0'+sec;
						  else html = '00:'+sec;
						}

						$(timer).html(html);
					 });


				  }

				  $('#vm_vp_playMute').css({
					  'width':'60px',
					  'height':$('#vm_vp_controls').css('height'),
					  'left':0,
					  'top':0,
					  'position':'absolute',
				  });

				  //if(autoplay){ player.play();}
				  player.volume = volume;

			  }
			 }


	}//return end
}
