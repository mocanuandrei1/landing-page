import React from "react";
import CTAImage from "../assets/images/cta-section/CTAImage.webp";
import { useMediaQuery } from "react-responsive";

const CTASection = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <section className="landingPageSection px-5">
      <div className="mb-10">
        <h2 className="text-center mb-5">
          DESCOPERĂ POMPELE DE CĂLDURĂ ABC ENERGY
        </h2>
        <h2 className="text-center">
          CONFORT TERMIC SUSTENABIL {""}
          <span className="block md:inline">ÎN PROPRIA TA CASĂ!</span>
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center p-[30px] border-2 border-black rounded-2xl text-energy-grey text-md">
        <img src={CTAImage} alt="Pompa de caldura" className="xl:w-[50%]" />
        {isMobile ? (
          <div className="pt-5">
            <p className="pb-2.5">
              Vrei să <b>reduci costurile</b> pentru încălzirea și răcirea
              locuinței tale? În același timp, îți dorești un{" "}
              <b>partener de încredere autorizat</b>, ce îți poate livra{" "}
              <b>soluția la cheie</b> într-un mod{" "}
              <b>rapid, sigur și eficient</b>? Atunci <b>ABC Energy</b> este{" "}
              <b>soluția perfectă!</b>
            </p>
            <p className="pb-2.5">
              <b>Cum anume?</b> Prin alegerea unei soluții moderne și optime
              energetic: <b>pompa de căldură</b> (centrală cu pompă de căldură
              sau varianta cu centrală deja montată){" "}
              <b>și întregul pachet de consiliere necesar</b>. Cu pompele de
              căldură ABC Energy, poți reduce emisiile de gaze cu efect de seră
              și consumul de energie, <b>contribuind activ</b> la un{" "}
              <b>viitor mai verde</b>, și{" "}
              <b>economisind o valoare substanțială de bani pe termen lung</b>{" "}
              pentru tine și întreaga familie, luând în considerare anumite
              criterii esențiale, precum: spațiul și izolația casei, centrala
              casei etc.
            </p>
            <p className="pb-2.5">
              Transformă-ți casa într-o oază de liniște{" "}
              <b>cu aproape zero consum</b> și bucură-te de confort fără griji!
              Noi <b>ne ocupăm de tot</b>, de la evaluare până la implementare,
              pentru a aduce plus valoare pe piața energetică a României.
              Alătură-te călătoriei noastre sustenabile!
            </p>
          </div>
        ) : (
          <div className="xl:w-[50%]">
            <p className="pb-2.5">
              Vrei să contribui la un <b>mediu sustenabil</b> și să{" "}
              <b>reduci costurile</b> pentru încălzirea și răcirea locuinței
              tale?
            </p>
            <p className="pb-2.5">
              În același timp, îți dorești un{" "}
              <b>partener de încredere autorizat</b>, ce îți poate livra{" "}
              <b>soluția la cheie</b> într-un mod{" "}
              <b>rapid, sigur și eficient</b>?
            </p>
            <p className="pb-2.5">
              <b>ABC Energy este soluția perfectă!</b> Ca partener Ariston
              România, îți putem oferi toate răspunsurile și suportul necesar
              pentru a identifica <b>cea mai bună variantă</b> pentru locuința
              ta.
            </p>
            <p className="pb-2.5">
              <b>Cum anume mai exact?</b> Prin alegerea unei soluții moderne și
              optime energetic: <b>pompa de căldură</b> (centrală cu pompă de
              căldură sau varianta cu centrală deja montată){" "}
              <b>și întregul pachet de consiliere necesar</b>. Cu pompele de
              căldură ABC Energy, poți reduce emisiile de gaze cu efect de seră
              și consumul de energie,{" "}
              <b>contribuind activ la protejarea mediului</b> înconjurător, și{" "}
              <b>economisind o valoare substanțială de bani</b> pe termen lung
              pentru tine și întreaga familie, luând în considerare anumite
              criterii esențiale, precum: spațiul și izolația casei etc.
            </p>
            <p className="pb-2.5">
              De ce să nu te bucuri de confort și oportunitatea de a îți
              transforma casa într-o oază de liniște{" "}
              <b>cu aproape zero consum (nZEB)</b>, când ai posibilitatea să
              poți implementa asta chiar acum? Stai fără griji! Ne ocupăm noi de
              tot, de la programarea unei vizite chiar la tine acasă până la
              finalizarea lucrării de a avea soluția implementată și garantată!
            </p>
            <p className="pb-2.5">
              Numai sta pe gânduri căci noi am pornit această misiune de a aduce
              un plus valoare pe piața energetică a României, într-un mod
              sustenabil și eficient și tu poți face parte din această
              călătorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
