const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = async ()=>{
  console.log('foo');
  //bar();
  setTimeout(bar, 0);
  const data = await new Promise((resolve, reject) =>{
    resolve('Shoud be right after baz, before bar');
  });
  console.log(data);
  baz();
};

foo();