"use client";
import { InputForm } from "@/Components/Form";
import MapComponent from "@/Components/IframeMap";

function Contact() {
  return (
    <section className="w-full h-full flex flex-row items-center justify-center my-10 gap-10">
      <section className="w-1/2 h-full overflow-hidden m-5">
        <MapComponent />
      </section>
      <section className="w-1/2 h-full flex flex-col items-center gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-start text-3xl text-secondaryAmbsi font-semibold capitalize">
            Conatct nous
          </h1>
          <p className="max-w-[500px] text-base text-black ">
            Contactez-nous pour une assistance rapide et efficace. Nous sommes
            là pour rendre votre expérience agréable.
          </p>
        </div>
        <InputForm />
      </section>
    </section>
  );
}

export default Contact;
