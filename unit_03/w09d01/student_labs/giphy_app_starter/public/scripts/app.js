$(function() {
  $('button.get-gif').on('click', ($event) => {
    $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
      .done(data => $('img.image-jumbotron').attr('src', data.data.image_url));
  });
});
