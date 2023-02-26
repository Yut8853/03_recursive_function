// 課題１

window.addEventListener('load', () => {

  //再帰を使って１から１０までの数をコンソールに出力してください。

  function printNumber(x) {
    // ここを実装してください
    if (x <= 10) {               // 例えばxが1の場合
      console.log(x); // 1を表示
      printNumber(x + 1); // 次、printNumberは2を返す
    }
  }
printNumber(1)
  // printNumberを使う時は、引数に１を入れます。
})

// 課題２

window.addEventListener('load', () => {

// 再帰を使って配列の各要素の値をコンソールに出力してください。

function printArray(array, index) {
  // ここを実装してください
  if (index < array.length) { // 配列の数だけ繰り返す
    console.log(array[index]) // indexは添字
    printArray(array,index + 1) // １を足してループ
  }
}

// printArrayは以下のように使います。
const array = [1, 2, 3, 4, 5];
const index = 0;
printArray(array, index);
})

// 課題３

window.addEventListener('load', () => {

// 再帰を使って30から50までの３で割り切れる整数をコンソールに表示してください。

  function printNumber(x) {
  // ここを実装する
  if (x % 3 === 0 && x >= 30 && x <= 50) {
    console.log(x);
  }
    printNumber(x + 1);
}

// printNumberは以下のように使う
printNumber(30);
})
