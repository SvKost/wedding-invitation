'use server';

import { signIn, signOut } from '@/auth';

export async function doSocialLogin(formData) {
  const action = formData.get('action');
  await signIn(action, { redirectTo: '/' });
}

export async function doLogout() {
  await signOut({ redirectTo: '/' });
}

export async function doCredentialsLogin(formData) {
  try {
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    return response;
  } catch (err) {
    throw new Error(err);
  }
}
