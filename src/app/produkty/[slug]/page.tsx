import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: { slug: string };
  searchParams: { size?: string };
};

const productMeta: Record<string, { title: string; image: string }> = {
  'olecon-84-ec': { title: 'OLECON 84 EC', image: '/karnister4.png' }
};

export default function ProductDetailPage({ params, searchParams }: Props) {
  const meta = productMeta[params.slug] ?? { title: 'OLECON 84 EC', image: '/karnister4.png' };
  const size = searchParams.size === '5l' ? '5 L' : searchParams.size === '1l' ? '1 L' : undefined;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative h-[420px]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image src={meta.image} alt={meta.title} fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-[#0066b3]/70 z-10 pointer-events-none"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-2">{meta.title}</h1>
            {size && <p className="text-xl opacity-90">Wariant: {size}</p>}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Podsumowanie */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white shadow">
            <Image src={meta.image} alt={meta.title} fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OLECON 84 EC</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Adiuwant olejowy poprawiający przyczepność i zwilżenie cieczy użytkowej, wspierający równomierne pokrycie roślin podczas zabiegów ochrony.</p>
            <div className="space-y-2 text-gray-800 mb-6">
              <div><span className="font-semibold">UFI:</span> TH00-Y0W5-D00X-SY0S</div>
              <div><span className="font-semibold">Pojemność:</span> {size ?? '1 L lub 5 L'}</div>
            </div>
            <div className="flex gap-3">
              <Link href={{ pathname: `/produkty/${params.slug}`, query: { size: '1l' } }} className={`px-4 py-2 rounded-lg border ${size === '1 L' ? 'bg-[#2dbd6e] text-white border-[#2dbd6e]' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                1 L
              </Link>
              <Link href={{ pathname: `/produkty/${params.slug}`, query: { size: '5l' } }} className={`px-4 py-2 rounded-lg border ${size === '5 L' ? 'bg-[#2dbd6e] text-white border-[#2dbd6e]' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}>
                5 L
              </Link>
              <Link href="/kontakt" className="ml-auto inline-block bg-[#2dbd6e] text-white px-5 py-2 rounded-lg hover:bg-[#27a561]">
                Zapytaj o ofertę
              </Link>
            </div>
          </div>
        </div>

        {/* Spis treści + sekcje */}
        <div className="grid md:grid-cols-4 gap-10">
          <aside className="md:col-span-1">
            <div className="md:sticky md:top-20 bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold mb-3">Spis treści</h3>
              <nav className="text-sm space-y-2">
                <a href="#sekcja-1" className="block hover:text-[#0066b3]">1. Identyfikacja</a>
                <a href="#sekcja-2" className="block hover:text-[#0066b3]">2. Identyfikacja zagrożeń</a>
                <a href="#sekcja-3" className="block hover:text-[#0066b3]">3. Skład/Informacja</a>
                <a href="#sekcja-4" className="block hover:text-[#0066b3]">4. Pierwsza pomoc</a>
                <a href="#sekcja-5" className="block hover:text-[#0066b3]">5. Pożar</a>
                <a href="#sekcja-6" className="block hover:text-[#0066b3]">6. Uwolnienie</a>
                <a href="#sekcja-7" className="block hover:text-[#0066b3]">7. Postępowanie i magazynowanie</a>
                <a href="#sekcja-8" className="block hover:text-[#0066b3]">8. Kontrola narażenia</a>
                <a href="#sekcja-9" className="block hover:text-[#0066b3]">9. Właściwości</a>
                <a href="#sekcja-10" className="block hover:text-[#0066b3]">10. Stabilność/reaktywność</a>
                <a href="#sekcja-11" className="block hover:text-[#0066b3]">11. Toksykologia</a>
                <a href="#sekcja-12" className="block hover:text-[#0066b3]">12. Informacje ekologiczne</a>
                <a href="#sekcja-13" className="block hover:text-[#0066b3]">13. Odpady</a>
                <a href="#sekcja-14" className="block hover:text-[#0066b3]">14. Transport</a>
                <a href="#sekcja-15" className="block hover:text-[#0066b3]">15. Przepisy prawne</a>
                <a href="#sekcja-16" className="block hover:text-[#0066b3]">16. Inne informacje</a>
              </nav>
            </div>
          </aside>
          <div className="md:col-span-3 space-y-10">
            <section id="sekcja-1" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 1: Identyfikacja substancji/mieszaniny i przedsiębiorstwa</h3>
              <div className="space-y-2 text-gray-800">
                <div><span className="font-semibold">Nazwa handlowa produktu:</span> OLECON 84 EC</div>
                <div><span className="font-semibold">Kod UFI:</span> TH00-Y0W5-D00X-SY0S</div>
                <div><span className="font-semibold">Sektor zastosowań:</span> zastosowania przemysłowe, konsumenckie, profesjonalne</div>
                <div><span className="font-semibold">Opis zastosowań:</span> Adiuwant olejowy poprawiający przyczepność i zwilżenie cieczy użytkowej, wspierający równomierne pokrycie roślin podczas zabiegów ochrony.</div>
                <div><span className="font-semibold">Zastosowania odradzane:</span> Brak.</div>
                <div className="pt-2"><span className="font-semibold">Dostawca SDS:</span> ConsAgrico sp. z o.o., ul. Zabłocie 23/24, 30-701 Kraków, e-mail: office@consbridgechemicals.com, tel.: +48 661 213 978; osoba odpowiedzialna: lab@consbridgechemicals.com</div>
                <div><span className="font-semibold">Telefon alarmowy:</span> 112; producent: +48 661 213 978 (dni robocze: 8:00–16:00)</div>
              </div>
            </section>

            <section id="sekcja-3" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 3: SKŁAD I INFORMACJA O SKŁADNIKACH</h3>
              <p className="text-gray-800 mb-2 font-semibold">3.1. Substancje:</p>
              <p className="text-gray-800 mb-6">Nie dotyczy</p>
              <p className="text-gray-800 mb-2 font-semibold">3.2. Mieszanina</p>
              <div className="text-gray-800 space-y-3">
                <div>
                  <div className="font-semibold">Nazwa Chemiczna:</div>
                  Destylaty ciężkie parafinowe, obrabiane wodorem (ropa naftowa)
                  <div>Numer identyfikacyjny: Numer CAS: 64742-54-7, Numer WE: 265-157, Nr. rej. REACH 649467-008</div>
                  <div>Klasyfikacja Rozporządzenie (WE) NR 1272/2008: Asp. Tox (H304)</div>
                  <div>Stężenie [%]: 84 %</div>
                </div>
                <div>
                  <div className="font-semibold">Nazwa Chemiczna:</div>
                  Alkohole, C12-15, etoksylowane
                  <div>Numer identyfikacyjny: Numer CAS: 68131-39-5, Numer WE: -, Nr. rej. REACH: -</div>
                  <div>Klasyfikacja Rozporządzenie (WE) NR 1272/2008: Eye Dam. 1 (H318), Aquatic Acute 1 (H400)</div>
                  <div>Stężenie [%]: 3-10 %</div>
                </div>
                <div>
                  <div className="font-semibold">Nazwa Chemiczna:</div>
                  Alkohole, C12-C14, etoksylowane
                  <div>Numer identyfikacyjny: Numer CAS: 68439-50-9, Numer WE: -, Nr. rej. REACH: -</div>
                  <div>Klasyfikacja Rozporządzenie (WE) NR 1272/2008: Aquatic Acute 1 (H400), Aquatic Chronic 2 (H411)</div>
                  <div>Stężenie [%]: 3-10 %</div>
                </div>
                <p>Pozostałe składniki nie są sklasyfikowane jako niebezpieczne lub nie spełniają kryteriów zawartości w mieszaninie. Pełne brzmienie oznaczeń i zwrotów znajduje się w Sekcji 16.</p>
              </div>
            </section>

            <section id="sekcja-4" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 4: ŚRODKI PIERWSZEJ POMOCY</h3>
              <p className="text-gray-800 mb-3"><span className="font-semibold">4.1 Opis środków pierwszej pomocy</span></p>
              <p className="text-gray-800 mb-3">Zalecenia ogólne: W przypadku jakichkolwiek niepożądanych objawów należy przerwać kontakt z produktem. W razie wątpliwości należy skonsultować się z lekarzem i okazać mu etykietę lub kartę charakterystyki. Poszkodowanemu zapewnić dostęp powietrza, ciepło, spokój oraz jeśli konieczne, pomoc lekarską. Nie podawać niczego doustnie osobie nieprzytomnej. Leczenie objawowe.</p>
              <p className="text-gray-800 mb-2"><span className="font-semibold">Wdychanie:</span> Wynieść poszkodowanego z miejsca narażenia, ułożyć w wygodnej pozycji półleżącej lub siedzącej, zapewnić spokój, chronić przed utratą ciepła. Zapewnić dostęp do świeżego powietrza. Jeżeli wystąpią zaburzenia oddychania, zastosować sztuczne oddychanie. Zapewnić natychmiastową pomoc lekarską.</p>
              <p className="text-gray-800 mb-2"><span className="font-semibold">Kontakt ze skórą:</span> Natychmiast zdjąć zanieczyszczoną odzież, a skórę dokładnie umyć wodą z mydłem. Nie stosować środków zobojętniających (kwaśnych). Założyć na oparzenie jałowy opatrunek.</p>
              <p className="text-gray-800 mb-2"><span className="font-semibold">Kontakt z oczami:</span> Natychmiast przepłukać oczy dużą ilością letniej wody, najlepiej bieżącej, przez co najmniej 15 min, przy szeroko odchylonych powiekach. Wyjąć soczewki, jeżeli są i można je łatwo usunąć. Unikać silnego strumienia wody ze względu na ryzyko mechanicznego uszkodzenia rogówki. Bezwzględnie konieczna konsultacja okulistyczna</p>
              <p className="text-gray-800 mb-4"><span className="font-semibold">Połknięcie:</span> Nie wywoływać wymiotów. Przepłukać usta, nie podawać nic doustnie osobie nie przytomnej. Natychmiast skontaktować się z lekarzem.</p>
              <p className="text-gray-800 mb-3"><span className="font-semibold">4.2. Najważniejsze ostre i opóźnione objawy oraz skutki narażenia:</span> Kontakt preparatu z oczami może powodować poważne uszkodzenie oczu. Przy dłuższym lub powtarzającym się kontakt ze skórą mogą występować objawy takie jak przesuszenie, pękanie czy stany zapalne. W przypadku spożycia produktu możliwe są dolegliwości ze strony przewodu pokarmowego (nudności, bóle brzucha, wymioty, biegunka). Objawy mogą pojawiać się zarówno bezpośrednio po ekspozycji, jak i opóźnieniem do kilku godzin.</p>
              <p className="text-gray-800"><span className="font-semibold">4.3. Wskazania dotyczące wszelkiej natychmiastowej pomocy lekarskiej i szczególnego postępowania z poszkodowanym:</span> W przypadku narażenia poszkodowanego należy zapewnić mu spokój, usunąć źródło skażenia i wdrożyć leczenie objawowe. Brak specyficznego antidotum. Leczenie powinno być ukierunkowane na łagodzenie objawów klinicznych i podtrzymywanie funkcji życiowych. Lekarz powinien rozważyć monitorowanie stanu układu krążenia oraz prowadzić terapię wspomagającą zgodnie ze stanem pacjenta.</p>
            </section>

            <section id="sekcja-5" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 5: POSTĘPOWANIE W PRZYPADKU POŻARU</h3>
              <p className="text-gray-800 mb-2"><span className="font-semibold">5.1. Środki gaśnicze:</span> Odpowiednie: proszki gaśnicze, piana odporna na alkohol, dwutlenek węgla CO2, rozpylona woda/mgła wodna). Niewskazane: silny strumień wody (ryzyko rozprzestrzeniania pożaru).</p>
              <p className="text-gray-800 mb-2"><span className="font-semibold">5.2. Szczególne zagrożenia związane z substancją:</span> Produkt nie jest klasyfikowany jako łatwopalny. Podczas pożaru mogą uwalniać się tlenek węgla, dwutlenek węgla, tlenki siarki, tlenki azotu oraz inne drażniące i szkodliwe gazy/dymy.</p>
              <p className="text-gray-800"><span className="font-semibold">5.3. Informacje dla straży pożarnej:</span> Strażacy powinni stosować odzież ochronną odporną na chemikalia oraz izolującą aparat oddechowy. Nie dopuścić do przedostania się ścieków po gaszeniu do kanalizacji ani wód powierzchniowych.</p>
            </section>

            <section id="sekcja-6" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 6: POSTĘPOWANIE W PRZYPADKU NIEZAMIERZONEGO UWOLNIENIA DO ŚRODOWISKA</h3>
              <p className="text-gray-800 mb-2"><span className="font-semibold">6.1 Indywidualne środki ostrożności wyposażenie ochronne i procedury w sytuacjach awaryjnych:</span> W razie uwalniania produktu należy unikać kontaktu ze skórą i oczami oraz nie wdychać par. Zapewnić odpowiednią wentylację, a w razie potrzeby stosować ochronę dróg oddechowych oraz odpowiednie środki ochrony indywidualnej, (opisane w sekcji 8).</p>
              <p className="text-gray-800 mb-2"><span className="font-semibold">6.2 Środki ostrożności w zakresie ochrony środowiska:</span> Nie dopuścić do przedostania się produktu do kanalizacji, wód powierzchniowych ani gleby. W przypadku większych wycieków niezwłocznie powiadomić odpowiednie służby ratunkowe lub ochrony środowiska. W przypadku skażenia wód należy poinformować właściwe władze.</p>
              <p className="text-gray-800 mb-2"><span className="font-semibold">6.3. Metody i materiały zapobiegające rozprzestrzenianiu się skażenia i służące do usuwania skażenia:</span> Rozlany preparat należy zebrać przy użyciu materiałów absorbujących, takich jak piasek, ziemia czy sorbenty mineralne. Zebrane odpady należy umieścić w szczelnych, oznakowanych pojemnikach przeznaczonych do dalszego zagospodarowania zgodnie z obowiązującymi przepisami. Zanieczyszczona powierzchnię spłukać wodą, przy czym należy zapobiec przedostaniu się popłuczyn do kanalizacji i wód powierzchownych.</p>
              <p className="text-gray-800"><span className="font-semibold">6.4 Odniesienia do innych sekcji:</span> Informacje dotyczące postępowania z substancjami i mieszaninami oraz ich magazynowanie podano w sekcji 7. Informacje dotyczące odpowiedniego indywidualnego wyposażenia ochronnego podano w sekcji 8. Usuwać zgodnie z zaleceniami przedstawionymi w sekcji 13.</p>
            </section>

            <section id="sekcja-7" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 7: POSTĘPOWANIE Z SUBSTANCJAMI I MIESZANINAMI ORAZ ICH MAGAZYNOWANIE</h3>
              <p className="text-gray-800 mb-2"><span className="font-semibold">7.1 Środki ostrożności dotyczące bezpiecznego postępowania:</span> Podczas pracy z preparatami należy stosować ogólne zasady higieny obowiązujące przy obchodzeniu się z chemikaliami. Zaleca się korzystanie z wentylacji miejscowej lub ogólnej, aby ograniczyć emisję par i powstanie aerozoli. Należy unikać kontaktu substancji ze skórą i oczami. Podczas pracy nie wolno spożywać posiłków, pić ani palić. Po zakończeniu pracy umyć ręce wodą z mydłem. Produkt stosować wyłącznie zgodnie z przeznaczeniem. Ze względu na możliwości zagrożenia aspiracją (H304) należy unikać rozpylania i wdychania aerozoli.</p>
              <p className="text-gray-800 mb-2"><span className="font-semibold">7.2 Warunki bezpiecznego magazynowania, w tym informacje dotyczące wszelkich wzajemnych niezgodności:</span> Preparat przechowywać w oryginalnych, szczelnie zamkniętych opakowaniach w pozycji pionowej, w chłodnym, suchym i dobrze wentylowanym pomieszczeniu, z dala od źródeł ciepła, otwartego ognia i nasłonecznienia oraz uszkodzeń mechanicznych pojemników. Unikać kontaktu z silnymi utleniaczami, kwasami i zasadami jak również metali reagujących (takimi jak cynk i aluminium). Nie przechowywać w pobliżu żywności, pasz ani napojów. Nie przechowywać w pobliżu studzienek kanalizacyjnych ani miejsc, z których możliwy jest bezpośredni odpływ do wód powierzchownych. Magazyn powinien być wyposażony w środki umożliwiające usuwanie ewentualnych wycieków.</p>
              <p className="text-gray-800"><span className="font-semibold">7.3 Szczególne zastosowanie(-a) końcowe:</span> Brak szczególnych zaleceń poza informacjami zawartymi w niniejszej karcie charakterystyki.</p>
            </section>

            <section id="sekcja-8" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 8: KONTROLA NARAŻENIA / ŚRODKI OCHRONY INDYWIDUALNEJ</h3>
              <p className="text-gray-800 mb-2"><span className="font-semibold">8.1. Parametry dotyczące kontroli:</span> Dla składników preparatu nie ustalono dopuszczalnych wartości narażenia w środowisku pracy.</p>
              <p className="text-gray-800"><span className="font-semibold">8.2. Kontrola narażenia:</span> Podczas pracy z produktem należy stosować wentylację ogólną, aby ograniczyć możliwość tworzenia się aerozoli. Ochrona dróg oddechowych nie jest wymagana przy normalnym stosowaniu, jednak w przypadku powstawania aerozoli zaleca się stosowanie odpowiednich masek filtrujących, np. półmaski z filtrem typu A/P2 zgodnym z EN 14387. W celu ochrony rąk należy używać rękawic odpornych na chemikalia np. z kauczuku nitrylowego o czasie przenikania &gt; 480 minut, zgodnych z EN 374. W przypadku ryzyka rozprysków konieczne jest stosowanie okularów ochronnych lub gogle zgodnych z EN 166. Zaleca się stosowanie odzieży roboczej chroniącej przed kontaktem ze skórą. W trakcie pracy nie wolno jeść, pić ani palić, a po zakończeniu czynności należy dokładnie umyć ręce wodą z mydłem. Należy zapewnić możliwość szybkiego przepłukania oczu (stacja do przemywania oczu).</p>
            </section>

            <section id="sekcja-9" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 9: WŁAŚCIWOŚCI FIZYCZNE I CHEMICZNE</h3>
              <div className="text-gray-800 space-y-1">
                <div>Stan skupienia: Ciecz</div>
                <div>Kolor: żółto-brązowe</div>
                <div>Zapach: Bez zapachu</div>
                <div>Próg zapachu: Nie dotyczy</div>
                <div>Temperatura topnienia/krzepnięcia: - 15°C</div>
                <div>Początkowa temperatura wrzenia: Brak danych</div>
                <div>Palność materiałów: Nie dotyczy</div>
                <div>Górna i dolna granica wybuchowości: Nie dotyczy</div>
                <div>Temperatura zapłonu: Nie dotyczy</div>
                <div>Temperatura samozapłonu: Nie dotyczy</div>
                <div>Temperatur rozkładu: Nie dotyczy</div>
                <div>pH: 12 ÷14</div>
                <div>Lepkość kinematyczna: Nie dotyczy</div>
                <div>Rozpuszczalność (20°C): 100g/100g H2O</div>
                <div>Współczynnik podziału n-oktanol/woda: nie dotyczy</div>
                <div>Prężność par (20°C): Nie dotyczy</div>
                <div>Gęstość względna: 1.46÷1.55 g/cm3</div>
                <div>Względna gęstość par: Nie dotyczy</div>
                <div>Charakterystyka cząsteczek: Nie dotyczy</div>
                <div>9.2. Inne informacje: Brak.</div>
              </div>
            </section>

            <section id="sekcja-10" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 10: STABILNOŚĆ I REAKTYWNOŚĆ</h3>
              <p className="text-gray-800 mb-2"><span className="font-semibold">10.1. Reaktywność:</span> Produkt nie wykazuje niebezpiecznych reakcji w normalnych warunkach stosowania i przechowywania i transportu.</p>
              <p className="text-gray-800 mb-2"><span className="font-semibold">10.2. Stabilność chemiczna:</span> Mieszanina jest stabilna w zalecanych warunkach przechowywania i użytkowania.</p>
              <p className="text-gray-800 mb-2"><span className="font-semibold">10.3. Możliwość występowania niebezpiecznych reakcji:</span> Nie są znane niebezpieczne reakcje w normalnych warunkach.</p>
              <p className="text-gray-800 mb-2"><span className="font-semibold">10.4. Warunki, których należy unikać:</span> Unikać wysokiej temperatury, źródeł zapłonu, otwartego ognia oraz bezpośredniego nasłonecznienia.</p>
              <p className="text-gray-800"><span className="font-semibold">10.5. Materiały niezgodne:</span> Silne utleniacze i silne kwasy mogą powodować rozkład produktu. <span className="font-semibold">10.6. Niebezpieczne produkty rozkładu:</span> W przypadku pożaru lub rozkładu mogą powstać tlenek węgla, dwutlenek węgla, tlenki siarki, tlenki azotu oraz inne drażniące lub toksyczne gazy.</p>
            </section>

            <section id="sekcja-11" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 11: INFORMACJE TOKSYKOLOGICZNE</h3>
              <div className="text-gray-800 space-y-2">
                <div><span className="font-semibold">11.1. Informacje dotyczące skutków toksykologicznych:</span></div>
                <div>Toksyczność ostra: Na podstawie dostępnych danych produkt nie spełnia kryteriów klasyfikacji.</div>
                <div>Działanie żrące/drażniące: Brak danych wskazujących na działanie drażniące.</div>
                <div>Poważne uszkodzenia oczu/działanie drażniące na oczy: Mieszanina powoduje poważne uszkodzenie oczu (Eye Dam. 1,H318). Objawy łzawienie, zaczerwienienie, ból, ryzyko trwałego uszkodzenia wzroku.</div>
                <div>Działanie uczulające: Brak dowodów na właściwości uczulające.</div>
                <div>Działanie mutagenne, rakotwórcze, szkodliwe na rozrodczość: Nie są znane żadne właściwości mutagenne, rakotwórcze ani reprotoksyczne.</div>
                <div>Działanie narządowe – jednorazowe i powtarzane narażenie: Brak danych wskazujących na specyficzne skutki toksyczne.</div>
                <div>Zagrożenie spowodowane aspiracją: Ze względu na konsystencję produktu ryzyko aspiracji jest bardzo małe.</div>
                <div>11.2. Informacje o innych zagrożeniach: Brak informacji o właściwościach zaburzających funkcjonowanie układu hormonalnego</div>
              </div>
            </section>

            <section id="sekcja-12" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 12: INFORMACJE EKOLOGICZNE</h3>
              <div className="text-gray-800 space-y-2">
                <div>12.1. Toksyczność: Produkt działa toksycznie na organizmy wodne, powodując długotrwałe skutki (Aquatic Chronic 2, H411)</div>
                <div>12.2. Trwałość i zdolność do rozkładu: Zawarte w produkcie substancje powierzchniowo czynne ulegają biodegradacji zgodnie z wymogami rozporządzenia (WE) nr 648/2004.</div>
                <div>12.3. Zdolność do bioakumulacji: Brak szczegółowych danych. Niektóre składniki mogą wykazywać potencjał bioakumulacji.</div>
                <div>12.4. Mobilność w glebie: Produkt ciekły, częściowo rozpuszczalny w wodzie. Może rozprzestrzeniać się w środowisku wodnym.</div>
                <div>12.5. Wyniki oceny właściwości PBT i vPvB: Mieszanina nie zawiera składników spełniających kryteria BPT ani vPvB zgodnie z załącznikiem XIII rozporządzenia REACH.</div>
                <div>12.6. Właściwości zaburzające funkcjonowanie układu hormonalnego: Brak danych</div>
                <div>12.7. Inne szkodliwe skutki działania: Brak danych</div>
              </div>
            </section>

            <section id="sekcja-13" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 13: POSTĘPOWANIE Z ODPADAMI</h3>
              <p className="text-gray-800 mb-3">13.1. Metody unieszkodliwiania odpadów Odpady produktu i zanieczyszczone opakowania należy zagospodarować zgodnie z obowiązującymi przepisami krajowymi i unijnymi. Produktu nie wolno wylewać do kanalizacji ani do środowiska wodnego. Niewielkie ilości można unieszkodliwiać wraz z odpadami komunalnymi po wcześniejszym związaniu materiałem sorpcyjnym. Większe ilości przekazać do wyspecjalizowanego zakładu zajmującego się utylizacją odpadów chemicznych. Opróżnione, dokładnie wypłukane opakowania mogą być kierowane do recyklingu. Kod odpadów należy określić zgodnie z aktualnym katalogiem odpadów UE, w zależności od sposobu użycia i źródła powstania odpadów.</p>
              <p className="text-gray-800 font-semibold">Sugerowane kody odpadów (EWC):</p>
              <ul className="list-disc pl-6 text-gray-800 space-y-1">
                <li>07 06 99 – inne nie wymienione odpady z produkcji, przygotowania, obrotu i stosowania detergentów i środków pomocniczych.</li>
                <li>15 01 10* – opakowania zawierające pozostałości substancji niebezpiecznych lub nimi zanieczyszczone,</li>
                <li>15 01 02 – opakowania z tworzyw sztucznych (jeśli całkowicie opróżnione i wypłukane)</li>
              </ul>
            </section>

            <section id="sekcja-14" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 14: INFORMACJE DOTYCZĄCE TRANSPORTU</h3>
              <div className="text-gray-800 space-y-2">
                <div>14.1. Numer UN lub numer identyfikacyjny ID: Brak numeru UN. Produkt nie jest klasyfikowany jako materiał niebezpieczny w transporcie.</div>
                <div>14.2. Prawidłowa nazwa przewozowa UN: Nie dotyczy.</div>
                <div>14.3. Klasa zagrożenia w transporcie: Nie dotyczy.</div>
                <div>14.4. Grupa pakowania: Nie dotyczy.</div>
                <div>14.5. Zagrożenia dla środowiska: Produkt nie jest klasyfikowany jako niebezpieczny dla środowiska w rozumieniu przepisów transportowych.</div>
                <div>14.6. Szczególne środki ostrożności dla użytkowników: Brak specjalnych wymagań podczas transportu stosować ogólne zasady bezpieczeństwa i zabezpieczyć opakowania przed uszkodzeniem i wyciekiem.</div>
                <div>14.7. Transport luzem zgodnie z załącznikiem II do konwencji MARPOL oraz kodeksem IBC: Nie dotyczy</div>
              </div>
            </section>

            <section id="sekcja-15" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 15: INFORMACJE DOTYCZĄCE PRZEPISÓW PRAWNYCH</h3>
              <div className="text-gray-800 space-y-2">
                <div>15.1. Przepisy prawne dotyczące bezpieczeństwa, zdrowia i ochrony środowiska specyficzne dla substancji lub mieszaniny</div>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Rozporządzenie Parlamentu Europejskiego i Rady nr 1907/2006 z dnia 18 grudnia 2006 r. w sprawie rejestracji, oceny, udzielania zezwoleń i stosowanych ograniczeń w zakresie chemikaliów (REACH) i utworzenia Europejskiej Agencji Chemikaliów, zmieniające dyrektywę 1999/45/WE oraz uchylające rozporządzenie Rady (EWG) nr 793/93 i rozporządzenie Komisji (WE) nr 1488/94, jak również dyrektywę Rady 76/769/EWG i dyrektywy Komisji 91/155/EWG, 93/67/EWG, 93/105/WE i 2000/21/WE z późniejszymi zmianami,</li>
                  <li>Rozporządzenie KOMISJI (UE) 2020/878 z dnia 18 czerwca 2020 r. zmieniające załącznik II do rozporządzenia (WE) nr 1907/2006 Parlamentu Europejskiego i Rady w sprawie rejestracji, oceny, udzielania zezwoleń i stosowanych ograniczeń w zakresie chemikaliów (REACH) (Dz. Urz. UE L 203 z 26.06.2020 str.28).</li>
                  <li>Rozporządzenie Parlamentu Europejskiego i Rady (WE) Nr 1272/2008 z dnia 16 grudnia 2008 r. w sprawie klasyfikacji, oznakowania i pakowania substancji i mieszanin, zmieniające i uchylające dyrektywy 67/548/EWG i 1999/45/WE oraz zmieniające rozporządzenie (WE) nr 1907/2006 (Dz. Urz. UE L 353 z 31.12.2008, str. 1) wraz z późniejszymi zmianami.</li>
                  <li>Rozporządzenie Ministra Klimatu z dnia 2 stycznia 2020 r. w sprawie katalogu odpadów (Dz.U.2020.10)</li>
                  <li>Rozporządzenie Ministra Pracy i Polityki Społecznej z dnia 12 czerwca 2018 r. w sprawie najwyższych dopuszczalnych stężeń i natężeń czynników szkodliwych dla zdrowia w środowisku pracy (Dz. U. 2018 r., poz. 1286),</li>
                  <li>Rozporządzenie Ministra Zdrowia z dnia 30 grudnia 2004 r. w sprawie bezpieczeństwa i higieny pracy związanej z występowaniem w miejscu pracy czynników chemicznych (Dz. U. 2005 r. nr 11, poz. 86),</li>
                  <li>Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/425 z dnia 9 marca 2016 r. w sprawie środków ochrony indywidualnej oraz uchylenia dyrektywy Rady 89/686/EWG,</li>
                  <li>Dyrektywa Parlamentu Europejskiego i Rady 2012/18/UE z dnia 4 lipca 2012 r. w sprawie kontroli zagrożeń poważnymi awariami związanymi z substancjami niebezpiecznymi, zmieniająca a następnie uchylająca dyrektywę Rady 96/82/WE,</li>
                  <li>Dyrektywa Komisji (UE) 2017/164 z dnia 31 stycznia 2017 r. ustanawiająca czwarty wykaz wskaźnikowych dopuszczalnych wartości narażenia zawodowego zgodnie z dyrektywą Rady 98/24/WE oraz zmieniająca dyrektywy Komisji 91/322/EWG, 2000/39/WE i 2009/161/UE 94/62/WE</li>
                  <li>Dyrektywa Parlamentu Europejskiego i Rady z dnia 20 grudnia 1994 r. w sprawie opakowań i odpadów opakowaniowych,</li>
                  <li>Oświadczenie Rządowe z dnia 15 lutego 2021 r. w sprawie wejścia w życie zmian do załączników A i B do Umowy europejskiej dotyczącej międzynarodowego przewozu drogowego towarów niebezpiecznych (ADR), sporządzonej w Genewie dnia 30 września 1957 r.</li>
                  <li>Ustawa z dnia 25 lutego 2011 r. o substancjach chemicznych i ich mieszaninach (Dz. U. Nr 63, poz. 322 wraz z późn. zm.),</li>
                  <li>Ustawa z dnia 12 grudnia 2003 r. o ogólnym bezpieczeństwie produktów. (Dz. U. z 2016 r. poz. 2047 – tekst jednolity) wraz z późniejszymi zmianami.</li>
                  <li>Ustawa z dnia 9 października 2015 r. o produktach biobójczych (Dz. U. 2015 poz. 1926 wraz późn. zm.) Ustawa z dnia 14 grudnia 2012 o odpadach (Dz. U. 2013, poz. 21 wraz z późn. zm.)</li>
                  <li>Ustawa z dnia 13 czerwca 2013 r. o gospodarce opakowaniami i odpadami opakowaniowymi (Dz.U. 2013, poz. 888),</li>
                </ul>
                <div className="mt-2">15.2. Ocena bezpieczeństwa chemicznego: Ocena bezpieczeństwa chemicznego została przeprowadzona dla tej substancji.</div>
              </div>
            </section>

            <section id="sekcja-16" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 16: INNE INFORMACJE</h3>
              <div className="text-gray-800 space-y-3">
                <p>Klasyfikacja i procedura używane dla wywodzenia klasyfikacji dla mieszanin według Przepisu (UE) Nr 1272/2008</p>
                <p className="font-semibold">Wyjaśnienie skrótów i akronimów stosowanych w karcie charakterystyki:</p>
                <p>ACGIH: American Conference of Governmental Industrial Hygienists<br/>Numer CAS: oznaczenie numeryczne przypisane substancji chemicznej przez amerykańską organizację Chemical Abstracts Service (CAS), pozwalające na identyfikację substancji.<br/>DNEL: pochodny poziom niepowodujący zmian<br/>Numer WE: numer przypisany substancji chemicznej w Europejskim Wykazie Istniejących Substancji o Znaczeniu Komercyjnym<br/>LC50: stężenie śmiertelne 50 (stężenie w wodzie dające 50 % szanse spowodowania śmierci organizmów wodnych)<br/>LD50: dawka wywołująca po określonym czasie śmierć 50% osobników badanej populacji<br/>LTEL: Long Term Exposure Limit<br/>NDS: najwyższe dopuszczalne stężenie<br/>NDSCh: najwyższe dopuszczalne stężenie chwilowe<br/>NDSP: najwyższe dopuszczalne stężenie pułapowe<br/>NIOSH: National Institute of Occupational Safety and Health<br/>NOEC: najwyższa dawka lub stężenie substancji toksycznej, przy której nie obserwuje się niekorzystnego efektu jej działania.<br/>NOHSC: National Occupational Health &amp; Safety Commission<br/>OEL: wartości dopuszczalnych stężeń<br/>OSHA: Krajowy Punkt Centralny Europejskiej Agencji Bezpieczeństwa i Zdrowia w Pracy<br/>PBT: trwałe, zdolne do bioakumulacji i toksyczne<br/>PEL: dopuszczalny limit narażenia<br/>PIS: arkusz informacji o produkcie<br/>PNEC: przewidywane stężenie niepowodujące zmian w środowisku<br/>SCOEL: Scientific Committee on Occupational Exposure Limits<br/>STEL: dopuszczalne granice narażenia krótkotrwałego<br/>STOT: toksyczność na narządy docelowe<br/>STP: oczyszczalnia ścieków<br/>TLV: wartość progowa<br/>TWA: średnia ważona w czasie<br/>vPvB: bardzo trwałe i posiadające bardzo dużą zdolność do bioakumulacji.</p>
                <p>Kartę charakterystyki sporządzono zgodnie z Rozporządzeniem Komisji (UE) 2020/878 z dnia 18 czerwca 2020 r. zmieniającym załącznik II do rozporządzenia (WE) nr 1907/2006 (REACH).</p>
                <p>Klasyfikacji produktu dokonano na podstawie dostępnych danych zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (WE) nr 1272/2008.</p>
                <p className="font-semibold">Szkolenia</p>
                <p>Przed przystąpieniem do pracy z produktem użytkownik powinien zapoznać się z zasadami BHP odnośnie obchodzenia się z chemikaliami, a w szczególności odbyć odpowiednie szkolenie stanowiskowe.</p>
                <p className="font-semibold">Odniesienia do kluczowej literatury i źródeł danych</p>
                <p>Karta została opracowana na podstawie karty charakterystyki dostarczonej przez producenta, danych literaturowych, internetowych baz danych oraz posiadanej wiedzy i doświadczenia, z uwzględnieniem aktualnie obowiązujących przepisów prawnych.</p>
                <p>Niniejszy dokument ma charakter informacyjny. Informacje w nim podane opierają się na aktualnym stanie naszej wiedzy i doświadczeniu. Nie stanowią one gwarancji właściwości produktu ani specyfikacji jakościowej i nie mogą być podstawą do reklamacji. Przedstawione informacje nie mają zastosowania dla mieszanin produktu z innymi substancjami. Produkt powinien być transportowany, magazynowany i stosowany zgodnie z obowiązującymi przepisami, dobrymi praktykami higieny pracy oraz zaleceniami zawartymi w dostarczanej dla niego karcie charakterystyki. Informacje podane w niniejszym dokumencie nie stanowią opisu jakościowego produktu ani przyrzeczenie określonych właściwości. Należy je traktować jako pomoc dla bezpiecznego postępowania w transporcie, składowaniu i stosowaniu produktu. Nie zwalnia to użytkownika od odpowiedzialności za niewłaściwe wykorzystanie powyższych informacji oraz z przestrzegania wszystkich norm prawnych obowiązujących w tej dziedzinie.</p>
                <p className="italic">KONIEC KARTY CHARAKTERYSTYKI</p>
              </div>
            </section>
            <section id="sekcja-2" className="bg-white rounded-xl shadow p-6">
              <h3 className="text-2xl font-bold mb-4">SEKCJA 2: Identyfikacja zagrożeń</h3>
              <p className="text-gray-800 mb-3">Klasyfikacja zgodnie z Rozporządzeniem (WE) 1272/2008 (CLP):</p>
              <ul className="list-disc pl-6 text-gray-800 space-y-1 mb-4">
                <li>H304 – Asp. Tox. 1 – Może być śmiertelna po połknięciu i dostaniu się do dróg oddechowych.</li>
                <li>H318 – Eye Dam. 1 – Powoduje poważne uszkodzenia oczu.</li>
                <li>H411 – Aquatic Chronic 2 – Działa toksycznie na organizmy wodne, powodując długotrwałe skutki.</li>
              </ul>
              <div className="text-gray-800 mb-2"><span className="font-semibold">Hasło ostrzegawcze:</span> NIEBEZPIECZEŃSTWO</div>
              <div className="text-gray-800 mb-3"><span className="font-semibold">Piktogramy:</span> GHS05, GHS08, GHS09</div>
              <div className="text-gray-800 mb-2 font-semibold">Zwroty H:</div>
              <ul className="list-disc pl-6 text-gray-800 space-y-1 mb-3">
                <li>H318 – Powoduje poważne uszkodzenia oczu.</li>
                <li>H411 – Działa toksycznie na organizmy wodne, powodując długotrwałe skutki.</li>
              </ul>
              <div className="text-gray-800 mb-2 font-semibold">Zwroty P:</div>
              <ul className="list-disc pl-6 text-gray-800 space-y-1 mb-3">
                <li>P102 – Chronić przed dziećmi.</li>
                <li>P280 – Stosować rękawice i odzież ochronną, ochronę oczu i twarzy.</li>
                <li>P303+P361+P353 – W PRZYPADKU KONTAKTU ZE SKÓRĄ: zdjąć zanieczyszczoną odzież, spłukać skórę wodą/prysznicem.</li>
                <li>P305+P351+P338 – W PRZYPADKU DOSTANIA SIĘ DO OCZU: płukać wodą przez kilka minut; wyjąć soczewki, jeśli to możliwe; kontynuować płukanie.</li>
                <li>P391 – Zebrać wyciek.</li>
                <li>P501 – Zawartość/pojemnik usuwać do uprawnionych firm.</li>
              </ul>
              <div className="text-gray-800"><span className="font-semibold">Zwroty dodatkowe:</span> EUH401 – Postępować zgodnie z instrukcją użycia. Produkt nie zawiera składników PBT/vPvB; brak innych zagrożeń nieujętych w CLP.</div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}


