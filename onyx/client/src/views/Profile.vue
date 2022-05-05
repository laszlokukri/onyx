<template>
    <div class="mx-auto" style="width: 50rem;">
        <ul class="list-group my-5" v-if="user">
            <li class="list-group-item">Email: {{ user.email }}</li>
            <li class="list-group-item">Felhasználónév: {{ user.username }}</li>
            <li class="list-group-item">Név: {{ user.name }}</li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapGetters} from "vuex";
export default {
    computed:mapGetters(["user"]),
    methods: {
        ...mapActions(["getProfile"])
    },
    created() {
        this.getProfile();
    },
}
</script>