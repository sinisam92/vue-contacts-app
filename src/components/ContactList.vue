<template>
    <div>
        <p>Contact List</p>
        <ul>
            <li v-for="contact in contacts" :key="contact.id">
                {{ contact.first_name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'ContactList',
    created() {
        this.getContacts();
    },
    methods: {
        ...mapActions([
            'getContacts'
        ])
    },
    computed: {
    ...mapGetters({
            contacts: 'getContactsData',
            current_page: 'getCurrentPage',
            total: 'getTotalNumberOfContacts',
            per_page: 'getNumberOfContactsPerPage'
        })
    }
}
</script>

<style>

</style>
