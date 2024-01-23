import Echo from "laravel-echo";
import Pusher from "pusher-js";

 const echo = new Echo({
    broadcaster: 'pusher',
    key: import.meta.env.VUE_APP_PUSHER_APP_KEY,
    wsHost: import.meta.env.VUE_APP_PUSHER_APP_SERVER,
    wsPort: import.meta.env.VUE_APP_PUSHER_APP_PORT,
    encrypted: true,
    forceTLS: false,
    disableStats: true,
    client: Pusher,
});

export default echo;
