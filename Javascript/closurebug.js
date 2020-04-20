function makeFunction(){
	const arr=[]

	for(let i=0; i<5;i++){
		arr.push(function(){
			console.log(i);
		});
	}
	return arr;
}

const fun=makeFunction();
fun[0]();
fun[1]();
fun[2]();
fun[3]();
fun[4]();