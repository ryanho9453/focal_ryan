/*jshint browser: true, devel: true, jquery: true*/
//$("#select-file").change(function(){
//    alert("select file");
//    var file = ("#select-file")[0].files[0];
//    var filename = file.name;
//    var filesize = file.size;
//    alert("Uploading: "+fileName+" @ "+fileSize+"bytes");
//});


$(function() {
    $(".drop-zone").on('dragover dropleave drop' , function(e){
        e.preventDefault();
    });
    
    
    $(".drop-zone").on({
        dragover: function(){
            $(this).addClass('drag-over');    
            
        },
        dragleave: function(){
            $(this).removeClass('drag-over');    
            
        },
        
        drop: function(e){
            this.className = 'drop-zone';
//            console.log(e.originalEvent.dataTransfer.files);
//            upload(e.originalEvent.dataTransfer.files);
            show_files_info(e.originalEvent.dataTransfer.files);
            upload_files(e.originalEvent.dataTransfer.files);
        }
        
    });
    
    function show_files_info(files) {    
        for (var i = 0; i < files.length; i++ ){
            var filename = files[i].name;

            var para = $('<p></p>');
            para.text(filename + ' uploaded');
            $("#files-info").append(para);   
        
        }
    }
    
    function upload_files(files) {
        var formData = new FormData();
        
        for (var i = 0; i < files.length; i++){
            var file = files[i];
            formData.append('news', file);    
        }
        
        $.ajax({
            url: 'http://localhost:9453/upload',
            data: formData,
            type: 'POST',
            contentType: false,
            processData: false,
            success: function(){
                console.log('uploaded');
                
            }
        });
    }
    
});



// FileList {0: File(17277), 1: File(6020), length: 2}
//
// 0:File(17277) 
// {name: "starbucks.png", lastModified: 1535778050108, lastModifiedDate: Sat Sep 01 2018 13:00:50 GMT+0800 (台北標準時間), webkitRelativePath: "", size: 17277, …}
//
// 1:File(6020) 
// {name: "netflix.jpeg", lastModified: 1536040519653, lastModifiedDate: Tue Sep 04 2018 13:55:19 GMT+0800 (台北標準時間), webkitRelativePath: "", size: 6020, …}
//
// length:2




//function upload(files) {
//    var formdata = new FormData(),
//        xhr = new XMLHttpRequest(),
//        x;
//    
//    for (x = 0; x < files.length; x = x + 1 )
//    
//}
//
//
