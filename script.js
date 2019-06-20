var passwords = ['password123', 'qwertyuiop', 'admin2015', 'trustno1', 'letmein6969'];
var indexOld;
var index = Math.floor((Math.random() * passwords.length));
var password = passwords[index];
var characters = [];
var counter = 0;
	
var interval = setInterval(function(){
		for(interval = 0; interval < counter; interval++) {
			characters[interval] = password.charAt(interval);
		}
		for(interval = counter; interval < password.length; interval++) {
			characters[interval] = Math.random().toString(36).charAt(2);
		}
		$('.password').text(characters.join(''));
	}, 25);
	

function hack() {
	counter++;
	if(counter === password.length){
		$('.granted, .rerun').removeClass('hidden');
	}
}
$(window).on('keydown', hack);
$('.password').on('click', hack);


$('.rerun').on('click', function() {
	//prevent from displaying the same password two times in a row
	indexOld = index; 
	do {
		index = Math.floor((Math.random() * passwords.length));
	} while(index === indexOld);
	
	$(".granted, .rerun").addClass('hidden');
	password = passwords[index];
	characters = [];
	counter = 0;
});

//keyboard events won't fire if the iframe isn't selected first in Full Page view
$('.start').on('click', function() {
	$(this).addClass('hidden');
	$('.info p:last-child, .password').removeClass('hidden');
});