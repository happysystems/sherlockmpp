var filterchars = "qwertyuiopasdfghjklzxcvbnm".split('')
var badwords = ["anal","anus","arrse","arse","asses","assfucker","assfukka","asshole","assholes","asswhole","ballbag","balls","ballsack","bastard","beastial","beastiality","bellend","bestial","bestiality","biatch","bitch","bitcher","bitchers","bitches","bitchin","bitching","bloody","blowjob","blowjobs","boiolas","bollock","bollok","boner","boob","boobs","booobs","boooobs","booooobs","booooooobs","breasts","buceta","bugger","bum","butt","butthole","buttmuch","buttplug","cawk","chink","cipa","clit","clitoris","clits","cnut","cock","cockface","cockhead","cockmunch","cockmuncher","cocks","cocksuck","cocksucked","cocksucker","cocksucking","cocksucks","cocksuka","cocksukka","cok","cokmuncher","coksucka","coon","cox","crap","cum","cummer","cumming","cums","cumshot","cunilingus","cunillingus","cunnilingus","cunt","cuntlick","cuntlicker","cuntlicking","cunts","cyalis","cyberfuc","cyberfuck","cyberfucked","cyberfucker","cyberfuckers","cyberfucking","damn","dick","dickhead","dildo","dildos","dink","dinks","dirsa","dlck","doggin","dogging","donkeyribber","doosh","duche","dyke","ejaculate","ejaculated","ejaculates","ejaculating","ejaculatings","ejaculation","ejakulate","fag","fagging","faggitt","faggot","faggs","fagot","fagots","fags","fanny","fannyflaps","fannyfucker","fanyy","fatass","fcuk","fcuker","fcuking","feck","fecker","felching","fellate","fellatio","fingerfuck","fingerfucked","fingerfucker","fingerfuckers","fingerfucking","fingerfucks","fistfuck","fistfucked","fistfucker","fistfuckers","fistfucking","fistfuckings","fistfucks","flange","fook","fooker","fuck","fucka","fucked","fucker","fuckers","fuckhead","fuckheads","fuckin","fucking","fuckings","fuckingshitmotherfucker","fuckme","fucks","fuckwhit","fuckwit","fudgepacker","fuk","fuker","fukker","fukkin","fuks","fukwhit","fukwit","fux","gangbang","gangbanged","gangbangs","gaylord","gaysex","goatse","goddamn","goddamned","hardcoresex","heshe","hoar","hoare","hoer","homo","hore","horniest","horny","hotsex","jackoff","jap","jism","jiz","jizm","jizz","kawk","knob","knobead","knobed","knobend","knobhead","knobjocky","knobjokey","kock","kondum","kondums","kum","kummer","kumming","kums","kunilingus","labia","lust","lusting","masochist","masterbate","masterbation","masterbations","masturbate","mofo","mothafuck","mothafucka","mothafuckas","mothafuckaz","mothafucked","mothafucker","mothafuckers","mothafuckin","mothafucking","mothafuckings","mothafucks","motherfuck","motherfucked","motherfucker","motherfuckers","motherfuckin","motherfucking","motherfuckings","motherfuckka","motherfucks","muff","mutha","muthafecker","muthafuckker","muther","mutherfucker","nazi","nigga","niggah","niggas","niggaz","nigger","niggers","nob","nobhead","nobjocky","nobjokey","numbnuts","nutsack","orgasim","orgasims","orgasm","orgasms","pawn","pecker","penis","penisfucker","phonesex","phuck","phuk","phuked","phuking","phukked","phukking","phuks","phuq","pigfucker","pimpis","piss","pissed","pisser","pissers","pisses","pissflaps","pissin","pissing","pissoff","poop","porn","porno","pornography","pornos","prick","pricks","pron","pube","pusse","pussi","pussies","pussy","pussys","rectum","retard","rimjaw","rimming","sadist","schlong","screwing","scroat","scrote","scrotum","semen","sex","shag","shagger","shaggin","shagging","shemale","shit","shitdick","shite","shited","shitey","shitfuck","shitfull","shithead","shiting","shitings","shits","shitted","shitter","shitters","shitting","shittings","shitty","skank","slut","sluts","smegma","smut","snatch","spac","spunk","teets","teez","testical","testicle","tit","titfuck","tits","titt","tittiefucker","titties","tittyfuck","tittywank","titwank","tosser","turd","twat","twathead","twatty","twunt","twunter","vagina","viagra","vulva","wang","wank","wanker","wanky","whoar","whore","willies","willy","xrated","xxx"];
module.exports.run = (str) => {
	var split = str.split(' ');
	for (var i = 0; i < split.length; i++) {
		var searchword = split[i].normalize('NFKD').toLowerCase().split('').filter(a => filterchars.includes(a)).join('')
		var foundcuss = badwords.find(a => searchword.includes(a));
		if (foundcuss) {
			//var toremove = [];
			split[i] = split[i].normalize('NFKD').toLowerCase();
			/*
			split[i].split('').forEach(char => {
				var letter = char.toLowerCase();
				if (!filterchars.includes(letter) || toremove.includes(char)) return;
				toremove.push(char);
			});
			*/
			filterchars.forEach(char => {
				split[i] = split[i].replaceAll(char, '#')
			})
		};
	};
	return split.join(' ')
};
module.exports.name = "cussing"
