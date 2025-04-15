const nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
];

export const generateName = () => {
    return nameList[Math.floor(Math.random() * nameList.length)];
};



const messageList = [
    'Hello, This is a new product',
    'Great',
    'Show this to admin',
    'Hello',
    'Saahi he',
    'Audio is not clear',
    'Muted',
    'Not audible',
    'Yes, clear now',
    'Awesome video!',
    'I like it!',
    'Good work',
    'Need more information',
    'Can you explain that again?',
    'Interesting content',
    'How can I buy this product?',
    'Tell me about the features',
    'Looking forward to more videos',
    'Nice presentation!',
    'Excellent!',
    'I have a question',
    'This is amazing',
    'Any discounts available?',
    'I enjoyed the video',
    'Keep it up!',
    'Not sure about this',
    'Could you elaborate?',
    'This is helpful',
    'Thank you!',
    'Clear explanation',
    'Im confused',
    'Can you clarify?',
    'Tell me more',
    'Interesting topic',
    'Is this available online?',
    'I want to learn more',
    'Tell me a joke',
    'I impressed',
    'Whats the price?',
    'Great job!',
    'Well done',
    'Any upcoming events?',
    'This is informative',
    'Please share more',
    'Can I get a demo?',
    'How does it work?',
    'This is confusing',
];

export const generateMessage = () => {
    return messageList[Math.floor(Math.random() * messageList.length)];
};