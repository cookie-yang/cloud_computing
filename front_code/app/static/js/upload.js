$(function(){
var filechooser = document.getElementById('filechooser');
var previewer = document.getElementById('previewer');
var match = document.getElementById('match')

filechooser.onchange = function() {
    var files = this.files;
    var file = files[0];
  //  filechooser.value = '';

    // 接受 jpeg, jpg, png 类型的图片
    if (!/\/(?:jpeg|jpg|png)/i.test(file.type)) {
        alert("please select the image with correct format");
        filechooser.value = '';
        return;}

    var reader = new FileReader();

    reader.onload = function() {
    
        console.log(this.result);

        previewer.src = this.result ;

        // 清空图片上传框的值
        
    };

    reader.readAsDataURL(file);
}   

match.onclick=function(){
   
    console.log("submit event");
            var img = document.getElementById('previewer');
            var fd = new FormData();
            fd.append("label", img);
            console.log(fd)
            $.ajax({
              url: "http://localhost/upload.php",// change to be the backend receiver
              type: "POST",
              data: fd,
              processData: false,  // tell jQuery not to process the data
              contentType: false   // tell jQuery not to set contentType
            }).done(function( data ) {
                console.log("PHP Output:");
                console.log( data );
            });
            return false;


}


});