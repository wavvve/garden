<template>
    <div class="container aboutWrap">
        About
    </div>
</template>

<script>
export default {
    data() {
        return {
        title: 'Garden ::: About'
        }
    },
    head() {
        return {
        title: this.title,
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: 'about Design GARDEN'
            }
        ]
        }
    }
}
</script>

