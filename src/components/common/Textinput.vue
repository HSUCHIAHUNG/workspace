<script setup>
import { useField } from 'vee-validate';
import { toRef, useSlots } from 'vue';

const slots = useSlots();

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  rules: {
    type: [Object, String, Array, Function],
    default: undefined,
  },
  label: {
    type: String,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const valueRef = toRef(props, 'value');
const nameRef = toRef(props, 'name');
const typeRef = toRef(props, 'type');
const rules = toRef(props, 'rules');
const labelRef = toRef(props, 'label');
const classRef = toRef(props, 'class');
const disabledRef = toRef(props, 'disabled');
const readonlyRef = toRef(props, 'readonly');
const maxLengthRef = toRef(props, 'maxLength');
const inputClassRef = toRef(props, 'inputClass');
const minRef = toRef(props, 'min');
const maxRef = toRef(props, 'max');
const showLabelRef = toRef(props, 'showLabel');
// eslint-disable-next-line no-unused-vars
const isTrimRef = toRef(props, 'isTrim');





</script>

<template>

    <label :for="nameRef" class=" flex flex-col gap-10px text-white p-t-5px"> 姓名
        <V-Field name="username" rules="required" placeholder="請輸入姓名" class=" rounded-5 p-10px border-none "></V-Field>
        <V-ErrMsg name="username" class="text-#EFC862 "></V-ErrMsg>
    </label>

</template>


