<template>
    <v-col cols="3">
        <v-text-field @input="search()" :value="value" label="Search" prepend-inner-icon="mdi-magnify" solo>
        </v-text-field>
    </v-col>
</template>

<script>
export default {
    //props: ['value'],
    data() {
        return {
            value: ''
        }
    },
    methods: {
        search() {
            this.$emit('input', this.value)
        }
    }
}
</script>