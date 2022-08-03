function get_Data(){
    document.write("<h1>CONFIRMED!</h1><h2>You entered the following data:</h2>");
        var formData = location.search;

        formData = formData.substring(1, formData.length);
        while (formData.indexOf("+") != -1) {
            formData = formData.replace("+", " ");
        }
        
        formData = unescape(formData);
        var formArray = formData.split("&");
        for (var i = 0; i < formArray.length; ++i) {
            document.writeln(formArray[i] + "<br />");
        }
}

get_Data();