// JS here
Parse.initialize("iPUt4JPUpzZcR80d8oMsoogQ7FYcqsSEfauAwLyo","iBUtvGbDTzg7GaDlhBSrdADFQNPGdZrKFhH8tLCy"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
//these two bits are individual to get correct code for my project go app status>settings>core settings> then but in the app id to the first ""


//NOT SECURE IN ANY WAY !! , should be fine for this type of project
Parse.serverURL = 'https://parseapi.back4app.com/';
(function(){
    'use strict'

    
    const newBtn = document.getElementById('newbtn') //gets the add a friend button from the footer
    const editBtns = document.querySelectorAll('.fa-edit');
    const addFriendForm = document.getElementById('add-friend');
    const editFriendForm = document.querySelector('#edit-friend');
    const friendList = document.querySelector('main ol')  //goes to get main ordered list with all list elements


    newBtn.addEventListener('click',function(event){ //sets up opening and closing of the add friend form
        event.preventDefault();
        addFriendForm.className = "add-friend-onscreen";
    })
    addFriendForm.addEventListener('submit',function(event){
        event.preventDefault();
        addFriendForm.className = "add-friend-offscreen";
    })

    for(let i=0;i<editBtns.length;i++){
        editBtns[i].addEventListener('click',function(event){
            event.preventDefault();
            editFriendForm.className = "edit-friend-onscreen";
        })
    }
    editFriendForm.addEventListener('submit',function(event){
        event.preventDefault();
        editFriendForm.className = "add-friend-offscreen";
    })


//adds data from the B4A website
//check docs>guides >backend as a service guides and 
    async function displayFriends(){
        //Friends is back4App class
        const friends = Parse.Object.extend('Friends');
        const query = new Parse.Query(friends); 
        const results = await query.ascending('lname').find();
        //console.log(results);  //results is an array of stuff
        results.forEach(function(eachFriend){
            const id = eachFriend.id;
            const lname = eachFriend.get('lname');
            const fname = eachFriend.get('fname');
            const email = eachFriend.get('email');
            const facebook = eachFriend.get('facebook');
            const twitter = eachFriend.get('twitter');
            const instagram = eachFriend.get('instagram');
            const linkedin  = eachFriend.get('linkedin');
            //loops through each freind and puts the data intp vars

            const theListItem = document.createElement('li'); //ads list item for each friend like cards in the html
            theListItem.setAttribute('id',`r-${id}`); // r- because ids in html cant start with numbers 

            theListItem.innerHTML = `
            <div class="name">
                 ${fname} ${lname}
            </div>
            <div class="email">
                <i class="fas fa-envelope-square"></i> ${email}
            </div>
            <div class="social">
                <a href="${facebook}"><i class="fab fa-facebook-square"></i></a>
                <a href="${twitter}"><i class="fab fa-twitter-square"></i></a>
                <a href="${instagram}"><i class="fab fa-instagram"></i></a>
                <a href="${linkedin}"><i class="fab fa-linkedin"></i></a>
            </div>
            <i class="fas fa-edit"></i>
            <i class="fas fa-times-circle"></i>
            `;
            friendList.append(theListItem);  // after each list item is created, its added to the page

        })
    }
    displayFriends();
}());