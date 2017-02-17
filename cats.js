$(function() {
  $('.summon-cats').on('click', function() {
    console.log('Summoned!');
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(data) {
      var container1 = $('<div>');
      var cats = data['cats'];
      var photo = cats[0].photo;
      var alt = 'Photo of ' + cats[0].name;
      var image1 = $('<img>').attr({
        src: photo,
        alt: alt
      }).appendTo(container1);
      $('#cat1').html(container1);
      var container2 = $('<div>');
      var cats = data['cats'];
      var photo = cats[1].photo;
      var alt = 'Photo of ' + cats[1].name;
      var image2 = $('<img>').attr({
        src: photo,
        alt: alt
      }).appendTo(container2);
      $('#cat2').html(container2);
      var container3 = $('<div>');
      var cats = data['cats'];
      var photo = cats[2].photo;
      var alt = 'Photo of ' + cats[2].name;
      var image3 = $('<img>').attr({
        src: photo,
        alt: alt
      }).appendTo(container3);
      $('#cat3').html(container3);
    });
  });
})
