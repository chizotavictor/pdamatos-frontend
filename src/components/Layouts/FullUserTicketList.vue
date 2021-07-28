<template>
    <div>
        <div class="space-y-1 border border-white border-dotted">
            <div class="row mb-3">
                <h2 class="text-center mt-2 font-bold">P-DAMATOS</h2>
                <h4 class="text-center font-semibold">{{getTickets.code}}</h4>
                <h5 v-if="getTickets.status == 'Paid'" class="text-center font-semibold text-green-700">({{getTickets.status}})</h5>
                <h5 v-else class="text-center font-semibold text-yellow-700">({{getTickets.status}})</h5>
            </div>
        </div>
        <div class="row overflow-y-scroll w-full" style="height: 70vh;">
            <table class="table-auto w-full font-mono">
                <thead>
                    <tr>
                        <th class="border px-4 py-2 text-left" colspan="4">Choice</th>
                        <th class="border px-4 py-2 text-left">Cost</th>
                        <th class="border px-4 py-2">Flag</th>
                        <th class="border px-4 py-2">Cashout?</th>
                        <th class="border px-4 py-2">Won?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i,k) in getTickets.ticketgame" :key="k">
                        <td class="border px-4 py-2" style="font-size:14px" colspan="4">
                            <ul>
                                <li><span class="font-semibold"> Game:</span> {{i.game.name}} ({{i.slot.time}})</li>
                                <li><span class="font-semibold"> Direct:</span> {{i.direct.digit}}D</li>
                                <li><span class="font-semibold"> Point:</span> {{i.ptoption.name}}</li>
                                <li><span class="font-semibold"> Against</span> {{i.against}}</li>
                                <li class="text-orange-700 font-bold"><span class="text-black font-semibold"> Prediction:</span> {{i.number}}</li>
                            </ul>
                        </td>
                        <td class="border px-4 py-2" colspan="1">{{money_format(i.cost)}}</td>
                        <td class="border px-4 py-2" colspan="1">*</td>
                        <td class="border px-4 py-2" colspan="1">{{ (i.paid_off) ? 'Yes' : 'No' }}</td>
                        <td class="border px-4 py-2" colspan="1">{{ (i.won > 0) ? 'Yes' : 'No' }}</td>
                    </tr>

                    <tr style="font-size:20px">
                        <td class="border px-4 py-2" colspan="4" >
                            <span>Stake:</span>
                        </td>
                        <td class="border px-4 py-2" colspan="3">
                            {{money_format(getTickets.cost) || money_format(0.00)}}
                        </td>
                    </tr>
                    <tr style="font-size:20px">
                        <td class="border px-4 py-2" colspan="4" >
                            <span>Potential Winnings:</span>
                        </td>
                        <td class="border px-4 py-2" colspan="3">
                            {{money_format(getTickets.potential_win) || money_format(0.00)}}
                        </td>
                    </tr>
                </tbody>
            </table>          
        </div>
    </div>
</template>
<script>
export default {
    name: 'full-user-ticket-list',
    props: {
        getTickets: {
            Type: Object,
            default: {}
        }
    },
    methods: {
        money_format(val = 0.00) {
            const formatter = new Intl.NumberFormat()
            return '₦ ' + formatter.format(val)
        },
    }
}
</script>