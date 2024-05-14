(function(){
    'use strict'
    //json data saved here
   const jsonData = [
        {
          "Name": "Dune",
          "Reason": "Amanda said add dune to the list then Anna remembered the game",
          "CreatedTime": "April 28, 2024 5:14 PM",
          "WhoLostTheGame": "Amanda"
        },
        {
          "Name": "Started experiment",
          "Reason": "Decided to track game losses as data",
          "CreatedTime": "April 16, 2024 10:12 AM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Posture",
          "Reason": "Associated game with good posture and thought about my posture",
          "CreatedTime": "April 16, 2024 4:23 PM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Lost the blend",
          "Reason": "We ran out of a pepper, garlic, and salt seasoning blend so I said I lost the blend",
          "CreatedTime": "April 16, 2024 8:26 PM",
          "WhoLostTheGame": "Amanda, Isabella"
        },
        {
          "Name": "Hand list",
          "Reason": "Made a list of hand remaindersvehicles reminded me of the game",
          "CreatedTime": "April 17, 2024 2:28 PM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Picnic day show",
          "Reason": "Thought about getting tickets to the picnic day show then remembered this list of things to do including get concert tickets",
          "CreatedTime": "April 17, 2024 4:34 PM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Get wacked",
          "Reason": "Amanda wanted to wack me with a blue stretchy thing then she thought about how losing",
          "CreatedTime": "April 17, 2024 6:32 PM",
          "WhoLostTheGame": "Amanda"
        },
        {
          "Name": "Crazy arm",
          "Reason": "George told me not to forget the crazy arm and the word forget reminded Amanda",
          "CreatedTime": "April 17, 2024 7:33 PM",
          "WhoLostTheGame": "Amanda"
        },
        {
          "Name": "Your mom",
          "Reason": "Amanda asked where her embroidery hoop was and I said in her pants ( the ones she was working on) and I said in your mom's pants",
          "CreatedTime": "April 17, 2024 10:03 PM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Broken burner",
          "Reason": "Amanda touched the stove to check if its hot",
          "CreatedTime": "April 18, 2024 7:14 PM",
          "WhoLostTheGame": "Amanda, Isabella"
        },
        {
          "Name": "Posture",
          "Reason": "I was slouching",
          "CreatedTime": "April 19, 2024 4:51 PM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Theres a leak in the boat",
          "Reason": "That one scene from cloudy with a chance of meat where there's a leak in the boat",
          "CreatedTime": "April 21, 2024 6:13 PM",
          "WhoLostTheGame": "Amanda"
        },
        {
          "Name": "Data processing",
          "Reason": "George was talking about information class those made nodes out of what Netflix categories were connected to eachother",
          "CreatedTime": "April 21, 2024 9:46 PM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Lost needle",
          "Reason": "Lost my needle and the game",
          "CreatedTime": "April 22, 2024 10:31 PM",
          "WhoLostTheGame": "Amanda"
        },
        {
          "Name": "Burrito",
          "Reason": "Thought about eating the same thing daily then though about losing the game daily",
          "CreatedTime": "April 23, 2024 12:47 PM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Posture",
          "Reason": "Thought about posture sitting on the stairs",
          "CreatedTime": "April 23, 2024 2:56 PM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Lost game anna",
          "Reason": "Do I take games too far? Anna lost",
          "CreatedTime": "April 24, 2024 7:57 PM",
          "WhoLostTheGame": "Anna"
        },
        {
          "Name": "You'll stop making noises when your dead",
          "Reason": "Someone told Amanda her last words would be i just lost the game",
          "CreatedTime": "April 25, 2024 9:29 AM",
          "WhoLostTheGame": "Amanda"
        },
        {
          "Name": "Tinder",
          "Reason": "I said imma say my favorite game and caitlen said she lost the game",
          "CreatedTime": "April 26, 2024 2:44 PM",
          "WhoLostTheGame": "Caitlen"
        },
        {
          "Name": "Email",
          "Reason": "Amanda said remind me to send a really important email when we got back from our walk so I reminded her to lose the game",
          "CreatedTime": "April 26, 2024 7:59 PM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Biting",
          "Reason": "Something bit Amanda and she remembered when she got bit by a person then list the game",
          "CreatedTime": "April 27, 2024 11:00 AM",
          "WhoLostTheGame": "Amanda"
        },
        {
          "Name": "Blue book",
          "Reason": "I wrote on my hand that I needed to remember a blue book for Thursday then I remembered to lose the game",
          "CreatedTime": "April 29, 2024 6:24 AM",
          "WhoLostTheGame": "Isabella"
        },
        {
          "Name": "Export Data",
          "Reason": "Exported data for project and lost the game",
          "CreatedTime": "April 30, 2024 8:25 AM",
          "WhoLostTheGame": "Isabella"
        }
      ]
      const namesContainer = document.getElementById('namesContainer');

      // Loop through the JSON data and create a div for each name
      jsonData.forEach(reasonData => {
          // Create a div element for the name
          const nameDiv = document.createElement('div');
          nameDiv.classList.add('name');

          // Set the text content to the "Name" part of the reason data
          nameDiv.textContent = reasonData.Name;

          // Append the name div to the container
          namesContainer.appendChild(nameDiv);
      });
  })();
    