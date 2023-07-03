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
            <div class="col-12 allonfourwallpaper d-flex align-items-center">
              <div class="col-8 d-flex flex-column justify-content-center p-4">
              <h1 class="text-white fadein visible">ALL ON FOUR</h1>
              <router-link class="text-dark" :to="{ name: 'Contact' }">
                              <button>CONTATTACI</button>
              </router-link>
              
              </div>
           </div>
           <section>
           <!--PRIMA ILLUSTRAZIONE-->
           <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">IMPIANTO ALL-ON-FOUR</h1>
                <p>In caso di pazienti completamente edentuli, possiamo valutare la soluzione dell’impianto all-on-four, una tecnica all’avanguardia in cui siamo specializzati e che adottiamo costantemente con risultati eccellenti. Il metodo all-on-four sfrutta gli impianti posteriori come supporto protesico dalla tenuta ottimale, anche se hai un volume osseo molto ridotto.</p>
              </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/allonfour1.jpg" alt="">
               </div>
               </div>
           </div>
           <!--SECONDA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/allonfour2.jpg" alt="">
               </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">IN POCHE ORE</h1>
                <p>La protesi dell’intera arcata poggia su quattro impianti, si tratta perciò di una soluzione minimamente invasiva che riduce il numero di sedute necessarie all’installazione e ci permette di restituirti il sorriso anche se sei del tutto privo di denti in poche ore, grazie all’uso combinato della chirurgia guidata.</p>
              </div>
             </div>
           </div>
           <!--TERZA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">MATERIALI BIOCOMPATIBILI</h1>
                <p>Nel nostro studio, inoltre, utilizziamo materiali biocompatibili che rilasciano ioni di calcio e favoriscono un processo di osteointegrazione e di guarigione più veloce.</p>
              </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/allonfour3.jpg" alt="">
               </div>
               </div>
           </div>
           <!--QUARTA ILLUSTRAZIONE-->
           <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/allonfour4.jpg" alt="">
               </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">ALL-ON-SIX</h1>
                <p>In casi particolari, è possibile eseguire un impianto all-on-six, poggiando cioè la protesi dell’arcata su sei impianti singoli anziché su quattro. Per sapere se questa metodologia fa al caso tuo, contattaci.</p>
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
.netflixtitle {
    color: #e15b68;
}


</style>
