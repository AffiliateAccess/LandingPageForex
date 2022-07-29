/*eslint-disable */
// ** Reactstrap Imports
import { Fragment, useState, useEffect } from 'react'

// ** Third Party Imports
import axios from 'axios'

// ** Demo Components
import Faqs from './Faqs'
import FaqContact from './FaqContact'

// ** Custom Component
import Breadcrumbs from '@components/breadcrumbs'

// ** Styles
import '@styles/base/pages/page-faq.scss'
const dataTemp = {
  faqData: {
    // payment
    privacy: {
      icon: 'AlertCircle',
      title: 'Privacy',
      subtitle: 'Privacy & Cookies',
      qandA: [
        {
          question: 'Privacy Policy',
          ans: " Da www.forexcomparator.com puntiamo sul valore della privacy, sicurezza e affidabilità non soltanto nelle nostre recensioni dei concessionari di gioco ma anche all'interno del sito che mettiamo a disposizione dei visitatori. Abbiamo creato questa pagina con l'informativa sulla privacy per rendervi consapevoli di come i dati da voi forniti vengano trattati, di come www.bonuswelcome.com garantisca la tutela della privacy dell'utente e sul funzionamento generale del nostro sito. Con l'uso del nostro prodotto, concordi alle seguenti disposizioni e condizioni d'uso"
        },
        {
          question: '  Finalità del trattamento',
          ans: 'Il sito web e il servizio www.forexcomparator.com  possono essere utilizzati senza registrazione, pertanto gli unici dati raccolti sono quelli di Google Analytics. I dati raccolti vengono utilizzati per migliorare il prodotto disponibile su www.forexcomparator.com.'
        },
        {
          question: 'Definizioni',
          ans:
            <ul>
              <li>Prodotto: Il prodotto è il sito web  www.forexcomparator.com.</li>
              <li>Dati personali: i dati personali comprendono l'indirizzo e-mail fornito volontariamente.</li>
              <li>Dati dell'utente: i dati dell'utente sono quelli raccolti automaticamente con l'uso del nostro prodotto, come il tempo trascorso sul sito o il numero di pagine visitate.</li>
            </ul>
        },
        {
          question: 'Metodo di lavorazione',
          ans: ' I dati raccolti vengono trattati con la massima riservatezza, utilizzando misure di sicurezza informatica che ne impediscono la visione da parte di fonti esterne. Si precisa inoltre che i dati forniti non saranno diffusi o comunicati a società esterne.'
        },
        {
          question: 'Utilizzo dei cookie',
          ans: "Utilizziamo i cookie al solo scopo di analizzare i dati degli utenti raccolti tramite Google Analytics. Questi dati dell'utente ci permettono di migliorare il nostro servizio per la vostra prossima visita."
        },
        {
          question: 'Titolare del trattamento dei dati',
          ans: 'www.forexcomparator.com'
        }
      ]
    },
    // delivery
    responsability: {
      icon: 'UserCheck',
      title: 'Disclaimer',
      subtitle: 'Disclaimer Important',
      qandA: [
        {
          question: 'DISCLAIMER IMPORTANTE',
          ans: "Il contenuto fornito su questo sito web include notizie generiche e pubblicazioni, le nostre analisi, opinioni personali e contenuti forniti da terze parti, che sono intesi solo per scopi di istruzione e ricerca. Non costituisce e non dovrebbe essere letto come raccomandazione o consiglio a intraprendere qualsiasi azione, inclusi investimenti o acquisti di qualsiasi prodotto. Prima di prendere qualsiasi decisione finanziaria, dovresti effettuare le tue proprie valutazioni, applicare la tua discrezione e consultare solo i soggetti competenti di tua fiducia. Il contenuto del sito web non risulta diretto personalmente a te e noi non possiamo tenere in considerazione la tua situazione finanziaria e i tuoi bisogni. Le informazioni contenute in questo sito non sono necessariamente fornite in tempo reale né risultano necessariamente accurate. I prezzi qui riportati potrebbero essere forniti da market makers e non dalle borse. Qualsiasi operazione di trading o altra decisione finanziaria che farai ricadrà sotto la tua piena responsabilità e non dovresti affidarti completamente a nessuna informazione fornita in tutto il sito. Forexcomparator non offre nessuna garanzia riguardante le informazioni contenute nel sito e non si può assumere alcuna responsabilità per qualsiasi perdita finanziaria di trading che puoi patire per esserti affidato a qualsiasi informazione contenuta in questo sito. Il sito web può includere pubblicità e altri contenuti promozionali e Forexcomparator può ricevere un compenso da terze parti in relazione al contenuto. Forexcomparator nono appoggia le terze parti, non raccomanda l'utilizzo di alcun servizio e non si assume la responsabilità per qualsiasi utilizzo di servizi o siti web forniti da terze parti. Forexcomparator e i suoi dipendenti, agenti, filiali e associati non sono responsabili e non dovrebbero essere ritenuti tali per alcuna perdita o danno risultante dal tuo utilizzo del sito o dal tuo affidamento sulle informazioni fornite su questo sito."
        }
        // {
        //   question: "Come sosteniamo il gioco d'azzardo responsabile?",
        //   ans: "www.forexcomparator.com il gioco responsabile, invitando i nostri utenti a giocare con moderazione solo ed esclusivamente su siti scommesse ADM, gli unici in grado di garantire un elevato livello di protezione del giocatore. Alle volte l’abuso può trasformarsi in una dipendenza da gioco d’azzardo, con gravi ripercussioni su salute, affetti e vita professionale, e per questo è importante intervenire tempestivamente. "
        // },
        // {
        //   question: "Quando bisogna preoccuparsi?",
        //   ans: "La ludopatia è un desiderio incontrollabile di giocare e scommettere, senza pensare ad alcune ripercussioni negative sulla salute della persona. Non solo: essa può portare anche problemi dal punto di vista delle finanze, dei rapporti lavorativi e interpersonali."
        // },
        // {
        //   question: "Quali comportamenti può avere una persona affetta da disturbo da gioco d'azzardo patologico?",
        //   ans:
        //     <Fragment>
        //       <span>Secondo le indicazioni dell’Organizzazione Mondiale della Sanità. Ecco i sintomi tipici di una dipendenza come la ludopatia:</span>
        //       <ul>
        //         <li>Pensare al gioco d’azzardo in modo ossessivo.</li>
        //         <li>Ricerca dell’”adrenalina della vittoria” alzando sempre l’asticella.</li>
        //         <li>Desiderio del gioco impossibile da reprimere.</li>
        //         <li>Quando non si gioca ci si sente stressati o irrequieti.</li>
        //         <li>Vedere le scommesse o il gioco come una soluzione dei problemi.</li>
        //         <li>Giocare al di sopra delle proprie possibilità finanziarie per recuperare il denaro perso.</li>
        //         <li>Procurarsi il denaro necessario rubando o commettendo altri atti illeciti.</li>
        //         <li>Rischiare il proprio lavoro o gli affetti per il gioco o le scommesse.</li>
        //         <li>Chiedere prestiti di denaro a conoscenti o amici per giocare.</li>
        //         <li>Non essere sinceri con familiari e amici riguardo il problema.</li>
        //         <li>Impostare dei Limiti di Gioco.</li>
        //       </ul>
        //     </Fragment>
        // },
        // {
        //   question: 'Che soluzione posso adottare?',
        //   ans: "Una soluzione per controllare i propri comportamenti ed evitare che essi possano degenerare è di certo quello di imporsi dei limiti di spesa. Questo tipo di precauzione può essere presa dall’utente già in fase di registrazione ad una piattaforma di gioco online, in quanto nel form di registrazione c’è sempre questa opzione sui limiti di gioco. A cosa serve? Questo metodo può dare all’utente un limite di budget settimanale o mensile di ricarica sul proprio conto online. Per fare un esempio: se si imposta un limite di ricarica di 1000€ al mese, sarà lo stesso bookmaker ADM (ex AAMS) ad impedire al giocatore versamenti che vadano oltre quel limite mensile sull’account di gioco personale. Questi limiti di gioco da impostare in fase di registrazione, inoltre, possono essere modificati anche successivamente all’iscrizione grazie a delle opzioni presenti sul proprio account online."
        // },
        // {
        //   question: "Prendersi un periodo di pausa: l’auto-esclusione",
        //   ans: "Altra soluzione che può utilizzare un utente che crede di aver bisogno di limitare il proprio gioco d’azzardo è quella dell’auto-esclusione. Questo strumento è presente in tutti i bookmakers online ed è grazie ad esso che l’utente può mettere in pausa il proprio conto gioco online. Questo tipo di funzione dell’auto-esclusione, inoltre, se viene attivata ha effetto su tutte le piattaforme di scommesse ADM: per quell’utente, dunque, sarà impossibile anche aprire un nuovo gioco su un altro sito di scommesse ADM. Questo strumento di auto-esclusione può essere attivato in due modalità: tempo determinato, per un numero di giorni che l’utente stabilirà fino ad un massimo di 90, oppure a tempo indeterminato, minimo 6 mesi. In questo periodo di pausa, dunque, l’utente: può accedere al proprio conto gioco online e ritirare l’eventuale denaro presente non può ricaricare il proprio account con versamente né scommettere Una volta attivato il metodo di auto-esclusione a tempo determinato, esso si conclude automaticamente una volta passato il tempo scelto dall’utente. Se si imposta una esclusione a tempo indeterminato, invece, solo dopo almeno 6 mesi si può riattivare il proprio conto gioco con tutte le sue funzioni, dopo aver inviato una comunicazione alla piattaforma online. Se si è scelta questa modalità di auto-esclusione a tempo indeterminato, bisognerà fare molta attenzione ad essere ben pronti quando si ritorna ad attivare il proprio conto gioco."
        // },
        // {
        //   question: 'Il Registro Unico delle Autoesclusioni (Rua)',
        //   ans: " Esiste un Registro Unico delle Autoesclusioni (Rua) nel quale finiscono tutti gli utenti che hanno richiesto questo strumento per il proprio conto gioco online. Il Registro è nazionale ed è stato introdotto dall’Agenzia delle Dogane e dei Monopoli per dare maggiori tutele ai giocatori. Essere iscritti a questo registro permette a tutti i bookmakers online ADM di sapere quali utenti non possono aprire conti gioco perché hanno richiesto l’auto-esclusione su un’altra piattaforma di scommesse online. Il Registro Unico delle Autoesclusioni non è sempre esistito. Prima di esso, infatti, se si chiedeva l’auto-esclusione ad una piattaforma, bastava iscriversi ad un altro bookmaker online aggirando l’impedimento. Auto-esclusione, dunque, che valeva solo per il conto gioco dove la si richiedeva, mentre la Rua permette di dare all’auto-esclusione un effetto ancor più importante riguardando tutte le piattaforme di gioco online ADM."
        // },
        // {
        //   question: 'Contatti utili',
        //   ans: <Fragment>
        //     <span> Se si pensa di aver bisogno di aiuto per problemi legati alla ludopatia bisogna sapere che esistono numerose associazioni e strutture che possono dare un supporto attivo per superare il problema. Prima di tutto, è disponibile un numero verde 800 55 88 22, attivo dal Lunedì al Venerdì dalle 10 alle 16, assolutamente anonimo, per poter parlare dei propri problemi riguardanti il gioco d’azzardo. Inoltre, qui di seguito si vogliono elencare alcuni associazioni e siti di supporto come:</span>
        //     <ul>
        //       <li>Gambling Therapy.</li>
        //       <li>Giocatori Anonimi.</li>
        //       <li>Gam-Anon Italia.</li>
        //     </ul>
        //   </Fragment>
        // },
        // {
        //   question: "Numero verde anti ludopatia",
        //   ans:
        //     <Fragment>
        //       <p>Il numero verde 800 55 88 22 è attivo dall’inizio di Ottobre 2017 ed è un numero nazionale che può aiutare con qualsiasi problematica riguardante il gioco d’azzardo in tutte le sue forme. Questo numero verde 800 55 88 22 è attivo su tutto il territorio nazionale dalle 10 alle 16 dal lunedì al venerdì ed è completamente gratuito.</p>
        //       <p> Chiamando questo numero è possibile parlare dei propri problemi ed esporre le difficoltà che riguardano il gioco sulle piattaforme online e non solo. A gestire questo numero verde è il Centro Nazionale Dipendenze e Doping dell’Istituto Superiore di Sanità. Questo centro potrà aiutare al meglio tutti coloro che vivono un momento di difficoltà riguardante il gioco d’azzardo in tutte le sue forme. Il giocatore, infatti, può contattare questo Numero Verde anche solo per ricevere informazioni o per richiedere quali siano le risorse territoriali vicine al suo domicilio che possono offrire aiuto ed assistenza nell’ambito delle ludopatie. Non si tratta soltanto di strutture sanitarie specializzate, ma anche di centri specialistici i cui servizi sono proprio legati alla dipendenza dal gioco d’azzardo e non solo. Si potrebbe anche avere contatti con strutture che possono aiutare gli utenti a risolvere alcune problematiche sociali, economiche e legali che sono quasi sempre associabili alla ludopatia e ne possono essere una delle conseguenze negative.</p>
        //     </Fragment>

        // }
      ]
    },
    // cancellation and return
    disclaimer: {
      icon: 'Tag',
      title: 'Rischio',
      subtitle: 'Disclaimer RISCHIO',
      qandA: [
        {
          question: 'DISCLAIMERS DI RISCHIO',
          ans:
            <Fragment>
              <p>Questo sito include informazioni sulle criptovalute, contratti differenziali (CFDs) e altri strumenti finanziari, e sui brokers, le borse e altre entità che effettuano trading in questi strumenti. 
              </p>
              <p>Sia le criptovalute che i CFD sono strumenti complessi e presentano un elevato rischio di perdere il proprio capitale. Dovresti considerare attentamente se comprendi il funzionamento di questi strumenti e se puoi permetterti di sostenere il rischio elevato di perdere il tuo denaro. Forexcomparator ti incoraggia a effettuare le tue ricerche personali prima di effettuare qualsiasi decisione d'investimento, e di evitare di investire in qualsiasi strumento finanziario di cui tu non abbia una comprensione completa sul funzionamento e sui suoi rischi.</p>
            </Fragment>
        }
      ]
    }

  }
}
const Faq = () => {
  // ** States
  const [data, setData] = useState(null),
    [searchTerm, setSearchTerm] = useState('')



  useEffect(() => {
    setData(dataTemp.faqData)
  }, [])

  return (
    <Fragment >

      {data !== null ? <Faqs data={data} searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> : null}
      {/* <FaqContact /> */}
    </Fragment>
  )
}

export default Faq
