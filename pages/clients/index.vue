<template>
    <v-container>
        <v-row>
            <SearchClient />
            <v-spacer />
            <ModalForm @onSubmit="addClient($event)" />
        </v-row>
        <ClientsTable :items="clients" />
    </v-container>
</template>

<script>
import ClientsTable from '../../components/ClientsTable/ClientsTable.vue'
import NewClientForm from '../../components/NewClientForm.vue'
import ModalForm from '../../components/ModalForm/ModalForm.vue'
import SearchClient from '../../components/SearchClient.vue'
export default {
    computed: {
        clients() {
            return this.$store.state.clients
        }
    },
    components: { ClientsTable, NewClientForm, ModalForm, SearchClient },

    data() {
        return {
        }
    },
    methods: {
        addClient(client) {
            const newClient = {
                ...client,
                name: client.firstName + ' ' + client.lastName,
                dateOfBirth: client.birthDay + client.birthMonth + client.birthYear
            }
            this.$store.commit('addClient', newClient)
        }
    }
}
</script>
