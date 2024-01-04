import VueCookies from 'vue-cookies'

export const CookiesService = {
    saveTokenToCookie: async (token) => {
        VueCookies.set('token', token, '30d', null, null, true, 'Strict');
    },
    getTokenFromCookie: async () => {
        return VueCookies.get('token');
    },
    deleteTokenFromCookie: async () => {
        VueCookies.remove('token');
    }
}
