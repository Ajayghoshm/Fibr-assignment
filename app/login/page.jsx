'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"


const Login = () => {


    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])
    const router = useRouter()

    const login = async (userName, password) => {
        if(userName != 'dashboard'){
            setError(state => { return ({ ...state, 'username': "Please enter correct credentials" }) })
        }
        if(password != 'password'){
            setError(state => { return ({ ...state, 'password': "Please enter correct credentials" }) })
        }
        if (userName == 'dashboard' && password == 'password') {
            localStorage.setItem('auth', true)
            router.push('/dashboard')
        }
       
    };

    const onTextChange = (type, e) => {

            if (type == 'password') {
                if (e.target.value == '') {
                    setError(state => { return ({ ...state, [type]: "Please enter a value" }) })
                }
                else{
                    setError(state => { return ({ ...state, 'password': "" }) })
                }
                
                setPassword(e.target.value)
            }
            if (type == 'username') {
                if (e.target.value == '') {
                    setError(state => { return ({ ...state, [type]: "Please enter a value" }) })
                }
                else{
                    setError(state => { return ({ ...state, 'username': "" }) })
                }
                setUserName(e.target.value)
            }
    }


    return (<section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png" className="w-8 h-8 mr-2" alt="logo" />
                Blog Page Creator
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <div className="space-y-4 md:space-y-6" >
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <input name="email" id="email" className="bg-gray-50 border border-gray-300 
                            text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="dashboard" value={userName} onChange={(e) => onTextChange('username', e)} />
                            {error.username && <p className="text-xs text-red-500">{error.username}</p>}
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" placeholder="••••••••" className="bg-gray-50 border 
                            border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block 
                            w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={password} 
                                onChange={(e) => onTextChange('password', e)} />
                                {error.password && <p className="text-xs text-red-500">{error.password}</p>}
                        </div>

                        <button onClick={() => { login(userName, password) }}
                            className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Login