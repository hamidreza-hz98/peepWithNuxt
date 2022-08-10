<template>
    <v-col cols="2">
        <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" v-bind="attrs" v-on="on">
                        New Client
                    </v-btn>
                </template>
                <v-card>
                    <v-form v-model="form.valid" ref="form" @submit.prevent="submitForm">
                        <v-toolbar dark color="primary">
                            <v-btn icon dark @click="dialog = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title>Settings</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn type="submit" dark text>
                                    Save
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
                                            <v-text-field v-model="form.firstName" :rules="form.firstNameRules"
                                                label="First Name" />
                                        </v-col>
                                        <v-col>
                                            <v-text-field v-model="form.lastName" :rules="form.lastNameRules"
                                                label="Last Name" />
                                        </v-col>
                                    </v-row>
                                    <v-text-field v-model="form.mobile" :rules="form.mobileRules" label="Mobile" />
                                    <v-text-field v-model="form.sendNotificationsBy" label="Send notifications by" />
                                    <v-text-field v-model="form.preferredLanguage" :rules="form.preferredLanguageRules"
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
                                            <v-select v-model="form.gender" :rules="form.genderRules" label="Gender"
                                                :items="['Male', 'Female']" />
                                        </v-col>
                                        <v-col>
                                            <v-select v-model="form.referralSource" :items="referralSource"
                                                label="Referral Source" />
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-select v-model="form.birthDay" :rules="form.birthDayRules"
                                                :items="birthDay" placeholder="6" />
                                        </v-col>
                                        <v-col>
                                            <v-select v-model="form.birthMonth" :rules="form.birthMonthRules"
                                                :items="birthMonth" placeholder="August" />
                                        </v-col>
                                        <v-col>
                                            <v-select v-model="form.birthYear" :rules="form.birthYearRules"
                                                :items="birthYear" placeholder="1996" />
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
                                    <v-text-field v-model="form.houseNumber"
                                        label="House number /Building / Apartment" />
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
    data() {
        return {
            dialog: false,
            form: {
                valid: false,
                firstName: '',
                lastName: '',
                mobile: '',
                sendNotificationsBy: '',
                preferredLanguage: '',
                gender: '',
                referralSource: '',
                birthYear: '',
                birthMonth: '',
                birthDay: '',
                notes: '',
                area: '',
                block: '',
                street: '',
                avenue: '',
                houseNumber: '',
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
            },
            countries: [
                'Iran',
                'USA',
                'Kuwait',
                'UAE',
                'UK',
                'Italy',
                'Japan',
                'Brazil',
            ],
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
        resetForm() {
            this.$refs.form.reset()
        },
        submitForm() {
            if (this.$refs.form.validate()) {
                this.$emit('onSubmit', this.form)
                this.dialog = false
                this.resetForm()
                console.log(this.$refs.form.validate());
            }
        },


    }
}
</script>