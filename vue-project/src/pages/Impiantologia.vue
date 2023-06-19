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
        
        <main>
            <div class="col-12 impiantologiawallpaper d-flex align-items-center">
              <div class="col-8 d-flex flex-column justify-content-center p-4">
              <h1 class="text-white fadein visible">IMPLANTOLOGIA</h1>
              <router-link class="text-dark" :to="{ name: 'Contact' }">
                                  <button>CONTATTACI</button>
              </router-link>
              </div>
           </div>
       
        <section>
           <!--PRIMA ILLUSTRAZIONE-->
           <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src='/home1.jpg' alt="">
               </div> 
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">IMPIANTO DENTALE</h1>
                <p>Quando a un paziente mancano uno o più denti, gli impianti dentali sono spesso raccomandati per prevenire l'atrofia ossea e la migrazione dei denti. Un impianto dentale è una vite in titanio che il tuo dentista inserisce nell'osso mascellare per sostituire i denti mancanti. Questa soluzione ti consentirà di recuperare la piena funzionalità masticatoria.</p>
              </div>
            </div>
           
           </div>
           <!--SECONDA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">DENTE DEL GIUDIZIO</h1>
                <p>Se non c'è abbastanza spazio in bocca, i denti del giudizio possono essere parzialmente o completamente inclusi. Questo può causare diversi tipi di problemi. Il tuo dentista può scegliere di monitorare i tuoi denti del giudizio o raccomandare di rimuoverli.</p>
              </div>
              <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/dentedelgiudizio.jpg" alt="">
               </div>
             </div>
           </div>
           <!--TERZA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/osseo.jpg" alt="">
               </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">INNESTI OSSEI</h1>
                <p>L'innesto osseo viene utilizzato per aggiungere osso alle aree della mascella dove non ce n'è abbastanza. Questa procedura è raccomandata per i pazienti che non hanno una massa ossea sufficiente.</p>
              </div>
            </div>
           </div>
           <!--QUARTA ILLUSTRAZIONE-->
           <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
             <div data-aos="fade-up" data-aos-duration="1000" class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">RIALZI DEL SENO</h1>
                <p>Alcune persone non hanno abbastanza massa mascellare per supportare gli impianti dentali. Se questo è il caso, il dentista può consigliare un rialzo del seno mascellare.</p>
                <p>La procedura prevede il sollevamento del sinus e quindi l'innesto dell'osso sulla parte della mascella superiore dove l'osso si è assottigliato. Pochi mesi dopo l'innesto, sarai pronto per l'installazione di un impianto dentale.</p>
              </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/sinus.jpg" alt="">
               </div>
             </div>
           </div>
           <!--QUINTA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
             <div data-aos="fade-up" data-aos-duration="1000" class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/denterosso.jpg" alt="">
               </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">APICECTOMIA</h1>
                <p>Il trattamento del canale radicolare a volte fallisce e l'infezione che colpisce la radice del dente persiste. Se ciò accade, il tuo dentista può eseguire un'apicectomia per salvare il dente problematico, il cui apice e il tessuto infetto vengono rimossi e un sigillante viene utilizzato all'estremità della radice.</p>
              </div>
            </div>
           </div>
           <!--SESTA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
             <div data-aos="fade-up" data-aos-duration="1000" class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">BIOPSIA</h1>
                <p>Una biopsia è una procedura minore che comporta la rimozione di un campione di tessuto dalla bocca. Può essere utilizzata per scopi di screening o per diagnosticare alcune malattie. Il campione viene quindi inviato per l'analisi.</p>
              </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/biopsia.jpg" alt="">
               </div>
              </div>
           </div>
           <!--SETTIMA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
             <div data-aos="fade-up" data-aos-duration="1000" class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/chirurgiaesplorativa.jpg" alt="">
               </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">CHIRURGIA ESPLORATIVA</h1>
                <p>A volte è difficile sapere cosa sta causando un problema di salute orale, anche se si eseguono radiografie. La chirurgia esplorativa consente al tuo dentista di guardare sotto il bordo gengivale per fare una diagnosi accurata e suggerire il trattamento più adatto.</p>
              </div>
            </div>
           </div>

          </section>
          <hr class="text-primary">
          </main>
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
                  <li><a href="" class="mail"><span class="azzurro"><i class="fa-solid fa-envelope"></i></span>studiodentisticogardetto@gmail.com</a></li>
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
.droptitle{
    color: #b4d0e7;
}
</style>
