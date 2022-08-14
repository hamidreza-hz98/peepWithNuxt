<template>
    <v-app-bar :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click="changeDrawer()" />
        <v-toolbar-title v-text="title" />
        <v-spacer />
        <v-icon>mdi-magnify</v-icon>
        <v-icon>mdi-bell-outline</v-icon>
        <v-avatar color="primary" size="38">
            <span class="white--text">CJ</span>
        </v-avatar>
    </v-app-bar>
</template>

<script>
export default {
    props: ['clipped'],
    data() {
        return {
            title: 'Clients'
        }
    },
    methods: {
        changeDrawer() {
            this.$emit('toggleDrawer')
        },
    },
}
</script>