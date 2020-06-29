$(function () {
  $('#search-result').hide();
  var posts = [];
  $.get('/api/jekyll/posts.json', function (data) {
    posts = data;
  });
  $('#search').on('keyup', function () {
    var keyword = this.value.toLowerCase();
    var searchResult = [];

    if (keyword.length > 0) {
      console.log(keyword.length);
      $('#search-result').show();
    } else {
      $('#search-result').hide();
    }
    $('.result-item').remove();

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      if (
        post.title.toLowerCase().indexOf(keyword) >= 0 ||
        post.description.toLowerCase().indexOf(keyword) >= 0 ||
        post.category.toLowerCase().indexOf(keyword) >= 0 ||
        post.date.toLowerCase().indexOf(keyword) >= 0
      ) {
        searchResult.push(post);
      }
    }
    if (searchResult.length === 0) {
      $('#search-result').append(
        '<div class="result-item"><div class="description">There is no search result.</div></div>'
      );
    } else {
      for (var i = 0; i < searchResult.length; i++) {
        $('#search-result').append(
          '<a class="card border-bottom result-item p-3" href="' +
            searchResult[i].url + '" style="color: #f74094;">' +
            '<div class="title"> [' + searchResult[i].category + '] ' +
            searchResult[i].title +
            '</div></a>'
        );
      }
    }
  });
});