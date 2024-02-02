import { useToast } from "vue-toastification";

export default function useCustomToast() {
    const toast = useToast();

    const triggerToast = (message, type) => {
        toast[type](message, {
            position: "top-right",
            timeout: 3000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            draggablePercent: 0.6,
            showCloseButtonOnHover: true,
            hideProgressBar: true,
            closeButton: "button",
            icon: true,
            rtl: false
        });
    }

    return { triggerToast };
}