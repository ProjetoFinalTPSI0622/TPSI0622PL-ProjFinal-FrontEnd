<template>
    <div class="bg-grey flex flex-col p-8 rounded-md border-b-opacity-50 border-b my-5 mb-12">
        <div class="flex gap-5 max-md:flex-col">
            
            <slot name="FormTitle"></slot>
            <slot name="Form" >
                <slot></slot>
                
            </slot>
            <slot name="ButtonSubmit"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
