// Функция для вычисления биномиального коэффициента C(n,k), n - кол-во бросков, k - успех
function binomialCoefficient(n, k) {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    let result = 1;
    for (let i = 1; i <= k; i++) {
        result *= (n - i + 1) / i;
    }
    return result;
}

// Функция для вычисления вероятности ровно k орлов при n подбрасываниях
function probabilityExactHeads(n, k) {
    const totalOutcomes = 2 ** n; // общее число исходов
    const favorable = binomialCoefficient(n, k); // число благоприятных исходов
    return favorable / totalOutcomes;
}

const n = 3; // количество бросков
const k = 2; // количество орлов

const probability = probabilityExactHeads(n, k);
console.log(`Вероятность выпадения ровно ${k} орлов при ${n} бросках: ${probability} (${(probability * 100).toFixed(2)}%)`);