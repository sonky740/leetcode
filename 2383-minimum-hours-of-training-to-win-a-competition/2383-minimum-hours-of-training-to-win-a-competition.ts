function minNumberOfHours(
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[]
): number {
  let answer = 0;
  let currentEnergy = initialEnergy;
  let currentExperience = initialExperience;

  for (let i = 0; i < energy.length; i++) {
    if (currentEnergy <= energy[i]) {
      answer += energy[i] - currentEnergy + 1;
      currentEnergy += energy[i] - currentEnergy + 1;
    }
    if (currentExperience <= experience[i]) {
      answer += experience[i] - currentExperience + 1;
      currentExperience += experience[i] - currentExperience + 1;
    }

    currentEnergy -= energy[i];
    currentExperience += experience[i];
  }

  return answer;
}