import {Button, Checkbox} from "flowbite-react";
import {Input} from "postcss";

export default function NewsLetterModal() {
    return(
        <div>
            <div className="flex justify-center py-10">
                <div className="max-w-md w-full">
                    <h1 className="text-3xl font-bold text-center mb-6">Sign up to receive SPECtrum</h1>
                    <p className="text-sm text-center mb-8">
                        Subscribe to receive monthly updates on upcoming SPEC events, volunteer opportunities, and important news on
                        environmental topics.
                    </p>
                    <form className="grid gap-4">
                        <label className="block" htmlFor="email">
                            <span className="block text-sm font-medium mb-1">Email Address</span>
                            <Input id="email" placeholder="Enter your email" type="email" />
                        </label>
                        <label className="block" htmlFor="first-name">
                            <span className="block text-sm font-medium mb-1">First Name</span>
                            <Input id="first-name" placeholder="Enter your first name" type="text" />
                        </label>
                        <label className="block" htmlFor="last-name">
                            <span className="block text-sm font-medium mb-1">Last Name</span>
                            <Input id="last-name" placeholder="Enter your last name" type="text" />
                        </label>
                        <fieldset>
                            <legend className="block text-sm font-medium mb-1">Your interests</legend>
                            <div className="flex flex-col gap-2">
                                <Checkbox id="food-security" />
                                <label className="text-sm" htmlFor="food-security">
                                    Food Security, Biodiversity, and Urban Agriculture
                                </label>
                                <Checkbox id="renewable-energy" />
                                <label className="text-sm" htmlFor="renewable-energy">
                                    Renewable Energy
                                </label>
                                <Checkbox id="zero-waste" />
                                <label className="text-sm" htmlFor="zero-waste">
                                    Zero Waste
                                </label>
                                <Checkbox id="climate-action" />
                                <label className="text-sm" htmlFor="climate-action">
                                    Climate Action
                                </label>
                                <Checkbox id="volunteering" />
                                <label className="text-sm" htmlFor="volunteering">
                                    Volunteering
                                </label>
                            </div>
                        </fieldset>
                        <Button className="mt-4">Subscribe</Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

function MinusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
        </svg>
    )
}


function PlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}