// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// const string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
// let pattern = /love/gi
// console.log(string.match(pattern).length)

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

// const string = 'You cannot end a sentence with because because because is a conjunction.' 
// let pattern = /because/gi
// console.log(string.match(pattern).length)

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

// const regex = /[^a-zA-Z ]/g;
// console.log(sentence.replace(regex, '').toLocaleLowerCase().split(' '));


//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
//SOLVED WITH THE HELP OF AI

const income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regEx = /\d+/g
let num = income.match(regEx).map(Number)

let annualSalary = num[0] * 12;
let annualBonus = num[1]; // годовой бонус оставляем как есть
let annualCourses = num[2] * 12;

console.log(annualBonus +  annualCourses + annualSalary)

