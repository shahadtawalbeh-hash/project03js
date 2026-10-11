function calculateGrade(score)
{

  if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid score";

 if(score >= 90)
 {
    return "A";
 }
 else if(score >=80)
 {
    return "B";
 }
 else if(score>=70)
 {
    return "C";
 }
 else if(score>=50)
 {
    return "D";
 }
 else
 {
  return "F";
 }

}

function checkAccess(age, hasTicket)
{
 if(typeof age !== "number" || age<0)
  {
    return false;
  } 

 if(typeof hasTicket !== "boolean")
  {
    return false;
  } 
 if(age>=18 && hasTicket ===true)
  {
    return true;
  } 
 else 
 { 
  return false; 
 } 

}
console.log("*** Testing calculateGrade() ***");
console.log("90=>" ,calculateGrade(90));
console.log("96=>" ,calculateGrade(96));
console.log("80=>" ,calculateGrade(80));
console.log("88=>" ,calculateGrade(88));
console.log("67=>" ,calculateGrade(67));
console.log("70=>" ,calculateGrade(70));
console.log("54=>" ,calculateGrade(54));
console.log("35=>" ,calculateGrade(35));
console.log("103=>" ,calculateGrade(103));
console.log("-20=>" ,calculateGrade(-20));
console.log("A=>" ,calculateGrade("A"));

console.log("*** Testing checkAccess() ***");
console.log("Age 23 ,ticket true => ",checkAccess(20,true));
console.log("Age 12 ,ticket true => ",checkAccess(12,true));
console.log("Age 40 ,ticket false => ",checkAccess(40,false));
console.log("Age 11 ,ticket false => ",checkAccess(11,false));
console.log("Age -4 ,ticket true => ",checkAccess(-4,true));









