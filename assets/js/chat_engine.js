class ChatEngine{
    constructor(chatBoxId, userEmail){
        this.chatBox = $(`#${chatBoxId}`);
        this.userEmail = userEmail;
        // Initiate a connection 
        this.socket = io.connect('http://localhost:5000');

        if (this.userEmail){
            this.connectionHandler();
        }

    }

// WILL haveing the to and fro connection to observer and user
    connectionHandler(){
        this.socket.on('connect', function(){
            console.log('connection established using sockets...!');
        });
    }
}
