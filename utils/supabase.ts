import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://yggunbfashloqchooeio.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log(supabaseKey)
export const clicked_button = async() =>{
    const supabase = createClient(supabaseUrl, supabaseKey)
    console.log(supabase)
    signInWithGithub(supabase)
}

async function signInWithGithub(supabase) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    console.log(data)
    if(error){
        console.log(error);
    }
}