import { PscyhoSectionMethodic } from "./PscyhoSectionMethodic";
import { LifeSectionMethodic } from "./LifeSectionMethodic";

export async function getMethodicsSectionsBySlug(category: string) {
  const sections = [
    ...PscyhoSectionMethodic,
    ...LifeSectionMethodic,
  ];
  console.log("FETCH category:", category);

  return sections.find((m) => m.category === category) || null;
}
