<script setup lang="ts">
const headers = [
    {
        name: "No",
        value: "number",
    },
    {
        name: "ID user",
        value: "id",
    },
    {
        name: "Name",
        value: "full_name",
    },
    {
        name: "Email",
        value: "email",
    },
    {
        name: "username",
        value: "username",
    },
    {
        name: "Tanggal Lahir",
        value: "dateOfBirth",
    },
    {
        name: "Tanggal Daftar",
        value: "dateOfRegister",
    },
    {
        name: "Status",
        value: "status",
    },
];
</script>
<template>
    <div class="bg-separator h-screen">
        <div class="flex justify-between items-center p-4">
            <div>
                <h1 class="text-2xl font-bold">Log aktivitas pengguna</h1>
                <p class="text-gray-500">Lihat semua riwayat aktivitas pengguna terkini </p>
            </div>
            <div>
                <button class="border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-100">
                    <img src="image/bell.svg" alt="">
                </button>
            </div>
        </div>
        <div class="container mx-auto bg-white rounded-lg p-5 ">
            <div class="flex justify-between">
                <div class="flex flex-row gap-4">
                    <button
                        class="flex flex-row items-center bg-transparent border border-gray-400 rounded-xl py-2 px-2">
                        <img src="image/filter.svg" alt="">
                        <p class="text-heading font-bold ml-1">Add Filter</p>
                    </button>
                    <button
                        class="flex flex-row items-center bg-transparent border border-gray-400 rounded-xl py-2 px-2">
                        <img src="image/arrow-up.svg" alt="">
                        <p class="text-heading font-bold ml-1">Sort by</p>
                        <img src="image/chevron-down.svg" alt="" class="ml-1">
                    </button>
                    <div class="relative">
                        <input type="text"
                            class="border border-gray-400 rounded-xl py-2 px-2 pl-8 focus:outline-none focus:border-blue-500 placeholder:text-gray-400"
                            placeholder="Search...">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                fill="none">
                                <path
                                    d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                                    stroke="#0A0A0A" stroke-width="1.33" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M13.9996 14L11.0996 11.1" stroke="#0A0A0A" stroke-width="1.33"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        class="flex flex-row items-center bg-transparent border border-gray-400 rounded-xl py-2 px-2">
                        <img src="image/download.svg" alt="">
                        <p class="text-heading font-bold ml-1">Export CSV</p>
                    </button>
                </div>

            </div>
            <DataTable :headers="headers" />
        </div>
    </div>
</template>