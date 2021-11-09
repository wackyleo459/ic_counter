import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'inc' : () => Promise<undefined>,
  'read' : () => Promise<bigint>,
  'write' : (arg_0: bigint) => Promise<undefined>,
}
