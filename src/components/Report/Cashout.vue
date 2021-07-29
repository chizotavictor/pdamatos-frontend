<template>
  <div>
    <div class="p-0">
      <Loader :is-visible="isLoading"></Loader>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-4 p-2 mt-3">
        <div class="inline-block relative w-full md:w-3/5 pr-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Ticket code
          </label>
          <input
            v-model="ticket_code"
            class="block appearance-none w-full bg-white  border border-gray-400 hover:border-gray-500 py-3 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          class="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded h-10"
          style="margin-top:25px"
          @click="checker()"
        >
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-4 p-2 mt-3">
        <div
          class="row overflow-y-scroll w-full"
          style="padding:0px;margin:0px;"
        >

          <table class="table-auto w-full" style="margin-top: 20px;">
            <tbody>
              <tr>
                <td
                  class="border px-4 py-2 text-gray-900 font-medium"
                  colspan="3"
                  style="font-size:17px"
                >
                  Tickets
                </td>
                <td
                  class="border px-4 py-2 text-gray-900 font-medium"
                  colspan="3"
                  style="font-size:17px"
                >
                  Stake
                </td>
                <td
                  class="border px-4 py-2 text-gray-900 font-medium"
                  colspan="3"
                  style="font-size:17px"
                >
                  Position
                </td>
                <td
                  class="border px-4 py-2 text-gray-900 font-medium"
                  colspan="3"
                  style="font-size:17px"
                >
                  Is Result Ready?.
                </td>
                <td
                  class="border px-4 py-2 text-gray-900 font-medium"
                  colspan="3"
                  style="font-size:17px"
                >
                  Order cashout
                </td>
              </tr>
              <tr v-for="(i, k) in result" :key="k">
                <td
                  class="border px-4 py-2 text-red-800 font-medium"
                  colspan="3"
                  style="font-size:17px"
                >
                  {{i.ticket.ticket_code}} // {{i.ticket.number}}
                </td>
                <td
                  class="border px-4 py-2 font-bold"
                  colspan="3"
                  style="font-size:25px"
                >
                  ₦ {{new Intl.NumberFormat().format(i.ticket.cost) }}
                </td>
                <td
                  class="border px-4 py-2 font-bold"
                  colspan="2"
                  style="font-size:25px"
                >
                  {{i.position}}
                </td>
                <td
                  class="border px-4 py-2 font-bold"
                  colspan="3"
                  style="font-size:25px"
                >
                  {{i.is_result_ready }}
                </td>
                <td
                  class="border px-4 py-2 text-green-800 font-bold"
                  colspan="8"
                  style="font-size:17px"
                >
                  <span>{{(i.ticket.paid_off)? "Yes": "No"}}</span>
                  
                  <small class="text-yellow-700">
                    <a href="#" @click="processCashout(i.ticket.id, i.ticket.ticket_code)"><i class="fas fa-coins"></i> Process Cashout</a>
                  </small>
                </td>
              </tr>
              <tr>
                <td
                  class="border px-4 py-2 text-red-600 font-medium"
                  colspan="3"
                  style="font-size:17px"
                >
                  Stack
                </td>
                <td
                  class="border px-4 py-2 text-red-600 font-bold"
                  colspan="8"
                  style="font-size:17px"
                >
                  ₦ {{new Intl.NumberFormat().format(stake)}}
                </td>
              </tr>
              <tr>
                <td
                  class="border px-4 py-2 font-medium"
                  colspan="3"
                  style="font-size:17px"
                >
                  Cash Out
                </td>
                <td
                  class="border px-4 py-2  font-bold"
                  colspan="8"
                  style="font-size:17px"
                >
                  ₦ {{new Intl.NumberFormat().format(cashout)}}
                </td>
              </tr>
              <tr>
                <td
                  class="border px-4 py-2 text-green-800 font-medium"
                  colspan="3"
                  style="font-size:17px"
                >
                  Balance
                </td>
                <td
                  class="border px-4 py-2 text-green-800 font-bold"
                  colspan="8"
                  style="font-size:17px"
                >
                  ₦ {{new Intl.NumberFormat().format(balance)}}
                </td>
                
              </tr>
            </tbody>
          </table>
        </div>
         <div class="row">
            <AlertError
              v-if="loginErrMsg.title"
              :heading="loginErrMsg.title"
              :message="loginErrMsg.msg"
            />
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Call from "../../general-service";
// import ResultCheckerContent from "./ResultCheckerContent2.vue";
import AlertError from "../Layouts/AlertError.vue";
import Loader from "../Layouts/Loader.vue";
import {mapMutations} from "vuex";
export default {
  components: {
    // ResultCheckerContent,
    AlertError,
    Loader
  },
  name: "CheckTicketResult",
  data:() => ({
    ticket_code: '',
    result: null,
    isLoading: false,
    loginErrMsg: {},
    stake: null,
    balance: null,
    potential_win: null,
    cashout: null,
  }),
  methods: {
    ...mapMutations(['setData', 'setStake', 'setPotentialWin', 'setBalance', 'setCashout']),
    checker() {
      if(!this.ticket_code) {
        alert('Please enter Ticket code!')
      }
      let data = 'ticket_code=' + this.ticket_code
      this.isLoading = true
      this.result = {}
      Call.getLotteryResultChecker(data)
        .then((data) => {
          this.isLoading = false
          if(data.data.success) {
            this.loginErrMsg = {}
            this.result = data.data.data;
            this.stake = data.data.stake;
            this.potential_win = data.data.potential_win;
            this.balance = data.data.balance;
            this.cashout = data.data.cashout;
          } else {
            this.loginErrMsg.title = "Something went wrong!";
            this.loginErrMsg.msg = data.data.message;
          }
        })
        .catch(() => {
          this.isLoading = false
        })
    },
    processCashout(tk_id, tcode) {
      this.isLoading = true
      let qs = "ticket_id="+ tk_id
      Call.processCashout(qs)
        .then((data) => {
          let success = data.data.success;
          if(success) {
            let rqs = "ticket_code=" + tcode
            Call.getLotteryResultChecker(rqs)
              .then((data) => {
                this.isLoading = false
                this.isLoading = false
                if(data.data.success) {
                  this.loginErrMsg = {}
                  let dt = data.data;
                  this.result =dt.data;
                  this.stake =dt.stake;
                  this.potential_win =dt.potential_win;
                  this.balance =dt.balance;
                  this.cashout =dt.cashout;
                } else {
                  this.loginErrMsg.title = "Something went wrong!";
                  this.loginErrMsg.msg = data.data.message;
                }
              })
              .catch(() => this.isLoading = false)
          }
        })
    }
  }
};
</script>
