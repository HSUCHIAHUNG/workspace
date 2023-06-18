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
  const isTrimRef = toRef(props, 'isTrim');

  const {
    value: inputValue,
    errorMessage,
    handleBlur,
    handleChange,
    meta,
    } = useField(nameRef, rules, {
      initialValue: valueRef.value,
      label: labelRef,
  });

  function handleChangeWithTrim(e) {
    inputValue.value = isTrimRef.value ? e.target.value.trim() : e.target.value;
    handleChange(inputValue.value);
  }


</script>

<template>
  
  <label :for="nameRef" :class="classRef" class=" flex flex-col text-white p-t-5px"> 
    <p class="mb-2 block text-left text-sm font-bold">{{labelRef}}</p>
    <div class="rounded-5  border-none bg-white overflow-hidden">

      <!-- <span v-if="slots['frontIcon']" class="ml-2 inline-block">
        <slot name="frontIcon"></slot>
      </span> -->

      <input class="w-full block rounded-5 box-border border-none bg-transparent p-8px"
        @input="handleChangeWithTrim"
        :value="inputValue"
        @blur="handleBlur"
        :id="nameRef"
        :name="nameRef"
        :type="typeRef"
        :placeholder="placeholder"
        :disabled="disabledRef"
        :readonly="readonlyRef"
        :maxlength="maxLengthRef"
        :min="minRef"
        :max="maxRef"
      >
      <!-- <span v-if="slots['backIcon']" class="mr-2 flex gap-2">
        <slot name="backIcon"></slot>
      </span> -->
      <slot name="button" />
    </div>
    <transition name="fade">
      <p v-if="errorMessage" class="mt-2 text-left text-sm text-#EFC862 "><span class="font-medium">{{errorMessage}}</span> </p>
    </transition>
    
  </label>

</template>


