<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
            <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <NavBar :clipped="clipped" @toggleDrawer="changeDrawer()" />

        <v-main>
            <Nuxt />
        </v-main>
    </v-app>
</template>

<script>
import NavBar from '../components/navBar.vue';
export default {
    name: "DefaultLayout",
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
