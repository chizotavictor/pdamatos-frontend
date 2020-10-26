<template>
    <header class="bg-gray-700 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div class="flex items-center justify-between px-4 py-3 sm:p-0">
            <a href="#">
                <img class="h-8" src="@/assets/logo.png" alt="Workcation">
            </a>
            <div>
                <span class="text-yellow-200 font-bold ml-2 text-2xl">P-DAMATOS</span>
            </div>
            <div class="sm:hidden">
                <button @click="isOpen = !isOpen" type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                        <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                    </svg>
                </button>
            </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="px-2 pt-1 pb-4 sm:flex mt-1 sm:p-0">
            <a href="#" class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800">Play Game</a>
            <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Results</a>
            <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">About Us</a>
            <a href="#" class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Contact Us</a>
            
            <a href="#" class="mt-1 block px-2 py-1 bg-yellow-300 mb-3 hover:bg-gray-100 hover:text-yellow-500 font-semibold border border-yellow-200 rounded shadow font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2">Create account</a>
            <a href="#" class="mt-1 block px-2 py-1 text-yellow-500 font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"><i class="fa fa-lock"></i> Sign In</a>
        </nav>
    </header>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
}
</script>