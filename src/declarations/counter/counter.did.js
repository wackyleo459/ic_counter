export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'inc' : IDL.Func([], [], []),
    'read' : IDL.Func([], [IDL.Nat], ['query']),
    'write' : IDL.Func([IDL.Nat], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
