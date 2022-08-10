<template>
    <v-data-table :headers="headers" :items="items" :items-per-page="5" @click:row="openProfile" class="elevation-1">
    </v-data-table>
</template>

<script>
export default {
    props: {
        items: {
            default: () => [],
            type: Array
        }
    },
    data() {
        return {
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'Mobile', value: 'mobile' },
                { text: 'Email', value: 'email' },
                { text: 'Status', value: 'status' },
            ],

        }
    },
    methods: {
        openProfile(client) {
            this.$router.push({
                path: `/clients/${client.mobile}`,
                params: {
                    client
                }
            })
        }
    }
}
</script>