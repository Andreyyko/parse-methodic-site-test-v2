import { PscyhoSectionMethodic } from "./PscyhoSectionMethodic";
import { LifeSectionMethodic } from "./LifeSectionMethodic";
import { KidsSectionMethodic } from './KidsSectionMethodic'
import { CommunicateMethodic } from './CommunicateMethodic'

export async function getMethodicsSectionsBySlug(category: string) {
  const sections = [
    ...PscyhoSectionMethodic,
    ...LifeSectionMethodic,
    ...KidsSectionMethodic,
    ...CommunicateMethodic
  ];
  console.log("FETCH category:", category);

  return sections.find((m) => m.category === category) || null;
}
