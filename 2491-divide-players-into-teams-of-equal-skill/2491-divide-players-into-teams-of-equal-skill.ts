function dividePlayers(skill: number[]): number {
  skill.sort((a, b) => a - b);

  const len = skill.length;
  let answer = 0;
  let prev = skill[0] + skill[len - 1];

  answer += skill[0] * skill[len - 1];

  let currSkill = prev;

  for (let i = 1; i < skill.length / 2; i++) {
    currSkill = skill[i] + skill[len - i - 1];

    if (prev !== currSkill) return -1;

    answer += skill[i] * skill[len - i - 1];
    prev = currSkill;
  }

  return answer;
}