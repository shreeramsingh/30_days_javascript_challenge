// //
// function fact(n){
//   if(n==0){
//     return 1;
//   }
//   return n*fact(n-1);
// }
// console.log(fact(5));
// let a=0,b=1;
// function fibi(n){
//   console.log(a,b);
//   let s=a+b;

// }
// const arr=[2,3,6,8,9];
// function Rsum(a,i=0,sum=0){
//   if(i==a.length){
//     return 0;
//   }
//   return Rsum(a[i],i+1,sum+i);
// }
// console.log(Rsum(arr,0,0))

//Task 1 - Write a recusive function to calculate the factorial of a number
function factorial(n){
  if(n <= 1) return 1;
  return n * factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(6));

console.log("-----------------------------------------");
//Task 2 - Write a recursive to calculate the nth fibonacci number. Log the result for a few test case.
function fib(n){
  if(n < 0) return 0;
  if(n == 0 || n == 1) return n;
  return fib(n-1) + fib(n-2);
}

console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));

//Task 3 - Write a recursive function to find the sum of all elements in an array. Log the result to the console for few test cases
const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3];
const arr3 = [];
const arr4 = [2, 3, 4, -1, 2, -5];
function sum(ar, ind, length){
    if(ind == length){
        return 0;
    }

    return arr[ind] + sum(ar, ind+1, length)
}

console.log(sum(ar, 0, ar.length));
console.log(sum(arr2, 0, arr2.length));
console.log(sum(arr3, 0, arr3.length));
console.log(sum(arr4, 0, arr4.length));

console.log("-------------------------------------------------------------")

//Task 4 - Write a recusive function to find the maximum elemtn in an array. Log the result for a few test cases

function maxInArray(arr, index = 0, length = arr.length, max = Number.MIN_VALUE){
    if(index === length){
        return max;
    }
    
    max = Math.max(max, arr[index]);
    return maxInArray(arr, index+1, length, max);
}

const arr5 = [2, 2, 432, 1212, 343, 2311, 4343, -65655, -12212, 3221, 4348, -1222];
console.log(maxInArray(arr));
console.log(maxInArray(arr2));
console.log(maxInArray(arr4));
console.log(maxInArray(arr5));

//Task 5 - Write a recursive function to rever a string. Log the result for a test case;

function reversestr(str, start = str.length, end = 0, ans = ""){
  if(start === end){
      ans += str.charAt(start);
      return ans;
  }

  return reversestr(str, start - 1, end, ans += str.charAt(start));
}


console.log(reversestr("abcd"));
console.log(reversestr(""));
console.log(reversestr("john cena"));

console.log("----------------------------------------------------------------------");

// Task 6  write a recursive function to check if a string is a palindrome. Log the result for a few test case.
function checkPalindrome(str, s = 0, e = str.length-1){
  if(str.length == 0) return true;
  if(s>=e) return true;
  if(str.charAt(s) != str.charAt(e)) return false;
  return checkPalindrome(str, s+1, e-1);
}
console.log(checkPalindrome("abba"));
console.log(checkPalindrome("abcba"));
console.log(checkPalindrome("abcdba"));
console.log(checkPalindrome("step on no pets"));

//Task 7 - Write a recusive function to perform a binary search on a sorted arary. Log the index of the target elemnt for a few test cases.

function binarySearch(arr, target, s=0, e = arr.length-1){
  if(s>e){
      return -1;
  }
  let mid = s + (e-s)/2;
  if(arr[mid] == target) return mid;

  if(arr[mid]<target){
      return binarySearch(arr, target, mid+1, e);
  }
  
  return binarySearch(arr, target, s, mid -1);

}

const arr = [2, 3, 4, 9, 9 ,9, 12, 14, 51];
console.log(binarySearch(arr, 14));
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 67));
console.log(binarySearch(arr, 73));

console.log("-------------------------------------------------------------");
//Task 8 - Write a recursive function to count the occurences of a target elemnet in arrary and log the result for few test cases

function countOccurence(arr, target, ind = 0, e = arr.length, count = 0){
  if(ind == e){
      return count;
  }

  if(arr[ind] == target) count = count + 1;

  return countOccurence(arr, target, ind+1, e, count);
}
console.log(countOccurence(arr, 9));
console.log(countOccurence(arr, 14));
console.log(countOccurence(arr, 17));
console.log(countOccurence([], 17));

class TreeNode {
  constructor(val){
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

const TreeNode = require("./TreeNode.js");

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(19);

// console.log(root.val);
// console.log(root.left.val);
// console.log(root.right.val);
// console.log(root.left.left.val);
// console.log(root.left.right.val);
// console.log(root.right.left.val);
// console.log(root.right.right.val);


//Task 9 - Write a recusive function to perform an in-oder tarversal of a binary tree. Log the nodes as they are visited
function inorderTrav(root){
    if(root == null) return;
    inorderTrav(root.left);
    process.stdout.write(root.val + " ");
    inorderTrav(root.right);
}
inorderTrav(root);

console.log()
console.log("------------------------------------------------------------------------");
//Task 10 - Write a recusive function to calculate the depth of a binary tree. Log the result for a few test cases.

function depthoFTree(root){
    if(root == null) return 0;
    return 1 + Math.max(depthoFTree(root.left), depthoFTree(root.right));
}

console.log(depthoFTree(root));
root.left.left.left = new TreeNode(1);
console.log(depthoFTree(root));
inorderTrav(root);
console.log()