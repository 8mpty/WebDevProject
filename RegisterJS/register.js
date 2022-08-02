function subClick(){
    if(formValid()){
        alert("Info Retrieved");
        return true;
    }else return false;
}

function formValid(){
    flag = true;

    if(document.reg_form.name.value == ""){
        alert("Name Please");
        flag = false;
    }

    return flag;
}