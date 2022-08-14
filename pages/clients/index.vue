<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" solo>
                </v-text-field>
            </v-col>
            <v-spacer />
            <v-btn color="primary" @click="openNewClientDialog()">Add</v-btn>
            <ModalForm v-model="openNewClient" :client="client" @onSubmit="addClient($event)" />
        </v-row>
        <ClientsTable :items="clients" :search="search" />
    </v-container>
</template>

<script>
import ClientsTable from '../../components/ClientsTable/ClientsTable.vue'
import ModalForm from '../../components/ModalForm/ModalForm.vue'
import SearchClient from '../../components/SearchClient.vue'
import { mapState } from 'vuex'

export default {
    //Here we get the clients list from the store to sow them on the table
    computed: {
        ...mapState({ clients: 'clients' })
    },

    components: { ClientsTable, ModalForm, SearchClient },

    data() {
        return {
            openNewClient: false,
            search: '',
            //I pass empty object to the modal when creating a new client so that
            // we won't get undefined error
            client: {}
        }
    },

    methods: {
        //Here we just call the mutation from the store
        addClient(client) {
            this.$store.commit('addClient', client)
        },

        openNewClientDialog() {
            this.openNewClient = true
        }
    }
}
</script>
