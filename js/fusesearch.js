$(function() {
  function start(questions) {
    var $inputSearch = $('#inputSearch'),
        $result = $('#results'),
        fuse;

    function search() {
      var r = fuse.search($inputSearch.val());
      $result.empty();
      $.each(r, function() {
        $result.append('<li class="result-item">' + this.title + ', <span>' + this.author + '</span></li>');
      });
    }

    function createFuse() {
      var keys = [];
      fuse = new Fuse(questions, {
        keys: keys,
        caseSensitive: isCaseSensitive
      });
    }

    $inputSearch.on('keyup', search);

    createFuse();
  }

  $.getJSON('../data/questions.json', function(data) {
     start(data);
  });

});