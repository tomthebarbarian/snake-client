const handleUserInput = (key) => {
  // your code here
  console.log(key);
  if (key === '\u0003') {
    console.log('Ended Connection');
    process.exit();
  }
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = setupInput;