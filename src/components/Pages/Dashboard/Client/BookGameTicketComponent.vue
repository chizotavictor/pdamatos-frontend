<template>
    <div>
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-3 bg-black" >
                <h2 class="p-3 text-white font-bold">Book Game Ticket</h2>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
            <div class="col-span-2 p-5">
                <div class="space-y-1">
                    <label id="listbox-label" class="block text-x leading-5 font-medium text-gray-700">
                        Select Game:
                    </label>
                    <div class="row flex">
                        <article class="mr-2 overflow-hidden hover:shadow-outline cursor-pointer rounded-md shadow-lg border border-yellow-600 bg-yellow-400">
                            <a href="#">
                                <img alt="Macau" class="block " src="@/assets/macau.png">
                            </a>
                        </article>

                        <article class="mr-2 overflow-hidden hover:shadow-outline cursor-pointer rounded-md shadow-lg border border-yellow-600 bg-yellow-400">
                            <a href="#">
                                <img alt="Macau" class="block " src="@/assets/macau.png">
                            </a>
                        </article>

                        <article class="mr-2 overflow-hidden hover:shadow-outline cursor-pointer rounded-md shadow-lg border border-yellow-600 bg-yellow-400">
                            <a href="#">
                                <img alt="Macau" class="block " src="@/assets/macau.png">
                            </a>
                        </article>

                        <article class="mr-2 overflow-hidden hover:shadow-outline rounded-md shadow-lg border border-yellow-600 bg-yellow-400">
                            <a href="#">
                                <img alt="Pdamatos" class="block " src="@/assets/damacia.jpg">
                            </a>
                        </article>

                        <article class="mr-2 overflow-hidden hover:shadow-outline rounded-md shadow-lg border border-yellow-600 bg-yellow-400">
                            <a href="#">
                                <img alt="Macau" class="block " src="@/assets/macau.png">
                            </a>
                        </article>

                        <article class="mr-2 overflow-hidden opacity-50 rounded-md shadow-lg border border-yellow-600 bg-yellow-400">
                            <a href="#">
                                <img alt="Macau" class="block cursor-not-allowed" src="@/assets/macau.png">
                            </a>
                        </article>
                    </div>
                </div>
            </div>
            <div class="col-span-1 bg-yellow-200 ">
                <div class="p-5">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    methods: {
        selectGame(e) {
            console.log(e)
        }
    }
}
</script>