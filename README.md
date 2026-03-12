# saveUrls
Chrome Extension designed to help users manage their browser sessions.
It allows you to export all currently open tabs into a structured JSON file and restore them later with a single click.

# Features
- Smart Export: Saves all open tab titles and URLs into a formatted JSON file.
- Timestamped Backups: Automatically names files as url_YYYYMMDD.json for easy organization.
- Background Restore: Opens saved links in background tabs to keep your workflow uninterrupted.
- Clean Data: Only stores essential info (title and url), keeping your backup files tiny.

# How it Works
Exporting Tabs
When you click the Export button, the extension:
- Queries all active tabs using the chrome.tabs API.
- Maps the data into a JSON object.
- Creates a temporary Blob and triggers a download.

Importing Tabs
When you upload a previously saved .json file:
- A FileReader reads the file content.
- JSON.parse() converts the text back into executable objects.
- chrome.tabs.create iterates through the list to restore your session.

# JSON Structure
The exported file follows this format:

<pre>
[
  {
    &quot;title&quot;: &quot;Google&quot;,
    &quot;url&quot;: &quot;https://www.google.com&quot;
  },
  {
    &quot;title&quot;: &quot;GitHub&quot;,
    &quot;url&quot;: &quot;https://github.com&quot;
  }
]
</pre>

# Technical Stack
- Chrome Extension API (Manifest V3).
- HTML5/CSS3: For the popup interface.

# License
This project is open-source. Feel free to fork and modify!
