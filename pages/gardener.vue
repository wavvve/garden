<template>
    <div class="container gardenerWrap">
        <Worklist apiUrl="https://api.design-garden.shop/botlists" orderKey="id" />
        <Slogan :sloganText="sloganMessage" />
    </div>
</template>

<script>
import Slogan from '../components/Slogan.vue'
import Worklist from '../components/Worklist.vue'

export default {
    components: { Slogan, Worklist },
    data() {
        return {
            title: 'Garden ::: Gardener',
            sloganMessage: "Slow walk, Glow work.",
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