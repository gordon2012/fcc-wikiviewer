$('#search').on('click', () => {
  let terms = $('#query').val().split(' ').join('+');
  $('.my-new-list').remove();
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php',
    jsonp: 'callback',
    dataType: 'jsonp',
    data: {
      action: 'query',
      list: 'search',
      srsearch: terms,
      format: 'json'
    },
    xhrFields: { withCredentials: true },
    success: (data) => {
      let items = [];
      $.each(data.query.search, (key, val) => {
        const link = '<a href="http://en.wikipedia.org/wiki/' + val.title.replace(new RegExp(' ', 'g'), '_') + '" target="_blank">' + val.title + '</a>';
        items.push('<li class="green"><h4>' + key + ': ' + link + '</h4><p>'+ val.snippet +'</p></li>');
      });
      $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
      }).appendTo(".well");
      console.log(data);
    }
  });
});


function doSearch() {
  alert("yo");
}
