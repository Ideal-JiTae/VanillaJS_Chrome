//배열이 없다면...
//전부 작성해야됨
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

//이건 daysOfWeek 그냥 요일 쭉 더한거 
//위 변수들이 없더라면 아래는 오류가 나버리겠지...
const daysOfWeek = mon + tue + wed + thu + fri + sat + sun
console.log(daysOfWeek);

//이게 바로 배열
const daysOfWeekArray = [mon , tue , wed , thu , fri , sat , sun]
console.log(daysOfWeekArray);

const nonsence = [1,2,"hello",false,null,true,undefined,"JiTae"];
console.log(nonsence);

const days =["mon" , "tue" , "wed" , "thu" , "fri" , "sat" , "sun"];
//             0       1       2       3       4       5       6
console.log(days[5]); // -> sat 이 출력될거임!!

// Add one more array
days.push("sun");
console.log(days[6]);
console.log(days);