<template>
    <div class="container contactWrap">
        Contact
    </div>
</template>

<script>
export default {
    data() {
        return {
        title: 'Garden ::: Contact'
        }
    },
    head() {
        return {
        title: this.title,
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: 'Invite Garden'
            }
        ]
        }
    }
}
</script>