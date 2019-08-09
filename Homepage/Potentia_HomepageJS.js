// JavaScript source code for the Potentia Homepage

$(document).ready(function () {
    randomTip();
});
//Saves the tip form the array in a variable
var tip1 = CollegeTips[Math.floor(Math.random() * CollegeTips.length)];
var tip = CollegeTips[Math.floor(Math.random() * CollegeTips.length)];
var tip = CollegeTips[Math.floor(Math.random() * CollegeTips.length)];

//Inserts the random tip each time you load the page
function randomTip() {
    insertRandomTip1(tip1);
}
//Array with 42 random tips for when to get to college
var CollegeTips = [
    "Always go to class.A lot of bloggers will debate this one, but I think it’s essential.You never know when the professor will drop a crucial test hint, or give out extra credit for attendance.",
    "If you have to choose between a double major and getting involved on campus, get involved.All the knowledge in the world won’t help you if you come out of college with no experience or professional relationships.",
    "ALWAYS back up your files.Google Drive(along with their Backup and Sync tool) makes this easy as can be.With a free plan that includes 15gb of storage(not to mention apps like Docs and Sheets), it’s the best option for students.",
    "Make sure your computer is protected against malware.If you have Windows 8 or 10, you should already have Windows Defender(but make sure it’s on and up - to - date).For further protection, you can pair that with the free version of Malwarebytes.It also doesn’t hurt to install an ad blocker like Ublock Origin",
    "Learn to do your taxes and your FAFSA yourself, instead of letting your parents do it. Knowing how to handle these things will prepare you for life after college.",
    "Get a bank account with a bank in town. It can be really inconvenient having to wait for Mom to send cash, and it teaches you to manage your own finances.",
    "Get a credit card, and make all your month’s purchases on it up to 20% of the card’s balance. This will help to start building your credit. If you start spending more, or can’t pay the balance in full for even one month, tear the card up.",
    "Bring enough clothing to school with you that you can go two weeks between washings. This will save you money in the long run.",
    "Never leave your clothes in a washer after the cycle is over. Be there to take them out a minute before the cycle ends. Not doing this is rude, and people WILL pull your clothes out and set them somewhere.",
    "If you have new colored clothes, wash colors separately from whites the first few times you wear them. Otherwise, toss ’em all in the same load if they’ll fit.",
    "Try not to drink too much caffeine. It’s really not good for you, and you can get energy by staying well-hydrated, eating healthy foods, and sleeping enough.",
    "If you’re having issues with your roommate, talk about them. Don’t let them build up to the point where you can’t stand each other.",
    "Get a part-time job, preferably doing something that relates to your major. If you can, work in the early morning – you’d just be sleeping otherwise. I’ve found that having a job actually helped with my time management when I first started school.",
    "If you can’t find a part-time job that relates to your major, look for a “warm-body” job – one that allows you to do homework while working. Some examples would be working at the desk of the library or the athletic center.",
    "If your school offers a position that helps with summer orientation for incoming students, apply for it. This kind of job will build your confidence and communication skills like none other.",
    "Get to know your professors. College is just as much about networking as it is about sitting in class. Plus, most of them are bored out of their skulls during office hours.",
    "If you have younger siblings that come to visit, supervise their use of your microwave. Trust me on this one.",
    "Don’t bring a car to campus if you don’t need one. Many schools have great public transit systems, and Facebook can net you rides when you need them.",
    "If you are bringing your car to campus, buy the parking permit that puts your car closer to you, even if it’s a bit more expensive. It’ll save you a lot of time (and whining).",
    "Live in the campus residence halls your first year if you can. Residence halls are much, much more social than apartments, and you’ll be involved in a lot more cool things.",
    "Realize that you are an adult now; just because you don’t have to go to work for eight hours a day doesn’t mean you shouldn’t act like it. Be professional.",
    "When you study, don’t do it in your room. Also, try to use an active study method such as making flashcards or writing your own quizzes. It’s a lot less boring and a lot more effective than just looking over your professor’s slides.",
    "Getting a tutor does not make you look dumb. Not getting one when you need help does.",
    "Flip-flops in the bathroom. No exceptions.",
    "Freezy Pops from Wal-Mart are a great substitute for fattier desserts.",
    "Take smart notes. Find a note-taking system that works well for you, and focus on learning rather than simply recording the information.",
    "Find out when you can register for classes and do right at that moment. You’ll thank yourself later when your friends are having to do an extra semester because they couldn’t get into a required class.",
    "Try out as many clubs as you can. Feel no obligation to them if you don’t like them. College is about finding out what you love to do.",
    "Don’t put your alarm clock anywhere you can reach it. Make yourself get out of bed to turn it off.",
    "If your roommate isn’t still sleeping, turn on the light immediately after waking up. Light helps you feel more awake and reduces the chances of you going back to bed.",
    "You need a calendar. Google Calendar is probably the best one there is.",
    "Never underestimate the value of a care package from Mom.",
    "Get out and explore your campus. If you have to ask your friends where the main financial office is, you’ve failed. Same goes for exploring the city your campus is in.",
    "Find out what resources your school offers. Many universities have free tech support centers, health centers, seminars, and more.",
    "Get an internship the summer after your sophomore year. You’ll forge professional connections early on and make it easier to get another internship the next summer. Graduating with two under your belt will give you a real leg up on the competition.",
    "Keep a journal if you can. It’s great to be able to go back and see how you’ve progressed over the years.",
    "Connect with your school’s career center; your career advisor will be an invaluable resource in the years to come.",
    "Create a resume if you don’t already have one, and have it critiqued by someone who knows what they’re doing. Also, create your own personal website to show off your work.",
    "Go to every career fair, even if you’ve already lined up a summer job. You want to build relationships with recruiters, and they’ll remember your face if you show up every time.",
    "Take a speech class, even if you don’t have to. Communication skills are among the more important things recruiters look for in students.",
    "Be confident, get out of your comfort zone, and try new things. College is the greatest opportunity you’ll ever have for personal development.",
]

/*Creates the elements and places them on the page*/
function insertRandomTip1(tip1) {
    var p = document.createElement("p");
    var tip_text = document.createTextNode(tip1);
    p.appendChild(tip_text)
    t
    
}
