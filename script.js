$('#search').on('click', () => {
  // alert("yo");

  // alert($("#query").val());

  // const query = $('#query').val().replace(new RegExp(' ', 'g'), '%20');

  // query = query.replace(new RegExp(' ', 'g'), '%20');

  // let terms = $('#query').val().split(' ');

  // let query = terms.join('+');


  // const query = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + $('#query').val().split(' ').join('+');

  let terms = $('#query').val().split(' ').join('+');

  // console.log(query);

  //   $.getJSON(query, (data) => {
  //     let items = [];
  //     $.each(data, (key, val) => {
  //       items.push('<li>' + val +'</li>');
  //     });
  //     $("<ul/>", {
  //       "class": "my-new-list",
  //       html: items.join("")
  //     }).appendTo("body");
  //   });

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
        items.push('<li class="green"><h4>' + key + ': ' + val.title + '</h4><p>'+ val.snippet +'</p></li>');
      });
      $("<ul/>", {
        "class": "my-new-list",
        html: items.join("")
      }).appendTo(".well");
      console.log(data);

    }
  });

  /*
  https://en.wikipedia.org
  /w/api.php?action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein
  */

});


function doSearch() {
  alert("yo");
}
