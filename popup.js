
document.getElementById("button1").addEventListener("click", titleAndUrl, false);
document.getElementById("button2").addEventListener("click", onlyUrl, false);

function titleAndUrl() {
	
	//get all the tabs info
	let tabs = chrome.tabs.query({}, function(tabs) {
		
		tabs.forEach(function(tab) {

			let p = document.createElement("p");
			p.innerHTML = `${tab.title}: ${tab.url}`;
			document.getElementById("data").appendChild(p);
			
		});
	});
	
};

function onlyUrl() {
	
	//get all the tabs info
	let tabs = chrome.tabs.query({}, function(tabs) {
		
		tabs.forEach(function(tab) {

			let p = document.createElement("p");
			p.innerHTML = tab.url;
			document.getElementById("data").appendChild(p);
			
		});
	});
	
};