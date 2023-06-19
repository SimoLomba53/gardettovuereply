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
      

       <div class="col-12 aboutwallpaper d-flex align-items-center">
            <div class="col-8 d-flex flex-column justify-content-center p-4">
            <h1 class="text-white fadein visible">IL NOSTRO STUDIO</h1>
            </div>
         </div>
         <div class="col-12 intro">
            <div data-aos="fade-up" data-aos-duration="1000"  class="welcome col-8 offset-2 d-flex flex-column justify-content-center">
            <h1 class="text-center fadein visible">LA NOSTRA MISSIONE</h1>
            <h3 class="text-center">Fornire servizi di qualità, rapidamente. Perché ogni paziente è importante per noi.</h3>
            <p class="fadein visible">Il nostro Studio fornisce cure dentistiche di qualità per tutta la famiglia, è dotato di attrezzature all'avanguardia e di ultima generazione.</p>
            <p>Siamo orgogliosi di offrire un ambiente caldo e accogliente e di rendere ogni appuntamento il più piacevole possibile</p>
            </div>
         </div>
       
         <div class="aboutback col-12">
         <div class="imgcont col-10 offset-1 d-flex flex-row flex-wrap  gap-5  align-items-center justify-content-center">
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 d-flex align-items-center justify-content-center">
              <img  src="https://www.studio06.it/wp-content/uploads/2017/12/sanbenigno_dentist_01.jpg"  alt="">
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 d-flex align-items-center justify-content-center">
              <img src="https://www.studio06.it/wp-content/uploads/2017/12/sanbenigno_dentist_03.jpg"  alt="">
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 d-flex align-items-center justify-content-center">
              <img src="https://www.studio06.it/wp-content/uploads/2017/12/sanbenigno_dentist_04.jpg"  alt="">
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 d-flex align-items-center justify-content-center">
              <img src="https://www.studio06.it/wp-content/uploads/2017/12/sanbenigno_dentist_05.jpg"  alt="">
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 d-flex align-items-center justify-content-center">
              <img src="https://www.studio06.it/wp-content/uploads/2017/12/sanbenigno_dentist_06.jpg"  alt="">
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 d-flex align-items-center justify-content-center">
              <img src="https://www.studio06.it/wp-content/uploads/2017/12/sanbenigno_dentist_07.jpg"  alt="">
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 d-flex align-items-center justify-content-center">
              <img src="https://www.studio06.it/wp-content/uploads/2017/12/sanbenigno_dentist_08.jpg"  alt="">
            </div>
             <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 d-flex align-items-center justify-content-center">
              <img src="https://www.studio06.it/wp-content/uploads/2017/12/sanbenigno_dentist_09.jpg"  alt="">
            </div>
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-3 d-flex align-items-center justify-content-center">
              <img src="https://www.studio06.it/wp-content/uploads/2017/12/sanbenigno_dentist_11.jpg"  alt="">
            </div>
         </div>
         </div>
         
         <footer>
          <div>
            
          </div>
          <div class="footlist d-flex flex-row flex-wrap justify-content-center gap-5  mb-5 p-3">
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
              <li><a href=""><span class="azzurro"><i class="fa-solid fa-phone"></i></span>011 988 344</a></li>
                  <li><a href=""><span class="azzurro"><i class="fa-solid fa-envelope"></i></span>Mail</a></li>
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
  
</style>
