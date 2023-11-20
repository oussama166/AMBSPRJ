import Presentation from "@/Components/Presentation";
import Projets from "@/Components/Projets";
import References from "@/Components/References";
import Slider from "@/Components/Slider";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section
        id={"Hero"}
        className={`w-full h-screen bg-whiteAmbsi text-white `}>
        {/*    Hero section    Start*/}
        <section id={"heroSection"} className={"w-full h-full"}>
          <Slider />
        </section>
        {/*    Hero section End*/}
      </section>
      {/* Presentation */}
      <Presentation />
      {/* Nos Projets */}
      <Projets />
      {/* Nos Refercences */}
      <References />
    </main>
  );
}
