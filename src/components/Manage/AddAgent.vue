<template>
  <div class="mt-10 sm:mt-0">
    <Loader :is-visible="isLoading"></Loader>
    <div class="">
      <div class="mt-2 md:mt-0">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="mb-0">
              <AlertError
                v-if="request.title"
                :heading="request.title"
                :message="request.msg"
              />
            </div>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Username"
                  class="block text-sm  mt-1 font-medium text-gray-700"
                  >Username</label
                >
                <input
                  name="username"
                  v-model="agent.username"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <small class="text-red-700">{{errors.username}}</small>
              </div>

             <div class="col-span-6 sm:col-span-3">
                <label
                  for="Email"
                  class="block text-sm  mt-1 font-medium text-gray-700"
                  >Email Address</label
                >
                <input
                  name="username"
                  v-model="agent.email"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <small class="text-red-700">{{errors.email}}</small>
              </div>
            </div>
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Firstname"
                  class="block text-sm  mt-5 font-medium text-gray-700"
                  >First Name</label
                >
                <input
                  name="firstname"
                  v-model="agent.firstname"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <small class="text-red-700">{{errors.firstname}}</small>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label class="block text-sm  mt-5 font-medium text-gray-700"
                  >Last Name</label
                >
                <input
                  name="lastname"
                  v-model="agent.lastname"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <small class="text-red-700">{{errors.lastname}}</small>
              </div>
            </div>

            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="Phone number"
                  class="block text-sm  mt-5 font-medium text-gray-700"
                  >Phone number</label
                >
                <input
                  name="Phone number"
                  v-model="agent.phone_number"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <small class="text-red-700">{{errors.phone_number}}</small>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label class="block text-sm  mt-5 font-medium text-gray-700"
                  >Password</label
                >
                <input
                  name="password"
                  type="password"
                  v-model="agent.password"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <small class="text-red-700">{{errors.password}}</small>
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
                  <p class="font-bold">Agent Location</p>
                  <p class="text-sm">
                    The information comprise of <b>(Business Location)</b>  -
                    or operating space.
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6">
              <div class="col-span-12 sm:col-span-3">
                <label
                  for="address"
                  class="block text-sm  mt-5 font-medium text-gray-700"
                  >Address</label
                >
                <textarea
                  name="address"
                  v-model="agent.address"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
                <small class="text-red-700">{{errors.address}}</small>
              </div>
            </div>

            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="town"
                  class="block text-sm  mt-5 font-medium text-gray-700"
                  >Town</label
                >
                <input
                  name="town"
                  v-model="agent.town"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <small class="text-red-700">{{errors.town}}</small>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label class="block text-sm  mt-5 font-medium text-gray-700"
                  >Local Govt. Area</label
                >
                <input
                  name="lga"
                  v-model="agent.lga"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <small class="text-red-700">{{errors.lga}}</small>
              </div>
            </div>

            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="State"
                  class="block text-sm  mt-5 font-medium text-gray-700"
                  >State</label
                >
                <select
                  name="state"
                  v-model="agent.state"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option v-for="(i,k) in state_list" :key="k" :value="i">{{i}}</option>
                </select>
                <small class="text-red-700">{{errors.state}}</small>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label class="block text-sm  mt-5 font-medium text-gray-700"
                  >Country</label
                >
                <select
                  name="country"
                  v-model="agent.country"
                  class="mt-1 block w-full font-bold py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option v-for="(i,k) in country_list" :key="k" :value="i">{{i}}</option>
                </select>
                <small class="text-red-700">{{errors.country}}</small>
              </div>
            </div>
            
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="button"
              @click="createAgent()"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register Agent
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters, mapMutations } from "vuex";
import Call from "../../general-service";
import AlertError from "../Layouts/AlertError";
import Loader from "../Layouts/Loader.vue";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
export default {
  name: "Add Agent",
  components: {
    AlertError,
    Loader
  },
  data: () => ({
    request: { title: "", msg: "" },
    country_list: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
    state_list: [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
    ],
    agent: {},
    isLoading: false,
    errors: {}
  }),
  methods: {
    createAgent() {
        this.request = {};
        this.errors = {};
        this.isLoading = true;
        Call.createAgent(this.agent)
          .then(data => {
            if(data.response) {
              if(data.response.status == 422) {
                let elist = data.response.data.errors;
                if('address' in elist)
                    this.errors['address'] = elist.address[0];
                if('username' in elist)
                    this.errors['username'] = elist.username[0];
                if('password' in elist)
                    this.errors['password'] = elist.password[0];
                if('firstname' in elist)
                    this.errors['firstname'] = elist.firstname[0];
                if('lastname' in elist)
                    this.errors['lastname'] = elist.lastname[0];
                if('phone_number' in elist)
                    this.errors['phone_number'] = elist.phone_number[0];
                if('email' in elist)
                    this.errors['email'] = elist.email[0];
                if('town' in elist)
                    this.errors['town'] = elist.town[0];
                if('lga' in elist)
                    this.errors['lga'] = elist.lga[0];
                if('state' in elist)
                    this.errors['state'] = elist.state[0];
                if('country' in elist)
                    this.errors['country'] = elist.country[0];
              }
            }
            
            this.isLoading = false;
            let response = data.data;
            if (response.success) {
              this.request = {};
              this.agent = {};
              createToast(response.message);
            } else {
              createToast(response.message, {
                type: "danger"
              });
            }
          })
          .catch(() => {
            this.isLoading = false
          })
    }
  }
};
</script>
