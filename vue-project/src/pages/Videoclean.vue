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
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Studio Gardetto</title>



        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap" rel="stylesheet">


        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />



    </head>

    <body>
        
        
        <main>
           <div data-aos="fade-up" data-aos-duration="1000" class="col-12 mt-5">
            <h2 class="text-center h1blue p-2 ff">IGIENE ORALE PROFESSIONALE INDOLORE</h2>
            <p class="text-center p-3 ff">Il Dott. Gabriele Zanellato ci spiega nel dettaglio come funziona il trattamento con la GBT (Guided Biofilm Therapy).</p>
            <video controls loop class="col-8 offset-2">
              <source src="videoclean.mp4"
                type="video/mp4">
              <source src="videoclean.mp4"
                type="video/ogg">
            </video>
          </div>
            


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
.ff{
    font-family: 'Fjalla One', sans-serif;
}

.parallax-container25 {
    position: relative;
    overflow: hidden;
    height: 100vh;
}

.parallax25 {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('/pexels-shiny-diamond-3762402.jpg');
    /* Inserisci il percorso dell'immagine di sfondo */
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;

}

.contenti25 {
    position: relative;
    z-index: 1;
    height: 100%;
    color: #ffffff;
    opacity: 1 !important;
}</style>
