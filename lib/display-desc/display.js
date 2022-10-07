function showdet(name){
    var friends = {'ayo': `Ayo is a friend that sticks closer than a brother (a sister in our case). Meeting her in 2017 for the first time never struck me as a connection that would redefine my perception about friendship and much more demonstrate it through our relationship. Known for her selfless nature that shines through her service to others, Ayo is a kind-hearted and caring individual who is very resourceful and talented in a lot of areas.
    She is the CEO of ronique events, an event planning enterprise and works as a human resource person with a tech company. Ayo is based in Ottawa, Ontario.`,
                   'yinka':'Hmm, how do I describe this man? Yinka "my guys"! Yinka is a brother that I never knew I needed. Him coming into my life has made me appreciate the essence of brotherhood. He is a wonderful man who fears the Lord in his deeds. I consider him one of the wise men I have had the privilege of meeting in my lifetime.  He works with a building company as a designer, and lives happily in Ottawa, with his wife, Tega Alao.',
                   'iyanu':`Iyanu is another addition of a friend turned sister. This is a relationship that has seen many seasons and has aged well as the longest standing sister-friend relationship I have enjoyed. From sharing beds and many other things in Ilorin to living in proximity to one another in a foreign nation, I'm sure better days lie ahead of us.
                   Iyanu is a lovely, highly intelligent and disciplined woman. Iyanu isn't passionate about too many things but her passion for God is hard to ignore. She is a business analyst by profession and resides in Calgary, Alberta.`,
                   'ope':'Ope and I go way back as students at the University of Lagos. We served together in the same campus fellowship and from there, developed strong bonds as brothers. He has remained a major source of strength to me through his words and manner of life. He serves under a ministry in Lagos, Nigeria where he also resides.',
                   'vic':`Victoria is a beautiful young woman with a strength borne out of experiences bigger than her years. 
                   We both served together as young adults for a year, where our relationship kicked off and has strengthened over time. She's a lover of God and people and is also very humble.
                   She has a confectionery of her own and is currently serving as an NYSC corps member in the city of Ibadan, Nigeria.`,
                   'brian':'Brian is a fine gentleman I met a while back in 2018, someone I have grown to love as a brother. His meek disposition and teachable heart makes him such a wonderful person, with lots of potential. He works in a healthcare tech company and lives in Ottawa, Ontario.',
                   'sore':`Sore is the embodiment of a meek and quiet spirit. Sore's soft spokenness and easy-going nature is very apparent as her character speaks louder than her words do. She's an effortless lover, loyal friend and finds motivation in the people around her. 
                   Sore is also quite adventurous and loves to travel. 
                   She is an accountant and lives in Ottawa, Ontario.`,
                   'gab':'Gabriel has been my day one G since secondary school days. He is a down to earth type of guy, and there can never be a dull moment with him in the room. What you see, is what you get with him. Amongst everything, he is importantly a lover of the Lord. He is a network engineer by profession and resides in Lagos, Nigeria.'
                   };

    // var name = name.toString();
    console.log(friends[name]);
    console.log(name);
    if (name==='ayo' || name==='yinka') {
        if (friends[name] !== document.getElementById('frnds-1').innerHTML){
        display_text("frnds-1","holder-1",name,friends,0);
        unzoom(name);
        }
    }
    if (name==='iyanu' || name==='ope') {
        if (friends[name] !== document.getElementById('frnds-2').innerHTML){
        display_text("frnds-2","holder-2",name,friends,1);
        unzoom(name);
        }
     }
    if (name==='vic' || name==='brian') {
        if (friends[name] !== document.getElementById('frnds-3').innerHTML){
        display_text("frnds-3","holder-3",name,friends,2);
        unzoom(name);
        }
    }
    if (name==='sore' || name==='gab') {
        if (friends[name] !== document.getElementById('frnds-4').innerHTML){
        display_text("frnds-4","holder-4",name,friends,3);
        unzoom(name);
        }
    }
    if (name==='9' || name==='10') {
        document.getElementById("frnds-5").innerHTML = friends[name];
    }

}

function unzoom(name){
    const names = ['ayo','yinka','iyanu','ope','vic','brian','sore','gab'];
    

    var index = names.indexOf(name);
    names.splice(index,1);

    for (let i = 0; i < names.length; i++) {
        document.getElementById(names[i]).style.transform = "scale(1)";
        document.getElementById(names[i]).style.filter = "brightness(100%)";
        document.getElementById(names[i]).innerHTML = "";
      }
      
}

function display_text(text_content,img_holder,name,friends,index){
    document.getElementsByClassName("holder").item(index).style.top = 0;
    document.getElementsByClassName("holder").item(index).classList.remove('text-styl');
    document.getElementById(text_content).focus();
    // document.getElementById(img_holder).style.opacity = 0.3;
    document.getElementsByClassName("holder").item(index).classList.add('fade-in-text');
          
          setTimeout(() => {
            document.getElementsByClassName("holder").item(index).classList.remove('fade-in-text');
          }, 5500)
    document.getElementById(text_content).innerHTML = friends[name];
    document.getElementById(name).style.transform = "scale(1.2)";
    document.getElementById(name).style.filter = "brightness(50%)";

    const indexes = [0,1,2,3];

    for (let i = 0; i < indexes.length; i++) {
        if (index === indexes[i]){
            continue;
        }
        if (document.getElementById(`frnds-${i+1}`).innerHTML.includes("Wanna") === false){
        console.log(indexes[i]);
        document.getElementsByClassName("holder").item(indexes[i]).classList.add('fade-out-text');
        
          setTimeout(() => {
            document.getElementsByClassName("holder").item(indexes[i]).classList.remove('fade-out-text');
            document.getElementById(`frnds-${i+1}`).innerHTML = "";
          }, 5000);
      }
    }
}