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
        <result-checker-content 
          v-if="result||result!=null" 
          :data="result" 
          :stake="stake" 
          :cashout="cashout" 
          :balance="balance"
          :potential_win="potential_win" 
        />
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
import ResultCheckerContent from "./ResultCheckerContent2.vue";
import AlertError from "../Layouts/AlertError.vue";
import Loader from "../Layouts/Loader.vue";
export default {
  components: {
    ResultCheckerContent,
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
    }
  }
};
</script>
