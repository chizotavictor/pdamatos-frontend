<template>
    <div class="p-0">
        <Loader :is-visible="isLoading"></Loader>
        <div class="grid grid-cols-3 gap-4 m-0">
            <div class="col-span-3 bg-black" >
                <h2 class="p-3 text-white font-bold">Lottery Result</h2>
            </div>
        </div>
        <div class="bg-gray-100">
            <nav class="tabs flex flex-col sm:flex-row">
                <button data-target="panel-1" @click="setActiveTab(0)" :class="['tab text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ', (getActiveTab == 0) ? 'active text-blue-500 border-b-2 font-medium border-blue-500' :'' ]">
                    Record Result
                </button>
                <button data-target="panel-2" @click="setActiveTab(1)" :class="['tab ext-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ', (getActiveTab == 1) ? 'active text-blue-500 border-b-2 font-medium border-blue-500' :'']">
                    Browse Lottery Result
                </button>
                <button data-target="panel-3" @click="setActiveTab(2)" :class="['tab ext-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none ', (getActiveTab == 2) ? 'active text-blue-500 border-b-2 font-medium border-blue-500' :'']">
                    Check Ticket W. Status
                </button>
            </nav>
        </div>

        <div id="panels">
            <div class="panel-1 tab-content active py-5">
                <div class="mt-10 sm:mt-0">
                    <div class="">
                        <div class="mt-5 md:mt-0">
                            <div class="shadow overflow-hidden sm:rounded-md">
                                <div class="px-4 py-5 bg-white sm:p-6">
                                    <div class="mb-3">
                                        <AlertError v-if="loginErrMsg.title" :heading="loginErrMsg.title" :message="loginErrMsg.msg"/>
                                    </div>
                                    <div class="space-y-1" style="margin-top:20px;margin-bottom:20px;">
                                        <label id="listbox-label" class="block text-x leading-5 font-medium text-gray-700">
                                            Select Game: <span v-if="name !== '' || name !== undefined" style="font-weight:bold;">{{name}}</span>
                                        </label>
                                        <div class="row flex">
                                            <article 
                                                v-for="(i,k) in getAvailableGames" 
                                                :key="k" 
                                                :class="['mr-2 overflow-hidden hover:shadow-outline selected:shadow-outline cursor-pointer rounded-md shadow-lg border border-yellow-600 bg-yellow-400', (i.game == name) ? 'shadow-outline' : '']"
                                                :title="i.game">
                                                <a href="#">
                                                <img v-if="i.is_active" @click="selectGame(i.id, i.game)"  :alt="i.game" class="block" style="height:5em" :src="i.image"/>
                                                    <img v-else :alt="i.game" class="block opacity-25" style="height:5em" :src="i.image">
                                                </a>
                                            </article>                                                
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="Direct" class="block text-sm  mt-5 font-medium text-gray-700">Game Direct</label>
                                            <select name="game_direct_id" 
                                                @change="validate('game_direct_id')"
                                                v-model="ticket.game_direct_id"  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option v-if="getGameDirects.length == 0" value="">Not available.</option>
                                                <option v-for="(i,k) in getGameDirects" :key="k" :value="i.id">{{i.digit}}D - (₦{{i.cost}})</option>
                                            </select>
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="" class="block text-x mt-5 font-medium">Against (Date) <small>yyyy-mm-dd</small>:</label>
                                            <input 
                                                name="against" 
                                                type="date"
                                                v-model="ticket.against" 
                                                class="w-full p-3 bg-gray-200 font-mono"
                                            />
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label class="block text-sm  mt-5 font-medium text-gray-700">Game Slot</label>
                                            <select name="game_slot_id" 
                                                v-model="ticket.game_slot_id"  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option v-if="getGameTime.length == 0" value="">Not available.</option>
                                                <option v-for="(i,k) in getGameTime" :key="k" :value="i.id">{{i.time}}</option>
                                            </select>
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="" class=" text-x mt-5 font-medium">Result:</label>
                                            <input 
                                                type="text" 
                                                name="number"
                                                autocomplete="off"
                                                v-model="ticket.number" 
                                                @keyup="validate('number')"
                                                class="w-full rounded-md ml-0 m-1 p-3 bg-yellow-200 text-yellow-900 border-2 border-gray-700 font-medium text-center font-semibold font-mono" 
                                                style="font-size:25px;"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="button" @click="uploadResult()" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Upload Result
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="panel-2 tab-content py-5">
                <div class="row">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-4 ml-10">
                            <div class="space-y-1" style="margin-top:10px;margin-bottom:10px;">
                                <label id="listbox-label" class="block text-x leading-5 font-medium text-gray-700">
                                    Select Game: <span v-if="name !== '' || name !== undefined" style="font-weight:bold;">{{name}}</span>
                                </label>
                                <div class="row flex">
                                    <article 
                                        v-for="(i,k) in getAvailableGames" 
                                        :key="k" 
                                        :class="['mr-2 overflow-hidden hover:shadow-outline selected:shadow-outline cursor-pointer rounded-md shadow-lg border border-yellow-600 bg-yellow-400', (i.game == name) ? 'shadow-outline' : '']"
                                        :title="i.game">
                                        <a href="#">
                                        <img v-if="i.is_active" @click="selectGame(i.id, i.game)"  :alt="i.game" class="block" style="height:5em" :src="i.image"/>
                                            <img v-else :alt="i.game" class="block opacity-25" style="height:5em" :src="i.image">
                                        </a>
                                    </article>                                                
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4 p-5">
                            <div class="inline-block relative w-full md:w-1/4 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Select Direct:
                                </label>
                                <select v-model="ticket.game_direct_id" class="block appearance-none w-full bg-white  border border-gray-400 hover:border-gray-500 py-3 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    <option v-if="getGameDirects.length == 0" value="">Not available.</option>
                                    <option v-for="(i,k) in getGameDirects" :key="k" :value="i.id">{{i.digit}}D - (₦{{i.cost}})</option>
                                </select>
                                <div class="pointer-events-none absolute mt-5 mr-5 inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <div class="inline-block relative w-full md:w-1/4 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Select Slot
                                </label>
                                <select v-model="ticket.game_slot_id" class="block appearance-none w-full bg-white  border border-gray-400 hover:border-gray-500 py-3 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                    <option v-if="getGameTime.length == 0" value="">Not available.</option>
                                    <option v-for="(i,k) in getGameTime" :key="k" :value="i.id">{{i.time}}</option>
                                </select>
                                <div class="pointer-events-none absolute mt-5 mr-5 inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <div class="inline-block relative w-full md:w-1/4 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Against Date
                                </label>
                                <input type="date" v-model="ticket.against"  class="block appearance-none w-full bg-white  border border-gray-400 hover:border-gray-500 py-3 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <div class="pointer-events-none absolute mt-5 mr-5 inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                            <button class="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded h-10" style="margin-top:25px">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-12 ">
                        <DataTable :value="customers" :paginator="true" class="p-datatable-customers" :rows="10"
                            dataKey="id" :rowHover="true" v-model:selection="selectedCustomers" v-model:filters="filters" filterDisplay="menu" :loading="loading"
                            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[10,25,50]"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                            :globalFilterFields="['name','country.name','representative.name','status']" responsiveLayout="scroll">
                            <template #header>
                                <div class="p-d-flex p-jc-between p-ai-center">
                                    <h5 class="p-m-0">Lottey Results</h5>
                                    <span class="p-input-icon-left">
                                        <i class="pi pi-search" />
                                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                                    </span>
                                </div>
                            </template>
                            <template #empty>
                                No result found.
                            </template>
                            <template #loading>
                                Loading lottery result data. Please wait.
                            </template>
                            <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                            <Column field="name" header="Name" sortable style="min-width: 14rem">
                                <template #body="{data}">
                                    {{data.name}}
                                </template>
                                <template #filter="{filterModel}">
                                    <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
                                </template>
                            </Column>
                            <Column field="country.name" header="Country" sortable filterMatchMode="contains" style="min-width: 14rem">
                                <template #body="{data}">
                                    <img src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" :class="'flag flag-' + data.country.code" width="30" />
                                    <span class="image-text">{{data.country.name}}</span>
                                </template>
                                <template #filter="{filterModel}">
                                    <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by country"/>
                                </template>
                            </Column>
                            <Column header="Agent" sortable filterField="representative" sortField="representative.name" :showFilterMatchModes="false" :filterMenuStyle="{'width':'14rem'}" style="min-width: 14rem">
                                <template #body="{data}">
                                    <img :alt="data.representative.name" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" width="32" style="vertical-align: middle" />
                                    <span class="image-text">{{data.representative.name}}</span>
                                </template>
                                <template #filter="{filterModel}">
                                    <div class="p-mb-3 p-text-bold">Agent Picker</div>
                                    <MultiSelect v-model="filterModel.value" :options="representatives" optionLabel="name" placeholder="Any" class="p-column-filter">
                                        <template #option="slotProps">
                                            <div class="p-multiselect-representative-option">
                                                <img :alt="slotProps.option.name" :src="'demo/images/avatar/' + slotProps.option.image" width="32" style="vertical-align: middle" />
                                                <span class="image-text">{{slotProps.option.name}}</span>
                                            </div>
                                        </template>
                                    </MultiSelect>
                                </template>
                            </Column>
                            <Column field="date" header="Date" sortable dataType="date" style="min-width: 8rem">
                                <template #body="{data}">
                                    {{formatDate(data.date)}}
                                </template>
                                <template #filter="{filterModel}">
                                    <Calendar v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" />
                                </template>
                            </Column>
                            <Column field="balance" header="Balance" sortable dataType="numeric" style="min-width: 8rem">
                                <template #body="{data}">
                                    {{formatCurrency(data.balance)}}
                                </template>
                                <template #filter="{filterModel}">
                                    <InputNumber v-model="filterModel.value" mode="currency" currency="USD" locale="en-US" />
                                </template>
                            </Column>
                            <Column field="status" header="Status" sortable :filterMenuStyle="{'width':'14rem'}" style="min-width: 10rem">
                                <template #body="{data}">
                                    <span :class="'customer-badge status-' + data.status">{{data.status}}</span>
                                </template>
                                <template #filter="{filterModel}">
                                    <Dropdown v-model="filterModel.value" :options="statuses" placeholder="Any" class="p-column-filter" :showClear="true">
                                        <template #value="slotProps">
                                            <span :class="'customer-badge status-' + slotProps.value">{{slotProps.value}}</span>
                                        </template>
                                        <template #option="slotProps">
                                            <span :class="'customer-badge status-' + slotProps.option">{{slotProps.option}}</span>
                                        </template>
                                    </Dropdown>
                                </template>
                            </Column>
                            <Column field="activity" header="Activity" sortable :showFilterMatchModes="false" style="min-width: 10rem">
                                <template #body="{data}">
                                    <ProgressBar :value="data.activity" :showValue="false" />
                                </template>
                                <template #filter="{filterModel}">
                                    <Slider v-model="filterModel.value" range class="p-m-3"></Slider>
                                    <div class="p-d-flex p-ai-center p-jc-between p-px-2">
                                        <span>{{filterModel.value ? filterModel.value[0] : 0}}</span>
                                        <span>{{filterModel.value ? filterModel.value[1] : 100}}</span>
                                    </div>
                                </template>
                            </Column>
                            <Column headerStyle="width: 4rem; text-align: center" bodyStyle="text-align: center; overflow: visible">
                                <template #body>
                                    <Button type="button" icon="pi pi-cog"></Button>
                                </template>
                            </Column>
                        </DataTable>
                    </div>
                </div>
               
            </div>
            <div class="panel-3 tab-content py-5">
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-4 p-5">
                        <div class="inline-block relative w-full md:w-3/5 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                Ticket code
                            </label>
                            <input class="block appearance-none w-full bg-white  border border-gray-400 hover:border-gray-500 py-3 px-4  rounded shadow leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <button class="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded h-10" style="margin-top:25px">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Call from '../../../../general-service'
