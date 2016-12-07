
			function time(){
			var times = new Date();
			var hour = times.getHours();
			var minutes = times.getMinutes();
			var seconds = times.getSeconds();
			if(seconds<10)
				{
					seconds = '0'+seconds;
				}
			if(minutes<10)
				{
					minutes = '0'+minutes;
				}
			if(hour<10)
				{
					hour = '0'+hour;
				}
				
			var totalTime = 'Current Time: '+hour+':'+minutes+':'+seconds;
			document.getElementById('time').innerHTML = totalTime;
			setTimeout("time()",300);
}			