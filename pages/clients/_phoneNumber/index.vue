<template>
	<v-container>
		<v-row>

			<v-col cols="3">
				<v-btn @click="openEditClientDialog()">Edit</v-btn>
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

			<!-- Data below is static with no functionality -->
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

		<ModalForm v-if="openEditClient" v-model="openEditClient" :client="client" @onSubmit="editClient($event)" />
	</v-container>
</template>

<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import ModalForm from '../../../components/ModalForm/ModalForm.vue'

export default {
	//In computed{} , I get clients array and find the specific 
	//client I'm looking for, thanks to store selectors! 
	computed: {
		...mapState({ clients: 'clients' }),
		...mapGetters({ getClientByPhoneNumber: 'getClientByPhoneNumber' }),
		client() {
			const mobile = this.$route.params.phoneNumber;
			return this.getClientByPhoneNumber(mobile) || {}
		}
	},

	data() {
		return {
			//simple modal controller, I pass this shit to the <ModalForm /> component
			openEditClient: false,

			//The profile information components are created 
			//dynamically by this lovely array
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

	components: { ModalForm },

	methods: {
		openEditClientDialog() {
			this.openEditClient = true
		},
		//New information is sent to the vueX store
		editClient(updatedClient) {
			this.$store.commit('updateClient', updatedClient)
		}
	}
}
</script>