'use client';
import Image from 'next/image';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[400px] -mt-40">
        <div className="absolute inset-0 z-0">
          <Image
            src="/lab1 (1).jpg"
            alt="Laboratorium Consagrico"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#0066b3]/80 z-10"></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center text-white" style={{ marginTop: '160px' }}>
          <div>
            <h1 className="text-5xl font-bold mb-4">Polityka Prywatności</h1>
            <p className="text-xl opacity-90">
              Ochrona Twoich danych osobowych jest dla nas priorytetem
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Poniżej znajdziesz informacje na temat przetwarzania przez spółkę pod firmą Consbridge Chemicals spółka z ograniczoną odpowiedzialnością Twoich danych osobowych.
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Administrator danych osobowych</h2>
            <p className="text-gray-700 mb-8">
              Administratorem Twoich danych osobowych przetwarzanych zgodnie z niniejszą Polityką Prywatności jest Consbridge Chemicals spółka z ograniczoną odpowiedzialnością z siedzibą w Krakowie przy ul. Zabłocie 23/24, 30-701 Kraków, wpisana do rejestru przedsiębiorców przez Sąd Rejonowy dla Krakowa-Śródmieścia w Krakowie, XI Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS 0000864949, NIP: 6793206661 (dalej: „Administrator" lub „CC").
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Okoliczności przetwarzania danych osobowych</h2>
            <p className="text-gray-700 mb-4">Twoje dane osobowe są przetwarzane w następujących sytuacjach:</p>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>odwiedzasz stronę www.consbridgechemicals.com lub którąkolwiek z jej podstron (dalej ww. strona oraz jej podstrony zwane są – łącznie lub osobno – „Stroną");</li>
              <li>kontaktujesz się z CC, w tym m.in. osobiście, telefonicznie, za pomocą poczty elektronicznej lub poczty tradycyjnej albo też za pomocą formularza kontaktowego na Stronie.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Kontakt ws. danych osobowych</h2>
            <p className="text-gray-700 mb-8">
              W sprawach dotyczących Twoich danych osobowych można skontaktować się pod adresem: ul. Zabłocie 23/24, 30-701 Kraków, lub za pomocą wiadomości e-mail: office@consbridgechemicals.com
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Cel i podstawy prawne przetwarzania</h2>
            <p className="text-gray-700 mb-4">Uzyskane w sposób opisany w niniejszej Polityce Prywatności dane osobowe mogą być przetwarzane:</p>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>w oparciu o nasz prawnie uzasadniony interes jako administratora danych osobowych – w celu odpowiedzi na wiadomości kierowane do nas na nasze dane kontaktowe za pomocą poczty tradycyjnej, poczty elektronicznej lub formularza kontaktowego</li>
              <li>w oparciu o nasz prawnie uzasadniony interes w przypadku, gdy już nawiązaliśmy relację biznesową, zaś w przypadku, gdy taką relację zamierzamy nawiązać w oparciu o Twoją zgodę (tj. od czasu wyrażenia zgody przez Ciebie, przez czas nie dłuższy niż do momentu wycofania tej zgody) – w celu realizowania marketingu bezpośredniego produktów lub usług;</li>
              <li>w związku z nałożonym na nas jako na administratora danych obowiązkiem prawidłowego zabezpieczenia danych i w oparciu o nasz prawnie uzasadniony interes jako administratora danych osobowych – w celu archiwizacji danych i wykonywania kopii zapasowych.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Dane przetwarzane w celu kontaktu</h2>
            <p className="text-gray-700 mb-8">
              W przypadku kontaktu z nami poprzez formularz kontaktowy udostępniony na Stronie, telefonicznie, pocztą tradycyjną lub elektroniczną, jak również w sytuacjach, kiedy mamy prawo się z Tobą kontaktować (m.in. w celach marketingowych lub jesteś naszym kontrahentem), wówczas będziemy przetwarzać Twoje dane osobowe w takim zakresie, w jakim nam je podasz lub są one niezbędne do odpowiedzi na Twoją wiadomość (w tym dane kontaktowe i identyfikacyjne, a w przypadku skorzystania z formularza kontaktowego udostępnionego na Stronie – także adres IP), lub dane które posiadamy ze względu na łączącą nas relację albo które zebraliśmy z powszechnie dostępnych źródeł.
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Dane przetwarzane w związku z korzystaniem z naszej Strony</h2>
            <p className="text-gray-700 mb-8">
              Gdy korzystasz ze Strony, przetwarzamy takie dane jak: adres IP, sposób korzystania ze Strony, rodzaj i wersja urządzenia końcowego, rodzaj przeglądarki, dokonany wybór w zakresie cookies. W większości przypadków nie jest możliwe zidentyfikowanie Ciebie jako użytkownika, więc takie dane są anonimowe.
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Okres przetwarzania danych</h2>
            <p className="text-gray-700 mb-4">Twoje dane osobowe będą przetwarzane w następujących okresach:</p>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>do kontaktu z Tobą – od dnia ich zebrania do czasu zakończenia prowadzenia korespondencji w sprawie;</li>
              <li>do celów wykonania obowiązków nałożonych przepisami prawa – przez czas nie dłuższy niż niezbędny dla wykazania, że obowiązki te były realizowane prawidłowo;</li>
              <li>do celów dochodzenia lub obrony przed roszczeniami – przez czas nie dłuższy niż okres przedawnienia roszczeń;</li>
              <li>do celów marketingowych – przez czas naszej relacji lub do czasu wycofania zgody;</li>
              <li>do celów poprawy funkcjonowania lub bezpieczeństwa Strony – przez czas, przez jaki dane te są niezbędne do realizacji tego celu;</li>
              <li>do celu archiwizacji i wykonywania kopii zapasowych – przez okres ustalony zgodnie z polityką wykonywania kopii zapasowych i archiwizacji.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Odbiorcy danych</h2>
            <p className="text-gray-700 mb-4">Twoje dane osobowe mogą zostać ujawnione:</p>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>podmiotom powiązanym z Administratorem, w szczególności partnerom Administratora;</li>
              <li>odbiorcom, na rzecz których ujawnienie wymagane jest na mocy odpowiednich przepisów lub postanowienia sądu lub innego organu władzy;</li>
              <li>osobom trzecim świadczącym usługi na rzecz Administratora;</li>
              <li>innym odbiorcom, jeżeli wyrazisz na nich swoją zgodę lub gdy przekazanie im danych jest niezbędne.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Twoje prawa</h2>
            <p className="text-gray-700 mb-4">Przysługują Ci następujące prawa:</p>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>prawo do uzyskania informacji, dostępu do danych oraz do otrzymania kopii danych;</li>
              <li>prawo do sprostowania danych osobowych;</li>
              <li>prawo do wycofania zgody;</li>
              <li>prawo do wniesienia sprzeciwu wobec przetwarzania;</li>
              <li>prawo do przenoszenia danych;</li>
              <li>prawo do usunięcia danych i do ograniczenia przetwarzania;</li>
              <li>prawo do wniesienia skargi do organu nadzorczego.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Polityka cookies</h2>
            <p className="text-gray-700 mb-4">Strona wykorzystuje następujące rodzaje plików cookies:</p>
            <ul className="list-disc list-inside text-gray-700 mb-8">
              <li>funkcjonalne pliki cookies – umożliwiają zapamiętanie ustawień użytkowników;</li>
              <li>analityczne pliki cookies – badają zachowanie użytkownika na Stronie;</li>
              <li>pliki cookies podmiotów (stron) trzecich.</li>
            </ul>

            <div className="mt-12 p-6 bg-gray-50 rounded-xl">
              <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Skontaktuj się z nami</h2>
              <p className="text-gray-700">
                Jeśli masz pytania dotyczące naszej polityki prywatności, skontaktuj się z nami:
              </p>
              <div className="mt-4">
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:office@consbridgechemicals.com" className="text-[#0066b3] hover:underline">
                    office@consbridgechemicals.com
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Adres:</strong> ul. Zabłocie 23/24, 30-701 Kraków
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 