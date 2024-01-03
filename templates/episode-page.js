// episodePage
// Episode page content
module.exports = function episodePage(epDate, id, epDesc) {
  'use strict';
  return `<div class="container"><p>Published ${epDate}</p>
<div class="audio">
<iframe src="https://podcasters.spotify.com/pod/show/managers-table/episodes/${id}/embed" height="100%" width="100%" frameborder="0" scrolling="no"></iframe>
</div>
<p>${epDesc}</p></div>`;
};