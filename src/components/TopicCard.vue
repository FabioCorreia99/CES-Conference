<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card 
            class="pa-4 my-4 topic-card" 
            :elevation="isHovering ? 16 : 6" 
            max-height="200" 
            max-width="425" 
            rounded="lg" 
            v-bind="props"
        >
            <v-card-item density="comfortable" class="w-100 px-1">
                <v-card-title>{{ title }}</v-card-title>

                <v-img :alt="title" :src="image" cover class="topic-image" rounded="lg"></v-img>

                <div class="topic-author">
                    <p>{{ author }}</p>
                </div>

                <div class="topic-stats">
                    <p>Likes: {{ likes }}</p>
                    <p>Comments: {{ comments }}</p>
                </div>

                <!-- <hr> -->
            </v-card-item>
        </v-card>
    </v-hover>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        likes: {
            type: Number,
            default: 0
        },
        comments: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.topic-image {
    width: 100%;
    margin-bottom: 8px; /* Adjust spacing between image and text */
}

.topic-author {
    font-size: 14px;
    /* color: black; */
    margin-bottom: 4px;
}

.topic-stats {
    font-size: 14px;
    color: black !important;
}

.topic-stats span {
    margin-right: 10px;
}
</style>
