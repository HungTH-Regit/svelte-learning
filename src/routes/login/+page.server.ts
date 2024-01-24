import { validateEmail } from '$lib/js/helper';
import { fail, redirect } from '@sveltejs/kit';

const db = [
    {
        id: 1,
        mail_address: 'hung@gmail.com',
        password: '12345',
    },
    {
        id: 2,
        mail_address: 'hung2@gmail.com',
        password: '12345',
    },
    {
        id: 3,
        mail_address: 'hung3@gmail.com',
        password: '12345',
    },
]

export function load() {
    return {
        users: db
    }
}

export const actions = {
    login: async ({ cookies, request }: any) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')

        if (!email || !password) {
            return fail(422, { error: 'The email or password field is required' })
        }
        if (validateEmail(email)) {
            return fail(422, { error: 'Invalid email' })
        }

        const incorrect = db.some((item: any) => (item.password == password && item.mail_address === email))
        if (!incorrect) {
            return fail(422, { error: 'Email or password is incorrect' })
        }

        return redirect(300, '/')
    },
    register: async ({cookies, request}: any) => {
        const data = await request.formData()
        const email = data.get('email')
        const password = data.get('password')

        if (validateEmail(email)) {
            return fail(422, { error: 'Invalid email' })
        }

        if (!email || !password) {
            return fail(422, { error: 'The email or password field is required' })
        }
    }
}


