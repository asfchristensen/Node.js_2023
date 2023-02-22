const rocks = [
    { name: "Pet rock", age: 2 },
    { name: "Led Zeppelin", age: 55 },
    { name: "Dwayne Johnson", age: 50 },
    { name: "Neptune", age: 100_000_000_000 }
];

// 1# assignment make all the rocks one year older and save the value to rocksAgedOneYear 

const rocksAgedOneYearSolution1 = rocks.map(rock => {
    return { ...rock, age: rock.age+1 };
});

console.log(rocksAgedOneYearSolution1);

// another solution

const rocksAgedOneYear2 = rocks.map(rock => (
    {
        name: rock.name,
        age: rock.age + 1
    }
));

console.log(rocksAgedOneYear2)

// #2 assignment give me the 3 rocks that have even ages

const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0);
console.log(evenAgedRocks);




