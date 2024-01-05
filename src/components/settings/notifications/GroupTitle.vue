<template>
    <div>
        <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between text-purple text-base font-bold my-auto w-full pl-1 pb-2 border-b-2 border-purple">{{ title }}
                <FilterType />
            </div>
        </div>
    </div>
</template>

<script>
import CheckBox from './CheckBox.vue'
import FilterType from './FilterType.vue'
export default {
    components: {
        CheckBox,
        FilterType
    },
    props: {
        title: {
            type: String,
            required: true
        }
    },
}
</script>
