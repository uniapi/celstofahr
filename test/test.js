/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 12, 2018
*************************************************************************/

import * as assert from 'assert'
import { celstofahr } from './index.js'

describe('celstofahr', () => {
  it('cold', () => assert.strictEqual(celstofahr(-20), -4));
  it('cool', () => assert.strictEqual(celstofahr(0), 32));
  it('warm', () => assert.strictEqual(celstofahr(15), 59));
  it('hot', () => assert.strictEqual(celstofahr(40), 104));
  it('bake', () => assert.strictEqual(celstofahr(55), 131));
});
