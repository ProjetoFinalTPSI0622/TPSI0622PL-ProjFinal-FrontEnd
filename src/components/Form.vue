<template>
    <FormShell>
        <template v-slot:FormTitle>
            <div class="flex flex-col w-full">
                <FormTitle FormTitle="User Information" />
            </div>
        </template>
        <template v-slot:Form>
            <div class="flex flex-col w-full gap-3">
                <div class="flex justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                    <Input LabelTitle="Full Name" type="name" placeholder="Insert your name" required v-model="name" />
                    <Input LabelTitle="Email" type="email" placeholder="Insert your email" required v-model="email" />
                </div>
                <Input LabelTitle="Address" type="address" placeholder="Insert your address" required v-model="address" />
                <div class="flex justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                    <Input LabelTitle="City" type="" placeholder="Insert your city" required v-model="city" />
                    <Input LabelTitle="State/Province" type="" placeholder="Insert your state/province" required v-model="state" />
                </div>
                <div class="flex justify-between gap-5 mt-5 max-md:max-w-full max-md:flex-wrap">
                    <Input LabelTitle="Zip Code" type="number" placeholder="Insert your zip code" required v-model="zipCode" />
                    <Input LabelTitle="Country" type="" placeholder="Insert your country" required v-model="country" />
                </div>
            </div>
        </template>
        <template v-slot:ButtonSubmit>
            <ButtonSubmit textButton="Update Information" />
        </template>
    </FormShell>
</template>

<script>
import FormShell from '../layout/FormShell.vue';
import FormTitle from './FormTitle.vue';
import Input from './Input.vue';
import ButtonSubmit from './ButtonSubmit.vue';

export default {
    components: {
        FormShell,
        FormTitle,
        Input,
        ButtonSubmit
    },
    data() {
        return {
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
        }
    }
}
</script>
