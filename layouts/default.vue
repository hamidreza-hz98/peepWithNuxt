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
        <v-app-bar :clipped-left="clipped" fixed app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title v-text="title" />
            <v-spacer />
            <v-icon>mdi-magnify</v-icon>
            <v-icon>mdi-bell-outline</v-icon>
            <v-avatar color="primary" size="38">
                <span class="white--text">CJ</span>
            </v-avatar>
        </v-app-bar>

        <v-main>
            <Nuxt />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
            clipped: false,
            drawer: true,
            fixed: false,
            items: [
                {
                    icon: 'mdi-home',
                    title: 'Home',
                    to: '/home'
                },
                {
                    icon: 'mdi-calendar',
                    title: 'Calendar',
                    to: '/calendar'
                },
                {
                    icon: 'mdi-home',
                    title: 'Clients',
                    to: '/clients'
                },
                {
                    icon: 'mdi-home',
                    title: 'Staff',
                    to: '/staff'
                },
                {
                    icon: 'mdi-home',
                    title: 'Services',
                    to: '/services'
                },
                {
                    icon: 'mdi-home',
                    title: 'Offers',
                    to: '/offers'
                },
                {
                    icon: 'mdi-home',
                    title: 'Sales',
                    to: '/sales'
                },

            ],
            miniVariant: false,
            title: 'Vuetify.js'
        }
    }
}
</script>
