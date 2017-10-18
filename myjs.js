var chatStr = "";

function replaceEmojis(){
        chatStr = chatStr.replace(":)", "<img class='emoji'src='Img/smiley.png'/>");
        chatStr = chatStr.replace(":(", "<img class='emoji'src='Img/sad.png'/>");
        chatStr = chatStr.replace(";)", "<img class='emoji'src='Img/wink.png'/>");
        chatStr = chatStr.replace(":'(", "<img class='emoji'src='Img/tear.png'/>");
        chatStr = chatStr.replace(":D", "<img class='emoji'src='Img/happy.png'/>");
        chatStr = chatStr.replace(">:|", "<img class='emoji'src='Img/angry.png'/>");
        chatStr = chatStr.replace("X(", "<img class='emoji'src='Img/dead.png'/>");
        
        chatStr = chatStr.replace("boogie", "******");
        chatStr = chatStr.replace("Boogie", "******");
        chatStr = chatStr.replace("BOOGIE", "******");
        chatStr = chatStr.replace("bass", "****");
        chatStr = chatStr.replace("sole", "****");
        chatStr = chatStr.replace("wololo", "******");
        
}

/*--------------------p1Chat--------------------*/
function changeChatStr(){
        chatStr = document.getElementById("p1Input").value;
        document.getElementById("p1Input").value = "";
        
        /*
        if(chatStr == ":)"){
            chatStr = "<img class='emoji 'src='Img/smiley.png'/>";
        }
        else if (chatStr == ":("){
            chatStr = "<img class='emoji 'src='Img/sad.png'/>";
        }
        
        else if (chatStr == ";)"){
            chatStr = "<img class='emoji 'src='Img/wink.png'/>";
        }
        */
        
        /*
        chatStr = chatStr.replace(":)", "<img class='emoji 'src='Img/smiley.png'/>")
        chatStr = chatStr.replace(":(", "<img class='emoji 'src='Img/sad.png'/>")
        */
        
        replaceEmojis();
}

/*--------------------p2Chat--------------------*/
function changeChatStr2(){
        chatStr = document.getElementById("p2Input").value;
        document.getElementById("p2Input").value = "";
        
        replaceEmojis();
}

/*--------------------chatDisplay--------------------*/
function createChat(chatNum){
    var nDiv = document.createElement("div");
    nDiv.innerHTML = chatStr;
    if (chatNum == 1){
        nDiv.style.backgroundColor = "#AFA";
    }
    else if(chatNum ==2){
        nDiv.style.backgroundColor = "#AAF";

    }
    
    nDiv.style.padding = "10px";
    
    document.getElementById("chatDisplay").appendChild(nDiv);
}

/*--------------------Interractions--------------------*/
document.getElementById("p1Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr();
        createChat(1);
    }
});

document.getElementById("p2Input").addEventListener("keyup", function(ev){
    if(ev.keyCode == 13){
        changeChatStr2();
        createChat(2);
    }
});
