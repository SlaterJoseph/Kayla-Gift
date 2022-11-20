// So Date - Description - Locations - Path
//So locations = [name, long, lat]
const dates = [
    //First Date
    ["04/26/2022", 
    "Our first date. I enjoyed our time together at Mocha Burger, but what stuck out to me was how the bowling failed, but we made the best of it and went to Dave and Busters instead and had great time. Conversation was easy, and you were just a absolute pleasure to be around, even for that bried period where we were just standing trying to make a plan on the fly. But y'know, I think it worked out pretty well.",
    [["Mocha Burger", 40.72742794975771, -73.99976704720656], ["Dave & Buster's", 40.756520440332665, -73.98862455674823]],
    "None"],

    //2nd date
    ["05/05/2022",
    "Right when were in the prime we're seeing each other but not officially dating. I vividly remember Ari coming over to us and just asking if the two of us were dating, to which we both got real quite. We didn't want to say no cause we both knew where it was going, but didn't say yes cause it was a bit embarrasing. Kind of funny to look back on it, now people see us together and it's obvious we are dating, guess it was obvious back then too.",
    [["Brooklyn College", 40.63115824854505, -73.95347454339868], ["Funfest Bar & Lounge", 40.61266540113629, -73.91309370398818]],
    "../images/dates/Mary-5-2022"],

    //3rd date
    ["05/08/2022",
    "Our first movie together, and the one we have probably watched the most of. I thought it was really cute how invested you were in the movie and the MCU as a whole, and it's the first time I got a real sense of your nerdy vibe. You said you loved the MCU but I didn't really get it til I saw you locked to the movie. After much time, I can agree with the notion you love superhero media.",
    [["Sushi Tokyo", 40.74104885044486, -73.99561488864039], ["AMC", 40.73158328921118, -73.9887710444611]],
    "images\dates\May-8-2022"],

    //4th date
    ["05/12/2022",
    'This was our first real "couple\'s night", and I enjoyed every second of it, although I think you and Carrie wish the Monopoly went shorter. That being said, I knew then we were the mean lean Monopoly dream time. With you sense of money and my reckless need to spend it for more hotels we were unstoppable... until Samy promptly stopped us.',
    [["Samy's house", 40.58524337376575, -73.96121951007582]],
    "images\dates\May-12-2022"],

    //5th date
    ["05/19/2022",
    "This was THE date. Just a mere week ago you hit me with THE ultimatum, which I had a answer to like the next day but we waited a week regardless. I had a blast going to FIT with you and making fun of dumb fashion and looking at cool office building structures. Mr. Broadways food was okay, but the company, exquisite. And finally in Everything Everywhere All At Once, I told you I would be happy to go out with you and be your boyfriend (which I still am very happy about fyi)",
    [["FIT", 40.746384374173445, -73.9942660674614], ["Mr.Broadway", 40.75240705183189, -73.98718690213235], ["AMC", 40.74287377932861, -73.97687343096848]],
    "images\dates\May-19-2022"],

    //6th date
    ["05/20/2022",
    "On this day, you decided to take on a great task. You attempted to help me buy clothing. Something only a madman would do, and you dove in head first. Our labors were successful, as I did buy like 2 T-shirts, which is more successful then I normally am shopping. And for this, I applaud you.",
    [["Kings Plaza", 40.61010278961317, -73.92012710398816]],
    "images\dates\May-20-2022"],

    //7th date
    ["05/23/2022",
    "Our last day together before you went home, and I went to Isreal. So shortly after we decided to officially date, we were gonna be apart. I knew it was going to suck, but I was 100% confident we would make it through it. I decided a week earlier I would happy wait a few months to spend time with you. It was a easy price to pay to be with you.",
    [["Milk N' Honey", 40.755410943694855, -73.97827745980406], ["Bryant Park", 40.753555776439775, -73.98324334697537]],
    "images\dates\May-23-2022"],

    //8th date
    ["08/14/2022",
    "The day we finally got to see each other again. At first I was worried it was gonna be awkward, and I take full blame if that initial hug was weird, I was super nervous. But after being together for all of 5 minutes, everything was back to normal. I felt at home with you, like you hadn't even left.",
    [["The Ebbin Household", 40.605493843961156, -73.94430909288027]],
    "None"],

    //9th date
    ["08/15/2022",
    "Our first alone time together since you came back, and cut short cause one of my friends HAD to go get married (kinda rude on his part ngl). You were a wee bit upset I didn't give any specific names. And you were a bit more upset when I did give a name and you realized you could've possible gotten a invite. Regardless I had a great time chilling with you at the park, eventhough I think we both got cut up by acorns/twigs.",
    [["Marine Park", 40.60604569231905, -73.93583469290441]],
    "images\dates\Aug-15-2022"
    ],

    //10th date
    ["08/16/2022",
    "This was the date that was all you, and then Carrie and Samy piggy backed with us. I may not enjoy painting, but I enjoy it when I'm doing it with you (for approximitly 2 hours then I still get bored). But I think you fish and my troll came out pretty amazing, and some how I managed to pick the most exspensive thing for you to paint. Impressive on my part.",
    [["Pottery and Glass Land", 40.619291504366394, -73.96446161748011], ["My Favorite Bagel", 40.61001353446672, -73.94348448864449]],
    "images\dates\Aug-16-2022"
    ],

    //11th date
    ["08/17/2022",
    "So, we saw that Brad Pitt movie this time. But we saw it at a Regal (the inferior theater), and it was bad, and those are the only 2 reasons I do not remember the movie. That being said the ice cream we got afterwards was really yummy, even though they screwed us out of our limited edition kirby cup, which to this day I am not over. I will have my vengence, believe you me.",
    [["Regal", 40.58603619698874, -73.93001190213757], ["Cold Stone Creamery", 40.58670431313735, -73.9294325449986]],
    "images\dates\Aug-17-2022"
    ],

    //12th date
    ["08/18/2022",
    "Ahh, smacking balls. What a passtime. I'll say I think we all sucked at driving those balls down the range, but it was still fun. I just remember you and Carrie were not happy with any of the photos taken. We were taking couples photos for way to long. LIKE WAY TO LONG. Also I forgot we went to Coldstone on back to back days. Just a weird thing that happened if you ask me.",
    [["Aviator Golf Center", 40.59013397934539, -73.90138108679378], ["Cold Stone Creamery", 40.58670431313735, -73.9294325449986]],
    "images\dates\Aug-18-2022"
    ],

    //13th date
    ["08/21/2022",
    "This was one of those days when I learned just how special you are. First, got to meet you grandpa, still waiting on that BBQ invite. But after I helped you move in, the fact that you dropped everything to help Loren says so much about you. It showed me just how kind and sweet you truly are, and even though I was hungry and grumpy it left a lasting impression. Then we saw Thor Love and Thunder, biggest dissapointment we've seen in theaters. Very mid, 5/10.",
    [["Your Dorm which I still think I can get into if you would just let me shmooze up the security guards", 40.74720951055742, -73.9824220309684], ["AMC", 40.752312041801176, -73.99445261562464], ["7-11", 40.74748022313329, -73.98914868864021], ['Tisch Hospital', 40.74213607809242, -73.97394457329673]],
    "images\dates\Aug-21-2022"
    ],

    //14th date
    ["08/26/2022",
    "At this point I knew you knew me. When we went to the MET, you knew exactly what I would like. Guns, swords, and the giant cannon that way to large for practical purposes. Regardless if any boy would like it, you knew I would and that meant a lot. Then we spent 14 years finding the paintings you were looking for but that's neither here nor there. I still had a great time with you.",
    [["MET", 40.779148190585985, -73.96291945321228], ["Grill Point", 40.77700605782963, -73.95715974753482]],
    "images\dates\Aug-26-2022"
    ],

    //15th date
    ["09/02/2022",
    "Our day at the beach. Only we didn't go to the beach, we stayed on the boardwalk. So, our day at the boardwalk. I had a fantastic time with you that day. I don't know why in particular, but it was so much fun. I got you Beige, and I was spinning you like a top while we were walking. I think that's when I learned I can have with you anywhere. We really didn't do much, just kinda walked and I still had a blast.",
    [["Brighton Beach", 40.57332828633735, -73.97923539069554]],
    "images\dates\Sep-02-2022"
    ],

    //16th date
    ["09/03/2022",
    "BOARD GAME NIGHT. Ahh, the night of playing Carrie's board game. I took a shot of lime juice. And of other non lime related juices (in case you didn't get it booze). Carre dared everyone to split. Carrie came out from the dare to early. Just a legendary night.",
    [["Samy's house", 40.58524337376575, -73.96121951007582]],
    "images\dates\Sep-03-2022"
    ],

    //17th date
    ["09/04/2022",
    "Our trip to the flowers. I'll say, they had some super nice flowers. Can I remember a single name, not a one. But they were very pretty, and my favorite section was the gridlike part where they had paths to walk down and see tons of species of flower. Also we got our bonsai trees from there, which as of now haven't sprouted, but any day now those seeds gonna sprout. Just you wait.",
    [["My Favorite Bagel", 40.61001353446672, -73.94348448864449], ["The Brooklyn Botanical Gardens", 40.66850656035133, -73.96446959999999], ["Sushi Meshuga", 40.609820909959055, -73.95640297330095]],
    "images\dates\Sep-04-2022"
    ],

    //18th date
    ["09/15/2022",
    "The date I knew I loved you. You were having a hard time and I wanted to help anyway I was able. Just being able to put a smile on you face made everything worth it. This is the date I knew I loved you, even if I did only say it a little while ago.",
    [["Mocha Burger", 40.72742794975771, -73.99976704720656], ["SUMMIT One Vanderbilt", 40.75277770061724, -73.97869453525853]],
    "images\dates\Sep-15-2022"
    ],

    //19th date
    ["09/29/2022",
    "What a weird day. A trip to Marshalls. A trip to some random market. A roof party. Drinking with a squad. I'll say I think this is the first time you really spent extended time with Shua, and we got lost in the sauce. I say this makes it a pretty important day.",
    [["Marshalls", 40.59041092661147, -73.95331780213739], ["The Ebbin Household", 40.605493843961156, -73.94430909288027], ['Some random Mini-Mart', 40.60716353411983, -73.94336353097279], ["ROOF PARTY!", 40.63597817175536, -73.94603993990283]],
    "images\dates\Sep-29-2022"
    ],

    //20th date
    ["10/21/2022",
    "While this date was more for me, I still had fun book shopping with you. I got myself a ton of books (of which I have finished 1 and am almost done the 2nd), and you got yourself a book (of which you may have read 25 pages). I also had a blast roasting the gooey stories, and then you almost got one which would have given me a heart attack on the spot.",
    [["Barnes & Noble", 40.668716090760945, -73.97975164446314], ["Dunkin'", 40.6678168669108, -73.98102301153281]],
    "images\date\Oct-21-2022"
    ],

    //21th date
    ["10/22/2022",
    "First off, I don't think Loren's boyfriend/fiance's apartment right, but that's the best location I was able to find. Now, I can't believe what happened on this date. 1) No food. The horderves were a lie. 2) You actually got me to dance, and I actually enjoyed it, both of which I could not imagine happening. ",
    [["70's Party", 40.76454854735545, -73.9891545839147], ["Bravo's Pizza'", 40.75209675179392, -73.98686430213235]],
    "images\date\Oct-23-2022"
    ],

    //22th date
    ["10/25/2022",
    "BLACK ADAM. THE ROCK. NEED I SAY MORE. Yes, yes I need. We went and did some studynig for midterms, by which you did some studying and I rotated between staring blankly at my laptop and intensly at you studying and admiring you. THEN WE SAW THE ROCK, and honestly, way better then any other DC movie I've seen (granted I have no seen Shazam)."
    [["AMC", 40.73851816256416, -73.98960112422101], ["Starbucks", 40.74755390741796, -73.98070327329656], ["Juice Generation", 40.74622116330518, -73.98227146408722]],
    "images\date\Oct-25-2022"
    ],

    ["11/09/2022",
    "Our birthday, and I spent it with the person I cherish most. Firstly, while of course I had a blast a dinner with you, if you read this far you deserve to know, Tempura was mid. It was I'm sorry. Now, how did I get so lucky to have a girlfriend who got me such thoughtful gifts. I'm still waiting to build the lego set, but I wear the Ranger's hoodie all the time, and I love the little heart. Your really gave me the most thoughtful gifts, and cheered me up though my bad gift. That's when I knew I wanted to tell you I loved you.",
    [["Tempura NYC", 40.75625382054843, -73.99460666102105], ["Your Dorm which I still think I can get into if you would just let me shmooze up the security guards", 40.74720951055742, -73.9824220309684]],
    "images\date\Nov-9-2022"
    ],

    ["11/10/2022",
    "OUR PARTY WOOOOOOOOO. WE HAD FRIEND. WE LOST AT PONG CAUSE WE TRASH. WE TRIED TO SET UP SOPHIE AND SHUA WHICH FAILED MISERABLY. WE DRANK JUNGLE JUICE. WE HAD A FANTASTIC TIME. oh ya and we said we love each other BUT WE HAD A COOKIEPUSS CAKE. So you tell me what the highlight of the night was (honestly you dropping the cookiepuss was for me).",
    [["The Ebbin Household", 40.605493843961156, -73.94430909288027]],
    "images\dates\Nov-9-2022"],

    ["11/16/2022",
    "Probably the best date you've planned, and up there for the best date we've had. The comic store was a fun and quick little pit stop. The stores around Bryant Park we're fun to drop by and included the best hot cocoa I have ever had. The ice skating was fun, and even those two kids abandoned in the middle looked to have a blast. Then we got some grub and saw Black Panther Wakanda Forever, which seemed pretty good but for some reason I don't remember it much.",
    [["Midtown Comics Grand Central", 40.75338039720043, -73.97438125980413], ["Bryant Park", 40.753555776439775, -73.98324334697537], ["Mr.Broadway", 40.75240705183189, -73.98718690213235], ["AMC", 40.75673532837151, -73.98905093149375]],
    "images\dates\Nov-16-2022"]
]

