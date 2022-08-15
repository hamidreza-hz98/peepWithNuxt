<template>
    <v-app class="default" :style="cssProps">
        <v-navigation-drawer class="sidebar" color="primary" v-model="drawer" :clipped="clipped" fixed app>

            <v-container class="logo-container">
                <b>peep</b>
            </v-container>

            <v-list class="sidebar-options">
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
                    <v-list-item-action>
                        <v-icon class="sidebar-buttons">{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="sidebar-buttons" v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
                <div id="sidebar-settings">
                    <v-divider />
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon class="sidebar-buttons">mdi-home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="sidebar-buttons">Settings</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider />
                </div>
            </v-list>

        </v-navigation-drawer>

        <NavBar :clipped="clipped" @toggleDrawer="changeDrawer()" />

        <v-main class="main">
            <Nuxt />
        </v-main>
    </v-app>
</template>

<script>
import NavBar from '../components/navBar.vue';
export default {
    name: "DefaultLayout",

    computed: {
        cssProps() {
            const themeColors = {}
            Object.keys(this.$vuetify.theme.themes.light).forEach((color) => {
                themeColors[`--v-${color}`] = this.$vuetify.theme.themes.light[color]
            })
            return themeColors
        },
    },

    data() {
        return {
            clipped: false,
            drawer: true,
            fixed: false,
            items: [
                {
                    icon: "mdi-home",
                    title: "Home",
                    to: "/home"
                },
                {
                    icon: "mdi-calendar",
                    title: "Calendar",
                    to: "/calendar"
                },
                {
                    icon: "mdi-home",
                    title: "Clients",
                    to: "/clients"
                },
                {
                    icon: "mdi-home",
                    title: "Staff",
                    to: "/staff"
                },
                {
                    icon: "mdi-home",
                    title: "Services",
                    to: "/services"
                },
                {
                    icon: "mdi-home",
                    title: "Offers",
                    to: "/offers"
                },
                {
                    icon: "mdi-home",
                    title: "Sales",
                    to: "/sales"
                },
            ],
            miniVariant: false,
        };
    },
    methods: {
        changeDrawer() {
            this.drawer = !this.drawer
        }
    },
    components: { NavBar }
}
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand");

.default {
    font-family: 'Quicksand', 'Arial';
    font-weight: 500;
}
</style>