<template>
	<v-col cols="2">
		<v-row justify="center">
			<v-dialog :value="value" fullscreen hide-overlay transition="dialog-bottom-transition">
				<v-card>
					<v-form ref="form" @submit.prevent="submitForm()">

						<v-toolbar dark color="primary">

							<v-btn icon dark @click="close()">
								<v-icon>mdi-close</v-icon>
							</v-btn>

							<v-toolbar-title>Settings</v-toolbar-title>
							<v-spacer></v-spacer>
							<v-toolbar-items>
								<v-btn type="submit" dark text>
									{{
											this.client.length ? "Edit" : "Save"
									}}
								</v-btn>
							</v-toolbar-items>
						</v-toolbar>

						<v-expansion-panels accordion multiple>
							<v-expansion-panel>
								<v-expansion-panel-header>
									Personal details
									<v-subheader>Check & manage name, phone and more about this staff</v-subheader>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<v-row>
										<v-col>
											<v-text-field v-model="form.firstName" :rules="firstNameRules" label="First Name" />
										</v-col>
										<v-col>
											<v-text-field v-model="form.lastName" :rules="lastNameRules" label="Last Name" />
										</v-col>
									</v-row>
									<v-text-field v-model="form.mobile" :rules="mobileRules" label="Mobile" />
									<v-text-field v-model="form.sendNotificationsBy" label="Send notifications by" />
									<v-text-field v-model="form.preferredLanguage" :rules="preferredLanguageRules"
										label="Preferred Language" />
								</v-expansion-panel-content>

							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header>
									Additional details
									<v-subheader>Check & gender, birth date, client notes, etc.</v-subheader>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<v-row>
										<v-col>
											<v-select v-model="form.gender" :rules="genderRules" label="Gender" :items="['Male', 'Female']" />
										</v-col>
										<v-col>
											<v-select v-model="form.referralSource" :items="referralSource" label="Referral Source" />
										</v-col>
									</v-row>
									<v-row>
										<v-col>
											<v-select v-model="form.birthDay" :rules="birthDayRules" :items="birthDay" placeholder="6" />
										</v-col>
										<v-col>
											<v-select v-model="form.birthMonth" :rules="birthMonthRules" :items="birthMonth"
												placeholder="August" />
										</v-col>
										<v-col>
											<v-select v-model="form.birthYear" :rules="birthYearRules" :items="birthYear"
												placeholder="1996" />
										</v-col>
									</v-row>
									<v-textarea v-model="form.notes" outlined name="input-7-4" label="Notes">
									</v-textarea>
								</v-expansion-panel-content>

							</v-expansion-panel>
							<v-expansion-panel>
								<v-expansion-panel-header>
									Address
									<v-subheader>Check & manage Avenue, Block, Street, Area, etc. </v-subheader>
								</v-expansion-panel-header>

								<v-expansion-panel-content>
									<v-text-field v-model="form.area" label="Area" />
									<v-text-field v-model="form.block" label="block" />
									<v-text-field v-model="form.street" label="Street" />
									<v-text-field v-model="form.avenue" label="Avenue" />
									<v-text-field v-model="form.houseNumber" label="House number /Building / Apartment" />
								</v-expansion-panel-content>

							</v-expansion-panel>
						</v-expansion-panels>
					</v-form>
				</v-card>
			</v-dialog>
		</v-row>
	</v-col>
</template>

<script>
export default {
	//value: to show/hide the modal
	//client: the object of the specific client (whom we are in his/her profile)
	props: ['value', 'client'],
	data() {
		return {
			//form data goes here, if the client contains data, it will be shown on the
			//form, otherwise; empty string
			form: {
				firstName: this.client.firstName || '',
				lastName: this.client.lastName || '',
				mobile: this.client.mobile || '',
				sendNotificationsBy: this.client.sendNotificationsBy || '',
				preferredLanguage: this.client.preferredLanguage || '',
				gender: this.client.gender || '',
				referralSource: this.client.referralSource || '',
				birthYear: this.client.birthYear || '',
				birthMonth: this.client.birthMonth || '',
				birthDay: this.client.birthDay || '',
				notes: this.client.notes || '',
				area: this.client.area || '',
				block: this.client.block || '',
				street: this.client.street || '',
				avenue: this.client.avenue || '',
				houseNumber: this.client.houseNumber || '',
			},

			//Rules based on the prototype are implemented here...
			firstNameRules: [
				v => !!v || 'Please enter your First name'
			],
			lastNameRules: [v => !!v || 'Please enter your last name'],
			mobileRules: [
				v => !!v || 'Please enter your mobile number',
				v => /[0-9]/.test(v) || 'Please enter numbers'
			],
			preferredLanguageRules: [v => !!v || 'Please enter your preferred language'],
			genderRules: [v => !!v || 'Please enter your gender'],
			birthDayRules: [v => !!v || 'Please enter your birthday'],
			birthMonthRules: [v => !!v || 'Please enter your birthday month'],
			birthYearRules: [v => !!v || 'Please enter your birth year'],

			//data for select menu
			referralSource: [
				"Source 1",
				"Source 2",
				"Source 3",
			],
			birthDay: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
			birthMonth: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			],
			birthYear: [1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],





		}
	},
	methods: {
		//the main Nuxt reset() shingled my app,
		//so I wrote my own form resetter
		resetForm() {
			this.$refs.form.resetValidation()
			this.form = {
				firstName: this.client.firstName || '',
				lastName: this.client.lastName || '',
				mobile: this.client.mobile || '',
				sendNotificationsBy: this.client.sendNotificationsBy || '',
				preferredLanguage: this.client.preferredLanguage || '',
				gender: this.client.gender || '',
				referralSource: this.client.referralSource || '',
				birthYear: this.client.birthYear || '',
				birthMonth: this.client.birthMonth || '',
				birthDay: this.client.birthDay || '',
				notes: this.client.notes || '',
				area: this.client.area || '',
				block: this.client.block || '',
				street: this.client.street || '',
				avenue: this.client.avenue || '',
				houseNumber: this.client.houseNumber || '',
			}
		},

		//The form data gets sent to its parent
		//The parent could be wether "New Client" or "Edit Client" pages
		submitForm() {
			if (this.$refs.form.validate()) {
				this.$emit('onSubmit', this.form)
				this.close()
				this.resetForm()
			}
		},

		//Simple event handler for closing the modal
		close() {
			this.$emit('input', false)
		}


	}
}
</script>