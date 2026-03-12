// DOWNLOAD
document.getElementById("downloadButton").addEventListener("click", downloadUrl);

async function downloadUrl() {
	const tabs = await chrome.tabs.query({});
	
	// build json structure
	let data = tabs.map(tab => ({
		title: tab.title,
		url: tab.url
	}));

	const jsonData = JSON.stringify(data, null, 2);
	
	downloadJson(jsonData);
}

function downloadJson(data) {
	let blob = new Blob([data], {type: "application/json"});
	let url = URL.createObjectURL(blob);

	let a = document.createElement("a");
	a.href = url;
	a.download = `urls_${getFormattedDate()}.json`;
	a.click();

	setTimeout(() => URL.revokeObjectURL(url), 100);
}

function getFormattedDate() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}${mm}${dd}`;
}

// UPLOAD
document.getElementById("uploadButton").addEventListener("click", () => {
    document.getElementById("uploadFile").click();
});

document.getElementById("uploadFile").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const tabsData = JSON.parse(e.target.result);
            reopenTabs(tabsData);
        } catch (err) {
            console.error("Errore nel parsing del file JSON:", err);
            alert("Il file caricato non è un backup valido.");
        }
    };
    reader.readAsText(file);
});

function reopenTabs(tabsList) {
    
    tabsList.forEach(tab => {
        chrome.tabs.create({
            url: tab.url,
            active: false // background tab
        });
    });
}
