/**
 * Bash Buddies — Party Guest Characters
 * 10 unique caricature guests with personality, interests, and conversation trees.
 */

import type { PartyGuest } from '../../types';

export const ALL_GUESTS: PartyGuest[] = [
  {
    id: 'guest-luna',
    name: 'Luna',
    caricatureStyle: 'artist',
    tagline: 'Starry-eyed dreamer',
    bio: 'Luna paints galaxies on her ceiling and thinks everything is a sign from the universe.',
    personality: 'Whimsical, creative, talks in metaphors',
    interests: ['painting', 'astrology', 'crystals', 'poetry'],
    greeting: "Oh hey! I sensed a creative energy entering the room. The stars told me you'd come!",
    colors: { primary: '#7B68EE', secondary: '#E6E6FA', accent: '#FFD700' },
    friendshipThreshold: 5,
    topics: [
      {
        id: 'luna-art',
        topicName: '🎨 Art',
        intro: "I've been working on this nebula series — each painting captures a different emotion!",
        options: [
          { id: 'luna-art-1', question: "That sounds amazing! What emotion is your favorite to paint?", response: "Joy! It looks like swirling gold and violet. You totally get it! ✨", friendshipPoints: 3 },
          { id: 'luna-art-2', question: "Do you sell your paintings?", response: "Art isn't about money... it's about cosmic expression. But yeah, I have an Etsy.", friendshipPoints: 1 },
          { id: 'luna-art-3', question: "Painting sounds boring, honestly.", response: "Oh... well, the universe paints sunsets every day and nobody calls THAT boring. 😤", friendshipPoints: -1 },
        ],
      },
      {
        id: 'luna-stars',
        topicName: '⭐ Astrology',
        intro: "What's your sign? Wait — let me guess. You give off major Sagittarius vibes.",
        options: [
          { id: 'luna-stars-1', question: "Ha! How did you know? That's spot on!", response: "I KNEW it! Sagittarians are adventurous souls. We're cosmically compatible! 🌟", friendshipPoints: 3 },
          { id: 'luna-stars-2', question: "I don't really follow astrology, but I'm curious!", response: "That's okay! The stars are patient. Let me read your chart sometime!", friendshipPoints: 2 },
          { id: 'luna-stars-3', question: "Astrology isn't real science, you know.", response: "Neither is love, but you still believe in THAT, right? ...right? 😅", friendshipPoints: -1 },
        ],
      },
      {
        id: 'luna-party',
        topicName: '🎉 This Party',
        intro: "I almost didn't come tonight. Mercury is in retrograde, after all...",
        options: [
          { id: 'luna-party-1', question: "I'm glad you came! This party wouldn't be the same.", response: "Aww, that's the sweetest thing! You have such warm energy. 💛", friendshipPoints: 3 },
          { id: 'luna-party-2', question: "What does Mercury retrograde even mean?", response: "Communication gets wonky, tech breaks... but also old friends reconnect! Like us!", friendshipPoints: 2 },
          { id: 'luna-party-3', question: "Sounds like an excuse to stay home.", response: "Sometimes the universe WANTS you to rest! But tonight felt different.", friendshipPoints: 0 },
        ],
      },
    ],
  },
  {
    id: 'guest-max',
    name: 'Max',
    caricatureStyle: 'jock',
    tagline: 'Fitness fanatic with a heart of gold',
    bio: "Max has run 12 marathons and won't stop telling you about each one. But he also cries at puppy videos.",
    personality: 'Energetic, enthusiastic, surprisingly emotional',
    interests: ['running', 'protein shakes', 'puppies', 'motivational quotes'],
    greeting: "BRO! You made it! I just did 200 push-ups in the bathroom. Party's officially started!",
    colors: { primary: '#FF6B35', secondary: '#FFF3E0', accent: '#4CAF50' },
    friendshipThreshold: 5,
    topics: [
      {
        id: 'max-fitness',
        topicName: '💪 Fitness',
        intro: "Dude, I've been training for an ultra-marathon. 100 miles! Through the DESERT!",
        options: [
          { id: 'max-fit-1', question: "That's insane! What keeps you motivated?", response: "My dog, Biscuit! I run so I can keep up with her. She's SO fast! *tears up*", friendshipPoints: 3 },
          { id: 'max-fit-2', question: "I've been wanting to get into running. Any tips?", response: "YES! Start slow, get good shoes, and find a running buddy! I'll be yours! 🏃", friendshipPoints: 3 },
          { id: 'max-fit-3', question: "100 miles? That sounds miserable.", response: "Mile 60 IS miserable. But mile 100? Pure euphoria, bro. PURE. EUPHORIA.", friendshipPoints: 1 },
        ],
      },
      {
        id: 'max-puppies',
        topicName: '🐶 Puppies',
        intro: "Want to see a picture of Biscuit? She learned a new trick yesterday!",
        options: [
          { id: 'max-pup-1', question: "YES! Show me immediately!", response: "*scrolls through 400 photos* She can shake paws AND she smiles! LOOK AT HER! 😭", friendshipPoints: 3 },
          { id: 'max-pup-2', question: "What breed is she?", response: "Golden Retriever mix! She's basically sunshine with four legs. I love her so much.", friendshipPoints: 2 },
          { id: 'max-pup-3', question: "I'm more of a cat person, honestly.", response: "That's cool! Biscuit loves cats too. She'd love YOUR cat. Can we set up a playdate?!", friendshipPoints: 1 },
        ],
      },
      {
        id: 'max-party',
        topicName: '🎉 This Party',
        intro: "I brought my own protein shakes. Want one? They're chocolate peanut butter!",
        options: [
          { id: 'max-party-1', question: "You brought protein shakes to a party? That's commitment!", response: "GAINS DON'T TAKE DAYS OFF! But also they're delicious. Try one!", friendshipPoints: 2 },
          { id: 'max-party-2', question: "Sure, I'll try one!", response: "YES! Shake buddies! This is the best party ever! *fist bump*", friendshipPoints: 3 },
          { id: 'max-party-3', question: "No thanks, I'll stick to the snack table.", response: "Respect! The guac here is fire. I actually made it! Secret ingredient: love. 💪❤️", friendshipPoints: 1 },
        ],
      },
    ],
  },
  {
    id: 'guest-priya',
    name: 'Priya',
    caricatureStyle: 'scientist',
    tagline: 'Quantum physicist who explains things with snacks',
    bio: 'Priya can explain string theory using only gummy bears and has three patents pending.',
    personality: 'Brilliant, witty, uses food analogies for everything',
    interests: ['physics', 'cooking', 'puzzles', 'science fiction'],
    greeting: "Hi! Did you know this room has approximately 10²⁷ air molecules? Anyway, great party!",
    colors: { primary: '#00BCD4', secondary: '#E0F7FA', accent: '#FF9800' },
    friendshipThreshold: 6,
    topics: [
      {
        id: 'priya-science',
        topicName: '🔬 Science',
        intro: "I'm working on quantum entanglement. Imagine two gummy bears that always match flavors, no matter how far apart!",
        options: [
          { id: 'priya-sci-1', question: "That's a great analogy! Can you explain more?", response: "It's like... the universe has flavor telepathy! Once you observe one bear, you KNOW the other. I love that you're curious!", friendshipPoints: 3 },
          { id: 'priya-sci-2', question: "Do you think we'll ever have quantum computers everywhere?", response: "Someday! Right now they need to be colder than space. Like, colder than my ex's heart. 😂", friendshipPoints: 2 },
          { id: 'priya-sci-3', question: "Science was never my strong suit.", response: "That's what bad teachers tell people! Science is just organized curiosity. You're curious right now!", friendshipPoints: 1 },
        ],
      },
      {
        id: 'priya-cooking',
        topicName: '🍳 Cooking',
        intro: "Cooking is basically edible chemistry. I made a soufflé last night that was 🤌 perfection.",
        options: [
          { id: 'priya-cook-1', question: "A soufflé! That's so impressive. What's your secret?", response: "Temperature precision! I use a lab thermometer. My colleagues think I'm extra. They're correct.", friendshipPoints: 3 },
          { id: 'priya-cook-2', question: "I love cooking too! What's your favorite cuisine?", response: "South Indian! My grandma's sambar recipe could win a Nobel Prize. Seriously.", friendshipPoints: 3 },
          { id: 'priya-cook-3', question: "I just microwave stuff mostly.", response: "Microwaves are fascinating! They excite water molecules. You're basically a molecular chef!", friendshipPoints: 2 },
        ],
      },
      {
        id: 'priya-puzzles',
        topicName: '🧩 Puzzles',
        intro: "I do the NYT crossword in pen. Before coffee. On Saturdays. Don't judge me.",
        options: [
          { id: 'priya-puz-1', question: "In PEN?! That's bold. I respect the confidence.", response: "Life's too short for pencils! And erasers are just admitting defeat. 😤✒️", friendshipPoints: 3 },
          { id: 'priya-puz-2', question: "I love puzzles too! Want to do one together sometime?", response: "YES! Puzzle buddy! Fair warning: I'm aggressively competitive. In a fun way.", friendshipPoints: 3 },
          { id: 'priya-puz-3', question: "Crosswords seem old-fashioned.", response: "They've been around since 1913! That's not old-fashioned, that's TIMELESS. Like pizza.", friendshipPoints: 0 },
        ],
      },
    ],
  },
  {
    id: 'guest-dj-felix',
    name: 'DJ Felix',
    caricatureStyle: 'hipster',
    tagline: 'Vinyl collector & vibe curator',
    bio: 'Felix owns 2,000 vinyl records and judges you silently based on your music taste.',
    personality: 'Cool, opinionated about music, secretly warm',
    interests: ['vinyl records', 'lo-fi beats', 'coffee', 'vintage fashion'],
    greeting: "Hey. Nice shoes. The playlist here is... acceptable. I could do better, obviously.",
    colors: { primary: '#795548', secondary: '#EFEBE9', accent: '#FFC107' },
    friendshipThreshold: 6,
    topics: [
      {
        id: 'felix-music',
        topicName: '🎵 Music',
        intro: "I just found a first-pressing of a 1972 jazz-funk album. I may have cried a little.",
        options: [
          { id: 'felix-mus-1', question: "That sounds amazing! What's the album?", response: "Head Hunters by Herbie Hancock. The warmth of analog... *chef's kiss*. You have taste!", friendshipPoints: 3 },
          { id: 'felix-mus-2', question: "I mostly listen to whatever's on Spotify.", response: "...I mean, algorithms have their place. But they'll never replace the thrill of digging through crates.", friendshipPoints: 0 },
          { id: 'felix-mus-3', question: "I'd love to hear your collection sometime!", response: "Really?! I mean... yeah, cool, whatever. *internally screaming with joy* Come by anytime.", friendshipPoints: 3 },
        ],
      },
      {
        id: 'felix-coffee',
        topicName: '☕ Coffee',
        intro: "The coffee here is... fine. I roast my own beans at home. Single origin, obviously.",
        options: [
          { id: 'felix-cof-1', question: "You ROAST your own beans? That's next level!", response: "It's easier than people think! The smell alone is worth it. I'll bring you some next time.", friendshipPoints: 3 },
          { id: 'felix-cof-2', question: "What's your favorite coffee shop?", response: "There's this tiny spot with no sign. Just a red door. They know my order. It's... *perfect*.", friendshipPoints: 2 },
          { id: 'felix-cof-3', question: "I'm fine with instant coffee.", response: "*visible pain* I... respect your journey. But please, let me help you.", friendshipPoints: 0 },
        ],
      },
      {
        id: 'felix-fashion',
        topicName: '👔 Vintage Style',
        intro: "This jacket? 1987 thrift find. Twelve dollars. People ask me where I shop and I just smile.",
        options: [
          { id: 'felix-fas-1', question: "Twelve dollars?! You've got an incredible eye.", response: "It's all about patience and knowing which thrift stores restock on Tuesdays. *taps nose*", friendshipPoints: 3 },
          { id: 'felix-fas-2', question: "I've been wanting to get into thrifting!", response: "I'll take you! Fair warning: I'm very intense about organization in vintage shops.", friendshipPoints: 3 },
          { id: 'felix-fas-3', question: "I just buy whatever's on sale at the mall.", response: "The mall has its moments. But the stories behind vintage pieces? Unmatched.", friendshipPoints: 1 },
        ],
      },
    ],
  },
  {
    id: 'guest-grandma-betty',
    name: 'Grandma Betty',
    caricatureStyle: 'chef',
    tagline: 'Life of every party since 1952',
    bio: 'Betty is 78, has more energy than everyone here combined, and brought homemade cookies.',
    personality: 'Warm, sassy, full of life wisdom and cookies',
    interests: ['baking', 'dancing', 'gossip', 'knitting'],
    greeting: "Sweetheart! Come here, have a cookie. I made three batches. I always make too many. Take four.",
    colors: { primary: '#E91E63', secondary: '#FCE4EC', accent: '#8BC34A' },
    friendshipThreshold: 4,
    topics: [
      {
        id: 'betty-baking',
        topicName: '🍪 Baking',
        intro: "These are my famous triple chocolate chip cookies. The secret? Love. And an obscene amount of butter.",
        options: [
          { id: 'betty-bak-1', question: "These are INCREDIBLE! Can I have the recipe?", response: "For you? Of course! I'll write it on a card with little flowers. That's how we did it!", friendshipPoints: 3 },
          { id: 'betty-bak-2', question: "How did you learn to bake so well?", response: "My mama taught me. Her mama taught her. It's love passed down in measuring cups. 🥰", friendshipPoints: 3 },
          { id: 'betty-bak-3', question: "I'm trying to cut back on sugar.", response: "Oh honey, life's too short! But I also make a lovely sugar-free lemon bar. I've got you.", friendshipPoints: 1 },
        ],
      },
      {
        id: 'betty-dancing',
        topicName: '💃 Dancing',
        intro: "Is that salsa music? My hips don't lie and neither do I! I won a dance contest in '74!",
        options: [
          { id: 'betty-dan-1', question: "You won a contest?! Tell me everything!", response: "The cha-cha. Blue sequin dress. My Harold couldn't keep up! *laughs* Those were the days!", friendshipPoints: 3 },
          { id: 'betty-dan-2', question: "Want to dance right now?", response: "I THOUGHT YOU'D NEVER ASK! *grabs your hand* Try to keep up, sweetie!", friendshipPoints: 3 },
          { id: 'betty-dan-3', question: "I have two left feet, honestly.", response: "So did Harold! I taught him. By our wedding, he was a STAR. Get up, I'm teaching you!", friendshipPoints: 2 },
        ],
      },
      {
        id: 'betty-wisdom',
        topicName: '💡 Life Wisdom',
        intro: "You know what 78 years teaches you? That most worries are just wasted imagination.",
        options: [
          { id: 'betty-wis-1', question: "That's beautiful. What's the best advice you've ever received?", response: "'Be kind, be brave, eat dessert first.' My grandpa said that. He was right about all three.", friendshipPoints: 3 },
          { id: 'betty-wis-2', question: "What do you wish you'd known when you were young?", response: "That it all works out, dear. Every heartbreak, every mistake — it all becomes a good story.", friendshipPoints: 3 },
          { id: 'betty-wis-3', question: "Do people actually get wiser with age?", response: "Some do! Others just get better at pretending. *winks* I'm a mix of both.", friendshipPoints: 2 },
        ],
      },
    ],
  },
  {
    id: 'guest-zara',
    name: 'Zara',
    caricatureStyle: 'goth',
    tagline: 'Cheerful goth who loves horror movies',
    bio: 'Zara wears all black but has the sunniest personality. She knows every horror movie ever made.',
    personality: 'Dark aesthetic, surprisingly upbeat and enthusiastic',
    interests: ['horror movies', 'poetry', 'black cats', 'thunderstorms'],
    greeting: "Hi! Love the vibe in here. It's very... alive. Which is unusual for places I hang out. 🖤",
    colors: { primary: '#37474F', secondary: '#ECEFF1', accent: '#9C27B0' },
    friendshipThreshold: 5,
    topics: [
      {
        id: 'zara-horror',
        topicName: '🎃 Horror Movies',
        intro: "I've watched 847 horror movies. Yes, I keep a spreadsheet. Don't look at me like that.",
        options: [
          { id: 'zara-hor-1', question: "847?! What's your all-time favorite?", response: "The Thing (1982)! Practical effects, paranoia, Kurt Russell's beard — PERFECTION! 🎬", friendshipPoints: 3 },
          { id: 'zara-hor-2', question: "I love horror too! Want to do a movie marathon?", response: "You had me at marathon! I'll bring the popcorn and my ranked list. This is happening!", friendshipPoints: 3 },
          { id: 'zara-hor-3', question: "Horror movies scare me too much.", response: "That's the POINT! But I'll hold your hand through the scary parts. No judgment! 👻", friendshipPoints: 1 },
        ],
      },
      {
        id: 'zara-cats',
        topicName: '🐱 Black Cats',
        intro: "I have three black cats: Edgar, Allan, and Poe. They're my whole world.",
        options: [
          { id: 'zara-cat-1', question: "Edgar, Allan, and Poe! That's the best thing I've ever heard!", response: "Right?! Edgar is the troublemaker, Allan is the cuddler, and Poe judges everyone. 🐈‍⬛", friendshipPoints: 3 },
          { id: 'zara-cat-2', question: "Three cats! Do they get along?", response: "Mostly! Edgar steals Allan's food and Poe watches from above like a tiny dark god.", friendshipPoints: 2 },
          { id: 'zara-cat-3', question: "Aren't black cats bad luck?", response: "EXCUSE ME? They're the BEST luck! Edgar is offended and you should apologize to him.", friendshipPoints: -1 },
        ],
      },
      {
        id: 'zara-storms',
        topicName: '⛈️ Thunderstorms',
        intro: "Best weather? Thunderstorms. I sit on my porch, drink tea, and feel ALIVE.",
        options: [
          { id: 'zara-storm-1', question: "There's something magical about a good thunderstorm!", response: "YES! The electricity in the air, the drama! Nature's own horror movie! You GET me! ⚡", friendshipPoints: 3 },
          { id: 'zara-storm-2', question: "What kind of tea do you drink during storms?", response: "Earl Grey with honey. It's the perfect contrast — warm cup, wild sky. Very aesthetic.", friendshipPoints: 2 },
          { id: 'zara-storm-3', question: "Storms make me nervous.", response: "That's fair! But nervousness and excitement are the same feeling. Maybe you're secretly thrilled? 😏", friendshipPoints: 1 },
        ],
      },
    ],
  },
  {
    id: 'guest-raj',
    name: 'Raj',
    caricatureStyle: 'nerd',
    tagline: 'Board game champion & pun master',
    bio: 'Raj has a board game collection worth more than his car and makes puns about everything.',
    personality: 'Witty, competitive, loves wordplay',
    interests: ['board games', 'puns', 'trivia', 'comic books'],
    greeting: "Hey! I'd shake your hand but I'm holding my drink. I guess you could say I'm... occu-PIED! Get it?",
    colors: { primary: '#3F51B5', secondary: '#E8EAF6', accent: '#F44336' },
    friendshipThreshold: 5,
    topics: [
      {
        id: 'raj-games',
        topicName: '🎲 Board Games',
        intro: "I own 200 board games. My Settlers of Catan win rate is 73%. I'm not bragging, that's just a FACT.",
        options: [
          { id: 'raj-game-1', question: "73%?! You have to teach me your strategy!", response: "Wheat and ore, baby! Control the resources, control the GAME! I'll teach you everything! 🎲", friendshipPoints: 3 },
          { id: 'raj-game-2', question: "What's your favorite game right now?", response: "Wingspan! It's about birds! You score points by attracting birds to habitats! It's BRILLIANT!", friendshipPoints: 2 },
          { id: 'raj-game-3', question: "I'm more of a video game person.", response: "Video games are great! But there's something special about trash-talking friends face-to-face. 😈", friendshipPoints: 1 },
        ],
      },
      {
        id: 'raj-puns',
        topicName: '😄 Puns',
        intro: "Wanna hear a joke? I used to hate facial hair... but then it grew on me!",
        options: [
          { id: 'raj-pun-1', question: "HA! Okay, I've got one: I'm reading a book on anti-gravity. It's impossible to put down!", response: "YESSS! A fellow punster! We are now best friends. This is non-negotiable. 😂", friendshipPoints: 3 },
          { id: 'raj-pun-2', question: "That's terrible! ...Tell me another one.", response: "What do you call a fake noodle? An IMPASTA! *finger guns* I have thousands more.", friendshipPoints: 3 },
          { id: 'raj-pun-3', question: "Puns are the lowest form of humor.", response: "Au contraire! Puns are the FOUNDATION of humor. They're... ground-FLOOR comedy! 😏", friendshipPoints: 0 },
        ],
      },
      {
        id: 'raj-trivia',
        topicName: '🧠 Trivia',
        intro: "Random fact: honey never spoils. They found edible honey in Egyptian tombs. HOW COOL IS THAT?!",
        options: [
          { id: 'raj-triv-1', question: "That IS cool! Hit me with another one!", response: "Octopuses have THREE hearts! And if they lose an arm, it can still react to stimuli! 🐙", friendshipPoints: 3 },
          { id: 'raj-triv-2', question: "Where do you learn all this stuff?", response: "Reddit rabbit holes at 2 AM! It's unhealthy but extremely informative. No regrets!", friendshipPoints: 2 },
          { id: 'raj-triv-3', question: "I don't really see the point of random facts.", response: "The POINT is wonder! Also winning bar trivia. Which I do. Frequently. With trophies.", friendshipPoints: 0 },
        ],
      },
    ],
  },
  {
    id: 'guest-mika',
    name: 'Mika',
    caricatureStyle: 'hippie',
    tagline: 'Plant parent & outdoor enthusiast',
    bio: 'Mika names all their plants and has hiked every major trail in the state. Perpetually barefoot.',
    personality: 'Chill, nature-loving, goes with the flow',
    interests: ['hiking', 'houseplants', 'yoga', 'sustainability'],
    greeting: "Hey friend! *barefoot* Shoes are just foot prisons, you know? Anyway, great energy here tonight!",
    colors: { primary: '#4CAF50', secondary: '#E8F5E9', accent: '#FF9800' },
    friendshipThreshold: 4,
    topics: [
      {
        id: 'mika-plants',
        topicName: '🌿 Plants',
        intro: "I have 47 houseplants. They all have names. Gerald the fern is my favorite. Don't tell the others.",
        options: [
          { id: 'mika-plant-1', question: "You named a fern Gerald?! That's adorable!", response: "He responds to his name! ...Okay, he doesn't. But I FEEL like he does. Gerald is special. 🌿", friendshipPoints: 3 },
          { id: 'mika-plant-2', question: "Any tips for someone who kills every plant?", response: "Start with a pothos! They're basically immortal. If you kill a pothos... we need to talk.", friendshipPoints: 3 },
          { id: 'mika-plant-3', question: "47 plants? Isn't that a lot of work?", response: "It's not work when it's love! Also yes, watering day takes two hours. But Gerald needs me!", friendshipPoints: 1 },
        ],
      },
      {
        id: 'mika-hiking',
        topicName: '🥾 Hiking',
        intro: "I just did a sunrise hike yesterday. Watched the whole sky turn pink. Almost cried. Okay, I definitely cried.",
        options: [
          { id: 'mika-hike-1', question: "That sounds incredible! Where was it?", response: "Eagle Peak! The trail is tough but the view... it's like the Earth is hugging you with light. ☀️", friendshipPoints: 3 },
          { id: 'mika-hike-2', question: "I'd love to go hiking with you sometime!", response: "Really?! Let's do it! I'll pack trail mix and we can name the trees we pass! 🌲", friendshipPoints: 3 },
          { id: 'mika-hike-3', question: "I'm not really outdoorsy.", response: "That's okay! Nature meets you where you are. Even a short walk counts. Baby steps! 🌸", friendshipPoints: 1 },
        ],
      },
      {
        id: 'mika-sustainability',
        topicName: '♻️ Sustainability',
        intro: "I've been zero-waste for two years! My annual trash fits in a mason jar. It's wild.",
        options: [
          { id: 'mika-sus-1', question: "A mason jar?! How is that even possible?", response: "Composting, buying bulk, refusing packaging! It's a journey. Not perfect, but intentional. 💚", friendshipPoints: 2 },
          { id: 'mika-sus-2', question: "That's inspiring! What's one easy change I could make?", response: "Reusable water bottle! It's small but powerful. Plus, stickers make it FUN! I have 23 stickers on mine.", friendshipPoints: 3 },
          { id: 'mika-sus-3', question: "Isn't that kind of extreme?", response: "Extreme is a planet on fire! But I get it — everyone goes at their own pace. No guilt! 🌍", friendshipPoints: 0 },
        ],
      },
    ],
  },
  {
    id: 'guest-chen',
    name: 'Chen',
    caricatureStyle: 'rocker',
    tagline: 'Garage band legend & air guitar champion',
    bio: 'Chen plays guitar in three bands and once crowd-surfed at a library open mic night.',
    personality: 'Loud, passionate, lives for the music',
    interests: ['guitar', 'concerts', 'songwriting', 'karaoke'],
    greeting: "HELLO PARTY PEOPLE! *air guitar riff* Is there karaoke here? Please say yes.",
    colors: { primary: '#F44336', secondary: '#FFEBEE', accent: '#FFEB3B' },
    friendshipThreshold: 5,
    topics: [
      {
        id: 'chen-music',
        topicName: '🎸 Music',
        intro: "My band just wrote a song about a haunted taco truck. It SLAPS. We call it 'Ghost Guacamole'.",
        options: [
          { id: 'chen-mus-1', question: "'Ghost Guacamole'?! I need to hear this immediately!", response: "I'll send you the demo! It starts soft... then BAM! Double bass pedal during the salsa bridge! 🌮🎸", friendshipPoints: 3 },
          { id: 'chen-mus-2', question: "How many bands are you in?", response: "Three! A punk band, a jazz trio, and an experimental thing with a didgeridoo. I sleep when I'm dead!", friendshipPoints: 2 },
          { id: 'chen-mus-3', question: "I don't really go to concerts.", response: "WHAT?! We need to fix this! Live music changes your SOUL! First show's on me!", friendshipPoints: 1 },
        ],
      },
      {
        id: 'chen-karaoke',
        topicName: '🎤 Karaoke',
        intro: "My go-to karaoke song is Bohemian Rhapsody. Full commitment. Costumes. The whole thing.",
        options: [
          { id: 'chen-kar-1', question: "COSTUMES?! That's legendary! What do you wear?", response: "Full Freddie Mercury: white tank, armband, mustache! The crowd goes WILD! 🎤👑", friendshipPoints: 3 },
          { id: 'chen-kar-2', question: "Want to do a duet right now?", response: "DID WE JUST BECOME BEST FRIENDS?! Pick a song! I vote 'Don't Stop Believin'! 🎶", friendshipPoints: 3 },
          { id: 'chen-kar-3', question: "I'm way too shy for karaoke.", response: "That's what everyone says until their song comes on! I'll be your hype person! No judgment zone!", friendshipPoints: 2 },
        ],
      },
      {
        id: 'chen-songwriting',
        topicName: '📝 Songwriting',
        intro: "I write songs about everything. Last week I wrote one about losing a sock in the dryer. It's emotional.",
        options: [
          { id: 'chen-song-1', question: "A song about a lost sock? I already feel things!", response: "It's called 'Where Did You Go (Left Foot Blues)'. The bridge is where I really break down. 😢🧦", friendshipPoints: 3 },
          { id: 'chen-song-2', question: "How do you come up with ideas?", response: "Everything is a song! This conversation? Song material. You just inspired 'Party Chat Blues'!", friendshipPoints: 2 },
          { id: 'chen-song-3', question: "Songwriting seems really hard.", response: "It's just feelings + chords! Start with three chords and the truth. The rest figures itself out! 🎵", friendshipPoints: 2 },
        ],
      },
    ],
  },
  {
    id: 'guest-sophie',
    name: 'Sophie',
    caricatureStyle: 'preppy',
    tagline: 'Overachiever with a planner addiction',
    bio: "Sophie has color-coded planners for her planners and organized this party's snack table by food group.",
    personality: 'Type-A, organized, surprisingly fun when she relaxes',
    interests: ['planning', 'spreadsheets', 'brunch', 'interior design'],
    greeting: "Hi! I reorganized the snack table by allergen category AND aesthetic appeal. You're welcome!",
    colors: { primary: '#9C27B0', secondary: '#F3E5F5', accent: '#00BCD4' },
    friendshipThreshold: 5,
    topics: [
      {
        id: 'sophie-planning',
        topicName: '📋 Planning',
        intro: "I have a 5-year plan, a monthly vision board, and a daily checklist. Today's checklist includes 'have fun at party.'",
        options: [
          { id: 'sophie-plan-1', question: "'Have fun' is on your checklist? That's oddly endearing!", response: "If it's not on the list, did it happen? But yes, I'm checking it off right now! ✅😊", friendshipPoints: 3 },
          { id: 'sophie-plan-2', question: "I could use help organizing my life!", response: "Oh, I would LOVE that! I'll make you a color-coded starter system. What are your goals?!", friendshipPoints: 3 },
          { id: 'sophie-plan-3', question: "That sounds exhausting.", response: "Chaos is exhausting! Planning is FREEDOM! ...But I do schedule 'unstructured time' so maybe you have a point.", friendshipPoints: 0 },
        ],
      },
      {
        id: 'sophie-brunch',
        topicName: '🥂 Brunch',
        intro: "Brunch is the superior meal. It combines breakfast AND lunch! Maximum efficiency, maximum mimosas.",
        options: [
          { id: 'sophie-bru-1', question: "I LOVE brunch! What's your go-to order?", response: "Eggs Benedict with a side of pancakes AND an avocado toast. Go big or go home! 🥞🥑", friendshipPoints: 3 },
          { id: 'sophie-bru-2', question: "Want to grab brunch together sometime?", response: "Yes! I have a spreadsheet of the best brunch spots ranked by wait time, menu variety, AND lighting for photos!", friendshipPoints: 3 },
          { id: 'sophie-bru-3', question: "Isn't brunch just expensive breakfast?", response: "It's an EXPERIENCE! The ambiance! The mimosa flight! But... okay, yes, the eggs ARE $18. 😅", friendshipPoints: 1 },
        ],
      },
      {
        id: 'sophie-design',
        topicName: '🏠 Interior Design',
        intro: "I just redid my living room. Scandinavian minimalism meets colorful maximalism. I call it 'organized chaos.'",
        options: [
          { id: 'sophie-des-1', question: "That sounds incredible! How did you pull that off?", response: "Clean lines but BOLD pillows. White walls but a teal statement couch. It's *chef's kiss*! 🛋️", friendshipPoints: 3 },
          { id: 'sophie-des-2', question: "I need help decorating my place!", response: "Sending you my Pinterest board RIGHT NOW. 847 pins organized by room, mood, and budget! 📌", friendshipPoints: 2 },
          { id: 'sophie-des-3', question: "I don't really care about decorating.", response: "Your space affects your MOOD! But I respect the low-maintenance lifestyle. Very zen. Very... bare.", friendshipPoints: 0 },
        ],
      },
    ],
  },
];
