<template>
    <FormShell>
        <template v-slot:FormTitle>
            <div class="flex flex-col w-full">
                <FormTitle FormTitle="Create User" />
            </div>
        </template>
        <template v-slot:Form>
            <div class="flex flex-col w-full my-5">

                <div class="flex flex-col gap-5 ">
                    <Input LabelTitle="Full Name" type="name" placeholder="Insert name" required v-model="Name" />
                    <Input LabelTitle="Email" type="email" placeholder="Insert email" required v-model="Email" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <Input LabelTitle="NIF" type="number" placeholder="Insert NIF" required v-model="NIF" />
                    <Input LabelTitle="Internal Code" type="text" placeholder="Insert internal code" required v-model="InternalCode" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row">
                    <Input LabelTitle="Phone Number" type="number" placeholder="Insert phone" required v-model="PhoneNumber" />
                    <Input LabelTitle="Birthday Date" type="date" placeholder="Insert Birthday Date" required v-model="BirthdayDate" />
                </div>

                <Input LabelTitle="Address" type="address" placeholder="Insert your address" required v-model="address" class="mt-5" />

                <div class="flex flex-col gap-5 mt-5 md:flex-row md:mt-5">
                    <Input LabelTitle="City" type="" placeholder="Insert your city" required v-model="city" />
                    <Input LabelTitle="State/Province" type="" placeholder="Insert your state/province" required
                        v-model="state" />
                </div>

                <div class="flex flex-col gap-5 mt-5 md:flex-row ">
                    <Input LabelTitle="Zip Code" type="number" placeholder="Insert your zip code" required
                        v-model="zipCode" />
                    <Input LabelTitle="Country" type="" placeholder="Insert your country" required v-model="country" />
                </div>

            </div>
        </template>
        <template v-slot:ButtonSubmit>
            <div class="flex justify-center mx-10">
                <ButtonSubmit textButton="Create User" />
            </div>
        </template>
    </FormShell>
</template>

<script>
    import FormShell from '../../layout/FormShell.vue';
    import FormTitle from '../../components/Form/FormTitle.vue';
    import Input from '../../components/Form/Input.vue';
    import ButtonSubmit from '../../components/Form/ButtonSubmit.vue';

    export default {
    components: { 
        FormShell,
        FormTitle,
        Input,
        ButtonSubmit
    }, 
}
</script>
