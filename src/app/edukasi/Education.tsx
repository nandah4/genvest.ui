import CtaSectionEdu from "./sections/CtaSectionEdu";
import SectionFourEdu from "./sections/SectionFourEdu";
import SectionOneEdu from "./sections/SectionOneEdu";
import SectionThreeEdu from "./sections/SectionThreeEdu";
import SectionTwoEdu from "./sections/SectionTwoEdu";
import SectionTipsEdu from "./sections/SectionTipsEdu";
import SectionLegalEdu from "./sections/SectionLegalEdu";

const EducationPage = () => {
  return (
    <main>
      <SectionOneEdu />
      <SectionTwoEdu />
      <SectionThreeEdu />
      <SectionTipsEdu />
      <SectionLegalEdu />
      <SectionFourEdu />
      <CtaSectionEdu />
    </main>
  );
};
export default EducationPage;
