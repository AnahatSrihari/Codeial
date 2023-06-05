const queue = require('../config/kue');
// require the comments mailer
const commentsMailer = require('../mailers/comments_mailer');
// here in que - 'emails' is name of the function
queue.process('emails', function(job, done){
    console.log('emails worker is processing a job ', job.data);

    commentsMailer.newComment(job.data);

    done();
});
