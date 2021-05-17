<template>
    <div class="slogan marquee">
        <div class="track">
            <div class="content">
                &nbsp; {{ sloganText + " " + sloganText + " " + sloganText + " " + sloganText }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "SloganBox",
    props: {
        sloganText : {
            type: String,
            default: "Slow, Glow"
        }
    },
}
</script>
<style scoped>
    .marquee {
        position: relative;
        width: 100vw;
        max-width: 100%;
        height: 11rem;
        overflow-x: hidden;
    }
    .track {
        position: absolute;
        white-space: nowrap;
        will-change: transform;
        animation: marquee 30s linear infinite;
    }
    .content{
        font-family: 'Advent Pro', sans-serif;
        font-size: 7rem;
        font-weight: 100;
        margin-top: 2rem;
    }

    @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-49.5%); }
    }
</style>