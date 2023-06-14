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
    <body>
        
        <main>
            <div class="col-12 gelwallpaper d-flex align-items-center">
              <div class="col-8 d-flex flex-column justify-content-center p-4">
              <h1 class="fadein visible">GEL PIASTRINICI</h1>
              <button><a class="nav-link @if(Request::route()->getName() == 'contact') active @endif active" href="{{ route('contact.index') }}" aria-current="page">CONTATTACI</a></button>
              </div>
           </div>
          <section>
           <!--PRIMA ILLUSTRAZIONE-->
           <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">PRGF</h1>
                <p>La tecnologia PRGF, basata sui gel piastrinici, è una delle soluzioni più all’avanguardia per la rigenerazione dei tessuti e viene applicata con successo in ambito odontoiatrico.</p>
              </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/pgrf1.jpg" alt="">
               </div>
               </div>
           </div>
           <!--SECONDA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration bg-light">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row  ">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/pgrf2.jpg" alt="">
               </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mt-5 mt-sm-5 mt-md-0 mt-lg-0 mt-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">RIGENERAZIONE ACCELERATA</h1>
                <p>In caso di lesioni, il nostro corpo provvede spontaneamente a rilasciare proteine che stimolano la guarigione. Partendo da un campione del tuo sangue, la tecnologia PRGF permette di isolare e di trattare il plasma contenente le proteine necessarie ad accelerare la rigenerazione dei tuoi tessuti.</p>
              </div>
             </div>
           </div>
           <!--TERZA ILLUSTRAZIONE-->
            <div data-aos="fade-up" data-aos-duration="1000"  class="col-12 illustration">
             <div class="col-10 offset-1 col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2 d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row">
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-center mb-5 mb-sm-5 mb-md-0 mb-lg-0 mb-xl-0 p-1 p-sm-1 p-md-5 p-lg-5 p-xl-5">
                <h1 class="h1blue">INNESTI OSSEI</h1>
                <p>Il materiale così ottenuto, ricavato proprio da te, viene applicato sulla zona interessata e riesce a stimolare e velocizzare la guarigione post-intervento, riducendo la tua sensazione di dolore e garantendo una miglior presa ad esempio in caso di impianto dentale.Contattaci per conoscere nel dettaglio i nostri trattamenti professionali con gel piastrinici.</p>
              </div>
               <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                 <img src="/pgrf3.jpg" alt="">
               </div>
               </div>
           </div>
          </section>
          <hr class="text-primary">
        </main>
       
    </body>
    </html>
</template>

<style>
.netflixtitle {
    color: #e15b68;
}
</style>
