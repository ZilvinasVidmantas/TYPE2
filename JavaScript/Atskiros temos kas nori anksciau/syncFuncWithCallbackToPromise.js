const wait = (ms) => new Promise(res => setTimeout(() => res(), ms));

(async () => {
  await wait(1000);
  console.log('1')
  await wait(1000);
  console.log('2')
  await wait(1000);
  console.log('3')
  await wait(1000);
  console.log('4')
})();