<template>
    <v-hover v-slot="{ isHovering, props }">
        <v-card 
            class="pa-4 my-4 topic-card" 
            :elevation="isHovering ? 3 : 0"  
            v-bind="props"
        >
            <v-card-text class="d-flex flex-row align-center justify-space-between">

                <p>{{ title }}</p>
                
                <div class="wrapper">

                    <v-avatar size="x-small" :image="leftImg"></v-avatar>

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

            </v-card-text>
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
        },
    },
    data() {
        return {
            leftImg: new URL(this.image, import.meta.url).href,
        }
    },
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
.wrapper {
    display: flex;   
    align-items: center;
    justify-content: center;
    gap: 16px;
}
.v-card--variant-elevated, .v-card--variant-flat {
    background: none !important;
    border-radius: 0;
    border-bottom: 0.1px groove #26466D;
}

</style>
