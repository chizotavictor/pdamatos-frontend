<template>
  <div class="mt-10 sm:mt-0">
    <Loader :is-visible="isLoading"></Loader>
    <div class="">
      <div class="mt-2 md:mt-0">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="mb-3">
              <AlertError
                v-if="request.title"
                :heading="request.title"
                :message="request.msg"
              />
            </div>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Games"
                  class="block text-sm  mt-5 font-medium text-gray-700"
                  >Games</label
                >
                <select
                  name="game_id"
                  v-model="ticket.game_id"
                  @change="selectGame($event)"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value=""></option>
                  <option v-if="getAvailableGames.length == 0" value=""
                    >Not available.</option
                  >
                  <option
                    v-for="(i, k) in getAvailableGames"
                    :key="k"
                    :value="i.id"
                    >{{ i.game }}</option
                  >
                </select>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for=""
                  class="block text-sm  mt-5 font-medium text-gray-700"
                  >Against (Date)</label
                >
                <input
                  name="against"
                  type="date"
                  v-model="ticket.against"
                  class="w-full p-3 bg-gray-200 mt-1 font-bold block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Direct"
                  class="block text-sm  mt-5 font-medium text-gray-700"
                  >Game Direct</label
                >
                <select
                  name="game_direct_id"
                  v-model="ticket.game_direct_id"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option v-if="getGameDirects.length == 0" value=""
                    >Not available.</option
                  >
                  <option
                    v-for="(i, k) in getGameDirects"
                    :key="k"
                    :value="i.id"
                    >{{ i.digit }}D - (₦{{ i.cost }})</option
                  >
                </select>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label class="block text-sm  mt-5 font-medium text-gray-700"
                  >Game Slot</label
                >
                <select
                  name="game_slot_id"
                  v-model="ticket.game_slot_id"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option v-if="getGameTime.length == 0" value=""
                    >Not available.</option
                  >
                  <option
                    v-for="(i, k) in getGameTime"
                    :key="k"
                    :value="i.id"
                    >{{ i.time }}</option
                  >
                </select>
              </div>
            </div>
            <div class="row mt-10">
              <hr />
            </div>
            <div
              class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
              role="alert"
            >
              <div class="flex">
                <div class="py-1">
                  <svg
                    class="fill-current h-6 w-6 text-teal-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Tips for recording scores</p>
                  <p class="text-sm">
                    Please for <b>(Positions)</b> with more than one scores -
                    separate with a space. <b>E.g 2211 2334 0903 4432</b>
                  </p>
                </div>
              </div>
            </div>
            <div v-if="ticket.game_direct_id != 3" class="grid ">
              <div class="col-span-0 sm:col-span-3">
                <label
                  for="Direct"
                  class="block text-sm  mt-5 font-bold text-gray-700"
                  >1st Position</label
                >
                <input
                  name="first_position"
                  v-model="ticket.first_position"
                  placeholder="0000"
                  class="mt-1 block w-full font-medium py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div class="col-span-0 sm:col-span-3">
                <label
                  for="Direct"
                  class="block text-sm  mt-5 font-bold text-gray-700"
                  >2nd Position</label
                >
                <input
                  name="second_position"
                  v-model="ticket.second_position"
                  placeholder="0000"
                  class="mt-1 block w-full font-medium py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div class="col-span-0 sm:col-span-3">
                <label
                  for="Direct"
                  class="block text-sm  mt-5 font-bold text-gray-700"
                  >3rd Position</label
                >
                <input
                  name="third_position"
                  v-model="ticket.third_position"
                  placeholder="0000"
                  class="mt-1 block w-full font-medium py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div class="col-span-0 sm:col-span-3">
                <label
                  for="Direct"
                  class="block text-sm  mt-5 font-bold text-gray-700"
                  >4th Position</label
                >
                <textarea
                  name="fourth_position"
                  v-model="ticket.fourth_position"
                  placeholder="0000 0000"
                  class="mt-1 block w-full font-medium py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                </textarea>
              </div>
              <div class="col-span-0 sm:col-span-3">
                <label
                  for="Direct"
                  class="block text-sm  mt-5 font-bold text-gray-700"
                  >5th Position</label
                >
                <textarea
                  name="fifth_position"
                  v-model="ticket.fifth_position"
                  placeholder="0000 0000 0000"
                  class="mt-1 block w-full font-medium py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                </textarea>
              </div>
            </div>

            <div v-else class="grid ">
              <div class="col-span-0 sm:col-span-3">
                <label
                  for="Direct"
                  class="block text-sm  mt-5 font-bold text-gray-700"
                  ></label
                >
                <input
                  name="first_position"
                  v-model="number6d"
                  placeholder="6D result number"
                  class="mt-1 block w-full font-medium py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              v-if="ticket.game_direct_id != 3"
              type="button"
              @click="uploadResult()"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload Result
            </button>
            <button
              v-else
              type="button"
              @click="uploadResult6D()"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Upload Result
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import Call from "../../general-service";
import AlertError from "../Layouts/AlertError";
import Loader from "../Layouts/Loader.vue";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
export default {
  name: "RecordTicketResult",
  components: {
    AlertError,
    Loader
  },
  mounted() {
    this.loadAvailableGames();
  },
  data: () => ({
    request: { title: "", msg: "" },
    ticket: {},
    isLoading: false,
    number6d: ''
  }),
  computed: {
    ...mapGetters([
      "getModalVisibility",
      "getAvailableGames",
      "getGameDirects",
      "getGameTime",
      "getGamePoint"
    ])
  },
  methods: {
    ...mapMutations([
      "setAvailableGames",
      "setGameDirect",
      "setGameTime",
      "setGamePoint"
    ]),
    loadAvailableGames() {
      Call.availableGames().then(data => {
        this.setAvailableGames(data);
      });
    },
    selectGame(e) {
      const id = e.target.value;
      this.ticket["game_id"] = id;
      Call.getGameDirects(id).then(data => {
        this.setGameDirect(data);
      });
      Call.getGameSlot(id).then(data => {
        this.setGameTime(data);
      });
      Call.getGamePoints().then(data => {
        this.setGamePoint(data);
      });
    },
    checks() {
      let verified = true;
      const FIELD_INPUT_ERROR = "Field Input Error";
      if (!this.ticket.game_id)
        (this.request.title = FIELD_INPUT_ERROR),
          (this.request.msg = "Please select game."),
          (verified = false);
      if (!this.ticket.against)
        (this.request.title = FIELD_INPUT_ERROR),
          (this.request.msg = "Please select ticket date."),
          (verified = false);
      if (!this.ticket.game_direct_id)
        (this.request.title = FIELD_INPUT_ERROR),
          (this.request.msg = "Please select game direct."),
          (verified = false);
      if (!this.ticket.game_slot_id)
        (this.request.title = FIELD_INPUT_ERROR),
          (this.request.msg = "Please select game slot."),
          (verified = false);
      return verified;
    },
    uploadResult() {
      const FIELD_INPUT_ERROR = "Field Input Error";
      let verified = this.checks()
      if (verified) {
        this.request = {};
        this.isLoading = true;
        Call.uploadLotteryResult(this.ticket)
          .then(data => {
            this.isLoading = false;
            let response = data.data;
            if (response.success) {
              this.request = {};
              this.ticket = {};
              createToast(response.message);
            } else {
              (this.request.title = FIELD_INPUT_ERROR),
                (this.request.msg = response.message);
              createToast(response.message, {
                type: "danger"
              });
            }
          })
          .catch(function() {
            this.isLoading = false;
          });
      }
    },
    uploadResult6D() {
      const FIELD_INPUT_ERROR = "Field Input Error";
      let verified = this.checks()
      if (verified) {
        this.request = {};
        this.isLoading = true;
        this.ticket['first_position'] = this.number6d;
        Call.uploadLotteryResult(this.ticket)
          .then(data => {
            this.isLoading = false;
            let response = data.data;
            if (response.success) {
              this.request = {};
              this.ticket = {};
              createToast(response.message);
            } else {
              (this.request.title = FIELD_INPUT_ERROR),
                (this.request.msg = response.message);
              createToast(response.message, {
                type: "danger"
              });
            }
          })
          .catch(function() {
            this.isLoading = false;
          });
      }
    }
  }
};
</script>