import AlertError from '../../../Layouts/AlertError'
import Loader from '../../../Layouts/Loader'
import { createToast } from 'mosha-vue-toastify';
import "mosha-vue-toastify/dist/style.css"
import {FilterMatchMode,FilterOperator} from 'primevue/api';


export default {
    components: {
        AlertError,
        Loader
    },
    mounted() {
        const tab = document.querySelectorAll(".tab");
        const panel = document.querySelectorAll(".tab-content");
        function onTabClick(event) {
            // deactivate existing active tabs and panel
            for (let i = 0; i < tab.length; i++) {
                tab[i].classList.remove("active");
            }

            for (let i = 0; i < panel.length; i++) {
                panel[i].classList.remove("active");
            }
            // activate new tabs and panel
            event.target.classList.add('active');
            let classString = event.target.getAttribute('data-target');
            // console.log(classString);
            document.getElementById('panels').getElementsByClassName(classString)[0].classList.add("active");
        }

        for (let i = 0; i < tab.length; i++) {
            tab[i].addEventListener('click', onTabClick, false);
        }
        this.loadAvailableGames()
        this.getActiveTab = 0
        localStorage.setItem('lactiveTab', 0)

        this.loading = false;
    },
    data: () => ({
        isLoading: false,
        name: '',
        loginErrMsg: {
            title: '',
            msg: ''
        },
        code_ticket: '',
        ticket: {
            game_id: null,
            game_direct_id: null,
            game_slot_id: null,
            number: null,
            against: null
        },
        getActiveTab: localStorage.getItem('lactiveTab') || 0,
        customers: null,
        selectedCustomers: null,
        filters: {
            'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
            'name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
            'country.name': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.STARTS_WITH}]},
            'representative': {value: null, matchMode: FilterMatchMode.IN},
            'date': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.DATE_IS}]},
            'balance': {operator: FilterOperator.AND, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
            'status': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.EQUALS}]},
            'activity': {value: null, matchMode: FilterMatchMode.BETWEEN},
            'verified': {value: null, matchMode: FilterMatchMode.EQUALS}
        },
        loading: true,
        representatives: [
            {name: "Amy Elsner", image: 'amyelsner.png'},
            {name: "Anna Fali", image: 'annafali.png'},
            {name: "Asiya Javayant", image: 'asiyajavayant.png'},
            {name: "Bernardo Dominic", image: 'bernardodominic.png'},
            {name: "Elwin Sharvill", image: 'elwinsharvill.png'},
            {name: "Ioni Bowcher", image: 'ionibowcher.png'},
            {name: "Ivan Magalhaes",image: 'ivanmagalhaes.png'},
            {name: "Onyama Limba", image: 'onyamalimba.png'},
            {name: "Stephen Shaw", image: 'stephenshaw.png'},
            {name: "XuXue Feng", image: 'xuxuefeng.png'}
        ],
        statuses: [
            'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
        ]
    }),
    computed: {
        ...mapGetters(['getModalVisibility', 'getAvailableGames', 'getGameDirects', 'getGameTime', 'getGamePoint', 'getTickets'])
    },
    methods: {
        setActiveTab(val) {
            this.getActiveTab = val
            localStorage.setItem('lactiveTab', val)
        },
        ...mapMutations(['setModalVisibility', 'setAvailableGames', 'setGameDirect', 'setGameTime', 'setGamePoint', 'setTickets']),
        ...mapActions(['clearTickets']),
        selectGame(id, name) {
            this.ticket = {}
            this.ticket.game_id = id
            this.name = name
            Call.getGameDirects(id)
                .then((data) => {
                    this.setGameDirect(data)
                })
            Call.getGameSlot(id)
                .then((data) => {
                    this.setGameTime(data)
                })
            Call.getGamePoints()
                .then((data) => {
                    this.setGamePoint(data)
                })
                createToast('You have selected ' + this.name)
        },
        loadAvailableGames() {
            Call.availableGames()
                .then((data) => {
                    this.setAvailableGames(data)
                })
        },
        uploadResult() {
            if(!this.ticket.game_id) {
                this.loginErrMsg.title = "No game select!"
                this.loginErrMsg.msg = "Please select the preferred game."
                return;
            }
            if(!this.ticket.game_direct_id) {
                this.loginErrMsg.title = "No game direct selected!"
                this.loginErrMsg.msg = "Please select game title."
                return;
            }
            if(!this.ticket.game_slot_id) {
                this.loginErrMsg.title = "No game slot selected!"
                this.loginErrMsg.msg = "Please select game slot."
                return;
            }
            if(!this.ticket.against) {
                this.loginErrMsg.title = "Against date not specified!"
                this.loginErrMsg.msg = "Please select against date for proper reference."
                return;
            }
            if(!this.ticket.number) {
                this.loginErrMsg.title = "Lottery win number not specified!"
                this.loginErrMsg.msg = "Please enter win number to match ticket winners."
                return;
            }
            this.loginErrMsg = {}
            this.isLoading = true
            Call.uploadLotteryResult(this.ticket)
                .then((data) => {
                    this.isLoading = false
                    if(data.data.success) {
                        this.ticket['game_direct_id'] = null
                        this.ticket['game_slot_id'] = null
                        this.ticket['number'] = null
                        this.ticket['against'] = null
                        createToast(data.data.message, {
                            type: 'success'
                        })
                    } else {
                        createToast(data.data.message, {
                            type: 'danger'
                        })
                    }
                })
                .catch(() => {
                    this.isLoading = false
                    createToast('Server error occurred!', {
                        type: 'danger'
                    })
                })
        },
        formatDate(value) {
            return value.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
        }
    }
}
</script>
<style scoped>
.tab-content {
  display: none;
}

.tab-content.active {
  display: block;
}
::v-deep(.p-paginator) .p-paginator-current {
  margin-left: auto;
}
::v-deep(.p-progressbar) {
  height: 0.5rem;
  background-color: #D8DADC;
}
::v-deep(.p-progressbar) .p-progressbar-value {
  background-color: #607D8B;
}
::v-deep(.p-datepicker) {
  min-width: 25rem;
}
::v-deep(.p-datepicker) td {
  font-weight: 400;
}
::v-deep(.p-datatable.p-datatable-customers) .p-datatable-header {
  padding: 1rem;
  text-align: left;
  font-size: 1.5rem;
}
::v-deep(.p-datatable.p-datatable-customers) .p-paginator {
  padding: 1rem;
}
::v-deep(.p-datatable.p-datatable-customers) .p-datatable-thead > tr > th {
  text-align: left;
}
::v-deep(.p-datatable.p-datatable-customers) .p-datatable-tbody > tr > td {
  cursor: auto;
}
::v-deep(.p-datatable.p-datatable-customers) .p-dropdown-label:not(.p-placeholder) {
  text-transform: uppercase;
}


</style>