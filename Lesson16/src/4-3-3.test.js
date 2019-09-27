import { Identity, Failure } from './functors';

test('Imperative Example', () => {
  function averageWordLengthInSentence(sentence) {
    if (typeof sentence != 'string') return;
    let words = sentence.split(' ');
    let count = [];
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
      if (!words[i].length || words[i].length == 0) continue;
      count.push(words[i].length);
      sum += words[i].length;
    }
    return Math.round(sum / words.length);
  }
  let res = averageWordLengthInSentence(
    'The big brown fox jumped over the lazy cat'
  );
  expect(res).toBe(4);
});

test('Higher-Kinded Types', () => {
  let id = Identity.from('bob');
  expect(id.get()).toBe('bob');
  expect(id).toBeInstanceOf(Identity);

  let failed = Failure.from([1, 2, 3]);
  expect(failed.get().toString()).toBe('1,2,3');
  expect(failed).toBeInstanceOf(Failure);
});
