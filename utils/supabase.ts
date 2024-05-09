import { createClient } from '@supabase/supabase-js'

export const clicked_button = async() =>{
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
    console.log(supabase)
    signInWithGithub(supabase)
}

async function signInWithGithub(supabase) {
    // const { data, error } = await supabase.auth.signInWithOAuth({
    //   provider: 'github',
    // })
    // console.log(data)
    // if(error){
    //     console.log(error);
    // }

    
    let { data: test, error } = await supabase
    .from('test')
    .select('*')
    console.log(test);
    if(error){
        console.log("error");
        console.log(error);
    }

}