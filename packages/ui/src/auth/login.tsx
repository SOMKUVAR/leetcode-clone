import { FC } from "react";
import { Input, Card } from "../ui"

interface LoginProps {
  onLogin : (username : string, password : string) => void;
  onRegister : () => void;
}


export const Login : FC<LoginProps> = ({onRegister, onLogin}) => {
    return (
        <Card>
            <form >
                <div className="ui-font-semibold ui-text-lg hover:ui-text-neutral-800 dark:ui-text-neutral-200 ui-text-center ui-mb-6">
                    Neetcode
                </div>
                <div className="ui-mb-5">
                    <Input type="text" placeholder="Username" />
                </div>
                <div className="ui-mb-5">
                    <Input type="text" placeholder="Password" />
                </div>
                <div className="ui-flex ui-items-center ui-justify-between ui-mb-6">
                    <button className="ui-bg-[#374742] ui-w-full hover:ui-bg-[#546e7a] ui-text-white ui-font-bold ui-py-2 ui-px-4 ui-rounded focus:ui-outline-none focus:ui-shadow-outline" type="button">
                        Sign In
                    </button>
                </div>
                <div className="ui-flex ui-items-center ui-justify-center ui-text-sm">
                    <p className="ui-text-gray-700">New user here</p>
                    <div className="ui-font-medium ui-ml-1 ui-underline ui-underline-offset-1" >Register</div>
                </div>

            </form>
        </Card>
    )
}
