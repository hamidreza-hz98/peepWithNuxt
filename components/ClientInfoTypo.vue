<template>
    <v-container>
        <p>{{ title }}</p>
        <p>{{ value }}</p>
    </v-container>
</template>

<script>
export default {
    props: ['title', 'value']
}
</script>