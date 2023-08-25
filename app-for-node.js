// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin,
//   output: process.stdout,
// })

// rl.question('Чи подобається вам програмування на JavaScript? (y/n)', (answer1) => {
//     rl.question('Чи знаєте ви що таке змінні, та як їх використовувати? (y/n)', (answer2) => {
//         rl.question('Чи бажаєте ви дізнатися більше про JavaScript? (y/n)', (answer3) => {
//             rl.question('Ви зрозуміли як використовувати консоль для виводу коду? (y/n)', (answer4) => {
// console.log(`Ваші відповіді: \n1. ${answer1}\n2. ${answer2}\n3. ${answer3}\n4. ${answer4}`);
//             rl.close();
//             })
            
//         })
//     })
// })

// Підключаємо модуль readline для взаємодії з консоллю
const readline = require('readline');

// Створюємо інтерфейс readline для введення та виведення тексту
const rl = readline.createInterface({
  input: process.stdin,   // Вхідний потік - клавіатура користувача
  output: process.stdout  // Вихідний потік - консоль
});

// Задаємо перше питання користувачеві та отримуємо відповідь в аргументі answer1
rl.question('Чи подобається вам програмування на JavaScript? (y/n)', (answer1) => {
  // Задаємо друге питання користувачеві та отримуємо відповідь в аргументі answer2
  rl.question('Чи знаєте ви що таке змінні, та як їх використовувати? (y/n)', (answer2) => {
    // Задаємо третє питання користувачеві та отримуємо відповідь в аргументі answer3
    rl.question('Чи бажаєте ви дізнатися більше про JavaScript? (y/n)', (answer3) => {
      // Задаємо четверте питання користувачеві та отримуємо відповідь в аргументі answer4
      rl.question('Ви зрозуміли як використовувати консоль для виводу коду? (y/n)', (answer4) => {
        // Після отримання всіх відповідей виводимо результат у консоль
        console.log(`Ваші відповіді: \n1. ${answer1}\n2. ${answer2}\n3. ${answer3}\n4. ${answer4}`);
        
        // Закриваємо інтерфейс readline
        rl.close();
      });
    });
  });
});
