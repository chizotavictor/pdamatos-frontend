<template>
    <div>
        <Navbar/>
        <router-view></router-view>
        <footer class="w-full bg-black text-center text-white text-xs border-t border-black p-4">
            P-Damatos Copyright 2020  
        </footer>
    </div>
</template>
<script>
import Navbar from '../../../Layouts/Navbar';
export default {
    components: {
        Navbar
    }
}
</script>