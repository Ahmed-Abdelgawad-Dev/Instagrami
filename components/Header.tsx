import Link from "next/link"


function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7xl max-auto">
            <div className="flex items-center space-x-5">
                <img className="w-44 object-contain cursor-pointer"
                    src="http://links.papareact.com/yvf" alt="Medium Logo" />
                <div className="inline-flex items-center space-x-5">
                    <h3>about</h3>
                    <h3>contact</h3>
                    <h3
                        className="text-white m-2 bg-green-600 px-4 py-1 rounded-full"
                    >follow</h3>
                </div>
            </div>
            <div className="hidden md:flex items-center text-green-600 space-x-5">
                <h3>Sign in</h3>
                <h3 className="border border-green-600 rounded-full px-4 py-1">Get started</h3>
            </div>
        </header>
    )
}




export default Header