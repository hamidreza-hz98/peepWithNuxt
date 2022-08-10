<template>
    <form @submit.prevent="submitForm">
        <v-expansion-panels accordion multiple>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    Personal details
                    <v-subheader>Check & manage name, phone and more about this staff</v-subheader>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col>
                            <v-text-field v-model="form.firstName" label="First Name" />
                        </v-col>
                        <v-col>
                            <v-text-field v-model="form.lastName" label="Last Name" />
                        </v-col>
                    </v-row>
                    <v-select :items="countries" label="Country" outlined />
                    <v-text-field v-model="form.sendNotificationsBy" label="Send notifications by" />
                    <v-text-field v-model="form.preferredLanguage" label="Preferred Language" />
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
                            <v-select v-model="form.gender" label="Gender" :items="['Male', 'Female']" />
                        </v-col>
                        <v-col>
                            <v-select v-model="form.referralSource" :items="referralSource" label="Referral Source" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-select v-model="form.birthYear" :items="birthYear" placeholder="1996" />
                        </v-col>
                        <v-col>
                            <v-select v-model="form.birthMonth" :items="birthMonth" placeholder="August" />
                        </v-col>
                        <v-col>
                            <v-select v-model="form.birthDay" :items="birthDay" placeholder="Thursday" />
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
    </form>
</template>

<script>
export default {
    data() {
        return {

            form: {
                firstName: '',
                lastName: '',
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
            birthDay: [
                "Saturday",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
            ],
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
            birthYear: [1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000]
        }
    },
    methods: {
        submitForm() {
            const form = {
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                sendNotificationsBy: this.form.sendNotificationsBy,
                preferredLanguage: this.form.preferredLanguage,
                gender: this.form.gender,
                referralSource: this.form.referralSource,
                birthYear: this.form.birthYear,
                birthMonth: this.form.birthMonth,
                birthDay: this.form.birthDay,
                notes: this.form.notes,
                area: this.form.area,
                block: this.form.block,
                street: this.form.street,
                avenue: this.form.avenue,
                houseNumber: this.form.houseNumber,
            }

            console.log(form);
        }
    }
}
</script>