let question_arr = ["Ближе какого расстояния от железнодорожного переезда водителю транспортного средства запрещена стоянка?","Какой из способов буксировки запрещен на горных дорогах?","Знаки какой группы указывают обязательные направления движения или разрешают некоторым участникам движение по проезжей части или на отдельных ее участках, а также вводят или отменяют некоторые ограничения?","Обгоном считается:","Какие внешние приборы должен обязательно включить водитель механического транспортного средства при въезде в неосвещенный тоннель?"]
let a1_arr = ["50 м.","Буксировка на гибкой сцепке.","Предупреждающие знаки.","Движение по крайней левой полосе с более высокой скоростью, чем скорость движения в крайней правой полосе.","Ближний свет фар."]
let a2_arr = ["100 м.","Буксировка на жесткой сцепке.","Знаки приоритета."," В том числе движение по правой обочине, так как скорость движения обгоняемого транспортного средства менее 30 км/ч.","Противотуманные фары."]
let a3_arr = ["150 м.","Буксировка способом частичной погрузки.","Предписывающие знаки.","Ответы, указанные в пунктах 1, 2.","Габаритные огни."]
let a4_arr = ["200 м.","Буксировка любым способом.","Информационно-указательные знаки.","Опережение одного или нескольких транспортных средств, связанное с выездом на полосу встречного движения.","Ближний или дальний свет фар."]
let answer_arr = ["50 м.","Буксировка на гибкой сцепке.","Предписывающие знаки.","Опережение одного или нескольких транспортных средств, связанное с выездом на полосу встречного движения.","Ближний или дальний свет фар."]
let n_right_answer_arr = [1,1,3,4,4]
let n_right_answer = 1;
let right_answers = 0;
let n_answer = 4;

question.innerHTML=question_arr[n_question.value];
a1.innerHTML = a1_arr[n_question.value];
a2.innerHTML = a2_arr[n_question.value];
a3.innerHTML = a3_arr[n_question.value];
a4.innerHTML = a4_arr[n_question.value];
answer.innerHTML = answer_arr[n_question.value];

n_right_answer = n_right_answer_arr[n_question.value];
console.log(n_question.value)
btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
btn2.addEventListener("click", f_out2);
  function f_out (){
        console.log(y1.checked);
        console.log(y2.checked);
        console.log(y3.checked);
        console.log(y4.checked);

        if (y1.checked){ n_a = 1;}
        if (y2.checked){ n_a = 2;}
        if (y3.checked){ n_a = 3;}
        if (y4.checked){ n_a = 4;}
        console.log(n_a);
        
        if (n_a == n_right_answer){
        right_answers += 1;
        right_div.classList.remove("hidden");
        wrong_div.classList.add("hidden");
        console.log("n_question.value = "+n_question.value);
        console.log("n_answer = "+n_answer);
        if (n_question.value == n_answer){
            btn2.classList.add("hidden");
            let el1 = document.createElement("p");
            el1.innerHTML = "<b>"+right_answers+"</b>";
            right_div.appendChild(el1);
        }
        }
        else{
        right_answers-=1;
        right_div.classList.add("hidden");
        wrong_div.classList.remove("hidden");
        }
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }
  function f_out2 (){
    right_div.classList.add("hidden");
    k = Number(n_question.value);
    k+=1;
    n_question.value = k;
    console.log(n_question)
    question.innerHTML=question_arr[n_question.value];
    a1.innerHTML = a1_arr[n_question.value];
    a2.innerHTML = a2_arr[n_question.value];
    a3.innerHTML = a3_arr[n_question.value];
    a4.innerHTML = a4_arr[n_question.value];
    answer.innerHTML = answer_arr[n_question.value];
    
    n_right_answer =n_right_answer_arr[n_question.value];
    
  }