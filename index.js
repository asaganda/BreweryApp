$(document).ready(function() {
  $('button').click(function() {
    // loading icon to show that something is coming
    $('<i class="fa fa-3x fa-spinner fa-pulse"/>').appendTo('div ol');
    // geolocation
    navigator.geolocation.getCurrentPosition(geoLocation);
    function geoLocation(position) {
      var lat   = position.coords.latitude;
      var long  = position.coords.longitude;
    // remove spinner so data can be loaded
    $('.fa').remove();
    // ajax request for api data
      $.ajax({
          url: 'http://api.brewerydb.com/v2/search/geo/point?lat=' +lat+ '&lng=' +long+ '&radius=20&key=c68924590945efd63a0e9d189ffca38c',
          type: 'GET',
          data: {},
          dataType: 'json',
          success: function(data) {

            // console.log(data);
          
            for (var i in data.data) {
            
              $("ol").append("<li>"+data.data[i].brewery.name+"</li>");

            };
          }
      });
    };
  });
});