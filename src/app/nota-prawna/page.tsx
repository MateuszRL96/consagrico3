'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function LegalNotice() {
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
            <h1 className="text-5xl font-bold mb-4">Nota Prawna</h1>
            <p className="text-xl opacity-90">
              Warunki korzystania z naszej strony internetowej
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-gray-600">
          <Link href="/" className="hover:text-[#0066b3]">
            Strona startowa
          </Link>
          <span className="mx-2">&gt;</span>
          <span className="text-[#0066b3]">Nota prawna</span>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg font-semibold text-gray-800 mb-8">
              OSOBY KORZYSTAJĄCE Z NASZEJ STRONY INTERNETOWEJ W PEŁNI AKCEPTUJĄ NASTĘPUJĄCE WARUNKI:
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Strona</h2>
            <p className="text-gray-700 mb-8">
              Niniejszy serwis internetowy (dalej – wraz z podstronami – jako: &quot;Strona&quot;) został przygotowany na zlecenie spółki pod firmą Consbridge Chemicals spółka z ograniczoną odpowiedzialnością z siedzibą w Krakowie (dalej jako: &quot;Spółka&quot;).
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Warunki korzystania ze Strony</h2>
            <p className="text-gray-700 mb-8">
              Korzystanie ze Strony nie wymaga spełnienia szczególnych warunków technicznych przez komputer lub inne urządzenie dostępowe, poza standardowymi elementami koniecznymi, takimi jak: dostęp do Internetu oraz standardowy system operacyjny wraz z przeglądarką internetową.
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Treść i zawartość Strony</h2>
            <p className="text-gray-700 mb-8">
              Wszelkie informacje zawarte na Stronie mają charakter wyłącznie informacyjny i dostępne są nieodpłatnie. Zawartość Strony nie stanowi oferty w rozumieniu przepisów ustawy z dnia 23 kwietnia 1964 roku Kodeks cywilny. Informacji zawartych na Stronie nie można traktować jako konsultacje, jak również nie mogą być uznane jako jakakolwiek forma rekomendacji. Jakiekolwiek komentarze, sugestie lub uwagi nawiązujące do informacji zawartych na Stronie, przekazane przez odwiedzającego nie będą traktowane przez Spółkę jako poufne, chyba że Spółka postanowi inaczej. Przekazanie ich powoduje, że Spółka ma prawo dysponować informacjami zawartymi w ww. komentarzach, sugestiach lub uwagach, w tym także Spółka nabywa nieodpłatne prawo do powielania, wykorzystywania, używania lub dystrybuowania takich informacji, bez żadnych ograniczeń. Wszelkie pomysły, wynalazki, plany oraz technologie zawarte w ww. informacjach mogą zostać przez Spółkę wykorzystane bez ograniczeń, w dowolny sposób, w szczególności w produkcji, dystrybucji lub marketingu. Na Stronie mogą być zawarte odnośniki do innych serwisów lub stron internetowych prowadzonych lub administrowanych przez podmioty trzecie. Spółka nie ponosi odpowiedzialności za zawartość lub dostępność materiałów znajdujących się na ww. stronach lub serwisach internetowych.
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Prawa autorskie</h2>
            <p className="text-gray-700 mb-8">
              Zawartość i budowa Strony, w tym także udostępnione za jej pośrednictwem pliki graficzne, pliki tekstowe oraz jej układ graficzny, chronione są prawami autorskimi i mogą ulec zmianie w dowolnym czasie, bez konieczności jakichkolwiek ogłoszeń w tym zakresie. Kopiowanie danych lub informacji zawartych na Stronie, w tym wykorzystywanie w jakiejkolwiek formie umieszczonych na Stronie tekstów czy zdjęć, w tym także ich fragmentów, jest zabronione, chyba że co innego wynika z bezwzględnie obowiązujących przepisów prawa lub uprzedniej pisemnej zgody udzielonej przez Spółkę.
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Odpowiedzialność</h2>
            <p className="text-gray-700 mb-8">
              Spółka dokłada należytej staranności, aby rzetelnie przedstawić informacje dotyczące prowadzonej działalności. Spółka stara się, aby na bieżąco uaktualniać informacje zawarte na Stronie, jednakże nie udziela żadnej gwarancji do treści zamieszczonych na Stronie i w związku z tym nie ponosi odpowiedzialności za następstwa korzystania ze Strony, ani za jej zawartość, w tym w szczególności Spółka nie ponosi odpowiedzialności za rzetelność, kompletność ani aktualność zamieszczonych informacji na Stronie. W szczególności Spółka nie ponosi odpowiedzialności za jakiekolwiek szkody wynikające z dostępu do Strony lub w związku z korzystaniem ze Strony. O ile bezwzględnie obowiązujące przepisy prawa nie stanowią inaczej, Spółka nie ponosi odpowiedzialności za jakiekolwiek braki lub też niepoprawność zamieszczonych na Stronie informacji, w szczególności dotyczących rodzaju oferowanych usług lub produktów, a zaistniałych z przyczyn technicznych lub też niezależnych od Spółki. Spółka nie ponosi również odpowiedzialności za działania osób trzecich, jak również za jakiekolwiek szkody powstałe w związku z pobieraniem bądź wykorzystywaniem materiałów znajdujących się na Stronie, w tym także za szkody zaistniałe wskutek bądź w związku z błędami systemu komputerowego, wirusami lub komunikacją za pośrednictwem poczty elektronicznej.
            </p>

            <h2 className="text-2xl font-bold text-[#0066b3] mb-4">Korespondencja elektroniczna</h2>
            <p className="text-gray-700 mb-8">
              Treść wykorzystywanej przez członków zespołu Spółki korespondencji elektronicznej (włączając wszelkie załączniki) jest poufna i prawnie chroniona oraz przeznaczona wyłącznie dla podmiotu, do którego jest zaadresowana. Jakiekolwiek nieuprawnione rozpowszechnianie, kopiowanie, rozprowadzanie ww. wiadomości lub ich części jest zabronione.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 