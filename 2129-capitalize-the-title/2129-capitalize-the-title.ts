function capitalizeTitle(title: string): string {
  title = title.toLocaleLowerCase();
  let words = title.split(' ');

  return words
    .map((word) => {
      if (word.length <= 2) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}