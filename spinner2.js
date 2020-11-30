let word = "|/-\\-\|";
for (let i = 0; i < word.length ; i++) {
  setTimeout(() => process.stdout.write(`\r${word[i]}   `), i * 200 + 100);
  if (i === word.length - 1){
    setTimeout(() => process.stdout.write('\n'), word.length * 200 + 100);
  }
}

