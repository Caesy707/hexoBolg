export default{
	getcurrtime
}

async function addZero(s) {
		return s < 10 ? ('0' + s) : s;
}


async function getcurrtime(){
	var date = new Date();
	//年 getFullYear()：四位数字返回年份
	var year = date.getFullYear();  //getFullYear()代替getYear()
	//月 getMonth()：0 ~ 11
	var month = date.getMonth() + 1;
	//日 getDate()：(1 ~ 31)
	var day = date.getDate();
	//时 getHours()：(0 ~ 23)
	var hour = date.getHours();
	//分 getMinutes()： (0 ~ 59)
	var minute = date.getMinutes();
	var time = year + '-' + addZero(month) + '-' + addZero(day) + ' ' + addZero(hour) + ':' + addZero(minute);
	return time;
}
