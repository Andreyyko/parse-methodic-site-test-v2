import { PscyhoSectionMethodic } from "@/constant/methodics-sections/PscyhoSectionMethodic";
import { LifeSectionMethodic } from "@/constant/methodics-sections/LifeSectionMethodic";

export async function getMethodicBySlug(slug: string) {
  const sections = [
    ...PscyhoSectionMethodic,
    ...LifeSectionMethodic,
  ];

  for (const section of sections) {
    const method = section.methods.find((m) => m.slug === slug);

    if (method) {
      return {
        ...method,
        category: section.category,
        sectionTitle: section.title,
        heroImage: section.heroImage,
      };
    }
  }

  return null;
}
