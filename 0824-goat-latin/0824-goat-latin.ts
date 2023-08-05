function toGoatLatin(sentence: string): string {
    // vowels set
    const vowels: Set<string> = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const words: string[] = sentence.split(' ');

    // Iterate over each word
    for (let i = 0; i < words.length; i++) {
        let word: string = words[i];
        if (!vowels.has(word[0])) {
            // If the word begins with a consonant, remove the first letter, append it to the end
            word = word.substring(1) + word[0];
        }
        // append "ma" to the end of the word
        word += 'ma';

        // Add 'a's to the end of each word, where number of 'a's is its position in the sentence
        word += 'a'.repeat(i + 1);

        words[i] = word;
    }

    return words.join(' ');
}
