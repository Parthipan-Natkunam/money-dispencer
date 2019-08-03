import { calculateNoteDispense, countNotes, resultObject } from "../Utils";

let resultArray: Array<resultObject> | undefined = void 0;

let referenceOutput1 = [
  { count: 0, note: 2000 },
  { count: 0, note: 500 },
  { count: 1, note: 100 },
  { count: 0, note: 50 },
  { count: 0, note: 20 },
  { count: 0, note: 10 },
  { count: 0, note: 5 },
  { count: 0, note: 2 },
  { count: 0, note: 1 }
];

referenceOutput1 = referenceOutput1.reverse();

let referenceOutput2 = [
  { count: 0, note: 2000 },
  { count: 1, note: 500 },
  { count: 1, note: 100 },
  { count: 1, note: 50 },
  { count: 0, note: 20 },
  { count: 0, note: 10 },
  { count: 0, note: 5 },
  { count: 1, note: 2 },
  { count: 1, note: 1 }
];

referenceOutput2 = referenceOutput2.reverse();

let referenceEmptyOutput = [
  { count: 0, note: 2000 },
  { count: 0, note: 500 },
  { count: 0, note: 100 },
  { count: 0, note: 50 },
  { count: 0, note: 20 },
  { count: 0, note: 10 },
  { count: 0, note: 5 },
  { count: 0, note: 2 },
  { count: 0, note: 1 }
];

referenceEmptyOutput = referenceEmptyOutput.reverse();

it('dispencer function returns undefined for null input parameter', () => {
  resultArray = calculateNoteDispense(null);
  expect(resultArray).toBeUndefined();
});

it('dispencer function returns undefined for undefined input parameter', () => {
  resultArray = calculateNoteDispense(void 0);
  expect(resultArray).toBeUndefined();
});

it('dispencer function returns all counts a zero for empty string', () => {
  resultArray = calculateNoteDispense(" ");
  expect(resultArray).toBeUndefined();
});

it('dispencer function returns undefined for empty string', () => {
  resultArray = calculateNoteDispense(" ");
  expect(resultArray).toBeUndefined();
  resultArray = calculateNoteDispense("");
  expect(resultArray).toBeUndefined();
});

it('dispencer function returns undefined for an invalid string', () => {
  resultArray = calculateNoteDispense("S_eudjh@2");
  expect(resultArray).toBeUndefined();
});

it('returns proper array and counts for proper input', () => {
  resultArray = calculateNoteDispense("100");
  let count = countNotes(resultArray);
  expect(resultArray).toEqual(referenceOutput1);
  expect(count).toEqual(1);
  resultArray = calculateNoteDispense("653");
  count = countNotes(resultArray);
  expect(resultArray).toEqual(referenceOutput2);
  expect(count).toEqual(5);
});