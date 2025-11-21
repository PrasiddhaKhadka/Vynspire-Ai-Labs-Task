import { login_bg } from "../assets/images";

function LoginScreenImage() {
return (
    <div className="w-full h-full flex items-center justify-center p-5">
        <div className="relative w-2/3  overflow-hidden rounded-3xl">
            <div className="w-full h-full rounded-3xl overflow-hidden">
                <img
                src={login_bg}
                alt="ui"
                className="w-full h-full object-cover rounded-3xl animate-zoomSlow"
                />
            </div>
        </div>
    </div>
);
}

export default LoginScreenImage