import { createClient } from '@supabase/supabase-js'
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export const clicked_button = async() =>{
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
    return supabase;
}

export async function signInWithGithub(supabase,origin) {
    // const {data,error} = supabase.auth.signInWithOAuth({
    //     provider:"github",
    //     options: {
    //         redirectTo: origin,
    //     },
    // })
    // if(error){
    //     console.log(error)
    // }else{
    //     redirect(data.url)
    // }
    console.log(supabase)
    console.log(origin);
}

