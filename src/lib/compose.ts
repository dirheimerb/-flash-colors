function compose<A, B, C>(
  a: (arg: B) => C,
  b: (arg: A) => B
): (arg: A) => C {
  return function (arg: A): C {
    return a(b(arg));
  };
}

export default compose;
