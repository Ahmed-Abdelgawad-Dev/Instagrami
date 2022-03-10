export default function AfterHeader() {
    return (
        <div
            className="flex justify-between items-center bg-yellow-400
                border-y border-black py-10 lg:py-0"
        >
            <div className="px-10 space-y-5">
                <h1 className="text-6xl max-w-xl font-serif">
                    <span className="underline decoration-black decoration-5">
                        Medium
                    </span>{" "}
                    connect with the best information out there.
                </h1>
                <h1>
                    Add whatever topic you would like with ease and share
                    information with the world.
                </h1>
            </div>
            <img
                className="hidden md:inline-flex h-32 lg:h-full"
                src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
                alt="Mediumize Logo"
            />
        </div>
    );
}
