<script>
import AOS from "aos";
AOS.init();

export default {
  data() {
    return {
      parallaxStyle: '',
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      this.parallaxStyle = `background-position: center ${scrollTop * 0.3}px;`;
    },
  },


};

</script>

<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>



    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />
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
               <router-link class="text-dark" :to="{ name: 'Prodotti' }">
                          <a href="">PRODOTTI</a>
               </router-link>
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
                  <router-link class="text-dark" :to="{ name: 'Prodotti' }">
                    <a href="">PRODOTTI</a>
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

    <div class="parallax-container20">
      <div class="parallax20" :style="parallaxStyle"></div>
      <div class="contenti20 col-12">
        <div class="col-12 contactwallpaper d-flex align-items-center">
          <div class="col-8 d-flex flex-column justify-content-center p-4">
            <h1 class="text-white fadein visible" style="z-index: 100;">CONTATTACI</h1>
          </div>
        </div>
      </div>
    </div>
    <div data-aos="fade-up" data-aos-duration="1000" class="datecontact d-flex flex-column p-5 justify-content-center">
      <div class="contactcontent">
        <h1>STUDIO DENTISTICO GARDETTO SRL</h1>
        <p><span class="azzurro"><i class="fa-solid fa-location-dot "></i></span>Via Trento, 7, 10080 San Benigno Canavese
          TO</p>
        <p><span class="azzurro"><i class="fa-solid fa-phone"></i></span>011 988 3444</p>
        <p><span class="azzurro"><i class="fa-solid fa-envelope"></i></span>studiodentisticogardetto@gmail.com</p>

        <p class="direttsanit">PI: 12318790016</p>
        <p class="direttsanit">Numero REA: TO-1280907</p>

        <p class="direttsanit">Direttore sanitario : </p>
        <p class="direttsanit">Dr Fulvio Gardetto iscrizione Ordine Medici Chirurghi e Odontoiatri di Torino n: 2365</p>

        <p class="direttsanit"> Autorizzazione Sanitaria N. 1/2021 Prot. N. 1183 del 01/02/2021</p>
      </div>
    </div>
    <div class="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2810.1495926021666!2d7.7799104755347805!3d45.22454154939835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47887b0054be125f%3A0xee58248a1b9fbdfd!2sVia%20Trento%2C%207%2C%2010080%20San%20Benigno%20Canavese%20TO!5e0!3m2!1sit!2sit!4v1682493842843!5m2!1sit!2sit"
        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <hr class="text-primary">
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
              </router-link>
            </li>
            <li>
              <router-link class="text-dark" :to="{ name: 'OurTeam' }">
                <a href="">Il nostro team</a>
              </router-link>
            </li>
            <li>
                          <router-link class="text-dark" :to="{ name: 'Prodotti' }">
                              <a href="">Prodotti</a>
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
              </router-link>
            </li>
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
            <li><a href="" class="mail"><span class="azzurro"><i
                    class="fa-solid fa-envelope"></i></span>studiodentisticogardetto@gmail.com</a></li>
            <li><a href="https://www.facebook.com/p/Studio-Dentistico-Fulvio-Gardetto-100063832021571/">Social Network</a>
            </li>
          </ul>
        </div>
      </div>
      <p class="text-center copyright">© 2023 Dr. Fulvio Gardetto Clinica Odontodiatrica </p>
    </footer>






  </body>

  </html>
</template>

<style>
.parallax-container20 {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.parallax20 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('https://images.pexels.com/photos/4831/hands-coffee-smartphone-technology.jpg?auto=compress&cs=tinysrgb&w=1600');
  /* Inserisci il percorso dell'immagine di sfondo */
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;

}

.contenti20 {
  position: relative;
  z-index: 1;
  height: 100%;
  color: #ffffff;
  opacity: 1 !important;
}</style>
