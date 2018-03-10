// function getTempCallback (location, callback) {
//   callback(undefined, '79');
//   callback('City not found');
// }
//
// getTempCallback('Delhi', function(err, temp) {
//   if (err) {
//     console.log('err', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Delhi').then(function (resolve) {
//   console.log('promise success', resolve);
// }, function (reject) {
//   console.log('promise error', reject);
// });

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('a & b need to be numbers');
    }
  });
}

addPromise(2, 3).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});

addPromise(2, 'hello').then(function (sum) {
  console.log('this should not show up');
}, function (err) {
  console.log('This should appear', err);
});
