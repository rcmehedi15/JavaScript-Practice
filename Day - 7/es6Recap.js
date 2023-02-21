// 1. Var let const 
// break up with var
const numbers = [12,33,44,55];
let salary = 44;
salary = 55;

// 2. default parameters
function calculateSalary(salary,tax,bonus){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}
// 3. template string 
<div> 
    `
    <h3>Name: </h3>
    <h3>Address:</h3>
    <h3>salary: ${calculateSalary(2000,0,0)}</h3>
    <p>Others: ${numbers[2]}</p>

    `
</div>

// 4.Arrow function 
const doubleIt = x => x * 2;
const calculateSalary2 = (salary,tax,bonus) => salary - salary * tax + bonus;

// 5. spread

const ages = [11,13,14,15,16];
const newAge = [...ages,22,23,24];

// 6.destructuring
const{x,y,z, ...c} = {x:45, y:12,z:33, name:'Sakib al hasan', salary: 44}
const [a,b] = [11,33,44, 55, 66];