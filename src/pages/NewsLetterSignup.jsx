import { Button, Checkbox, TextInput } from "flowbite-react";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

export default function NewsLetterSignUp() {
  return (
    <div className="mt-28">
      <Helmet>
        <title>
          Newsletter Signup - Movement towards Peace And Development Agency
          (MoPADA-SL)
        </title>
        <meta
          name="description"
          content="Sign up for our newsletter to receive updates on our latest news and events."
        />
      </Helmet>
      <Section label="NewsLetterSignUp" />
      <div className="flex justify-center py-10">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Sign up to receive MoPADA SL
          </h1>
          <p className="text-center mb-8">
            Subscribe to receive monthly updates on upcoming MoPADA SK events,
            volunteer opportunities, and important news on environmental topics.
          </p>
          <div className="text-left">
            <form className="grid gap-4">
              <label className="block" htmlFor="email">
                <span className="block text-sm font-medium mb-1">
                  Email Address
                </span>
                <TextInput
                  id="email"
                  placeholder="Email Address"
                  type="email"
                />
              </label>
              <label className="block" htmlFor="first-name">
                <span className="block text-sm font-medium mb-1">
                  First Name
                </span>
                <TextInput
                  id="first-name"
                  placeholder="First Name"
                  type="text"
                />
              </label>
              <label className="block" htmlFor="last-name">
                <span className="block text-sm font-medium mb-1">
                  Last Name
                </span>
                <TextInput id="last-name" placeholder="Last Name" type="text" />
              </label>
              <fieldset>
                <legend className="block text-sm font-medium mb-1">
                  Your interests
                </legend>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-food" />
                    <label className="text-sm" htmlFor="interest-food">
                      Food Security, Biodiversity, and Urban Agriculture
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-renewable" />
                    <label className="text-sm" htmlFor="interest-renewable">
                      Renewable Energy
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-zero-waste" />
                    <label className="text-sm" htmlFor="interest-zero-waste">
                      Zero Waste
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-climate" />
                    <label className="text-sm" htmlFor="interest-climate">
                      Climate Action
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="interest-volunteering" />
                    <label className="text-sm" htmlFor="interest-volunteering">
                      Volunteering
                    </label>
                  </div>
                </div>
              </fieldset>
              <Button className="w-full bg-primary">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
