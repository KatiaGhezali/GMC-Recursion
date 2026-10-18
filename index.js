function isPalindrome(word) {
  if (typeof word !== "string") {
    throw new TypeError("Input must be a string.");
  }

  // Base case: empty or single-character strings are palindromes
  if (word.length <= 1) {
    return true;
  }

  // If the first and last characters differ, it's not a palindrome
  if (word[0] !== word[word.length - 1]) {
    return false;
  }

  // Recursively check the remaining substring
  return isPalindrome(word.slice(1, -1));
}

// Tests
console.log("Palindrome tests:");
console.log(isPalindrome("gag"));
console.log(isPalindrome("kayak"));
console.log(isPalindrome("php"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("abba"));

console.log("\nNon-palindrome tests:");
console.log(isPalindrome("hello"));
console.log(isPalindrome("world"));

console.log("\nEdge cases:");
console.log(isPalindrome(""));
console.log(isPalindrome("a"));
console.log(isPalindrome("aa"));

console.log("\nInvalid input:");
try {
  isPalindrome(123);
} catch (error) {
  console.log(error.message);
}
