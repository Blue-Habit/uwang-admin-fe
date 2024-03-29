<script setup>
import debounce from "lodash.debounce";
const props = defineProps({
  query: {
    type: String,
  },
});
const query = props.query;

const emit = defineEmits(['onSearch','update:query'])
const debouncedSearch = debounce(() => {
  emit('onSearch')
  emit('update:query',query)
  console.log(query);

}, 500);

function onSearch() {
  debouncedSearch(); 
}

</script>
<template>
  <div>
    <div>
      <div
        class="p-3 bg-white rounded-xl flex gap-1 items-center border border-border text-main"
      >
        <img src="/image/search.svg" alt="" />
        <input
          class="outline-none border-none"
          type="text"
          :value="query"
          @input="onSearch()"
          name=""
          id=""
          placeholder="Search"
        />
      </div>
    </div>
  </div>
</template>
