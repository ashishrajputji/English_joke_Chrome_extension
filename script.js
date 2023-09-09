a();
async function a(){
	await fetch("https://icanhazdadjoke.com/slack",{
		method: 'GET'
	})
	.then(data =>data.json()
	)
	.then(data =>{
		
		const joke =  data.attachments[0].text;
		document.getElementById('p').innerHTML = joke;
	})
	.catch(error=> {
		console.log(error);
		document.getElementById('p').innerHTML = "Unable to fetch ";
	});
}

