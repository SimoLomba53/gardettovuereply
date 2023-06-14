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
                      <img class="headerlogo" src="image00012.jpeg" alt="">
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
                              <a href="">IMPIANTOLOGIA</a>
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
                                <a href="">IMPIANTOLOGIA</a>
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
            <div class="col-12 gengivaliwallpaper d-flex align-items-center">
              <div class="col-8 d-flex flex-column justify-content-center p-4">
              <h1 class="text-white fadein visible">PARODONTOLOGIA</h1>
              <button><a class="nav-link @if(Request::route()->getName() == 'contact') active @endif active" href="{{ route('contact.index') }}" aria-current="page">CONTATTACI</a></button>
              </div>
           </div>
        
        <section>
           <!--PRIMA ILLUSTRAZIONE-->
           <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">CURETTAGE GENGIVALE</h1>
                <p>Il curettage, noto anche come levigatura radicolare, è una procedura che prevede la rimozione dell'accumulo di tartaro tra i denti e le gengive. Viene eseguito in anestesia locale. Potrebbe essere necessaria più di una sessione, a seconda della gravità della situazione.</p>
              </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/curatagegengivale.jpg" alt="">
               </div>
            </div>
           </div>
           <!--SECONDA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/innestogengivale.jpg" alt="">
               </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">INNESTI GENGIVALI</h1>
                <p>Gli innesti gengivali sono consigliati quando un paziente ha uno o più denti sciolti. La procedura viene utilizzata per aggiungere tessuto gengivale dove la copertura gengivale è insufficiente. Ciò impedisce un ulteriore allentamento.</p>
              </div>
             </div>
           </div>
           <!--TERZA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
             <div data-aos="fade-up" data-aos-duration="1000" class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">ALLUNGAMENTO DELLA CORONA</h1>
                <p>A volte un dentista desidera installare una corona su un dente, ma la struttura originale è così gravemente fratturata o cariata da non poter sostenere una corona. Quando questo è il caso, il dentista può raccomandare l'allungamento della corona. Ciò comporta il rimodellamento della gengiva e dell'osso attorno ai denti interessati fino a quando non viene rivelata una struttura dentale sufficiente.</p>
              </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/allungamentocorona.jpg" alt="">
               </div>
            </div>
           </div>
          </section>
          <hr class="text-primary">
          </main>
          <footer>
            <div>
              <img class src="/img/kisspng-logo-dentistry-brand-blue-5bfbd76a316cb5.4880882415432313382025.png" alt="" width="100px">
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
                <li><i class="fa-solid fa-location-dot "></i><span>Via Trento, 7</span></li>
                <li><span>San Benigno Canavese,TO</span></li>
                <li>10080</li>
                <li><a href=""><i class="fa-solid fa-phone"></i>011 988 344</a></li>
                <li><a href=""><i class="fa-solid fa-envelope"></i>Mail</a></li>
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
.reclametitle{
  color: #e7e5e2;
}
</style>
