<template>
    <p>Contact list</p>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'ContactList',
    created() {
        this.getContacts();
    },
    methods: {
        ...mapActions([
            'getContacts'
        ])
    }
}
</script>

<style>

</style>
