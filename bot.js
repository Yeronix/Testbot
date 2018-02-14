var Discord = require('discord.io');

var logger = require('winston');
var auth = require('./auth.json');


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';


// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});


bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);

        switch(cmd) {
            // !rage
            case 'rage':
                bot.sendMessage({ to: channelID, message: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' });
            break;
			// !gold
			case 'gold':
                bot.sendMessage({ to: channelID, message: 'I am the golden god!' });
            break;
			// !wow
			case 'wow':
                bot.sendMessage({ to: channelID, message: 'http://ksassets.timeincuk.net/wp/uploads/sites/55/2017/07/owen-wilson-wow-920x584.jpg' });
            break;
			// !crypto
			case 'crypto':
                bot.sendMessage({ to: channelID, message: 'https://thumbs.dreamstime.com/z/businessman-money-funny-displeased-count-holding-isolated-white-background-employee-young-man-small-profit-bankruptcy-56591282.jpg' });
            break;
            default:
                bot.sendMessage({ to: channelID, message: 'Unknown command.' });
        }
    }
})

