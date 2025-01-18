<template>
    <v-card
        class="mx-1 titleCard"
        width="100%"
        rounded="lg"
        color='var(--color-dark-blue)'
        :subtitle='"by "+ (author ? author.name : "Unknown")'
        :append-avatar="author ? author.picture || ' ' : '' "
    >
        <v-divider class="mx-4 mt-0" thickness="3" color="var(--color-light-blue)"></v-divider>
        <v-card-text>{{ comment }}</v-card-text>

        <!-- <v-textarea 
            :comment
            label="/Leave a comment"
            underlined
            auto-grow
            clearable
            counter
            dense
            row-height="15"
            rows="1"
            :rules="commentRules"
            required
            class="px-3">
        </v-textarea>

        <SubmitBtn value="Post" @submit="submitComment"/> -->

    </v-card>
</template>

<script>
import SubmitBtn from './SubmitBtn.vue';

    export default {
        components: {
            SubmitBtn
        },
        data() {
            return {
            }
        },
        props: {
            author: {
                type: Object,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
            // likes: {
            //     type: Number,
            // }
        },
    }
    
</script>

<style scoped>
.titleCard{
    color: var(--color-white);
}
</style>