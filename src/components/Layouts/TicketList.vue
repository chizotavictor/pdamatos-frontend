<template>
    <div>
        <div class="space-y-1 border border-white border-dotted">
            <div class="row mb-3">
                <h2 class="text-center mt-2 font-bold">P-DAMATOS </h2>
                <h4 class="text-center font-semibold">{{getTickets.code}}</h4>
            </div>
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
                        <td class="border px-4 py-2" colspan="1">
                            {{money_format(i.cost)}}<br>
                            <div class="mt-2">
                                ₦ <input type="number" @keypress="updateStake($event, i.id)" style="color:blue;width:100px" :value="i.cost">
                            </div>
                        </td>
                        <td class="border px-4 py-2" colspan="1"><a href="#" @click="deleteGameRecord(i.ticket_code, i.id)"> <i class="text-red-500 text-center cursor-pointer fa fa-trash" label="Delete ticket record"></i></a></td>
                    </tr>

                    <tr style="font-size:20px">
                        <td class="border px-4 py-2" colspan="4" >
                            <span>Stake:</span>
                        </td>
                        <td class="border px-4 py-2" colspan="3">
                            <span id="stake" class="text-green-900 text-bold">{{money_format(getTickets.cost) || money_format(0.00)}}</span>
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
import Call from '../../general-service'
import { mapGetters, mapMutations } from 'vuex'
import { createToast } from 'mosha-vue-toastify';
export default {
    name: 'ticket-list',
    props: {
        getTickets: {
            Type: Object,
            default: {}
        }
    },
    data: () => ({
        stake: 0,
        gt_id: 0
    }),
    methods: {
        ...mapMutations(['setTickets', 'setGlobalLoadingStatus']),
        ...mapGetters(['getTickets']),
        money_format(val = 0.00) {
            const formatter = new Intl.NumberFormat()
            return '₦ ' + formatter.format(val)
        },
        reloadGameTicket(code) {
            this.setGlobalLoadingStatus(true)
            Call.getGameTicket(code)
                .then((data) => {
                    this.setGlobalLoadingStatus(false)
                    const rtick = data.data.ticket
                    this.setTickets(rtick)
                })
            this.setGlobalLoadingStatus(false)
        },
        deleteGameRecord(code, ticket_game_id) {
            this.setGlobalLoadingStatus(true)
            Call.DeleteGameTicketItem(code, ticket_game_id)
                .then(() => {
                    this.setGlobalLoadingStatus(false)
                    this.reloadGameTicket(code)
                })
                .catch(() => this.setGlobalLoadingStatus(false))
        },
        updateStake(e, gt_id) {
            console.log(e.keyCode)
            if (e.keyCode === 13) {
                if(this.getTickets.id) {
                    console.log(gt_id)
                    this.setGlobalLoadingStatus(true)
                    Call.updateGameTicketStake({
                        game_ticket_id: gt_id,
                        stake: e.target.value
                    })
                        .then((d) => {
                            this.setGlobalLoadingStatus(false)
                            // document.getElementById('stake').innerHTML = e.target.value
                            console.log(d)
                            createToast(d.data.message)
                            this.reloadGameTicket(this.getTickets.code)
                        })
                        .catch(() => this.setGlobalLoadingStatus(false))
                }
                    
            }
        }
    }
}
</script>