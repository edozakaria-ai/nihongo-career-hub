/** Utilitas kuis deterministik (hasil sama di server & klien → tanpa hydration mismatch). */

export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Acak urutan secara deterministik berdasarkan seed string. */
export function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  const arr = [...items];
  let h = hashString(seed) || 1;
  for (let i = arr.length - 1; i > 0; i--) {
    h = (Math.imul(h, 1103515245) + 12345) >>> 0;
    const j = h % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Buat soal pilihan ganda: jawaban benar + pengecoh unik, diacak dengan seed. */
export function buildChoices(correct: string, pool: readonly string[], seed: string, count = 4) {
  const distractors = seededShuffle(
    pool.filter((p) => p !== correct),
    `${seed}-d`,
  )
    .filter((p, i, a) => a.indexOf(p) === i)
    .slice(0, count - 1);
  const options = seededShuffle([correct, ...distractors], seed);
  return { options, answerIndex: options.indexOf(correct) };
}
