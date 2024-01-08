<template>
    <div class="w-full flex flex-col">
        <div class="flex-none">
            <slot name="header"></slot>
        </div>
        <div class="flex-none">
            <slot name="sidebar"></slot>
        </div>
        <div class="flex-1 relative">
            <slot></slot>
        </div>
    </div>
</template>