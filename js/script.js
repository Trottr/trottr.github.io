var ref = new Firebase('https://trottr.firebaseio.com')

function validateEmail(str){
	var re=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	if (re.test(str))
		return true
	else{
		return false
	}
}