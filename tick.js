console.log('start');
process.nextTick(function() {
  process.nextTick(function() {
    console.log('inside nextTick callback');
  })
  console.log('nextTick callback');
})
console.log('scheduled');
