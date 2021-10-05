const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () =>{
  console.log('foo');
  //bar();
  setTimeout(bar, 0);
  //baz();
  new Promise((resolve, reject) =>{
    resolve('Shoud be right after baz, before bar');
  }).then((response) => console.log(response));
  baz();
};

foo();