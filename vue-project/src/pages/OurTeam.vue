<script setup>
  import AOS from "aos";
  
  AOS.init();
  
     
</script>

<template>
   <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <title>Document</title>

     
    
        

          <link
           href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
           rel="stylesheet"
           integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
           crossorigin="anonymous"
         />

    

         <link rel="preconnect" href="https://fonts.googleapis.com">
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
         <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet">

         <link rel="preconnect" href="https://fonts.googleapis.com">
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
         <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">
         <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

         
    


     </head>
     <header>
               <div class="col-12 d-flex flex-row align-items-center justify-content-between p-4">
                   <div>
                      <router-link class="text-dark" :to="{ name: 'Homepage' }">
                       <img class="headerlogo" src="/image00012.jpeg" alt="">
                       </router-link>
                   </div>
                   <div>
                     <ul class="navbar flex-row gap-5 d-none d-sm-none d-md-none d-lg-flex d-xl-flex">
                       <li>
                         <router-link class="text-dark" :to="{ name: 'Info' }">
                           <a href="">ABOUT</a>
                         </router-link>
                       </li>
                       <li>
                         <router-link class="text-dark" :to="{ name: 'OurTeam' }">
                             <a href="">IL NOSTRO TEAM</a>
                         </router-link>
                       </li>
                       <li class="nav-item dropdown">
                        <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         SERVIZI
                        </a>
                        <ul class="dropdown-menu submenu text-center p-4">
                         <li>
                           <router-link class="text-dark" :to="{ name: 'Impiantologia' }">
                               <a href="">IMPLANTOLOGIA</a>
                           </router-link>
                         </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'TrattamentiGengivali' }">
                                 <a href="">TRATTAMENTI GENGIVALI</a>
                           </router-link>
                         </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'OdontoiatriaEstetica' }">
                                   <a href="">ODONTOIATRIA ESTETICA</a>
                           </router-link>
                         </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'Ortodonzia' }">
                                     <a href="">ORTODONZIA</a>
                           </router-link>
                         </li>
                         <!--<li><a class="nav-link @if(Request::route()->getName() == 'trattamenti-d-eccellenza') active @endif active" href="{{ route('trattamenti-d-eccellenza.index') }}" aria-current="page">TRATTAMENTI D'ECCELLENZA</a></li>-->
                         <li>
                           <router-link class="text-dark" :to="{ name: 'ChirurgiaGuidata' }">
                                       <a href="">CHIRURGIA GUIDATA</a>
                           </router-link>
                         </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'GelPiastrinici' }">
                                         <a href="">GEL PIASTRINICI</a>
                           </router-link>
                         </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'AllOnFour' }">
                                         <a href="">ALL ON FOUR</a>
                             </router-link>
                         </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'Ottica' }">
                                 <a href="">IMPRONTA OTTICA</a>
                           </router-link>
                         </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'Zigomatica' }">
                                       <a href="">IMPLANTOLOGIA ZIGOMATICA</a>
                           </router-link>
                         </li>
                        </ul>
                       </li>
                       <li>
                         <router-link class="text-dark" :to="{ name: 'Contact' }">
                             <a href="">CONTATTACI</a>
                         </router-link>
                       </li>
                     </ul>
                   </div>
                   <div class="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                   <li class="nav-item dropdown smallnavmenu">
                        <a class="nav-link " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         <i class="fa-solid fa-bars"></i>
                        </a>
                        <ul class="dropdown-menu submenu text-center">
                         <li>
                          <router-link class="text-dark" :to="{ name: 'Info' }">
                             <a href="">ABOUT</a>
                           </router-link>
                         </li>
                         <li>
                         <router-link class="text-dark" :to="{ name: 'OurTeam' }">
                               <a href="">IL NOSTRO TEAM</a>
                           </router-link>
                         </li>
                         <li>
                          <router-link class="text-dark" :to="{ name: 'Contact' }">
                               <a href="">CONTATTACI</a>
                           </router-link>
                         </li>
                         <hr>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'Impiantologia' }">
                                 <a href="">IMPLANTOLOGIA</a>
                             </router-link>
                         </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'TrattamentiGengivali' }">
                                   <a href="">TRATTAMENTI GENGIVALI</a>
                             </router-link>
                         </li>
                       <li>
                         <router-link class="text-dark" :to="{ name: 'OdontoiatriaEstetica' }">
                                   <a href="">ODONTOIATRIA ESTETICA</a>
                      </router-link>
                    </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'Ortodonzia' }">
                                       <a href="">ORTODONZIA</a>
                             </router-link>
                         </li>
                         <!--<li>
                           <a class="nav-link @if(Request::route()->getName() == 'trattamenti-d-eccellenza') active @endif active" href="{{ route('trattamenti-d-eccellenza.index') }}" aria-current="page">TRATTAMENTI D'ECCELLENZA</a>
                         </li>-->
                         <li>
                           <router-link class="text-dark" :to="{ name: 'ChirurgiaGuidata' }">
                                         <a href="">CHIRURGIA GUIDATA</a>
                             </router-link>
                         </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'GelPiastrinici' }">
                                           <a href="">GEL PIASTRINICI</a>
                             </router-link>
                         </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'AllOnFour' }">
                                             <a href="">ALL ON FOUR</a>
                           </router-link>
                         </li>
                         <li>
                             <router-link class="text-dark" :to="{ name: 'Zigomatica' }">
                                       <a href="">IMPLANTOLOGIA ZIGOMATICA</a>
                             </router-link>
                           </li>
                         <li>
                           <router-link class="text-dark" :to="{ name: 'Ottica' }">
                                   <a href="">IMPRONTA OTTICA</a>
                           </router-link>
                         </li>
                    
                         </ul>
                       </li>
                   </div>
    
               </div>
           </header>
     <body>
         

          <div class="col-12 teamwallpaper d-flex align-items-center">
               <div class="col-6 d-flex flex-column justify-content-center p-4">
               <h1 class="text-white fadein visible">IL TEAM DELLO STUDIO DENTISTICO GARDETTO SRL</h1>
               </div>
          </div>
       
         <section>
            <!--PRIMA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
              <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                 <h1 class="h1blue">Dott. Fulvio Gardetto
                 </h1>
                 <p>Fondatore dello Studio, svolge la supervisione clinica e Direzione Sanitaria. Si occupoa prevalentemente di Chirurgia, Protesi ed Implanto-protesi.</p>
                 <div class="center5">
                     <input type="checkbox" id="click5">
                     <label for="click5" class="click-me">SCOPRI DI PIU</label>
                     <div class="content5">
                       <div class="header5 d-flex align-items-center justify-content-between p-3">
                         <h2><i><img src="/info.png" alt="" style="width: 35px;"></i></h2>
                         <label for="click5"><img src="/x.png" alt="" style="width: 35px;"></label>
                       </div>
                       <h1 class="text-center p-2">Dott. Fulvio Gardetto</h1>
                       <p class="text-center p-2">Laureato con Lode e Dignità di Stampa in Odontoiatra e Protesi Dentaria presso l’Università degli Studi di Torino nel 2003, e nel medesimo Ateneo ottiene Diploma di Perfezionamento in Ch. Orale nel 2005. Si Specializza in Ch. Odontostomatologica, con Lode e Dignità di Stampa nel 2010 all’Università degli Studi di Torino, presso A.O.U. San Luigi Gonzaga dove ha rivestito ruolo di Tutor e Professore A.C. nella medesima Scuola di Specialità.
  Dal 2003 al 2007 frequentatore presso reparto S.C.D.U Chirurgia Maxillo Facciale di Torino e dal 2007 al 2012 frequentatore e specialista ambulatoriale presso la Struttura Complessa di Chirurgia e Odontostomatologia ASL To1, ospedale Martini.
  Docente nel 2012-2013 presso l’Università degli Studi di Torino al “Corso di Perfezionamento in Implantologia Biologicamente Guidata".
  Post Graduate in Chirurgia Parodontale e Perimplantare presso Università Vita-Salute San Raffaele di Milano.
  Master Universitario II livello presso Università degli Studi di Pisa in Implantologia Zigomatica.
  Vincitore del Primo Premio Internazionale “Young Prosthodontist Award” ICP (International College of Prosthodontists), ad Halifax (Nova Scotia) nel 2003.
  Relatore in congressi nazionali, svolge attività come libero professionista con particolare interesse nell’ambito dell’Implantologia, Chirurgia Odontostomatologica ed Orale.
  Direttore sanitario e supervisore dello Studio omonimo.</p>
                     </div>
                   </div>
               </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <img src="/gardettofulvio.jpg" alt="">
                </div>
                </div>
            </div>
            <!--SECONDA ILLUSTRAZIONE-->
             <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
              <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <img src="/Drmocciaedoardo.jpg" alt="">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                 <h1 class="h1blue">Dott. Edoardo Moccia</h1>
                 <p>Nel nostro Studio si occupa principalmente di Conservativa, Endodonzia e Protesi fissa.</p>
                <div class="center4">
                     <input type="checkbox" id="click4">
                     <label for="click4" class="click-me4">SCOPRI DI PIU</label>
                     <div class="content4">
                       <div class="header4 d-flex align-items-center justify-content-between p-3">
                         <h2><i><img src="/info.png" alt="" style="width: 35px;"></i></h2>
                         <label for="click4"><img src="/x.png" alt="" style="width: 35px;"></label>
                       </div>
                       <h1 class="text-center p-2">Dott. Edoardo Moccia</h1>
                       <p class="text-center p-2">Iscritto all’ordine dei Medici, Chirurghi e Odontoiatri di Torino, n. 3478</p>

  <p class="text-center p-2">Ha conseguito la laurea magistrale in Odontoiatria e Protesi Dentaria con il massimo dei voti (110/110), Lode e dignità di stampa presso l’Università degli Studi di Torino, con una tesi di ricerca in endodonzia dal titolo: “Valutazione della qualità del sigillo canalare mediante micro-CT: cono singolo con bioceramiche vs onda continua di condensazione” con relatore il Prof. Elio Berutti.
  Ha vinto il “Premio Francesco Riitano” in occasione del congresso nazionale della Società Italiana di Endodonzia (SIE) di Bologna nel 2019.
  È autore e co-autore di numerose pubblicazioni e poster su riviste scientifiche e, in qualità di relatore, partecipa a congressi nazionali ed internazionali.
  Attualmente frequenta l’ultimo anno del dottorato in Bioingegneria e Scienze Medico-chirurgiche presso l’università degli Studi di Torino.
  Nel nostro studio si occupa principalmente di conservativa, endodonzia e protesi fissa.</p>
                     </div>
                   </div>
               </div>
              </div>
            </div>
            <!--TERZA ILLUSTRAZIONE-->
             <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
              <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                 <h1 class="h1blue">Dott. Gabriele Zanellato</h1>
                 <p>Si occupa di Igiene Orale e Prevenzione delle patologie orali.</p>
                 <div class="center3">
                     <input type="checkbox" id="click3">
                     <label for="click3" class="click-me3">SCOPRI DI PIU</label>
                     <div class="content3">
                       <div class="header3 d-flex align-items-center justify-content-between p-3">
                         <h2><i><img src="/info.png" alt="" style="width: 35px;"></i></h2>
                         <label for="click3"><img src="/x.png" alt="" style="width: 35px;"></label>
                       </div>
                       <h1 class="text-center p-2">Dott. Gabriele Zanellato</h1>
                       <p class="text-center p-2">Si occupa con grande passione di igiene orale e prevenzione delle patologie orali e collabora con lo Studio Dentistico Gardetto dal 2017. Ha frequentato corsi sulla Terapia parodontale non chirurgica e sulla prevenzione della patologia cariosa, arricchendo la sua professione di nuove conoscenze e protocolli. La sua mission, fin dall’inizio, è quella di lavorare a fianco dei pazienti occupandosi della loro salute orale con le più avanzate tecnologie e con protocolli all’avanguardia. Ottime doti gestionali ed organizzative, elevata flessibilità e capacità di adattamento particolare propensione al lavoro di gruppo e alla collaborazione con le diverse figure professionali. Buona padronanza della macchina fotografica e del suo utilizzo per foto intra-orali extra-orali. Padronanza di utilizzo delle apparecchiature per la sedazione cosciente del paziente mediante il protossido d’azoto ed apparecchiature laser. Utilizzo di sistemi di ingrandimento ottici x3.8.</p>
                     </div>
                   </div>
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <img src="/zanellatodef.jpg" alt="">
                </div>
                </div>
            </div>
            <!--QUARTA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
              <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <img src="/robycv.jpg" alt="">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                 <h1 class="h1blue">Dr.ssa Roberta Giovannini</h1>
                 <p>Nella sua pratica clinica si occupa prevalentemente di Odontoiatria Restaurativa estetica, Endodonzia, Pedodonzia e Protesi.</p>
                 <div class="center">
                   <input type="checkbox" id="click">
                   <label for="click" class="click-me">SCOPRI DI PIU</label>
                   <div class="content">
                     <div class="header d-flex align-items-center justify-content-between p-3">
                       <h2><i><img src="/info.png" alt="" style="width: 35px;"></i></h2>
                       <label for="click"><img src="/x.png" alt="" style="width: 35px;"></label>
                     </div>
                     <h1 class="text-center p-2">Dr.ssa Roberta Giovannini</h1>
                     <p class="text-center p-2">Laureata nel 2011 in Odontoiatria e Protesi Dentaria presso l’Università degli studi di Torino con la tesi “Clinical prospective study on the post-operative sensitivity in patients with deep carious lesions: Total-etch vs Self-etch adhesives systems.” con punteggio 108/110 e dignità di stampa. Dal 2011 al 2018 frequentatore e tutor presso il reparto di Endodonzia e Conservativa diretto dal Prof. Elio Berutti dove ha collaborato a diversi lavori di ricerca con particolare interesse nella longevità dei restauri conservativi, degradazione delle resine composite e nei vari approcci di rimozione della carie. Dal 2016 al 2018 ha conseguito il Master universitario di II livello in Protesi ed Implantoprotesi con tecnologie avanzate presso l’Università di Bologna. In continuo aggiornamento, partecipa regolarmente a congressi e corsi teorico-pratici. Nella sua pratica clinica si occupa prevalentemente di Odontoiatria Restaurativa estetica, Endodonzia, Pedodonzia e Protesi.</p>
                   </div>
                 </div>
               </div>
              </div>
            </div>
            <!--QUINTA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
              <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                 <h1 class="h1blue">Dr.ssa Maria Teresa Gallo</h1>
                 <p>Nel nostro Studio si occupa di Ortodonzia e Gnatologia.</p>
                 <div class="center1">
                   <input type="checkbox" id="click1">
                   <label for="click1" class="click-me1">SCOPRI DI PIU</label>
                   <div class="content1">
                     <div class="header1 d-flex align-items-center justify-content-between p-3">
                       <h2><i><img src="/info.png" alt="" style="width: 35px;"></i></h2>
                       <label for="click1" ><img src="/x.png" alt="" style="width: 35px;"></label>
                     </div>
                     <h1 class="text-center p-2">Dr.ssa Maria Teresa Gallo</h1>
                     <p class="text-center p-2">Si laurea in Medicina e Chirurgia a Torino ed è specializzata in Ortodonzia. Nello studio di famiglia e in diversi ambulatori odontoiatrici di Torino e provincia si occupa unicamente di trattamenti ortodontici sia per i bambini che adulti. Padroneggia ogni genere di trattamento ortodontico, fisso e removibile.</p>
                     <p class="text-center">Certificata Invisalign@.</p> 
                   </div>
                 </div>
               </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <img src="/mariateresagallo.jpeg" alt="">
                </div>
                </div>
            </div>
            <!--SESTA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
              <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <img src="/rubenpiccionne.jpg" alt="">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                 <h1 class="h1blue">Dott. Rubens Piccionne</h1>
                 <p>Nel nostro Studio si occupa prevalentemente di Endodonzia e Restaurativa.</p>
                 <div class="center2">
                     <input type="checkbox" id="click2">
                     <label for="click2" class="click-me2">SCOPRI DI PIU</label>
                     <div class="content2">
                       <div class="header2 d-flex align-items-center justify-content-between p-3">
                         <h2><i><img src="/info.png" alt="" style="width: 35px;"></i></h2>
                         <label for="click2"><img src="/x.png" alt="" style="width: 35px;"></label>
                       </div>
                       <h1 class="text-center p-2">Dott. Rubens Piccionne</h1>
                       <p class="text-center p-2">Nel 2005 si laurea nel Corso di Laurea in Odontoiatria e Protesi Dentaria presso l’Università degli Studi di Torino, abilitazione conseguita nello stesso mese con iscrizione all’Albo dei Medici e Odontoiatri della provincia di Torino n° 2518. Negli anni 2006-2007 frequenta il reparto di Odontostomatologia dell’Ospedale Martini di Torino (ASL 2). Nel 2009 consegue un Master di II livello in Endodonzia, Restaurativa e Protesi fissa della durata di 2 anni presso l’Università di Siena (prof. Grandini) e negli anni successivi prosegue l’attività libero professionale specializzandosi con particolare attenzione nell’endodonzia e nei ritrattamenti endodontici. Alla pratica clinica nel settore affianca l’aggiornamento professionale teorico pratico, presso lo studio del prof. Giovanni Anglesio Farina. In costante aggiornamento approfondisce tematiche gnatologiche con Lorenzo Vanini, di protesi fissa e restaurativa con Loris Prosper, Giorgio Tessore, Fabio Galli, Stefano Lombardo. Nello Studio si occupa prevalentemente di Endodonzia e Restaurativa.</p>
                       
                     </div>
                   </div>
               </div>
              </div>
            </div>
            <!--SETTIMA ILLUSTRAZIONE-->
             <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
              <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                 <h1 class="h1blue">Luban Francesca</h1>
                 <p> Amministratore delegato e socia co-fondatrice dello Studio dentistico Gardetto Srl, si occupa della gestione amministrativa e finanziaria.</p>
                  
               </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <img src="/LubanFrancesca.jpg" alt="">
                </div>
               </div>
            </div>
            <!--OTTAVA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
              <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <img src="/staff.jpg" alt="">
                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                 <h1 class="h1blue">Anca, Joana, Giorgia e Giulia</h1>
                 <p>Assistenti di Studio Odontoiatrico, pronte ad assistere i nostri pazienti con la massima professionalità.</p>
             
            
            




               </div>
              </div>
            </div>
           </section>
            <hr class="finalhr">
            <footer>
             <div>
               
             </div>
             <div class="footlist d-flex flex-row flex-wrap justify-content-center gap-5  mb-5">
               <div>
               <ul class="text-center">
                 <h4>LA CLINICA</h4>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'Info' }">
                             <a href="">About</a>
                   </router-link></li>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'OurTeam' }">
                               <a href="">Il nostro team</a>
                    </router-link>
                 </li>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'Contact' }">
                               <a href="">Contattaci</a>
                     </router-link>
                 </li>
               </ul>
               </div>
                <div>
               <ul class="text-center">
                 <h4>SERVIZI</h4>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'Impiantologia' }">
                                 <a href="">Implantologia</a>
                   </router-link>
                 </li>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'TrattamentiGengivali' }">
                                   <a href="">Trattamenti gengivali</a>
                   </router-link>
                 </li>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'OdontoiatriaEstetica' }">
                                     <a href="">Odontoiatria estetica</a>
                   </router-link>
                 </li>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'Ortodonzia' }">
                           <a href="">Ortodonzia</a>
                   </router-link>
                 </li>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'ChirurgiaGuidata' }">
                                         <a href="">Chirurgia guidata</a>
                             </router-link>
                 </li>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'GelPiastrinici' }">
                                             <a href="">Gel piastrinici</a>
                   </router-link>
                 </li>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'AllOnFour' }">
                                           <a href="">All on four</a>
                   </router-link>
                 </li>
                 <li>
                    <router-link class="text-dark" :to="{ name: 'Ottica' }">
                                         <a href="">Impronta ottica</a>
                     </router-link></li>
                 <li>
                   <router-link class="text-dark" :to="{ name: 'Zigomatica' }">
                                       <a href="">Implantologia zigomatica</a>
                   </router-link>
                 </li>
               </ul>
               </div>
                <div>
               <ul class="text-center">
                 <h4>CONTATTACI</h4>
                 <li><span class="azzurro"><i class="fa-solid fa-location-dot "></i></span><span>Via Trento, 7</span></li>
                 <li><span>San Benigno Canavese,TO</span></li>
                 <li>10080</li>
                 <li><a href=""><span class="azzurro"><i class="fa-solid fa-phone"></i></span>011 988 3444</a></li>
                  <li><a href="" class="mail" ><span class="azzurro"><i class="fa-solid fa-envelope"></i></span>studiodentisticogardetto@gmail.com</a></li>
                 <li><a href="">Social Network</a></li>
               </ul>
               </div>
             </div>
             <p class="text-center copyright">© 2023 Dr. Fulvio Gardetto Clinica Odontodiatrica </p>
           </footer>





         
     </body>
     </html>
   
