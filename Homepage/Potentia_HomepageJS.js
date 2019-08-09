// JavaScript source code for the Potentia Homepage

$(document).ready(function () {
    randomTip();
});

//Array with 42 random tips for when to get to college
var CollegeTips = [
    "Always go to class.A lot of bloggers will debate this one, but I think it is essential.You never know when the professor will drop a crucial test hint, or give out extra credit for attendance.",
    "If you have to choose between a double major and getting involved on campus, get involved. All the knowledge in the world will not help you if you come out of college with no experience or professional relationships.",
    "ALWAYS back up your files.Google Drive(along with their Backup and Sync tool) makes this easy as can be.With a free plan that includes 15gb of storage(not to mention apps like Docs and Sheets), it is the best option for students.",
    "Make sure your computer is protected against malware.If you have Windows 8 or 10, you should already have Windows Defender(but make sure it is on and up - to - date).For further protection, you can pair that with the free version of Malwarebytes.It also does not hurt to install an ad blocker like Ublock Origin",
    "Learn to do your taxes and your FAFSA yourself, instead of letting your parents do it. Knowing how to handle these things will prepare you for life after college.",
    "Get a bank account with a bank in town. It can be really inconvenient having to wait for Mom to send cash, and it teaches you to manage your own finances.",
    "Get a credit card, and make all your month purchases on it up to 20% of the cards balance. This will help to start building your credit. If you start spending more, or can not pay the balance in full for even one month, tear the card up.",
    "Bring enough clothing to school with you that you can go two weeks between washings. This will save you money in the long run.",
    "Never leave your clothes in a washer after the cycle is over. Be there to take them out a minute before the cycle ends. Not doing this is rude, and people WILL pull your clothes out and set them somewhere.",
    "If you have new colored clothes, wash colors separately from whites the first few times you wear them. Otherwise, toss them all in the same load if they will fit.",
    "Try not to drink too much caffeine. It is really not good for you, and you can get energy by staying well-hydrated, eating healthy foods, and sleeping enough.",
    "If you are having issues with your roommate, talk about them. Do not let them build up to the point where you can not stand each other.",
    "Get a part-time job, preferably doing something that relates to your major. If you can, work in the early morning – you would just be sleeping otherwise. I have found that having a job actually helped with my time management when I first started school.",
    "If you can not find a part-time job that relates to your major, look for a 'warm-body' job  one that allows you to do homework while working. Some examples would be working at the desk of the library or the athletic center.",
    "If your school offers a position that helps with summer orientation for incoming students, apply for it. This kind of job will build your confidence and communication skills like none other.",
    "Get to know your professors. College is just as much about networking as it is about sitting in class. Plus, most of them are bored out of their skulls during office hours.",
    "If you have younger siblings that come to visit, supervise their use of your microwave. Trust me on this one.",
    "Do not bring a car to campus if you do not need one. Many schools have great public transit systems, and Facebook can net you rides when you need them.",
    "If you are bringing your car to campus, buy the parking permit that puts your car closer to you, even if it is a bit more expensive. It will save you a lot of time (and whining).",
    "Live in the campus residence halls your first year if you can. Residence halls are much, much more social than apartments, and you will be involved in a lot more cool things.",
    "Realize that you are an adult now; just because you do not have to go to work for eight hours a day does not mean you should not act like it. Be professional.",
    "When you study, do  not do it in your room. Also, try to use an active study method such as making flashcards or writing your own quizzes. It iss a lot less boring and a lot more effective than just looking over your professor slides.",
    "Getting a tutor does not make you look dumb. Not getting one when you need help does.",
    "Flip-flops in the bathroom. No exceptions.",
    "Freezy Pops from Wal-Mart are a great substitute for fattier desserts.",
    "Take smart notes. Find a note-taking system that works well for you, and focus on learning rather than simply recording the information.",
    "Find out when you can register for classes and do right at that moment. You will thank yourself later when your friends are having to do an extra semester because they could not get into a required class.",
    "Try out as many clubs as you can. Feel no obligation to them if you do not like them. College is about finding out what you love to do.",
    "Do not put your alarm clock anywhere you can reach it. Make yourself get out of bed to turn it off.",
    "If your roommate is not still sleeping, turn on the light immediately after waking up. Light helps you feel more awake and reduces the chances of you going back to bed.",
    "You need a calendar. Google Calendar is probably the best one there is.",
    "Never underestimate the value of a care package from Mom.",
    "Get out and explore your campus. If you have to ask your friends where the main financial office is, you have failed. Same goes for exploring the city your campus is in.",
    "Find out what resources your school offers. Many universities have free tech support centers, health centers, seminars, and more.",
    "Get an internship the summer after your sophomore year. You will forge professional connections early on and make it easier to get another internship the next summer. Graduating with two under your belt will give you a real leg up on the competition.",
    "Keep a journal if you can. It is great to be able to go back and see how you have progressed over the years.",
    "Connect with your school career center; your career advisor will be an invaluable resource in the years to come.",
    "Create a resume if you do not already have one, and have it critiqued by someone who knows what they are doing. Also, create your own personal website to show off your work.",
    "Go to every career fair, even if you have already lined up a summer job. You want to build relationships with recruiters, and they will remember your face if you show up every time.",
    "Take a speech class, even if you do not have to. Communication skills are among the more important things recruiters look for in students.",
    "Be confident, get out of your comfort zone, and try new things. College is the greatest opportunity you will ever have for personal development.",
]

//Saves the tip form the array in a variable
var tip1 = CollegeTips[Math.floor(Math.random() * CollegeTips.length)];
var tip2 = CollegeTips[Math.floor(Math.random() * CollegeTips.length)];
var tip3 = CollegeTips[Math.floor(Math.random() * CollegeTips.length)];

//Inserts the random tip each time you load the page
function randomTip() {
    insertRandomTip1(tip1)
    insertRandomTip2(tip2)
    insertRandomTip3(tip3)
}

/*Creates the elements and places them on the page*/
function insertRandomTip1(tip1) {
    var p = document.createElement("p");
    var tip_text = document.createTextNode("1. " + tip1);
    p.appendChild(tip_text)
    document.getElementById("Tip1_container").appendChild(p);
}
function insertRandomTip2(tip2) {
    var p = document.createElement("p");
    var tip_text = document.createTextNode("2. " + tip2);
    p.appendChild(tip_text)
    document.getElementById("Tip2_container").appendChild(p);
}
function insertRandomTip3(tip3) {
    var p = document.createElement("p");
    var tip_text = document.createTextNode("3. " + tip3);
    p.appendChild(tip_text)
    document.getElementById("Tip3_container").appendChild(p);
}
