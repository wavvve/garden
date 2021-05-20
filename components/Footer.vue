<template>
    <div class="footer top_line">
        <div class="info" :class="{ vertical_line:$device.isDesktop, bottom_line:$device.isMobile }">
            <ul class="sns">
                <li><a class="hoverLine" href="https://www.instagram.com/be_tofu_life/" target="_blank">Instagram</a></li>
                <li><a class="hoverLine" href="https://github.com/wavvve" target="_blank">Github</a></li>
                <li><a class="hoverLine" href="mailto:ppk1324@naver.com" target="_blank">Email</a></li>
            </ul>
            
            <span class="title">Design GARDEN</span>
            <span class="copyright">ⓒ DesignGARDEN. All rights reserved.</span>
        </div>
        <div class="essay" :class="{ vertical_line:$device.isDesktop, bottom_line:$device.isMobile }">
            <span>
                <b>Slow glow in GARDEN.</b>
                디자인 가든의 디자인이 의미있게 쓰이길 원합니다. 쉽게 만들기보다
                오랫동안 쓰임새 있게 만들어지는 것. 정확한 가치를 담는 것. 나중에
                발견할 수 있는 것. 이것들을 발견하고 여러분과 나누기 위한 경험이
                되겠습니다.
                <b>Do not stop</b>
                천천히 오랫동안 가치를 담기위해 브랜딩, 그래픽, 개발을 중점으로
                디자인에 담아내고 있습니다. 천천히 오랫동안 그것들을 좋아하여
                여러분들에게 그 좋음을 전달하려 합니다.
            </span>
            <span>
                <b>Product</b>
                Brand design, Editoral design, Web design, Develop.
            </span>
        </div>
        <div class="slogan">
            <span class="copyText">
                Slow, Grow,<br>
                Do not stop.
            </span>
            <div class="graphic">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "GardenFooter",
    data : function(){
        return {
        }
    },
    methods : {
    },
    updated(){
    }
}
</script>