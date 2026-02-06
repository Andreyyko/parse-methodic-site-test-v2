import { PscyhoSectionMethodic } from "./PscyhoSectionMethodic";
import { LifeSectionMethodic } from "./LifeSectionMethodic";
import { KidsSectionMethodic } from './KidsSectionMethodic'

export async function getMethodicsSectionsBySlug(category: string) {
  const sections = [
    ...PscyhoSectionMethodic,
    ...LifeSectionMethodic,
    ...KidsSectionMethodic
  ];
  console.log("FETCH category:", category);

  return sections.find((m) => m.category === category) || null;
}
