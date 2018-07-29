

function formateDate(str) {
    var myDate=new Date(str*1000);
    var year=myDate.getFullYear()+'-';
    var month=(myDate.getMonth()+1 < 10 ? '0'+(myDate.getMonth()+1) : myDate.getMonth()+1) + '-';
    var day=myDate.getDate()+'-';
    var hour=myDate.getHours()+':';
    var minutes=myDate.getMinutes()+'-';
    return year+month+day+hour+minutes;
}