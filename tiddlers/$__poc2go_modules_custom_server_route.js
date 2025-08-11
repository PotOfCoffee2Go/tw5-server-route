/*\
title: $:/poc2go/modules/custom/server/route.js
type: application/javascript
module-type: route

Server-side custom WebServer route

GET /{route}/topic/filter/sender

\*/
"use strict";

// Name of route - note is module-type route
// Must be the same name as in client-side macro JS tiddler
//  $:/poc2go/macros/custom/server/request.js
const route = 'my-route';

var reqCounter = 1;

function decodeUriParams(state) {
	const params = [];
	state.params[0].split('/').forEach(p => {
		params.push($tw.utils.decodeURIComponentSafe(p));
	})
	return params
}

function tiddlerToWiki(jsonTiddler) {
	$tw.wiki.addTiddler(new $tw.Tiddler(
		$tw.wiki.getCreationFields(),
		jsonTiddler,
		$tw.wiki.getModificationFields(),
	));
}

function deleteServerTiddlers() {
	const tiddlers = $tw.wiki.filterTiddlers('[prefix[Server Tiddler #]]');
	$tw.utils.each(tiddlers,function(title) {
		$tw.wiki.deleteTiddler(title);
	});
}


exports.method = "GET";
exports.path = new RegExp(`^\/${route}\/(.+)$`);

// Do server side things - all $tw objects/functions are available
exports.handler = function(request,response,state) {
	// DecodeURI special characters in params
	const params = decodeUriParams(state);
	
	// Assign params to friendly names
	const topic = params[0], filter = params[1], sender = params[2];
	
	// Reset - delete server iddlers and reset counter
	if (topic === 'resetTiddlers') {
		deleteServerTiddlers();
		reqCounter = 1;
	}
	
	// Values of this request
	const urlValues = { route, topic, filter, sender };
	const tiddlerFromServer = `Server Tiddler #${reqCounter}`;
	
	// Responding with those values
	const jsonResponse = { urlValues, tiddlerFromServer }
	console.dir(jsonResponse);
	
	tiddlerToWiki({
		title: tiddlerFromServer,
		text: `Server added this tiddler\n\n@@color:aqua; Request #${reqCounter++}@@\n\n` +
		'```json\n' +  JSON.stringify(jsonResponse, null, 2)  + '\n```\n\n'
	});

	// Respond with JSON of results for this topic
	state.sendResponse(200, {"Content-Type": "application/json"},
		JSON.stringify(jsonResponse)
	);
}
