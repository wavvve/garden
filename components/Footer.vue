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
                가치를 발견하고 시선을 그것으로 돌리는 것이 자연스럽습니다.
                그 흐름을 만들어가기 위해 천천히 둘러보려 합니다. 인상들들
                속에서 새롭게 피어나는 가치들을 발견하고 가꾸는 것을 멈추지 않는다면
                느리게 보고 깊히 느낄 수 있습니다. 모든 것이 빠르게 지나가는 지금,
                멈춰진 듯 그 자리에 있는 것들, 나중에서야 발견하게 되는 것들,
                달리 볼 수 있었던 것들을 저희가 먼저 돌보고 있겠습니다.
                <b>Do not stop</b>
                다양한 가치의 표현을 위해 컨셉 디자인, 사용자경험, 제책의 경험을
                쌓아 나가고 있습니다. 가치처럼 펼쳐진 경험들이 가르키는 그 방향이
                여러분에게 전달하기 위해 그 걸음을 멈추지 않습니다.
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