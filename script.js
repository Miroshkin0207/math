let last = -1
let number = 0
function getFormula() {
    const footer = document.querySelector("footer")
    const formula = document.querySelector(".formula")
    
    do {
        number = getRandom(0, formulas.length - 1)  
    } while (number == last)
    last = number
    
    const randomFormula = formulas[number]
    formula.innerHTML = randomFormula

    if (window.matchMedia("(min-width: 1000px)").matches && formula.offsetHeight > window.innerHeight) {
        footer.classList.add("relativeFooter")
    }
    else if (window.matchMedia("(max-width: 999px)").matches && formula.offsetHeight > window.innerHeight) {
        footer.classList.add("relativeFooter")
    }
}

function getRandom(min, max) {
    return min + Math.floor(Math.random() * max - min + 1)
}

const formulas = [
    "От перестановки мест слагаемых сумма не меняется: <br>a+b=b+a",
    "Сочетательный закон сложения: (a+b)+c=(a+c)+b",
    "От перестановки мест множителей произведение не меняется: <br>a·b=b·a",
    "Сочетательный закон умножения: (a·b)·c=(a·c)·b",
    "Модуль числа - это расстояние на прямой от точки, соответствующей этому числу, до начала координат. Обозначается так: |5|. <br>|2|=2 <br>|-9|=9 <br>|0|=0",
    "Чтобы сложить или вычесть числа с одинаковыми знаками, надо сложить их модули и поставить перед результатом их общий знак. <br>5+2=|5|+|2|=5+2=+7=7 <br>-3-4=|-3|+|-4|=3+4=7",
    "Чтобы сложить или вычесть числа с разными знаками, надо из модуля числа, большего по модулю, вычесть модуль другого числа. <br>-5+4=|-5|-|4|=5-4=1",
    "При умножении и делении чисел с разными знаками, результат будет отрицательным: -5·2=-10",
    "При умножении и делении чисел с одинаковыми знаками, результат будет положительным. <br>3·4=12 <br>-5·(-7)=35",
    "Противоположные числа - это числа, равные по модулю, но разные по знакам. Например: 5 и -5, -3 и 3. <br>Сумма противоположных чисел равна 0",
    
]