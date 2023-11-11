document.getElementById('uploadButton').addEventListener('click', function() {
    var files = document.getElementById('fileUpload').files;
    if (files.length > 0) {
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            formData.append('file' + i, files[i]);
        }

        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/upload', true);
        xhr.onload = function() {
            if (this.status == 200) {
                alert('Files uploaded successfully.');
            } else {
                alert('File upload failed.');
            }
        };
        xhr.send(formData);
    } else {
        alert('No files selected.');
    }
});