</template>

<style>

.routerlink{
     opacity: 1;
     transition: 0.8s;
}

.routerlink:hover{
     opacity: 0.6;
     
}

.projectbody{
     background-color: #fcfbfd;
}

.firstext{
     margin-right: 240px;
}

.greyspan{
     color:rgb(100 100 100);
}

.textprojcont{
     padding-top: 150px;
     font-size: 80px;
}

.firstproj{
     background-image:url(/dropbox.png);
     background-size:cover;
     background-repeat: no-repeat;
     height: 400px;
     
}

.secondproj{
     background-image:url(/boolifyPC.png);
     background-size: cover;
     height: 400px;
}

.thirdproj{
     background-image:url(/reclameit.png);
     background-size:cover;
     height: 400px;
     width: 41vw;
     
}

.fourthdproj{
    background-image:url(/playstation.png);
     background-size: cover;
     height: 400px;
     width: 41vw;
}

.fifthproj{
     background-image:url(/boolbnb.png);
     background-size:cover;
     height: 400px;
     width: 41vw;
     
}

.sixthproj{
    background-image:url(/boolfix1.png);
     background-size: cover;
     height: 400px;
     width: 41vw;
     
}

.pj{
   opacity:1;
   transition: 0.8s;
   margin-bottom: 0.5rem;
   
   
   
}

.pj:hover{
   opacity: 0.6;
   
}




.projectbutton{
  text-decoration: none;
  color: #000000;
  font-size: 24px;
  border: 2px solid #050505;
  padding: 14px 70px;
  border-radius: 50px;
  margin-top: 20px;
  transition: 0.6s;
  position: relative;
  top: 150px;
  opacity: 10;
  z-index: 1;
  opacity: 0;
  width: 400px;
  

  
}

.projectbutton:hover {
  background-color: #fcfbfd;
  color: rgb(0, 0, 0);
  opacity: 1;
  transform: scale(1.2);
}

@media only screen and (max-width: 992px) {
  .thirdproj{
     
     width: 100%;
     
}

.fourthdproj{
    
     width: 100%;
}

.fifthproj{
     
     width: 100%;
     
}

.sixthproj{
    
     width: 100%;
     
}


}






</style>
