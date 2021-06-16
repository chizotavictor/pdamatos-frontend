<template>
  <div class="mx-auto mt-0">
    <div class=" bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500 pt-24 md:pt-32 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Stand your chance to win <span class="text-yellow-500">BIG!</span></h1>
        <p class="leading-normal text-base font-bold md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">A game made for Kings!</p>
      
        <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
          <router-link tag="a" :to="{name: 'play_games'}" class="bg-green-300 mb-3 hover:bg-green-600 hover:text-white font-semibold py-2 px-4 border border-green-200 rounded shadow">
            <i class="fa fa-gamepad text-xl mr-1"></i> Play Online Now!!
          </router-link>
          <button class="bg-purple-700 ml-3 mb-3 hover:bg-purple-500 hover:text-white font-semibold py-2 px-4 border border-purple-600 text-white rounded shadow">
            <i class="fa fa-file-o mr-1"></i> Check Game Ticket
          </button>
        </div>
      </div>
      
      <!--Right Col-->
      <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
        <img class=" mx-auto lg:mr-0 slide-in-bottom" src="@/assets/bg.png">
      </div>
    </div>
    <div class="bg-gray-900 px-6 mx-auto text-center p-3">
      <h2 class="p-10 text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10 text-white">
          Available Games
      </h2>

      <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <!-- Column -->
        <div class="my-1 px-1 w-100 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg  bg-yellow-400 h-33">
                <a href="#">
                    <img alt="Damacia" class="block h-auto w-full" src="@/assets/damacia.jpg">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline font-bold text-orange-700 text-center" href="#">
                            DAMACIA
                        </a>
                    </h1>
                    
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full h-12" src="@/assets/play.png">
                        <p class="ml-2 text-sm text-green-900 font-semibold">
                            Play Now!
                        </p>
                    </a>
                    <a class="no-underline text-gray-900 font-semibold hover:text-red-dark" href="#">
                        <i class="fa fa-heart"></i>
                        <span class="ml-1">Read Guide</span>
                    </a>
                </footer>

            </article>
            <!-- END Article -->

        </div>
        <!-- END Column -->

        <!-- Column -->
        <div class="my-1 px-1 w-44 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg  bg-yellow-400 h-33">
                <a href="#">
                    <img alt="Magnum" class="block h-auto w-full" src="@/assets/magnum.png">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline font-bold text-orange-700 text-center" href="#">
                            MAGNUM
                        </a>
                    </h1>
                    
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full h-12" src="@/assets/play.png">
                        <p class="ml-2 text-sm text-green-900 font-semibold">
                            Play Now!
                        </p>
                    </a>
                    <a class="no-underline text-gray-900 font-semibold hover:text-red-dark" href="#">
                        <i class="fa fa-heart"></i>
                        <span class="ml-1">Read Guide</span>
                    </a>
                </footer>

            </article>
            <!-- END Article -->

        </div>
        <!-- END Column -->
        
        <!-- Column -->
        <div class="my-1 px-1 w-44 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg  bg-yellow-400 h-33">
                <a href="#">
                    <img alt="Toto" class="block h-auto w-full" src="@/assets/toto.png">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline font-bold text-orange-700 text-center" href="#">
                            TOTO
                        </a>
                    </h1>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full h-12" src="@/assets/play.png">
                        <p class="ml-2 text-sm text-green-900 font-semibold">
                            Play Now!
                        </p>
                    </a>
                    <a class="no-underline text-gray-900 font-semibold hover:text-red-dark" href="#">
                        <i class="fa fa-heart"></i>
                        <span class="ml-1">Read Guide</span>
                    </a>
                </footer>
            </article>
            <!-- END Article -->
        </div>
        <!-- END Column -->
        
        <!-- Column -->
        <div class="my-1 px-1 w-44 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg  bg-yellow-400 h-33">
                <a href="#">
                    <img alt="Singapore" class="block h-auto w-full" src="@/assets/singapore.jpg">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline font-bold text-orange-700 text-center" href="#">
                            SINGAPORE
                        </a>
                    </h1>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full h-12" src="@/assets/play.png">
                        <p class="ml-2 text-sm text-green-900 font-semibold">
                            Play Now!
                        </p>
                    </a>
                    <a class="no-underline text-gray-900 font-semibold hover:text-red-dark" href="#">
                        <i class="fa fa-heart"></i>
                        <span class="ml-1">Read Guide</span>
                    </a>
                </footer>
            </article>
            <!-- END Article -->
        </div>
        <!-- END Column -->

        <!-- Column -->
        <div class="my-1 px-1 w-44 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg  bg-yellow-400 h-33">
                <a href="#">
                    <img alt="Macau" class="block h-auto w-full" src="@/assets/macau.png">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline font-bold text-orange-700 text-center" href="#">
                            MACAU
                        </a>
                    </h1>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full h-12" src="@/assets/play.png">
                        <p class="ml-2 text-sm text-green-900 font-semibold">
                            Play Now!
                        </p>
                    </a>
                    <a class="no-underline text-gray-900 font-semibold hover:text-red-dark" href="#">
                        <i class="fa fa-heart"></i>
                        <span class="ml-1">Read Guide</span>
                    </a>
                </footer>
            </article>
            <!-- END Article -->
        </div>
        <!-- END Column -->

        <!-- Column -->
        <div class="my-1 px-1 w-44 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
            <!-- Article -->
            <article class="overflow-hidden rounded-lg shadow-lg  bg-yellow-400 h-33">
                <a href="#">
                    <img alt="Macau" class="block h-auto w-full" src="@/assets/pdamatos.png">
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline font-bold text-orange-700 text-center" href="#">
                            P-DAMATOS
                        </a>
                    </h1>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full h-12" src="@/assets/play.png">
                        <p class="ml-2 text-sm text-green-900 font-semibold">
                            Play Now!
                        </p>
                    </a>
                    <a class="no-underline text-gray-900 font-semibold hover:text-red-dark" href="#">
                        <i class="fa fa-heart"></i>
                        <span class="ml-1">Read Guide</span>
                    </a>
                </footer>
            </article>
            <!-- END Article -->
        </div>
        <!-- END Column -->
         
 
      </div>
    </div>
  </div>
</template>