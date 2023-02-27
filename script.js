// First
for (let i = 5; i <= 100; i++){
  console.log(i);
}

// Second
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (i = 0; i < array1.length; i++) {
  if (array1[i] > 0 && array1[i] < 10){
    console.log(array1[i]);
  }
}

// Third

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = 0; i < array2.length; i++) {
  if(array2[i] == 5){
    console.log('არის');
    break;
  }
}

// Fourth

let array3= [1, 2, 3, 4, 5];

let jami = 0

for(i = 0; i < array3.length; i++){
  jami += array3[i];
}
console.log(jami);

// Fifth

let array4 = [1, 2, 3, 7, 6, 9];

let sum = 0

for(i = 0; i < array4.length; i++){
  sum += array4[i];
}

let sashualo = sum / array4.length;

console.log(sashualo);

// Sixth

let array5 = [1, 2, 3, 7, 6, 9];

for(i = 0; i < array5.length; i++){
  if(array5[i] == 7){
    continue;
    }
    console.log(array5[i]);
}

// Seventh

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active"
};
delete user.studentstatus;
console.log(user);

// Eighth

let user2 = {
  name: 'giorgi',
  age:  20,
  studentstatus: 'active'
}
if (user2.age < 18 && user.studentstatus == 'active'){
  console.log('Hello');
}
else if (user2.name == 'levani'){
  console.log('Hello Levani');
}
else if (user2.studentstatus == 'active' || user.age < 25){
  console.log('Hello World');
}
else {
  console.log('Error');
}

// Ninth

let array = [ [2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10] ];

for (let i = 0; i < array.length; i++) {
  let i2 = array[i];
  if (i2 > 0) {
    console.log(i2);
  }
}

// Tenth 

let array10 = [2, 3, 5, 10, 25, 24, 11, 100 , 6, 7, 10];

for (let item of array10){
  if (item % 2 == 0){
    console.log(item)
    }
}

// Eleventh

let users = [
  {username: 'giorgi', status: false},
  {username: 'levani', status: false},
  {username: 'anna', status: true}
]
for (i = 0; i < users.length; i++){
  if (users[i].status == true) {
    console.log(users[i]);
  }
}


