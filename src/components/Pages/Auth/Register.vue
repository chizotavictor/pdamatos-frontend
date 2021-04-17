<template>
    <div>
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-yellow-200">
            <div class="max-w-md w-full">
                <div>
                    <a href="/">
                        <img class="mx-auto h-24 w-auto" src="@/assets/logo.png" alt="P-Damatos">
                    </a>
                    <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                        Open new account
                    </h2>
                    <p class="mt-2 text-center text-sm leading-5 text-gray-600">
                        Or
                        <router-link tag="a" :to="{name: 'login'}" class="font-medium text-yellow-800 hover:text-orange-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        Already have an account? Sign In
                        </router-link>
                    </p>
                </div>
                <div class="mt-10">
                    <AlertSuccess v-if="registerSucMsg" :heading="registerSucMsg.title" :message="registerSucMsg.msg"/>
                    <AlertError v-if="registerErrMsg" :heading="registerErrMsg.title" :message="registerErrMsg.msg"/>
                </div>
                <form class="mt-8">
                    <div class="rounded-md shadow-sm">
                        <div>
                            <input aria-label="Username" name="username" type="text" v-model="register.username" @keyup="validate('username')" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="Username">
                            <span class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.username}}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div class="col-md-6">
                                <input aria-label="First name" name="first_name" type="text" v-model="register.first_name" @keyup="validate('first_name')" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="First name">
                                <span class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.first_name}}</span>
                            </div>
                            <div class="col-md-6">
                                <input aria-label="Last name" name="last_name" type="text" v-model="register.last_name" @keyup="validate('last_name')" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="Last name">
                                <span class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.last_name}}</span>
                            </div>
                        </div>
                        <div>
                            <input aria-label="Email address" name="email" type="text" v-model="register.email" @keyup="validate('email')" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="Email address">
                            <span class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.email}}</span>
                        </div>
                        <div class="">
                            <input aria-label="Phone number" name="phone_number" type="text" v-model="register.phone_number" @keyup="validate('phone_number')" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="Phone number (Optional)">
                            <span class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.phone_number}}</span>
                        </div>
                        <div class="-mt-px">
                            <input aria-label="Password" name="password" type="password" v-model="register.password" @keyup="validate('password')" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="Password">
                            <span class="text-red-600 sm:text-sm mt-0 mb-3">{{errors.password}}</span>
                        </div>
                        <div class="-mt-px">
                            <input aria-label="Repeat Password" name="password_confirmation" type="password" v-model="register.password_confirmation" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Repeat Password">
                        </div>
                    </div>

                    <div class="mt-6">
                        <button type="button" @click="registerUser()" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white hover:text-yellow-600 bg-yellow-600 hover:bg-yellow-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Create Account
                        </button>
                        <ButtonLoading v-if="isLoading" message="Request Processing ..." />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { useStore, mapGetters, mapMutations } from 'vuex'
import Call from '../../../general-service'
import registerFormSchema from '../../../validations/register'
import ButtonLoading from '../../Layouts/ButtonLoading';
import AlertSuccess from '../../Layouts/AlertSuccess';
import AlertError from '../../Layouts/AlertError';

export default {
    components: {
        ButtonLoading,
        AlertSuccess,
        AlertError
    },
    data() {
        return {
            register: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                password: '',
                password_confirmation: ''
            },
            errors: {
                username: '',
                email: '',
                phone_number: '',
                password: '',
                password_confirmation: '',
                message: ''
            },
            isLoading: false,
            registerSucMsg: false,
            registerErrMsg: null
        }
    },
    setup() {
        const store = useStore()
        return {
            store
        }
    },
    computed: {
        ...mapGetters(['loginErrorResponse'])
    },
    methods: {
        ...mapMutations(['setAuthKey', 'setAuth']),
        validate(field) {
            registerFormSchema
                .validateAt(field, this.register)
                .then(() => {
                    this.errors[field] = "";
                })
                .catch(err => {
                    this.errors[err.path] = err.message;
                });
        },
        registerUser() {
            registerFormSchema
            .validate(this.register)
            .then((data) => {
                this.isLoading = true
                Call.register(data)
                    .then((data) => {
                        this.isLoading = false
                        this.registerErrMsg = null
                        this.register = {}
                        this.registerSucMsg = { title: 'Registration Successful',
                            msg: data.data.message }
                    })
                    .catch(err => {
                        this.isLoading = false
                        const errData = err.response 
                        let rErrs = errData.data.errors
                        // this.errors = rErrs
                        for (const [key, value] of Object.entries(rErrs)) {
                            this.errors[key] = value[0]
                        }
                    })
            })
            .catch(err => {
                err.inner.forEach(error => {
                this.errors = { ...this.errors, [error.path]: error.message };
                });
            });
        }
    }
}
</script>