<script setup lang="ts">
type Item = {
  [key: string]: any;
};

const props = defineProps({
  items: {
    type: Array<Item>,
    default: [],
  },
  headers: {
    type: Array<Header>,
    default: [],
  },
});
</script>
<template>
  <div class="font-inter p-6">
    <div class="flex w-full">
      <slot name="actionHeader"></slot>
    </div>
    <table
      class="rounded-t-xl w-full outline text-left my-5 outline-separator"
    >
      <thead class="border-b">
        <tr class="">
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="px-2 py-4 text-sm font-normal capitalize bg-neutral-gray-3"
          >
            {{ header.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="items.length > 0" v-for="(item, index) in items">
          <td v-for="header in headers" class="px-2 py-4 text-sm font-normal">
            <slot :name="header.value" :item="item">
              <span v-if="header.value === 'action'"> </span>
              <span v-else-if="header.value === 'number'">
                {{ index + 1 }}
              </span>
              <span v-else>
                {{ item[header.value] }}
              </span>
            </slot>
          </td>
        </tr>
        <tr v-else>
          <td :colspan="headers.length" class="text-center py-4">
            <div class="w-full flex justify-center">
              <img src="/image/empty.svg" alt="" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
