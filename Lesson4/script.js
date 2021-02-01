const animals = [
    {
        animal: "Lyon",
        nickname: "Alex",
        weight: 150,
        isHealthy: 1,
        isAche: -1,
        warden: {
            name: "Petr",
            age: 50
        }
    }, 
    {
        animal: "Giraffe",
        nickname: "Melman",
        weight: 800,
        isHealthy: 1,
        isAche: -1,
        warden: {
            name: "John",
            age: 55
        }
    },
    {
        animal: "Hippopotamus",
        nickname: "Gloriya",
        weight: 1500,
        isHealthy: 1,
        isAche: -1,
        warden: {
            name: "Alehandro",
            age: 25
        }
    },
    {
        animal: "Zebra",
        nickname: "Marty",
        weight: 280,
        isHealthy: 1,
        isAche: -1,
        warden: {
            name: "Paul",
            age: 30
        }
    },
    {
        animal: "Elephant",
        nickname: "Bery",
        weight: 6000,
        isHealthy: 1,
        isAche: -1,
        warden: {
            name: "Ivan",
            age: 18
        }
    }
];

function zoo () { 
    return {
        showAnimal: function(ourAnimal) {
            console.log(`Наши животные:`)
            for (let i = 0; i < ourAnimal.length; i++) {
                console.log(`  ${ourAnimal[i].animal}`)
            }
        },

        showInfoAnimal: function(ourAnimal) {
            let request = prompt(`Введите животное о котором вы хотите посмотреть информацию`)
            let isCheck = false;
            
            for (let i = 0; i < ourAnimal.length; i++) {
                if (request === ourAnimal[i].animal) {
                    let animalHealth = ourAnimal[i].isHealthy > 0 && ourAnimal[i].isAche < 0 ? "здоров" : "болен";
                    isCheck = true;
                    alert(`
                        Животное - ${ourAnimal[i].animal};
                        Кличка - ${ourAnimal[i].nickname};
                        Вес - ${ourAnimal[i].weight};
                        Состояние здоровья - ${animalHealth};   
                        Смотритель - ${ourAnimal[i].warden.name} ${ourAnimal[i].warden.age} лет; 
                    `)
                }      
            }
            if (isCheck === false) {
                alert(`Такого животного у нас нет`)
            } 
        },
        
        addNewAnimal: function(ourAnimal, newAnimal) {
            ourAnimal.push(newAnimal);
            alert(`В нашем зоопарке пополнение`)
        },
     
        deleteAnimal: function(ourAnimal, delAnimal) {
            for (let i = 0; i < ourAnimal.length; i++) {
                if (delAnimal == ourAnimal[i].animal) {
                    ourAnimal.splice(i, 1)
                    alert(`${delAnimal} убежал(а)`)
                }
            }
        },

        renameNickNameAnimal: function(ourAnimal, findAnimal, newNickName) {
            for (let i = 0; i < ourAnimal.length; i++) {
                if (findAnimal === ourAnimal[i].animal) {
                    ourAnimal[i].nickname = newNickName;
                    alert(`Дети придумали новую кличку ${ourAnimal[i].animal} теперь он ${newNickName}`)
                }
            }
        },
        
        changeHelth: function(ourAnimal, findAnimal) {
            for (let i = 0; i < ourAnimal.length; i++) {
                if (findAnimal === ourAnimal[i].animal) {
                    ourAnimal[i].isHealthy = -1;
                    ourAnimal[i].isAche = 1; 
                    alert (`Наш ${findAnimal} приболел(`)                  
                }
            }
        },

        changeWarden: function(ourAnimal, findAnimal) {
            for (let i = 0; i < ourAnimal.length; i++) {
                if (findAnimal === ourAnimal[i].animal) {
                    ourAnimal[i].warden.name = 'Bob';
                    ourAnimal[i].warden.age = 29;
                    alert (`У ${findAnimal} сменился смотритель, теперь это ${ourAnimal[i].warden.name}`)
                }
            }
        }
    
    }
}  
let zooManager = zoo()

zooManager.deleteAnimal(animals, 'Zebra')   /* Удаление животного */

zooManager.renameNickNameAnimal(animals, 'Elephant', 'Dumbo')   /* Изменение клички животного */

zooManager.changeHelth (animals, 'Giraffe')     /* Изменение статуса здоровья животного */

zooManager.changeWarden (animals, 'Hippopotamus')       /* Изменение смотрителя */

zooManager.addNewAnimal(animals,    {animal: "Medoed",          /* Добавление животного */
                                    nickname: "Bandit",
                                    weight: 16,
                                    isHealthy: 1,
                                    isAche: -1,
                                    warden: {
                                        name: "Ivan",
                                        age: 18}})

zooManager.showAnimal(animals)      /* Показывает всех животных */

zooManager.showInfoAnimal(animals)      /* Показывает конкретное животное */