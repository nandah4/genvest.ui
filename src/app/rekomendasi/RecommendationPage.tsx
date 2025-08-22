import SectionCardRec from "./sections/SectionCardRec";
import SectionOneRec from "./sections/SectionOneRec";

export default function RecommendationPage() {
  return (
    <main className="bg-minor-grey">
      <SectionOneRec />
      <SectionCardRec />
    </main>
  );
}
