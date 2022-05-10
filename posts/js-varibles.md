---
title: 'js var'
date: '2020-01-01'
---

# 基本觀念：認識不同的資料型別

# **變數**

JavaScript 是一種弱型別語言，不像 C/C++ 一樣要宣告變數的 type 像 `int` `float` `char`...等等，在 ES6 以後，基本上在 JavaScript 裡宣告變數的方式只有三種 `var` `let` `const` 。

但要注意的是，即使在 JavaScript 裡面不宣告變數也是能夠給定變數初始值，但這會讓變數成為一個**全域變數**，所以盡量避免不要不宣告變數。

```jsx
m = 1; // 對未宣告的變數 m 賦值
console.log(m); // 即使這樣也還是會顯示 1
```

## **變數的資料型別**

上述說過 JavaScript 是一種弱型別語言，變數本身其實不帶有資料型別的資訊，「值」才有。

所以判斷型別的方式沒辦法直接看變數宣告就明白，但我們可以利用 `typeof`。

在 JavaScript 主要可以分為基本型別(Primitives)與物件型別(Object)，基本型別有 `string`、`number`、`boolean`、`null`、`undefined` ，其餘的都可以歸類到物件型別裡面。

```jsx
typeof true; // 'boolean'
typeof 'Ray'; // 'string'
typeof 2021; // 'number'
typeof {}; // 'object'
typeof []; // 'object'

// 下面兩個要特別注意
typeof window.alert; // 'function'
typeof null; // 'object'
```

## **string 字串**

在 JavaScript 裡可以透過 `''` 跟 `""` 來宣告字串，基本上兩者沒什麼太大的差別，自己是比較習慣用雙引號。

```jsx
var str = '這是字串';
var str2 = '這也是字串';
```

## **number 數字**

JavaScript 沒有分是整數還是浮點數，一律都稱為 **`number` 。**

```jsx
var a = 10;
var b = 12.34;
```

## **boolean 布林值**

跟其他語言沒有太大差異。

```jsx
var a = true;
var b = false;
```

## **null 與 undefined**

這兩個類型的共通點是，`null`  型別只有一種值，就是  `null` ，而  `undefined`  類型也只有一種值，就是  `undefined`。

-   `undefined`  代表的是「(此變數) 還沒有給值，所以不知道是什麼」
-   `null`  代表的是「(此變數可能曾經有值，可能沒有值) 現在沒有值」

```jsx
var a; // undefined
var b = null; // null
```

## **Object**

所有基本型別 (Primitives) 以外的值都是物件。

```jsx
// 物件的宣告方式如下：
var person = new Object();
person.name = 'Ray';
person.age = 24;
person.sayHi = function(){
	console.log('Hi my name is' + this.name);
};

var person = {
	person.name = 'Ray',
	person.age = 24,
	person.sayHi = function(){
		console.log('Hi my name is' + this.name);
	},
};

// 物件的存取：
person.name;
person['name'];

// 屬性新增
person.school = 'NTUST';

// 屬性刪除
delete person.school;

// 判斷屬性是否存在
// 直接去存取屬性，若不存在則會回傳 undefined
person.school;
person['school'];
// 還有另外兩種方法，若不存在則是會回傳 false
'school' in person;
obj.hasOwnProperty('school');
```

## **Array**

JavaScript 的陣列可以看作是一種特別的「物件」。 陣列內可以是原始的資料類型、其他陣列、函式等等。 要注意的是，陣列是個有順序性的集合，且只能透過 `[]` 來存取。

```jsx
// 物件的宣告方式如下：
var a = new Array();
a[0] = 'apple';
a[1] = 'boy';
a[2] = 'cat';

var a = [];
a[0] = 'apple';
a[1] = 'boy';
a[2] = 'cat';

var a = ['apple', 'boy', 'cat'];

// 陣列的長度
a.length; // 3

// 新增元素至最後
a.push('dog'); // ["apple", "boy", "cat", "dog"];

// 移除最後一個
a.pop(); // ["apple", "boy", "cat"];

// array 具有許多 method，詳情可以自己 google
```

# JS 的賦值概念

上述也有提到，JS 的型別基本分為兩種：基本型別與物件型別，兩種在賦值與判斷上有很大的差別。基本型別是 pass by value，物件型別是 pass by reference。下面舉兩個簡單的例子：

```jsx
// 基本型別
var a = 10;
var b = a;

b = 100;
console.log(a, b); // 10, 100

// 物件型別
var a = { count: 1 };
var b = a;

b.count = 10;
console.log(a, b); // { count: 10 }, { count: 10 }
```

在大多數的情況下，基本型別是「傳值」，而物件型別會是「傳址」的方式，但凡事都有例外。事實上，JavaScript 不屬於單純的傳值或傳址。更準確一點來說，JavaScript 應該屬於透過 pass by sharing 來傳遞資料。

## **Pass by sharing**

「Pass by sharing」的特點在於，當 function 中的 obj 被重新賦值的時候，外部變數的內容是不會被影響的。

```jsx
var coin1 = { value: 10 };

function changeValue(obj) {
    obj = { value: 123 };
}

changeValue(coin1);
console.log(coin1); // 此時 coin1 仍是 { value: 10 }
```

如果不是重新賦值的情況，則又會回到大家所熟悉的狀況：

```jsx
var coin1 = { value: 10 };

function changeValue(obj) {
    // 僅更新 obj.value，並未重新賦值
    obj.value = 123;
}

changeValue(coin1);
console.log(coin1); // 此時 coin1 則會變成 { value: 123 }
```
