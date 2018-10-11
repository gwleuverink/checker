<template>
    <select>
        <option 
            v-for="(option, key) in options" 
            :key="key" 
            :value="option">{{ option[label] }}
        </option>
    </select>
</template>

<script>
export default {
    props: {
        options: {Object, required: true},
        label: { required: true }
    }
}
</script>

