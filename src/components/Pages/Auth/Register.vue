<template>
    <div>
        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-yellow-200">
            <div class="max-w-md w-full">
                <div>
                    <router-link tag="a" to="/">
                        <img class="mx-auto h-24 w-auto" src="@/assets/logo.png" alt="P-Damatos">
                    </router-link>
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
                    <AlertSuccess heading="Registration Successful"/>
                    <AlertError heading="Registration Error"/>
                </div>
                <form class="mt-8" action="#" method="POST">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm">
                        <div>
                            <input aria-label="Username" name="username" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="Username">
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div class="col-md-6"><input aria-label="First name" name="first_name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="First name"></div>
                            <div class="col-md-6"><input aria-label="Last name" name="last_name" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="Last name"></div>
                        </div>
                        <div>
                            <input aria-label="Email address" name="email" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="Email address">
                        </div>
                        <div class="">
                            <input aria-label="Phone number" name="phone_number" type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="Phone number (Optional)">
                        </div>
                        <div class="-mt-px">
                            <input aria-label="Password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 mb-2" placeholder="Password">
                        </div>
                        <div class="-mt-px">
                            <input aria-label="Repeat Password" name="password_confirmation" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-yellow-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Repeat Password">
                        </div>
                    </div>

                    <div class="mt-6">
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white hover:text-yellow-600 bg-yellow-600 hover:bg-yellow-400 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-yellow-500 group-hover:text-yellow-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Create Account
                        </button>
                        <ButtonLoading message="Request Processing ..." />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import ButtonLoading from '../../Layouts/ButtonLoading';
import AlertSuccess from '../../Layouts/AlertSuccess';
import AlertError from '../../Layouts/AlertError';

export default {
  components: {
    ButtonLoading,
    AlertSuccess,
    AlertError
  }
}
</script>