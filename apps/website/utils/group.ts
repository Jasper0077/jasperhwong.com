import { Group } from "@/types/Group";

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function group<T>(items: T[], numGroups: number): Group<T> {
  const shuffledObjects = shuffleArray([...items]);
  const groups: T[][] = Array.from({ length: numGroups }, () => []);
  shuffledObjects.forEach((obj, index) => {
    const groupIndex = index % numGroups;
    groups[groupIndex].push(obj);
  });

  return groups;
}
