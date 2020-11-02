<template>
    <div class="p-0">
        <div class="grid grid-cols-3 gap-4 m-0">
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
                        <article class="mr-2 overflow-hidden hover:shadow-outline selected:shadow-outline cursor-pointer rounded-md shadow-lg border border-yellow-600 bg-yellow-400">
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

                <div class="overflow-y-scroll w-full" style="height: 56vh;">
                    <div class="row" style="margin-top:20px;">
                        <label for="" class="block text-x mt-5 font-medium">Select Directs:</label>
                        <select name="" id="" class="w-full p-3 bg-gray-200 font-mono" >
                            <option value="">4D - (#100)</option>
                            <option value="">5D</option>
                            <option value="">6D</option>
                        </select>
                    </div>

                    <div class="row" style="margin-top:20px;">
                        <label for="" class="block text-x mt-5 font-medium">Game Time:</label>
                        <select name="" id="" class="w-full p-3 bg-gray-200 font-mono">
                            <option value="">10:00 AM</option>
                            <option value="">12:00 PM</option>
                            <option value="">2:00 PM</option>
                        </select>
                    </div>

                    <div class="row" style="margin-top:20px;">
                        <label for="" class="block text-x mt-5 font-medium">Select Points:</label>
                        <select name="" id="" class="w-full p-3 bg-gray-200 font-mono">
                            <option value="">Big Game (BG) - 600 points</option>
                            <option value="">Small Game (SG) - 400 points</option>
                        </select>
                    </div>

                    <div class="" style="margin-top:30px;">
                        <label for="" class=" text-x mt-5 font-medium">Enter Predictions:</label>
                        <input type="text" class="w-md rounded-md ml-10 m-1 p-3 bg-yellow-200 text-yellow-900 border-2 border-gray-700 font-medium text-center font-semibold font-mono" style="font-size:25px;"/>
                    </div>
                    <div class="row" style="margin-top:30px">
                        <button class="w-full text-center bg-green-500 mb-3 hover:bg-green-700 hover:text-white font-semibold py-2 px-4 border border-green-600 text-white rounded shadow"><i class="fa fa-file-o mr-1"></i> Place Game</button>
                    </div>
                </div>
            </div>
            <div class="col-span-1 bg-gray-100">
                <div class="p-5">
                    <div class="space-y-1 border border-white border-dotted">
                        <h2 class="text-center text-xl font-semibold font-mono"><span class="text-green-600">P-DAMATOS</span> TICKET</h2>
                    </div>
                    <div class="row overflow-y-scroll w-full" style="height: 70vh;">
                        <table class="table-auto w-full font-mono">
                            <thead>
                                <tr>
                                    <th class="border px-4 py-2 text-left" colspan="4">Choice</th>
                                    <th class="border px-4 py-2 text-left">Cost</th>
                                    <th class="border px-4 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border px-4 py-2" style="font-size:14px" colspan="4">
                                        <ul>
                                            <li><span class="font-semibold"> Game:</span> Da. 2pm</li>
                                            <li><span class="font-semibold"> Direct:</span> 4D</li>
                                            <li class="text-orange-700 font-bold"><span class="text-black font-semibold"> Prediction:</span> 5586</li>
                                        </ul>
                                    </td>
                                    <td class="border px-4 py-2" colspan="1">100.00</td>
                                    <td class="border px-4 py-2" colspan="1"><i class="text-red-500 text-center cursor-pointer fa fa-trash" label="Delete ticket record"></i></td>
                                </tr>
                                <tr>
                                    <td class="border px-4 py-2" style="font-size:14px" colspan="4">
                                        <ul>
                                            <li><span class="font-semibold"> Game:</span> Da. 2pm</li>
                                            <li><span class="font-semibold"> Direct:</span> 4D</li>
                                            <li><span class="font-semibold"> Prediction:</span> 5586</li>
                                            <li><span class="font-semibold"> Points:</span> IG (600p) </li>
                                        </ul>
                                    </td>
                                    <td class="border px-4 py-2" colspan="1">100.00</td>
                                    <td class="border px-4 py-2" colspan="1"><i class="text-red-500 text-center cursor-pointer fa fa-trash" label="Delete ticket record"></i></td>
                                </tr>

                                

                                <tr style="font-size:20px">
                                    <td class="border px-4 py-2" colspan="4" >
                                        <span>Stake:</span>
                                    </td>
                                    <td class="border px-4 py-2" colspan="3">
                                        #200.00
                                    </td>
                                </tr>
                                <tr style="font-size:20px">
                                    <td class="border px-4 py-2" colspan="4" >
                                        <span>Potential Winnings:</span>
                                    </td>
                                    <td class="border px-4 py-2" colspan="3">
                                        #106,200.00
                                    </td>
                                </tr>
                            </tbody>
                        </table>          
                    </div>
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