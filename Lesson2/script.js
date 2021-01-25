var data = {
    name:  "Артур",
    ourLost: 1000,
    ourArmy: 5000,
    enemiesLost: 10000,
    enemiesArmy: 12000,
}

alert (`Король Артур, мы победили вражескую армию в ${data.enemiesArmy}! Враг бежит, оставив на поле боя ${data.enemiesLost} павших воинов. Наши потери король Артур составили ${data.ourLost} героически павших воинов от всей нашей армии в ${data.ourArmy} солдат! Мы победили, сохранив ${data.ourArmy-data.ourLost} воинов. И можем продолжить преследовать остатки вражеской армии в ${data.enemiesArmy-data.enemiesLost} солдат. С победой король Артур!!`);

let question = {
    name: prompt ('Имя короля?'),
    ourArmy: prompt ('Сколько было войнов в армии короля?'),
    ourLost: prompt ('Потери армии короля?'),
    enemiesArmy: prompt('Cколько врагов было?'),
    enemiesLost: prompt ('Сколько враги потеряли воинов?')
}

alert (question.ourArmy-question.ourLost > 0 && question.enemiesArmy-question.enemiesLost > 0 ? 

    `Король ${question.name}, мы победили вражескую армию в ${question.enemiesArmy}! Враг бежит, оставив на поле боя ${question.enemiesLost} павших воинов. Наши потери король ${question.name} составили ${question.ourLost} героически павших воинов от всей нашей армии в ${question.ourArmy} солдат! Мы победили, сохранив ${question.ourArmy-question.ourLost} воинов. И можем продолжить преследовать остатки вражеской армии в ${question.enemiesArmy-question.enemiesLost} солдат. С победой король ${question.name}!`

    : 'Вы ввели недопустимое значение')


