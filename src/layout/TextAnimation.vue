<template>
    <div class="flex flex-col justify-center content-center w-full h-[50%]">
        <h1 class="text-center">
            <div class="animation">
                <span class="first text-purple">Cesae</span>
                <span class="overflow-hidden inline-flex">
                    <span class="second text-pink">Desk</span>
                </span>
            </div>
        </h1>
    </div>
</template>
  
<style scoped>
.animation {
    text-align: center;
    text-transform: uppercase;
    font-size: 50px;
    letter-spacing: 1px;
    display: inline-block;
    animation: fadeIn 1.5s forwards;
    opacity: 0;
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.first {
    display: inline-block;
    animation: firstSpan 1.5s forwards cubic-bezier(0.785, 0.135, 0.15, 0.86);
    z-index: 1;
    position: relative;
    transition: color 0.5s ease;
}

.second {
    animation: secondSpan 1.5s forwards cubic-bezier(0.785, 0.135, 0.15, 0.86);
    font-weight: 100;
    z-index: -1;
    display: inline-block;
    transition: color 0.5s ease;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: scale(1);
    }

    50% {
        opacity: 1;
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes firstSpan {
    0% {
        transform: translateX(50%);
    }

    60% {
        transform: translateX(50%);
    }

    100% {
        transform: translateX(0%);
    }
}

@keyframes secondSpan {
    0% {
        transform: translateX(-100%);
    }

    60% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(-0%);
    }
}
</style>
  