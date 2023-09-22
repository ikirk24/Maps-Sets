// 1.
// new Set([1,1,2,2,3,4])
// returns {1,2,3,4}

//2. 
// [...new Set("referee")].join("")
// returns 'ref' 

//3. 
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// returns: {Array(3) => true, Array(3) => false}


// 4. 
const hasDuplicate = arr => new Set(arr).size !== arr.length;

//5. 
const vowel = char => "aeiou".includes(char);  

function vowelCount(str) {
    const vowMap = new Map(); 
    const lowerCaseStr = str.toLowerCase(); 
    for (let char of lowerCaseStr){
        if(vowel(char)){
            if (vowMap.has(char)){
                vowMap.set(char, vowMap.get(char) + 1);
            }
            else {
                vowMap.set(char, 1);
            }
        }
    }
    return vowMap;
}
