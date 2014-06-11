 $(document).ready(function(){
  window.dancers = [];

  $('button.random').on('click', function () {
    var searchTerm = encodeURIComponent($('.search').val());
    searchTerm = 'http://api.giphy.com/v1/gifs/search?q='+searchTerm+'&api_key=dc6zaTOxFJmzC';
    $.getJSON(searchTerm, function (data) {
      var url = data.data[0].images.fixed_height.url;
      var dancer = new RandomDancer(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 100,
        url
      );
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
    });
  });

  $('.lineUpButton').on('click', function () {
    console.log('Works');
    for (var i = 0; i < window.dancers.length;i++){
      window.dancers[i].lineup();
    }
  });

  setInterval(function(){
    var other,current,distance;
    for(var i=0;i<window.dancers.length;i++){
      current = window.dancers[i];
      for(j=i+1;j<window.dancers.length;j++){
        other = window.dancers[j];
        distance = Math.sqrt(Math.pow((other.top-current.top), 2)+Math.pow((other.left-current.left),2));
        if (distance <100){
          if(current instanceof BouncyDancer){
            current.leftIncr = current.leftIncr*(-1);
          }
          if(other instanceof BouncyDancer){
            other.leftIncr = other.leftIncr*(-1);
          }
        }

      }
    }
  },200 );
  $('.addDancerButton').on('click', function(){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the 'data-dancer-maker-function-name' attribute of a
     * class='addDancerButton' DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerFunctionName = $(this).data('dancer-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerFunction = window[dancerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 100
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});

