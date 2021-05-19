<template>
    <div class="container gardenerWrap">
        Gardener
    </div>
</template>

<script>
export default {
    data() {
        return {
        title: 'Garden ::: Gardener'
        }
    },
    head() {
        return {
        title: this.title,
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: 'Auto gardener'
            }
        ]
        }
    }
}
</script>