{
  "manifest_version": 2,

  "name": "GTmetrix Analyzer Plugin",
  "description": "This extension will analyze a page using GTmetrix",
  "version": "1.0",

  "browser_action": {
   "default_icon": "icon.png",
   "default_popup": "popup.html"
  },
  "permissions": [
   "activeTab"
   ]
}

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);