function serialize(arr) {
    let serialized = '';
    let prev = arr[0];
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === prev) {
            count++;
        } else {
            serialized += prev + count;
            prev = arr[i];
            count = 1;
        }
    }

    serialized += prev + count;
    return serialized;
}

function deserialize(str) {
    let arr = [];
    for (let i = 0; i < str.length; i += 2) {
        let num = parseInt(str[i]);
        let count = parseInt(str[i + 1]);
        for (let j = 0; j < count; j++) {
            arr.push(num);
        }
    }
    return arr;
}

// Тестирование
const tests = [
    [1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 5], // простейшие короткие
    Array.from({ length: 50 }, () => Math.floor(Math.random() * 300)), // случайные - 50 чисел
    Array.from({ length: 100 }, () => Math.floor(Math.random() * 300)), // случайные - 100 чисел
    Array.from({ length: 500 }, () => Math.floor(Math.random() * 300)), // случайные - 500 чисел
    Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300)), // случайные - 1000 чисел
    Array.from({ length: 900 }, (_, index) => index % 10), // каждое число по 3 - всего чисел 900
];

tests.forEach((test, index) => {
    const serializedString = serialize(test);
    const deserializedArray = deserialize(serializedString);
    const compressionRatio = serializedString.length / (test.length * 2);

    console.log(`Тест ${index + 1}:`);
    console.log("Исходный массив:", test);
    console.log("Сериализованная строка:", serializedString);
    console.log("Десериализованный массив:", deserializedArray);
    console.log("Коэффициент сжатия:", compressionRatio);
    console.log("-------------------------");
});
