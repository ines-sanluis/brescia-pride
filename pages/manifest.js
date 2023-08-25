import React, { useState } from "react";
import PageLayout from "../components/PageLayout";

export default function Manifest() {
  const [isPremessaOpen, setIsPremessaOpen] = useState(false);

  const togglePremessa = () => {
    setIsPremessaOpen(!isPremessaOpen);
  };

  return (
    <PageLayout
      title="Il Manifesto"
    >
      <div className="paragraph">
        <h2>Premessa</h2>
        <p>
          All’interno del presente manifesto, abbiamo scelto di utilizzare il
          termine persona, evitando l’utilizzo del simbolo schwa per rendere
          ancora più accessibile il documento.
        </p>
        <p>
          Da quel che sappiamo, infatti, ancora oggi alcuni sintetizzatori
          vocali falliscono nel leggere correttamente lo schwa. Questo fatto ci
          obbliga, in questa sede, a rinunciare a un potente strumento politico
          - neutro, sostanziale e significativo per la nostra lotta - in quanto
          lo tramuta nel suo opposto, e cioè in una desinenza non accessibile e
          abilista.
        </p>
        <p>
          Tale situazione è inaccettabile, perché rivela la scarsa attenzione
          sociale riservata all’Accessibilità Universale, un tema - ma
          soprattutto, una modalità di approccio - che beneficia e accoglie
          tutti gli individui, indipendentemente dalle loro caratteristiche. In
          quest’ottica, è particolarmente imprescindibile abbattere le barriere
          che le persone con disabilità devono affrontare, rendendo tutti i
          servizi e gli spazi accessibili a chiunque possa trarne beneficio."
        </p>
        <p>
          Esigiamo, quindi, che chi di dovere si occupi di rendere tali
          tecnologie aggiornate, in ottemperanza con quanto decretato dalla UN
          Convention on the Rights of Persons with Disabilities, che riconosce
          l'accesso alle tecnologie dell'informazione e della comunicazione come
          un diritto umano fondamentale.
        </p>
      </div>
      <div className="paragraph">
        <h2>Siamo una realtà</h2>
        {/* LGBTQIAPK+ */}
        <section>
          <h3>LGBTQIAPK+</h3>
          <p>
            La sigla indica la comunità di persone (e il relativo movimento di
            orgoglio e rivendicazione di diritti umani) che si identificano come
            lesbiche, gay, bisessuali*, trans* e non-binarie, queer*,
            questioning, intersex, nello spettro aromantico e asessuale, poly* e
            non monogame, kinky* – e in generale, che si riconoscono al di fuori
            delle forme normate e socialmente privilegiate delle identità
            sessuali tradizionali.
          </p>
          <p>
            Siamo una comunità che combatte per il riconoscimento e
            l’affermazione libera e senza compromessi delle diverse identità
            sessuali. L’identità sessuale è, infatti, un fenomeno complesso che
            è possibile vivere, incarnare ed esprimere in modi eterogenei, ed è
            composto da diverse caratteristiche, come sesso assegnato alla
            nascita e assetto bio-fisiologico, identità di genere ed espressione
            di genere, orientamento d’attrazione e relazionale.
          </p>
        </section>
        {/* Transfemminista Queer */}
        <section>
          <h3>Transfemminista Queer</h3>
          <p>
            Ovvero, che crede e lotta per l’equità tra persone,
            indipendentemente da sesso assegnato alla nascita, identità di
            genere, orientamento d’attrazione o altre caratteristiche sessuali e
            identitarie. Con i nostri corpi e le nostre identità sfidiamo
            costantemente la norma, che ci vuole limitare in categorizzazioni e
            binari prefissati.
          </p>
          <p>
            Consapevoli che tutte le persone sono interconnesse e divengono in
            modi eterogenei, ci impegniamo a esplorare le potenzialità
            trasformative e propulsive del vivere insieme attraverso un’ottica
            di critica e superamento dei dualismi (uomo/donna; natura/cultura;
            ricco/povero; sano/malato etc.).
          </p>
        </section>
        {/* Intersezionale */}
        <section>
          <h3>Intersezionale</h3>
          <p>
            Ovvero che, per riconoscere e contrastare le oppressioni sistemiche,
            non si limita a un’unica linea di resistenza, ma agisce tenendo
            conto di molteplicità e coesistenza delle diverse caratteristiche
            identitarie e sociali che impattano il vissuto delle persone.
          </p>
          <p>
            Crediamo, infatti, che ogni soggettività sia unica e complessa, e
            debba essere considerata, rispettata e valorizzata nelle sue
            diversità.
          </p>
          <p>
            In tal senso, riteniamo imprescindibile impegnarci a considerare il
            contesto in cui siamo in un’ottica più trasversale, imparando a
            decentrare le nostre azioni e riflessioni per ascoltare le esigenze
            dei contesti provinciali, ancora oggi sistematicamente
            marginalizzati e svalutati.
          </p>
        </section>
        {/* Collettiva e orizzontale */}
        <section>
          <h3>Collettiva e orizzontale</h3>
          <p>
            Perché crediamo nell’importanza di unire le forze per imparare a
            stare insieme con rispetto. Riconosciamo la condizione di
            interdipendenza che, in quanto persone, ci lega tutte, e ci
            impegniamo a prendercene cura, costruendo legami sociali che non
            riproducano le dinamiche di violenza e gerarchizzazione della nostra
            società che, ad oggi, continuano a opprimerci e limitarci.
          </p>
        </section>
        {/* Laica */}
        <section>
          <h3>Laica</h3>
          <p>
            Perché crediamo che uno Stato sia laico quando è davvero casa di
            tutte le persone, e cioè, quando riconosce, rispetta e valorizza
            tutte le espressioni autonome, ragionevoli e motivate del corpo
            sociale.
          </p>
          <p>
            Nell’ottica di un pieno riconoscimento del diritto di
            autodeterminazione dell’individuo, consideriamo fondamentale la
            necessità di applicazione del principio di laicità dello Stato nel
            rispetto di qualsivoglia confessione religiosa o affermazione di
            ateismo, agnosticismo e/o razionalismo.
          </p>
          <p>
            Riteniamo imprescindibile l’autonomia concreta dell’autorità civile
            da quella religiosa. Tale autonomia deve essere salvaguardata per
            proteggere le esigenze di identità, famiglie e contesti che
            risentono ancora di una forte influenza religiosa e ideologica (come
            succede, per esempio, in ambito di matrimonio egualitario e
            adozioni, interruzione volontaria di gravidanza e regolazione del
            fine vita).
          </p>
          <p>
            Reclamiamo, come altri Pride italiani, l’urgenza e la necessità di
            una città, una regione, una nazione e una società laiche e libere,
            rispettose di ogni identità esistente.
          </p>
        </section>
        {/* Antifascista */}
        <section>
          <h3>Antifascista</h3>
          <p>
            erché combattiamo il fascismo e ogni totalitarismo, in quanto
            realizzazioni politiche e sociali del patriarcato, del classismo,
            della discriminazione, della prevaricazione e della violenza. Tali
            ideologie sono, infatti, volte a reprimere l’espressione libera e
            individuale delle persone in un meccanismo feroce e senza scrupoli,
            imponendo uniformità e standardizzazione dogmatica del pensiero e
            dell’azione.
          </p>
        </section>
        {/* Antirazzista */}
        <section>
          <h3>Antirazzista</h3>
          <p>
            Perché ci opponiamo a ogni forma di nazionalismo, antimeridionalismo
            o discriminazione basata sul luogo di provenienza o sulla
            nazionalità – reali o presupposti – delle persone.
          </p>
          <p>
            Ci schieriamo a favore dell’implementazione dei servizi di
            accoglienza, soccorso, inserimento e integrazione di tutte le
            persone – comprese quelle portatrici di esigenze particolari – che
            nel nostro Paese e nella nostra città cercano rifugio, per
            raggiungere il riconoscimento di ogni individuo e della sua dignità.
          </p>
        </section>
        {/* Basata sui principi di autodeterminazione e non violenta */}
        <section>
          <h3>Basata sui principi di autodeterminazione e non violenta</h3>
          <p>
            Ovvero, crediamo che ogni persona debba avere il diritto di
            autodeterminarsi, e che ogni corpo sia valido e meriti rispetto,
            tutela e rappresentazione.
          </p>
          <p>
            In questo senso, ci adoperiamo attivamente per far sì che vengano
            riconosciuti e tutelati i diritti di tutti i corpi, e in
            particolare, dei corpi incessantemente discriminati da un sistema
            abilista (che discrimina le persone con disabilità), razzista,
            ageista (che discrimina le persone in base alla loro età),
            grassofobico e terrorista sui corpi, transfobico, invalidante per
            l’esistenza di tutte le persone intersex, intransigente nel
            riconoscere e promuovere la dignità e validità del sex work e della
            tecnologia riproduttiva.
          </p>
        </section>
        {/* Volta alla sostenibilità sociale e ambientale */}
        <section>
          <h3>Volta alla sostenibilità sociale e ambientale</h3>
          <p>
            Perché, consapevoli che le nostre azioni hanno un impatto sugli
            altri e sul pianeta, ci impegniamo a trovare vie alternative al
            consumismo sfrenato sulla base di un sentimento antispecista e di
            cura per tutte le persone e per tutti i contesti ambientali.
          </p>
          <p>
            Garantire un futuro sicuro – a noi e alle generazioni che seguiranno
            – significa unire le nostre lotte e fare pressione sociale affinché
            i Governi riconoscano il danno ambientale, ammettendo l’esistenza
            ormai concreta del riscaldamento globale, e vi pongano rimedio,
            dando valorizzazione alla comunità scientifica e imponendo la
            transizione ecologica in tutti gli ambiti della società.
          </p>
          <p>
            Significa, inoltre, che ogni persona, nel proprio quotidiano, ha la
            responsabilità di adottare soluzioni che consentano di avere un
            minore impatto ambientale – ad esempio, informandosi sulle
            conseguenze delle proprie abitudini e sulle alternative più
            sostenibili – per dimostrare di poter prendere parte al cambiamento.
          </p>
        </section>
      </div>
      <div className="paragraph">
        <h2>Chiediamo</h2>
        {/* Riconoscimento e tutela legale */}
        <section>
          <h3>Riconoscimento e tutela legale</h3>
          {/* Rispetto e considerazione */}
          <section>
            <h4>Rispetto e considerazione</h4>
            <p>
              Chiediamo il riconoscimento e la tutela legale di ogni persona,
              indipendentemente da sesso assegnato alla nascita, identità di
              genere, orientamento d’attrazione o altre caratteristiche
              sessuali, e che non venga più richiesta l’assegnazione, o lo
              svelamento delle sopracitate caratteristiche, quando non
              strettamente necessario.
            </p>
            <p>
              Riconoscendo l’esistenza di corpi e identità non ascrivibili alle
              concezioni sociali e contemporanee di maschile e femminile,
              esigiamo che queste realtà vengano rispettate socialmente,
              legalmente e politicamente senza che l’autodeterminazione
              personale sia vincolata dall’approvazione esterna.
            </p>
          </section>
          {/* Di tutte le identità sessuali in un’ottica non binaria */}
          <section>
            <h4>Di tutte le identità sessuali in un’ottica non binaria</h4>
            <p>
              Chiediamo che vengano riconosciuti i concetti di identità di
              genere e di sesso assegnato alla nascita, oltre al binarismo, in
              ottemperanza con le più recenti definizioni condivise in ambito
              accademico, psicologico e sociologico.
            </p>
            <p>
              Esigiamo che le persone transgender, non-binarie, queer e intersex
              – e i relativi diritti di autodeterminazione – vengano
              riconosciute e tutelate dal Comune Di Brescia e dalle istituzioni
              nazionali, e che vi sia adeguata sensibilizzazione e aggiornamento
              in ogni ambiente istituzionale e cittadino.
            </p>
          </section>
          {/* Della carriera alias */}
          <section>
            <h4>Della carriera alias</h4>
            <p>
              La carriera alias è un profilo burocratico riservato alle persone
              transgender, che si alterna temporaneamente a quello ufficiale in
              attesa di una transizione definitiva. Tale pratica sostituisce in
              maniera non ufficiale il nome e il genere anagrafico della persona
              all’interno del proprio Comune.
            </p>
            <p>
              Abbiamo stilato un documento di linee guida, che per chiunque ne
              voglia beneficiare sarà presto scaricabile dal nostro sito, per
              avviare il tesseramento tramite carriera alias all’interno del
              nostro comitato, e sollecitiamo il Governo italiano, i singoli
              Comuni e le associazioni ad adottare nazionalmente il sistema
              delle carriere alias. Ciò consentirebbe alle persone di essere
              riconosciute con i propri nome e pronomi corretti, e non più
              attraverso quelli assegnati all’anagrafe. Nonostante l’alias non
              abbia valore legale, può essere usato come garante per sostituire
              i dati visualizzati nelle pratiche amministrative e validare
              ulteriormente l’autodeterminazione delle persone, facilitando il
              loro inserimento in contesti scolastici, lavorativi e/o pubblici.
            </p>
          </section>
          {/* Delle sfamiglie */}
          <section>
            <h4>
              Delle s/famiglie, della genitorialità arcobaleno e di tutte le
              forme di relazionalità e sessualità consensuali
            </h4>
            <p>
              È imprescindibile che vengano riconosciuti tutti gli orientamenti
              di attrazione e relazionali (non solo monogami e monopartneriali)
              tra persone consapevoli che possano legalmente esercitare il
              consenso (il quale, ricordiamo, deve essere libero da
              manipolazioni, pressioni o abusi di potere, revocabile, specifico
              e informato). È, inoltre, indispensabile che vengano rispettati e
              tutelati equamente i conseguenti legami relazionali e nuclei
              familiari, senza indurre alla vergogna le persone per il proprio
              comportamento sessuale e le relative pratiche consensuali (ad
              esempio, attraverso il kinkshaming).
            </p>
            <p>
              Ci sentiamo persone avvilite e apertamente private dei nostri
              diritti comunitari, per quanto riguarda il vuoto normativo che
              comporta la mancata registrazione di entrambe le figure
              genitoriali all’interno degli atti di nascita della nostra prole.
              Per questo, in sintonia con quanto affermato dal Parlamento
              europeo, condanniamo fermamente la decisione dello scorso marzo
              dell’attuale Governo Meloni di impedire tale registrazione a
              Milano e in tutti i Comuni italiani. Stando all’emendamento
              approvato dall’Eurocamera, che invita il nostro Governo a revocare
              immediatamente tale decisione, si tratta, infatti, di una
              violazione diretta dei diritti dei minori, elencati nella
              Convenzione delle Nazioni Unite sui diritti dell’infanzia e
              dell’adolescenza del 1989.
            </p>
            <p>
              È necessaria, oggi più che mai, una legge che tuteli le coppie
              omogenitoriali e le rispettive famiglie, perché nessuna persona
              venga privata di validità giuridica. Ribadiamo, inoltre, la
              necessità di riformare la Legge n.184/83 in materia di adozioni,
              estendendo alle coppie non eterosessuali e alle persone singole la
              possibilità di candidarsi come famiglie adottive.
            </p>
            <p>
              Chiediamo, inoltre, l’introduzione di una legge che garantisca il
              matrimonio egualitario – ovvero, che estenda il diritto al
              matrimonio civile anche alle coppie in una relazione non
              eterosessuale, come accade già in quasi tutti i Paesi dell’Europa
              occidentale – e che i matrimoni delle persone della comunità
              contratti all’estero siano trascritti nei registri dei matrimoni
              comunali.
            </p>
          </section>
          {/* Di tutte le persone */}
          <section>
            <h4>
              Di tutte le persone e dei corpi razzializzati, non conformi e con
              disabilità
            </h4>
            <p>
              Esigiamo che vi sia rispetto, riconoscimento e rappresentazione di
              tutti i corpi nei programmi educativi e nei servizi pubblici, con
              attenzione particolare al coinvolgimento, all’accessibilità e alla
              dignità delle persone dai corpi razzializzati, non conformi e con
              disabilità.
            </p>
            <p>
              Chiediamo che vengano legalizzate e tutelate le figure di
              assistenza all’emotività, all’affettività e alla sessualità per
              persone con disabilità (OEAS).
            </p>
            <p>
              Per quanto riguarda le persone razzializzate, esortiamo il nostro
              Governo alla creazione di un vero sistema di accoglienza e
              integrazione, istituendo nuovi corridoi umanitari e sistemi
              normativi che favoriscano la libertà di movimento delle persone e
              riducano al minimo i rischi per le loro vite, indipendentemente
              dal luogo di provenienza e dai motivi che le hanno spinte a
              partire. È, inoltre, assolutamente imprescindibile che la
              solidarietà non venga criminalizzata, e che le realtà che operano
              lungo le rotte migratorie vengano supportate e validate nel loro
              fondamentale lavoro.
            </p>
            <p>
              Attendiamo che vengano siglati accordi che permettano alle persone
              di viaggiare in sicurezza, e rifiutiamo l’esternalizzazione delle
              frontiere, che finanzia Paesi in cui non sono rispettati i diritti
              umani delle persone e, in particolare, delle persone LGBTQIAPK+,
              discriminate, oppresse, recluse, vittime di pene e violenze
              disumane (come la pena di morte).
            </p>
            <p>
              Per quanto riguarda la nostra città e la nostra provincia,
              chiediamo l’implementazione di strutture riservate all’accoglienza
              di persone richiedenti asilo e rifugiate appartenenti alla
              comunità LGBTQIAPK+, nonché una formazione obbligatoria per le
              persone che lavorano all’interno del sistema di accoglienza (CAS e
              SAI) e per coloro che, in commissione, hanno il compito di
              vagliare e approvare le richieste di asilo.
            </p>
            <p>
              Riteniamo, inoltre, necessario che venga adottato anche a livello
              nazionale uno standard comune nell’applicazione della legge sulle
              persone della comunità richiedenti asilo, o Sistema Comune di
              Protezione Europeo, attraverso la promozione e il coordinamento
              della condivisione di buone prassi per l’esame delle richieste e
              per l’erogazione dei servizi di accoglienza.
            </p>
          </section>
        </section>
        {/* Prevenzion e sicurezza */}
        <section>
          <h3>Prevenzione e sicurezza</h3>
          {/* Contro le discriminazoini e la violenza sistemiche */}
          <section>
            <h4>Contro le discriminazioni e la violenza sistemiche</h4>
            <p>
              Esigiamo un profondo impegno per il miglioramento del lavoro
              collettivo e istituzionale di contrasto alla violenza di genere –
              patriarcale, razzista, abilista, ageista, classista e
              omolesbobitransafobica+ – affinché non sia più normalizzata e
              sistemica.{" "}
            </p>
            <p>
              Ci riferiamo, per esempio, all’introduzione di un’educazione alle
              differenze, al rispetto e alla prevenzione della violenza. Tale
              formazione dovrebbe essere garantita dallo Stato italiano negli
              istituti scolastici di ogni ordine e grado, sia con apposite ore
              di educazione socio-emotiva, sessuale e digitale, sia con
              trasversalità in ogni materia.{" "}
            </p>
            <p>
              Allo stesso modo, questa esigenza riguarda anche il sostentamento
              dei consultori – che dovrebbero tutelare la giustizia riproduttiva
              e la consapevolezza sessuale – e dei centri antiviolenza, che
              accolgono e supportano le persone nella fuoriuscita dalla violenza
              di matrice fobica, nonché di tutte quelle iniziative, professioni
              e realtà che sensibilizzano sul contrasto alle disequità e alle
              violenze.
            </p>
          </section>
          {/* Contro l'omolesbobitra... */}
          <section>
            <h4>Contro l’omolesbobitransafobia+</h4>
            <p>
              Ossia, letteralmente la “paura”, spesso nutrita dall’ignoranza e
              irrazionale, nei confronti di chi è in generale queer, intesa
              concretamente come avversione, rifiuto o disprezzo nei confronti
              delle persone della comunità LGBTQIAPK+ proprio in quanto
              soggettività percepite come diverse e indefinibili.{" "}
            </p>
            <p>
              Il risultato di questo sentimento mette in pericolo la nostra
              vita: rendersene finalmente conto e contrastarlo è, quindi, di
              estrema urgenza.{" "}
            </p>
            <p>
              Secondo una recente relazione della Ong Ilga Europe per la
              Commissione Affari sociali del Parlamento europeo, sostenuta anche
              dalla sezione europea dell’International Lesbian, Gay, Bisexual,
              Trans and Intersex Association, il 2022 è stato l’anno in cui si
              sono verificati più episodi di violenza nei confronti della
              comunità LGBTQIAPK+ dell’ultimo decennio.
            </p>
            <p>
              Stando a Ilga Europe, l’incitamento all’odio verso la nostra
              comunità ha conseguenze brutali, promuovendo una violenza «sempre
              più pianificata e mortale»: nell’ultimo anno, si sono infatti
              moltiplicati gli attacchi terroristici all’interno dei nostri
              luoghi di ritrovo, ed è aumentato il fenomeno di disumanizzazione
              delle persone trans* e non-binarie, allontanate dai posti di
              lavoro, raccontate dai media senza la loro voce, stigmatizzate
              nell’esplorazione della propria identità di genere
              (depatologizzata ormai dalle più importanti istituzioni mediche e
              scientifiche internazionali).
            </p>
            <p>
              In Italia, le dichiarazioni di figure politiche come Giorgia
              Meloni, Federico Mollicone, Ignazio La Russa, Lucio Malan ed
              Eugenia Roccella contribuiscono attivamente a creare un clima
              ostile, danneggiando la vita delle persone e favorendo ciò che il
              rapporto denuncia come una lacerazione sociale che continua a
              estendersi insieme alla svalorizzazione che la comunità vive sulla
              propria pelle.{" "}
            </p>
            <p>
              L’attuale Governo italiano preoccupa Ilga Europe come preoccupa
              chi, ogni giorno, ne vive le assurde conseguenze. L’opposizione
              alla Legge Zan, un decreto che avrebbe contribuito a proteggere le
              persone della comunità dai crimini d’odio, e la pressione per
              l’abolizione dell’educazione sessuale nelle scuole e dei libri
              inclusivi per l’infanzia sono solo alcune delle tante violenze che
              vi vengono perpetrate.
            </p>
            <p>
              Non possiamo accettare ulteriormente che il nostro Governo agisca
              in opposizione alle più aggiornate posizioni scientifiche,
              mettendo a tacere e esponendo a violenze fatali l’affermazione, la
              realtà e la vita delle persone della comunità.
            </p>
            <p>
              Rivendichiamo ancora una volta il diritto all’autodeterminazione
              di ogni persona e il riconoscimento di tutti i percorsi di
              affermazione di genere e di identità, senza compromessi.
            </p>
            <p>
              Per questi obiettivi, è necessario che il Governo si muova per
              l’istituzione di nuovi programmi educativi, informativi e di
              sensibilizzazione sul tema, di centri antiviolenza specializzati
              in questioni LGBTQIAPK+ e di case rifugio di accoglienza.{" "}
            </p>
          </section>
        </section>
        {/* Garanzia di diritti e formazione */}
        <section>
          <h3>Garanzia di diritti e formazione</h3>
          {/*  Garanzia di salute, accoglienza cura ed educazione adeguate per tutte le persone */}
          <section>
            <h4>
              Garanzia di salute, accoglienza cura ed educazione adeguate per
              tutte le persone
            </h4>
            <p>
              Lottiamo, come altri Pride italiani, affinché tutte le persone
              possano avere accesso equo ai servizi di salute psicofisica, cura,
              lavoro ed educazione, e in particolare, per le identità
              non-binarie e trans* e per le persone di qualsiasi orientamento
              sessuale e affettivo, di qualsiasi identità ed espressione, di
              qualsiasi cultura ed etnia.
            </p>
            <p>
              È, inoltre, assolutamente inaccettabile che, dentro e fuori dai
              contesti accademici e lavorativi, non esista un’educazione
              sessuale, socio-emotiva e digitale soddisfacente e aggiornata,
              trasversale, multidisciplinare e libera da ideologie di stampo
              religioso o politico.{" "}
            </p>
            <p>
              Chiediamo alle istituzioni di implementare e facilitare programmi
              e progetti che sopperiscano a tali lacune, perché esse
              compromettono noi e la nostra capacità di comprensione e di
              socialità.
            </p>
          </section>
          {/* Sistema assistenziale territoriale */}
          <section>
            <h4>Sistema assistenziale territoriale</h4>
            <p>
              Dopo l’emergenza pandemica e l’inasprimento delle difficoltà
              economiche e di salute, si fa ancora più pressante la necessità di
              ripristinare un sistema assistenziale territoriale e aumentare i
              fondi per l’aggiornamento e il sostentamento dei consultori, che
              al momento offrono poche e insufficienti coperture per patologie
              strettamente fisiche, e quasi nessuna preparazione adeguata in
              ambito di salute mentale.
            </p>
          </section>
          {/*  Prevenzione IST (infezioni Sessualmente Trasmissibili) */}
          <section>
            <h4>Prevenzione IST (infezioni Sessualmente Trasmissibili)</h4>
            <p>
              Vogliamo che i centri IST e la PrEP (profilassi pre-esposizione
              per l’HIV) siano facilmente accessibili, gratuiti, con personale
              sanitario preparato e non giudicante sulla nostra vita sessuale e
              sui nostri corpi.
            </p>
            <p>
              È necessario ripensare la prevenzione in un’ottica non
              stigmatizzante, con la creazione di campagne incentrate anche
              sulla TasP (terapia come prevenzione) che permettano alle persone
              che vivono con HIV di non trasmettere il virus.
            </p>
          </section>
          {/* Garanzia dei diritti per la giustizia riproduttiva e l’autonomia delle persone  */}
          <section>
            <h4>
              Garanzia dei diritti per la giustizia riproduttiva e l’autonomia
              delle persone
            </h4>
            <p>
              Esigiamo il rispetto assoluto nei confronti della libertà di
              scelta individuale e della libertà di autodeterminazione rispetto
              alla vita sessuale, riproduttiva e affettiva di tutte le persone,
              e in particolare, delle persone con utero che vedono questi loro
              diritti quotidianamente ostacolati.
            </p>
            <p>
              Per questo motivo, chiediamo che venga destigmatizzato e tutelato
              il ricorso alla pratica abortiva, al divorzio, all’affidamento, e
              in generale, a tutte le pratiche di libera e consapevole
              autogestione della propria vita sessuale e riproduttiva, tramite
              la sensibilizzazione sociale – che smantelli le gabbie dei ruoli
              di genere – e il potenziamento dei consultori e dei centri
              assistenziali, e garantendo in ogni struttura medico-sanitaria la
              presenza di personale non obiettore.
            </p>
          </section>
          {/* Garanzia della reperibilità e della gratuità dei servizi medici per persone trans* e non-binarie */}
          <section>
            <h4>
              Garanzia della reperibilità e della gratuità dei servizi medici
              per persone trans* e non-binarie
            </h4>
            <p>
              Chiediamo che il Ministero della Salute e il Servizio Sanitario
              Nazionale considerino con pari dignità e urgenza gli interventi di
              rettifica chirurgica dei caratteri sessuali, e che il processo di
              transizione medico e chirurgico (quando e se desiderato) delle
              persone trans* e non-binarie venga reso più accessibile,
              riconosciuto e riconsiderato sulla base dell’autodeterminazione.
            </p>
          </section>
          {/* Aggiornamento del sistema e del personale medico */}
          <section>
            <h4>Aggiornamento del sistema e del personale medico</h4>
            <p>
              È, inoltre, inaccettabile che il sistema medico-sanitario non sia
              indirizzato, né tanto meno obbligato, a essere formato e
              aggiornato sulle tematiche di diversità e inclusione e sul
              superamento accademico di vecchie concezioni e stereotipi, come
              quelle che riguardano le realtà delle persone LGBTQIAPK+ (ma non
              solo). Tale prassi, oltre a ostacolare la ricerca, porta anche a
              diagnosi errate o tardive, violenza clinica, ostetrica e
              ginecologica, discriminazioni nel luogo di cura/assistenza alla
              salute e peggioramento della salute delle identità minoritarie o
              discriminate.
            </p>
            <p>
              Esigiamo contesti in cui le obiezioni e lo stigma non possano
              avere ulteriore spazio.
            </p>
          </section>
          {/* Educazione della comunità alla cura collettiva */}
          <section>
            <h4>Educazione della comunità alla cura collettiva</h4>
            <p>
              Riteniamo necessario incentivare anche un sistema scolastico,
              sociale e comunitario che educhi alla cura, in ogni suo aspetto e
              senza stigma, per una politica dell’interdipendenza e della
              sostenibilità ambientale e sociale – sia in maniera formale, con
              un’educazione onnicomprensiva, sia in modo informale, con
              iniziative di sensibilizzazione volte a un cambiamento concreto
              nell’approccio e nell’accesso alla salute e al benessere in ogni
              forma.{" "}
            </p>
          </section>
        </section>
      </div>
      <div className="paragraph">
        <h2>Noi siamo cultura e la cultura si fa insieme</h2>
        <p>
          Brescia Pride agisce per la costruzione comunitaria di una cultura
          finalmente libera da violenze, discriminazioni e oppressioni, esente
          da sessuofobia, sessismo e machismo, dogmatismi ideologici, xenofobia
          e omolesbobitransafobia+.
        </p>
        <p>
          Rivendichiamo il nostro diritto a una cultura collettivamente equa,
          sostenibile, ecologica, basata sui principi di autodeterminazione e
          accoglienza per tutte le persone, tecnologicamente avanzata e
          informata.
        </p>
        <p>
          Mettiamo in discussione attivamente il sistema di potere che produce e
          riproduce le disuguaglianze, alimentando privilegi e oppressioni,
          perché vogliamo liberarci dalle catene del patriarcato
          allo-mono-etero-cisnormato, dell’abilismo, del razzismo, del
          classismo, dell’ageismo, del terrorismo sui corpi e sulle identità.
        </p>
        <p>
          Con i nostri corpi occupiamo e reclamiamo a gran voce lo spazio
          comunitario della nostra città per rivendicare i diritti di tutte le
          persone queer, lesbiche, gay, bisessuali, pansessuali, dello spettro
          aro-ace, trans*, non-binarie, drag, poliamorose, kinky, sex worker,
          intersex, donne, senza lavoro e istruzione, disabili, neurodivergenti,
          migranti, sieropositive, sierocoinvolte, abusate e violate, silenziate
          e vulnerabili, delle persone che abortiscono, che fuggono dai propri
          paesi d’origine, che non hanno una casa, e di chiunque non sia
          conforme alle limitate norme imperanti.
        </p>
        <div className="separator"></div>
        <p>
          Ci chiamano minoranza, ma insieme siamo una moltitudine di persone e
          comunità: tante, troppe, straripanti, impossibili da comprimere o
          contenere.{" "}
        </p>
        <p>
          Siamo soggettività incarnate, affettive e interdipendenti che aspirano
          a liberi cambiamenti, connessioni e trasformazioni.
        </p>
        <p>
          Vogliamo affermare le nostre esistenze molteplici con orgoglio,
          abitare con le nostre vibranti forme fuori norma un mondo che, ad
          oggi, finge di non vederci e nega il nostro essere.
        </p>
        <p>
          Cultura è rappresentazione, tecnologia, meccanismo di innesco e
          creazione di mondi. Per troppo tempo questo magico potere è stato
          messo al servizio della prevaricazione e della violenza, generando
          contesti oppressivi, ingiusti e brutali per le nostre menti e i nostri
          corpi.
        </p>
        <p>
          Modalità stereotipate, obsolete e immobili del rappresentare e del
          conoscere sezionano e intorpidiscono la soggettività, producendo
          persone intransigenti, uniformate, ostacolate nella comprensione e
          nell’esplorazione della realtà che le circonda, segnata, invece, da un
          continuo cambiamento.
        </p>
        <p>
          Rivolgersi alla moltiplicazione della cultura è necessario per creare
          la possibilità di un futuro flessibile, dove soggettività sempre
          diverse, critiche e attive esplorano in modo più libero una realtà
          irrimediabilmente complessa, stratificata e multiforme. La nostra
          capacità di sostenere i suoi sviluppi presenti e futuri, creando una
          politica di giustizia ambientale e vivibilità per tutte le persone,
          dipenderà da un’interpretazione aperta e fluida, cosciente e
          sostenibile, che apra la nostra comprensione a nuove vie.
        </p>
        <p>
          <a
            href="https://www.instagram.com/explore/tags/lecosecambiano"
            target="_blank"
          >
            #LeCoseCambiano
          </a>
          <span> (Brescia Pride 2022): tiriamo </span>
          <a
            href="https://www.instagram.com/explore/tags/fuorilavoce"
            target="_blank"
          >
            #FuoriLaVoce
          </a>
          <span> (Brescia Pride 2019) per </span>
          <a
            href="https://www.instagram.com/explore/tags/unirelacittà"
            target="_blank"
          >
            #UnireLaCittà
          </a>
          <span> (Brescia Pride 2017) e la provincia.</span>
        </p>
        <p>
          Un mondo inedito, non dominato dalla discriminazione, basato sul
          rispetto, sulla tolleranza e sulla cura, aperto a nuovi orizzonti e
          temporalità è già nelle nostre mani, ma dobbiamo impegnarci a crearlo
          e ricrearlo collettivamente, attraverso azioni e pratiche culturali e
          sociali concrete.
        </p>
        <p>
          <strong>
            Cultura è rappresentazione, tecnologia, meccanismo di innesco e
            creazione di mondi.
          </strong>
        </p>
        <p>
          <strong>Noi siamo cultura, e la cultura si fa insieme.</strong>
        </p>
        <a
          href="https://www.instagram.com/explore/tags/laculturasifainsieme"
          target="_blank"
        >
          #LaCulturaSiFaInsieme
        </a>
        <a
          href="https://www.instagram.com/explore/tags/bresciapride"
          target="_blank"
        >
          #BresciaPride
        </a>
        <a
          href="https://www.instagram.com/explore/tags/BresciaCapitaleDellaCultura2023"
          target="_blank"
        >
          #BresciaCapitaleDellaCultura2023
        </a>
      </div>
      <style jsx>{`
        .paragraph,
        .paragraph > section,
        .paragraph > section > section {
          display: flex;
          flex-direction: column;
          gap: var(--gutter);
        }
        .paragraph h2 {
          color: var(--blue);
        }
        .paragraph > section {
          margin-bottom: var(--gutter2x);
        }
        .separator {
          height: 1px;
          border-bottom: 1px solid var(--blue);
        }
      `}</style>
    </PageLayout>
  );
}
