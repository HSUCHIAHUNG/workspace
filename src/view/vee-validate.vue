<script setup>
import { useField } from 'vee-validate';
import { defineProps } from 'vue';
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required';
}
// make sure to wrap the name in a function to maintain its reactivity
// this way vee-validate can react to the field name changing
const { errorMessage, value } = useField(() => props.name, isRequired);
</script>

<template>
  <div>
    <input v-model="value" type="text" />
    <span>{{ errorMessage }}</span>
  </div>
</template>