

import {describe, expect, test} from "@jest/globals"
import { sum } from "../src/index"

describe('sum module', () => {
    test('adds 1 + 2 to eq 3', () => {
        expect(sum(1, 2)).toBe(3);
    })
})