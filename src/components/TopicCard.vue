<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card 
            class="pa-4 my-4 topic-card" 
            :elevation="isHovering ? 16 : 6" 
            rounded="lg" 
            v-bind="props"
        >
            <v-card-item class="d-flex flex-row align-center">
                <!-- Title Section -->
                <v-card-title class="title-section">
                    {{ title }}
                </v-card-title>

                <!-- Spacer to separate title from other content -->
                <div class="flex-grow-1"></div>

                <!-- Right Section: Image, Author, Stats -->
                <div class="d-flex flex-row align-center gap-4">
                    <!-- Image -->
                    <v-img 
                        v-if="image" 
                        :alt="title" 
                        :src="image" 
                        cover 
                        max-width="50px" 
                        max-height="50px" 
                        class="topic-image" 
                        rounded="lg">
                    </v-img>

                    <!-- Author -->
                    <div class="topic-author">
                        <p>{{ author }}</p>
                    </div>

                    <!-- Stats -->
                    <div class="topic-stats">
                        <p>Likes: {{ likes }}</p>
                        <p>Comments: {{ comments }}</p>
                    </div>
                </div>
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
            required: false // Optional
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
.title-section {
    font-weight: bold;
    font-size: 18px;
}
.v-card-item__content {
    display: flex;
    flex-direction: row;
}
.topic-image {
    flex-shrink: 0;
}

.topic-author {
    font-size: 14px;
    margin: 0;
    color: gray;
}

.topic-stats {
    display: flex;
    gap: 8px;
    font-size: 14px;
    margin: 0;
    text-align: right;
}

.gap-4 > * {
    margin-left: 16px; /* Adds consistent spacing between right-side items */
}
</style>
