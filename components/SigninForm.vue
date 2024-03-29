<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '../store/useAuth'

const passwordVisible = ref(false)
const showModal = ref(false)
const { signIn } = useAuth()

const switchVisibility = () => {
    passwordVisible.value = !passwordVisible.value
}

const openModal = () => {
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
}

const email = ref('')
const password = ref('')

const signInUser = () => {
    signIn(email.value, password.value)
}

const handleSignInClick = (event: MouseEvent) => {
    event.preventDefault()
    signInUser()
}
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 p-5 items-center justify-center">
        <div
            class="flex flex-col card border rounded-lg py-12 px-12 bg-state-primary-main w-full h-full relative overflow-hidden">
            <img src="/Noise.png" alt="Noise" class="absolute inset-0 object-cover z-0 w-full h-full">
            <img src="/logo.png" alt="Logo" class="w-5/12">
            <h1 class="text-2xl font-medium text-white mb-4">
                Hello
                <br />
                Friends of Uwang!👋🏻
            </h1>
            <p class="text-white mb-16">You are a significant friend to someone who always helps keep money conducive to
                the
                common goal of achieving
                financial independence.</p>
            <span class="text-white text-center text-sm">
                {{ new Date().getFullYear() }} Uwang. All rights reserved.
            </span>
        </div>
        <div class="flex flex-col justify-center items-center">
            <img src="https://bluhabit.id/assets/img/logo-uwang.png" alt="" class="mb-6" />
            <div class="max-w-sm rounded-2xl overflow-hidden shadow-2xl p-6 w-full">
                <h1 class="font-bold text-xl mb-2">Login</h1>
                <p class="text-sm text-gray-500 mb-4">Masuk ke akun anda</p>
                <form class="w-full max-w-md">
                    <div class="mb-4">
                        <label for="email" class="block text-gray-700 mb-2 text-sm text-gray-500">Email</label>
                        <input type="text" id="email" name="email"
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                            placeholder="Masukkan email Anda">

                    </div>
                    <div class="mb-6">
                        <label for="password" class="block text-gray-700 mb-2 text-sm text-gray-500">Password</label>
                        <div class="relative">
                            <input :type="passwordVisible ? 'text' : 'password'" id="password" name="password"
                                class="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
                                placeholder="Masukkan password Anda">
                            <button @click="switchVisibility" type="button"
                                class="absolute inset-y-0 right-0 flex items-center px-2">
                                <img v-if="passwordVisible" src="/image/eye-on.svg" alt="">
                                <img v-else src="/image/eye-off.svg" alt="">
                            </button>
                        </div>

                    </div>
                    <p class="text-right text-sm text-blue-500 mb-4"><a @click.prevent="openModal" href="#">Lupa
                            password?</a></p>
                    <div class="flex items-center justify-between">
                        <button @click="handleSignInClick"
                            class="bg-state-primary-main hover:bg-state-primary-hover text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Masuk</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 overflow-y-auto flex items-center justify-center z-50">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
            <button @click="closeModal" type="button"
                class="bg-transparent absolute top-4 right-4 text-gray-900 text-xl hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent">
                <img src="/image/close.svg" alt=""></button>
            <div class="flex flex-col p-6 justify-center items-center">
                <img src="/modal.png" alt="" class="mb-4">
                <h1 class="text-center font-bold text-xl mb-2">Lupa password?</h1>
                <h2 class="text-center text-xl text-gray-500">Hubungi super admin Anda untuk mengubah password.</h2>
            </div>
        </div>
    </div>
</template>