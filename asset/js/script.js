$(document).ready(function() { 
var input = $("#input"); 
var searchKey =$("#search-key");
var submt = $("#submit");
var images = $("#images");
var i = 0;



submt.on("click", function(){

    //var btn0 ="<button id='key-1' class='ligne'>"

    var btn0 ="<button id='";
    
    var btn2 = "key-"+i;
    
    var btn3 = "' class='ligne'>"

    var btn4 = "</button>"
    var button = btn0+btn2+btn3+input.val()+btn4;
    searchKey.append(button);
    i = i+1;
});

$(document).on('click', '.ligne', function(){ 
    images.empty();
    var key = $(this).text();
    var queryurl = "https://api.giphy.com/v1/gifs/search?q="+key+"&api_key=JSTT5qy9VkZMi3pfQXbUaKduSzeky06B&limit=10"
    $.ajax({
        url:queryurl,
        type: 'GET',
        success: function(response){
            console.log(response);

            var test = response.data.length;
            for(var i = 0; i < response.data.length; i++){
                var gif = response.data[i].images.original.url;
                var still = response.data[i].images.original_still.url;

                var imgAnim = '<img id="game-anim-' + i + '" class="anim" data-id="game-still-' + i + '" src="' + gif + '" alt="' + i + '">'
                var imgStill = '<img id="game-still-' + i + '" class="still" data-id="game-anim-' + i + '" src="' + still + '" alt="' + i + '">'

                images.append(imgAnim);
                images.append(imgStill);
            }
        }
    });
})


$(document).on('click', '.still', function(){

    var id = $(this).attr('data-id');
    id = '#' + id;
    console.log(id);
    $(this).removeClass("still");
    $(this).addClass("anim");
    $(id).removeClass("anim");
    $(id).addClass("still");
});
// $(document).on('click', '.anim', function(){
//     console.log(this);
// });
    
});