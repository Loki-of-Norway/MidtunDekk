import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    // Hero Animation
    gsap.fromTo(heroRef.current.children, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: heroRef.current, start: "top 80%" } }
    );

    // Services Animation
    gsap.fromTo(servicesRef.current.children, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out", scrollTrigger: { trigger: servicesRef.current, start: "top 75%" } }
    );
     // Process Animation
     gsap.fromTo(processRef.current.children, 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: { trigger: processRef.current, start: "top 70%" } }
    );

  }, []);

  return (
    <div className="bg-brand-dark font-varela text-white min-h-screen">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 bg-black shadow-[0_4px_14px_0_rgba(255,255,255,0.5)] transition-all duration-300 text-white py-4`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="w-32 md:w-40">
             <img 
              src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/605900847040b253c764fd5b_Midtun%20Dekk%20hvit%20mellomstor.png" 
              alt="Midtun Dekk Logo" 
              className="w-full h-auto object-contain brightness-0 invert" 
            />
          </div>
          <nav className="hidden md:flex space-x-8 font-varela text-lg font-medium">
            {['Tjenester', 'Om Oss', 'Kontakt'].map((item) => (
              item === 'Om Oss' ? (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors">
                  {item}
                </a>
              ) : (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </a>
              )
            ))}
          </nav>
          <button className="bg-brand-button hover:bg-brand-orange text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg hidden md:block">
            Bestill Time
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-dark overflow-hidden pt-20">
         {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-dark via-[#0d2f3a] to-brand-dark opacity-100 -z-10"></div>
        <div className="absolute w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-3xl -top-20 -right-20"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div ref={heroRef} className="text-left">
             <div className="inline-block bg-brand-orange/20 text-brand-orange font-bold px-4 py-2 rounded-full mb-6 border border-brand-orange/20 backdrop-blur-sm animate-pulse">
              100% fornøyd eller pengene tilbake :)
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-varela font-bold mb-6 text-white leading-tight">
              Gode dekk, gode priser og <span className="text-brand-orange">god service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg font-light leading-relaxed">
              Vi hjelper deg å finne de riktige dekkene og felgene til din bil. Hos oss får du fagfolk du kan stole på.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="https://booking.eontyre.com/11857" target="_blank" rel="noopener noreferrer" className="bg-brand-button hover:bg-brand-orange text-white text-lg font-bold py-4 px-8 rounded-full transition-all hover:shadow-[0_0_20px_rgba(243,89,0,0.4)] hover:-translate-y-1 text-center">
                Bestill time her
                </a>
                 <a href="#om-oss" className="bg-white text-black hover:bg-gray-100 hover:text-brand-dark text-lg font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 shadow-lg text-center">
                Om oss
                </a>
            </div>
            
            {/* Brand Logos */}
            <div className="pt-8 border-t-2" style={{ borderColor: '#F35900' }}>
              <p className="text-gray-500 text-sm mb-4 uppercase tracking-widest">Vi fører kjente merkevarer</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/6059ad74a478f74fe42f15ae_continetal.png" alt="Continental" className="h-6 md:h-8 object-contain"/>
                <img src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/614ad8c2b700bed6b382e552_goodyear.png" alt="Goodyear" className="h-6 md:h-8 object-contain"/>
                <img src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/6059dba771a21e4c1a06c37c_michelin%20copy.png" alt="Michelin" className="h-6 md:h-8 object-contain"/>
                <img src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/614ad8b31f9dc8a54f7874c0_nokian.png" alt="Nokian" className="h-6 md:h-8 object-contain"/>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block h-full flex items-center justify-center">
               {/* Hero Image */}
              <div className="rounded-full overflow-hidden border-4" style={{ borderColor: '#F35900' }}>
              <img 
                src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/612c950cba1c5529079c293e_Alexander%20Midtun%20Dekk%203.png" 
                alt="Alexander Midtun Dekk" 
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              </div>
          </div>
        </div>
      </section>



      {/* Vi hjelper deg Section */}
      <section className="py-24 bg-[#EFE5D9] text-black">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
             <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4" style={{ borderColor: '#F35900' }}>
               <img 
                 src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/612c9b8d35b1fd5b303771ac_Dekkhotell2%20Midtun%20Dekk.png" 
                 alt="Mechanic working on tire" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
               />
             </div>
          </div>
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-varela font-bold text-brand-orange mb-6">Vi hjelper deg!</h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              Til de aller fleste biler finnes det en rekke dekk som passer. De skal selvsagt passe til de felgene som er på bilen. Og de skal være riktige ift. lovlige dimensjoner. Og ikke minst, så skal de passe til budsjettet ditt. Derfor kan du få alt fra rimelige dekk i god kvalitet, til premium dekk av aller beste merke. Alt dette hjelper vi deg med. Og husk at når du handler hos oss så garanterer vi at du blir 100% fornøyd.
            </p>
            <a href="#kontakt" className="bg-brand-orange hover:bg-brand-dark text-white text-lg font-bold py-3 px-8 rounded-full transition-all shadow-lg inline-block" style={{ WebkitTextStroke: "0.5px #F35900" }}>
              Kontakt oss
            </a>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-brand-dark overflow-hidden text-center">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-sm font-bold tracking-widest text-brand-orange uppercase mb-2">100% fornøyd, eller pengene tilbake</h2>
             <h3 className="text-4xl md:text-5xl font-varela font-bold text-white">Slik fungerer det</h3>
          </div>

          <div ref={processRef} className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-24 left-0 w-full h-1 bg-brand-orange/10 -z-10 rounded-full"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: '01', 
                title: 'Kom innom', 
                desc: 'Vi ser på bilen din, felgene du har og hva som er tillatt. Sammen ser vi på dekk og felger i ulike prisklasser.',
                img: 'https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/60590f40b836543051f73cd1_bil.png'
              },
              { 
                step: '02', 
                title: 'Velg dekk/felg', 
                desc: 'Du velger det som passer din lommebok og dine prioriteringer.',
                img: 'https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/60591092f8bc7f74675e9aa3_dekk.png'
              },
              { 
                step: '03', 
                title: 'Vi monterer', 
                desc: 'Vi har mye på lager. Vi monterer og avbalanserer mens du venter (i topp sesongen må du beregne litt ventetid).',
                img: 'https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/6059117e08a4b6fdff417ed3_jekk.png'
              },
              { 
                step: '04', 
                title: '100% fornøyd', 
                desc: 'Skulle noe ikke være slik du forventet finner vi nye dekk/felg eller gir deg pengene tilbake innen 2 uker.',
                img: 'https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/6059129814969f7eb471eed2_happy.png'
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center group relative bg-white p-6 rounded-[2rem] hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <div className="w-48 h-48 mb-6 overflow-visible transform transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                   <div className="w-40 h-40 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F35900' }}>
                     <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white">
                       <img src={item.img} alt={item.title} className="w-16 h-16 object-contain" style={{ filter: 'brightness(0)' }} />
                     </div>
                   </div>
                </div>
                
                <h3 className="text-xl font-bold font-varela mb-4 text-brand-dark group-hover:text-brand-orange transition-colors">{item.title}</h3>
                <p className="text-black text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Mer enn bare dekk! */}
      <section ref={servicesRef} className="py-24 relative overflow-hidden" style={{ backgroundColor: '#F35900' }}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-varela font-bold text-white mb-6">Mer enn bare dekk!</h2>
            <p className="text-white/90 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Midtun Dekk er et moderne og velutstyrt dekkverksted og butikk. Vi ha høy kunnskap og lang erfaring, etter snart 20 års erfaring fra dekkbransjen. Vi legger stor vekt på å ha et godt utvalg av dekk og felger som passer alle ønsker og lommebøker. For den aller beste opplevelsen anbefaler vi vårt dekkhotell.
            </p>
          </div>

          {/* Row 1: Dekkhotell + Nye felger */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            {/* Dekkhotell */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden mb-8 shadow-2xl group-hover:shadow-black/30 transition-shadow duration-500">
                <img 
                  src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/612c9b8d35b1fd5b303771ac_Dekkhotell2%20Midtun%20Dekk.png" 
                  alt="Dekkhotell" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold font-varela text-white mb-3">Dekkhotell</h3>
              <p className="text-white text-lg leading-relaxed max-w-sm mb-6">
                Vi vasker, kontrollerer og lagrer frem til neste sesong. Nå slipper du å tenke på lagringsplass, tunge løft og hjulskift. Pris per sesong, fra 1.290,-
              </p>
              <a href="https://booking.eontyre.com/11857" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Logg inn på dekkhotell
              </a>
            </div>

            {/* Nye felger */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden mb-8 shadow-2xl group-hover:shadow-black/30 transition-shadow duration-500">
                <img 
                  src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/605a51fd02306c3e39c09089_felger.png" 
                  alt="Nye felger" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold font-varela text-white mb-3">Nye felger</h3>
              <p className="text-white text-lg leading-relaxed max-w-sm mb-6">
                Vi hjelper deg å finne felger som både ser bra ut og som er riktig til akkurat din bil. Gode priser på komplette pakker med dekk og felg.
              </p>
              <a href="http://www.felgvisning.no/nd/midtundekk/felg/#search" target="_blank" rel="noopener noreferrer" className="bg-black text-white font-bold py-3 px-8 rounded-full transition-all duration-300 text-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
                Se noen av våre felger
              </a>
            </div>
          </div>

          {/* Divider line */}
          <div className="w-20 h-1 bg-brand-dark/30 mx-auto mb-20 rounded-full"></div>

          {/* Row 2: Omleggingsmaskin + Hjulvaskemaskin */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Omleggingsmaskin */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden mb-8 shadow-2xl group-hover:shadow-black/30 transition-shadow duration-500">
                <img 
                  src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/614adf25b30e9d02625ccb90_Dekkmaskin.png" 
                  alt="Omleggingsmaskin" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold font-varela text-white mb-3">Verdens mest avanserte maskin for dekkskift</h3>
              <p className="text-white text-lg leading-relaxed max-w-sm">
                For å sikre optimalt resultat og trygghet har vi investert i verdens mest avanserte omleggingsmaskin.
              </p>
            </div>

            {/* Hjulvaskemaskin */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden mb-8 shadow-2xl group-hover:shadow-black/30 transition-shadow duration-500">
                <img 
                  src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/614ae1c4d4266631194fda93_Dekkvask.png" 
                  alt="Hjulvaskemaskin" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-bold font-varela text-white mb-3">Ny teknologi rengjør dekk og felg på en unik måte</h3>
              <p className="text-white text-lg leading-relaxed max-w-sm">
                Vi har gått til anskaffelse av hjulvaskemaskin som faktisk rengjør dekk og felg med ultralyd. Dette gir i særklasse rene hjul for lang levetid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-brand-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="w-full md:w-1/2 flex justify-center">
               <div className="flex flex-col items-center">
                 <div className="rounded-full overflow-hidden shadow-2xl border-4 w-80 h-80 md:w-96 md:h-96" style={{ borderColor: '#F35900' }}>
                   <img 
                     src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/612c950cba1c5529079c293e_Alexander%20Midtun%20Dekk%203.png" 
                     alt="Alexander Arne" 
                     className="w-full h-full object-cover"
                   />
                 </div>
                 <h3 className="text-white text-2xl font-bold font-varela mt-6">Alexander Arne</h3>
                 <p className="text-brand-orange font-bold">Daglig Leder</p>
               </div>
             </div>
             <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-4xl font-varela font-bold text-white">Fagbrev og 10 års erfaring</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Alexander har fagbrev som hjulutrustningsreparatør og har jobbet i bransjen i over 10 år. Han startet Midtun Dekk med et ønske om å levere kvalitet og service i alle ledd.
                </p>
                <div className="bg-white/5 p-6 rounded-[2rem] border-l-4 border-brand-orange">
                  <p className="italic text-gray-300">
                    "Vårt mål er at du skal være 100% fornøyd. Vi gir oss ikke før alt er perfekt."
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="tel:55101010" className="flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full hover:bg-brand-dark transition-colors font-bold shadow-lg shadow-brand-orange/30">
                    <span style={{ color: '#F35900' }}>📞</span> Ring 55 10 10 10
                  </a>
                  <a href="mailto:post@midtundekk.no" className="flex items-center justify-center gap-2 bg-white text-black border-2 border-brand-dark/10 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors font-bold">
                    <span style={{ color: '#F35900' }}>✉️</span> Send E-post
                  </a>
                </div>
             </div>
          </div>
        </div>
      </section>


      {/* Forms Section - Bestill time & Dekkhotell */}
      <section className="py-24 bg-brand-light" id="kontakt">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-varela font-bold text-brand-dark mb-4">Bestill tid eller dekkhotell</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Fyll ut skjemaet under, så tar vi kontakt med deg.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Bestill time */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-t-4" style={{ borderColor: '#F35900' }}>
              <h3 className="text-2xl font-varela font-bold text-brand-dark mb-2">Bestill time</h3>
              <p className="text-gray-500 mb-8">Bestill tid for dekkservice.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Navn</label>
                  <input type="text" placeholder="Skriv inn ditt navn" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Telefonnummer</label>
                    <input type="tel" placeholder="Ditt telefonnummer" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">E-post</label>
                    <input type="email" placeholder="Din e-post" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Ønsket dato</label>
                  <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Kommentar</label>
                  <textarea placeholder="Tilleggsinformasjon" rows={3} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-orange hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Send bestilling
                </button>
              </form>
            </div>

            {/* Legg inn på dekkhotell */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-t-4" style={{ borderColor: '#F35900' }}>
              <h3 className="text-2xl font-varela font-bold text-brand-dark mb-2">Legg inn på dekkhotell</h3>
              <p className="text-gray-500 mb-8">Oppbevaring av dine dekk mellom sesongene.</p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Navn</label>
                  <input type="text" placeholder="Skriv inn ditt navn" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Telefon</label>
                    <input type="tel" placeholder="Ditt telefonnummer" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">E-post</label>
                    <input type="email" placeholder="Din e-post" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Antall dekk</label>
                    <input type="number" placeholder="F.eks. 4" min="1" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Ankomstdato</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-brand-orange hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Legg inn på dekkhotell
                </button>
              </form>
            </div>
          </div>

          {/* Contact form below */}
          <div className="max-w-2xl mx-auto mt-16">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-t-4" style={{ borderColor: '#F35900' }}>
              <h3 className="text-2xl font-varela font-bold text-brand-dark mb-2 text-center">Kontakt oss</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Navn</label>
                    <input type="text" placeholder="Skriv inn ditt navn" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">E-post</label>
                    <input type="email" placeholder="Din e-post" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Telefon</label>
                  <input type="tel" placeholder="Ditt telefonnummer" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Melding</label>
                  <textarea placeholder="Skriv din melding her" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-orange/50 focus:border-brand-orange transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-orange hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Send melding
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-brand-dark text-white pt-24 pb-12 rounded-none mt-0 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute right-0 top-0 w-96 h-96 bg-brand-orange blur-[150px] rounded-full"></div>
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500 blur-[150px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
            <div className="space-y-8">
              <img 
                src="https://cdn.prod.website-files.com/6058f9eaa5e4d8143e9bca26/605900847040b253c764fd5b_Midtun%20Dekk%20hvit%20mellomstor.png" 
                alt="Midtun Dekk Logo" 
                className="w-48 brightness-0 invert" 
              />
              <p className="text-gray-400 leading-relaxed max-w-sm">
                Din spesialist på dekk og felg i Bergen. Vi sørger for at du er trygt skodd for alle forhold.
              </p>
              <div className="flex space-x-4">
                {['Facebook', 'Instagram'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all duration-300">
                    <span className="sr-only">{social}</span>
                    {social === 'Facebook' ? 'f' : '📷'}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold font-varela mb-8 text-white relative inline-block">
                Kontakt Oss
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-orange rounded-full"></span>
              </h4>
              <ul className="space-y-6 text-gray-400">
                <li className="flex items-start gap-4 group">
                  <span className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">📍</span> 
                  <span className="mt-2">Midtunhaugen 6<br/>5224 Nesttun</span>
                </li>
                <li className="flex items-center gap-4 group">
                   <span className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">📞</span> 
                  <a href="tel:55101010" className="hover:text-white transition-colors">55 10 10 10</a>
                </li>
                <li className="flex items-center gap-4 group">
                   <span className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors">✉️</span> 
                  <a href="mailto:post@midtundekk.no" className="hover:text-white transition-colors">post@midtundekk.no</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold font-varela mb-8 text-white relative inline-block">
                Åpningstider
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-orange rounded-full"></span>
              </h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex justify-between border-b pb-2" style={{ borderColor: '#F35900' }}>
                  <span>Mandag - Fredag</span>
                  <span className="text-white">08:00 - 16:00</span>
                </li>
                 <li className="flex justify-between border-b pb-2" style={{ borderColor: '#F35900' }}>
                  <span>Lørdag - Søndag</span>
                  <span className="text-brand-orange">Stengt</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm" style={{ borderColor: '#F35900' }}>
            <p>&copy; {new Date().getFullYear()} Midtun Dekk AS. Alle rettigheter reservert.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-brand-orange transition-colors">Personvern</a>
              <a href="#" className="hover:text-brand-orange transition-colors">Vilkår</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
