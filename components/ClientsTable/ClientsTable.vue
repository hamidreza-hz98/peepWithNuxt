<!-- In this component We just have the "Clients Table"
    The headers are defined statically
    But the main rows are created by user
 -->
<template>
    <v-data-table :headers="headers" :items="items" :search="search" :items-per-page="5" @click:row="openProfile"
        class="elevation-1">
    </v-data-table>
</template>

<script>
export default {
    props: ['items', 'search'],
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
        //With clicking a specific client on the table, we'll
        //be redirected to the client's profile page
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