<template>
    <v-container>
        <v-row>
            <v-col cols="3">
                <v-btn @click="!this.openModal">Edit</v-btn>
                <ModalForm v-show="this.openModal" />
                <h3>{{ this.client.name }} </h3>
                <v-btn color="primary">New Appointment</v-btn>
                <br />
                <br />
                <v-btn-toggle>
                    <v-btn>Block</v-btn>
                    <v-btn>VIP</v-btn>
                </v-btn-toggle>
                <ClientInfoTypo v-for="data in profile" :key="data.title" :title="data.title" :value="
                client[data.value]" />
            </v-col>
            <v-col cols="9">
                <v-row>
                    <v-col>
                        <v-sheet color="white" elevation="1" height="95px" width="376px">KD 0</v-sheet>
                    </v-col>
                    <v-col>
                        <v-sheet color="white" elevation="1" height="95px" width="376px">KD 0</v-sheet>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-sheet color="white" elevation="1" height="88px" width="167px">All Bookings</v-sheet>
                    </v-col>
                    <v-col>
                        <v-sheet color="white" elevation="1" height="88px" width="167px">Completed</v-sheet>
                    </v-col>
                    <v-col>
                        <v-sheet color="white" elevation="1" height="88px" width="167px">Cancelled</v-sheet>
                    </v-col>
                    <v-col>
                        <v-sheet color="white" elevation="1" height="88px" width="167px">No Shows</v-sheet>
                    </v-col>
                </v-row>
                <v-tabs>
                    <v-tab>Item One</v-tab>
                    <v-tab>Item Two</v-tab>
                    <v-tab>Item Three</v-tab>

                    <v-tab-item>
                        <v-card>
                            <v-card-text>
                                <p>This is Item one</p>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card>
                            <v-card-text>
                                <p>This is Item two</p>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card>
                            <v-card-text>
                                <p>This is Item three</p>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ModalForm from '../../../components/ModalForm/ModalForm.vue'
export default {
    computed: {
        clients() {
            return this.$store.state.clients;
        },
        client() {
            const clientPhone = this.$route.params.clientsId;
            const client = this.clients.filter(client => (client.mobile === clientPhone))[0];
            return client;
        }
    },
    mounted() {
    },
    data() {
        return {
            openModal: false,
            profile: [
                { title: "Mobile", value: "mobile" },
                { title: "Email", value: "email" },
                { title: "Date of Birth", value: "dateOfBirth" },
                { title: "Gender", value: "gender" },
                { title: "Client Notes", value: "notes" },
                { title: "Area", value: "area" },
                { title: "Block", value: "block" },
                { title: "Street", value: "street" },
                { title: "Avenue", value: "avenue" },
                { title: "House/Building/Apartment #", value: "houseNumber" },
            ]
        };
    },
    components: { ModalForm }
}
</script>