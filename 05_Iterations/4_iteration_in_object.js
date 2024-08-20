const myLang = {
    js: 'javascript',
    py: 'python',
    cpp: 'c plus plus',
    rb : 'ruby',
}

for (const key in myLang) {
    // console.log(`${key} is abbrevation of ${myLang[key]}`);
}

const programming_lang = ["JS", "Ruby", "Python", "C++", "C#"]

for (const key in programming_lang) {
    // console.log(programming_lang[key]);
    //* If we directly print programming_lang it will print the key (index)
}

const map = new Map();

map.set('IN', 'India')
map.set('UK', 'Unoted Kingdom')
map.set('RSA', 'Republic of South Africa')

for (const key in map) {
    console.log(key);
    
}
//! We can't iterate map using for-in loop